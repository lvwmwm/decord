// Module ID: 18742
// Function ID: 18743
// Name: NativeAppStartup
// Dependencies: [32, 5, 18743, 18745, 17, 18768, 2069, 4906, 2001, 7602, 18769, 1087, 9, 3, 19491, 1384, 7633, 19492, 10, 19494, 19495, 12751, 504, 1274, 1259, 19496, 2005, 19497, 15831, 584, 19498, 7616, 1257, 19499, 19500, 10785, 510, 1267, 15475, 4898, 9685, 2080, 1167, 19501, 2002, 8852, 19503, 15672, 7778, 19521, 19522, 19523, 9749, 7629, 7617, 5184, 1207, 5004, 15722, 18465, 18466, 1113, 15472, 7601, 15726, 15740, 6846, 19524, 5329, 7603, 7617, 2]
// Exports: init, initHeadlessTask

// Module 18742 (NativeAppStartup)
import LoggerDefault from "Logger" /* 3 */;
import TTITrackerDefault from "TTITracker" /* 9 */;
import AppStartPerformanceDefault from "AppStartPerformance" /* 10 */;
import Storage4 from "Storage" /* 510 */;
import TokenManagerAll from "TokenManager" /* 1113 */;
import SentryUtilsDefault from "SentryUtils" /* 1257 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import IntlLoaderStore from "IntlLoaderStore" /* 2069 */;
import DatabaseManagerDefault from "DatabaseManager" /* 4898 */;
import Future from "Future" /* 9685 */;
import react_nativeDefault from "react-native" /* 15475 */;
import DeepLinkEventMapping from "DeepLinkEventMapping" /* 19494 */;
import DeepLinkProcessorDefault from "DeepLinkProcessor" /* 19495 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import module_18743 from "module_18743" /* 18743 */;
import superagentPatch from "superagentPatch" /* 18745 */;
import react_native from "react-native" /* 17 */;
import logThirdPartyImportsDone from "logThirdPartyImportsDone" /* 18768 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4906 */;
import AppStateStore from "AppStateStore" /* 2001 */;
import AnalyticsTrackingStore from "stores/AnalyticsTrackingStore" /* 7602 */;
import ManagerRegistry from "ManagerRegistry" /* 18769 */;
import Constants from "Constants" /* 1087 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let DeepLinkManager, HeadlessRan, InstallReferrer, _require, c1, c2, c5, c6, currentState, importDefault, paths;

let c10;
let c9;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp3;
const timeRequireDefault = tmp3(7633);
function handleLinkingEventURL(url, arg1) {
  let logger;
  let closure_1 = arg1;
  url = url.url;
  promise.then(() => {
    let deeplink;
    let isColdStart;
    logger.log("Handling URL: " + url);
    obj = AppStartPerformanceDefault;
    obj.mark("\u2757", "Handle URL " + url);
    let tmp9 = "appsflyer" !== url.source;
    const mapDeepLinkEvent = DeepLinkEventMapping.mapDeepLinkEvent;
    DeepLinkEventMapping;
    const tmp = url;
    if (tmp9) {
      tmp9 = linkFromAppsFlyer(tmp);
    }
    ({ deeplink, isColdStart } = mapDeepLinkEvent(url, closure_1, tmp9));
    mapDeepLinkEvent(url, closure_1, tmp9);
    timeRequireDefault("handleURL", () => closure_1_0(paths[17])).default(deeplink, isColdStart);
  });
}
function linkFromAppsFlyer(url) {
  try {
    const _URL = URL;
    const self = this;
    const self2 = this;
    const uRL = new URL(url);
    const searchParams = uRL.searchParams;
    return "true" === searchParams.get("fromAppsFlyer");
  } catch (tmp5) {
    obj = { url, error: tmp5 };
    closure_20.error("Failed to parse URL in linkFromAppsFlyer", obj);
    return false;
  }
}
function getInitialURLs() {
  return obj(...arguments);
}
let obj = function _getInitialURLs() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_1 = tmp4;
    value = [];
    DeepLinkManager = DeepLinkManager.DeepLinkManager;
    await DeepLinkManager.getInitialURL();
    if (1 === c2) {
      if (arg0 === 1) {
        let c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        closure_1 = value;
        if (null != closure_1) {
          if (null != closure_1.url) {
            if (closure_129_22(closure_1.url)) {
              let AppsFlyer;
              const isDeferred = closure_1.isDeferred;
              const DeeplinkSource = closure_129_0(closure_129_3[14]).DeeplinkSource;
              if (isDeferred) {
                AppsFlyer = DeeplinkSource.AppsFlyerDeferred;
              } else {
                AppsFlyer = DeeplinkSource.AppsFlyer;
              }
              const obj7 = { url: closure_1.url, source: AppsFlyer };
              value.push(obj7);
            } else {
              const obj8 = { url: closure_1.url, source: closure_129_0(closure_129_3[14]).DeeplinkSource.OS };
              const push = value.push;
              push(obj8);
            }
          }
        }
        const obj2 = closure_129_0(closure_129_3[15]);
        if (obj2.isAndroid()) {
          c3 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          c2 = 2;
          c3 = 1;
          const obj10 = { value: closure_129_8.getInitialURL(), done: false };
          return obj10;
        }
      }
    } else if (arg0 === 1) {
      c3 = 3;
      throw value;
    } else if (arg0 === 2) {
      c3 = 3;
      obj = { value, done: true };
      return obj;
    } else {
      const url = value;
      if (null != url) {
        const obj11 = { url, source: closure_129_0(closure_129_3[14]).DeeplinkSource.ReactNativeLinking };
        const push2 = value.push;
        push2(obj11);
      }
    }
    return value;
  });
  return obj(...arguments);
};
function sharedInit() {
  let _true;
  let closure_1;
  const f156488 = () => _true(handleNotification[33]);
  function handleNotification(arg0) {
    const tmp = c0;
    if (tmp) {
      timeRequireDefault("receiveNotification", f156488).default(arg0, false);
      TTITrackerDefault.extraProperties.tapped_notification = true;
    } else {
      closure_1.push(arg0);
    }
  }
  function handleLocalNotification(getData) {
    const tmp = c0;
    if (tmp) {
      const result = timeRequireDefault("LocalPushNotificationActionCreators", () => _true(handleNotification[34])).receiveLocalNotification(getData);
    } else {
      closure_2.push(getData);
    }
  }
  let tmp = importDefault;
  let tmp2 = handleNotification;
  obj = require("BundleUpdater");
  let result = obj.setupOTAAssetFallback();
  const Emitter = require("get initialized").Emitter;
  let tmp4 = _require;
  const result1 = Emitter.injectBatchEmitChanges(require("react-native").batchUpdates);
  const TelemetryRingLifecycle = require("TelemetryRingLifecycle").TelemetryRingLifecycle;
  TelemetryRingLifecycle.initialize();
  let obj2 = require("websocketTelemetryHook");
  const result2 = obj2.installWebsocketTelemetryHook((arg0) => {
    obj = closure_1(handleNotification[26]);
    obj.append(constants.WEBSOCKET_MESSAGE_RECEIVED, arg0);
  });
  let obj3 = require("PlatformUtils");
  if (obj3.isAndroid()) {
    const self = this;
    const self2 = this;
    const obj4 = new closure_7(closure_10.DeepLinkManager);
    obj4.addListener("nativeDeepLink", (url) => {
      closure_1_25.processNative(url.url, url.source, url.isDeferred, url.isColdStart);
    });
  } else {
    const listener = closure_8.addEventListener("url", (event) => {
      closure_1_25.process(event.url);
    });
  }
  closure_9.ignoreLogs(["Non-serializable values were found in the navigation state", "Overriding previous layout animation with new one before the first began", "Check the render method of `SceneView`", "Open debugger to view warnings."]);
  const tmpResult = tmp(tmp2[21]);
  const initialBundleDownloaded = tmpResult.getInitialBundleDownloaded();
  initialBundleDownloaded.then((versionRequired) => {
    const tmp = null != versionRequired && null != versionRequired.versionRequired;
    if (tmp) {
      const _HermesInternal = HermesInternal;
      closure_1_20.verbose("Get initial downloaded bundle " + versionRequired.versionRequired);
      obj = closure_1(handleNotification[27]);
      obj.prepareUpdate(versionRequired.versionRequired);
    }
  });
  const tmpResult6 = tmp(tmp2[21]);
  const listener1 = tmpResult6.addEventListener("downloaded", (event) => {
    const versionRequired = event.versionRequired;
    closure_1_20.verbose("Bundle Event: bundle downloaded for " + versionRequired);
    obj = closure_1(handleNotification[27]);
    obj.prepareUpdate(versionRequired);
  });
  const tmpResult7 = tmp(tmp2[21]);
  const initialOtaUpdateChecked = tmpResult7.getInitialOtaUpdateChecked();
  initialOtaUpdateChecked.then((metrics) => {
    metrics = metrics.metrics;
    closure_1_20.verbose("Initial OTA update check metrics", metrics);
    for (const item10010 of metrics) {
      obj = closure_1(handleNotification[21]);
      let emitOtaMetricResult = obj.emitOtaMetric(item10010);
      continue;
    }
  });
  const tmpResult8 = tmp(tmp2[21]);
  const listener2 = tmpResult8.addEventListener("otaUpdateChecked", (event) => {
    const metrics = event.metrics;
    closure_1_20.verbose("OTA update check metrics", metrics);
    for (const item10010 of metrics) {
      obj = closure_1(handleNotification[21]);
      let emitOtaMetricResult = obj.emitOtaMetric(item10010);
      continue;
    }
  });
  const obj9 = new closure_7(tmp(tmp2[28]));
  obj9.addListener("appWillEnterForeground", () => {
    obj = closure_1(handleNotification[29]);
    obj.dispatch({ type: "APP_STATE_UPDATE_WILL_BECOME_ACTIVE" });
  });
  if (AppStateStore.getState() !== currentState.currentState) {
    tmp(tmp2[16])("handleAppStateChange", () => _true(handleNotification[30])).default(obj10.currentState);
  } else {
    const tmp4Result = tmp4(tmp2[15]);
    if (!tmp4Result.isAndroid()) {
      const tmp20 = c21;
      if (!tmp20) {
        if (currentState.currentState === constants.ACTIVE) {
          c21 = true;
          tmp(tmp2[16])("trackAppOpened", () => _true(handleNotification[31])).trackAppOpened("launcher");
        }
      }
    }
  }
  const listener3 = obj10.addEventListener("change", (event) => {
    const appStateChangeStart = closure_1(handleNotification[12]).imports.appStateChangeStart;
    appStateChangeStart.record();
    obj = closure_1(handleNotification[18]);
    obj.resumeTracing();
    const obj2 = closure_1(handleNotification[32]);
    const obj3 = { message: "App state changed to " + event, category: "appState" };
    obj2.addBreadcrumb(obj3);
    closure_1(handleNotification[16])("handleAppStateChange", () => _true(handleNotification[30])).default(event);
    const appStateChangeEnd = closure_1(handleNotification[12]).imports.appStateChangeEnd;
    appStateChangeEnd.record();
  });
  if (null != closure_10.Hosts) {
    const Hosts = closure_10.Hosts;
    const _location = location;
    const _window = window;
    let _HermesInternal = HermesInternal;
    const setHosts = Hosts.setHosts;
    const _location2 = location;
    const _window2 = window;
    const _HermesInternal2 = HermesInternal;
    const combined = "" + location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
    setHosts(combined, "" + location.protocol + "//" + window.GLOBAL_ENV.CDN_HOST);
  }
  _require = false;
  importDefault = [];
  let closure_2 = [];
  const tmpResult9 = tmp(tmp2[35]);
  const result3 = tmpResult9.addNotificationEventListener("notification", (arg0) => {
    const state = AppStateStore.getState();
    closure_20.log("Push notification received, the app state is " + state);
    if (state !== constants.ACTIVE) {
      const tmp4 = c0;
      if (tmp4) {
        timeRequireDefault("receiveNotification", f156488).default(arg0, false);
        TTITrackerDefault.extraProperties.tapped_notification = true;
      } else {
        closure_1.push(arg0);
      }
    }
  });
  const tmpResult10 = tmp(tmp2[35]);
  const result4 = tmpResult10.addNotificationEventListener("localNotification", handleLocalNotification);
  return {
    onStorageInitialize() {
      let c0 = true;
      const item = closure_1.forEach(handleNotification);
      const item1 = closure_2.forEach(handleLocalNotification);
      closure_1.length = 0;
      closure_2.length = 0;
    }
  };
}
obj = function _trackFirstLaunched() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let IOS;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let track;
        let APP_FIRST_LAUNCHED;
        let obj5;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            const Storage2 = require("Storage").Storage;
            if (Storage2.get(constants.APP_FIRST_LAUNCHED, true)) {
              const tmp17 = AnalyticsUtilsDefault;
              let closure_3 = tmp17;
              track = tmp17.track;
              APP_FIRST_LAUNCHED = constants.APP_FIRST_LAUNCHED;
              obj5 = { platform: IOS };
              const obj3 = require("PlatformUtils");
              if (obj3.isAndroid()) {
                IOS = tmp21.ANDROID;
              } else {
                IOS = tmp21.IOS;
              }
              InstallReferrer = InstallReferrer.InstallReferrer;
              value = undefined;
              if (InstallReferrer != null) {
                value = InstallReferrer.get();
              }
              c5 = 1;
              c6 = 1;
              const obj6 = { value, done: false };
              return obj6;
            }
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          obj5.referrer = value;
          track(APP_FIRST_LAUNCHED, obj5);
          const Storage = closure_130_0(closure_130_3[36]).Storage;
          const result = Storage.set(closure_130_15.APP_FIRST_LAUNCHED, false);
        }
        c6 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp25) {
        c6 = 3;
        throw tmp25;
      }
    }
  });
  return obj(...arguments);
};
function loadStorage() {
  return obj(...arguments);
}
obj = function _loadStorage() {
  obj = _asyncToGenerator(async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let closure_1;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp;
            let closure_0;
            c3 = 1;
            const loadStorage2 = TTITrackerDefault.loadStorage;
            loadStorage2.recordStart();
            let Storage = require("Storage").Storage;
            c4 = 2;
            c5 = 1;
            const obj4 = { value: Storage.refresh([], authStore4), done: false };
            return obj4;
          }
        } else {
          if (1 === c4) {
            c3 = 0;
            closure_1 = closure_2;
            closure_129_20.error("Unable to load Storage", closure_1);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = value;
            loadStorage = closure_129_1(closure_129_3[12]).loadStorage;
            loadStorage.recordEnd();
            const parseStorage = closure_129_1(closure_129_3[12]).parseStorage;
            parseStorage.measureAsync(async () => {
              const Storage = closure_0(c3[36]).Storage;
              return Storage.parse(closure_1_0);
            });
            c3 = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp20) {
        closure_2 = tmp20;
        if (0 === c3) {
          c5 = 3;
          throw tmp20;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function loadKvStorage() {
  try {
    obj = DatabaseManagerDefault;
    obj.initialize();
  } catch (tmp4) {
    closure_20.warn("DatabaseManager.initialize errored.", tmp4);
    const obj2 = SentryUtilsDefault;
    obj2.captureException(tmp4);
  }
  return Promise.resolve();
}
function initializeIntl() {
  return obj(...arguments);
}
obj = function _initializeIntl() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_1;
    let log = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (async (arg0, value) => {
      let obj5;
      let obj8;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp4;
              log = undefined;
              log = log.log;
              tmp = undefined;
              c3 = 1;
              c4 = 1;
              return { value: "Reflect", done: true };
            }
          } else if (1 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              c3 = 2;
              c4 = 1;
              const obj7 = { value: obj8.preloadAllIntlMessageFiles(), done: false };
              obj8 = closure_130_0(closure_130_3[41]);
              return obj7;
            }
          } else if (2 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              c3 = 3;
              c4 = 1;
              const obj10 = { value: obj5.waitForAllDefaultIntlMessagesLoaded(), done: false };
              obj5 = closure_130_0(closure_130_3[42]);
              return obj10;
            }
          } else if (3 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              const tmp33 = log;
              if (tmp33) {
                const obj2 = closure_130_1(closure_130_3[18]);
                obj2.markAndLog(closure_130_20, "\u{1F30E}", "i18n loaded");
              }
              c3 = 4;
              c4 = 1;
              const obj12 = { value: closure_130_0(closure_130_3[44])(closure_130_3[43], closure_130_3.paths), done: false };
              return obj12;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            tmp = value.default;
            tmp();
            closure_130_11(() => closure_1_1());
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp28) {
          c4 = 3;
          throw tmp28;
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
obj = function _init() {
  let Full;
  obj = _asyncToGenerator(async (arg0, value) => {
    function initializeApp() {
      return closure_1_39(...arguments);
    }
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        c4 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_0 = tmp;
            if (None !== Full.Full) {
              c3 = 1;
              c1 = 2;
              c4 = 1;
              const obj5 = { value: initializeApp(), done: false };
              return obj5;
            } else {
              const obj2 = SentryUtilsDefault;
              obj2.addBreadcrumb({ message: "Init called when already initialized" });
            }
          }
        } else if (1 === tmp4) {
          c3 = 0;
          closure_128_25.finishInitialUrls();
          throw closure_2;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_25.finishInitialUrls();
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c3 = 0;
          closure_128_25.finishInitialUrls();
        }
        c4 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp19) {
        closure_2 = tmp19;
        if (0 === c3) {
          c4 = 3;
          throw tmp19;
        } else {
          c1 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _initializeApp() {
  obj = _asyncToGenerator(async function(arg0, value) {
    function trackFirstLaunched() {
      return closure_1_27(...arguments);
    }
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let closure_2;
        let closure_4;
        let closure_5;
        let resolved;
        let closure_8;
        let closure_9;
        let channelId;
        let promise2;
        let closure_13;
        let closure_14;
        let closure_15;
        let closure_16;
        let closure_17;
        let totalMentionCount;
        let closure_19;
        let closure_0;
        let onStorageInitialize;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp2;
            closure_2 = undefined;
            paths = undefined;
            closure_4 = undefined;
            closure_5 = undefined;
            currentState = undefined;
            resolved = undefined;
            closure_8 = undefined;
            closure_9 = undefined;
            channelId = undefined;
            promise = undefined;
            promise2 = undefined;
            closure_13 = undefined;
            closure_14 = undefined;
            closure_15 = undefined;
            closure_16 = undefined;
            closure_17 = undefined;
            totalMentionCount = undefined;
            closure_19 = undefined;
            closure_0 = tmp227;
            Full = closure_2_33.Full;
            onStorageInitialize = undefined;
            if (Full !== closure_2_33.HeadlessRan) {
              onStorageInitialize = sharedInit().onStorageInitialize;
            }
            const obj13 = require("PlatformUtils");
            const isAndroidResult = obj13.isAndroid();
            const obj14 = require("DeviceOrientation");
            if (isAndroidResult) {
              obj14.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
            } else {
              let result = obj14.lockOrientationForiOS();
            }
            require("TTITracker").didBackgroundApp = currentState.currentState === constants.BACKGROUND;
            const loadStorageStart = require("TTITracker").imports.loadStorageStart;
            loadStorageStart.record();
            const all2 = Promise.all;
            const items = [getInitialURLs(), , , , ];
            const obj15 = require("PushNotification");
            const initialNotification = obj15.getInitialNotification();
            items[1] = initialNotification.catch(() => null);
            items[2] = loadStorage();
            items[3] = loadKvStorage();
            const promise3 = require("asyncRequire")(paths[46], paths.paths);
            items[4] = promise3.then((result) => result.default());
            c2 = 1;
            c3 = 1;
            const obj8 = { value: all2(items), done: false };
            return obj8;
          }
        } else {
          if (1 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else {
              closure_2 = value;
              paths = closure_129_4(closure_2, 2);
              closure_4 = paths[0];
              closure_5 = paths[1];
              const loadStorageEnd = closure_129_1(closure_129_3[12]).imports.loadStorageEnd;
              loadStorageEnd.record();
              const obj19 = closure_129_0(closure_129_3[15]);
              if (obj19.isAndroid()) {
                if (closure_129_0(closure_129_3[47]).isTTITest) {
                  currentState = closure_129_0(closure_129_3[48]).default;
                  c2 = 2;
                  c3 = 1;
                  const obj11 = { value: currentState.yieldConfig(), done: false };
                  return obj11;
                }
              }
            }
          } else if (2 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj12 = { value, done: true };
              return obj12;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj16 = { value, done: true };
            return obj16;
          } else {
            closure_14 = value;
            closure_15 = closure_129_4(closure_14, 5);
            const first = closure_15[0];
            closure_16 = closure_15[1].default;
            closure_17 = closure_15[2].default;
            totalMentionCount = closure_15[3].default;
            closure_19 = closure_15[4];
            const result1 = closure_16.registerNotificationCategories();
            closure_16.registerListener();
            const server = closure_17.loadServer();
            totalMentionCount.addChangeListener(() => {
              obj = closure_1(paths[35]);
              const result = obj.setApplicationIconBadgeNumber(totalMentionCount.getTotalMentionCount());
            });
            const tmp213 = closure_0;
            if (!tmp213) {
              closure_19.init();
            }
            closure_129_0(closure_129_3[68]);
            obj = closure_129_0(closure_129_3[69]);
            const sessionHeartbeatScheduler = obj.initSessionHeartbeatScheduler();
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
          const tmp20 = closure_0;
          if (tmp20) {
            resolved = Promise.resolve();
          } else {
            resolved = closure_129_35({ log: true });
          }
          const obj4 = closure_129_1(closure_129_3[18]);
          obj4.markAndLog(closure_129_20, "\u{1F3C3}", "The initial promise has resolved");
          const tmp33 = null != closure_4 && closure_4.length > 0;
          if (tmp33) {
            closure_129_20.log("initialURLs", closure_4);
          }
          if (null != closure_5) {
            closure_129_20.log("initialNotification", closure_5);
          }
          const Storage = closure_129_0(closure_129_3[36]).Storage;
          if (null == Storage.get(closure_129_16)) {
            const Storage2 = closure_129_0(closure_129_3[36]).Storage;
            const _Date = Date;
            const result2 = Storage2.set(closure_129_16, Date.now());
          }
          trackFirstLaunched();
          const tmp60 = closure_0;
          if (!tmp60) {
            closure_129_41();
            if (onStorageInitialize != null) {
              onStorageInitialize();
            }
          }
          closure_129_1(closure_129_3[16])("DispatcherBridge", () => {
            closure_1_0(paths[49]);
          });
          const tmp71 = closure_0;
          if (tmp71) {
            const obj6 = closure_129_1(closure_129_3[18]);
            obj6.markAndLog(closure_129_20, "\u{1F3C3}", "Flux already initialized.");
          } else {
            const obj5 = closure_129_1(closure_129_3[18]);
            obj5.time("\u{1F3C3}", "Flux.initialize()", () => {
              obj = closure_1_1(paths[22]);
              obj.initialize();
              closure_1_20.verbose("Flux has initialized");
            });
          }
          closure_129_1(closure_129_3[50])();
          const obj7 = closure_129_0(closure_129_3[51]);
          const result3 = obj7.setupLibdiscoreTimersMonitor();
          const item = closure_4.forEach((item) => {
            closure_1_1(paths[16])("handleURL", () => closure_1_0(paths[17])).default(item, true);
          });
          closure_129_25.finishInitialUrls();
          closure_8 = false;
          if (null != closure_5) {
            closure_9 = closure_129_1(closure_129_3[16])("receiveNotification", () => closure_1_0(paths[33])).default;
            closure_129_1(closure_129_3[12]).extraProperties.tapped_notification = true;
            closure_8 = closure_9(closure_5, true);
          }
          const tmp104 = closure_8;
          if (!tmp104) {
            channelId = closure_129_12.getChannelId();
            if (null != channelId) {
              const obj17 = { channelId, isPreload: true, skipLocalFetch: true, fetchKey: closure_129_0(closure_129_3[53]).INITIAL_MESSAGE_FETCH_KEY };
              const fetchMessages = closure_129_1(closure_129_3[52]).fetchMessages;
              const tmp112 = closure_129_1(closure_129_3[52]);
              const messages = fetchMessages(obj17);
            }
          }
          const loadMiniCacheStart = closure_129_1(closure_129_3[12]).imports.loadMiniCacheStart;
          loadMiniCacheStart.record();
          const self = this;
          const self2 = this;
          promise = new Promise((arg0) => {
            closure_0 = arg0;
            promise = closure_0(paths[44])(paths[54], paths.paths);
            promise.then((result) => {
              let _default = result.default;
              obj = closure_2_0(paths[55]);
              return _default.loadCacheAsync(closure_2_4(obj.computeInitialNavigationState(), 1)[0], async () => {
                const _default = closure_0(paths[56]).default;
                const _default2 = closure_0(paths[57]).default;
                obj = closure_0(paths[58]);
                obj.updateSaturation(_default2.saturation);
                const obj2 = closure_0(paths[59]);
                obj2.updateVisualRefresh(true);
                const obj3 = closure_0(paths[60]);
                obj3.updateTheme(_default.theme);
                closure_1_0();
              });
            });
          });
          promise2 = null;
          const obj9 = closure_129_2(closure_129_3[61]);
          if (null != obj9.getToken()) {
            promise2 = Promise.resolve();
          } else {
            closure_13 = closure_129_0(closure_129_3[62]);
            const result4 = closure_13.beginLoadedExperimentsTimeout();
            promise2 = closure_13.getPromise();
          }
          const items1 = [promise, promise2];
          const allPromises = Promise.all(items1);
          const nextPromise = allPromises.then(() => {
            closure_1_32.resolve();
          });
          const items2 = [closure_129_0(closure_129_3[44])(closure_129_3[63], closure_129_3.paths), closure_129_0(closure_129_3[44])(closure_129_3[64], closure_129_3.paths), closure_129_0(closure_129_3[44])(closure_129_3[65], closure_129_3.paths), closure_129_0(closure_129_3[44])(closure_129_3[66], closure_129_3.paths), closure_129_0(closure_129_3[44])(closure_129_3[67], closure_129_3.paths), resolved];
          c2 = 3;
          c3 = 1;
          const obj18 = { value: all(items2), done: false };
          return obj18;
        }
      } catch (tmp191) {
        c3 = 3;
        throw tmp191;
      }
    }
  });
  return obj(...arguments);
};
obj = function _initHeadlessTask() {
  obj = _asyncToGenerator(async (arg0, value) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj = { value, done: true };
        return obj;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let onStorageInitialize;
        let closure_1;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            let closure_0 = tmp;
            onStorageInitialize = undefined;
            closure_1 = undefined;
            if (HeadlessRan === closure_2_33.None) {
              HeadlessRan = closure_2_33.HeadlessRan;
              onStorageInitialize = sharedInit().onStorageInitialize;
              const items = [loadStorage(), loadKvStorage(), initializeIntl({ log: false })];
              c2 = 1;
              c3 = 1;
              const obj3 = { value: all(items), done: false };
              return obj3;
            }
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_129_41();
            onStorageInitialize();
            closure_129_0(closure_129_3[70]);
            closure_129_0(closure_129_3[49]);
            const obj8 = closure_129_1(closure_129_3[22]);
            obj8.initialize();
            promise = closure_129_0(closure_129_3[44])(closure_129_3[54], closure_129_3.paths);
            promise.then((result) => {
              const _default = result.default;
              const cacheAsync = _default.loadCacheAsync({ page: "other" }, async () => {
                closure_1_32.resolve();
              });
            });
            const all2 = Promise.all;
            const items1 = [closure_129_0(closure_129_3[44])(closure_129_3[67], closure_129_3.paths)];
            c2 = 2;
            c3 = 1;
            const obj5 = { value: all2(items1), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_1 = value;
          const first = closure_129_4(closure_1, 1)[0];
          first.init();
          closure_129_1(closure_129_3[50])();
        }
        c3 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp19) {
        c3 = 3;
        throw tmp19;
      }
    }
  });
  return obj(...arguments);
};
function initializeTokenStorage() {
  const Storage = Storage4.Storage;
  if (null == Storage.get(closure_17)) {
    const obj2 = react_nativeDefault;
    const token = obj2.getConstants().token;
    if (null != token) {
      closure_20.log("Applying token storage fix.");
      const Storage2 = tmp(510).Storage;
      const result = Storage2.set(tmp3, token);
      obj = closure_20;
    } else {
      closure_20.log("Cannot apply token storage fix as token not in NSUserDefaults.");
      obj = closure_20;
    }
  } else {
    obj = closure_20;
    closure_20.verbose("No need to apply token storage fix as token already exists.");
  }
  const obj3 = TokenManagerAll;
  obj3.init();
  const obj4 = TokenManagerAll;
  const tmp12 = null != obj4.getToken();
  const Storage3 = tmp(510).Storage;
  const obj5 = { storageHasToken: null != Storage3.get(closure_17), tokenManagerHasToken: tmp12 };
  obj.verbose("Token manager has initialized", obj5);
  __initData();
}
({ AppState: metroRequire, NativeEventEmitter: metroImportDefault, Linking: metroImportAll, LogBox: c9, NativeModules: c10 } = react_native);
let closure_11 = IntlLoaderStore.subscribeToIntlLoadingSuccess;
({ AppStates: closure_14, AnalyticEvents: closure_15, FIRST_RUN_DATE_KEY: closure_16, TOKEN_KEY: closure_17, STORAGE_SECURE_KEYS: closure_18, Platforms: closure_19 } = Constants);
const loadImports = TTITrackerDefault.loadImports;
loadImports.recordEnd();
let closure_20 = new LoggerDefault("index.native.tsx");
let c21 = false;
const tmp10 = new LoggerDefault("index.native.tsx");
let closure_25 = new DeepLinkProcessorDefault(handleLinkingEventURL);
const tmp11 = new DeepLinkProcessorDefault(handleLinkingEventURL);
const future = new Future.Future();
obj = { None: 0, [0]: "None", HeadlessRan: 1, [1]: "HeadlessRan", Full: 2, [2]: "Full" };
const None = obj.None;
let promise = new Promise((arg0) => {
  let closure_1_31 = arg0;
});
const loadIndex = TTITrackerDefault.loadIndex;
loadIndex.recordEnd();
let result = size.fileFinishedImporting("modules/app_startup/native/NativeAppStartup.tsx");

export const applicationReady = future;
export const init = function init() {
  return obj(...arguments);
};
export const initHeadlessTask = function initHeadlessTask() {
  return obj(...arguments);
};
