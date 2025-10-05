import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import cafeImage from "@/assets/template-cafe.jpg";
import retailImage from "@/assets/template-retail.jpg";
import clinicImage from "@/assets/template-clinic.jpg";
import serviceImage from "@/assets/template-service.jpg";

export default function Templates() {
  const templates = [
    {
      title: "Café & Restaurant",
      image: cafeImage,
      description: "Showcase your menu, accept online orders, and share your story. Perfect for cafés, restaurants, and food businesses.",
      features: ["Menu display", "Online ordering", "Location & hours", "Social media feeds"],
      sampleCopy: "\"Welcome to our cozy corner. Fresh coffee, homemade pastries, and a warm atmosphere await you.\"",
      automations: [
        "Daily specials posted to Instagram automatically",
        "Order confirmations sent via WhatsApp",
        "Weekly email with new menu items",
      ],
    },
    {
      title: "Retail & Boutique",
      image: retailImage,
      description: "Elegant product showcases, online shopping, and brand storytelling. Ideal for boutiques, fashion, and retail stores.",
      features: ["Product catalog", "Shopping cart", "Brand story", "Customer reviews"],
      sampleCopy: "\"Curated fashion pieces that tell your story. Discover unique styles that fit your personality.\"",
      automations: [
        "New arrival notifications to subscribers",
        "Abandoned cart recovery emails",
        "Weekly style tips on social media",
      ],
    },
    {
      title: "Clinic & Healthcare",
      image: clinicImage,
      description: "Professional healthcare websites with appointment booking and patient information. Perfect for clinics, dentists, and wellness centers.",
      features: ["Service descriptions", "Appointment booking", "Patient resources", "Team profiles"],
      sampleCopy: "\"Your health, our priority. Compassionate care delivered by experienced professionals in a welcoming environment.\"",
      automations: [
        "Appointment reminders via SMS",
        "Patient intake forms automated",
        "Health tips posted weekly",
      ],
    },
    {
      title: "Service Business",
      image: serviceImage,
      description: "Build trust with service portfolios, testimonials, and easy booking. Great for consultants, contractors, and service providers.",
      features: ["Service packages", "Portfolio/case studies", "Client testimonials", "Contact forms"],
      sampleCopy: "\"Expert services you can trust. From consultation to completion, we deliver quality results on time.\"",
      automations: [
        "Quote requests sent to your email instantly",
        "Follow-up messages to potential clients",
        "Monthly newsletter with tips and updates",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Templates Built for Your Business
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready-to-use solutions with pre-built designs, copy, and automation flows for different business types.
            </p>
          </div>
        </div>
      </section>

      {/* Templates */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {templates.map((template, index) => (
              <div key={index} className="max-w-6xl mx-auto">
                <Card className="overflow-hidden shadow-soft">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-64 lg:h-auto">
                      <img
                        src={template.image}
                        alt={`${template.title} template example`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                      <h2 className="text-3xl font-heading font-bold mb-4">{template.title}</h2>
                      <p className="text-muted-foreground mb-6">{template.description}</p>

                      {/* Features */}
                      <div className="mb-6">
                        <h3 className="font-heading font-semibold mb-3">Included Features:</h3>
                        <ul className="grid grid-cols-2 gap-2">
                          {template.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Sample Copy */}
                      <div className="bg-accent/30 p-4 rounded-lg mb-6">
                        <p className="text-sm text-muted-foreground italic">{template.sampleCopy}</p>
                      </div>

                      {/* Demo Video Placeholder */}
                      <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 text-center mb-6">
                        <span className="text-4xl mb-2 block">🎥</span>
                        <p className="text-sm text-muted-foreground">
                          30-45s demo video showing automation flow
                        </p>
                      </div>

                      {/* Automations */}
                      <div className="mb-6">
                        <h3 className="font-heading font-semibold mb-3">Sample Automations:</h3>
                        <ul className="space-y-2">
                          {template.automations.map((automation, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <ArrowRight size={16} className="mt-0.5 shrink-0 text-primary" />
                              {automation}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              Ready to get started with your template?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a free demo and we'll customize one of these templates for your business — or build something completely custom.
            </p>
            <Link to="/contact">
              <Button variant="gradient" size="lg">
                Book your free demo
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
