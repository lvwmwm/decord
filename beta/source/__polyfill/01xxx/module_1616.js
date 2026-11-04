// Module ID: 1616
// Function ID: 1617
// Dependencies: [19, 1500, 1596]
// Exports: useLinkTo

// Module 1616
import BaseNavigationContainer from "BaseNavigationContainer" /* 1500 */;
import _mod1596 from "module_1596" /* 1596 */;
import react from "react" /* 19 */;


export function useLinkTo() {
  const context = react.useContext(BaseNavigationContainer.NavigationContainerRefContext);
  let obj = _mod1596;
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
