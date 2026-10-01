// Module ID: 14355
// Function ID: 14356
// Name: ParentalControlledUserSettingsDefinitions
// Dependencies: [6960, 6959, 504, 2]
// Exports: defineParentalControlledSetting, wrapParentalControlledSettingWithExperimentDefaults

// Module 14355 (ParentalControlledUserSettingsDefinitions)
import FamilyCenterControlledSettingsStore from "FamilyCenterControlledSettingsStore" /* 6960 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/family_center/ParentalControlledUserSettingsDefinitions.tsx");

export const defineParentalControlledSetting = function defineParentalControlledSetting(privacy, defaultGuildsRestricted, explicitContentFromProto, explicitContentToProto, arg4) {
  let obj = arg4;
  if (arg4 === undefined) {
    obj = {};
  }
  let fn = obj.comparator;
  if (fn === undefined) {
    fn = function a(arg0, arg1) {
      return arg0 === arg1;
    };
  }
  function getControlledSetting(arg0) {
    const settings = FamilyCenterControlledSettingsStore.getSettings(arg0);
    let tmp3;
    const tmp = explicitContentFromProto;
    if (settings != null) {
      if (settings[privacy] != null) {
        tmp3 = tmp5[defaultGuildsRestricted];
      }
    }
    return tmp(tmp3);
  }
  function S(arg0, arg1) {

  }
  return {
    getControlledSetting,
    updateControlledSetting: (arg0, fn) => {
      let resolved;
      let tmp = fn;
      if (typeof fn === "function") {
        const settings = explicitContentToProto.getSettings(arg0);
        let tmp4;
        const tmp11 = explicitContentFromProto;
        if (settings != null) {
          if (settings[closure_0] != null) {
            tmp4 = tmp3[defaultGuildsRestricted];
          }
        }
        tmp = fn(tmp11(tmp4));
      }
      closure_0 = tmp;
      if (null == arg0) {
        resolved = Promise.resolve();
      } else {
        const obj = defaultGuildsRestricted(explicitContentFromProto[1]);
        resolved = obj.updateTeenSettings(arg0, closure_0, (arg0) => {
          arg0[defaultGuildsRestricted] = explicitContentToProto(closure_0, arg0[defaultGuildsRestricted]);
        });
      }
      return resolved;
    },
    useControlledSetting(arg0) {
      let closure_0;
      let settings;
      privacy = arg0;
      const items = [settings];
      const items1 = [arg0];
      const obj = privacy(explicitContentFromProto[2]);
      return obj.useStateFromStores(items, () => {
        settings = settings.getSettings(closure_0);
        let tmp3;
        const tmp = explicitContentFromProto;
        if (settings != null) {
          if (settings[closure_0] != null) {
            tmp3 = tmp5[defaultGuildsRestricted];
          }
        }
        return tmp(tmp3);
      }, items1, fn);
    }
  };
};
export const wrapParentalControlledSettingWithExperimentDefaults = function wrapParentalControlledSettingWithExperimentDefaults(arg0) {
  let closure_4;
  let closure_5;
  ({ baseSetting: require, isEligible: importDefault, useIsEligible: dependencyMap, eligibleDefault: FamilyCenterControlledSettingsStore, ineligibleDefault: closure_4, onUseDefault: closure_5 } = arg0);
  return {
    getControlledSetting(arg0) {
      let controlledSetting = require.getControlledSetting(arg0);
      if (null == controlledSetting) {
        let tmp5;
        if (closure_5 != null) {
          tmp2();
        }
        if (importDefault()) {
          tmp5 = FamilyCenterControlledSettingsStore();
        } else {
          tmp5 = closure_4;
        }
        controlledSetting = tmp5;
      }
      return controlledSetting;
    },
    useControlledSetting(arg0) {
      let controlledSetting = require.useControlledSetting(arg0);
      if (null == controlledSetting) {
        let tmp4;
        if (closure_5 != null) {
          closure_5();
        }
        if (tmp2) {
          tmp4 = FamilyCenterControlledSettingsStore();
        } else {
          tmp4 = closure_4;
        }
        controlledSetting = tmp4;
      }
      return controlledSetting;
    },
    updateControlledSetting(selectedTeenId, addFlagResult) {
      return require.updateControlledSetting(selectedTeenId, addFlagResult);
    }
  };
};
