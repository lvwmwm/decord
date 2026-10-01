// Module ID: 2025
// Function ID: 2026
// Name: UserSettingDefinitions
// Dependencies: [1183, 1220, 1084, 2026, 504, 573, 2]
// Exports: defineProtoSetting, wrapSettingWithExperimentDefaults, wrapSettingWithOverride, wrapSettingWithSelectiveSyncing

// Module 2025 (UserSettingDefinitions)
import get_initialized from "get initialized" /* 504 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1084 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1183 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1220 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsDelay = UserSettingsConstants.UserSettingsDelay;
const result = size.fileFinishedImporting("modules/user_settings/UserSettingDefinitions.tsx");

export const defineProtoSetting = function defineProtoSetting(textAndImages, activityRestrictedGuildIds, explicitContentFromProto, explicitContentToProto, arg4) {
  let fn;
  let closure_0 = textAndImages;
  let closure_1 = activityRestrictedGuildIds;
  let closure_2 = explicitContentFromProto;
  let closure_3 = explicitContentToProto;
  let obj = arg4;
  if (arg4 === undefined) {
    obj = {};
  }
  let INFREQUENT_USER_ACTION = obj.delay;
  if (INFREQUENT_USER_ACTION === undefined) {
    let tmp = fn;
    INFREQUENT_USER_ACTION = fn.INFREQUENT_USER_ACTION;
  }
  fn = obj.comparator;
  if (fn === undefined) {
    fn = function l(arg0, arg1) {
      return arg0 === arg1;
    };
  }
  function getSetting() {
    let tmp3;
    const tmp = explicitContentFromProto;
    if (UserSettingsProtoStore.settings[textAndImages] != null) {
      tmp3 = tmp2[activityRestrictedGuildIds];
    }
    return tmp(tmp3);
  }
  const f75702 = (favorites) => {
    let closure_0 = favorites;
    const PreloadedUserSettingsActionCreators = getSetting(explicitContentFromProto[3]).PreloadedUserSettingsActionCreators;
    return PreloadedUserSettingsActionCreators.updateAsync(closure_0, async (arg0) => {
      arg0[f75702] = explicitContentToProto(favorites, arg0[f75702]);
    }, closure_4);
  };
  return {
    getSetting,
    updateSetting: (fn) => {
      let tmp2 = fn;
      const tmp = f75709;
      if (typeof fn === "function") {
        tmp2 = fn(getSetting());
      }
      return tmp(tmp2);
    },
    useSetting() {
      const items = [UserSettingsProtoStore];
      const obj = get_initialized;
      return obj.useStateFromStores(items, getSetting, undefined, fn);
    }
  };
};
export function wrapSettingWithSelectiveSyncing(UserSettingDefinitions, text, inlineAttachmentMedia) {
  let closure_1 = text;
  let closure_2 = inlineAttachmentMedia;
  function getSetting() {
    const tmp = SelectivelySyncedUserSettingsStore.getState()[importDefault];
    let setting;
    if (tmp != null) {
      setting = tmp.settings[inlineAttachmentMedia];
    }
    if (setting == null) {
      setting = UserSettingDefinitions.getSetting();
    }
    return setting;
  }
  let obj = {
    getSetting,
    useSetting() {
      const setting = UserSettingDefinitions.useSetting();
      const items = [SelectivelySyncedUserSettingsStore];
      const obj = get_initialized;
      let stateFromStores = obj.useStateFromStores(items, () => {
        const tmp = SelectivelySyncedUserSettingsStore.getState()[closure_1_1];
        let tmp2;
        if (tmp != null) {
          tmp2 = tmp.settings[inlineAttachmentMedia];
        }
        return tmp2;
      });
      if (stateFromStores == null) {
        stateFromStores = setting;
      }
      return stateFromStores;
    },
    updateSetting: (fn) => {
      let tmp2 = fn;
      const tmp = f75709;
      if (typeof fn === "function") {
        tmp2 = fn(getSetting());
      }
      return tmp(tmp2);
    }
  };
  const f75706 = (arg0) => {
    let obj3;
    let obj5;
    let updateSettingResult;
    const tmp = f75706;
    if (SelectivelySyncedUserSettingsStore.shouldSync(f75706)) {
      updateSettingResult = getSetting.updateSetting(arg0);
    } else {
      const obj2 = { type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE", changes: obj3 };
      obj3 = {};
      const obj4 = { settings: obj5 };
      obj5 = {};
      obj5[closure_1_2] = arg0;
      obj3[tmp] = obj4;
      const obj = require("Dispatcher");
      obj.dispatch(obj2);
      updateSettingResult = Promise.resolve();
    }
    return updateSettingResult;
  };
  return obj;
}
export function wrapSettingWithOverride(arg0, gifAutoPlay, arg2, arg3) {
  let closure_0 = arg0;
  let closure_1 = gifAutoPlay;
  let closure_2 = arg2;
  let closure_3 = arg3;
  function getSetting() {
    let setting = closure_2();
    if (setting == null) {
      setting = closure_0.getSetting();
    }
    return setting;
  }
  let obj = {
    getSetting,
    useSetting() {
      const setting = closure_0.useSetting();
      let tmp2 = closure_3();
      if (tmp2 == null) {
        tmp2 = setting;
      }
      return tmp2;
    },
    updateSetting: (fn) => {
      let tmp2 = fn;
      const tmp = f75709;
      if (typeof fn === "function") {
        tmp2 = fn(getSetting());
      }
      return tmp(tmp2);
    }
  };
  const f75709 = (arg0) => {
    let items;
    const obj2 = { type: "USER_SETTINGS_OVERRIDE_CLEAR", settings: items };
    items = [f75709];
    const obj = gifAutoPlay(closure_2[5]);
    obj.dispatch(obj2);
    return getSetting.updateSetting(arg0);
  };
  return obj;
}
export const wrapSettingWithExperimentDefaults = function wrapSettingWithExperimentDefaults(arg0) {
  ({ baseSetting: require, isEligible: importDefault, useIsEligible: dependencyMap, eligibleDefault: SelectivelySyncedUserSettingsStore, ineligibleDefault: UserSettingsProtoStore, onUseDefault: UserSettingsDelay } = arg0);
  return {
    getSetting() {
      let setting = require.getSetting();
      if (null == setting) {
        let tmp5;
        if (UserSettingsDelay != null) {
          tmp2();
        }
        if (importDefault()) {
          tmp5 = SelectivelySyncedUserSettingsStore();
        } else {
          tmp5 = UserSettingsProtoStore;
        }
        setting = tmp5;
      }
      return setting;
    },
    useSetting() {
      let setting = require.useSetting();
      if (null == setting) {
        let tmp4;
        if (UserSettingsDelay != null) {
          UserSettingsDelay();
        }
        if (tmp2) {
          tmp4 = SelectivelySyncedUserSettingsStore();
        } else {
          tmp4 = UserSettingsProtoStore;
        }
        setting = tmp4;
      }
      return setting;
    },
    updateSetting(arg0) {
      return require.updateSetting(arg0);
    }
  };
};
