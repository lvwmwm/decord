// Module ID: 17180
// Function ID: 17181
// Name: PhoenixLaunchState
// Dependencies: [5, 19, 3, 1257, 17181, 1262, 2]
// Exports: setShouldLaunchPhoenix, useIsPhoenixInstalled, useShouldLaunchPhoenix

// Module 17180 (PhoenixLaunchState)
import LoggerDefault from "Logger" /* 3 */;
import react_nativeDefault from "react-native" /* 17181 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import module_1257 from "module_1257" /* 1257 */;
import size from "module_2" /* 2 */;

let c5, c6, closure_8;

let obj = function _readPhoenixLaunchState() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_1;
    let state;
    let tmp27Result;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        let closure_0;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = undefined;
            let hasPhoenix;
            let client;
            const tmp27 = importDefault;
            if (null != react_nativeDefault) {
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj4 = { value: tmp27Result.getState(), done: false };
              tmp27Result = tmp27(dependencyMap[4]);
              return obj4;
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          let closure_3 = closure_2;
          c8 = null;
          logger.error("Failed to read the launch client", closure_3);
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_0 = value;
          hasPhoenix = closure_0.hasPhoenix;
          client = closure_0.client;
          obj = closure_129_0(closure_129_2[5]);
          obj.batchUpdates(() => {
            obj = { hasPhoenix, shouldLaunchPhoenix: closure_1_2 === c5 };
            return state.setState(obj);
          });
          c3 = 0;
        }
        c5 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp20) {
        closure_2 = tmp20;
        if (0 === c3) {
          c5 = 3;
          throw tmp20;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _setShouldLaunchPhoenix() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0;
    let state;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c4;
      try {
        let closure_1;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            closure_1 = tmp4;
            const tmp26 = shouldLaunchPhoenix;
            const tmp27 = importDefault;
            if (null != react_nativeDefault) {
              c4 = 1;
              let str = "legacy";
              const setClient = tmp27(dependencyMap[4]).setClient;
              const tmp27Result = tmp27(dependencyMap[4]);
              if (tmp26) {
                str = phoenix;
              }
              c5 = 2;
              c6 = 1;
              const obj4 = { value: setClient(str), done: false };
              return obj4;
            }
          }
        } else if (1 === c5) {
          c4 = 0;
          closure_1 = closure_3;
          closure_130_6.error("Failed to set the launch client", closure_1);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          if (value) {
            obj = closure_130_0(closure_130_2[5]);
            obj.batchUpdates(() => {
              obj = { shouldLaunchPhoenix };
              return state.setState(obj);
            });
          }
          c4 = 0;
        }
        c6 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp19) {
        closure_3 = tmp19;
        if (0 === c4) {
          c6 = 3;
          throw tmp19;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const phoenix = "phoenix";
let closure_6 = new LoggerDefault("PhoenixLaunchState");
const tmp2 = new LoggerDefault("PhoenixLaunchState");
let closure_7 = module_1257.createWithEqualityFn(() => ({ hasPhoenix: false, shouldLaunchPhoenix: false }));
let c8 = null;
const result = size.fileFinishedImporting("modules/user_settings/phoenix_launch/native/PhoenixLaunchState.tsx");

export function useIsPhoenixInstalled() {
  const effect = react.useEffect(() => {
    function readPhoenixLaunchState() {
      return closure_1_9(...arguments);
    }
    if (closure_8 == null) {
      closure_8 = readPhoenixLaunchState();
    }
  }, []);
  return closure_7((hasPhoenix) => hasPhoenix.hasPhoenix);
}
export function useShouldLaunchPhoenix() {
  return closure_7((shouldLaunchPhoenix) => shouldLaunchPhoenix.shouldLaunchPhoenix);
}
export function setShouldLaunchPhoenix() {
  return obj(...arguments);
}
