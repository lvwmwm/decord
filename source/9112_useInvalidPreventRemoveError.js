// Module ID: 9112
// Function ID: 71374
// Name: useInvalidPreventRemoveError
// Dependencies: []
// Exports: default

// Module 9112 (useInvalidPreventRemoveError)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importAll(dependencyMap[1]);

export default function useInvalidPreventRemoveError(routes) {
  const setNextDismissedKey = callback(React.useState(null), 2);
  const first = setNextDismissedKey[0];
  const callback = first;
  let tmp3 = null;
  if (first) {
    routes = routes.routes;
    const found = routes.find((key) => key.key === first);
    let name;
    if (null != found) {
      name = found.name;
    }
    tmp3 = name;
  }
  const React = tmp3;
  const items = [tmp3];
  const effect = React.useEffect(() => {
    if (tmp3) {
      const _HermesInternal = HermesInternal;
      const _console = console;
      console.error("The screen '" + tmp3 + "' was removed natively but didn't get removed from JS state. This can happen if the action was prevented in a 'beforeRemove' listener, which is not fully supported in native-stack.\n\nConsider using a 'usePreventRemove' hook with 'headerBackButtonMenuEnabled: false' to prevent users from natively going back multiple screens.");
    }
  }, items);
  return { setNextDismissedKey: setNextDismissedKey[1] };
};
