import { ArrowRight, Globe, Terminal, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const WebDemoSection = () => {
    return (
        <section className="relative py-24 lg:py-32 overflow-hidden bg-black/40">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container relative z-10 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="relative group">
                        {/* Glowing border effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 rounded-3xl blur opacity-30 group-hover:opacity-70 transition duration-1000" />

                        <div className="relative glass-strong rounded-3xl p-8 md:p-12 border border-primary/20 overflow-hidden">
                            {/* Grid pattern overlay */}
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                                {/* Text Content */}
                                <div className="flex-1 text-center md:text-left space-y-6">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-wider">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                        </span>
                                        Live System Active
                                    </div>

                                    <h2 className="text-3xl md:text-4xl font-bold">
                                        Experience <span className="text-gradient">Nexus</span> Instantly.
                                    </h2>

                                    <p className="text-muted-foreground text-lg leading-relaxed">
                                        Test the intelligence here. But for the full <strong>Nexus Experience</strong>—including persistent memory and personalized voice coaching—you'll need the dedicated power of the native app.
                                    </p>

                                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-lg border border-border/50">
                                            <Terminal className="w-4 h-4 text-primary" />
                                            <span>No Installation</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-lg border border-border/50">
                                            <Zap className="w-4 h-4 text-accent" />
                                            <span>Instant Analysis</span>
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <Button
                                            onClick={() => window.open('https://bitevue.vercel.app/', '_blank')}
                                            className="bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-8 rounded-xl text-lg font-bold shadow-[0_0_20px_-5px_rgba(var(--primary),0.5)] hover:shadow-[0_0_30px_-5px_rgba(var(--primary),0.6)] transition-all duration-300 group/btn"
                                        >
                                            <Globe className="w-5 h-5 mr-2 group-hover/btn:animate-spin-slow" />
                                            Launch Web Portal
                                            <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                        </Button>
                                    </div>
                                </div>

                                {/* Visual/Graphic Side */}
                                <div className="flex-1 w-full max-w-md relative">
                                    <div className="aspect-video rounded-xl bg-black/80 border border-primary/30 p-4 font-mono text-xs md:text-sm text-green-400 overflow-hidden shadow-2xl relative">
                                        {/* Fake Terminal UI */}
                                        <div className="flex items-center gap-1.5 mb-4 border-b border-white/10 pb-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                            <div className="ml-auto text-white/30 text-[10px]">nexus_core_v2.1.0</div>
                                        </div>
                                        <div className="space-y-1 opacity-90">
                                            <div className="flex gap-2">
                                                <span className="text-blue-400">➜</span>
                                                <span className="text-white">init_sequence --target=web_client</span>
                                            </div>
                                            <div className="text-white/50 pl-4">Loading neural weights... [OK]</div>
                                            <div className="text-white/50 pl-4">Connecting to vision API... [OK]</div>
                                            <div className="text-white/50 pl-4">Establishing secure link... [OK]</div>
                                            <div className="flex gap-2 animate-pulse">
                                                <span className="text-blue-400">➜</span>
                                                <span className="text-primary">System Ready. Waiting for input...</span>
                                                <span className="w-2 h-4 bg-primary animate-blink" />
                                            </div>
                                        </div>

                                        {/* Scanline effect */}
                                        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px] pointer-events-none opacity-20" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebDemoSection;
