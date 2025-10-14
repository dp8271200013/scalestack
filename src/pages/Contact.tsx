import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Mail, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; message?: string }>({});

  const validateForm = () => {
    const newErrors: { email?: string; message?: string } = {};
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    } else if (formData.email.length > 255) {
      newErrors.email = "Email must be less than 255 characters";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length > 1000) {
      newErrors.message = "Message must be less than 1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Replace with your actual webhook URL
      // Example: const webhookUrl = "https://hook.eu2.make.com/your-webhook-id";
      const webhookUrl = "YOUR_WEBHOOK_URL_HERE";

      // Uncomment and replace webhook URL when ready to use
      /*
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim() || "Anonymous",
          email: formData.email.trim(),
          message: formData.message.trim(),
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      */

      // Simulate success for now
      setTimeout(() => {
        setIsSubmitted(true);
        toast({
          title: "Message sent!",
          description: `Hi ${formData.name || "there"}, thanks for reaching out — we'll reply shortly and include a link to book a free 15-minute demo.`,
        });
      }, 1000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto shadow-soft">
            <CardContent className="p-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <CheckCircle2 className="text-primary" size={32} />
              </div>
              <h1 className="text-3xl font-heading font-bold mb-4">Thank you for reaching out!</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Hi {formData.name || "there"}, we've received your message and will get back to you shortly with a link to book your free 15-minute demo.
              </p>
              <Button variant="gradient" onClick={() => window.location.href = "/"}>
                Return to Home
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Book a Demo
            </h1>
            <p className="text-xl text-muted-foreground">
              Schedule a free 15-minute demo or send us a message. We'll show you exactly how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Form */}
              <Card className="shadow-soft">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-heading font-bold mb-6">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Name (optional)</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        maxLength={100}
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@business.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        className={errors.email ? "border-destructive" : ""}
                        maxLength={255}
                        required
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us what you want automated — e.g., weekly posts, invoices"
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: undefined });
                        }}
                        className={errors.message ? "border-destructive" : ""}
                        rows={6}
                        maxLength={1000}
                        required
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive mt-1">{errors.message}</p>
                      )}
                      <p className="text-xs text-muted-foreground mt-1">
                        {formData.message.length}/1000 characters
                      </p>
                    </div>

                    <Button
                      type="submit"
                      variant="gradient"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Info */}
              <div className="space-y-8">
                <Card className="shadow-card">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Calendar className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold mb-2">Book a Demo</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Schedule a free 15-minute call to discuss your needs and see what we can build.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          We'll send you a booking link after you submit the form.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Mail className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold mb-2">Response Time</h3>
                        <p className="text-sm text-muted-foreground">
                          We typically respond within 24 hours on business days. All inquiries receive a personal reply.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-accent/30 p-6 rounded-lg">
                  <h3 className="font-heading font-semibold mb-2">What happens next?</h3>
                  <ol className="space-y-2 text-sm text-muted-foreground">
                    <li>1. We review your message and understand your needs</li>
                    <li>2. We send you a personalized reply with next steps</li>
                    <li>3. We schedule a free 15-minute demo call</li>
                    <li>4. You decide if we're the right fit for your business</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
