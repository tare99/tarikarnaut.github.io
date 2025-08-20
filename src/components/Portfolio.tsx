import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Twitter, Mail, ExternalLink, MapPin } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Docker"],
      link: "https://github.com/yourusername/ecommerce-platform",
      demo: "https://ecommerce-demo.vercel.app"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Real-time task management application with team collaboration features. Built with React, Firebase, and Material-UI.",
      technologies: ["React", "Firebase", "Material-UI", "TypeScript"],
      link: "https://github.com/yourusername/task-manager",
      demo: "https://taskmanager-demo.vercel.app"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with data visualization and location-based forecasts. Integrated with multiple weather APIs.",
      technologies: ["Vue.js", "Chart.js", "REST APIs", "Tailwind CSS"],
      link: "https://github.com/yourusername/weather-dashboard",
      demo: "https://weather-demo.netlify.app"
    }
  ];

  const experiences = [
    {
      id: 1,
      company: "TechCorp Solutions",
      role: "Senior Frontend Developer",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: "Lead development of customer-facing web applications serving 100K+ users. Implemented modern React patterns and improved performance by 40%."
    },
    {
      id: 2,
      company: "StartupXYZ",
      role: "Full Stack Developer",
      period: "2020 - 2022",
      location: "Austin, TX",
      description: "Built and maintained the core product from MVP to 10K+ users. Worked on both frontend (React) and backend (Node.js) development."
    },
    {
      id: 3,
      company: "Digital Agency Pro",
      role: "Frontend Developer",
      period: "2019 - 2020",
      location: "Remote",
      description: "Developed responsive websites and web applications for various clients. Specialized in React, Vue.js, and modern CSS frameworks."
    }
  ];

  const skills = [
    "JavaScript", "TypeScript", "React", "Vue.js", "Node.js", 
    "Python", "PostgreSQL", "MongoDB", "AWS", "Docker", 
    "GraphQL", "REST APIs", "Git", "CI/CD"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 gradient-hero">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl font-bold text-primary-foreground">
              JD
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              John Developer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              Full Stack Software Developer
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
              <MapPin className="w-4 h-4" />
              <span>San Francisco, CA</span>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Passionate about creating innovative web applications and solving complex problems with clean, efficient code. 
              I specialize in React, Node.js, and modern web technologies with over 5 years of experience.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            <Button variant="social" size="icon" asChild>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="social" size="icon" asChild>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="social" size="icon" asChild>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="social" size="icon" asChild>
              <a href="mailto:john@example.com">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
          
          <div className="flex justify-center gap-4">
            <Button variant="gradient" size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:john@example.com">Get In Touch</a>
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
              <Card key={project.id} className="p-6 hover:shadow-lg transition-shadow duration-300">
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
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button variant="default" size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
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
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>{exp.period}</p>
                    <p className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
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
            <a href="mailto:john@example.com">Get In Touch</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-4xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 John Developer. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;