import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { FeaturesSection } from '@/components/features-section';
import { ProjectsSection } from '@/components/projects-section';
import { ResumeSection } from '@/components/resume-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'Muhammad Athar Ehsan | Software Engineer & QA Expert',
  description:
    'Professional portfolio of Muhammad Athar Ehsan - Software Quality Assurance Engineer, Full Stack Developer, and Project Manager. Expertise in MERN stack, test automation, and software quality.',
  keywords: [
    'Software Engineer',
    'QA Engineer',
    'Full Stack Developer',
    'MERN Stack',
    'Cypress',
    'Selenium',
    'Project Manager',
  ],
  authors: [{ name: 'Muhammad Athar Ehsan' }],
  openGraph: {
    title: "M Athar Ehsan's Portfolio",
    description: 'Professional portfolio showcasing expertise in QA, full-stack development, and project management.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="bg-[#0B0F19] text-[#E5E7EB]">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
