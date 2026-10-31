// Module ID: 15340
// Function ID: 15341
// Name: AppIconUtils
// Dependencies: [32, 5, 19, 9979, 1072, 1385, 3, 15341, 9980, 5593, 572, 1252, 5712, 1113, 7563, 1622, 2]
// Exports: isAppIconsSupported, navigateToAppIconSettings, setAppIcon, useAppIcons, useCurrentAppIcon

// Module 15340 (AppIconUtils)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import PremiumConstants from "PremiumConstants" /* 1385 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1622 */;
import useMountEffectDefault from "useMountEffect" /* 5593 */;
import openUserSettings from "openUserSettings" /* 7563 */;
import AppIconTypes from "AppIconTypes" /* 9980 */;
import react_nativeDefault from "react-native" /* 15341 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import AppIconConstants from "AppIconConstants" /* 9979 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let APP_ICON_UPDATED, c2, c5, closure_4, closure_5, dependencyMap, importDefault;

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
        return { value: "HermesInternal", done: "HermesInternal" };
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              return { value: "flexDirection", done: true };
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
              APP_ICON_UPDATED = closure_132_1(closure_132_2[12]).open;
              const obj8 = { text: intl.string(closure_132_0(closure_132_2[13]).t["c76eo/"]) };
              closure_132_1(closure_132_2[12]);
              intl = closure_132_0(closure_132_2[13]).intl;
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
            const obj9 = closure_132_1(closure_132_2[10]);
            obj9.dispatch({ type: "APP_ICON_UPDATED" });
            APP_ICON_UPDATED = closure_132_10.APP_ICON_UPDATED;
            const obj10 = { icon_id, user_premium_tier, icon_premium_tier: TIER_2 };
            const track = closure_132_1(closure_132_2[11]).track;
            TIER_2 = null;
            closure_132_1(closure_132_2[11]);
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
let tmp4 = new LoggerDefault("AppIconUtils");
let closure_13 = tmp4;
const result = size.fileFinishedImporting("modules/app_icons/native/AppIconUtils.tsx");

export { fetchCurrentAppIcon };
export function useCurrentAppIcon() {
  let closure_0;
  let closure_1;
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
            const obj4 = { value: closure_1_14(), done: false };
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
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp11) {
        c3 = 3;
        throw tmp11;
      }
    }
  }), []);
  useMountEffectDefault(() => {
    importDefault();
    obj = require("Dispatcher");
    const subscription = obj.subscribe("APP_ICON_UPDATED", importDefault);
    return () => {
      obj = closure_1(closure_2_2[10]);
      obj.unsubscribe("APP_ICON_UPDATED", closure_1_1);
    };
  });
  return first;
}
export function setAppIcon() {
  return obj(...arguments);
}
export function useAppIcons() {
  let closure_0;
  let currentAppIcon;
  let require;
  let tmp5;
  let tmp7;
  [currentAppIcon, closure_0] = react.useState(AppIconTypes.FreemiumAppIconIds.DEFAULT);
  let closure_1 = react.useCallback(_asyncToGenerator(async (arg0, value) => {
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
            const obj4 = { value: closure_1_14(), done: false };
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
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp11) {
        c3 = 3;
        throw tmp11;
      }
    }
  }), []);
  const tmp3 = useMountEffectDefault(() => {
    importDefault();
    obj = require("Dispatcher");
    const subscription = obj.subscribe("APP_ICON_UPDATED", importDefault);
    return () => {
      obj = closure_1(closure_2_2[10]);
      obj.unsubscribe("APP_ICON_UPDATED", closure_1_1);
    };
  });
  const tmp4 = _slicedToArray(react.useState([]), 2);
  [tmp5, require] = tmp4;
  [tmp7, importDefault] = _slicedToArray(react.useState([]), 2);
  const tmp6 = _slicedToArray(react.useState([]), 2);
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
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      let c4;
      try {
        let closure_0;
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
            const obj6 = { text: intl.string(closure_0(closure_2[13]).t["c76eo/"]) };
            const open = closure_1(closure_2[12]).open;
            const tmp12 = closure_1(closure_2[12]);
            intl = closure_0(closure_2[13]).intl;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
      obj = require("Dispatcher");
      obj.unsubscribe("APP_ICON_UPDATED", closure_1_2);
    };
  });
  return { officialAppIcons, limitedTimeAppIcons, currentAppIcon };
}
export function navigateToAppIconSettings() {
  obj = openUserSettings;
  const obj2 = { screen: unpackModuleId.APP_ICONS };
  obj.openUserSettings(obj2);
}
export function isAppIconsSupported() {
  obj = MetaQuestUtils;
  return !obj.isMetaQuest();
}
