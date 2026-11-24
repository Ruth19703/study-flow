
import Navbar from "../components/Navbar";

function SiteLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white px-6 py-5">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-indigo-700">
              StudyFlow
            </h1>
            <p className="text-sm text-slate-500">
              Organize your learning. Achieve your goals.
            </p>
          </div>

          <Navbar />
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        {children}
      </main>
    </div>
  );
}

export default SiteLayout;
