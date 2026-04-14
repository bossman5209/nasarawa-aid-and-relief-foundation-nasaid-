import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import ImpactStats from "./components/ImpactStats";
import CorePillars from "./components/CorePillars";
import CampaignsAndDonations from "./components/CampaignsAndDonations";
import SuccessStories from "./components/SuccessStories";
import VolunteerSection from "./components/VolunteerSection";
import BlogAndResources from "./components/BlogAndResources";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/sonner";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      <Navigation isScrolled={isScrolled} />
      <main>
        <Hero />
        <ImpactStats />
        <CorePillars />
        <CampaignsAndDonations />
        <SuccessStories />
        <VolunteerSection />
        <BlogAndResources />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;