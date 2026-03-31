import { useEffect } from "react";
import { Outlet, ScrollRestoration, createBrowserRouter, useLocation } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { HomePage } from "@/pages/HomePage";

function RouteEffects() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return null;
}

function RootLayout() {
  return (
    <div className="min-h-screen bg-brand-radials font-body text-brand-ink">
      <RouteEffects />
      <ScrollRestoration />
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
