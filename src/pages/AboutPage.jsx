import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Award, Users, MapPin, Clock, Star, ChefHat, Leaf } from 'lucide-react';

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

const AboutPage = () => {
  return (
    <div style={{ backgroundColor: THEME.colors.background, minHeight: '100vh' }}>
      {/* Hero Section with Sheila's Story */}
      <section style={{ 
        position: 'relative',
        height: '90vh',
        backgroundImage: 'linear-gradient(rgba(44, 24, 16, 0.4), rgba(44, 24, 16, 0.6)), url("https://images.unsplash.com/photo-1553909489-cd47e0ef937f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 20px'
      }}>
        <div style={{ 
          textAlign: 'center', 
          color: '#ffffff',
          maxWidth: '800px',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}>
          <h1 style={{ 
            fontFamily: THEME.fonts.heading,
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: '700',
            marginBottom: '30px',
            lineHeight: '1.1'
          }}>
            Meet Sheila: Your Local
            <br />
            <span style={{ color: THEME.colors.accent }}>Charcuterie Artist</span>
          </h1>
          <p style={{ 
            fontSize: '1.3rem',
            lineHeight: '1.6',
            marginBottom: '40px',
            fontFamily: THEME.fonts.body
          }}>
            Crafting extraordinary culinary experiences, one artisan board at a time
          </p>
          <Link to="/order" style={{
            display: 'inline-block',
            backgroundColor: THEME.colors.accent,
            color: '#ffffff',
            padding: '16px 40px',
            borderRadius: '50px',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: '600',
            fontFamily: THEME.fonts.body,
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(196, 163, 90, 0.3)'
          }}>
            Request a Quote
          </Link>
        </div>
      </section>

      {/* Sheila's Story - Asymmetric Layout */}
      <section style={{ 
        padding: `${THEME.spacing.sectionPadding}px 20px`,
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '60px',
          alignItems: 'center'
        }}>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Sheila crafting charcuterie boards"
              style={{
                width: '100%',
                height: '500px',
                objectFit: 'cover',
                borderRadius: '20px',
                boxShadow: '0 20px 40px rgba(44, 24, 16, 0.1)'
              }}
            />
          </div>
          <div>
            <div style={{ 
              backgroundColor: THEME.colors.accent,
              width: '60px',
              height: '4px',
              marginBottom: '30px',
              borderRadius: '2px'
            }} />
            <h2 style={{ 
              fontFamily: THEME.fonts.heading,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: THEME.colors.primary,
              marginBottom: '30px',
              lineHeight: '1.2'
            }}>
              A Passion Born from Love
            </h2>
            <p style={{ 
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: THEME.colors.text,
              marginBottom: '25px',
              fontFamily: THEME.fonts.body
            }}>
              What started as creating beautiful spreads for family gatherings has blossomed into a thriving local business. Sheila's journey began in her own kitchen, experimenting with flavor combinations and presentation techniques that would make every gathering memorable.
            </p>
            <p style={{ 
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: THEME.colors.text,
              marginBottom: '35px',
              fontFamily: THEME.fonts.body
            }}>
              Today, she partners with local artisans, dairy farms, and specialty food producers to source the finest ingredients for your special occasions. Every board tells a story of craftsmanship, community, and culinary artistry.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Heart style={{ color: THEME.colors.accent, width: '24px', height: '24px' }} />
                <span style={{ fontFamily: THEME.fonts.body, fontWeight: '600' }}>Made with Love</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Leaf style={{ color: THEME.colors.accent, width: '24px', height: '24px' }} />
                <span style={{ fontFamily: THEME.fonts.body, fontWeight: '600' }}>Locally Sourced</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Pull Quote */}
      <section style={{ 
        backgroundColor: THEME.colors.primary,
        padding: `${THEME.spacing.sectionPadding}px 20px`,
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <blockquote style={{
            fontFamily: THEME.fonts.heading,
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            color: '#ffffff',
            lineHeight: '1.3',
            fontStyle: 'italic',
            position: 'relative'
          }}>
            "Every board I create is a canvas where flavors, textures, and colors come together to transform ordinary moments into extraordinary memories."
            <footer style={{
              fontFamily: THEME.fonts.body,
              fontSize: '1.1rem',
              color: THEME.colors.accent,
              marginTop: '30px',
              fontStyle: 'normal'
            }}>
              — Sheila, Founder & Charcuterie Artist
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Values Section - Large Text Blocks */}
      <section style={{ 
        padding: `${THEME.spacing.sectionPadding}px 20px`,
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{ 
          fontFamily: THEME.fonts.heading,
          fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
          color: THEME.colors.primary,
          textAlign: 'center',
          marginBottom: '80px'
        }}>
          What Drives Our Craft
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}>
            <div>
              <h3 style={{
                fontFamily: THEME.fonts.heading,
                fontSize: '2rem',
                color: THEME.colors.accent,
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <Award style={{ width: '32px', height: '32px' }} />
                Artisan Quality
              </h3>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: THEME.colors.text,
                fontFamily: THEME.fonts.body
              }}>
                We believe in the power of handcrafted excellence. Every cheese is carefully selected, every arrangement thoughtfully composed, and every detail meticulously planned to ensure your board exceeds expectations.
              </p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Artisan cheese selection"
              style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
                borderRadius: '15px'
              }}
            />
          </div>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Local farmers market"
              style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
                borderRadius: '15px',
                order: window.innerWidth < 768 ? 2 : -1
              }}
            />
            <div>
              <h3 style={{
                fontFamily: THEME.fonts.heading,
                fontSize: '2rem',
                color: THEME.colors.accent,
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <MapPin style={{ width: '32px', height: '32px' }} />
                Community First
              </h3>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: THEME.colors.text,
                fontFamily: THEME.fonts.body
              }}>
                Supporting local producers isn't just good business—it's our passion. We source from nearby farms, dairies, and specialty food makers, creating a network of flavor that celebrates our community's bounty.
              </p>
            </div>
          </div>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}>
            <div>
              <h3 style={{
                fontFamily: THEME.fonts.heading,
                fontSize: '2rem',
                color: THEME.colors.accent,
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <Users style={{ width: '32px', height: '32px' }} />
                Every Occasion
              </h3>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: THEME.colors.text,
                fontFamily: THEME.fonts.body
              }}>
                From intimate date nights to grand wedding celebrations, corporate events to baby showers—we understand that every gathering deserves something special. Our boards are designed to bring people together around exceptional food.
              </p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="People enjoying charcuterie"
              style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
                borderRadius: '15px'
              }}
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{ 
        backgroundColor: THEME.colors.surface,
        padding: `${THEME.spacing.sectionPadding}px 20px`
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ 
            fontFamily: THEME.fonts.heading,
            fontSize: 'clamp(2.2rem, 5vw, 3rem)',
            color: THEME.colors.primary,
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            How We Create Magic
          </h2>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: THEME.colors.accent,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 25px',
                color: '#ffffff'
              }}>
                <span style={{ fontSize: '1.5rem', fontWeight: '700' }}>1</span>
              </div>
              <h3 style={{
                fontFamily: THEME.fonts.heading,
                fontSize: '1.3rem',
                color: THEME.colors.primary,
                marginBottom: '15px'
              }}>
                Consultation
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: THEME.colors.text,
                fontFamily: THEME.fonts.body
              }}>
                We discuss your event, dietary preferences, and style to create the perfect board for your occasion.
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: THEME.colors.accent,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 25px',
                color: '#ffffff'
              }}>
                <span style={{ fontSize: '1.5rem', fontWeight: '700' }}>2</span>
              </div>
              <h3 style={{
                fontFamily: THEME.fonts.heading,
                fontSize: '1.3rem',
                color: THEME.colors.primary,
                marginBottom: '15px'
              }}>
                Sourcing
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: THEME.colors.text,
                fontFamily: THEME.fonts.body
              }}>
                Fresh ingredients are carefully sourced from local artisans and specialty producers just for your board.
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: THEME.colors.accent,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 25px',
                color: '#ffffff'
              }}>
                <span style={{ fontSize: '1.5rem', fontWeight: '700' }}>3</span>
              </div>
              <h3 style={{
                fontFamily: THEME.fonts.heading,
                fontSize: '1.3rem',
                color: THEME.colors.primary,
                marginBottom: '15px'
              }}>
                Crafting
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: THEME.colors.text,
                fontFamily: THEME.fonts.body
              }}>
                Each board is hand-assembled with attention to flavor balance, visual appeal, and artistic presentation.
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: THEME.colors.accent,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 25px',
                color: '#ffffff'
              }}>
                <span style={{ fontSize: '1.5rem', fontWeight: '700' }}>4</span>
              </div>
              <h3 style={{
                fontFamily: THEME.fonts.heading,
                fontSize: '1.3rem',
                color: THEME.colors.primary,
                marginBottom: '15px'
              }}>
                Delivery
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: THEME.colors.text,
                fontFamily: THEME.fonts.body
              }}>
                Your masterpiece arrives fresh and ready to impress, with convenient pickup or delivery options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ 
        padding: `${THEME.spacing.sectionPadding}px 20px`,
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{ 
          fontFamily: THEME.fonts.heading,
          fontSize: 'clamp(2.2rem, 5vw, 3rem)',
          color: THEME.colors.primary,
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          What Our Clients Say
        </h2>
        
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px'
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            padding: '40px',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(44, 24, 16, 0.08)',
            position: 'relative'
          }}>
            <div style={{ 
              display: 'flex', 
              marginBottom: '20px',
              gap: '5px'
            }}>
              {[1,2,3,4,5].map(star => (
                <Star key={star} style={{ 
                  width: '20px', 
                  height: '20px', 
                  fill: THEME.colors.accent,
                  color: THEME.colors.accent
                }} />
              ))}
            </div>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.7',
              color: THEME.colors.text,
              marginBottom: '25px',
              fontFamily: THEME.fonts.body,
              fontStyle: 'italic'
            }}>
              "Sheila's charcuterie board was the highlight of our wedding reception! The presentation was stunning and every single ingredient was perfection. Our guests are still talking about it months later."
            </p>
            <div>
              <strong style={{ color: THEME.colors.primary }}>Sarah & Michael</strong>
              <div style={{ color: THEME.colors.accent, fontSize: '0.9rem' }}>Wedding Reception</div>
            </div>
          </div>

          <div style={{
            backgroundColor: '#ffffff',
            padding: '40px',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(44, 24, 16, 0.08)',
            position: 'relative'
          }}>
            <div style={{ 
              display: 'flex', 
              marginBottom: '20px',
              gap: '5px'
            }}>
              {[1,2,3,4,5].map(star => (
                <Star key={star} style={{ 
                  width: '20px', 
                  height: '20px', 
                  fill: THEME.colors.accent,
                  color: THEME.colors.accent
                }} />
              ))}
            </div>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.7',
              color: THEME.colors.text,
              marginBottom: '25px',
              fontFamily: THEME.fonts.body,
              fontStyle: 'italic'
            }}>
              "We order from Sheila for all our corporate events now. The quality is consistently exceptional, and she always accommodates our dietary restrictions perfectly. Highly recommend!"
            </p>
            <div>
              <strong style={{ color: THEME.colors.primary }}>Jennifer L.</strong>
              <div style={{ color: THEME.colors.accent, fontSize: '0.9rem' }}>Corporate Events Manager</div>
            </div>
          </div>

          <div style={{
            backgroundColor: '#ffffff',
            padding: '40px',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(44, 24, 16, 0.08)',
            position: 'relative'
          }}>
            <div style={{ 
              display: 'flex', 
              marginBottom: '20px',
              gap: '5px'
            }}>
              {[1,2,3,4,5].map(star => (
                <Star key={star} style={{ 
                  width: '20px', 
                  height: '20px', 
                  fill: THEME.colors.accent,
                  color: THEME.colors.accent
                }} />
              ))}
            </div>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.7',
              color: THEME.colors.text,
              marginBottom: '25px',
              fontFamily: THEME.fonts.body,
              fontStyle: 'italic'
            }}>
              "The attention to detail is incredible. Every element on the board complemented the others perfectly. It was like having a gourmet restaurant experience at home!"
            </p>
            <div>
              <strong style={{ color: THEME.colors.primary }}>David Chen</strong>
              <div style={{ color: THEME.colors.accent, fontSize: '0.9rem' }}>Anniversary Celebration</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ 
        backgroundColor: THEME.colors.accent,
        padding: `${THEME.spacing.sectionPadding}px 20px`,
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ 
            fontFamily: THEME.fonts.heading,
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            color: '#ffffff',
            marginBottom: '25px',
            lineHeight: '1.2'
          }}>
            Ready to Create Something Beautiful?
          </h2>
          <p style={{ 
            fontSize: '1.2rem',
            lineHeight: '1.6',
            color: '#ffffff',
            marginBottom: '40px',
            fontFamily: THEME.fonts.body,
            opacity: '0.9'
          }}>
            Let's design the perfect charcuterie experience for your next gathering
          </p>
          <Link to="/order" style={{
            display: 'inline-block',
            backgroundColor: '#ffffff',
            color: THEME.colors.accent,
            padding: '18px 45px',
            borderRadius: '50px',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: '700',
            fontFamily: THEME.fonts.body,
            transition: 'all 0.3s ease',
            boxShadow: '0 6px 20px rgba(0,0,0,0.1)'
          }}>
            Request Your Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;