// Module ID: 1555
// Function ID: 1556
// Name: NavigationIndependentTree
// Dependencies: [19, 21, 1529, 1532, 1556, 1530, 1507]
// Exports: NavigationIndependentTree

// Module 1555 (NavigationIndependentTree)
import NavigationIndependentTreeContext from "NavigationIndependentTreeContext" /* 1507 */;
import _mod1529 from "module_1529" /* 1529 */;
import context1 from "context1" /* 1530 */;
import NavigationContext from "NavigationContext" /* 1532 */;
import NavigationFocusedRouteStateContext from "NavigationFocusedRouteStateContext" /* 1556 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export const NavigationIndependentTree = function NavigationIndependentTree(children) {
  const obj = { value: "Array", children: 0 };
  const obj2 = { value: "Array", children: 0 };
  const obj3 = { value: "Array", children: 0 };
  const obj4 = { value: "Array", children: jsx(NavigationIndependentTreeContext.NavigationIndependentTreeContext.Provider, { value: true, children: children.children }) };
  obj3.children = jsx(context1.IsFocusedContext.Provider, { value: "Array", children: jsx(NavigationIndependentTreeContext.NavigationIndependentTreeContext.Provider, { value: true, children: children.children }) });
  obj2.children = jsx(NavigationFocusedRouteStateContext.NavigationFocusedRouteStateContext.Provider, { value: "Array", children: 0 });
  obj.children = jsx(NavigationContext.NavigationContext.Provider, { value: "Array", children: 0 });
  return jsx(_mod1529.NavigationRouteContext.Provider, { value: "Array", children: 0 });
};
