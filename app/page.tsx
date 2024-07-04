import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Link href={"/products"}>products</Link>
      <br />
      <Link href={"/about"}>about</Link>
    </div>
  );
};

export default Home;
