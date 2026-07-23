// Module ID: 1185
// Function ID: 13506
// Name: _maybeBackfillMissingBreadcrumbsFromTelemetryRing
// Dependencies: [5, 27, 653, 482, 787, 3, 1186, 1198, 675, 13124, 6837, 6842, 13125, 1184, 1554, 6838, 477, 4110, 1553, 6917, 650, 3994, 2]
// Exports: initSentry

// Module 1185 (_maybeBackfillMissingBreadcrumbsFromTelemetryRing)
import timestamp from "timestamp";
import { NativeModules } from "get ActivityIndicator";
import ME from "ME";
import { PRIMARY_DOMAIN } from "sum";
import addBreadcrumb from "addBreadcrumb";
import importDefaultResult from "sum";
import IGNORE_ANALYTICS_BREADCRUMB_EVENTS from "IGNORE_ANALYTICS_BREADCRUMB_EVENTS";

let Endpoints;
let closure_6;
const require = arg1;
async function _maybeBackfillMissingBreadcrumbsFromTelemetryRing(arg0, arg1) {
  const breadcrumbs = arg0.breadcrumbs;
  if (!Array.isArray(breadcrumbs)) {
    const SentryTelemetry = outer2_0(outer2_3[6]).SentryTelemetry;
    const items = [SentryTelemetry.snapshotForBreadcrumbs(), ];
    const promise = new Promise((arg0, arg1) => {
      let closure_0 = arg1;
      return setTimeout(() => {
        const error = new Error("TelemetryRing breadcrumb timeout");
        return callback(error);
      }, 200);
    });
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
      arg0.breadcrumbs = entries.map((message) => {
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
  let closure_0 = event_id;
  let closure_1 = originalException;
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
    let tmp10 = c12;
    if ("error" === event_id.level) {
      tmp10 = c13;
    }
    if (!c14) {
      trackCrash(event_id, originalException, false);
    }
    return callback(async () => {
      const ZoomedInTelemetry = callback(outer2_3[6]).ZoomedInTelemetry;
      const items = [ZoomedInTelemetry.flushNow(), new Promise((arg0) => setTimeout(arg0, 200))];
      yield Promise.race(items);
      yield (function maybeBackfillMissingBreadcrumbsFromTelemetryRing(outer1_0) {
        return outer3_16(...arguments);
      })(outer1_0);
      outer2_20(outer1_0, outer1_1);
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
      prop = tags["event.origin"];
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
  if (!c14) {
    if (!sample(num)) {
      markCrashHandled(event.event_id);
    }
  }
  let obj1 = require(1198) /* shouldNavigate */;
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
  const track = importDefault(675).track;
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
  const AppCrashedReasons = require(13124) /* set */.AppCrashedReasons;
  const tmp16 = importDefault(675);
  const tmp27 = tmp4 ? AppCrashedReasons.UNHANDLED_NATIVE_ERROR : AppCrashedReasons.UNHANDLED_JS_ERROR;
  obj1 = { name: require(6842) /* set */.MetricEvents.APP_CRASHED };
  const items = ["reason:" + tmp27, ];
  let str7 = "unknown";
  if (null != level) {
    str7 = level;
  }
  items[1] = "level:" + str7;
  obj1.tags = items;
  importDefault(6837).increment(obj1, true);
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
    importDefault(1184).markCrashHandled(arg0);
    const obj = importDefault(1184);
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
({ AnalyticEvents: closure_6, Endpoints } = ME);
addBreadcrumb = addBreadcrumb.reactNavigationIntegration();
const regExp = new RegExp("/v" + window.GLOBAL_ENV.API_VERSION + Endpoints.METRICS, "g");
let items = [regExp, , ];
const regExp1 = new RegExp("/v" + window.GLOBAL_ENV.API_VERSION + Endpoints.METRICS_V2, "g");
items[1] = regExp1;
const regExp2 = new RegExp("/v" + window.GLOBAL_ENV.API_VERSION + Endpoints.TRACK, "g");
items[2] = regExp2;
importDefaultResult = new importDefaultResult("Sentry");
let closure_11 = ["The operation couldn\u2019t be completed. (com.apple.CallKit.error.requesttransaction", "Request has been terminated", "couldn't execute statement: database is disabled", "couldn't delete database: database is currently open", "database is no longer open"];
let c12 = 0.05;
let c13 = 0.005;
let c14 = false;
let closure_15 = IGNORE_ANALYTICS_BREADCRUMB_EVENTS.filterThrottle({ maxBudgetMinute: 1, maxBudgetHour: 15 });
const result1 = require("ME").fileFinishedImporting("modules/errors/native/SentryInitUtils.tsx");

export const routingInstrumentation = addBreadcrumb;
export const initSentry = function initSentry() {
  const CrashReportingManager = NativeModules.CrashReportingManager;
  if (null != CrashReportingManager) {
    const isUserStaffForCrashReporting = CrashReportingManager.getIsUserStaffForCrashReporting((arg0) => {
      const outer1_14 = arg0;
      let obj = outer1_2(outer1_3[14]);
      const constants = obj.getConstants();
      const ReleaseChannel = constants.ReleaseChannel;
      if (-1 === ReleaseChannel.indexOf("debug")) {
        if (-1 === ReleaseChannel.indexOf("developer")) {
          const isStable = outer1_0(outer1_3[15]).isStable;
          obj = { releaseChannel: ReleaseChannel, isProductionChannel: isStable };
          outer1_10.verbose("Initialize", obj);
          if (obj17.isAndroid()) {
            if (isStable) {
              let obj1 = outer1_0(outer1_3[17]);
              const device = obj1.getDevice();
            }
          }
          let outer1_12 = 0.05;
          const SentryDsn = constants.SentryDsn;
          if (isStable) {
            let SentryStaffDsn = SentryDsn;
            if (obj3.isMetaQuest()) {
              outer1_12 = 1;
              const outer1_13 = 1;
              SentryStaffDsn = SentryDsn;
            }
            obj3 = outer1_0(outer1_3[18]);
          } else {
            outer1_12 = 1;
            SentryStaffDsn = constants.SentryAlphaBetaDsn;
          }
          if (arg0) {
            SentryStaffDsn = constants.SentryStaffDsn;
            outer1_12 = 1;
          }
          (function replayPendingCrashReportIfNeeded() {
            const lastCrashReport = outer2_1(outer2_3[13]).getLastCrashReport();
            let obj = outer2_1(outer2_3[13]);
            lastCrashReport.then((arg0) => {
              if (null != arg0) {
                const obj = { crash_event_source: "startup_reconcile" };
                outer3_20(arg0, obj);
              }
            }).catch((arg0) => {
              outer3_10.warn("Failed to replay pending crash report", arg0);
            });
          })();
          obj17 = outer1_0(outer1_3[16]);
          obj = {};
          const obj4 = outer1_0(outer1_3[4]);
          let str2 = "ios";
          if (obj6.isAndroid()) {
            str2 = "android";
          }
          obj.tunnel = `/error-reporting-proxy/${str2}`;
          obj.autoInitializeNativeSdk = false;
          obj.beforeSend = outer1_17;
          obj.dist = "6057";
          obj.dsn = SentryStaffDsn;
          obj.environment = ReleaseChannel;
          obj.tracesSampleRate = 0;
          obj.sampleRate = 1;
          obj.ignoreErrors = outer1_11;
          obj.release = "discord_android@340.4.0-2+340204";
          const items = [outer1_7];
          obj.tracePropagationTargets = items;
          const items1 = [outer1_8, , ];
          obj6 = outer1_0(outer1_3[16]);
          items1[1] = outer1_0(outer1_3[4]).featureFlagsIntegration();
          const obj7 = outer1_0(outer1_3[4]);
          obj1 = {
            shouldCreateSpanForRequest(arg0) {
                  return !outer2_9.some(arg0.match);
                }
          };
          items1[2] = outer1_0(outer1_3[4]).reactNativeTracingIntegration(obj1);
          obj.integrations = items1;
          obj.beforeBreadcrumb = function beforeBreadcrumb(data) {
            if (null == data.data) {
              data.data = {};
            }
            const currentMemoryUsageKB = outer2_1(outer2_3[19]).getCurrentMemoryUsageKB();
            if (null != currentMemoryUsageKB) {
              data.data.client_performance_memory = currentMemoryUsageKB;
            }
            const obj = outer2_1(outer2_3[19]);
            const currentCPUUsagePercent = outer2_1(outer2_3[19]).getCurrentCPUUsagePercent();
            if (null != currentCPUUsagePercent) {
              data.data.client_performance_cpu = currentCPUUsagePercent;
            }
            return data;
          };
          obj4.init(obj);
          const obj8 = outer1_0(outer1_3[4]);
          outer1_0(outer1_3[4]).setTag("buildNumber", "6057");
          const obj10 = outer1_0(outer1_3[4]);
          outer1_0(outer1_3[4]).setTag("appVersion", constants.Version);
          const obj11 = outer1_0(outer1_3[4]);
          const _HermesInternal = HermesInternal;
          outer1_0(outer1_3[4]).setTag("design_id", "" + outer1_0(outer1_3[20]).DesignIds.DESIGN_TABS_IA);
          const obj12 = outer1_0(outer1_3[4]);
          const obj13 = outer1_0(outer1_3[4]);
          obj13.setTag("newArchEnabled", outer1_0(outer1_3[21]).isFabric());
          const obj14 = outer1_0(outer1_3[21]);
          outer1_0(outer1_3[4]).setTag("isBridgeless", outer1_0(outer1_3[21]).isBridgeless);
          const obj15 = outer1_0(outer1_3[4]);
        }
      }
    });
  }
};
