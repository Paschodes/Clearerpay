import { ButtonProps } from "../interface";

const Button = ({
  label,
  onClick,
  variant = "primary",
  icon,
  iconPosition = "left",
}: ButtonProps) => (
  <button
    onClick={onClick}
    className={`px-14 py-3 rounded flex items-center gap-1 ${
      variant === "primary"
        ? "bg-blue-500 text-white"
        : "bg-gray-200 text-gray-700"
    }`}
  >
    {icon && iconPosition === "left" && <span>{icon}</span>}
    <span>{label}</span>
  </button>
);

export default Button;
