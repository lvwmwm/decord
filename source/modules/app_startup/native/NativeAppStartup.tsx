// Module ID: 15950
// Function ID: 123198
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 5, 15951, 16001, 27, 16021, 1922, 1906, 6651, 6696, 16022, 653, 14, 3, 16631, 6724, 16632, 10968, 566, 682, 1186, 16634, 13170, 477, 20, 16635, 10519, 686, 16636, 3994, 6707, 1184, 16637, 16638, 10667, 587, 675, 479, 1898, 8010, 1933, 1250, 16639, 1934, 8347, 16641, 13376, 6914, 16659, 16660, 16661, 16662, 9910, 6720, 6708, 3983, 1278, 4122, 1324, 13424, 15686, 15687, 684, 13165, 6695, 13429, 13442, 6878, 16664, 5217, 6697, 6708, 2]
// Exports: init, initHeadlessTask

// Module 15950 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "timestamp";
import module_15951 from "module_15951";
import isAnalyticsEndpoint from "isAnalyticsEndpoint";
import get_ActivityIndicator from "dispatcher";
import timestamp from "timestamp";
import { subscribeToIntlLoadingSuccess as closure_11 } from "_setAppLocale";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import result from "result";
import inlineRequire from "inlineRequire";
import ME from "ME";
import { loadImports } from "DeeplinkSource";
import importDefaultResult from "isAnalyticsEndpoint";
import { loadIndex } from "DeeplinkSource";

let closure_10;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function linkFromAppsFlyer(arg0) {
  const uRL = new URL(arg0);
  const searchParams = uRL.searchParams;
  return "true" === searchParams.get("fromAppsFlyer");
}
function getInitialURLs() {
  return _getInitialURLs(...arguments);
}
function _getInitialURLs() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function handleURL(defaultResult1, defaultResult2) {
  importDefault(6724)("handleURL", () => outer1_0(outer1_3[16])).default(defaultResult1, defaultResult2);
}
function sharedInit() {
  function handleNotification(defaultResult1) {
    if (c0) {
      arr(handleNotification[15])("receiveNotification", () => callback(handleNotification[32])).default(defaultResult1, false);
      arr(handleNotification[12]).extraProperties.tapped_notification = true;
    } else {
      arr = arr.push(defaultResult1);
    }
  }
  function handleLocalNotification(getData) {
    if (c0) {
      const result = arr(handleNotification[15])("LocalPushNotificationActionCreators", () => callback(handleNotification[33])).receiveLocalNotification(getData);
    } else {
      arr = arr2.push(getData);
    }
  }
  let obj = importDefault(handleNotification[17]);
  let result = obj.setupOTAAssetFallback();
  const Emitter = importDefault(handleNotification[18]).Emitter;
  const result1 = Emitter.injectBatchEmitChanges(_require(handleNotification[19]).batchUpdates);
  const TelemetryRingLifecycle = _require(handleNotification[20]).TelemetryRingLifecycle;
  TelemetryRingLifecycle.initialize();
  const result2 = _require(handleNotification[21]).installWebsocketTelemetryHook((arg0) => {
    arr(handleNotification[22]).append(outer1_15.WEBSOCKET_MESSAGE_RECEIVED, arg0);
  });
  const listener = closure_8.addEventListener("url", (url) => {
    url = url.url;
    let isAndroidResult = callback(handleNotification[23]).isAndroid();
    if (isAndroidResult) {
      isAndroidResult = outer1_22 === url;
    }
    if (!isAndroidResult) {
      outer1_22 = url;
      outer1_27.then(() => {
        outer2_20.log("Handling URL: " + url);
        let obj = callback(handleNotification[24]);
        obj.mark("\u2757", "Handle URL " + url);
        obj = { url };
        const DeeplinkSource = url(handleNotification[14]).DeeplinkSource;
        obj.source = outer2_30(url) ? DeeplinkSource.AppsFlyer : DeeplinkSource.OS;
        outer2_33(obj, false);
      });
    }
  });
  closure_9.ignoreLogs(["Non-serializable values were found in the navigation state", "Overriding previous layout animation with new one before the first began", "Check the render method of `SceneView`", "Open debugger to view warnings."]);
  const obj2 = _require(handleNotification[21]);
  const initialBundleDownloaded = importDefault(handleNotification[17]).getInitialBundleDownloaded();
  initialBundleDownloaded.then((versionRequired) => {
    if (tmp) {
      const _HermesInternal = HermesInternal;
      outer1_20.verbose("Get initial downloaded bundle " + versionRequired.versionRequired);
      arr(handleNotification[25]).prepareUpdate(versionRequired.versionRequired);
      const obj = arr(handleNotification[25]);
    }
  });
  const obj3 = importDefault(handleNotification[17]);
  const listener1 = importDefault(handleNotification[17]).addEventListener("downloaded", (versionRequired) => {
    versionRequired = versionRequired.versionRequired;
    outer1_20.verbose("Bundle Event: bundle downloaded for " + versionRequired);
    arr(handleNotification[25]).prepareUpdate(versionRequired);
  });
  const obj4 = importDefault(handleNotification[17]);
  const initialOtaUpdateChecked = importDefault(handleNotification[17]).getInitialOtaUpdateChecked();
  initialOtaUpdateChecked.then((metrics) => {
    let done;
    metrics = metrics.metrics;
    outer1_20.verbose("Initial OTA update check metrics", metrics);
    const tmp2 = outer1_28(metrics);
    let iter = tmp2();
    if (!iter.done) {
      do {
        let tmp3 = arr;
        let tmp4 = handleNotification;
        let obj = arr(handleNotification[17]);
        let emitOtaMetricResult = obj.emitOtaMetric(iter.value);
        let iter2 = tmp2();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  });
  const obj5 = importDefault(handleNotification[17]);
  const listener2 = importDefault(handleNotification[17]).addEventListener("otaUpdateChecked", (metrics) => {
    let done;
    metrics = metrics.metrics;
    outer1_20.verbose("OTA update check metrics", metrics);
    const tmp2 = outer1_28(metrics);
    let iter = tmp2();
    if (!iter.done) {
      do {
        let tmp3 = arr;
        let tmp4 = handleNotification;
        let obj = arr(handleNotification[17]);
        let emitOtaMetricResult = obj.emitOtaMetric(iter.value);
        let iter2 = tmp2();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  });
  const obj6 = importDefault(handleNotification[17]);
  new closure_7(importDefault(handleNotification[26])).addListener("appWillEnterForeground", () => {
    arr(handleNotification[27]).dispatch({ type: "APP_STATE_UPDATE_WILL_BECOME_ACTIVE" });
  });
  if (state.getState() !== closure_6.currentState) {
    importDefault(handleNotification[15])("handleAppStateChange", () => callback(handleNotification[28])).default(closure_6.currentState);
  } else if (_require(handleNotification[29]).isBridgeless) {
    if (!obj8.isAndroid()) {
      if (!c21) {
        if (closure_6.currentState === constants.ACTIVE) {
          c21 = true;
          importDefault(handleNotification[15])("trackAppOpened", () => callback(handleNotification[30])).trackAppOpened("launcher");
        }
      }
    }
    obj8 = _require(handleNotification[23]);
  }
  const listener3 = closure_6.addEventListener("change", (defaultResult1) => {
    const appStateChangeStart = arr(handleNotification[12]).imports.appStateChangeStart;
    appStateChangeStart.record();
    let obj = arr(handleNotification[24]);
    obj.resumeTracing();
    obj = { message: "App state changed to " + defaultResult1, category: "appState" };
    arr(handleNotification[31]).addBreadcrumb(obj);
    arr(handleNotification[15])("handleAppStateChange", () => callback(handleNotification[28])).default(defaultResult1);
    const appStateChangeEnd = arr(handleNotification[12]).imports.appStateChangeEnd;
    appStateChangeEnd.record();
  });
  if (null != closure_10.Hosts) {
    const Hosts = closure_10.Hosts;
    const _location = location;
    const _window = window;
    let _HermesInternal = HermesInternal;
    const _location2 = location;
    const _window2 = window;
    const _HermesInternal2 = HermesInternal;
    const combined = "" + location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
    Hosts.setHosts(combined, "" + location.protocol + "//" + window.GLOBAL_ENV.CDN_HOST);
  }
  _require = false;
  importDefault = [];
  let closure_2 = [];
  const obj7 = new closure_7(importDefault(handleNotification[26]));
  const result3 = importDefault(handleNotification[34]).addNotificationEventListener("notification", (defaultResult1) => {
    const state = outer1_13.getState();
    outer1_20.log("Push notification received, the app state is " + state);
    if (state !== outer1_14.ACTIVE) {
      handleNotification(defaultResult1);
    }
  });
  const obj9 = importDefault(handleNotification[34]);
  const result4 = importDefault(handleNotification[34]).addNotificationEventListener("localNotification", handleLocalNotification);
  obj = {
    onStorageInitialize() {
      let c0 = true;
      const item = arr.forEach(handleNotification);
      const item1 = arr2.forEach(handleLocalNotification);
      arr.length = 0;
      arr2.length = 0;
    }
  };
  return obj;
}
function _trackFirstLaunched() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function loadStorage() {
  return _loadStorage(...arguments);
}
function _loadStorage() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function loadKvStorage() {
  importDefault(1898).initialize();
  const resolved = Promise.resolve();
}
function initializeIntl() {
  return _initializeIntl(...arguments);
}
function _initializeIntl() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _init(_payload) {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _initHeadlessTask() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function initializeTokenStorage() {
  const Storage = require(587) /* Storage */.Storage;
  if (null == Storage.get(closure_17)) {
    let obj = require(477) /* set */;
    if (obj.isAndroid()) {
      let token = importDefault(479).getConstants().token;
      const obj2 = importDefault(479);
    } else {
      token = closure_10.DCDFastConnectManager.token;
    }
    if (null != token) {
      importDefaultResult.log("Applying token storage fix.");
      const Storage2 = require(587) /* Storage */.Storage;
      const result = Storage2.set(closure_17, token);
    } else {
      importDefaultResult.log("Cannot apply token storage fix as token not in NSUserDefaults.");
    }
  } else {
    importDefaultResult.verbose("No need to apply token storage fix as token already exists.");
  }
  importAll(684).init();
  const obj3 = importAll(684);
  const obj4 = importAll(684);
  const Storage3 = require(587) /* Storage */.Storage;
  obj = { storageHasToken: null != Storage3.get(closure_17), tokenManagerHasToken: null != importAll(684).getToken() };
  importDefaultResult.verbose("Token manager has initialized", obj);
  callback2();
}
({ AppState: closure_6, NativeEventEmitter: closure_7, Linking: closure_8, LogBox: closure_9, NativeModules: closure_10 } = get_ActivityIndicator);
({ AppStates: closure_14, AnalyticEvents: closure_15, FIRST_RUN_DATE_KEY: closure_16, TOKEN_KEY: closure_17, STORAGE_SECURE_KEYS: closure_18, Platforms: closure_19 } = ME);
loadImports.recordEnd();
importDefaultResult = new importDefaultResult("index.native.tsx");
let c21 = false;
let c22 = null;
const future = new require("Future").Future();
let obj = { None: 0, [0]: "None", HeadlessRan: 1, [1]: "HeadlessRan", Full: 2, [2]: "Full" };
const None = obj.None;
const promise = new Promise((arg0) => {
  let closure_23 = arg0;
});
loadIndex.recordEnd();
result = require("module_15951").fileFinishedImporting("modules/app_startup/native/NativeAppStartup.tsx");

export const applicationReady = future;
export const init = function init() {
  return _init(...arguments);
};
export const initHeadlessTask = function initHeadlessTask() {
  return _initHeadlessTask(...arguments);
};
