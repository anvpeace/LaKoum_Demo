import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Mail, CheckCircle, Bell, Calendar, BookOpen } from "lucide-react";
import { useState } from "react";

const benefits = [
  {
    icon: Bell,
    title: "Stay Updated",
    description: "Be the first to know about new resources, events, and community updates.",
    color: "bg-[hsl(190,78%,42%)]/10",
    iconColor: "text-[hsl(190,78%,42%)]",
  },
  {
    icon: Calendar,
    title: "Event Invitations",
    description: "Get exclusive invitations to cultural celebrations and community workshops.",
    color: "bg-[hsl(12,85%,58%)]/10",
    iconColor: "text-[hsl(12,85%,58%)]",
  },
  {
    icon: BookOpen,
    title: "Curated Content",
    description: "Receive hand-picked articles, guides, and resources celebrating our culture.",
    color: "bg-[hsl(142,62%,38%)]/10",
    iconColor: "text-[hsl(142,62%,38%)]",
  },
];

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const subscribeMutation = useMutation({
    mutationFn: async (data: { email: string }) => {
      return apiRequest("POST", "/api/newsletter", data);
    },
    onSuccess: () => {
      toast({
        title: "Welcome aboard!",
        description: "You've successfully subscribed to our newsletter.",
      });
      setEmail("");
    },
    onError: (error: Error) => {
      toast({
        title: "Subscription failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      subscribeMutation.mutate({ email });
    }
  };

  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(12,85%,58%)]/10 via-background to-[hsl(45,92%,55%)]/15">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(12,85%,58%,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(45,92%,55%,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(12,85%,58%)]/15 px-4 py-1.5 text-sm font-medium text-[hsl(12,85%,45%)]">
              <Mail className="h-4 w-4" />
              Stay Connected
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight" data-testid="text-newsletter-title">
              Join Our <span className="text-[hsl(12,85%,58%)]">Newsletter</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Subscribe to receive the latest updates on Caribbean and Latinx community events, resources, and opportunities in Pennsylvania.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <Card className="border-t-4 border-t-[hsl(12,85%,58%)]">
              <CardHeader className="text-center">
                <CardTitle className="font-serif text-2xl">Subscribe Now</CardTitle>
                <CardDescription>
                  Join thousands of community members who stay informed.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      data-testid="input-newsletter-email"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[hsl(12,85%,58%)] hover:bg-[hsl(12,85%,52%)]"
                    disabled={subscribeMutation.isPending}
                    data-testid="button-subscribe"
                  >
                    {subscribeMutation.isPending ? (
                      "Subscribing..."
                    ) : (
                      <>
                        <Mail className="mr-2 h-4 w-4" />
                        Subscribe
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12" data-testid="text-benefits-title">
            Why Subscribe?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="text-center hover-elevate" data-testid={`card-benefit-${benefit.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <CardContent className="p-6 space-y-3">
                  <div className={`h-12 w-12 rounded-lg ${benefit.color} flex items-center justify-center mx-auto`}>
                    <benefit.icon className={`h-6 w-6 ${benefit.iconColor}`} />
                  </div>
                  <h3 className="font-semibold text-lg" data-testid={`text-benefit-title-${benefit.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-r from-[hsl(12,85%,58%)] to-[hsl(330,72%,55%)] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <CheckCircle className="h-16 w-16 mx-auto opacity-90" />
            <h2 className="font-serif text-2xl md:text-3xl font-bold">
              We Respect Your Privacy
            </h2>
            <p className="text-white/90 leading-relaxed">
              We promise to only send you valuable content and never share your email with third parties. You can unsubscribe at any time with a single click.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
