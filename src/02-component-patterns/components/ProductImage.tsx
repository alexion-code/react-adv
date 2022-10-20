import { useContext } from "react";
import noImage from "../assets/no-image.jpg";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export const ProductImage = ({ img = "" }) => {
    const { product } = useContext(ProductContext);
    let imgToShow: string;
    imgToShow = img ? img : product?.img ? product?.img : noImage;
  
    return (
      <img className={styles.productImg} src={imgToShow} alt="img2" />
    );
  };