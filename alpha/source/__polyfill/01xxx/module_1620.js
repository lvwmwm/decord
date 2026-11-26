// Module ID: 1620
// Function ID: 1621
// Dependencies: [19, 1504, 1600]
// Exports: useLinkTo

// Module 1620
import BaseNavigationContainer from "BaseNavigationContainer" /* 1504 */;
import _mod1600 from "module_1600" /* 1600 */;
import react from "react" /* 19 */;


export function useLinkTo() {
  const context = react.useContext(BaseNavigationContainer.NavigationContainerRefContext);
  let obj = _mod1600;
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
}
