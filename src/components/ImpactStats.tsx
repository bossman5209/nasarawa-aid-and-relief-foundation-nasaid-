import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

const Counter = ({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) => {
  const count = useMotionValue(0);
  const springValue = useSpring(count, { stiffness: 50, damping: 20 });
  const rounded = useTransform(springValue, (latest) => Math.round(latest));
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          count.set(value);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, count]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-emerald-950 mb-2">
        <motion.span>{rounded}</motion.span>{suffix}
      </div>
      <div className="text-slate-500 font-medium uppercase tracking-wider text-sm">{label}</div>
    </div>
  );
};

const ImpactStats = () => {
  const stats = [
    { value: 50000, label: "Lives Impacted", suffix: "+" },
    { value: 12000, label: "Medical Aid Packs", suffix: "" },
    { value: 250, label: "Schools Supported", suffix: "" },
    { value: 15, label: "Active Campaigns", suffix: "" },
  ];

  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, idx) => (
            <Counter key={idx} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;