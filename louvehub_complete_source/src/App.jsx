import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { AuthProvider } from '@/contexts/AuthContext'
import Layout from '@/components/layout/Layout'
import LoginPage from '@/components/auth/LoginPage'
import RegisterPage from '@/components/auth/RegisterPage'
import ForgotPasswordPage from '@/components/auth/ForgotPasswordPage'
import ProfilePage from '@/components/auth/ProfilePage'
import Dashboard from '@/components/dashboard/Dashboard'
import Calendar from '@/components/calendar/Calendar'
import Repertoire from '@/components/repertoire/Repertoire'
import Team from '@/components/team/Team'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-background text-foreground">
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="calendar" element={<Calendar />} />
                <Route path="repertoire" element={<Repertoire />} />
                <Route path="team" element={<Team />} />
                <Route path="profile" element={<ProfilePage />} />
              </Route>
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App

