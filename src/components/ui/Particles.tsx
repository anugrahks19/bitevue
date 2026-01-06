
import { useEffect, useState } from "react";

const Particles = () => {
    const [particles, setParticles] = useState<Array<{ id: number; left: string; top: string; duration: string; delay: string }>>([]);

    useEffect(() => {
        // Generate static particles on mount to avoid hydration mismatch if SSR (though this is client-side mostly)
        const count = 15;
        const newParticles = Array.from({ length: count }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            duration: `${Math.random() * 5 + 5}s`, // 5-10s
            delay: `${Math.random() * 5}s`,
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="absolute w-2 h-2 rounded-full bg-primary/20 animate-float"
                    style={{
                        left: p.left,
                        top: p.top,
                        animationDuration: p.duration,
                        animationDelay: p.delay,
                    }}
                />
            ))}
        </div>
    );
};

export default Particles;
