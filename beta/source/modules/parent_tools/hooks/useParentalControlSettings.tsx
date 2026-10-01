// Module ID: 14353
// Function ID: 14354
// Name: useParentalControlSettings
// Dependencies: [5, 19, 6960, 7847, 8107, 14354, 14357, 1186, 6719, 6416, 8105, 504, 6959, 7852, 2]
// Exports: useAllowFriendsFromMutualGuildsOnlyForTeen, useDefaultGuildsRestricted, useIsParentallyControlled, useParentalControlledConsent, useParentalControlledExplicitContentSettings, useParentalControlledGoreContentSettings

// Module 14353 (useParentalControlSettings)
import preloaded_user_settings from "preloaded_user_settings" /* 1186 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6416 */;
import SensitiveMediaGoreRedactionSettingsUtils from "SensitiveMediaGoreRedactionSettingsUtils" /* 6719 */;
import Constants from "Constants" /* 7847 */;
import useUserLinks from "useUserLinks" /* 8105 */;
import useSelectedTeen from "useSelectedTeen" /* 8107 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 14354 */;
import FamilyCenterControlledSettingsUtils from "FamilyCenterControlledSettingsUtils" /* 14357 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import FamilyCenterControlledSettingsStore from "FamilyCenterControlledSettingsStore" /* 6960 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c2, c5, closure_0;

const SafetyToastType = Constants.SafetyToastType;
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useParentalControlSettings.tsx");

export const useParentalControlledExplicitContentSettings = function useParentalControlledExplicitContentSettings() {
  let obj4;
  let prop;
  let prop1;
  let resolveExplicitContentSettingWithDefaultsForTeen2;
  const obj = useSelectedTeen;
  const selectedTeen = obj.useSelectedTeen();
  const ParentalControlledExplicitContent = ParentalControlledUserSettings.ParentalControlledExplicitContent;
  let id;
  const useControlledSetting = ParentalControlledExplicitContent.useControlledSetting;
  if (selectedTeen != null) {
    id = selectedTeen.id;
  }
  const controlledSetting = useControlledSetting(id);
  let tmp6 = null;
  if (null != selectedTeen) {
    let id1;
    const resolveExplicitContentSettingWithDefaultsForTeen = FamilyCenterControlledSettingsUtils.resolveExplicitContentSettingWithDefaultsForTeen;
    FamilyCenterControlledSettingsUtils;
    if (selectedTeen != null) {
      id1 = selectedTeen.id;
    }
    const obj2 = { teenId: id1, setting: prop };
    prop = undefined;
    if (controlledSetting != null) {
      prop = controlledSetting.explicitContentNonFriendDm;
    }
    let id2;
    const obj3 = { explicitContentNonFriendDm: resolveExplicitContentSettingWithDefaultsForTeen(obj2), explicitContentFriendDm: resolveExplicitContentSettingWithDefaultsForTeen2(obj4), explicitContentGuilds: preloaded_user_settings.ExplicitContentRedaction.BLUR };
    resolveExplicitContentSettingWithDefaultsForTeen2 = FamilyCenterControlledSettingsUtils.resolveExplicitContentSettingWithDefaultsForTeen;
    FamilyCenterControlledSettingsUtils;
    if (selectedTeen != null) {
      id2 = selectedTeen.id;
    }
    obj4 = { teenId: id2, setting: prop1, isFriend: true };
    prop1 = undefined;
    if (controlledSetting != null) {
      prop1 = controlledSetting.explicitContentFriendDm;
    }
    tmp6 = obj3;
  }
  return tmp6;
};
export const useParentalControlledGoreContentSettings = function useParentalControlledGoreContentSettings() {
  let goreContentFriendDm;
  let goreContentNonFriendDm;
  const obj = useSelectedTeen;
  const selectedTeen = obj.useSelectedTeen();
  const ParentalControlledGoreContent = ParentalControlledUserSettings.ParentalControlledGoreContent;
  let id;
  const useControlledSetting = ParentalControlledGoreContent.useControlledSetting;
  if (selectedTeen != null) {
    id = selectedTeen.id;
  }
  let controlledSetting = useControlledSetting(id);
  if (null == selectedTeen) {
    return null;
  } else {
    if (controlledSetting == null) {
      controlledSetting = {};
    }
    ({ goreContentNonFriendDm, goreContentFriendDm } = controlledSetting);
    const tmpResult = FamilyCenterControlledSettingsUtils;
    if (!tmpResult.isSetAndNotDefault(goreContentNonFriendDm)) {
      const tmpResult4 = SensitiveMediaGoreRedactionSettingsUtils;
      goreContentNonFriendDm = tmpResult4.resolveGoreSettingWithDefaultsForTeen({ isDm: true });
    }
    const obj2 = { goreContentNonFriendDm, goreContentFriendDm, goreContentGuilds: preloaded_user_settings.ExplicitContentRedaction.BLUR };
    const tmpResult5 = FamilyCenterControlledSettingsUtils;
    if (!tmpResult5.isSetAndNotDefault(goreContentFriendDm)) {
      const tmpResult6 = SensitiveMediaGoreRedactionSettingsUtils;
      goreContentFriendDm = tmpResult6.resolveGoreSettingWithDefaultsForTeen({ isDm: true, isFriend: true });
    }
    return obj2;
  }
};
export const useDefaultGuildsRestricted = function useDefaultGuildsRestricted() {
  const obj = useSelectedTeen;
  const selectedTeen = obj.useSelectedTeen();
  const ParentalControlledDefaultGuildsRestricted = ParentalControlledUserSettings.ParentalControlledDefaultGuildsRestricted;
  let id;
  const useControlledSetting = ParentalControlledDefaultGuildsRestricted.useControlledSetting;
  if (selectedTeen != null) {
    id = selectedTeen.id;
  }
  const controlledSetting = useControlledSetting(id);
  const ParentalControlledDefaultGuildsRestrictedV2 = ParentalControlledUserSettings.ParentalControlledDefaultGuildsRestrictedV2;
  let id1;
  const useControlledSetting2 = ParentalControlledDefaultGuildsRestrictedV2.useControlledSetting;
  if (selectedTeen != null) {
    id1 = selectedTeen.id;
  }
  let controlledSetting2 = useControlledSetting2(id1);
  if (null == controlledSetting2) {
    controlledSetting2 = controlledSetting || controlledSetting;
  }
  return controlledSetting2;
};
export const useAllowFriendsFromMutualGuildsOnlyForTeen = function useAllowFriendsFromMutualGuildsOnlyForTeen() {
  let controlledSetting;
  let obj = controlledSetting(8107);
  const selectedTeen = obj.useSelectedTeen();
  const ParentalControlledFriendSourceFlags = controlledSetting(14354).ParentalControlledFriendSourceFlags;
  let id;
  const useControlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting;
  if (selectedTeen != null) {
    id = selectedTeen.id;
  }
  controlledSetting = useControlledSetting(id);
  const items = [controlledSetting];
  const memo = react.useMemo(() => {
    const obj = UserSettingsUtils;
    return obj.computeFlags(controlledSetting);
  }, items);
  return memo.mutualGuilds && !memo.all;
};
export const useIsParentallyControlled = function useIsParentallyControlled() {
  const obj = useUserLinks;
  return obj.useHasActiveParentLinks();
};
export const useParentalControlledConsent = function useParentalControlledConsent(PERSONALIZATION) {
  _require = PERSONALIZATION;
  let obj = require("useSelectedTeen");
  let closure_1 = obj.useSelectedTeenId();
  let obj2 = require("get initialized");
  let items = [FamilyCenterControlledSettingsStore];
  _require = PERSONALIZATION;
  const stateFromStores = obj2.useStateFromStores(items, () => FamilyCenterControlledSettingsStore.hasConsented(closure_1, PERSONALIZATION));
  let obj3 = require("useSelectedTeen");
  const selectedTeenId = obj3.useSelectedTeenId();
  const useCallback = react.useCallback;
  _require = _asyncToGenerator(async (arg0, value) => {
    let obj3;
    closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c4;
      try {
        c5 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_1 = tmp;
            if (null != closure_1) {
              let items1;
              let items2;
              if (closure_0) {
                const items = [closure_0];
                items1 = items;
              } else {
                items1 = [];
              }
              if (closure_0) {
                items2 = [];
              } else {
                items2 = [closure_0];
              }
              c4 = 1;
              c2 = 2;
              c5 = 1;
              const obj6 = { value: obj3.updateTeenConsents(tmp23, items1, items2), done: false };
              obj3 = closure_2_1(dependencyMap[12]);
              return obj6;
            }
          }
        } else if (1 === tmp4) {
          c4 = 0;
          const obj2 = closure_2_1(dependencyMap[13]);
          obj2.showFailedToast(constants.GENERIC_ERROR);
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c4 = 0;
        }
        c5 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp15) {
        let closure_3 = tmp15;
        if (0 === c4) {
          c5 = 3;
          throw tmp15;
        } else {
          c2 = 1;
        }
      }
    }
  });
  let items1 = [selectedTeenId, PERSONALIZATION];
  let obj4 = {
    hasConsented: stateFromStores,
    updateConsent: useCallback(function() {
      return closure_0(...arguments);
    }, items1)
  };
  return obj4;
};
