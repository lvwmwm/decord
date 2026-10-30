// Module ID: 13932
// Function ID: 13933
// Name: NotificationUtils
// Dependencies: [5, 13923, 1072, 13926, 1253, 10889, 7955, 11011, 2]

// Module 13932 (NotificationUtils)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import PushNotificationDefault from "PushNotification" /* 10889 */;
import SoundUtils from "SoundUtils" /* 11011 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 13923 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0;

let tmp;
const react_nativeDefault = tmp(7955);
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
    return permissions.then((sound) => {
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
      AnalyticsUtilsDefault;
      if (_alert) {
        str = "accepted";
      }
      track(PERMISSIONS_ACKED, { type: "notification", action: str });
      const tmpResult = react_nativeDefault;
      const notificationAuthorizationStatus = tmpResult.getNotificationAuthorizationStatus();
      notificationAuthorizationStatus.then((result) => {
        if (null != result) {
          const obj = closure_1_0(closure_1_2[3]);
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
