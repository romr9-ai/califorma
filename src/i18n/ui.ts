export const languages = {
	es: "Español",
	en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "es";

export const ui = {
	es: {
		meta: {
			lang: "es",
			locale: "es_MX",
		},
		anchors: {
			home: "inicio",
			services: "servicios",
			about: "nosotros",
			machinery: "maquinaria",
			projects: "proyectos",
			contact: "contacto",
		},
		header: {
			brand: "Califorma",
			nav: {
				home: "Inicio",
				services: "Servicios",
				about: "Nosotros",
				machinery: "Maquinaria",
				projects: "Proyectos",
				contact: "Contacto",
			},
			cta: "Cotizar",
			switchLabel: "EN",
			switchHref: "/en/",
			mobileToggleOpen: "Abrir menu",
			mobileToggleClose: "Cerrar menu",
		},
		hero: {
			eyebrow: "MAQUINADO CNC PARA INDUSTRIA",
			title: "Maquinado CNC de alta precision en Mexicali",
			description:
				"Fabricamos piezas industriales con calidad garantizada, entrega rapida y tecnologia de ultima generacion para proyectos que requieren precision y confiabilidad.",
			primaryCta: "Cotizar proyecto",
			secondaryCta: "Ver servicios",
			capacityLabel: "Capacidad industrial",
			capacityTitle:
				"Manufactura de precision para clientes que priorizan cumplimiento tecnico y continuidad.",
			capacityDescription:
				"Atendemos requerimientos de fabricacion con enfoque en tolerancias, trazabilidad y tiempos de respuesta competitivos para industria.",
			operationLabel: "Operacion",
			operationValue: "CNC + WEDM",
			scopeLabel: "Cobertura",
			scopeValue: "Maquinado, herramentales y diseno",
			highlights: [
				"Entrega rapida",
				"Calidad garantizada",
				"Atencion para proyectos industriales",
			],
		},
		trustBanner: {
			label: "Sectores industriales que confían en nuestra precisión",
			items: ["Automotriz", "Aeroespacial", "Médico", "Agroindustria", "Electrónica"],
		},
		services: {
			eyebrow: "Servicios",
			title: "Soluciones de maquinado y fabricacion para requerimientos industriales.",
			description:
				"Integramos procesos de manufactura y diseno para desarrollar piezas, componentes y herramentales con estandares industriales.",
			itemLabel: "Servicio",
			items: [
				{
					title: "Fresado CNC",
					description:
						"Mecanizado de piezas con geometria compleja, tolerancias controladas y acabado consistente.",
				},
				{
					title: "Torneado CNC",
					description:
						"Fabricacion de ejes, bujes y componentes cilindricos con alta repetibilidad dimensional.",
				},
				{
					title: "Soldadura industrial",
					description:
						"Union y fabricacion de ensambles metalicos para aplicaciones estructurales e industriales.",
				},
				{
					title: "WEDM",
					description:
						"Corte por electroerosion de hilo para perfiles precisos y materiales de alta dureza.",
				},
				{
					title: "Diseno mecanico",
					description:
						"Desarrollo de soluciones funcionales para manufactura, ensamble y mejora de componentes.",
				},
				{
					title: "Diseno de troqueles",
					description:
						"Diseno orientado a procesos de estampado con enfoque en durabilidad y productividad.",
				},
				{
					title: "Diseno de rodillos de formado",
					description:
						"Configuracion de rodillos para procesos de formado continuo con precision de perfil.",
				},
			],
		},
		about: {
			eyebrow: "Nosotros",
			title: "Sobre Califorma",
			sideTitle: "Manufactura especializada",
			sideDescription:
				"Capacidad tecnica orientada a proyectos industriales que requieren precision y consistencia.",
			paragraphs: [
				"En Califorma nos especializamos en maquinado CNC con los mas altos estandares de calidad.",
				"Nuestro compromiso es entregar piezas precisas, confiables y adaptadas a las necesidades de cada cliente.",
				"Trabajamos con tecnologia de vanguardia y un equipo capacitado para asegurar resultados consistentes en cada proyecto.",
			],
			metrics: [
				{ label: "Relacion comercial", value: "Atencion B2B" },
				{ label: "Operacion", value: "Respuesta rapida" },
				{ label: "Compromiso", value: "Calidad y cumplimiento" },
			],
		},
		machinery: {
			eyebrow: "Maquinaria",
			title: "Capacidad instalada",
			description:
				"Contamos con equipo de vanguardia para garantizar precision y tiempos de entrega competitivos en cada proyecto.",
			items: [
				{
					name: "Centro de Maquinado HAAS VF0E",
					type: "Mecanizado vertical",
					image: "/assets/maquinaria/haas-vf0e.jpg",
					imagePosition: "object-[46%_42%]",
					imageClass: "object-cover scale-100",
					imageContainerClass: "",
					highlighted: true,
					specs: [{ label: "Dimensiones (XYZ)", value: '30" x 16" x 20"' }],
					description:
						"Centro de maquinado versatil para piezas de precision con tolerancias exigentes.",
				},
				{
					name: "Torno CNC HARDINGE SV200",
					type: "Torneado CNC",
					image: "/assets/maquinaria/hardinge-sv200.jpg",
					imagePosition: "object-center",
					imageClass: "object-cover scale-110 md:group-hover:scale-100",
					imageContainerClass: "",
					highlighted: false,
					specs: [
						{ label: "Volteo", value: '10"' },
						{ label: "Largo", value: '14"' },
					],
					description:
						"Torno CNC ideal para operaciones de alta precision y repetibilidad en piezas cilindricas.",
				},
				{
					name: "Torno CNC HAAS SL30",
					type: "Torneado CNC",
					image: "/assets/maquinaria/haas-sl30.jpg",
					imagePosition: "object-center",
					imageClass: "object-cover scale-110 md:group-hover:scale-100",
					imageContainerClass: "",
					highlighted: false,
					specs: [
						{ label: "Volteo", value: '17"' },
						{ label: "Largo", value: '34"' },
					],
					description:
						"Capacidad robusta para piezas de mayor longitud y demandas continuas de produccion.",
				},
				{
					name: "Electroerosionadora de hilo CHMER G32S",
					type: "WEDM",
					image: "/assets/maquinaria/chmer-g32s.jpg",
					imagePosition: "object-center",
					imageClass: "object-cover scale-110 md:group-hover:scale-100",
					imageContainerClass: "",
					highlighted: false,
					specs: [{ label: "Dimensiones (XYZ)", value: '14" x 9.8" x 8.6"' }],
					description:
						"Corte por hilo para perfiles complejos y materiales de alta dureza con acabados de alta precision.",
				},
			],
		},
		projects: {
			eyebrow: "Proyectos",
			title: "Proyectos",
			description: "Ejemplos de trabajo para distintas aplicaciones industriales.",
			itemLabel: "Proyecto",
			items: [
				{
					id: "01",
					title: "Dado progresivo #1",
					category: "Herramental",
					description:
						"Herramental desarrollado para operaciones repetitivas con enfoque en precision y continuidad.",
					video: "/assets/proyectos/pieza-varias.mp4",
					poster: "/assets/proyectos/dado-progresivo-1-poster.png",
				},
				{
					id: "02",
					title: "Rodillos para formado de tubo",
					category: "Formado industrial",
					description:
						"Componentes disenados para procesos de formado con control dimensional y desempeno continuo.",
					image: "/assets/proyectos/rodillos-formado.jpg",
				},
				{
					id: "03",
					title: "Piezas varias",
					category: "Manufactura",
					description:
						"Manufactura de componentes especiales para diferentes requerimientos de produccion industrial.",
					image: "/assets/proyectos/piezas-varias.jpeg",
				},
				{
					id: "04",
					title: "Flechas",
					category: "Torneado CNC",
					description:
						"Mecanizado de flechas y elementos rotativos para equipos y sistemas industriales.",
					image: "/assets/proyectos/flechas.jpg",
				},
				{
					id: "05",
					title: "Dado progresivo #2",
					category: "Estampado",
					description:
						"Solucion de herramental para procesos de estampado con enfoque en estabilidad operativa.",
					image: "/assets/proyectos/dado-progresivo-2.jpeg",
				},
			],
		},
		contact: {
			eyebrow: "Contacto",
			title: "Solicita tu cotizacion",
			description: "Cuentanos sobre tu proyecto y te responderemos lo antes posible.",
			emailLabel: "Tambien puedes escribirnos a",
			locationLabel: "Ubicacion",
			locationValue: "Califorma CNC, Mexicali, Baja California",
			mapTitle: "Mapa de ubicacion de Califorma en Mexicali, Baja California",
			mapCardTitle: "Califorma CNC",
			mapCardDescription: "Mexicali, Baja California, Mexico",
			mapCardLink: "Ver en Google Maps",
			highlights: [
				{
					label: "Atencion",
					value: "Respuesta enfocada a proyectos industriales",
				},
				{
					label: "Cobertura",
					value: "Piezas, herramentales y procesos especiales",
				},
			],
			form: {
				name: "Nombre",
				lastName: "Apellido",
				email: "Email",
				phone: "Telefono",
				message: "Mensaje",
				namePlaceholder: "Tu nombre",
				lastNamePlaceholder: "Tu apellido",
				emailPlaceholder: "correo@empresa.com",
				phonePlaceholder: "(000) 000 0000",
				messagePlaceholder: "Describe tu proyecto, materiales, cantidades o requerimientos.",
				submit: "Solicitar cotizacion",
				sending: "Enviando...",
				success: "Mensaje enviado",
				successNote: "Gracias. Hemos recibido tu solicitud y te contactaremos pronto.",
			},
		},
		footer: {
			brand: "Califorma",
			location: "Mexicali, B.C.",
			email: "info@califorma.com.mx",
			links: {
				home: "Inicio",
				services: "Servicios",
				contact: "Contacto",
			},
		},
	},
	en: {
		meta: {
			lang: "en",
			locale: "en_US",
		},
		anchors: {
			home: "home",
			services: "services",
			about: "about",
			machinery: "machinery",
			projects: "projects",
			contact: "contact",
		},
		header: {
			brand: "Califorma",
			nav: {
				home: "Home",
				services: "Services",
				about: "About",
				machinery: "Machinery",
				projects: "Projects",
				contact: "Contact",
			},
			cta: "Request Quote",
			switchLabel: "ES",
			switchHref: "/",
			mobileToggleOpen: "Open menu",
			mobileToggleClose: "Close menu",
		},
		hero: {
			eyebrow: "CNC MACHINING FOR INDUSTRY",
			title: "High-precision CNC machining in Mexicali",
			description:
				"We manufacture industrial parts with guaranteed quality, fast turnaround, and state-of-the-art technology for projects that require precision and reliability.",
			primaryCta: "Quote your project",
			secondaryCta: "View services",
			capacityLabel: "Industrial capability",
			capacityTitle:
				"Precision manufacturing for clients who prioritize technical compliance and production continuity.",
			capacityDescription:
				"We support manufacturing requirements with a focus on tolerances, traceability, and competitive response times for industrial applications.",
			operationLabel: "Operation",
			operationValue: "CNC + WEDM",
			scopeLabel: "Coverage",
			scopeValue: "Machining, tooling, and design",
			highlights: [
				"Fast turnaround",
				"Guaranteed quality",
				"Support for industrial projects",
			],
		},
		trustBanner: {
			label: "Industrial sectors that trust our precision",
			items: ["Automotive", "Aerospace", "Medical", "Agroindustry", "Electronics"],
		},
		services: {
			eyebrow: "Services",
			title: "Machining and fabrication solutions for industrial requirements.",
			description:
				"We integrate manufacturing and design processes to develop parts, components, and tooling with industrial-grade standards.",
			itemLabel: "Service",
			items: [
				{
					title: "CNC Milling",
					description:
						"Machining of complex-geometry parts with controlled tolerances and consistent finish.",
				},
				{
					title: "CNC Turning",
					description:
						"Manufacturing of shafts, bushings, and cylindrical components with high dimensional repeatability.",
				},
				{
					title: "Industrial Welding",
					description:
						"Joining and fabrication of metal assemblies for structural and industrial applications.",
				},
				{
					title: "WEDM",
					description:
						"Wire EDM cutting for precise profiles and high-hardness materials.",
				},
				{
					title: "Mechanical Design",
					description:
						"Development of functional solutions for manufacturing, assembly, and component improvement.",
				},
				{
					title: "Die Design",
					description:
						"Design focused on stamping processes with durability and productivity in mind.",
				},
				{
					title: "Roll Forming Roller Design",
					description:
						"Roll setup for continuous forming processes with profile precision.",
				},
			],
		},
		about: {
			eyebrow: "About",
			title: "About Califorma",
			sideTitle: "Specialized manufacturing",
			sideDescription:
				"Technical capability focused on industrial projects that require precision and consistency.",
			paragraphs: [
				"At Califorma, we specialize in CNC machining with the highest quality standards.",
				"Our commitment is to deliver precise, reliable parts tailored to each customer's requirements.",
				"We work with advanced technology and a skilled team to ensure consistent results in every project.",
			],
			metrics: [
				{ label: "Business model", value: "B2B support" },
				{ label: "Operation", value: "Fast response" },
				{ label: "Commitment", value: "Quality and compliance" },
			],
		},
		machinery: {
			eyebrow: "Machinery",
			title: "Installed capacity",
			description:
				"We operate advanced equipment to ensure precision and competitive delivery times in every project.",
			items: [
				{
					name: "HAAS VF0E Machining Center",
					type: "Vertical machining",
					image: "/assets/maquinaria/haas-vf0e.jpg",
					imagePosition: "object-[46%_42%]",
					imageClass: "object-cover scale-100",
					imageContainerClass: "",
					highlighted: true,
					specs: [{ label: "Dimensions (XYZ)", value: '30" x 16" x 20"' }],
					description:
						"Versatile machining center for precision parts with demanding tolerances.",
				},
				{
					name: "HARDINGE SV200 CNC Lathe",
					type: "CNC turning",
					image: "/assets/maquinaria/hardinge-sv200.jpg",
					imagePosition: "object-center",
					imageClass: "object-cover scale-110 md:group-hover:scale-100",
					imageContainerClass: "",
					highlighted: false,
					specs: [
						{ label: "Swing", value: '10"' },
						{ label: "Length", value: '14"' },
					],
					description:
						"Ideal CNC lathe for high-precision, repeatable operations on cylindrical parts.",
				},
				{
					name: "HAAS SL30 CNC Lathe",
					type: "CNC turning",
					image: "/assets/maquinaria/haas-sl30.jpg",
					imagePosition: "object-center",
					imageClass: "object-cover scale-110 md:group-hover:scale-100",
					imageContainerClass: "",
					highlighted: false,
					specs: [
						{ label: "Swing", value: '17"' },
						{ label: "Length", value: '34"' },
					],
					description:
						"Robust capacity for longer parts and continuous production demands.",
				},
				{
					name: "CHMER G32S Wire EDM",
					type: "WEDM",
					image: "/assets/maquinaria/chmer-g32s.jpg",
					imagePosition: "object-center",
					imageClass: "object-cover scale-110 md:group-hover:scale-100",
					imageContainerClass: "",
					highlighted: false,
					specs: [{ label: "Dimensions (XYZ)", value: '14" x 9.8" x 8.6"' }],
					description:
						"Wire cutting for complex profiles and high-hardness materials with high-precision finishes.",
				},
			],
		},
		projects: {
			eyebrow: "Projects",
			title: "Projects",
			description: "Examples of work for different industrial applications.",
			itemLabel: "Project",
			items: [
				{
					id: "01",
					title: "Progressive Die #1",
					category: "Tooling",
					description:
						"Tooling developed for repetitive operations with a focus on precision and continuity.",
					video: "/assets/proyectos/pieza-varias.mp4",
					poster: "/assets/proyectos/dado-progresivo-1-poster.png",
				},
				{
					id: "02",
					title: "Tube forming rollers",
					category: "Industrial forming",
					description:
						"Components designed for forming processes with dimensional control and continuous performance.",
					image: "/assets/proyectos/rodillos-formado.jpg",
				},
				{
					id: "03",
					title: "Various parts",
					category: "Manufacturing",
					description:
						"Manufacturing of special components for different industrial production requirements.",
					image: "/assets/proyectos/piezas-varias.jpeg",
				},
				{
					id: "04",
					title: "Shafts",
					category: "CNC turning",
					description:
						"Machining of shafts and rotating elements for industrial equipment and systems.",
					image: "/assets/proyectos/flechas.jpg",
				},
				{
					id: "05",
					title: "Progressive Die #2",
					category: "Stamping",
					description:
						"Tooling solution for stamping processes focused on operational stability.",
					image: "/assets/proyectos/dado-progresivo-2.jpeg",
				},
			],
		},
		contact: {
			eyebrow: "Contact",
			title: "Request your quote",
			description: "Tell us about your project and we will get back to you as soon as possible.",
			emailLabel: "You can also write to us at",
			locationLabel: "Location",
			locationValue: "Califorma CNC, Mexicali, Baja California",
			mapTitle: "Califorma location map in Mexicali, Baja California",
			mapCardTitle: "Califorma CNC",
			mapCardDescription: "Mexicali, Baja California, Mexico",
			mapCardLink: "View on Google Maps",
			highlights: [
				{
					label: "Support",
					value: "Response focused on industrial projects",
				},
				{
					label: "Coverage",
					value: "Parts, tooling, and special processes",
				},
			],
			form: {
				name: "First name",
				lastName: "Last name",
				email: "Email",
				phone: "Phone",
				message: "Message",
				namePlaceholder: "Your first name",
				lastNamePlaceholder: "Your last name",
				emailPlaceholder: "email@company.com",
				phonePlaceholder: "(000) 000 0000",
				messagePlaceholder: "Describe your project, materials, quantities, or requirements.",
				submit: "Request quote",
				sending: "Sending...",
				success: "Message sent",
				successNote: "Thank you. We have received your request and will contact you soon.",
			},
		},
		footer: {
			brand: "Califorma",
			location: "Mexicali, B.C.",
			email: "info@califorma.com.mx",
			links: {
				home: "Home",
				services: "Services",
				contact: "Contact",
			},
		},
	},
} as const;

export function getUI(lang: Lang) {
	return ui[lang] ?? ui[defaultLang];
}
