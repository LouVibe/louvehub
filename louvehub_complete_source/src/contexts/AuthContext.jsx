import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('louvehub-user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    // Mock login for MVP
    const mockUser = {
      id: 1,
      name: 'João Silva',
      email: email,
      role: 'Líder de Ministério',
      ministry: 'Ministério de Louvor',
      avatar: null,
      permissions: ['create_events', 'manage_team', 'edit_repertoire']
    }
    
    setUser(mockUser)
    localStorage.setItem('louvehub-user', JSON.stringify(mockUser))
    return mockUser
  }

  const register = async (name, email, password) => {
    // Mock register for MVP
    const newUser = {
      id: Date.now(),
      name: name,
      email: email,
      role: 'Membro',
      ministry: 'Ministério de Louvor',
      avatar: null,
      permissions: ['view_events', 'view_repertoire']
    }
    
    setUser(newUser)
    localStorage.setItem('louvehub-user', JSON.stringify(newUser))
    return newUser
  }

  const updateProfile = async (profileData) => {
    // Mock profile update for MVP
    const updatedUser = {
      ...user,
      ...profileData
    }
    
    setUser(updatedUser)
    localStorage.setItem('louvehub-user', JSON.stringify(updatedUser))
    return updatedUser
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('louvehub-user')
  }

  const hasPermission = (permission) => {
    return user?.permissions?.includes(permission) || false
  }

  const value = {
    user,
    login,
    register,
    updateProfile,
    logout,
    loading,
    hasPermission
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

