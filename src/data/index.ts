import githubIcon from '../assets/icons/github.svg'
import linkedinIcon from '../assets/icons/linkedin.svg'
import twitterIcon from '../assets/icons/twitter.svg'
import facebookIcon from '../assets/icons/facebook.svg'

export const site = 'https://nafiasib.com'
export const info = {
  name: 'K. M. Nafi Asib',
  siteTitle: 'Nafi Asib',
  description: "Hobbyist Maker. Product Engineer",
  image: 'src/assets/avatar.png'
}
export const navLinks = [
  {
    name: 'Experience',
    url: '#experience'
  },
  {
    name: 'Projects',
    url: 'https://github.com/NafiAsib?tab=repositories'
  },
  {
    name: 'Blog',
    url: 'https://blog.nafiasib.com'
  }
]

export const socialLinks = [
  {
    name: 'github',
    link: 'https://github.com/NafiAsib',
    icon: githubIcon
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/nafiasib/',
    icon: linkedinIcon
  },
  {
    name: 'twitter',
    link: 'https://x.com/NafiAsib',
    icon: twitterIcon
  },
  {
    name: 'facebook',
    link: 'https://www.facebook.com/nafi.asib',
    icon: facebookIcon
  }
]

export const experiences = [
  {
    title: 'Software Engineer',
    company: 'Cheq, a Cantaloupe Platform',
    location: 'Kirkland, Washington (Remote)',
    startDate: 'Jun 2024',
    endDate: 'Present',
    description: [
      'Developing a scalable warehouse management system with Go, Angular & Ionic',
      'Developed and maintained legacy systems with Next.js, Express & Typescript'
    ],
    link: 'https://www.cantaloupe.com/',
    skills: [
      'Go',
      'Angular',
      'Ionic',
      'Next.js',
      'Express',
      'Typescript',
      'MySQL'
    ]
  },
  {
    title: 'Software Developer',
    company: 'The WOS Germany GmbH',
    location: 'Mönchengladbach, North Rhine-Westphalia, Germany (Remote)',
    startDate: 'Nov 2022',
    endDate: 'Jun 2024',
    description: [
      'Led a team of 4 frontend developers in building a high-performance food delivery platform',
      'Developed an in-house component library focused on accessibility and performance',
      'Automated deployment workflows (CI/CD) with GitHub Actions and Pulumi',
      'Developed a social media app MVP with Flutter',
      'Mentored Junior engineers in Next.js and NestJS'
    ],
    link: 'https://thewos.com/',
    skills: ['Next.js', 'NestJS', 'Flutter', 'AWS', 'CI/CD']
  },
  {
    title: 'Associate Software Engineer',
    company: 'Brain Station 23',
    location: 'Dhaka, Bangladesh',
    startDate: 'Nov 2021',
    endDate: 'Nov 2022',
    description: [
      'Led complete frontend architecture refactoring, implementing modular package design that improved DX and reduced onboarding time',
      'Engineered core features of an enterprise e-commerce platform using Next.js and NestJS',
      'Established end-to-end testing culture by implementing Cypress',
      'Developed and documented a comprehensive component library with Storybook',
      'Mentored developers in testing best practices and modern frontend architecture patterns'
    ],
    link: 'https://brainstation-23.com/',
    skills: ['React', 'Node.js', 'Next.js', 'Lerna', 'Cypress', 'Storybook']
  },
  {
    title: 'Frontend Developer',
    company: 'Dast Solution Inc.',
    location: 'Texas, US (Remote)',
    startDate: 'Dec 2020',
    endDate: 'Jun 2021',
    description: [
      'Architected and implemented a secure online examination platform using Angular, Flutter, Django and GCP',
      'Spearheaded development of a company-wide design system, reducing UI inconsistencies and accelerating feature development'
    ],
    skills: ['Angular', 'Flutter', 'Google Cloud Platform', 'Django']
  }
]
