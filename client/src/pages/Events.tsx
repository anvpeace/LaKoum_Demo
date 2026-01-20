import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, CalendarDays, ArrowRight } from "lucide-react";

const upcomingEvents = [
  {
    id: "community-workshop",
    title: "Community Building Workshop",
    date: "February 15, 2024",
    time: "10:00 AM - 2:00 PM",
    location: "Community Center, Philadelphia",
    type: "Workshop",
    spots: 25,
    description: "Learn effective strategies for building and maintaining strong community connections.",
    color: "bg-[hsl(190,78%,42%)]",
  },
  {
    id: "cultural-celebration",
    title: "Caribbean Heritage Celebration",
    date: "February 22, 2024",
    time: "6:00 PM - 10:00 PM",
    location: "City Hall Plaza, Philadelphia",
    type: "Cultural",
    spots: 200,
    description: "A vibrant celebration of Caribbean culture with music, food, and dance.",
    color: "bg-[hsl(12,85%,58%)]",
  },
  {
    id: "latinx-summit",
    title: "Latinx Leadership Summit",
    date: "March 10, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Convention Center, Pittsburgh",
    type: "Conference",
    spots: 150,
    description: "A full-day conference featuring speakers, workshops, and networking opportunities.",
    color: "bg-[hsl(330,72%,55%)]",
  },
  {
    id: "volunteer-training",
    title: "Volunteer Training Session",
    date: "March 18, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "Online (Zoom)",
    type: "Training",
    spots: 100,
    description: "Comprehensive training for new and returning volunteers.",
    color: "bg-[hsl(142,62%,38%)]",
  },
];

const pastEvents = [
  {
    id: "past-1",
    title: "Winter Fundraising Gala",
    date: "December 10, 2023",
    attendees: 150,
  },
  {
    id: "past-2",
    title: "Community Cleanup Day",
    date: "November 15, 2023",
    attendees: 75,
  },
  {
    id: "past-3",
    title: "Cultural Dance Workshop",
    date: "October 20, 2023",
    attendees: 45,
  },
];

export default function Events() {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(330,72%,55%)]/10 via-background to-[hsl(190,78%,42%)]/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(330,72%,55%,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(190,78%,42%,0.08),transparent_50%)]" />
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(330,72%,55%)]/15 px-4 py-1.5 text-sm font-medium text-[hsl(330,72%,45%)]">
              <CalendarDays className="h-4 w-4" />
              Community Events
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight" data-testid="text-events-title">
              Upcoming <span className="text-[hsl(330,72%,55%)]">Events</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join us at cultural celebrations, workshops, and networking events that bring the Caribbean and Latinx community together across Pennsylvania.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12" data-testid="text-upcoming-title">
            Upcoming Events
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover-elevate overflow-hidden" data-testid={`card-event-${event.id}`}>
                <div className={`h-1.5 ${event.color}`} />
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-xl" data-testid={`text-event-title-${event.id}`}>
                      {event.title}
                    </CardTitle>
                    <Badge className={`${event.color} text-white`}>{event.type}</Badge>
                  </div>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4 shrink-0" />
                      <span data-testid={`text-event-date-${event.id}`}>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4 shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 shrink-0" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4 shrink-0" />
                      <span>{event.spots} spots available</span>
                    </div>
                  </div>
                  <Button className={`w-full ${event.color} hover:opacity-90`} data-testid={`button-register-${event.id}`}>
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12" data-testid="text-past-events-title">
            Past Events
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pastEvents.map((event, index) => {
              const colors = ["border-t-[hsl(190,78%,42%)]", "border-t-[hsl(12,85%,58%)]", "border-t-[hsl(45,92%,55%)]"];
              return (
                <Card key={event.id} className={`border-t-4 ${colors[index % 3]}`} data-testid={`card-past-event-${event.id}`}>
                  <CardContent className="p-6 text-center space-y-2">
                    <h3 className="font-semibold" data-testid={`text-past-event-title-${event.id}`}>
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                    <p className="text-sm text-primary font-medium">{event.attendees} attendees</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-r from-[hsl(330,72%,55%)] via-[hsl(12,85%,58%)] to-[hsl(45,92%,55%)] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Want to Host an Event?
            </h2>
            <p className="text-white/90 text-lg max-w-xl mx-auto">
              We're always looking for community members to lead cultural celebrations, organize meetups, or host special events.
            </p>
            <Button size="lg" className="bg-white text-[hsl(330,72%,45%)] hover:bg-white/90" data-testid="button-host-event">
              Submit Event Proposal
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
