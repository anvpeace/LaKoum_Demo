import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Newspaper, Clock, User, ArrowRight } from "lucide-react";

const featuredPost = {
  id: "featured",
  title: "Celebrating Caribbean Heritage: A Guide to Our Rich Cultural Traditions",
  excerpt: "Discover the vibrant traditions, music, and customs that make Caribbean culture so unique. From carnival celebrations to traditional cuisine, explore what connects our diverse community.",
  author: "Maria Rodriguez",
  date: "January 15, 2024",
  readTime: "8 min read",
  category: "Culture",
};

const blogPosts = [
  {
    id: "post-1",
    title: "5 Ways to Connect with Your Local Latinx Community",
    excerpt: "Looking for ways to get involved? Here are five practical steps you can take to become more active in the Pennsylvania Latinx community.",
    author: "Carlos Martinez",
    date: "January 10, 2024",
    readTime: "5 min read",
    category: "Community",
    color: "border-t-[hsl(190,78%,42%)]",
  },
  {
    id: "post-2",
    title: "The Power of Cultural Unity",
    excerpt: "How Caribbean and Latinx communities are coming together to create lasting change in neighborhoods across Pennsylvania.",
    author: "Ana Santos",
    date: "January 5, 2024",
    readTime: "6 min read",
    category: "Unity",
    color: "border-t-[hsl(12,85%,58%)]",
  },
  {
    id: "post-3",
    title: "Traditional Recipes from Our Homeland",
    excerpt: "A collection of beloved family recipes passed down through generations, celebrating our culinary heritage.",
    author: "Rosa Diaz",
    date: "December 28, 2023",
    readTime: "7 min read",
    category: "Food",
    color: "border-t-[hsl(45,92%,55%)]",
  },
  {
    id: "post-4",
    title: "Hosting Inclusive Cultural Events",
    excerpt: "Tips and best practices for creating events that welcome and celebrate the diversity within our community.",
    author: "Juan Perez",
    date: "December 20, 2023",
    readTime: "6 min read",
    category: "Events",
    color: "border-t-[hsl(330,72%,55%)]",
  },
  {
    id: "post-5",
    title: "Youth Leadership in Our Community",
    excerpt: "Highlighting young leaders who are making extraordinary contributions to Caribbean and Latinx communities.",
    author: "Sofia Hernandez",
    date: "December 15, 2023",
    readTime: "8 min read",
    category: "Youth",
    color: "border-t-[hsl(142,62%,38%)]",
  },
  {
    id: "post-6",
    title: "Music That Moves Us: Caribbean Rhythms",
    excerpt: "Exploring the rich musical traditions from reggae to salsa that unite our community in celebration.",
    author: "Miguel Ramos",
    date: "December 10, 2023",
    readTime: "5 min read",
    category: "Music",
    color: "border-t-[hsl(190,78%,42%)]",
  },
];

const categories = [
  { name: "All", color: "bg-primary" },
  { name: "Culture", color: "bg-[hsl(12,85%,58%)]" },
  { name: "Community", color: "bg-[hsl(190,78%,42%)]" },
  { name: "Events", color: "bg-[hsl(330,72%,55%)]" },
  { name: "Food", color: "bg-[hsl(45,92%,55%)] text-[hsl(38,80%,20%)]" },
  { name: "Music", color: "bg-[hsl(142,62%,38%)]" },
];

export default function Blog() {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(45,92%,55%)]/15 via-background to-[hsl(12,85%,58%)]/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(45,92%,55%,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(12,85%,58%,0.08),transparent_50%)]" />
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(45,92%,55%)]/25 px-4 py-1.5 text-sm font-medium text-[hsl(38,80%,28%)]">
              <Newspaper className="h-4 w-4" />
              Latest Articles
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight" data-testid="text-blog-title">
              Community <span className="text-[hsl(45,92%,45%)]">Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Stories, insights, and updates celebrating Caribbean and Latinx culture, achievements, and community voices in Pennsylvania.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden mb-12 max-w-4xl mx-auto border-l-4 border-l-[hsl(12,85%,58%)]" data-testid="card-featured-post">
            <div className="grid md:grid-cols-2">
              <div className="bg-gradient-to-br from-[hsl(12,85%,58%)] to-[hsl(45,92%,55%)] p-8 flex items-center justify-center">
                <Newspaper className="h-24 w-24 text-white/80" />
              </div>
              <div className="p-6 md:p-8 space-y-4">
                <Badge className="bg-[hsl(12,85%,58%)] text-white">{featuredPost.category}</Badge>
                <CardTitle className="text-2xl" data-testid="text-featured-title">
                  {featuredPost.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {featuredPost.excerpt}
                </CardDescription>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <Button className="bg-[hsl(12,85%,58%)] hover:bg-[hsl(12,85%,52%)]" data-testid="button-read-featured">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>

          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <Badge
                key={cat.name}
                className={`${cat.color} px-4 py-2 cursor-pointer text-white`}
                data-testid={`badge-blog-category-${cat.name.toLowerCase()}`}
              >
                {cat.name}
              </Badge>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <Card key={post.id} className={`hover-elevate border-t-4 ${post.color}`} data-testid={`card-blog-${post.id}`}>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight" data-testid={`text-blog-title-${post.id}`}>
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <Button variant="ghost" className="w-full" data-testid={`button-read-${post.id}`}>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-primary text-primary" data-testid="button-load-more">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-r from-[hsl(45,92%,55%)] via-[hsl(12,85%,58%)] to-[hsl(330,72%,55%)] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Want to Contribute?
            </h2>
            <p className="text-white/90 text-lg max-w-xl mx-auto">
              We welcome stories from community members. Share your experiences, traditions, and insights with our readers.
            </p>
            <Button size="lg" className="bg-white text-[hsl(12,85%,45%)] hover:bg-white/90" data-testid="button-submit-post">
              Submit a Story
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
