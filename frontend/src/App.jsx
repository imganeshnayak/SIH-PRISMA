import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import './App.css'

const breadcrumbMap = {
  '/dashboard': [{ label: 'Dashboard' }],
  '/upload': [{ label: 'Documents' }, { label: 'Upload' }],
  '/repository': [{ label: 'Repository' }],
  '/case-files': [{ label: 'Case Files' }],
  '/case-files/ka-2026-0892': [{ label: 'Case Files' }, { label: 'KA/2026/0892' }],
}

function App() {
  const location = useLocation()
  const path = location.pathname

  let activePage = 'Dashboard'
  if (path.includes('/upload')) activePage = 'Upload Document'
  else if (path.includes('/repository')) activePage = 'Repository'
  else if (path.includes('/case-files')) activePage = 'Case Files'
  else if (path.includes('/dashboard')) activePage = 'Dashboard'

  const breadcrumbs = breadcrumbMap[path] || breadcrumbMap['/dashboard']

  return (
    <div className="app-layout">
      <Sidebar activePage={activePage} activeCase="KA/2026/0892" />
      <div className="app-main">
        <Header breadcrumbs={breadcrumbs} />
        <div className="app-content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App
