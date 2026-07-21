// Module ID: 6702
// Function ID: 51891
// Name: _createForOfIteratorHelperLoose
// Dependencies: [31260672, 87031808, 452591616, 124387328, 131072, 92143616, 956301312, 100663296, 117440512, 3305111552, 1140850706, 822083589, 50331674, 3288334336, 1509949458, 922746887, 973078554, 1526726682, 33554439, 4026531840, 1553, 1792, 3840, 4352, 4608, 345088, 1036544, 306176, 487936, 1716736]
// Exports: currentLoadId, getLastTrackedAppUiViewed2Properties, trackAppLaunchCompleted, trackAppOpened, trackAppUIViewed

// Module 6702 (_createForOfIteratorHelperLoose)
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
function getDeviceMetadata() {
  if (null == closure_14) {
    const obj = { device_model: arg1(dependencyMap[11]).getDeviceModel() };
    const obj2 = arg1(dependencyMap[11]);
    obj.device_brand = arg1(dependencyMap[11]).getDeviceBrand();
    const obj3 = arg1(dependencyMap[11]);
    obj.device_product = arg1(dependencyMap[11]).getDeviceProduct();
    const obj4 = arg1(dependencyMap[11]);
    obj.device_manufacturer = arg1(dependencyMap[11]).getDeviceManufacturer();
    const obj5 = arg1(dependencyMap[11]);
    obj.smallest_screen_width_dp = arg1(dependencyMap[11]).getSmallestScreenWidthDp();
    obj.device_performance_class = importDefault(dependencyMap[12])();
    const obj6 = arg1(dependencyMap[11]);
    obj.soc_name = arg1(dependencyMap[11]).getSocName();
    const obj7 = arg1(dependencyMap[11]);
    obj.ram_size = arg1(dependencyMap[11]).getRamSize();
    const obj8 = arg1(dependencyMap[11]);
    obj.max_cpu_freq = arg1(dependencyMap[11]).getMaxCpuFreq();
    closure_14 = obj;
    const obj9 = arg1(dependencyMap[11]);
  }
  return closure_14;
}
function getRedesignScreenName() {
  let name;
  let params;
  const rootNavigationRef = arg1(dependencyMap[15]).getRootNavigationRef();
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
            const channel = channel.getChannel(channelId);
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
    const obj4 = arg1(dependencyMap[16]);
  }
  const obj = arg1(dependencyMap[15]);
}
function sharedProperties(screen_name, has_cached_data) {
  const obj = { load_id: closure_15, duration_ms_since_app_opened: Date.now() - arg2, screen_name, has_cached_data };
  let tmp = null;
  if (Manifest.length > 0) {
    tmp = Manifest;
  }
  obj.manifest = tmp;
  return obj;
}
async function _trackAppUIViewedAsync(arg0, arg1, arg2, arg3) {
  let timestamp;
  let tmp2;
  timestamp = Date.now();
  tmp2 = yield arg1(arg2[21]).getAppFirstVisibleTimestamp();
  const diff = timestamp - tmp2;
  const obj = arg1(arg2[21]);
  arg1(arg2[21]).reportFullyDrawn();
  const obj2 = arg1(arg2[21]);
  arg1(arg2[17]).mark("\u2757", "Track app_ui_viewed");
  const obj3 = arg1(arg2[17]);
  arg1(arg2[17]).addDetail("TTI", diff);
  const obj4 = arg1(arg2[17]);
  arg1(arg2[17]).markAt("\u{1F3C3}", "app_opened", tmp2);
  const obj5 = arg1(arg2[17]);
  arg0(arg2[22]).ttiRecorded(diff);
  const timerId = setTimeout(() => {
    let str = "unknownn";
    if (null != arg0) {
      str = arg0;
    }
    !function logLegacyAppUiViewed(arg0, arg1, arg2, timestamp, arg4) {
      return callback(...arguments);
    }(str, arg1, arg2, timestamp, tmp2);
  }, 1000);
  function scheduleTrackAppUiViewed2() {
    if (null == timeout) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        callback(closure_2[23]).setTTICallback(() => true);
        callback3();
        let closure_20 = null;
      }, 15 * arg1(arg2[24]).Millis.SECOND);
      arg1(arg2[23]).setTTICallback(() => {
        const tmp = callback2();
        let flag = false;
        if (null != tmp) {
          if (!set2.has(tmp)) {
            flag = true;
            if (set.has(tmp)) {
              const readySupplemental2 = callback(closure_2[23]).readySupplemental;
              const tmp8 = !readySupplemental2.hasData();
              let tmp9 = !tmp8;
              if (!tmp8) {
                const firstContentfulPaint = callback(closure_2[23]).firstContentfulPaint;
                const tmp12 = !firstContentfulPaint.hasData();
                let tmp13 = !tmp12;
                if (tmp12) {
                  const renderLatestMessages = callback(closure_2[23]).renderLatestMessages;
                  const tmp16 = !renderLatestMessages.hasData();
                  let tmp17 = !tmp16;
                  if (tmp16) {
                    tmp17 = null != callback(closure_2[23]).interstitial;
                  }
                  tmp13 = tmp17;
                }
                tmp9 = tmp13;
              }
              flag = tmp9;
            }
          } else {
            const readySupplemental = callback(closure_2[23]).readySupplemental;
            flag = false;
          }
        }
        let flag2 = flag;
        if (flag) {
          const _clearTimeout = clearTimeout;
          clearTimeout(closure_20);
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => {
            callback();
            let closure_20 = null;
          }, 1000);
          flag2 = true;
        }
        return flag2;
      });
    }
  }();
}
async function _logLegacyAppUiViewed(arg0, arg1, arg2, arg3, arg4, arg5) {
  let JSBundleLoadedTimestamp;
  let JSBundleParsedTimestamp;
  let obj = callback(closure_2[21]);
  const tmp = callback3(arg0, arg2, arg4);
  ({ JSBundleLoadedTimestamp, JSBundleParsedTimestamp } = yield obj.getJSBundleTimestamps());
  const tmp2 = yield obj.getJSBundleTimestamps();
  callback(closure_2[17]).markAt("\u{1F3C3}", "JS Bundle Loaded", JSBundleLoadedTimestamp);
  const obj2 = callback(closure_2[17]);
  callback(closure_2[17]).mark("\u{1F3C3}", "app_ui_viewed logged");
  const obj3 = callback(closure_2[17]);
  callback(closure_2[17]).addDetail("Since Bundle Parsed", +arg3 - JSBundleParsedTimestamp);
  const obj4 = callback(closure_2[17]);
  callback(closure_2[17]).endTime = Date.now() + 20000;
  const tmp6 = callback(closure_2[17]);
  obj = {};
  const merged = Object.assign(tmp);
  const merged1 = Object.assign(callback2());
  obj["duration_ms_since_required_js_bundle_loaded"] = arg3 - JSBundleLoadedTimestamp;
  obj["duration_ms_since_required_js_bundle_parsed"] = arg3 - JSBundleParsedTimestamp;
  obj["theme"] = theme.theme;
  const merged2 = Object.assign(arg1);
  callback(closure_2[19]).track(constants.APP_UI_VIEWED, obj, { logEventProperties: true });
}
function trackAppUIViewed2() {
  return _trackAppUIViewed(...arguments);
}
async function _trackAppUIViewed() {
  let extraProperties;
  let callback;
  let obj;
  const tmp = callback3();
  let str = "unknown";
  if (null != tmp) {
    str = tmp;
  }
  const AppStartInfo = callback(closure_2[20]).AppStartInfo;
  const tmp2 = yield AppStartInfo.getAppStartInfo();
  ({ appCreatedTime: closure_0, extraProperties } = tmp2);
  obj = obj(closure_2[21]);
  const allNativeTimestamps = obj.getAllNativeTimestamps();
  yield allNativeTimestamps.then((nativeLogs) => {
    obj(closure_2[17]).logGroups[0].nativeLogs = nativeLogs;
    const obj = obj(closure_2[23]);
    obj.processNativeLogs(nativeLogs, closure_0);
  });
  const cumulativeCPUUsage = obj(closure_2[25]).getCumulativeCPUUsage();
  let usage;
  if (null != cumulativeCPUUsage) {
    usage = cumulativeCPUUsage.usage;
  }
  let tmp6 = null;
  if (null != usage) {
    tmp6 = usage;
  }
  obj = {};
  const merged = Object.assign(callback2());
  if (null == extraProperties) {
    extraProperties = {};
  }
  const merged1 = Object.assign(extraProperties);
  const obj2 = obj(closure_2[25]);
  const merged2 = Object.assign(obj(closure_2[23]).serializeTTITracker(tmp2.appFirstVisibleTime));
  obj["load_id"] = closure_15;
  obj["screen_name"] = str;
  obj["has_cached_data"] = closure_4.hasCache();
  obj["startup_cpu_usage_cumulative"] = tmp6;
  obj["theme"] = theme.theme;
  const obj4 = obj(closure_2[23]);
  obj(closure_2[17]).mark("\u2757", "Track app_ui_viewed2");
  const obj5 = obj(closure_2[17]);
  obj(closure_2[19]).track(APP_UI_VIEWED2.APP_UI_VIEWED2, obj, { logEventProperties: true });
  if (alertStartupMetrics.alertStartupMetrics) {
    obj = {
      importer() {
          return _undefined(paths[28])(paths[27], paths.paths).then((arg0) => {
            let closure_0 = arg0.default;
            return (arg0) => {
              const obj = { title: "App start times" };
              const app_launch_scenario = closure_1.app_launch_scenario;
              let str = "-";
              if (null != app_launch_scenario) {
                str = app_launch_scenario;
              }
              const combined = "\nFirstContentfulPaint (TTI): " + closure_1.time_first_contentful_paint + "ms\n  \u2022 App start \u2192 JS bundle start: " + closure_1.time_before_js_bundle_start + "ms\n  \u2022 MainAppl. \u2192 MainActivity start: " + closure_1.android_time_creation_to_create_main_activity + "ms\n    \u2022 Start type: " + closure_1.app_start_type + "\n    \u2022 Launch scenario: " + str + "\n(legacy) Cached msg render: " + closure_1.time_display_messages_with_cache_end + "ms\n              ";
              obj.body = combined.trimStart();
              const merged = Object.assign(arg0);
              return closure_13(closure_0, obj);
            };
          });
        }
    };
    obj(closure_2[26]).openLazy(obj);
    const obj7 = obj(closure_2[26]);
  }
  const obj6 = obj(closure_2[19]);
  if (obj9.runningTTIAutomation()) {
    function logToDevice(json) {
      const obj = {};
      const merged = Object.assign(json);
      obj["logged_at"] = Date.now();
      obj["user_id"] = id.getId();
      const timestamp = Date.now();
      let closure_0 = timestamp;
      const item = callback(obj).forEach((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj["type"] = "app_ui_viewed";
        obj["batch_id"] = closure_0;
        const json = JSON.stringify(obj);
        callback(closure_2[21]).logToDevice(json);
      });
      closure_0 = timestamp + 1;
      const arr = callback(obj);
      const item1 = callback(allExperimentAssignments.getAllExperimentAssignments()).forEach((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj["batch_id"] = closure_0;
        obj["type"] = "experiments";
        const json = JSON.stringify(obj);
        callback(closure_2[21]).logToDevice(json);
      });
      json = JSON.stringify({ type: "finished" });
      const arr2 = callback(allExperimentAssignments.getAllExperimentAssignments());
      obj(closure_2[21]).logToDevice(json);
      const obj2 = obj(closure_2[21]);
      obj(closure_2[21]).trackTTILogged();
    }(obj);
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
      let tmp = closure_22;
      sum = num + 10;
      let tmp3 = closure_22(keys.slice(num, sum));
      let iter = tmp3();
      if (!iter.done) {
        do {
          let value = iter.value;
          obj[value] = arg0[value];
          let iter2 = tmp3();
          iter = iter2;
          let done = iter2.done;
        } while (!done);
      }
      let arr = items.push(obj);
      num = sum;
    } while (sum < keys.length);
  }
  return items;
}
async function _trackAppLaunchCompletedAsync(arg0, arg1, arg2) {
  const obj = callback(closure_2[21]);
  const tmp = closure_26;
  const tmpResult = closure_26(arg0, arg1, yield callback(closure_2[21]).getAppFirstVisibleTimestamp());
  callback(closure_2[19]).track(constants.APP_LAUNCH_COMPLETED, tmpResult, { logEventProperties: true });
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const AnalyticEvents = arg1(dependencyMap[7]).AnalyticEvents;
const ACCEPT_INVITE_MODAL_KEY = arg1(dependencyMap[8]).ACCEPT_INVITE_MODAL_KEY;
const StaticChannelRoutes = arg1(dependencyMap[9]).StaticChannelRoutes;
const jsx = arg1(dependencyMap[10]).jsx;
let closure_14 = null;
let closure_15 = arg1(dependencyMap[13]).v4();
const obj = arg1(dependencyMap[13]);
const Manifest = importAll(dependencyMap[14]).getConstants().Manifest;
let closure_17 = false;
const set = new Set(["Array", "unconsumedFractionalPremiumUnits", "r", "_animatedIndex", "Array", "isBuffer", "r"]);
const set1 = new Set([true, true, true, true, true, true, true]);
let closure_20 = null;
let closure_21 = null;
const importAllResult = importAll(dependencyMap[14]);
const result = arg1(dependencyMap[29]).fileFinishedImporting("modules/tti_analytics/native/TTIAnalyticsUtils.tsx");

export { getDeviceMetadata };
export function currentLoadId() {
  return closure_15;
}
export const trackAppOpened = function trackAppOpened(launcher) {
  let obj = importDefault(dependencyMap[17]);
  obj.mark("\u{1F3C3}", "Track app_opened");
  obj = { openFrom: launcher };
  importDefault(dependencyMap[18]).addBreadcrumb({ data: obj });
  const obj2 = importDefault(dependencyMap[18]);
  obj = {};
  const merged = Object.assign(getDeviceMetadata());
  obj["opened_from"] = launcher;
  obj["load_id"] = closure_15;
  obj["theme"] = theme.theme;
  importDefault(dependencyMap[19]).track(AnalyticEvents.APP_OPENED, obj, { logEventProperties: true });
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
  const AppStartInfo = arg1(dependencyMap[20]).AppStartInfo;
  if (!AppStartInfo.getAppUIViewed()) {
    function trackAppUIViewedAsync(ModalScreen, arg1, hasCacheResult) {
      return callback(...arguments);
    }(tmp, obj, hasCacheResult);
  }
};
export function getLastTrackedAppUiViewed2Properties() {
  return closure_21;
}
export const trackAppLaunchCompleted = function trackAppLaunchCompleted(arg0, hasCacheResult) {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = getRedesignScreenName();
  }
  if (hasCacheResult === undefined) {
    hasCacheResult = closure_4.hasCache();
  }
  if (!closure_17) {
    importDefault(dependencyMap[17]).mark("\u{1F3C3}", "Track app_launch");
    closure_17 = true;
    let str3 = "unknown";
    if (null != tmp) {
      str3 = tmp;
    }
    function trackAppLaunchCompletedAsync(arg0, hasCacheResult) {
      return callback(...arguments);
    }(str3, hasCacheResult);
    const obj = importDefault(dependencyMap[17]);
  }
};
