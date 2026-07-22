// Module ID: 52
// Function ID: 1366
// Name: _getConstants
// Dependencies: [77, 57, 44, 80, 80]

// Module 52 (_getConstants)
import merged from "_defineProperty";

function _getConstants() {
  if (!closure_7) {
    const constants = importDefault(dependencyMap[0]).getConstants();
    closure_7 = true;
    const obj = importDefault(dependencyMap[0]);
  }
  return constants;
}
function _getViewManagerConfig(arg0) {
  if (undefined === closure_4[arg0]) {
    if (importDefault(dependencyMap[0]).getConstantsForViewManager) {
      closure_4[tmp] = importDefault(dependencyMap[0]).getConstantsForViewManager(tmp);
      const obj = importDefault(dependencyMap[0]);
    }
  }
  while (true) {
    let tmp6 = closure_4;
    let tmp7 = arg0;
    let tmp8 = closure_4[tmp];
    if (tmp8) {
      return tmp8;
    } else {
      let tmp9 = global;
      if (global.nativeCallSyncHook) {
        let tmp10 = importDefault;
        let tmp11 = dependencyMap;
        let num = 0;
        if (importDefault(dependencyMap[0]).lazilyLoadView) {
          let tmp12 = set;
          let tmp13 = arg0;
          if (!set.has(tmp)) {
            let tmp14 = importDefault;
            let tmp15 = dependencyMap;
            let num2 = 1;
            let tmp16 = importDefault(dependencyMap[1]);
            let tmp17 = arg0;
            let tmp18 = tmp16(importDefault(dependencyMap[0]).lazilyLoadView)(tmp);
            let tmp19 = set;
            let addResult = set.add(tmp);
            let tmp21 = null;
            let tmp22 = null != tmp18 && null != tmp18.viewConfig;
            if (tmp22) {
              let tmp23 = _getConstants;
              let tmp24 = arg0;
              _getConstants()[tmp] = tmp18.viewConfig;
              let tmp25 = function lazifyViewManagerConfig(arg0) {
                const tmp = callback2()[arg0];
                closure_4[arg0] = tmp;
                if (tmp.Manager) {
                  let obj = callback(closure_3[2]);
                  obj = {
                    get() {
                        const tmp = obj(closure_3[3]).default[closure_0.Manager];
                        const obj = {};
                        if (tmp) {
                          const _Object = Object;
                          const keys = Object.keys(tmp);
                          const item = keys.forEach((arg0) => {
                            if ("function" !== typeof tmp[arg0]) {
                              obj[arg0] = tmp;
                            }
                          });
                        }
                        return obj;
                      }
                  };
                  obj.default(tmp, "Constants", obj);
                  obj = {
                    get() {
                        const tmp = obj(closure_3[3]).default[closure_0.Manager];
                        const obj = {};
                        let closure_2 = 0;
                        if (tmp) {
                          const _Object = Object;
                          const keys = Object.keys(tmp);
                          const item = keys.forEach((arg0) => {
                            if ("function" === typeof tmp[arg0]) {
                              let closure_2 = tmp3 + 1;
                              obj[arg0] = +closure_2;
                              const tmp = obj;
                            }
                          });
                        }
                        return obj;
                      }
                  };
                  callback(closure_3[2]).default(tmp, "Commands", obj);
                  const obj3 = callback(closure_3[2]);
                }
              }(tmp);
            }
          }
        }
        let tmp26 = closure_4;
        return closure_4[arg0];
      } else {
        return tmp8;
      }
    }
  }
}
let closure_4 = {};
const set = new Set();
let closure_6 = {};
let closure_7 = false;
require("_defineProperty").getViewManagerConfig = merged.getViewManagerConfig;
if (_getConstants().ViewManagerNames) {
  const ViewManagerNames = require("_defineProperty").getConstants().ViewManagerNames;
  const item = ViewManagerNames.forEach((defaultResult2) => {
    const global = defaultResult2;
    let obj = arg1(dependencyMap[2]);
    obj = {
      get() {
        return callback(closure_3[1])(callback(closure_3[0]).getConstantsForViewManager)(arg0);
      }
    };
    obj.default(importDefault(dependencyMap[0]), defaultResult2, obj);
  });
  const importDefaultResult = require("_defineProperty");
}
if (!global.nativeCallSyncHook) {
  const _Object = Object;
  const keys = Object.keys(_getConstants());
  const item1 = keys.forEach((defaultResult2) => {
    const global = defaultResult2;
    if (!_default.includes(defaultResult2)) {
      if (!closure_4[defaultResult2]) {
        closure_4[defaultResult2] = _getConstants()[defaultResult2];
      }
      let obj = arg1(dependencyMap[2]);
      obj = {
        get() {
            console.warn("Accessing view manager configs directly off UIManager via UIManager['" + arg0 + "'] is no longer supported. Use UIManager.getViewManagerConfig('" + arg0 + "') instead.");
            return viewManagerConfig.getViewManagerConfig(arg0);
          }
      };
      obj.default(importDefault(dependencyMap[0]), defaultResult2, obj);
    }
  });
}

export default merged;
