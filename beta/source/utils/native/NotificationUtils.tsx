// Module ID: 11911
// Function ID: 11912
// Name: NotificationUtils
// Dependencies: [5, 17, 11902, 1074, 11905, 1241, 8746, 9357, 2]

// Module 11911 (NotificationUtils)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PushNotificationDefault from "PushNotification" /* 8746 */;
import SoundUtils from "SoundUtils" /* 9357 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 11902 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0;

const NativeModules = react_native.NativeModules;
const PermissionStateType = PushNotificationPermissionStore.PermissionStateType;
const AnalyticEvents = Constants.AnalyticEvents;
let obj = {
  hasPermission() {
    const obj = PushNotificationDefault;
    return obj.requestPermissions((badge) => {
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
    let closure_0;
    _require = arg0;
    let obj = require("PushNotificationActionCreators");
    let result = obj.setPushPermissionState(PermissionStateType.REQUESTED);
    const obj2 = AnalyticsUtilsDefault;
    obj2.track(AnalyticEvents.PERMISSIONS_REQUESTED, { type: "notification" });
    const obj3 = PushNotificationDefault;
    const permissions = obj3.requestPermissions();
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
      let str = "denied";
      const track = AnalyticsUtilsDefault.track;
      const PERMISSIONS_ACKED = AnalyticEvents.PERMISSIONS_ACKED;
      if (_alert) {
        str = "accepted";
      }
      track(PERMISSIONS_ACKED, { type: "notification", action: str });
      const NativePermissionManager = NativeModules.NativePermissionManager;
      const notificationAuthorizationStatus = NativePermissionManager.getNotificationAuthorizationStatus();
      notificationAuthorizationStatus.then((result) => {
        if (null != result) {
          const obj = closure_1_0(closure_1_2[4]);
          result = obj.updateNotificationAuthorizationStatus(result);
        }
      });
      if (null != _alert) {
        if (closure_0 != null) {
          closure_0(_alert);
        }
      }
    });
  },
  showNotification() {
    return (async (arg0, value) => {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c0 = 2;
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c0 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp3) {
          c0 = 3;
          throw tmp3;
        }
      }
    })();
  },
  shouldRequestNotification: true,
  playNotificationSound(arg0) {
    let num = arg1;
    if (arg1 === undefined) {
      num = 1;
    }
    const obj = SoundUtils;
    obj.playSound(arg0, num, undefined, arg2);
  }
};
let result = size.fileFinishedImporting("utils/native/NotificationUtils.tsx");

export default obj;
