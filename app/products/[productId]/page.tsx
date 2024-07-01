import { Metadata } from "next";

interface IProductIDPage {
  params: {
    productId: string;
  };
}

export const generateMetadata = async ({
  params,
}: IProductIDPage): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => resolve(`IPhone: ${params.productId}`), 1000); // Simulating asynchronous loading
  });
  return {
    title: `Product ID: ${title}`,
    description: `View detailed information about product ${params.productId}.`,
  };
};

const ProductIDPage = ({ params }: IProductIDPage) => {
  return <div>ProductIDPage {params.productId}</div>;
};

export default ProductIDPage;
