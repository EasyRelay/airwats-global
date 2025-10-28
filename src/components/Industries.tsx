import { useEffect, useRef, useState } from 'react';
import { ShoppingCart, Factory, UtensilsCrossed, Store } from 'lucide-react';

const industries = [
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description:
      'Fast, reliable fulfillment for online retailers with flexible delivery options and real-time tracking. We handle high-volume orders during peak seasons and ensure your customers receive their purchases on time, every time.',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description:
      'Just-in-time delivery solutions for production materials and finished goods. Our logistics expertise helps minimize inventory costs while maintaining supply chain efficiency with scheduled deliveries and dedicated routes.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Food & Beverage',
    description:
      'Temperature-controlled transportation for perishable goods with strict compliance to food safety regulations. Our specialized equipment and trained personnel ensure product quality from origin to destination.',
  },
  {
    icon: Store,
    title: 'Retail',
    description:
      'Comprehensive distribution solutions for retail chains including cross-docking, warehousing, and store delivery. We optimize routes to reduce costs and ensure shelves are always stocked with the right products.',
  },
];

const Industries = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            industries.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 300);
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
    <section id="industries" ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Industries We <span className="text-primary">Serve</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tailored logistics solutions for diverse business sectors
          </p>
        </div>

        {/* Industries Grid - Alternating Layout */}
        <div className="max-w-6xl mx-auto space-y-16">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const isVisible = visibleCards.includes(index);
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isEven ? '-translate-x-10' : 'translate-x-10'}`
                  }`}
              >
                {/* Icon & Title (left on even, right on odd) */}
                <div className={`space-y-6 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="flex items-center gap-4">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center 
                      bg-[#0a0f1c] shadow-[0_0_20px_#1e3a8a] border border-blue-800/30 
                        transition-all duration-500 ease-out 
                        hover:shadow-[0_0_30px_#3b82f6] hover:border-blue-500/60 
                        hover:scale-105 hover:bg-[#0d152b]"
                    >
                      <Icon className="w-8 h-8 text-blue-400 drop-shadow-[0_0_6px_#3b82f6] transition-colors duration-500 hover:text-blue-300" />
                    </div>

                    <h3 className="text-3xl font-bold">{industry.title}</h3>
                  </div>
                  <div className="h-1 w-20 bg-gradient-accent rounded-full" />
                </div>

                {/* Description (right on even, left on odd) */}
                <div className={isEven ? 'md:order-2' : 'md:order-1'}>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
