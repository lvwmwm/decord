// Module ID: 1610
// Function ID: 1611
// Dependencies: [19, 1494, 1590]
// Exports: useLinkTo

// Module 1610
import BaseNavigationContainer from "BaseNavigationContainer" /* 1494 */;
import _mod1590 from "module_1590" /* 1590 */;
import react from "react" /* 19 */;


export const useLinkTo = function useLinkTo() {
  const context = react.useContext(BaseNavigationContainer.NavigationContainerRefContext);
  let obj = _mod1590;
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
