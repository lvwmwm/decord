// Module ID: 14752
// Function ID: 14753
// Name: toggle
// Dependencies: [8123, 10493, 1236, 4034, 14753, 8222, 2]

// Module 14752 (toggle)
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
    return importDefault(8222).useConfig({ location: "FriendAnniversaryNotificationSetting" }).enabled;
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
    return importDefault(8222).useConfig({ location: "FriendAnniversaryNotificationSetting" }).enabled;
  }
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/FriendAnniversaryNotificationSetting.tsx");

export default toggle;
