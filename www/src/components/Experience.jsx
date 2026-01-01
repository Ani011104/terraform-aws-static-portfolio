import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const experiences = [
    {
        role: 'Freelance Backend Engineer',
        company: 'Khaleezi',
        period: 'Jan 2025 - Present',
        description: 'Built and deployed a Node.js backend for an e-commerce platform using Docker on DigitalOcean with automated CI/CD pipelines. Improved deployment reliability and reduced manual release effort by 60% while supporting core e-commerce APIs.',
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-4 relative">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Professional <span className="text-primary">Journey</span>
                    </h2>
                </motion.div>

                <div className="relative space-y-12 pl-8 md:pl-0">
                    {/* Timeline Connector Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 -translate-x-1/2 hidden md:block"></div>
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 md:hidden"></div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[-33px] md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-dark-900 shadow-[0_0_10px_rgba(250,204,21,0.5)] -translate-x-1/2 z-10"></div>

                            <div className="flex-1"></div>

                            <div className="flex-1">
                                <div className="p-6 rounded-xl bg-dark-800/40 border border-light-100/10 backdrop-blur-sm hover:border-primary/30 transition-colors group">
                                    <div className="flex items-center gap-2 text-primary mb-2 text-sm font-medium uppercase tracking-wider">
                                        <FaCalendarAlt />
                                        <span>{exp.period}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-light-100 mb-1 group-hover:text-primary transition-colors">{exp.role}</h3>
                                    <div className="flex items-center gap-2 text-light-400 mb-4 text-sm">
                                        <FaBriefcase />
                                        <span>{exp.company}</span>
                                    </div>
                                    <p className="text-light-400 leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
