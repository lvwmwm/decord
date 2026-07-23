// Module ID: 13731
// Function ID: 105329
// Name: isSetAndNotDefault
// Dependencies: [1282, 13728, 5678, 5676, 2]
// Exports: updateExplicitContentSetting, updateGoreContentSetting

// Module 13731 (isSetAndNotDefault)
function isSetAndNotDefault(goreContentFriendDm) {
  let tmp = null != goreContentFriendDm;
  if (tmp) {
    tmp = goreContentFriendDm !== require(1282) /* _callSuper */.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  }
  return tmp;
}
function getGoreContentSettingOrDefault(arg0) {
  let goreContentFriendDm;
  let goreContentNonFriendDm;
  const ParentalControlledGoreContent = require(13728) /* result */.ParentalControlledGoreContent;
  let controlledSetting = ParentalControlledGoreContent.getControlledSetting(arg0);
  if (null == controlledSetting) {
    controlledSetting = {};
  }
  ({ goreContentNonFriendDm, goreContentFriendDm } = controlledSetting);
  let obj = {};
  if (!isSetAndNotDefault(goreContentNonFriendDm)) {
    obj = { isDm: true };
    goreContentNonFriendDm = require(5678) /* resolveGoreSettingWithDefaults */.resolveGoreSettingWithDefaultsForTeen(obj);
    const obj3 = require(5678) /* resolveGoreSettingWithDefaults */;
  }
  obj.goreContentNonFriendDm = goreContentNonFriendDm;
  if (!isSetAndNotDefault(goreContentFriendDm)) {
    goreContentFriendDm = require(5678) /* resolveGoreSettingWithDefaults */.resolveGoreSettingWithDefaultsForTeen({ isDm: true, isFriend: true });
    const obj5 = require(5678) /* resolveGoreSettingWithDefaults */;
  }
  obj.goreContentFriendDm = goreContentFriendDm;
  obj.goreContentGuilds = require(1282) /* _callSuper */.ExplicitContentRedaction.BLUR;
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
    const ParentalControlledLegacyExplicitContent = require(13728) /* result */.ParentalControlledLegacyExplicitContent;
    const controlledSetting = ParentalControlledLegacyExplicitContent.getControlledSetting(teenId.teenId);
    const tmp6 = require(5676) /* resolveExplicitContentSettingWithDefaults */;
    if (isFriend) {
      let tmp7 = tmp6.TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_FRIEND_DM[controlledSetting];
    } else {
      tmp7 = tmp6.TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_NON_FRIEND_DM[controlledSetting];
    }
    return tmp7;
  }
}
function getExplicitContentSettingOrDefault(teenId) {
  const ParentalControlledExplicitContent = require(13728) /* result */.ParentalControlledExplicitContent;
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
  obj.explicitContentGuilds = require(1282) /* _callSuper */.ExplicitContentRedaction.BLUR;
  return obj;
}
let result = require("resolveGoreSettingWithDefaults").fileFinishedImporting("modules/parent_tools/FamilyCenterControlledSettingsUtils.tsx");

export { isSetAndNotDefault };
export { getGoreContentSettingOrDefault };
export const updateGoreContentSetting = function updateGoreContentSetting(selectedTeenId) {
  const ParentalControlledGoreContent = require(13728) /* result */.ParentalControlledGoreContent;
  const merged = Object.assign(getGoreContentSettingOrDefault(selectedTeenId));
  const merged1 = Object.assign(arg1);
  const result = ParentalControlledGoreContent.updateControlledSetting(selectedTeenId, {});
};
export { resolveExplicitContentSettingWithDefaultsForTeen };
export { getExplicitContentSettingOrDefault };
export const updateExplicitContentSetting = function updateExplicitContentSetting(selectedTeenId) {
  const ParentalControlledExplicitContent = require(13728) /* result */.ParentalControlledExplicitContent;
  const merged = Object.assign(getExplicitContentSettingOrDefault(selectedTeenId));
  const merged1 = Object.assign(arg1);
  const result = ParentalControlledExplicitContent.updateControlledSetting(selectedTeenId, {});
};
