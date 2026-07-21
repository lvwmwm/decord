// Module ID: 1535
// Function ID: 17517
// Name: useLinkTo
// Dependencies: []
// Exports: default

// Module 1535 (useLinkTo)
let closure_3 = importAll(dependencyMap[0]);

export default function useLinkTo() {
  const context = React.useContext(arg1(dependencyMap[1]).NavigationContainerRefContext);
  const arg1 = context;
  const context1 = React.useContext(importDefault(dependencyMap[2]));
  const importDefault = context1;
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
            const actionFromState = context(closure_2[1]).getActionFromState(stateFromPath, config);
            if (undefined !== actionFromState) {
              context.dispatch(actionFromState);
            } else {
              context.reset(stateFromPath);
            }
            const obj2 = context(closure_2[1]);
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
        stateFromPath = context(closure_2[1]).getStateFromPath(path, config1);
        const obj = context(closure_2[1]);
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
