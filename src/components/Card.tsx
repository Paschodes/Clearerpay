import { CardProps } from "../interface";

const Card = ({ children }: CardProps) => (
  <div className="p-8 bg-white shadow rounded w-[50%]">
    <div>{children}</div>
  </div>
);

export default Card;
