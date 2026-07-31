// Module ID: 14480
// Function ID: 14481
// Name: toggle
// Dependencies: [7761, 14481, 10133, 1236, 3866, 14482, 2]

// Module 14480 (toggle)
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
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableFriendOnlineNotifications.useSetting,
  onValueChange: require("onFriendOnlineNotificationSettingsChanged").onFriendOnlineNotificationSettingsChanged,
  usePredicate: function useExperiment() {
    return require(14481) /* apexExperiment */.useFriendOnlineNotificationExperiment("tabsV2Settings").showSettingsToggle;
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
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableFriendOnlineNotifications.useSetting,
  onValueChange: require("onFriendOnlineNotificationSettingsChanged").onFriendOnlineNotificationSettingsChanged,
  usePredicate: function useExperiment() {
    return require(14481) /* apexExperiment */.useFriendOnlineNotificationExperiment("tabsV2Settings").showSettingsToggle;
  }
};
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/FriendOnlineNotificationSetting.tsx");

export default toggle;
