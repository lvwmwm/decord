// Module ID: 1538
// Function ID: 1539
// Dependencies: [19, 21, 1539, 1541]
// Exports: NavigationProvider

// Module 1538
import Fragment from "Fragment" /* 21 */;
import _mod1539 from "module_1539" /* 1539 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;
let context = react.createContext(undefined);

export const NavigationRouteContext = context;
export const NamedRouteContextListContext = react.createContext(undefined);
export function NavigationProvider(route) {
  let children;
  route = route.route;
  ({ navigation, children } = route);
  context = react.useContext(_mod1539.IsFocusedContext);
  let tmp5 = null != context;
  const context1 = react.useContext(_mod1539.FocusedRouteKeyContext);
  if (tmp5) {
    tmp5 = !context;
  }
  const Provider = context.Provider;
  const Provider2 = tmp(1541).NavigationContext.Provider;
  return <Provider value={route}>{null}</Provider>;
}
