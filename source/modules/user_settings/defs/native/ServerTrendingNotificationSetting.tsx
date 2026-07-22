// Module ID: 14227
// Function ID: 107556
// Name: toggle
// Dependencies: []

// Module 14227 (toggle)
const _module = require(dependencyMap[1]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.Q3VWjI);
  },
  useDescription() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.Wc1RcU);
  },
  parent: require(dependencyMap[0]).MobileSetting.NOTIFICATIONS,
  useValue: require(dependencyMap[3]).EnableServerTrendingNotifications.useSetting,
  onValueChange: require(dependencyMap[4]).onServerTrendingNotificationSettingsChanged,
  usePredicate() {
    return false;
  }
});
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/ServerTrendingNotificationSetting.tsx");

export default toggle;
