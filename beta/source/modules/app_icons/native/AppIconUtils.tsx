// Module ID: 12995
// Function ID: 12996
// Name: AppIconUtils
// Dependencies: [32, 5, 19, 17, 8624, 1074, 1374, 3, 1364, 12996, 8625, 5298, 573, 1241, 4528, 1115, 6800, 1610, 2]
// Exports: isAppIconsSupported, navigateToAppIconSettings, setAppIcon, useAppIcons, useCurrentAppIcon

// Module 12995 (AppIconUtils)
import LoggerDefault from "Logger" /* 3 */;
import react_native from "react-native" /* 17 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1610 */;
import useMountEffectDefault from "useMountEffect" /* 5298 */;
import openUserSettings from "openUserSettings" /* 6800 */;
import AppIconTypes from "AppIconTypes" /* 8625 */;
import react_native2 from "react-native" /* 12996 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import AppIconConstants from "AppIconConstants" /* 8624 */;
import Constants from "Constants" /* 1074 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c2, closure_3, closure_4, dependencyMap, importDefault, setIconResult;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function fetchCurrentAppIcon() {
  return obj(...arguments);
}
let obj = function _fetchCurrentAppIcon() {
  obj = _asyncToGenerator(async (arg0, value) => {
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
            let closure_1 = tmp;
            closure_0 = tmp4;
            c3 = 1;
            let currentIcon;
            const obj4 = DCDIconManager;
            if (DCDIconManager != null) {
              currentIcon = obj4.getCurrentIcon();
            }
            c4 = 2;
            c5 = 1;
            const obj5 = { value: currentIcon, done: false };
            return obj5;
          }
        } else if (1 === c4) {
          c3 = 0;
          closure_0 = closure_2;
          const _HermesInternal = HermesInternal;
          closure_129_12.warn("Error fetching current app icon: " + closure_0);
          c5 = 3;
          const obj6 = { value: closure_129_0(closure_129_2[10]).FreemiumAppIconIds.DEFAULT, done: true };
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
      } catch (tmp15) {
        closure_2 = tmp15;
        if (0 === c3) {
          c5 = 3;
          throw tmp15;
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
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let TIER_2;
      let intl;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              c5 = 1;
              setIconResult = undefined;
              const obj3 = DCDIconManager;
              if (DCDIconManager != null) {
                setIconResult = obj3.setIcon(tmp25);
              }
              c6 = 2;
              c7 = 1;
              return { value: setIconResult, done: false };
            }
          } else {
            if (1 === tmp4) {
              c5 = 0;
              let closure_2 = closure_4;
              const obj6 = { key: "APP_ICON_LOGS_ERROR_MESSAGE_GENERIC", content: intl.string(closure_131_0(closure_131_2[15]).t["c76eo/"]) };
              const open = closure_131_1(closure_131_2[14]).open;
              closure_131_1(closure_131_2[14]);
              intl = closure_131_0(closure_131_2[15]).intl;
              open(obj6);
              const _HermesInternal = HermesInternal;
              closure_131_12.warn("Error changing users app icon: " + closure_2);
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              return { value, done: true };
            } else {
              const obj7 = closure_131_1(closure_131_2[12]);
              obj7.dispatch({ type: "APP_ICON_UPDATED" });
              setIconResult = closure_131_9.APP_ICON_UPDATED;
              const obj8 = { icon_id, user_premium_tier, icon_premium_tier: TIER_2 };
              const track = closure_131_1(closure_131_2[13]).track;
              TIER_2 = null;
              closure_131_1(closure_131_2[13]);
              if (icon_id !== closure_131_0(closure_131_2[10]).FreemiumAppIconIds.DEFAULT) {
                TIER_2 = closure_131_11.TIER_2;
              }
              track(setIconResult, obj8);
              c5 = 0;
            }
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp27) {
          closure_4 = tmp27;
          if (0 === c5) {
            c7 = 3;
            throw tmp27;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const NativeModules = react_native.NativeModules;
({ getDefaultIcon: metroRequire, getOfficialAlternateIcons: metroImportDefault, getLimitedAlternateIcons: metroImportAll } = AppIconConstants);
({ AnalyticEvents: c9, UserSettingsSections: c10 } = Constants);
const PremiumTypes = PremiumConstants.PremiumTypes;
let tmp4 = new LoggerDefault("AppIconUtils");
let closure_12 = tmp4;
if (PlatformUtils.isAndroid()) {
  let DCDIconManager = react_native2.default;
} else {
  DCDIconManager = NativeModules.DCDIconManager;
}
function useCurrentAppIcon() {
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
        return { value: "HermesInternal", done: null };
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
          return { value: "HermesInternal", done: null };
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
      obj = closure_1(closure_2_2[12]);
      obj.unsubscribe("APP_ICON_UPDATED", closure_1_1);
    };
  });
  return first;
}
const result = size.fileFinishedImporting("modules/app_icons/native/AppIconUtils.tsx");

export { fetchCurrentAppIcon };
export { useCurrentAppIcon };
export const setAppIcon = function setAppIcon() {
  return obj(...arguments);
};
export const useAppIcons = function useAppIcons() {
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
        return { value: "HermesInternal", done: null };
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
          return { value: "HermesInternal", done: null };
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
      obj = closure_1(closure_2_2[12]);
      obj.unsubscribe("APP_ICON_UPDATED", closure_1_1);
    };
  });
  const tmp4 = _slicedToArray(react.useState([]), 2);
  [tmp5, require] = tmp4;
  [tmp7, importDefault] = _slicedToArray(react.useState([]), 2);
  const tmp6 = _slicedToArray(react.useState([]), 2);
  dependencyMap = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    let intl;
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
        return { value: "HermesInternal", done: null };
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
            let availableIcons;
            const obj3 = DCDIconManager;
            if (DCDIconManager != null) {
              availableIcons = obj3.getAvailableIcons();
            }
            c5 = 2;
            c6 = 1;
            const obj5 = { value: availableIcons, done: false };
            return obj5;
          }
        } else {
          if (1 === c5) {
            c4 = 0;
            const obj6 = { key: "APP_ICON_LOGS_ERROR_MESSAGE_GENERIC", content: intl.string(closure_0(closure_2[15]).t["c76eo/"]) };
            const open = closure_1(closure_2[14]).open;
            const tmp12 = closure_1(closure_2[14]);
            intl = closure_0(closure_2[15]).intl;
            open(obj6);
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
            const arr = closure_1_7();
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
          return { value: "HermesInternal", done: null };
        }
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
};
export const navigateToAppIconSettings = function navigateToAppIconSettings() {
  obj = openUserSettings;
  const obj2 = { screen: constants.APP_ICONS };
  obj.openUserSettings(obj2);
};
export const isAppIconsSupported = function isAppIconsSupported() {
  obj = MetaQuestUtils;
  return !obj.isMetaQuest();
};
