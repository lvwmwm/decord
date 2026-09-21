// Module ID: 1607
// Function ID: 1608
// Dependencies: [19, 1491, 1587]
// Exports: useLinkTo

// Module 1607
import BaseNavigationContainer from "BaseNavigationContainer" /* 1491 */;
import _mod1587 from "module_1587" /* 1587 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useLinkTo = function useLinkTo() {
  const context = noop.useContext(BaseNavigationContainer.NavigationContainerRefContext);
  const buildAction = _mod1587.useBuildAction();
  const items = [buildAction, context];
  return noop.useCallback((arg0) => {
    if (undefined === context) {
      const _Error = Error;
      const error = new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
      throw error;
    } else {
      obj.dispatch(buildAction(arg0));
    }
    obj = context;
  }, items);
};
