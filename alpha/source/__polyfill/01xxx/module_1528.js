// Module ID: 1528
// Function ID: 1529
// Dependencies: [19, 1516, 1529]
// Exports: useNavigation

// Module 1528
import NavigationContainerRefContext from "NavigationContainerRefContext" /* 1516 */;
import NavigationContext from "NavigationContext" /* 1529 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useNavigation = function useNavigation() {
  const context = noop.useContext(NavigationContainerRefContext.NavigationContainerRefContext);
  let context1 = noop.useContext(NavigationContext.NavigationContext);
  if (undefined === context1) {
    if (undefined === context) {
      const _Error = Error;
      const error = new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
      throw error;
    }
  }
  if (context1 == null) {
    context1 = context;
  }
  return context1;
};
