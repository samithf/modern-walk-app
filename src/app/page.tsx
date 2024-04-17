import { DisplayMode } from "@/types";
import { ProductList } from "@/components/ProductList";
import { CategoryList } from "@/components/CategoryList";

async function getFlashSaleProducts() {
  const res = await fetch("https://fakestoreapi.com/products?limit=6");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getCategories() {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const products = await getFlashSaleProducts();
  const categories = await getCategories();

  return (
    <section>
      <ProductList categoryName="Flash Sale" displayMode={DisplayMode.ROW} products={products} />
      <CategoryList categories={categories} />
    </section>
  );
}
