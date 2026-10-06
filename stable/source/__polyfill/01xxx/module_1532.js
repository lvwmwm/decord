// Module ID: 1532
// Function ID: 1533
// Dependencies: [19, 21, 1533, 1535]
// Exports: NavigationProvider

// Module 1532
import Fragment from "Fragment" /* 21 */;
import _mod1533 from "module_1533" /* 1533 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;
let context = react.createContext(undefined);

export const NavigationRouteContext = context;
export const NamedRouteContextListContext = react.createContext(undefined);
export const NavigationProvider = function NavigationProvider(route) {
  let children;
  route = route.route;
  ({ navigation, children } = route);
  context = react.useContext(_mod1533.IsFocusedContext);
  let tmp5 = null != context;
  const context1 = react.useContext(_mod1533.FocusedRouteKeyContext);
  if (tmp5) {
    tmp5 = !context;
  }
  const Provider = context.Provider;
  const Provider2 = tmp(1535).NavigationContext.Provider;
  return <Provider value={route}>{null}</Provider>;
};
