import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Users, Heart, Award, ArrowRight, Check } from 'lucide-react';

const THEME = {
  colors: { 
    primary: '#2c1810', 
    accent: '#c4a35a', 
    background: '#faf7f2', 
    text: '#2c1810', 
    surface: '#f8fafc' 
  },
  fonts: { heading: "'Playfair Display', Georgia, serif", body: "'Lato', system-ui, sans-serif" },
  spacing: { sectionPadding: '80px' }
};

const ServicesPage = () => {
  return (
    <div style={{ backgroundColor: THEME.colors.background, minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        height: '70vh', 
        backgroundImage: 'url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(135deg, rgba(44,24,16,0.8) 0%, rgba(196,163,90,0.4) 100%)' 
        }}></div>
        <div style={{ 
          position: 'relative', 
          textAlign: 'center', 
          padding: '0 20px',
          maxWidth: '800px'
        }}>
          <h1 style={{ 
            fontFamily: THEME.fonts.heading, 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            fontWeight: 'bold', 
            color: '#ffffff',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            marginBottom: '24px',
            lineHeight: '1.1'
          }}>
            Handcrafted Charcuterie Artistry
          </h1>
          <p style={{ 
            fontFamily: THEME.fonts.body, 
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', 
            color: '#ffffff',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            marginBottom: '40px',
            fontWeight: '300'
          }}>
            Sheila creates stunning artisan boards with locally-sourced ingredients, made with love for every occasion
          </p>
          <button style={{
            backgroundColor: THEME.colors.accent,
            color: 'white',
            padding: '16px 32px',
            border: 'none',
            borderRadius: '8px',
            fontFamily: THEME.fonts.body,
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(196,163,90,0.3)',
            transition: 'all 0.3s ease'
          }}>
            Request a Quote
          </button>
        </div>
      </section>

      {/* Board Sizes Section */}
      <section style={{ padding: `${THEME.spacing.sectionPadding}px 20px` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ 
              fontFamily: THEME.fonts.heading, 
              fontSize: 'clamp(2rem, 4vw, 3rem)', 
              color: THEME.colors.primary,
              marginBottom: '16px'
            }}>
              Perfect Boards for Every Gathering
            </h2>
            <p style={{ 
              fontFamily: THEME.fonts.body, 
              fontSize: '18px', 
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              From intimate date nights to grand celebrations, we craft the perfect board for your special moments
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '30px',
            marginBottom: '60px'
          }}>
            {[
              {
                size: 'Small Board',
                serves: '2-4 People',
                price: 'Starting at $45',
                image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                features: ['2-3 artisan cheeses', '2 cured meats', 'Seasonal fruits', 'Crackers & spreads'],
                icon: Heart
              },
              {
                size: 'Medium Board',
                serves: '6-10 People',
                price: 'Starting at $85',
                image: 'https://images.unsplash.com/photo-1571197119669-c7c71c2ba3c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                features: ['4-5 artisan cheeses', '3-4 cured meats', 'Variety of fruits & nuts', 'Premium crackers', 'Local honey'],
                icon: Users,
                popular: true
              },
              {
                size: 'Large Board',
                serves: '12-20 People',
                price: 'Starting at $145',
                image: 'https://images.unsplash.com/photo-1566842600175-97dca489844f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                features: ['6+ artisan cheeses', '5+ cured meats', 'Abundant fresh fruits', 'Gourmet olives', 'Artisan jams', 'Premium crackers'],
                icon: Award
              },
              {
                size: 'Grazing Table',
                serves: '25+ People',
                price: 'Starting at $225',
                image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                features: ['Custom table spread', 'Premium cheese selection', 'Artisan meat variety', 'Fresh fruit arrangements', 'Decorative elements'],
                icon: Star
              }
            ].map((board, index) => {
              const IconComponent = board.icon;
              return (
                <div key={index} style={{ 
                  position: 'relative',
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}>
                  {board.popular && (
                    <div style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      backgroundColor: THEME.colors.accent,
                      color: 'white',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      zIndex: 10
                    }}>
                      Most Popular
                    </div>
                  )}
                  
                  <div style={{ 
                    position: 'relative',
                    height: '200px',
                    backgroundImage: `url(${board.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}>
                    <div style={{ 
                      position: 'absolute',
                      bottom: '16px',
                      left: '16px',
                      backgroundColor: 'rgba(255,255,255,0.95)',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      backdropFilter: 'blur(8px)'
                    }}>
                      <IconComponent size={20} style={{ color: THEME.colors.accent }} />
                    </div>
                  </div>
                  
                  <div style={{ padding: '24px' }}>
                    <div style={{ marginBottom: '16px' }}>
                      <h3 style={{ 
                        fontFamily: THEME.fonts.heading,
                        fontSize: '24px',
                        color: THEME.colors.primary,
                        marginBottom: '4px'
                      }}>
                        {board.size}
                      </h3>
                      <p style={{ 
                        fontFamily: THEME.fonts.body,
                        color: '#666',
                        fontSize: '14px',
                        marginBottom: '8px'
                      }}>
                        {board.serves}
                      </p>
                      <p style={{ 
                        fontFamily: THEME.fonts.body,
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: THEME.colors.accent
                      }}>
                        {board.price}
                      </p>
                    </div>
                    
                    <div style={{ marginBottom: '24px' }}>
                      {board.features.map((feature, i) => (
                        <div key={i} style={{ 
                          display: 'flex',
                          alignItems: 'center',
                          marginBottom: '8px'
                        }}>
                          <Check size={16} style={{ color: THEME.colors.accent, marginRight: '8px' }} />
                          <span style={{ 
                            fontFamily: THEME.fonts.body,
                            fontSize: '14px',
                            color: '#666'
                          }}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <button style={{
                      width: '100%',
                      backgroundColor: board.popular ? THEME.colors.accent : 'transparent',
                      color: board.popular ? 'white' : THEME.colors.accent,
                      border: `2px solid ${THEME.colors.accent}`,
                      padding: '12px 24px',
                      borderRadius: '8px',
                      fontFamily: THEME.fonts.body,
                      fontSize: '16px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}>
                      Order Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ingredients Showcase */}
      <section style={{ 
        backgroundColor: 'white',
        padding: `${THEME.spacing.sectionPadding}px 20px`
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ 
              fontFamily: THEME.fonts.heading, 
              fontSize: 'clamp(2rem, 4vw, 3rem)', 
              color: THEME.colors.primary,
              marginBottom: '16px'
            }}>
              Premium Ingredients, Locally Sourced
            </h2>
            <p style={{ 
              fontFamily: THEME.fonts.body, 
              fontSize: '18px', 
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Every board features the finest artisan cheeses, cured meats, and seasonal accompaniments
            </p>
          </div>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                category: 'Artisan Cheeses',
                items: ['Aged Vermont Cheddar', 'Creamy Brie', 'Tangy Goat Cheese', 'Blue Cheese Crumbles'],
                image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
              },
              {
                category: 'Cured Meats',
                items: ['Prosciutto di Parma', 'Salami Selections', 'Chorizo', 'Pancetta'],
                image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
              },
              {
                category: 'Fresh Accompaniments',
                items: ['Seasonal Fruits', 'Mixed Olives', 'Honey & Jams', 'Artisan Crackers', 'Roasted Nuts'],
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
              }
            ].map((category, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{ 
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  backgroundImage: `url(${category.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  margin: '0 auto 24px',
                  border: `4px solid ${THEME.colors.accent}`
                }}></div>
                <h3 style={{ 
                  fontFamily: THEME.fonts.heading,
                  fontSize: '24px',
                  color: THEME.colors.primary,
                  marginBottom: '16px'
                }}>
                  {category.category}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {category.items.map((item, i) => (
                    <li key={i} style={{ 
                      fontFamily: THEME.fonts.body,
                      fontSize: '16px',
                      color: '#666',
                      marginBottom: '8px'
                    }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ordering Process */}
      <section style={{ 
        backgroundColor: THEME.colors.background,
        padding: `${THEME.spacing.sectionPadding}px 20px`
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ 
              fontFamily: THEME.fonts.heading, 
              fontSize: 'clamp(2rem, 4vw, 3rem)', 
              color: THEME.colors.primary,
              marginBottom: '16px'
            }}>
              Simple Ordering Process
            </h2>
          </div>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            alignItems: 'start'
          }}>
            {[
              {
                step: '01',
                title: 'Choose Your Board',
                description: 'Select the perfect size for your event and browse our curated options'
              },
              {
                step: '02', 
                title: 'Customize Details',
                description: 'Tell us about dietary preferences, themes, and special requests'
              },
              {
                step: '03',
                title: 'Schedule Delivery',
                description: 'Choose pickup or local delivery for your special day'
              },
              {
                step: '04',
                title: 'Enjoy & Share',
                description: 'Watch your guests delight in the artisan experience'
              }
            ].map((step, index) => (
              <div key={index} style={{ textAlign: 'center', position: 'relative' }}>
                {index < 3 && (
                  <div style={{
                    position: 'absolute',
                    top: '30px',
                    left: '70%',
                    width: '30%',
                    height: '2px',
                    backgroundColor: THEME.colors.accent,
                    opacity: 0.3,
                    display: window.innerWidth > 768 ? 'block' : 'none'
                  }}></div>
                )}
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: THEME.colors.accent,
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: THEME.fonts.heading,
                  fontSize: '20px',
                  fontWeight: 'bold',
                  margin: '0 auto 24px'
                }}>
                  {step.step}
                </div>
                <h3 style={{
                  fontFamily: THEME.fonts.heading,
                  fontSize: '24px',
                  color: THEME.colors.primary,
                  marginBottom: '12px'
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontFamily: THEME.fonts.body,
                  fontSize: '16px',
                  color: '#666',
                  lineHeight: '1.6'
                }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Occasions Section */}
      <section style={{ 
        padding: `${THEME.spacing.sectionPadding}px 20px`,
        backgroundColor: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ 
              fontFamily: THEME.fonts.heading, 
              fontSize: 'clamp(2rem, 4vw, 3rem)', 
              color: THEME.colors.primary,
              marginBottom: '16px'
            }}>
              Perfect for Every Occasion
            </h2>
          </div>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            {[
              { occasion: 'Weddings & Celebrations', image: 'https://images.unsplash.com/photo-1465014925804-7b9eecedff80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
              { occasion: 'Corporate Events', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
              { occasion: 'Baby Showers', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
              { occasion: 'Intimate Gatherings', image: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' }
            ].map((item, index) => (
              <div key={index} style={{ 
                position: 'relative',
                height: '200px',
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
                <div style={{ 
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(44,24,16,0.6) 0%, rgba(196,163,90,0.4) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <h3 style={{ 
                    fontFamily: THEME.fonts.heading,
                    fontSize: '24px',
                    color: 'white',
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                    textAlign: 'center'
                  }}>
                    {item.occasion}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        backgroundColor: THEME.colors.primary,
        padding: `${THEME.spacing.sectionPadding}px 20px`,
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ 
            fontFamily: THEME.fonts.heading, 
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            color: 'white',
            marginBottom: '24px'
          }}>
            Ready to Create Something Beautiful?
          </h2>
          <p style={{ 
            fontFamily: THEME.fonts.body, 
            fontSize: '18px', 
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '40px',
            lineHeight: '1.6'
          }}>
            Let Sheila craft the perfect charcuterie experience for your special occasion. Every board is made with love and attention to detail.
          </p>
          <div style={{ 
            display: 'flex', 
            gap: '16px', 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button style={{
              backgroundColor: THEME.colors.accent,
              color: 'white',
              padding: '16px 32px',
              border: 'none',
              borderRadius: '8px',
              fontFamily: THEME.fonts.body,
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              Request a Quote <ArrowRight size={20} />
            </button>
            <button style={{
              backgroundColor: 'transparent',
              color: 'white',
              padding: '16px 32px',
              border: '2px solid white',
              borderRadius: '8px',
              fontFamily: THEME.fonts.body,
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              View Gallery
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;