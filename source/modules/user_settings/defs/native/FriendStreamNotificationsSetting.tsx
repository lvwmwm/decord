// Module ID: 14214
// Function ID: 107518
// Name: toggle
// Dependencies: []

// Module 14214 (toggle)
const _module = require(dependencyMap[1]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.FEFn90);
  },
  parent: require(dependencyMap[0]).MobileSetting.NOTIFICATIONS,
  useValue: require(dependencyMap[3]).StreamNotificationsEnabled.useSetting,
  onValueChange: require(dependencyMap[4]).onGoLiveNotificationSettingsChanged
});
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/FriendStreamNotificationsSetting.tsx");

export default toggle;
