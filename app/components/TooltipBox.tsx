interface TooltipProps {
  title: string;
  body: string;
}

const TooltipBox = ({ title, body }: TooltipProps) => {
  return (
    <div className="bg-[#ffffff1e] px-5 py-3 rounded-[1.25rem]">
      <h6 className="mb-2 text-[0.938rem] font-bold text-[#C6C5D0]">{title}</h6>
      <p className="text-sm text-[#C6C5D0]">{body}</p>
    </div>
  );
};

export default TooltipBox;
