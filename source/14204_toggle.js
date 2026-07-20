// Module ID: 14204
// Function ID: 107444
// Name: toggle
// Dependencies: []

// Module 14204 (toggle)
const _module = require(dependencyMap[1]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.yq/aPt);
  },
  useDescription() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.Amy1fz);
  },
  parent: require(dependencyMap[0]).MobileSetting.NOTIFICATIONS,
  useValue: require(dependencyMap[3]).EnableFriendGamingActivityNotifications.useSetting,
  onValueChange: require(dependencyMap[4]).onFriendGamingActivityNotificationSettingsChanged
});
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/FriendGamingActivityNotificationSetting.tsx");

export default toggle;
