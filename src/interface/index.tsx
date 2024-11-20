import { ReactNode } from "react";

export interface HeaderProps {
  logo: string;
  userName: string;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  icon?: ReactNode; // New prop for the icon
  iconPosition?: "left" | "right";
}

export interface CardProps {
  children: React.ReactNode;
}
