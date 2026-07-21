// Module ID: 14221
// Function ID: 107496
// Name: toggle
// Dependencies: []

// Module 14221 (toggle)
const _module = require(dependencyMap[1]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.xEqC6q);
  },
  useDescription() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.KmVXll);
  },
  parent: require(dependencyMap[0]).MobileSetting.NOTIFICATIONS,
  useValue: require(dependencyMap[3]).EnableSummaryReminderNotifications.useSetting,
  onValueChange: require(dependencyMap[4]).onSummaryReminderNotificationSettingsChanged,
  usePredicate() {
    return false;
  }
});
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/SummaryReminderNotificationSetting.tsx");

export default toggle;
