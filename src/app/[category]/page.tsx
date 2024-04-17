import { ProductList } from "@/components/ProductList";
import { Category, DisplayMode } from "@/types";
import { categoryNames } from "../constants";

export default async function CategoryPage({ params }: { params: { category: Category } }) {
  async function getcategoryProducts(category: Category) {
    const res = await fetch(`https://fakestoreapi.com/products/category/${categoryNames[category]}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }

  const products = await getcategoryProducts(params.category);

  return (
    <ProductList categoryName={categoryNames[params.category]} displayMode={DisplayMode.GRID} products={products} />
  );
}
