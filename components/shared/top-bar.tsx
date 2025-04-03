import { cn } from "@/lib/utils";
import React from "react";
import { Categories } from "./categories";
import { SortPopup } from "./sort-popup";
import { Container } from "./container";
import { Category } from "@prisma/client";

interface Props {
  categories: Category[];
  className?: string;
}

export const Topbar: React.FC<Props> = ({ categories, className }) => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white shadow-lg shadow-black/5 z-10 md:py-3 lg:py-5 overflow-y-auto max-h-[calc(100vh-4rem)] sm:max-h-none",
        className
      )}
    >
      <Container className="flex items-center justify-between">
        <Categories items={categories} />
        <SortPopup className="hidden lg:flex" />
      </Container>
    </div>
  );
};
