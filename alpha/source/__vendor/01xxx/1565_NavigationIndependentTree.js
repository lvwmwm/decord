// Module ID: 1565
// Function ID: 1566
// Name: NavigationIndependentTree
// Dependencies: [19, 21, 1539, 1542, 1566, 1540, 1517]
// Exports: NavigationIndependentTree

// Module 1565 (NavigationIndependentTree)
import Fragment from "Fragment" /* 21 */;
import _mod1539 from "module_1539" /* 1539 */;
import _mod1540 from "module_1540" /* 1540 */;
import react2 from "react" /* 1542 */;
import react3 from "react" /* 1566 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export function NavigationIndependentTree(children) {
  children = children.children;
  const Provider = _mod1539.NavigationRouteContext.Provider;
  const Provider2 = react2.NavigationContext.Provider;
  const Provider3 = react3.NavigationFocusedRouteStateContext.Provider;
  const Provider4 = _mod1540.IsFocusedContext.Provider;
  return <Provider value="Array">{0}</Provider>;
}
