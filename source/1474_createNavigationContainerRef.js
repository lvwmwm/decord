// Module ID: 1474
// Function ID: 17132
// Name: createNavigationContainerRef
// Dependencies: [57, 65, 1461]
// Exports: default

// Module 1474 (createNavigationContainerRef)
import _slicedToArray from "_slicedToArray";
import _toConsumableArray from "_toConsumableArray";

const require = arg1;

export default function createNavigationContainerRef() {
  let items = [];
  const combined = items.concat(callback(Object.keys(_require(removeListener[2]).CommonActions)), ["addListener", "removeListener", "resetRoot", "dispatch", "isFocused", "canGoBack", "getRootState", "getState", "getParent", "getCurrentRoute", "getCurrentOptions"]);
  _require = {};
  removeListener = function removeListener(arg0, arg1) {
    const dependencyMap = arg1;
    if (dependencyMap[arg0]) {
      dependencyMap[arg0] = dependencyMap[arg0].filter((arg0) => arg0 !== closure_0);
      const arr = dependencyMap[arg0];
    }
  };
  let c2 = null;
  const obj = {};
  Object.defineProperty(obj, "current", {
    get: () => c2,
    set: (arg0) => {
      let closure_0 = arg0;
      let _slicedToArray = arg0;
      if (null != arg0) {
        const _Object = Object;
        const entries = Object.entries(closure_0);
        let item = entries.forEach((arg0) => {
          const tmp = callback(arg0, 2);
          let closure_0 = tmp[0];
          const item = tmp[1].forEach((arg0) => {
            closure_0.addListener(closure_0, arg0);
          });
        });
      }
    }
  });
  obj.isReady = function isReady() {
    let isReadyResult = null != _null;
    if (isReadyResult) {
      isReadyResult = _null.isReady();
    }
    return isReadyResult;
  };
  return Object.assign(obj, combined.reduce((arg0, arg1) => {
    let closure_0 = arg1;
    arg0[arg1] = () => {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      if (null != outer1_2) {
        return outer1_2[first].apply(outer1_2, array);
      } else if ("addListener" === first) {
        first = array[0];
        let closure_1 = tmp6;
        let items = dependencyMap[first];
        if (!items) {
          items = [];
        }
        dependencyMap[first] = items;
        dependencyMap[first].push(array[1]);
        return () => {
          outer2_1(first, closure_1);
        };
      } else if ("removeListener" === tmp12) {
        outer1_1(array[0], array[1]);
      } else {
        const _console = console;
        console.error("The 'navigation' object hasn't been initialized yet. This might happen if you don't have a navigator mounted, or if the navigator hasn't finished mounting. See https://reactnavigation.org/docs/navigating-without-navigation-prop#handling-initialization for more details.");
      }
    };
    return arg0;
  }, {}));
};
export const NOT_INITIALIZED_ERROR = "The 'navigation' object hasn't been initialized yet. This might happen if you don't have a navigator mounted, or if the navigator hasn't finished mounting. See https://reactnavigation.org/docs/navigating-without-navigation-prop#handling-initialization for more details.";
