// Module ID: 1558
// Function ID: 1559
// Name: NavigationIndependentTree
// Dependencies: [19, 21, 1532, 1535, 1559, 1533, 1510]
// Exports: NavigationIndependentTree

// Module 1558 (NavigationIndependentTree)
import Fragment from "Fragment" /* 21 */;
import _mod1532 from "module_1532" /* 1532 */;
import _mod1533 from "module_1533" /* 1533 */;
import react2 from "react" /* 1535 */;
import react3 from "react" /* 1559 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export const NavigationIndependentTree = function NavigationIndependentTree(children) {
  children = children.children;
  const Provider = _mod1532.NavigationRouteContext.Provider;
  const Provider2 = react2.NavigationContext.Provider;
  const Provider3 = react3.NavigationFocusedRouteStateContext.Provider;
  const Provider4 = _mod1533.IsFocusedContext.Provider;
  return <Provider value="Array">{0}</Provider>;
};
