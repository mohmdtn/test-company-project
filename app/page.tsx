import Tooltip from "./components/Tooltip";
import DownloadBoxSection from "./components/DownloadBoxSection";

export default function Home() {
  return (
    <main className="min-h-screen p-24 bg-white">
      <DownloadBoxSection />
      <Tooltip />
    </main>
  );
}
