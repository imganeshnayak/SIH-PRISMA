import React, { useState } from 'react';
import {
  Search,
  LayoutGrid,
  List,
  Folder,
  MapPin,
  FileText,
  Calendar,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Filter,
  X,
  CheckCircle,
  AlertTriangle,
  File,
  Clock,
  ChevronDown,
  ShieldCheck,
} from 'lucide-react';
import './Repository.css';

const cases = [
  { id: 'KA/2026/0892', title: 'Theft of Two-Wheeler at Udupi Bus Stand', station: 'Udupi Town Police Station', docs: 42, folders: 8, updated: '17 Sep 2026, 11:24 AM', status: 'Active', integrity: 'Verified' },
  { id: 'KA/2026/0731', title: 'Vehicle Theft Investigation', station: 'Manipal PS', docs: 27, folders: 6, updated: '16 Sep 2026, 04:18 PM', status: 'Active', integrity: 'Verified' },
  { id: 'UDU/2026/0145', title: 'Property Dispute Case', station: 'Udupi Town PS', docs: 18, folders: 5, updated: '15 Sep 2026, 09:32 AM', status: 'Under Review', integrity: 'Verified' },
  { id: 'KA/2026/0678', title: 'Digital Fraud Investigation', station: 'Karkala PS', docs: 64, folders: 7, updated: '14 Sep 2026, 02:11 PM', status: 'Active', integrity: 'Attention' },
  { id: 'KA/2026/0521', title: 'Assault and Threat Case', station: 'Udupi Town PS', docs: 31, folders: 4, updated: '12 Sep 2026, 05:40 PM', status: 'Closed', integrity: 'Verified' },
  { id: 'KA/2026/0489', title: 'Narcotics Seizure', station: 'Mangaluru PS', docs: 56, folders: 9, updated: '11 Sep 2026, 01:28 PM', status: 'Active', integrity: 'Verified' },
  { id: 'UDU/2026/0387', title: 'Missing Person Case', station: 'Kundapur PS', docs: 24, folders: 5, updated: '10 Sep 2026, 11:16 AM', status: 'Active', integrity: 'Verified' },
  { id: 'KA/2026/0312', title: 'Cyber Harassment', station: 'Manipal PS', docs: 37, folders: 6, updated: '09 Sep 2026, 03:50 PM', status: 'Under Review', integrity: 'Verified' },
  { id: 'KA/2026/0290', title: 'Financial Fraud', station: 'Udupi Town PS', docs: 48, folders: 8, updated: '08 Sep 2026, 10:22 AM', status: 'Active', integrity: 'Attention' },
  { id: 'UDU/2026/0211', title: 'Illegal Land Encroachment', station: 'Karkala PS', docs: 22, folders: 4, updated: '07 Sep 2026, 04:05 PM', status: 'Closed', integrity: 'Verified' },
  { id: 'KA/2026/0188', title: 'Hit and Run Accident', station: 'Mangaluru PS', docs: 19, folders: 5, updated: '06 Sep 2026, 09:12 PM', status: 'Active', integrity: 'Verified' },
  { id: 'UDU/2026/0110', title: 'Wildlife Offence', station: 'Hebri Range', docs: 12, folders: 3, updated: '05 Sep 2026, 01:47 PM', status: 'Active', integrity: 'Verified' },
];

const statusColors = {
  Active: 'status-active',
  'Under Review': 'status-review',
  Closed: 'status-closed',
};

const statusDotColors = {
  Active: '#16a34a',
  'Under Review': '#f59e0b',
  Closed: '#6b7280',
};

export default function Repository() {
  const [viewMode, setViewMode] = useState('grid');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('Last Updated');
  const [sortOpen, setSortOpen] = useState(false);
  const [perPage, setPerPage] = useState('12');
  const [perPageOpen, setPerPageOpen] = useState(false);
  const [activePage, setActivePage] = useState(1);

  const [filters, setFilters] = useState({
    status: { Active: false, 'Under Review': false, Closed: false, Archived: false },
    station: { 'Udupi Town': false, Manipal: false, Karkala: false, Mangaluru: false },
    category: { 'Property Crime': false, 'Cyber Crime': false, 'Person Crime': false, 'Economic Offence': false, Other: false },
    integrity: { Verified: false, Pending: false, Anomaly: false },
  });

  const toggleFilter = (group, key) => {
    setFilters(prev => ({
      ...prev,
      [group]: { ...prev[group], [key]: !prev[group][key] },
    }));
  };

  const filteredCases = cases.filter(c => {
    if (search && !c.id.toLowerCase().includes(search.toLowerCase()) && !c.title.toLowerCase().includes(search.toLowerCase())) return false;
    const activeStatus = Object.entries(filters.status).filter(([, v]) => v).map(([k]) => k);
    if (activeStatus.length && !activeStatus.includes(c.status)) return false;
    const activeIntegrity = Object.entries(filters.integrity).filter(([, v]) => v).map(([k]) => k);
    if (activeIntegrity.length && !activeIntegrity.includes(c.integrity)) return false;
    return true;
  });

  return (
    <div className="repo-page">
      <div className="repo-top">
        <div className="repo-top-left">
          <h1 className="repo-title">Document Repository</h1>
          <p className="repo-subtitle">Browse and access all case files. Each case contains organized folders and documents.</p>
        </div>
        <div className="repo-top-right">
          <span className="repo-quote">"Transparency. Accountability. A Safer India."</span>
        </div>
      </div>

      <div className="repo-bar">
        <span className="repo-count">{cases.length * 104} Cases found</span>
        <div className="repo-bar-right">
          <div className="repo-sort-wrapper" onClick={() => setSortOpen(!sortOpen)}>
            <span className="repo-sort-label">Sort by</span>
            <div className="repo-sort-select">
              {sortBy}
              <ChevronDown size={14} />
            </div>
            {sortOpen && (
              <div className="repo-sort-dropdown">
                <div onClick={(e) => { e.stopPropagation(); setSortBy('Last Updated'); setSortOpen(false); }}>Last Updated</div>
                <div onClick={(e) => { e.stopPropagation(); setSortBy('Case ID'); setSortOpen(false); }}>Case ID</div>
                <div onClick={(e) => { e.stopPropagation(); setSortBy('Title'); setSortOpen(false); }}>Title</div>
              </div>
            )}
          </div>
          <div className="repo-view-toggle">
            <button className={`repo-view-btn ${viewMode === 'grid' ? 'active' : ''}`} onClick={() => setViewMode('grid')}>
              <LayoutGrid size={16} />
              <span>Grid View</span>
            </button>
            <button className={`repo-view-btn ${viewMode === 'list' ? 'active' : ''}`} onClick={() => setViewMode('list')}>
              <List size={16} />
              <span>List View</span>
            </button>
          </div>
        </div>
      </div>

      <div className="repo-body">
        <aside className="repo-filters">
          <div className="repo-filters-header">
            <h3>Filters</h3>
            <button className="repo-clear-all">Clear All</button>
          </div>
          <div className="repo-search-box">
            <Search size={16} className="repo-search-icon" />
            <input
              type="text"
              placeholder="Search by case ID, title, officer..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          <div className="repo-filter-group">
            <h4>Case Status</h4>
            {[
              { label: 'Active', count: 428 },
              { label: 'Under Review', count: 156 },
              { label: 'Closed', count: 312 },
              { label: 'Archived', count: 98 },
            ].map(item => (
              <label key={item.label} className="repo-checkbox">
                <input
                  type="checkbox"
                  checked={filters.status[item.label]}
                  onChange={() => toggleFilter('status', item.label)}
                />
                <span className="repo-checkmark" />
                <span className="repo-checkbox-label">{item.label}</span>
                <span className="repo-checkbox-count">{item.count}</span>
              </label>
            ))}
          </div>

          <div className="repo-filter-group">
            <h4>Police Station</h4>
            {[
              { label: 'Udupi Town', count: 124 },
              { label: 'Manipal', count: 96 },
              { label: 'Karkala', count: 78 },
              { label: 'Mangaluru', count: 210 },
            ].map(item => (
              <label key={item.label} className="repo-checkbox">
                <input
                  type="checkbox"
                  checked={filters.station[item.label]}
                  onChange={() => toggleFilter('station', item.label)}
                />
                <span className="repo-checkmark" />
                <span className="repo-checkbox-label">{item.label}</span>
                <span className="repo-checkbox-count">{item.count}</span>
              </label>
            ))}
            <button className="repo-show-more">+ Show more</button>
          </div>

          <div className="repo-filter-group">
            <h4>Case Category</h4>
            {[
              { label: 'Property Crime', count: 341 },
              { label: 'Cyber Crime', count: 128 },
              { label: 'Person Crime', count: 218 },
              { label: 'Economic Offence', count: 64 },
              { label: 'Other', count: 43 },
            ].map(item => (
              <label key={item.label} className="repo-checkbox">
                <input
                  type="checkbox"
                  checked={filters.category[item.label]}
                  onChange={() => toggleFilter('category', item.label)}
                />
                <span className="repo-checkmark" />
                <span className="repo-checkbox-label">{item.label}</span>
                <span className="repo-checkbox-count">{item.count}</span>
              </label>
            ))}
          </div>

          <div className="repo-filter-group">
            <h4>Date Range</h4>
            <div className="repo-date-inputs">
              <div className="repo-date-input">
                <Calendar size={14} className="repo-date-icon" />
                <input type="date" placeholder="From date" />
              </div>
              <div className="repo-date-input">
                <Calendar size={14} className="repo-date-icon" />
                <input type="date" placeholder="To date" />
              </div>
            </div>
          </div>

          <div className="repo-filter-group">
            <h4>Integrity Status</h4>
            {[
              { label: 'Verified', count: 892 },
              { label: 'Pending', count: 156 },
              { label: 'Anomaly', count: 24, red: true },
            ].map(item => (
              <label key={item.label} className="repo-checkbox">
                <input
                  type="checkbox"
                  checked={filters.integrity[item.label]}
                  onChange={() => toggleFilter('integrity', item.label)}
                />
                <span className="repo-checkmark" />
                <span className={`repo-checkbox-label ${item.red ? 'anomaly-text' : ''}`}>{item.label}</span>
                <span className="repo-checkbox-count">{item.count}</span>
              </label>
            ))}
          </div>

          <button className="repo-apply-btn">
            <Filter size={16} />
            Apply Filters
          </button>
        </aside>

        <main className="repo-content">
          <div className="repo-grid">
            {filteredCases.map(c => (
              <div key={c.id} className="repo-card">
                <div className="repo-card-top">
                  <div className="repo-card-folder">
                    <Folder size={28} className="folder-icon" />
                  </div>
                  <button className="repo-card-menu">
                    <MoreHorizontal size={18} />
                  </button>
                </div>
                <div className="repo-card-id">{c.id}</div>
                <div className="repo-card-title">{c.title}</div>
                <div className="repo-card-location">
                  <MapPin size={12} />
                  <span>{c.station}</span>
                </div>
                <div className="repo-card-stats">
                  <span className="repo-card-stat">
                    <FileText size={12} />
                    {c.docs} documents
                  </span>
                  <span className="repo-card-stat">
                    <Folder size={12} />
                    {c.folders} folders
                  </span>
                </div>
                <div className="repo-card-updated">
                  <Clock size={12} />
                  Updated {c.updated}
                </div>
                <div className="repo-card-badges">
                  <span className={`repo-badge status-badge ${statusColors[c.status]}`}>
                    <span className="repo-badge-dot" style={{ backgroundColor: statusDotColors[c.status] }} />
                    {c.status}
                  </span>
                  {c.integrity === 'Verified' ? (
                    <span className="repo-badge integrity-badge integrity-verified">
                      <CheckCircle size={13} />
                      Verified
                    </span>
                  ) : (
                    <span className="repo-badge integrity-badge integrity-attention">
                      <AlertTriangle size={13} />
                      Attention
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="repo-pagination">
            <span className="repo-pagination-info">Showing 1-12 of {cases.length * 104} cases</span>
            <div className="repo-pagination-right">
              <div className="repo-page-buttons">
                <button className="repo-page-arrow"><ChevronLeft size={16} /></button>
                {[1, 2, 3, 4, 5].map(p => (
                  <button
                    key={p}
                    className={`repo-page-btn ${p === activePage ? 'active' : ''}`}
                    onClick={() => setActivePage(p)}
                  >
                    {p}
                  </button>
                ))}
                <span className="repo-page-ellipsis">...</span>
                <button className="repo-page-btn">104</button>
                <button className="repo-page-arrow"><ChevronRight size={16} /></button>
              </div>
              <div className="repo-per-page" onClick={() => setPerPageOpen(!perPageOpen)}>
                <span>Cases per page</span>
                <div className="repo-per-page-select">
                  {perPage}
                  <ChevronDown size={14} />
                </div>
                {perPageOpen && (
                  <div className="repo-per-page-dropdown">
                    {[8, 12, 24, 48].map(n => (
                      <div key={n} onClick={(e) => { e.stopPropagation(); setPerPage(String(n)); setPerPageOpen(false); }}>
                        {n}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
