"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ComingSoon() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <span className="text-xl font-semibold">Fyntora.sh</span>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-sm text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
            Coming Soon
          </div>

          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-balance">Shaping AI Hardware</h1>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto text-balance leading-relaxed">
            Revolutionary semiconductor technology. Custom CPUs, GPUs, and servers designed for AI.
          </p>

          <div className="max-w-sm mx-auto pt-4">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit">{submitted ? "Thanks" : "Notify Me"}</Button>
            </form>
          </div>
        </div>
      </main>

      <footer className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <p className="text-sm text-muted-foreground text-center">© 2025 Fyntora.sh</p>
        </div>
      </footer>
    </div>
  )
}
