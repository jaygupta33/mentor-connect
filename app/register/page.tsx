import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { GraduationCap, Users } from 'lucide-react'

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Join MentorConnect</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Choose how you want to participate in our mentorship program
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 max-w-4xl mx-auto">
          <Card className="relative overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6" />
                Register as a Mentor
              </CardTitle>
              <CardDescription>
                Share your expertise and guide others in their professional journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="mb-6 space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Share your professional experience
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Help others grow in their careers
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Flexible time commitment
                </li>
              </ul>
              <Link href="/register/mentor">
                <Button className="w-full">Register as Mentor</Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-6 w-6" />
                Register as a Mentee
              </CardTitle>
              <CardDescription>
                Get guidance from experienced professionals in your field
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="mb-6 space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Learn from experienced professionals
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Get personalized career guidance
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Expand your professional network
                </li>
              </ul>
              <Link href="/register/mentee">
                <Button className="w-full">Register as Mentee</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

