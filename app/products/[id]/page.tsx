'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProductDetails = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const title = searchParams.get('title');
  const description = searchParams.get('description');
  const price = searchParams.get('price');

  const [product, setProduct] = useState({
    id,
    title,
    description,
    price,
  });

  useEffect(() => {
    if (!title || !description || !price) {
      const getProductData = async () => {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        const result = await response.data;
        setProduct(result);
      };

      getProductData();
    }
  }, [id, title, description, price]);

  if (!product.title) {
    return <div>Loading...</div>;
  }
  console.log(useSearchParams);

  return (
    <div className='h-[100vh] flex items-center justify-center flex-col font-bold'>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <Link href='/products'>Back</Link>
    </div>
  );
};

export default ProductDetails;
