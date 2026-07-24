// Module ID: 7295
// Function ID: 58883
// Name: _isNativeReflectConstruct
// Dependencies: [57, 6, 7, 15, 17, 102, 18, 7235, 7250, 7232, 7296, 7260, 7263, 7264, 7236, 7289, 7247, 7297, 7258, 7241, 7272, 7291]

// Module 7295 (_isNativeReflectConstruct)
import _slicedToArray from "_slicedToArray";
import _classCallCheck from "_inherits";
import _defineProperties from "module_7235";
import "SessionFlusher";
import _getPrototypeOf from "createCheckInEnvelope";
import _get from "_get";
import _inherits from "_getSpanForScope";
import module_7235 from "module_7235";
import dateTimestampInSeconds from "dateTimestampInSeconds";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _superPropGet(arg0, arg1, arg2, arg3) {
  let closure_0 = arg2;
  let prototype = arg0;
  if (1) {
    prototype = arg0.prototype;
  }
  const tmpResult = _get(_getPrototypeOf(prototype), arg1, arg2);
  const dependencyMap = tmpResult;
  let fn = tmpResult;
  if (2) {
    fn = tmpResult;
    if ("function" === typeof tmpResult) {
      fn = (arg0) => tmpResult.apply(closure_0, arg0);
    }
  }
  return fn;
}

export const ServerRuntimeClient = ((BaseClient) => {
  class ServerRuntimeClient {
    constructor(arg0) {
      self = this;
      tmp = outer1_3(this, ServerRuntimeClient);
      obj = ServerRuntimeClient(outer1_1[9]);
      result = obj.registerSpanErrorInstrumentation();
      items = [];
      items[0] = BaseClient;
      obj2 = outer1_6(ServerRuntimeClient);
      tmp3 = outer1_5;
      if (outer1_9()) {
        tmp5 = globalThis;
        _Reflect = Reflect;
        tmp6 = outer1_6;
        constructResult = Reflect.construct(obj2, items, outer1_6(self).constructor);
      } else {
        constructResult = obj2.apply(self, items);
      }
      return tmp3(self, constructResult);
    }
  }
  _inherits(ServerRuntimeClient, BaseClient);
  let obj = {
    key: "eventFromException",
    value: function eventFromException(arg0, arg1) {
      const result = ServerRuntimeClient(outer1_1[10]).eventFromUnknownInput(this, this._options.stackParser, arg0, arg1);
      result.level = "error";
      const obj = ServerRuntimeClient(outer1_1[10]);
      return ServerRuntimeClient(outer1_1[11]).resolvedSyncPromise(result);
    }
  };
  let items = [obj, , , , , , , , , ];
  obj = {
    key: "eventFromMessage",
    value: function eventFromMessage(arg0) {
      const self = this;
      let str = "info";
      if (arguments.length > 1) {
        str = "info";
        if (undefined !== arguments[1]) {
          str = arguments[1];
        }
      }
      let tmp;
      if (arguments.length > 2) {
        tmp = arguments[2];
      }
      const obj = ServerRuntimeClient(outer1_1[11]);
      return obj.resolvedSyncPromise(ServerRuntimeClient(outer1_1[10]).eventFromMessage(self._options.stackParser, arg0, str, tmp, self._options.attachStacktrace));
    }
  };
  items[1] = obj;
  obj = {
    key: "captureException",
    value: function captureException(arg0, arg1, arg2) {
      const self = this;
      if (this._options.autoSessionTracking) {
        if (self._sessionFlusher) {
          const isolationScope = ServerRuntimeClient(outer1_1[12]).getIsolationScope();
          const requestSession = isolationScope.getRequestSession();
          let tmp4 = requestSession;
          if (requestSession) {
            tmp4 = "ok" === requestSession.status;
          }
          if (tmp4) {
            requestSession.status = "errored";
          }
          const obj = ServerRuntimeClient(outer1_1[12]);
        }
      }
      const items = [arg0, arg1, arg2];
      return outer1_10(ServerRuntimeClient, "captureException", self, 3)(items);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "captureEvent",
    value: function captureEvent(type) {
      const self = this;
      if (this._options.autoSessionTracking) {
        if (self._sessionFlusher) {
          if ("exception" === tmp) {
            if (type.exception) {
              if (type.exception.values) {
                if (type.exception.values.length > 0) {
                  const isolationScope = ServerRuntimeClient(outer1_1[12]).getIsolationScope();
                  const requestSession = isolationScope.getRequestSession();
                  let tmp5 = requestSession;
                  if (requestSession) {
                    tmp5 = "ok" === requestSession.status;
                  }
                  if (tmp5) {
                    requestSession.status = "errored";
                  }
                  const obj = ServerRuntimeClient(outer1_1[12]);
                }
              }
            }
          }
          tmp = type.type || "exception";
        }
      }
      const items = [type, arg1, arg2];
      return outer1_10(ServerRuntimeClient, "captureEvent", self, 3)(items);
    }
  };
  items[4] = {
    key: "close",
    value: function close(arg0) {
      const self = this;
      if (this._sessionFlusher) {
        const _sessionFlusher = self._sessionFlusher;
        _sessionFlusher.close();
      }
      const items = [arg0];
      return outer1_10(ServerRuntimeClient, "close", self, 3)(items);
    }
  };
  items[5] = {
    key: "initSessionFlusher",
    value: function initSessionFlusher() {
      const self = this;
      const release = this._options.release;
      if (release) {
        const SessionFlusher = tmp2(tmp3[15]).SessionFlusher;
        const obj = { release, environment: tmp };
        const prototype = SessionFlusher.prototype;
        const sessionFlusher = new SessionFlusher(self, obj);
        self._sessionFlusher = sessionFlusher;
      } else if (tmp2(tmp3[13]).DEBUG_BUILD) {
        const logger = ServerRuntimeClient(outer1_1[14]).logger;
        logger.warn("Cannot initialize an instance of SessionFlusher if no release is provided!");
      }
    }
  };
  items[6] = {
    key: "captureCheckIn",
    value: function captureCheckIn(checkInId) {
      const self = this;
      if ("checkInId" in checkInId) {
        if (checkInId.checkInId) {
          checkInId = checkInId.checkInId;
        }
        if (self._isEnabled()) {
          const options = self.getOptions();
          const tunnel = options.tunnel;
          let obj = { check_in_id: checkInId };
          ({ monitorSlug: obj2.monitor_slug, status: obj2.status } = checkInId);
          ({ release: obj2.release, environment: obj2.environment } = options);
          if ("duration" in checkInId) {
            obj.duration = checkInId.duration;
          }
          if (arg1) {
            obj = {};
            ({ schedule: obj3.schedule, checkinMargin: obj3.checkin_margin, maxRuntime: obj3.max_runtime, timezone: obj3.timezone, failureIssueThreshold: obj3.failure_issue_threshold, recoveryThreshold: obj3.recovery_threshold } = arg1);
            obj.monitor_config = obj;
          }
          const tmp9 = outer1_2(self._getTraceInfoFromScope(arg2), 2);
          const first = tmp9[0];
          if (tmp9[1]) {
            const obj1 = { trace: tmp11 };
            obj.contexts = obj1;
          }
          const obj5 = ServerRuntimeClient(outer1_1[17]);
          const sdkMetadata = self.getSdkMetadata();
          const checkInEnvelope = obj5.createCheckInEnvelope(obj, first, sdkMetadata, tunnel, self.getDsn());
          if (ServerRuntimeClient(outer1_1[13]).DEBUG_BUILD) {
            const logger2 = ServerRuntimeClient(outer1_1[14]).logger;
            logger2.info("Sending checkin:", checkInId.monitorSlug, checkInId.status);
          }
          self.sendEnvelope(checkInEnvelope);
          return checkInId;
        } else {
          if (ServerRuntimeClient(outer1_1[13]).DEBUG_BUILD) {
            const logger = ServerRuntimeClient(outer1_1[14]).logger;
            logger.warn("SDK not enabled, will not capture checkin.");
          }
          return checkInId;
        }
      }
      obj = ServerRuntimeClient(outer1_1[16]);
      checkInId = obj.uuid4();
    }
  };
  items[7] = {
    key: "_captureRequestSession",
    value: function _captureRequestSession() {
      if (this._sessionFlusher) {
        const _sessionFlusher = this._sessionFlusher;
        const result = _sessionFlusher.incrementSessionStatusCount();
      } else if (ServerRuntimeClient(outer1_1[13]).DEBUG_BUILD) {
        const logger = ServerRuntimeClient(outer1_1[14]).logger;
        logger.warn("Discarded request mode session because autoSessionTracking option was disabled");
      }
    }
  };
  items[8] = {
    key: "_prepareEvent",
    value: function _prepareEvent(platform) {
      const self = this;
      if (this._options.platform) {
        platform.platform = platform.platform || self._options.platform;
      }
      if (self._options.runtime) {
        const obj = {};
        let contexts = platform.contexts;
        if (!contexts) {
          contexts = {};
        }
        obj.runtime = contexts.runtime || self._options.runtime;
        platform.contexts = Object.assign({}, platform.contexts, obj);
      }
      if (self._options.serverName) {
        platform.server_name = platform.server_name || self._options.serverName;
      }
      const items = [platform, arg1, arg2, arg3];
      return outer1_10(ServerRuntimeClient, "_prepareEvent", self, 3)(items);
    }
  };
  items[9] = {
    key: "_getTraceInfoFromScope",
    value: function _getTraceInfoFromScope(arg0) {
      if (arg0) {
        const _getSpanForScopeResult = ServerRuntimeClient(outer1_1[18])._getSpanForScope(arg0);
        if (_getSpanForScopeResult) {
          let tmp4Result = tmp4(tmp5[19]);
          let spanToTraceContextResult = tmp4Result.spanToTraceContext(_getSpanForScopeResult);
        } else {
          tmp4Result = tmp4(tmp5[12]);
          spanToTraceContextResult = tmp4Result.getTraceContextFromScope(arg0);
        }
        const obj4 = ServerRuntimeClient(outer1_1[20]);
        if (_getSpanForScopeResult) {
          let dynamicSamplingContextFromSpan = obj4.getDynamicSamplingContextFromSpan(_getSpanForScopeResult);
        } else {
          const self = this;
          dynamicSamplingContextFromSpan = obj4.getDynamicSamplingContextFromScope(this, arg0);
        }
        const items = [dynamicSamplingContextFromSpan, spanToTraceContextResult];
        return items;
      } else {
        const items1 = [undefined, undefined];
        return items1;
      }
    }
  };
  return _defineProperties(ServerRuntimeClient, items);
})(require("isErrorEvent").BaseClient);
