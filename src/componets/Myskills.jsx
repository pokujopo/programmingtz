import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { skillHighlights } from '../data/featuredProjects';

function Myskills() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section id="section3" className="bg-slate-900 py-20 text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl" data-aos="fade-up">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Core skills</p>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">A cleaner way to present what I build and what I use.</h2>
          <p className="mt-4 text-base leading-8 text-slate-400">
            Instead of oversized circles and crowded text, this section now communicates skills through
            premium cards with better readability and stronger professional structure.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillHighlights.map((skill, index) => (
            <article
              key={skill.value}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/30"
            >
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">{skill.title}</p>
              <h3 className="mt-5 text-2xl font-bold text-white">{skill.value}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{skill.description}</p>
            </article>
          ))}
        </div>

        <div data-aos="fade-up" className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 shadow-xl shadow-slate-950/30">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Tech stack</p>
          <p className="mt-4 text-base leading-8 text-slate-300">
            PHP (Laravel), JavaScript (React), HTML/CSS (Tailwind CSS), Dart (Flutter), and Python
            (Django/Tkinter). I focus on turning these tools into stable products, not just layouts.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Myskills;
