import { Link } from "wouter";
import { Heart, Mail, Phone, MapPin } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from "react-icons/si";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary">
                <Heart className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-serif text-xl font-semibold">La Kou'm</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Bringing visibility and representation to the Caribbean and Latinx community in Pennsylvania.
            </p>
            <div className="flex gap-2 justify-center md:justify-start">
              <Button variant="ghost" size="icon" data-testid="link-facebook">
                <SiFacebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="link-instagram">
                <SiInstagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="link-linkedin">
                <SiLinkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="link-twitter">
                <SiX className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/newsletter" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-newsletter">
                Newsletter
              </Link>
              <Link href="/resources" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-resources">
                Resources
              </Link>
              <Link href="/events" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-events">
                Events
              </Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-blog">
                Blog
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start justify-center md:justify-start gap-3">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground text-left">
                  123 Community Street<br />
                  San Francisco, CA 94102
                </p>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="h-4 w-4 text-muted-foreground shrink-0" />
                <a href="tel:+1-555-123-4567" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
                <a href="mailto:hello@lakoum.org" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  hello@lakoum.org
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <nav className="flex flex-col gap-2">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t mt-10 pt-8 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 text-center">
          <p className="text-sm text-muted-foreground">
            2024 La Kou'm. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Building community together.
          </p>
        </div>
      </div>
    </footer>
  );
}
