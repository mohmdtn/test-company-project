"use client";

import { useState } from "react";
import DownloadDialog from "./components/DownloadDialog";
import Tooltip from "./components/Tooltip";
import ButtonCustom from "./components/ButtonCustom";

export default function Home() {
  const [IsDownloadModal, SetIsDownloadModal] = useState(false);

  return (
    <main className="min-h-screen p-24 bg-white">
      <ButtonCustom
        text="click for open modal"
        handleClick={() => SetIsDownloadModal(true)}
        classname="bg-gradient-to-r from-[#C41BD3] to-[#790FCB] rounded-full shadow-lg shadow-[#c41bd35f] text-white flex items-center normal-case"
      />
      <DownloadDialog
        open={IsDownloadModal}
        handleClose={() => SetIsDownloadModal(false)}
      />
      <Tooltip />
    </main>
  );
}
