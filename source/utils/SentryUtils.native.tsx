// Module ID: 1184
// Function ID: 13484
// Name: isNonEmptyString
// Dependencies: [27, 3, 1185, 787, 13126, 786, 1554, 2]

// Module 1184 (isNonEmptyString)
import { NativeModules } from "get ActivityIndicator";
import importDefaultResult from "addBreadcrumb";
import _maybeBackfillMissingBreadcrumbsFromTelemetryRing from "_maybeBackfillMissingBreadcrumbsFromTelemetryRing";

function isNonEmptyString(arg0) {
  let tmp = "string" === typeof arg0;
  if (tmp) {
    tmp = arg0.length > 0;
  }
  return tmp;
}
function updateNativeReporter(arg0) {
  let tmp = arg0;
  if (arg0 === undefined) {
    const obj = { staff: false };
    tmp = obj;
  }
  const CrashReportingManager = NativeModules.CrashReportingManager;
  CrashReportingManager.setUser(tmp);
}
importDefaultResult = new importDefaultResult("Sentry");
_maybeBackfillMissingBreadcrumbsFromTelemetryRing = _maybeBackfillMissingBreadcrumbsFromTelemetryRing.initSentry();
let result = require("_maybeBackfillMissingBreadcrumbsFromTelemetryRing").fileFinishedImporting("utils/SentryUtils.native.tsx");

export default {
  setUser(id, username, email, staff) {
    const obj = { id, username, email, staff };
    const currentScope = importAll(787).getCurrentScope();
    currentScope.setUser(obj);
    updateNativeReporter(obj);
  },
  clearUser() {
    const currentScope = importAll(787).getCurrentScope();
    currentScope.setUser(null);
    updateNativeReporter();
  },
  setTags(arg0) {
    const currentScope = importAll(787).getCurrentScope();
    currentScope.setTags(arg0);
  },
  setExtra(arg0) {
    const currentScope = importAll(787).getCurrentScope();
    currentScope.setExtras(arg0);
  },
  captureException(arg0, extra) {
    const _require = arg0;
    const updatedOptions = _require(13126).getUpdatedOptions(extra);
    const obj = _require(13126);
    importAll(787).withScope((setTags) => {
      if (null != closure_1) {
        if (null != closure_1.tags) {
          setTags.setTags(closure_1.tags);
        }
        if (null != closure_1.extra) {
          setTags.setExtras(closure_1.extra);
        }
      }
      outer1_2(outer1_3[3]).captureException(closure_0);
    });
  },
  captureCrash(error, extra) {
    const _require = error;
    const updatedOptions = _require(13126).getUpdatedOptions(extra);
    let tags;
    if (null != updatedOptions) {
      tags = updatedOptions.tags;
    }
    if (null != tags) {
      let tags1;
      if (null != updatedOptions) {
        tags1 = updatedOptions.tags;
      }
    }
    const dependencyMap = Object.assign({ crash: "true" }, {});
    let obj = _require(13126);
    updatedOptions(787).withScope((setExtras) => {
      let tmp = null != updatedOptions;
      if (tmp) {
        tmp = null != updatedOptions.extra;
      }
      if (tmp) {
        setExtras.setExtras(updatedOptions.extra);
      }
      setExtras.setTags(table);
      setExtras.setLevel("fatal");
      setExtras.addEventProcessor((exception) => {
        exception = exception.exception;
        let first;
        if (null != exception) {
          const values = exception.values;
          if (null != values) {
            first = values[0];
          }
        }
        if (null != first) {
          const obj = {};
          const merged = Object.assign(first.mechanism);
          obj["handled"] = false;
          first.mechanism = obj;
        }
        return exception;
      });
      let closure_1 = updatedOptions(table[3]).captureException(closure_0);
    });
    return importDefault;
  },
  captureMessage(arg0, extra) {
    const _require = arg0;
    const updatedOptions = _require(13126).getUpdatedOptions(extra);
    const obj = _require(13126);
    importAll(787).withScope((setExtras) => {
      let tmp = null != closure_1;
      if (tmp) {
        tmp = null != closure_1.extra;
      }
      if (tmp) {
        setExtras.setExtras(closure_1.extra);
      }
      let tmp5 = null != closure_1;
      if (tmp5) {
        tmp5 = null != closure_1.tags;
      }
      if (tmp5) {
        setExtras.setTags(closure_1.tags);
      }
      outer1_2(outer1_3[3]).captureMessage(closure_0);
    });
  },
  addFeatureFlag(arg0, arg1) {
    let client;
    if (null != importAll(787).getClient) {
      client = importAll(787).getClient();
      const obj = importAll(787);
    }
    let integrationByName;
    if (null != client) {
      if (null != client.getIntegrationByName) {
        integrationByName = client.getIntegrationByName("FeatureFlags");
      }
    }
    if (!tmp5) {
      integrationByName.addFeatureFlag(arg0, arg1);
    }
  },
  addBreadcrumb(arg0) {
    importDefaultResult.verbose("Breadcrumb", arg0);
    importDefault(786)(arg0);
  },
  profiledRootComponent(displayName) {
    let withProfilerResult = displayName;
    if ("canaryRelease" === obj.getConstants().ReleaseChannel) {
      withProfilerResult = importAll(787).withProfiler(displayName, { includeRender: true, includeUpdates: true });
      const obj2 = importAll(787);
    }
    return withProfilerResult;
  },
  crash() {
    const CrashReportingManager = NativeModules.CrashReportingManager;
    CrashReportingManager.crash();
  },
  markCrashHandled(arg0) {
    if (0 !== arg0.length) {
      if (null != NativeModules.CrashReportingManager.markCrashHandled) {
        const CrashReportingManager = NativeModules.CrashReportingManager;
        CrashReportingManager.markCrashHandled(arg0);
      }
    }
  },
  getLastCrashReport(arg0) {
    return new Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      const CrashReportingManager = outer1_4.CrashReportingManager;
      let getLastCrashReport;
      if (null != CrashReportingManager) {
        getLastCrashReport = CrashReportingManager.getLastCrashReport;
      }
      if (null != getLastCrashReport) {
        const lastCrashReport = CrashReportingManager.getLastCrashReport((timestamp) => {
          let tmp2 = null;
          if (null != timestamp) {
            let result;
            if ("number" === typeof timestamp.timestamp) {
              const _Number = Number;
              if (!Number.isNaN(timestamp.timestamp)) {
                result = timestamp.timestamp / 1000;
              }
            }
            let str2 = timestamp.level;
            if (null == str2) {
              let str3 = "error";
              if (timestamp.is_native) {
                str3 = "fatal";
              }
              str2 = str3;
            }
            let formatted;
            if (null != str2) {
              formatted = str2.toLowerCase();
            }
            let obj = { type: undefined, event_id: timestamp.event_id, timestamp: result, level: formatted };
            let tmp7;
            if (outer2_6(timestamp.origin)) {
              obj = { "event.origin": timestamp.origin };
              tmp7 = obj;
            }
            obj.tags = tmp7;
            obj = {};
            if (outer2_6(timestamp.error_message)) {
              ({ error_message: obj.message, error_message: obj3.persisted_error_message } = timestamp);
            }
            if (outer2_6(timestamp.error_stack)) {
              obj.persisted_error_stack = timestamp.error_stack;
            }
            if (timestamp.is_native) {
              if (outer2_6(timestamp.exit_reason)) {
                obj.native_exit_reason = timestamp.exit_reason;
              }
              if (outer2_6(timestamp.exit_description)) {
                obj.native_exit_description = timestamp.exit_description;
              }
              if (outer2_6(timestamp.tombstone)) {
                obj.native_tombstone = timestamp.tombstone;
              }
              if (outer2_6(timestamp.tombstone_cause)) {
                obj.native_tombstone_cause = timestamp.tombstone_cause;
              }
              if (outer2_6(timestamp.tombstone_hash)) {
                obj.native_tombstone_hash = timestamp.tombstone_hash;
              }
              if (outer2_6(timestamp.tombstone_group_by)) {
                obj.native_tombstone_group_by = timestamp.tombstone_group_by;
              }
              if (outer2_6(timestamp.tombstone_origin)) {
                obj.native_tombstone_origin = timestamp.tombstone_origin;
              }
            }
            let str4 = "false";
            if (timestamp.is_native) {
              str4 = "true";
            }
            obj.native_is_native = str4;
            const _Object = Object;
            obj.extra = Object.assign({}, obj.extra, obj);
            tmp2 = obj;
          }
          closure_0(tmp2);
        });
      } else {
        arg0(null);
      }
    });
  }
};
