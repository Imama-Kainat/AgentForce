import { Button } from "@/components/ui/button";
import { ArrowRight, Users, DollarSign, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import heroBackground from "@/assets/hero-background.jpg";
import { Link } from "react-router-dom";


const HeroSection = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState({
    agents: 0,
    savings: 0,
    time: 0,
  });

  useEffect(() => {
    const animateNumbers = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      const targets = {
        agents: 2847,
        savings: 2.3,
        time: 15,
      };

      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setAnimatedNumbers({
          agents: Math.round(targets.agents * easeOut),
          savings: Math.round(targets.savings * easeOut * 10) / 10,
          time: Math.round(targets.time * easeOut),
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    };

    const timer = setTimeout(animateNumbers, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />

      {/* Particles */}
      <div className="particles">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        {/* Main Hero Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gradient mb-6 animate-fade-in leading-tight">
            Hire Elite AI Agent Teams in Seconds
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Connect with specialized AI agents that collaborate seamlessly to solve complex business challenges
          </p>

         <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
  <Button variant="hero" size="xl" className="group">
    Browse Agent Teams
    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
  </Button>

  <Link to="/professional-chat">
    <Button variant="glass" size="xl" className="group">
      Watch Demo
      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
    </Button>
  </Link>
</div>
        </div>

        {/* Floating Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center mb-3">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-gradient mb-2">
              {animatedNumbers.agents.toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">Active Agents</div>
          </div>

          <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center mb-3">
              <DollarSign className="h-8 w-8 text-success" />
            </div>
            <div className="text-3xl font-bold text-gradient mb-2">
              ${animatedNumbers.savings}M
            </div>
            <div className="text-sm text-muted-foreground">Saved by Users</div>
          </div>

          <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center mb-3">
              <Clock className="h-8 w-8 text-accent" />
            </div>
            <div className="text-3xl font-bold text-gradient mb-2">
              {animatedNumbers.time} sec
            </div>
            <div className="text-sm text-muted-foreground">Avg Task Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;