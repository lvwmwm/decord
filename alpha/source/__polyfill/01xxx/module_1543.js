// Module ID: 1543
// Function ID: 1544
// Dependencies: [19, 21, 1544, 1546]
// Exports: NavigationProvider

// Module 1543
import Fragment from "Fragment" /* 21 */;
import _mod1544 from "module_1544" /* 1544 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;
let context = react.createContext(undefined);

export const NavigationRouteContext = context;
export const NamedRouteContextListContext = react.createContext(undefined);
export const NavigationProvider = function NavigationProvider(route) {
  let children;
  route = route.route;
  ({ navigation, children } = route);
  context = react.useContext(_mod1544.IsFocusedContext);
  let tmp5 = null != context;
  const context1 = react.useContext(_mod1544.FocusedRouteKeyContext);
  if (tmp5) {
    tmp5 = !context;
  }
  const Provider = context.Provider;
  const Provider2 = tmp(1546).NavigationContext.Provider;
  return <Provider value={route}>{null}</Provider>;
};
