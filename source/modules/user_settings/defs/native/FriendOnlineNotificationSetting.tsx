// Module ID: 15033
// Function ID: 15034
// Name: toggle
// Dependencies: [7830, 11006, 1236, 4135, 15034, 2]

// Module 15033 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4135 */;
import MobileUserSettings from "MobileUserSettings" /* 7830 */;
import onFriendOnlineNotificationSettingsChanged from "onFriendOnlineNotificationSettingsChanged" /* 15034 */;
import createToggle from "createToggle" /* 11006 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["uvIi/4"]);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.E6O06k);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: explicitContentFromProto.EnableFriendOnlineNotifications.useSetting,
  onValueChange: onFriendOnlineNotificationSettingsChanged.onFriendOnlineNotificationSettingsChanged
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["uvIi/4"]);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.E6O06k);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: explicitContentFromProto.EnableFriendOnlineNotifications.useSetting,
  onValueChange: onFriendOnlineNotificationSettingsChanged.onFriendOnlineNotificationSettingsChanged
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/FriendOnlineNotificationSetting.tsx");

export default toggle;
