import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, Clock, MapPin, Users, Utensils, Award, ArrowRight } from 'lucide-react';

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

const HomePage = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: THEME.colors.background }}>
      {/* Hero Section */}
      <div style={{
        position: 'relative',
        height: '100vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(44, 24, 16, 0.8) 0%, rgba(44, 24, 16, 0.4) 100%)'
        }}></div>
        
        <div style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '0 20px',
          maxWidth: '800px'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(196, 163, 90, 0.9)',
            color: THEME.colors.primary,
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: '600',
            marginBottom: '24px',
            fontFamily: THEME.fonts.body
          }}>
            <Heart size={16} />
            Handcrafted with Love by Sheila
          </div>
          
          <h1 style={{
            fontSize: 'clamp(42px, 6vw, 72px)',
            fontFamily: THEME.fonts.heading,
            color: '#ffffff',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            marginBottom: '24px',
            lineHeight: '1.1'
          }}>
            Artisan Charcuterie<br />
            <span style={{ color: THEME.colors.accent }}>for Every Occasion</span>
          </h1>
          
          <p style={{
            fontSize: '20px',
            color: '#ffffff',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            marginBottom: '40px',
            fontFamily: THEME.fonts.body,
            maxWidth: '600px',
            margin: '0 auto 40px'
          }}>
            Custom cheese and meat boards featuring locally-sourced ingredients, artisan cheeses, and premium cured meats. Perfect for parties, weddings, and intimate gatherings.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button style={{
              backgroundColor: THEME.colors.accent,
              color: THEME.colors.primary,
              padding: '16px 32px',
              border: 'none',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: '600',
              cursor: 'pointer',
              fontFamily: THEME.fonts.body,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'transform 0.2s ease'
            }}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
            >
              Request a Quote <ArrowRight size={18} />
            </button>
            <button style={{
              backgroundColor: 'transparent',
              color: '#ffffff',
              padding: '16px 32px',
              border: '2px solid #ffffff',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: '600',
              cursor: 'pointer',
              fontFamily: THEME.fonts.body
            }}>
              View Gallery
            </button>
          </div>
        </div>
      </div>

      {/* Stats Strip */}
      <div style={{
        backgroundColor: THEME.colors.primary,
        color: '#ffffff',
        padding: '40px 20px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            textAlign: 'center'
          }}>
            <div>
              <div style={{ fontSize: '36px', fontFamily: THEME.fonts.heading, marginBottom: '8px' }}>500+</div>
              <div style={{ fontSize: '16px', opacity: '0.8' }}>Happy Events Catered</div>
            </div>
            <div>
              <div style={{ fontSize: '36px', fontFamily: THEME.fonts.heading, marginBottom: '8px' }}>15+</div>
              <div style={{ fontSize: '16px', opacity: '0.8' }}>Local Artisan Partners</div>
            </div>
            <div>
              <div style={{ fontSize: '36px', fontFamily: THEME.fonts.heading, marginBottom: '8px' }}>4.9★</div>
              <div style={{ fontSize: '16px', opacity: '0.8' }}>Average Customer Rating</div>
            </div>
            <div>
              <div style={{ fontSize: '36px', fontFamily: THEME.fonts.heading, marginBottom: '8px' }}>24hr</div>
              <div style={{ fontSize: '16px', opacity: '0.8' }}>Order Notice Preferred</div>
            </div>
          </div>
        </div>
      </div>

      {/* Board Sizes Section */}
      <div style={{
        padding: `${THEME.spacing.sectionPadding} 20px`,
        backgroundColor: '#ffffff'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontFamily: THEME.fonts.heading,
              color: THEME.colors.primary,
              marginBottom: '16px'
            }}>
              Perfect Size for Every Gathering
            </h2>
            <p style={{
              fontSize: '18px',
              color: THEME.colors.text,
              opacity: '0.7',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              From intimate date nights to grand celebrations, we have the perfect board size for your occasion
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                title: 'Small Board',
                serves: 'Serves 2-4',
                price: 'Starting at $45',
                image: 'https://images.unsplash.com/photo-1599125785194-c0179136ad75?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                occasions: ['Date Night', 'Small Gathering']
              },
              {
                title: 'Medium Board',
                serves: 'Serves 6-10',
                price: 'Starting at $85',
                image: 'https://images.unsplash.com/photo-1571197119297-4a6707f2de9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                occasions: ['Baby Showers', 'Family Dinner'],
                popular: true
              },
              {
                title: 'Large Board',
                serves: 'Serves 12-20',
                price: 'Starting at $125',
                image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                occasions: ['Parties', 'Corporate Events']
              },
              {
                title: 'Grazing Table',
                serves: 'Serves 25+',
                price: 'Starting at $200',
                image: 'https://images.unsplash.com/photo-1600555379765-f82335c6b05f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                occasions: ['Weddings', 'Large Events']
              }
            ].map((board, index) => (
              <div key={index} style={{
                position: 'relative',
                backgroundColor: THEME.colors.surface,
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {board.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    backgroundColor: THEME.colors.accent,
                    color: THEME.colors.primary,
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '600',
                    zIndex: 10
                  }}>
                    Most Popular
                  </div>
                )}
                
                <div style={{
                  height: '200px',
                  backgroundImage: `url(${board.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}></div>
                
                <div style={{ padding: '24px' }}>
                  <h3 style={{
                    fontSize: '24px',
                    fontFamily: THEME.fonts.heading,
                    color: THEME.colors.primary,
                    marginBottom: '8px'
                  }}>
                    {board.title}
                  </h3>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '12px'
                  }}>
                    <Users size={16} color={THEME.colors.accent} />
                    <span style={{ fontSize: '16px', color: THEME.colors.text }}>{board.serves}</span>
                  </div>
                  
                  <div style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: THEME.colors.accent,
                    marginBottom: '16px'
                  }}>
                    {board.price}
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    gap: '8px',
                    flexWrap: 'wrap',
                    marginBottom: '20px'
                  }}>
                    {board.occasions.map((occasion, idx) => (
                      <span key={idx} style={{
                        backgroundColor: THEME.colors.background,
                        color: THEME.colors.text,
                        padding: '4px 8px',
                        borderRadius: '12px',
                        fontSize: '12px'
                      }}>
                        {occasion}
                      </span>
                    ))}
                  </div>
                  
                  <button style={{
                    width: '100%',
                    backgroundColor: THEME.colors.primary,
                    color: '#ffffff',
                    padding: '12px',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}>
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ingredients Showcase */}
      <div style={{
        padding: `${THEME.spacing.sectionPadding} 20px`,
        backgroundColor: THEME.colors.background
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '60px',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontFamily: THEME.fonts.heading,
                color: THEME.colors.primary,
                marginBottom: '24px'
              }}>
                Premium Ingredients,<br />
                <span style={{ color: THEME.colors.accent }}>Locally Sourced</span>
              </h2>
              
              <p style={{
                fontSize: '18px',
                color: THEME.colors.text,
                opacity: '0.8',
                marginBottom: '32px',
                lineHeight: '1.6'
              }}>
                Every board is carefully curated with the finest artisan cheeses, premium cured meats, and fresh accompaniments from trusted local suppliers.
              </p>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '24px',
                marginBottom: '32px'
              }}>
                {[
                  'Artisan Cheeses',
                  'Cured Meats',
                  'Fresh Fruits',
                  'Mixed Nuts',
                  'Local Honey',
                  'Gourmet Olives',
                  'Artisan Crackers',
                  'House-made Jams'
                ].map((ingredient, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: THEME.colors.accent,
                      borderRadius: '50%'
                    }}></div>
                    <span style={{ fontSize: '16px', color: THEME.colors.text }}>{ingredient}</span>
                  </div>
                ))}
              </div>
              
              <button style={{
                backgroundColor: THEME.colors.accent,
                color: THEME.colors.primary,
                padding: '16px 32px',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Award size={18} />
                Learn About Our Sources
              </button>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px'
            }}>
              <div style={{
                height: '200px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1486297678162-eb2a19b0a32a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '12px'
              }}></div>
              <div style={{
                height: '200px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1544737151-6e4b99de2e14?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '12px',
                marginTop: '32px'
              }}></div>
              <div style={{
                height: '200px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '12px',
                marginTop: '-32px'
              }}></div>
              <div style={{
                height: '200px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1576398289164-c48dc021b4e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '12px'
              }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div style={{
        padding: `${THEME.spacing.sectionPadding} 20px`,
        backgroundColor: '#ffffff'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontFamily: THEME.fonts.heading,
              color: THEME.colors.primary,
              marginBottom: '16px'
            }}>
              Simple Ordering Process
            </h2>
            <p style={{
              fontSize: '18px',
              color: THEME.colors.text,
              opacity: '0.7',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              From consultation to delivery, we make it easy to create the perfect charcuterie experience
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px'
          }}>
            {[
              {
                step: '01',
                icon: <Utensils size={32} />,
                title: 'Choose Your Board',
                description: 'Select the perfect size and style for your event from our curated options'
              },
              {
                step: '02',
                icon: <Heart size={32} />,
                title: 'Customize & Quote',
                description: 'Tell us about dietary preferences, theme, and special requests for personalization'
              },
              {
                step: '03',
                icon: <Clock size={32} />,
                title: 'We Craft with Love',
                description: 'Sheila handcrafts your board with premium ingredients, usually within 24 hours'
              },
              {
                step: '04',
                icon: <MapPin size={32} />,
                title: 'Pickup or Delivery',
                description: 'Choose convenient pickup or local delivery to make your event perfect'
              }
            ].map((step, index) => (
              <div key={index} style={{
                textAlign: 'center',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '-10px',
                  fontSize: '60px',
                  fontFamily: THEME.fonts.heading,
                  color: THEME.colors.background,
                  fontWeight: 'bold',
                  zIndex: 1
                }}>
                  {step.step}
                </div>
                
                <div style={{
                  backgroundColor: THEME.colors.accent,
                  color: THEME.colors.primary,
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  position: 'relative',
                  zIndex: 2
                }}>
                  {step.icon}
                </div>
                
                <h3 style={{
                  fontSize: '20px',
                  fontFamily: THEME.fonts.heading,
                  color: THEME.colors.primary,
                  marginBottom: '12px'
                }}>
                  {step.title}
                </h3>
                
                <p style={{
                  fontSize: '16px',
                  color: THEME.colors.text,
                  opacity: '0.8',
                  lineHeight: '1.5'
                }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div style={{
        padding: `${THEME.spacing.sectionPadding} 20px`,
        backgroundColor: THEME.colors.primary,
        color: '#ffffff',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontFamily: THEME.fonts.heading,
            marginBottom: '24px',
            lineHeight: '1.2'
          }}>
            Ready to Create Something<br />
            <span style={{ color: THEME.colors.accent }}>Delicious?</span>
          </h2>
          
          <p style={{
            fontSize: '20px',
            opacity: '0.9',
            marginBottom: '40px',
            maxWidth: '600px',
            margin: '0 auto 40px'
          }}>
            Let Sheila craft the perfect charcuterie experience for your next gathering. Every board is made with love and the finest ingredients.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button style={{
              backgroundColor: THEME.colors.accent,
              color: THEME.colors.primary,
              padding: '18px 36px',
              border: 'none',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: '600',
              cursor: 'pointer',
              fontFamily: THEME.fonts.body,
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              Request a Quote <ArrowRight size={18} />
            </button>
            <button style={{
              backgroundColor: 'transparent',
              color: '#ffffff',
              padding: '18px 36px',
              border: '2px solid #ffffff',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: '600',
              cursor: 'pointer',
              fontFamily: THEME.fonts.body
            }}>
              Call (555) 123-4567
            </button>
          </div>
          
          <div style={{
            marginTop: '40px',
            paddingTop: '40px',
            borderTop: '1px solid rgba(255,255,255,0.2)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '32px',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: '0.8' }}>
              <Clock size={16} />
              <span>24hr notice preferred</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: '0.8' }}>
              <MapPin size={16} />
              <span>Local delivery available</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: '0.8' }}>
              <Heart size={16} />
              <span>Made with love</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;