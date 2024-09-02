import Tooltip from "./components/Tooltip";
import DownloadBoxSection from "./components/DownloadBoxSection";

export default function Home() {
  return (
    <main className="flex justify-between gap-5 p-4 bg-white md:flex-row flex-col md:min-h-screen md:p-24">
      <DownloadBoxSection />
      <Tooltip />
    </main>
  );
}
