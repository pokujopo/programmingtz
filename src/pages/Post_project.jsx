import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faImage, faLanguage, faLink, faUpload, faWebAwesome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { API_BASE } from '../lib/projectApi';

function Post_project() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#020617_0%,_#0f172a_100%)] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-3xl">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-2xl shadow-slate-950/30 sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Dashboard form</p>
              <h1 className="mt-4 text-3xl font-black">Post a new project</h1>
            </div>
            <Link
              to="/"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-300"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              Back home
            </Link>
          </div>

          <form
            action={`${API_BASE}/api/post_project`}
            method="post"
            encType="multipart/form-data"
            className="mt-10 space-y-6"
          >
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="name">
                Site name
              </label>
              <div className="flex h-14 items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 px-4">
                <FontAwesomeIcon icon={faWebAwesome} className="text-cyan-300" />
                <input
                  id="name"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                  type="text"
                  name="name"
                  placeholder="Write site name"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="link">
                Project link
              </label>
              <div className="flex h-14 items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 px-4">
                <FontAwesomeIcon icon={faLink} className="text-cyan-300" />
                <input
                  id="link"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                  type="text"
                  name="link"
                  placeholder="Paste project link"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="image">
                Project image
              </label>
              <div className="flex h-14 items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 px-4 text-sm text-slate-300">
                <FontAwesomeIcon icon={faImage} className="text-cyan-300" />
                <input id="image" className="w-full" type="file" name="image" />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="language">
                Primary stack
              </label>
              <div className="flex h-14 items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 px-4 text-sm text-slate-300">
                <FontAwesomeIcon icon={faLanguage} className="text-cyan-300" />
                <select id="language" className="w-full bg-transparent outline-none" name="language" defaultValue="reactjs">
                  <option value="reactjs">React.js</option>
                  <option value="flutter">Flutter</option>
                  <option value="laravel">Laravel</option>
                  <option value="django">Django</option>
                </select>
              </div>
            </div>

            <button
              className="inline-flex items-center gap-3 rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              type="submit"
            >
              Upload project
              <FontAwesomeIcon icon={faUpload} />
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Post_project;
