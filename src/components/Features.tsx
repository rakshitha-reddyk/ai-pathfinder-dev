import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  Target, 
  BarChart3, 
  Lightbulb, 
  Mic, 
  CheckCircle,
  Code,
  Brain,
  TrendingUp
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8 text-brand-success" />,
      title: "Real-time Code Feedback",
      description: "Get instant analysis and suggestions as you type. Our AI understands your code structure and provides contextual improvements.",
      badge: "Live Analysis"
    },
    {
      icon: <Target className="w-8 h-8 text-brand-primary" />,
      title: "Personalized Learning Path", 
      description: "Adaptive curriculum that adjusts to your skill level and learning pace. Focus on what matters most for your growth.",
      badge: "Adaptive AI"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-brand-accent" />,
      title: "AI Chat Assistant for Code Doubts",
      description: "24/7 conversational mentor that explains concepts, debugs issues, and guides you through complex problems.",
      badge: "ChatGPT-Style"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-brand-warning" />,
      title: "Error Detection & Fix Suggestions",
      description: "Advanced static analysis that catches bugs before they happen and provides intelligent fix recommendations.",
      badge: "Smart Debug"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-brand-secondary" />,
      title: "Progress Tracker & Dashboard",
      description: "Comprehensive analytics showing your coding journey, skill improvements, and learning milestones.",
      badge: "Analytics Pro"
    },
    {
      icon: <Mic className="w-8 h-8 text-brand-primary" />,
      title: "Voice + Text based Learning",
      description: "Revolutionary voice-to-code functionality and audio explanations for accessible, hands-free learning.",
      badge: "Accessibility+"
    }
  ];

  return (
    <section className="py-24 bg-surface/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            👨‍🏫 Core Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-gradient">CodeMentor AI</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Traditional platforms teach syntax. <span className="text-brand-accent font-semibold">We teach logic</span>. 
            Get the feel of a 1-on-1 mentor, available 24/7, powered by cutting-edge AI.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="gradient-card border-card-border hover:shadow-card transition-smooth hover:transform hover:scale-105 group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-surface-elevated rounded-xl group-hover:shadow-glow transition-smooth">
                    {feature.icon}
                  </div>
                  <Badge variant="outline" className="text-xs border-brand-primary/30 text-brand-primary">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary/10 rounded-full border border-brand-primary/20">
            <Brain className="w-5 h-5 text-brand-primary" />
            <span className="text-brand-primary font-medium">Join 50,000+ developers already learning smarter</span>
            <TrendingUp className="w-5 h-5 text-brand-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;