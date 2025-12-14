"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ComingSoon() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 600)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  if (isLoading) {
    return (
      <div
        className={`fixed inset-0 flex items-center justify-center transition-opacity duration-500 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <img
          src="https://imagine-public.x.ai/imagine-public/images/e64fa4c2-6ec0-4825-a0de-05441a624af8.png"
          alt="Loading"
          className="absolute inset-0 w-500 h-full object-cover"
        />
        <div className="relative z-10">
          <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col animate-in fade-in duration-500">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <span className="text-xl font-semibold">Fyntora.sh</span>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full text-center space-y-12">
          <div className="space-y-8">
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

          <div className="relative w-full aspect-video max-w-3xl mx-auto rounded-lg border border-border overflow-hidden bg-muted">
            <img
              src="/futuristic-ai-hardware-semiconductor-chip-closeup.jpg"
              alt="Fyntora AI Hardware"
              className="w-full h-full object-cover"
            />
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
