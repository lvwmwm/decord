// Module ID: 1604
// Function ID: 1605
// Dependencies: [19, 1488, 1584]
// Exports: useLinkTo

// Module 1604
import BaseNavigationContainer from "BaseNavigationContainer" /* 1488 */;
import _mod1584 from "module_1584" /* 1584 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useLinkTo = function useLinkTo() {
  const context = noop.useContext(BaseNavigationContainer.NavigationContainerRefContext);
  const buildAction = _mod1584.useBuildAction();
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
