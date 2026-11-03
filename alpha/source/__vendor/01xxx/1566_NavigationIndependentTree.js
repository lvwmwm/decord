// Module ID: 1566
// Function ID: 1567
// Name: NavigationIndependentTree
// Dependencies: [19, 21, 1540, 1543, 1567, 1541, 1518]
// Exports: NavigationIndependentTree

// Module 1566 (NavigationIndependentTree)
import Fragment from "Fragment" /* 21 */;
import _mod1540 from "module_1540" /* 1540 */;
import _mod1541 from "module_1541" /* 1541 */;
import react2 from "react" /* 1543 */;
import react3 from "react" /* 1567 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export function NavigationIndependentTree(children) {
  children = children.children;
  const Provider = _mod1540.NavigationRouteContext.Provider;
  const Provider2 = react2.NavigationContext.Provider;
  const Provider3 = react3.NavigationFocusedRouteStateContext.Provider;
  const Provider4 = _mod1541.IsFocusedContext.Provider;
  return <Provider value="Array">{0}</Provider>;
}
