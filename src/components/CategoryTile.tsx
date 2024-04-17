import { cardColors } from "@/app/constants";
import { Category } from "@/types";
import Link from "next/link";

export function CategoryTile({ category }: { category: Category }) {
  return (
    <Link
      href={`/${category}`}
      className="h-[300px] w-full flex justify-center items-center shadow-md rounded-2xl transition-transform transform hover:scale-105"
      style={{ background: cardColors[category] }}
    >
      <h1 className="font-bold text-3xl my-3 text-white capitalize">{category}</h1>
    </Link>
  );
}
