// Module ID: 1618
// Function ID: 1619
// Dependencies: [19, 1502, 1598]
// Exports: useLinkTo

// Module 1618
import BaseNavigationContainer from "BaseNavigationContainer" /* 1502 */;
import _mod1598 from "module_1598" /* 1598 */;
import react from "react" /* 19 */;


export function useLinkTo() {
  const context = react.useContext(BaseNavigationContainer.NavigationContainerRefContext);
  let obj = _mod1598;
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
