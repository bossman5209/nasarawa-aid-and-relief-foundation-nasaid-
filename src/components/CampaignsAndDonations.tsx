import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, CheckCircle2, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const CampaignsAndDonations = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");

  const campaigns = [
    {
      title: "Lafia Crisis Relief Fund",
      tag: "Emergency",
      desc: "Supporting families displaced by recent flooding in Lafia region.",
      raised: 4500000,
      goal: 10000000,
      daysLeft: 12,
    },
    {
      title: "Safe Water Initiative",
      tag: "Health",
      desc: "Building 20 community wells across rural Nasarawa districts.",
      raised: 8200000,
      goal: 15000000,
      daysLeft: 24,
    },
  ];

  const donationTiers = [
    { amount: 5000, label: "Basic Relief", impact: "Provides food for 1 family for 3 days." },
    { amount: 25000, label: "Healthcare", impact: "Covers medical bills for 5 vulnerable children." },
    { amount: 100000, label: "Sustainable Water", impact: "Helps maintain community water wells." },
    { amount: 500000, label: "Empowerment", impact: "Starts a vocational training batch for 10 youth." },
  ];

  const handleDonate = () => {
    const finalAmount = selectedAmount || parseFloat(customAmount);
    if (!finalAmount) {
      toast.error("Please select or enter an amount");
      return;
    }
    toast.success(`Thank you! Processing your donation of ₦${finalAmount.toLocaleString()}`);
  };

  return (
    <section id="campaigns" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Campaigns Side */}
          <div className="lg:col-span-3">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">Active Campaigns</h2>
            <div className="space-y-8">
              {campaigns.map((camp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 border border-slate-100 rounded-2xl p-8"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
                        {camp.tag}
                      </span>
                      <h3 className="text-2xl font-bold text-slate-900">{camp.title}</h3>
                    </div>
                    <div className="text-right">
                      <span className="block text-sm text-slate-500">Days Left</span>
                      <span className="text-xl font-bold text-emerald-600">{camp.daysLeft}</span>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-8 leading-relaxed">{camp.desc}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm font-medium">
                      <span className="text-slate-900">₦{camp.raised.toLocaleString()} raised</span>
                      <span className="text-slate-500">Goal: ₦{camp.goal.toLocaleString()}</span>
                    </div>
                    <Progress value={(camp.raised / camp.goal) * 100} className="h-3 bg-slate-200" />
                  </div>
                  
                  <Button className="w-full sm:w-auto bg-slate-900 text-white hover:bg-slate-800 rounded-xl">
                    View Campaign Details
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Donation System */}
          <div id="donations" className="lg:col-span-2">
            <div className="bg-emerald-900 rounded-3xl p-8 lg:p-10 shadow-2xl text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Heart className="text-emerald-400 fill-emerald-400" />
                  </div>
                  <h2 className="text-3xl font-bold">Support Us</h2>
                </div>
                
                <p className="text-emerald-100/80 mb-8">
                  Your contribution directly funds relief, healthcare, and education in Nasarawa.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {donationTiers.map((tier) => (
                    <button
                      key={tier.amount}
                      onClick={() => {
                        setSelectedAmount(tier.amount);
                        setCustomAmount("");
                      }}
                      className={cn(
                        "p-4 rounded-xl border-2 transition-all text-left group",
                        selectedAmount === tier.amount
                          ? "bg-white border-white text-emerald-900 shadow-lg"
                          : "border-white/20 hover:border-white/50"
                      )}
                    >
                      <span className={cn(
                        "block text-xl font-bold mb-1",
                        selectedAmount === tier.amount ? "text-emerald-900" : "text-white"
                      )}>
                        ₦{tier.amount.toLocaleString()}
                      </span>
                      <span className={cn(
                        "text-xs font-medium uppercase tracking-tight",
                        selectedAmount === tier.amount ? "text-emerald-700" : "text-emerald-300"
                      )}>
                        {tier.label}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="relative mb-8">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <DollarSign size={18} className="text-emerald-400" />
                  </div>
                  <Input
                    type="number"
                    placeholder="Other amount (₦)"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/40 h-14 pl-12 rounded-xl focus-visible:ring-emerald-400"
                  />
                </div>

                {selectedAmount && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-3 mb-8 bg-white/5 p-4 rounded-xl border border-white/10"
                  >
                    <CheckCircle2 className="text-emerald-400 shrink-0" size={20} />
                    <p className="text-sm text-emerald-100 italic leading-snug">
                      {donationTiers.find(t => t.amount === selectedAmount)?.impact}
                    </p>
                  </motion.div>
                )}

                <Button
                  onClick={handleDonate}
                  className="w-full bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-bold h-14 rounded-xl text-lg"
                >
                  Confirm Donation
                </Button>
                
                <p className="text-center text-emerald-300/60 text-xs mt-6">
                  Secure encrypted payment processing powered by Nasaid Relief System.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignsAndDonations;