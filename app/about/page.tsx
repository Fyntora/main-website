"use client"

import type React from "react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col animate-in fade-in duration-500">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <span className="text-xl font-semibold">Fyntora.sh</span>
          <nav className="text-sm text-muted-foreground flex gap-6">
            <span className="cursor-default text-foreground">About</span>
            <span className="cursor-default">Technology</span>
            <span className="cursor-default">Contact</span>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1">
        {/* Hero */}
        <section className="container mx-auto px-4 py-20 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-sm text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
            About Fyntora
          </div>

          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-balance">
            Engineering the Future of AI Hardware
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
            Fyntora designs next-generation semiconductor systems purpose-built for artificial
            intelligence. From custom silicon to full-stack server architectures, we build the
            infrastructure that intelligent systems depend on.
          </p>
        </section>

        {/* Image */}
        <section className="container mx-auto px-4">
          <div className="relative w-full aspect-video max-w-5xl mx-auto rounded-xl border border-border overflow-hidden bg-muted">
            <img
              src="/futuristic-ai-hardware-semiconductor-chip-closeup.jpg"
              alt="Fyntora AI Hardware"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="container mx-auto px-4 py-24 grid md:grid-cols-2 gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To remove the hardware bottlenecks limiting artificial intelligence. We believe AI
              deserves silicon designed specifically for its workloads — efficient, scalable,
              and uncompromising in performance.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              A world where intelligent systems run on hardware as advanced as the software they
              power. We aim to define the foundation layer of future AI infrastructure.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="border-t border-border">
          <div className="container mx-auto px-4 py-24 space-y-12">
            <h2 className="text-3xl font-semibold text-center">What We Stand For</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg border border-border space-y-3">
                <h3 className="font-semibold text-lg">Performance First</h3>
                <p className="text-sm text-muted-foreground">
                  Every design decision is driven by real-world AI workloads and measurable gains.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border space-y-3">
                <h3 className="font-semibold text-lg">Vertical Integration</h3>
                <p className="text-sm text-muted-foreground">
                  From silicon to systems, we control the entire stack to unlock efficiency.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border space-y-3">
                <h3 className="font-semibold text-lg">Long-Term Thinking</h3>
                <p className="text-sm text-muted-foreground">
                  We build infrastructure meant to last decades, not product cycles.
                  ( More information soon. )
                </p> 
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-24 text-center space-y-6">
          <h2 className="text-3xl font-semibold">Building What’s Next</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Fyntora is currently developing custom CPUs, GPUs, and AI-optimized servers.
            More details coming soon.
          </p>
          <Button size="lg">Get in Touch</Button>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <p className="text-sm text-muted-foreground text-center">
            © 2025 Fyntora.sh — All rights reserved
          </p>
        </div>
      </footer>
    </div>
  )
}
