import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Video, BookOpen, ExternalLink, FolderOpen } from "lucide-react";

const resourceCategories = [
  { id: "guides", label: "Guides", icon: BookOpen, color: "bg-[hsl(190,78%,42%)]" },
  { id: "templates", label: "Templates", icon: FileText, color: "bg-[hsl(12,85%,58%)]" },
  { id: "videos", label: "Videos", icon: Video, color: "bg-[hsl(142,62%,38%)]" },
];

const resources = [
  {
    id: "community-guide",
    title: "Community Building Guide",
    description: "A comprehensive guide to building and nurturing strong community connections.",
    category: "guides",
    type: "PDF",
    size: "2.4 MB",
    color: "border-t-[hsl(190,78%,42%)]",
    buttonColor: "bg-[hsl(190,78%,42%)]",
  },
  {
    id: "event-planning",
    title: "Cultural Event Planning Template",
    description: "Step-by-step template for planning successful community cultural events.",
    category: "templates",
    type: "DOC",
    size: "1.2 MB",
    color: "border-t-[hsl(12,85%,58%)]",
    buttonColor: "bg-[hsl(12,85%,58%)]",
  },
  {
    id: "heritage-video",
    title: "Caribbean Heritage Series",
    description: "Video series exploring the rich history and traditions of Caribbean culture.",
    category: "videos",
    type: "Video",
    duration: "45 min",
    color: "border-t-[hsl(142,62%,38%)]",
    buttonColor: "bg-[hsl(142,62%,38%)]",
  },
  {
    id: "latinx-handbook",
    title: "Latinx Community Handbook",
    description: "Everything you need to know about resources and opportunities in Pennsylvania.",
    category: "guides",
    type: "PDF",
    size: "3.1 MB",
    color: "border-t-[hsl(330,72%,55%)]",
    buttonColor: "bg-[hsl(330,72%,55%)]",
  },
  {
    id: "meeting-agenda",
    title: "Community Meeting Template",
    description: "Professional meeting agenda template for community gatherings.",
    category: "templates",
    type: "DOC",
    size: "0.5 MB",
    color: "border-t-[hsl(45,92%,55%)]",
    buttonColor: "bg-[hsl(45,92%,55%)] text-[hsl(38,80%,20%)]",
  },
  {
    id: "cultural-traditions",
    title: "Cultural Traditions Documentary",
    description: "Learn about the beautiful traditions that unite our diverse community.",
    category: "videos",
    type: "Video",
    duration: "30 min",
    color: "border-t-[hsl(190,78%,42%)]",
    buttonColor: "bg-[hsl(190,78%,42%)]",
  },
];

export default function Resources() {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(142,62%,38%)]/10 via-background to-[hsl(45,92%,55%)]/15">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(142,62%,38%,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(45,92%,55%,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(142,62%,38%)]/15 px-4 py-1.5 text-sm font-medium text-[hsl(142,62%,32%)]">
              <FolderOpen className="h-4 w-4" />
              Free Resources
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight" data-testid="text-resources-title">
              Community <span className="text-[hsl(142,62%,38%)]">Resources</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Access free guides, templates, and educational materials designed to support and uplift the Caribbean and Latinx community in Pennsylvania.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {resourceCategories.map((cat) => (
              <Badge key={cat.id} className={`${cat.color} text-white px-4 py-2 text-sm`} data-testid={`badge-category-${cat.id}`}>
                <cat.icon className="h-4 w-4 mr-2" />
                {cat.label}
              </Badge>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {resources.map((resource) => (
              <Card key={resource.id} className={`hover-elevate border-t-4 ${resource.color}`} data-testid={`card-resource-${resource.id}`}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg" data-testid={`text-resource-title-${resource.id}`}>
                      {resource.title}
                    </CardTitle>
                    <Badge variant="outline">{resource.type}</Badge>
                  </div>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {resource.size || resource.duration}
                    </span>
                    <Button size="sm" className={resource.buttonColor} data-testid={`button-download-${resource.id}`}>
                      {resource.type === "Video" ? (
                        <>
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Watch
                        </>
                      ) : (
                        <>
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-r from-[hsl(142,62%,38%)] to-[hsl(190,78%,42%)] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Need Something Specific?
            </h2>
            <p className="text-white/90 text-lg max-w-xl mx-auto">
              Can't find what you're looking for? Let us know and we'll work on creating resources that meet your needs.
            </p>
            <Button size="lg" className="bg-[hsl(45,92%,55%)] text-[hsl(38,80%,20%)] hover:bg-[hsl(45,92%,50%)]" data-testid="button-request-resource">
              Request a Resource
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
