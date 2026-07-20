// Module ID: 3805
// Function ID: 31371
// Name: makeUpdateSettingFunction
// Dependencies: []
// Exports: defineProtoSetting, wrapSettingWithExperimentDefaults, wrapSettingWithOverride, wrapSettingWithSelectiveSyncing

// Module 3805 (makeUpdateSettingFunction)
function makeUpdateSettingFunction(getSetting, arg1) {
  arg1 = getSetting;
  const importDefault = arg1;
  return (arg0) => {
    let tmp2 = arg0;
    if ("function" === typeof arg0) {
      tmp2 = arg0(arg0());
    }
    return arg1(tmp2);
  };
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const UserSettingsDelay = arg1(dependencyMap[2]).UserSettingsDelay;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/user_settings/UserSettingDefinitions.tsx");

export const defineProtoSetting = function defineProtoSetting(textAndImages, activityRestrictedGuildIds, explicitContentFromProto, explicitContentToProto, arg4) {
  let obj = arg4;
  activityRestrictedGuildIds = textAndImages;
  const importDefault = activityRestrictedGuildIds;
  const dependencyMap = explicitContentFromProto;
  let closure_3 = explicitContentToProto;
  if (arg4 === undefined) {
    obj = {};
  }
  let INFREQUENT_USER_ACTION = obj.delay;
  if (INFREQUENT_USER_ACTION === undefined) {
    INFREQUENT_USER_ACTION = UserSettingsDelay.INFREQUENT_USER_ACTION;
  }
  let closure_4 = INFREQUENT_USER_ACTION;
  let fn = obj.comparator;
  if (fn === undefined) {
    fn = function o(arg0, arg1) {
      return arg0 === arg1;
    };
  }
  const UserSettingsDelay = fn;
  function getSetting() {
    let tmp3;
    if (null != INFREQUENT_USER_ACTION.settings[closure_0]) {
      tmp3 = tmp2[closure_1];
    }
    return arg2(tmp3);
  }
  const makeUpdateSettingFunction = getSetting;
  obj = {
    getSetting,
    updateSetting: makeUpdateSettingFunction(getSetting, (favorites) => {
      const PreloadedUserSettingsActionCreators = favorites(arg2[3]).PreloadedUserSettingsActionCreators;
      return PreloadedUserSettingsActionCreators.updateAsync(favorites, (arg0) => {
        arg0[closure_1] = callback(arg0, arg0[closure_1]);
      }, INFREQUENT_USER_ACTION);
    }),
    useSetting() {
      const items = [INFREQUENT_USER_ACTION];
      return arg0(arg2[4]).useStateFromStores(items, getSetting, undefined, fn);
    }
  };
  return obj;
};
export const wrapSettingWithSelectiveSyncing = function wrapSettingWithSelectiveSyncing(arg0, text, animateEmoji) {
  text = arg0;
  const importDefault = text;
  const dependencyMap = animateEmoji;
  function getSetting() {
    const tmp = closure_3.getState()[closure_1];
    let setting;
    if (null != tmp) {
      setting = tmp.settings[closure_2];
    }
    if (null == setting) {
      setting = arg0.getSetting();
    }
    return setting;
  }
  return {
    getSetting,
    useSetting() {
      let setting = arg0.useSetting();
      const items = [closure_3];
      const stateFromStores = arg0(arg2[4]).useStateFromStores(items, () => {
        const tmp = state.getState()[closure_1];
        let tmp2;
        if (null != tmp) {
          tmp2 = tmp.settings[closure_2];
        }
        return tmp2;
      });
      if (null != stateFromStores) {
        setting = stateFromStores;
      }
      return setting;
    },
    updateSetting: makeUpdateSettingFunction(getSetting, (addFlagResult) => {
      if (closure_3.shouldSync(arg1)) {
        let updateSettingResult = addFlagResult.updateSetting(addFlagResult);
      } else {
        let obj = arg1(arg2[5]);
        obj = { type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE" };
        obj = {};
        const obj1 = {};
        const obj2 = {};
        obj2[arg2] = addFlagResult;
        obj1.settings = obj2;
        obj[arg1] = obj1;
        obj.changes = obj;
        obj.dispatch(obj);
        updateSettingResult = Promise.resolve();
      }
      return updateSettingResult;
    })
  };
};
export const wrapSettingWithOverride = function wrapSettingWithOverride(arg0, animateEmoji, arg2, arg3) {
  animateEmoji = arg0;
  const importDefault = animateEmoji;
  const dependencyMap = arg2;
  let closure_3 = arg3;
  function getSetting() {
    let setting = arg2();
    if (null == setting) {
      setting = arg0.getSetting();
    }
    return setting;
  }
  return {
    getSetting,
    useSetting() {
      let setting = arg0.useSetting();
      const tmp2 = arg3();
      if (null != tmp2) {
        setting = tmp2;
      }
      return setting;
    },
    updateSetting: makeUpdateSettingFunction(getSetting, (addFlagResult) => {
      const items = [arg1];
      arg1(arg2[5]).dispatch({ type: "USER_SETTINGS_OVERRIDE_CLEAR", settings: items });
      return addFlagResult.updateSetting(addFlagResult);
    })
  };
};
export const wrapSettingWithExperimentDefaults = function wrapSettingWithExperimentDefaults(arg0) {
  ({ baseSetting: closure_0, isEligible: closure_1, useIsEligible: closure_2, eligibleDefault: closure_3, ineligibleDefault: closure_4, onUseDefault: closure_5 } = arg0);
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
