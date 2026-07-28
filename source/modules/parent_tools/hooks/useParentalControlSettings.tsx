// Module ID: 13834
// Function ID: 105907
// Name: useParentalControlledExplicitContentSettings
// Dependencies: [5, 31, 5778, 6695, 6237, 13835, 13838, 1282, 5865, 6485, 6235, 566, 5777, 6700, 2]
// Exports: useAllowFriendsFromMutualGuildsOnlyForTeen, useDefaultGuildsRestricted, useIsParentallyControlled, useParentalControlledConsent, useParentalControlledExplicitContentSettings, useParentalControlledGoreContentSettings

// Module 13834 (useParentalControlledExplicitContentSettings)
import result from "result";
import closure_4 from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { SafetyToastType } from "SafetyToastType";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/parent_tools/hooks/useParentalControlSettings.tsx");

export const useParentalControlledExplicitContentSettings = function useParentalControlledExplicitContentSettings() {
  let obj = require(6237) /* useSelectedTeen */;
  const selectedTeen = obj.useSelectedTeen();
  const ParentalControlledExplicitContent = require(13835) /* result */.ParentalControlledExplicitContent;
  let id;
  if (null != selectedTeen) {
    id = selectedTeen.id;
  }
  const controlledSetting = ParentalControlledExplicitContent.useControlledSetting(id);
  let tmp4 = null;
  if (null != selectedTeen) {
    obj = {};
    obj = {};
    let id1;
    if (null != selectedTeen) {
      id1 = selectedTeen.id;
    }
    obj.teenId = id1;
    let prop;
    if (null != controlledSetting) {
      prop = controlledSetting.explicitContentNonFriendDm;
    }
    obj.setting = prop;
    obj.explicitContentNonFriendDm = require(13838) /* isSetAndNotDefault */.resolveExplicitContentSettingWithDefaultsForTeen(obj);
    const obj3 = require(13838) /* isSetAndNotDefault */;
    const obj1 = {};
    let id2;
    if (null != selectedTeen) {
      id2 = selectedTeen.id;
    }
    obj1.teenId = id2;
    let prop1;
    if (null != controlledSetting) {
      prop1 = controlledSetting.explicitContentFriendDm;
    }
    obj1.setting = prop1;
    obj1.isFriend = true;
    obj.explicitContentFriendDm = require(13838) /* isSetAndNotDefault */.resolveExplicitContentSettingWithDefaultsForTeen(obj1);
    obj.explicitContentGuilds = require(1282) /* _callSuper */.ExplicitContentRedaction.BLUR;
    tmp4 = obj;
    const obj5 = require(13838) /* isSetAndNotDefault */;
  }
  return tmp4;
};
export const useParentalControlledGoreContentSettings = function useParentalControlledGoreContentSettings() {
  let goreContentFriendDm;
  let goreContentNonFriendDm;
  let obj = require(6237) /* useSelectedTeen */;
  const selectedTeen = obj.useSelectedTeen();
  const ParentalControlledGoreContent = require(13835) /* result */.ParentalControlledGoreContent;
  let id;
  if (null != selectedTeen) {
    id = selectedTeen.id;
  }
  let controlledSetting = ParentalControlledGoreContent.useControlledSetting(id);
  if (null == selectedTeen) {
    return null;
  } else {
    if (null == controlledSetting) {
      controlledSetting = {};
    }
    ({ goreContentNonFriendDm, goreContentFriendDm } = controlledSetting);
    obj = {};
    if (!obj4.isSetAndNotDefault(goreContentNonFriendDm)) {
      obj = { isDm: true };
      goreContentNonFriendDm = require(5865) /* resolveGoreSettingWithDefaults */.resolveGoreSettingWithDefaultsForTeen(obj);
      const obj5 = require(5865) /* resolveGoreSettingWithDefaults */;
    }
    obj.goreContentNonFriendDm = goreContentNonFriendDm;
    obj4 = require(13838) /* isSetAndNotDefault */;
    if (!obj7.isSetAndNotDefault(goreContentFriendDm)) {
      goreContentFriendDm = require(5865) /* resolveGoreSettingWithDefaults */.resolveGoreSettingWithDefaultsForTeen({ isDm: true, isFriend: true });
      const obj8 = require(5865) /* resolveGoreSettingWithDefaults */;
    }
    obj.goreContentFriendDm = goreContentFriendDm;
    obj.goreContentGuilds = require(1282) /* _callSuper */.ExplicitContentRedaction.BLUR;
    return obj;
  }
};
export const useDefaultGuildsRestricted = function useDefaultGuildsRestricted() {
  const selectedTeen = require(6237) /* useSelectedTeen */.useSelectedTeen();
  const ParentalControlledDefaultGuildsRestricted = require(13835) /* result */.ParentalControlledDefaultGuildsRestricted;
  let id;
  if (null != selectedTeen) {
    id = selectedTeen.id;
  }
  const controlledSetting = ParentalControlledDefaultGuildsRestricted.useControlledSetting(id);
  const ParentalControlledDefaultGuildsRestrictedV2 = require(13835) /* result */.ParentalControlledDefaultGuildsRestrictedV2;
  let id1;
  if (null != selectedTeen) {
    id1 = selectedTeen.id;
  }
  let controlledSetting1 = ParentalControlledDefaultGuildsRestrictedV2.useControlledSetting(id1);
  if (null == controlledSetting1) {
    let tmp7 = !tmp6;
    if (!controlledSetting) {
      tmp7 = controlledSetting;
    }
    controlledSetting1 = tmp7;
  }
  return controlledSetting1;
};
export const useAllowFriendsFromMutualGuildsOnlyForTeen = function useAllowFriendsFromMutualGuildsOnlyForTeen() {
  let id;
  const selectedTeen = controlledSetting(6237).useSelectedTeen();
  const ParentalControlledFriendSourceFlags = controlledSetting(13835).ParentalControlledFriendSourceFlags;
  if (null != selectedTeen) {
    id = selectedTeen.id;
  }
  controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(id);
  const items = [controlledSetting];
  const memo = React.useMemo(() => controlledSetting(outer1_2[9]).computeFlags(controlledSetting), items);
  return memo.mutualGuilds && !memo.all;
};
export const useIsParentallyControlled = function useIsParentallyControlled() {
  return require(6235) /* useUserIdsForLinkStatus */.useHasActiveParentLinks();
};
export const useParentalControlledConsent = function useParentalControlledConsent(PERSONALIZATION) {
  const tmp = (function useParentalControlledHasConsented(PERSONALIZATION) {
    let closure_0 = PERSONALIZATION;
    let closure_1 = outer1_0(outer1_2[4]).useSelectedTeenId();
    const obj = outer1_0(outer1_2[4]);
    const items = [outer1_5];
    return outer1_0(outer1_2[11]).useStateFromStores(items, () => outer2_5.hasConsented(closure_1, closure_0));
  })(PERSONALIZATION);
  return {
    hasConsented: (function useParentalControlledHasConsented(PERSONALIZATION) {
      let closure_0 = PERSONALIZATION;
      let closure_1 = outer1_0(outer1_2[4]).useSelectedTeenId();
      const obj = outer1_0(outer1_2[4]);
      const items = [outer1_5];
      return outer1_0(outer1_2[11]).useStateFromStores(items, () => outer2_5.hasConsented(closure_1, closure_0));
    })(PERSONALIZATION),
    updateConsent: (function useUpdateParentalControlledConsent(PERSONALIZATION) {
      let closure_0 = PERSONALIZATION;
      const selectedTeenId = outer1_0(outer1_2[4]).useSelectedTeenId();
      const items = [selectedTeenId, PERSONALIZATION];
      return outer1_4.useCallback((() => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = outer2_3(tmp);
        return function() {
          return callback(...arguments);
        };
      })(), items);
    })(PERSONALIZATION)
  };
};
