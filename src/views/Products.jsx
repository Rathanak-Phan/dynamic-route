import React from "react";
import { Link } from "react-router-dom";

function Products({ cloths, Add }) {
  return (
    <div className="px-[15vw]">
      <h2 className="text-center my-[50px] text-3xl font-bold">
        List products
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {cloths.map((item) => (
          <div
            key={item.id}
            className="border-0 shadow-lg rounded-lg overflow-hidden"
          >
            <img src={item.image} alt="" />
            <div className="p-3">
              <h3 className="font-bold">{item.title}</h3>
              <div className="flex justify-between">
                <p className="text-red-500">$ {item.price}</p>
                <p>{item.rate} 🌟</p>
              </div>
            </div>
            <div className="p-5 flex justify-between">
              <Link to={`/products/${item.id}`}>
                <button className="border-0 px-5 py-3 bg-blue-300 rounded-md">
                  View details
                </button>
              </Link>
              <button onClick={() => Add(item)} className="border-0 px-5 py-3 bg-blue-300 rounded-md">
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
