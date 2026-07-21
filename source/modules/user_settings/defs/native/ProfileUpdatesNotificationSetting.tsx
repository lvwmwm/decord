// Module ID: 14213
// Function ID: 107472
// Name: toggle
// Dependencies: []

// Module 14213 (toggle)
const _module = require(dependencyMap[2]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.VxBO2F);
  },
  useDescription() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.F4VeBe);
  },
  parent: require(dependencyMap[0]).MobileSetting.NOTIFICATIONS,
  useValue: require(dependencyMap[4]).EnableProfileUpdatesNotifications.useSetting,
  onValueChange: require(dependencyMap[5]).onProfileUpdatesNotificationSettingsChanged,
  usePredicate: function useExperiment() {
    return require(dependencyMap[1]).useProfileUpdatesNotificationExperiment("tabsV2Settings").showSettingsToggle;
  }
});
const _module1 = require(dependencyMap[6]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/ProfileUpdatesNotificationSetting.tsx");

export default toggle;
