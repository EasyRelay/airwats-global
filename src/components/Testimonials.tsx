import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'TechRetail Inc.',
    role: 'Supply Chain Director',
    rating: 5,
    text: 'AirWays Trans has been instrumental in scaling our e-commerce operations. Their reliable service and real-time tracking have significantly improved our customer satisfaction rates.',
  },
  {
    name: 'Michael Chen',
    company: 'Midwest Manufacturing',
    role: 'Operations Manager',
    rating: 5,
    text: 'We switched to AirWays Trans for our just-in-time deliveries and haven\'t looked back. Their punctuality and professionalism are unmatched in the industry.',
  },
  {
    name: 'Jennifer Martinez',
    company: 'Fresh Foods Distributors',
    role: 'Logistics Coordinator',
    rating: 5,
    text: 'Temperature-controlled shipping is critical for our business, and AirWays Trans delivers consistently. Their specialized equipment and trained staff give us complete peace of mind.',
  },
];

const caseStudy = {
  title: 'E-Commerce Growth Success',
  client: 'Major Online Retailer',
  challenge: 'Scaling fulfillment during holiday season',
  result: 'Reduced delivery times by 25% while handling 3x volume',
};

const Testimonials = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            [...testimonials, caseStudy].forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index]);
              }, index * 200);
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
    <section id="testimonials" ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-section" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="text-primary">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by businesses across the nation
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => {
            const isVisible = visibleItems.includes(index);

            return (
              <Card
                key={index}
                className={`gradient-card border-border transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <CardContent className="p-6 space-y-4">
                  {/* Quote Icon */}
                  <Quote className="w-10 h-10 text-primary opacity-50" />

                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="pt-4 border-t border-border">
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Case Study */}
        <Card
          className={`gradient-card border-border max-w-4xl mx-auto transition-all duration-700 ${
            visibleItems.includes(testimonials.length)
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
          style={{ boxShadow: 'var(--shadow-lg)' }}
        >
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <h3 className="text-3xl font-bold text-primary">{caseStudy.title}</h3>
              <div className="grid md:grid-cols-3 gap-8 pt-6">
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Client</div>
                  <div className="font-semibold text-lg">{caseStudy.client}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Challenge</div>
                  <div className="font-semibold text-lg">{caseStudy.challenge}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Result</div>
                  <div className="font-semibold text-lg text-accent">{caseStudy.result}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Testimonials;
