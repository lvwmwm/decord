// Module ID: 1624
// Function ID: 1625
// Dependencies: [19, 1508, 1604]
// Exports: useLinkTo

// Module 1624
import BaseNavigationContainer from "BaseNavigationContainer" /* 1508 */;
import _mod1604 from "module_1604" /* 1604 */;
import react from "react" /* 19 */;


export const useLinkTo = function useLinkTo() {
  const context = react.useContext(BaseNavigationContainer.NavigationContainerRefContext);
  let obj = _mod1604;
  const buildAction = obj.useBuildAction();
  const items = [buildAction, context];
  return react.useCallback(function(arg0) {
    const obj = context;
    if (undefined === context) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
      throw error;
    } else {
      obj.dispatch(buildAction(arg0));
    }
  }, items);
};
