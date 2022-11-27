import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal";
import Products from "./Products";

const Product = () => {
  const { _id } = useLoaderData();
  const { data: product = [], refetch } = useQuery({
    queryKey: ["product"],
    queryFn: () =>
      fetch("http://localhost:5000/product").then((res) => res.json()),
  });
  const [p, setProduct] = useState(null);

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="mx-4">
        <div className="mb-10">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
            {product.map((cat) =>
              _id === cat.id ? (
                <Products cat={cat} setProduct={setProduct}></Products>
              ) : (
                <div></div>
              )
            )}
          </div>
          {p && (
            <BookingModal
              p={p}
              setProduct={setProduct}
              refetch={refetch}
            ></BookingModal>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
