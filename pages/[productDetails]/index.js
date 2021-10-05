import { useRouter } from 'next/dist/client/router';
import React from 'react';


const ProductDetails = (props) => {

    const router = useRouter();


    return (<h1>productDetails:{ router.query.id }</h1> );
}
 
export default ProductDetails;