import { Brain, Mic, Target, Camera, ArrowRight, Sparkles, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    emoji: "🧠",
    title: "Magic Intents",
    description: "BiteVue infers your intent from the object itself. Scan protein powder? It talks about recovery. Scan medicine? It warns about dosage.",
    highlights: ["Context Awareness", "Smart Switching", "Heuristic Checks"]
  },
  {
    icon: Target,
    emoji: "💭",
    title: "Comparative Memory",
    description: "Nexus has Object Permanence. It remembers your previous scan and actively compares products for you.",
    highlights: ["Stateful Memory", "Better Choices", "Contextual History"]
  },
  {
    icon: Mic,
    emoji: "🗣️",
    title: "AI-Native Voice",
    description: "Hands-free interaction designed for the kitchen. Smart silence detection knows when you've finished speaking.",
    highlights: ["Natural Conversation", "Silence Detection", "Web Speech API"]
  },
  {
    icon: Sparkles,
    emoji: "🔬",
    title: "Multimodal Pipeline",
    description: "Fuses Computer Vision, OCR, and LLMs into a seamless loop to understand the world like you do.",
    highlights: ["Computer Vision", "OCR", "LLM Analysis"]
  }
];

const FeaturesSection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Powerful Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Not just a scanner.</span>
            <br />
            <span className="text-gradient">A food intelligence engine.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            BiteVue combines AI reasoning, voice control, and adaptive personalization to revolutionize how you understand food.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative glass-strong rounded-3xl p-8 lg:p-10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-3xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{feature.emoji}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {feature.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary"
                    >
                      <Shield className="w-3 h-3" />
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow indicator */}
              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;