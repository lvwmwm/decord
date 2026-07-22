// Module ID: 15786
// Function ID: 120703
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: init, initHeadlessTask

// Module 15786 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  const obj = callback2(tmp);
  const _getInitialURLs = obj;
  return obj(...arguments);
}
function handleURL(defaultResult1, defaultResult2) {
  importDefault(dependencyMap[15])("handleURL", () => callback(closure_3[16])).default(defaultResult1, defaultResult2);
}
function sharedInit() {
  function handleNotification(defaultResult1) {
    if (closure_0) {
      arr(handleNotification[15])("receiveNotification", () => callback(closure_3[32])).default(defaultResult1, false);
      arr(handleNotification[12]).extraProperties.tapped_notification = true;
    } else {
      const arr = arr.push(defaultResult1);
    }
  }
  function handleLocalNotification(getData) {
    if (closure_0) {
      const result = arr(handleNotification[15])("LocalPushNotificationActionCreators", () => callback(closure_3[33])).receiveLocalNotification(getData);
    } else {
      const arr = arr2.push(getData);
    }
  }
  let closure_4 = handleLocalNotification;
  let obj = importDefault(handleNotification[17]);
  const result = obj.setupOTAAssetFallback();
  const Emitter = importDefault(handleNotification[18]).Emitter;
  const result1 = Emitter.injectBatchEmitChanges(callback(handleNotification[19]).batchUpdates);
  const TelemetryRingLifecycle = callback(handleNotification[20]).TelemetryRingLifecycle;
  TelemetryRingLifecycle.initialize();
  const result2 = callback(handleNotification[21]).installWebsocketTelemetryHook((arg0) => {
    arr(handleNotification[22]).append(constants2.WEBSOCKET_MESSAGE_RECEIVED, arg0);
  });
  const listener = closure_8.addEventListener("url", (url) => {
    url = url.url;
    const callback = url;
    let isAndroidResult = callback(handleNotification[23]).isAndroid();
    if (isAndroidResult) {
      isAndroidResult = url === url;
    }
    if (!isAndroidResult) {
      promise.then(() => {
        closure_20.log("Handling URL: " + url);
        let obj = callback(closure_3[24]);
        obj.mark("\u2757", "Handle URL " + url);
        obj = { url };
        const DeeplinkSource = url(closure_3[14]).DeeplinkSource;
        obj.source = callback2(url) ? DeeplinkSource.AppsFlyer : DeeplinkSource.OS;
        closure_33(obj, false);
      });
    }
  });
  closure_9.ignoreLogs(["bqy", "sgn", "btj", "ms"]);
  const obj2 = callback(handleNotification[21]);
  const initialBundleDownloaded = importDefault(handleNotification[17]).getInitialBundleDownloaded();
  initialBundleDownloaded.then((versionRequired) => {
    if (tmp) {
      const _HermesInternal = HermesInternal;
      closure_20.verbose("Get initial downloaded bundle " + versionRequired.versionRequired);
      arr(handleNotification[25]).prepareUpdate(versionRequired.versionRequired);
      const obj = arr(handleNotification[25]);
    }
  });
  const obj3 = importDefault(handleNotification[17]);
  const listener1 = importDefault(handleNotification[17]).addEventListener("downloaded", (versionRequired) => {
    versionRequired = versionRequired.versionRequired;
    closure_20.verbose("Bundle Event: bundle downloaded for " + versionRequired);
    arr(handleNotification[25]).prepareUpdate(versionRequired);
  });
  const obj4 = importDefault(handleNotification[17]);
  const initialOtaUpdateChecked = importDefault(handleNotification[17]).getInitialOtaUpdateChecked();
  initialOtaUpdateChecked.then((metrics) => {
    let done;
    metrics = metrics.metrics;
    closure_20.verbose("Initial OTA update check metrics", metrics);
    const tmp2 = callback2(metrics);
    let iter = tmp2();
    if (!iter.done) {
      do {
        let tmp3 = closure_1;
        let tmp4 = closure_3;
        let obj = closure_1(closure_3[17]);
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
    closure_20.verbose("OTA update check metrics", metrics);
    const tmp2 = callback2(metrics);
    let iter = tmp2();
    if (!iter.done) {
      do {
        let tmp3 = closure_1;
        let tmp4 = closure_3;
        let obj = closure_1(closure_3[17]);
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
  } else if (callback(handleNotification[29]).isBridgeless) {
    if (!obj8.isAndroid()) {
      if (!closure_21) {
        if (closure_6.currentState === constants.ACTIVE) {
          closure_21 = true;
          importDefault(handleNotification[15])("trackAppOpened", () => callback(handleNotification[30])).trackAppOpened("launcher");
        }
      }
    }
    const obj8 = callback(handleNotification[23]);
  }
  const listener3 = closure_6.addEventListener("change", (defaultResult1) => {
    const appStateChangeStart = arr(handleNotification[12]).imports.appStateChangeStart;
    appStateChangeStart.record();
    let obj = arr(handleNotification[24]);
    obj.resumeTracing();
    obj = { message: "App state changed to " + defaultResult1, category: "appState" };
    arr(handleNotification[31]).addBreadcrumb(obj);
    arr(handleNotification[15])("handleAppStateChange", () => callback(closure_3[28])).default(defaultResult1);
    const appStateChangeEnd = arr(handleNotification[12]).imports.appStateChangeEnd;
    appStateChangeEnd.record();
  });
  if (null != closure_10.Hosts) {
    const Hosts = closure_10.Hosts;
    const _location = location;
    const _window = window;
    const _HermesInternal = HermesInternal;
    const _location2 = location;
    const _window2 = window;
    const _HermesInternal2 = HermesInternal;
    const combined = "" + location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
    Hosts.setHosts(combined, "" + location.protocol + "//" + window.GLOBAL_ENV.CDN_HOST);
  }
  const callback = false;
  const importDefault = [];
  let closure_2 = [];
  const obj7 = new closure_7(importDefault(handleNotification[26]));
  const result3 = importDefault(handleNotification[34]).addNotificationEventListener("notification", (defaultResult1) => {
    const state = state.getState();
    closure_20.log("Push notification received, the app state is " + state);
    if (state !== constants.ACTIVE) {
      handleNotification(defaultResult1);
    }
  });
  const obj9 = importDefault(handleNotification[34]);
  const result4 = importDefault(handleNotification[34]).addNotificationEventListener("localNotification", handleLocalNotification);
  obj = {
    onStorageInitialize() {
      let closure_0 = true;
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
  const obj = callback2(tmp);
  const _trackFirstLaunched = obj;
  return obj(...arguments);
}
function loadStorage() {
  return _loadStorage(...arguments);
}
function _loadStorage() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  const _loadStorage = obj;
  return obj(...arguments);
}
function loadKvStorage() {
  importDefault(dependencyMap[38]).initialize();
  const resolved = Promise.resolve();
}
function initializeIntl() {
  return _initializeIntl(...arguments);
}
function _initializeIntl() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  const _initializeIntl = obj;
  return obj(...arguments);
}
function _init(_payload) {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  const _init = obj;
  return obj(...arguments);
}
function _initHeadlessTask() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  const _initHeadlessTask = obj;
  return obj(...arguments);
}
function initializeTokenStorage() {
  const Storage = arg1(dependencyMap[35]).Storage;
  if (null == Storage.get(closure_17)) {
    let obj = arg1(dependencyMap[23]);
    if (obj.isAndroid()) {
      let token = importDefault(dependencyMap[37]).getConstants().token;
      const obj2 = importDefault(dependencyMap[37]);
    } else {
      token = closure_10.DCDFastConnectManager.token;
    }
    if (null != token) {
      importDefaultResult.log("Applying token storage fix.");
      const Storage2 = arg1(dependencyMap[35]).Storage;
      const result = Storage2.set(closure_17, token);
    } else {
      importDefaultResult.log("Cannot apply token storage fix as token not in NSUserDefaults.");
    }
  } else {
    importDefaultResult.verbose("No need to apply token storage fix as token already exists.");
  }
  importAll(dependencyMap[62]).init();
  const obj3 = importAll(dependencyMap[62]);
  const obj4 = importAll(dependencyMap[62]);
  const Storage3 = arg1(dependencyMap[35]).Storage;
  obj = { storageHasToken: null != Storage3.get(closure_17), tokenManagerHasToken: null != importAll(dependencyMap[62]).getToken() };
  importDefaultResult.verbose("Token manager has initialized", obj);
  callback3();
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
arg1(dependencyMap[2]);
arg1(dependencyMap[3]);
({ AppState: closure_6, NativeEventEmitter: closure_7, Linking: closure_8, LogBox: closure_9, NativeModules: closure_10 } = arg1(dependencyMap[4]));
arg1(dependencyMap[5]);
let closure_11 = arg1(dependencyMap[6]).subscribeToIntlLoadingSuccess;
let closure_12 = importDefault(dependencyMap[7]);
let closure_13 = importDefault(dependencyMap[8]);
arg1(dependencyMap[9]);
arg1(dependencyMap[10]);
const tmp4 = arg1(dependencyMap[4]);
({ AppStates: closure_14, AnalyticEvents: closure_15, FIRST_RUN_DATE_KEY: closure_16, TOKEN_KEY: closure_17, STORAGE_SECURE_KEYS: closure_18, Platforms: closure_19 } = arg1(dependencyMap[11]));
const loadImports = importDefault(dependencyMap[12]).loadImports;
loadImports.recordEnd();
let importDefaultResult = importDefault(dependencyMap[13]);
importDefaultResult = new importDefaultResult("index.native.tsx");
let closure_21 = false;
let closure_22 = null;
const future = new arg1(dependencyMap[39]).Future();
const obj = { None: 0, [0]: "None", HeadlessRan: 1, [1]: "HeadlessRan", Full: 2, [2]: "Full" };
const None = obj.None;
const promise = new Promise((arg0) => {

});
const loadIndex = importDefault(dependencyMap[12]).loadIndex;
loadIndex.recordEnd();
const tmp8 = arg1(dependencyMap[11]);
const result = arg1(dependencyMap[72]).fileFinishedImporting("modules/app_startup/native/NativeAppStartup.tsx");

export const applicationReady = future;
export const init = function init() {
  return _init(...arguments);
};
export const initHeadlessTask = function initHeadlessTask() {
  return _initHeadlessTask(...arguments);
};
