import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

const navItems = [
  { id: 1, name: 'Home', url: '#section1' },
  { id: 2, name: 'Projects', url: '#section2' },
  { id: 3, name: 'Skills', url: '#section3' },
  { id: 4, name: 'Contact', url: '#section4' },
];

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-slate-950/85 shadow-2xl backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#section1" className="flex items-center gap-3 text-white">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-sm font-black tracking-[0.28em] text-cyan-300">
            PTZ
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-slate-200">ProgrammingTz</p>
            <p className="text-xs text-slate-400">Developer Portfolio</p>
          </div>
        </a>

        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#section4"
            className="ml-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-sm font-semibold text-cyan-300 transition hover:-translate-y-0.5 hover:bg-cyan-400/20"
          >
            Let&apos;s talk
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 lg:hidden"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={menuOpen ? faX : faBars} />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 pb-5 pt-3 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#section4"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-2xl border border-cyan-400/40 bg-cyan-400/10 px-4 py-3 text-center text-sm font-semibold text-cyan-300"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;
