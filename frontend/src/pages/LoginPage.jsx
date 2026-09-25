import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { User, Lock, Eye, EyeOff, Users, ArrowRight, ShieldCheck, LockKeyhole, ChevronDown } from 'lucide-react'
import './LoginPage.css'

function GovernmentSeal() {
  return (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <circle cx="200" cy="200" r="195" fill="none" stroke="#4a5568" strokeWidth="4" opacity="0.12"/>
      <circle cx="200" cy="200" r="180" fill="none" stroke="#4a5568" strokeWidth="2" opacity="0.09"/>
      <path id="wtop" d="M55,200 A145,145 0 0,1 345,200" fill="none"/>
      <text fontFamily="serif" fontSize="32" fill="#4a5568" opacity="0.12" fontWeight="bold" letterSpacing="5">
        <textPath href="#wtop" startOffset="50%" textAnchor="middle">भारत सरकार</textPath>
      </text>
      <path id="wbot" d="M52,218 A148,148 0 0,0 348,218" fill="none"/>
      <text fontFamily="Inter,sans-serif" fontSize="19" fill="#4a5568" opacity="0.12" fontWeight="600" letterSpacing="6">
        <textPath href="#wbot" startOffset="50%" textAnchor="middle">GOVERNMENT OF INDIA</textPath>
      </text>
      <circle cx="200" cy="200" r="112" fill="none" stroke="#4a5568" strokeWidth="2.5" opacity="0.09"/>
      <circle cx="200" cy="200" r="100" fill="none" stroke="#4a5568" strokeWidth="1" opacity="0.07"/>
      <path d="M55 200 l4 10 11 1 -8 7 3 11 -10 -6 -10 6 3 -11 -8 -7 11 -1z" fill="#4a5568" opacity="0.12"/>
      <path d="M345 200 l4 10 11 1 -8 7 3 11 -10 -6 -10 6 3 -11 -8 -7 11 -1z" fill="#4a5568" opacity="0.12"/>
      <image href="/images/emblem.svg" x="125" y="115" width="150" height="170" opacity="0.12" preserveAspectRatio="xMidYMid meet" />
    </svg>
  )
}

const roleLabels = {
  admin: 'Administrator',
  officer: 'Investigating Officer',
  viewer: 'Document Viewer',
}

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && password && role) {
      login(email, password, role)
      navigate('/dashboard')
    }
  }

  return (
    <div className="page">
      <div className="left">
        <div className="bldg">
          <img src="/images/building-front.png" alt="" className="bldg-img" />
          <div className="bldg-tint"></div>
        </div>
        <div className="watermark">
          <GovernmentSeal />
        </div>
        <div className="left-inner">
          <div className="hdr">
            <div className="hdr-left">
              <div className="emblem-box">
                <img src="/images/emblem.svg" alt="" className="emblem-img" />
                <span className="hindi-cap">सत्यमेव जयते</span>
              </div>
              <div className="govt-text">
                <span className="ministry">Ministry of Home Affairs</span>
                <span className="govt">Government of India</span>
              </div>
            </div>
            <div className="vals">
              <span>JUSTICE</span>
              <span>INTEGRITY</span>
              <span>TRANSPARENCY</span>
              <span>ACCOUNTABILITY</span>
            </div>
          </div>
          <div className="brand">
            <h1 className="ncrb">NCRB</h1>
            <div className="tri">
              <span className="s"></span>
              <span className="w"></span>
              <span className="g"></span>
            </div>
            <h2 className="tag">Secure Records. Safer India.</h2>
            <p className="sub">Ministry of Home Affairs • National Crime Records Bureau</p>
          </div>
          <div className="mission">
            <p>DIGITISE</p>
            <p>SECURE</p>
            <p>PRESERVE</p>
            <p className="msub">FOR A SAFER TOMORROW</p>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="right-inner">
          <a href="#" className="help">Need help?</a>
          <div className="login">
            <h1 className="welcome">Welcome Back</h1>
            <p className="wsub">Sign in to access the secure document system</p>
            <div className="login-panel">
              <form className="form" onSubmit={handleSubmit}>
              <div className="fg">
                <label className="fl">Service ID</label>
                <div className="fi">
                  <User className="ficon" size={18} strokeWidth={1.8} />
                  <input
                    type="email"
                    placeholder="Enter your service ID"
                    className="finp"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="fg">
                <label className="fl">Password</label>
                <div className="fi">
                  <Lock className="ficon" size={18} strokeWidth={1.8} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="finp"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                  />
                  <button type="button" className="ptoggle" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff size={18} strokeWidth={1.8} /> : <Eye size={18} strokeWidth={1.8} />}
                  </button>
                </div>
              </div>
              <div className="fg">
                <label className="fl">Role</label>
                <div className="fi sel">
                  <Users className="ficon" size={18} strokeWidth={1.8} />
                  <select
                    className="finp fsel"
                    value={role}
                    onChange={e => setRole(e.target.value)}
                    required
                  >
                    <option value="" disabled>Select your role</option>
                    <option value="admin">Administrator</option>
                    <option value="officer">Investigating Officer</option>
                    <option value="viewer">Document Viewer</option>
                  </select>
                  <ChevronDown className="farrow" size={18} strokeWidth={1.8} />
                </div>
              </div>
              <button type="submit" className="cbtn">
                <span>Continue</span>
                <ArrowRight size={18} strokeWidth={2.2} />
              </button>
              </form>
              <div className="dvd">
              <span className="dvdl"></span>
              <span className="dvdt">OR</span>
              <span className="dvdl"></span>
              </div>
              <div className="auth">
              <div className="authb">
                <ShieldCheck size={22} className="shicon" strokeWidth={1.5} />
                <div className="atxt">
                  <span className="atitle">Secured with Government Authentication</span>
                  <span className="amethods">DSC · Aadhaar eSign · 2FA</span>
                </div>
              </div>
              </div>
            </div>
          </div>
          <footer className="ftr">
            <div className="audit">
              <LockKeyhole size={13} strokeWidth={1.8} />
              <span>Session logged to immutable audit chain</span>
            </div>
            <p className="forg">NATIONAL CRIME RECORDS BUREAU  |  MINISTRY OF HOME AFFAIRS</p>
          </footer>
        </div>
      </div>
    </div>
  )
}
