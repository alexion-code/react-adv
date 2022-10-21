import { CSSProperties, ReactElement } from "react";

export interface IProductCardProps {
  product: IProduct;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (args: IOnChangeArgs) => void;
  value?: number;
}

export interface IProductTitleProps {
  title?: string;
  className?: string;
  style?: CSSProperties;
}

export interface IProductImageProps {
  img?: string;
  className?: string;
  style?: CSSProperties;
}

export interface IProductButtonsProps {
  className?: string;
  style?: CSSProperties;
}

export interface IProductCardHOCProps {
  (props: IProductCardProps): JSX.Element;
  Title: (props: IProductTitleProps) => JSX.Element;
  Image: (props: IProductImageProps) => JSX.Element;
  Buttons: ({ className }: IProductButtonsProps) => JSX.Element;
}

export interface IProduct {
  id: string;
  title: string;
  img?: string;
}

export interface IProductContextProps {
  product: IProduct;
  counter: number;
  increaseBy: (value: number) => void;
}

export interface IOnChangeArgs {
  product: IProduct;
  count: number;
}

export interface IUseProductArgs {
  product: IProduct;
  onChange?: (args: IOnChangeArgs) => void;
  value?: number;
}

export interface IProductsInCart extends IProduct {
  count: number;
}