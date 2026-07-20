// Module ID: 14186
// Function ID: 107381
// Name: _handleEnableSystemNotification
// Dependencies: []

// Module 14186 (_handleEnableSystemNotification)
function _handleEnableSystemNotification() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _handleEnableSystemNotification = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
const NativeModules = arg1(dependencyMap[1]).NativeModules;
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
let closure_6 = arg1(dependencyMap[4]).NotificationAuthorizationStatus;
({ EventActionType: closure_7, EventActionLocation: closure_8 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[9]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.nl2Dqx);
  },
  parent: arg1(dependencyMap[2]).MobileSetting.NOTIFICATIONS,
  onPress: function handleEnableSystemNotification() {
    return _handleEnableSystemNotification(...arguments);
  },
  withArrow: true
};
const pressable = obj.createPressable(obj);
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/user_settings/defs/native/SystemNotificationsSetting.tsx");

export default pressable;
