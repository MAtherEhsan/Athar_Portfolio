'use client';

import { useState } from 'react';
import { Download } from 'lucide-react';

export function ResumeSection() {
  const [activeTab, setActiveTab] = useState('education');

  const tabs = [
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
  ];

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#111827]/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#E5E7EB] mb-4">
            Resume
          </h2>
          <p className="text-[#9CA3AF] text-xl mb-6">
            Comprehensive overview of my education, skills, and professional background.
          </p>
          <a
            href="/M_Athar_Ehsan_s_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-[#E5E7EB] rounded-lg hover:bg-[#1E40AF] transition-colors font-semibold"
          >
            <Download size={20} />
            Download Full Resume
          </a>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors text-lg ${
                activeTab === tab.id
                  ? 'bg-[#2563EB] text-[#E5E7EB]'
                  : 'bg-[#1F2937] text-[#9CA3AF] hover:text-[#E5E7EB]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-3xl mx-auto">
          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="space-y-6">
              <div className="bg-[#0B0F19] border border-[#1F2937] rounded-xl p-8">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl font-bold text-[#E5E7EB]">
                    BS Software Engineering
                  </h3>
                  <span className="text-[#38BDF8] font-semibold text-base bg-[#2563EB]/20 px-3 py-1 rounded">
                    Sep 2021 – Jan 2026
                  </span>
                </div>
                <p className="text-[#38BDF8] font-semibold mb-3 text-lg">
                  COMSATS University Islamabad
                </p>
                <div className="space-y-2">
                  <p className="text-[#9CA3AF] mb-3 text-base">
                    <span className="font-semibold text-[#E5E7EB]">Relevant Coursework:</span>
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      'Software Quality Engineering',
                      'Software Testing',
                      'Software Project Management',
                      'SRE',
                      'Data Structures & Algorithms',
                      'OOP',
                      'MERN Development',
                      'DevOps',
                    ].map((course, idx) => (
                      <span
                        key={idx}
                        className="text-[#9CA3AF] text-base flex items-center gap-2"
                      >
                        <span className="text-[#38BDF8]">✓</span>
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-[#0B0F19] border border-[#1F2937] rounded-xl p-8">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl font-bold text-[#E5E7EB]">
                    FSc. Pre Engineering
                  </h3>
                  <span className="text-[#38BDF8] font-semibold text-base bg-[#2563EB]/20 px-3 py-1 rounded">
                    2019 – 2021
                  </span>
                </div>
                <p className="text-[#38BDF8] font-semibold mb-3 text-lg">
                  Punjab Group of Colleges, Sargodha
                </p>
                <div className="space-y-2">
                  <p className="text-[#9CA3AF] mb-3 text-base">
                    <span className="font-semibold text-[#E5E7EB]">Courses:</span>
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      'Physics',
                      'Chemistry',
                      'Mathematics',
                      'English',
                      'Islamic Studies',
                      'Urdu',
                    ].map((course, idx) => (
                      <span
                        key={idx}
                        className="text-[#9CA3AF] text-base flex items-center gap-2"
                      >
                        <span className="text-[#38BDF8]">✓</span>
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-[#0B0F19] border border-[#1F2937] rounded-xl p-8">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl font-bold text-[#E5E7EB]">
                    Matric in Science
                  </h3>
                  <span className="text-[#38BDF8] font-semibold text-base bg-[#2563EB]/20 px-3 py-1 rounded">
                    2017 – 2019
                  </span>
                </div>
                <p className="text-[#38BDF8] font-semibold mb-3 text-lg">
                  Govt. High School # 01, Sillanwali (Sargodha)
                </p>
                <div className="space-y-2">
                  <p className="text-[#9CA3AF] mb-3 text-base">
                    <span className="font-semibold text-[#E5E7EB]">Courses:</span>
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      'Physics',
                      'Chemistry',
                      'Biology',
                      'Mathematics',
                      'English',
                      'Islamic Studies',
                    ].map((course, idx) => (
                      <span
                        key={idx}
                        className="text-[#9CA3AF] text-base flex items-center gap-2"
                      >
                        <span className="text-[#38BDF8]">✓</span>
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="space-y-6">
              {[
                {
                  category: 'Languages',
                  items: [
                    'HTML',
                    'CSS',
                    'JavaScript',
                    'Python',
                    'Java',
                    'C++',
                  ],
                },
                {
                  category: 'QA & Testing',
                  items: ['Cypress', 'Selenium', 'Manual Testing', 'Test Automation'],
                },
                {
                  category: 'Full Stack',
                  items: [
                    'React',
                    'Node.js',
                    'Express',
                    'MongoDB',
                    'MERN Stack',
                  ],
                },
                {
                  category: 'Tools & Platforms',
                  items: ['Git', 'GitHub', 'DevOps Basics', 'CI/CD'],
                },
                {
                  category: 'Soft Skills',
                  items: [
                    'Problem Solving',
                    'Team Collaboration',
                    'Project Management',
                    'Communication',
                  ],
                },
              ].map((skillGroup, idx) => (
                <div key={idx} className="bg-[#0B0F19] border border-[#1F2937] rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-[#38BDF8] mb-4">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-[#2563EB]/20 text-[#E5E7EB] px-4 py-2 rounded-lg text-base border border-[#2563EB]/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="space-y-6">

              <div className="bg-[#0B0F19] border border-[#1F2937] rounded-xl p-8">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-[#E5E7EB]">
                       SQA Intern
                    </h3>
                    <p className="text-[#38BDF8] font-semibold text-lg">
                       Easykaam (Startup)
                    </p>
                    </div>
                     <span className="text-[#38BDF8] font-semibold text-base bg-[#2563EB]/20 px-3 py-1 rounded">
                        Nov 2025 – Jan 2026
                       </span>
                  </div>

                  <p className="text-[#9CA3AF] mb-4 text-lg">
                    Worked as a Software Quality Assurance Intern on Easykaam’s mobile application,
                    a platform providing household maintenance services, focusing on product stability
                    and release quality.
                   </p>
                    <ul className="space-y-2">
                     {[
                      'Conducted manual testing of Easykaam’s mobile application',
                      'Identified, documented, and tracked bugs to ensure high-quality releases',
                      'Collaborated closely with developers to verify fixes',
                      'Helped improve application stability and overall performance',
                      ].map((responsibility, idx) => (
                        <li key={idx} className="text-[#9CA3AF] text-lg flex items-start gap-2">
                          <span className="text-[#38BDF8] mt-1">→</span>
                           {responsibility}
                        </li>
                      ))}
                   </ul>
                </div>

              <div className="bg-[#0B0F19] border border-[#1F2937] rounded-xl p-8">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-[#E5E7EB]">
                      Software Quality Assurance Engineer
                    </h3>
                    <p className="text-[#38BDF8] font-semibold text-lg">Final Year Project - HarfZaar</p>
                  </div>
                  <span className="text-[#38BDF8] font-semibold text-base bg-[#2563EB]/20 px-3 py-1 rounded">
                    2024 – 2025
                  </span>
                </div>
                <p className="text-[#9CA3AF] mb-4 text-lg">
                  Led quality assurance efforts for HarfZaar, an AI-powered poetry platform. Implemented comprehensive testing strategies and ensured software quality across multiple features.
                </p>
                <ul className="space-y-2">
                  {[
                    'Designed and executed comprehensive test plans',
                    'Automated testing workflows using modern tools',
                    'Collaborated with development team on quality improvements',
                    'Achieved 2nd position in final year project competition',
                  ].map((responsibility, idx) => (
                    <li key={idx} className="text-[#9CA3AF] text-lg flex items-start gap-2">
                      <span className="text-[#38BDF8] mt-1">→</span>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#0B0F19] border border-[#1F2937] rounded-xl p-8">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-[#E5E7EB]">
                      Full Stack Developer
                    </h3>
                    <p className="text-[#38BDF8] font-semibold text-lg">MERN Stack Projects</p>
                  </div>
                  <span className="text-[#38BDF8] font-semibold text-base bg-[#2563EB]/20 px-3 py-1 rounded">
                    Ongoing
                  </span>
                </div>
                <p className="text-[#9CA3AF] mb-4 text-lg">
                  Developed full-stack applications using the MERN stack, with focus on responsive UI, efficient backend architecture, and user-centric design.
                </p>
                <ul className="space-y-2">
                  {[
                    'Built responsive web applications with React',
                    'Developed scalable backend services with Node.js & Express',
                    'Implemented database solutions with MongoDB',
                    'Integrated AI/ML features (TensorFlow, Python)',
                  ].map((responsibility, idx) => (
                    <li key={idx} className="text-[#9CA3AF] text-lg flex items-start gap-2">
                      <span className="text-[#38BDF8] mt-1">→</span>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
