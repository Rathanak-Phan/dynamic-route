import React from "react";
import { FaTrash } from "react-icons/fa";

function Cart({ cart, Remove }) {
  if (!cart.length == 0){
    <div className="h-screen flex justify-center items-center">Empty cart</div>
  }

  return (
    <div className="flex justify-center">
      <div className="min-w-2xl">
        {cart.map((item) => (
          <div
            key={cart.item}
            className="flex justify-between items-center bg-gray-200 mt-2 p-3 rounded"
          >
            <div className="flex gap-5">
              <img src={item.image} alt="" className="h-16" />
              <p>{item.title}</p>
            </div>
            <div>
              <button className="bg-red-500 p-2 rounded text-white hover:bg-red-600">
                <FaTrash onClick={() => Remove(item.id)} className="text-lg" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
