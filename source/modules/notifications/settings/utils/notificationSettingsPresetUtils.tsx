// Module ID: 4328
// Function ID: 38002
// Name: Presets
// Dependencies: [653, 4326, 4329, 1212, 2]
// Exports: arePresetSettingsUnset, presetFromSettings, presetName

// Module 4328 (Presets)
import { UserNotificationSettings } from "ME";
import { UnreadSetting } from "ReadStateTypes";

const obj = { ALL_MESSAGES: "all_messages", MENTIONS: "mentions", NOTHING: "nothing", CUSTOM: "custom" };
const result = require("n").fileFinishedImporting("modules/notifications/settings/utils/notificationSettingsPresetUtils.tsx");

export const Presets = obj;
export const presetFromSettings = function presetFromSettings(unreadSetting, messageNotifications) {
  const items = [messageNotifications, unreadSetting];
  const match = require(4329) /* n */.match(items);
  const items1 = [UserNotificationSettings.ALL_MESSAGES, UnreadSetting.ALL_MESSAGES];
  const str = require(4329) /* n */;
  const items2 = [UserNotificationSettings.ONLY_MENTIONS, UnreadSetting.UNSET];
  const withResult = match.with(items1, () => outer1_4.ALL_MESSAGES);
  const items3 = [UserNotificationSettings.ONLY_MENTIONS, UnreadSetting.ONLY_MENTIONS];
  const withResult1 = match.with(items1, () => outer1_4.ALL_MESSAGES).with(items2, () => outer1_4.MENTIONS);
  const items4 = [UserNotificationSettings.NO_MESSAGES, UnreadSetting.UNSET];
  const withResult2 = match.with(items1, () => outer1_4.ALL_MESSAGES).with(items2, () => outer1_4.MENTIONS).with(items3, () => outer1_4.MENTIONS);
  const items5 = [UserNotificationSettings.NO_MESSAGES, UnreadSetting.ONLY_MENTIONS];
  const withResult3 = match.with(items1, () => outer1_4.ALL_MESSAGES).with(items2, () => outer1_4.MENTIONS).with(items3, () => outer1_4.MENTIONS).with(items4, () => outer1_4.NOTHING);
  return match.with(items1, () => outer1_4.ALL_MESSAGES).with(items2, () => outer1_4.MENTIONS).with(items3, () => outer1_4.MENTIONS).with(items4, () => outer1_4.NOTHING).with(items5, () => outer1_4.NOTHING).otherwise(() => outer1_4.CUSTOM);
};
export const presetName = function presetName(arg0) {
  const match = require(4329) /* n */.match(arg0);
  const str = require(4329) /* n */;
  const withResult = match.with(obj.ALL_MESSAGES, () => {
    const intl = outer1_0(outer1_1[3]).intl;
    return intl.string(outer1_0(outer1_1[3]).t.hZrr6k);
  });
  const withResult1 = match.with(obj.ALL_MESSAGES, () => {
    const intl = outer1_0(outer1_1[3]).intl;
    return intl.string(outer1_0(outer1_1[3]).t.hZrr6k);
  }).with(obj.MENTIONS, () => {
    const intl = outer1_0(outer1_1[3]).intl;
    return intl.string(outer1_0(outer1_1[3]).t.y59NJm);
  });
  const withResult2 = match.with(obj.ALL_MESSAGES, () => {
    const intl = outer1_0(outer1_1[3]).intl;
    return intl.string(outer1_0(outer1_1[3]).t.hZrr6k);
  }).with(obj.MENTIONS, () => {
    const intl = outer1_0(outer1_1[3]).intl;
    return intl.string(outer1_0(outer1_1[3]).t.y59NJm);
  }).with(obj.NOTHING, () => {
    const intl = outer1_0(outer1_1[3]).intl;
    return intl.string(outer1_0(outer1_1[3]).t["pGn/bJ"]);
  });
  return match.with(obj.ALL_MESSAGES, () => {
    const intl = outer1_0(outer1_1[3]).intl;
    return intl.string(outer1_0(outer1_1[3]).t.hZrr6k);
  }).with(obj.MENTIONS, () => {
    const intl = outer1_0(outer1_1[3]).intl;
    return intl.string(outer1_0(outer1_1[3]).t.y59NJm);
  }).with(obj.NOTHING, () => {
    const intl = outer1_0(outer1_1[3]).intl;
    return intl.string(outer1_0(outer1_1[3]).t["pGn/bJ"]);
  }).with(obj.CUSTOM, () => {
    const intl = outer1_0(outer1_1[3]).intl;
    return intl.string(outer1_0(outer1_1[3]).t["32yow9"]);
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
