import { useState, useEffect } from "react";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiUrl = "jewelry.json";

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);

  const [hoveredProductId, setHoveredProductId] = useState(null);

  return (
    <div className="my-10">
      <h1 className="text-2xl font-bold pl-10 py-4">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded-xl border border-solid border-stone-950 p-2 text-left"
            onMouseEnter={() => setHoveredProductId(product.id)}
            onMouseLeave={() => setHoveredProductId(null)}
          >
            <img src={product.image} alt={product.name} className="rounded-xl" />
            <h2 className="font-bold my-2">{product.name}</h2>
            <p className="font-semibold mb-2">{product.description}</p>
            <p className="text-indigo-900 text-xl text-center">Price: ${product.price}</p>
            <button
              className={`bg-indigo-600 text-white px-4 py-2 mt-2 rounded-md hover:bg-indigo-800 transition-transform transform ${
                hoveredProductId === product.id ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
              }`}
              onClick={() => {
                // Handle adding the product to the cart here
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
