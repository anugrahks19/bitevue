import { Button } from "@/components/ui/button";
import { Download, Apple, Smartphone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      <div className="absolute inset-0 bg-background/80" />

      {/* Animated orbs */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />

      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA content */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Ready to eat</span>
            <br />
            <span className="text-gradient">smarter?</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            BiteVue is not just a barcode scanner; it is a <em>reasoning engine</em> that overlays intelligence onto the physical world.
            Download BiteVue today — it's free.
          </p>

          {/* Download buttons */}
          {/* Download buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="hero"
              size="xl"
              className="group min-w-[240px] h-16 text-lg relative overflow-hidden shadow-[0_0_40px_-10px_rgba(var(--primary),0.5)] hover:shadow-[0_0_60px_-10px_rgba(var(--primary),0.6)] transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Download className="w-6 h-6 mr-3 animate-bounce" />
              <span className="font-bold">Download App</span>
            </Button>
          </div>

          {/* Stats removed as per request */}
        </div>
      </div>
    </section>
  );
};

export default CTASection;