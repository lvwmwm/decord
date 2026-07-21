// Module ID: 11446
// Function ID: 89120
// Dependencies: []

// Module 11446
let closure_3 = importDefault(dependencyMap[0]);
const NativeModules = arg1(dependencyMap[1]).NativeModules;
const PermissionStateType = arg1(dependencyMap[2]).PermissionStateType;
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
const result = arg1(dependencyMap[8]).fileFinishedImporting("utils/native/NotificationUtils.tsx");

export default {
  hasPermission() {
    return importDefault(dependencyMap[6]).requestPermissions((badge) => {
      let _alert;
      let sound;
      ({ alert: _alert, sound } = badge);
      if (!_alert) {
        _alert = badge.badge;
      }
      if (!_alert) {
        _alert = sound;
      }
      return _alert;
    });
  },
  requestPermission(arg0) {
    const arg1 = arg0;
    const result = arg1(dependencyMap[4]).setPushPermissionState(PermissionStateType.REQUESTED);
    const obj = arg1(dependencyMap[4]);
    importDefault(dependencyMap[5]).track(AnalyticEvents.PERMISSIONS_REQUESTED, { type: "notification" });
    const obj2 = importDefault(dependencyMap[5]);
    const permissions = importDefault(dependencyMap[6]).requestPermissions();
    permissions.then((sound) => {
      let _alert;
      let badge;
      ({ alert: _alert, badge } = sound);
      if (!_alert) {
        _alert = sound.sound;
      }
      if (!_alert) {
        _alert = badge;
      }
      let obj = callback(closure_2[5]);
      obj = { type: "notification" };
      let str = "denied";
      if (_alert) {
        str = "accepted";
      }
      obj.action = str;
      obj.track(constants.PERMISSIONS_ACKED, obj);
      const NativePermissionManager = obj.NativePermissionManager;
      const notificationAuthorizationStatus = NativePermissionManager.getNotificationAuthorizationStatus();
      notificationAuthorizationStatus.then((authorizationStatus) => {
        if (null != authorizationStatus) {
          const result = callback(closure_2[4]).updateNotificationAuthorizationStatus(authorizationStatus);
          const obj = callback(closure_2[4]);
        }
      });
      if (null != _alert) {
        if (null != sound) {
          sound(_alert);
        }
      }
    });
  },
  showNotification() {
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  shouldRequestNotification: true,
  playNotificationSound(arg0) {
    let num = arg1;
    if (arg1 === undefined) {
      num = 1;
    }
    arg1(dependencyMap[7]).playSound(arg0, num, undefined, arg2);
  }
};
