import { useRef, useState } from "react";
import './itembox.scss';
import '../contact/contact.scss';
import { motion, useInView } from "framer-motion";
import boxMirch from './Mirchi.jpeg'
import boxMirch2 from './Mirchi2.jpeg'
import Product from "./product";

const products = [{
  variantName:'Orange Fruit',
  variantSource:'https://images.pexels.com/photos/2135677/pexels-photo-2135677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
  variantName:'Maze Produced',
  variantSource:'https://images.pexels.com/photos/96715/pexels-photo-96715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    variantName:'Maze Produced',
    variantSource:'https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      variantName:'Maze Produced',
      variantSource:'https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        variantName:'Maze Produced',
        variantSource:'https://images.pexels.com/photos/96715/pexels-photo-96715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
            

];
const variants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };
export default function ItemBox() {
  
    const ref = useRef();
    const reactProducts = [];
    for(let i = 0; i < products.length; i++) {
      reactProducts.push(<Product variantName={products[i].variantName} variantSource={products[i].variantSource}/>);
    }
   return( <motion.div 
    ref={ref}
      style={{display:'flex',top:'100px', gap: '140px',margin: 'auto', height: "100%"}}
      variants={variants}
      initial="initial"
      whileInView="animate"
      
    >
    
    {reactProducts}


    </motion.div>);

}