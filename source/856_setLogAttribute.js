// Module ID: 856
// Function ID: 9607
// Name: setLogAttribute
// Dependencies: []
// Exports: _INTERNAL_captureLog

// Module 856 (setLogAttribute)
function setLogAttribute(arg0, arg1, arg2) {
  const tmp = arguments.length > 3 && undefined !== arguments[3];
  let tmp2 = !tmp;
  if (tmp) {
    tmp2 = arguments[3];
  }
  let tmp3 = !arg2;
  if (!tmp3) {
    tmp3 = arg0[arg1] && !tmp2;
    const tmp4 = arg0[arg1] && !tmp2;
  }
  if (!tmp3) {
    arg0[arg1] = arg2;
  }
}
function _INTERNAL_captureSerializedLog(closure_0) {
  const obj = _getBufferMap();
  const arr = _INTERNAL_getLogBuffer(closure_0);
  if (undefined === arr) {
    const items = [arg1];
    const result = obj.set(closure_0, items);
  } else if (arr.length >= 100) {
    _INTERNAL_flushLogsBuffer(closure_0, arr);
    const items1 = [arg1];
    const result1 = obj.set(closure_0, items1);
  } else {
    const items2 = [];
    const items3 = [arg1];
    const result2 = obj.set(closure_0, items2.concat(callback2(arr), items3));
  }
}
function _INTERNAL_flushLogsBuffer(closure_0, arr) {
  let _metadata;
  let tunnel;
  let items = arr;
  if (null == arr) {
    items = _INTERNAL_getLogBuffer(closure_0);
  }
  if (null == items) {
    items = [];
  }
  if (0 !== items.length) {
    const options = closure_0.getOptions();
    const obj = require(dependencyMap[12]);
    ({ _metadata, tunnel } = options);
    const logEnvelope = obj.createLogEnvelope(items, _metadata, tunnel, closure_0.getDsn());
    const result = _getBufferMap().set(closure_0, []);
    closure_0.emit("flushLogs");
    closure_0.sendEnvelope(logEnvelope);
    const obj2 = _getBufferMap();
  }
}
function _INTERNAL_getLogBuffer(closure_0) {
  return _getBufferMap().get(closure_0);
}
function _getBufferMap() {
  return require(dependencyMap[13]).getGlobalSingleton("clientToLogBufferMap", () => {
    const weakMap = new WeakMap();
    return weakMap;
  });
}
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const _INTERNAL_captureLog = function _INTERNAL_captureLog(attributes, arg1) {
  let __sentry_template_string__;
  let __sentry_template_values__;
  let email;
  let environment;
  let id;
  let level;
  let message2;
  let release;
  let username;
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let currentScope = arguments[1];
    }
    if (arguments.length > 2) {
      if (undefined !== arguments[2]) {
        let tmp = arguments[2];
      }
      let client;
      if (null != currentScope) {
        client = currentScope.getClient();
      }
      if (null == client) {
        client = require(dependencyMap[2]).getClient();
        const obj3 = require(dependencyMap[2]);
      }
      if (client) {
        const options = client.getOptions();
        const enableLogs = options.enableLogs;
        let tmp12 = undefined !== enableLogs;
        ({ release, environment } = options);
        if (tmp12) {
          tmp12 = enableLogs;
        }
        const beforeSendLog = options.beforeSendLog;
        const require = beforeSendLog;
        if (tmp12) {
          let tmp13Result = tmp13(tmp14[5]);
          const tmp19 = callback(tmp13Result._getTraceInfoFromScope(client, currentScope), 2)[1];
          const _Object = Object;
          const merged = Object.assign({}, attributes.attributes);
          const dependencyMap = merged;
          tmp13Result = tmp13(tmp14[6]);
          const combinedScopeData = tmp13Result.getCombinedScopeData(tmp13(tmp14[2]).getIsolationScope(), currentScope);
          ({ id, email, username } = combinedScopeData.user);
          attributes = combinedScopeData.attributes;
          if (undefined === attributes) {
            attributes = {};
          }
          setLogAttribute(merged, "user.id", id, false);
          setLogAttribute(merged, "user.email", email, false);
          setLogAttribute(merged, "user.name", username, false);
          setLogAttribute(merged, "sentry.release", release);
          setLogAttribute(merged, "sentry.environment", environment);
          const sdkMetadata = client.getSdkMetadata();
          let sdk;
          if (null != sdkMetadata) {
            sdk = sdkMetadata.sdk;
          }
          if (null == sdk) {
            sdk = {};
          }
          setLogAttribute(merged, "sentry.sdk.name", sdk.name);
          setLogAttribute(merged, "sentry.sdk.version", sdk.version);
          const integrationByName = client.getIntegrationByName("Replay");
          let replayId;
          if (null != integrationByName) {
            replayId = integrationByName.getReplayId(true);
          }
          setLogAttribute(merged, "sentry.replay_id", replayId);
          if (replayId) {
            let recordingMode;
            if (null != integrationByName) {
              recordingMode = integrationByName.getRecordingMode();
            }
            replayId = "buffer" === recordingMode;
          }
          if (replayId) {
            setLogAttribute(merged, "sentry._internal.replay_is_buffering", true);
          }
          const message = attributes.message;
          const tmp13Result1 = tmp13(tmp14[2]);
          if (obj10.isParameterizedString(message)) {
            ({ __sentry_template_values__, __sentry_template_string__ } = message);
            if (undefined === __sentry_template_values__) {
              __sentry_template_values__ = [];
            }
            if (tmp47) {
              merged.sentry.message.template = __sentry_template_string__;
            }
            const item = __sentry_template_values__.forEach((arg0, arg1) => {
              merged["sentry.message.parameter." + arg1] = arg0;
            });
            const tmp47 = null != __sentry_template_values__ && __sentry_template_values__.length;
          }
          const obj10 = require(dependencyMap[7]);
          const _getSpanForScopeResult = require(dependencyMap[8])._getSpanForScope(currentScope);
          let spanId;
          if (null != _getSpanForScopeResult) {
            spanId = _getSpanForScopeResult.spanContext().spanId;
          }
          setLogAttribute(merged, "sentry.trace.parent_span_id", spanId);
          const _Object2 = Object;
          let obj = { attributes: merged };
          let merged1 = Object.assign({}, attributes, obj);
          const callback = merged1;
          client.emit("beforeCaptureLog", merged1);
          if (beforeSendLog) {
            merged1 = require(dependencyMap[4]).consoleSandbox(() => beforeSendLog(merged1));
            const obj14 = require(dependencyMap[4]);
          }
          if (merged1) {
            ({ level, attributes, message: message2 } = merged1);
            if (undefined === attributes) {
              attributes = {};
            }
            let severityNumber = merged1.severityNumber;
            obj = { timestamp: require(dependencyMap[9]).timestampInSeconds(), level, body: message2 };
            let trace_id;
            if (null != tmp19) {
              trace_id = tmp19.trace_id;
            }
            obj.trace_id = trace_id;
            if (null == severityNumber) {
              severityNumber = require(dependencyMap[10]).SEVERITY_TEXT_TO_SEVERITY_NUMBER[level];
            }
            obj.severity_number = severityNumber;
            const _Object3 = Object;
            const obj16 = require(dependencyMap[9]);
            const obj17 = require(dependencyMap[11]);
            const serializeAttributesResult = require(dependencyMap[11]).serializeAttributes(attributes);
            obj.attributes = Object.assign({}, serializeAttributesResult, require(dependencyMap[11]).serializeAttributes(attributes, true));
            tmp(client, obj);
            client.emit("afterCaptureLog", merged1);
            const obj18 = require(dependencyMap[11]);
          } else {
            client.recordDroppedEvent("before_send", "log_item", 1);
            if (require(dependencyMap[3]).DEBUG_BUILD) {
              const debug3 = require(dependencyMap[4]).debug;
              debug3.warn("beforeSendLog returned null, log will not be captured.");
            }
          }
          const obj11 = require(dependencyMap[8]);
          const tmp51 = setLogAttribute;
        } else if (tmp13(tmp14[3]).DEBUG_BUILD) {
          const debug2 = require(dependencyMap[4]).debug;
          debug2.warn("logging option not enabled, log will not be captured.");
        }
      } else if (require(dependencyMap[3]).DEBUG_BUILD) {
        const debug = require(dependencyMap[4]).debug;
        debug.warn("No client available to capture log.");
      }
    }
    tmp = _INTERNAL_captureSerializedLog;
  }
  obj = require(dependencyMap[2]);
  currentScope = obj.getCurrentScope();
};
export { _INTERNAL_captureSerializedLog };
export { _INTERNAL_flushLogsBuffer };
export { _INTERNAL_getLogBuffer };
