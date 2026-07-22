// Module ID: 13615
// Function ID: 103154
// Name: defineParentalControlledSetting
// Dependencies: []
// Exports: defineParentalControlledSetting, wrapParentalControlledSettingWithExperimentDefaults

// Module 13615 (defineParentalControlledSetting)
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/user_settings/family_center/ParentalControlledUserSettingsDefinitions.tsx");

export const defineParentalControlledSetting = function defineParentalControlledSetting(privacy, defaultGuildsRestricted, explicitContentFromProto, explicitContentToProto, arg4) {
  let obj = arg4;
  defaultGuildsRestricted = privacy;
  const importDefault = defaultGuildsRestricted;
  const dependencyMap = explicitContentFromProto;
  let closure_3 = explicitContentToProto;
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
  getControlledSetting = function getControlledSetting(closure_0) {
    const settings = arg3.getSettings(closure_0);
    let tmp3;
    if (null != settings) {
      if (null != settings[closure_0]) {
        tmp3 = tmp5[closure_1];
      }
    }
    return arg2(tmp3);
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
      const items = [arg3];
      const items1 = [arg0];
      return arg0(arg2[2]).useStateFromStores(items, () => callback(arg0), items1, fn);
    }
  };
  S = function S(arg0, arg1) {
    arg0 = arg1;
    if (null == arg0) {
      let resolved = Promise.resolve();
    } else {
      resolved = arg1(arg2[1]).updateTeenSettings(arg0, arg0, (arg0) => {
        arg0[closure_1] = callback(arg1, arg0[closure_1]);
      });
      const obj = arg1(arg2[1]);
    }
    return resolved;
  };
  return obj;
};
export const wrapParentalControlledSettingWithExperimentDefaults = function wrapParentalControlledSettingWithExperimentDefaults(arg0) {
  ({ baseSetting: closure_0, isEligible: closure_1, useIsEligible: closure_2, eligibleDefault: closure_3, ineligibleDefault: closure_4, onUseDefault: closure_5 } = arg0);
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
