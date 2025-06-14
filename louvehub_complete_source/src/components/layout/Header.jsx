import { Moon, Sun, Bell } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const { user } = useAuth()

  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
      {/* Mobile Logo */}
      <div className="lg:hidden flex items-center space-x-2">
        <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
          <span className="text-accent-foreground font-bold text-sm">L</span>
        </div>
        <span className="text-lg font-bold">LouveHub</span>
      </div>

      {/* Desktop Title */}
      <div className="hidden lg:block">
        <h1 className="text-2xl font-bold text-foreground">
          Bem-vindo, {user?.name?.split(' ')[0]}!
        </h1>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-2">
        <Button
          variant="ghost"
          size="icon"
          className="relative"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full"></span>
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </Button>

        {/* Mobile User Avatar */}
        <div className="lg:hidden w-8 h-8 bg-primary rounded-full flex items-center justify-center">
          <span className="text-sm font-medium text-primary-foreground">
            {user?.name?.charAt(0) || 'U'}
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header

