import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-4 max-w-4xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <p className="text-primary font-mono mb-4">What's Next?</p>
                <h2 className="text-4xl md:text-5xl font-bold text-light-100 mb-6">
                    Get In Touch
                </h2>
                <p className="text-light-400 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="flex justify-center gap-8 mb-12">
                    <a
                        href="mailto:anirudh.s011104@gmail.com"
                        className="text-light-400 hover:text-primary transition-colors flex flex-col items-center gap-2 group"
                    >
                        <div className="p-4 rounded-full glass group-hover:bg-dark-800 transition-colors">
                            <Mail size={24} />
                        </div>
                        <span className="text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-8">Email</span>
                    </a>
                    <a
                        href="https://linkedin.com/in/anirudh-s"
                        className="text-light-400 hover:text-primary transition-colors flex flex-col items-center gap-2 group"
                    >
                        <div className="p-4 rounded-full glass group-hover:bg-dark-800 transition-colors">
                            <Linkedin size={24} />
                        </div>
                        <span className="text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-8">LinkedIn</span>
                    </a>
                    <a
                        href="https://github.com/Ani011104"
                        className="text-light-400 hover:text-primary transition-colors flex flex-col items-center gap-2 group"
                    >
                        <div className="p-4 rounded-full glass group-hover:bg-dark-800 transition-colors">
                            <Github size={24} />
                        </div>
                        <span className="text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-8">GitHub</span>
                    </a>
                    <a
                        href="tel:+917349771668"
                        className="text-light-400 hover:text-primary transition-colors flex flex-col items-center gap-2 group"
                    >
                        <div className="p-4 rounded-full glass group-hover:bg-dark-800 transition-colors">
                            <Phone size={24} />
                        </div>
                        <span className="text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-8">Phone</span>
                    </a>
                </div>

                <a
                    href="mailto:anirudh.s011104@gmail.com"
                    className="inline-block px-8 py-4 border border-primary text-primary rounded hover:bg-primary/10 transition-colors font-mono text-lg mt-4"
                >
                    Say Hello
                </a>
            </motion.div>

            <footer className="mt-32 text-light-400 font-mono text-xs">
                <p>Designed & Built by Anirudh S</p>
            </footer>
        </section>
    );
};

export default Contact;
