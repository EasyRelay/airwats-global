import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import Footer from '@/components/Footer';

const TermsOfService = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  },[]);
  
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8 hover:bg-primary hover:text-background">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <article className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using the services provided by AirWats Trans LLC (MC: 1692095, DOT: 4333195), you agree
              to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with
              any of these terms, you are prohibited from using our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Services Provided</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              AirWats Trans LLC provides logistics and freight transportation services, including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Road freight transportation across all 50 states</li>
              <li>Air freight services for time-sensitive shipments</li>
              <li>Ocean freight for large volume international shipments</li>
              <li>Warehousing and distribution services</li>
              <li>Customs clearance and documentation support</li>
              <li>Specialized cargo handling</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Customer Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">As a customer, you agree to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide accurate and complete shipment information</li>
              <li>Properly package and label all cargo according to industry standards</li>
              <li>Disclose any hazardous materials or special handling requirements</li>
              <li>Ensure cargo is ready for pickup at the scheduled time</li>
              <li>Provide all necessary documentation for shipping and customs clearance</li>
              <li>Pay all fees and charges in accordance with agreed-upon terms</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Pricing and Payment</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Pricing for our services is provided on a case-by-case basis and depends on various factors including
              shipment size, weight, distance, and special requirements. Payment terms will be specified in your service
              agreement.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>All quotes are valid for 30 days unless otherwise specified</li>
              <li>Payment is due according to the terms specified in your invoice</li>
              <li>Late payments may incur additional fees</li>
              <li>We reserve the right to suspend services for accounts in arrears</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Liability and Insurance</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              AirWats Trans LLC maintains comprehensive cargo insurance and operates in full compliance with federal
              regulations. Our liability is subject to the following terms:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Standard cargo liability coverage is included with all shipments</li>
              <li>
                Declared value limits apply unless additional insurance is purchased
              </li>
              <li>Claims for loss or damage must be filed within 30 days of delivery</li>
              <li>Liability for consequential or indirect damages is excluded</li>
              <li>Force majeure events are excluded from liability coverage</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Prohibited Items</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not transport the following items:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Illegal drugs, narcotics, or controlled substances</li>
              <li>Weapons, ammunition, or explosives (without proper permits)</li>
              <li>Stolen goods or counterfeit items</li>
              <li>Living animals (except with specialized arrangements)</li>
              <li>Human remains</li>
              <li>
                Any items prohibited by federal, state, or international law
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Cancellation and Refunds</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cancellation policies vary depending on the service type:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Cancellations made 48+ hours before pickup: Full refund</li>
              <li>Cancellations made 24-48 hours before pickup: 50% fee applies</li>
              <li>Cancellations made less than 24 hours before pickup: 100% fee applies</li>
              <li>Cancellations after pickup: No refund; full charges apply</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Dispute Resolution</h2>
            <p className="text-muted-foreground leading-relaxed">
              Any disputes arising from these terms or our services will be resolved through binding arbitration in
              accordance with the rules of the American Arbitration Association. The arbitration will take place in Ohio,
              and the decision will be final and binding on both parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the maximum extent permitted by law, AirWats Trans LLC shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether
              incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately
              upon posting on our website. Continued use of our services after changes constitutes acceptance of the
              modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service are governed by and construed in accordance with the laws of the State of Ohio and
              the United States, without regard to conflict of law principles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              For questions regarding these Terms of Service, please contact:
            </p>
            <div className="text-muted-foreground space-y-1">
              <p>AirWats Trans LLC</p>
              <p>Email: airwatstransllc@gmail.com</p>
              <p>Phone: (513) 331-8905</p>
              <p>Address: 5758 Reflections Way, Mason, OH 45040</p>
              <p>MC: 1692095 | DOT: 4333195 | EIN: 33-2326235</p>
            </div>
          </section>
        </article>
      </div>
      <Footer/>
    </div>
  );
};

export default TermsOfService;