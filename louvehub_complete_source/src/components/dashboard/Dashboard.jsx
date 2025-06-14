import { Calendar as CalendarIcon, Clock, MapPin, Users, Plus } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const Dashboard = () => {
  // Mock data for MVP
  const upcomingEvents = [
    {
      id: 1,
      title: 'Culto de Domingo',
      date: '2024-03-17',
      time: '09:00',
      type: 'culto',
      location: 'Santuário Principal',
      participants: 8
    },
    {
      id: 2,
      title: 'Ensaio Geral',
      date: '2024-03-19',
      time: '19:30',
      type: 'ensaio',
      location: 'Sala de Ensaio',
      participants: 6
    }
  ]

  const pendingSchedules = [
    { id: 1, event: 'Culto de Domingo', role: 'Violão', status: 'pending' },
    { id: 2, event: 'Ensaio Quinta', role: 'Vocal', status: 'pending' },
    { id: 3, event: 'Evento Especial', role: 'Teclado', status: 'pending' }
  ]

  const recentAnnouncements = [
    {
      id: 1,
      title: 'Nova música no repertório',
      content: 'Adicionamos "Vem, Esta é a Hora" ao nosso repertório.',
      date: '2024-03-15'
    },
    {
      id: 2,
      title: 'Ensaio extra na quinta',
      content: 'Teremos um ensaio adicional quinta-feira às 19h30.',
      date: '2024-03-14'
    }
  ]

  const quickRepertoire = [
    { id: 1, title: 'Vem, Esta é a Hora', artist: 'Aline Barros', key: 'G' },
    { id: 2, title: 'Tua Graça Me Basta', artist: 'Fernandinho', key: 'C' },
    { id: 3, title: 'Quero Te Obedecer', artist: 'Thalles Roberto', key: 'D' },
    { id: 4, title: 'Reina o Senhor', artist: 'Ministério Zoe', key: 'B' }
  ]

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-border">
        <h2 className="text-2xl font-bold mb-2">Bem-vindo ao LouveHub!</h2>
        <p className="text-muted-foreground">
          Gerencie sua equipe de adoração de forma simples e eficiente.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Próximos Eventos</p>
                <p className="text-2xl font-bold text-accent">3</p>
              </div>
              <CalendarIcon className="w-8 h-8 text-accent" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Escalas Pendentes</p>
                <p className="text-2xl font-bold text-primary">3</p>
              </div>
              <Clock className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Membros Ativos</p>
                <p className="text-2xl font-bold text-foreground">12</p>
              </div>
              <Users className="w-8 h-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Músicas no Repertório</p>
                <p className="text-2xl font-bold text-foreground">45</p>
              </div>
              <CalendarIcon className="w-8 h-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Próximos Eventos
              <Button size="sm" className="btn-accent">
                <Plus className="w-4 h-4 mr-2" />
                Novo Evento
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="flex items-center space-x-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    event.type === 'culto' ? 'bg-accent/20 text-accent' : 'bg-primary/20 text-primary'
                  }`}>
                    <CalendarIcon className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{event.title}</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {event.time}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {event.location}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      {event.participants}
                    </span>
                  </div>
                </div>
                <Badge variant={event.type === 'culto' ? 'default' : 'secondary'}>
                  {event.type}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Pending Schedules */}
        <Card>
          <CardHeader>
            <CardTitle>Escalas Pendentes</CardTitle>
            <CardDescription>
              Confirme sua participação nos próximos eventos
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {pendingSchedules.map((schedule) => (
              <div key={schedule.id} className="flex items-center justify-between p-3 rounded-lg border border-border">
                <div>
                  <p className="font-medium">{schedule.event}</p>
                  <p className="text-sm text-muted-foreground">{schedule.role}</p>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    Recusar
                  </Button>
                  <Button size="sm" className="btn-accent">
                    Confirmar
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Announcements */}
        <Card>
          <CardHeader>
            <CardTitle>Avisos Recentes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentAnnouncements.map((announcement) => (
              <div key={announcement.id} className="p-4 rounded-lg bg-muted/50 border border-border">
                <h4 className="font-medium mb-2">{announcement.title}</h4>
                <p className="text-sm text-muted-foreground mb-2">{announcement.content}</p>
                <p className="text-xs text-muted-foreground">{announcement.date}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Repertoire Access */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Repertório Recente
              <Button size="sm" variant="outline">
                Ver Todos
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {quickRepertoire.map((song) => (
              <div key={song.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div>
                  <p className="font-medium">{song.title}</p>
                  <p className="text-sm text-muted-foreground">{song.artist}</p>
                </div>
                <Badge variant="outline">
                  Tom: {song.key}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard

