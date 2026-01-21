import { useState } from "react";
import Header from "@/components/Header";
import ProjectGrid from "@/components/ProjectGrid";
import Footer from "@/components/Footer";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Works");
  const [selectedType, setSelectedType] = useState("All Types");

  return (
    <div className="min-h-screen bg-background">
      <Header
        onCategoryChange={setSelectedCategory}
        onTypeChange={setSelectedType}
      />
      <main>Hello World
        <ProjectGrid
          selectedCategory={selectedCategory}
          selectedType={selectedType}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
