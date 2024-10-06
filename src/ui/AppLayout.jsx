import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AppLayout({ data, query, setQuery }) {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      <Header data={data} query={query} setQuery={setQuery} />
      <main className="p-2 overflow-auto w-9/12  mx-auto  mb-8 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
