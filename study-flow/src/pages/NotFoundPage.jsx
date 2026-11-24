
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="text-center py-16">
      <h1 className="text-5xl font-bold text-slate-800">
        404
      </h1>

      <p className="mt-4 text-lg text-slate-600">
        Sorry, the page you are looking for was not found.
      </p>

      <Link
        to="/"
        className="inline-block mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
      >
        Back to Dashboard
      </Link>
    </section>
  );
}

export default NotFoundPage;

