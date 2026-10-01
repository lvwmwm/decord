// Module ID: 1552
// Function ID: 1553
// Name: NavigationIndependentTree
// Dependencies: [19, 21, 1526, 1529, 1553, 1527, 1504]
// Exports: NavigationIndependentTree

// Module 1552 (NavigationIndependentTree)
import Fragment from "Fragment" /* 21 */;
import _mod1526 from "module_1526" /* 1526 */;
import _mod1527 from "module_1527" /* 1527 */;
import react2 from "react" /* 1529 */;
import react3 from "react" /* 1553 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export const NavigationIndependentTree = function NavigationIndependentTree(children) {
  children = children.children;
  const Provider = _mod1526.NavigationRouteContext.Provider;
  const Provider2 = react2.NavigationContext.Provider;
  const Provider3 = react3.NavigationFocusedRouteStateContext.Provider;
  const Provider4 = _mod1527.IsFocusedContext.Provider;
  return <Provider value="Array">{0}</Provider>;
};
