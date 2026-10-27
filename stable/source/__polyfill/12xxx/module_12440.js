// Module ID: 12440
// Function ID: 12441
// Dependencies: [32, 41, 42, 93, 95, 96, 98, 12380, 12395, 12377, 12441, 12405, 12408, 12409, 12381, 12434, 12392, 12442, 12403, 12386, 12417, 12436]

// Module 12440
import _mod12377 from "module_12377" /* 12377 */;
import _mod12386 from "module_12386" /* 12386 */;
import _mod12392 from "module_12392" /* 12392 */;
import _mod12403 from "module_12403" /* 12403 */;
import _mod12405 from "module_12405" /* 12405 */;
import _mod12408 from "module_12408" /* 12408 */;
import _mod12409 from "module_12409" /* 12409 */;
import _mod12417 from "module_12417" /* 12417 */;
import BaseClient from "BaseClient" /* 12436 */;
import eventFromMessage2 from "eventFromMessage" /* 12441 */;
import _mod12442 from "module_12442" /* 12442 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _get from "_get" /* 96 */;
import _inherits from "_inherits" /* 98 */;
import DEBUG_BUILD from "module_12380" /* 12380 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12395 */;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class ServerRuntimeClient {
  constructor(arg0) {
    let constructResult;
    const self = this;
    _classCallCheck(this, ServerRuntimeClient);
    const obj = _mod12377;
    const result = obj.registerSpanErrorInstrumentation();
    const items = [arg0];
    const obj2 = _getPrototypeOf(ServerRuntimeClient);
    const tmp3 = _getPrototypeOf;
    const tmp4 = _possibleConstructorReturn;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj2, items, tmp3(self).constructor);
    } else {
      constructResult = obj2.apply(self, items);
    }
    return tmp4(self, constructResult);
  }
}
_inherits(ServerRuntimeClient, BaseClient.BaseClient);
const entry = {
  key: "eventFromException",
  value: function eventFromException(arg0, arg1) {
    const obj = eventFromMessage2;
    const result = obj.eventFromUnknownInput(this, this._options.stackParser, arg0, arg1);
    result.level = "error";
    const obj2 = _mod12405;
    return obj2.resolvedSyncPromise(result);
  }
};
let items = [
  entry,
  {
    key: "eventFromMessage",
    value: function eventFromMessage(arg0) {
      let str = arg1;
      if (arg1 === undefined) {
        str = "info";
      }
      const resolvedSyncPromise = _mod12405.resolvedSyncPromise;
      const obj = eventFromMessage2;
      return resolvedSyncPromise(obj.eventFromMessage(this._options.stackParser, arg0, str, arg2, this._options.attachStacktrace));
    }
  },
  {
    key: "captureException",
    value: function captureException(arg0, arg1, arg2) {
      const self = this;
      if (this._options.autoSessionTracking) {
        if (self._sessionFlusher) {
          const obj = _mod12408;
          const isolationScope = obj.getIsolationScope();
          const requestSession = isolationScope.getRequestSession();
          const tmp4 = requestSession && "ok" === requestSession.status;
          if (tmp4) {
            requestSession.status = "errored";
          }
        }
      }
      let fn = _get(_getPrototypeOf(ServerRuntimeClient.prototype), "captureException", self);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0, arg1, arg2];
      return fn(items);
    }
  },
  {
    key: "captureEvent",
    value: function captureEvent(type, arg1, arg2) {
      const self = this;
      if (this._options.autoSessionTracking) {
        if (self._sessionFlusher) {
          const tmp = type.type || "exception";
          if ("exception" === tmp) {
            if (type.exception) {
              if (type.exception.values) {
                if (type.exception.values.length > 0) {
                  const obj = _mod12408;
                  const isolationScope = obj.getIsolationScope();
                  const requestSession = isolationScope.getRequestSession();
                  const tmp5 = requestSession && "ok" === requestSession.status;
                  if (tmp5) {
                    requestSession.status = "errored";
                  }
                }
              }
            }
          }
        }
      }
      let fn = _get(_getPrototypeOf(ServerRuntimeClient.prototype), "captureEvent", self);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [type, arg1, arg2];
      return fn(items);
    }
  },
  {
    key: "close",
    value: function close(arg0) {
      const self = this;
      if (this._sessionFlusher) {
        const _sessionFlusher = self._sessionFlusher;
        _sessionFlusher.close();
      }
      let fn = _get(_getPrototypeOf(ServerRuntimeClient.prototype), "close", self);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0];
      return fn(items);
    }
  },
  {
    key: "initSessionFlusher",
    value: function initSessionFlusher() {
      const self = this;
      const release = this._options.release;
      if (release) {
        const self2 = this;
        const self3 = this;
        const obj = { release, environment: tmp };
        const sessionFlusher = new tmp2(12434).SessionFlusher(self, obj);
        self._sessionFlusher = sessionFlusher;
      } else if (_mod12409.DEBUG_BUILD) {
        const logger = tmp2(12381).logger;
        logger.warn("Cannot initialize an instance of SessionFlusher if no release is provided!");
      }
    }
  },
  {
    key: "captureCheckIn",
    value: function captureCheckIn(checkInId, arg1, arg2) {
      let tmp10;
      let tmp9;
      if ("checkInId" in checkInId) {
        if (checkInId.checkInId) {
          checkInId = checkInId.checkInId;
        }
        const self = this;
        if (this._isEnabled()) {
          const options = self.getOptions();
          const tunnel = options.tunnel;
          const obj4 = { check_in_id: checkInId, monitor_slug: null, status: null, release: null, environment: null };
          ({ monitorSlug: obj2.monitor_slug, status: obj2.status } = checkInId);
          ({ release: obj2.release, environment: obj2.environment } = options);
          if ("duration" in checkInId) {
            obj4.duration = checkInId.duration;
          }
          const tmp5 = arg1;
          if (tmp5) {
            const obj7 = { schedule: null, checkin_margin: null, max_runtime: null, timezone: null, failure_issue_threshold: null, recovery_threshold: null };
            ({ schedule: obj3.schedule, checkinMargin: obj3.checkin_margin, maxRuntime: obj3.max_runtime, timezone: obj3.timezone, failureIssueThreshold: obj3.failure_issue_threshold, recoveryThreshold: obj3.recovery_threshold } = arg1);
            obj4.monitor_config = obj7;
          }
          [tmp9, tmp10] = self._getTraceInfoFromScope(arg2);
          _slicedToArray(self._getTraceInfoFromScope(arg2), 2);
          if (tmp10) {
            const obj8 = { trace: tmp10 };
            obj4.contexts = obj8;
          }
          const createCheckInEnvelope = _mod12442.createCheckInEnvelope;
          const sdkMetadata = self.getSdkMetadata();
          const checkInEnvelope = createCheckInEnvelope(obj4, tmp9, sdkMetadata, tunnel, self.getDsn());
          const tmp11 = require;
          if (_mod12409.DEBUG_BUILD) {
            const logger2 = tmp11(12381).logger;
            logger2.info("Sending checkin:", checkInId.monitorSlug, checkInId.status);
          }
          self.sendEnvelope(checkInEnvelope);
          return checkInId;
        } else {
          const tmp = require;
          if (_mod12409.DEBUG_BUILD) {
            const logger = tmp(12381).logger;
            logger.warn("SDK not enabled, will not capture checkin.");
          }
          return checkInId;
        }
      }
      const obj = _mod12392;
      checkInId = obj.uuid4();
    }
  },
  {
    key: "_captureRequestSession",
    value: function _captureRequestSession() {
      if (this._sessionFlusher) {
        const _sessionFlusher = this._sessionFlusher;
        const result = _sessionFlusher.incrementSessionStatusCount();
      } else {
        const tmp = require;
        if (_mod12409.DEBUG_BUILD) {
          const logger = tmp(12381).logger;
          logger.warn("Discarded request mode session because autoSessionTracking option was disabled");
        }
      }
    }
  },
  {
    key: "_prepareEvent",
    value: function _prepareEvent(platform, arg1, arg2, arg3) {
      let tmp3;
      const self = this;
      if (this._options.platform) {
        platform.platform = platform.platform || self._options.platform;
      }
      if (self._options.runtime) {
        const obj = { runtime: tmp3.runtime || self._options.runtime };
        const merged = Object.assign(platform.contexts);
        tmp3 = platform.contexts || {};
        platform.contexts = obj;
      }
      if (self._options.serverName) {
        platform.server_name = platform.server_name || self._options.serverName;
      }
      let fn = _get(_getPrototypeOf(ServerRuntimeClient.prototype), "_prepareEvent", self);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [platform, arg1, arg2, arg3];
      return fn(items);
    }
  },
  {
    key: "_getTraceInfoFromScope",
    value: function _getTraceInfoFromScope(arg0) {
      const tmp = arg0;
      if (tmp) {
        let spanToTraceContextResult;
        let dynamicSamplingContextFromSpan;
        const obj = _mod12403;
        const _getSpanForScopeResult = obj._getSpanForScope(arg0);
        if (_getSpanForScopeResult) {
          const tmp2Result = _mod12386;
          spanToTraceContextResult = tmp2Result.spanToTraceContext(_getSpanForScopeResult);
        } else {
          const tmp2Result3 = _mod12408;
          spanToTraceContextResult = tmp2Result3.getTraceContextFromScope(arg0);
        }
        const tmp2Result4 = _mod12417;
        if (_getSpanForScopeResult) {
          dynamicSamplingContextFromSpan = tmp2Result4.getDynamicSamplingContextFromSpan(_getSpanForScopeResult);
        } else {
          const self = this;
          dynamicSamplingContextFromSpan = tmp2Result4.getDynamicSamplingContextFromScope(this, arg0);
        }
        const items = [dynamicSamplingContextFromSpan, spanToTraceContextResult];
        return items;
      } else {
        const items1 = [undefined, undefined];
        return items1;
      }
    }
  }
];
const ServerRuntimeClient_export = _createClass(ServerRuntimeClient, items);

export { ServerRuntimeClient_export as ServerRuntimeClient };
