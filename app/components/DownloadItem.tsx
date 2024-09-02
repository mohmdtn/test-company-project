import { FaStar } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";

interface DownloadItemProps {
  text: string;
  id: number;
  isFree: boolean;
  isSelected: number;
  clickHandle: () => void;
}

const DownloadItem = ({
  text,
  isSelected,
  isFree,
  id,
  clickHandle,
}: DownloadItemProps) => {
  return (
    <div
      className={`flex justify-between px-6 py-2 text-base text-white cursor-pointer duration-500 border-y ${
        isSelected === id
          ? "bg-[#380C9D] bg-opacity-45 border-[#380C9D]"
          : "border-[#2C2538]"
      }`}
      onClick={clickHandle}
    >
      <p>{text}</p>
      {isFree ? (
        <div className="flex items-center text-xs font-bold text-[#48C1E8]">
          (Free) <FaCheck size={17} />
        </div>
      ) : (
        <div
          className={`flex items-center gap-1 text-xs font-bold text-[#ED2481]`}
        >
          Premium
          <FaStar size={17} />
        </div>
      )}
    </div>
  );
};

export default DownloadItem;
