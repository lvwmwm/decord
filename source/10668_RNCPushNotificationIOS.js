// Module ID: 10668
// Function ID: 83196
// Name: RNCPushNotificationIOS
// Dependencies: [6, 7, 27, 44]

// Module 10668 (RNCPushNotificationIOS)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import get_ActivityIndicator from "get ActivityIndicator";

const RNCPushNotificationIOS = get_ActivityIndicator.NativeModules.RNCPushNotificationIOS;
const nativeEventEmitter = new get_ActivityIndicator.NativeEventEmitter(RNCPushNotificationIOS);
const map = new Map();
const tmp5 = (() => {
  class PushNotificationIOS {
    constructor(arg0) {
      self = this;
      closure_0 = arg0;
      self = this;
      tmp = outer1_2(this, closure_0);
      this._data = {};
      this._remoteNotificationCompleteCallbackCalled = false;
      this._isRemote = arg0.remote;
      if (this._isRemote) {
        self._notificationId = arg0.notificationId;
      }
      if (arg0.remote) {
        tmp2 = globalThis;
        _Object = Object;
        keys = Object.keys(arg0);
        item = keys.forEach((arg0) => {
          if ("aps" === arg0) {
            ({ alert: self._alert, sound: self._sound, badge: self._badgeCount, category: self._category, content-available: self._contentAvailable, thread-id: self._threadID } = tmp);
          } else {
            self._data[arg0] = tmp;
          }
        });
      } else {
        ({ applicationIconBadgeNumber: self._badgeCount, soundName: self._sound, alertBody: self._alert, userInfo: self._data, category: self._category } = arg0);
      }
      return;
    }
  }
  let obj = {
    key: "finish",
    value: function finish(arg0) {
      const self = this;
      if (tmp) {
        self._remoteNotificationCompleteCallbackCalled = true;
        const result = outer1_4.onFinishRemoteNotification(self._notificationId, arg0);
      }
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "getMessage",
    value: function getMessage() {
      return this._alert;
    }
  };
  items[1] = obj;
  obj = {
    key: "getSound",
    value: function getSound() {
      return this._sound;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getCategory",
    value: function getCategory() {
      return this._category;
    }
  };
  items[4] = {
    key: "getAlert",
    value: function getAlert() {
      return this._alert;
    }
  };
  items[5] = {
    key: "getContentAvailable",
    value: function getContentAvailable() {
      return this._contentAvailable;
    }
  };
  items[6] = {
    key: "getBadgeCount",
    value: function getBadgeCount() {
      return this._badgeCount;
    }
  };
  items[7] = {
    key: "getData",
    value: function getData() {
      return this._data;
    }
  };
  items[8] = {
    key: "getThreadID",
    value: function getThreadID() {
      return this._threadID;
    }
  };
  const items1 = [
    {
      key: "presentLocalNotification",
      value: function presentLocalNotification(arg0) {
        const result = outer1_4.presentLocalNotification(arg0);
      }
    },
    {
      key: "scheduleLocalNotification",
      value: function scheduleLocalNotification(arg0) {
        const result = outer1_4.scheduleLocalNotification(arg0);
      }
    },
    {
      key: "cancelAllLocalNotifications",
      value: function cancelAllLocalNotifications() {
        const result = outer1_4.cancelAllLocalNotifications();
      }
    },
    {
      key: "removeAllDeliveredNotifications",
      value: function removeAllDeliveredNotifications() {
        const result = outer1_4.removeAllDeliveredNotifications();
      }
    },
    {
      key: "getDeliveredNotifications",
      value: function getDeliveredNotifications(arg0) {
        const deliveredNotifications = outer1_4.getDeliveredNotifications(arg0);
      }
    },
    {
      key: "removeDeliveredNotifications",
      value: function removeDeliveredNotifications(arg0) {
        const result = outer1_4.removeDeliveredNotifications(arg0);
      }
    },
    {
      key: "setApplicationIconBadgeNumber",
      value: function setApplicationIconBadgeNumber(arg0) {
        const result = outer1_4.setApplicationIconBadgeNumber(arg0);
      }
    },
    {
      key: "getApplicationIconBadgeNumber",
      value: function getApplicationIconBadgeNumber(arg0) {
        const applicationIconBadgeNumber = outer1_4.getApplicationIconBadgeNumber(arg0);
      }
    },
    {
      key: "cancelLocalNotifications",
      value: function cancelLocalNotifications(arg0) {
        const result = outer1_4.cancelLocalNotifications(arg0);
      }
    },
    {
      key: "getScheduledLocalNotifications",
      value: function getScheduledLocalNotifications(arg0) {
        const scheduledLocalNotifications = outer1_4.getScheduledLocalNotifications(arg0);
      }
    },
    {
      key: "addEventListener",
      value: function addEventListener(arg0, arg1) {
        let closure_0 = arg1;
        let tmp3 = tmp2;
        if ("notification" !== arg0) {
          tmp3 = "register" === arg0;
        }
        if (!tmp3) {
          tmp3 = "registrationError" === arg0;
        }
        if (!tmp3) {
          tmp3 = "localNotification" === arg0;
        }
        PushNotificationIOS(outer1_1[3])(tmp3, "PushNotificationIOS only supports `notification`, `register`, `registrationError`, and `localNotification` events");
        if ("notification" === arg0) {
          let addListenerResult = outer1_5.addListener("remoteNotificationReceived", (arg0) => {
            callback(new callback(arg0));
          });
        } else if ("localNotification" === arg0) {
          addListenerResult = outer1_5.addListener("localNotificationReceived", (arg0) => {
            callback(new callback(arg0));
          });
        } else if ("register" === arg0) {
          addListenerResult = outer1_5.addListener("remoteNotificationsRegistered", (deviceToken) => {
            callback(deviceToken.deviceToken);
          });
        } else if ("registrationError" === arg0) {
          addListenerResult = outer1_5.addListener("remoteNotificationRegistrationError", (arg0) => {
            callback(arg0);
          });
        }
        const result = outer1_6.set(arg0, addListenerResult);
      }
    },
    {
      key: "removeEventListener",
      value: function removeEventListener(arg0, arg1) {
        let tmp2 = "notification" === arg0;
        if (!tmp2) {
          tmp2 = "register" === arg0;
        }
        if (!tmp2) {
          tmp2 = "registrationError" === arg0;
        }
        if (!tmp2) {
          tmp2 = "localNotification" === arg0;
        }
        PushNotificationIOS(outer1_1[3])(tmp2, "PushNotificationIOS only supports `notification`, `register`, `registrationError`, and `localNotification` events");
        const value = outer1_6.get(arg0);
        if (value) {
          value.remove();
          outer1_6.delete(arg0);
        }
      }
    },
    {
      key: "requestPermissions",
      value: function requestPermissions(alert) {
        if (alert) {
          let obj = { alert: alert.alert, badge: alert.badge, sound: alert.sound };
        } else {
          obj = { alert: true, badge: true, sound: true };
        }
        return outer1_4.requestPermissions(obj);
      }
    },
    {
      key: "abandonPermissions",
      value: function abandonPermissions() {
        outer1_4.abandonPermissions();
      }
    },
    {
      key: "checkPermissions",
      value: function checkPermissions(arg0) {
        PushNotificationIOS(outer1_1[3])("function" === typeof arg0, "Must provide a valid callback");
        outer1_4.checkPermissions(arg0);
      }
    },
    {
      key: "getInitialNotification",
      value: function getInitialNotification() {
        const initialNotification = outer1_4.getInitialNotification();
        return initialNotification.then((arg0) => {
          let tmp = arg0;
          if (arg0) {
            const prototype = outer1_0.prototype;
            tmp = new outer1_0(arg0);
          }
          return tmp;
        });
      }
    }
  ];
  return callback(PushNotificationIOS, items, items1);
})();
tmp5.FetchResult = { NewData: "UIBackgroundFetchResultNewData", NoData: "UIBackgroundFetchResultNoData", ResultFailed: "UIBackgroundFetchResultFailed" };

export default tmp5;
