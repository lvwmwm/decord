// Module ID: 1541
// Function ID: 1542
// Dependencies: [19, 21, 1542, 1544]
// Exports: NavigationProvider

// Module 1541
import Fragment from "Fragment" /* 21 */;
import _mod1542 from "module_1542" /* 1542 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;
let context = react.createContext(undefined);

export const NavigationRouteContext = context;
export const NamedRouteContextListContext = react.createContext(undefined);
export function NavigationProvider(route) {
  let children;
  route = route.route;
  ({ navigation, children } = route);
  context = react.useContext(_mod1542.IsFocusedContext);
  let tmp5 = null != context;
  const context1 = react.useContext(_mod1542.FocusedRouteKeyContext);
  if (tmp5) {
    tmp5 = !context;
  }
  const Provider = context.Provider;
  const Provider2 = tmp(1544).NavigationContext.Provider;
  return <Provider value={route}>{null}</Provider>;
}
