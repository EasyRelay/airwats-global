import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Plane, Ship, Warehouse, FileCheck, Package } from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: 'Road Freight',
    description:
      'Comprehensive trucking solutions across all 50 states with real-time tracking and flexible scheduling. Our modern fleet and certified drivers ensure your cargo arrives safely and on time.',
  },
  {
    icon: Plane,
    title: 'Air Freight',
    description:
      'Fast, reliable air cargo services for time-sensitive shipments. We partner with major carriers to provide expedited delivery options and handle all documentation and customs clearance.',
  },
  {
    icon: Ship,
    title: 'Ocean Freight',
    description:
      'Cost-effective sea transportation for large volume shipments. Full container load (FCL) and less than container load (LCL) options with competitive rates and comprehensive cargo insurance.',
  },
  {
    icon: Warehouse,
    title: 'Warehousing & Distribution',
    description:
      'Secure storage facilities with advanced inventory management systems. Our strategically located warehouses enable efficient distribution and order fulfillment across the country.',
  },
  {
    icon: FileCheck,
    title: 'Customs & Documentation',
    description:
      'Expert handling of all import/export documentation, customs brokerage, and regulatory compliance. We streamline the process to avoid delays and ensure smooth cross-border transportation.',
  },
  {
    icon: Package,
    title: 'Specialized Cargo',
    description:
      'Tailored solutions for oversized, hazardous, or temperature-controlled shipments. Our specialized equipment and trained personnel handle your unique cargo requirements with care.',
  },
];

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 150);
            });
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

  return (
    <section id="services" ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-section" />
      
      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive logistics solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <Card
                key={index}
                className={`gradient-card border-border hover:border-primary transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: isVisible ? '0ms' : `${index * 150}ms`,
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
