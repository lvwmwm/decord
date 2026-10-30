// Module ID: 1617
// Function ID: 1618
// Dependencies: [19, 1501, 1597]
// Exports: useLinkTo

// Module 1617
import BaseNavigationContainer from "BaseNavigationContainer" /* 1501 */;
import _mod1597 from "module_1597" /* 1597 */;
import react from "react" /* 19 */;


export function useLinkTo() {
  const context = react.useContext(BaseNavigationContainer.NavigationContainerRefContext);
  let obj = _mod1597;
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
