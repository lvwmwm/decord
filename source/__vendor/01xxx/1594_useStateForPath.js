// Module ID: 1594
// Function ID: 1595
// Name: useStateForPath
// Dependencies: [19, 1566]
// Exports: useStateForPath

// Module 1594 (useStateForPath)
import NavigationFocusedRouteStateContext from "NavigationFocusedRouteStateContext" /* 1566 */;
import closure_2 from "noop" /* 19 */;

require = arg1;

export const useStateForPath = function useStateForPath() {
  return React.useContext(NavigationFocusedRouteStateContext.NavigationFocusedRouteStateContext);
};
