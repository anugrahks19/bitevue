import { Mic, MessageCircle, Zap, Shield } from "lucide-react";



const NexusSection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2">
              <Mic className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Meet Nexus</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className="text-foreground">Your AI voice</span>
              <br />
              <span className="text-gradient">co-pilot for food.</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Nexus isn't just a voice assistant — it's like having a nutritionist friend in your pocket.
              Ask questions naturally, get contextual answers, and receive proactive health warnings.
            </p>

            {/* Features list */}
            <div className="space-y-4">
              {[
                { icon: MessageCircle, text: "Context-aware conversations — remembers your previous questions" },
                { icon: Zap, text: "Proactive nudges — warns you about unhealthy products automatically" },
                { icon: Shield, text: "Privacy-first — all processing happens on-device" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground pt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Conversation demo */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl" />

            {/* Chat container */}
            <div className="relative glass-strong rounded-3xl p-8 h-[400px] flex flex-col justify-between overflow-hidden group">
              {/* Ambient background animation */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Center Status Display */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
                  <Mic className="w-16 h-16 text-primary relative z-10 animate-bounce-slow" />
                </div>

                <div className="mt-8 space-y-2 text-center">
                  <p className="text-2xl font-bold text-foreground animate-fade-in-up">
                    Listening...
                  </p>
                  <p className="text-sm text-muted-foreground animate-pulse">
                    Processing natural language
                  </p>
                </div>
              </div>

              {/* Voice input indicator */}
              <div className="flex items-center justify-center pt-4 border-t border-border/50 relative z-10 mt-auto">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-8 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
                  <div className="w-3 h-12 bg-primary/50 rounded-full animate-pulse" style={{ animationDelay: '100ms' }} />
                  <div className="w-3 h-6 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '200ms' }} />
                  <div className="w-3 h-10 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
                  <div className="w-3 h-4 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '400ms' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NexusSection;