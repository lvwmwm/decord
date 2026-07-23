// Module ID: 13729
// Function ID: 105310
// Name: defineParentalControlledSetting
// Dependencies: [6772, 6771, 566, 2]
// Exports: defineParentalControlledSetting, wrapParentalControlledSettingWithExperimentDefaults

// Module 13729 (defineParentalControlledSetting)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/user_settings/family_center/ParentalControlledUserSettingsDefinitions.tsx");

export const defineParentalControlledSetting = function defineParentalControlledSetting(privacy, defaultGuildsRestricted, explicitContentFromProto, explicitContentToProto, arg4) {
  let obj = arg4;
  let closure_0 = privacy;
  let closure_1 = defaultGuildsRestricted;
  let closure_2 = explicitContentFromProto;
  let _isNativeReflectConstruct = explicitContentToProto;
  if (arg4 === undefined) {
    obj = {};
  }
  let fn = obj.comparator;
  if (fn === undefined) {
    fn = function a(arg0, arg1) {
      return arg0 === arg1;
    };
  }
  let getControlledSetting;
  let S;
  getControlledSetting = function getControlledSetting(guildId) {
    const settings = explicitContentToProto.getSettings(guildId);
    let tmp3;
    if (null != settings) {
      if (null != settings[closure_0]) {
        tmp3 = tmp5[closure_1];
      }
    }
    return closure_2(tmp3);
  };
  obj = {
    getControlledSetting,
    updateControlledSetting: (arg0, arg1) => {
      let tmp2 = arg1;
      if ("function" === typeof arg1) {
        tmp2 = arg1(getControlledSetting(arg0));
      }
      return S(arg0, tmp2);
    },
    useControlledSetting(arg0) {
      const privacy = arg0;
      const items = [_isNativeReflectConstruct];
      const items1 = [arg0];
      return privacy(explicitContentFromProto[2]).useStateFromStores(items, () => outer1_7(closure_0), items1, fn);
    }
  };
  S = function S(arg0, closure_0) {
    if (null == arg0) {
      let resolved = Promise.resolve();
    } else {
      resolved = defaultGuildsRestricted(explicitContentFromProto[1]).updateTeenSettings(arg0, closure_0, (arg0) => {
        arg0[outer1_1] = outer1_3(closure_0, arg0[outer1_1]);
      });
      const obj = defaultGuildsRestricted(explicitContentFromProto[1]);
    }
    return resolved;
  };
  return obj;
};
export const wrapParentalControlledSettingWithExperimentDefaults = function wrapParentalControlledSettingWithExperimentDefaults(arg0) {
  let _isNativeReflectConstruct;
  let closure_4;
  let closure_5;
  let dependencyMap;
  let importDefault;
  let require;
  ({ baseSetting: require, isEligible: importDefault, useIsEligible: dependencyMap, eligibleDefault: _isNativeReflectConstruct, ineligibleDefault: closure_4, onUseDefault: closure_5 } = arg0);
  return {
    getControlledSetting(arg0) {
      const controlledSetting = closure_0.getControlledSetting(arg0);
      if (null != controlledSetting) {
        return controlledSetting;
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
    useControlledSetting(arg0) {
      const controlledSetting = closure_0.useControlledSetting(arg0);
      if (null != controlledSetting) {
        return controlledSetting;
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
    updateControlledSetting(selectedTeenId, addFlagResult) {
      return closure_0.updateControlledSetting(selectedTeenId, addFlagResult);
    }
  };
};
