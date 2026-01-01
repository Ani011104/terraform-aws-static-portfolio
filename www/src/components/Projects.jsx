import { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { SiPython, SiFastapi, SiMongodb, SiJenkins, SiDocker, SiReact, SiNodedotjs, SiDigitalocean } from 'react-icons/si';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
    {
        title: 'Task Manager Backend',
        description: 'Built a containerized FastAPI backend with MongoDB and automated CI using Jenkins. Enabled 100% test execution on every commit and standardized Docker-based deployments.',
        tech: [SiFastapi, SiMongodb, SiJenkins, SiDocker],
        github: '#',
        live: '#',
        color: '#009688' // FastAPI Teal
    },
    {
        title: 'URL Shortener Backend',
        description: 'Developed a secure URL shortener with JWT authentication and Dockerized deployment. Automated builds and testing via CI, reducing manual deployment effort by 60%.',
        tech: [SiNodedotjs, SiDocker, SiDigitalocean], // Assuming Node/Express based on "Backend" skill
        github: '#',
        live: '#',
        color: '#339933' // Node Green
    },
    {
        title: 'AI Email & Calendar Agent',
        description: 'Implemented a multi-agent system to send emails and manage calendar events via text/voice. Separated agents by responsibility, improving execution reliability and task accuracy.',
        tech: [SiPython], // Assuming Python for AI
        github: '#',
        live: '#',
        color: '#3776AB' // Python Blue
    },
];

const ROTATION_RANGE = 20; // Degrees
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const TiltCard = ({ project }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const MainIcon = project.tech[0];

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
            }}
            className="relative h-96 w-full rounded-xl bg-dark-800/40 border border-light-100/10 backdrop-blur-md p-8 flex flex-col justify-between group"
        >
            {/* Holographic Glow Overlay */}
            <div
                style={{
                    transform: "translateZ(50px)",
                }}
                className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            />

            <div style={{ transform: "translateZ(75px)" }}>
                <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-lg bg-dark-900/50 border border-light-100/10">
                        <MainIcon className="text-3xl" style={{ color: project.color }} />
                    </div>
                    <div className="flex gap-3">
                        <a href={project.github} className="text-light-400 hover:text-white transition-colors"><FaGithub size={20} /></a>
                        <a href={project.live} className="text-light-400 hover:text-white transition-colors"><FaExternalLinkAlt size={18} /></a>
                    </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-light-100 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-light-400 leading-relaxed text-sm">{project.description}</p>
            </div>

            <div style={{ transform: "translateZ(50px)" }}>
                <div className="flex flex-wrap gap-3 mt-6">
                    {project.tech.map((Icon, i) => (
                        <div key={i} className="p-2 rounded-md bg-dark-900/50 border border-light-100/5 text-light-400">
                            <Icon size={16} />
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                    <p className="text-light-400 max-w-2xl mx-auto">
                        A showcase of my journey in building scalable infrastructure and applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
                    {projects.map((project, index) => (
                        <TiltCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
