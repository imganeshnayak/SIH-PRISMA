import React from "react";
import { useAuth } from "../context/AuthContext";
import {
  FileText,
  Upload,
  Clock,
  Shield,
  BarChart3,
  Users,
  AlertTriangle,
  CheckCircle,
  Eye,
  Pen,
  Folder,
  ChevronRight,
} from "lucide-react";
import "./Dashboard.css";

const statsCards = [
  {
    title: "Active Cases",
    value: "1,248",
    change: "+12% from last month",
    changeDir: "up",
    colorClass: "blue",
    icon: Folder,
  },
  {
    title: "Docs Pending Sign-off",
    value: "327",
    change: "+5% from last week",
    changeDir: "up",
    colorClass: "amber",
    icon: Clock,
  },
  {
    title: "Integrity Checks Passed",
    value: "12,486",
    change: "+98% success rate",
    changeDir: "up",
    colorClass: "green",
    icon: CheckCircle,
  },
  {
    title: "Access Violations",
    value: "6",
    change: "-40% from last month",
    changeDir: "down",
    colorClass: "red",
    icon: AlertTriangle,
  },
];

const activityRows = [
  {
    name: "FIR_UDU_2026.pdf",
    caseNo: "UDU/2026/0145",
    actor: "R. Sharma",
    role: "IO",
    action: "Uploaded",
    time: "17 Sep 2026 11:24 AM",
    status: "Verified",
  },
  {
    name: "Witness_Statement.docx",
    caseNo: "KA/2026/0892",
    actor: "P. Nair",
    role: "SI",
    action: "Updated",
    time: "17 Sep 2026 10:18 AM",
    status: "Pending",
  },
  {
    name: "CCTV_Footage_1.jpg",
    caseNo: "UDU/2026/0145",
    actor: "A. Khan",
    role: "Forensics",
    action: "Viewed",
    time: "17 Sep 2026 09:42 AM",
    status: "Verified",
  },
  {
    name: "Charge_Sheet.pdf",
    caseNo: "KA/2026/0731",
    actor: "M. Iyer",
    role: "Inspector",
    action: "Signed",
    time: "16 Sep 2026 06:15 PM",
    status: "Sealed",
  },
  {
    name: "Post_Mortem_Report.docx",
    caseNo: "UDU/2026/0112",
    actor: "Dr. S. Rao",
    role: "Medical Officer",
    action: "Uploaded",
    time: "16 Sep 2026 04:21 PM",
    status: "Verified",
  },
  {
    name: "Forensic_Analysis.pdf",
    caseNo: "KA/2026/0678",
    actor: "V. Desai",
    role: "Analyst",
    action: "Updated",
    time: "16 Sep 2026 01:10 PM",
    status: "Pending",
  },
  {
    name: "Evidence_Photo_3.jpg",
    caseNo: "UDU/2026/0220",
    actor: "K. Verma",
    role: "IO",
    action: "Viewed",
    time: "16 Sep 2026 11:03 AM",
    status: "Verified",
  },
  {
    name: "Court_Order.pdf",
    caseNo: "KA/2026/0611",
    actor: "Court Registry",
    role: "",
    action: "Uploaded",
    time: "15 Sep 2026 05:37 PM",
    status: "Verified",
  },
];

const actionItems = [
  {
    icon: FileText,
    iconClass: "red",
    title: "Sign Forensic Report",
    desc: "KA/2026/0892 · Forensic_Analysis.pdf",
    priority: "High",
  },
  {
    icon: Eye,
    iconClass: "green",
    title: "Review Witness Statement",
    desc: "UDU/2026/0145 · Witness_Statement.docx",
    priority: "Medium",
  },
  {
    icon: Users,
    iconClass: "blue",
    title: "Approve Access Request",
    desc: "KA/2026/0731 · CID Department",
    priority: "Medium",
  },
  {
    icon: Shield,
    iconClass: "green",
    title: "Verify Document Integrity",
    desc: "UDU/2026/0220 · 3 new documents",
    priority: "Low",
  },
];

const chartData = [
  { label: "11 Sep", height: 30 },
  { label: "12 Sep", height: 40 },
  { label: "13 Sep", height: 55 },
  { label: "14 Sep", height: 62 },
  { label: "15 Sep", height: 75 },
  { label: "16 Sep", height: 88 },
  { label: "17 Sep", height: 98 },
];

function getFileType(name) {
  const ext = name.split(".").pop().toLowerCase();
  if (ext === "pdf") return "pdf";
  if (ext === "docx") return "docx";
  return "img";
}

function getStatusClass(status) {
  return status.toLowerCase();
}

export default function Dashboard() {
  const { user } = useAuth()
  const firstName = user?.name?.split(' ')[0] || 'User'

  return (
    <div className="dashboard">
      {/* Top Welcome */}
      <div className="dashboard-top">
        <div>
          <h1 className="dashboard-welcome">Welcome back, {firstName}</h1>
          <p className="dashboard-subtitle">
            Here's what's happening today.
          </p>
        </div>
        <div className="dashboard-date-area">
          <span className="dashboard-date">Tue, 17 Sep 2026</span>
          <span className="dashboard-motto">
            &quot;Secure Records. Safer India.&quot;
          </span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        {statsCards.map((card) => {
          const Icon = card.icon;
          return (
            <div className="stat-card" key={card.title}>
              <div className="stat-card-header">
                <div className={`stat-icon ${card.colorClass}`}>
                  <Icon size={20} />
                </div>
              </div>
              <div className="stat-title">{card.title}</div>
              <div className="stat-value">{card.value}</div>
              <div className={`stat-change ${card.changeDir === "down" ? "red" : card.colorClass}`}>
                {card.changeDir === "up" ? "▲" : "▼"} {card.change}
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Area */}
      <div className="dashboard-main">
        {/* Left Column - Recent Activity */}
        <div className="activity-section">
          <div className="section-header">
            <h2 className="section-title">Recent Activity</h2>
            <a href="#viewall" className="view-all">
              View all <ChevronRight size={14} />
            </a>
          </div>
          <div className="activity-table-wrapper">
            <table className="activity-table">
              <thead>
                <tr>
                  <th>DOCUMENT NAME</th>
                  <th>CASE NO.</th>
                  <th>ACTOR</th>
                  <th>ACTION</th>
                  <th>TIMESTAMP</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {activityRows.map((row, i) => (
                  <tr key={i}>
                    <td>
                      <div className="doc-name">
                        <span className={`file-badge ${getFileType(row.name)}`}>
                          {getFileType(row.name) === "pdf" && <FileText size={12} />}
                          {getFileType(row.name) === "docx" && <FileText size={12} />}
                          {getFileType(row.name) === "img" && <FileText size={12} />}
                        </span>
                        {row.name}
                      </div>
                    </td>
                    <td className="mono">{row.caseNo}</td>
                    <td>
                      {row.actor}
                      {row.role && <span className="actor-role"> ({row.role})</span>}
                    </td>
                    <td>{row.action}</td>
                    <td className="mono">{row.time}</td>
                    <td>
                      <span className={`status-badge ${getStatusClass(row.status)}`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column */}
        <div className="dashboard-right">
          {/* Requires Your Action */}
          <div className="action-section">
            <div className="section-header">
              <h2 className="section-title">Requires Your Action</h2>
              <a href="#viewall" className="view-all">
                View all <ChevronRight size={14} />
              </a>
            </div>
            <div className="action-list">
              {actionItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div className="action-card" key={i}>
                    <div className="action-card-icon-row">
                      <div className={`action-icon ${item.iconClass}`}>
                        <Icon size={18} />
                      </div>
                      <div className="action-card-info">
                        <div className="action-card-title">{item.title}</div>
                        <div className="action-card-desc">{item.desc}</div>
                      </div>
                      <span className={`priority-badge ${item.priority.toLowerCase()}`}>
                        {item.priority}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Integrity Checks */}
          <div className="integrity-section">
            <div className="section-header">
              <h2 className="section-title">Integrity Checks (Last 7 Days)</h2>
              <a href="#details" className="view-all">
                View details <ChevronRight size={14} />
              </a>
            </div>
            <div className="integrity-content">
              <div className="integrity-chart">
                <div className="line-chart">
                  <svg viewBox="0 0 340 140" className="line-chart-svg" preserveAspectRatio="none">
                    {/* Y-axis labels */}
                    <text x="0" y="12" className="chart-y-label">100%</text>
                    <text x="4" y="42" className="chart-y-label">75%</text>
                    <text x="4" y="72" className="chart-y-label">50%</text>
                    <text x="4" y="102" className="chart-y-label">25%</text>
                    <text x="10" y="132" className="chart-y-label">0%</text>
                    {/* Grid lines */}
                    <line x1="30" y1="10" x2="330" y2="10" className="chart-grid-line" />
                    <line x1="30" y1="40" x2="330" y2="40" className="chart-grid-line" />
                    <line x1="30" y1="70" x2="330" y2="70" className="chart-grid-line" />
                    <line x1="30" y1="100" x2="330" y2="100" className="chart-grid-line" />
                    <line x1="30" y1="130" x2="330" y2="130" className="chart-grid-line" />
                    {/* Line path */}
                    <polyline
                      points="30,122 73,108 116,88 159,78 202,58 245,34 288,14"
                      fill="none"
                      stroke="#1a3a4a"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                    {/* Data dots */}
                    <circle cx="30" cy="122" r="4" fill="#fff" stroke="#1a3a4a" strokeWidth="2.5" />
                    <circle cx="73" cy="108" r="4" fill="#fff" stroke="#1a3a4a" strokeWidth="2.5" />
                    <circle cx="116" cy="88" r="4" fill="#fff" stroke="#1a3a4a" strokeWidth="2.5" />
                    <circle cx="159" cy="78" r="4" fill="#fff" stroke="#1a3a4a" strokeWidth="2.5" />
                    <circle cx="202" cy="58" r="4" fill="#fff" stroke="#1a3a4a" strokeWidth="2.5" />
                    <circle cx="245" cy="34" r="4" fill="#fff" stroke="#1a3a4a" strokeWidth="2.5" />
                    <circle cx="288" cy="14" r="4" fill="#fff" stroke="#1a3a4a" strokeWidth="2.5" />
                  </svg>
                  <div className="chart-x-labels">
                    {chartData.map((d, i) => (
                      <span key={i} className="chart-x-label">{d.label}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="integrity-stats">
                <div className="integrity-stat-block">
                  <div className="integrity-big green">98%</div>
                  <div className="integrity-stat-label">
                    Integrity Checks Passed
                  </div>
                </div>
                <div className="integrity-stat-block">
                  <div className="integrity-big">524</div>
                  <div className="integrity-stat-label">
                    Total Documents Verified
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
