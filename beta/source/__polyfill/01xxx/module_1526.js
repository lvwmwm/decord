// Module ID: 1526
// Function ID: 1527
// Dependencies: [19, 21, 1527, 1529]
// Exports: NavigationProvider

// Module 1526
import Fragment from "Fragment" /* 21 */;
import _mod1527 from "module_1527" /* 1527 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;
let context = react.createContext(undefined);

export const NavigationRouteContext = context;
export const NamedRouteContextListContext = react.createContext(undefined);
export const NavigationProvider = function NavigationProvider(route) {
  let children;
  route = route.route;
  ({ navigation, children } = route);
  context = react.useContext(_mod1527.IsFocusedContext);
  let tmp5 = null != context;
  const context1 = react.useContext(_mod1527.FocusedRouteKeyContext);
  if (tmp5) {
    tmp5 = !context;
  }
  const Provider = context.Provider;
  const Provider2 = tmp(1529).NavigationContext.Provider;
  return <Provider value={route}>{null}</Provider>;
};
