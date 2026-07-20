// Module ID: 13597
// Function ID: 103044
// Name: useParentalControlledExplicitContentSettings
// Dependencies: []
// Exports: useAllowFriendsFromMutualGuildsOnlyForTeen, useDefaultGuildsRestricted, useIsParentallyControlled, useParentalControlledConsent, useParentalControlledExplicitContentSettings, useParentalControlledGoreContentSettings

// Module 13597 (useParentalControlledExplicitContentSettings)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const SafetyToastType = arg1(dependencyMap[3]).SafetyToastType;
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/parent_tools/hooks/useParentalControlSettings.tsx");

export const useParentalControlledExplicitContentSettings = function useParentalControlledExplicitContentSettings() {
  let obj = arg1(dependencyMap[4]);
  const selectedTeen = obj.useSelectedTeen();
  const ParentalControlledExplicitContent = arg1(dependencyMap[5]).ParentalControlledExplicitContent;
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
    obj.explicitContentNonFriendDm = arg1(dependencyMap[6]).resolveExplicitContentSettingWithDefaultsForTeen(obj);
    const obj3 = arg1(dependencyMap[6]);
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
    obj.explicitContentFriendDm = arg1(dependencyMap[6]).resolveExplicitContentSettingWithDefaultsForTeen(obj1);
    obj.explicitContentGuilds = arg1(dependencyMap[7]).ExplicitContentRedaction.BLUR;
    tmp4 = obj;
    const obj5 = arg1(dependencyMap[6]);
  }
  return tmp4;
};
export const useParentalControlledGoreContentSettings = function useParentalControlledGoreContentSettings() {
  let goreContentFriendDm;
  let goreContentNonFriendDm;
  let obj = arg1(dependencyMap[4]);
  const selectedTeen = obj.useSelectedTeen();
  const ParentalControlledGoreContent = arg1(dependencyMap[5]).ParentalControlledGoreContent;
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
      goreContentNonFriendDm = arg1(dependencyMap[8]).resolveGoreSettingWithDefaultsForTeen(obj);
      const obj5 = arg1(dependencyMap[8]);
    }
    obj.goreContentNonFriendDm = goreContentNonFriendDm;
    const obj4 = arg1(dependencyMap[6]);
    if (!obj7.isSetAndNotDefault(goreContentFriendDm)) {
      goreContentFriendDm = arg1(dependencyMap[8]).resolveGoreSettingWithDefaultsForTeen({ "Bool(true)": null, "Bool(true)": null });
      const obj8 = arg1(dependencyMap[8]);
    }
    obj.goreContentFriendDm = goreContentFriendDm;
    obj.goreContentGuilds = arg1(dependencyMap[7]).ExplicitContentRedaction.BLUR;
    return obj;
  }
};
export const useDefaultGuildsRestricted = function useDefaultGuildsRestricted() {
  const selectedTeen = arg1(dependencyMap[4]).useSelectedTeen();
  const ParentalControlledDefaultGuildsRestricted = arg1(dependencyMap[5]).ParentalControlledDefaultGuildsRestricted;
  let id;
  if (null != selectedTeen) {
    id = selectedTeen.id;
  }
  const controlledSetting = ParentalControlledDefaultGuildsRestricted.useControlledSetting(id);
  const ParentalControlledDefaultGuildsRestrictedV2 = arg1(dependencyMap[5]).ParentalControlledDefaultGuildsRestrictedV2;
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
  const selectedTeen = arg1(dependencyMap[4]).useSelectedTeen();
  const ParentalControlledFriendSourceFlags = arg1(dependencyMap[5]).ParentalControlledFriendSourceFlags;
  if (null != selectedTeen) {
    id = selectedTeen.id;
  }
  const controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(id);
  const arg1 = controlledSetting;
  const items = [controlledSetting];
  const memo = React.useMemo(() => controlledSetting(closure_2[9]).computeFlags(controlledSetting), items);
  return memo.mutualGuilds && !memo.all;
};
export const useIsParentallyControlled = function useIsParentallyControlled() {
  return arg1(dependencyMap[10]).useHasActiveParentLinks();
};
export const useParentalControlledConsent = function useParentalControlledConsent(PERSONALIZATION) {
  const tmp = function useParentalControlledHasConsented(PERSONALIZATION) {
    let closure_1 = PERSONALIZATION(closure_2[4]).useSelectedTeenId();
    const obj = PERSONALIZATION(closure_2[4]);
    const items = [closure_5];
    return PERSONALIZATION(closure_2[11]).useStateFromStores(items, () => closure_5.hasConsented(closure_1, arg0));
  }(PERSONALIZATION);
  return {
    hasConsented: function useParentalControlledHasConsented(PERSONALIZATION) {
      let closure_1 = PERSONALIZATION(closure_2[4]).useSelectedTeenId();
      const obj = PERSONALIZATION(closure_2[4]);
      const items = [closure_5];
      return PERSONALIZATION(closure_2[11]).useStateFromStores(items, () => closure_5.hasConsented(closure_1, arg0));
    }(PERSONALIZATION),
    updateConsent: function useUpdateParentalControlledConsent(PERSONALIZATION) {
      const selectedTeenId = PERSONALIZATION(closure_2[4]).useSelectedTeenId();
      const items = [selectedTeenId, PERSONALIZATION];
      return React.useCallback(() => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = callback(tmp);
        return function() {
          return callback(...arguments);
        };
      }(), items);
    }(PERSONALIZATION)
  };
};
