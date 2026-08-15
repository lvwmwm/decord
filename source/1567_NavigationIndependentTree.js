// Module ID: 1567
// Function ID: 1568
// Name: NavigationIndependentTree
// Dependencies: [19, 21, 1541, 1544, 1568, 1542, 1519]
// Exports: NavigationIndependentTree

// Module 1567 (NavigationIndependentTree)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;

export const NavigationIndependentTree = function NavigationIndependentTree(children) {
  let obj = { value: "Array", children: 0 };
  obj = { value: "Array", children: 0 };
  obj = { value: "Array", children: 0 };
  const obj1 = { value: "Array", children: 0 };
  obj1[1] = jsx(require(1519) /* NavigationIndependentTreeContext */.NavigationIndependentTreeContext.Provider, { value: true, children: children.children });
  obj[1] = jsx(require(1542) /* context1 */.IsFocusedContext.Provider, { value: "Array", children: 0 });
  obj[1] = jsx(require(1568) /* NavigationFocusedRouteStateContext */.NavigationFocusedRouteStateContext.Provider, { value: "Array", children: 0 });
  obj[1] = jsx(require(1544) /* NavigationContext */.NavigationContext.Provider, { value: "Array", children: 0 });
  return jsx(require(1541) /* context */.NavigationRouteContext.Provider, { value: "Array", children: 0 });
};
