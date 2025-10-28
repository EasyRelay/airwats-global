import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Award, CheckCircle, Copy, Check } from 'lucide-react';
import { toast } from 'sonner';
import networkBg from '@/assets/network-bg.jpg';

const credentials = [
  { label: 'MC Number', value: '1692095' },
  { label: 'DOT Number', value: '4333195' },
  { label: 'EIN', value: '33-2326235' },
];

const trustPoints = [
  {
    icon: Shield,
    title: 'Fully Licensed & Insured',
    description: 'Complete compliance with federal regulations and comprehensive cargo insurance',
  },
  {
    icon: Award,
    title: 'Industry Certified',
    description: 'Certified drivers and modern fleet meeting all safety standards',
  },
  {
    icon: CheckCircle,
    title: 'Proven Track Record',
    description: '100% on-time delivery rate with thousands of successful shipments',
  },
];

const TrustCompliance = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    toast.success('Copied to clipboard!');
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="trust" ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background with network image */}
      <div className="absolute inset-0 gradient-section">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${networkBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trust & <span className="text-primary">Compliance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Licensed, certified, and committed to excellence in every shipment
          </p>
        </div>

        {/* Credentials Badges */}
        <div
          className={`flex flex-wrap justify-center gap-6 mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {credentials.map((cred, index) => (
            <Card
              key={index}
              className="gradient-card border-border p-6 min-w-[200px] group hover:border-primary transition-all"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="text-center space-y-3">
                <div className="text-sm text-muted-foreground font-medium">{cred.label}</div>
                <div className="text-2xl font-bold text-primary">{cred.value}</div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(cred.value, index)}
                  className="w-full hover:bg-primary/10"
                >
                  {copiedIndex === index ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Points */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className={`text-center space-y-4 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(index + 3) * 150}ms` }}
              >
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-bold">{point.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{point.description}</p>
              </div>
            );
          })}
        </div>

        {/* USA Coverage Badge */}
        <div
          className={`mt-16 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          <Badge variant="outline" className="text-lg py-3 px-6 border-primary">
            <CheckCircle className="w-5 h-5 mr-2 text-primary" />
            Nationwide Coverage - All 50 States
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default TrustCompliance;
