import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";

const Product = () => {
  const { _id } = useLoaderData();
  const { data: product = [] } = useQuery({
    queryKey: ["product"],
    queryFn: () =>
      fetch("http://localhost:5000/product").then((res) => res.json()),
  });
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="mx-4">
        <div className="mb-10">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
            {product.map((cat) =>
              _id === cat.id ? (
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={cat.url}
                      style={{ height: 250 }}
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{cat.name}</h2>
                    {/* <div className="card-actions">
                <Link to={`category/${cat._id}`}>
                  <button className="btn btn-primary">Explore</button>
                </Link>
              </div> */}
                  </div>
                </div>
              ) : (
                <div></div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
