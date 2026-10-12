// Module ID: 1570
// Function ID: 1571
// Name: NavigationIndependentTree
// Dependencies: [19, 21, 1544, 1547, 1571, 1545, 1522]
// Exports: NavigationIndependentTree

// Module 1570 (NavigationIndependentTree)
import Fragment from "Fragment" /* 21 */;
import _mod1544 from "module_1544" /* 1544 */;
import _mod1545 from "module_1545" /* 1545 */;
import react2 from "react" /* 1547 */;
import react3 from "react" /* 1571 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export const NavigationIndependentTree = function NavigationIndependentTree(children) {
  children = children.children;
  const Provider = _mod1544.NavigationRouteContext.Provider;
  const Provider2 = react2.NavigationContext.Provider;
  const Provider3 = react3.NavigationFocusedRouteStateContext.Provider;
  const Provider4 = _mod1545.IsFocusedContext.Provider;
  return <Provider value="Array">{0}</Provider>;
};
