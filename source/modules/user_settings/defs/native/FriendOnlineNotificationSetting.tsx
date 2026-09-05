// Module ID: 15501
// Function ID: 15502
// Name: toggle
// Dependencies: [7975, 11468, 1114, 1935, 15502, 2]

// Module 15501 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import explicitContentFromProto from "explicitContentFromProto" /* 1935 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import onFriendOnlineNotificationSettingsChanged from "onFriendOnlineNotificationSettingsChanged" /* 15502 */;
import createToggle from "createToggle" /* 11468 */;

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
