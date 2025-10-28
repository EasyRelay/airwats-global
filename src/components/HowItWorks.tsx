import { useEffect, useRef, useState } from 'react';
import { Calendar, TruckIcon, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Calendar,
    title: 'Book & Schedule',
    description:
      'Contact us with your shipment details. Our logistics experts will provide a customized quote and help you schedule the optimal route and timing for your cargo.',
  },
  {
    icon: TruckIcon,
    title: 'We Pick & Transport',
    description:
      'Our certified drivers and modern fleet pick up your cargo on schedule. Track your shipment in real-time with our advanced monitoring system throughout the journey.',
  },
  {
    icon: CheckCircle,
    title: 'Deliver & Confirm',
    description:
      'Safe delivery to the destination with digital proof of receipt. Our team ensures all documentation is complete and your cargo is received in perfect condition.',
  },
];

const HowItWorks = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            steps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => [...prev, index]);
              }, index * 400);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      
      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, transparent process from booking to delivery
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-border transform -translate-y-1/2">
            <div
              className="h-full bg-gradient-accent transition-all duration-1000 ease-out"
              style={{
                width: `${(visibleSteps.length / steps.length) * 100}%`,
              }}
            />
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isVisible = visibleSteps.includes(index);

              return (
                <div
                  key={index}
                  className={`relative flex flex-col items-center text-center transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  {/* Icon Circle */}
                  <div className="relative z-10 w-24 h-24 bg-gradient-accent rounded-full flex items-center justify-center mb-6 shadow-lg transform hover:scale-110 transition-transform">
                    <Icon className="w-12 h-12 text-accent-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-sm">
                    {step.description}
                  </p>

                  {/* Step Number */}
                  <div className="absolute -top-4 right-0 md:right-auto md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
