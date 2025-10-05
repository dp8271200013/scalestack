import { Card, CardContent } from "@/components/ui/card";

export default function LegalPrivacy() {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: March 2024</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-card">
              <CardContent className="p-12 prose prose-slate max-w-none">
                <h2>Information We Collect</h2>
                <p>
                  We collect information you provide directly to us, such as when you fill out a contact form,
                  book a demo, or communicate with us. This may include your name, email address, phone number,
                  and any other information you choose to provide.
                </p>

                <h2>How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Respond to your inquiries and requests</li>
                  <li>Provide and improve our services</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>

                <h2>Information Sharing</h2>
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your
                  information with service providers who assist us in operating our website and conducting our business.
                </p>

                <h2>Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information. However, no method
                  of transmission over the internet is 100% secure.
                </p>

                <h2>Your Rights</h2>
                <p>
                  You have the right to access, correct, or delete your personal information. Contact us to exercise
                  these rights.
                </p>

                <h2>Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy, please contact us through our contact form.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
