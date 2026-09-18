import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  Upload,
  Database,
  FolderOpen,
  Clock,
  Shield,
  BarChart3,
  Users,
  Package,
  Settings,
  ChevronDown,
  Folder,
} from 'lucide-react';
import './Sidebar.css';

const menuItems = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { label: 'Documents', icon: FileText, path: '/documents' },
  { label: 'Upload Document', icon: Upload, path: '/upload' },
  { label: 'Repository', icon: Database, path: '/repository' },
  { label: 'Case Files', icon: FolderOpen, path: '/case-files' },
  { label: 'Audit Trail', icon: Clock, path: '/audit-trail' },
  { label: 'Access Control', icon: Shield, path: '/access-control' },
  { label: 'Compliance & Reports', icon: BarChart3, path: '/compliance' },
  { label: 'Users & Departments', icon: Users, path: '/users' },
  { label: 'Asset Lifecycle', icon: Package, path: '/asset-lifecycle' },
  { label: 'Settings', icon: Settings, path: '/settings' },
];

export default function Sidebar({ activePage, activeCase }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <div className="sidebar-top">
          <div className="sidebar-header">
            <img
              src="/images/emblem.svg"
              alt="Indian National Emblem"
              className="sidebar-emblem"
            />
            <div className="sidebar-title">
              <span className="sidebar-ncrb">NCRB</span>
              <span className="sidebar-ministry">Ministry of Home Affairs</span>
              <span className="sidebar-govt">Government of India</span>
            </div>
          </div>
          <span className="sidebar-sanskrit">सत्यमेव जयते</span>

          <div className="sidebar-case-selector">
            <span className="case-selector-label">Selected Case</span>
            <div className="case-selector-inner">
              <Folder size={15} className="case-icon" />
              <span className="case-label">
                {activeCase || 'Select a case...'}
              </span>
              <ChevronDown size={15} className="case-chevron" />
            </div>
          </div>

          <nav className="sidebar-nav">
            {menuItems.map(({ label, icon: Icon, path }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `sidebar-link${isActive || activePage === label ? ' active' : ''}`
                }
              >
                <Icon size={18} />
                <span>{label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="sidebar-bottom">
          <div className="sidebar-bottom-building"></div>
          <span className="sidebar-tagline">
            SECURE RECORDS<br />SAFER INDIA
          </span>
        </div>
      </div>
    </aside>
  );
}
