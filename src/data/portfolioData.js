const proj1 = '/img/chatWallpaper.jpeg'
const proj1Hover = '/img/chatHoverWallpaper.png'
const proj2 = '/img/heartWallpaper.jpeg'
const proj2Hover = '/img/heartHoverWallpaper.jpeg'

export const about = {
  title: 'Sobre mí',
  description: 'Soy un desarrollador web apasionado por crear experiencias digitales accesibles y de alto rendimiento. Con experiencia en tecnologías modernas y un enfoque en la usabilidad, busco siempre mejorar mis habilidades y contribuir a proyectos significativos.'
}

export const experiences = [
  {
  range: '2023 — 2024',
  title: 'Desarrollador backend',
  company: 'Conecta.NET SAS',
  description:
    'Desarrollé y mantuve servicios backend usando Node.js y Express, creando endpoints, lógica de negocio y APIs RESTful para comunicación cliente-servidor. Administré bases de datos en MongoDB y MySQL, realizando modelado, consultas y optimización. Apliqué principios de arquitectura escalable, flujos de autenticación, validación de datos y buenas prácticas de seguridad.',
  techs: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'REST APIs']
  },
]

export const projects = [
  {
    year: '2025 - presente',
    title: 'Chat App',
    image: proj1,
    hoverImage: proj1Hover,
    alt: 'Accessibility pitfalls article thumbnail',
    description: 'desarrollada como proyecto personal para demostrar dominio en arquitectura full-stack y comunicación en tiempo real. Implementé mensajería instantánea con Socket.IO, autenticación segura con Firebase, manejo de contactos y persistencia en MongoDB',
    link: 'https://chatproject-gold.vercel.app',
  },
  {
    year: '2024',
    title: 'CardioXplore3D',
    image: proj2,
    hoverImage: proj2Hover,
    alt: 'Algolia integration thumbnail',
    description: 'una plataforma educativa interactiva sobre enfermedades cardiovasculares que combina modelos 3D en tiempo real, física avanzada y módulos didácticos completos.',
    link: 'https://cardio-xplore3-d.vercel.app',
  }
]

export default { about, experiences, projects }
