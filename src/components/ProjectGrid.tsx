import { useState } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "Cyanotype Hanging Scroll Illustration Prototype",
    image: "https://storage.googleapis.com/studio-cms-assets/projects/XKOk2X84W4/s-1920x1410_4c6e3c68-2c11-4802-82a7-5950aeefe7fb.webp",
    tags: ["Studies", "Illustration", "Graphic Design", "Art"],
    category: "Studies",
    type: "Illustration",
  },
  {
    id: 2,
    title: "THREE HEADS TIGER",
    image: "https://storage.googleapis.com/studio-cms-assets/projects/XKOk2X84W4/s-1920x1410_ca2227d1-0774-4a17-ae34-00b497514613.webp",
    tags: ["Client Works", "Illustration", "Graphic Design"],
    category: "Client Works",
    type: "Illustration",
  },
  {
    id: 3,
    title: "Paper Relief Experiment - Unicorn / Spring Deer",
    image: "https://storage.googleapis.com/studio-cms-assets/projects/XKOk2X84W4/s-1920x1410_0e0f64dc-9efb-4f73-a1fe-1fccf18992db.webp",
    tags: ["Studies", "Illustration", "Art"],
    category: "Studies",
    type: "Art",
  },
  {
    id: 4,
    title: "2025 NEW YEAR CARD",
    image: "https://storage.googleapis.com/studio-cms-assets/projects/XKOk2X84W4/s-1920x1410_385fdefb-cd9e-4be7-befc-dc26a894fa89.webp",
    tags: ["Studies", "Illustration", "Art"],
    category: "Studies",
    type: "Illustration",
  },
  {
    id: 5,
    title: "EQUIpment",
    image: "https://storage.googleapis.com/studio-cms-assets/projects/XKOk2X84W4/s-1920x1410_118da47c-67eb-4852-bb48-7737c261165e.webp",
    tags: ["Non-client Works", "Illustration", "Book Design"],
    category: "Non-client Works",
    type: "Book Design",
  },
  {
    id: 6,
    title: "TRANSIT no.65 Feature Illustration",
    image: "https://storage.googleapis.com/studio-cms-assets/projects/XKOk2X84W4/s-1920x1410_0f4c8409-5d11-449f-b62d-8e51457fe0a4.webp",
    tags: ["Client Works", "Illustration"],
    category: "Client Works",
    type: "Illustration",
  },
  {
    id: 7,
    title: "星禽 - 28 Chinese ZOOdiac",
    image: "https://storage.googleapis.com/studio-cms-assets/projects/XKOk2X84W4/s-1920x1410_f39041eb-d78e-4741-974b-dd9e4c119281.webp",
    tags: ["Non-client Works", "Illustration", "Book Design"],
    category: "Non-client Works",
    type: "Book Design",
  },
  {
    id: 8,
    title: "星禽 - 28 Chinese ZOOdiac Exhibition",
    image: "https://storage.googleapis.com/studio-cms-assets/projects/XKOk2X84W4/s-1920x1410_76b57cb5-f3fd-4fe6-b91f-b5ac7b84a496.webp",
    tags: ["Non-client Works", "Illustration", "Art"],
    category: "Non-client Works",
    type: "Art",
  },
  {
    id: 9,
    title: "mojimo 6th anniversary",
    image: "https://storage.googleapis.com/studio-cms-assets/projects/XKOk2X84W4/s-1920x1410_03100390-deee-4109-b741-415aacd00009.webp",
    tags: ["Client Works", "Illustration", "Graphic Design"],
    category: "Client Works",
    type: "Graphic Design",
  },
  {
    id: 10,
    title: "2024 NEW YEAR CARD",
    image: "https://storage.googleapis.com/studio-cms-assets/projects/XKOk2X84W4/s-1920x1410_f178153c-3b56-439d-ab25-8cfb0c709a1d.webp",
    tags: ["Studies", "Illustration", "Art"],
    category: "Studies",
    type: "Illustration",
  },
  {
    id: 11,
    title: "THE MAMMALS",
    image: "https://storage.googleapis.com/studio-cms-assets/projects/XKOk2X84W4/s-1920x1410_d7c479cf-7cf2-41f6-b965-b52ffd7ff6de.webp",
    tags: ["GUF", "Book Design"],
    category: "GUF",
    type: "Book Design",
  },
  {
    id: 12,
    title: "Traditional Art Meets Modern Design",
    image: "https://storage.googleapis.com/studio-cms-assets/projects/XKOk2X84W4/s-1920x1410_4c6e3c68-2c11-4802-82a7-5950aeefe7fb.webp",
    tags: ["Studies", "Art", "Graphic Design"],
    category: "Studies",
    type: "Art",
  },
];

interface ProjectGridProps {
  selectedCategory?: string;
  selectedType?: string;
}

const ProjectGrid = ({ selectedCategory = "All Works", selectedType = "All Types" }: ProjectGridProps) => {
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredProjects = projects.filter((project) => {
    const categoryMatch = selectedCategory === "All Works" || project.category === selectedCategory;
    const typeMatch = selectedType === "All Types" || project.type === selectedType;
    return categoryMatch && typeMatch;
  });

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const loadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <section className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            image={project.image}
            tags={project.tags}
            index={index}
          />
        ))}
      </div>
      
      {hasMore && (
        <div className="flex justify-center mt-16">
          <button onClick={loadMore} className="load-more-btn">
            Load more
          </button>
        </div>
      )}
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground">No projects found for the selected filters.</p>
        </div>
      )}
    </section>
  );
};

export default ProjectGrid;
