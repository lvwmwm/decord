// Module ID: 56
// Function ID: 1388
// Name: genModule
// Dependencies: [57, 44, 63, 50]

// Module 56 (genModule)
import _slicedToArray from "_slicedToArray";

let require = arg1;
function genModule(arg0, arg1) {
  let closure_0 = arg1;
  if (arg0) {
    const tmp3 = callback(arg0, 5);
    const first = tmp3[0];
    const require = tmp4;
    const dependencyMap = tmp3[3];
    callback = tmp3[4];
    let tmp8 = !first.startsWith("RCT");
    if (tmp8) {
      tmp8 = !first.startsWith("RK");
    }
    require(44) /* invariant */(tmp8, `Module name prefixes should've been stripped by the native side but wasn't for ${obj}`);
    if (!tmp3[1]) {
      if (!arr) {
        obj = { name: first };
        return obj;
      }
    }
    obj = {};
    if (tmp3[2]) {
      const item = arr.forEach((arg0, arg1) => {
        let flag = table;
        if (table) {
          flag = outer1_7(table, arg1);
        }
        if (!flag) {
          flag = false;
        }
        let flag2 = _slicedToArray;
        if (_slicedToArray) {
          flag2 = outer1_7(_slicedToArray, arg1);
          const tmp4 = _slicedToArray;
        }
        if (!flag2) {
          flag2 = false;
        }
        let tmp6 = !flag;
        if (!tmp6) {
          tmp6 = !flag2;
        }
        tmp4(table[1])(tmp6, "Cannot have a method that is both async and a sync hook");
        let str = "promise";
        if (!flag) {
          let str2 = "async";
          if (flag2) {
            str2 = "sync";
          }
          str = str2;
        }
        obj[arg0] = (function genMethod(closure_0, arg1, type) {
          let closure_1 = arg1;
          let closure_2 = type;
          let tmp = "promise" === type ? (function promiseMethodWrapper() {
            const length = arguments.length;
            const array = new Array(length);
            for (let num = 0; num < length; num = num + 1) {
              array[num] = arguments[num];
            }
            let error = new Error();
            return new Promise((closure_0) => {
              const error = arg1;
              error(table[2]).default.enqueueNativeCall(array, error, closure_0, () => { ... }, () => { ... });
            });
          }) : (function nonPromiseMethodWrapper() {
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
              callback(type[1])(tmp3, "Cannot have a non-function arg after a function arg.");
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
            if ("sync" === type) {
              const _default2 = callback(type[2]).default;
              return _default2.callNativeSyncHook(closure_0, callback, substr, tmp9, tmp8);
            } else {
              const _default = callback(type[2]).default;
              _default.enqueueNativeCall(closure_0, callback, substr, tmp9, tmp8);
            }
          });
          tmp.type = type;
          return tmp;
        })(closure_0, arg1, str);
      });
    }
    let _Object = Object;
    const merged = Object.assign(obj, tmp4);
    if (null == obj.getConstants) {
      obj.getConstants = () => {
        let frozen = closure_1;
        if (!closure_1) {
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
global.__fbGenNativeModule = genModule;
let obj = {};
let nativeModuleProxy = obj;
if (global.nativeModuleProxy) {
  nativeModuleProxy = global.nativeModuleProxy;
  obj = nativeModuleProxy;
} else {
  const __fbBatchedBridgeConfig = global.__fbBatchedBridgeConfig;
  require("invariant")(__fbBatchedBridgeConfig, "__fbBatchedBridgeConfig is not set, cannot invoke native modules");
  let closure_5 = require("defineLazyObjectProperty").default;
  let item = __fbBatchedBridgeConfig.remoteModuleConfig || [].forEach((arg0, arg1) => {
    let closure_0 = arg1;
    let tmp = genModule(arg0, arg1);
    const require = tmp;
    if (tmp) {
      if (tmp.module) {
        nativeModuleProxy[tmp.name] = tmp.module;
      } else {
        const obj = {
          get() {
                tmp = tmp(outer1_2[1])(closure_0.nativeRequireModuleConfig, "Can't lazily create module without nativeRequireModuleConfig");
                const tmp2 = outer1_6(closure_0.nativeRequireModuleConfig(tmp.name), closure_0);
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
  let arr = __fbBatchedBridgeConfig.remoteModuleConfig || [];
}

export default obj;
