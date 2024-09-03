"use client";

import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { RiVolumeUpFill } from "react-icons/ri";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import TooltipBox from "./TooltipBox";
import ButtonCustom from "./ButtonCustom";
import { ReactNode, useState } from "react";
import { Tooltip } from "@mui/material";

const tootipInfo = [
  {
    id: 1,
    title: "Meaning",
    body: "Betterment . Gain . rising . improvement.  rising . improvement. Betterment . Gain . rising . improvement.  rising . improvement. Betterment . Gain . rising . improvement.  rising . improvement. Betterment . Gain . rising . improvement.  rising . improvement. Betterment . Gain . rising . improvement.  rising . improvement. Betterment . Gain . rising . improvement.  rising . improvement. Betterment . Gain . rising . improvement.  rising . improvement. Betterment . Gain . rising . improvement.  rising ",
  },
  {
    id: 2,
    title: "Synonym",
    body: "Betterment . Gain . rising . improvement.  rising . improvement. Betterment . Gain . rising . improvement.  rising . improvement. Betterment . Gain . rising . improvement.  rising . improvement. Betterment",
  },
  {
    id: 3,
    title: "Opposite",
    body: "Betterment . Gain . rising . improvement.  rising . improvement. Betterment . Gain . rising .",
  },
];

interface TooltipCustomProps {
  children: ReactNode;
}

const TooltipCustom = ({ children }: TooltipCustomProps) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const [isBookMarked, setIsBookMarked] = useState(false);

  return (
    <Tooltip
      title={
        <section
          onMouseLeave={() => setIsShowMore(false)}
          className="w-full md:w-[21.625rem] text-white rounded-[1.25rem] bg-[#231F2F] shadow-md shadow-gray-500 px-2 py-3 h-min"
        >
          {/* Head Of Tooltip */}
          <div className="flex gap-2 flex-col sm:flex-row justify-between px-5">
            <div className="flex items-center gap-1">
              <h6 className="text-lg text-[#EAEAEA] font-semibold">
                miglioramento
              </h6>
              <p className="text-sm text-[#CBCBCB] font-medium">/ Noun </p>
            </div>

            <div className="flex items-center gap-3">
              <RiVolumeUpFill size={25} className="cursor-pointer" />
              <div onClick={() => setIsBookMarked((prev) => !prev)}>
                {isBookMarked ? (
                  <FaBookmark
                    size={22}
                    className="cursor-pointer text-[#6157C8]"
                  />
                ) : (
                  <FaRegBookmark size={22} className="cursor-pointer" />
                )}
              </div>
            </div>
          </div>

          {/* Less Content */}
          <p
            className={`text-[#CBCBCB] text-sm my-3 ps-5 pe-8 duration-500 ${
              !isShowMore ? "max-h-[100vh] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            Betterment . Gain . rising . improvement. rising . improvement.
          </p>

          {/* More Content */}
          <div
            className={`flex flex-col gap-4 duration-700 overflow-hidden ${
              isShowMore ? "max-h-[100vh] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {tootipInfo.map((info) => {
              return (
                <TooltipBox key={info.id} title={info.title} body={info.body} />
              );
            })}
          </div>

          {/* Buttons */}
          <div className="flex flex-col-reverse gap-3 sm:flex-row justify-between mt-4 px-5">
            <ButtonCustom
              type="outlined"
              text="Show More"
              handleClick={() => setIsShowMore(true)}
              classname={`bg-inherit rounded-full text-[#6157C8] flex px-4 items-center normal-case border border-[#6157C8] duration-500 hover:border-[#9a4dff] ${
                isShowMore ? "opacity-0" : "opacity-100"
              }`}
            />
            <div className="flex gap-1 items-center">
              <MdOutlineSignalCellularAlt
                size={20}
                className="text-[#6157C8]"
              />
              <p className="text-[#CBCBCB] text-sm font-medium">Mid level</p>
            </div>
          </div>
        </section>
      }
    >
      <div>{children}</div>
    </Tooltip>
  );
};

export default TooltipCustom;
