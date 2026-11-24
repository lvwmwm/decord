// Module ID: 1567
// Function ID: 1568
// Name: NavigationIndependentTree
// Dependencies: [19, 21, 1541, 1544, 1568, 1542, 1519]
// Exports: NavigationIndependentTree

// Module 1567 (NavigationIndependentTree)
import Fragment from "Fragment" /* 21 */;
import _mod1541 from "module_1541" /* 1541 */;
import _mod1542 from "module_1542" /* 1542 */;
import react2 from "react" /* 1544 */;
import react3 from "react" /* 1568 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export function NavigationIndependentTree(children) {
  children = children.children;
  const Provider = _mod1541.NavigationRouteContext.Provider;
  const Provider2 = react2.NavigationContext.Provider;
  const Provider3 = react3.NavigationFocusedRouteStateContext.Provider;
  const Provider4 = _mod1542.IsFocusedContext.Provider;
  return <Provider value="Array">{0}</Provider>;
}
