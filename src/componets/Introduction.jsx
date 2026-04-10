import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCode, faLayerGroup, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import test from '../assets/test.webp';

const stats = [
  { label: 'Focus', value: 'Production UI' },
  { label: 'Stacks', value: 'React • Laravel • Flutter' },
  { label: 'Goal', value: 'Professional digital products' },
];

function Introduction() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section
      id="section1"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_transparent_28%),linear-gradient(180deg,_#020617_0%,_#0f172a_55%,_#111827_100%)] text-white"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-screen w-full max-w-7xl items-center gap-14 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-20 lg:pt-32">
        <div className="max-w-3xl">
          <div
            data-aos="fade-up"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 shadow-lg shadow-cyan-950/40"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
            Full-stack developer building clean digital experiences
          </div>

          <h1 data-aos="fade-up" data-aos-delay="100" className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
            I design and build websites, systems, and mobile apps that feel{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              ready for production.
            </span>
          </h1>

          <p data-aos="fade-up" data-aos-delay="180" className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            My name is Elius John. I turn ideas into modern interfaces with strong backend structure,
            polished layouts, smooth responsiveness, and a professional look clients can trust.
          </p>

          <div data-aos="fade-up" data-aos-delay="260" className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#section2"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              View my projects
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
            <a
              href="#section4"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-400/10"
            >
              Start a project
            </a>
          </div>

          <div data-aos="fade-up" data-aos-delay="340" className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-slate-950/30 backdrop-blur"
              >
                <p className="text-sm text-slate-400">{item.label}</p>
                <p className="mt-2 text-sm font-semibold text-white sm:text-base">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div data-aos="zoom-in" className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-sky-500/10 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-4 shadow-2xl shadow-slate-950/60 backdrop-blur-xl">
            <img
              src={test}
              className="h-[420px] w-full rounded-[1.5rem] object-cover object-center sm:h-[520px]"
              alt="Elius John portrait"
            />

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/75 p-5 backdrop-blur-xl">
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                    <FontAwesomeIcon icon={faCode} className="text-cyan-300" />
                    <p className="mt-3 text-sm font-semibold text-white">Clean code</p>
                    <p className="mt-1 text-xs leading-6 text-slate-400">Readable structure and maintainable components.</p>
                  </div>
                  <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                    <FontAwesomeIcon icon={faLayerGroup} className="text-cyan-300" />
                    <p className="mt-3 text-sm font-semibold text-white">Modern UI</p>
                    <p className="mt-1 text-xs leading-6 text-slate-400">Premium cards, spacing, hierarchy, and better flow.</p>
                  </div>
                  <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                    <FontAwesomeIcon icon={faMobileScreenButton} className="text-cyan-300" />
                    <p className="mt-3 text-sm font-semibold text-white">Responsive</p>
                    <p className="mt-1 text-xs leading-6 text-slate-400">Built to look sharp across phone, tablet, and desktop.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
