import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Twitter Clone",
    description: "A clone of the Twitter app using JavaScript.",
    image: "/projects/Twitter.png",
    tags: ["HTML/CSS", "JavaScript"],
    demourl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Counter App",
    description: "A counter app using JavaScript.",
    image: "/projects/Counter App.png",
    tags: ["HTML/CSS", "JavaScript"],
    demourl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Meme Picker",
    description: "A meme picker app using JavaScript.",
    image: "/projects/Meme Picker.png",
    tags: ["HTML/CSS", "JavaScript"],
    demourl: "#",
    githubUrl: "#",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p>Here are some of my recent projects.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demourl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  
                    >
                      <Github  size={20}/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="text-center mt-12">
            <a className="cosmic-button w-fit flex items-center mx-auto gap-2" 
            target="_blank"
            href="https://github.com/colonelagbo">
                Check My Github <ArrowRight size={16} />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};
