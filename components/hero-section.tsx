'use client';

import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";


export function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;

  const titles = [
    'Software Quality Assurance Engineer',
    'Full Stack Developer',
    'Project Manager',
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/MAtherEhsan', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/muhammadatharehsan', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:muhammadatharehsan2@gmail.com', label: 'Email' },
    { icon: FaWhatsapp, href: 'https://wa.me/923046000182', label: 'WhatsApp' },
  ];

  const techStack = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'TypeScript', icon: '📘' },
  ];

  useEffect(() => {
  const currentTitle = titles[titleIndex];
  let timeoutId: NodeJS.Timeout | undefined;

  if (!isDeleting && displayedText === currentTitle) {
    // Pause before deleting
    timeoutId = setTimeout(() => setIsDeleting(true), 2000);
  } else if (isDeleting && displayedText === '') {
    // Move to next title
    setIsDeleting(false);
    setTitleIndex((prev) => (prev + 1) % titles.length);
  } else {
    // Typing or deleting
    timeoutId = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? prev.slice(0, -1)
          : currentTitle.slice(0, prev.length + 1)
      );
    }, isDeleting ? 50 : typingSpeed);
  }

  return () => {
    if (timeoutId) clearTimeout(timeoutId);
  };
}, [displayedText, isDeleting, titleIndex]); // ✅ only these 3


  return (
    <section id="home" className="pt-32 pb-16 px-6 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#E5E7EB] leading-tight text-balance">
                Muhammad Athar Ehsan
              </h1>
              <div className="h-20">
                <p className="text-2xl sm:text-3xl text-[#38BDF8] font-semibold min-h-12">
                  {displayedText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
              <p className="text-[#9CA3AF] text-lg max-w-md leading-relaxed text-justify">
                Passionate Software Engineer with expertise in both development and quality assurance. Skilled in MERN stack development and experienced with automation and manual testing using tools such as Selenium and Cypress. Committed to delivering high-quality, reliable software through meticulous testing and efficient development practices. Strong problem-solving abilities and attention to detail ensure robust, scalable, and maintainable solutions.
              </p>
            </div>

            {/* Find Me On & Tech Stack Section */}
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Find Me On */}
              <div>
                <p className="text-sm font-semibold text-[#E5E7EB] mb-3">Find me on</p>
                <div className="grid grid-cols-2 gap-3 w-fit">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 bg-[#2563EB]/20 rounded-lg flex items-center justify-center text-[#38BDF8] hover:bg-[#2563EB] hover:text-[#E5E7EB] transition-all hover:scale-110"
                        aria-label={link.label}
                        title={link.label}
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <p className="text-sm font-semibold text-[#E5E7EB] mb-3">Tech Stack</p>
                <div className="grid grid-cols-2 gap-3 w-fit">
                  {techStack.map((tech) => (
                    <div
                      key={tech.name}
                      className="px-3 py-2 bg-[#2563EB]/10 border border-[#2563EB]/30 rounded-lg flex items-center gap-2 hover:border-[#38BDF8] transition-colors"
                    >
                      <span className="text-lg">{tech.icon}</span>
                      <span className="text-sm text-[#E5E7EB]">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-96 h-[30rem] sm:w-[26rem] sm:h-[34rem] rounded-2xl overflow-hidden border border-[#2563EB]/30">
              <img
                src="/profile-placeholder.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
