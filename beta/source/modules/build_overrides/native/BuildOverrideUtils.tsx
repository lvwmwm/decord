// Module ID: 13462
// Function ID: 13463
// Name: build_overrides/BuildOverrideUtils
// Dependencies: [5, 11534, 1377, 13463, 13465, 13464, 6123, 1374, 2]
// Exports: refreshBuildOverride, setBuildOverrideFromLink, toggleOverride

// Module 13462 (build_overrides/BuildOverrideUtils)
import BuildOverrideUtils from "BuildOverrideUtils" /* 1374 */;
import ApplyBuildOverrideUtils from "ApplyBuildOverrideUtils" /* 13463 */;
import BundleUpdaterDefault from "BundleUpdater" /* 13464 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import BuildOverrideStore from "BuildOverrideStore" /* 11534 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import size from "module_2" /* 2 */;

let c3, c4;

function setBuildOverrideForBranch(id) {
  obj = { type: "branch", id };
  setBuildOverride(obj);
}
function setBuildOverride() {
  return obj(...arguments);
}
let obj = function _setBuildOverride() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_1;
    let obj6;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        let tmp4;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            let closure_2 = tmp;
            tmp4 = undefined;
            const obj7 = {};
            obj7[str] = closure_0;
            c3 = 1;
            c4 = 1;
            const obj8 = { value: obj6.applyStaffBuildOverride(obj7), done: false };
            obj6 = ApplyBuildOverrideUtils;
            return obj8;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          tmp4 = value;
          if (200 === tmp4.status) {
            obj = closure_130_0(closure_130_2[4]);
            const result = obj.recordDeviceBuildOverride(closure_0);
          }
          if (400 !== tmp4.status) {
            const obj4 = closure_130_1(closure_130_2[5]);
            const result1 = obj4.checkForUpdateAndReload();
          } else {
            const obj10 = { title: "Override Error", body: tmp4.body[closure_130_5], isDismissable: true };
            const obj2 = closure_130_1(closure_130_2[6]);
            obj2.show(obj10);
          }
          c4 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp28) {
        c4 = 3;
        throw tmp28;
      }
    }
  });
  return obj(...arguments);
};
function clearBuildOverride() {
  return obj(...arguments);
}
obj = function _clearBuildOverride() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0;
    let obj5;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        let tmp;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_1 = tmp4;
            tmp = undefined;
            c2 = 1;
            c3 = 1;
            const obj6 = { value: obj5.clearBuildOverride(), done: false };
            obj5 = ApplyBuildOverrideUtils;
            return obj6;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          tmp = value;
          if (400 !== tmp.status) {
            const obj3 = closure_129_1(closure_129_2[5]);
            const result = obj3.checkForUpdateAndReload();
          } else {
            const obj8 = { title: "Clear Override Error", body: tmp.body, isDismissable: true };
            obj = closure_129_1(closure_129_2[6]);
            obj.show(obj8);
          }
          c3 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp17) {
        c3 = 3;
        throw tmp17;
      }
    }
  });
  return obj(...arguments);
};
obj = function _toggleOverride() {
  let currentBuildOverride;
  obj = _asyncToGenerator(async (arg0, value) => {
    let tmp36Result;
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let c2 = 0;
            let closure_1 = tmp;
            closure_0 = undefined;
            const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
            let id;
            const obj9 = currentBuildOverride;
            if (overrides != null) {
              if (overrides[str] != null) {
                id = tmp17.id;
              }
            }
            const buildOverride = obj9.getBuildOverride(tmp34);
            const override = buildOverride.override;
            let id1;
            if (override != null) {
              const targetBuildOverride = override.targetBuildOverride;
              if (targetBuildOverride != null) {
                if (targetBuildOverride[str] != null) {
                  id1 = tmp22.id;
                }
              }
            }
            if (id === id1) {
              clearBuildOverride();
            } else if (null != buildOverride.payload) {
              const obj10 = BuildOverrideUtils;
              const tmp36 = require;
              if (obj10.isManualBuildOverrideLink(closure_0)) {
                if (null != id1) {
                  setBuildOverrideForBranch(id1);
                  c4 = 3;
                  return { value: "HermesInternal", done: "HermesInternal" };
                }
              }
              c3 = 1;
              c4 = 1;
              const obj5 = { value: tmp36Result.applyPublicBuildOverride(buildOverride.payload), done: false };
              tmp36Result = tmp36(dependencyMap[3]);
              return obj5;
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_0 = value;
          if (400 !== closure_0.status) {
            const obj3 = closure_130_1(closure_130_2[5]);
            const result = obj3.checkForUpdateAndReload();
          } else {
            const obj7 = { title: "Override Error", body: closure_0.body[closure_130_5], isDismissable: true };
            obj = closure_130_1(closure_130_2[6]);
            obj.show(obj7);
          }
        }
        c4 = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      } catch (tmp28) {
        c4 = 3;
        throw tmp28;
      }
    }
  });
  return obj(...arguments);
};
obj = function _setBuildOverrideFromLink() {
  let currentBuildOverride;
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj5;
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            closure_0 = undefined;
            const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
            let id;
            const obj9 = currentBuildOverride;
            const tmp31 = closure_0;
            if (overrides != null) {
              if (overrides[str] != null) {
                id = tmp17.id;
              }
            }
            const buildOverride = obj9.getBuildOverride(tmp31);
            const override = buildOverride.override;
            let id1;
            if (override != null) {
              const targetBuildOverride = override.targetBuildOverride;
              if (targetBuildOverride != null) {
                if (targetBuildOverride[str] != null) {
                  id1 = tmp22.id;
                }
              }
            }
            if (id !== id1) {
              if (null != buildOverride.payload) {
                c3 = 1;
                c4 = 1;
                const obj6 = { value: obj5.applyPublicBuildOverride(buildOverride.payload), done: false };
                obj5 = ApplyBuildOverrideUtils;
                return obj6;
              }
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_0 = value;
          if (400 !== closure_0.status) {
            const obj3 = closure_130_1(closure_130_2[5]);
            const result = obj3.checkForUpdateAndReload();
          } else {
            const obj8 = { title: "Override Error", body: closure_0.body[closure_130_5], isDismissable: true };
            obj = closure_130_1(closure_130_2[6]);
            obj.show(obj8);
          }
        }
        c4 = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      } catch (tmp25) {
        c4 = 3;
        throw tmp25;
      }
    }
  });
  return obj(...arguments);
};
let str = "discord_ios";
if (PlatformUtils.isAndroid()) {
  str = "discord_android";
}
let result = size.fileFinishedImporting("modules/build_overrides/native/BuildOverrideUtils.tsx");

export const DEVICE_FIELD = str;
export { setBuildOverrideForBranch };
export { setBuildOverride };
export function refreshBuildOverride() {
  obj = BundleUpdaterDefault;
  const result = obj.checkForUpdateAndReload();
}
export { clearBuildOverride };
export function toggleOverride() {
  return obj(...arguments);
}
export function setBuildOverrideFromLink() {
  return obj(...arguments);
}
