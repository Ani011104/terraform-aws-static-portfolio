import { motion } from 'framer-motion';
import { SiTerraform, SiDocker, SiKubernetes, SiJenkins, SiGithub, SiPrometheus, SiGrafana } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const Hero = () => {
    const tools = [
        { Icon: SiGithub, color: '#FFFFFF', delay: 0 },
        { Icon: SiJenkins, color: '#D24939', delay: 1 },
        { Icon: SiDocker, color: '#2496ED', delay: 2 },
        { Icon: SiKubernetes, color: '#326CE5', delay: 3 },
        { Icon: FaAws, color: '#FF9900', delay: 4 },
        { Icon: SiTerraform, color: '#7B42BC', delay: 5 },
        { Icon: SiPrometheus, color: '#E6522C', delay: 6 },
        { Icon: SiGrafana, color: '#F46800', delay: 7 },
    ];

    // Perfect DevOps Infinity Loop Path
    const perfectPath = "M200,150 C200,50 350,50 400,150 C450,250 600,250 600,150 C600,50 450,50 400,150 C350,250 200,250 200,150";

    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4 pt-20">
            <div className="z-10 text-center max-w-4xl mx-auto mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-primary font-medium mb-4 tracking-wide">HELLO, I'M</h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-light-100 mb-6 tracking-tight">
                        Anirudh S.
                    </h1>
                    <h2 className="text-3xl md:text-5xl font-bold text-light-400 mb-8">
                        Building Scalable Systems.
                    </h2>
                    <p className="text-light-400 max-w-xl mx-auto text-lg leading-relaxed">
                        DevOps, Cloud, and Backend engineer specializing in automated infrastructure and containerized deployments.
                    </p>
                </motion.div>
            </div>

            {/* Infinity Loop Animation */}
            <div className="relative w-full max-w-3xl h-64 md:h-80">
                <svg className="w-full h-full" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Glow Effect Path - Thicker */}
                    <path
                        d={perfectPath}
                        stroke="#FACC15"
                        strokeWidth="24"
                        strokeLinecap="round"
                        fill="none"
                        className="opacity-20 blur-lg"
                    />

                    {/* Main Track - Thicker */}
                    <path
                        d={perfectPath}
                        stroke="#2A2A2A"
                        strokeWidth="12"
                        strokeLinecap="round"
                        fill="none"
                    />

                    {/* Multiple Data Packets - Thicker */}
                    {[0, 1, 2].map((i) => (
                        <path
                            key={i}
                            d={perfectPath}
                            stroke="#FACC15"
                            strokeWidth="8"
                            strokeDasharray="10 40"
                            strokeLinecap="round"
                            fill="none"
                            className="opacity-90 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]"
                        >
                            <animate
                                attributeName="stroke-dashoffset"
                                from="1000"
                                to="0"
                                dur={`${4 + i}s`}
                                repeatCount="indefinite"
                            />
                        </path>
                    ))}
                </svg>

                {/* Orbiting Icons with Reaction */}
                {tools.map((tool, index) => (
                    <motion.div
                        key={index}
                        className="absolute top-0 left-0"
                        animate={{
                            offsetDistance: ["0%", "100%"],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                            delay: -index * (8 / tools.length),
                        }}
                        style={{
                            offsetPath: `path("${perfectPath}")`,
                        }}
                    >
                        <motion.div
                            className="p-3 bg-dark-800 rounded-full border border-dark-700 shadow-xl transform -translate-x-1/2 -translate-y-1/2 z-10"
                            animate={{
                                scale: [1, 1.2, 1],
                                boxShadow: [
                                    "0 0 0px rgba(0,0,0,0)",
                                    `0 0 20px ${tool.color}40`,
                                    "0 0 0px rgba(0,0,0,0)"
                                ]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.5 // Staggered pulse
                            }}
                        >
                            <tool.Icon size={24} color={tool.color} />
                        </motion.div>
                    </motion.div>
                ))}

                {/* Labels */}
                <div className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                    <span className="text-xs font-bold text-light-400 uppercase tracking-widest bg-dark-900/80 px-3 py-1 rounded border border-dark-700 backdrop-blur-sm">Dev</span>
                </div>
                <div className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                    <span className="text-xs font-bold text-light-400 uppercase tracking-widest bg-dark-900/80 px-3 py-1 rounded border border-dark-700 backdrop-blur-sm">Ops</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
