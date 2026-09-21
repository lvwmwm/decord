// Module ID: 1584
// Function ID: 1585
// Dependencies: [19, 1556]
// Exports: useStateForPath

// Module 1584
import NavigationFocusedRouteStateContext from "NavigationFocusedRouteStateContext" /* 1556 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useStateForPath = function useStateForPath() {
  return noop.useContext(NavigationFocusedRouteStateContext.NavigationFocusedRouteStateContext);
};
