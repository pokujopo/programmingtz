import { useEffect, useMemo, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { featuredProjects } from '../data/featuredProjects';
import { fetchProjects, getProjectImageUrl, normalizeProjectLink } from '../lib/projectApi';

function Project() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  useEffect(() => {
    let ignore = false;

    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        if (!ignore) {
          setProjects(Array.isArray(data) ? data : []);
        }
      } catch (error) {
        if (!ignore) {
          console.error(error);
          setProjects([]);
        }
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    loadProjects();
    return () => {
      ignore = true;
    };
  }, []);

  const displayProjects = useMemo(() => {
    const remoteProjects = projects.slice(0, 4).map((item) => ({
      ...item,
      image: getProjectImageUrl(item.image),
      link: normalizeProjectLink(item.link),
      category: item.language || 'Web Project',
      description: 'A live client-facing build with responsive structure and a showcase-ready presentation.',
    }));

    return remoteProjects.length > 0 ? [...remoteProjects, ...featuredProjects] : featuredProjects;
  }, [projects]);

  return (
    <section id="section2" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div data-aos="fade-up" className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Selected work</p>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">Projects presented with a cleaner, stronger portfolio layout.</h2>
            <p className="mt-4 text-base leading-8 text-slate-400">
              This section now uses a more professional grid, stronger visual hierarchy, softer surfaces,
              and better CTA structure so every project feels premium instead of crowded.
            </p>
          </div>

          <div data-aos="fade-left" className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Responsive cards</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Better spacing</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Production style</span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {displayProjects.map((item, index) => (
            <article
              key={item.id || `${item.name}-${index}`}
              data-aos="fade-up"
              data-aos-delay={index * 70}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-slate-950/30 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.07]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full border border-cyan-400/30 bg-slate-950/70 px-3 py-1 text-xs font-semibold text-cyan-200 backdrop-blur">
                  {item.category}
                </span>
              </div>

              <div className="space-y-5 p-6">
                <div>
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">{item.description}</p>
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-300">
                  <span>{item.language || 'Stack not listed'}</span>
                  <div className="flex items-center gap-4 text-slate-400">
                    <span className="inline-flex items-center gap-2">
                      <FontAwesomeIcon icon={faHeart} className="text-cyan-300" />
                      {item.like_count ?? '—'}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <FontAwesomeIcon icon={faEye} className="text-cyan-300" />
                      {item.view_count ?? '—'}
                    </span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-cyan-400 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
                  >
                    Live preview
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                  <button
                    type="button"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-300"
                    aria-label={`Like ${item.name}`}
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {loading && (
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-300">
            Loading portfolio data...
          </div>
        )}

        <div className="mt-12 flex justify-center">
          <Link
            to="/project"
            className="inline-flex items-center gap-3 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-6 py-3.5 text-sm font-semibold text-cyan-300 transition hover:-translate-y-0.5 hover:bg-cyan-400/20"
          >
            See all projects
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Project;
