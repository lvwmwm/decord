// Module ID: 14205
// Function ID: 107447
// Name: toggle
// Dependencies: []

// Module 14205 (toggle)
const _module = require(dependencyMap[1]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.BVO96v);
  },
  parent: require(dependencyMap[0]).MobileSetting.NOTIFICATIONS,
  useValue: require(dependencyMap[3]).EnableFriendAnniversaryNotifications.useSetting,
  useDescription() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.00TNo7);
  },
  onValueChange: require(dependencyMap[4]).onFriendAnniversaryNotificationSettingsChanged,
  usePredicate() {
    return importDefault(dependencyMap[5]).useConfig({ location: "FriendAnniversaryNotificationSetting" }).enabled;
  }
});
const _module1 = require(dependencyMap[6]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/FriendAnniversaryNotificationSetting.tsx");

export default toggle;
