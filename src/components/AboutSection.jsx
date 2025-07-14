import { Code, User, Briefcase } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate FrontEnd Web Developer & Tech Creative
            </h3>

            <p className="text-muted-foreground">
              I’m a mostly self-taught frontend developer
               with nearly two years of hands-on learning
                through platforms like freeCodeCamp,
                 ALX Africa, Scrimba, Coursera, and YouTube.
                  During this time, I’ve built several interesting projects, 
                  including this portfolio page, as part of my commitment to learning by doing. 
                  My journey has been fueled by curiosity, consistency, 
                  and a deep passion for turning ideas into interactive web experiences.

            </p>

            <p className="text-muted-foreground">
              Throughout my self-taught journey, 
              I’ve focused on applying what I learn by building 
              real-world projects that solve everyday problems.
               These projects have helped me strengthen my skills 
               in responsive design, state management, 
               API integration, and component-based architecture. 
               I'm particularly drawn to creating clean,
                accessible user interfaces with great user 
                experience in mind. I'm constantly pushing myself to
                 grow by learning new technologies and best practices,
                  and I’m excited to contribute to meaningful projects 
                  and collaborate with other developers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href=""
                className="py-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT SIDE ICON CARDS */}
          <div className="grid grid-cols-1 gap-6">
            {/* CARD 1 - FIXED */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Designs</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with modern frameworks.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
