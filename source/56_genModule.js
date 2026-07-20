// Module ID: 56
// Function ID: 1388
// Name: genModule
// Dependencies: [4294967295, 4294967295]

// Module 56 (genModule)
function genModule(arg0, arg1) {
  const global = arg1;
  if (arg0) {
    const tmp3 = callback(arg0, 5);
    const first = tmp3[0];
    arg1 = tmp4;
    let closure_2 = tmp3[3];
    const callback = tmp3[4];
    let tmp8 = !first.startsWith("RCT");
    if (tmp8) {
      tmp8 = !first.startsWith("RK");
    }
    arg1(closure_2[1])(tmp8, `Module name prefixes should've been stripped by the native side but wasn't for ${obj}`);
    if (!tmp3[1]) {
      if (!arr) {
        let obj = { name: first };
        return obj;
      }
    }
    obj = {};
    const nativeModuleProxy = obj;
    if (tmp3[2]) {
      const item = arr.forEach((arg0, arg1) => {
        let flag = closure_2;
        if (closure_2) {
          flag = callback(closure_2, arg1);
        }
        if (!flag) {
          flag = false;
        }
        let flag2 = closure_3;
        if (closure_3) {
          flag2 = callback(closure_3, arg1);
          const tmp4 = closure_3;
        }
        if (!flag2) {
          flag2 = false;
        }
        let tmp6 = !flag;
        if (!tmp6) {
          tmp6 = !flag2;
        }
        tmp4(closure_2[1])(tmp6, "Cannot have a method that is both async and a sync hook");
        let str = "promise";
        if (!flag) {
          let str2 = "async";
          if (flag2) {
            str2 = "sync";
          }
          str = str2;
        }
        obj[arg0] = function genMethod(arg0, arg1, type) {
          const tmp = "promise" === type ? function promiseMethodWrapper() {
            const length = arguments.length;
            const array = new Array(length);
            const arg0 = array;
            for (let num = 0; num < length; num = num + 1) {
              array[num] = arguments[num];
            }
            const error = new Error();
            const arg1 = error;
            return new Promise((array, error) => {
              error(closure_2[2]).default.enqueueNativeCall(array, error, array, () => { ... }, () => { ... });
            });
          } : function nonPromiseMethodWrapper() {
            const length = arguments.length;
            const arr = new Array(length);
            for (let num = 0; num < length; num = num + 1) {
              arr[num] = arguments[num];
            }
            let tmp = null;
            if (arr.length > 0) {
              tmp = arr[arr.length - 1];
            }
            let tmp2 = null;
            if (arr.length > 1) {
              tmp2 = arr[arr.length - 2];
            }
            if ("function" === typeof tmp2) {
              arg1(arg2[1])(tmp3, "Cannot have a non-function arg after a function arg.");
            }
            let tmp8 = null;
            if ("function" === typeof tmp) {
              tmp8 = tmp;
            }
            let tmp9 = null;
            if ("function" === typeof tmp2) {
              tmp9 = tmp2;
            }
            const substr = arr.slice(0, arr.length - (tmp3 + tmp4));
            if ("sync" === arg2) {
              const _default2 = arg1(arg2[2]).default;
              return _default2.callNativeSyncHook(arg0, arg1, substr, tmp9, tmp8);
            } else {
              const _default = arg1(arg2[2]).default;
              _default.enqueueNativeCall(arg0, arg1, substr, tmp9, tmp8);
            }
          };
          tmp.type = type;
          return tmp;
        }(arg1, arg1, str);
      });
    }
    const _Object = Object;
    const merged = Object.assign(obj, tmp4);
    if (null == obj.getConstants) {
      obj.getConstants = () => {
        let frozen = tmp4;
        if (!tmp4) {
          const _Object = Object;
          frozen = Object.freeze({});
        }
        return frozen;
      };
    } else {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.warn("Unable to define method 'getConstants()' on NativeModule '" + first + "'. NativeModule '" + first + "' already has a constant or method called 'getConstants'. Please remove it.");
    }
    const obj1 = { name: first, module: obj };
    return obj1;
  } else {
    return null;
  }
}
function arrayContains(arr) {
  return -1 !== arr.indexOf(arg1);
}
let closure_3 = importDefault(dependencyMap[0]);
global.__fbGenNativeModule = genModule;
let obj = {};
let nativeModuleProxy = obj;
if (global.nativeModuleProxy) {
  nativeModuleProxy = global.nativeModuleProxy;
  obj = nativeModuleProxy;
} else {
  const __fbBatchedBridgeConfig = global.__fbBatchedBridgeConfig;
  arg1(dependencyMap[1])(__fbBatchedBridgeConfig, "__fbBatchedBridgeConfig is not set, cannot invoke native modules");
  let closure_5 = arg1(dependencyMap[3]).default;
  const item = __fbBatchedBridgeConfig.remoteModuleConfig || [].forEach((arg0, arg1) => {
    const global = arg1;
    const tmp = genModule(arg0, arg1);
    arg1 = tmp;
    if (tmp) {
      if (tmp.module) {
        nativeModuleProxy[tmp.name] = tmp.module;
      } else {
        const obj = {
          get() {
                const tmp = tmp(closure_2[1])(arg1.nativeRequireModuleConfig, "Can't lazily create module without nativeRequireModuleConfig");
                const tmp2 = callback(arg1.nativeRequireModuleConfig(tmp.name), arg1);
                let _module = tmp2;
                if (tmp2) {
                  _module = tmp2.module;
                }
                return _module;
              }
        };
        callback2(nativeModuleProxy, tmp.name, obj);
      }
    }
  });
  const arr = __fbBatchedBridgeConfig.remoteModuleConfig || [];
}

export default obj;
