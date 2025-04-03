import { CartButton } from "@/components/shared/cart-button";
import { Container } from "@/components/shared/container";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { Title } from "@/components/shared/title";
import { Topbar } from "@/components/shared/top-bar";
import { prisma } from "@/prisma/prisma-client";
import React from "react";

export default async function Home() {
  const hasCart = true;
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          items: true,
        },
      },
    },
  });
  return (
    <>
      <Topbar
        categories={categories.filter(
          (category) => category.products.length > 0
        )}
      />

      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      categoryId={category.id}
                      items={category.products}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
