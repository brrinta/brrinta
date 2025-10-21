import {motion} from 'motion/react';
import {BarChart3, Boxes, Cloud, Code2, CreditCard, Database, Phone, Server} from 'lucide-react';

const skills = [
	{
		icon: Code2,
		title: 'Frontend Development',
		description: 'React, Vue, TanStack Query/Router/Start, React Native, Quasar, TailwindCSS',
	},
	{
		icon: Server,
		title: 'Backend Development',
		description: 'NestJS, Node.js, Laravel, Codeigniter, REST APIs, Microservices Architecture',
	},
	{
		icon: Database,
		title: 'Databases',
		description: 'MongoDB, MySQL, PostgreSQL, Prisma, Database Design, Query Optimization',
	},
	{
		icon: Cloud,
		title: 'DevOps & Cloud',
		description: 'Docker, Portainer, AWS, GCP, Traefik, Nx Monorepos',
	},
	{
		icon: CreditCard,
		title: 'Payment Integrations',
		description: 'Stripe, Authorize.net, PayPal, Clover, Square, 2Checkout, Stax, Worldpay',
	},
	{
		icon: Phone,
		title: 'Integrations & APIs',
		description: 'Twilio, VitalPBX, Google Analytics, Matomo Analytics, Clerk Auth, Third-Party APIs',
	},
	{
		icon: Boxes,
		title: 'System Architecture',
		description: 'Monorepo, Multi-tenant SaaS, MVC, Modular Design, Scalability, RBAC Security',
	},
	{
		icon: BarChart3,
		title: 'Analytics & Monitoring',
		description: 'Google Analytics, Matomo (Piwik), Real-time Dashboards, Performance Metrics',
	},
];

export function Skills() {
	return (
		<section className="py-24 bg-white">
			<div className="container mx-auto px-6">
				<motion.div
					initial={{opacity: 0, y: 20}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true}}
					transition={{duration: 0.6}}
					className="text-center mb-16"
				>
					<h2 className="mb-4">Skills & Expertise</h2>
					<p className="text-slate-600 max-w-2xl mx-auto">
						A comprehensive toolkit built over years of learning, building, and shipping products.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
					{skills.map((skill, index) => {
						const Icon = skill.icon;
						return (
							<motion.div
								key={index}
								initial={{opacity: 0, y: 20}}
								whileInView={{opacity: 1, y: 0}}
								viewport={{once: true}}
								transition={{duration: 0.6, delay: index * 0.1}}
								className="p-6 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
							>
								<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
									<Icon className="h-6 w-6 text-white"/>
								</div>
								<h3 className="mb-2">{skill.title}</h3>
								<p className="text-slate-600">{skill.description}</p>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
