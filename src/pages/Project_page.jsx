import { useEffect, useMemo, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowUpRightFromSquare, faEye, faHeart, faMagnifyingGlass, faSliders } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { featuredProjects } from '../data/featuredProjects';
import { fetchProjects, getProjectImageUrl, normalizeProjectLink } from '../lib/projectApi';

function Project_page() {
  const [projects, setProjects] = useState([]);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('newest');
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
          const normalized = data.map((item) => ({
            ...item,
            image: getProjectImageUrl(item.image),
            link: normalizeProjectLink(item.link),
          }));
          setProjects(normalized);
        }
      } catch (error) {
        console.error(error);
        if (!ignore) setProjects([]);
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    loadProjects();
    return () => {
      ignore = true;
    };
  }, []);

  const allProjects = useMemo(() => {
    const fallback = featuredProjects.map((item) => ({ ...item }));
    return projects.length > 0 ? [...projects, ...fallback] : fallback;
  }, [projects]);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const filtered = allProjects.filter((item) => {
      const searchableText = `${item.name} ${item.language || ''} ${item.category || ''}`.toLowerCase();
      return searchableText.includes(normalizedQuery);
    });

    const sorted = [...filtered].sort((a, b) => {
      if (sort === 'az') return (a.name || '').localeCompare(b.name || '');
      if (sort === 'za') return (b.name || '').localeCompare(a.name || '');
      return 0;
    });

    return sorted;
  }, [allProjects, query, sort]);

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#020617_0%,_#0f172a_60%,_#111827_100%)] text-white">
      <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-300"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              Back home
            </Link>
          </div>

          <section data-aos="fade-up" className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-2xl shadow-slate-950/30">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Portfolio archive</p>
            <h1 className="mt-4 text-3xl font-black sm:text-5xl">All projects in a more professional gallery view.</h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-400">
              Search, scan, and review projects with a cleaner layout, better content hierarchy, and cards
              that feel more like a polished agency portfolio.
            </p>

            <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_220px]">
              <label className="flex h-14 items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 px-4">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-cyan-300" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by project or stack"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                />
              </label>

              <label className="flex h-14 items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 px-4 text-sm text-slate-300">
                <FontAwesomeIcon icon={faSliders} className="text-cyan-300" />
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="w-full bg-transparent outline-none"
                >
                  <option value="newest">Featured order</option>
                  <option value="az">A - Z</option>
                  <option value="za">Z - A</option>
                </select>
              </label>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((item, index) => (
              <article
                key={item.id || `${item.name}-${index}`}
                data-aos="fade-up"
                data-aos-delay={index * 60}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-slate-950/30"
              >
                <img src={item.image} alt={item.name} className="h-64 w-full object-cover" />
                <div className="space-y-5 p-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                      {item.language || item.category || 'Project'}
                    </p>
                    <h2 className="mt-3 text-xl font-bold text-white">{item.name}</h2>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-300">
                    <span className="inline-flex items-center gap-2">
                      <FontAwesomeIcon icon={faHeart} className="text-cyan-300" />
                      {item.like_count ?? '—'}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <FontAwesomeIcon icon={faEye} className="text-cyan-300" />
                      {item.view_count ?? '—'}
                    </span>
                  </div>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
                  >
                    Open project
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
                </div>
              </article>
            ))}
          </section>

          {!loading && filteredProjects.length === 0 && (
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center text-slate-300">
              No matching projects found for your search.
            </div>
          )}

          {loading && (
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center text-slate-300">
              Loading projects...
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Project_page;
