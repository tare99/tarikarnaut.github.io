import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Building2,
  GraduationCap,
  BookOpen,
  ExternalLink,
  ChevronDown,
  Briefcase,
  Code2,
  Database,
  Cloud,
  Terminal,
  Layers
} from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";
import { useEffect, useState } from "react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");

  // Intersection observer for active section highlighting
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navigation = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "publications", label: "Publications" },
    { id: "contact", label: "Contact" },
  ];

  const experiences = [
    {
      id: 1,
      company: "Sportradar",
      companyUrl: "https://sportradar.com/",
      role: "Backend Developer",
      period: "2022 - Present",
      duration: "4+ years",
      location: "Bosnia and Herzegovina",
      highlights: [
        "Built, shipped, and maintained Java-based microservices in production",
        "Designed and developed backend systems in close collaboration with product managers",
        "Owned both domain and architectural decisions"
      ],
      description: [
        "Integrated high-risk money transactions and wallet integrations (debit, credit, refund) between client system and in-house wallet services with multi-tenant support.",
        "Implemented a transaction aggregation system that collected all client transactions, applied business logic, and forwarded events to a central gamification platform using Kafka CDC.",
        "Integrated a live and pre-match sports odds feed, streaming and transforming real-time updates into an internally developed feed library. Designed and built the feed library with multi-feed support, including recovery, caching, and delta-based update processing. Feed library was developed using pure Java.",
        "Built a provider-agnostic bonus aggregation system for casino games, handling player and game assignment for bonus distribution. Abstracted provider-specific APIs behind a unified interface.",
        "Developed admin-facing REST API for managing sports events, markets, and outcomes. Users could fetch existing feed events, create custom events and assign odds to them.",
        "Integrated payment systems: Monri, Payten, Payspot, C-Pay, Chapa, VCash, and more."
      ]
    }
  ];

  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: Code2,
      skills: ["Java", "JavaScript", "Python", "C++", "R", "Spring/Spring Boot", "Spring Security"]
    },
    {
      title: "Data & Storage",
      icon: Database,
      skills: ["MySQL/PostgreSQL", "JPA/Hibernate", "Flyway", "Kafka (Streams, Connect, Debezium)", "Vault"]
    },
    {
      title: "Infrastructure & DevOps",
      icon: Cloud,
      skills: ["Kubernetes/Helm", "Docker", "Jenkins", "CI/CD", "Grafana/Graylog/Prometheus"]
    },
    {
      title: "Tools & Practices",
      icon: Terminal,
      skills: ["Maven", "JUnit/Mockito/Testcontainers", "Shell/Bash scripting", "IntelliJ", "Copilot", "Git"]
    },
    {
      title: "Architecture & Methods",
      icon: Layers,
      skills: ["Microservices", "REST APIs", "Event-Driven Architecture", "Agile", "Automation", "System Design"]
    }
  ];

  const education = [
    {
      degree: "Master of Science",
      field: "IT & Business Intelligence",
      institution: "University",
      year: "2022"
    }
  ];

  const publications = [
    {
      title: "From Restricted Boltzmann Machines to Deep Belief Networks: A Multi-dataset Performance Study",
      authors: "Arnaut et al.",
      year: "2026",
      venue: "Advanced Technologies, Systems and Applications X (IAT 2025)",
      publisher: "Springer",
      publisherUrl: "https://link.springer.com/chapter/10.1007/978-3-032-05159-2_6"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="section-container">
          <div className="flex items-center justify-between h-16">
            <a href="#hero" className="font-semibold text-lg gradient-text">
              TA
            </a>
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id ? "text-primary" : ""}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <Button variant="gradient" size="sm" asChild className="hidden sm:inline-flex">
              <a href="mailto:tarearnaut@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Hire Me
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center gradient-hero bg-pattern">
          <div className="section-container py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text Content */}
              <div className="animate-fade-in-up">
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 border border-success/20 mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                  </span>
                  <span className="text-sm font-medium text-success">Available for opportunities</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Hi, I'm{" "}
                  <span className="gradient-text">Tarik Arnaut</span>
                </h1>

                <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
                  Backend Developer · MSc IT & BI
                </p>

                <div className="flex items-center gap-2 text-muted-foreground mb-6">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Bosnia and Herzegovina</span>
                  <span className="text-border">•</span>
                  <Building2 className="w-4 h-4 text-primary" />
                  <a href="https://sportradar.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    Sportradar
                  </a>
                </div>

                <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
                  Building <span className="text-foreground font-medium">scalable microservices</span>,{" "}
                  <span className="text-foreground font-medium">real-time data pipelines</span>, and{" "}
                  <span className="text-foreground font-medium">payment integrations</span> that power
                  production systems. 4+ years turning complex business requirements into reliable code.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <Button variant="gradient" size="lg" asChild>
                    <a href="mailto:tarearnaut@gmail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Get In Touch
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="#experience">
                      <Briefcase className="w-4 h-4 mr-2" />
                      View Experience
                    </a>
                  </Button>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">Connect with me:</span>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" asChild className="hover:text-primary">
                      <a href="https://github.com/tare99" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                        <Github className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild className="hover:text-primary">
                      <a href="https://linkedin.com/in/tarik-arnaut-ab41b8198" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild className="hover:text-primary">
                      <a href="mailto:tarearnaut@gmail.com" aria-label="Email">
                        <Mail className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right: Profile Photo */}
              <div className="flex justify-center lg:justify-end animate-fade-in delay-200">
                <div className="relative">
                  {/* Decorative ring */}
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl"></div>
                  <div className="relative">
                    <img
                      src={profilePhoto}
                      alt="Tarik Arnaut - Backend Developer"
                      className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover shadow-lg border-4 border-background"
                      loading="eager"
                    />
                    {/* Experience badge */}
                    <div className="absolute -bottom-2 -right-2 bg-card shadow-lg rounded-2xl px-4 py-2 border border-border">
                      <p className="text-2xl font-bold text-primary">4+</p>
                      <p className="text-xs text-muted-foreground">Years Exp.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Scroll to about section">
                <ChevronDown className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-surface">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
              <Badge variant="outline" className="mb-4">About Me</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Turning Business Logic into <span className="gradient-text">Production-Ready Code</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I'm a software engineer who thrives at the intersection of complex business requirements
                and elegant technical solutions. At <strong className="text-foreground">Sportradar</strong>,
                I've built everything from real-time sports data feeds to secure payment integrations,
                always with a focus on reliability, scalability, and clean architecture.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a Master's in IT & Business Intelligence, I bring both technical depth and
                business acumen to every project. I believe great software is built through clear
                communication, solid engineering practices, and an obsession with quality.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24">
          <div className="section-container">
            <div className="text-center mb-16 animate-fade-in-up">
              <Badge variant="outline" className="mb-4">Experience</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Where I've <span className="gradient-text">Made an Impact</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
              {experiences.map((exp) => (
                <Card key={exp.id} className="p-8 card-hover animate-fade-in-up">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-lg text-primary hover:underline font-medium"
                      >
                        <Building2 className="w-4 h-4" />
                        {exp.company}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                        <Badge variant="secondary" className="ml-2 text-xs">{exp.duration}</Badge>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.highlights.map((highlight, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="details" className="border-b-0">
                      <AccordionTrigger className="py-3 hover:no-underline text-sm font-medium text-primary">
                        View Key Accomplishments
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-3 mt-2">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex gap-3 text-muted-foreground">
                              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-surface">
          <div className="section-container">
            <div className="text-center mb-16 animate-fade-in-up">
              <Badge variant="outline" className="mb-4">Skills</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Technologies I <span className="gradient-text">Work With</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                A comprehensive toolkit for building robust, scalable backend systems
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
              {skillCategories.map((category, index) => (
                <Card
                  key={index}
                  className="p-6 card-hover"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <category.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span key={i} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-24">
          <div className="section-container">
            <div className="text-center mb-16 animate-fade-in-up">
              <Badge variant="outline" className="mb-4">Education</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Academic <span className="gradient-text">Background</span>
              </h2>
            </div>

            <div className="max-w-2xl mx-auto animate-fade-in-up">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.field}</p>
                      <p className="text-sm text-muted-foreground mt-1">{edu.year}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="py-24 bg-surface">
          <div className="section-container">
            <div className="text-center mb-16 animate-fade-in-up">
              <Badge variant="outline" className="mb-4">Publications</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Research & <span className="gradient-text">Publications</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto animate-fade-in-up">
              {publications.map((pub, index) => (
                <Card key={index} className="p-6 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{pub.title}</h3>
                      <p className="text-muted-foreground mb-2">
                        {pub.authors} ({pub.year})
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {pub.venue},{" "}
                        <a
                          href={pub.publisherUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline inline-flex items-center gap-1"
                        >
                          {pub.publisher}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="section-container">
            <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
              <Badge variant="outline" className="mb-4">Contact</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Let's Build Something <span className="gradient-text">Together</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in new opportunities, exciting projects, and connecting with
                fellow developers. Whether you have a question or just want to say hello, I'd love
                to hear from you.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Button variant="gradient" size="lg" asChild>
                  <a href="mailto:tarearnaut@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    tarearnaut@gmail.com
                  </a>
                </Button>
              </div>

              <div className="flex justify-center gap-4">
                <Button variant="outline" size="lg" asChild>
                  <a href="https://github.com/tare99" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://linkedin.com/in/tarik-arnaut-ab41b8198" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t bg-surface">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Tarik Arnaut. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/tare99"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/tarik-arnaut-ab41b8198"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:tarearnaut@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

