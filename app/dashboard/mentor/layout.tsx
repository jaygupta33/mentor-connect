import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Users, Calendar, MessageCircle, Settings, LogOut, Clock } from 'lucide-react'

export default function MentorDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 border-r bg-slate-50/50 hidden md:block">
        <div className="h-16 border-b flex items-center px-6">
          <Link href="/" className="text-xl font-bold">
            MentorConnect
          </Link>
        </div>
        <div className="px-4 py-6 space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-start"
            asChild
          >
            <Link href="/dashboard/mentor">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start"
            asChild
          >
            <Link href="/dashboard/mentor/sessions">
              <Calendar className="mr-2 h-4 w-4" />
              Sessions
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start"
            asChild
          >
            <Link href="/dashboard/mentor/availability">
              <Clock className="mr-2 h-4 w-4" />
              Availability
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start"
            asChild
          >
            <Link href="/dashboard/mentor/mentees">
              <Users className="mr-2 h-4 w-4" />
              My Mentees
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start"
            asChild
          >
            <Link href="/dashboard/mentor/messages">
              <MessageCircle className="mr-2 h-4 w-4" />
              Messages
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start"
            asChild
          >
            <Link href="/dashboard/mentor/settings">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Link>
          </Button>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <Button
            variant="ghost"
            className="w-full justify-start text-red-500 hover:text-red-500 hover:bg-red-50"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b flex items-center px-6 bg-white">
          <div className="flex-1" />
          <nav className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Help
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/profile">Profile</Link>
            </Button>
          </nav>
        </header>
        {children}
      </div>
    </div>
  )
}

