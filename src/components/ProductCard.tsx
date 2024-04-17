import { cardColors, categoryMapping } from "@/app/constants";
import { Product } from "@/types";
import Image from "next/image";

export interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="bg-white rounded-2xl shadow-md min-w-[250px] basis-[250px]">
      <div className="p-8">
        <div className="h-[50px] text-center">
          <h1 className="truncate">{product.title}</h1>
        </div>
        <div className="h-[200px] w-full relative">
          <Image alt={product.title} src={product.image} fill objectFit="contain" className="w-full h-full" />
        </div>
      </div>

      <div
        className={`rounded-2xl text-center p-4 h-[150px]`}
        style={{ background: cardColors[categoryMapping[product.category]] }}
      >
        <p className="text-lg font-bold mb-2">${product.price}</p>
        <p className="text-sm line-clamp-4">{product.description}</p>
      </div>
    </article>
  );
}
