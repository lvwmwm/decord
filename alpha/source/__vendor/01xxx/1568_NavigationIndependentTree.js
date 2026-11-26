// Module ID: 1568
// Function ID: 1569
// Name: NavigationIndependentTree
// Dependencies: [19, 21, 1542, 1545, 1569, 1543, 1520]
// Exports: NavigationIndependentTree

// Module 1568 (NavigationIndependentTree)
import Fragment from "Fragment" /* 21 */;
import _mod1542 from "module_1542" /* 1542 */;
import _mod1543 from "module_1543" /* 1543 */;
import react2 from "react" /* 1545 */;
import react3 from "react" /* 1569 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export function NavigationIndependentTree(children) {
  children = children.children;
  const Provider = _mod1542.NavigationRouteContext.Provider;
  const Provider2 = react2.NavigationContext.Provider;
  const Provider3 = react3.NavigationFocusedRouteStateContext.Provider;
  const Provider4 = _mod1543.IsFocusedContext.Provider;
  return <Provider value="Array">{0}</Provider>;
}
