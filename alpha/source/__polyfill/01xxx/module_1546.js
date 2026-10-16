// Module ID: 1546
// Function ID: 1547
// Dependencies: [19, 21, 1547, 1549]
// Exports: NavigationProvider

// Module 1546
import Fragment from "Fragment" /* 21 */;
import _mod1547 from "module_1547" /* 1547 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;
let context = react.createContext(undefined);

export const NavigationRouteContext = context;
export const NamedRouteContextListContext = react.createContext(undefined);
export const NavigationProvider = function NavigationProvider(route) {
  let children;
  route = route.route;
  ({ navigation, children } = route);
  context = react.useContext(_mod1547.IsFocusedContext);
  let tmp5 = null != context;
  const context1 = react.useContext(_mod1547.FocusedRouteKeyContext);
  if (tmp5) {
    tmp5 = !context;
  }
  const Provider = context.Provider;
  const Provider2 = tmp(1549).NavigationContext.Provider;
  return <Provider value={route}>{null}</Provider>;
};
