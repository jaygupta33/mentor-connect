'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Video, MessageCircle } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Sample sessions data
const sessions = [
  {
    id: 1,
    mentee: {
      name: "David Chen",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Junior Frontend Developer",
      company: "TechStart Inc."
    },
    date: "2024-03-15",
    time: "10:00 AM",
    duration: "45 minutes",
    topic: "React Performance Optimization",
    status: "confirmed",
    notes: "Would like to discuss component optimization and React best practices"
  },
  {
    id: 2,
    mentee: {
      name: "Sarah Williams",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Mid-level Developer",
      company: "Digital Solutions Ltd"
    },
    date: "2024-03-15",
    time: "2:00 PM",
    duration: "60 minutes",
    topic: "System Architecture Planning",
    status: "pending",
    notes: "Need guidance on designing scalable microservices architecture"
  },
  {
    id: 3,
    mentee: {
      name: "Michael Rodriguez",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Software Engineer",
      company: "InnovateTech"
    },
    date: "2024-03-16",
    time: "11:00 AM",
    duration: "45 minutes",
    topic: "Career Growth Discussion",
    status: "confirmed",
    notes: "Looking to discuss transition from IC to tech lead role"
  }
]

export default function MentorDashboardPage() {
  const todaysSessions = sessions.filter(session => 
    new Date(session.date).toDateString() === new Date().toDateString()
  )

  return (
    <div className="flex-1 space-y-6 p-6 md:p-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome Back!</h1>
        <p className="text-muted-foreground">Here are your upcoming mentoring sessions</p>
      </div>

      {/* Today's Overview */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Sessions</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todaysSessions.length}</div>
            <p className="text-xs text-muted-foreground">
              {todaysSessions.length > 0 ? `Next session at ${todaysSessions[0].time}` : 'No sessions today'}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{sessions.length}</div>
            <p className="text-xs text-muted-foreground">
              {Math.round(sessions.length * 45 / 60)} hours of mentoring
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
            <MessageCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">100%</div>
            <p className="text-xs text-muted-foreground">
              All requests responded to
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Sessions */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Upcoming Sessions</h2>
        <div className="grid gap-4">
          {sessions.map((session) => (
            <Card key={session.id}>
              <CardContent className="flex items-center gap-4 p-6">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={session.mentee.avatar} alt={session.mentee.name} />
                  <AvatarFallback>
                    {session.mentee.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{session.topic}</h3>
                    <Badge variant={session.status === 'confirmed' ? 'default' : 'secondary'}>
                      {session.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">with {session.mentee.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {session.mentee.role} at {session.mentee.company}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-sm text-right">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(session.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{session.time} ({session.duration})</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">View Details</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Session Details</DialogTitle>
                          <DialogDescription>
                            Scheduled mentoring session information
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="flex items-center gap-4">
                            <Avatar>
                              <AvatarImage src={session.mentee.avatar} alt={session.mentee.name} />
                              <AvatarFallback>
                                {session.mentee.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="font-medium">{session.mentee.name}</h4>
                              <p className="text-sm text-muted-foreground">
                                {session.mentee.role} at {session.mentee.company}
                              </p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-medium">Topic</h4>
                            <p className="text-sm text-muted-foreground">{session.topic}</p>
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-medium">Mentee's Notes</h4>
                            <p className="text-sm text-muted-foreground">{session.notes}</p>
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-medium">Schedule</h4>
                            <p className="text-sm text-muted-foreground">
                              {new Date(session.date).toLocaleDateString()} at {session.time}
                              <br />
                              Duration: {session.duration}
                            </p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    {session.status === 'confirmed' && (
                      <Button>
                        <Video className="mr-2 h-4 w-4" />
                        Join Call
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {sessions.length === 0 && (
          <Card>
            <CardHeader>
              <CardTitle>No Upcoming Sessions</CardTitle>
              <p className="text-muted-foreground">
                You don't have any mentoring sessions scheduled.
              </p>
            </CardHeader>
          </Card>
        )}
      </div>
    </div>
  )
}

