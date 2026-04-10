import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPaperPlane, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FaFacebook, FaGithub, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaInstagram />, href: '#', label: 'Instagram' },
  { icon: <FaTiktok />, href: '#', label: 'TikTok' },
  { icon: <FaFacebook />, href: '#', label: 'Facebook' },
  { icon: <FaGithub />, href: '#', label: 'GitHub' },
  { icon: <FaYoutube />, href: '#', label: 'YouTube' },
  { icon: <FaWhatsapp />, href: '#', label: 'WhatsApp' },
];

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section id="section4" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div data-aos="fade-right" className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-2xl shadow-slate-950/30">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Contact</p>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">Let&apos;s build something professional together.</h2>
          <p className="mt-4 text-base leading-8 text-slate-400">
            Need a polished portfolio, website, mobile app, admin dashboard, or system UI update? Reach
            out through the contacts below and I can help turn it into a cleaner production-ready result.
          </p>

          <div className="mt-8 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <p className="text-sm text-slate-400">Phone / WhatsApp</p>
              <a href="tel:+255786584974" className="mt-2 inline-flex items-center gap-3 text-base font-semibold text-white">
                <FontAwesomeIcon icon={faPhoneVolume} className="text-cyan-300" />
                +255 786 584 974
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <p className="text-sm text-slate-400">Email</p>
              <a href="mailto:pokujopo@gmail.com" className="mt-2 inline-flex items-center gap-3 text-base font-semibold text-white">
                <FontAwesomeIcon icon={faEnvelope} className="text-cyan-300" />
                pokujopo@gmail.com
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <p className="text-sm text-slate-400">Location</p>
              <p className="mt-2 inline-flex items-center gap-3 text-base font-semibold text-white">
                <FontAwesomeIcon icon={faLocationDot} className="text-cyan-300" />
                Tabata, Dar es Salaam, Tanzania
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-400/40 hover:text-cyan-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div data-aos="fade-left" className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-2xl shadow-slate-950/30">
          <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/65 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Quick message</p>
            <h3 className="mt-4 text-2xl font-bold text-white">Send project details</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              This is styled like a production contact section. You can later connect it to EmailJS,
              Formspree, Laravel, or your own backend endpoint.
            </p>

            <form className="mt-8 space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="h-13 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="h-13 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
                  Project message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell me what you want to build"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-3 rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Send message
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
