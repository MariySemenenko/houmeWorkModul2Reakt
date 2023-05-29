import React from "react";
import ContactUs from "./ContactUs/Contact"
import Search from "./Search/Search";

import products from '../data/products'


export class App extends React.Component {

  render() {

  return (
    
    <div
      
    >
      
      <ContactUs />
      <Search products={products}/>

    </div>



    
  )
}
}