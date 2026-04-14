import { motion } from "framer-motion";
import { 
  Calendar, 
  ArrowRight, 
  Download, 
  FileText, 
  PlayCircle,
  Clock,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const BlogAndResources = () => {
  const blogPosts = [
    {
      title: "Sustainable Farming in Nasarawa",
      date: "May 12, 2024",
      excerpt: "How local communities are adopting climate-resilient agriculture to ensure food security.",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/c590b92b-2e5f-47b2-bf2a-7a9f0be9a6d1/blog-cover-1-48bc1efd-1776090051316.webp",
      author: "Grace Ade",
    },
    {
      title: "Maternal Health in Rural Districts",
      date: "May 05, 2024",
      excerpt: "Our recent mobile clinic outreach reaching over 500 mothers across 12 villages.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop",
      author: "Dr. Sam Obi",
    },
  ];

  const events = [
    {
      title: "Annual Relief Gala",
      date: "June 20, 2024",
      time: "6:00 PM",
      location: "Lafia Convention Center",
    },
    {
      title: "Tree Planting Day",
      date: "July 05, 2024",
      time: "8:00 AM",
      location: "Keffi Restoration Site",
    },
  ];

  const resources = [
    { name: "2023 Impact Report", type: "PDF", size: "4.2 MB" },
    { name: "Community Health Guide", type: "PDF", size: "2.8 MB" },
    { name: "Vocational Training Catalog", type: "PDF", size: "1.5 MB" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Blog Section */}
          <div id="blog" className="lg:col-span-2">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900">Environmental & Humanitarian Blog</h2>
              <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700 font-bold group">
                All Posts <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-all" />
              </Button>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {blogPosts.map((post, idx) => (
                <motion.article
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="relative h-64 rounded-2xl overflow-hidden mb-6 shadow-lg shadow-slate-200/50">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur text-emerald-900 text-xs font-bold rounded-lg uppercase">
                        Environmental
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                    <Clock size={14} />
                    <span>{post.date}</span>
                    <span className="mx-1">•</span>
                    <span>By {post.author}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="text-emerald-600 font-bold text-sm inline-flex items-center gap-2">
                    Read Story <PlayCircle size={16} />
                  </span>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Events & Resources Side */}
          <div className="space-y-12">
            {/* Event Calendar */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <Calendar className="text-emerald-600" />
                Upcoming Events
              </h2>
              <div className="space-y-4">
                {events.map((event, idx) => (
                  <Card key={idx} className="border-0 bg-slate-50 hover:bg-emerald-50 transition-colors">
                    <CardContent className="p-5">
                      <div className="flex gap-4">
                        <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center shrink-0">
                          <span className="text-xs font-bold text-slate-400 uppercase">JUN</span>
                          <span className="text-lg font-bold text-emerald-600 leading-tight">{20 + idx}</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 group-hover:text-emerald-700">{event.title}</h4>
                          <div className="flex flex-col gap-1 mt-1">
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                              <Clock size={12} /> {event.time}
                            </div>
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                              <MapPin size={12} /> {event.location}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Resource Library */}
            <div id="resources">
              <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <FileText className="text-emerald-600" />
                Resource Library
              </h2>
              <div className="bg-slate-900 rounded-2xl p-6 text-white">
                <p className="text-emerald-300/80 text-sm mb-6 leading-relaxed">
                  Access our latest transparency reports, community guides, and educational materials.
                </p>
                <div className="space-y-4">
                  {resources.map((res, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors border border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                          <Download size={14} className="text-emerald-400" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold truncate max-w-[120px]">{res.name}</div>
                          <div className="text-[10px] text-white/40 uppercase font-bold">{res.type} • {res.size}</div>
                        </div>
                      </div>
                      <Button size="icon" variant="ghost" className="h-8 w-8 hover:bg-emerald-500 hover:text-white">
                        <Download size={14} />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogAndResources;