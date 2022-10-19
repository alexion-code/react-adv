import { ComponentType, lazy, LazyExoticComponent } from "react";
import {NoLazy} from "../01-lazyload/pages/NoLazy";

const LazyLayout = lazy(
  () => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout')
);
const Lazy2 = lazy(
  () => import(/* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2')
);
const Lazy3 = lazy(
  () => import(/* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3')
);

type JSXComponent = () => JSX.Element;

interface IRoute {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent | LazyExoticComponent<ComponentType<any>>;
  name: string;
}

export const routes: IRoute[] = [
  {
    to: "/lazyload/",
    path: "/lazyload/*",
    Component: LazyLayout,
    name: "Lazy Layout",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "No Lazy",
  },
];
