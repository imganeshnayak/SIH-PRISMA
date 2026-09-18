import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import App from './App.jsx'
import LoginPage from './pages/LoginPage.jsx'
import Dashboard from './pages/Dashboard.jsx'
import UploadDocument from './pages/UploadDocument.jsx'
import Repository from './pages/Repository.jsx'
import CaseFiles from './pages/CaseFiles.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route element={<App />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/upload" element={<UploadDocument />} />
            <Route path="/repository" element={<Repository />} />
            <Route path="/case-files" element={<CaseFiles />} />
            <Route path="/case-files/ka-2026-0892" element={<CaseFiles />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
