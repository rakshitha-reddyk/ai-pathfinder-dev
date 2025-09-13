import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CodePreview from "@/components/CodePreview";
import Dashboard from "@/components/Dashboard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <Features />
        <CodePreview />
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
};

export default Index;