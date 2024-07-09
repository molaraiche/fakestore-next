import Link from 'next/link';
import React from 'react';

const ProductDetails = ({ params }) => {
  return (
    <div className=' h-[100vh] flex items-center justify-center flex-col font-bold'>
      <h1> {params.id} </h1>
      <Link href={'/products'}> Back </Link>
    </div>
  );
};

export default ProductDetails;
