import { Category, Color } from "@/types";

export const categoryMapping: Record<string, Category> = {
  electronics: "electronics",
  jewelery: "jewelery",
  "men's clothing": "mens-clothing",
  "women's clothing": "womens-clothing",
};

export const cardColors: Record<Category, Color> = {
  electronics: Color.AQUAMARINE,
  jewelery: Color.BURLYWOOD,
  "mens-clothing": Color.CORAL,
  "womens-clothing": Color.CYAN,
};

export const categoryNames: Record<Category, string> = {
  electronics: "electronics",
  jewelery: "jewelery",
  "mens-clothing": "men's clothing",
  "womens-clothing": "women's clothing",
};
