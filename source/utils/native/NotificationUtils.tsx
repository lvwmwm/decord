// Module ID: 11457
// Function ID: 89195
// Dependencies: [5, 27, 11448, 653, 11451, 675, 10638, 10246, 2]

// Module 11457
import expandLocation from "expandLocation";
import { NativeModules } from "get ActivityIndicator";
import { PermissionStateType } from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";

const require = arg1;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("utils/native/NotificationUtils.tsx");

export default {
  hasPermission() {
    return importDefault(10638).requestPermissions((badge) => {
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
    const _require = arg0;
    let result = _require(11451).setPushPermissionState(PermissionStateType.REQUESTED);
    let obj = _require(11451);
    importDefault(675).track(AnalyticEvents.PERMISSIONS_REQUESTED, { type: "notification" });
    const obj2 = importDefault(675);
    const permissions = importDefault(10638).requestPermissions();
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
      let obj = outer1_1(outer1_2[5]);
      obj = { type: "notification" };
      let str = "denied";
      if (_alert) {
        str = "accepted";
      }
      obj.action = str;
      obj.track(outer1_6.PERMISSIONS_ACKED, obj);
      const NativePermissionManager = outer1_4.NativePermissionManager;
      const notificationAuthorizationStatus = NativePermissionManager.getNotificationAuthorizationStatus();
      notificationAuthorizationStatus.then((authorizationStatus) => {
        if (null != authorizationStatus) {
          const result = callback(outer2_2[4]).updateNotificationAuthorizationStatus(authorizationStatus);
          const obj = callback(outer2_2[4]);
        }
      });
      if (null != _alert) {
        if (null != callback) {
          callback(_alert);
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
    require(10246) /* createSound */.playSound(arg0, num, undefined, arg2);
  }
};
