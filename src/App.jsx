"use client"
import emailjs from "@emailjs/browser"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowUpRight,
  Code,
  Brain,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  Database,
  Globe,
  Rocket,
  Target,
  Award,
  X,
  Calendar,
  Building,
  Eye,
  Download,
  Menu,
  Server,
} from "lucide-react"

// Enhanced Badge Component
const Badge = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-all duration-300 cursor-pointer ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      whileHover={{
        scale: 1.05,
        y: -2,
      }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  )
}

// Simplified Floating particles background
const FloatingParticles = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-cyan-400/10"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  )
}

// Mobile Navigation Component
const MobileNavigation = ({ activeSection, isOpen, onToggle }) => {
  const navItems = [
    { id: "about", label: "ABOUT" },
    { id: "skills", label: "SKILLS" },
    { id: "projects", label: "PROJECTS" },
    { id: "certifications", label: "CERTIFICATIONS" },
    { id: "contact", label: "CONTACT" },
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        className="lg:hidden fixed top-6 right-6 z-50 p-3 rounded-xl bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 text-slate-200"
        onClick={onToggle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Menu className="h-6 w-6" />
      </motion.button>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onToggle}
          >
            <motion.nav
              className="flex flex-col items-center justify-center h-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="space-y-8">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.a
                      className={`block text-2xl font-bold uppercase tracking-wider transition-all duration-300 ${
                        activeSection === item.id ? "text-cyan-300" : "text-slate-400 hover:text-white"
                      }`}
                      href={`#${item.id}`}
                      onClick={onToggle}
                      whileHover={{ scale: 1.1, x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.label}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile Social Links */}
              <motion.div
                className="flex items-center gap-6 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {[
                  { icon: Github, href: "https://github.com/AKSHAY-1205", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/akshay-j-739397259/", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:akshayjagadeesh05@gmail.com", label: "Email" },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    className="text-slate-400 hover:text-cyan-300 transition-colors duration-300"
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="h-8 w-8" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Professional Skill Card
const SkillCard = ({ icon, title, skills, gradient, borderColor, textColor, shadowColor, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`group relative p-6 lg:p-8 rounded-2xl border ${borderColor} bg-gradient-to-br ${gradient} backdrop-blur-xl transition-all duration-500 cursor-pointer overflow-hidden`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.02,
        y: -8,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Clean background gradient */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, rgba(6, 182, 212, 0.1), transparent 70%)`,
        }}
      />

      {/* Icon */}
      <motion.div
        className={`inline-flex p-3 lg:p-4 rounded-xl bg-gradient-to-r ${gradient} border ${borderColor} mb-4 lg:mb-6 shadow-lg relative z-10`}
        animate={isHovered ? { y: -5, scale: 1.05 } : { y: 0, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {icon}
      </motion.div>

      <motion.h3
        className={`text-lg font-semibold ${textColor} mb-4 lg:mb-6 group-hover:text-white transition-colors duration-300 relative z-10`}
        animate={isHovered ? { x: 5 } : { x: 0 }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.h3>

      <div className="flex flex-wrap gap-2 relative z-10">
        {skills.map((skill, skillIndex) => (
          <Badge
            key={skillIndex}
            className={`bg-gradient-to-r ${gradient} ${textColor} ${borderColor} hover:shadow-lg font-medium`}
            delay={skillIndex * 0.1}
          >
            {skill}
          </Badge>
        ))}
      </div>

      {/* Professional shine effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: "linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)",
        }}
        animate={isHovered ? { x: ["-100%", "100%"] } : {}}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </motion.div>
  )
}

// Certificate Viewer Modal - Updated to show actual PDFs
const CertificateViewer = ({ isOpen, onClose, certificate }) => {
  const handleDownload = () => {
    if (certificate?.googleDriveUrl) {
      // Convert preview URL to download URL
      const downloadUrl = certificate.googleDriveUrl.replace("/preview", "/export?format=pdf")
      window.open(downloadUrl, "_blank")
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-slate-900 rounded-2xl border border-slate-700 w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 lg:p-6 border-b border-slate-700">
              <div>
                <h3 className="text-lg lg:text-xl font-semibold text-white">{certificate?.title}</h3>
                <p className="text-slate-400">{certificate?.issuer}</p>
              </div>
              <div className="flex items-center gap-3">
                <motion.button
                  onClick={handleDownload}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  title="Download Certificate"
                >
                  <Download className="h-5 w-5" />
                </motion.button>
                <motion.button
                  onClick={onClose}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>
            </div>

            {/* Certificate Content - Now shows actual PDF */}
            <div className="p-4 bg-slate-800/50 min-h-[400px] lg:min-h-[600px]">
              {certificate?.googleDriveUrl ? (
                <iframe
                  src={certificate.googleDriveUrl}
                  className="w-full h-[400px] lg:h-[600px] rounded-lg border border-slate-600"
                  title={`${certificate.title} Certificate`}
                  frameBorder="0"
                  allowFullScreen
                />
              ) : (
                <div className="flex items-center justify-center h-[400px] lg:h-[600px]">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                      <Award className="h-12 w-12 text-slate-400" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">Certificate Not Available</h4>
                    <p className="text-slate-400 mb-6 max-w-md">
                      Please add your Google Drive certificate link to display the certificate here.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Professional Certification Card
const CertificationCard = ({ certification, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [showCertificate, setShowCertificate] = useState(false)

  return (
    <>
      <motion.div
        className={`group relative p-6 rounded-2xl border ${certification.borderColor} bg-gradient-to-br ${certification.gradient} backdrop-blur-xl transition-all duration-500 cursor-pointer overflow-hidden`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.02,
          y: -8,
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Clean background glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${certification.iconColor.replace("text-", "rgba(").replace("-400", ", 0.1)")}, transparent 70%)`,
          }}
        />

        <div className="flex flex-col sm:flex-row items-start gap-4 relative z-10">
          <motion.div
            className={`p-3 rounded-xl bg-gradient-to-r ${certification.gradient} border ${certification.borderColor} shadow-lg`}
            animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <certification.icon className={`h-6 w-6 ${certification.iconColor}`} />
          </motion.div>

          <div className="flex-1">
            <motion.h3
              className="text-lg font-semibold text-slate-200 mb-2"
              animate={isHovered ? { x: 5 } : { x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {certification.title}
            </motion.h3>
            <p className="text-slate-400 text-sm mb-3">{certification.issuer}</p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-xs text-slate-500 mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>{certification.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Award className="h-3 w-3" />
                <span>{certification.credentialId}</span>
              </div>
            </div>

            {/* View Certificate Button */}
            <motion.button
              onClick={() => setShowCertificate(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white transition-all duration-300 text-sm border border-slate-600/50 hover:border-slate-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye className="h-4 w-4" />
              View Certificate
            </motion.button>
          </div>
        </div>

        {/* Professional shine effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)",
          }}
          animate={isHovered ? { x: ["-100%", "100%"] } : {}}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </motion.div>

      <CertificateViewer
        isOpen={showCertificate}
        onClose={() => setShowCertificate(false)}
        certificate={certification}
      />
    </>
  )
}

// Project Action Buttons Component (Clean version)
const ProjectActionButtons = ({ project }) => {
  return (
    <div className="flex items-center gap-3 relative z-10">
      {/* GitHub button – always shown if github link exists */}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl bg-slate-900/70 border border-slate-600/70
                     text-slate-100 text-sm font-medium hover:bg-slate-800 hover:border-slate-400
                     transition-all duration-300"
        >
          <Github className="w-4 h-4" />
          <span>Code</span>
        </a>
      )}

      {/* Live Demo button – ONLY if project.link is not null */}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl bg-cyan-500/90
                     text-slate-900 text-sm font-semibold hover:bg-cyan-400
                     shadow-md shadow-cyan-500/30 transition-all duration-300"
        >
          <ExternalLink className="w-4 h-4" />
          <span>Live</span>
        </a>
      )}
    </div>
  );
};


// Smooth Project Archive Modal
const ProjectArchive = ({ isOpen, onClose, projects }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={onClose}
        >
          <motion.div
            className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-3xl border border-slate-700/50 w-full max-w-7xl max-h-[90vh] overflow-hidden shadow-2xl"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Clean Header */}
            <motion.div
              className="sticky top-0 bg-gradient-to-r from-slate-900/98 to-slate-800/98 backdrop-blur-xl border-b border-slate-700/50 p-6 lg:p-8 flex items-center justify-between"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <div>
                <h2 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2 lg:mb-3">
                  Project Archive
                </h2>
                <p className="text-slate-400 text-base lg:text-lg">Explore all my projects and their technologies</p>
              </div>

              <motion.button
                onClick={onClose}
                className="p-3 lg:p-4 rounded-2xl hover:bg-slate-800/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <X className="h-6 lg:h-7 w-6 lg:w-7 text-slate-400 hover:text-white transition-colors duration-300" />
              </motion.button>
            </motion.div>

            {/* Clean Projects Grid */}
            <div className="p-6 lg:p-8 overflow-y-auto max-h-[calc(90vh-140px)] custom-scrollbar">
              <div className="grid gap-6 lg:gap-8 md:grid-cols-2">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className={`group relative p-6 lg:p-8 rounded-3xl border ${project.borderColor} bg-gradient-to-br ${project.gradient} backdrop-blur-xl transition-all duration-500 cursor-pointer overflow-hidden`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1 + 0.2,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      scale: 1.02,
                      y: -8,
                      transition: { duration: 0.3 },
                    }}
                  >
                    {/* Clean background effect */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, rgba(6, 182, 212, 0.1), transparent 70%)`,
                      }}
                    />

                    {/* Project Header */}
                    <div className="flex flex-col sm:flex-row items-start justify-between mb-6 relative z-10 gap-4">
                      <motion.div
                        className={`p-4 rounded-2xl bg-gradient-to-r ${project.gradient} border ${project.borderColor} shadow-xl`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.icon}
                      </motion.div>

                      <ProjectActionButtons project={project} />
                    </div>

                    {/* Project Content */}
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 relative z-10">{project.title}</h3>

                    <p className="text-slate-300 text-sm lg:text-base leading-relaxed mb-6 relative z-10">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          className={`bg-gradient-to-r ${project.gradient} ${project.textColor} ${project.borderColor} font-medium text-sm`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Project Status */}
                    <div className="flex justify-end relative z-10">
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-bold ${project.textColor} bg-white/10 backdrop-blur-sm border ${project.borderColor}`}
                      >
                        {project.status}
                      </span>
                    </div>

                    {/* Clean shine effect */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      style={{
                        background:
                          "linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)",
                      }}
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 3,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Clean Background Mouse Follower
const BackgroundMouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 hidden lg:block"
      style={{
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.1), transparent 80%)`,
      }}
    />
  )
}

// Main App Component
function App() {
  const [activeSection, setActiveSection] = useState("about")
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)
  const [showProjectArchive, setShowProjectArchive] = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "certifications", "contact"]
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.send(
        "service_ub6xvvs", // Replace this
        "template_2dg4x8s", // Replace this
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(), // Optional timestamp
        },
        "FA2P-SdtldwpoO-9M", // Replace this
      )

      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Email send error:", error)
      setSubmitStatus("error")
    }

    setIsSubmitting(false)
    setTimeout(() => setSubmitStatus(""), 3000)
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const skills = {
    devops: {
      title: "DevOps",
      skills: ["AWS", "Ansible", "Terraform", "Docker","Linux", "CI/CD"],
      icon: <Server className="h-6 w-6" />, // you can also use Wrench, Cog, Cloud, etc.
      gradient: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-400/50",
      textColor: "text-orange-300",
      shadowColor: "shadow-orange-500/30",
    },

    ai: {
      title: "Artificial Intelligence",
      skills: ["ML", "DL", "OpenCV", "TL", "Pandas"],
      icon: <Brain className="h-6 w-6" />,
      gradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-400/50",
      textColor: "text-purple-300",
      shadowColor: "shadow-purple-500/30",
    },

    frontend: {
      title: "Frontend Development",
      skills: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
      icon: <Globe className="h-6 w-6" />,
      gradient: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-400/50",
      textColor: "text-cyan-300",
      shadowColor: "shadow-cyan-500/30",
    },

    backend: {
      title: "Backend Development",
      skills: ["Node.js", "Python","Firebase", "MongoDB", "Flask"],
      icon: <Database className="h-6 w-6" />,
      gradient: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-400/50",
      textColor: "text-emerald-300",
      shadowColor: "shadow-emerald-500/30",
    },
  };


  const certifications = [
    {
      title: "MongoDB Certified Associate Developer",
      issuer: "MongoDB University",
      date: "2025",
      credentialId: " MDBul06kzopwr",
      icon: Database,
      gradient: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-400/50",
      iconColor: "text-emerald-400",
      googleDriveUrl: "../assests/akshayMongoDB.pdf", // Example Google Drive URL
    },
    {
      title: "Azure AI Engineer Associate",
      issuer: "Microsoft",
      date: "2025",
      credentialId: "5CEEDA2C4A1F81CC",
      icon: Building,
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-400/50",
      iconColor: "text-blue-400",
      googleDriveUrl: "../assests/akshayAzure.pdf", // Example Google Drive URL
    },
  ]

  const allProjects = [
    {
      title: "Terraform AWS EC2 + Flask Automation",
      description:
        "Fully automated deployment workflow using Terraform to provision AWS EC2, configure networking, and run a Flask web application with zero manual setup.",
      technologies: [
        "Terraform",
        "AWS",
        "EC2",
        "Flask",
        "Python",
        "IaC"
      ],
      icon: <Rocket className="h-6 w-6" />,
      link: null,
      github: "https://github.com/AKSHAY-1205/terraform-ec2-flask", 
      gradient: "from-yellow-500/20 to-orange-500/20",
      status: "Code Only⚙️",
      borderColor: "border-yellow-400/50",
      textColor: "text-yellow-300",
    },
    {
      title: "Ansible AWS EC2 Manager",
      description:
        "DevOps automation project that manages AWS EC2 lifecycle using Ansible — provisioning instances, setting up passwordless SSH, and selectively stopping Ubuntu-based EC2s with Ansible facts.",
      technologies: [
        "Ansible",
        "AWS",
        "EC2",
        "Ansible Vault",
        "Python (boto3)",
        "Automation"
      ],
      icon: <Rocket className="h-6 w-6" />,
      link: null, // no live demo – infra-focused project
      github: "https://github.com/AKSHAY-1205/ansible-ec2-manager", // replace with actual
      gradient: "from-emerald-500/20 to-teal-500/20",
      status: "Code Only⚙️",
      borderColor: "border-emerald-400/50",
      textColor: "text-emerald-300",
    },

    {
      title: "Product Recommendation System using ML",
      description:
        "Built an intelligent recommendation system using machine learning that analyzes customer behavior and preferences to suggest products.",
      technologies: ["Python", "TensorFlow", "Streamlit"],
      icon: <Brain className="h-6 w-6" />,
      link: null,
      github: "https://github.com/AKSHAY-1205/Product-Recommendation-System",
      gradient: "from-purple-500/20 to-pink-500/20",
      status: "Completed",
      borderColor: "border-purple-400/50",
      textColor: "text-purple-300",
    },
    {
      title: "Image Based Product Recommendation System using DL",
      description:
        "Built a system that recommends similar products based on image input using deep learning and an interactive Streamlit UI.",
      technologies: ["Python", "TensorFlow/Keras", "CNN", " Streamlit"],
      icon: <Target className="h-6 w-6" />,
      link: null,
      github: "https://github.com/AKSHAY-1205/Image-based-Product-Recommendation-System-using-Deep-Learning",
      gradient: "from-emerald-500/20 to-teal-500/20",
      status: "Completed",
      borderColor: "border-emerald-400/50",
      textColor: "text-emerald-300",
    },
    {
      title: "Blog Website",
      description:
        "Developed a full-stack blog platform where users can create, edit, like, and comment on blog posts with seamless user experience.",
      technologies: ["React.js", "MongoDB", "Express.js", "Node.js"],
      icon: <Rocket className="h-6 w-6" />,
      link: null,
      github: "https://github.com/AKSHAY-1205/NOTELIFT-Blog-",
      gradient: "from-cyan-500/20 to-blue-500/20",
      status: "Completed",
      borderColor: "border-cyan-400/50",
      textColor: "text-cyan-300",
    },
    {
      title: "Food and Beverage Sales Analysis Dashboard",
      description:
        "Designed an interactive Power BI dashboard to analyze sales performance, revenue trends, and customer insights in the food and beverage sector.",
      technologies: ["Power BI", "DAX", "Data Modeling", "Data Cleaning (Power Query)", "Excel"],
      icon: <Globe className="h-6 w-6" />,
      link: null,
      github: "https://github.com/AKSHAY-1205/Food-And-Beverage-Sales-Analysis-Dashboard",
      status: "Completed",
      gradient: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-400/50",
      textColor: "text-orange-300",
    },
    {
      title: "Movie Recommendation System using Machine Learning",
      description:
        "Built and deployed a machine learning-based system that suggests movies to users based on content similarity and preferences.",
      technologies: ["Python", "Pandas", "Scikit-learn", "NLP", "TF-IDF", "Render"],
      icon: <Code className="h-6 w-6" />,
      link: "https://movie-recommendation-system-ml-1-66bo.onrender.com/",
      github: "https://github.com/AKSHAY-1205/Movie_Recommendation_System_ML",
      gradient: "from-purple-500/20 to-pink-500/20",
      status: "Live🚀",
      borderColor: "border-purple-400/50",
      textColor: "text-purple-300",
    },
    {
      title: "Used Car Selling Price Detection",
      description:
        " Developed and deployed a machine learning model to predict the selling price of used cars based on features like age, mileage, and fuel type.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Pickle", "Streamlit"],
      icon: <Brain className="h-6 w-6" />,
      link: "https://used-car-selling-price-detection.streamlit.app/",
      github: "https://github.com/AKSHAY-1205/Used-Car-Selling-Price-Detection",
      status: "Live🚀",
      gradient: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-400/50",
      textColor: "text-emerald-300",
    },

  ]

  const featuredProjects = allProjects.slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 relative overflow-hidden">
      {/* Clean background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/5 via-blue-600/5 to-purple-600/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/10 via-slate-900/10 to-purple-900/10"></div>

        {/* Clean animated background orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <FloatingParticles />
      <BackgroundMouseFollower />

      {/* Mobile Navigation */}
      <MobileNavigation
        activeSection={activeSection}
        isOpen={mobileNavOpen}
        onToggle={() => setMobileNavOpen(!mobileNavOpen)}
      />

      {/* Project Archive Modal */}
      <ProjectArchive isOpen={showProjectArchive} onClose={() => setShowProjectArchive(false)} projects={allProjects} />

      {/* Clean Scrollbar Styles */}
      <style jsx global="true">{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(51, 65, 85, 0.3);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #3b82f6);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #2563eb);
        }
      `}</style>

      {/* Responsive Layout */}
      <div className="lg:flex min-h-screen">
          {/* 1️⃣ Mobile Hero – only on small screens */}
        {/* Mobile Hero – only visible on small screens */}
            <section className="lg:hidden px-6 pt-8 pb-0">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-200">
                Akshay
              </h1>

              <p className="mt-2 text-lg font-semibold text-slate-200">
                AI/ML Engineer | DevOps Engineer
              </p>

              <p className="mt-3 text-base text-slate-300 max-w-md leading-relaxed sm:text-lg">
                I build scalable, cloud-driven systems and intelligent applications powered by AI.
              </p>

              
            </section>

        {/* Desktop Left Sidebar */}
                  <motion.aside
            className="
              hidden           /* hide on mobile */
              lg:flex          /* show as flex on lg+ */
              lg:fixed lg:left-0 lg:top-0
              lg:h-screen lg:w-1/2 lg:max-w-xl
              lg:flex-col lg:justify-between
              pl-12 pr-4 py-12
              lg:pl-16 lg:pr-8 lg:py-24
              z-40
            "
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
          <div>
            <motion.div
              className="group mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1
                className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl mb-3 cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  color: "#ffffff",
                }}
                transition={{ duration: 0.3 }}
              >
                Akshay
              </motion.h1>
              <motion.h2
                className="text-2xl font-medium tracking-tight text-slate-300 mb-4"
                whileHover={{ color: "#e2e8f0" }}
                transition={{ duration: 0.3 }}
              >
               AI/ML Engineer | DevOps Engineer
              </motion.h2>
              <motion.p
                className="text-slate-400 text-xl leading-normal max-w-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                I build scalable, cloud-driven systems and intelligent applications powered by AI.
              </motion.p>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.nav
              className="nav"
              aria-label="In-page jump links"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ul className="mt-16 w-max">
                {[
                  { id: "about", label: "ABOUT" },
                  { id: "skills", label: "SKILLS" },
                  { id: "projects", label: "PROJECTS" },
                  { id: "certifications", label: "CERTIFICATIONS" },
                  { id: "contact", label: "CONTACT" },
                ].map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <motion.a
                      className={`group flex items-center py-3 nav-link transition-all duration-300 cursor-pointer ${
                        activeSection === item.id ? "active" : ""
                      }`}
                      href={`#${item.id}`}
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.span
                        className={`nav-indicator mr-4 h-px bg-slate-600 transition-all duration-300 ${
                          activeSection === item.id
                            ? "w-16 bg-slate-200"
                            : "w-8 group-hover:w-16 group-hover:bg-slate-200"
                        }`}
                      />
                      <span
                        className={`nav-text text-sm sm:text-base font-extrabold uppercase tracking-wider transition-all duration-300 ${
                          activeSection === item.id ? "text-white" : "text-slate-400 group-hover:text-white"
                        }`}
                      >
                        {item.label}
                      </span>
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </div>

          {/* Desktop Social Links */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center gap-5">
              {[
                { icon: Github, href: "https://github.com/AKSHAY-1205", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/akshay-j-739397259/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:akshayjagadeesh05@gmail.com", label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  className="text-slate-400 hover:text-slate-200 transition-colors duration-300 cursor-pointer"
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                    scale: 1.2,
                    y: -5,
                    color: "#06b6d4",
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.aside>

        {/* Main Content - Responsive */}
        <motion.main
          className="w-full lg:ml-auto lg:w-1/2 min-h-screen flex justify-center px-6 lg:pr-8 lg:pr-16 xl:pr-20"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 100 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="max-w-3xl w-full py-20 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-12">
            {/* About Section */}
            <section id="about" className="mb-12 md:mb-16 lg:mb-24">
              {/* Mobile Section Title */}
              <div className="lg:hidden mb-6">
                <h2 className="text-xl font-bold text-slate-200 mb-2 border-b border-slate-700/30 pb-2">About</h2>
              </div>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {[
                    "I'm Akshay J, a final-year B.Tech student at Kongu Engineering College specializing in Artificial Intelligence and DevOps engineering. I focus on building reliable, automated systems while integrating AI to solve real-world problems efficiently.",
                    
                    "My core strengths lie in cloud infrastructure management, automation, and deployment pipelines using AWS, Terraform, Ansible, and Docker. Alongside DevOps, I work extensively with machine learning and computer vision, enabling me to build end-to-end AI-driven systems that are production-ready and scalable.",
                    
                    "I also enjoy creating full-stack applications that bring AI models to life through practical user interfaces and real-time functionality. I constantly explore the latest advancements in MLOps, generative AI, and cloud-native technologies—driven by a mindset of continuous learning and hands-on experimentation."
                  ].map((paragraph, index) => (
                  <motion.p
                    key={index}
                    className="leading-normal text-base lg:text-lg text-slate-300 md:text-slate-200 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {paragraph}
                  </motion.p>

                ))}
              </motion.div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="mb-12 md:mb-16 lg:mb-24">
              {/* Mobile Section Title */}
              <div className="lg:hidden mb-6">
                <h2 className="text-xl font-bold text-slate-200 mb-2 border-b border-slate-700/30 pb-2">Skills</h2>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {Object.values(skills).map((skill, index) => (
                  <SkillCard
                    key={index}
                    icon={skill.icon}
                    title={skill.title}
                    skills={skill.skills}
                    gradient={skill.gradient}
                    borderColor={skill.borderColor}
                    textColor={skill.textColor}
                    shadowColor={skill.shadowColor}
                    index={index}
                  />
                ))}
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="mb-12 md:mb-16 lg:mb-24">
              {/* Mobile Section Title */}
              <div className="lg:hidden mb-6">
                <h2 className="text-xl font-bold text-slate-200 mb-2 border-b border-slate-700/30 pb-2">Projects</h2>
              </div>

              <div>
                <ul className="group/list space-y-8">
                  {featuredProjects.map((project, index) => (
                    <li key={index}>
                      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                        <div className="z-10 sm:order-2 sm:col-span-6">
                          <div className="flex flex-col sm:flex-row items-start justify-between mb-2 gap-4">
                            <motion.h3 whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                              <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-cyan-300 transition-colors duration-300 text-lg lg:text-xl">
                                {project.title}
                              </span>
                            </motion.h3>

                            <ProjectActionButtons
                              project={project}
                              className="opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            />
                          </div>

                          <motion.p
                            className="mt-2 leading-normal text-slate-400 hover:text-slate-300 transition-colors duration-300 text-base lg:text-lg"
                            whileHover={{ x: 3 }}
                            transition={{ duration: 0.2 }}
                          >
                            {project.description}
                          </motion.p>

                          <ul className="mt-2 flex flex-wrap">
                            {project.technologies.map((tech, techIndex) => (
                              <li key={techIndex} className="mr-1.5 mt-2">
                                <Badge
                                  className={`bg-gradient-to-r ${project.gradient} ${project.textColor} ${project.borderColor} hover:shadow-lg font-medium`}
                                  delay={techIndex * 0.05}
                                >
                                  {tech}
                                </Badge>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="z-10 sm:order-1 sm:col-span-2 sm:translate-y-1">
                          <motion.div
                            className={`rounded border-2 ${project.borderColor} transition group-hover:${project.borderColor} bg-gradient-to-br ${project.gradient} p-4 h-20 sm:h-24 flex items-center justify-center group-hover:shadow-lg`}
                            whileHover={{
                              scale: 1.05,
                              rotate: 2,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            {project.icon}
                          </motion.div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <motion.div
                  className="mt-12"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold group hover:text-cyan-300 transition-all duration-300 cursor-pointer relative overflow-hidden px-6 lg:px-8 py-3 lg:py-4 rounded-xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm text-base lg:text-lg"
                    onClick={() => setShowProjectArchive(true)}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 15px 35px rgba(6, 182, 212, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="relative z-10">
                      <span className="border-b border-transparent pb-px transition group-hover:border-cyan-300 motion-reduce:transition-none">
                        View Full Project Archive
                      </span>
                      <span className="whitespace-nowrap">
                        <motion.div
                          className="ml-3 inline-block"
                          animate={{ x: [0, 8, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
                        </motion.div>
                      </span>
                    </span>
                  </motion.button>
                </motion.div>
              </div>
            </section>

            {/* Certifications Section */}
            <section id="certifications" className="mb-12 md:mb-16 lg:mb-24">
              {/* Mobile Section Title */}
              <div className="lg:hidden mb-6">
                <h2 className="text-xl font-bold text-slate-200 mb-2 border-b border-slate-700/30 pb-2">
                  Certifications
                </h2>
              </div>

              <div className="space-y-6">
                {certifications.map((certification, index) => (
                  <CertificationCard key={index} certification={certification} index={index} />
                ))}
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="mb-12 md:mb-16 lg:mb-24">
              {/* Mobile Section Title */}
              <div className="lg:hidden mb-6">
                <h2 className="text-xl font-bold text-slate-200 mb-2 border-b border-slate-700/30 pb-2">Contact</h2>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                {/* Contact Info */}
                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      title: "Email",
                      value: "akshayjagadeesh05@gmail.com",
                      gradient: "from-cyan-500/20 to-blue-500/20",
                      borderColor: "border-cyan-400/30",
                      iconColor: "text-cyan-400",
                    },
                    {
                      icon: Phone,
                      title: "Phone",
                      value: "+91 8870584250",
                      gradient: "from-emerald-500/20 to-teal-500/20",
                      borderColor: "border-emerald-400/30",
                      iconColor: "text-emerald-400",
                    },
                    {
                      icon: MapPin,
                      title: "Location",
                      value: "Tiruppur, Tamilnadu",
                      gradient: "from-purple-500/20 to-pink-500/20",
                      borderColor: "border-purple-400/30",
                      iconColor: "text-purple-400",
                    },
                  ].map((contact, index) => (
                    <motion.div
                      key={contact.title}
                      className={`p-6 rounded-xl border ${contact.borderColor} bg-gradient-to-br ${contact.gradient} backdrop-blur-sm hover:shadow-lg transition-all duration-300 cursor-pointer`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.02,
                        y: -5,
                      }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <motion.div
                          className={`p-2 rounded-lg bg-gradient-to-r ${contact.gradient} border ${contact.borderColor}`}
                          whileHover={{ rotate: 5, scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <contact.icon className={`h-4 w-4 ${contact.iconColor}`} />
                        </motion.div>
                        <h3 className="font-medium text-slate-200 text-base lg:text-lg">{contact.title}</h3>
                      </div>
                      <p className="text-slate-400 text-sm">{contact.value}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Contact Form */}
                <motion.div
                  className="p-6 lg:p-8 rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    {[
                      { name: "name", label: "Name", type: "text", placeholder: "Your name" },
                      { name: "email", label: "Email", type: "email", placeholder: "your.email@example.com" },
                    ].map((field, index) => (
                      <motion.div
                        key={field.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <label htmlFor={field.name} className="block text-sm font-medium text-slate-300 mb-2">
                          {field.label}
                        </label>
                        <motion.input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-200 placeholder-slate-500 focus:border-cyan-400/50 focus:outline-none transition-all duration-300 text-sm"
                          placeholder={field.placeholder}
                          required
                          whileFocus={{
                            scale: 1.02,
                          }}
                        />
                      </motion.div>
                    ))}

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                        Message
                      </label>
                      <motion.textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-200 placeholder-slate-500 focus:border-cyan-400/50 focus:outline-none transition-all duration-300 resize-none text-sm"
                        placeholder="Tell me about your project or opportunity..."
                        required
                        whileFocus={{
                          scale: 1.02,
                        }}
                      />
                    </motion.div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium hover:from-cyan-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 text-sm"
                      whileHover={{
                        scale: 1.02,
                      }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <AnimatePresence mode="wait">
                        {isSubmitting ? (
                          <motion.div
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2"
                          >
                            <motion.div
                              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            />
                            Sending...
                          </motion.div>
                        ) : (
                          <motion.div
                            key="send"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2"
                          >
                            <Send className="h-4 w-4" />
                            Send Message
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>

                    <AnimatePresence>
                      {submitStatus === "success" && (
                        <motion.div
                          className="flex items-center gap-2 p-3 rounded-lg bg-emerald-500/20 border border-emerald-400/50 text-emerald-200"
                          initial={{ opacity: 0, y: 20, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -20, scale: 0.9 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CheckCircle2 className="h-4 w-4" />
                          <span className="font-medium text-sm">
                            Message sent successfully! I'll get back to you soon.
                          </span>
                        </motion.div>
                      )}
                      {submitStatus === "error" && (
                        <motion.div
                          className="flex items-center gap-2 p-3 rounded-lg bg-red-500/20 border border-red-400/50 text-red-200"
                          initial={{ opacity: 0, y: 20, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -20, scale: 0.9 }}
                          transition={{ duration: 0.3 }}
                        >
                          <X className="h-4 w-4" />
                          <span className="font-medium text-sm">Something went wrong. Please try again.</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </motion.div>
              </div>
            </section>

            {/* Footer */}
            <motion.footer
              className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="leading-normal">
                Designed with ❤️ and coded with{" "}
                <motion.a
                  href="https://reactjs.org/"
                  className="font-medium text-slate-400 hover:text-cyan-300 focus-visible:text-cyan-300 transition-colors duration-300"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  React
                </motion.a>
                ,{" "}
                <motion.a
                  href="https://tailwindcss.com/"
                  className="font-medium text-slate-400 hover:text-cyan-300 focus-visible:text-cyan-300 transition-colors duration-300"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Tailwind CSS
                </motion.a>
                , and{" "}
                <motion.a
                  href="https://www.framer.com/motion/"
                  className="font-medium text-slate-400 hover:text-cyan-300 focus-visible:text-cyan-300 transition-colors duration-300"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Framer Motion
                </motion.a>
                . Fueled by ☕ and endless curiosity.
              </p>
            </motion.footer>
          </div>
        </motion.main>
      </div>
    </div>
  )
}

export default App
