import React from "react";
import { FaTrash } from "react-icons/fa";

function Card({ card }) {
  return (
    <div className="flex justify-center">
      <div className="min-w-2xl">
        {card.map((item) => (
          <div
            key={card.item}
            className="flex justify-between items-center bg-gray-200 mt-2 p-3 rounded"
          >
            <div className="flex gap-5">
              <img src={item.image} alt="" className="h-16" />
              <p>{item.title}</p>
            </div>
            <div>
              <button className="bg-red-500 p-2 rounded text-white hover:bg-red-600">
                <FaTrash className="text-lg" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
