import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { IUseProductArgs } from "../interfaces/product.model";

export const useProduct = ({
  onChange,
  product,
  value = 3,
  initialValues,
}: IUseProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  // const isControlled = useRef(!!onChange)
  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    // if (isControlled.current) {
    //   return onChange!({count: value, product}) //la ! le indica que sabemos que onChange no es null | undefined
    // }
    let newValue = Math.max(counter + value, 0);

    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }
    setCounter(newValue);
    // onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  /* si pones este useEffect antes que otros useEffect(()=>{},[value]) se ejecuta antes */
  useEffect(() => {
    // console.log("useEffect mount");

    isMounted.current = true;
  }, []);

  useLayoutEffect(() => {
    // console.log("useEffect value", value,isMounted.current,!isMounted.current);
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useLayoutEffect(() => {
    onChange && onChange({ count: counter, product });
  }, [counter]);

  return {
    counter,
    maxCount: initialValues?.maxCount,
    isMaxCountReached:
      !!initialValues?.maxCount && initialValues.maxCount === counter,

    increaseBy,
    reset,
  };
};
