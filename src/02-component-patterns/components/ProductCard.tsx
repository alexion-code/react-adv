import { createContext,  useContext } from "react";
import { useProduct } from "../hooks/useProduct";
import { IProductContextProps, IProductCardProps } from "../interfaces/product.model";
import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ style, className, children, product }: IProductCardProps) => {
  const { counter, increaseBy } = useProduct();
  return (
    <Provider value={{ product, counter, increaseBy }}>
      <div style={style} className={`${styles.productCard} ${className}`}>{children}</div>
    </Provider>
  );
};
