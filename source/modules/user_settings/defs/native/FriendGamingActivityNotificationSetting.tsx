// Module ID: 14758
// Function ID: 14759
// Name: toggle
// Dependencies: [8127, 10407, 1236, 4034, 14759, 2]

// Module 14758 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["yq/aPt"]);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.Amy1fz);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableFriendGamingActivityNotifications.useSetting,
  onValueChange: require("onFriendGamingActivityNotificationSettingsChanged").onFriendGamingActivityNotificationSettingsChanged
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["yq/aPt"]);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.Amy1fz);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableFriendGamingActivityNotifications.useSetting,
  onValueChange: require("onFriendGamingActivityNotificationSettingsChanged").onFriendGamingActivityNotificationSettingsChanged
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/FriendGamingActivityNotificationSetting.tsx");

export default toggle;
