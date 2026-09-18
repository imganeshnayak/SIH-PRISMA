import { Search, Bell, Home, ChevronDown } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './Header.css';

function Header({ breadcrumbs = [] }) {
  const { user } = useAuth();

  const displayName = user?.name || 'Guest'
  const displayInitials = user?.initials || '??'
  const displayRole = user?.role === 'admin' ? 'Administrator'
    : user?.role === 'officer' ? 'Investigating Officer'
    : user?.role === 'viewer' ? 'Document Viewer'
    : 'Unknown'

  return (
    <header className="top-header">
      <div className="header-left">
        <nav className="breadcrumb">
          <a href="/dashboard" className="breadcrumb-item">
            <Home size={14} strokeWidth={2} />
          </a>
          {breadcrumbs.map((crumb, index) => (
            <span key={index} className="breadcrumb-segment">
              <span className="breadcrumb-sep">/</span>
              {index === breadcrumbs.length - 1 ? (
                <span className="breadcrumb-current">{crumb.label}</span>
              ) : (
                <a href={crumb.href || '#'} className="breadcrumb-item">{crumb.label}</a>
              )}
            </span>
          ))}
        </nav>
      </div>

      <div className="header-center">
        <div className="search-wrapper">
          <Search className="search-icon" size={16} strokeWidth={2} />
          <input
            type="text"
            className="search-input"
            placeholder="Search documents, cases, officers..."
          />
          <span className="search-shortcut">⌘K</span>
        </div>
      </div>

      <div className="header-right">
        <button className="notification-btn" aria-label="Notifications">
          <Bell size={18} strokeWidth={2} />
          <span className="notification-badge">3</span>
        </button>

        <div className="user-section">
          <div className="user-avatar">{displayInitials}</div>
          <div className="user-info">
            <span className="user-name">{displayName}</span>
            <span className="user-role">{displayRole}</span>
          </div>
          <ChevronDown size={16} strokeWidth={2} className="user-chevron" />
        </div>
      </div>
    </header>
  );
}

export default Header;
