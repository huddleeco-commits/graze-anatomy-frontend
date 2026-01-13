import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, Heart, Camera, MapPin, Clock } from 'lucide-react';

const TestimonialsPage = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      event: "Wedding Reception",
      rating: 5,
      text: "Sheila's grazing table was the absolute highlight of our wedding! Our guests couldn't stop raving about the incredible selection of artisan cheeses and perfectly cured meats. Everything was arranged so beautifully - it looked like art!",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      boardSize: "Grazing Table (75 guests)",
      location: "Downtown Venue"
    },
    {
      id: 2,
      name: "Marcus Chen",
      event: "Corporate Event",
      rating: 5,
      text: "We ordered three large boards for our quarterly meeting and they were phenomenal. The locally-sourced ingredients really made a difference - you could taste the quality in every bite. Professional presentation too!",
      image: "https://images.unsplash.com/photo-1615887023516-7a4ba0e9e5a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      boardSize: "3 Large Boards",
      location: "Tech Office"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      event: "Baby Shower",
      rating: 5,
      text: "Sheila created the most adorable medium board for my baby shower. The fresh fruits were perfectly ripe, the honey was divine, and she even included some pregnancy-safe cheese options. Such thoughtful details!",
      image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      boardSize: "Medium Board",
      location: "Home Gathering"
    },
    {
      id: 4,
      name: "David Thompson",
      event: "Anniversary Dinner",
      rating: 5,
      text: "For our 25th anniversary, I wanted something special. Sheila's small board was perfect for an intimate evening. The artisan crackers, aged cheddar, and homemade jam created the most romantic atmosphere.",
      image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      boardSize: "Small Board",
      location: "Home Delivery"
    }
  ];

  const quickStats = [
    { number: "500+", label: "Happy Customers" },
    { number: "1000+", label: "Boards Created" },
    { number: "50+", label: "Local Ingredients" },
    { number: "4.9/5", label: "Average Rating" }
  ];

  return (
    <div style={{ backgroundColor: '#faf7f2', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        backgroundImage: 'linear-gradient(rgba(44, 24, 16, 0.7), rgba(44, 24, 16, 0.7)), url(https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            color: '#ffffff',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            What Our Customers Say
          </h1>
          <p style={{
            fontFamily: "'Lato', system-ui, sans-serif",
            fontSize: '1.2rem',
            color: '#ffffff',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            marginBottom: '30px',
            opacity: 0.9
          }}>
            Real stories from real people who experienced Sheila's handcrafted charcuterie magic
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
            {[1,2,3,4,5].map(star => (
              <Star key={star} size={24} style={{ color: '#c4a35a', fill: '#c4a35a' }} />
            ))}
            <span style={{
              color: '#ffffff',
              fontFamily: "'Lato', system-ui, sans-serif",
              fontSize: '1.1rem',
              marginLeft: '10px',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>
              4.9 out of 5 stars from 200+ reviews
            </span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '60px 20px', backgroundColor: '#2c1810' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            textAlign: 'center'
          }}>
            {quickStats.map((stat, index) => (
              <div key={index}>
                <div style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '2.5rem',
                  color: '#c4a35a',
                  fontWeight: 'bold',
                  marginBottom: '10px'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontFamily: "'Lato', system-ui, sans-serif",
                  fontSize: '1.1rem',
                  color: '#ffffff',
                  opacity: 0.9
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            color: '#2c1810',
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            Stories of Flavor & Joy
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px'
          }}>
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(44, 24, 16, 0.1)',
                transform: index % 2 === 0 ? 'translateY(0px)' : 'translateY(20px)',
                transition: 'transform 0.3s ease'
              }}>
                {/* Image */}
                <div style={{
                  height: '250px',
                  backgroundImage: `url(${testimonial.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    padding: '8px 12px',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}>
                    <Camera size={16} style={{ color: '#c4a35a' }} />
                    <span style={{
                      fontSize: '0.9rem',
                      color: '#2c1810',
                      fontFamily: "'Lato', system-ui, sans-serif"
                    }}>
                      Real Photo
                    </span>
                  </div>
                  
                  {/* Quote Icon */}
                  <div style={{
                    position: 'absolute',
                    bottom: '-25px',
                    left: '30px',
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#c4a35a',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 5px 15px rgba(196, 163, 90, 0.3)'
                  }}>
                    <Quote size={24} style={{ color: '#ffffff' }} />
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '40px 30px 30px' }}>
                  {/* Rating */}
                  <div style={{ display: 'flex', gap: '5px', marginBottom: '15px' }}>
                    {[1,2,3,4,5].map(star => (
                      <Star key={star} size={18} style={{ 
                        color: '#c4a35a', 
                        fill: star <= testimonial.rating ? '#c4a35a' : 'none' 
                      }} />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p style={{
                    fontFamily: "'Lato', system-ui, sans-serif",
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    color: '#2c1810',
                    marginBottom: '20px',
                    fontStyle: 'italic'
                  }}>
                    "{testimonial.text}"
                  </p>

                  {/* Customer Info */}
                  <div style={{
                    borderTop: '1px solid #f0f0f0',
                    paddingTop: '20px'
                  }}>
                    <div style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: '1.2rem',
                      color: '#2c1810',
                      fontWeight: 'bold',
                      marginBottom: '5px'
                    }}>
                      {testimonial.name}
                    </div>
                    <div style={{
                      fontFamily: "'Lato', system-ui, sans-serif",
                      fontSize: '0.9rem',
                      color: '#666',
                      marginBottom: '10px'
                    }}>
                      {testimonial.event}
                    </div>
                    
                    {/* Event Details */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Heart size={14} style={{ color: '#c4a35a' }} />
                        <span style={{
                          fontSize: '0.9rem',
                          color: '#666',
                          fontFamily: "'Lato', system-ui, sans-serif"
                        }}>
                          {testimonial.boardSize}
                        </span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <MapPin size={14} style={{ color: '#c4a35a' }} />
                        <span style={{
                          fontSize: '0.9rem',
                          color: '#666',
                          fontFamily: "'Lato', system-ui, sans-serif"
                        }}>
                          {testimonial.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Testimonial Section */}
      <section style={{
        backgroundColor: '#2c1810',
        padding: '80px 20px'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(1.8rem, 4vw, 2.3rem)',
            color: '#ffffff',
            marginBottom: '40px'
          }}>
            Why Customers Choose Sheila
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginTop: '50px'
          }}>
            {[
              {
                icon: Heart,
                title: "Made with Love",
                text: "Every board is handcrafted with passion and attention to detail that you can taste"
              },
              {
                icon: MapPin,
                title: "Local Ingredients",
                text: "We source from local farms and artisans to bring you the freshest, highest quality ingredients"
              },
              {
                icon: Clock,
                title: "Perfect Timing",
                text: "Reliable delivery and pickup options that work with your schedule, every time"
              }
            ].map((item, index) => (
              <div key={index} style={{
                textAlign: 'center'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#c4a35a',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px'
                }}>
                  <item.icon size={28} style={{ color: '#ffffff' }} />
                </div>
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.3rem',
                  color: '#c4a35a',
                  marginBottom: '15px'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontFamily: "'Lato', system-ui, sans-serif",
                  fontSize: '1rem',
                  color: '#ffffff',
                  opacity: 0.9,
                  lineHeight: '1.6'
                }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '80px 20px',
        backgroundColor: '#faf7f2',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            color: '#2c1810',
            marginBottom: '20px'
          }}>
            Ready to Create Your Own Story?
          </h2>
          <p style={{
            fontFamily: "'Lato', system-ui, sans-serif",
            fontSize: '1.1rem',
            color: '#666',
            marginBottom: '40px',
            lineHeight: '1.6'
          }}>
            From intimate gatherings to grand celebrations, let Sheila craft the perfect charcuterie experience for your special occasion.
          </p>

          <div style={{
            display: 'flex',
            flexDirection: window.innerWidth < 640 ? 'column' : 'row',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Link to="/order" style={{
              display: 'inline-block',
              backgroundColor: '#c4a35a',
              color: '#ffffff',
              padding: '15px 30px',
              borderRadius: '30px',
              textDecoration: 'none',
              fontFamily: "'Lato', system-ui, sans-serif",
              fontSize: '1.1rem',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              boxShadow: '0 5px 15px rgba(196, 163, 90, 0.3)',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              Order Now
            </Link>
            
            <Link to="/quote" style={{
              display: 'inline-block',
              backgroundColor: 'transparent',
              color: '#2c1810',
              padding: '15px 30px',
              borderRadius: '30px',
              textDecoration: 'none',
              fontFamily: "'Lato', system-ui, sans-serif",
              fontSize: '1.1rem',
              fontWeight: 'bold',
              border: '2px solid #2c1810',
              transition: 'all 0.3s ease',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              Request a Quote
            </Link>
          </div>

          <p style={{
            fontFamily: "'Lato', system-ui, sans-serif",
            fontSize: '0.9rem',
            color: '#666',
            marginTop: '30px',
            fontStyle: 'italic'
          }}>
            Starting at $45 • Small (2-4) • Medium (6-10) • Large (12-20) • Grazing Tables (25+)
          </p>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;