// Module ID: 14205
// Function ID: 107486
// Name: onChange
// Dependencies: []
// Exports: onChange

// Module 14205 (onChange)
function onChange(arg0) {
  const obj = require(dependencyMap[1]);
  const ReactionNotifications = require(dependencyMap[2]).ReactionNotifications;
  const result = obj.updateReactionNotificationsSetting(Number(arg0), ReactionNotifications.getSetting());
}
const _module = require(dependencyMap[5]);
const radio = _module.createRadio({
  useTitle() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.Rq0NFs);
  },
  parent: require(dependencyMap[0]).MobileSetting.NOTIFICATIONS,
  useValue: require(dependencyMap[2]).ReactionNotifications.useSetting,
  onValueChange: onChange,
  useOptions() {
    let obj = {};
    const intl = require(dependencyMap[3]).intl;
    obj.label = intl.string(require(dependencyMap[3]).t.9x/RtT);
    obj.value = require(dependencyMap[4]).ReactionNotificationType.NOTIFICATIONS_ENABLED;
    const items = [obj, , ];
    obj = {};
    const intl2 = require(dependencyMap[3]).intl;
    obj.label = intl2.string(require(dependencyMap[3]).t.fJAbQd);
    obj.value = require(dependencyMap[4]).ReactionNotificationType.ONLY_DMS;
    items[1] = obj;
    obj = {};
    const intl3 = require(dependencyMap[3]).intl;
    obj.label = intl3.string(require(dependencyMap[3]).t.xu+UDU);
    obj.value = require(dependencyMap[4]).ReactionNotificationType.NOTIFICATIONS_DISABLED;
    items[2] = obj;
    return items;
  }
});
const _module1 = require(dependencyMap[6]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/ReactionNotificationsSettings.tsx");

export default radio;
export { onChange };
