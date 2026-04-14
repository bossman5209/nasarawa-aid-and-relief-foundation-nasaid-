import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-emerald-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand and Mission */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Heart className="text-white w-6 h-6 fill-current" />
              </div>
              <span className="text-2xl font-bold tracking-tight">NASAID</span>
            </div>
            <p className="text-emerald-100/60 leading-relaxed mb-8">
              Dedicated to humanitarian efforts and community support in Nasarawa State. Alleviating suffering through direct intervention and sustainable development.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors border border-white/10">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-emerald-400">Our Programs</h4>
            <ul className="space-y-4">
              {["Emergency Relief", "Healthcare Support", "Education Initiatives", "Vocational Empowerment", "Water & Sanitation"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-emerald-100/60 hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-emerald-400">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="text-emerald-500 shrink-0" size={20} />
                <span className="text-emerald-100/60 text-sm">
                  Suite 4, Nasarawa Plaza, <br />
                  Lafia, Nasarawa State, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-emerald-500 shrink-0" size={20} />
                <span className="text-emerald-100/60 text-sm">+234 (0) 800-NASAID</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-emerald-500 shrink-0" size={20} />
                <span className="text-emerald-100/60 text-sm">info@nasaid.org.ng</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-emerald-400">Stay Updated</h4>
            <p className="text-emerald-100/60 text-sm mb-6 leading-relaxed">
              Join our newsletter to receive monthly reports and stories from the field.
            </p>
            <form className="space-y-3">
              <Input 
                placeholder="Your email address" 
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12"
              />
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-12 font-bold rounded-lg">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-emerald-100/40 text-sm">
            © {new Date().getFullYear()} Nasarawa Aid and Relief Foundation. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-emerald-100/40 text-xs hover:text-white">Privacy Policy</a>
            <a href="#" className="text-emerald-100/40 text-xs hover:text-white">Terms of Service</a>
            <a href="#" className="text-emerald-100/40 text-xs hover:text-white">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;