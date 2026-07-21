// Module ID: 13610
// Function ID: 103140
// Name: isSetAndNotDefault
// Dependencies: []
// Exports: updateExplicitContentSetting, updateGoreContentSetting

// Module 13610 (isSetAndNotDefault)
function isSetAndNotDefault(goreContentFriendDm) {
  let tmp = null != goreContentFriendDm;
  if (tmp) {
    tmp = goreContentFriendDm !== require(dependencyMap[0]).ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  }
  return tmp;
}
function getGoreContentSettingOrDefault(arg0) {
  let goreContentFriendDm;
  let goreContentNonFriendDm;
  const ParentalControlledGoreContent = require(dependencyMap[1]).ParentalControlledGoreContent;
  let controlledSetting = ParentalControlledGoreContent.getControlledSetting(arg0);
  if (null == controlledSetting) {
    controlledSetting = {};
  }
  ({ goreContentNonFriendDm, goreContentFriendDm } = controlledSetting);
  let obj = {};
  if (!isSetAndNotDefault(goreContentNonFriendDm)) {
    obj = { isDm: true };
    goreContentNonFriendDm = require(dependencyMap[2]).resolveGoreSettingWithDefaultsForTeen(obj);
    const obj3 = require(dependencyMap[2]);
  }
  obj.goreContentNonFriendDm = goreContentNonFriendDm;
  if (!isSetAndNotDefault(goreContentFriendDm)) {
    goreContentFriendDm = require(dependencyMap[2]).resolveGoreSettingWithDefaultsForTeen({ metadataRefreshing: null, metadataAlreadyRefreshed: null });
    const obj5 = require(dependencyMap[2]);
  }
  obj.goreContentFriendDm = goreContentFriendDm;
  obj.goreContentGuilds = require(dependencyMap[0]).ExplicitContentRedaction.BLUR;
  return obj;
}
function resolveExplicitContentSettingWithDefaultsForTeen(teenId) {
  let isFriend;
  let setting;
  ({ setting, isFriend } = teenId);
  if (isFriend === undefined) {
    isFriend = false;
  }
  if (isSetAndNotDefault(setting)) {
    return setting;
  } else {
    const ParentalControlledLegacyExplicitContent = require(dependencyMap[1]).ParentalControlledLegacyExplicitContent;
    const controlledSetting = ParentalControlledLegacyExplicitContent.getControlledSetting(teenId.teenId);
    const tmp6 = require(dependencyMap[3]);
    if (isFriend) {
      let tmp7 = tmp6.TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_FRIEND_DM[controlledSetting];
    } else {
      tmp7 = tmp6.TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_NON_FRIEND_DM[controlledSetting];
    }
    return tmp7;
  }
}
function getExplicitContentSettingOrDefault(teenId) {
  const ParentalControlledExplicitContent = require(dependencyMap[1]).ParentalControlledExplicitContent;
  const controlledSetting = ParentalControlledExplicitContent.getControlledSetting(teenId);
  let obj = {};
  obj = { teenId };
  let prop;
  if (null != controlledSetting) {
    prop = controlledSetting.explicitContentNonFriendDm;
  }
  obj.setting = prop;
  obj.explicitContentNonFriendDm = resolveExplicitContentSettingWithDefaultsForTeen(obj);
  obj = { teenId };
  let prop1;
  if (null != controlledSetting) {
    prop1 = controlledSetting.explicitContentFriendDm;
  }
  obj.setting = prop1;
  obj.isFriend = true;
  obj.explicitContentFriendDm = resolveExplicitContentSettingWithDefaultsForTeen(obj);
  obj.explicitContentGuilds = require(dependencyMap[0]).ExplicitContentRedaction.BLUR;
  return obj;
}
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/parent_tools/FamilyCenterControlledSettingsUtils.tsx");

export { isSetAndNotDefault };
export { getGoreContentSettingOrDefault };
export const updateGoreContentSetting = function updateGoreContentSetting(selectedTeenId) {
  const ParentalControlledGoreContent = require(dependencyMap[1]).ParentalControlledGoreContent;
  const merged = Object.assign(getGoreContentSettingOrDefault(selectedTeenId));
  const merged1 = Object.assign(arg1);
  const result = ParentalControlledGoreContent.updateControlledSetting(selectedTeenId, {});
};
export { resolveExplicitContentSettingWithDefaultsForTeen };
export { getExplicitContentSettingOrDefault };
export const updateExplicitContentSetting = function updateExplicitContentSetting(selectedTeenId) {
  const ParentalControlledExplicitContent = require(dependencyMap[1]).ParentalControlledExplicitContent;
  const merged = Object.assign(getExplicitContentSettingOrDefault(selectedTeenId));
  const merged1 = Object.assign(arg1);
  const result = ParentalControlledExplicitContent.updateControlledSetting(selectedTeenId, {});
};
