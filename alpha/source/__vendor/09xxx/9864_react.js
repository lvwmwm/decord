// Module ID: 9864
// Function ID: 9865
// Name: react
// Dependencies: [19, 1498]
// Exports: useInvalidPreventRemoveError

// Module 9864 (react)
import Link from "Link" /* 1498 */;
import react from "react" /* 19 */;


export function useInvalidPreventRemoveError(descriptors) {
  const obj = Link;
  const first = Object.keys(obj.usePreventRemoveContext().preventedRoutes)[0];
  let prop;
  if (descriptors[first] != null) {
    const options = tmp2.options;
    if (options != null) {
      prop = options.headerBackButtonMenuEnabled;
    }
  }
  let name;
  if (descriptors[first] != null) {
    const route = tmp2.route;
    if (route != null) {
      name = route.name;
    }
  }
  const items = [first, prop, name];
  const effect = react.useEffect(() => {
    if (null != first) {
      const tmp = prop;
      if (tmp) {
        const _HermesInternal = HermesInternal;
        const _console = console;
        console.error("The screen " + name + " uses 'usePreventRemove' hook alongside 'headerBackButtonMenuEnabled: true', which is not supported. \n\nConsider removing 'headerBackButtonMenuEnabled: true' from " + name + " screen to get rid of this error.");
      }
    }
  }, items);
}
