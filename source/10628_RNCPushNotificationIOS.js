// Module ID: 10628
// Function ID: 82930
// Name: RNCPushNotificationIOS
// Dependencies: [2473901162, 3751920, 2031616, 1769472]

// Module 10628 (RNCPushNotificationIOS)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
const RNCPushNotificationIOS = tmp2.NativeModules.RNCPushNotificationIOS;
const nativeEventEmitter = new tmp2.NativeEventEmitter(RNCPushNotificationIOS);
const map = new Map();
const tmp5 = () => {
  class PushNotificationIOS {
    constructor(arg0) {
      self = this;
      PushNotificationIOS = arg0;
      self = this;
      tmp = closure_2(this, PushNotificationIOS);
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
            ({ alert: closure_1._alert, sound: closure_1._sound, badge: closure_1._badgeCount, category: closure_1._category, content-available: closure_1._contentAvailable, thread-id: closure_1._threadID } = tmp);
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
  const importDefault = PushNotificationIOS;
  let obj = {
    key: "finish",
    value: function finish(arg0) {
      const self = this;
      if (tmp) {
        self._remoteNotificationCompleteCallbackCalled = true;
        const result = store.onFinishRemoteNotification(self._notificationId, arg0);
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
        const result = store.presentLocalNotification(arg0);
      }
    },
    {
      key: "scheduleLocalNotification",
      value: function scheduleLocalNotification(arg0) {
        const result = store.scheduleLocalNotification(arg0);
      }
    },
    {
      key: "cancelAllLocalNotifications",
      value: function cancelAllLocalNotifications() {
        const result = store.cancelAllLocalNotifications();
      }
    },
    {
      key: "removeAllDeliveredNotifications",
      value: function removeAllDeliveredNotifications() {
        const result = store.removeAllDeliveredNotifications();
      }
    },
    {
      key: "getDeliveredNotifications",
      value: function getDeliveredNotifications(arg0) {
        const deliveredNotifications = store.getDeliveredNotifications(arg0);
      }
    },
    {
      key: "removeDeliveredNotifications",
      value: function removeDeliveredNotifications(arg0) {
        const result = store.removeDeliveredNotifications(arg0);
      }
    },
    {
      key: "setApplicationIconBadgeNumber",
      value: function setApplicationIconBadgeNumber(arg0) {
        const result = store.setApplicationIconBadgeNumber(arg0);
      }
    },
    {
      key: "getApplicationIconBadgeNumber",
      value: function getApplicationIconBadgeNumber(arg0) {
        const applicationIconBadgeNumber = store.getApplicationIconBadgeNumber(arg0);
      }
    },
    {
      key: "cancelLocalNotifications",
      value: function cancelLocalNotifications(arg0) {
        const result = store.cancelLocalNotifications(arg0);
      }
    },
    {
      key: "getScheduledLocalNotifications",
      value: function getScheduledLocalNotifications(arg0) {
        const scheduledLocalNotifications = store.getScheduledLocalNotifications(arg0);
      }
    },
    {
      key: "addEventListener",
      value: function addEventListener(arg0, arg1) {
        const PushNotificationIOS = arg1;
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
        PushNotificationIOS(closure_1[3])(tmp3, "PushNotificationIOS only supports `notification`, `register`, `registrationError`, and `localNotification` events");
        if ("notification" === arg0) {
          let addListenerResult = closure_5.addListener("remoteNotificationReceived", (arg0) => {
            arg1(new arg1(arg0));
          });
        } else if ("localNotification" === arg0) {
          addListenerResult = closure_5.addListener("localNotificationReceived", (arg0) => {
            arg1(new arg1(arg0));
          });
        } else if ("register" === arg0) {
          addListenerResult = closure_5.addListener("remoteNotificationsRegistered", (deviceToken) => {
            arg1(deviceToken.deviceToken);
          });
        } else if ("registrationError" === arg0) {
          addListenerResult = closure_5.addListener("remoteNotificationRegistrationError", (arg0) => {
            arg1(arg0);
          });
        }
        const result = store2.set(arg0, addListenerResult);
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
        PushNotificationIOS(closure_1[3])(tmp2, "PushNotificationIOS only supports `notification`, `register`, `registrationError`, and `localNotification` events");
        const value = store2.get(arg0);
        if (value) {
          value.remove();
          store2.delete(arg0);
        }
      }
    },
    {
      key: "requestPermissions",
      value: function requestPermissions(alert) {
        if (alert) {
          let obj = { alert: alert.alert, badge: alert.badge, sound: alert.sound };
        } else {
          obj = {};
        }
        return store.requestPermissions(obj);
      }
    },
    {
      key: "abandonPermissions",
      value: function abandonPermissions() {
        store.abandonPermissions();
      }
    },
    {
      key: "checkPermissions",
      value: function checkPermissions(arg0) {
        PushNotificationIOS(closure_1[3])("function" === typeof arg0, "Must provide a valid callback");
        store.checkPermissions(arg0);
      }
    },
    {
      key: "getInitialNotification",
      value: function getInitialNotification() {
        const initialNotification = store.getInitialNotification();
        return initialNotification.then((arg0) => {
          let tmp = arg0;
          if (arg0) {
            const prototype = ctor.prototype;
            tmp = new ctor(arg0);
          }
          return tmp;
        });
      }
    }
  ];
  return callback(PushNotificationIOS, items, items1);
}();
tmp5.FetchResult = {};

export default tmp5;
