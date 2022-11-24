import React from "react";

const Category = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="mx-4">
        <div className="mb-10">
          <h1 className="text-lg font-semibold mt-6 mb-6">Category</h1>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://placeimg.com/400/225/arch"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
