// Module ID: 17227
// Function ID: 17228
// Name: FamilyCenterControlledSettingsUtils
// Dependencies: [1196, 17224, 8576, 17228, 8574, 2]
// Exports: isSetAndNotDefault, resolveExplicitContentSettingWithDefaultsForTeen, updateExplicitContentSetting, updateGoreContentSetting

// Module 17227 (FamilyCenterControlledSettingsUtils)
import preloaded_user_settings from "preloaded_user_settings" /* 1196 */;
import SensitiveMediaExplicitRedactionSettingsUtils from "SensitiveMediaExplicitRedactionSettingsUtils" /* 8574 */;
import SensitiveMediaGoreRedactionSettingsUtils from "SensitiveMediaGoreRedactionSettingsUtils" /* 8576 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 17224 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 17228 */;
import size from "module_2" /* 2 */;

function getGoreContentSettingOrDefault(arg0) {
  let goreContentFriendDm;
  let goreContentNonFriendDm;
  const ParentalControlledGoreContent = ParentalControlledUserSettings.ParentalControlledGoreContent;
  let controlledSetting = ParentalControlledGoreContent.getControlledSetting(arg0);
  if (controlledSetting == null) {
    controlledSetting = {};
  }
  ({ goreContentNonFriendDm, goreContentFriendDm } = controlledSetting);
  const tmp3 = null != goreContentNonFriendDm && goreContentNonFriendDm !== preloaded_user_settings.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  if (!tmp3) {
    const tmpResult = SensitiveMediaGoreRedactionSettingsUtils;
    goreContentNonFriendDm = tmpResult.resolveGoreSettingWithDefaultsForTeen({ isDm: true });
  }
  const obj = { goreContentNonFriendDm, goreContentFriendDm, goreContentGuilds: preloaded_user_settings.ExplicitContentRedaction.BLUR };
  const tmp4 = null != goreContentFriendDm && goreContentFriendDm !== preloaded_user_settings.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  if (!tmp4) {
    const tmpResult2 = SensitiveMediaGoreRedactionSettingsUtils;
    goreContentFriendDm = tmpResult2.resolveGoreSettingWithDefaultsForTeen({ isDm: true, isFriend: true });
  }
  return obj;
}
function getExplicitContentSettingOrDefault(teenId) {
  let isFriend;
  let prop;
  let prop1;
  let setting;
  const ParentalControlledExplicitContent = ParentalControlledUserSettings.ParentalControlledExplicitContent;
  const controlledSetting = ParentalControlledExplicitContent.getControlledSetting(teenId);
  const obj = { teenId, setting: prop };
  prop = undefined;
  if (controlledSetting != null) {
    prop = controlledSetting.explicitContentNonFriendDm;
  }
  ({ setting, isFriend, teenId } = obj);
  if (isFriend === undefined) {
    isFriend = false;
  }
  const tmp5 = null != setting && setting !== preloaded_user_settings.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  if (!tmp5) {
    let tmp8;
    const ParentalControlledLegacyExplicitContent = tmp(17224).ParentalControlledLegacyExplicitContent;
    const controlledSetting1 = ParentalControlledLegacyExplicitContent.getControlledSetting(teenId);
    const tmpResult = SensitiveMediaExplicitRedactionSettingsUtils;
    if (isFriend) {
      tmp8 = tmpResult.TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_FRIEND_DM[controlledSetting1];
    } else {
      tmp8 = tmpResult.TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_NON_FRIEND_DM[controlledSetting1];
    }
    setting = tmp8;
  }
  const obj2 = { explicitContentNonFriendDm: setting, explicitContentFriendDm: prop1, explicitContentGuilds: preloaded_user_settings.ExplicitContentRedaction.BLUR };
  prop1 = undefined;
  if (controlledSetting != null) {
    prop1 = controlledSetting.explicitContentFriendDm;
  }
  const tmp10 = null != prop1 && prop1 !== preloaded_user_settings.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  if (!tmp10) {
    const ParentalControlledLegacyExplicitContent2 = tmp(17224).ParentalControlledLegacyExplicitContent;
    const controlledSetting2 = ParentalControlledLegacyExplicitContent2.getControlledSetting(teenId);
    prop1 = tmp(8574).TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_FRIEND_DM[controlledSetting2];
  }
  return obj2;
}
const result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterControlledSettingsUtils.tsx");

export function isSetAndNotDefault(goreContentFriendDm) {
  const tmp = null != goreContentFriendDm && goreContentFriendDm !== preloaded_user_settings.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  return tmp;
}
export { getGoreContentSettingOrDefault };
export function updateGoreContentSetting(selectedTeenId, arg1) {
  const tmp = getGoreContentSettingOrDefault(selectedTeenId);
  const showToastIfSaveFails = FamilyCenterSaveErrorUtils.showToastIfSaveFails;
  FamilyCenterSaveErrorUtils;
  const ParentalControlledGoreContent = ParentalControlledUserSettings.ParentalControlledGoreContent;
  const updateControlledSetting = ParentalControlledGoreContent.updateControlledSetting;
  const obj = {};
  const merged = Object.assign(tmp);
  const merged1 = Object.assign(arg1);
  showToastIfSaveFails(updateControlledSetting(selectedTeenId, obj));
}
export function resolveExplicitContentSettingWithDefaultsForTeen(teenId) {
  let isFriend;
  let setting;
  ({ setting, isFriend } = teenId);
  teenId = teenId.teenId;
  if (isFriend === undefined) {
    isFriend = false;
  }
  const tmp = null != setting && setting !== preloaded_user_settings.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  if (tmp) {
    return setting;
  } else {
    let tmp8;
    const ParentalControlledLegacyExplicitContent = ParentalControlledUserSettings.ParentalControlledLegacyExplicitContent;
    const controlledSetting = ParentalControlledLegacyExplicitContent.getControlledSetting(teenId);
    const tmp7 = SensitiveMediaExplicitRedactionSettingsUtils;
    if (isFriend) {
      tmp8 = tmp7.TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_FRIEND_DM[controlledSetting];
    } else {
      tmp8 = tmp7.TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_NON_FRIEND_DM[controlledSetting];
    }
    return tmp8;
  }
}
export { getExplicitContentSettingOrDefault };
export function updateExplicitContentSetting(selectedTeenId, arg1) {
  const tmp = getExplicitContentSettingOrDefault(selectedTeenId);
  const showToastIfSaveFails = FamilyCenterSaveErrorUtils.showToastIfSaveFails;
  FamilyCenterSaveErrorUtils;
  const ParentalControlledExplicitContent = ParentalControlledUserSettings.ParentalControlledExplicitContent;
  const updateControlledSetting = ParentalControlledExplicitContent.updateControlledSetting;
  const obj = {};
  const merged = Object.assign(tmp);
  const merged1 = Object.assign(arg1);
  showToastIfSaveFails(updateControlledSetting(selectedTeenId, obj));
}
