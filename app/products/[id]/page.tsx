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

  console.log(useSearchParams);

  return (
    <div className='h-[100vh] flex items-center justify-center flex-col font-bold'>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{price}</p>
      <Link href='/products'>Back</Link>
    </div>
  );
};

export default ProductDetails;
