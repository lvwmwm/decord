// Module ID: 1604
// Function ID: 1605
// Dependencies: [19, 1488, 1584]
// Exports: useLinkTo

// Module 1604
import BaseNavigationContainer from "BaseNavigationContainer" /* 1488 */;
import _mod1584 from "module_1584" /* 1584 */;
import react from "react" /* 19 */;


export const useLinkTo = function useLinkTo() {
  const context = react.useContext(BaseNavigationContainer.NavigationContainerRefContext);
  let obj = _mod1584;
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
