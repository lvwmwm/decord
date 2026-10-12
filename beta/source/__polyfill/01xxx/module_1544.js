// Module ID: 1544
// Function ID: 1545
// Dependencies: [19, 21, 1545, 1547]
// Exports: NavigationProvider

// Module 1544
import Fragment from "Fragment" /* 21 */;
import _mod1545 from "module_1545" /* 1545 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;
let context = react.createContext(undefined);

export const NavigationRouteContext = context;
export const NamedRouteContextListContext = react.createContext(undefined);
export const NavigationProvider = function NavigationProvider(route) {
  let children;
  route = route.route;
  ({ navigation, children } = route);
  context = react.useContext(_mod1545.IsFocusedContext);
  let tmp5 = null != context;
  const context1 = react.useContext(_mod1545.FocusedRouteKeyContext);
  if (tmp5) {
    tmp5 = !context;
  }
  const Provider = context.Provider;
  const Provider2 = tmp(1547).NavigationContext.Provider;
  return <Provider value={route}>{null}</Provider>;
};
