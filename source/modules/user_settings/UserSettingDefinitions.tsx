// Module ID: 3807
// Function ID: 31383
// Name: makeUpdateSettingFunction
// Dependencies: [1279, 1316, 662, 1331, 566, 686, 2]
// Exports: defineProtoSetting, wrapSettingWithExperimentDefaults, wrapSettingWithOverride, wrapSettingWithSelectiveSyncing

// Module 3807 (makeUpdateSettingFunction)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { UserSettingsDelay } from "MAX_FAVORITES";

const require = arg1;
function makeUpdateSettingFunction(getSetting, arg1) {
  let closure_0 = getSetting;
  let closure_1 = arg1;
  return (arg0) => {
    let tmp2 = arg0;
    if ("function" === typeof arg0) {
      tmp2 = arg0(getSetting());
    }
    return closure_1(tmp2);
  };
}
const result = require("MAX_FAVORITES").fileFinishedImporting("modules/user_settings/UserSettingDefinitions.tsx");

export const defineProtoSetting = function defineProtoSetting(textAndImages, activityRestrictedGuildIds, explicitContentFromProto, explicitContentToProto, set) {
  let obj = set;
  let closure_0 = textAndImages;
  let closure_1 = activityRestrictedGuildIds;
  let closure_2 = explicitContentFromProto;
  let _isNativeReflectConstruct = explicitContentToProto;
  if (set === undefined) {
    obj = {};
  }
  let INFREQUENT_USER_ACTION = obj.delay;
  if (INFREQUENT_USER_ACTION === undefined) {
    INFREQUENT_USER_ACTION = fn.INFREQUENT_USER_ACTION;
  }
  fn = obj.comparator;
  if (fn === undefined) {
    fn = function o(arg0, arg1) {
      return arg0 === arg1;
    };
  }
  function getSetting(getSetting, arg1) {
    let tmp3;
    if (null != INFREQUENT_USER_ACTION.settings[closure_0]) {
      tmp3 = tmp2[closure_1];
    }
    return closure_2(tmp3);
  }
  obj = {
    getSetting,
    updateSetting: getSetting(getSetting, (favorites) => {
      const textAndImages = favorites;
      const PreloadedUserSettingsActionCreators = textAndImages(explicitContentFromProto[3]).PreloadedUserSettingsActionCreators;
      return PreloadedUserSettingsActionCreators.updateAsync(textAndImages, (arg0) => {
        arg0[outer1_1] = outer1_3(closure_0, arg0[outer1_1]);
      }, INFREQUENT_USER_ACTION);
    }),
    useSetting() {
      const items = [INFREQUENT_USER_ACTION];
      return textAndImages(explicitContentFromProto[4]).useStateFromStores(items, getSetting, undefined, fn);
    }
  };
  return obj;
};
export const wrapSettingWithSelectiveSyncing = function wrapSettingWithSelectiveSyncing(makeUpdateSettingFunction, text, animateEmoji) {
  let closure_0 = makeUpdateSettingFunction;
  let closure_1 = text;
  let closure_2 = animateEmoji;
  function getSetting() {
    const tmp = outer1_3.getState()[closure_1];
    let setting;
    if (null != tmp) {
      setting = tmp.settings[closure_2];
    }
    if (null == setting) {
      setting = makeUpdateSettingFunction.getSetting();
    }
    return setting;
  }
  return {
    getSetting,
    useSetting() {
      let setting = makeUpdateSettingFunction.useSetting();
      const items = [outer1_3];
      const stateFromStores = makeUpdateSettingFunction(animateEmoji[4]).useStateFromStores(items, () => {
        const tmp = outer2_3.getState()[outer1_1];
        let tmp2;
        if (null != tmp) {
          tmp2 = tmp.settings[outer1_2];
        }
        return tmp2;
      });
      if (null != stateFromStores) {
        setting = stateFromStores;
      }
      return setting;
    },
    updateSetting: makeUpdateSettingFunction(getSetting, (addFlagResult) => {
      if (outer1_3.shouldSync(text)) {
        let updateSettingResult = makeUpdateSettingFunction.updateSetting(addFlagResult);
      } else {
        let obj = text(animateEmoji[5]);
        obj = { type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE" };
        obj = {};
        const obj1 = {};
        const obj2 = {};
        obj2[animateEmoji] = addFlagResult;
        obj1.settings = obj2;
        obj[text] = obj1;
        obj.changes = obj;
        obj.dispatch(obj);
        updateSettingResult = Promise.resolve();
      }
      return updateSettingResult;
    })
  };
};
export const wrapSettingWithOverride = function wrapSettingWithOverride(makeUpdateSettingFunction, animateEmoji, arg2, arg3) {
  let closure_0 = makeUpdateSettingFunction;
  let closure_1 = animateEmoji;
  let closure_2 = arg2;
  let _isNativeReflectConstruct = arg3;
  function getSetting() {
    let setting = dependencyMap();
    if (null == setting) {
      setting = makeUpdateSettingFunction.getSetting();
    }
    return setting;
  }
  return {
    getSetting,
    useSetting() {
      let setting = makeUpdateSettingFunction.useSetting();
      const tmp2 = callback();
      if (null != tmp2) {
        setting = tmp2;
      }
      return setting;
    },
    updateSetting: makeUpdateSettingFunction(getSetting, (addFlagResult) => {
      const items = [animateEmoji];
      animateEmoji(686).dispatch({ type: "USER_SETTINGS_OVERRIDE_CLEAR", settings: items });
      return makeUpdateSettingFunction.updateSetting(addFlagResult);
    })
  };
};
export const wrapSettingWithExperimentDefaults = function wrapSettingWithExperimentDefaults(set) {
  let UserSettingsDelay;
  let _isNativeReflectConstruct;
  let closure_4;
  let dependencyMap;
  let importDefault;
  let require;
  ({ baseSetting: require, isEligible: importDefault, useIsEligible: dependencyMap, eligibleDefault: _isNativeReflectConstruct, ineligibleDefault: closure_4, onUseDefault: UserSettingsDelay } = set);
  return {
    getSetting() {
      const setting = closure_0.getSetting();
      if (null != setting) {
        return setting;
      } else {
        if (null != callback3) {
          callback3();
        }
        if (callback()) {
          let tmp6 = callback2();
        } else {
          tmp6 = closure_4;
        }
      }
    },
    useSetting() {
      const setting = closure_0.useSetting();
      if (null != setting) {
        return setting;
      } else {
        if (null != callback3) {
          callback3();
        }
        if (tmp2) {
          let tmp6 = callback2();
        } else {
          tmp6 = closure_4;
        }
      }
    },
    updateSetting(addFlagResult, NotificationLabel) {
      return closure_0.updateSetting(addFlagResult);
    }
  };
};
