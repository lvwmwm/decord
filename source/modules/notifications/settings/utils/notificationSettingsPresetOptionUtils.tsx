// Module ID: 10282
// Function ID: 79421
// Name: getPushNotificationSelectOptions
// Dependencies: [0, 0, 0, 0]
// Exports: getPushNotificationSelectOptions, getUnreadSelectOptions

// Module 10282 (getPushNotificationSelectOptions)
import { UserNotificationSettings } from "result";
import { UnreadSetting } from "result";
import result from "result";

result = result.fileFinishedImporting("modules/notifications/settings/utils/notificationSettingsPresetOptionUtils.tsx");

export const getPushNotificationSelectOptions = function getPushNotificationSelectOptions() {
  let obj = {};
  const intl = require(dependencyMap[2]).intl;
  obj.label = intl.string(require(dependencyMap[2]).t.HVah/3);
  obj.value = UserNotificationSettings.ALL_MESSAGES;
  const items = [obj, , ];
  obj = {};
  const intl2 = require(dependencyMap[2]).intl;
  obj.label = intl2.string(require(dependencyMap[2]).t.tu+ZWJ);
  obj.value = UserNotificationSettings.ONLY_MENTIONS;
  items[1] = obj;
  obj = {};
  const intl3 = require(dependencyMap[2]).intl;
  obj.label = intl3.string(require(dependencyMap[2]).t.X4wWUi);
  obj.value = UserNotificationSettings.NO_MESSAGES;
  items[2] = obj;
  return items;
};
export const getUnreadSelectOptions = function getUnreadSelectOptions(notificationSetting) {
  let obj = {};
  notificationSetting = undefined;
  const intl = require(dependencyMap[2]).intl;
  obj.label = intl.string(require(dependencyMap[2]).t.HVah/3);
  obj.value = UnreadSetting.ALL_MESSAGES;
  const items = [obj, ];
  obj = { value: UnreadSetting.ONLY_MENTIONS };
  const intl2 = require(dependencyMap[2]).intl;
  obj.label = intl2.string(require(dependencyMap[2]).t.tu+ZWJ);
  if (null != notificationSetting) {
    notificationSetting = notificationSetting.notificationSetting;
  }
  obj.disabled = notificationSetting === UserNotificationSettings.ALL_MESSAGES;
  items[1] = obj;
  return items;
};
