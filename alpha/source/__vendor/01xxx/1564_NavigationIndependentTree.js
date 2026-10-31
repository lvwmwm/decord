// Module ID: 1564
// Function ID: 1565
// Name: NavigationIndependentTree
// Dependencies: [19, 21, 1538, 1541, 1565, 1539, 1516]
// Exports: NavigationIndependentTree

// Module 1564 (NavigationIndependentTree)
import Fragment from "Fragment" /* 21 */;
import _mod1538 from "module_1538" /* 1538 */;
import _mod1539 from "module_1539" /* 1539 */;
import react2 from "react" /* 1541 */;
import react3 from "react" /* 1565 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export function NavigationIndependentTree(children) {
  children = children.children;
  const Provider = _mod1538.NavigationRouteContext.Provider;
  const Provider2 = react2.NavigationContext.Provider;
  const Provider3 = react3.NavigationFocusedRouteStateContext.Provider;
  const Provider4 = _mod1539.IsFocusedContext.Provider;
  return <Provider value="Array">{null}</Provider>;
}
