import { getAllProducts } from "@/lib/actions/product.actions";
import { storeTypes } from "@/type";
import Link from "next/link";

const Products = async () => {
  const products = await getAllProducts();
  return (
    <div className="flex flex-col gap-10">
      {products.map((product: storeTypes) => (
        <Link key={product.id} href={`/products/${product.id}`} passHref>
          {product.title}
        </Link>
      ))}
    </div>
  );
};

export default Products;
