// Module ID: 1619
// Function ID: 1620
// Dependencies: [19, 1503, 1599]
// Exports: useLinkTo

// Module 1619
import BaseNavigationContainer from "BaseNavigationContainer" /* 1503 */;
import _mod1599 from "module_1599" /* 1599 */;
import react from "react" /* 19 */;


export function useLinkTo() {
  const context = react.useContext(BaseNavigationContainer.NavigationContainerRefContext);
  let obj = _mod1599;
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
