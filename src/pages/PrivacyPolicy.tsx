import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <article className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              AirWats Trans LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you use our logistics and
              freight transportation services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may collect personal information that you provide to us, including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Name, email address, and phone number</li>
              <li>Business name and address</li>
              <li>Shipment details and delivery addresses</li>
              <li>Payment and billing information</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">Automatically Collected Information</h3>
            <p className="text-muted-foreground leading-relaxed">
              When you access our services, we may automatically collect certain information, including IP address,
              browser type, device information, and usage data through cookies and similar technologies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide and manage our logistics and freight services</li>
              <li>Process transactions and send related information</li>
              <li>Track and monitor shipments in real-time</li>
              <li>Communicate with you about services, updates, and offers</li>
              <li>Improve our services and develop new features</li>
              <li>Comply with legal obligations and resolve disputes</li>
              <li>Detect, prevent, and address technical issues or fraudulent activity</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>
                <strong>Service Providers:</strong> Third-party vendors who perform services on our behalf (payment
                processing, data analysis, customer support)
              </li>
              <li>
                <strong>Business Partners:</strong> Carriers and logistics partners necessary to fulfill services
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to protect our rights and safety
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information.
              However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Access and receive a copy of your personal information</li>
              <li>Request correction of inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to or restrict certain processing of your information</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <div className="text-muted-foreground space-y-1">
              <p>Email: airwatstransllc@gmail.com</p>
              <p>Phone: (513) 331-8905</p>
              <p>Address: 5758 Reflections Way, Mason, OH 45040</p>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
