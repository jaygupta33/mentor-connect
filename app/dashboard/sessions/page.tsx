'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, Video } from 'lucide-react'

// Sample sessions data
const sessions = [
  {
    id: 1,
    mentor: {
      name: "Dr. Sarah Johnson",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Senior Software Engineer at Google"
    },
    date: "2024-03-15",
    time: "10:00 AM",
    status: "upcoming",
    topic: "Career Growth in Software Development"
  },
  {
    id: 2,
    mentor: {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Product Manager at Microsoft"
    },
    date: "2024-03-20",
    time: "2:00 PM",
    status: "upcoming",
    topic: "Product Management Fundamentals"
  }
]

export default function SessionsPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Your Sessions</h1>
          <p className="text-muted-foreground">Manage your mentorship sessions</p>
        </div>
        <Button asChild>
          <a href="/dashboard/browse-mentors">Schedule New Session</a>
        </Button>
      </div>

      <div className="space-y-4">
        {sessions.map((session) => (
          <Card key={session.id}>
            <CardContent className="flex items-center gap-4 p-6">
              <Avatar className="h-12 w-12">
                <AvatarImage src={session.mentor.avatar} alt={session.mentor.name} />
                <AvatarFallback>
                  {session.mentor.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <h3 className="font-medium">{session.topic}</h3>
                <p className="text-sm text-muted-foreground">with {session.mentor.name}</p>
                <p className="text-sm text-muted-foreground">{session.mentor.role}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-sm text-right">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(session.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{session.time}</span>
                  </div>
                </div>
                <Button>
                  <Video className="mr-2 h-4 w-4" />
                  Join Session
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {sessions.length === 0 && (
          <Card>
            <CardHeader>
              <CardTitle>No Sessions Scheduled</CardTitle>
              <p className="text-muted-foreground">
                You haven't scheduled any mentorship sessions yet.
              </p>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <a href="/dashboard/browse-mentors">Browse Mentors</a>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

