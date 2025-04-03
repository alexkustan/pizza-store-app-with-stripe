"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { IProduct } from "@/@types/prisma";
import { Dialog } from "@/components/ui";
import { DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { ProductForm } from "../product-form";

interface Props {
  product: IProduct;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-0 bg-white overflow-hidden",
          "w-[1060px] max-w-[1060px] min-h-[500px]", // Default for tablets & desktops
          "max-sm:w-full max-sm:h-full max-sm:min-h-screen max-sm:max-w-full", // Full-screen ONLY on phones (< 640px)
          className
        )}
      >
        <ProductForm product={product} onSubmit={() => router.back()} />
      </DialogContent>
    </Dialog>
  );
};
