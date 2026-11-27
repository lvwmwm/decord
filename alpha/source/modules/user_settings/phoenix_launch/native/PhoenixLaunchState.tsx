// Module ID: 17387
// Function ID: 17388
// Name: PhoenixLaunchState
// Dependencies: [5, 19, 3, 1258, 17388, 1263, 17389, 2]
// Exports: setShouldLaunchPhoenix, useIsPhoenixInstalled, useShouldLaunchPhoenix

// Module 17387 (PhoenixLaunchState)
import LoggerDefault from "Logger" /* 3 */;
import react_nativeDefault from "react-native" /* 17388 */;
import LaunchClient2 from "LaunchClient" /* 17389 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import module_1258 from "module_1258" /* 1258 */;
import size from "module_2" /* 2 */;

let c5, c6, closure_7;

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
          c7 = null;
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
            obj = { hasPhoenix, shouldLaunchPhoenix: closure_1_2 === closure_0(closure_2[6]).LaunchClient.PHOENIX };
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
function storeLaunchClient() {
  return obj(...arguments);
}
obj = function _storeLaunchClient() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let state;
    let tmp18Result;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
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
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp4;
            value = undefined;
            const tmp17 = closure_0;
            const tmp18 = importDefault;
            if (null == react_nativeDefault) {
              c4 = 3;
              return { value: false, done: true };
            } else {
              c3 = 1;
              c4 = 1;
              const obj4 = { value: tmp18Result.setClient(tmp17), done: false };
              tmp18Result = tmp18(dependencyMap[4]);
              return obj4;
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          const tmp6 = value;
          if (tmp6) {
            obj = closure_130_0(closure_130_2[5]);
            obj.batchUpdates(() => {
              obj = { shouldLaunchPhoenix: closure_1_0 === closure_0(closure_2[6]).LaunchClient.PHOENIX };
              return state.setState(obj);
            });
          }
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        }
      } catch (tmp13) {
        c4 = 3;
        throw tmp13;
      }
    }
  });
  return obj(...arguments);
};
obj = function _setShouldLaunchPhoenix() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
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
            let LEGACY;
            let closure_2 = tmp;
            let closure_1 = tmp4;
            c4 = 1;
            const LaunchClient = LaunchClient2.LaunchClient;
            const tmp13 = storeLaunchClient;
            if (closure_0) {
              LEGACY = LaunchClient.PHOENIX;
            } else {
              LEGACY = LaunchClient.LEGACY;
            }
            c5 = 2;
            c6 = 1;
            const obj4 = { value: tmp13(LEGACY), done: false };
            return obj4;
          }
        } else {
          if (1 === c5) {
            c4 = 0;
            closure_0 = closure_3;
            closure_130_5.error("Failed to set the launch client", closure_0);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c4 = 0;
          }
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp16) {
        closure_3 = tmp16;
        if (0 === c4) {
          c6 = 3;
          throw tmp16;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
let closure_5 = new LoggerDefault("PhoenixLaunchState");
const tmp2 = new LoggerDefault("PhoenixLaunchState");
let closure_6 = module_1258.createWithEqualityFn(() => ({ hasPhoenix: false, shouldLaunchPhoenix: false }));
let c7 = null;
const result = size.fileFinishedImporting("modules/user_settings/phoenix_launch/native/PhoenixLaunchState.tsx");

export function useIsPhoenixInstalled() {
  const effect = react.useEffect(() => {
    function readPhoenixLaunchState() {
      return closure_1_8(...arguments);
    }
    if (closure_7 == null) {
      closure_7 = readPhoenixLaunchState();
    }
  }, []);
  return closure_6((hasPhoenix) => hasPhoenix.hasPhoenix);
}
export function useShouldLaunchPhoenix() {
  return closure_6((shouldLaunchPhoenix) => shouldLaunchPhoenix.shouldLaunchPhoenix);
}
export { storeLaunchClient };
export function setShouldLaunchPhoenix() {
  return obj(...arguments);
}
