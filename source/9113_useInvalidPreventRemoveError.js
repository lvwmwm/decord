// Module ID: 9113
// Function ID: 71378
// Name: useInvalidPreventRemoveError
// Dependencies: []
// Exports: default

// Module 9113 (useInvalidPreventRemoveError)
let closure_2 = importAll(dependencyMap[0]);

export default function useInvalidPreventRemoveError(arg0) {
  const first = Object.keys(arg1(dependencyMap[1]).usePreventRemoveContext().preventedRoutes)[0];
  const arg1 = first;
  let prop;
  if (null != arg0[first]) {
    const options = tmp2.options;
    if (null != options) {
      prop = options.headerBackButtonMenuEnabled;
    }
  }
  const dependencyMap = prop;
  let name;
  if (null != arg0[first]) {
    const route = tmp2.route;
    if (null != route) {
      name = route.name;
    }
  }
  const React = name;
  const items = [first, prop, name];
  const effect = React.useEffect(() => {
    if (null != first) {
      if (prop) {
        const _HermesInternal = HermesInternal;
        const _console = console;
        console.error("The screen " + name + " uses 'usePreventRemove' hook alongside 'headerBackButtonMenuEnabled: true', which is not supported. \n\nConsider removing 'headerBackButtonMenuEnabled: true' from " + name + " screen to get rid of this error.");
      }
    }
  }, items);
};
