import { Link } from 'react-router-dom';
import { Truck, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-accent p-2 rounded-lg group-hover:scale-110 transition-transform">
                <img src="/airwets-logo-small.png" alt="Logo" className="w-26 h-12 text-primary-foreground" />
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional logistics and freight transportation services across all 50 states.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('industries')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Industries
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <a href="tel:+15133318905" className="text-muted-foreground hover:text-primary transition-colors">
                  (513) 331-8905
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <a
                  href="mailto:airwatstransllc@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  airwatstransllc@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">5758 Reflections Way, Mason, OH 45040</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Compliance Info */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-4">
            <span>MC: 1692095</span>
            <span>DOT: 4333195</span>
            <span>EIN: 33-2326235</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AirWats Trans LLC. All rights reserved.</p>
          <p>Created by <a href="https://easyit.uz" target="_blank" rel="noopener noreferrer" className='text-primary hover:text-blue-600 transition-colors'>Easy IT</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
