// Module ID: 52
// Function ID: 1366
// Name: _getConstants
// Dependencies: [53, 48, 50, 56, 72]

// Module 52 (_getConstants)
import merged from "UIManager";

const require = arg1;
function _getConstants() {
  if (!c7) {
    const constants = importDefault(53).getConstants();
    c7 = true;
    const obj = importDefault(53);
  }
  return constants;
}
function _getViewManagerConfig(arg0) {
  if (undefined === dependencyMap[arg0]) {
    if (importDefault(53).getConstantsForViewManager) {
      dependencyMap[tmp] = importDefault(53).getConstantsForViewManager(tmp);
      let obj = importDefault(53);
    }
  }
  while (true) {
    let tmp6 = dependencyMap;
    let tmp7 = arg0;
    let tmp8 = dependencyMap[tmp];
    if (tmp8) {
      return tmp8;
    } else {
      let tmp9 = global;
      if (global.nativeCallSyncHook) {
        let tmp10 = importDefault;
        let tmp11 = dependencyMap;
        let num = 0;
        if (importDefault(53).lazilyLoadView) {
          let tmp12 = set;
          let tmp13 = arg0;
          if (!set.has(tmp)) {
            let tmp14 = importDefault;
            let tmp15 = dependencyMap;
            let num2 = 1;
            let tmp16 = importDefault(48);
            let tmp17 = arg0;
            let tmp18 = tmp16(importDefault(53).lazilyLoadView)(tmp);
            let tmp19 = set;
            let addResult = set.add(tmp);
            let tmp21 = null;
            let tmp22 = null != tmp18 && null != tmp18.viewConfig;
            if (tmp22) {
              let tmp23 = _getConstants;
              let tmp24 = arg0;
              _getConstants()[tmp] = tmp18.viewConfig;
              let tmp25 = (function lazifyViewManagerConfig(arg0) {
                let tmp = outer1_9()[arg0];
                let closure_0 = tmp;
                outer1_4[arg0] = tmp;
                if (tmp.Manager) {
                  let obj = outer1_1(outer1_3[2]);
                  obj = {
                    get() {
                        tmp = outer2_1(outer2_3[3]).default[tmp.Manager];
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
                        tmp = outer2_1(outer2_3[3]).default[tmp.Manager];
                        const obj = {};
                        let c2 = 0;
                        if (tmp) {
                          const _Object = Object;
                          const keys = Object.keys(tmp);
                          const item = keys.forEach((arg0) => {
                            if ("function" === typeof tmp[arg0]) {
                              let closure_2 = tmp3 + 1;
                              obj[arg0] = +closure_2;
                              tmp = obj;
                            }
                          });
                        }
                        return obj;
                      }
                  };
                  outer1_1(outer1_3[2]).default(tmp, "Commands", obj);
                  const obj3 = outer1_1(outer1_3[2]);
                }
              })(tmp);
            }
          }
        }
        let tmp26 = dependencyMap;
        return dependencyMap[arg0];
      } else {
        return tmp8;
      }
    }
  }
}
let closure_4 = {};
const set = new Set();
let closure_6 = {};
let c7 = false;
require("UIManager").getViewManagerConfig = merged.getViewManagerConfig;
if (_getConstants().ViewManagerNames) {
  const ViewManagerNames = require("UIManager").getConstants().ViewManagerNames;
  let item = ViewManagerNames.forEach((defaultResult2) => {
    let closure_0 = defaultResult2;
    let obj = require(50) /* defineLazyObjectProperty */;
    obj = {
      get() {
        return outer1_2(outer1_3[1])(outer1_2(outer1_3[0]).getConstantsForViewManager)(closure_0);
      }
    };
    obj.default(importDefault(53), defaultResult2, obj);
  });
  const importDefaultResult = require("UIManager");
}
if (!global.nativeCallSyncHook) {
  let _Object = Object;
  let keys = Object.keys(_getConstants());
  const item1 = keys.forEach((defaultResult2) => {
    let closure_0 = defaultResult2;
    if (!_default.includes(defaultResult2)) {
      if (!dependencyMap[defaultResult2]) {
        dependencyMap[defaultResult2] = _getConstants()[defaultResult2];
      }
      let obj = require(50) /* defineLazyObjectProperty */;
      obj = {
        get() {
            console.warn("Accessing view manager configs directly off UIManager via UIManager['" + closure_0 + "'] is no longer supported. Use UIManager.getViewManagerConfig('" + closure_0 + "') instead.");
            return outer1_8.getViewManagerConfig(closure_0);
          }
      };
      obj.default(importDefault(53), defaultResult2, obj);
    }
  });
}

export default merged;
