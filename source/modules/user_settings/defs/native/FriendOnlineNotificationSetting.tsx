// Module ID: 14580
// Function ID: 14581
// Name: toggle
// Dependencies: [7892, 14581, 10361, 1236, 3958, 14582, 2]

// Module 14580 (toggle)
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
    return require(14581) /* apexExperiment */.useFriendOnlineNotificationExperiment("tabsV2Settings").showSettingsToggle;
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
    return require(14581) /* apexExperiment */.useFriendOnlineNotificationExperiment("tabsV2Settings").showSettingsToggle;
  }
};
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/FriendOnlineNotificationSetting.tsx");

export default toggle;
