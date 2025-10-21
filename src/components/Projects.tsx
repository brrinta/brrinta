import {motion} from 'motion/react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from './ui/card';
import {Badge} from './ui/badge';
import {ImageWithFallback} from './figma/ImageWithFallback';
import {Button} from "./ui/button";
import {ExternalLink} from "lucide-react";

const projects = [
	{
		title: 'Compliance Business Suite',
		description: 'Full-stack business compliance and registration automation platform managing 24+ semi-dynamic websites. Handles filings, renewals, and document workflows across multiple U.S. states with 9 payment gateway integrations.',
		image: '/bcs.webp',
		tags: ['React', 'NestJS', 'MongoDB', 'Docker', 'AWS', 'Nx', 'Clerk'],
		github: 'https://github.com/brrinta',
		demo: 'mailto:brrinta@gmail.com',
		highlights: ['24+ Websites', 'Multi-State Compliance', '9 Payment Gateways']
	},
	{
		title: 'MedAdmin Suite',
		description: 'Medical administration and EMR solution for healthcare facilities. Features appointment scheduling, billing, EMR, insurance workflows with RBAC, data compliance, and audit-ready security.',
		image: '/med.webp',
		tags: ['React', 'NestJS', 'MongoDB', 'Docker', 'AWS', 'Clerk'],
		github: 'https://github.com/brrinta',
		demo: 'mailto:brrinta@gmail.com',
		highlights: ['EMR System', 'RBAC Security', 'HIPAA Compliance']
	},
	{
		title: 'Carwash Suite',
		description: 'Complete on-demand service and automation platform combining Carwash Platform and Admin Console. Features live bookings, route scheduling, CRM, real-time tracking, analytics dashboards, and Twilio notifications.',
		image: '/car.webp',
		tags: ['React', 'Vue', 'NestJS', 'MongoDB', 'Docker', 'AWS', 'GCP', 'Twilio'],
		github: 'https://github.com/brrinta',
		demo: 'mailto:brrinta@gmail.com',
		highlights: ['Real-Time Tracking', 'Multi-Tenant', 'Analytics Dashboard']
	}
];

export function Projects() {
	return (
		<section id="projects" className="py-24 bg-slate-50">
			<div className="container mx-auto px-6">
				<motion.div
					initial={{opacity: 0, y: 20}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true}}
					transition={{duration: 0.6}}
					className="text-center mb-16"
				>
					<h2 className="mb-4 text-3xl font-semibold">Portfolio Projects</h2>
					<p className="text-slate-600 max-w-2xl mx-auto">
						Leading development on enterprise-grade automation platforms, focusing on scalability, analytics, and modular architecture.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{opacity: 0, y: 20}}
							whileInView={{opacity: 1, y: 0}}
							viewport={{once: true}}
							transition={{duration: 0.6, delay: index * 0.1}}
						>
							<Card className="overflow-hidden h-full flex flex-col shadow-xl transition-shadow border-none">
								<div className="relative h-80 overflow-hidden bg-slate-200">
									<ImageWithFallback
										src={project.image}
										alt={project.title}
										className="w-full h-full object-cover bg-center"
									/>
								</div>
								<CardHeader>
									<CardTitle>{project.title}</CardTitle>
									<CardDescription>{project.description}</CardDescription>
								</CardHeader>
								<CardContent className="flex-grow flex flex-col justify-between">
									<div className="flex flex-wrap gap-2 mb-4">
										{project.tags.map((tag, tagIndex) => (
											<Badge key={tagIndex} variant="secondary" className={'drop-shadow shadow'}>
												{tag}
											</Badge>
										))}
									</div>
									<Button size="sm"
									        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full px-8"
									        asChild>
										<a href={project.demo} target="_blank" rel="noopener noreferrer">
											<ExternalLink className="mr-2 h-4 w-4"/>
											Contact Me for Demo
										</a>
									</Button>
									{/*<div className="flex gap-2">*/}
									{/*  <Button variant="outline" size="sm" className="flex-1" asChild>*/}
									{/*    <a href={project.github} target="_blank" rel="noopener noreferrer">*/}
									{/*      <Github className="mr-2 h-4 w-4" />*/}
									{/*      Code*/}
									{/*    </a>*/}
									{/*  </Button>*/}
									{/*  <Button size="sm" className="flex-1" asChild>*/}
									{/*    <a href={project.demo} target="_blank" rel="noopener noreferrer">*/}
									{/*      <ExternalLink className="mr-2 h-4 w-4" />*/}
									{/*      Demo*/}
									{/*    </a>*/}
									{/*  </Button>*/}
									{/*</div>*/}
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
