import {link} from "react-router-dom";

function NotFoundPage() {
    return (
        <section className= "py-16 text-center">
            <h2 className= "text-4xl font-bold mb-4">404 - Page Not Found</h2>
            <p className= "mt-3 text-slate-600">
                sorry, the page you are looking for does not exist. Please check the URL or return to the <Link to="/">home page</Link>.
            </p>

            <Link to="/" className= "mt-6 inline-block rounded-lg bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700"
      >
      
      Back to Dashboard</Link>
        </section>

    );

}

export default NotFoundPage;