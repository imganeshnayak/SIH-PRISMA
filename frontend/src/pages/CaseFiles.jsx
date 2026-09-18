import { useState } from "react";
import {
  ArrowLeft,
  Copy,
  ChevronDown,
  MoreVertical,
  Search,
  Plus,
  LayoutGrid,
  List,
  Building2,
  MapPin,
  Calendar,
  Folder,
  Users,
  User,
  HardDrive,
  Clock,
  FileText,
  Image,
  Edit3,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import "./CaseFiles.css";

const folders = [
  {
    id: 1,
    name: "FIR & Initial Records",
    items: 5,
    updated: "12 Mar 2026, 10:30 AM",
    color: "#3b82f6",
  },
  {
    id: 2,
    name: "Statements",
    items: 8,
    updated: "14 Mar 2026, 11:15 AM",
    color: "#f59e0b",
  },
  {
    id: 3,
    name: "Evidence (Photos/Videos)",
    items: 12,
    updated: "16 Mar 2026, 04:21 PM",
    color: "#10b981",
  },
  {
    id: 4,
    name: "Forensic Reports",
    items: 4,
    updated: "18 Mar 2026, 09:10 AM",
    color: "#8b5cf6",
  },
  {
    id: 5,
    name: "Medical Reports",
    items: 3,
    updated: "19 Mar 2026, 02:45 PM",
    color: "#ef4444",
  },
  {
    id: 6,
    name: "Court Filings",
    items: 6,
    updated: "21 Mar 2026, 11:05 AM",
    color: "#f97316",
  },
  {
    id: 7,
    name: "Correspondence",
    items: 4,
    updated: "22 Mar 2026, 03:20 PM",
    color: "#6b7280",
  },
  {
    id: 8,
    name: "Other Documents",
    items: 2,
    updated: "25 Mar 2026, 10:12 AM",
    color: "#06b6d4",
  },
];

const officers = [
  { initials: "RS", name: "R. Shetty", color: "#ef4444" },
  { initials: "AK", name: "A. Khan", color: "#3b82f6" },
  { initials: "PN", name: "P. Nair", color: "#8b5cf6" },
];

const activities = [
  {
    user: "R. Sharma",
    action: "added",
    file: "FIR_Udupi_2026.pdf",
    time: "17 Sep 2026, 11:24 AM",
    type: "added",
  },
  {
    user: "A. Khan",
    action: "added",
    file: "Accused_Photo.jpg",
    time: "17 Sep 2026, 10:58 AM",
    type: "added",
  },
  {
    user: "P. Nair",
    action: "updated",
    file: "Witness_Statement_1.docx",
    time: "16 Sep 2026, 04:21 PM",
    type: "updated",
  },
];

const caseInfo = [
  { label: "Case Number", value: "KA/2026/0892" },
  { label: "Case Title", value: "Theft of Two-Wheeler at Udupi Bus Stand" },
  { label: "Police Station", value: "Udupi Town Police Station" },
  { label: "Jurisdiction", value: "Udupi, Karnataka" },
  { label: "FIR Date", value: "12 Mar 2026" },
  { label: "Current Status", value: "Active", isStatus: true },
  { label: "IPC Sections", value: "379" },
  { label: "Case Category", value: "Property Crime", isBold: true },
];

const description =
  "The complainant reported theft of his two-wheeler (KA-20-EX-1234) from the parking area near Udupi Bus Stand. Investigation is in progress.";

export default function CaseFiles() {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [activeTab, setActiveTab] = useState("folders");

  const tabs = [
    { id: "folders", label: "Folders", icon: Folder },
    { id: "timeline", label: "Timeline", icon: Clock },
    { id: "parties", label: "Parties", icon: Users },
    { id: "notes", label: "Notes", icon: FileText },
  ];

  return (
    <div className="case-files">
      {/* Top Section */}
      <div className="cf-top">
        <a href="#back" className="cf-back-link">
          <ArrowLeft size={16} strokeWidth={2} />
          <span>Back to Cases</span>
        </a>

        <div className="cf-top-main">
          <div className="cf-top-left">
            <div className="cf-case-number-row">
              <h1 className="cf-case-number">KA/2026/0892</h1>
              <button className="cf-copy-btn" title="Copy case number">
                <Copy size={14} strokeWidth={2} />
              </button>
              <div className="cf-status-badge">
                <span className="cf-status-dot" />
                <span>Active</span>
                <ChevronDown size={12} strokeWidth={2} />
              </div>
            </div>
            <p className="cf-case-title">
              Theft of Two-Wheeler at Udupi Bus Stand
            </p>
          </div>

          <button className="cf-case-actions-btn">
            <span>Case Actions</span>
            <ChevronDown size={14} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Metadata Row */}
      <div className="cf-metadata-row">
        <div className="cf-metadata-left">
          <div className="cf-meta-item">
            <Building2 size={14} strokeWidth={1.8} />
            <span>Udupi Town Police Station</span>
          </div>
          <div className="cf-meta-item">
            <MapPin size={14} strokeWidth={1.8} />
            <span>Udupi, Karnataka</span>
          </div>
          <div className="cf-meta-item">
            <Calendar size={14} strokeWidth={1.8} />
            <span>FIR Date: 12 Mar 2026</span>
          </div>
          <div className="cf-meta-item">
            <Folder size={14} strokeWidth={1.8} />
            <span>IPC Sections: 379</span>
          </div>
        </div>

        <div className="cf-metadata-right">
          <div className="cf-assigned-officers">
            <span className="cf-officers-label">Assigned Officers</span>
            <div className="cf-officers-row">
              {officers.map((officer) => (
                <div key={officer.initials} className="cf-officer">
                  <div
                    className="cf-avatar"
                    style={{ background: officer.color }}
                  >
                    {officer.initials}
                  </div>
                  <span className="cf-officer-name">{officer.name}</span>
                </div>
              ))}
              <div className="cf-avatar cf-avatar-more">+2</div>
            </div>
            <div className="cf-io-row">
              <User size={13} strokeWidth={1.8} />
              <span>Investigating Officer: Ramesh P. Shetty</span>
            </div>
          </div>

          <div className="cf-case-progress">
            <div className="cf-progress-header">
              <span className="cf-progress-label">Case Progress</span>
              <ChevronDown size={12} strokeWidth={2} />
            </div>
            <div className="cf-progress-value">60%</div>
            <div className="cf-progress-bar">
              <div className="cf-progress-fill" style={{ width: "60%" }} />
            </div>
            <span className="cf-progress-updated">
              Last updated: 17 Sep 2026, 11:24 AM
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="cf-tabs">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              className={`cf-tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <Icon size={15} strokeWidth={2} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="cf-content">
        {/* Left Column - Case Folders */}
        <div className="cf-folders-section">
          <div className="cf-folders-header">
            <div>
              <h2 className="cf-folders-title">Case Folders</h2>
              <p className="cf-folders-subtitle">
                Organised folders containing all documents related to this case.
              </p>
            </div>
            <div className="cf-folders-actions">
              <div className="cf-search-box">
                <Search size={14} strokeWidth={2} className="cf-search-icon" />
                <input
                  type="text"
                  placeholder="Search folders..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="cf-search-input"
                />
              </div>
              <button className="cf-new-folder-btn">
                <Plus size={14} strokeWidth={2} />
                <span>New Folder</span>
              </button>
              <div className="cf-view-toggle">
                <button
                  className={`cf-view-btn ${viewMode === "grid" ? "active" : ""}`}
                  onClick={() => setViewMode("grid")}
                >
                  <LayoutGrid size={14} strokeWidth={2} />
                </button>
                <button
                  className={`cf-view-btn ${viewMode === "list" ? "active" : ""}`}
                  onClick={() => setViewMode("list")}
                >
                  <List size={14} strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>

          <div className="cf-folders-grid">
            {folders.map((folder) => (
              <div key={folder.id} className="cf-folder-card">
                <div className="cf-folder-card-menu">
                  <button className="cf-menu-btn">
                    <MoreVertical size={14} strokeWidth={2} />
                  </button>
                </div>
                <div
                  className="cf-folder-icon"
                  style={{ background: `${folder.color}15`, color: folder.color }}
                >
                  <Folder size={24} strokeWidth={1.5} />
                </div>
                <div className="cf-folder-info">
                  <h3 className="cf-folder-name">{folder.name}</h3>
                  <span className="cf-folder-count">{folder.items} items</span>
                  <span className="cf-folder-updated">
                    Updated {folder.updated}
                  </span>
                </div>
              </div>
            ))}
            <div className="cf-folder-card cf-folder-create">
              <div className="cf-folder-create-inner">
                <Plus size={24} strokeWidth={1.5} />
                <span>Create New Folder</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Case Information */}
        <div className="cf-info-sidebar">
          {/* Case Information Card */}
          <div className="cf-info-card">
            <div className="cf-info-card-header">
              <h3 className="cf-info-card-title">Case Information</h3>
              <button className="cf-edit-btn">
                <Edit3 size={13} strokeWidth={2} />
                <span>Edit</span>
              </button>
            </div>

            <div className="cf-info-fields">
              {caseInfo.map((field) => (
                <div key={field.label} className="cf-info-field">
                  <span className="cf-info-label">{field.label}</span>
                  {field.isStatus ? (
                    <div className="cf-info-status">
                      <span className="cf-info-status-dot" />
                      <span>{field.value}</span>
                    </div>
                  ) : (
                    <span
                      className={`cf-info-value ${field.isBold ? "bold" : ""}`}
                    >
                      {field.value}
                    </span>
                  )}
                </div>
              ))}
              <div className="cf-info-field">
                <span className="cf-info-label">Description</span>
                <p className="cf-info-description">{description}</p>
              </div>
            </div>
          </div>

          {/* Storage Card */}
          <div className="cf-storage-card">
            <div className="cf-storage-header">
              <div className="cf-storage-title-row">
                <HardDrive size={14} strokeWidth={2} />
                <span className="cf-storage-title">Storage</span>
              </div>
              <span className="cf-storage-text">42 items &bull; 256 MB</span>
            </div>
            <div className="cf-storage-bar">
              <div
                className="cf-storage-fill"
                style={{ width: "26%" }}
              />
            </div>
            <span className="cf-storage-percent">26% used</span>
          </div>

          {/* Recent Activity Card */}
          <div className="cf-activity-card">
            <div className="cf-activity-header">
              <h3 className="cf-activity-title">Recent Activity</h3>
              <a href="#viewall" className="cf-view-all-link">
                View All <span>&rarr;</span>
              </a>
            </div>
            <div className="cf-activity-list">
              {activities.map((activity, i) => (
                <div key={i} className="cf-activity-item">
                  <div
                    className={`cf-activity-dot ${activity.type === "updated" ? "red" : "green"}`}
                  />
                  <div className="cf-activity-content">
                    <p className="cf-activity-text">
                      <strong>{activity.user}</strong> {activity.action}{" "}
                      {activity.file}
                    </p>
                    <span className="cf-activity-time">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
