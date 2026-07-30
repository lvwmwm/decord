// Module ID: 14454
// Function ID: 14455
// Name: toggle
// Dependencies: [7753, 10116, 1236, 3862, 14455, 7853, 2]

// Module 14454 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.BVO96v);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableFriendAnniversaryNotifications.useSetting,
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["00TNo7"]);
  },
  onValueChange: require("onFriendAnniversaryNotificationSettingsChanged").onFriendAnniversaryNotificationSettingsChanged,
  usePredicate() {
    return importDefault(7853).useConfig({ location: "FriendAnniversaryNotificationSetting" }).enabled;
  }
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.BVO96v);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableFriendAnniversaryNotifications.useSetting,
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["00TNo7"]);
  },
  onValueChange: require("onFriendAnniversaryNotificationSettingsChanged").onFriendAnniversaryNotificationSettingsChanged,
  usePredicate() {
    return importDefault(7853).useConfig({ location: "FriendAnniversaryNotificationSetting" }).enabled;
  }
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/FriendAnniversaryNotificationSetting.tsx");

export default toggle;
