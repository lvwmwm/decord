// Module ID: 1581
// Function ID: 1582
// Dependencies: [19, 1553]
// Exports: useStateForPath

// Module 1581
import NavigationFocusedRouteStateContext from "NavigationFocusedRouteStateContext" /* 1553 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useStateForPath = function useStateForPath() {
  return noop.useContext(NavigationFocusedRouteStateContext.NavigationFocusedRouteStateContext);
};
