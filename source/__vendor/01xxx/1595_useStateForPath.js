// Module ID: 1595
// Function ID: 1596
// Name: useStateForPath
// Dependencies: [19, 1567]
// Exports: useStateForPath

// Module 1595 (useStateForPath)
import NavigationFocusedRouteStateContext from "NavigationFocusedRouteStateContext" /* 1567 */;
import closure_2 from "noop" /* 19 */;

require = arg1;

export const useStateForPath = function useStateForPath() {
  return React.useContext(NavigationFocusedRouteStateContext.NavigationFocusedRouteStateContext);
};
