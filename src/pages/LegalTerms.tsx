import { Card, CardContent } from "@/components/ui/card";

export default function LegalTerms() {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: March 2024</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-card">
              <CardContent className="p-12 prose prose-slate max-w-none">
                <h2>Agreement to Terms</h2>
                <p>
                  By accessing or using SCALESTACK's services, you agree to be bound by these Terms of Service.
                  If you disagree with any part of these terms, you may not access our services.
                </p>

                <h2>Services Description</h2>
                <p>
                  SCALESTACK provides website building, AI automation, and social media management services for
                  small and medium businesses. We reserve the right to modify or discontinue services at any time.
                </p>

                <h2>User Responsibilities</h2>
                <p>You agree to:</p>
                <ul>
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Use our services in compliance with applicable laws</li>
                  <li>Not engage in any activity that interferes with our services</li>
                </ul>

                <h2>Intellectual Property</h2>
                <p>
                  All content, features, and functionality of our services are owned by SCALESTACK and are protected
                  by copyright, trademark, and other intellectual property laws.
                </p>

                <h2>Payment Terms</h2>
                <p>
                  Payment terms will be specified in your service agreement. All fees are non-refundable unless
                  otherwise stated in writing.
                </p>

                <h2>Limitation of Liability</h2>
                <p>
                  SCALESTACK shall not be liable for any indirect, incidental, special, consequential, or punitive
                  damages resulting from your use of our services.
                </p>

                <h2>Termination</h2>
                <p>
                  We may terminate or suspend your access to our services immediately, without prior notice, for any
                  breach of these Terms of Service.
                </p>

                <h2>Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. Continued use of our services after changes
                  constitutes acceptance of the modified terms.
                </p>

                <h2>Contact Information</h2>
                <p>
                  For questions about these Terms of Service, please contact us through our contact form.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
