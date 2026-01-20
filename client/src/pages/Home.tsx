import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { Heart, Users, BookOpen, Calendar, ArrowRight, Mail } from "lucide-react";

const features = [
  {
    title: "Newsletter",
    description: "Stay updated with the latest community news, events, and opportunities in the Pennsylvania Caribbean and Latinx community.",
    icon: Mail,
    href: "/newsletter",
    color: "bg-[hsl(12,85%,58%)]",
    iconBg: "bg-[hsl(12,85%,58%)]/10",
    iconColor: "text-[hsl(12,85%,58%)]",
  },
  {
    title: "Resources",
    description: "Access guides, templates, and educational materials that support and uplift our community.",
    icon: BookOpen,
    href: "/resources",
    color: "bg-[hsl(142,62%,38%)]",
    iconBg: "bg-[hsl(142,62%,38%)]/10",
    iconColor: "text-[hsl(142,62%,38%)]",
  },
  {
    title: "Events",
    description: "Discover cultural celebrations, networking sessions, and community gatherings that bring us together.",
    icon: Calendar,
    href: "/events",
    color: "bg-[hsl(330,72%,55%)]",
    iconBg: "bg-[hsl(330,72%,55%)]/10",
    iconColor: "text-[hsl(330,72%,55%)]",
  },
];

export default function Home() {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(190,78%,42%)]/10 via-background to-[hsl(45,92%,55%)]/15">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(190,78%,42%,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(12,85%,58%,0.08),transparent_50%)]" />
        <div className="container mx-auto px-4 py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(45,92%,55%)]/20 px-4 py-1.5 text-sm font-medium text-[hsl(38,80%,28%)]">
              <Heart className="h-4 w-4 text-[hsl(12,85%,58%)]" />
              Representing Our Community
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Welcome to{" "}
              <span className="text-primary">La Kou'm</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Bringing visibility and representation to the Caribbean and Latinx community in Pennsylvania. We connect, celebrate, and strengthen our vibrant culture together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/events">
                <Button size="lg" className="w-full sm:w-auto bg-[hsl(12,85%,58%)] hover:bg-[hsl(12,85%,52%)]" data-testid="button-hero-events">
                  <Calendar className="mr-2 h-5 w-5" />
                  Explore Events
                </Button>
              </Link>
              <Link href="/newsletter">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10" data-testid="button-hero-newsletter">
                  Join Our Community
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              What We Offer
            </h2>
            <p className="text-muted-foreground text-lg">
              Connecting the Caribbean and Latinx community through shared experiences, resources, and celebration.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="group hover-elevate overflow-hidden">
                <div className={`h-1.5 ${feature.color}`} />
                <CardContent className="p-6 space-y-4">
                  <div className={`h-12 w-12 rounded-lg ${feature.iconBg} flex items-center justify-center`}>
                    <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                  </div>
                  <h3 className="font-semibold text-xl">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  <Link href={feature.href}>
                    <Button variant="ghost" className={`group-hover:translate-x-1 transition-transform p-0 h-auto ${feature.iconColor}`} data-testid={`link-feature-${feature.title.toLowerCase()}`}>
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-r from-[hsl(190,78%,42%)] via-[hsl(190,78%,38%)] to-[hsl(142,62%,38%)] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Join Our Growing Community
            </h2>
            <p className="text-white/90 text-lg max-w-xl mx-auto">
              Be part of a movement that celebrates and uplifts Caribbean and Latinx voices in Pennsylvania.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link href="/newsletter">
                <Button size="lg" className="w-full sm:w-auto bg-[hsl(45,92%,55%)] text-[hsl(38,80%,20%)] hover:bg-[hsl(45,92%,50%)]" data-testid="button-cta-newsletter">
                  Subscribe Now
                </Button>
              </Link>
              <Link href="/blog">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/40 text-white hover:bg-white/10" data-testid="button-cta-blog">
                  Read Our Blog
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
