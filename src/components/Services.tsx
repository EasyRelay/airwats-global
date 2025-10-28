import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Plane, Ship, Warehouse, FileCheck, Package } from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: 'Road Freight',
    description:
      'Comprehensive trucking solutions across all 50 states with real-time tracking and flexible scheduling. Our modern fleet and certified drivers ensure your cargo arrives safely and on time.',
    colors: 'from-amber-500 to-orange-400 glow-orange',
  },
  {
    icon: Plane,
    title: 'Air Freight',
    description:
      'Fast, reliable air cargo services for time-sensitive shipments. We partner with major carriers to provide expedited delivery options and handle all documentation and customs clearance.',
    colors: 'from-sky-500 to-blue-400 glow-blue',
  },
  {
    icon: Ship,
    title: 'Ocean Freight',
    description:
      'Cost-effective sea transportation for large volume shipments. Full container load (FCL) and less than container load (LCL) options with competitive rates and comprehensive cargo insurance.',
    colors: 'from-indigo-500 to-cyan-400 glow-cyan',
  },
  {
    icon: Warehouse,
    title: 'Warehousing & Distribution',
    description:
      'Secure storage facilities with advanced inventory management systems. Our strategically located warehouses enable efficient distribution and order fulfillment across the country.',
    colors: 'from-purple-500 to-violet-400 glow-purple',
  },
  {
    icon: FileCheck,
    title: 'Customs & Documentation',
    description:
      'Expert handling of all import/export documentation, customs brokerage, and regulatory compliance. We streamline the process to avoid delays and ensure smooth cross-border transportation.',
    colors: 'from-emerald-500 to-teal-400 glow-green',
  },
  {
    icon: Package,
    title: 'Specialized Cargo',
    description:
      'Tailored solutions for oversized, hazardous, or temperature-controlled shipments. Our specialized equipment and trained personnel handle your unique cargo requirements with care.',
    colors: 'from-rose-500 to-pink-400 glow-red',
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 gradient-section" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive logistics solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.includes(index);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card
                  className="gradient-card border-border hover:border-primary transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group"
                  style={{ boxShadow: 'var(--shadow-card)' }}
                >
                  <CardHeader>
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 6 }}
                      className={`w-16 h-16 bg-gradient-to-br ${service.colors} 
                        rounded-xl flex items-center justify-center mb-5 
                        shadow-lg relative overflow-hidden`}
                    >
                      <motion.div
                        className="absolute inset-0 opacity-50 blur-xl"
                        animate={{ opacity: [0.4, 0.9, 0.4] }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                      />
                      <Icon className="w-8 h-8 text-white relative z-10" />
                    </motion.div>

                    <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
