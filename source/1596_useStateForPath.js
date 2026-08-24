// Module ID: 1596
// Function ID: 1597
// Name: useStateForPath
// Dependencies: [19, 1568]
// Exports: useStateForPath

// Module 1596 (useStateForPath)
import NavigationFocusedRouteStateContext from "NavigationFocusedRouteStateContext" /* 1568 */;
import closure_2 from "noop" /* 19 */;

require = arg1;

export const useStateForPath = function useStateForPath() {
  return React.useContext(NavigationFocusedRouteStateContext.NavigationFocusedRouteStateContext);
};
