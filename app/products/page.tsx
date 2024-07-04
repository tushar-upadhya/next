import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Products",
  },
};

const ProductsPpage = () => {
  const productId = 100;
  return (
    <div>
      ProductsPage
      <br />
      <Link href={"/"}>back</Link>
      <h1>product 1</h1>
      <h1>product 2</h1>
      <h1>
        <Link href={"products/2"}>product 3</Link>
      </h1>
      <h1>
        <Link href={`products/${productId}`}>product {productId}</Link>
      </h1>
    </div>
  );
};

export default ProductsPpage;
