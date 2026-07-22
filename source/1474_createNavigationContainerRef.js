// Module ID: 1474
// Function ID: 17130
// Name: createNavigationContainerRef
// Dependencies: []
// Exports: default

// Module 1474 (createNavigationContainerRef)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);

export default function createNavigationContainerRef() {
  const items = [];
  const combined = items.concat(callback2(Object.keys(callback(removeListener[2]).CommonActions)), [null, "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array", "BigInt64Array", "BigUint64Array", "DataView", "QuestCardPreview"]);
  const callback = {};
  function removeListener(arg0, arg1) {
    let closure_0 = arg1;
    if (closure_0[arg0]) {
      closure_0[arg0] = closure_0[arg0].filter((arg0) => arg0 !== arg1);
      const arr = closure_0[arg0];
    }
  }
  let closure_2 = null;
  const obj = {};
  Object.defineProperty(obj, "current", {
    get: () => closure_2,
    set: (arg0) => {
      let closure_0 = arg0;
      let closure_2 = arg0;
      if (null != arg0) {
        const _Object = Object;
        const entries = Object.entries(closure_0);
        const item = entries.forEach((arg0) => {
          const tmp = arg0(arg0, 2);
          let closure_0 = tmp[0];
          const item = tmp[1].forEach((arg0) => {
            closure_0.addListener(closure_0, arg0);
          });
        });
      }
    }
  });
  obj.isReady = function isReady() {
    let isReadyResult = null != ready;
    if (isReadyResult) {
      isReadyResult = ready.isReady();
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
      if (null != closure_2) {
        return closure_2[closure_0].apply(closure_2, array);
      } else if ("addListener" === arg1) {
        const first = array[0];
        const arg1 = first;
        const tmp6 = array[1];
        let items = arg1[first];
        if (!items) {
          items = [];
        }
        arg1[first] = items;
        arg1[first].push(tmp6);
        return () => {
          tmp6(first, tmp6);
        };
      } else if ("removeListener" === tmp12) {
        tmp6(array[0], array[1]);
      } else {
        const _console = console;
        console.error("The 'navigation' object hasn't been initialized yet. This might happen if you don't have a navigator mounted, or if the navigator hasn't finished mounting. See https://reactnavigation.org/docs/navigating-without-navigation-prop#handling-initialization for more details.");
      }
    };
    return arg0;
  }, {}));
};
export const NOT_INITIALIZED_ERROR = "The 'navigation' object hasn't been initialized yet. This might happen if you don't have a navigator mounted, or if the navigator hasn't finished mounting. See https://reactnavigation.org/docs/navigating-without-navigation-prop#handling-initialization for more details.";
