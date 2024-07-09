import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { storeTypes } from "@/type";
import Image from "next/image";
import Link from "next/link";
import { getProductById } from "@/lib/actions/product.actions";
const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const product = await getProductById(params.id);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="h-[100vh] flex items-center justify-center flex-col font-bold">
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <Image src={product.image} alt={product.title} width={100} height={100} />
      <Link href="/products">Back</Link>
    </div>
  );
};

export default ProductDetails;
