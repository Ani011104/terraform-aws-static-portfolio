import { motion } from 'framer-motion';
import {
    SiPython, SiGo, SiJavascript, SiCplusplus, SiNodedotjs, SiFastapi,
    SiDocker, SiJenkins, SiTerraform, SiDigitalocean, SiGit, SiLinux, SiPostman
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const skills = [
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'Go', icon: SiGo, color: '#00ADD8' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'C', icon: SiCplusplus, color: '#00599C' }, // Using C++ icon for C/C++ group
    { name: 'C++', icon: SiCplusplus, color: '#00599C' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
    { name: 'Terraform', icon: SiTerraform, color: '#7B42BC' },
    { name: 'DigitalOcean', icon: SiDigitalocean, color: '#0080FF' },
    { name: 'AWS', icon: FaAws, color: '#FF9900' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'Linux', icon: SiLinux, color: '#FCC624' },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
];

// Split skills into two rows for the marquee
const row1 = skills.slice(0, Math.ceil(skills.length / 2));
const row2 = skills.slice(Math.ceil(skills.length / 2));

const SkillPill = ({ skill }) => (
    <div className="flex items-center gap-3 px-6 py-3 mx-4 bg-dark-800/40 backdrop-blur-md border border-light-100/10 rounded-full hover:border-primary/50 hover:bg-dark-800/80 transition-all duration-300 group cursor-default min-w-max">
        <skill.icon className="text-2xl group-hover:scale-110 transition-transform duration-300" style={{ color: skill.color }} />
        <span className="text-light-300 font-medium tracking-wide group-hover:text-white transition-colors">{skill.name}</span>
    </div>
);

const MarqueeRow = ({ items, direction = 'left', speed = 20 }) => {
    return (
        <div className="flex overflow-hidden py-4 relative">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-dark-900 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-dark-900 to-transparent z-10"></div>

            <motion.div
                className="flex"
                initial={{ x: direction === 'left' ? 0 : '-50%' }}
                animate={{ x: direction === 'left' ? '-50%' : 0 }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {[...items, ...items, ...items, ...items].map((skill, index) => (
                    <SkillPill key={`${skill.name}-${index}`} skill={skill} />
                ))}
            </motion.div>
        </div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-4 mb-12 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-4"
                >
                    Technical <span className="text-primary">Arsenal</span>
                </motion.h2>
                <p className="text-light-400 max-w-2xl mx-auto">
                    A curated stack of tools and technologies I use to build robust, scalable solutions.
                </p>
            </div>

            <div className="space-y-8">
                <MarqueeRow items={row1} direction="left" speed={30} />
                <MarqueeRow items={row2} direction="right" speed={35} />
            </div>
        </section>
    );
};

export default Skills;
