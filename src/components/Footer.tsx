import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  Code, 
  Brain, 
  Heart,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-6 py-16">
        {/* Newsletter Section */}
        <div className="text-center mb-16">
          <div className="max-w-2xl mx-auto">
            <Badge variant="outline" className="mb-4 px-4 py-2 border-brand-primary/30 bg-brand-primary/10 text-brand-primary">
              <Mail className="w-4 h-4 mr-2" />
              Stay Updated
            </Badge>
            <h3 className="text-3xl font-bold mb-4">
              Join the <span className="text-gradient">Coding Revolution</span>
            </h3>
            <p className="text-muted-foreground mb-8">
              Get the latest updates on AI-powered coding features, learning tips, and exclusive early access to new tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-surface-elevated border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              />
              <Button variant="hero" size="lg">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 gradient-brand rounded-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">CodeMentor AI</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Revolutionizing coding education with AI-powered personalized learning, real-time feedback, and intelligent mentoring for developers at every level.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <nav className="space-y-2">
              <a href="#features" className="block text-muted-foreground hover:text-brand-primary transition-colors">Features</a>
              <a href="#pricing" className="block text-muted-foreground hover:text-brand-primary transition-colors">Pricing</a>
              <a href="#integrations" className="block text-muted-foreground hover:text-brand-primary transition-colors">Integrations</a>
              <a href="#api" className="block text-muted-foreground hover:text-brand-primary transition-colors">API Docs</a>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <nav className="space-y-2">
              <a href="#help" className="block text-muted-foreground hover:text-brand-primary transition-colors">Help Center</a>
              <a href="#community" className="block text-muted-foreground hover:text-brand-primary transition-colors">Community</a>
              <a href="#tutorials" className="block text-muted-foreground hover:text-brand-primary transition-colors">Tutorials</a>
              <a href="#contact" className="block text-muted-foreground hover:text-brand-primary transition-colors">Contact Us</a>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-1 text-muted-foreground">
              Made with <Heart className="w-4 h-4 text-red-500" /> for developers worldwide
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#privacy" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-brand-primary transition-colors">Terms of Service</a>
              <a href="#cookies" className="hover:text-brand-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
          <div className="text-center mt-4 text-sm text-muted-foreground">
            © 2024 CodeMentor AI. All rights reserved. Empowering the next generation of developers.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;