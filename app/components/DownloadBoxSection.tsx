"use client";

import { useState } from "react";
import ButtonCustom from "./ButtonCustom";
import DownloadDialog from "./DownloadDialog";

const DownloadBoxSection = () => {
  const [IsDownloadModal, SetIsDownloadModal] = useState(false);

  return (
    <section>
      <ButtonCustom
        text="click for open modal"
        handleClick={() => SetIsDownloadModal(true)}
        classname="bg-gradient-to-r from-[#C41BD3] to-[#790FCB] rounded-full shadow-lg shadow-[#c41bd35f] text-white flex items-center normal-case"
      />
      <DownloadDialog
        open={IsDownloadModal}
        handleClose={() => SetIsDownloadModal(false)}
      />
    </section>
  );
};

export default DownloadBoxSection;
