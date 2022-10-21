import { useState } from "react";
import { IOnChangeArgs, IProductsInCart } from "../interfaces/product.model";

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{
        [key: string]: IProductsInCart;
      }>({});
    
      const onProductCountChange = ({ count, product }: IOnChangeArgs) => {
        setShoppingCart((prev) => {
          const productInCart: IProductsInCart = shoppingCart[product.id] || {
            ...product,
            count: 0,
          };
          if (Math.max(productInCart.count + count, 0) > 0) {
            productInCart.count += count;
            return { ...prev, [product.id]: productInCart };
          }
    
          // Borrar el producto
          const { [product.id]: toDelete, ...rest } = prev;
          return { ...rest };
        });
        /* OPCION 1 */
        // let newValue = {};
        // if (count === 0) {
        //   const { [product.id]: toDelete, ...rest } = shoppingCart;
        //   newValue = rest;
        // }
        // setShoppingCart((prev) =>
        //   count === 0
        //     ? { ...newValue }
        //     : { ...prev, [product.id]: { ...product, count } }
        // );
        /* OPCION 2 */
        // setShoppingCart((prev) => {
        //   if (count === 0) {
        //     const { [product.id]: toDelete, ...rest } = prev;
        //     return { ...rest };
        //   }
        //   return { ...prev, [product.id]: { ...product, count } };
        // });
      };

      return { shoppingCart, onProductCountChange };
}