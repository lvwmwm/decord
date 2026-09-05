// Module ID: 1579
// Function ID: 1580
// Name: useStateForPath
// Dependencies: [19, 1551]
// Exports: useStateForPath

// Module 1579 (useStateForPath)
import NavigationFocusedRouteStateContext from "NavigationFocusedRouteStateContext" /* 1551 */;
import closure_2 from "noop" /* 19 */;

require = arg1;

export const useStateForPath = function useStateForPath() {
  return React.useContext(NavigationFocusedRouteStateContext.NavigationFocusedRouteStateContext);
};
