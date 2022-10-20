import { createContext,  useContext } from "react";
import { useProduct } from "../hooks/useProduct";
import { IProductContextProps, IProductCardProps } from "../interfaces/product.model";
import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: IProductCardProps) => {
  const { counter, increaseBy } = useProduct();
  return (
    <Provider value={{ product, counter, increaseBy }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
