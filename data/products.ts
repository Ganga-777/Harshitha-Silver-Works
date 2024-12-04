export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "silver-water-glass",
    name: "Silver Water Glass",
    price: 2999,
    image: "/images/glass.jpg",
    category: "Glasses",
    description: "Elegant silver water glass, perfect for formal dining and special occasions."
  },
  {
    id: "traditional-silver-plate",
    name: "Traditional Silver Plate",
    price: 4999,
    image: "/images/plate.jpg",
    category: "Plates",
    description: "Beautifully crafted traditional silver plate, ideal for serving and decoration."
  },
  {
    id: "designer-silver-bowl",
    name: "Designer Silver Bowl",
    price: 3999,
    image: "/images/set.jpg",
    category: "Bowls",
    description: "Stylish designer silver bowl, suitable for serving or as a centerpiece."
  },
  {
    id: "custom-silver-set",
    name: "Custom Silver Set",
    price: 9999,
    image: "/images/set1.jpg",
    category: "Sets",
    description: "Personalized silver set, tailored to your specific needs and preferences."
  },
  {
    id: "silver-serving-spoon",
    name: "Silver Serving Spoon",
    price: 1999,
    image: "/images/spoon.jpg",
    category: "Cutlery",
    description: "Elegant silver serving spoon, perfect for formal dinners and events."
  },
  {
    id: "decorative-silver-vase",
    name: "Decorative Silver Vase",
    price: 5999,
    image: "/images/vase.jpg",
    category: "Home Decor",
    description: "Stunning decorative silver vase, an exquisite addition to any home."
  },
  {
    id: "silver-tea-cup-set",
    name: "Silver Tea Cup Set",
    price: 7999,
    image: "/images/silver-tea-cup-set.jpg",
    category: "Sets",
    description: "Luxurious silver tea cup set, ideal for entertaining guests in style."
  },
  {
    id: "silver-photo-frame",
    name: "Silver Photo Frame",
    price: 3499,
    image: "/images/silver-photo-frame.jpg",
    category: "Home Decor",
    description: "Elegant silver photo frame, perfect for displaying cherished memories."
  }
];

