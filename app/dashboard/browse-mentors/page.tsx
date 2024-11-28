'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, LinkedinIcon, MessageCircle, Star } from 'lucide-react'
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Sample mentor data
const mentors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Senior Software Engineer at Google",
    expertise: "software-development",
    yearsOfExperience: "10+",
    rating: 4.9,
    totalSessions: 156,
    skills: ["React", "Node.js", "System Design", "Career Growth"],
    bio: "Experienced software engineer specializing in web technologies and distributed systems. Passionate about helping others grow in their tech careers.",
    avatar: "/placeholder.svg?height=100&width=100",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    availableSlots: [
      "9:00 AM",
      "10:00 AM",
      "2:00 PM",
      "4:00 PM"
    ]
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager at Microsoft",
    expertise: "product-management",
    yearsOfExperience: "8",
    rating: 4.8,
    totalSessions: 98,
    skills: ["Product Strategy", "Agile", "User Research", "Leadership"],
    bio: "Product leader with experience in both B2B and B2C products. Love helping aspiring PMs navigate their career path.",
    avatar: "/placeholder.svg?height=100&width=100",
    linkedin: "https://linkedin.com/in/michaelchen",
    availableSlots: [
      "11:00 AM",
      "1:00 PM",
      "3:00 PM",
      "5:00 PM"
    ]
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Senior Data Scientist at Netflix",
    expertise: "data-science",
    yearsOfExperience: "7",
    rating: 4.7,
    totalSessions: 72,
    skills: ["Machine Learning", "Python", "Data Analysis", "AI"],
    bio: "Data scientist passionate about ML and AI. Experienced in helping others transition into data science careers.",
    avatar: "/placeholder.svg?height=100&width=100",
    linkedin: "https://linkedin.com/in/emilyrodriguez",
    availableSlots: [
      "9:30 AM",
      "11:30 AM",
      "2:30 PM",
      "4:30 PM"
    ]
  }
]

export default function BrowseMentorsPage() {
  const [selectedMentor, setSelectedMentor] = useState<typeof mentors[0] | null>(null)
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [timeSlot, setTimeSlot] = useState<string>("")

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Browse Mentors</h1>
          <p className="text-muted-foreground">Find and connect with experienced mentors</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mentors.map((mentor) => (
          <Card key={mentor.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-start gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={mentor.avatar} alt={mentor.name} />
                  <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <CardTitle className="text-lg">{mentor.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{mentor.role}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="font-medium">{mentor.rating}</span>
                <span className="text-muted-foreground">({mentor.totalSessions} sessions)</span>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground line-clamp-2">{mentor.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {mentor.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 pt-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className="flex-1"
                      onClick={() => setSelectedMentor(mentor)}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule Session
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Schedule Session with {selectedMentor?.name}</DialogTitle>
                      <DialogDescription>
                        Select a date and time for your mentorship session
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Select Date</label>
                        <CalendarComponent
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          className="rounded-md border"
                          disabled={(date) => date < new Date() || date > new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Select Time Slot</label>
                        <Select onValueChange={setTimeSlot} value={timeSlot}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a time slot" />
                          </SelectTrigger>
                          <SelectContent>
                            {selectedMentor?.availableSlots.map((slot) => (
                              <SelectItem key={slot} value={slot}>
                                {slot}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <Button 
                        className="w-full"
                        disabled={!date || !timeSlot}
                        onClick={() => {
                          // Handle session scheduling
                          console.log('Session scheduled:', {
                            mentor: selectedMentor?.name,
                            date,
                            timeSlot
                          })
                        }}
                      >
                        Confirm Session
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button variant="outline" size="icon" asChild>
                  <Link href={mentor.linkedin} target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

