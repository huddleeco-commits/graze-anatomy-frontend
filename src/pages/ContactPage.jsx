import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Heart, Star } from 'lucide-react';

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

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    boardSize: '',
    eventDate: '',
    guestCount: '',
    dietaryRestrictions: '',
    message: '',
    deliveryOption: 'pickup'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: THEME.colors.background,
      color: THEME.colors.text
    }}>
      {/* Hero Section with Contact Header */}
      <div style={{
        position: 'relative',
        height: '40vh',
        minHeight: '300px',
        backgroundImage: 'url("https://images.unsplash.com/photo-1544424440-6a4c3a43b00c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
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
          backgroundColor: 'rgba(44, 24, 16, 0.7)'
        }} />
        <div style={{
          position: 'relative',
          textAlign: 'center',
          color: '#ffffff',
          padding: '20px'
        }}>
          <h1 style={{
            fontFamily: THEME.fonts.heading,
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: '700',
            marginBottom: '16px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            Let's Create Something Beautiful
          </h1>
          <p style={{
            fontSize: '1.25rem',
            fontFamily: THEME.fonts.body,
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Ready to elevate your next gathering with handcrafted charcuterie boards made with love
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        padding: '60px 20px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth > 768 ? '1fr 400px' : '1fr',
          gap: '60px',
          alignItems: 'start'
        }}>
          {/* Contact Form */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 10px 40px rgba(44, 24, 16, 0.1)',
            border: `1px solid ${THEME.colors.accent}20`
          }}>
            <div style={{ marginBottom: '30px' }}>
              <h2 style={{
                fontFamily: THEME.fonts.heading,
                fontSize: '2.5rem',
                fontWeight: '700',
                marginBottom: '12px',
                color: THEME.colors.primary
              }}>
                Request Your Custom Board
              </h2>
              <p style={{
                fontSize: '1.1rem',
                color: '#666',
                fontFamily: THEME.fonts.body
              }}>
                Tell me about your vision and I'll create the perfect spread for your occasion
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 480 ? '1fr 1fr' : '1fr', gap: '20px' }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: THEME.colors.primary,
                    fontFamily: THEME.fonts.body
                  }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '12px',
                      fontSize: '16px',
                      fontFamily: THEME.fonts.body,
                      transition: 'border-color 0.3s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = THEME.colors.accent}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: THEME.colors.primary,
                    fontFamily: THEME.fonts.body
                  }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '12px',
                      fontSize: '16px',
                      fontFamily: THEME.fonts.body,
                      transition: 'border-color 0.3s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = THEME.colors.accent}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  />
                </div>
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '600',
                  color: THEME.colors.primary,
                  fontFamily: THEME.fonts.body
                }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '16px',
                    fontFamily: THEME.fonts.body,
                    transition: 'border-color 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = THEME.colors.accent}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 480 ? '1fr 1fr' : '1fr', gap: '20px' }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: THEME.colors.primary,
                    fontFamily: THEME.fonts.body
                  }}>
                    Event Type
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '12px',
                      fontSize: '16px',
                      fontFamily: THEME.fonts.body,
                      backgroundColor: '#ffffff',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = THEME.colors.accent}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  >
                    <option value="">Select an occasion</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="baby-shower">Baby Shower</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="intimate">Intimate Gathering</option>
                    <option value="holiday">Holiday Party</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: THEME.colors.primary,
                    fontFamily: THEME.fonts.body
                  }}>
                    Board Size *
                  </label>
                  <select
                    name="boardSize"
                    required
                    value={formData.boardSize}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '12px',
                      fontSize: '16px',
                      fontFamily: THEME.fonts.body,
                      backgroundColor: '#ffffff',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = THEME.colors.accent}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  >
                    <option value="">Choose your size</option>
                    <option value="small">Small (2-4 people) - from $45</option>
                    <option value="medium">Medium (6-10 people) - from $85</option>
                    <option value="large">Large (12-20 people) - from $165</option>
                    <option value="grazing">Grazing Table (25+ people) - from $350</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 480 ? '1fr 1fr' : '1fr', gap: '20px' }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: THEME.colors.primary,
                    fontFamily: THEME.fonts.body
                  }}>
                    Event Date
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '12px',
                      fontSize: '16px',
                      fontFamily: THEME.fonts.body,
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = THEME.colors.accent}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: THEME.colors.primary,
                    fontFamily: THEME.fonts.body
                  }}>
                    Guest Count
                  </label>
                  <input
                    type="number"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleInputChange}
                    placeholder="Number of guests"
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '12px',
                      fontSize: '16px',
                      fontFamily: THEME.fonts.body,
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = THEME.colors.accent}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  />
                </div>
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '12px',
                  fontWeight: '600',
                  color: THEME.colors.primary,
                  fontFamily: THEME.fonts.body
                }}>
                  Delivery Option
                </label>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="deliveryOption"
                      value="pickup"
                      checked={formData.deliveryOption === 'pickup'}
                      onChange={handleInputChange}
                      style={{ marginRight: '8px' }}
                    />
                    <span>Pickup (Free)</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="deliveryOption"
                      value="delivery"
                      checked={formData.deliveryOption === 'delivery'}
                      onChange={handleInputChange}
                      style={{ marginRight: '8px' }}
                    />
                    <span>Local Delivery (+$15)</span>
                  </label>
                </div>
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '600',
                  color: THEME.colors.primary,
                  fontFamily: THEME.fonts.body
                }}>
                  Dietary Restrictions or Preferences
                </label>
                <input
                  type="text"
                  name="dietaryRestrictions"
                  value={formData.dietaryRestrictions}
                  onChange={handleInputChange}
                  placeholder="Allergies, vegetarian, gluten-free, etc."
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '16px',
                    fontFamily: THEME.fonts.body,
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = THEME.colors.accent}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '600',
                  color: THEME.colors.primary,
                  fontFamily: THEME.fonts.body
                }}>
                  Special Requests or Vision
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your vision, favorite ingredients, theme, or any special requests..."
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '16px',
                    fontFamily: THEME.fonts.body,
                    resize: 'vertical',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = THEME.colors.accent}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                style={{
                  padding: '18px 36px',
                  backgroundColor: isSubmitted ? '#4ade80' : THEME.colors.accent,
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  fontFamily: THEME.fonts.body,
                  cursor: isSubmitted ? 'default' : 'pointer',
                  transition: 'all 0.3s ease',
                  transform: 'translateY(0)',
                  boxShadow: '0 4px 20px rgba(196, 163, 90, 0.3)'
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitted) {
                    e.target.style.backgroundColor = '#b8944f';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 25px rgba(196, 163, 90, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitted) {
                    e.target.style.backgroundColor = THEME.colors.accent;
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 20px rgba(196, 163, 90, 0.3)';
                  }
                }}
              >
                {isSubmitted ? '✓ Request Sent!' : 'Request Your Custom Quote'}
              </button>
            </form>
          </div>

          {/* Business Information Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {/* Contact Info Card */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: '30px',
              boxShadow: '0 10px 40px rgba(44, 24, 16, 0.1)',
              border: `1px solid ${THEME.colors.accent}20`
            }}>
              <h3 style={{
                fontFamily: THEME.fonts.heading,
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '20px',
                color: THEME.colors.primary
              }}>
                Get In Touch
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    backgroundColor: THEME.colors.accent,
                    borderRadius: '10px',
                    padding: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Phone size={18} color="#ffffff" />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.9rem', color: '#666', margin: '0' }}>Call or Text</p>
                    <p style={{ fontSize: '1.1rem', fontWeight: '600', margin: '0', color: THEME.colors.primary }}>
                      (555) 123-4567
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    backgroundColor: THEME.colors.accent,
                    borderRadius: '10px',
                    padding: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Mail size={18} color="#ffffff" />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.9rem', color: '#666', margin: '0' }}>Email</p>
                    <p style={{ fontSize: '1.1rem', fontWeight: '600', margin: '0', color: THEME.colors.primary }}>
                      hello@sheilaboards.com
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    backgroundColor: THEME.colors.accent,
                    borderRadius: '10px',
                    padding: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <MapPin size={18} color="#ffffff" />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.9rem', color: '#666', margin: '0' }}>Service Area</p>
                    <p style={{ fontSize: '1.1rem', fontWeight: '600', margin: '0', color: THEME.colors.primary }}>
                      Downtown & Surrounding Areas
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    backgroundColor: THEME.colors.accent,
                    borderRadius: '10px',
                    padding: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Clock size={18} color="#ffffff" />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.9rem', color: '#666', margin: '0' }}>Lead Time</p>
                    <p style={{ fontSize: '1.1rem', fontWeight: '600', margin: '0', color: THEME.colors.primary }}>
                      48-72 hours preferred
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Artisan Promise */}
            <div style={{
              backgroundColor: THEME.colors.primary,
              borderRadius: '20px',
              padding: '30px',
              color: '#ffffff',
              textAlign: 'center'
            }}>
              <Heart size={32} color={THEME.colors.accent} style={{ marginBottom: '16px', margin: '0 auto 16px' }} />
              <h4 style={{
                fontFamily: THEME.fonts.heading,
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '12px'
              }}>
                Made with Love
              </h4>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                opacity: '0.9',
                fontFamily: THEME.fonts.body
              }}>
                Every board is handcrafted with locally-sourced ingredients, artisan cheeses, and premium cured meats. 
                I pour my passion into creating beautiful, delicious experiences for your special moments.
              </p>
            </div>

            {/* Quick Order CTA */}
            <div style={{
              backgroundColor: `${THEME.colors.accent}15`,
              borderRadius: '20px',
              padding: '30px',
              textAlign: 'center',
              border: `2px dashed ${THEME.colors.accent}`
            }}>
              <h4 style={{
                fontFamily: THEME.fonts.heading,
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '12px',
                color: THEME.colors.primary
              }}>
                Need It Fast?
              </h4>
              <p style={{
                fontSize: '1rem',
                marginBottom: '20px',
                color: '#666',
                fontFamily: THEME.fonts.body
              }}>
                Call me directly for same-day orders or urgent requests
              </p>
              <a 
                href="tel:5551234567"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: THEME.colors.accent,
                  color: '#ffffff',
                  padding: '12px 24px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1rem',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div style={{
        backgroundColor: THEME.colors.primary,
        padding: '60px 20px',
        textAlign: 'center',
        color: '#ffffff'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '16px' }}>
            {[1,2,3,4,5].map(i => (
              <Star key={i} size={20} fill={THEME.colors.accent} color={THEME.colors.accent} />
            ))}
          </div>
          <h3 style={{
            fontFamily: THEME.fonts.heading,
            fontSize: '2rem',
            fontWeight: '700',
            marginBottom: '16px'
          }}>
            Join Over 200+ Happy Customers
          </h3>
          <p style={{
            fontSize: '1.1rem',
            opacity: '0.9',
            marginBottom: '30px',
            fontFamily: THEME.fonts.body
          }}>
            From intimate date nights to grand celebrations, I've been crafting memorable moments one board at a time
          </p>
          <Link 
            to="/gallery"
            style={{
              display: 'inline-block',
              backgroundColor: 'transparent',
              color: THEME.colors.accent,
              border: `2px solid ${THEME.colors.accent}`,
              padding: '14px 28px',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = THEME.colors.accent;
              e.target.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = THEME.colors.accent;
            }}
          >
            View My Gallery
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;