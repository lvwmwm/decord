// Module ID: 459
// Function ID: 6098
// Name: map
// Dependencies: [6, 7, 209, 44, 460]

// Module 459 (map)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import importDefaultResult from "NativeEventEmitter";

importDefaultResult = new importDefaultResult(null);
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
        PushNotificationIOS(outer1_1[3])(PushNotificationIOS(outer1_1[4]), "PushNotificationManager is not available.");
        const tmp4 = PushNotificationIOS(outer1_1[3]);
        const result = PushNotificationIOS(outer1_1[4]).onFinishRemoteNotification(self._notificationId, arg0);
        const obj = PushNotificationIOS(outer1_1[4]);
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
        PushNotificationIOS(outer1_1[3])(PushNotificationIOS(outer1_1[4]), "PushNotificationManager is not available.");
        const tmp = PushNotificationIOS(outer1_1[3]);
        const result = PushNotificationIOS(outer1_1[4]).presentLocalNotification(arg0);
      }
    },
    {
      key: "scheduleLocalNotification",
      value: function scheduleLocalNotification(arg0) {
        PushNotificationIOS(outer1_1[3])(PushNotificationIOS(outer1_1[4]), "PushNotificationManager is not available.");
        const tmp = PushNotificationIOS(outer1_1[3]);
        const result = PushNotificationIOS(outer1_1[4]).scheduleLocalNotification(arg0);
      }
    },
    {
      key: "cancelAllLocalNotifications",
      value: function cancelAllLocalNotifications() {
        PushNotificationIOS(outer1_1[3])(PushNotificationIOS(outer1_1[4]), "PushNotificationManager is not available.");
        const tmp = PushNotificationIOS(outer1_1[3]);
        const result = PushNotificationIOS(outer1_1[4]).cancelAllLocalNotifications();
      }
    },
    {
      key: "removeAllDeliveredNotifications",
      value: function removeAllDeliveredNotifications() {
        PushNotificationIOS(outer1_1[3])(PushNotificationIOS(outer1_1[4]), "PushNotificationManager is not available.");
        const tmp = PushNotificationIOS(outer1_1[3]);
        const result = PushNotificationIOS(outer1_1[4]).removeAllDeliveredNotifications();
      }
    },
    {
      key: "getDeliveredNotifications",
      value: function getDeliveredNotifications(arg0) {
        PushNotificationIOS(outer1_1[3])(PushNotificationIOS(outer1_1[4]), "PushNotificationManager is not available.");
        const tmp = PushNotificationIOS(outer1_1[3]);
        const deliveredNotifications = PushNotificationIOS(outer1_1[4]).getDeliveredNotifications(arg0);
      }
    },
    {
      key: "removeDeliveredNotifications",
      value: function removeDeliveredNotifications(arg0) {
        PushNotificationIOS(outer1_1[3])(PushNotificationIOS(outer1_1[4]), "PushNotificationManager is not available.");
        const tmp = PushNotificationIOS(outer1_1[3]);
        const result = PushNotificationIOS(outer1_1[4]).removeDeliveredNotifications(arg0);
      }
    },
    {
      key: "setApplicationIconBadgeNumber",
      value: function setApplicationIconBadgeNumber(arg0) {
        PushNotificationIOS(outer1_1[3])(PushNotificationIOS(outer1_1[4]), "PushNotificationManager is not available.");
        const tmp = PushNotificationIOS(outer1_1[3]);
        const result = PushNotificationIOS(outer1_1[4]).setApplicationIconBadgeNumber(arg0);
      }
    },
    {
      key: "getApplicationIconBadgeNumber",
      value: function getApplicationIconBadgeNumber(arg0) {
        PushNotificationIOS(outer1_1[3])(PushNotificationIOS(outer1_1[4]), "PushNotificationManager is not available.");
        const tmp = PushNotificationIOS(outer1_1[3]);
        const applicationIconBadgeNumber = PushNotificationIOS(outer1_1[4]).getApplicationIconBadgeNumber(arg0);
      }
    },
    {
      key: "cancelLocalNotifications",
      value: function cancelLocalNotifications(arg0) {
        PushNotificationIOS(outer1_1[3])(PushNotificationIOS(outer1_1[4]), "PushNotificationManager is not available.");
        const tmp = PushNotificationIOS(outer1_1[3]);
        const result = PushNotificationIOS(outer1_1[4]).cancelLocalNotifications(arg0);
      }
    },
    {
      key: "getScheduledLocalNotifications",
      value: function getScheduledLocalNotifications(arg0) {
        PushNotificationIOS(outer1_1[3])(PushNotificationIOS(outer1_1[4]), "PushNotificationManager is not available.");
        const tmp = PushNotificationIOS(outer1_1[3]);
        const scheduledLocalNotifications = PushNotificationIOS(outer1_1[4]).getScheduledLocalNotifications(arg0);
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
          let addListenerResult = outer1_4.addListener("remoteNotificationReceived", (arg0) => {
            callback(new callback(arg0));
          });
        } else if ("localNotification" === arg0) {
          addListenerResult = outer1_4.addListener("localNotificationReceived", (arg0) => {
            callback(new callback(arg0));
          });
        } else if ("register" === arg0) {
          addListenerResult = outer1_4.addListener("remoteNotificationsRegistered", (deviceToken) => {
            callback(deviceToken.deviceToken);
          });
        } else if ("registrationError" === arg0) {
          addListenerResult = outer1_4.addListener("remoteNotificationRegistrationError", (arg0) => {
            callback(arg0);
          });
        }
        const result = outer1_5.set(arg0, addListenerResult);
      }
    },
    {
      key: "removeEventListener",
      value: function removeEventListener(arg0) {
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
        const value = outer1_5.get(arg0);
        if (value) {
          value.remove();
          outer1_5.delete(arg0);
        }
      }
    },
    {
      key: "requestPermissions",
      value: function requestPermissions(alert) {
        if (alert) {
          const obj = { alert: alert.alert, badge: alert.badge, sound: alert.sound };
        }
        PushNotificationIOS(outer1_1[3])(PushNotificationIOS(outer1_1[4]), "PushNotificationManager is not available.");
        const tmp2 = PushNotificationIOS(outer1_1[3]);
        return PushNotificationIOS(outer1_1[4]).requestPermissions({ alert: true, badge: true, sound: true });
      }
    },
    {
      key: "abandonPermissions",
      value: function abandonPermissions() {
        PushNotificationIOS(outer1_1[3])(PushNotificationIOS(outer1_1[4]), "PushNotificationManager is not available.");
        const tmp = PushNotificationIOS(outer1_1[3]);
        PushNotificationIOS(outer1_1[4]).abandonPermissions();
      }
    },
    {
      key: "checkPermissions",
      value: function checkPermissions(arg0) {
        PushNotificationIOS(outer1_1[3])("function" === typeof arg0, "Must provide a valid callback");
        PushNotificationIOS(outer1_1[3])(PushNotificationIOS(outer1_1[4]), "PushNotificationManager is not available.");
        const tmp2 = PushNotificationIOS(outer1_1[3]);
        PushNotificationIOS(outer1_1[4]).checkPermissions(arg0);
      }
    },
    {
      key: "getInitialNotification",
      value: function getInitialNotification() {
        PushNotificationIOS(outer1_1[3])(PushNotificationIOS(outer1_1[4]), "PushNotificationManager is not available.");
        let tmp = PushNotificationIOS(outer1_1[3]);
        const initialNotification = PushNotificationIOS(outer1_1[4]).getInitialNotification();
        return initialNotification.then((arg0) => {
          let tmp = arg0;
          if (arg0) {
            const prototype = outer1_0.prototype;
            tmp = new outer1_0(arg0);
          }
          return tmp;
        });
      }
    },
    {
      key: "getAuthorizationStatus",
      value: function getAuthorizationStatus(arg0) {
        PushNotificationIOS(outer1_1[3])(PushNotificationIOS(outer1_1[4]), "PushNotificationManager is not available.");
        const tmp = PushNotificationIOS(outer1_1[3]);
        const authorizationStatus = PushNotificationIOS(outer1_1[4]).getAuthorizationStatus(arg0);
      }
    }
  ];
  return callback(PushNotificationIOS, items, items1);
})();
tmp5.FetchResult = { NewData: "UIBackgroundFetchResultNewData", NoData: "UIBackgroundFetchResultNoData", ResultFailed: "UIBackgroundFetchResultFailed" };

export default tmp5;
