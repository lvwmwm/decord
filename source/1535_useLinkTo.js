// Module ID: 1535
// Function ID: 17518
// Name: useLinkTo
// Dependencies: [31, 1459, 1534]
// Exports: default

// Module 1535 (useLinkTo)
import result from "result";

const require = arg1;

export default function useLinkTo() {
  context = React.useContext(context(1459).NavigationContainerRefContext);
  context1 = React.useContext(context1(1534));
  const items = [context1, context];
  return React.useCallback((path) => {
    if (undefined === context) {
      const _Error3 = Error;
      const error = new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
      throw error;
    } else if ("string" === typeof path) {
      if (path.startsWith("/")) {
        const options = context1.options;
        if (null != options) {
          if (options.getStateFromPath) {
            let stateFromPath = options.getStateFromPath(path, options.config);
          }
          if (stateFromPath) {
            let config;
            if (null != options) {
              config = options.config;
            }
            const actionFromState = context(outer1_2[1]).getActionFromState(stateFromPath, config);
            if (undefined !== actionFromState) {
              context.dispatch(actionFromState);
            } else {
              context.reset(stateFromPath);
            }
            const obj2 = context(outer1_2[1]);
          } else {
            const _Error2 = Error;
            const error1 = new Error("Failed to parse the path to a navigation state.");
            throw error1;
          }
        }
        let config1;
        if (null != options) {
          config1 = options.config;
        }
        stateFromPath = context(outer1_2[1]).getStateFromPath(path, config1);
        const obj = context(outer1_2[1]);
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error2 = new Error("The path must start with '/' (" + path + ").");
        throw error2;
      }
    } else {
      context.navigate(path.screen, path.params);
    }
  }, items);
};
