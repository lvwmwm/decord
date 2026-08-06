// Module ID: 14596
// Function ID: 14597
// Name: toggle
// Dependencies: [8005, 10364, 1236, 3957, 14597, 8104, 2]

// Module 14596 (toggle)
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
    return importDefault(8104).useConfig({ location: "FriendAnniversaryNotificationSetting" }).enabled;
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
    return importDefault(8104).useConfig({ location: "FriendAnniversaryNotificationSetting" }).enabled;
  }
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/FriendAnniversaryNotificationSetting.tsx");

export default toggle;
