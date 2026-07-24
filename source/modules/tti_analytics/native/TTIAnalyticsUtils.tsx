// Module ID: 6707
// Function ID: 51956
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 6708, 4044, 1278, 1194, 1348, 683, 653, 6911, 1355, 33, 4110, 6912, 491, 1554, 3982, 3981, 20, 1184, 675, 6913, 3988, 6915, 14, 664, 6916, 4471, 4561, 1934, 2]
// Exports: currentLoadId, getLastTrackedAppUiViewed2Properties, trackAppLaunchCompleted, trackAppOpened, trackAppUIViewed

// Module 6707 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import { ACCEPT_INVITE_MODAL_KEY } from "ACCEPT_INVITE_MODAL_KEY";
import { StaticChannelRoutes } from "set";
import { jsx } from "jsxProd";
import v1 from "v1";
import set from "_isNativeReflectConstruct";

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
function getDeviceMetadata() {
  if (null == obj) {
    obj = { device_model: require(4110) /* getSystemVersion */.getDeviceModel() };
    const obj2 = require(4110) /* getSystemVersion */;
    obj.device_brand = require(4110) /* getSystemVersion */.getDeviceBrand();
    const obj3 = require(4110) /* getSystemVersion */;
    obj.device_product = require(4110) /* getSystemVersion */.getDeviceProduct();
    const obj4 = require(4110) /* getSystemVersion */;
    obj.device_manufacturer = require(4110) /* getSystemVersion */.getDeviceManufacturer();
    const obj5 = require(4110) /* getSystemVersion */;
    obj.smallest_screen_width_dp = require(4110) /* getSystemVersion */.getSmallestScreenWidthDp();
    obj.device_performance_class = importDefault(6912)();
    const obj6 = require(4110) /* getSystemVersion */;
    obj.soc_name = require(4110) /* getSystemVersion */.getSocName();
    const obj7 = require(4110) /* getSystemVersion */;
    obj.ram_size = require(4110) /* getSystemVersion */.getRamSize();
    const obj8 = require(4110) /* getSystemVersion */;
    obj.max_cpu_freq = require(4110) /* getSystemVersion */.getMaxCpuFreq();
    const obj9 = require(4110) /* getSystemVersion */;
  }
  return obj;
}
function getRedesignScreenName() {
  let name;
  let params;
  const rootNavigationRef = require(3982) /* getRootNavigationRef */.getRootNavigationRef();
  let currentRoute;
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      currentRoute = rootNavigationRef.getCurrentRoute();
    }
  }
  if (null == currentRoute) {
    return null;
  } else {
    if (obj4.isModalOpen(ACCEPT_INVITE_MODAL_KEY)) {
      return "invite";
    } else {
      ({ name, params } = currentRoute);
      if (null != params) {
        const channelId = params.channelId;
      }
      if ("channel" === name) {
        if (null != channelId) {
          if (StaticChannelRoutes.has(channelId)) {
            return channelId;
          } else {
            channel = channel.getChannel(channelId);
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
    obj4 = require(3981) /* _createForOfIteratorHelperLoose */;
  }
  const obj = require(3982) /* getRootNavigationRef */;
}
function sharedProperties(screen_name, has_cached_data) {
  const obj = { load_id: v1, duration_ms_since_app_opened: Date.now() - arg2, screen_name, has_cached_data };
  let tmp = null;
  if (Manifest.length > 0) {
    tmp = Manifest;
  }
  obj.manifest = tmp;
  return obj;
}
async function _trackAppUIViewedAsync(arg0, arg1, arg2, arg3) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  let timestamp;
  let c4;
  timestamp = Date.now();
  const tmp2 = yield outer2_1(outer2_2[21]).getAppFirstVisibleTimestamp();
  c4 = tmp2;
  const diff = timestamp - tmp2;
  const obj = outer2_1(outer2_2[21]);
  outer2_1(outer2_2[21]).reportFullyDrawn();
  const obj2 = outer2_1(outer2_2[21]);
  outer2_1(outer2_2[17]).mark("\u2757", "Track app_ui_viewed");
  const obj3 = outer2_1(outer2_2[17]);
  outer2_1(outer2_2[17]).addDetail("TTI", diff);
  const obj4 = outer2_1(outer2_2[17]);
  outer2_1(outer2_2[17]).markAt("\u{1F3C3}", "app_opened", tmp2);
  const obj5 = outer2_1(outer2_2[17]);
  outer2_0(outer2_2[22]).ttiRecorded(diff);
  let timerId = setTimeout(() => {
    let str = "unknownn";
    if (null != closure_0) {
      str = closure_0;
    }
    !(function logLegacyAppUiViewed(arg0, closure_1, closure_2, timestamp, c4) {
      return outer4_28(...arguments);
    })(str, closure_1, closure_2, timestamp, c4);
  }, 1000);
  (function scheduleTrackAppUiViewed2() {
    if (null == outer3_20) {
      let _setTimeout = setTimeout;
      outer3_20 = setTimeout(() => {
        outer4_1(outer4_2[23]).setTTICallback(() => true);
        outer4_29();
        const outer4_20 = null;
      }, 15 * outer3_1(outer3_2[24]).Millis.SECOND);
      outer3_1(outer3_2[23]).setTTICallback(() => {
        const tmp = outer4_25();
        let flag = false;
        if (null != tmp) {
          if (!outer4_19.has(tmp)) {
            flag = true;
            if (outer4_18.has(tmp)) {
              const readySupplemental2 = outer4_1(outer4_2[23]).readySupplemental;
              const tmp8 = !readySupplemental2.hasData();
              let tmp9 = !tmp8;
              if (!tmp8) {
                const firstContentfulPaint = outer4_1(outer4_2[23]).firstContentfulPaint;
                const tmp12 = !firstContentfulPaint.hasData();
                let tmp13 = !tmp12;
                if (tmp12) {
                  const renderLatestMessages = outer4_1(outer4_2[23]).renderLatestMessages;
                  const tmp16 = !renderLatestMessages.hasData();
                  let tmp17 = !tmp16;
                  if (tmp16) {
                    tmp17 = null != outer4_1(outer4_2[23]).interstitial;
                  }
                  tmp13 = tmp17;
                }
                tmp9 = tmp13;
              }
              flag = tmp9;
            }
          } else {
            const readySupplemental = outer4_1(outer4_2[23]).readySupplemental;
            flag = false;
          }
        }
        let flag2 = flag;
        if (flag) {
          const _clearTimeout = clearTimeout;
          clearTimeout(outer4_20);
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => {
            outer5_29();
            const outer5_20 = null;
          }, 1000);
          flag2 = true;
        }
        return flag2;
      });
    }
  })();
}
async function _logLegacyAppUiViewed(arg0, arg1, arg2, arg3, arg4, arg5) {
  let JSBundleLoadedTimestamp;
  let JSBundleParsedTimestamp;
  let obj = outer2_1(outer2_2[21]);
  const tmp = outer2_26(arg0, arg2, arg4);
  ({ JSBundleLoadedTimestamp, JSBundleParsedTimestamp } = yield obj.getJSBundleTimestamps());
  const tmp2 = yield obj.getJSBundleTimestamps();
  outer2_1(outer2_2[17]).markAt("\u{1F3C3}", "JS Bundle Loaded", JSBundleLoadedTimestamp);
  const obj2 = outer2_1(outer2_2[17]);
  outer2_1(outer2_2[17]).mark("\u{1F3C3}", "app_ui_viewed logged");
  const obj3 = outer2_1(outer2_2[17]);
  outer2_1(outer2_2[17]).addDetail("Since Bundle Parsed", +arg3 - JSBundleParsedTimestamp);
  const obj4 = outer2_1(outer2_2[17]);
  outer2_1(outer2_2[17]).endTime = Date.now() + 20000;
  const tmp6 = outer2_1(outer2_2[17]);
  obj = {};
  const merged = Object.assign(tmp);
  const merged1 = Object.assign(outer2_24());
  obj["duration_ms_since_required_js_bundle_loaded"] = arg3 - JSBundleLoadedTimestamp;
  obj["duration_ms_since_required_js_bundle_parsed"] = arg3 - JSBundleParsedTimestamp;
  obj["theme"] = outer2_6.theme;
  const merged2 = Object.assign(arg1);
  outer2_1(outer2_2[19]).track(outer2_10.APP_UI_VIEWED, obj, { logEventProperties: true });
}
function trackAppUIViewed2() {
  return _trackAppUIViewed(...arguments);
}
async function _trackAppUIViewed() {
  let c0;
  let extraProperties;
  c0 = undefined;
  let obj;
  const tmp = outer2_25();
  let str = "unknown";
  if (null != tmp) {
    str = tmp;
  }
  const AppStartInfo = outer2_0(outer2_2[20]).AppStartInfo;
  const tmp2 = yield AppStartInfo.getAppStartInfo();
  ({ appCreatedTime: c0, extraProperties } = tmp2);
  obj = outer2_1(outer2_2[21]);
  const allNativeTimestamps = obj.getAllNativeTimestamps();
  yield allNativeTimestamps.then((nativeLogs) => {
    outer3_1(outer3_2[17]).logGroups[0].nativeLogs = nativeLogs;
    outer3_1(outer3_2[23]).processNativeLogs(nativeLogs, c0);
  });
  const cumulativeCPUUsage = outer2_1(outer2_2[25]).getCumulativeCPUUsage();
  let usage;
  if (null != cumulativeCPUUsage) {
    usage = cumulativeCPUUsage.usage;
  }
  let tmp6 = null;
  if (null != usage) {
    tmp6 = usage;
  }
  obj = {};
  let merged = Object.assign(outer2_24());
  if (null == extraProperties) {
    extraProperties = {};
  }
  const merged1 = Object.assign(extraProperties);
  let obj2 = outer2_1(outer2_2[25]);
  const merged2 = Object.assign(outer2_1(outer2_2[23]).serializeTTITracker(tmp2.appFirstVisibleTime));
  obj["load_id"] = outer2_15;
  obj["screen_name"] = str;
  obj["has_cached_data"] = outer2_4.hasCache();
  obj["startup_cpu_usage_cumulative"] = tmp6;
  obj["theme"] = outer2_6.theme;
  const obj4 = outer2_1(outer2_2[23]);
  outer2_1(outer2_2[17]).mark("\u2757", "Track app_ui_viewed2");
  const obj5 = outer2_1(outer2_2[17]);
  outer2_1(outer2_2[19]).track(outer2_10.APP_UI_VIEWED2, obj, { logEventProperties: true });
  const outer2_21 = obj;
  if (outer2_9.alertStartupMetrics) {
    obj = {
      importer() {
          return outer3_0(outer3_2[28])(outer3_2[27], outer3_2.paths).then((arg0) => {
            let closure_0 = arg0.default;
            return (arg0) => {
              const obj = { title: "App start times" };
              const app_launch_scenario = outer2_1.app_launch_scenario;
              let str = "-";
              if (null != app_launch_scenario) {
                str = app_launch_scenario;
              }
              const combined = "\nFirstContentfulPaint (TTI): " + outer2_1.time_first_contentful_paint + "ms\n  \u2022 App start \u2192 JS bundle start: " + outer2_1.time_before_js_bundle_start + "ms\n  \u2022 MainAppl. \u2192 MainActivity start: " + outer2_1.android_time_creation_to_create_main_activity + "ms\n    \u2022 Start type: " + outer2_1.app_start_type + "\n    \u2022 Launch scenario: " + str + "\n(legacy) Cached msg render: " + outer2_1.time_display_messages_with_cache_end + "ms\n              ";
              obj.body = combined.trimStart();
              const merged = Object.assign(arg0);
              return outer5_13(closure_0, obj);
            };
          });
        }
    };
    outer2_1(outer2_2[26]).openLazy(obj);
    const obj7 = outer2_1(outer2_2[26]);
  }
  const obj6 = outer2_1(outer2_2[19]);
  if (obj9.runningTTIAutomation()) {
    (function logToDevice(json) {
      let obj = {};
      let merged = Object.assign(json);
      obj["logged_at"] = Date.now();
      obj["user_id"] = outer3_7.getId();
      const timestamp = Date.now();
      let closure_0 = timestamp;
      const item = outer3_31(obj).forEach((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj["type"] = "app_ui_viewed";
        obj["batch_id"] = closure_0;
        const json = JSON.stringify(obj);
        outer4_1(outer4_2[21]).logToDevice(json);
      });
      closure_0 = timestamp + 1;
      const arr = outer3_31(obj);
      const item1 = outer3_31(outer3_5.getAllExperimentAssignments()).forEach((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj["batch_id"] = closure_0;
        obj["type"] = "experiments";
        const json = JSON.stringify(obj);
        outer4_1(outer4_2[21]).logToDevice(json);
      });
      json = JSON.stringify({ type: "finished" });
      const arr2 = outer3_31(outer3_5.getAllExperimentAssignments());
      outer3_1(outer3_2[21]).logToDevice(json);
      const obj2 = outer3_1(outer3_2[21]);
      outer3_1(outer3_2[21]).trackTTILogged();
    })(obj);
  }
}
function batchKeys(arg0) {
  let sum;
  const keys = Object.keys(arg0);
  const items = [];
  let num = 0;
  if (0 < keys.length) {
    do {
      let obj = {};
      let tmp = _createForOfIteratorHelperLoose;
      sum = num + 10;
      let tmp3 = _createForOfIteratorHelperLoose(keys.slice(num, sum));
      let iter = tmp3();
      if (!iter.done) {
        do {
          let value = iter.value;
          obj[value] = arg0[value];
          let iter2 = tmp3();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
      let arr = items.push(obj);
      num = sum;
    } while (sum < keys.length);
  }
  return items;
}
async function _trackAppLaunchCompletedAsync(arg0, arg1, arg2) {
  const obj = outer2_1(outer2_2[21]);
  const tmp = outer2_26;
  const tmpResult = outer2_26(arg0, arg1, yield outer2_1(outer2_2[21]).getAppFirstVisibleTimestamp());
  outer2_1(outer2_2[19]).track(outer2_10.APP_LAUNCH_COMPLETED, tmpResult, { logEventProperties: true });
}
let c14 = null;
v1 = v1.v4();
const Manifest = require("getConstants").getConstants().Manifest;
let c17 = false;
let set = new Set(["private_channel", "guild-forum", "guild-directory", "guild-text", "thread", "redesign-guilds", "redesign-messages"]);
const set1 = new Set(["friends_list", "guild-voice", "redesign-guild-voice", "unknown-channel", "redesign-unknown-channel", "channel-list", "other"]);
let c20 = null;
let c21 = null;
const result = set.fileFinishedImporting("modules/tti_analytics/native/TTIAnalyticsUtils.tsx");

export { getDeviceMetadata };
export function currentLoadId() {
  return v1;
}
export const trackAppOpened = function trackAppOpened(launcher) {
  let obj = importDefault(20);
  obj.mark("\u{1F3C3}", "Track app_opened");
  obj = { category: "lifecycle", message: "App opened", data: { openFrom: launcher } };
  importDefault(1184).addBreadcrumb(obj);
  const obj2 = importDefault(1184);
  obj = {};
  const merged = Object.assign(getDeviceMetadata());
  obj["opened_from"] = launcher;
  obj["load_id"] = v1;
  obj["theme"] = theme.theme;
  importDefault(675).track(AnalyticEvents.APP_OPENED, obj, { logEventProperties: true });
};
export const trackAppUIViewed = function trackAppUIViewed(ModalScreen, arg1, hasCacheResult) {
  let tmp = ModalScreen;
  let obj = arg1;
  if (ModalScreen === undefined) {
    tmp = getRedesignScreenName();
  }
  if (obj === undefined) {
    obj = {};
  }
  if (hasCacheResult === undefined) {
    hasCacheResult = closure_4.hasCache();
  }
  const AppStartInfo = require(6913) /* AppStartInfo */.AppStartInfo;
  if (!AppStartInfo.getAppUIViewed()) {
    (function trackAppUIViewedAsync(ModalScreen, arg1, hasCacheResult) {
      return outer1_27(...arguments);
    })(tmp, obj, hasCacheResult);
  }
};
export function getLastTrackedAppUiViewed2Properties() {
  return c21;
}
export const trackAppLaunchCompleted = function trackAppLaunchCompleted(arg0, hasCacheResult) {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = getRedesignScreenName();
  }
  if (hasCacheResult === undefined) {
    hasCacheResult = closure_4.hasCache();
  }
  if (!c17) {
    importDefault(20).mark("\u{1F3C3}", "Track app_launch");
    c17 = true;
    let str3 = "unknown";
    if (null != tmp) {
      str3 = tmp;
    }
    (function trackAppLaunchCompletedAsync(arg0, hasCacheResult) {
      return outer1_32(...arguments);
    })(str3, hasCacheResult);
    const obj = importDefault(20);
  }
};
