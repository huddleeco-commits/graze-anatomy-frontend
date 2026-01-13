import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Star, Clock, MapPin, Phone, Mail, Check, Plus } from 'lucide-react';

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

const PricingPage = () => {
  const [selectedSize, setSelectedSize] = useState('medium');
  const [selectedAddons, setSelectedAddons] = useState([]);

  const boardSizes = [
    {
      id: 'small',
      name: 'Intimate',
      serves: '2-4 people',
      basePrice: 45,
      description: 'Perfect for date nights and small gatherings',
      dimensions: '12" x 8"',
      image: 'https://images.unsplash.com/photo-1571197119282-7c4cb8a32dd2?w=400&h=300&fit=crop'
    },
    {
      id: 'medium',
      name: 'Gathering',
      serves: '6-10 people',
      basePrice: 85,
      description: 'Ideal for dinner parties and celebrations',
      dimensions: '16" x 12"',
      image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=300&fit=crop',
      popular: true
    },
    {
      id: 'large',
      name: 'Celebration',
      serves: '12-20 people',
      basePrice: 125,
      description: 'Great for weddings and corporate events',
      dimensions: '20" x 16"',
      image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop'
    },
    {
      id: 'grazing',
      name: 'Grazing Table',
      serves: '25+ people',
      basePrice: 200,
      description: 'Stunning centerpiece for large events',
      dimensions: '6ft table setup',
      image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&h=300&fit=crop'
    }
  ];

  const addons = [
    { id: 'premium-cheese', name: 'Premium Aged Cheeses', price: 15 },
    { id: 'exotic-meats', name: 'Exotic Cured Meats', price: 20 },
    { id: 'truffle-honey', name: 'Truffle Honey', price: 12 },
    { id: 'wine-pairing', name: 'Wine Pairing Guide', price: 10 },
    { id: 'wooden-board', name: 'Keep the Wooden Board', price: 25 },
    { id: 'fresh-flowers', name: 'Fresh Flower Garnish', price: 18 }
  ];

  const toggleAddon = (addonId) => {
    setSelectedAddons(prev => 
      prev.includes(addonId) 
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    );
  };

  const calculateTotal = () => {
    const basePrice = boardSizes.find(size => size.id === selectedSize)?.basePrice || 0;
    const addonsPrice = selectedAddons.reduce((total, addonId) => {
      const addon = addons.find(a => a.id === addonId);
      return total + (addon?.price || 0);
    }, 0);
    return basePrice + addonsPrice;
  };

  return (
    <div style={{ backgroundColor: THEME.colors.background, minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{ 
        position: 'relative',
        height: '60vh',
        backgroundImage: 'linear-gradient(rgba(44, 24, 16, 0.7), rgba(44, 24, 16, 0.5)), url(https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1200&h=800&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', padding: '0 20px' }}>
          <h1 style={{ 
            fontFamily: THEME.fonts.heading,
            fontSize: '3rem',
            color: '#ffffff',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            Artisan Charcuterie Boards
          </h1>
          <p style={{ 
            fontFamily: THEME.fonts.body,
            fontSize: '1.3rem',
            color: '#ffffff',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            marginBottom: '30px'
          }}>
            Handcrafted with love by Sheila • Locally-sourced ingredients • Made fresh for every occasion
          </p>
        </div>
      </div>

      {/* Board Sizes Selection */}
      <div style={{ 
        padding: `${THEME.spacing.sectionPadding}px 20px`,
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ 
            fontFamily: THEME.fonts.heading,
            fontSize: '2.5rem',
            color: THEME.colors.primary,
            marginBottom: '20px'
          }}>
            Choose Your Perfect Board
          </h2>
          <p style={{ 
            fontFamily: THEME.fonts.body,
            fontSize: '1.2rem',
            color: THEME.colors.text,
            opacity: 0.8
          }}>
            Each board is carefully curated with artisan cheeses, cured meats, fresh fruits, and gourmet accompaniments
          </p>
        </div>

        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          marginBottom: '60px'
        }}>
          {boardSizes.map((board) => (
            <div
              key={board.id}
              onClick={() => setSelectedSize(board.id)}
              style={{
                position: 'relative',
                backgroundColor: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: selectedSize === board.id 
                  ? `0 10px 30px rgba(196, 163, 90, 0.3), 0 0 0 3px ${THEME.colors.accent}`
                  : '0 10px 30px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: selectedSize === board.id ? 'translateY(-5px)' : 'translateY(0)'
              }}
            >
              {board.popular && (
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  backgroundColor: THEME.colors.accent,
                  color: 'white',
                  padding: '5px 12px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  zIndex: 2
                }}>
                  Most Popular
                </div>
              )}

              <div style={{
                height: '200px',
                backgroundImage: `url(${board.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  padding: '30px 20px 20px',
                  color: 'white'
                }}>
                  <h3 style={{
                    fontFamily: THEME.fonts.heading,
                    fontSize: '1.5rem',
                    margin: '0 0 5px 0'
                  }}>
                    {board.name}
                  </h3>
                  <p style={{
                    fontFamily: THEME.fonts.body,
                    fontSize: '0.9rem',
                    margin: '0',
                    opacity: 0.9
                  }}>
                    {board.serves}
                  </p>
                </div>
              </div>

              <div style={{ padding: '25px' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '15px'
                }}>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: THEME.colors.accent,
                    fontFamily: THEME.fonts.heading
                  }}>
                    ${board.basePrice}
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: THEME.colors.text,
                    opacity: 0.7
                  }}>
                    {board.dimensions}
                  </div>
                </div>
                
                <p style={{
                  fontFamily: THEME.fonts.body,
                  color: THEME.colors.text,
                  opacity: 0.8,
                  lineHeight: '1.5',
                  margin: '0'
                }}>
                  {board.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '20px',
          padding: '40px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          marginBottom: '60px'
        }}>
          <h3 style={{
            fontFamily: THEME.fonts.heading,
            fontSize: '2rem',
            color: THEME.colors.primary,
            marginBottom: '30px',
            textAlign: 'center'
          }}>
            Enhance Your Experience
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            {addons.map((addon) => (
              <div
                key={addon.id}
                onClick={() => toggleAddon(addon.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '20px',
                  border: selectedAddons.includes(addon.id) 
                    ? `2px solid ${THEME.colors.accent}`
                    : '2px solid #e5e7eb',
                  borderRadius: '15px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backgroundColor: selectedAddons.includes(addon.id) ? '#fef7e7' : 'transparent'
                }}
              >
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  border: selectedAddons.includes(addon.id) 
                    ? `2px solid ${THEME.colors.accent}`
                    : '2px solid #d1d5db',
                  backgroundColor: selectedAddons.includes(addon.id) ? THEME.colors.accent : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '15px',
                  flexShrink: 0
                }}>
                  {selectedAddons.includes(addon.id) && (
                    <Check size={14} color="white" />
                  )}
                </div>
                
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: THEME.fonts.body,
                    fontWeight: '600',
                    color: THEME.colors.text,
                    marginBottom: '2px'
                  }}>
                    {addon.name}
                  </div>
                  <div style={{
                    fontFamily: THEME.fonts.body,
                    color: THEME.colors.accent,
                    fontWeight: 'bold'
                  }}>
                    +${addon.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary & CTA */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
          gap: '40px',
          alignItems: 'start'
        }}>
          {/* Ingredients Showcase */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{
              fontFamily: THEME.fonts.heading,
              fontSize: '1.8rem',
              color: THEME.colors.primary,
              marginBottom: '25px'
            }}>
              What's Included
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '15px'
            }}>
              {[
                'Artisan Cheeses',
                'Cured Meats',
                'Fresh Seasonal Fruits',
                'Mixed Nuts',
                'Local Honey',
                'Olives & Cornichons',
                'Artisan Crackers',
                'House-made Jams'
              ].map((ingredient, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontFamily: THEME.fonts.body,
                  color: THEME.colors.text
                }}>
                  <Heart size={16} color={THEME.colors.accent} style={{ marginRight: '10px', flexShrink: 0 }} />
                  {ingredient}
                </div>
              ))}
            </div>

            <div style={{
              marginTop: '30px',
              padding: '20px',
              backgroundColor: THEME.colors.background,
              borderRadius: '15px',
              borderLeft: `4px solid ${THEME.colors.accent}`
            }}>
              <p style={{
                fontFamily: THEME.fonts.body,
                color: THEME.colors.text,
                fontStyle: 'italic',
                margin: '0',
                lineHeight: '1.6'
              }}>
                "Every board is thoughtfully arranged with locally-sourced ingredients and made fresh to order with love." - Sheila
              </p>
            </div>
          </div>

          {/* Order Summary */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            position: 'sticky',
            top: '20px'
          }}>
            <h3 style={{
              fontFamily: THEME.fonts.heading,
              fontSize: '1.8rem',
              color: THEME.colors.primary,
              marginBottom: '25px'
            }}>
              Order Summary
            </h3>

            <div style={{ marginBottom: '25px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '15px'
              }}>
                <span style={{ fontFamily: THEME.fonts.body, fontSize: '1.1rem' }}>
                  {boardSizes.find(s => s.id === selectedSize)?.name} Board
                </span>
                <span style={{ fontFamily: THEME.fonts.body, fontSize: '1.1rem', fontWeight: 'bold' }}>
                  ${boardSizes.find(s => s.id === selectedSize)?.basePrice}
                </span>
              </div>

              {selectedAddons.map(addonId => {
                const addon = addons.find(a => a.id === addonId);
                return (
                  <div key={addonId} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '10px',
                    paddingLeft: '20px'
                  }}>
                    <span style={{ 
                      fontFamily: THEME.fonts.body, 
                      fontSize: '0.9rem',
                      opacity: 0.8
                    }}>
                      + {addon.name}
                    </span>
                    <span style={{ 
                      fontFamily: THEME.fonts.body, 
                      fontSize: '0.9rem',
                      color: THEME.colors.accent,
                      fontWeight: 'bold'
                    }}>
                      +${addon.price}
                    </span>
                  </div>
                );
              })}
            </div>

            <div style={{
              borderTop: `2px solid ${THEME.colors.background}`,
              paddingTop: '20px',
              marginBottom: '30px'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ 
                  fontFamily: THEME.fonts.heading,
                  fontSize: '1.3rem',
                  color: THEME.colors.primary
                }}>
                  Total
                </span>
                <span style={{ 
                  fontFamily: THEME.fonts.heading,
                  fontSize: '2rem',
                  color: THEME.colors.accent,
                  fontWeight: 'bold'
                }}>
                  ${calculateTotal()}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <button style={{
                backgroundColor: THEME.colors.accent,
                color: 'white',
                border: 'none',
                borderRadius: '15px',
                padding: '18px',
                fontSize: '1.1rem',
                fontFamily: THEME.fonts.body,
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
              }}>
                <ShoppingCart size={20} />
                Order Now
              </button>

              <button style={{
                backgroundColor: 'transparent',
                color: THEME.colors.primary,
                border: `2px solid ${THEME.colors.primary}`,
                borderRadius: '15px',
                padding: '16px',
                fontSize: '1rem',
                fontFamily: THEME.fonts.body,
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                Request Custom Quote
              </button>
            </div>

            <div style={{
              marginTop: '25px',
              padding: '20px',
              backgroundColor: THEME.colors.background,
              borderRadius: '15px',
              textAlign: 'center'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Clock size={16} color={THEME.colors.accent} />
                  <span style={{ fontSize: '0.9rem', fontFamily: THEME.fonts.body }}>
                    24hr notice
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <MapPin size={16} color={THEME.colors.accent} />
                  <span style={{ fontSize: '0.9rem', fontFamily: THEME.fonts.body }}>
                    Local delivery
                  </span>
                </div>
              </div>
              
              <p style={{
                fontFamily: THEME.fonts.body,
                fontSize: '0.85rem',
                color: THEME.colors.text,
                opacity: 0.7,
                margin: '0',
                lineHeight: '1.4'
              }}>
                Free delivery within 15 miles • Pickup available • Custom arrangements welcome
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div style={{
        backgroundColor: THEME.colors.primary,
        color: 'white',
        padding: `${THEME.spacing.sectionPadding}px 20px`,
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: THEME.fonts.heading,
            fontSize: '2.2rem',
            marginBottom: '20px'
          }}>
            Ready to Order?
          </h2>
          <p style={{
            fontFamily: THEME.fonts.body,
            fontSize: '1.2rem',
            marginBottom: '40px',
            opacity: 0.9
          }}>
            Contact Sheila directly for custom orders, special dietary requirements, or questions about your perfect charcuterie experience.
          </p>

          <div style={{
            display: 'flex',
            flexDirection: window.innerWidth > 768 ? 'row' : 'column',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Phone size={20} />
              <span style={{ fontFamily: THEME.fonts.body, fontSize: '1.1rem' }}>
                (555) 123-4567
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Mail size={20} />
              <span style={{ fontFamily: THEME.fonts.body, fontSize: '1.1rem' }}>
                sheila@artisanboards.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;