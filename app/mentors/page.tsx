'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react"
import { LinkedinIcon, MessageCircle } from 'lucide-react'

// This would typically come from your API
const mentors = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Senior Software Engineer",
    expertise: "software-development",
    yearsOfExperience: "7-10",
    skills: ["React", "Node.js", "Python"],
    bio: "Full-stack developer with 8 years of experience. Passionate about mentoring and helping others grow in their tech careers.",
    avatar: "/placeholder.svg?height=100&width=100",
    linkedin: "https://linkedin.com/in/sarahjohnson",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    expertise: "product-management",
    yearsOfExperience: "4-6",
    skills: ["Product Strategy", "Agile", "User Research"],
    bio: "Product manager with experience in both startups and enterprise companies. Love helping aspiring PMs navigate their career path.",
    avatar: "/placeholder.svg?height=100&width=100",
    linkedin: "https://linkedin.com/in/michaelchen",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "UX Design Lead",
    expertise: "ux-design",
    yearsOfExperience: "10+",
    skills: ["UI Design", "User Research", "Design Systems"],
    bio: "Design leader with a passion for creating intuitive user experiences. Excited to mentor the next generation of designers.",
    avatar: "/placeholder.svg?height=100&width=100",
    linkedin: "https://linkedin.com/in/emilyrodriguez",
  },
  // Add more mentor data as needed
]

export default function MentorsPage() {
  const [selectedExpertise, setSelectedExpertise] = useState<string>("")
  const [selectedExperience, setSelectedExperience] = useState<string>("")

  const filteredMentors = mentors.filter((mentor) => {
    if (selectedExpertise && mentor.expertise !== selectedExpertise) {
      return false
    }
    if (selectedExperience && mentor.yearsOfExperience !== selectedExperience) {
      return false
    }
    return true
  })

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Find Your Mentor</h1>
          <p className="text-muted-foreground">
            Connect with experienced professionals who can guide you in your career
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4">
          <div className="w-full md:w-64">
            <Select
              value={selectedExpertise}
              onValueChange={setSelectedExpertise}
            >
              <SelectTrigger>
                <SelectValue placeholder="Filter by expertise" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Expertise</SelectItem>
                <SelectItem value="software-development">
                  Software Development
                </SelectItem>
                <SelectItem value="data-science">Data Science</SelectItem>
                <SelectItem value="product-management">
                  Product Management
                </SelectItem>
                <SelectItem value="ux-design">UX Design</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="w-full md:w-64">
            <Select
              value={selectedExperience}
              onValueChange={setSelectedExperience}
            >
              <SelectTrigger>
                <SelectValue placeholder="Filter by experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Experience Levels</SelectItem>
                <SelectItem value="1-3">1-3 years</SelectItem>
                <SelectItem value="4-6">4-6 years</SelectItem>
                <SelectItem value="7-10">7-10 years</SelectItem>
                <SelectItem value="10+">10+ years</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Mentors Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredMentors.map((mentor) => (
            <Card key={mentor.id} className="overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={mentor.avatar} alt={mentor.name} />
                    <AvatarFallback>
                      {mentor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <CardTitle className="text-lg">{mentor.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {mentor.role}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {mentor.bio}
                </p>
                <div className="flex flex-wrap gap-2">
                  {mentor.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 pt-4">
                  <Button className="flex-1">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Request Mentorship
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href={mentor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedinIcon className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredMentors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No mentors found matching your criteria. Try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

