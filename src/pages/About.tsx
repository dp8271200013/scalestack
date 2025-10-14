import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, Users, Zap } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "SMB-First",
      description: "We build specifically for small and medium businesses — no enterprise jargon, no unnecessary complexity.",
    },
    {
      icon: Users,
      title: "Simple & Clear",
      description: "Plain language, transparent pricing, and easy processes. No surprises, no hidden fees.",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "We move quickly because your time matters. Launch in weeks, not months.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
              About GROWNETIX
            </h1>
            <p className="text-xl text-muted-foreground">
              Digital solutions built for small businesses by people who understand them.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-soft">
              <CardContent className="p-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-heading font-bold mb-6">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Small businesses are the backbone of our economy, but they often lack access to affordable, quality digital tools. Enterprise solutions are too complex and expensive. DIY tools take too much time to learn.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We bridge that gap. GROWNETIX provides professional websites, smart automations, and social media management at prices small businesses can afford — with service that feels personal, not corporate.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">Our Approach</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How we work with small businesses to deliver real results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-card">
                <CardContent className="p-8">
                  <div className="inline-flex bg-primary/10 w-16 h-16 rounded-xl items-center justify-center mb-6">
                    <value.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-soft">
              <CardContent className="p-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-heading font-bold mb-6">Approach</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  At GROWNETIX we believe powerful digital tools should be accessible. We offer <strong>cheap, flexible pricing</strong> tailored for small and growing businesses — no lock-in, clear packages, and pay-as-you-grow options that match real budgets. Our approach combines fast websites, hands-off automations, and simple, transparent pricing so you can scale without surprise costs.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <div className="w-2 h-2 rounded-full bg-primary mx-auto" />
                    <h3 className="font-heading font-semibold text-center">Flexible Plans</h3>
                    <p className="text-sm text-muted-foreground text-center">Pay-as-you-grow packages that match your budget</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-2 h-2 rounded-full bg-primary mx-auto" />
                    <h3 className="font-heading font-semibold text-center">No Hidden Fees</h3>
                    <p className="text-sm text-muted-foreground text-center">Clear, transparent pricing with no surprises</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-2 h-2 rounded-full bg-primary mx-auto" />
                    <h3 className="font-heading font-semibold text-center">Tailored Onboarding</h3>
                    <p className="text-sm text-muted-foreground text-center">Personalized setup designed for your business</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6">GROWNETIX</h2>
              <p className="text-lg text-muted-foreground uppercase tracking-widest">
                Create • Automate • Scale
              </p>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We help small businesses compete in the digital world by making professional tools accessible, affordable, and easy to use.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-soft bg-gradient-to-br from-card to-accent/20 max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
                Let's grow your business together
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book a free 15-minute demo and see how GROWNETIX can help you scale.
              </p>
              <Link to="/contact">
                <Button variant="gradient" size="lg">
                  Book a Demo
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
