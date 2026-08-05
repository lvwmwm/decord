// Module ID: 14558
// Function ID: 14559
// Name: toggle
// Dependencies: [7864, 10333, 1236, 3928, 14559, 7963, 2]

// Module 14558 (toggle)
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
    return importDefault(7963).useConfig({ location: "FriendAnniversaryNotificationSetting" }).enabled;
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
    return importDefault(7963).useConfig({ location: "FriendAnniversaryNotificationSetting" }).enabled;
  }
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/FriendAnniversaryNotificationSetting.tsx");

export default toggle;
