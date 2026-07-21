// Module ID: 14211
// Function ID: 107489
// Name: toggle
// Dependencies: []

// Module 14211 (toggle)
const _module = require(dependencyMap[2]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.uvIi/4);
  },
  useDescription() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.E6O06k);
  },
  parent: require(dependencyMap[0]).MobileSetting.NOTIFICATIONS,
  useValue: require(dependencyMap[4]).EnableFriendOnlineNotifications.useSetting,
  onValueChange: require(dependencyMap[5]).onFriendOnlineNotificationSettingsChanged,
  usePredicate: function useExperiment() {
    return require(dependencyMap[1]).useFriendOnlineNotificationExperiment("tabsV2Settings").showSettingsToggle;
  }
});
const _module1 = require(dependencyMap[6]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/FriendOnlineNotificationSetting.tsx");

export default toggle;
