export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen bg-slate-50">
      <nav className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-xl font-bold">MentorConnect</h1>
        </div>
      </nav>
      {children}
    </main>
  )
}

