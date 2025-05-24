// import React, { useEffect, useState } from 'react';
// import ProductCard from './ProductCard';

// // const products = [
// //   {
// //     title: 'Hot Food',
// //     image:
// //       'https://ik.imagekit.io/ixthr16gh/Food-Website/Gourmet%20Smoked%20Salmon%20Sandwich.jpeg',
// //   },
// //   {
// //     title: 'Spicy Food',
// //     image:
// //       'https://ik.imagekit.io/ixthr16gh/Food-Website/Vibrant%20Noodle%20Bowl.jpeg',
// //   },
// //   {
// //     title: 'Dessert Food',
// //     image:
// //       'https://ik.imagekit.io/ixthr16gh/Food-Website/Artistic%20Dessert%20Presentation.jpeg',
// //   },
// // ];



// const ProductLayout = () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//       const fetchData = async () => {
//         const response = await fetch('https://dummyjson.com/products');
//         const data = await response.json();
//         setData(data.products);
//       };
//       fetchData();
//     }, []);
//   return (
//     <div className="2xl:container mx-auto">
//       <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//         {data.map((item, index) => {
//           return (
//             <ProductCard
//               key={index}
//              data={item}
//               title={item.title}
//               image={item.image}
//               price={item.price}
//               description={item.description}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ProductLayout;










import React from 'react'
import ProductCard from './ProductCard'

const ProductLayout = () => {
  return (
    <div>
       <ProductCard/>
    </div>
  )
}

export default ProductLayout