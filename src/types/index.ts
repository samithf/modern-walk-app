export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export enum DisplayMode {
  GRID = "grid",
  ROW = "ROW",
}

export type Category = "electronics" | "jewelery" | "mens-clothing" | "womens-clothing";

export enum Color {
  AQUAMARINE = "Aquamarine",
  BURLYWOOD = "BurlyWood",
  CORAL = "Coral",
  CYAN = "Cyan",
}
