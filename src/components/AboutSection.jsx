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
              Hi, I’m a passionate Frontend Developer with over 3 years of experience building
              responsive, user-focused web applications. I specialize in creating clean, accessible
              interfaces using technologies like React, Tailwind CSS, and JavaScript. I enjoy
              turning ideas into interactive, efficient products and constantly aim to improve user
              experience through thoughtful design and performance optimization.
            </p>

            <p className="text-muted-foreground">
              I’ve worked on various projects, from landing pages to full-fledged web apps,
              collaborating with teams and clients to bring visions to life. I’m always exploring
              new tools and keeping up with the latest in frontend development. Whether it’s writing
              clean code or crafting smooth UI interactions, I take pride in every line of work I
              deliver.
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
          {/* END RIGHT SIDE */}
        </div>
      </div>
    </section>
  );
};
