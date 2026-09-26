// Module ID: 1580
// Function ID: 1581
// Dependencies: [19, 1552]
// Exports: useStateForPath

// Module 1580
import NavigationFocusedRouteStateContext from "NavigationFocusedRouteStateContext" /* 1552 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useStateForPath = function useStateForPath() {
  return noop.useContext(NavigationFocusedRouteStateContext.NavigationFocusedRouteStateContext);
};
