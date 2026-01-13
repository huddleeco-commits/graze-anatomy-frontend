import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, Clock, MapPin, Phone, Mail, Plus, Minus, Check, ArrowRight } from 'lucide-react';

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

const BookingPage = () => {
  const [selectedSize, setSelectedSize] = useState('medium');
  const [selectedOccasion, setSelectedOccasion] = useState('');
  const [customizations, setCustomizations] = useState([]);
  const [deliveryOption, setDeliveryOption] = useState('pickup');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    address: '',
    specialRequests: ''
  });

  const boardSizes = [
    {
      id: 'small',
      name: 'Petite Board',
      serves: '2-4 people',
      price: 45,
      description: 'Perfect for intimate date nights or small gatherings',
      image: 'https://images.unsplash.com/photo-1571197119297-4d76675c12b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'medium',
      name: 'Gathering Board',
      serves: '6-10 people',
      price: 85,
      description: 'Ideal for dinner parties and family celebrations',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      popular: true
    },
    {
      id: 'large',
      name: 'Celebration Board',
      serves: '12-20 people',
      price: 135,
      description: 'Perfect for weddings and corporate events',
      image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'grazing',
      name: 'Grazing Table',
      serves: '25+ people',
      price: 200,
      description: 'Spectacular centerpiece for large celebrations',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const occasions = [
    'Wedding', 'Corporate Event', 'Birthday Party', 'Baby Shower', 
    'Anniversary', 'Holiday Party', 'Date Night', 'Just Because'
  ];

  const addOns = [
    { id: 'truffle', name: 'Truffle Cheese Selection', price: 15 },
    { id: 'wine', name: 'Wine Pairing Guide', price: 10 },
    { id: 'chocolate', name: 'Artisan Chocolates', price: 12 },
    { id: 'flowers', name: 'Fresh Flower Garnish', price: 18 },
    { id: 'premium', name: 'Premium Meat Selection', price: 20 }
  ];

  const handleCustomizationToggle = (addOnId) => {
    setCustomizations(prev => 
      prev.includes(addOnId) 
        ? prev.filter(id => id !== addOnId)
        : [...prev, addOnId]
    );
  };

  const calculateTotal = () => {
    const basePrice = boardSizes.find(board => board.id === selectedSize)?.price || 0;
    const addOnTotal = customizations.reduce((total, addOnId) => {
      const addOn = addOns.find(a => a.id === addOnId);
      return total + (addOn?.price || 0);
    }, 0);
    const deliveryFee = deliveryOption === 'delivery' ? 15 : 0;
    return basePrice + addOnTotal + deliveryFee;
  };

  return (
    <div style={{ 
      backgroundColor: THEME.colors.background, 
      minHeight: '100vh',
      fontFamily: THEME.fonts.body 
    }}>
      {/* Hero Section */}
      <div style={{
        position: 'relative',
        height: '60vh',
        backgroundImage: 'linear-gradient(rgba(44, 24, 16, 0.4), rgba(44, 24, 16, 0.6)), url("https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <div style={{ padding: '0 20px', maxWidth: '800px' }}>
          <h1 style={{
            fontFamily: THEME.fonts.heading,
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '700',
            color: '#ffffff',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            marginBottom: '20px',
            lineHeight: '1.1'
          }}>
            Handcrafted with Love by Sheila
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#ffffff',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            marginBottom: '30px',
            opacity: 0.95
          }}>
            Artisan charcuterie boards made with locally-sourced ingredients for your special moments
          </p>
        </div>
      </div>

      {/* Booking Form Container */}
      <div style={{ 
        padding: '40px 20px',
        maxWidth: '1200px', 
        margin: '0 auto' 
      }}>
        {/* Board Size Selection */}
        <div style={{ marginBottom: '50px' }}>
          <h2 style={{
            fontFamily: THEME.fonts.heading,
            fontSize: '2.5rem',
            color: THEME.colors.primary,
            textAlign: 'center',
            marginBottom: '30px'
          }}>
            Choose Your Perfect Board
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            marginBottom: '30px'
          }}>
            {boardSizes.map(board => (
              <div
                key={board.id}
                onClick={() => setSelectedSize(board.id)}
                style={{
                  position: 'relative',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transform: selectedSize === board.id ? 'scale(1.02)' : 'scale(1)',
                  transition: 'all 0.3s ease',
                  boxShadow: selectedSize === board.id 
                    ? `0 10px 30px rgba(196, 163, 90, 0.3)` 
                    : '0 5px 15px rgba(0,0,0,0.1)',
                  border: selectedSize === board.id 
                    ? `3px solid ${THEME.colors.accent}` 
                    : '3px solid transparent'
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
                    fontSize: '0.85rem',
                    fontWeight: 'bold',
                    zIndex: 2
                  }}>
                    Most Popular
                  </div>
                )}
                
                <div style={{
                  height: '200px',
                  backgroundImage: `url("${board.image}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                    padding: '20px',
                    color: 'white'
                  }}>
                    <h3 style={{
                      fontFamily: THEME.fonts.heading,
                      fontSize: '1.5rem',
                      margin: '0 0 5px 0'
                    }}>
                      {board.name}
                    </h3>
                    <p style={{ margin: '0', opacity: 0.9 }}>
                      {board.serves}
                    </p>
                  </div>
                </div>
                
                <div style={{
                  padding: '20px',
                  backgroundColor: 'white'
                }}>
                  <p style={{
                    color: THEME.colors.text,
                    marginBottom: '15px',
                    lineHeight: '1.5'
                  }}>
                    {board.description}
                  </p>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{
                      fontFamily: THEME.fonts.heading,
                      fontSize: '1.5rem',
                      color: THEME.colors.accent,
                      fontWeight: 'bold'
                    }}>
                      ${board.price}
                    </span>
                    {selectedSize === board.id && (
                      <Check style={{ 
                        color: THEME.colors.accent, 
                        width: '24px', 
                        height: '24px' 
                      }} />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Occasion Selection */}
        <div style={{ marginBottom: '50px' }}>
          <h3 style={{
            fontFamily: THEME.fonts.heading,
            fontSize: '1.8rem',
            color: THEME.colors.primary,
            marginBottom: '20px'
          }}>
            What's the Occasion?
          </h3>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px'
          }}>
            {occasions.map(occasion => (
              <button
                key={occasion}
                onClick={() => setSelectedOccasion(occasion)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '25px',
                  border: selectedOccasion === occasion 
                    ? `2px solid ${THEME.colors.accent}` 
                    : '2px solid #e2e8f0',
                  backgroundColor: selectedOccasion === occasion 
                    ? THEME.colors.accent 
                    : 'white',
                  color: selectedOccasion === occasion 
                    ? 'white' 
                    : THEME.colors.text,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '0.95rem',
                  minHeight: '44px'
                }}
              >
                {occasion}
              </button>
            ))}
          </div>
        </div>

        {/* Add-ons */}
        <div style={{ marginBottom: '50px' }}>
          <h3 style={{
            fontFamily: THEME.fonts.heading,
            fontSize: '1.8rem',
            color: THEME.colors.primary,
            marginBottom: '20px'
          }}>
            Premium Add-ons
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '15px'
          }}>
            {addOns.map(addOn => (
              <div
                key={addOn.id}
                onClick={() => handleCustomizationToggle(addOn.id)}
                style={{
                  padding: '20px',
                  border: customizations.includes(addOn.id) 
                    ? `2px solid ${THEME.colors.accent}` 
                    : '2px solid #e2e8f0',
                  borderRadius: '12px',
                  backgroundColor: customizations.includes(addOn.id) 
                    ? `${THEME.colors.accent}10` 
                    : 'white',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  minHeight: '60px'
                }}
              >
                <div>
                  <h4 style={{
                    margin: '0 0 5px 0',
                    color: THEME.colors.text,
                    fontSize: '1rem'
                  }}>
                    {addOn.name}
                  </h4>
                  <span style={{
                    color: THEME.colors.accent,
                    fontWeight: 'bold'
                  }}>
                    +${addOn.price}
                  </span>
                </div>
                {customizations.includes(addOn.id) && (
                  <Check style={{ 
                    color: THEME.colors.accent, 
                    width: '20px', 
                    height: '20px' 
                  }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Options */}
        <div style={{ marginBottom: '50px' }}>
          <h3 style={{
            fontFamily: THEME.fonts.heading,
            fontSize: '1.8rem',
            color: THEME.colors.primary,
            marginBottom: '20px'
          }}>
            Delivery Options
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '15px'
          }}>
            <div
              onClick={() => setDeliveryOption('pickup')}
              style={{
                padding: '25px',
                border: deliveryOption === 'pickup' 
                  ? `3px solid ${THEME.colors.accent}` 
                  : '3px solid #e2e8f0',
                borderRadius: '12px',
                backgroundColor: deliveryOption === 'pickup' 
                  ? `${THEME.colors.accent}10` 
                  : 'white',
                cursor: 'pointer',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
            >
              <MapPin style={{ 
                width: '30px', 
                height: '30px', 
                color: THEME.colors.accent,
                margin: '0 auto 15px'
              }} />
              <h4 style={{ margin: '0 0 10px 0', color: THEME.colors.text }}>
                Pickup
              </h4>
              <p style={{ margin: '0', color: '#666', fontSize: '0.9rem' }}>
                Free pickup from Sheila's kitchen
              </p>
            </div>
            
            <div
              onClick={() => setDeliveryOption('delivery')}
              style={{
                padding: '25px',
                border: deliveryOption === 'delivery' 
                  ? `3px solid ${THEME.colors.accent}` 
                  : '3px solid #e2e8f0',
                borderRadius: '12px',
                backgroundColor: deliveryOption === 'delivery' 
                  ? `${THEME.colors.accent}10` 
                  : 'white',
                cursor: 'pointer',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
            >
              <Clock style={{ 
                width: '30px', 
                height: '30px', 
                color: THEME.colors.accent,
                margin: '0 auto 15px'
              }} />
              <h4 style={{ margin: '0 0 10px 0', color: THEME.colors.text }}>
                Delivery
              </h4>
              <p style={{ margin: '0', color: '#666', fontSize: '0.9rem' }}>
                $15 delivery fee • Within 20 miles
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          alignItems: 'start'
        }}>
          {/* Form Fields */}
          <div>
            <h3 style={{
              fontFamily: THEME.fonts.heading,
              fontSize: '1.8rem',
              color: THEME.colors.primary,
              marginBottom: '25px'
            }}>
              Your Details
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                style={{
                  padding: '15px',
                  borderRadius: '8px',
                  border: '2px solid #e2e8f0',
                  fontSize: '16px',
                  minHeight: '44px'
                }}
              />
              
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                style={{
                  padding: '15px',
                  borderRadius: '8px',
                  border: '2px solid #e2e8f0',
                  fontSize: '16px',
                  minHeight: '44px'
                }}
              />
              
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                style={{
                  padding: '15px',
                  borderRadius: '8px',
                  border: '2px solid #e2e8f0',
                  fontSize: '16px',
                  minHeight: '44px'
                }}
              />
              
              <div style={{ display: 'flex', gap: '10px' }}>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  style={{
                    padding: '15px',
                    borderRadius: '8px',
                    border: '2px solid #e2e8f0',
                    fontSize: '16px',
                    minHeight: '44px',
                    flex: 1
                  }}
                />
                <input
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  style={{
                    padding: '15px',
                    borderRadius: '8px',
                    border: '2px solid #e2e8f0',
                    fontSize: '16px',
                    minHeight: '44px',
                    flex: 1
                  }}
                />
              </div>
              
              {deliveryOption === 'delivery' && (
                <textarea
                  placeholder="Delivery Address"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  rows="3"
                  style={{
                    padding: '15px',
                    borderRadius: '8px',
                    border: '2px solid #e2e8f0',
                    fontSize: '16px',
                    resize: 'vertical',
                    fontFamily: THEME.fonts.body
                  }}
                />
              )}
              
              <textarea
                placeholder="Special requests or dietary restrictions..."
                value={formData.specialRequests}
                onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
                rows="4"
                style={{
                  padding: '15px',
                  borderRadius: '8px',
                  border: '2px solid #e2e8f0',
                  fontSize: '16px',
                  resize: 'vertical',
                  fontFamily: THEME.fonts.body
                }}
              />
            </div>
          </div>

          {/* Order Summary */}
          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            border: `2px solid ${THEME.colors.accent}20`,
            position: 'sticky',
            top: '20px'
          }}>
            <h3 style={{
              fontFamily: THEME.fonts.heading,
              fontSize: '1.8rem',
              color: THEME.colors.primary,
              marginBottom: '25px',
              textAlign: 'center'
            }}>
              Order Summary
            </h3>
            
            <div style={{ marginBottom: '20px' }}>
              {boardSizes.filter(board => board.id === selectedSize).map(board => (
                <div key={board.id} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '10px',
                  paddingBottom: '10px',
                  borderBottom: '1px solid #e2e8f0'
                }}>
                  <span>{board.name} ({board.serves})</span>
                  <span>${board.price}</span>
                </div>
              ))}
              
              {customizations.map(addOnId => {
                const addOn = addOns.find(a => a.id === addOnId);
                return addOn ? (
                  <div key={addOnId} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '10px',
                    paddingBottom: '10px',
                    borderBottom: '1px solid #e2e8f0'
                  }}>
                    <span>{addOn.name}</span>
                    <span>+${addOn.price}</span>
                  </div>
                ) : null;
              })}
              
              {deliveryOption === 'delivery' && (
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '10px',
                  paddingBottom: '10px',
                  borderBottom: '1px solid #e2e8f0'
                }}>
                  <span>Delivery Fee</span>
                  <span>$15</span>
                </div>
              )}
            </div>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: THEME.colors.primary,
              marginBottom: '25px',
              paddingTop: '15px',
              borderTop: '2px solid #e2e8f0'
            }}>
              <span>Total</span>
              <span>${calculateTotal()}</span>
            </div>
            
            <button style={{
              width: '100%',
              padding: '18px',
              backgroundColor: THEME.colors.accent,
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              transition: 'all 0.3s ease',
              minHeight: '60px'
            }}>
              Request Quote & Order
              <ArrowRight style={{ width: '20px', height: '20px' }} />
            </button>
            
            <div style={{
              textAlign: 'center',
              marginTop: '20px',
              padding: '15px',
              backgroundColor: `${THEME.colors.accent}10`,
              borderRadius: '8px'
            }}>
              <p style={{
                margin: '0',
                fontSize: '0.9rem',
                color: THEME.colors.text
              }}>
                <Heart style={{ 
                  width: '16px', 
                  height: '16px', 
                  color: THEME.colors.accent,
                  display: 'inline',
                  marginRight: '5px'
                }} />
                Handcrafted with love by Sheila
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;