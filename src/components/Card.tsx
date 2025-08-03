interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}

interface CardProps {
  product: Product;
  themeName: string;
}

const Card = ({ product, themeName }: CardProps) => {
  let cardClass = "";

  if (themeName === "Theme 1") {
    cardClass = "bg-white text-gray-800";
  } else if (themeName === "Theme 2") {
    cardClass = "bg-gray-800 text-white border border-gray-700";
  } else if (themeName === "Theme 3") {
    cardClass = "bg-yellow-100 text-pink-900 border border-pink-300 shadow-lg";
  }

  return (
    <div className={`rounded-lg p-4 max-w-sm w-full transition-transform duration-300 hover:scale-105 ${cardClass}`}>
      <img src={product.image} alt={product.title} className="h-48 w-full object-contain mb-4" />
      <h3 className="font-bold text-lg mb-2">{product.title}</h3>
      <p className="text-sm mb-2">{product.description.slice(0, 100)}...</p>
      <p className="font-semibold">${product.price}</p>
    </div>
  );
};

export default Card;
