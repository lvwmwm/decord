// Module ID: 10638
// Function ID: 82953
// Name: createNotification
// Dependencies: [27, 477, 10639, 10327, 10640, 2]

// Module 10638 (createNotification)
import get_ActivityIndicator from "get ActivityIndicator";

function createNotification(arg0) {
  let closure_0 = arg0;
  let tmp = null;
  if (null != arg0) {
    let obj = {
      getData() {
          const obj = {};
          const merged = Object.assign(closure_0);
          let parsed = null;
          if (null != closure_0.message) {
            const _JSON = JSON;
            parsed = JSON.parse(closure_0.message);
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
const NativeModules = get_ActivityIndicator.NativeModules;
const NativeEventEmitter = get_ActivityIndicator.NativeEventEmitter;
const PushNotificationAndroid = NativeModules.PushNotificationAndroid;
let nativeEventEmitter = null;
if (null != PushNotificationAndroid) {
  let prototype = NativeEventEmitter.prototype;
  nativeEventEmitter = new NativeEventEmitter(NativeModules.PushNotificationAndroid);
}
let result = require("RNCPushNotificationIOS").fileFinishedImporting("lib/pushnotification/PushNotification.tsx");

export default {
  getInitialNotification() {
    if (obj.isAndroid()) {
      let initialNotification = new Promise((arg0) => {
        let closure_0 = arg0;
        const initialNotification = outer1_4.getInitialNotification();
        initialNotification.then((arg0) => {
          callback(outer2_6(arg0));
        });
      });
    } else {
      initialNotification = importDefault(10639).getInitialNotification();
      const obj2 = importDefault(10639);
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
      tmp4 = null == NSUserDefaultsBridge || null == NSUserDefaultsBridge.setMultiAccountUsersJSONString;
    }
  },
  clearPushNotificationLogs() {
    if (obj.isAndroid()) {
      require(10327) /* enforcing */.default.clearLogs();
      const _default = require(10327) /* enforcing */.default;
    }
  },
  setApplicationIconBadgeNumber(arg0) {
    if (!obj.isAndroid()) {
      const result = importDefault(10639).setApplicationIconBadgeNumber(arg0);
      const obj2 = importDefault(10639);
    }
  },
  clearAllNotifications() {
    if (obj.isAndroid()) {
      const result = PushNotificationAndroid.clearAllNotifications();
    } else {
      const result1 = importDefault(10639).setApplicationIconBadgeNumber(0);
      const obj2 = importDefault(10639);
    }
  },
  presentLocalNotification(arg0) {
    if (obj.isAndroid()) {
      const result = PushNotificationAndroid.presentLocalNotification(arg0);
    } else {
      const result1 = importDefault(10639).presentLocalNotification(arg0);
      const obj2 = importDefault(10639);
    }
  },
  getDeliveredNotifications() {
    if (obj.isAndroid()) {
      let resolveResult = _Promise.resolve([]);
    } else {
      const prototype = _Promise.prototype;
      resolveResult = new _Promise((arg0) => {
        const deliveredNotifications = outer1_1(outer1_2[2]).getDeliveredNotifications(arg0);
      });
    }
    return resolveResult;
  },
  removeDeliveredNotifications(arg0) {
    if (!obj.isAndroid()) {
      const result = importDefault(10639).removeDeliveredNotifications(arg0);
      const obj2 = importDefault(10639);
    }
  },
  scheduleLocalNotification(arg0) {
    if (!obj.isAndroid()) {
      const result = importDefault(10639).scheduleLocalNotification(arg0);
      const obj2 = importDefault(10639);
    }
  },
  getScheduledLocalNotifications(arg0) {
    if (!obj.isAndroid()) {
      const scheduledLocalNotifications = importDefault(10639).getScheduledLocalNotifications(arg0);
      const obj2 = importDefault(10639);
    }
  },
  cancelLocalNotifications(arg0) {
    if (!obj.isAndroid()) {
      const result = importDefault(10639).cancelLocalNotifications(arg0);
      const obj2 = importDefault(10639);
    }
  },
  cancelAllLocalNotifications() {
    if (!obj.isAndroid()) {
      const result = importDefault(10639).cancelAllLocalNotifications();
      const obj2 = importDefault(10639);
    }
  },
  checkPermissions(arg0) {
    if (obj.isAndroid()) {
      arg0({});
    } else {
      importDefault(10639).checkPermissions(arg0);
      const obj2 = importDefault(10639);
    }
  },
  requestPermissions(arg0) {
    if (obj.isAndroid()) {
      let permissions = new Promise((arg0) => arg0({}));
    } else {
      permissions = importDefault(10639).requestPermissions(arg0);
      const obj2 = importDefault(10639);
    }
    return permissions;
  },
  openNotificationSettings() {
    importDefault(10640)();
  },
  addNotificationEventListener(localNotification, handleLocalNotification) {
    const _require = handleLocalNotification;
    if (obj.isAndroid()) {
      if ("notification" === localNotification) {
        nativeEventEmitter.addListener("notification", (arg0) => {
          const tmp = outer1_6(arg0);
          if (null != tmp) {
            handleLocalNotification(tmp);
          }
        });
      }
      if ("localNotification" === localNotification) {
        nativeEventEmitter.addListener("localNotification", (arg0) => {
          const tmp = outer1_6(arg0);
          if (null != tmp) {
            handleLocalNotification(tmp);
          }
        });
      }
      const result = PushNotificationAndroid.registerEventListener(localNotification);
    } else {
      const listener = importDefault(10639).addEventListener(localNotification, handleLocalNotification);
      const obj2 = importDefault(10639);
    }
  },
  addRegisterEventListener(handleToken) {
    const _require = handleToken;
    if (obj.isAndroid()) {
      nativeEventEmitter.addListener("register", (token) => {
        handleToken(token.token);
      });
      const result = PushNotificationAndroid.registerEventListener("register");
    } else {
      const listener = importDefault(10639).addEventListener("register", handleToken);
      const obj2 = importDefault(10639);
    }
  },
  getSoundsEnabled() {
    return new Promise((arg0) => {
      let closure_0 = arg0;
      if (obj.isAndroid()) {
        const soundsEnabled = outer1_4.getSoundsEnabled();
        soundsEnabled.then((arg0) => callback(arg0));
      } else {
        arg0(false);
      }
    });
  },
  getVibrationsEnabled() {
    return new Promise((arg0) => {
      let closure_0 = arg0;
      if (obj.isAndroid()) {
        const vibrationsEnabled = outer1_4.getVibrationsEnabled();
        vibrationsEnabled.then((arg0) => callback(arg0));
      } else {
        arg0(false);
      }
    });
  },
  getLightsEnabled() {
    return new Promise((arg0) => {
      let closure_0 = arg0;
      if (obj.isAndroid()) {
        const lightsEnabled = outer1_4.getLightsEnabled();
        lightsEnabled.then((arg0) => callback(arg0));
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
      let closure_0 = arg0;
      if (obj.isAndroid()) {
        const result = outer1_4.shouldNotifyEveryTime();
        result.then((arg0) => callback(arg0));
      } else {
        arg0(false);
      }
    });
  }
};
