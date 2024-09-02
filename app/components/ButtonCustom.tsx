import Button from "@mui/material/Button";

interface ButtonCustomProps {
  text: string;
  type?: "contained" | "outlined" | "text";
  handleClick?: () => void;
  classname?: string;
}

const ButtonCustom = ({
  handleClick,
  text,
  type = "contained",
  classname = "",
}: ButtonCustomProps) => {
  return (
    <Button
      variant={type}
      onClick={handleClick}
      className={classname}
      size="large"
    >
      {text}
    </Button>
  );
};

export default ButtonCustom;
