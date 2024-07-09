'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { storeTypes } from '@/type';
import Image from 'next/image';
import Link from 'next/link';
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<storeTypes>();

  useEffect(() => {
    if (id) {
      axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((response) => setProduct(response.data))
        .catch((error) => console.error('Error fetching product:', error));
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className='h-[100vh] flex items-center justify-center flex-col font-bold'>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <Image src={product.image} alt={product.title} width={100} height={100} />
      <Link href='/products'>Back</Link>
    </div>
  );
};

export default ProductDetails;
