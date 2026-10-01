// Module ID: 4705
// Function ID: 4706
// Name: ZustandStore
// Dependencies: [1243, 4706, 1248, 2]
// Exports: createZustandStore

// Module 4705 (ZustandStore)
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0, dependencyMap;

function defaultStatesAreEqual(arg0, arg1) {
  return arg0 === arg1;
}
const result = size.fileFinishedImporting("lib/ZustandStore.tsx");

export const createZustandStore = function createZustandStore(arg0) {
  let closure_1;
  _require = arg0;
  let tmp = require("module_1243");
  const createWithEqualityFn = tmp.createWithEqualityFn;
  let obj = require("combine");
  dependencyMap = createWithEqualityFn(obj.subscribeWithSelector((arg0, arg1, arg2) => {
    closure_0 = arg0;
    return closure_0((arg0) => {
      closure_0 = arg0;
      const obj = closure_0(closure_1_1[2]);
      return obj.batchUpdates(() => closure_0(closure_0));
    }, arg1, arg2);
  }));
  function setState(arg0) {
    closure_0 = arg0;
    const obj = closure_0(closure_1[2]);
    obj.batchUpdates(() => state.setState(closure_0));
  }
  const store = {
    useState(arg0) {
      let tmp = arg1;
      if (arg1 === undefined) {
        tmp = defaultStatesAreEqual;
      }
      return closure_1(arg0, tmp);
    },
    getState(fn) {
      const state = closure_1.getState();
      let tmp2 = state;
      if (null != fn) {
        tmp2 = fn(state);
      }
      return tmp2;
    },
    useField(blocklist) {
      closure_0 = blocklist;
      let tmp = arg1;
      if (arg1 === undefined) {
        tmp = defaultStatesAreEqual;
      }
      if (tmp === undefined) {
        tmp = defaultStatesAreEqual;
      }
      return closure_1((arg0) => arg0[closure_0], tmp);
    },
    getField(blocklist) {
      return closure_1.getState()[blocklist];
    },
    subscribe(arg0, arg1, arg2) {
      return closure_1.subscribe(arg0, arg1, arg2);
    },
    setState,
    resetState() {
      if (typeof setState === "function") {
        const initialState = state.getInitialState();
        const obj = initialState(state[2]);
        obj.batchUpdates(() => state.setState(closure_0));
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  };
  return store;
};
