import {motion} from 'motion/react';
import {Github, Linkedin, Mail, Twitter} from 'lucide-react';
import {Button} from './ui/button';

const socialLinks = [
	{
		icon: Github,
		label: 'GitHub',
		href: 'https://github.com/brrinta',
		color: 'hover:text-gray-900'
	},
	{
		icon: Mail,
		label: 'Personal Email',
		href: 'mailto:brrinta@gmail.com',
		color: 'hover:text-blue-600'
	},
	{
		icon: Mail,
		label: 'Work Email',
		href: 'mailto:brrinta@champteks.com',
		color: 'hover:text-purple-600'
	},
	{
		icon: Linkedin,
		label: 'LinkedIn',
		href: 'https://linkedin.com/in/brrinta',
		color: 'hover:text-blue-700'
	},
	{
		icon: Twitter,
		label: 'X (Twitter)',
		href: 'https://x.com/brrinta',
		color: 'hover:text-sky-500'
	},
];

export function Contact() {
	return (
		<section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
			<div className="container mx-auto px-6">
				<motion.div
					initial={{opacity: 0, y: 20}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true}}
					transition={{duration: 0.6}}
					className="text-center max-w-3xl mx-auto"
				>
					<h2 className="mb-4 text-3xl font-semibold">Let's Connect</h2>
					<p className="text-slate-300 mb-4">
						I'm looking to collaborate on SaaS admin dashboards, FinTech & payment gateway integrations, and healthcare compliance software solutions.
					</p>
					<p className="text-slate-300 mb-12">
						Whether you have a project idea or just want to connect, feel free to reach out!
					</p>

					<div className="flex flex-wrap items-center justify-center gap-4 mb-12">
						{socialLinks.map((link, index) => {
							const Icon = link.icon;
							return (
								<motion.div
									key={index}
									initial={{opacity: 0, y: 20}}
									whileInView={{opacity: 1, y: 0}}
									viewport={{once: true}}
									transition={{duration: 0.6, delay: index * 0.1}}
								>
									<Button
										variant="outline"
										className="bg-white/10 border-white/20 hover:bg-white/20 text-white group"
										asChild
									>
										<a href={link.href} target="_blank" rel="noopener noreferrer">
											<Icon className="mr-2 h-4 w-4"/>
											{link.label}
										</a>
									</Button>
								</motion.div>
							);
						})}
					</div>

					<motion.div
						initial={{opacity: 0}}
						whileInView={{opacity: 1}}
						viewport={{once: true}}
						transition={{duration: 0.6, delay: 0.4}}
					>
						<Button
							size="lg"
							className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full px-8"
							asChild
						>
							<a href="mailto:brrinta@gmail.com">
								Get In Touch
							</a>
						</Button>
					</motion.div>
				</motion.div>
			</div>

			<motion.div
				initial={{opacity: 0}}
				whileInView={{opacity: 1}}
				viewport={{once: true}}
				transition={{duration: 0.6, delay: 0.6}}
				className="text-center mt-24 text-slate-400"
			>
				<p>© 2025 S M Ashik Ul Huq Brrinta (@brrinta).</p>
				<p className="mt-2">Combining automation, analytics, and design thinking — turning complex processes into elegant, maintainable systems.</p>
			</motion.div>
		</section>
	);
}
