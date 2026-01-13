import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Camera, Filter, Grid, List } from 'lucide-react';

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

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [favorites, setFavorites] = useState(new Set());

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const galleryItems = [
    {
      id: 1,
      title: "Elegant Wedding Grazing Table",
      category: "wedding",
      size: "grazing",
      price: 350,
      serves: "50+ guests",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800",
      ingredients: ["Aged Brie", "Prosciutto", "Figs", "Honeycomb", "Marcona Almonds"],
      description: "A stunning 8-foot grazing table featuring premium artisan cheeses, Italian cured meats, and seasonal fruits"
    },
    {
      id: 2,
      title: "Intimate Date Night Board",
      category: "intimate",
      size: "small",
      price: 45,
      serves: "2-4 people",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
      ingredients: ["Camembert", "Salami", "Grapes", "Local Honey", "Walnuts"],
      description: "Perfect for cozy evenings with carefully selected cheeses and accompaniments"
    },
    {
      id: 3,
      title: "Corporate Event Spread",
      category: "corporate",
      size: "large",
      price: 185,
      serves: "15-20 people",
      image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=800",
      ingredients: ["Gouda", "Bresaola", "Dried Apricots", "Olives", "Artisan Crackers"],
      description: "Professional presentation perfect for office meetings and corporate gatherings"
    },
    {
      id: 4,
      title: "Baby Shower Delight",
      category: "celebration",
      size: "medium",
      price: 85,
      serves: "8-12 people",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
      ingredients: ["Mild Cheddar", "Turkey Roll", "Strawberries", "Cream Crackers"],
      description: "Gentle flavors and beautiful presentation for celebrating new arrivals"
    },
    {
      id: 5,
      title: "Holiday Feast Board",
      category: "celebration",
      size: "large",
      price: 195,
      serves: "15-20 people",
      image: "https://images.unsplash.com/photo-1571197300842-d671ba5c4951?w=800",
      ingredients: ["Cranberry Stilton", "Coppa", "Pomegranate", "Spiced Nuts"],
      description: "Festive seasonal board with holiday-inspired ingredients and garnishes"
    },
    {
      id: 6,
      title: "Picnic Perfect Board",
      category: "outdoor",
      size: "medium",
      price: 75,
      serves: "6-10 people",
      image: "https://images.unsplash.com/photo-1576867757603-05b134ebc379?w=800",
      ingredients: ["Sharp Cheddar", "Summer Sausage", "Cherry Tomatoes", "Crackers"],
      description: "Travel-friendly selection perfect for outdoor adventures and picnics"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Boards', count: galleryItems.length },
    { id: 'wedding', label: 'Weddings', count: galleryItems.filter(item => item.category === 'wedding').length },
    { id: 'corporate', label: 'Corporate', count: galleryItems.filter(item => item.category === 'corporate').length },
    { id: 'celebration', label: 'Celebrations', count: galleryItems.filter(item => item.category === 'celebration').length },
    { id: 'intimate', label: 'Intimate', count: galleryItems.filter(item => item.category === 'intimate').length },
    { id: 'outdoor', label: 'Outdoor', count: galleryItems.filter(item => item.category === 'outdoor').length }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: THEME.colors.background,
      fontFamily: THEME.fonts.body 
    }}>
      {/* Hero Section */}
      <div style={{
        position: 'relative',
        height: '60vh',
        backgroundImage: 'linear-gradient(rgba(44, 24, 16, 0.4), rgba(44, 24, 16, 0.6)), url("https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          textAlign: 'center',
          color: '#ffffff',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          maxWidth: '600px',
          padding: '0 20px'
        }}>
          <h1 style={{
            fontFamily: THEME.fonts.heading,
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            marginBottom: '20px',
            fontWeight: '700'
          }}>
            Artisan Gallery
          </h1>
          <p style={{
            fontSize: '1.2rem',
            opacity: '0.95',
            lineHeight: '1.6'
          }}>
            Explore Sheila's handcrafted charcuterie masterpieces, made with locally-sourced ingredients and love
          </p>
        </div>
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'rgba(255,255,255,0.2)',
          backdropFilter: 'blur(10px)',
          borderRadius: '50px',
          padding: '8px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: '#ffffff'
        }}>
          <Camera size={16} />
          <span style={{ fontSize: '14px' }}>50+ Creations</span>
        </div>
      </div>

      {/* Filters & View Toggle */}
      <div style={{
        padding: '40px 20px 20px',
        borderBottom: `1px solid ${THEME.colors.accent}20`
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Mobile-first filter tabs */}
          <div style={{
            display: 'flex',
            overflowX: 'auto',
            gap: '10px',
            paddingBottom: '10px',
            marginBottom: '20px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                style={{
                  padding: '12px 20px',
                  borderRadius: '25px',
                  border: 'none',
                  background: activeFilter === category.id 
                    ? THEME.colors.accent 
                    : 'rgba(196, 163, 90, 0.1)',
                  color: activeFilter === category.id ? '#ffffff' : THEME.colors.accent,
                  fontSize: '14px',
                  fontWeight: '600',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                {category.label}
                <span style={{
                  background: activeFilter === category.id 
                    ? 'rgba(255,255,255,0.3)' 
                    : THEME.colors.accent,
                  color: activeFilter === category.id ? '#ffffff' : '#ffffff',
                  borderRadius: '12px',
                  padding: '2px 8px',
                  fontSize: '12px'
                }}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* View toggle */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <p style={{
              color: THEME.colors.text,
              margin: '0',
              fontSize: '16px'
            }}>
              {filteredItems.length} boards available
            </p>
            <div style={{
              display: 'flex',
              background: THEME.colors.surface,
              borderRadius: '8px',
              padding: '4px'
            }}>
              <button
                onClick={() => setViewMode('grid')}
                style={{
                  padding: '8px',
                  border: 'none',
                  background: viewMode === 'grid' ? THEME.colors.accent : 'transparent',
                  color: viewMode === 'grid' ? '#ffffff' : THEME.colors.text,
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                <Grid size={16} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                style={{
                  padding: '8px',
                  border: 'none',
                  background: viewMode === 'list' ? THEME.colors.accent : 'transparent',
                  color: viewMode === 'list' ? '#ffffff' : THEME.colors.text,
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid/List */}
      <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        {viewMode === 'grid' ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {filteredItems.map(item => (
              <div key={item.id} style={{
                background: '#ffffff',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(44, 24, 16, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(44, 24, 16, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(44, 24, 16, 0.1)';
              }}>
                <div style={{ position: 'relative' }}>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '240px',
                      objectFit: 'cover'
                    }}
                  />
                  <button
                    onClick={() => toggleFavorite(item.id)}
                    style={{
                      position: 'absolute',
                      top: '15px',
                      right: '15px',
                      background: 'rgba(255,255,255,0.9)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    <Heart 
                      size={18} 
                      fill={favorites.has(item.id) ? '#e74c3c' : 'none'}
                      color={favorites.has(item.id) ? '#e74c3c' : THEME.colors.text}
                    />
                  </button>
                  <div style={{
                    position: 'absolute',
                    bottom: '15px',
                    left: '15px',
                    background: THEME.colors.accent,
                    color: '#ffffff',
                    padding: '6px 12px',
                    borderRadius: '15px',
                    fontSize: '12px',
                    fontWeight: '600'
                  }}>
                    {item.serves}
                  </div>
                </div>
                
                <div style={{ padding: '25px' }}>
                  <h3 style={{
                    fontFamily: THEME.fonts.heading,
                    fontSize: '1.4rem',
                    margin: '0 0 10px 0',
                    color: THEME.colors.text
                  }}>
                    {item.title}
                  </h3>
                  
                  <p style={{
                    color: THEME.colors.text,
                    opacity: '0.7',
                    fontSize: '14px',
                    lineHeight: '1.5',
                    margin: '0 0 15px 0'
                  }}>
                    {item.description}
                  </p>

                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    marginBottom: '20px'
                  }}>
                    {item.ingredients.slice(0, 3).map((ingredient, idx) => (
                      <span key={idx} style={{
                        background: `${THEME.colors.accent}15`,
                        color: THEME.colors.accent,
                        padding: '4px 10px',
                        borderRadius: '12px',
                        fontSize: '12px'
                      }}>
                        {ingredient}
                      </span>
                    ))}
                    {item.ingredients.length > 3 && (
                      <span style={{
                        color: THEME.colors.accent,
                        fontSize: '12px',
                        padding: '4px 0'
                      }}>
                        +{item.ingredients.length - 3} more
                      </span>
                    )}
                  </div>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <span style={{
                        fontFamily: THEME.fonts.heading,
                        fontSize: '1.6rem',
                        fontWeight: '700',
                        color: THEME.colors.accent
                      }}>
                        ${item.price}
                      </span>
                    </div>
                    
                    <button style={{
                      background: THEME.colors.primary,
                      color: '#ffffff',
                      border: 'none',
                      padding: '12px 20px',
                      borderRadius: '25px',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <ShoppingCart size={14} />
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {filteredItems.map(item => (
              <div key={item.id} style={{
                background: '#ffffff',
                borderRadius: '15px',
                padding: '20px',
                boxShadow: '0 5px 15px rgba(44, 24, 16, 0.1)',
                display: 'flex',
                gap: '20px',
                alignItems: 'center'
              }}>
                <img 
                  src={item.image} 
                  alt={item.title}
                  style={{
                    width: '120px',
                    height: '120px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    flexShrink: '0'
                  }}
                />
                <div style={{ flex: '1' }}>
                  <h3 style={{
                    fontFamily: THEME.fonts.heading,
                    fontSize: '1.3rem',
                    margin: '0 0 8px 0',
                    color: THEME.colors.text
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    color: THEME.colors.text,
                    opacity: '0.7',
                    fontSize: '14px',
                    margin: '0 0 10px 0'
                  }}>
                    {item.description}
                  </p>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px'
                  }}>
                    <span style={{
                      fontFamily: THEME.fonts.heading,
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      color: THEME.colors.accent
                    }}>
                      ${item.price}
                    </span>
                    <span style={{
                      background: `${THEME.colors.accent}15`,
                      color: THEME.colors.accent,
                      padding: '4px 10px',
                      borderRadius: '12px',
                      fontSize: '12px'
                    }}>
                      {item.serves}
                    </span>
                    <button style={{
                      background: THEME.colors.primary,
                      color: '#ffffff',
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      cursor: 'pointer'
                    }}>
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div style={{
        background: THEME.colors.primary,
        color: '#ffffff',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: THEME.fonts.heading,
            fontSize: '2.5rem',
            margin: '0 0 20px 0'
          }}>
            Can't Find What You're Looking For?
          </h2>
          <p style={{
            fontSize: '1.1rem',
            opacity: '0.9',
            margin: '0 0 30px 0',
            lineHeight: '1.6'
          }}>
            Sheila loves creating custom boards tailored to your specific event and taste preferences. 
            Get a personalized quote today!
          </p>
          <div style={{
            display: 'flex',
            gap: '15px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link to="/quote" style={{
              background: THEME.colors.accent,
              color: '#ffffff',
              padding: '16px 32px',
              borderRadius: '30px',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '600',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              Request Custom Quote
            </Link>
            <Link to="/contact" style={{
              background: 'transparent',
              color: '#ffffff',
              padding: '16px 32px',
              borderRadius: '30px',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '600',
              border: '2px solid rgba(255,255,255,0.3)'
            }}>
              Contact Sheila
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;