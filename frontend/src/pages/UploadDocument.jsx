import { useState } from 'react';
import {
  Upload,
  Camera,
  ScanLine,
  Smartphone,
  CloudUpload,
  FileText,
  FolderOpen,
  Hash,
  Calendar,
  Clock,
  User,
  MapPin,
  ChevronRight,
  Info,
  Pencil,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Maximize,
  Copy,
  Lock,
  Sparkles,
  ChevronDown,
  Image,
  File,
} from 'lucide-react';
import './UploadDocument.css';

const extractedFields = [
  {
    label: 'Document Type',
    value: 'FIR (First Information Report)',
    icon: FolderOpen,
    key: 'docType',
  },
  {
    label: 'Case Number',
    value: 'KA/2026/0892',
    icon: Hash,
    key: 'caseNumber',
  },
  {
    label: 'Date of Document',
    value: '12/03/2026',
    icon: Calendar,
    key: 'date',
    hasTime: true,
    timeValue: '10:30',
  },
  {
    label: 'Issuing Officer',
    value: 'Ramesh P. Shetty',
    icon: User,
    key: 'officer',
  },
  {
    label: 'Jurisdiction',
    value: 'Udupi Town Police Station, Udupi',
    icon: MapPin,
    key: 'jurisdiction',
  },
];

export default function UploadDocument() {
  const [activeTab, setActiveTab] = useState('upload');
  const [zoom, setZoom] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const [detailsExpanded, setDetailsExpanded] = useState(false);

  const tabs = [
    { id: 'upload', label: 'Upload File', icon: Upload },
    { id: 'photo', label: 'Take Photo', icon: Camera },
    { id: 'scan', label: 'Scan Document', icon: ScanLine },
    { id: 'mobile', label: 'Import from Mobile', icon: Smartphone },
  ];

  const handleZoomIn = () => setZoom((z) => Math.min(z + 25, 200));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 25, 50));

  return (
    <div className="upload-page">
      {/* Header */}
      <div className="upload-header">
        <div className="upload-header-text">
          <h1 className="upload-title">Upload Document</h1>
          <p className="upload-subtitle">
            Add a document to the case record. You can upload files, scan using
            camera, or capture photos. Our AI will extract key details and verify
            integrity.
          </p>
        </div>
        <button className="upload-guidelines">
          <Info size={14} strokeWidth={2} />
          <span>Upload Guidelines</span>
        </button>
      </div>

      {/* Tab Bar */}
      <div className="upload-tabs">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            className={`upload-tab ${activeTab === id ? 'active' : ''}`}
            onClick={() => setActiveTab(id)}
          >
            <Icon size={16} strokeWidth={2} />
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Main Upload Area */}
      <div className="upload-main">
        {/* Left: Drag & Drop */}
        <div className="upload-dropzone">
          <div className="dropzone-inner">
            <CloudUpload size={48} strokeWidth={1.2} className="dropzone-icon" />
            <p className="dropzone-title">Drag & drop files here</p>
            <p className="dropzone-hint">Supports PDF, JPG, PNG, DOCX (Max 50 MB)</p>
            <div className="dropzone-actions">
              <button className="choose-files-btn">Choose Files</button>
              <span className="dropzone-or">or</span>
            </div>
          </div>
        </div>

        {/* Middle: Quick Actions */}
        <div className="upload-quick-actions">
          <div className="quick-action-card">
            <Camera size={24} strokeWidth={1.5} className="qa-icon" />
            <p className="qa-title">Take a Photo</p>
            <p className="qa-desc">Capture document using camera</p>
            <button className="qa-btn outlined">Open Camera</button>
          </div>
          <div className="quick-action-card filled">
            <ScanLine size={24} strokeWidth={1.5} className="qa-icon" />
            <p className="qa-title">Scan Document</p>
            <p className="qa-desc">Auto-detect edges and enhance</p>
            <button className="qa-btn filled">Start Scanning</button>
          </div>
        </div>

        {/* Right: QR Code */}
        <div className="upload-mobile-qr">
          <p className="qr-title">Upload via Mobile</p>
          <div className="qr-code-box">
            <svg viewBox="0 0 140 140" className="qr-svg">
              {/* Corner squares */}
              <rect x="5" y="5" width="35" height="35" fill="#1a3a4a" rx="3" />
              <rect x="10" y="10" width="25" height="25" fill="#fff" rx="2" />
              <rect x="15" y="15" width="15" height="15" fill="#1a3a4a" rx="1" />

              <rect x="100" y="5" width="35" height="35" fill="#1a3a4a" rx="3" />
              <rect x="105" y="10" width="25" height="25" fill="#fff" rx="2" />
              <rect x="110" y="15" width="15" height="15" fill="#1a3a4a" rx="1" />

              <rect x="5" y="100" width="35" height="35" fill="#1a3a4a" rx="3" />
              <rect x="10" y="105" width="25" height="25" fill="#fff" rx="2" />
              <rect x="15" y="110" width="15" height="15" fill="#1a3a4a" rx="1" />

              {/* Center pattern */}
              <rect x="45" y="5" width="8" height="8" fill="#1a3a4a" />
              <rect x="55" y="5" width="5" height="5" fill="#1a3a4a" />
              <rect x="65" y="5" width="8" height="8" fill="#1a3a4a" />
              <rect x="80" y="5" width="5" height="5" fill="#1a3a4a" />

              <rect x="45" y="15" width="5" height="8" fill="#1a3a4a" />
              <rect x="55" y="18" width="8" height="5" fill="#1a3a4a" />
              <rect x="68" y="15" width="5" height="8" fill="#1a3a4a" />

              <rect x="45" y="28" width="8" height="5" fill="#1a3a4a" />
              <rect x="58" y="25" width="5" height="8" fill="#1a3a4a" />
              <rect x="70" y="28" width="8" height="5" fill="#1a3a4a" />

              <rect x="5" y="45" width="8" height="5" fill="#1a3a4a" />
              <rect x="18" y="48" width="5" height="8" fill="#1a3a4a" />
              <rect x="28" y="45" width="8" height="5" fill="#1a3a4a" />

              <rect x="5" y="60" width="5" height="8" fill="#1a3a4a" />
              <rect x="15" y="63" width="8" height="5" fill="#1a3a4a" />
              <rect x="28" y="60" width="5" height="8" fill="#1a3a4a" />

              <rect x="5" y="75" width="8" height="5" fill="#1a3a4a" />
              <rect x="18" y="78" width="5" height="8" fill="#1a3a4a" />
              <rect x="28" y="75" width="8" height="5" fill="#1a3a4a" />

              <rect x="5" y="88" width="5" height="8" fill="#1a3a4a" />
              <rect x="18" y="90" width="8" height="5" fill="#1a3a4a" />

              {/* Middle block */}
              <rect x="45" y="45" width="45" height="45" fill="#1a3a4a" rx="3" />
              <rect x="50" y="50" width="35" height="35" fill="#fff" rx="2" />
              <rect x="55" y="55" width="25" height="25" fill="#1a3a4a" rx="2" />
              <rect x="62" y="62" width="11" height="11" fill="#fff" rx="1" />

              {/* Right column */}
              <rect x="100" y="45" width="8" height="5" fill="#1a3a4a" />
              <rect x="115" y="48" width="5" height="8" fill="#1a3a4a" />
              <rect x="128" y="45" width="8" height="5" fill="#1a3a4a" />

              <rect x="100" y="58" width="5" height="8" fill="#1a3a4a" />
              <rect x="112" y="60" width="8" height="5" fill="#1a3a4a" />
              <rect x="125" y="58" width="5" height="8" fill="#1a3a4a" />

              <rect x="100" y="72" width="8" height="5" fill="#1a3a4a" />
              <rect x="115" y="75" width="5" height="8" fill="#1a3a4a" />
              <rect x="128" y="72" width="8" height="5" fill="#1a3a4a" />

              <rect x="100" y="85" width="5" height="8" fill="#1a3a4a" />
              <rect x="112" y="88" width="8" height="5" fill="#1a3a4a" />
              <rect x="125" y="85" width="5" height="8" fill="#1a3a4a" />

              {/* Bottom row */}
              <rect x="45" y="100" width="8" height="8" fill="#1a3a4a" />
              <rect x="58" y="103" width="5" height="5" fill="#1a3a4a" />
              <rect x="68" y="100" width="8" height="8" fill="#1a3a4a" />
              <rect x="80" y="103" width="5" height="5" fill="#1a3a4a" />

              <rect x="45" y="115" width="5" height="8" fill="#1a3a4a" />
              <rect x="55" y="118" width="8" height="5" fill="#1a3a4a" />
              <rect x="68" y="115" width="5" height="8" fill="#1a3a4a" />

              <rect x="45" y="128" width="8" height="5" fill="#1a3a4a" />
              <rect x="58" y="130" width="5" height="5" fill="#1a3a4a" />
              <rect x="70" y="128" width="8" height="5" fill="#1a3a4a" />

              <rect x="100" y="100" width="8" height="8" fill="#1a3a4a" />
              <rect x="115" y="103" width="5" height="5" fill="#1a3a4a" />
              <rect x="128" y="100" width="8" height="8" fill="#1a3a4a" />

              <rect x="100" y="115" width="5" height="8" fill="#1a3a4a" />
              <rect x="112" y="118" width="8" height="5" fill="#1a3a4a" />
              <rect x="125" y="115" width="5" height="8" fill="#1a3a4a" />

              <rect x="100" y="128" width="8" height="5" fill="#1a3a4a" />
              <rect x="115" y="130" width="5" height="5" fill="#1a3a4a" />
              <rect x="128" y="128" width="8" height="5" fill="#1a3a4a" />
            </svg>
          </div>
          <p className="qr-desc">
            Scan this QR code to upload from your mobile device
          </p>
          <div className="qr-url-row">
            <span className="qr-url">https://ncrb.gov.in/upload</span>
            <button className="qr-copy">
              <Copy size={13} strokeWidth={2} />
            </button>
          </div>
          <p className="qr-expires">Link expires in 10 minutes</p>
        </div>
      </div>

      {/* Document Preview + Extracted Details */}
      <div className="upload-preview-section">
        {/* Left: Document Preview */}
        <div className="doc-preview-panel">
          <div className="doc-preview-header">
            <h3 className="doc-preview-title">Uploaded Document</h3>
            <button className="edit-pages-btn">
              <Pencil size={13} strokeWidth={2} />
              <span>Edit Pages</span>
            </button>
          </div>

          <div className="doc-preview-body">
            {/* Thumbnails */}
            <div className="doc-thumbnails">
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className={`doc-thumb ${currentPage === num ? 'active' : ''}`}
                  onClick={() => setCurrentPage(num)}
                >
                  <Image size={20} strokeWidth={1.2} className="thumb-placeholder-icon" />
                  <span className="thumb-num">{num}</span>
                </div>
              ))}
              <button className="add-more-thumb">
                <span>+ Add More</span>
              </button>
            </div>

            {/* Document View */}
            <div className="doc-view">
              <div className="doc-page" style={{ transform: `scale(${zoom / 100})` }}>
                <div className="fir-document">
                  <div className="fir-emblem">
                    <svg viewBox="0 0 50 50" width="50" height="50">
                      <circle cx="25" cy="25" r="23" fill="none" stroke="#1a3a4a" strokeWidth="1.5" />
                      <circle cx="25" cy="25" r="18" fill="none" stroke="#1a3a4a" strokeWidth="0.8" />
                      <text x="25" y="20" textAnchor="middle" fontSize="5" fill="#1a3a4a" fontWeight="bold">INDIA</text>
                      <text x="25" y="28" textAnchor="middle" fontSize="3.5" fill="#1a3a4a">★ ★ ★</text>
                    </svg>
                  </div>
                  <h4 className="fir-header">KARNATAKA STATE POLICE</h4>
                  <h5 className="fir-subheader">FIRST INFORMATION REPORT</h5>
                  <p className="fir-legal">(Under Section 154 Cr.P.C.)</p>
                  <div className="fir-divider" />
                  <div className="fir-fields">
                    <div className="fir-row">
                      <span className="fir-label">POLICE STATION:</span>
                      <span className="fir-value">Udupi Town PS</span>
                    </div>
                    <div className="fir-row">
                      <span className="fir-label">FIR No.:</span>
                      <span className="fir-value">0892/2026</span>
                    </div>
                    <div className="fir-row">
                      <span className="fir-label">Date:</span>
                      <span className="fir-value">12/03/2026</span>
                    </div>
                    <div className="fir-row">
                      <span className="fir-label">District:</span>
                      <span className="fir-value">Udupi</span>
                    </div>
                    <div className="fir-row">
                      <span className="fir-label">State:</span>
                      <span className="fir-value">Karnataka</span>
                    </div>
                    <div className="fir-row">
                      <span className="fir-label">Section(s):</span>
                      <span className="fir-value">379, 411 IPC</span>
                    </div>
                    <div className="fir-divider thin" />
                    <div className="fir-row">
                      <span className="fir-label">Complainant:</span>
                      <span className="fir-value">Suresh K. Rao, S/o Krishna Rao</span>
                    </div>
                    <div className="fir-row">
                      <span className="fir-label">Address:</span>
                      <span className="fir-value">78, Temple Road, Udupi, Karnataka - 576101</span>
                    </div>
                    <div className="fir-divider thin" />
                    <div className="fir-row">
                      <span className="fir-label">Brief of Complaint:</span>
                    </div>
                    <p className="fir-brief">
                      That on 11/03/2026 at approximately 18:30 hours, the complainant discovered that his
                      two-wheeler (KA-01-AB-1234), which was parked near Sri Krishna Temple, was missing.
                      Search was made in the surrounding areas but the vehicle could not be traced.
                      Suspecting theft by unknown persons.
                    </p>
                    <div className="fir-row">
                      <span className="fir-label">Investigating Officer:</span>
                      <span className="fir-value">Insp. Ramesh P. Shetty</span>
                    </div>
                    <div className="fir-stamp">
                      <div className="stamp-circle">
                        <span>RECEIVED</span>
                        <span className="stamp-date">12/03/2026</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Toolbar */}
          <div className="doc-toolbar">
            <div className="doc-toolbar-left">
              <span className="page-indicator">
                <FileText size={14} strokeWidth={1.5} />
                {currentPage} / 3
              </span>
            </div>
            <div className="doc-toolbar-right">
              <button className="zoom-btn" onClick={handleZoomOut}>
                <ZoomOut size={15} strokeWidth={2} />
              </button>
              <span className="zoom-level">{zoom}%</span>
              <button className="zoom-btn" onClick={handleZoomIn}>
                <ZoomIn size={15} strokeWidth={2} />
              </button>
              <button className="fullscreen-btn">
                <Maximize size={15} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>

        {/* Right: Extracted Details */}
        <div className="doc-extract-panel">
          <div className="extract-header">
            <div className="extract-title-row">
              <Sparkles size={18} strokeWidth={1.8} className="sparkle-icon" />
              <h3 className="extract-title">Extracted Document Details</h3>
            </div>
            <button className="re-extract-btn">
              <RotateCcw size={13} strokeWidth={2} />
              <span>Re-extract</span>
            </button>
          </div>

          <p className="extract-subtitle">
            These fields were automatically extracted using AI. Please review and
            edit if needed.
          </p>

          <div className="extract-fields">
            {extractedFields.map(({ label, value, icon: Icon, key, hasTime, timeValue }) => (
              <div className="extract-field" key={key}>
                <label className="extract-label">
                  <Icon size={14} strokeWidth={1.8} className="field-icon" />
                  {label}
                  <span className="ai-badge">AI</span>
                </label>
                <div className="extract-input-row">
                  <input
                    type="text"
                    className="extract-input"
                    defaultValue={value}
                  />
                  <button className="field-reset">
                    <RotateCcw size={14} strokeWidth={2} />
                  </button>
                </div>
                {hasTime && (
                  <>
                    <label className="extract-label secondary">
                      <Clock size={14} strokeWidth={1.8} className="field-icon" />
                      Time (Optional)
                    </label>
                    <div className="extract-input-row">
                      <input
                        type="text"
                        className="extract-input"
                        defaultValue={timeValue}
                      />
                      <button className="field-reset">
                        <RotateCcw size={14} strokeWidth={2} />
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}

            {/* Collapsible Additional Details */}
            <button
              className="additional-toggle"
              onClick={() => setDetailsExpanded(!detailsExpanded)}
            >
              <span>Additional Details (Optional)</span>
              <ChevronDown
                size={16}
                strokeWidth={2}
                className={`additional-chevron ${detailsExpanded ? 'expanded' : ''}`}
              />
            </button>
            {detailsExpanded && (
              <div className="additional-fields">
                <label className="extract-label">
                  <FileText size={14} strokeWidth={1.8} className="field-icon" />
                  Remarks
                  <span className="ai-badge">AI</span>
                </label>
                <div className="extract-input-row">
                  <input
                    type="text"
                    className="extract-input"
                    placeholder="No additional remarks"
                  />
                  <button className="field-reset">
                    <RotateCcw size={14} strokeWidth={2} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="upload-bottom-bar">
        <div className="hash-section">
          <p className="hash-label">SHA-256 Hash (computed automatically)</p>
          <p className="hash-value">
            e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
          </p>
        </div>
        <div className="commit-section">
          <button className="commit-btn">
            <Lock size={15} strokeWidth={2} />
            <span>Commit to Ledger →</span>
          </button>
          <p className="commit-note">
            This will store the document hash on the immutable audit chain.
          </p>
        </div>
      </div>
    </div>
  );
}
