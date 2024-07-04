"use client";
import { useRouter } from "next/navigation";

const ProductPage = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("placing your order");
    router.push("/");
  };
  return (
    <div>
      ProductPage
      <br />
      <br />
      <br />
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
};

export default ProductPage;
