/**
 * AdminLayout
 * Shared layout wrapper for all admin pages.
 */

import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import { useApp } from '../src/context/AppContext';
import {
  Bell,
  Search,
  Sun,
  Moon,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export function AdminLayout() {
  const location = useLocation();
  const { 
    business, 
    industry,
    user, 
    theme, 
    toggleTheme,
    sidebarCollapsed,
    notifications,
    unreadCount,
    isDemoMode 
  } = useApp();

  // Create brain object for outlet context
  const brain = {
    business,
    industry,
    labels: industry?.terminology || {
      customers: 'Customers',
      orders: 'Orders',
      items: 'Items',
      revenue: 'Revenue'
    },
    theme
  };

  // Get breadcrumbs from route
  const getBreadcrumbs = () => {
    const path = location.pathname;
    if (path === '/' || path === '/dashboard') return ['Dashboard'];
    const segments = path.split('/').filter(Boolean);
    return segments.map(s => s.charAt(0).toUpperCase() + s.slice(1));
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <div style={styles.container}>
      {/* Demo Mode Banner */}
      {isDemoMode && (
        <div style={styles.demoBanner}>
          <Sparkles size={14} />
          <span>Demo Mode - Viewing as "{business.name}"</span>
        </div>
      )}

      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div style={{
        ...styles.main,
        marginLeft: sidebarCollapsed ? '72px' : '260px'
      }}>
        {/* Top Header */}
        <header style={styles.header}>
          <div style={styles.headerLeft}>
            <nav style={styles.breadcrumbs}>
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && <ChevronRight size={14} style={styles.breadcrumbSep} />}
                  <span style={idx === breadcrumbs.length - 1 ? styles.breadcrumbActive : styles.breadcrumbItem}>
                    {crumb}
                  </span>
                </React.Fragment>
              ))}
            </nav>
          </div>

          <div style={styles.headerRight}>
            <div style={styles.searchBox}>
              <Search size={16} style={styles.searchIcon} />
              <input type="text" placeholder="Search..." style={styles.searchInput} />
              <span style={styles.searchShortcut}>⌘K</span>
            </div>

            <button style={styles.iconBtn} onClick={toggleTheme} title="Toggle theme">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button style={styles.iconBtn} title="Notifications">
              <Bell size={18} />
              {unreadCount > 0 && <span style={styles.notificationBadge}>{unreadCount}</span>}
            </button>

            <div style={styles.userMenu}>
              <div style={styles.userAvatar}>
                {user.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div style={styles.userInfo}>
                <span style={styles.userName}>{user.name}</span>
                <span style={styles.userRole}>{user.role}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content - Pass context to children */}
        <main style={styles.content}>
          <Outlet context={{ brain, business }} />
        </main>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: 'var(--color-bg)',
    color: 'var(--color-text)',
    fontFamily: 'var(--font-family)'
  },
  demoBanner: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '32px',
    backgroundColor: 'var(--color-ai)',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontSize: '12px',
    fontWeight: 500,
    zIndex: 1000
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    marginTop: '32px',
    transition: 'margin-left 0.2s ease'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 32px',
    backgroundColor: 'var(--color-surface)',
    borderBottom: '1px solid var(--color-border)',
    position: 'sticky',
    top: '32px',
    zIndex: 50,
    height: '64px'
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  breadcrumbs: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px'
  },
  breadcrumbItem: {
    color: 'var(--color-text-muted)',
    cursor: 'pointer'
  },
  breadcrumbActive: {
    color: 'var(--color-text)',
    fontWeight: 500
  },
  breadcrumbSep: {
    color: 'var(--color-text-muted)'
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '8px 14px',
    backgroundColor: 'var(--color-surface-2)',
    border: '1px solid var(--color-border)',
    borderRadius: '10px',
    width: '240px'
  },
  searchIcon: {
    color: 'var(--color-text-muted)'
  },
  searchInput: {
    flex: 1,
    backgroundColor: 'transparent',
    border: 'none',
    color: 'var(--color-text)',
    fontSize: '14px',
    outline: 'none'
  },
  searchShortcut: {
    fontSize: '11px',
    color: 'var(--color-text-muted)',
    padding: '2px 6px',
    backgroundColor: 'var(--color-border)',
    borderRadius: '4px'
  },
  iconBtn: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '10px',
    color: 'var(--color-text-muted)',
    cursor: 'pointer'
  },
  notificationBadge: {
    position: 'absolute',
    top: '6px',
    right: '6px',
    width: '16px',
    height: '16px',
    backgroundColor: 'var(--color-error)',
    color: '#ffffff',
    fontSize: '10px',
    fontWeight: 600,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  userMenu: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '6px 12px 6px 6px',
    backgroundColor: 'var(--color-surface-2)',
    borderRadius: '12px',
    cursor: 'pointer'
  },
  userAvatar: {
    width: '36px',
    height: '36px',
    borderRadius: '10px',
    backgroundColor: 'var(--color-primary)',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '13px',
    fontWeight: 600
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column'
  },
  userName: {
    fontSize: '13px',
    fontWeight: 500,
    lineHeight: 1.2
  },
  userRole: {
    fontSize: '11px',
    color: 'var(--color-text-muted)',
    textTransform: 'capitalize'
  },
  content: {
    flex: 1,
    padding: '24px 32px',
    overflowY: 'auto'
  }
};

export default AdminLayout;
