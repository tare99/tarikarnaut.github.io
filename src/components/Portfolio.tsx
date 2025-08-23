import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Github, Linkedin, Mail, MapPin} from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Kanban Task Manager",
      description: "A simple Kanban API that lets you store, update, patch and delete tasks. It is using WebSocket to send updates to the frontend.",
      technologies: ["Java", "Spring Boot", "MySQL", "WebSocket", "Docker", "GraphQL", "Spring Security"],
      link: "https://github.com/tare99/kanban-task-manager-api"
    }
  ];

  const experiences = [
    {
      id: 1,
      company: "Sportradar - NSoft",
      role: "Backend Developer",
      period: "2022 - Present",
      location: "Bosnia and Herzegovina",
      description: "Developed All-In-One Sportsbook feed to support streaming thousands of sport matches a day. Developed payment processors and aggregators with over 10M+ transactions a day. Main stack: Java, Spring Boot, Kafka, RMQ, K8s."
    }
  ];

  const skills = [
    "Java", "Spring Boot", "Kafka (Debezium)", "Microservices", "K8s",
    "Docker", "MySQL", "Jenkins", "Python", "R"
  ];

  return (
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 px-4 gradient-hero">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="mb-8">
              <img
                  src={profilePhoto}
                  alt="Tarik Arnaut"
                  className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg object-cover"
              />
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Tarik Arnaut
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-2">
                Software Engineer
              </p>
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
                <MapPin className="w-4 h-4"/>
                <span>Bosnia and Herzegovina</span>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                Hello, my name is Tarik and I am a software engineer with 4 years of experience.
                I have a Bachelor's Degree in IT and a Master's Degree in IT Business Intelligence.
                My current stack is Java, Spring Boot, Docker, K8s, Kafka, RMQ.
                Also, I occasionally work in Python and R.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-8">
              <Button variant="social" size="icon" asChild>
                <a href="https://github.com/tare99" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5"/>
                </a>
              </Button>
              <Button variant="social" size="icon" asChild>
                <a href="https://linkedin.com/in/tarik-arnaut-ab41b8198" target="_blank"
                   rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5"/>
                </a>
              </Button>
              <Button variant="social" size="icon" asChild>
                <a href="mailto:tarearnaut@gmail.com">
                  <Mail className="w-5 h-5"/>
                </a>
              </Button>
            </div>

            <div className="flex justify-center gap-4">
              <Button variant="gradient" size="lg" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:tarearnaut@gmail.com">Get In Touch</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto animate-slide-up">
            <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                  <Badge
                      key={index}
                      variant="secondary"
                      className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 px-4 bg-surface">
          <div className="max-w-6xl mx-auto animate-slide-up">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                  <Card key={project.id}
                        className="p-6 hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2"/>
                          Code
                        </a>
                      </Button>
                    </div>
                  </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto animate-slide-up">
            <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp) => (
                  <Card key={exp.id} className="p-6">
                    <div
                        className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.role}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <p>{exp.period}</p>
                        <p className="flex items-center gap-1">
                          <MapPin className="w-3 h-3"/>
                          {exp.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-surface text-center">
          <div className="max-w-2xl mx-auto animate-slide-up">
            <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm always interested in new opportunities and exciting projects.
              Feel free to reach out if you'd like to collaborate or just say hello!
            </p>
            <Button variant="gradient" size="lg" asChild>
              <a href="mailto:tarearnaut@gmail.com">Get In Touch</a>
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t">
          <div className="max-w-4xl mx-auto text-center text-muted-foreground">
            <p>&copy; 2025 Tarik Arnaut - All rights reserved</p>
          </div>
        </footer>
      </div>
  );
};

export default Portfolio;