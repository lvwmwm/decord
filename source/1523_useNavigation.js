// Module ID: 1523
// Function ID: 1524
// Name: useNavigation
// Dependencies: [19, 1511, 1524]
// Exports: useNavigation

// Module 1523 (useNavigation)
import noop from "noop";

const require = arg1;

export const useNavigation = function useNavigation() {
  const context = React.useContext(require(1511) /* NavigationContainerRefContext */.NavigationContainerRefContext);
  let context1 = React.useContext(require(1524) /* NavigationContext */.NavigationContext);
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
