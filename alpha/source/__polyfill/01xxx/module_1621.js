// Module ID: 1621
// Function ID: 1622
// Dependencies: [19, 1505, 1601]
// Exports: useLinkTo

// Module 1621
import BaseNavigationContainer from "BaseNavigationContainer" /* 1505 */;
import _mod1601 from "module_1601" /* 1601 */;
import react from "react" /* 19 */;


export const useLinkTo = function useLinkTo() {
  const context = react.useContext(BaseNavigationContainer.NavigationContainerRefContext);
  let obj = _mod1601;
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
