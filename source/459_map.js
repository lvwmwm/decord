// Module ID: 459
// Function ID: 6098
// Name: map
// Dependencies: []

// Module 459 (map)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let importDefaultResult = importDefault(dependencyMap[2]);
importDefaultResult = new importDefaultResult(null);
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
        PushNotificationIOS(closure_1[3])(PushNotificationIOS(closure_1[4]), "PushNotificationManager is not available.");
        const tmp4 = PushNotificationIOS(closure_1[3]);
        const result = PushNotificationIOS(closure_1[4]).onFinishRemoteNotification(self._notificationId, arg0);
        const obj = PushNotificationIOS(closure_1[4]);
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
        PushNotificationIOS(closure_1[3])(PushNotificationIOS(closure_1[4]), "PushNotificationManager is not available.");
        const tmp = PushNotificationIOS(closure_1[3]);
        const result = PushNotificationIOS(closure_1[4]).presentLocalNotification(arg0);
      }
    },
    {
      key: "scheduleLocalNotification",
      value: function scheduleLocalNotification(arg0) {
        PushNotificationIOS(closure_1[3])(PushNotificationIOS(closure_1[4]), "PushNotificationManager is not available.");
        const tmp = PushNotificationIOS(closure_1[3]);
        const result = PushNotificationIOS(closure_1[4]).scheduleLocalNotification(arg0);
      }
    },
    {
      key: "cancelAllLocalNotifications",
      value: function cancelAllLocalNotifications() {
        PushNotificationIOS(closure_1[3])(PushNotificationIOS(closure_1[4]), "PushNotificationManager is not available.");
        const tmp = PushNotificationIOS(closure_1[3]);
        const result = PushNotificationIOS(closure_1[4]).cancelAllLocalNotifications();
      }
    },
    {
      key: "removeAllDeliveredNotifications",
      value: function removeAllDeliveredNotifications() {
        PushNotificationIOS(closure_1[3])(PushNotificationIOS(closure_1[4]), "PushNotificationManager is not available.");
        const tmp = PushNotificationIOS(closure_1[3]);
        const result = PushNotificationIOS(closure_1[4]).removeAllDeliveredNotifications();
      }
    },
    {
      key: "getDeliveredNotifications",
      value: function getDeliveredNotifications(arg0) {
        PushNotificationIOS(closure_1[3])(PushNotificationIOS(closure_1[4]), "PushNotificationManager is not available.");
        const tmp = PushNotificationIOS(closure_1[3]);
        const deliveredNotifications = PushNotificationIOS(closure_1[4]).getDeliveredNotifications(arg0);
      }
    },
    {
      key: "removeDeliveredNotifications",
      value: function removeDeliveredNotifications(arg0) {
        PushNotificationIOS(closure_1[3])(PushNotificationIOS(closure_1[4]), "PushNotificationManager is not available.");
        const tmp = PushNotificationIOS(closure_1[3]);
        const result = PushNotificationIOS(closure_1[4]).removeDeliveredNotifications(arg0);
      }
    },
    {
      key: "setApplicationIconBadgeNumber",
      value: function setApplicationIconBadgeNumber(arg0) {
        PushNotificationIOS(closure_1[3])(PushNotificationIOS(closure_1[4]), "PushNotificationManager is not available.");
        const tmp = PushNotificationIOS(closure_1[3]);
        const result = PushNotificationIOS(closure_1[4]).setApplicationIconBadgeNumber(arg0);
      }
    },
    {
      key: "getApplicationIconBadgeNumber",
      value: function getApplicationIconBadgeNumber(arg0) {
        PushNotificationIOS(closure_1[3])(PushNotificationIOS(closure_1[4]), "PushNotificationManager is not available.");
        const tmp = PushNotificationIOS(closure_1[3]);
        const applicationIconBadgeNumber = PushNotificationIOS(closure_1[4]).getApplicationIconBadgeNumber(arg0);
      }
    },
    {
      key: "cancelLocalNotifications",
      value: function cancelLocalNotifications(arg0) {
        PushNotificationIOS(closure_1[3])(PushNotificationIOS(closure_1[4]), "PushNotificationManager is not available.");
        const tmp = PushNotificationIOS(closure_1[3]);
        const result = PushNotificationIOS(closure_1[4]).cancelLocalNotifications(arg0);
      }
    },
    {
      key: "getScheduledLocalNotifications",
      value: function getScheduledLocalNotifications(arg0) {
        PushNotificationIOS(closure_1[3])(PushNotificationIOS(closure_1[4]), "PushNotificationManager is not available.");
        const tmp = PushNotificationIOS(closure_1[3]);
        const scheduledLocalNotifications = PushNotificationIOS(closure_1[4]).getScheduledLocalNotifications(arg0);
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
          let addListenerResult = closure_4.addListener("remoteNotificationReceived", (arg0) => {
            arg1(new arg1(arg0));
          });
        } else if ("localNotification" === arg0) {
          addListenerResult = closure_4.addListener("localNotificationReceived", (arg0) => {
            arg1(new arg1(arg0));
          });
        } else if ("register" === arg0) {
          addListenerResult = closure_4.addListener("remoteNotificationsRegistered", (deviceToken) => {
            arg1(deviceToken.deviceToken);
          });
        } else if ("registrationError" === arg0) {
          addListenerResult = closure_4.addListener("remoteNotificationRegistrationError", (arg0) => {
            arg1(arg0);
          });
        }
        const result = store.set(arg0, addListenerResult);
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
        PushNotificationIOS(closure_1[3])(tmp2, "PushNotificationIOS only supports `notification`, `register`, `registrationError`, and `localNotification` events");
        const value = store.get(arg0);
        if (value) {
          value.remove();
          store.delete(arg0);
        }
      }
    },
    {
      key: "requestPermissions",
      value: function requestPermissions(alert) {
        if (alert) {
          const obj = { alert: alert.alert, badge: alert.badge, sound: alert.sound };
        }
        PushNotificationIOS(closure_1[3])(PushNotificationIOS(closure_1[4]), "PushNotificationManager is not available.");
        const tmp2 = PushNotificationIOS(closure_1[3]);
        return PushNotificationIOS(closure_1[4]).requestPermissions({ UNDEFINED: "Small", BEGAN: "sm", START: "Placeholder" });
      }
    },
    {
      key: "abandonPermissions",
      value: function abandonPermissions() {
        PushNotificationIOS(closure_1[3])(PushNotificationIOS(closure_1[4]), "PushNotificationManager is not available.");
        const tmp = PushNotificationIOS(closure_1[3]);
        PushNotificationIOS(closure_1[4]).abandonPermissions();
      }
    },
    {
      key: "checkPermissions",
      value: function checkPermissions(arg0) {
        PushNotificationIOS(closure_1[3])("function" === typeof arg0, "Must provide a valid callback");
        PushNotificationIOS(closure_1[3])(PushNotificationIOS(closure_1[4]), "PushNotificationManager is not available.");
        const tmp2 = PushNotificationIOS(closure_1[3]);
        PushNotificationIOS(closure_1[4]).checkPermissions(arg0);
      }
    },
    {
      key: "getInitialNotification",
      value: function getInitialNotification() {
        PushNotificationIOS(closure_1[3])(PushNotificationIOS(closure_1[4]), "PushNotificationManager is not available.");
        const tmp = PushNotificationIOS(closure_1[3]);
        const initialNotification = PushNotificationIOS(closure_1[4]).getInitialNotification();
        return initialNotification.then((arg0) => {
          let tmp = arg0;
          if (arg0) {
            const prototype = ctor.prototype;
            tmp = new ctor(arg0);
          }
          return tmp;
        });
      }
    },
    {
      key: "getAuthorizationStatus",
      value: function getAuthorizationStatus(arg0) {
        PushNotificationIOS(closure_1[3])(PushNotificationIOS(closure_1[4]), "PushNotificationManager is not available.");
        const tmp = PushNotificationIOS(closure_1[3]);
        const authorizationStatus = PushNotificationIOS(closure_1[4]).getAuthorizationStatus(arg0);
      }
    }
  ];
  return callback(PushNotificationIOS, items, items1);
}();
tmp5.FetchResult = {};

export default tmp5;
