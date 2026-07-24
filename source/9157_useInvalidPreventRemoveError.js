// Module ID: 9157
// Function ID: 71641
// Name: useInvalidPreventRemoveError
// Dependencies: [31, 1457]
// Exports: default

// Module 9157 (useInvalidPreventRemoveError)
import result from "result";

const require = arg1;

export default function useInvalidPreventRemoveError(arg0) {
  first = Object.keys(first(prop[1]).usePreventRemoveContext().preventedRoutes)[0];
  prop = undefined;
  if (null != arg0[first]) {
    const options = tmp2.options;
    if (null != options) {
      prop = options.headerBackButtonMenuEnabled;
    }
  }
  let name;
  if (null != arg0[first]) {
    const route = tmp2.route;
    if (null != route) {
      name = route.name;
    }
  }
  const items = [first, prop, name];
  const effect = name.useEffect(() => {
    if (null != first) {
      if (prop) {
        const _HermesInternal = HermesInternal;
        const _console = console;
        console.error("The screen " + name + " uses 'usePreventRemove' hook alongside 'headerBackButtonMenuEnabled: true', which is not supported. \n\nConsider removing 'headerBackButtonMenuEnabled: true' from " + name + " screen to get rid of this error.");
      }
    }
  }, items);
};
