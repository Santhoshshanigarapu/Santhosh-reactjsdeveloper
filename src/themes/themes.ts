export interface Theme {
  name: string;
  className: string;
  font: string;
  layout: "minimal" | "sidebar" | "cards";
}

export const themes: Theme[] = [
  {
    name: "Theme 1",
    className: "bg-white text-gray-800",
    font: "font-sans",
    layout: "minimal",
  },
  {
    name: "Theme 2",
    className: "bg-gray-900 text-white",
    font: "font-serif font-bold",
    layout: "sidebar",
  },
  {
    name: "Theme 3",
    className: "bg-gradient-to-r from-pink-200 via-yellow-200 to-green-200 text-gray-900",
    font: "font-pacifico",
    layout: "cards",
  },
];

export const DEFAULT_THEME = themes[0];
