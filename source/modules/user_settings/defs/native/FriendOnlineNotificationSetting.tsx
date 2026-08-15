// Module ID: 14809
// Function ID: 14810
// Name: toggle
// Dependencies: [8198, 14810, 10669, 1236, 4066, 14811, 2]

// Module 14809 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["uvIi/4"]);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.E6O06k);
  },
  parent: require("MobileUserSettings").MobileUserSettings.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableFriendOnlineNotifications.useSetting,
  onValueChange: require("onFriendOnlineNotificationSettingsChanged").onFriendOnlineNotificationSettingsChanged,
  usePredicate: function useExperiment() {
    return require(14810) /* apexExperiment */.useFriendOnlineNotificationExperiment("tabsV2Settings").showSettingsToggle;
  }
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["uvIi/4"]);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.E6O06k);
  },
  parent: require("MobileUserSettings").MobileUserSettings.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableFriendOnlineNotifications.useSetting,
  onValueChange: require("onFriendOnlineNotificationSettingsChanged").onFriendOnlineNotificationSettingsChanged,
  usePredicate: function useExperiment() {
    return require(14810) /* apexExperiment */.useFriendOnlineNotificationExperiment("tabsV2Settings").showSettingsToggle;
  }
};
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/FriendOnlineNotificationSetting.tsx");

export default toggle;
