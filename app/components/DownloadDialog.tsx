"use client";

import { Dialog } from "@mui/material";
import DownloadItem from "./DownloadItem";
import { useState } from "react";
import ButtonCustom from "./ButtonCustom";

interface DownloadDialogProps {
  open: boolean;
  handleClose: () => void;
}

const downloadItem = [
  { id: 1, text: "CSV", free: false },
  { id: 2, text: "Exel", free: false },
  { id: 3, text: "JSON", free: false },
  { id: 4, text: "HTML", free: false },
  { id: 5, text: "Anki", free: false },
  { id: 6, text: "Text", free: true },
];

const DownloadDialog = ({ open, handleClose }: DownloadDialogProps) => {
  const [isActive, setIsActive] = useState(6);
  return (
    <Dialog onClose={handleClose} open={open} className="bg-none border-none">
      <section className="w-[17rem] bg-gradient-to-r from-[#391A48] to-[#1C1A26] text-white rounded-[1.25rem] border-2 border-[#380C9D] overflow-hidden">
        {/* Modal Header */}
        <h4 className="text-[#DFE1F9] px-3 py-5 text-lg text-center border-b border-[#2C2538] font-bold">
          Select the subtitle format
        </h4>

        {/* Modal Items */}
        <div>
          {downloadItem.map((item) => {
            return (
              <DownloadItem
                key={item.id}
                isSelected={isActive}
                text={item.text}
                id={item.id}
                isFree={item.free}
                clickHandle={() => setIsActive(item.id)}
              />
            );
          })}
        </div>

        {/* Modal Buttons */}
        <div className="px-3 py-5 flex gap-2">
          <ButtonCustom
            type="outlined"
            text="Cancel"
            classname="bg-gray-900 rounded-full text-white flex px-4 items-center normal-case border border-[#380C9D]"
            handleClick={handleClose}
          />
          <ButtonCustom
            type="text"
            text="Download"
            classname="bg-gradient-to-r from-[#C41BD3] to-[#790FCB] rounded-full shadow-lg shadow-[#c41bd35f] text-white flex items-center normal-case flex-1"
          />
        </div>
      </section>
    </Dialog>
  );
};

export default DownloadDialog;
