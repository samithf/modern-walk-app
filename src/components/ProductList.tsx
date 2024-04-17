import { DisplayMode, Product } from "@/types";
import { ProductCard } from "./ProductCard";

export interface ProductListByCategoryProps {
  categoryName: string;
  displayMode: DisplayMode;
  products: Product[];
}

export function ProductList({ categoryName, displayMode, products }: ProductListByCategoryProps) {
  return (
    <div className="mt-16">
      <h1 className="font-bold text-2xl my-4 capitalize">{categoryName}</h1>

      {displayMode === DisplayMode.ROW ? (
        <section className={"flex gap-2 overflow-x-auto no-scrollbar"}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      ) : null}

      {displayMode === DisplayMode.GRID ? (
        <section className="flex flex-wrap gap-2">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      ) : null}
    </div>
  );
}
