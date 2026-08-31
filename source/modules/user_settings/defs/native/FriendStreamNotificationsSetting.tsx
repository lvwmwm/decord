// Module ID: 15061
// Function ID: 15062
// Name: toggle
// Dependencies: [7852, 11031, 1236, 4136, 15062, 2]

// Module 15061 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4136 */;
import MobileUserSettings from "MobileUserSettings" /* 7852 */;
import onGoLiveNotificationSettingsChanged from "onGoLiveNotificationSettingsChanged" /* 15062 */;
import createToggle from "createToggle" /* 11031 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.FEFn90);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: explicitContentFromProto.StreamNotificationsEnabled.useSetting,
  onValueChange: onGoLiveNotificationSettingsChanged.onGoLiveNotificationSettingsChanged
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.FEFn90);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: explicitContentFromProto.StreamNotificationsEnabled.useSetting,
  onValueChange: onGoLiveNotificationSettingsChanged.onGoLiveNotificationSettingsChanged
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/FriendStreamNotificationsSetting.tsx");

export default toggle;
