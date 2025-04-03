import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";
import React from "react";

interface Props {
  imageUrl: string;
  name: string;
  price: number;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export const IngredientCart: React.FC<Props> = ({
  className,
  active,
  price,
  name,
  imageUrl,
  onClick,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center p-4 rounded-md text-center relative cursor-pointer shadow-md bg-white w-full h-[180px]",
        { "border border-primary": active },
        className
      )}
      onClick={onClick}
    >
      {active && (
        <CircleCheck className="absolute top-2 right-2 text-primary" />
      )}
      <img
        src={imageUrl}
        className="w-[90px] h-[90px] lg:w-[110px] lg:h-[110px] rounded-md object-cover"
        alt={name}
      />
      <span className="text-sm font-medium mt-2">{name}</span>
      <span className="font-bold text-lg">{price}$</span>
    </div>
  );
};
