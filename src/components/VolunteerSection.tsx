import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Users, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const VolunteerSection = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Registration successful! Our team will contact you shortly.");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="volunteer" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
              <Users size={16} />
              <span>Join the Movement</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Become a Volunteer. <br />
              <span className="text-emerald-600">Make an Impact.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We are always looking for passionate individuals to join our field teams, health programs, 
              and educational workshops. Whether you are a professional or a student, your time can change a life.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {[
                { title: "Health Field", desc: "Assist in mobile clinics and health education." },
                { title: "Education", desc: "Mentor children and support local schools." },
                { title: "Relief Logistics", desc: "Help coordinate and distribute emergency supplies." },
                { title: "Digital Advocacy", desc: "Spread awareness and manage community resources." },
              ].map((role, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                  <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center shrink-0">
                    <UserPlus className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{role.title}</h4>
                    <p className="text-xs text-slate-500 mt-1">{role.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <img
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/c590b92b-2e5f-47b2-bf2a-7a9f0be9a6d1/volunteer-action-77f917ed-1776090048919.webp"
              alt="Volunteers in action"
              className="rounded-3xl shadow-2xl h-64 w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 lg:p-12 rounded-[2rem] shadow-xl border border-slate-100"
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-8">Register to Volunteer</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Full Name</label>
                  <Input placeholder="John Doe" required className="bg-slate-50 border-slate-200 h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Email Address</label>
                  <Input type="email" placeholder="john@example.com" required className="bg-slate-50 border-slate-200 h-12" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Interested Area</label>
                <select className="w-full h-12 bg-slate-50 border-slate-200 rounded-lg px-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>Emergency Relief</option>
                  <option>Healthcare Support</option>
                  <option>Educational Initiatives</option>
                  <option>Empowerment Programs</option>
                  <option>Digital Advocacy</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Experience / Motivation</label>
                <Textarea 
                  placeholder="Tell us why you want to join and any relevant skills..." 
                  className="bg-slate-50 border-slate-200 min-h-[120px]" 
                  required
                />
              </div>

              <Button
                disabled={loading}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white h-14 rounded-xl text-lg font-bold group"
              >
                {loading ? "Registering..." : "Submit Registration"}
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;