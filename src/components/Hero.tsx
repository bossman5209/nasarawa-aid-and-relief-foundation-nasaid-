import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, HeartPulse, GraduationCap, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="mission" className="relative min-h-screen flex items-center pt-20">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/c590b92b-2e5f-47b2-bf2a-7a9f0be9a6d1/hero-background-22dee421-1776090047861.webp"
          alt="Nasarawa Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-sm font-medium mb-6">
            <Zap size={14} className="fill-emerald-400 text-emerald-400" />
            <span>Empowering Communities in Nasarawa</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Alleviating Suffering, <span className="text-emerald-400">Fostering Hope.</span>
          </h1>
          <p className="text-xl text-slate-200 mb-8 max-w-xl leading-relaxed">
            The Nasarawa Aid and Relief Foundation (Nasaid) is dedicated to providing essential humanitarian aid, 
            sustainable development, and advocacy for vulnerable populations across communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 h-14 text-lg font-semibold group"
              onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 h-14 text-lg font-semibold"
              onClick={() => document.getElementById('donations')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Partner With Us
            </Button>
          </div>
        </motion.div>

        {/* Mission/Vision Cards */}
        <div className="grid grid-cols-1 gap-6">
          {[
            {
              title: "Our Mission",
              desc: "To alleviate suffering through direct intervention and support for sustainable development.",
              icon: <ShieldCheck className="text-emerald-400 w-8 h-8" />,
            },
            {
              title: "Our Vision",
              desc: "A world where every individual in Nasarawa has access to life's essentials and the opportunity to thrive.",
              icon: <HeartPulse className="text-emerald-400 w-8 h-8" />,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-300 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;