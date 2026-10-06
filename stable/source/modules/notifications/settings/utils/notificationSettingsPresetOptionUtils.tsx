// Module ID: 12250
// Function ID: 12251
// Name: notificationSettingsPresetOptionUtils
// Dependencies: [1086, 5019, 1127, 2]
// Exports: getPushNotificationSelectOptions, getUnreadSelectOptions

// Module 12250 (notificationSettingsPresetOptionUtils)
import Constants from "Constants" /* 1086 */;
import intl4 from "intl" /* 1127 */;
import ReadStateConstants from "ReadStateConstants" /* 5019 */;
import size from "module_2" /* 2 */;

const UserNotificationSettings = Constants.UserNotificationSettings;
const UnreadSetting = ReadStateConstants.UnreadSetting;
const result = size.fileFinishedImporting("modules/notifications/settings/utils/notificationSettingsPresetOptionUtils.tsx");

export const getPushNotificationSelectOptions = function getPushNotificationSelectOptions() {
  let intl;
  let intl2;
  let intl3;
  const obj = { label: intl.string(intl4.t["HVah/3"]), value: UserNotificationSettings.ALL_MESSAGES };
  intl = intl4.intl;
  const items = [obj, , ];
  const obj2 = { label: intl2.string(intl4.t["tu+ZWJ"]), value: UserNotificationSettings.ONLY_MENTIONS };
  intl2 = intl4.intl;
  items[1] = obj2;
  const obj3 = { label: intl3.string(intl4.t.X4wWUi), value: UserNotificationSettings.NO_MESSAGES };
  intl3 = intl4.intl;
  items[2] = obj3;
  return items;
};
export const getUnreadSelectOptions = function getUnreadSelectOptions(notificationSetting) {
  let intl;
  let intl2;
  const obj = { label: intl.string(intl4.t["HVah/3"]), value: UnreadSetting.ALL_MESSAGES };
  intl = intl4.intl;
  const items = [obj, ];
  const obj2 = { value: UnreadSetting.ONLY_MENTIONS, label: intl2.string(intl4.t["tu+ZWJ"]), disabled: notificationSetting === UserNotificationSettings.ALL_MESSAGES };
  intl2 = intl4.intl;
  notificationSetting = undefined;
  if (notificationSetting != null) {
    notificationSetting = notificationSetting.notificationSetting;
  }
  items[1] = obj2;
  return items;
};
