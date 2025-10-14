import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import serviceImage from "@/assets/service-websites.jpg";

export default function ServiceWebsites() {
  const benefits = [
    "Mobile-first responsive design that looks great on all devices",
    "SEO optimization to help customers find you on Google",
    "Fast loading speeds for better user experience",
    "Easy content management — no coding required",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link to="/services" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors">
              ← Back to Services
            </Link>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Website Building
            </h1>
            <p className="text-xl text-muted-foreground">
              Mobile-first websites delivered quickly — SEO-ready and easy for customers to use.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Description */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your website is often the first impression customers have of your business. We build fast, beautiful, mobile-first websites that help you stand out and convert visitors into customers. Whether you need a simple one-page site or a full business website, we deliver professional results quickly and affordably.
              </p>
            </div>

            {/* Benefits */}
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-heading font-bold mb-6">What You Get</h2>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary mt-1 shrink-0" size={20} />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Example Images */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="overflow-hidden shadow-card">
                <img
                  src={serviceImage}
                  alt="Modern website design example on laptop"
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold mb-2">Modern Design</h3>
                  <p className="text-sm text-muted-foreground">
                    Clean, professional layouts that reflect your brand.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden shadow-card">
                <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-6xl">📱</span>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold mb-2">Mobile Optimized</h3>
                  <p className="text-sm text-muted-foreground">
                    Perfect experience on phones, tablets, and desktops.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* CTA */}
            <Card className="shadow-soft bg-gradient-to-br from-card to-accent/20">
              <CardContent className="p-8 sm:p-12 text-center">
                <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4">
                  Ready to get your website?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Book a free demo and we'll show you exactly what we can build for your business.
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
        </div>
      </section>
    </div>
  );
}
