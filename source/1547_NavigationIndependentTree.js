// Module ID: 1547
// Function ID: 1548
// Name: NavigationIndependentTree
// Dependencies: [19, 21, 1521, 1524, 1548, 1522, 1499]
// Exports: NavigationIndependentTree

// Module 1547 (NavigationIndependentTree)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;

export const NavigationIndependentTree = function NavigationIndependentTree(children) {
  let obj = { value: "Array", children: 0 };
  obj = { value: "Array", children: 0 };
  obj = { value: "Array", children: 0 };
  const obj1 = { value: "Array", children: 0 };
  obj1[1] = jsx(require(1499) /* NavigationIndependentTreeContext */.NavigationIndependentTreeContext.Provider, { value: true, children: children.children });
  obj[1] = jsx(require(1522) /* context1 */.IsFocusedContext.Provider, { value: "Array", children: 0 });
  obj[1] = jsx(require(1548) /* NavigationFocusedRouteStateContext */.NavigationFocusedRouteStateContext.Provider, { value: "Array", children: 0 });
  obj[1] = jsx(require(1524) /* NavigationContext */.NavigationContext.Provider, { value: "Array", children: 0 });
  return jsx(require(1521) /* context */.NavigationRouteContext.Provider, { value: "Array", children: 0 });
};
