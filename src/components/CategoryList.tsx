import { Category } from "@/types";
import { CategoryTile } from "./CategoryTile";
import { categoryMapping } from "@/app/constants";

export interface CategoryListProps {
  categories: Category[];
}

export function CategoryList({ categories }: CategoryListProps) {
  return (
    <div className="mt-16">
      <h1 className="font-bold text-2xl my-4">Categories</h1>
      <div className="grid grid-cols-2 gap-10">
        {categories.map((category) => (
          <CategoryTile category={categoryMapping[category]} key={category} />
        ))}
      </div>
    </div>
  );
}
