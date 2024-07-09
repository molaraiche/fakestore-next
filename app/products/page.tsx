'use client';

import { storeTypes } from '@/type';
import axios from 'axios';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    const results = await response.data;
    setProducts(results);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='flex flex-col gap-10'>
      {products.map((product: storeTypes) => (
        <Link key={product.id} href={`/products/${product.id}`} passHref>
          {product.title}
        </Link>
      ))}
    </div>
  );
};

export default Products;
