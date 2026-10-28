// Module ID: 1569
// Function ID: 1570
// Name: NavigationIndependentTree
// Dependencies: [19, 21, 1543, 1546, 1570, 1544, 1521]
// Exports: NavigationIndependentTree

// Module 1569 (NavigationIndependentTree)
import Fragment from "Fragment" /* 21 */;
import _mod1543 from "module_1543" /* 1543 */;
import _mod1544 from "module_1544" /* 1544 */;
import react2 from "react" /* 1546 */;
import react3 from "react" /* 1570 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export const NavigationIndependentTree = function NavigationIndependentTree(children) {
  children = children.children;
  const Provider = _mod1543.NavigationRouteContext.Provider;
  const Provider2 = react2.NavigationContext.Provider;
  const Provider3 = react3.NavigationFocusedRouteStateContext.Provider;
  const Provider4 = _mod1544.IsFocusedContext.Provider;
  return <Provider value="Array">{0}</Provider>;
};
