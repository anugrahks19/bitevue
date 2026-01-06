import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import WebDemoSection from "@/components/landing/WebDemoSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import NexusSection from "@/components/landing/NexusSection";
import SmartUtilitiesSection from "@/components/landing/SmartUtilitiesSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <WebDemoSection />
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="nexus">
          <NexusSection />
        </section>
        <section id="how-it-works">
          <SmartUtilitiesSection />
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;