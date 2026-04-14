import { motion } from "framer-motion";
import { 
  Ambulance, 
  GraduationCap, 
  Users, 
  Box, 
  ChevronRight 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CorePillars = () => {
  const pillars = [
    {
      title: "Emergency Relief",
      desc: "Rapid response to natural disasters and social crises, providing food, medical supplies, and shelter.",
      icon: <Box className="w-8 h-8" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/c590b92b-2e5f-47b2-bf2a-7a9f0be9a6d1/emergency-relief-3f7204c3-1776090049696.webp",
      color: "bg-red-50 text-red-600",
    },
    {
      title: "Healthcare Support",
      desc: "Improving access to medical services, maternal care, and community health education in rural areas.",
      icon: <Ambulance className="w-8 h-8" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/c590b92b-2e5f-47b2-bf2a-7a9f0be9a6d1/healthcare-support-1472006c-1776090050057.webp",
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Educational Initiatives",
      desc: "Providing resources, scholarships, and school support to ensure underprivileged children learn.",
      icon: <GraduationCap className="w-8 h-8" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/c590b92b-2e5f-47b2-bf2a-7a9f0be9a6d1/educational-initiatives-e2f5a40e-1776090047995.webp",
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "Empowerment Programs",
      desc: "Vocational training and skill acquisition projects designed to help individuals become self-sufficient.",
      icon: <Users className="w-8 h-8" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/c590b92b-2e5f-47b2-bf2a-7a9f0be9a6d1/empowerment-programs-22d8bb62-1776090048506.webp",
      color: "bg-amber-50 text-amber-600",
    },
  ];

  return (
    <section id="programs" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Core Pillars of Operation</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our organization structures its impact around several key areas to foster 
            sustainable development and direct humanitarian relief.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-0 shadow-sm hover:shadow-xl transition-shadow group">
                <div className="grid sm:grid-cols-2 items-center">
                  <div className="h-64 sm:h-full relative overflow-hidden">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <CardContent className="p-8">
                    <div className={`w-14 h-14 ${pillar.color} rounded-2xl flex items-center justify-center mb-6`}>
                      {pillar.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{pillar.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {pillar.desc}
                    </p>
                    <button className="flex items-center text-emerald-600 font-bold hover:gap-2 transition-all">
                      Learn More <ChevronRight size={18} />
                    </button>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorePillars;