import Image from "next/image";
import { Twitter, Youtube, Mail, Calendar } from "lucide-react";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Section() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 relative w-48 h-48">
            <div className="relative">
              <Image
                alt="Chris Laupama"
                src="/images/9DE5556A-7E13-4318-A0CE-9967A13ED52C.jpeg"
                width={192}
                height={192}
                className="rounded-full border-4 border-primary"
              />
              <span className="top-0 absolute bg-green-400 rounded-full w-10 h-10 right-2 border-8 border-background" />
            </div>
          </div>
          <h1 className="font-heading text-4xl font-bold mb-4">Chris Laupama</h1>
          <p className="text-muted-foreground text-xl mb-8">
            Full Stack Developer &amp; AI Enthusiast
          </p>
          <div className="max-w-2xl mb-12">
            <p className="text-muted-foreground text-lg">
              Passionate about crafting beautiful, elegant, high-performance web experiences that
              push boundaries. 7 years of building ambitious digital products with modern frameworks
              and emerging technologies.
            </p>
          </div>
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <CardTitle className="font-heading">Let&apos;s connect</CardTitle>
              <CardDescription>Available for freelance projects and opportunities.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Button variant="default" className="flex-1">
                  <Twitter className="mr-2 h-5 w-5" />
                  𝕏 / Twitter
                </Button>
                <Button variant="outline" className="flex-1">
                  <Youtube className="mr-2 h-5 w-5" />
                  YouTube
                </Button>
              </div>
            </CardContent>
            <CardContent>
              <div className="flex gap-4">
                <Button variant="outline" className="flex-1">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </Button>
                <Button variant="outline" className="flex-1">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Call
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="container mx-auto px-4 py-8">
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>© 2025 Chris Laupama. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
