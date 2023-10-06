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

  return (
    <div className="my-10">
      <h1 className="text-2xl font-bold pl-10 py-4">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4">
        {products.map((product) => (
          <div key={product.id} className="border border-solid border-stone-950 p-2 text-left">
            <img src={product.image} alt={product.name} />
            <h2 className="font-bold mb-2">{product.name}</h2>
            <p className="font-semibold mb-2">{product.description}</p>
            <p className="text-indigo-900 text-xl text-center">Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
