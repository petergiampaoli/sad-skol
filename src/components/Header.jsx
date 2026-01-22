import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const categories = [
  "All Works",
  "Client Works",
  "Non-client Works",
  "Studies",
  "GUF",
];

const types = [
  "All Types",
  "Illustration",
  "Graphic Design",
  "Book Design",
  "Logo Design",
  "Art",
];

const Header = ({ onCategoryChange, onTypeChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("All Works");
  const [selectedType, setSelectedType] = useState("All Types");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    onCategoryChange?.(category);
  };

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    onTypeChange?.(type);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-foreground rounded-sm flex items-center justify-center">
              <span className="text-background font-semibold text-lg">S</span>
            </div>
            <div className="hidden sm:block">
              <p className="logo-text text-foreground">SUZ-design</p>
              <p className="logo-text text-muted-foreground">REIKO OKAMOTO</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-6 sm:gap-8">
            <a href="#biography" className="nav-link hidden sm:block">
              Biography
            </a>
            <a href="#contact" className="nav-link hidden sm:block">
              Contact
            </a>
            
            {/* Works Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="dropdown-trigger">
                Works
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                  Category
                </div>
                {categories.map((category) => (
                  <DropdownMenuItem
                    key={category}
                    onClick={() => handleCategorySelect(category)}
                    className={selectedCategory === category ? "bg-accent" : ""}
                  >
                    {category}
                  </DropdownMenuItem>
                ))}
                <div className="my-1 border-t" />
                <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                  Type
                </div>
                {types.map((type) => (
                  <DropdownMenuItem
                    key={type}
                    onClick={() => handleTypeSelect(type)}
                    className={selectedType === type ? "bg-accent" : ""}
                  >
                    {type}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
