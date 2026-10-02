// Module ID: 8741
// Function ID: 8742
// Name: PushNotification
// Dependencies: [17, 1370, 8742, 8743, 8744, 2]

// Module 8741 (PushNotification)
import PlatformUtils from "PlatformUtils" /* 1370 */;
import _modDef8742 from "module_8742" /* 8742 */;
import react_nativeDefault from "react-native" /* 8744 */;
import react_native2 from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, lightsEnabled, soundsEnabled, vibrationsEnabled;

let tmp;
const react_native = tmp(8743);
function getData() {
  let parsed;
  const obj = { message: parsed };
  const merged = Object.assign(message);
  parsed = null;
  const tmp = message;
  if (null != message.message) {
    const _JSON = JSON;
    parsed = JSON.parse(tmp.message);
  }
  return obj;
}
function getMessage() {
  const error = new Error("TODO: Implement on Android");
  throw error;
}
function getSound() {
  const error = new Error("TODO: Implement on Android");
  throw error;
}
function getCategory() {
  const error = new Error("TODO: Implement on Android");
  throw error;
}
function getAlert() {
  const error = new Error("TODO: Implement on Android");
  throw error;
}
function getContentAvailable() {
  const error = new Error("TODO: Implement on Android");
  throw error;
}
function getBadgeCount() {
  const error = new Error("TODO: Implement on Android");
  throw error;
}
function finish(arg0) {
  const error = new Error("Not implemented on Android: " + arg0);
  throw error;
}
const NativeModules = react_native2.NativeModules;
const PushNotificationAndroid = NativeModules.PushNotificationAndroid;
let tmp32 = null;
if (null != PushNotificationAndroid) {
  let self = this;
  let self2 = this;
  tmp32 = new tmp3(NativeModules.PushNotificationAndroid);
}
let closure_5 = tmp32;
let obj = {
  getInitialNotification() {
    let initialNotification;
    let tmp = dependencyMap;
    let obj = PlatformUtils;
    if (obj.isAndroid()) {
      const self = this;
      const self2 = this;
      initialNotification = new Promise((arg0) => {
        let closure_0 = arg0;
        initialNotification = initialNotification.getInitialNotification();
        initialNotification.then((result) => {
          closure_0 = result;
          let tmp2 = null;
          let tmp = closure_0;
          if (null != result) {
            let obj = { getData, getMessage, getSound, getCategory, getAlert, getContentAvailable, getBadgeCount, finish };
            tmp2 = obj;
          }
          tmp(tmp2);
        });
      });
    } else {
      let tmp2 = importDefault;
      const obj2 = _modDef8742;
      initialNotification = obj2.getInitialNotification();
    }
    return initialNotification;
  },
  setCurrentUser(username, id) {
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      PushNotificationAndroid.setCurrentUser(username, id);
    }
  },
  setMultiAccountUsers(arg0) {
    const json = JSON.stringify(arg0);
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      const tmp5 = PushNotificationAndroid;
      if (PushNotificationAndroid != null) {
        const setMultiAccountUsernames = tmp5.setMultiAccountUsernames;
        if (setMultiAccountUsernames != null) {
          const result = setMultiAccountUsernames(json);
        }
      }
    } else {
      const NSUserDefaultsBridge = NativeModules.NSUserDefaultsBridge;
      if (NSUserDefaultsBridge != null) {
        const setMultiAccountUsersJSONString = NSUserDefaultsBridge.setMultiAccountUsersJSONString;
        if (setMultiAccountUsersJSONString != null) {
          const result1 = setMultiAccountUsersJSONString(json);
        }
      }
    }
  },
  clearPushNotificationLogs() {
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      const _default = react_native.default;
      _default.clearLogs();
    }
  },
  setApplicationIconBadgeNumber(arg0) {
    const obj = PlatformUtils;
    if (!obj.isAndroid()) {
      const obj2 = _modDef8742;
      const result = obj2.setApplicationIconBadgeNumber(arg0);
    }
  },
  clearAllNotifications() {
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      const result = PushNotificationAndroid.clearAllNotifications();
    } else {
      const obj2 = _modDef8742;
      const result1 = obj2.setApplicationIconBadgeNumber(0);
    }
  },
  presentLocalNotification(arg0) {
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      const result = PushNotificationAndroid.presentLocalNotification(arg0);
    } else {
      const obj2 = _modDef8742;
      const result1 = obj2.presentLocalNotification(arg0);
    }
  },
  getDeliveredNotifications() {
    let resolveResult;
    let obj = PlatformUtils;
    if (obj.isAndroid()) {
      resolveResult = _Promise.resolve([]);
    } else {
      const self = this;
      const self2 = this;
      resolveResult = new _Promise((arg0) => {
        const obj = _modDef8742;
        const deliveredNotifications = obj.getDeliveredNotifications(arg0);
      });
    }
    return resolveResult;
  },
  removeDeliveredNotifications(arg0) {
    const obj = PlatformUtils;
    if (!obj.isAndroid()) {
      const obj2 = _modDef8742;
      const result = obj2.removeDeliveredNotifications(arg0);
    }
  },
  scheduleLocalNotification(arg0) {
    const obj = PlatformUtils;
    if (!obj.isAndroid()) {
      const obj2 = _modDef8742;
      const result = obj2.scheduleLocalNotification(arg0);
    }
  },
  getScheduledLocalNotifications(arg0) {
    const obj = PlatformUtils;
    if (!obj.isAndroid()) {
      const obj2 = _modDef8742;
      const scheduledLocalNotifications = obj2.getScheduledLocalNotifications(arg0);
    }
  },
  cancelLocalNotifications(arg0) {
    const obj = PlatformUtils;
    if (!obj.isAndroid()) {
      const obj2 = _modDef8742;
      const result = obj2.cancelLocalNotifications(arg0);
    }
  },
  cancelAllLocalNotifications() {
    const obj = PlatformUtils;
    if (!obj.isAndroid()) {
      const obj2 = _modDef8742;
      const result = obj2.cancelAllLocalNotifications();
    }
  },
  checkPermissions(fn) {
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      fn({});
    } else {
      const obj2 = _modDef8742;
      obj2.checkPermissions(fn);
    }
  },
  requestPermissions(arg0) {
    let permissions;
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      const self = this;
      const self2 = this;
      permissions = new Promise((fn) => fn({}));
    } else {
      const obj2 = _modDef8742;
      permissions = obj2.requestPermissions(arg0);
    }
    return permissions;
  },
  openNotificationSettings() {
    react_nativeDefault();
  },
  addNotificationEventListener(localNotification, handleLocalNotification) {
    _require = handleLocalNotification;
    let tmp = dependencyMap;
    let obj = require("PlatformUtils");
    if (obj.isAndroid()) {
      if ("notification" === localNotification) {
        closure_5.addListener("notification", (arg0) => {
          handleLocalNotification = arg0;
          let tmp = null;
          if (null != arg0) {
            tmp = { getData, getMessage, getSound, getCategory, getAlert, getContentAvailable, getBadgeCount, finish };
            const obj = { getData, getMessage, getSound, getCategory, getAlert, getContentAvailable, getBadgeCount, finish };
          }
          if (null != tmp) {
            handleLocalNotification(tmp);
          }
        });
      }
      if ("localNotification" === localNotification) {
        closure_5.addListener("localNotification", (arg0) => {
          handleLocalNotification = arg0;
          let tmp = null;
          if (null != arg0) {
            tmp = { getData, getMessage, getSound, getCategory, getAlert, getContentAvailable, getBadgeCount, finish };
            const obj = { getData, getMessage, getSound, getCategory, getAlert, getContentAvailable, getBadgeCount, finish };
          }
          if (null != tmp) {
            handleLocalNotification(tmp);
          }
        });
      }
      const result = PushNotificationAndroid.registerEventListener(localNotification);
    } else {
      const obj2 = _modDef8742;
      const listener = obj2.addEventListener(localNotification, handleLocalNotification);
    }
  },
  addRegisterEventListener(handleToken) {
    let closure_0 = handleToken;
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      closure_5.addListener("register", (token) => {
        closure_0(token.token);
      });
      const result = PushNotificationAndroid.registerEventListener("register");
    } else {
      const obj2 = _modDef8742;
      const listener = obj2.addEventListener("register", handleToken);
    }
  },
  getSoundsEnabled() {
    const promise = new Promise((fn) => {
      let closure_0 = fn;
      const obj = require("PlatformUtils");
      if (obj.isAndroid()) {
        soundsEnabled = soundsEnabled.getSoundsEnabled();
        soundsEnabled.then((result) => closure_0(result));
      } else {
        fn(false);
      }
    });
    return promise;
  },
  getVibrationsEnabled() {
    const promise = new Promise((fn) => {
      let closure_0 = fn;
      const obj = require("PlatformUtils");
      if (obj.isAndroid()) {
        vibrationsEnabled = vibrationsEnabled.getVibrationsEnabled();
        vibrationsEnabled.then((result) => closure_0(result));
      } else {
        fn(false);
      }
    });
    return promise;
  },
  getLightsEnabled() {
    const promise = new Promise((fn) => {
      let closure_0 = fn;
      const obj = require("PlatformUtils");
      if (obj.isAndroid()) {
        lightsEnabled = lightsEnabled.getLightsEnabled();
        lightsEnabled.then((result) => closure_0(result));
      } else {
        fn(false);
      }
    });
    return promise;
  },
  setSoundsEnabled(arg0) {
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      PushNotificationAndroid.setSoundsEnabled(arg0);
    }
  },
  setVibrationsEnabled(arg0) {
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      PushNotificationAndroid.setVibrationsEnabled(arg0);
    }
  },
  setLightsEnabled(arg0) {
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      PushNotificationAndroid.setLightsEnabled(arg0);
    }
  },
  setAndroidNotifyEveryTime(arg0) {
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      PushNotificationAndroid.setNotifyEveryTime(arg0);
    }
  },
  shouldAndroidNotifyEveryTime() {
    const promise = new Promise((fn) => {
      let closure_0 = fn;
      const obj = require("PlatformUtils");
      if (obj.isAndroid()) {
        const result = PushNotificationAndroid.shouldNotifyEveryTime();
        result.then((result) => closure_0(result));
      } else {
        fn(false);
      }
    });
    return promise;
  }
};
let result = size.fileFinishedImporting("lib/pushnotification/PushNotification.tsx");

export default obj;
