import { Phone, Mail, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (513) 331-8905',
    href: 'tel:+15133318905',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'airwatstransllc@gmail.com',
    href: 'mailto:airwatstransllc@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '5758 Reflections Way, Mason, OH 45040',
    href: 'https://maps.google.com/?q=5758+Reflections+Way+Mason+OH+45040',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to streamline your logistics? Contact us today for a customized solution
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            
            return (
              <Card
                key={index}
                className="gradient-card border-border hover:border-primary transition-all group"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <a
                  href={info.href}
                  target={info.icon === MapPin ? '_blank' : undefined}
                  rel={info.icon === MapPin ? 'noopener noreferrer' : undefined}
                  className="block p-8 text-center space-y-4"
                >
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-accent-foreground group-hover:text-primary" />
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{info.label}</div>
                  <div className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {info.value}
                  </div>
                </a>
              </Card>
            );
          })}
        </div>

        {/* Map Preview */}
        <div className="mt-16 max-w-5xl mx-auto">
          <Card className="gradient-card border-border overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3085.5!2d-84.3!3d39.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDE4JzAwLjAiTiA4NMKwMTgnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AirWats Trans LLC Location"
            />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
