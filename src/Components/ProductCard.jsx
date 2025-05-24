// import React, { useState, useEffect } from 'react';

// const ProductCard = (props) => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('https://dummyjson.com/products');
//       const data = await response.json();
//       setData(data.products);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="2xl:container mx-auto">
//       <div className="w-[90%] mx-auto">
//         <div className="card w-50 border rounded-2xl border-slate-400 p-2">
//           <img
//             src={props.image}
//             alt=""
//             className="w-50 h-50 rounded-2xl object-cover"
//           />
//           <div className="text-center">
//             <p className="p-3">{props["title"]}</p>
//             <button className="bg-red-400 px-4 py-2 rounded-lg text-white ">
//               Add to cart
//             </button>
//           </div>
//         </div>
//       </div>
//       {data.map((item) => (
//         <p key={item.id}>{item.title}</p>
//       ))}
//     </div>
//   );
// };

// export default ProductCard;

import React, { useEffect, useState } from 'react';

const ProductCard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    setLoading(true);
    try {
      const data = await fetch('https://fakestoreapi.com/products');
      const Result = await data.json();
      console.log(Result);
      setData(Result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center text-5xl">Loading...</div>;
  } else {
    return (
      <>
        {/* <h1 className='text-center text-5xl'>Hello KD</h1> */}
        {data.map((item) => {
          return <>
          <img src={item.image} alt="" />
          <p>{item.title}</p>
          </>;
        })}
      </>
    );
  }
};

export default ProductCard;
