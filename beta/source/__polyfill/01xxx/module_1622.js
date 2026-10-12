// Module ID: 1622
// Function ID: 1623
// Dependencies: [19, 1506, 1602]
// Exports: useLinkTo

// Module 1622
import BaseNavigationContainer from "BaseNavigationContainer" /* 1506 */;
import _mod1602 from "module_1602" /* 1602 */;
import react from "react" /* 19 */;


export const useLinkTo = function useLinkTo() {
  const context = react.useContext(BaseNavigationContainer.NavigationContainerRefContext);
  let obj = _mod1602;
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
