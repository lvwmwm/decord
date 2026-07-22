// Module ID: 1185
// Function ID: 13505
// Name: _maybeBackfillMissingBreadcrumbsFromTelemetryRing
// Dependencies: []
// Exports: initSentry

// Module 1185 (_maybeBackfillMissingBreadcrumbsFromTelemetryRing)
let Endpoints;
async function _maybeBackfillMissingBreadcrumbsFromTelemetryRing(breadcrumbs, arg1) {
  breadcrumbs = breadcrumbs.breadcrumbs;
  if (!Array.isArray(breadcrumbs)) {
    const SentryTelemetry = callback(closure_3[6]).SentryTelemetry;
    const items = [SentryTelemetry.snapshotForBreadcrumbs(), ];
    const promise = new Promise((arg0, arg1) => setTimeout(() => {
      const error = new Error("TelemetryRing breadcrumb timeout");
      return arg1(error);
    }, 200));
    items[1] = promise;
    const tmp7 = yield Promise.race(items).catch(() => null);
    let isArray = null != tmp7;
    if (isArray) {
      const _Array = Array;
      isArray = Array.isArray(tmp7.entries);
    }
    if (isArray) {
      isArray = 0 !== tmp7.entries.length;
    }
    if (isArray) {
      const entries = tmp7.entries;
      breadcrumbs.breadcrumbs = entries.map((message) => {
        const obj = {};
        let key = message.message;
        if (null == key) {
          key = message.key;
        }
        obj.message = key;
        obj.category = "telemetry_ring";
        obj.timestamp = message.timestamp / 1000;
        obj.data = message.data;
        return obj;
      });
    }
    const racePromise = Promise.race(items);
  }
}
function filterError(event_id, originalException) {
  originalException = event_id;
  const importDefault = originalException;
  originalException = undefined;
  if (null != originalException) {
    originalException = originalException.originalException;
  }
  let status;
  if (null != originalException) {
    status = originalException.status;
  }
  if (!status) {
    let captchaFields;
    if (null != originalException) {
      captchaFields = originalException.captchaFields;
    }
    let tmp4 = null;
    if (null != captchaFields) {
      let code;
      if (null != originalException) {
        code = originalException.code;
      }
      tmp4 = code;
    }
    let flag = false;
    if (tmp4) {
      flag = false;
      if (tmp4 < 0) {
        flag = true;
      }
    }
  } else {
    flag = true;
  }
  if (!flag) {
    let originalException1;
    if (null != originalException) {
      originalException1 = originalException.originalException;
    }
    let code1;
    if (null != originalException1) {
      if (null != originalException1.err) {
        code1 = err.code;
      }
    }
    let flag2 = false;
    if ("ABORTED" === code1) {
      flag2 = true;
    }
    flag = flag2;
  }
  if (flag) {
    markCrashHandled(event_id.event_id);
  } else {
    let originalException2;
    if (null != originalException) {
      originalException2 = originalException.originalException;
    }
    let status1;
    if (null != originalException2) {
      status1 = originalException2.status;
    }
    if (null != status1) {
      if (null == event_id.tags) {
        event_id.tags = {};
      }
      event_id.tags.httpStatusCode = status1;
    }
    let tmp10 = closure_12;
    if ("error" === event_id.level) {
      tmp10 = closure_13;
    }
    if (!closure_14) {
      trackCrash(event_id, originalException, false);
    }
    return callback(async () => {
      const ZoomedInTelemetry = callback(closure_3[6]).ZoomedInTelemetry;
      const items = [ZoomedInTelemetry.flushNow(), new Promise((arg0) => setTimeout(arg0, 200))];
      yield Promise.race(items);
      yield function maybeBackfillMissingBreadcrumbsFromTelemetryRing(arg0) {
        return callback(...arguments);
      }(closure_0);
      callback2(callback, closure_1);
    })();
  }
  return null;
}
function getCrashErrorMessage(exception) {
  let type;
  let value;
  exception = exception.exception;
  let first;
  if (null != exception) {
    const values = exception.values;
    if (null != values) {
      first = values[0];
    }
  }
  if (null == first) {
    const extra2 = exception.extra;
    let prop;
    if (null != extra2) {
      prop = extra2.persisted_error_message;
    }
    let message;
    if ("string" === typeof prop) {
      if (prop.length > 0) {
        message = prop;
      }
    }
    if (null == message) {
      message = exception.message;
    }
    return message;
  } else {
    ({ type, value } = first);
    if (null != type) {
      if (null != value) {
        const _HermesInternal = HermesInternal;
        return "" + type + ": " + value;
      }
    }
    const extra = exception.extra;
    if (null != extra) {
      const prop1 = extra.persisted_error_message;
    }
    message = value;
    if (null != type) {
      message = type;
    }
    if (null == message) {
      message = exception.message;
    }
    if (null == message) {
      let tmp2;
      if ("string" === typeof prop1) {
        if (prop1.length > 0) {
          tmp2 = prop1;
        }
      }
      message = tmp2;
    }
    return message;
  }
}
function getErrorStackTrace(exception) {
  exception = exception.exception;
  let first;
  if (null != exception) {
    const values = exception.values;
    if (null != values) {
      first = values[0];
    }
  }
  if (null == first) {
    const extra2 = exception.extra;
    let prop;
    if (null != extra2) {
      prop = extra2.persisted_error_stack;
    }
    let tmp6;
    if ("string" === typeof prop) {
      if (prop.length > 0) {
        tmp6 = prop;
      }
    }
    return tmp6;
  } else {
    const stacktrace = first.stacktrace;
    let joined;
    if (null != stacktrace) {
      const frames = stacktrace.frames;
      if (null != frames) {
        const mapped = frames.map((filename) => "" + filename.filename + ":" + filename.lineno + ":" + filename.colno);
        joined = mapped.join("\n");
      }
    }
    if (null != joined) {
      if (joined.length > 0) {
        return joined;
      }
    }
    const extra = exception.extra;
    let prop1;
    if (null != extra) {
      prop1 = extra.persisted_error_stack;
    }
    let tmp4;
    if ("string" === typeof prop1) {
      if (prop1.length > 0) {
        tmp4 = prop1;
      }
    }
    return tmp4;
  }
}
function trackCrash(event, extra, arg2) {
  let level;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  let obj = { event, hint: extra };
  importDefaultResult.info("Crash", obj);
  ({ level, extra } = event);
  let native_is_native;
  if (null != extra) {
    native_is_native = extra.native_is_native;
  }
  if (null != native_is_native) {
    let tmp4 = "true" === event.extra.native_is_native;
  } else {
    const tags = event.tags;
    let prop;
    if (null != tags) {
      prop = tags.event.origin;
    }
    tmp4 = "javascript" !== prop;
  }
  if ("fatal" !== level) {
    return event;
  }
  let tmp5 = tmp4;
  if (!tmp4) {
    tmp5 = "error" !== level;
  }
  let num = 1;
  if (!tmp5) {
    num = 0.01;
  }
  if (!closure_14) {
    if (!sample(num)) {
      markCrashHandled(event.event_id);
    }
  }
  let obj1 = extra(dependencyMap[7]);
  let tmp9 = null;
  if (flag) {
    const event_id = event.event_id;
    tmp9 = null;
    if (null != event_id) {
      tmp9 = event_id;
    }
  }
  const timestamp = event.timestamp;
  let result;
  if (null != timestamp) {
    if ("number" === typeof timestamp) {
      const _isNaN = isNaN;
      if (!isNaN(timestamp)) {
        result = 1000 * timestamp;
      }
    }
    const _Date = Date;
    if (timestamp instanceof Date) {
      result = timestamp.getTime();
    } else if ("string" === tmp11) {
      const _Date2 = Date;
      const parsed = Date.parse(timestamp);
      const _Number = Number;
      if (!Number.isNaN(parsed)) {
        result = parsed;
      }
    }
  }
  if (null == result) {
    const _Date3 = Date;
    result = Date.now();
  }
  const track = importDefault(dependencyMap[8]).track;
  if (tmp4) {
    extra = event.extra;
    if (null == extra) {
      extra = {};
    }
    obj = { did_crash: true, sentry_issue_id: tmp9, client_track_timestamp: result, exit_reason: getStringExtra(extra.native_exit_reason), exit_description: getStringExtra(extra.native_exit_description), tombstone_hash: getStringExtra(extra.native_tombstone_hash), tombstone_cause: getStringExtra(extra.native_tombstone_cause), tombstone: getStringExtra(extra.native_tombstone), call_stack_tree: getStringExtra(extra.native_tombstone_group_by), binary_name: getStringExtra(extra.native_tombstone_origin), exception_message: getCrashErrorMessage(event), exception_stacktrace: getErrorStackTrace(event), js_error_message: getStringExtra(extra.persisted_error_message), js_error_stacktrace: getStringExtra(extra.persisted_error_stack) };
    track(tmp17.APP_NATIVE_CRASH, obj);
  } else {
    obj = { path: obj1.getHistory().location.pathname, client_track_timestamp: result, sentry_issue_id: tmp9, extra, error_message: getCrashErrorMessage(event) };
    let tmp19;
    if (null != level) {
      tmp19 = level;
    }
    obj.error_level = tmp19;
    obj.error_stack = getErrorStackTrace(event);
    track(tmp17.APP_CRASHED, obj);
  }
  markCrashHandled(event.event_id);
  const AppCrashedReasons = extra(dependencyMap[9]).AppCrashedReasons;
  const tmp16 = importDefault(dependencyMap[8]);
  const tmp27 = tmp4 ? AppCrashedReasons.UNHANDLED_NATIVE_ERROR : AppCrashedReasons.UNHANDLED_JS_ERROR;
  obj1 = { name: extra(dependencyMap[11]).MetricEvents.APP_CRASHED };
  const items = ["reason:" + tmp27, ];
  let str7 = "unknown";
  if (null != level) {
    str7 = level;
  }
  items[1] = "level:" + str7;
  obj1.tags = items;
  importDefault(dependencyMap[10]).increment(obj1, true);
}
function sample(arg0) {
  return Math.random() <= arg0;
}
function markCrashHandled(arg0) {
  let tmp = "string" === typeof arg0;
  if (tmp) {
    tmp = 0 !== arg0.length;
  }
  if (tmp) {
    importDefault(dependencyMap[13]).markCrashHandled(arg0);
    const obj = importDefault(dependencyMap[13]);
  }
}
function getStringExtra(native_exit_description) {
  let tmp = null;
  if ("string" === typeof native_exit_description) {
    tmp = null;
    if (native_exit_description.length > 0) {
      tmp = native_exit_description;
    }
  }
  return tmp;
}
let closure_4 = importDefault(dependencyMap[0]);
const NativeModules = arg1(dependencyMap[1]).NativeModules;
({ AnalyticEvents: closure_6, Endpoints } = arg1(dependencyMap[2]));
const PRIMARY_DOMAIN = arg1(dependencyMap[3]).PRIMARY_DOMAIN;
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[4]).reactNavigationIntegration();
const regExp = new RegExp("/v" + window.GLOBAL_ENV.API_VERSION + Endpoints.METRICS, "g");
const items = [regExp, , ];
const regExp1 = new RegExp("/v" + window.GLOBAL_ENV.API_VERSION + Endpoints.METRICS_V2, "g");
items[1] = regExp1;
const regExp2 = new RegExp("/v" + window.GLOBAL_ENV.API_VERSION + Endpoints.TRACK, "g");
items[2] = regExp2;
let importDefaultResult = importDefault(dependencyMap[5]);
importDefaultResult = new importDefaultResult("Sentry");
let closure_11 = ["<string:25674240>", "<string:32797184>", "<string:39256064>", "<string:1430716416>", "<string:3271558348>"];
let closure_12 = 0.05;
let closure_13 = 0.005;
let closure_14 = false;
const obj = arg1(dependencyMap[4]);
let closure_15 = arg1(dependencyMap[12]).filterThrottle({ "Bool(false)": "Uint16Array", "Bool(false)": "hideBackground" });
const obj2 = arg1(dependencyMap[12]);
const result1 = arg1(dependencyMap[22]).fileFinishedImporting("modules/errors/native/SentryInitUtils.tsx");

export const routingInstrumentation = result;
export const initSentry = function initSentry() {
  const CrashReportingManager = NativeModules.CrashReportingManager;
  if (null != CrashReportingManager) {
    const isUserStaffForCrashReporting = CrashReportingManager.getIsUserStaffForCrashReporting((arg0) => {
      let obj = callback2(closure_3[14]);
      const constants = obj.getConstants();
      const ReleaseChannel = constants.ReleaseChannel;
      if (-1 === ReleaseChannel.indexOf("debug")) {
        if (-1 === ReleaseChannel.indexOf("developer")) {
          const isStable = callback(closure_3[15]).isStable;
          obj = { releaseChannel: ReleaseChannel, isProductionChannel: isStable };
          closure_10.verbose("Initialize", obj);
          if (obj17.isAndroid()) {
            if (isStable) {
              let obj1 = callback(closure_3[17]);
              const device = obj1.getDevice();
            }
          }
          let closure_12 = 0.05;
          const SentryDsn = constants.SentryDsn;
          if (isStable) {
            let SentryStaffDsn = SentryDsn;
            if (obj3.isMetaQuest()) {
              closure_12 = 1;
              let closure_13 = 1;
              SentryStaffDsn = SentryDsn;
            }
            const obj3 = callback(closure_3[18]);
          } else {
            closure_12 = 1;
            SentryStaffDsn = constants.SentryAlphaBetaDsn;
          }
          if (arg0) {
            SentryStaffDsn = constants.SentryStaffDsn;
            closure_12 = 1;
          }
          function replayPendingCrashReportIfNeeded() {
            const lastCrashReport = callback(closure_3[13]).getLastCrashReport();
            const obj = callback(closure_3[13]);
            lastCrashReport.then((arg0) => {
              if (null != arg0) {
                const obj = { crash_event_source: "startup_reconcile" };
                callback(arg0, obj);
              }
            }).catch((arg0) => {
              closure_10.warn("Failed to replay pending crash report", arg0);
            });
          }();
          const obj17 = callback(closure_3[16]);
          obj = {};
          const obj4 = callback(closure_3[4]);
          let str2 = "ios";
          if (obj6.isAndroid()) {
            str2 = "android";
          }
          obj.tunnel = `/error-reporting-proxy/${str2}`;
          obj.autoInitializeNativeSdk = false;
          obj.beforeSend = closure_17;
          obj.dist = "6051";
          obj.dsn = SentryStaffDsn;
          obj.environment = ReleaseChannel;
          obj.tracesSampleRate = 0;
          obj.sampleRate = 1;
          obj.ignoreErrors = closure_11;
          obj.release = "discord_android@340.3.0-2+340203";
          const items = [closure_7];
          obj.tracePropagationTargets = items;
          const items1 = [closure_8, , ];
          const obj6 = callback(closure_3[16]);
          items1[1] = callback(closure_3[4]).featureFlagsIntegration();
          const obj7 = callback(closure_3[4]);
          obj1 = {
            shouldCreateSpanForRequest(arg0) {
                  return !closure_9.some(arg0.match);
                }
          };
          items1[2] = callback(closure_3[4]).reactNativeTracingIntegration(obj1);
          obj.integrations = items1;
          obj.beforeBreadcrumb = function beforeBreadcrumb(data) {
            if (null == data.data) {
              data.data = {};
            }
            const currentMemoryUsageKB = callback(closure_3[19]).getCurrentMemoryUsageKB();
            if (null != currentMemoryUsageKB) {
              data.data.client_performance_memory = currentMemoryUsageKB;
            }
            const obj = callback(closure_3[19]);
            const currentCPUUsagePercent = callback(closure_3[19]).getCurrentCPUUsagePercent();
            if (null != currentCPUUsagePercent) {
              data.data.client_performance_cpu = currentCPUUsagePercent;
            }
            return data;
          };
          obj4.init(obj);
          const obj8 = callback(closure_3[4]);
          callback(closure_3[4]).setTag("buildNumber", "6051");
          const obj10 = callback(closure_3[4]);
          callback(closure_3[4]).setTag("appVersion", constants.Version);
          const obj11 = callback(closure_3[4]);
          const _HermesInternal = HermesInternal;
          callback(closure_3[4]).setTag("design_id", "" + callback(closure_3[20]).DesignIds.DESIGN_TABS_IA);
          const obj12 = callback(closure_3[4]);
          const obj13 = callback(closure_3[4]);
          obj13.setTag("newArchEnabled", callback(closure_3[21]).isFabric());
          const obj14 = callback(closure_3[21]);
          callback(closure_3[4]).setTag("isBridgeless", callback(closure_3[21]).isBridgeless);
          const obj15 = callback(closure_3[4]);
        }
      }
    });
  }
};
