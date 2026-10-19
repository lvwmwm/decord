// Module ID: 1572
// Function ID: 1573
// Name: NavigationIndependentTree
// Dependencies: [19, 21, 1546, 1549, 1573, 1547, 1524]
// Exports: NavigationIndependentTree

// Module 1572 (NavigationIndependentTree)
import Fragment from "Fragment" /* 21 */;
import _mod1546 from "module_1546" /* 1546 */;
import _mod1547 from "module_1547" /* 1547 */;
import react2 from "react" /* 1549 */;
import react3 from "react" /* 1573 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export const NavigationIndependentTree = function NavigationIndependentTree(children) {
  children = children.children;
  const Provider = _mod1546.NavigationRouteContext.Provider;
  const Provider2 = react2.NavigationContext.Provider;
  const Provider3 = react3.NavigationFocusedRouteStateContext.Provider;
  const Provider4 = _mod1547.IsFocusedContext.Provider;
  return <Provider value="Array">{0}</Provider>;
};
