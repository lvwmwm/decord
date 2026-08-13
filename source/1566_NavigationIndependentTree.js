// Module ID: 1566
// Function ID: 1567
// Name: NavigationIndependentTree
// Dependencies: [19, 21, 1540, 1543, 1567, 1541, 1518]
// Exports: NavigationIndependentTree

// Module 1566 (NavigationIndependentTree)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;

export const NavigationIndependentTree = function NavigationIndependentTree(children) {
  let obj = { value: "Array", children: 0 };
  obj = { value: "Array", children: 0 };
  obj = { value: "Array", children: 0 };
  const obj1 = { value: "Array", children: 0 };
  obj1[1] = jsx(require(1518) /* NavigationIndependentTreeContext */.NavigationIndependentTreeContext.Provider, { value: true, children: children.children });
  obj[1] = jsx(require(1541) /* context1 */.IsFocusedContext.Provider, { value: "Array", children: 0 });
  obj[1] = jsx(require(1567) /* NavigationFocusedRouteStateContext */.NavigationFocusedRouteStateContext.Provider, { value: "Array", children: 0 });
  obj[1] = jsx(require(1543) /* NavigationContext */.NavigationContext.Provider, { value: "Array", children: 0 });
  return jsx(require(1540) /* context */.NavigationRouteContext.Provider, { value: "Array", children: 0 });
};
