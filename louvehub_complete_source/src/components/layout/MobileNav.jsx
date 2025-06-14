import { Link, useLocation } from 'react-router-dom'
import { Home, Calendar, Music, Users } from 'lucide-react'

const MobileNav = () => {
  const location = useLocation()

  const navigation = [
    { name: 'Início', href: '/', icon: Home },
    { name: 'Agenda', href: '/calendar', icon: Calendar },
    { name: 'Músicas', href: '/repertoire', icon: Music },
    { name: 'Equipe', href: '/team', icon: Users },
  ]

  const isActive = (href) => {
    if (href === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(href)
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
      <div className="flex">
        {navigation.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex-1 flex flex-col items-center py-2 px-1 transition-colors ${
                isActive(item.href)
                  ? 'text-accent'
                  : 'text-muted-foreground'
              }`}
            >
              <Icon className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">{item.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default MobileNav

