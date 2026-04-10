import { FaFacebook, FaGithub, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const navItems = [
  { id: 1, name: 'Projects', url: '#section2' },
  { id: 2, name: 'Skills', url: '#section3' },
  { id: 3, name: 'Contact', url: '#section4' },
  { id: 4, name: 'Home', url: '#section1' },
];

const socials = [
  { icon: <FaInstagram />, href: '#', label: 'Instagram' },
  { icon: <FaTiktok />, href: '#', label: 'TikTok' },
  { icon: <FaFacebook />, href: '#', label: 'Facebook' },
  { icon: <FaGithub />, href: '#', label: 'GitHub' },
  { icon: <FaYoutube />, href: '#', label: 'YouTube' },
  { icon: <FaWhatsapp />, href: '#', label: 'WhatsApp' },
];

function Footer() {
  const copyrightYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-lg font-bold">ProgrammingTz</p>
          <p className="mt-2 max-w-md text-sm leading-7 text-slate-400">
            Crafted for a cleaner portfolio presentation with premium spacing, darker surfaces, and a
            more professional front-end feel.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-slate-300">
          {navItems.map((item) => (
            <a key={item.id} href={item.url} className="transition hover:text-cyan-300">
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 text-slate-300">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-cyan-400/40 hover:text-cyan-300"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
        &copy; {copyrightYear} ProgrammingTz. Built for production-style presentation.
      </div>
    </footer>
  );
}

export default Footer;
