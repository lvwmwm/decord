// Module ID: 10621
// Function ID: 82856
// Name: createNotification
// Dependencies: []

// Module 10621 (createNotification)
function createNotification(arg0) {
  const require = arg0;
  let tmp = null;
  if (null != arg0) {
    const obj = {
      getData() {
          const obj = {};
          const merged = Object.assign(arg0);
          let parsed = null;
          if (null != arg0.message) {
            const _JSON = JSON;
            parsed = JSON.parse(arg0.message);
          }
          obj["message"] = parsed;
          return obj;
        },
      getMessage() {
          const error = new Error("TODO: Implement on Android");
          throw error;
        },
      getSound() {
          const error = new Error("TODO: Implement on Android");
          throw error;
        },
      getCategory() {
          const error = new Error("TODO: Implement on Android");
          throw error;
        },
      getAlert() {
          const error = new Error("TODO: Implement on Android");
          throw error;
        },
      getContentAvailable() {
          const error = new Error("TODO: Implement on Android");
          throw error;
        },
      getBadgeCount() {
          const error = new Error("TODO: Implement on Android");
          throw error;
        },
      finish(arg0) {
          const error = new Error("Not implemented on Android: " + arg0);
          throw error;
        }
    };
    tmp = obj;
  }
  return tmp;
}
const _module = require(dependencyMap[0]);
const NativeModules = _module.NativeModules;
const NativeEventEmitter = _module.NativeEventEmitter;
const PushNotificationAndroid = NativeModules.PushNotificationAndroid;
let nativeEventEmitter = null;
if (null != PushNotificationAndroid) {
  const prototype = NativeEventEmitter.prototype;
  nativeEventEmitter = new NativeEventEmitter(NativeModules.PushNotificationAndroid);
}
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("lib/pushnotification/PushNotification.tsx");

export default {
  getInitialNotification() {
    if (obj.isAndroid()) {
      let initialNotification = new Promise((arg0) => {
        const initialNotification = initialNotification.getInitialNotification();
        initialNotification.then((arg0) => {
          arg0(callback(arg0));
        });
      });
    } else {
      initialNotification = importDefault(dependencyMap[2]).getInitialNotification();
      const obj2 = importDefault(dependencyMap[2]);
    }
    return initialNotification;
  },
  setCurrentUser(username, id) {
    if (obj.isAndroid()) {
      PushNotificationAndroid.setCurrentUser(username, id);
    }
  },
  setMultiAccountUsers(arg0) {
    const json = JSON.stringify(arg0);
    if (obj.isAndroid()) {
      let tmp8 = null == PushNotificationAndroid;
      if (!tmp8) {
        tmp8 = null == PushNotificationAndroid.setMultiAccountUsernames;
      }
      if (!tmp8) {
        const result = PushNotificationAndroid.setMultiAccountUsernames(json);
      }
    } else {
      const NSUserDefaultsBridge = NativeModules.NSUserDefaultsBridge;
      if (!tmp4) {
        const result1 = NSUserDefaultsBridge.setMultiAccountUsersJSONString(json);
      }
      const tmp4 = null == NSUserDefaultsBridge || null == NSUserDefaultsBridge.setMultiAccountUsersJSONString;
    }
  },
  clearPushNotificationLogs() {
    if (obj.isAndroid()) {
      require(dependencyMap[3]).default.clearLogs();
      const _default = require(dependencyMap[3]).default;
    }
  },
  setApplicationIconBadgeNumber(arg0) {
    if (!obj.isAndroid()) {
      const result = importDefault(dependencyMap[2]).setApplicationIconBadgeNumber(arg0);
      const obj2 = importDefault(dependencyMap[2]);
    }
  },
  clearAllNotifications() {
    if (obj.isAndroid()) {
      const result = PushNotificationAndroid.clearAllNotifications();
    } else {
      const result1 = importDefault(dependencyMap[2]).setApplicationIconBadgeNumber(0);
      const obj2 = importDefault(dependencyMap[2]);
    }
  },
  presentLocalNotification(arg0) {
    if (obj.isAndroid()) {
      const result = PushNotificationAndroid.presentLocalNotification(arg0);
    } else {
      const result1 = importDefault(dependencyMap[2]).presentLocalNotification(arg0);
      const obj2 = importDefault(dependencyMap[2]);
    }
  },
  getDeliveredNotifications() {
    if (obj.isAndroid()) {
      let resolveResult = _Promise.resolve([]);
    } else {
      const prototype = _Promise.prototype;
      resolveResult = new _Promise((arg0) => {
        const deliveredNotifications = callback(closure_2[2]).getDeliveredNotifications(arg0);
      });
    }
    return resolveResult;
  },
  removeDeliveredNotifications(arg0) {
    if (!obj.isAndroid()) {
      const result = importDefault(dependencyMap[2]).removeDeliveredNotifications(arg0);
      const obj2 = importDefault(dependencyMap[2]);
    }
  },
  scheduleLocalNotification(arg0) {
    if (!obj.isAndroid()) {
      const result = importDefault(dependencyMap[2]).scheduleLocalNotification(arg0);
      const obj2 = importDefault(dependencyMap[2]);
    }
  },
  getScheduledLocalNotifications(arg0) {
    if (!obj.isAndroid()) {
      const scheduledLocalNotifications = importDefault(dependencyMap[2]).getScheduledLocalNotifications(arg0);
      const obj2 = importDefault(dependencyMap[2]);
    }
  },
  cancelLocalNotifications(arg0) {
    if (!obj.isAndroid()) {
      const result = importDefault(dependencyMap[2]).cancelLocalNotifications(arg0);
      const obj2 = importDefault(dependencyMap[2]);
    }
  },
  cancelAllLocalNotifications() {
    if (!obj.isAndroid()) {
      const result = importDefault(dependencyMap[2]).cancelAllLocalNotifications();
      const obj2 = importDefault(dependencyMap[2]);
    }
  },
  checkPermissions(arg0) {
    if (obj.isAndroid()) {
      arg0({});
    } else {
      importDefault(dependencyMap[2]).checkPermissions(arg0);
      const obj2 = importDefault(dependencyMap[2]);
    }
  },
  requestPermissions(arg0) {
    if (obj.isAndroid()) {
      let permissions = new Promise((arg0) => arg0({}));
    } else {
      permissions = importDefault(dependencyMap[2]).requestPermissions(arg0);
      const obj2 = importDefault(dependencyMap[2]);
    }
    return permissions;
  },
  openNotificationSettings() {
    importDefault(dependencyMap[4])();
  },
  addNotificationEventListener(localNotification, handleLocalNotification) {
    const require = handleLocalNotification;
    if (obj.isAndroid()) {
      if ("notification" === localNotification) {
        nativeEventEmitter.addListener("notification", (arg0) => {
          const tmp = callback(arg0);
          if (null != tmp) {
            arg1(tmp);
          }
        });
      }
      if ("localNotification" === localNotification) {
        nativeEventEmitter.addListener("localNotification", (arg0) => {
          const tmp = callback(arg0);
          if (null != tmp) {
            arg1(tmp);
          }
        });
      }
      const result = PushNotificationAndroid.registerEventListener(localNotification);
    } else {
      const listener = importDefault(dependencyMap[2]).addEventListener(localNotification, handleLocalNotification);
      const obj2 = importDefault(dependencyMap[2]);
    }
  },
  addRegisterEventListener(handleToken) {
    const require = handleToken;
    if (obj.isAndroid()) {
      nativeEventEmitter.addListener("register", (token) => {
        token(token.token);
      });
      const result = PushNotificationAndroid.registerEventListener("register");
    } else {
      const listener = importDefault(dependencyMap[2]).addEventListener("register", handleToken);
      const obj2 = importDefault(dependencyMap[2]);
    }
  },
  getSoundsEnabled() {
    return new Promise((arg0) => {
      if (obj.isAndroid()) {
        const soundsEnabled = soundsEnabled.getSoundsEnabled();
        soundsEnabled.then((arg0) => arg0(arg0));
      } else {
        arg0(false);
      }
    });
  },
  getVibrationsEnabled() {
    return new Promise((arg0) => {
      if (obj.isAndroid()) {
        const vibrationsEnabled = vibrationsEnabled.getVibrationsEnabled();
        vibrationsEnabled.then((arg0) => arg0(arg0));
      } else {
        arg0(false);
      }
    });
  },
  getLightsEnabled() {
    return new Promise((arg0) => {
      if (obj.isAndroid()) {
        const lightsEnabled = lightsEnabled.getLightsEnabled();
        lightsEnabled.then((arg0) => arg0(arg0));
      } else {
        arg0(false);
      }
    });
  },
  setSoundsEnabled(arg0) {
    if (obj.isAndroid()) {
      PushNotificationAndroid.setSoundsEnabled(arg0);
    }
  },
  setVibrationsEnabled(arg0) {
    if (obj.isAndroid()) {
      PushNotificationAndroid.setVibrationsEnabled(arg0);
    }
  },
  setLightsEnabled(arg0) {
    if (obj.isAndroid()) {
      PushNotificationAndroid.setLightsEnabled(arg0);
    }
  },
  setAndroidNotifyEveryTime(arg0) {
    if (obj.isAndroid()) {
      PushNotificationAndroid.setNotifyEveryTime(arg0);
    }
  },
  shouldAndroidNotifyEveryTime() {
    return new Promise((arg0) => {
      if (obj.isAndroid()) {
        const result = closure_4.shouldNotifyEveryTime();
        result.then((arg0) => arg0(arg0));
      } else {
        arg0(false);
      }
    });
  }
};
