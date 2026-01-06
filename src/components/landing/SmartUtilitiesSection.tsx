import { Eye, Brain, Mic } from "lucide-react";

const utilities = [
  {
    icon: Eye,
    emoji: "👁️",
    title: "Sensory Input (The Eye)",
    description: "Barcode scanning, OpenFoodFacts API, and Computer Vision (Nexus Eye) to identify packaging and ingredients.",
    gradient: "from-primary to-accent"
  },
  {
    icon: Brain,
    emoji: "🧠",
    title: "Cognitive Processing (The Brain)",
    description: "Magic Intents match patterns, and LLMs (Gemini/Llama 3) analyze data with your context to form a verdict.",
    gradient: "from-accent to-primary"
  },
  {
    icon: Mic,
    emoji: "🗣️",
    title: "Interaction (The Voice)",
    description: "Nexus Persona speaks the insight, and the Orb gives instant visual feedback (Green/Red) based on sentiment.",
    gradient: "from-primary to-accent"
  }
];

const SmartUtilitiesSection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container relative z-10 px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">The Physics</span>
            <span className="text-foreground"> Behind It.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            How BiteVue works: A Multimodal AI Pipeline that fuses Computer Vision, OCR, and LLMs into a seamless "See-Think-Speak" loop.
          </p>
        </div>

        {/* Utilities cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {utilities.map((utility, index) => (
            <div
              key={utility.title}
              className="group relative"
            >
              {/* Card */}
              <div className="h-full glass-strong rounded-3xl p-8 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2">
                {/* Gradient line on top */}
                <div className={`absolute top-0 left-8 right-8 h-1 bg-gradient-to-r ${utility.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <span className="text-3xl">{utility.emoji}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {utility.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {utility.description}
                </p>

                {/* Link indicator */}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartUtilitiesSection;