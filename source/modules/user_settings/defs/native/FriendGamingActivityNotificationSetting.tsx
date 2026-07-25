// Module ID: 14397
// Function ID: 110148
// Name: toggle
// Dependencies: [7697, 10059, 1212, 3804, 14398, 2]

// Module 14397 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["yq/aPt"]);
  },
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.Amy1fz);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableFriendGamingActivityNotifications.useSetting,
  onValueChange: require("onFriendGamingActivityNotificationSettingsChanged").onFriendGamingActivityNotificationSettingsChanged
});
const obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["yq/aPt"]);
  },
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.Amy1fz);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableFriendGamingActivityNotifications.useSetting,
  onValueChange: require("onFriendGamingActivityNotificationSettingsChanged").onFriendGamingActivityNotificationSettingsChanged
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/FriendGamingActivityNotificationSetting.tsx");

export default toggle;
