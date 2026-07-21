// Module ID: 14221
// Function ID: 107519
// Name: toggle
// Dependencies: []

// Module 14221 (toggle)
const _module = require(dependencyMap[2]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.MCVmjA);
  },
  useDescription() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.R0VpSW);
  },
  parent: require(dependencyMap[0]).MobileSetting.NOTIFICATIONS,
  useValue: require(dependencyMap[4]).EnableUpcomingServerEventNotifications.useSetting,
  onValueChange: require(dependencyMap[5]).onUpcomingServerEventNotificationSettingsChanged,
  usePredicate: function useExperiment() {
    return require(dependencyMap[1]).useUpcomingServerEventExperiment("tabsV2Settings").showSettingsToggle;
  }
});
const _module1 = require(dependencyMap[6]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/UpcomingServerEventNotificationSetting.tsx");

export default toggle;
