// Module ID: 10325
// Function ID: 79698
// Name: getPushNotificationSelectOptions
// Dependencies: [653, 4326, 1212, 2]
// Exports: getPushNotificationSelectOptions, getUnreadSelectOptions

// Module 10325 (getPushNotificationSelectOptions)
import { UserNotificationSettings } from "ME";
import { UnreadSetting } from "ReadStateTypes";

const result = require("getSystemLocale").fileFinishedImporting("modules/notifications/settings/utils/notificationSettingsPresetOptionUtils.tsx");

export const getPushNotificationSelectOptions = function getPushNotificationSelectOptions() {
  let obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(require(1212) /* getSystemLocale */.t["HVah/3"]);
  obj.value = UserNotificationSettings.ALL_MESSAGES;
  const items = [obj, , ];
  obj = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.label = intl2.string(require(1212) /* getSystemLocale */.t["tu+ZWJ"]);
  obj.value = UserNotificationSettings.ONLY_MENTIONS;
  items[1] = obj;
  obj = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.label = intl3.string(require(1212) /* getSystemLocale */.t.X4wWUi);
  obj.value = UserNotificationSettings.NO_MESSAGES;
  items[2] = obj;
  return items;
};
export const getUnreadSelectOptions = function getUnreadSelectOptions(notificationSetting) {
  let obj = {};
  notificationSetting = undefined;
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(require(1212) /* getSystemLocale */.t["HVah/3"]);
  obj.value = UnreadSetting.ALL_MESSAGES;
  const items = [obj, ];
  obj = { value: UnreadSetting.ONLY_MENTIONS };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.label = intl2.string(require(1212) /* getSystemLocale */.t["tu+ZWJ"]);
  if (null != notificationSetting) {
    notificationSetting = notificationSetting.notificationSetting;
  }
  obj.disabled = notificationSetting === UserNotificationSettings.ALL_MESSAGES;
  items[1] = obj;
  return items;
};
