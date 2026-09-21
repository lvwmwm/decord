// Module ID: 13723
// Function ID: 13724
// Name: AppIconUtils
// Dependencies: [32, 5, 19, 17, 9435, 1078, 1378, 3, 1368, 13724, 9436, 558, 568, 577, 5203, 1245, 4458, 1119, 7626, 1613, 2]
// Exports: isAppIconsSupported, navigateToAppIconSettings, setAppIcon, useAppIcons

// Module 13723 (AppIconUtils)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 577 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1613 */;
import useMountEffectDefault from "useMountEffect" /* 5203 */;
import openUserSettings from "openUserSettings" /* 7626 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
function fetchCurrentAppIcon() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_15 = async function _fetchCurrentAppIcon(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
          closure_1 = tmp3;
          closure_0 = tmp7;
          c3 = 1;
          let currentIcon;
          if (DCDIconManager != null) {
            currentIcon = DCDIconManager.getCurrentIcon();
          }
          c4 = 2;
          c5 = 1;
          const obj5 = { value: currentIcon, done: false };
          return obj5;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        closure_128_0 = closure_2;
        const _HermesInternal = HermesInternal;
        closure_129_12.warn("Error fetching current app icon: " + closure_128_0);
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
        const obj = { value: value.id, done: true };
        return obj;
      }
    } catch (tmp18) {
      closure_2 = tmp18;
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp18;
      } else {
        c4 = tmp;
      }
    }
  }
};
let closure_17 = async function _setAppIcon(arg0, arg1) {
  closure_3 = tmp3;
  closure_2 = tmp5;
  closure_130_0 = closure_0;
  closure_130_1 = closure_1;
  if (DCDIconManager != null) {
    const setIconResult = DCDIconManager.setIcon(tmp27);
  }
  await setIconResult;
  if (1 === tmp8) {
    c5 = 0;
    closure_130_2 = closure_4;
    const obj7 = { key: "APP_ICON_LOGS_ERROR_MESSAGE_GENERIC", content: null };
    const intl = closure_131_0(closure_131_2[17]).intl;
    obj7.content = intl.string(closure_131_0(closure_131_2[17]).t["c76eo/"]);
    closure_131_1(closure_131_2[16]).open(obj7);
    const _HermesInternal = HermesInternal;
    closure_131_12.warn("Error changing users app icon: " + closure_130_2);
    c7 = 3;
    closure_131_1(closure_131_2[16]);
  } else if (arg0 === 1) {
    c7 = 3;
    throw arg1;
  } else if (arg0 !== 2) {
    closure_131_1(closure_131_2[13]).dispatch({ type: "APP_ICON_UPDATED" });
    closure_131_1(closure_131_2[13]);
    const obj10 = { icon_id: closure_130_0, user_premium_tier: closure_130_1, icon_premium_tier: null };
    let TIER_2 = null;
    if (closure_130_0 !== closure_131_0(closure_131_2[10]).FreemiumAppIconIds.DEFAULT) {
      TIER_2 = closure_131_11.TIER_2;
    }
    obj10.icon_premium_tier = TIER_2;
    closure_131_1(closure_131_2[15]).track(closure_131_9.APP_ICON_UPDATED, obj10);
    c5 = 0;
    closure_131_1(closure_131_2[15]);
  }
  return arg1;
};
const AppIconConstants = fn(9435);
({ getDefaultIcon: metroRequire, getOfficialAlternateIcons: closure_7, getLimitedAlternateIcons: closure_8 } = AppIconConstants);
const Constants = fn(1078);
({ AnalyticEvents: closure_9, UserSettingsSections: c10 } = Constants);
const PremiumTypes = fn(1378).PremiumTypes;
let closure_12 = new LoggerDefault("AppIconUtils");
const PlatformUtils = fn(1368);
if (PlatformUtils.isAndroid()) {
  let DCDIconManager = fn(13724).default;
} else {
  DCDIconManager = fn(17).NativeModules.DCDIconManager;
}
const ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(2);
  const tmp3 = _slicedToArray(noop.useState(require("AppIconTypes").FreemiumAppIconIds.DEFAULT), 2);
  _require = tmp3[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    _require = asyncGeneratorStep(async (arg0, value) => {
      if (c3 === 2) {
        c3 = 3;
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
              closure_1 = tmp5;
              closure_128_0 = undefined;
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
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
            tmp2(closure_128_0);
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp12) {
          c3 = tmp;
          throw tmp12;
        }
      }
    });
    const fn = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        tmp = closure_1();
        obj = closure_1(closure_2[13]);
        subscription = obj.subscribe("APP_ICON_UPDATED", closure_1);
        return () => {
          first(dependencyMap[13]).unsubscribe("APP_ICON_UPDATED", closure_1_1);
        };
      }
    }
    cResult[1] = I;
    const tmp6 = I;
  } else {
    class I {
      constructor() {
        tmp = closure_1();
        obj = closure_1(closure_2[13]);
        subscription = obj.subscribe("APP_ICON_UPDATED", closure_1);
        return () => {
          first(dependencyMap[13]).unsubscribe("APP_ICON_UPDATED", closure_1_1);
        };
      }
    }
  }
  first(5203)(tmp6);
  return tmp3[0];
}) : (() => {
  const tmp = _slicedToArray(noop.useState(require("AppIconTypes").FreemiumAppIconIds.DEFAULT), 2);
  _require = tmp[1];
  importDefault = noop.useCallback(asyncGeneratorStep(async (arg0, value) => {
    if (c3 === 2) {
      c3 = 3;
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
            closure_1 = tmp5;
            closure_0 = tmp2;
            closure_128_0 = undefined;
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
          const obj = { value, done: true };
          return obj;
        } else {
          closure_128_0 = value;
          closure_129_0(closure_128_0);
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp12) {
        c3 = tmp;
        throw tmp12;
      }
    }
  }), []);
  useMountEffectDefault(() => {
    closure_1();
    const subscription = DispatcherDefault.subscribe("APP_ICON_UPDATED", closure_1);
    return () => {
      closure_1(dependencyMap[13]).unsubscribe("APP_ICON_UPDATED", closure_1_1);
    };
  });
  return tmp[0];
});
let closure_16 = tmp5;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_icons/native/AppIconUtils.tsx");

export { fetchCurrentAppIcon };
export const useCurrentAppIcon = tmp5;
export const setAppIcon = function setAppIcon() {
  const self = this;
  const apply = closure_17.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const useAppIcons = function useAppIcons() {
  const currentAppIcon = closure_16();
  [tmp3, require] = noop.useState([]);
  const limitedTimeAppIcons = _slicedToArray(noop.useState([]), 2);
  importDefault = limitedTimeAppIcons[1];
  dependencyMap = noop.useCallback(asyncGeneratorStep(async () => {
    if (availableIcons != null) {
      availableIcons = availableIcons.getAvailableIcons();
    }
    await availableIcons;
    if (1 === tmp7) {
      c4 = 0;
      closure_129_3 = closure_3;
      const obj7 = { key: "APP_ICON_LOGS_ERROR_MESSAGE_GENERIC", content: null };
      const intl = closure_0(tmp3[17]).intl;
      obj7.content = intl.string(closure_0(tmp3[17]).t["c76eo/"]);
      closure_1(tmp3[16]).open(obj7);
      const _HermesInternal = HermesInternal;
      logger.warn("Error fetching available app icons: " + closure_129_3);
      let v3 = 3;
      closure_1(tmp3[16]);
    } else if (arg0 === 1) {
      v3 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      closure_129_0 = arg1.map((id) => id.id);
      closure_129_1 = closure_1_7().filter((id) => closure_1_0.includes(id.id));
      closure_1_7();
      closure_129_2 = closure_1_8().filter((id) => closure_1_0.includes(id.id));
      closure_130_1(closure_129_2);
      closure_0 = 0;
      const items = [v3()];
      const sum = closure_0 + 1;
      closure_0 = HermesBuiltin.arraySpread(closure_129_1, sum);
      closure_130_0(items);
      c4 = 0;
      closure_1_8();
    }
    return arg1;
  }), []);
  useMountEffectDefault(() => {
    closure_2();
    const subscription = DispatcherDefault.subscribe("APP_ICON_UPDATED", closure_2);
    return () => {
      closure_1(closure_2[13]).unsubscribe("APP_ICON_UPDATED", closure_1_2);
    };
  });
  return { officialAppIcons, limitedTimeAppIcons: limitedTimeAppIcons[0], currentAppIcon };
};
export const navigateToAppIconSettings = function navigateToAppIconSettings() {
  openUserSettings.openUserSettings({ screen: constants.APP_ICONS });
};
export const isAppIconsSupported = function isAppIconsSupported() {
  return !MetaQuestUtils.isMetaQuest();
};
