// Module ID: 1526
// Function ID: 1527
// Name: useNavigation
// Dependencies: [19, 1514, 1527]
// Exports: useNavigation

// Module 1526 (useNavigation)
import NavigationContainerRefContext from "NavigationContainerRefContext" /* 1514 */;
import NavigationContext from "NavigationContext" /* 1527 */;
import closure_2 from "noop" /* 19 */;

require = arg1;

export const useNavigation = function useNavigation() {
  const context = React.useContext(NavigationContainerRefContext.NavigationContainerRefContext);
  let context1 = React.useContext(NavigationContext.NavigationContext);
  if (undefined === context1) {
    if (undefined === context) {
      const _Error = Error;
      error = new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
      throw error;
    }
  }
  if (context1 == null) {
    context1 = context;
  }
  return context1;
};
