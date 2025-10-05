import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Zap, Share2, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Website Building",
      description: "Mobile-first websites delivered quickly — SEO-ready and easy for customers to use. Perfect for local businesses that need a professional online presence.",
      features: ["Responsive design", "SEO optimized", "Fast delivery", "Easy to update"],
      link: "/services/websites",
    },
    {
      icon: Zap,
      title: "AI Automations",
      description: "Automate invoices, receipts, social posting and simple chat replies — set once, let it run. Save hours every week on repetitive tasks.",
      features: ["Invoice automation", "Receipt generation", "Social posting", "Chat replies"],
      link: "/services/ai-automations",
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Strategy, content creation and scheduled posting so you show up consistently. Build your brand without the daily hassle.",
      features: ["Content strategy", "Post creation", "Scheduling", "Analytics"],
      link: "/services/social-media",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Services Built for Small Businesses
            </h1>
            <p className="text-xl text-muted-foreground">
              Simple, affordable solutions that help your business grow. No technical knowledge required.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden shadow-card">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                    <div className="space-y-6">
                      <div className="inline-flex bg-primary/10 w-16 h-16 rounded-xl items-center justify-center">
                        <service.icon className="text-primary" size={32} />
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4">
                          {service.title}
                        </h2>
                        <p className="text-muted-foreground text-lg mb-6">{service.description}</p>
                      </div>
                      <Link to={service.link}>
                        <Button variant="gradient">
                          Learn more
                          <ArrowRight size={18} />
                        </Button>
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <ul className="space-y-4">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              Not sure what you need?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a free 15-minute call and we'll help you figure out the best solution for your business.
            </p>
            <Link to="/contact">
              <Button variant="gradient" size="lg">
                Book a free consultation
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
