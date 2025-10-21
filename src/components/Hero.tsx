import {motion} from 'motion/react';
import {ArrowDown, Github, Linkedin, Mail, Twitter} from 'lucide-react';
import {Button} from './ui/button';

export function Hero() {
	const scrollToProjects = () => {
		document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'});
	};

	return (
		<section
			className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
			{/* Animated background pattern */}
			<div className="absolute inset-0 opacity-20">
				<div className="absolute inset-0" style={{
					backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
					backgroundSize: '48px 48px'
				}}/>
			</div>

			<div className="container mx-auto px-6 relative z-10">
				<div className="max-w-4xl mx-auto text-center">
					<img
						loading={'lazy'}
						src={'/me.webp'}
						alt={'S M Ashik Ul Huq Brrinta'}
						className="w-40 h-40 rounded-full mx-auto mb-4"
					/>
					<motion.div
						initial={{opacity: 0, y: 20}}
						animate={{opacity: 1, y: 0}}
						transition={{duration: 0.6}}
					>
						<h1 className="text-white mb-6">
							Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">S M Ashik Ul Huq Brrinta</span>
						</h1>
					</motion.div>

					<motion.div
						initial={{opacity: 0, y: 20}}
						animate={{opacity: 1, y: 0}}
						transition={{duration: 0.6, delay: 0.2}}
						className="text-slate-300 mb-4 max-w-2xl mx-auto space-y-2"
					>
						<p className="text-slate-200">Full-Stack Developer | System Architect | DevOps Enthusiast</p>
						<p>Node.js (NestJS) | React | Vue | MongoDB | Docker | AWS | GCP</p>
						<p>Automation and Workflow Platform Specialist</p>
					</motion.div>

					<motion.p
						initial={{opacity: 0, y: 20}}
						animate={{opacity: 1, y: 0}}
						transition={{duration: 0.6, delay: 0.3}}
						className="text-slate-300 mb-8 max-w-2xl mx-auto"
					>
						Passionate about building automation-driven platforms that simplify complex business and operational workflows.
					</motion.p>

					<motion.div
						initial={{opacity: 0, y: 20}}
						animate={{opacity: 1, y: 0}}
						transition={{duration: 0.6, delay: 0.4}}
						className="flex items-center justify-center gap-4 mb-12"
					>
						<Button
							variant="outline"
							size="icon"
							className="rounded-full bg-white/10 border-white/20 hover:bg-white/20 text-white"
							asChild
						>
							<a href="https://github.com/brrinta" target="_blank" rel="noopener noreferrer">
								<Github className="h-5 w-5"/>
							</a>
						</Button>
						<Button
							variant="outline"
							size="icon"
							className="rounded-full bg-white/10 border-white/20 hover:bg-white/20 text-white"
							asChild
						>
							<a href="https://linkedin.com/in/brrinta" target="_blank" rel="noopener noreferrer">
								<Linkedin className="h-5 w-5"/>
							</a>
						</Button>
						<Button
							variant="outline"
							size="icon"
							className="rounded-full bg-white/10 border-white/20 hover:bg-white/20 text-white"
							asChild
						>
							<a href="https://x.com/brrinta" target="_blank" rel="noopener noreferrer">
								<Twitter className="h-5 w-5"/>
							</a>
						</Button>
						<Button
							variant="outline"
							size="icon"
							className="rounded-full bg-white/10 border-white/20 hover:bg-white/20 text-white"
							asChild
						>
							<a href="mailto:brrinta@gmail.com">
								<Mail className="h-5 w-5"/>
							</a>
						</Button>
					</motion.div>

					<motion.div
						initial={{opacity: 0, y: 20}}
						animate={{opacity: 1, y: 0}}
						transition={{duration: 0.6, delay: 0.6}}
					>
						<Button
							onClick={scrollToProjects}
							className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full px-8"
						>
							View My Work
							<ArrowDown className="ml-2 h-4 w-4"/>
						</Button>
					</motion.div>
				</div>
			</div>

			{/* Scroll indicator */}
			<motion.div
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				transition={{duration: 1, delay: 1}}
				className="absolute bottom-8 left-1/2 -translate-x-1/2"
			>
				<motion.div
					animate={{y: [0, 10, 0]}}
					transition={{duration: 1.5, repeat: Infinity}}
				>
					<ArrowDown className="h-6 w-6 text-white/50"/>
				</motion.div>
			</motion.div>
		</section>
	);
}
