// Module ID: 8207
// Function ID: 8208
// Name: TTIAnalyticsUtils
// Dependencies: [32, 5, 8208, 5629, 1191, 502, 4861, 1360, 1071, 8291, 4868, 21, 4969, 5939, 1268, 1377, 3, 5189, 5188, 5195, 10, 1241, 1255, 8292, 8294, 9, 1088, 8295, 1372, 1378, 8296, 8297, 6016, 6087, 2119, 2]
// Exports: currentLoadId, getLastTrackedAppUiViewed2Properties, trackAppLaunchCompleted, trackAppOpened, trackAppUIViewed

// Module 8207 (TTIAnalyticsUtils)
import LoggerDefault from "Logger" /* 3 */;
import AppStartPerformanceDefault from "AppStartPerformance" /* 10 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1071 */;
import SentryUtilsDefault from "SentryUtils" /* 1241 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import ChannelConstants from "ChannelConstants" /* 4868 */;
import DeviceUtils from "DeviceUtils" /* 4969 */;
import RootNavigationRef from "RootNavigationRef" /* 5189 */;
import react_nativeDefault from "react-native" /* 5195 */;
import getMediaPerformanceClassDefault from "getMediaPerformanceClass" /* 5939 */;
import AcceptInviteConstants from "AcceptInviteConstants" /* 8291 */;
import AppStartInfo2 from "AppStartInfo" /* 8292 */;
import DidBackgroundAppNativeExperimentDefault from "DidBackgroundAppNativeExperiment" /* 8295 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import CacheStore from "CacheStore" /* 8208 */;
import ExperimentStore from "ExperimentStore" /* 5629 */;
import ThemeStore from "ThemeStore" /* 1191 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4861 */;
import DeveloperOptionsStore from "DeveloperOptionsStore" /* 1360 */;
import v1 from "v1" /* 1268 */;
import react_native from "react-native" /* 1377 */;
import size from "module_2" /* 2 */;

let c6, c7, c8;

let tmp;
const NavigationRouteUtils = tmp(5188);
function getDeviceMetadata() {
  let obj2;
  let obj3;
  let obj4;
  let obj5;
  let obj6;
  let obj7;
  let obj8;
  let obj9;
  if (null == obj) {
    obj = { device_model: obj2.getDeviceModel(), device_brand: obj3.getDeviceBrand(), device_product: obj4.getDeviceProduct(), device_manufacturer: obj5.getDeviceManufacturer(), smallest_screen_width_dp: obj6.getSmallestScreenWidthDp(), device_performance_class: getMediaPerformanceClassDefault(), soc_name: obj7.getSocName(), ram_size: obj8.getRamSize(), max_cpu_freq: obj9.getMaxCpuFreq() };
    obj2 = DeviceUtils;
    obj3 = DeviceUtils;
    obj4 = DeviceUtils;
    obj5 = DeviceUtils;
    obj6 = DeviceUtils;
    obj7 = DeviceUtils;
    obj8 = DeviceUtils;
    obj9 = DeviceUtils;
  }
  return obj;
}
function getRedesignScreenName() {
  let name;
  let params;
  obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  let currentRoute;
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      currentRoute = rootNavigationRef.getCurrentRoute();
    }
  }
  if (null == currentRoute) {
    return null;
  } else {
    const tmpResult = NavigationRouteUtils;
    if (tmpResult.isModalOpen(ACCEPT_INVITE_MODAL_KEY)) {
      return "invite";
    } else {
      let channelId;
      ({ name, params } = currentRoute);
      if (params != null) {
        channelId = params.channelId;
      }
      if ("channel" === name) {
        if (null != channelId) {
          if (StaticChannelRoutes.has(channelId)) {
            return channelId;
          } else {
            const channel = ChannelStore.getChannel(channelId);
            let str3 = "unknown-channel";
            if (null != channel) {
              let str4 = "thread";
              if (!channel.isThread()) {
                let str5 = "private_channel";
                if (!channel.isPrivate()) {
                  let str6 = "guild-voice";
                  if (!channel.isGuildVocal()) {
                    let str7 = "guild-forum";
                    if (!channel.isForumLikeChannel()) {
                      let str8 = "guild-text";
                      if (channel.isDirectory()) {
                        str8 = "guild-directory";
                      }
                      str7 = str8;
                    }
                    str6 = str7;
                  }
                  str5 = str6;
                }
                str4 = str5;
              }
              str3 = str4;
            }
            return str3;
          }
        }
      }
      const _HermesInternal = HermesInternal;
      return "redesign-" + name;
    }
  }
}
function consumeAppOpenBadgeState() {
  return obj(...arguments);
}
let obj = function _consumeAppOpenBadgeState() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj3;
    let tmp;
    function logBadgeStateFailure(arg0) {
      const tmp = c21;
      if (!tmp) {
        c21 = true;
        logger.warn("Failed to read app-open badge state", arg0);
      }
    }
    if (c4 === 2) {
      c4 = 3;
      const str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
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
            c3 = 1;
            c1 = 2;
            c4 = 1;
            const obj5 = { value: obj3.consumeAppOpenBadgeState(), done: false };
            obj3 = react_nativeDefault;
            return obj5;
          }
        } else if (1 === tmp4) {
          c3 = 0;
          logBadgeStateFailure(closure_2);
          c4 = 3;
          return { value: null, done: true };
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c3 = 0;
          c4 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp11) {
        closure_2 = tmp11;
        if (0 === c3) {
          c4 = 3;
          throw tmp11;
        } else {
          c1 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function getLastBackgroundedAt() {
  return obj(...arguments);
}
obj = function _getLastBackgroundedAt() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj3;
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
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      let c3;
      try {
        let closure_0;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_1 = tmp;
            closure_0 = tmp4;
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj5 = { value: obj3.getLastBackgroundedAt(), done: false };
            obj3 = react_nativeDefault;
            return obj5;
          }
        } else if (1 === c4) {
          c3 = 0;
          closure_0 = closure_2;
          const tmp9 = c22;
          if (!tmp9) {
            c22 = true;
            logger.warn("Failed to read last backgrounded time", closure_0);
          }
          c5 = 3;
          return { value: null, done: true };
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c3 = 0;
          c5 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp15) {
        closure_2 = tmp15;
        if (0 === c3) {
          c5 = 3;
          throw tmp15;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function sharedProperties(screen_name, has_cached_data, arg2) {
  let tmp;
  obj = { load_id, duration_ms_since_app_opened: Date.now() - arg2, screen_name, has_cached_data, manifest: tmp };
  tmp = null;
  if (Manifest.length > 0) {
    tmp = Manifest;
  }
  return obj;
}
obj = function _trackAppUIViewedAsync() {
  obj = _asyncToGenerator(async (arg0, value, arg2) => {
    let closure_0;
    let closure_1;
    let closure_2;
    let obj10;
    function scheduleTrackAppUiViewed2() {
      let timeout;
      if (null == timeout) {
        let tmp = globalThis;
        let _setTimeout = setTimeout;
        timeout = setTimeout(() => {
          obj = closure_1_1(closure_1_2[25]);
          obj.setTTICallback(() => true);
          closure_1_35();
          c33 = null;
        }, 15 * closure_1_1(closure_1_2[26]).Millis.SECOND);
        obj = closure_1_1(closure_1_2[25]);
        obj.setTTICallback(() => {
          const tmp = closure_1_25();
          let flag = false;
          if (null != tmp) {
            if (!set2.has(tmp)) {
              flag = true;
              if (set.has(tmp)) {
                const readySupplemental2 = closure_1_1(closure_1_2[25]).readySupplemental;
                let hasDataResult = readySupplemental2.hasData();
                if (hasDataResult) {
                  const firstContentfulPaint = tmp6(tmp7[25]).firstContentfulPaint;
                  let hasDataResult1 = firstContentfulPaint.hasData();
                  if (!hasDataResult1) {
                    const renderLatestMessages = tmp6(tmp7[25]).renderLatestMessages;
                    hasDataResult1 = renderLatestMessages.hasData() || null != closure_1_1(closure_1_2[25]).interstitial;
                    renderLatestMessages.hasData() || null != closure_1_1(closure_1_2[25]).interstitial;
                  }
                  hasDataResult = hasDataResult1;
                }
                flag = hasDataResult;
              }
            } else {
              const readySupplemental = closure_1_1(closure_1_2[25]).readySupplemental;
              flag = false;
            }
          }
          let flag2 = flag;
          if (flag2) {
            const _clearTimeout = clearTimeout;
            clearTimeout(c33);
            const _setTimeout = setTimeout;
            const timerId = setTimeout(() => {
              closure_1_35();
              c33 = null;
            }, 1000);
            flag2 = true;
          }
          return flag2;
        });
      }
    }
    if (c6 === 2) {
      c6 = 3;
      let str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else {
      const tmp6 = value;
      const tmp7 = arg0;
      if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          let closure_4;
          let closure_5;
          let closure_3;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let c4 = 0;
              closure_4 = undefined;
              closure_5 = undefined;
              const _Date = Date;
              closure_3 = Date.now();
              c5 = 1;
              c6 = 1;
              const obj4 = { value: obj10.getAppFirstVisibleTimestamp(), done: false };
              obj10 = react_nativeDefault;
              return obj4;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_4 = value;
            closure_5 = closure_3 - closure_4;
            const obj5 = closure_132_1(closure_132_2[19]);
            obj5.reportFullyDrawn();
            const obj6 = closure_132_1(closure_132_2[20]);
            obj6.mark("\u2757", "Track app_ui_viewed");
            const obj7 = closure_132_1(closure_132_2[20]);
            obj7.addDetail("TTI", closure_5);
            const obj8 = closure_132_1(closure_132_2[20]);
            obj8.markAt("\u{1F3C3}", "app_opened", closure_4);
            const obj9 = closure_132_0(closure_132_2[24]);
            obj9.ttiRecorded(closure_5);
            let _setTimeout = setTimeout;
            let timerId = setTimeout(() => {
              function logLegacyAppUiViewed() {
                return closure_1_32(...arguments);
              }
              let str = closure_1_0;
              if (closure_1_0 == null) {
                str = "unknownn";
              }
              !logLegacyAppUiViewed(str, closure_1_1, closure_1_2, closure_1_3, closure_1_4);
            }, 1000);
            scheduleTrackAppUiViewed2();
            c6 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp5) {
          c6 = 3;
          throw tmp5;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _logLegacyAppUiViewed() {
  obj = _asyncToGenerator(async (arg0, value, arg2, arg3, arg4) => {
    let obj9;
    let closure_0 = arg0;
    let closure_1 = value;
    let closure_2 = arg2;
    let closure_3 = arg3;
    let closure_4 = arg4;
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        let JSBundleLoadedTimestamp;
        let JSBundleParsedTimestamp;
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_6 = tmp;
            let closure_5 = tmp2;
            closure_0 = closure_1;
            closure_1 = closure_3;
            closure_2 = undefined;
            closure_3 = undefined;
            JSBundleLoadedTimestamp = undefined;
            JSBundleParsedTimestamp = undefined;
            closure_2 = sharedProperties(closure_0, closure_2, closure_4);
            c7 = 1;
            c8 = 1;
            const obj4 = { value: obj9.getJSBundleTimestamps(), done: false };
            obj9 = react_nativeDefault;
            return obj4;
          }
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = value;
          JSBundleLoadedTimestamp = closure_3.JSBundleLoadedTimestamp;
          JSBundleParsedTimestamp = closure_3.JSBundleParsedTimestamp;
          const obj5 = closure_134_1(closure_134_2[20]);
          obj5.markAt("\u{1F3C3}", "JS Bundle Loaded", JSBundleLoadedTimestamp);
          const obj6 = closure_134_1(closure_134_2[20]);
          obj6.mark("\u{1F3C3}", "app_ui_viewed logged");
          const obj7 = closure_134_1(closure_134_2[20]);
          obj7.addDetail("Since Bundle Parsed", +closure_1 - JSBundleParsedTimestamp);
          const _Date = Date;
          const tmp28 = closure_134_1(closure_134_2[20]);
          tmp28.endTime = Date.now() + 20000;
          const obj8 = { duration_ms_since_required_js_bundle_loaded: closure_1 - JSBundleLoadedTimestamp, duration_ms_since_required_js_bundle_parsed: closure_1 - JSBundleParsedTimestamp, theme: closure_134_7.theme };
          const track = closure_134_1(closure_134_2[22]).track;
          const APP_UI_VIEWED = closure_134_11.APP_UI_VIEWED;
          const tmp32 = closure_134_1(closure_134_2[22]);
          const merged = Object.assign(closure_2);
          const merged1 = Object.assign(closure_134_16());
          const merged2 = Object.assign(closure_0);
          track(APP_UI_VIEWED, obj8, { logEventProperties: true });
          c8 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp6) {
        c8 = 3;
        throw tmp6;
      }
    }
  });
  return obj(...arguments);
};
function trackAppUIViewed2() {
  return obj(...arguments);
}
obj = function _trackAppUIViewed() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_2;
    let closure_3;
    let didBackgroundApp;
    let obj12;
    let result;
    let tmp2;
    function logToDevice(json) {
      obj = { logged_at: Date.now(), user_id: id.getId() };
      let merged = Object.assign(json);
      const timestamp = Date.now();
      const arr = closure_37(obj);
      const item = arr.forEach((item) => {
        obj = { type: "app_ui_viewed", batch_id };
        const merged = Object.assign(item);
        const json = stringify(obj);
        const obj2 = closure_2_1(paths[19]);
        obj2.logToDevice(json);
      });
      const batch_id = timestamp + 1;
      const arr2 = closure_37(allExperimentAssignments.getAllExperimentAssignments());
      const item1 = arr2.forEach((item) => {
        obj = { batch_id, type: "experiments" };
        const merged = Object.assign(item);
        const json = stringify(obj);
        const obj2 = closure_2_1(paths[19]);
        obj2.logToDevice(json);
      });
      json = JSON.stringify({ type: "finished" });
      let obj2 = closure_1(paths[19]);
      obj2.logToDevice(json);
      const obj3 = closure_1(paths[19]);
      obj3.trackTTILogged();
    }
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        let screen_name;
        let closure_1;
        let paths;
        let tmp;
        let appFirstVisibleTime;
        let extraProperties;
        let closure_7;
        let id;
        let startup_cpu_usage_cumulative;
        let closure_10;
        let obj18;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            let closure_4 = tmp2;
            screen_name = undefined;
            closure_1 = undefined;
            paths = undefined;
            tmp = undefined;
            let appCreatedTime;
            appFirstVisibleTime = undefined;
            extraProperties = undefined;
            closure_7 = undefined;
            id = undefined;
            startup_cpu_usage_cumulative = undefined;
            closure_10 = undefined;
            obj18 = undefined;
            const tmp111 = getRedesignScreenName();
            let unknown_str = tmp111;
            if (tmp111 == null) {
              unknown_str = "unknown";
            }
            screen_name = unknown_str;
            const obj17 = DidBackgroundAppNativeExperimentDefault;
            const useNative = obj17.getConfig({ location: "app_ui_viewed2" }).useNative;
            const AppStartInfo = AppStartInfo2.AppStartInfo;
            const items = [AppStartInfo.getAppStartInfo(), consumeAppOpenBadgeState(), ];
            let tmp87 = null;
            if (useNative) {
              tmp87 = getLastBackgroundedAt();
            }
            items[2] = tmp87;
            c5 = 1;
            c6 = 1;
            const obj13 = { value: all(items), done: false };
            return obj13;
          }
        } else if (1 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj14 = { value, done: true };
            return obj14;
          } else {
            closure_1 = value;
            paths = closure_132_3(closure_1, 3);
            tmp = paths[0];
            appCreatedTime = tmp.appCreatedTime;
            appFirstVisibleTime = tmp.appFirstVisibleTime;
            extraProperties = tmp.extraProperties;
            closure_7 = paths[1];
            id = paths[2];
            const obj22 = closure_132_1(closure_132_2[19]);
            const allNativeTimestamps = obj22.getAllNativeTimestamps();
            c5 = 2;
            c6 = 1;
            const obj15 = {
              value: allNativeTimestamps.then((nativeLogs) => {
                        c1(paths[20]).logGroups[0].nativeLogs = nativeLogs;
                        obj = c1(paths[25]);
                        obj.processNativeLogs(nativeLogs, closure_1_4);
                      }),
              done: false
            };
            return obj15;
          }
        } else if (2 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj16 = { value, done: true };
            return obj16;
          } else {
            const obj21 = closure_132_1(closure_132_2[28]);
            const cumulativeCPUUsage = obj21.getCumulativeCPUUsage();
            let usage;
            if (cumulativeCPUUsage != null) {
              usage = cumulativeCPUUsage.usage;
            }
            let c1 = usage;
            if (usage == null) {
              c1 = null;
            }
            startup_cpu_usage_cumulative = c1;
            let tmp13 = null != id;
            if (tmp13) {
              let obj2 = closure_132_1(closure_132_2[25]);
              tmp13 = id > obj2.getStartTime(appFirstVisibleTime);
            }
            closure_10 = tmp13;
            obj18 = { did_background_app: didBackgroundApp, load_id, screen_name, has_cached_data: closure_132_5.hasCache(), startup_cpu_usage_cumulative, theme: theme.theme, ios_using_anchored_scroller: result };
            let merged = Object.assign(closure_132_16());
            paths = extraProperties;
            if (extraProperties == null) {
              paths = {};
            }
            const merged1 = Object.assign(paths);
            const merged2 = Object.assign(closure_7);
            const obj4 = closure_132_1(closure_132_2[25]);
            const merged3 = Object.assign(obj4.serializeTTITracker(appFirstVisibleTime));
            didBackgroundApp = closure_132_1(closure_132_2[25]).didBackgroundApp || closure_10;
            result = null;
            const obj5 = closure_132_0(closure_132_2[29]);
            if (obj5.isIOS()) {
              const obj6 = closure_132_0(closure_132_2[30]);
              result = obj6.isIOSAnchoredChatScrollerEnabled();
            }
            let str = "Track app_ui_viewed2";
            const obj7 = closure_132_1(closure_132_2[20]);
            obj7.mark("\u2757", "Track app_ui_viewed2");
            const obj8 = closure_132_1(closure_132_2[22]);
            obj8.track(APP_UI_VIEWED2.APP_UI_VIEWED2, obj18, { logEventProperties: true });
            const obj9 = closure_132_0(closure_132_2[31]);
            const result1 = obj9.trackAndroidArtProfileSnapshot(load_id, closure_132_16());
            let closure_34 = obj18;
            if (alertStartupMetrics.alertStartupMetrics) {
              const obj19 = {
                importer() {
                            const promise = unknown_str(paths[34])(paths[33], paths.paths);
                            return promise.then((result) => {
                              let closure_0 = result.default;
                              return (arg0) => {
                                let combined;
                                const time_first_contentful_paint = closure_2_11.time_first_contentful_paint;
                                const time_before_js_bundle_start = closure_2_11.time_before_js_bundle_start;
                                const android_time_creation_to_create_main_activity = closure_2_11.android_time_creation_to_create_main_activity;
                                const app_start_type = closure_2_11.app_start_type;
                                let str = closure_2_11.app_launch_scenario;
                                const tmp = closure_3_14;
                                const tmp2 = closure_0;
                                if (str == null) {
                                  str = "-";
                                }
                                obj = { title: "App start times", body: combined.trimStart() };
                                combined = "\nFirstContentfulPaint (TTI): " + time_first_contentful_paint + "ms\n  \u2022 App start \u2192 JS bundle start: " + time_before_js_bundle_start + "ms\n  \u2022 MainAppl. \u2192 MainActivity start: " + android_time_creation_to_create_main_activity + "ms\n    \u2022 Start type: " + app_start_type + "\n    \u2022 Launch scenario: " + str + "\n(legacy) Cached msg render: " + closure_2_11.time_display_messages_with_cache_end + "ms\n              ";
                                const merged = Object.assign(arg0);
                                return tmp(tmp2, obj);
                              };
                            });
                          },
                isDismissable: false
              };
              const obj10 = closure_132_1(closure_132_2[32]);
              obj10.openLazy(obj19);
            }
            c5 = 3;
            c6 = 1;
            const obj20 = { value: obj12.logToDeviceEnabled(), done: false };
            obj12 = closure_132_1(closure_132_2[19]);
            return obj20;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          if (value) {
            logToDevice(obj18);
          }
          c6 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp89) {
        c6 = 3;
        throw tmp89;
      }
    }
  });
  return obj(...arguments);
};
function batchKeys(arg0) {
  const keys = Object.keys(arg0);
  const items = [];
  let num = 0;
  if (0 < keys.length) {
    const sum = num + 10;
    const substr = keys.slice(num, sum);
    obj = {};
    const iter = substr[Symbol.iterator]();
    do {
      let nextResult = iter.next();
      while (iter !== undefined) {
        obj[nextResult] = arg0[nextResult];
        continue;
      }
      let arr = items.push(obj);
      num = sum;
    } while (sum < keys.length);
  }
  return items;
}
obj = function _trackAppLaunchCompletedAsync() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj3;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        let closure_6;
        let closure_3;
        let closure_2;
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_4 = tmp;
            let c5 = 0;
            closure_0 = undefined;
            closure_6 = sharedProperties;
            closure_3 = closure_0;
            closure_2 = closure_1;
            c7 = 1;
            c8 = 1;
            const obj5 = { value: obj3.getAppFirstVisibleTimestamp(), done: false };
            obj3 = react_nativeDefault;
            return obj5;
          }
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_0 = closure_6(closure_3, closure_2, value);
          obj = closure_132_1(closure_132_2[22]);
          obj.track(closure_132_11.APP_LAUNCH_COMPLETED, closure_0, { logEventProperties: true });
          c8 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp20) {
        c8 = 3;
        throw tmp20;
      }
    }
  });
  return obj(...arguments);
};
const AnalyticEvents = Constants.AnalyticEvents;
const ACCEPT_INVITE_MODAL_KEY = AcceptInviteConstants.ACCEPT_INVITE_MODAL_KEY;
const StaticChannelRoutes = ChannelConstants.StaticChannelRoutes;
const jsx = Fragment.jsx;
obj = null;
const load_id = v1.v4();
const Manifest = react_native.getConstants().Manifest;
let c19 = false;
let tmp2 = new LoggerDefault("TTIAnalytics");
let closure_20 = tmp2;
let c21 = false;
let c22 = false;
const set = new Set(["private_channel", "guild-forum", "guild-directory", "guild-text", "thread", "redesign-guilds", "redesign-messages"]);
new Set(["friends_list", "guild-voice", "redesign-guild-voice", "unknown-channel", "redesign-unknown-channel", "channel-list", "other"]);
let c33 = null;
let c34 = null;
let result = size.fileFinishedImporting("modules/tti_analytics/native/TTIAnalyticsUtils.tsx");

export { getDeviceMetadata };
export function currentLoadId() {
  return load_id;
}
export function trackAppOpened(launcher) {
  obj = AppStartPerformanceDefault;
  obj.mark("\u{1F3C3}", "Track app_opened");
  const obj2 = SentryUtilsDefault;
  const obj3 = { category: "lifecycle", message: "App opened", data: { openFrom: launcher } };
  obj2.addBreadcrumb(obj3);
  const obj4 = { opened_from: launcher, load_id, theme: ThemeStore.theme };
  const track = AnalyticsUtilsDefault.track;
  const APP_OPENED = AnalyticEvents.APP_OPENED;
  AnalyticsUtilsDefault;
  const merged = Object.assign(getDeviceMetadata());
  track(APP_OPENED, obj4, { logEventProperties: true });
}
export function trackAppUIViewed(ModalScreen, arg1, hasCacheResult) {
  function trackAppUIViewedAsync() {
    return obj(...arguments);
  }
  let tmp = ModalScreen;
  if (ModalScreen === undefined) {
    tmp = getRedesignScreenName();
  }
  obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  if (hasCacheResult === undefined) {
    hasCacheResult = CacheStore.hasCache();
  }
  const AppStartInfo = AppStartInfo2.AppStartInfo;
  if (!AppStartInfo.getAppUIViewed()) {
    trackAppUIViewedAsync(tmp, obj, hasCacheResult);
  }
}
export function getLastTrackedAppUiViewed2Properties() {
  return c34;
}
export function trackAppLaunchCompleted(unknown, hasCacheResult) {
  function trackAppLaunchCompletedAsync() {
    return obj(...arguments);
  }
  let str = unknown;
  if (unknown === undefined) {
    str = getRedesignScreenName();
  }
  if (hasCacheResult === undefined) {
    hasCacheResult = CacheStore.hasCache();
  }
  const tmp4 = c19;
  if (!tmp4) {
    obj = AppStartPerformanceDefault;
    obj.mark("\u{1F3C3}", "Track app_launch");
    c19 = true;
    if (str == null) {
      str = "unknown";
    }
    trackAppLaunchCompletedAsync(str, hasCacheResult);
  }
}
