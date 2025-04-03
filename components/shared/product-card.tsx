import Link from "next/link";
import React from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";
import { Ingredient } from "@prisma/client";

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  ingredients: Ingredient[];
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  imageUrl,
  ingredients,
}) => {
  return (
    <div>
      <Link href={`/product/${id}`} className="flex lg:flex-col">
        <div className="flex justify-center hover:translate-y-1 duration-300 w-32 h-32 lg:w-72 lg:h-72 xl:w-80 xl:h-80 flex-shrink-0">
          <img
            className="w-full h-full object-cover"
            src={imageUrl}
            alt={name}
          />
        </div>
        <div>
          <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

          <p className="text-sm text-gray-400">
            {ingredients.map((ingredient) => ingredient.name).join(", ")}
          </p>

          <div className="flex justify-between items-center mt-4">
            <span className="text-[20px] hidden lg:flex">
              <b>{price / 100} $</b>
            </span>
            <Button
              variant="secondary"
              className="text-base font-bold flex gap-2 lg:hidden "
            >
              <b>{price / 100} $</b>
            </Button>

            <Button
              variant="secondary"
              className="text-base font-bold hidden lg:flex"
            >
              <Plus size={20} className="mr-1" />
              add
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};
