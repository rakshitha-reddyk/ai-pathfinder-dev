import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  CheckCircle, 
  AlertCircle, 
  Lightbulb, 
  Code2, 
  Terminal,
  Brain
} from "lucide-react";

const CodePreview = () => {
  const codeExample = `def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

# Let's test our function
result = fibonacci(10)
print(f"The 10th Fibonacci number is: {result}")`;

  const suggestions = [
    {
      type: "optimization",
      icon: <Lightbulb className="w-4 h-4" />,
      message: "Consider using memoization to optimize recursive calls",
      severity: "info"
    },
    {
      type: "improvement",
      icon: <CheckCircle className="w-4 h-4" />,
      message: "Great use of f-strings for output formatting!",
      severity: "success"
    },
    {
      type: "suggestion",
      icon: <Brain className="w-4 h-4" />,
      message: "Try adding input validation for negative numbers",
      severity: "warning"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-brand-secondary/30 bg-brand-secondary/10 text-brand-secondary">
            <Code2 className="w-4 h-4 mr-2" />
            Live Code Analysis
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See AI Feedback <span className="text-gradient">In Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch how CodeMentor AI provides real-time suggestions, detects improvements, and guides you to better code quality.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Code Editor Mockup */}
            <Card className="gradient-card border-card-border shadow-elevated">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-brand-primary" />
                  fibonacci.py
                </CardTitle>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <Button variant="hero" size="sm">
                    <Play className="w-4 h-4 mr-2" />
                    Run
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="bg-surface rounded-lg p-4 font-mono text-sm">
                  <pre className="text-foreground overflow-x-auto">
                    <code>{codeExample}</code>
                  </pre>
                </div>
                
                {/* Output */}
                <div className="mt-4 bg-surface-elevated rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Terminal className="w-4 h-4 text-brand-success" />
                    <span className="text-sm font-medium text-brand-success">Output</span>
                  </div>
                  <div className="font-mono text-sm text-muted-foreground">
                    The 10th Fibonacci number is: 55
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Suggestions Panel */}
            <Card className="gradient-card border-card-border shadow-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-brand-accent" />
                  AI Mentor Feedback
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {suggestions.map((suggestion, index) => (
                  <div 
                    key={index}
                    className={`flex items-start gap-3 p-4 rounded-lg border transition-smooth hover:shadow-card
                      ${suggestion.severity === 'success' ? 'bg-brand-success/10 border-brand-success/30' :
                        suggestion.severity === 'warning' ? 'bg-brand-warning/10 border-brand-warning/30' :
                        'bg-brand-primary/10 border-brand-primary/30'}`}
                  >
                    <div className={`p-2 rounded-full 
                      ${suggestion.severity === 'success' ? 'bg-brand-success/20 text-brand-success' :
                        suggestion.severity === 'warning' ? 'bg-brand-warning/20 text-brand-warning' :
                        'bg-brand-primary/20 text-brand-primary'}`}>
                      {suggestion.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium mb-1 capitalize">{suggestion.type}</p>
                      <p className="text-sm text-muted-foreground">{suggestion.message}</p>
                    </div>
                  </div>
                ))}

                {/* Chat Interface Mockup */}
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="bg-surface-elevated rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center">
                        <Brain className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">CodeMentor AI</p>
                        <p className="text-xs text-muted-foreground">Just now</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      "Great start with the Fibonacci function! The recursive approach is elegant, but for larger numbers, it can be slow. Would you like me to show you how to implement memoization to make it more efficient? 🚀"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodePreview;