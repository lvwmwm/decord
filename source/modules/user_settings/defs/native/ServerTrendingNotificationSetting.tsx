// Module ID: 14881
// Function ID: 14882
// Name: toggle
// Dependencies: [8238, 10708, 1236, 4069, 14882, 2]

// Module 14881 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4069 */;
import MobileUserSettings from "MobileUserSettings" /* 8238 */;
import onServerTrendingNotificationSettingsChanged from "onServerTrendingNotificationSettingsChanged" /* 14882 */;
import createToggle from "createToggle" /* 10708 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Q3VWjI);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Wc1RcU);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: explicitContentFromProto.EnableServerTrendingNotifications.useSetting,
  onValueChange: onServerTrendingNotificationSettingsChanged.onServerTrendingNotificationSettingsChanged,
  usePredicate() {
    return false;
  }
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Q3VWjI);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Wc1RcU);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: explicitContentFromProto.EnableServerTrendingNotifications.useSetting,
  onValueChange: onServerTrendingNotificationSettingsChanged.onServerTrendingNotificationSettingsChanged,
  usePredicate() {
    return false;
  }
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ServerTrendingNotificationSetting.tsx");

export default toggle;
