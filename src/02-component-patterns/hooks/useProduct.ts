import { useLayoutEffect, useRef, useState } from "react";
import { IUseProductArgs } from "../interfaces/product.model";

export const useProduct = ({
  onChange,
  product,
  value = 0,
}: IUseProductArgs) => {

  const [counter, setCounter] = useState(value);

  const isControlled = useRef(!!onChange)

  const increaseBy = (value: number) => {
    if (isControlled.current) {
      return onChange!({count: value, product}) //la ! le indica que sabemos que onChange no es null | undefined
    }
    const newValue=Math.max(counter + value, 0)
    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  useLayoutEffect(() => {
    setCounter(value);
  }, [value]);

  return { counter, increaseBy };
};
