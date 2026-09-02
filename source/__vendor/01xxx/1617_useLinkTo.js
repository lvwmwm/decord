// Module ID: 1617
// Function ID: 1618
// Name: useLinkTo
// Dependencies: [19, 1501, 1597]
// Exports: useLinkTo

// Module 1617 (useLinkTo)
import closure_2 from "noop" /* 19 */;

const require = arg1;

export const useLinkTo = function useLinkTo() {
  context = React.useContext(context(buildAction[1]).NavigationContainerRefContext);
  buildAction = context(buildAction[2]).useBuildAction();
  const items = [buildAction, context];
  return React.useCallback((arg0) => {
    if (undefined === context) {
      const _Error = Error;
      error = new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
      throw error;
    } else {
      obj.dispatch(buildAction(arg0));
    }
    obj = context;
  }, items);
};
