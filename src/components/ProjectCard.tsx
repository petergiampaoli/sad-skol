interface ProjectCardProps {
  title: string;
  image: string;
  tags: string[];
  index: number;
}

const ProjectCard = ({ title, image, tags, index }: ProjectCardProps) => {
  const staggerClass = `stagger-${(index % 8) + 1}`;

  return (
    <article className={`project-card group opacity-0 animate-fade-in ${staggerClass}`}>
      <div className="overflow-hidden rounded-sm">
        <img
          src={image}
          alt={title}
          className="project-card-image"
          loading="lazy"
        />
      </div>
      <h3 className="project-card-title">{title}</h3>
      <div className="flex flex-wrap gap-2 mt-3">
        {tags.map((tag) => (
          <span key={tag} className="tag-pill">
            #{tag}
          </span>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
