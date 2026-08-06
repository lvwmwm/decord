// Module ID: 1521
// Function ID: 1522
// Name: context
// Dependencies: [19, 21, 1522, 1524]
// Exports: NavigationProvider

// Module 1521 (context)
import importAllResult from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let context = importAllResult.createContext(undefined);

export const NavigationRouteContext = context;
export const NamedRouteContextListContext = importAllResult.createContext(undefined);
export const NavigationProvider = function NavigationProvider(route) {
  let children;
  let navigation;
  route = route.route;
  ({ navigation, children } = route);
  const context = importAllResult.useContext(require(1522) /* context1 */.IsFocusedContext);
  let tmp5 = null != context;
  const context1 = importAllResult.useContext(require(1522) /* context1 */.FocusedRouteKeyContext);
  if (tmp5) {
    tmp5 = !context;
  }
  let tmp6 = !tmp5;
  if (!tmp5) {
    tmp6 = context1 === route.key;
  }
  let obj = { value: route, children: null };
  obj = { value: navigation, children: null };
  obj[1] = jsx(require(1522) /* context1 */.IsFocusedContext.Provider, { value: tmp6, children });
  obj[1] = jsx(require(1524) /* NavigationContext */.NavigationContext.Provider, { value: navigation, children: null });
  return <context.Provider value={navigation}>{null}</context.Provider>;
};
