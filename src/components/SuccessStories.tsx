import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const SuccessStories = () => {
  const stories = [
    {
      name: "Musa Ibrahim",
      role: "Farmer, Keffi",
      story: "Before Nasaid's Safe Water initiative, we walked 5km daily for water. Now, the community well has changed everything. My children are healthier, and I can focus on my farm.",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/c590b92b-2e5f-47b2-bf2a-7a9f0be9a6d1/success-story-1-d28ae5c2-1776090048174.webp",
    },
    {
      name: "Fatima Yusuf",
      role: "Tailoring Graduate",
      story: "The vocational program gave me more than just skills; it gave me dignity. I now run a small shop and employ two other women from my village.",
      image: "https://images.unsplash.com/photo-1542156822-6924d1a71ace?q=80&w=800&auto=format&fit=crop", // Fallback for variety
    },
  ];

  return (
    <section id="success-stories" className="py-24 bg-emerald-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Impact Stories</h2>
          <p className="text-emerald-300 text-lg max-w-2xl mx-auto">
            Real stories from real people. See how your support is changing lives across Nasarawa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {stories.map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12 relative overflow-hidden group"
            >
              <Quote className="absolute top-8 right-8 text-emerald-400/20 w-24 h-24 -z-10" />
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
                <div className="shrink-0">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover ring-4 ring-emerald-400/20 group-hover:rotate-3 transition-transform"
                  />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6 italic">
                    "{story.story}"
                  </p>
                  <div>
                    <h4 className="text-xl font-bold text-emerald-400">{story.name}</h4>
                    <p className="text-emerald-300/60 uppercase tracking-widest text-sm font-semibold">{story.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;