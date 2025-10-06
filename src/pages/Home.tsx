import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Globe, Share2, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-business.jpg";

export default function Home() {
  const services = [
    {
      icon: Globe,
      title: "Website Building",
      description: "Mobile-first websites delivered quickly — SEO-ready and easy for customers to use.",
      link: "/services/websites",
    },
    {
      icon: Zap,
      title: "AI Automations",
      description: "Automate invoices, receipts, social posting and simple chat replies — set once, let it run.",
      link: "/services/ai-automations",
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Strategy, content creation and scheduled posting so you show up consistently.",
      link: "/services/social-media",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Book a Call",
      description: "Tell us what you need — we'll understand your business and goals.",
    },
    {
      step: "2",
      title: "We Build It",
      description: "Fast delivery with regular check-ins. No tech jargon, just results.",
    },
    {
      step: "3",
      title: "You Scale",
      description: "Go live and watch your business grow with automated systems.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Full-width background image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-background/50 backdrop-blur-[2px]" />
        </div>

        {/* Content overlay */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Hero Content */}
            <div className="space-y-8 text-center">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight text-reveal text-reveal-1">
                  Scale your small business — websites & AI automations made for SMBs.
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-reveal text-reveal-2">
                  Fast, affordable, and simple — digital solutions built for local shops, cafés, clinics, and service providers.
                </p>
              </div>

              {/* Ribbon */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border text-sm text-muted-foreground text-reveal text-reveal-2">
                <CheckCircle2 size={16} className="text-primary" />
                <span className="font-medium">SMB-FIRST • Fast launch • Low cost • No tech skills</span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-reveal text-reveal-2">
                <Link to="/contact">
                  <Button variant="gradient" size="lg">
                    Book a demo
                    <ArrowRight size={18} />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="ghost" size="lg">
                    See services
                  </Button>
                </Link>
              </div>

              {/* Glass Demo Card */}
              <Card className="shadow-card bg-card/50 backdrop-blur-sm border border-border/50 text-reveal text-reveal-2 max-w-2xl mx-auto">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Zap className="text-primary" size={24} />
                    </div>
                    <div className="text-left">
                      <h3 className="font-heading font-semibold mb-1">Free 15-min Demo</h3>
                      <p className="text-sm text-muted-foreground">
                        See exactly how we can automate your business processes — no strings attached.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
              Digital Solutions for Small Businesses
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to grow your business online — simple, affordable, and effective.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link}>
                <Card className="h-full transition-all duration-300 hover:shadow-soft hover:-translate-y-1 cursor-pointer group">
                  <CardContent className="p-8">
                    <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="text-primary" size={28} />
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <span className="text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn more <ArrowRight size={16} />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, transparent process from first call to launch.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {howItWorks.map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary text-2xl font-heading font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-heading font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Preview */}
      <section className="py-20 bg-gradient-to-br from-accent/5 via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
              Built for Your Industry
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready-to-use templates and automations for different business types.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Café", "Retail", "Clinic", "Services"].map((type, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-soft">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-4xl font-heading font-bold text-primary/40">{type}</span>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold mb-2">{type} Template</h3>
                  <p className="text-sm text-muted-foreground">
                    Pre-built solutions for {type.toLowerCase()} businesses.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/templates">
              <Button variant="ghost" size="lg">
                View all templates
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-soft bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 border-primary/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
                Ready to scale your business?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book a free 15-minute demo and see how we can help automate and grow your business.
              </p>
              <Link to="/contact">
                <Button variant="gradient" size="lg">
                  Book your free demo
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
