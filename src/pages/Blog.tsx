import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import blogHeader from "@/assets/blog-header.jpg";
import blogAutomation from "@/assets/blog-automation.jpg";
import blogMobile from "@/assets/blog-mobile.jpg";

export default function Blog() {
  // Seed blog posts
  const posts = [
    {
      title: "5 Simple Automations Every Small Business Should Have",
      excerpt: "Save hours every week with these easy-to-implement automation ideas that don't require technical skills.",
      date: "March 15, 2024",
      category: "Automation",
      slug: "5-simple-automations",
      image: blogAutomation,
    },
    {
      title: "Why Your Small Business Needs a Mobile-First Website",
      excerpt: "More than 60% of web traffic comes from mobile devices. Here's why your website must be mobile-optimized.",
      date: "March 10, 2024",
      category: "Web Design",
      slug: "mobile-first-website",
      image: blogMobile,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-card overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${blogHeader})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl text-muted-foreground">
              Tips, guides, and insights to help you grow your small business online.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {posts.map((post, index) => (
              <Card key={index} className="overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 group cursor-pointer">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={16} />
                      {post.date}
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <span className="text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read more <ArrowRight size={16} />
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <Card className="shadow-card bg-accent/20">
              <CardContent className="p-12">
                <h3 className="text-xl font-heading font-semibold mb-2">More articles coming soon</h3>
                <p className="text-muted-foreground">
                  We're working on more helpful content for small business owners. Check back soon!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
