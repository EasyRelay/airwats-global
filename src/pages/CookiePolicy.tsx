import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import Footer from '@/components/Footer';

const CookiePolicy = () => {

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
          <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">What Are Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies are small text files that are placed on your device when you visit our website. They help us
              provide you with a better experience by remembering your preferences and understanding how you use our
              services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              AirWats Trans LLC uses cookies for several purposes:
            </p>

            <h3 className="text-xl font-semibold mb-3">Essential Cookies</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These cookies are necessary for our website to function properly. They enable basic functions like page
              navigation, secure access to certain areas, and remembering your login status.
            </p>

            <h3 className="text-xl font-semibold mb-3">Analytical Cookies</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use analytical cookies to understand how visitors interact with our website. This helps us improve our
              services by analyzing page visits, time spent on pages, and navigation patterns.
            </p>

            <h3 className="text-xl font-semibold mb-3">Functional Cookies</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These cookies remember your preferences and choices (such as language preference or region) to provide a
              more personalized experience.
            </p>

            <h3 className="text-xl font-semibold mb-3">Marketing Cookies</h3>
            <p className="text-muted-foreground leading-relaxed">
              Marketing cookies track your browsing habits to deliver advertisements that are relevant to you and your
              interests. They also help us measure the effectiveness of our marketing campaigns.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Session Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Temporary cookies that expire when you close your browser. They help us maintain your session as you
                  navigate through our website.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Persistent Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Remain on your device for a set period or until you delete them. They help us remember your
                  preferences for future visits.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Third-Party Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Set by external services we use, such as analytics providers or social media platforms.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Managing Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You can control and manage cookies in various ways:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>
                <strong>Browser Settings:</strong> Most browsers allow you to refuse or accept cookies through their
                settings. Please note that disabling cookies may affect the functionality of our website.
              </li>
              <li>
                <strong>Opt-Out Tools:</strong> You can opt out of targeted advertising cookies through industry
                opt-out platforms.
              </li>
              <li>
                <strong>Delete Cookies:</strong> You can delete cookies already stored on your device at any time
                through your browser settings.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Cookie Lifespan</h2>
            <p className="text-muted-foreground leading-relaxed">
              The lifespan of cookies varies. Session cookies last only for your browsing session, while persistent
              cookies may remain on your device from a few days to several years, depending on their purpose and your
              browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for legal,
              operational, or regulatory reasons. We encourage you to review this page periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              If you have questions about our use of cookies, please contact us:
            </p>
            <div className="text-muted-foreground space-y-1">
              <p>Email: airwatstransllc@gmail.com</p>
              <p>Phone: (513) 331-8905</p>
              <p>Address: 5758 Reflections Way, Mason, OH 45040</p>
            </div>
          </section>
        </article>
      </div>
      <Footer/>
    </div>
  );
};

export default CookiePolicy;