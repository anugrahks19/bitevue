import { Button } from "@/components/ui/button";
import Particles from "@/components/ui/Particles";
import { Download, Sparkles, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-background/60" />

      {/* Particles */}
      <Particles />

      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />

      <div className="container relative z-10 px-4 py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">The AI-Native Food & Health Co-Pilot</span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight opacity-0 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="text-foreground">BiteVue</span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl text-gradient block mt-2">(Powered by Nexus)</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            BiteVue is not just a barcode scanner; it is a <em>reasoning engine</em> that overlays intelligence onto the physical world. It transforms static product data into actionable, voice-first health insights.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up mb-10"
            style={{ animationDelay: '0.4s' }}
          >
            <a href="/bitevue-release.apk" download>
              <Button variant="hero" size="xl" className="group w-full sm:w-auto">
                <Download className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
                Download Now
              </Button>
            </a>
            <Button
              variant="heroOutline"
              size="xl"
              className="group"
              onClick={() => window.open('https://bitevue.vercel.app/', '_blank')}
            >
              <Play className="w-5 h-5 transition-transform group-hover:scale-110" />
              Try Web Version
            </Button>
          </div>

          {/* Feature highlights */}
          <div
            className="grid grid-cols-3 gap-4 sm:gap-6 max-w-xl mx-auto pt-0 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="glass-strong rounded-2xl p-3 hover:scale-105 transition-transform">
              <div className="text-2xl mb-1">👁️</div>
              <p className="text-sm font-medium text-foreground">See</p>
            </div>
            <div className="glass-strong rounded-2xl p-3 hover:scale-105 transition-transform">
              <div className="text-2xl mb-1">🧠</div>
              <p className="text-sm font-medium text-foreground">Think</p>
            </div>
            <div className="glass-strong rounded-2xl p-3 hover:scale-105 transition-transform">
              <div className="text-2xl mb-1">🗣️</div>
              <p className="text-sm font-medium text-foreground">Speak</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;