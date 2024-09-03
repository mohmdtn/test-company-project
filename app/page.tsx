import DownloadBoxSection from "./components/DownloadBoxSection";
import TooltipCustom from "./components/TooltipCustom";

export default function Home() {
  return (
    <main className="flex justify-around gap-5 p-4 bg-white md:flex-row flex-col md:min-h-screen md:p-24">
      <DownloadBoxSection />
      <div>
        <TooltipCustom>Hover on this text to see Tooltop.</TooltipCustom>
      </div>
    </main>
  );
}
