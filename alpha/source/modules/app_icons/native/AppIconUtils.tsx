// Module ID: 14762
// Function ID: 14763
// Name: AppIconUtils
// Dependencies: [32, 5, 19, 9865, 1087, 1394, 3, 14763, 9866, 558, 576, 584, 5263, 1267, 5663, 1128, 7490, 1630, 2]
// Exports: isAppIconsSupported, navigateToAppIconSettings, setAppIcon

// Module 14762 (AppIconUtils)
import LoggerDefault from "Logger" /* 3 */;
import react2 from "react" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import PremiumConstants from "PremiumConstants" /* 1394 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1630 */;
import useMountEffectDefault from "useMountEffect" /* 5263 */;
import openUserSettings from "openUserSettings" /* 7490 */;
import react_nativeDefault from "react-native" /* 14763 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import AppIconConstants from "AppIconConstants" /* 9865 */;
import Constants from "Constants" /* 1087 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let APP_ICON_UPDATED, _require, c2, c5, closure_4, closure_5, dependencyMap, importDefault;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
function fetchCurrentAppIcon() {
  return obj(...arguments);
}
let obj = function _fetchCurrentAppIcon() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj4;
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
        return { value: "IconComponent", done: null };
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
            let closure_1 = tmp;
            closure_0 = tmp4;
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj5 = { value: obj4.getCurrentIcon(), done: false };
            obj4 = react_nativeDefault;
            return obj5;
          }
        } else if (1 === c4) {
          c3 = 0;
          closure_0 = closure_2;
          const _HermesInternal = HermesInternal;
          closure_129_13.warn("Error fetching current app icon: " + closure_0);
          c5 = 3;
          const obj6 = { value: closure_129_0(closure_129_2[8]).FreemiumAppIconIds.DEFAULT, done: true };
          return obj6;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          c3 = 0;
          c5 = 3;
          obj = { value: value.id, done: true };
          return obj;
        }
      } catch (tmp16) {
        closure_2 = tmp16;
        if (0 === c3) {
          c5 = 3;
          throw tmp16;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _setAppIcon() {
  obj = _asyncToGenerator(async (icon_id, user_premium_tier) => {
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    const iter = (async (arg0, value) => {
      let TIER_2;
      let intl;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let flag;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp;
              flag = undefined;
              let obj5 = closure_2;
              if (closure_2 === undefined) {
                obj5 = {};
              }
              flag = obj5.showErrorToast ?? true;
              c7 = 1;
              c8 = 1;
              return { value: "Reflect", done: true };
            }
          } else if (1 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              c6 = 1;
              const obj3 = closure_132_1(closure_132_2[7]);
              APP_ICON_UPDATED = obj3.setIcon(icon_id);
              c7 = 3;
              c8 = 1;
              return { value: APP_ICON_UPDATED, done: false };
            }
          } else if (2 === c7) {
            APP_ICON_UPDATED = closure_5;
            c6 = 0;
            let closure_3 = closure_5;
            const tmp11 = flag;
            if (tmp11) {
              APP_ICON_UPDATED = closure_132_1(closure_132_2[14]).open;
              const obj8 = { text: intl.string(closure_132_0(closure_132_2[15]).t["c76eo/"]) };
              closure_132_1(closure_132_2[14]);
              intl = closure_132_0(closure_132_2[15]).intl;
              APP_ICON_UPDATED("APP_ICON_LOGS_ERROR_MESSAGE_GENERIC", obj8);
            }
            APP_ICON_UPDATED = closure_132_13.warn;
            const _HermesInternal = HermesInternal;
            APP_ICON_UPDATED("Error changing users app icon: " + closure_3);
            c8 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            return { value, done: true };
          } else {
            const obj9 = closure_132_1(closure_132_2[11]);
            obj9.dispatch({ type: "APP_ICON_UPDATED" });
            APP_ICON_UPDATED = closure_132_10.APP_ICON_UPDATED;
            const obj10 = { icon_id, user_premium_tier, icon_premium_tier: TIER_2 };
            const track = closure_132_1(closure_132_2[13]).track;
            TIER_2 = null;
            closure_132_1(closure_132_2[13]);
            if (closure_132_7(icon_id).isPremium) {
              TIER_2 = closure_132_12.TIER_2;
            }
            track(APP_ICON_UPDATED, obj10);
            c6 = 0;
            c8 = 3;
            return { value: true, done: true };
          }
        } catch (tmp32) {
          closure_5 = tmp32;
          if (0 === c6) {
            c8 = 3;
            throw tmp32;
          } else {
            c7 = 2;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
({ getDefaultIcon: metroRequire, getIconById: metroImportDefault, getLimitedAlternateIcons: metroImportAll, getOfficialAlternateIcons: c9 } = AppIconConstants);
({ AnalyticEvents: c10, UserSettingsSections: unpackModuleId } = Constants);
const PremiumTypes = PremiumConstants.PremiumTypes;
const tmp4 = new LoggerDefault("AppIconUtils");
let closure_13 = tmp4;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCurrentAppIcon() {
  let closure_0;
  let first;
  let first1;
  let tmp7;
  let tmp = dependencyMap;
  obj = require("react");
  const cResult = obj.c(2);
  [first, _require] = react.useState(require("AppIconTypes").FreemiumAppIconIds.DEFAULT);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    _require = _asyncToGenerator(async (arg0, value) => {
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
          return { value: "IconComponent", done: null };
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_1 = tmp4;
              tmp = undefined;
              c2 = 1;
              c3 = 1;
              const obj4 = { value: fetchCurrentAppIcon(), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            tmp = value;
            tmp(tmp);
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp11) {
          c3 = 3;
          throw tmp11;
        }
      }
    });
    function t0() {
      return closure_0(...arguments);
    }
    cResult[0] = t0;
    first1 = t0;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      first1();
      obj = DispatcherDefault;
      const subscription = obj.subscribe("APP_ICON_UPDATED", first1);
      return () => {
        obj = first1(dependencyMap[11]);
        obj.unsubscribe("APP_ICON_UPDATED", closure_1_1);
      };
    };
    cResult[1] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  first1(5263)(tmp7);
  return first;
}) : (function useCurrentAppIcon() {
  let first;
  [first, _require] = react.useState(require("AppIconTypes").FreemiumAppIconIds.DEFAULT);
  importDefault = react.useCallback(_asyncToGenerator(async (arg0, value) => {
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
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp4;
            closure_0 = undefined;
            c2 = 1;
            c3 = 1;
            const obj4 = { value: fetchCurrentAppIcon(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_0 = value;
          closure_129_0(closure_0);
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp11) {
        c3 = 3;
        throw tmp11;
      }
    }
  }), []);
  const tmp3 = useMountEffectDefault(() => {
    closure_1();
    obj = DispatcherDefault;
    const subscription = obj.subscribe("APP_ICON_UPDATED", closure_1);
    return () => {
      obj = closure_1(dependencyMap[11]);
      obj.unsubscribe("APP_ICON_UPDATED", closure_1_1);
    };
  });
  return first;
});
let closure_16 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAppIcons() {
  let first;
  let require;
  let tmp10;
  let tmp11;
  let tmp13;
  let tmp7;
  let tmp8;
  const tmp = dependencyMap;
  obj = react2;
  const cResult = obj.c(8);
  const tmp3 = closure_16();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  let obj2 = react;
  const tmp5 = _slicedToArray;
  [tmp7, require] = _slicedToArray(react.useState(first), 2);
  const tmp6 = _slicedToArray(react.useState(first), 2);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [];
    cResult[1] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[1];
  }
  [tmp10, importDefault] = tmp5(obj2.useState(tmp8), 2);
  tmp5(obj2.useState(tmp8), 2);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp12 = _asyncToGenerator;
    let closure_0 = _asyncToGenerator(async (arg0, value) => {
      let intl;
      let obj3;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c4;
        let closure_3;
        try {
          let closure_1;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_0 = undefined;
              closure_1 = undefined;
              closure_2 = undefined;
              closure_3 = undefined;
              c4 = 1;
              c5 = 2;
              c6 = 1;
              const obj5 = { value: obj3.getAvailableIcons(), done: false };
              obj3 = require("react-native");
              return obj5;
            }
          } else {
            if (1 === c5) {
              c4 = 0;
              const obj6 = { text: intl.string(closure_0(closure_2_2[15]).t["c76eo/"]) };
              const open = require("ToastActionCreators").open;
              const tmp12 = require("ToastActionCreators");
              intl = closure_0(closure_2_2[15]).intl;
              open("APP_ICON_LOGS_ERROR_MESSAGE_GENERIC", obj6);
              const _HermesInternal = HermesInternal;
              logger.warn("Error fetching available app icons: " + closure_3);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              value.map((id) => id.id);
              const arr = closure_2_9();
              closure_1 = arr.filter((id) => closure_1_0.includes(id.id));
              const arr2 = closure_2_8();
              closure_2 = arr2.filter((id) => closure_1_0.includes(id.id));
              closure_1(closure_2);
              closure_0 = 0;
              const items = [closure_2_6()];
              const sum = closure_0 + 1;
              closure_0 = HermesBuiltin.arraySpread(items, closure_1, sum);
              closure_0(items);
              c4 = 0;
            }
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp22) {
          closure_3 = tmp22;
          if (0 === c4) {
            c6 = 3;
            throw tmp22;
          } else {
            c5 = 1;
          }
        }
      }
    });
    function t2() {
      return closure_0(...arguments);
    }
    cResult[2] = t2;
    tmp11 = t2;
  } else {
    tmp11 = cResult[2];
  }
  dependencyMap = tmp11;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor() {
        closure_2();
        obj = DispatcherDefault;
        const subscription = obj.subscribe("APP_ICON_UPDATED", closure_2);
        return () => {
          obj = require("Dispatcher");
          obj.unsubscribe("APP_ICON_UPDATED", closure_1_2);
        };
      }
    }
    cResult[3] = D;
    tmp13 = D;
  } else {
    class D {
      constructor() {
        closure_2();
        obj = DispatcherDefault;
        const subscription = obj.subscribe("APP_ICON_UPDATED", closure_2);
        return () => {
          obj = require("Dispatcher");
          obj.unsubscribe("APP_ICON_UPDATED", closure_1_2);
        };
      }
    }
  }
  useMountEffectDefault(tmp13);
  if (cResult[4] === tmp3) {
    class D {
      constructor() {
        closure_2();
        obj = DispatcherDefault;
        const subscription = obj.subscribe("APP_ICON_UPDATED", closure_2);
        return () => {
          obj = require("Dispatcher");
          obj.unsubscribe("APP_ICON_UPDATED", closure_1_2);
        };
      }
    }
  }
  let obj3 = { officialAppIcons: tmp7, limitedTimeAppIcons: tmp10, currentAppIcon: tmp3 };
  cResult[4] = tmp3;
  cResult[5] = tmp10;
  cResult[6] = tmp7;
  cResult[7] = obj3;
}) : (function useAppIcons() {
  let limitedTimeAppIcons;
  let require;
  let tmp3;
  const currentAppIcon = closure_16();
  [tmp3, require] = react.useState([]);
  _slicedToArray(react.useState([]), 2);
  [limitedTimeAppIcons, importDefault] = react.useState([]);
  dependencyMap = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    let intl;
    let obj3;
    let v3;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        let closure_0;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_0 = undefined;
            closure_1 = undefined;
            closure_2 = undefined;
            c4 = 1;
            c5 = 2;
            c6 = 1;
            const obj5 = { value: obj3.getAvailableIcons(), done: false };
            obj3 = closure_1(closure_2[7]);
            return obj5;
          }
        } else {
          if (1 === c5) {
            c4 = 0;
            const obj6 = { text: intl.string(closure_0(closure_2[15]).t["c76eo/"]) };
            const open = closure_1(closure_2[14]).open;
            const tmp12 = closure_1(closure_2[14]);
            intl = closure_0(closure_2[15]).intl;
            open("APP_ICON_LOGS_ERROR_MESSAGE_GENERIC", obj6);
            const _HermesInternal = HermesInternal;
            logger.warn("Error fetching available app icons: " + closure_3);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            value.map((id) => id.id);
            const arr = closure_1_9();
            closure_1 = arr.filter((id) => closure_1_0.includes(id.id));
            const arr2 = closure_1_8();
            closure_2 = arr2.filter((id) => closure_1_0.includes(id.id));
            closure_130_1(closure_2);
            closure_0 = 0;
            const items = [c6()];
            const sum = closure_0 + 1;
            closure_0 = HermesBuiltin.arraySpread(items, closure_1, sum);
            closure_130_0(items);
            c4 = 0;
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp22) {
        closure_3 = tmp22;
        if (0 === c4) {
          c6 = 3;
          throw tmp22;
        } else {
          c5 = 1;
        }
      }
    }
  }), []);
  useMountEffectDefault(() => {
    closure_2();
    obj = DispatcherDefault;
    const subscription = obj.subscribe("APP_ICON_UPDATED", closure_2);
    return () => {
      obj = closure_1(closure_2[11]);
      obj.unsubscribe("APP_ICON_UPDATED", closure_1_2);
    };
  });
  return { officialAppIcons, limitedTimeAppIcons, currentAppIcon };
});
const result = size.fileFinishedImporting("modules/app_icons/native/AppIconUtils.tsx");

export { fetchCurrentAppIcon };
export const useCurrentAppIcon = tmp5;
export const setAppIcon = function setAppIcon() {
  return obj(...arguments);
};
export const useAppIcons = tmp6;
export const navigateToAppIconSettings = function navigateToAppIconSettings() {
  obj = openUserSettings;
  const obj2 = { screen: unpackModuleId.APP_ICONS };
  obj.openUserSettings(obj2);
};
export const isAppIconsSupported = function isAppIconsSupported() {
  obj = MetaQuestUtils;
  return !obj.isMetaQuest();
};
