'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Video, CheckCircle2, XCircle } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"

// Sample sessions data for mentor
const sessions = [
  {
    id: 1,
    mentee: {
      name: "Alex Thompson",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Junior Developer",
      company: "Tech Startup Inc."
    },
    date: "2024-03-15",
    time: "10:00 AM",
    status: "upcoming",
    topic: "Career Growth in Software Development",
    goals: "Looking to transition from junior to senior developer role, need guidance on technical leadership."
  },
  {
    id: 2,
    mentee: {
      name: "Maria Garcia",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Software Engineer",
      company: "Innovation Labs"
    },
    date: "2024-03-16",
    time: "2:00 PM",
    status: "upcoming",
    topic: "System Design Best Practices",
    goals: "Want to improve system design skills and understand scalability better."
  },
  {
    id: 3,
    mentee: {
      name: "James Wilson",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Frontend Developer",
      company: "Digital Solutions"
    },
    date: "2024-03-14",
    time: "11:00 AM",
    status: "completed",
    topic: "React Performance Optimization",
    goals: "Need help with optimizing React applications and implementing best practices."
  }
]

export default function MentorSessionsPage() {
  const [filter, setFilter] = useState<string>("all")
  const [selectedSession, setSelectedSession] = useState<typeof sessions[0] | null>(null)
  const [feedback, setFeedback] = useState("")

  const filteredSessions = sessions.filter(session => {
    if (filter === "completed") return session.status === "completed"
    if (filter === "upcoming") return session.status === "upcoming"
    return true
  })

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Your Mentoring Sessions</h1>
          <p className="text-muted-foreground">Manage and track your mentoring sessions</p>
        </div>
        <div className="flex items-center gap-4">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter sessions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sessions</SelectItem>
              <SelectItem value="upcoming">Upcoming</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{sessions.length}</div>
            <p className="text-xs text-muted-foreground">
              {sessions.filter(s => s.status === "upcoming").length} upcoming
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              4 hours of mentoring
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">100%</div>
            <p className="text-xs text-muted-foreground">
              All sessions completed successfully
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        {filteredSessions.map((session) => (
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
                  <Badge variant={session.status === 'completed' ? "secondary" : "default"}>
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
                    <span>{session.time}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  {session.status === 'upcoming' ? (
                    <Button>
                      <Video className="mr-2 h-4 w-4" />
                      Join Session
                    </Button>
                  ) : (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline"
                          onClick={() => setSelectedSession(session)}
                        >
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Session Details</DialogTitle>
                          <DialogDescription>
                            Review session information and add feedback
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="space-y-2">
                            <h4 className="font-medium">Mentee Goals</h4>
                            <p className="text-sm text-muted-foreground">{session.goals}</p>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Session Feedback</label>
                            <Textarea
                              placeholder="Add your feedback about the session..."
                              value={feedback}
                              onChange={(e) => setFeedback(e.target.value)}
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button onClick={() => {
                            console.log('Feedback submitted:', feedback)
                            setFeedback('')
                          }}>
                            Save Feedback
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {filteredSessions.length === 0 && (
          <Card>
            <CardHeader>
              <CardTitle>No Sessions Found</CardTitle>
              <p className="text-muted-foreground">
                No sessions match your current filter criteria.
              </p>
            </CardHeader>
          </Card>
        )}
      </div>
    </div>
  )
}

