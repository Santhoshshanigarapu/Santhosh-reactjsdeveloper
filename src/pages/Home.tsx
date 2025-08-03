import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useTheme } from "../contexts/ThemeContext";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const json = await res.json();

        // Limit to 12 products
        const limitedProducts = json.slice(0, 12);

        setProducts(limitedProducts);
      } catch (err) {
        console.error("Error fetching data", err);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">Shopping Zone🛒</h2>
      <p className="mb-6 max-w-3xl">
        Welcome to Shopping Zone – your one-stop destination for everything trendy and essential!
        From stylish shirts and comfy t-shirts to elegant ornaments that sparkle, we’ve got something
        for everyone. Discover the latest in mobile technology and bring home entertainment to life
        with our top-quality televisions. Shop smart, shop easy – only at Shopping Zone!
      </p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-6">
        Click Here
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p: any) => (
          <Card key={p.id} product={p} themeName={theme.name} />
        ))}
      </div>
    </div>
  );
};

export default Home;
