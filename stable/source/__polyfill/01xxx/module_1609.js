// Module ID: 1609
// Function ID: 1610
// Dependencies: [19, 1493, 1589]
// Exports: useLinkTo

// Module 1609
import BaseNavigationContainer from "BaseNavigationContainer" /* 1493 */;
import _mod1589 from "module_1589" /* 1589 */;
import react from "react" /* 19 */;


export const useLinkTo = function useLinkTo() {
  const context = react.useContext(BaseNavigationContainer.NavigationContainerRefContext);
  let obj = _mod1589;
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
