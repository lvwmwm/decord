// Module ID: 4320
// Function ID: 37906
// Name: Presets
// Dependencies: []
// Exports: arePresetSettingsUnset, presetFromSettings, presetName

// Module 4320 (Presets)
const UserNotificationSettings = require(dependencyMap[0]).UserNotificationSettings;
const UnreadSetting = require(dependencyMap[1]).UnreadSetting;
const obj = { ALL_MESSAGES: "all_messages", MENTIONS: "mentions", NOTHING: "nothing", CUSTOM: "custom" };
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/notifications/settings/utils/notificationSettingsPresetUtils.tsx");

export const Presets = obj;
export const presetFromSettings = function presetFromSettings(unreadSetting, messageNotifications) {
  const items = [messageNotifications, unreadSetting];
  const match = require(dependencyMap[2]).match(items);
  const items1 = [UserNotificationSettings.ALL_MESSAGES, UnreadSetting.ALL_MESSAGES];
  const str = require(dependencyMap[2]);
  const items2 = [UserNotificationSettings.ONLY_MENTIONS, UnreadSetting.UNSET];
  const withResult = match.with(items1, () => constants.ALL_MESSAGES);
  const items3 = [UserNotificationSettings.ONLY_MENTIONS, UnreadSetting.ONLY_MENTIONS];
  const withResult1 = match.with(items1, () => constants.ALL_MESSAGES).with(items2, () => constants.MENTIONS);
  const items4 = [UserNotificationSettings.NO_MESSAGES, UnreadSetting.UNSET];
  const withResult2 = match.with(items1, () => constants.ALL_MESSAGES).with(items2, () => constants.MENTIONS).with(items3, () => constants.MENTIONS);
  const items5 = [UserNotificationSettings.NO_MESSAGES, UnreadSetting.ONLY_MENTIONS];
  const withResult3 = match.with(items1, () => constants.ALL_MESSAGES).with(items2, () => constants.MENTIONS).with(items3, () => constants.MENTIONS).with(items4, () => constants.NOTHING);
  return match.with(items1, () => constants.ALL_MESSAGES).with(items2, () => constants.MENTIONS).with(items3, () => constants.MENTIONS).with(items4, () => constants.NOTHING).with(items5, () => constants.NOTHING).otherwise(() => constants.CUSTOM);
};
export const presetName = function presetName(arg0) {
  const match = require(dependencyMap[2]).match(arg0);
  const str = require(dependencyMap[2]);
  const withResult = match.with(obj.ALL_MESSAGES, () => {
    const intl = callback(closure_1[3]).intl;
    return intl.string(callback(closure_1[3]).t.hZrr6k);
  });
  const withResult1 = match.with(obj.ALL_MESSAGES, () => {
    const intl = callback(closure_1[3]).intl;
    return intl.string(callback(closure_1[3]).t.hZrr6k);
  }).with(obj.MENTIONS, () => {
    const intl = callback(closure_1[3]).intl;
    return intl.string(callback(closure_1[3]).t.y59NJm);
  });
  const withResult2 = match.with(obj.ALL_MESSAGES, () => {
    const intl = callback(closure_1[3]).intl;
    return intl.string(callback(closure_1[3]).t.hZrr6k);
  }).with(obj.MENTIONS, () => {
    const intl = callback(closure_1[3]).intl;
    return intl.string(callback(closure_1[3]).t.y59NJm);
  }).with(obj.NOTHING, () => {
    const intl = callback(closure_1[3]).intl;
    return intl.string(callback(closure_1[3]).t.pGn/bJ);
  });
  return match.with(obj.ALL_MESSAGES, () => {
    const intl = callback(closure_1[3]).intl;
    return intl.string(callback(closure_1[3]).t.hZrr6k);
  }).with(obj.MENTIONS, () => {
    const intl = callback(closure_1[3]).intl;
    return intl.string(callback(closure_1[3]).t.y59NJm);
  }).with(obj.NOTHING, () => {
    const intl = callback(closure_1[3]).intl;
    return intl.string(callback(closure_1[3]).t.pGn/bJ);
  }).with(obj.CUSTOM, () => {
    const intl = callback(closure_1[3]).intl;
    return intl.string(callback(closure_1[3]).t.32yow9);
  }).exhaustive();
};
export const arePresetSettingsUnset = function arePresetSettingsUnset(arg0, arg1) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = arg0 !== UnreadSetting.UNSET;
  }
  if (!tmp) {
    let tmp3 = null != arg1;
    if (tmp3) {
      tmp3 = arg1 !== UserNotificationSettings.NULL;
    }
    tmp = tmp3;
  }
  return !tmp;
};
