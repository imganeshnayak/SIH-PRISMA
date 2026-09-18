import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const login = (email, password, role) => {
    const name = email.split('@')[0].replace(/\./g, ' ').replace(/\b\w/g, c => c.toUpperCase())
    const initials = name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
    setUser({ email, name, initials, role })
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
