import { useEffect, useRef, useState } from 'react';

const CodeBackground = () => {
    const [lines, setLines] = useState([]);

    useEffect(() => {
        // Generate "Resume as Code" content
        const codeContent = [
            '// Anirudh S - DevOps & Backend Engineer',
            '// Portfolio Configuration',
            '',
            'provider "aws" {',
            '  region = "ap-south-1"',
            '}',
            '',
            'resource "experience" "khaleezi" {',
            '  role     = "Freelance Backend Engineer"',
            '  period   = "Jan 2025 - Present"',
            '  stack    = ["Node.js", "Docker", "DigitalOcean"]',
            '  impact   = "Reduced manual release effort by 60%"',
            '}',
            '',
            'resource "project" "task_manager" {',
            '  name     = "Cloud-Native Task Manager"',
            '  tech     = ["FastAPI", "MongoDB", "Jenkins", "K8s"]',
            '  features = ["Containerized", "Automated CI/CD"]',
            '}',
            '',
            'resource "project" "url_shortener" {',
            '  name     = "URL Shortener Backend"',
            '  tech     = ["Node.js", "JWT", "Docker"]',
            '  features = ["Secure Auth", "High Performance"]',
            '}',
            '',
            'resource "project" "ai_agent" {',
            '  name     = "AI Email & Calendar Agent"',
            '  tech     = ["Python", "Multi-Agent System"]',
            '  features = ["Voice Control", "Task Automation"]',
            '}',
            '',
            'variable "skills" {',
            '  type    = list(string)',
            '  default = [',
            '    "Python", "Go", "JavaScript", "C++",',
            '    "Terraform", "Docker", "Kubernetes",',
            '    "AWS", "Jenkins", "Git", "Linux"',
            '  ]',
            '}',
            '',
            'output "contact" {',
            '  value = "anirudh.s011104@gmail.com"',
            '}',
            '',
            '// End of Configuration',
        ];

        // Repeat content to fill screen if needed, or just keep it clean
        // For a full "wall of code" feel, we can duplicate it
        setLines([...codeContent, ...codeContent, ...codeContent]);
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] bg-[#050505] overflow-hidden pointer-events-none font-mono text-sm leading-6">
            {/* Code Container - Hidden by default, revealed by mask */}
            <div
                className="absolute inset-0 p-8"
                style={{
                    maskImage: 'radial-gradient(circle 400px at var(--mouse-x, 50%) var(--mouse-y, 50%), black 0%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(circle 400px at var(--mouse-x, 50%) var(--mouse-y, 50%), black 0%, transparent 100%)',
                }}
            >
                {lines.map((line, i) => (
                    <div key={i} className="flex">
                        {/* Line Number */}
                        <span className="w-12 text-gray-700 text-right mr-6 select-none">{i + 1}</span>

                        {/* Syntax Highlighting Logic (Simple) */}
                        <span className="whitespace-pre font-medium">
                            {line.startsWith('//') ? (
                                <span className="text-gray-500 italic">{line}</span>
                            ) : (
                                line.split(/(".*?"|[\{\}\[\]=])/g).map((part, j) => {
                                    if (part.startsWith('"')) return <span key={j} className="text-[#ce9178]">{part}</span>; // String (Orange)
                                    if (['resource', 'provider', 'variable', 'output', 'module'].includes(part.trim())) return <span key={j} className="text-[#569cd6]">{part}</span>; // Keyword (Blue)
                                    if (['{', '}', '[', ']', '='].includes(part)) return <span key={j} className="text-[#d4d4d4]">{part}</span>; // Punctuation
                                    return <span key={j} className="text-[#9cdcfe]">{part}</span>; // Default/Property (Light Blue)
                                })
                            )}
                        </span>
                    </div>
                ))}
            </div>

            {/* Subtle Grid Overlay for "Editor" feel */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
        </div>
    );
};

export default CodeBackground;
