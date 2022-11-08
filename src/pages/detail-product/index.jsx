import React, { useEffect, useState } from "react";
import {useNavigate, useParams} from 'react-router-dom'
import api from "../../service/api";
import { Button } from "antd";

const DetailProduct = () => {
const [product,setProduct] = useState ([])
const params = useParams ();
const navigate= useNavigate ();
const fetchProduct = async (id) => {
    try {
      const url =`/api/v1/products/${id}`;
      const response = await api.get(url);
      const payload = {...response?.data?.data?.product };
      setProduct(payload);
      console.log(payload);
    } catch (error) {
      alert (error)
    }
  }
   
  useEffect(() => {
    if (params.id) {
      fetchProduct(params.id);
    }
  }, [params.id]);
  return (
    <>
    <div className="text-center">
    <div>DetailProduct</div>
    <p>Product Name : {product?.name}</p>
    <p>Product Price : {product?.price}</p>
    <p>Seller : {product?.ownerId?.name}</p>
    <Button className="m-4" type="primary" onClick={()=> navigate(-1)}>Pulang</Button>
    </div>
    </>
  )
}

export default DetailProduct