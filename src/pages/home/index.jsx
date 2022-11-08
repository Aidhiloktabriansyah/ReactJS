import React, { useEffect, useState } from "react";
import { Banner, ProductCard } from "@components";
import api from "../../service/api";

const HomePage = () => {
  const [cities, setCities] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchCities = async () => {
    try {
      const url ='/api/v1/city';
      const response = await api.get(url);
      const payload = [...response.data.data.cities]
      setCities(payload);
      console.log(payload);
    } catch (error) {
      alert (error)
    }
  }

  const fetchProducts = async () => {
    try {
      const url ='/api/v1/products';
      const response = await api.get(url);
      const payload = [...response.data.data.products]
      setProducts(payload);
      console.log(payload);
    } catch (error) {
      alert (error)
    }
  }
   
  useEffect(() => {
    fetchCities();
    fetchProducts();
  }, []);



  return (
    <>
      <Banner />
      <h1 className="text-center">Cities</h1>
      <div className= "bg-primary text white text-center grid grid-cols-5 gap-4 m-5 rounded">
      {cities.map((item) => {
        return <span key={item.id}>{item.name}</span>
      })}
      </div>
      
      <h1 className="text-center">Products</h1>
      <div className=" text white text-center grid grid-cols-4 gap-4 m-5 rounded">
        {products.map ((item)=> {
          return (
            <ProductCard
            key={item.id}
            productName={item.name}
            productPrice={item.price}
            productCategory= {item?.categoryId.name}
            onClick = {item?.id}
            random ={Math.random()}>
            </ProductCard>
          )
        })}
      </div>
      </>
  );
};

export default HomePage;
