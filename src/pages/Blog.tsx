import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import blogAIAutomation from "@/assets/blog-ai-automation-transform.jpg";
import blogDigitalTransformation from "@/assets/blog-digital-transformation.jpg";
import blogModernWebsite from "@/assets/blog-modern-website.jpg";
import blogSocialMedia from "@/assets/blog-social-media-automation.jpg";
import blogStartupScaleup from "@/assets/blog-startup-scaleup.jpg";
import blogAIChatbots from "@/assets/blog-ai-chatbots.jpg";

export default function Blog() {
  const posts = [
    {
      title: "5 Ways AI Automation Can Transform Your Small Business",
      excerpt: "Discover how artificial intelligence and automation can help you save time, reduce costs, and scale your operations efficiently.",
      date: "Jan 15, 2025",
      category: "AI & Automation",
      readTime: "2 min read",
      image: blogAIAutomation,
    },
    {
      title: "The Complete Guide to Business Digitalization in 2025",
      excerpt: "Everything you need to know about transforming your business into the digital age, from tools to strategies.",
      date: "Jan 10, 2025",
      category: "Digital Transformation",
      readTime: "2 min read",
      image: blogDigitalTransformation,
    },
    {
      title: "Why Your Business Needs a Modern Website (And How to Get One)",
      excerpt: "Learn why a professional website is crucial for business growth and what features make a website truly effective.",
      date: "Jan 5, 2025",
      category: "Web Development",
      readTime: "2 min read",
      image: blogModernWebsite,
    },
    {
      title: "Social Media Automation: Work Smarter, Not Harder",
      excerpt: "Master the art of social media management with automation tools that keep your content flowing 24/7.",
      date: "Dec 28, 2024",
      category: "Social Media",
      readTime: "2 min read",
      image: blogSocialMedia,
    },
    {
      title: "From Startup to Scale-Up: Digital Tools That Matter",
      excerpt: "The essential digital tools and technologies that can help your startup grow into a thriving business.",
      date: "Dec 20, 2024",
      category: "Business Growth",
      readTime: "2 min read",
      image: blogStartupScaleup,
    },
    {
      title: "Understanding AI Chatbots: Your 24/7 Customer Service Solution",
      excerpt: "AI-powered chatbots can revolutionize your customer service and boost customer satisfaction.",
      date: "Dec 15, 2024",
      category: "AI & Automation",
      readTime: "2 min read",
      image: blogAIChatbots,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-background to-accent/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Insights & <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Resources</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert insights on digital transformation, automation, and business growth strategies that deliver results in hours, not days or weeks.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 group cursor-pointer flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4 flex-grow text-sm">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>
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
