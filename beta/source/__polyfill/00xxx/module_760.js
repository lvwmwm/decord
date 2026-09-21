// Module ID: 760
// Function ID: 761
// Dependencies: [32, 41, 42, 93, 95, 96, 98, 687, 761, 762, 742, 699, 692, 693, 750, 763, 745, 717]

// Module 760
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _mod745 from "module_745" /* 745 */;
import _slicedToArray from "module_32" /* 32 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _get from "_get" /* 96 */;
import _inherits from "_inherits" /* 98 */;

const ServerRuntimeClient = require;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
_possibleConstructorReturn;
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
class ServerRuntimeClient {
  constructor(arg0) {
    self = this;
    tmp = closure_3(this, ServerRuntimeClient);
    obj = closure_0(closure_1[7]);
    result = obj.registerSpanErrorInstrumentation();
    obj2 = closure_0(closure_1[8]);
    result1 = obj2.addUserAgentToTransportHeaders(global);
    items = [];
    items[0] = global;
    tmp4 = hasOwnProperty;
    obj3 = hasOwnProperty(ServerRuntimeClient);
    tmp5 = closure_4;
    if (closure_7()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj3, items, tmp4(self).constructor);
    } else {
      constructResult = obj3.apply(self, items);
    }
    tmp5Result = tmp5(self, constructResult);
    result2 = tmp5Result._setUpMetricsProcessing();
    return tmp5Result;
  }
}
_inherits(ServerRuntimeClient, _mod745.Client);
const entry = {
  key: "eventFromException",
  value: function eventFromException(arg0, arg1) {
    const result = ServerRuntimeClient(762).eventFromUnknownInput(this, this._options.stackParser, arg0, arg1);
    result.level = "error";
    const obj = ServerRuntimeClient(762);
    return ServerRuntimeClient(742).resolvedSyncPromise(result);
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
      const obj = ServerRuntimeClient(742);
      return obj.resolvedSyncPromise(ServerRuntimeClient(762).eventFromMessage(this._options.stackParser, arg0, str, arg2, this._options.attachStacktrace));
    }
  },
  {
    key: "captureException",
    value: function captureException(arg0, mechanism, arg2) {
      const isolationScope = ServerRuntimeClient(717).getIsolationScope();
      const requestSession = isolationScope.getScopeData().sdkProcessingMetadata.requestSession;
      if (requestSession) {
        let flag;
        if (mechanism != null) {
          mechanism = mechanism.mechanism;
          if (mechanism != null) {
            flag = mechanism.handled;
          }
        }
        if (flag == null) {
          flag = true;
        }
        if (flag) {
          if ("crashed" !== requestSession.status) {
            requestSession.status = "errored";
          }
        }
        if (!flag) {
          requestSession.status = "crashed";
        }
      }
      const self = this;
      let fn = metroRequire(hasOwnProperty(ServerRuntimeClient.prototype), "captureException", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0, mechanism, arg2];
      return fn(items);
    }
  },
  {
    key: "captureEvent",
    value: function captureEvent(type, mechanism, arg2) {
      type = type.type;
      let tmp = !type;
      if (!type) {
        const exception = type.exception;
        let values;
        if (exception != null) {
          values = exception.values;
        }
        tmp = values;
      }
      if (tmp) {
        tmp = type.exception.values.length > 0;
      }
      if (tmp) {
        const isolationScope = ServerRuntimeClient(717).getIsolationScope();
        const requestSession = isolationScope.getScopeData().sdkProcessingMetadata.requestSession;
        if (requestSession) {
          let flag;
          if (mechanism != null) {
            mechanism = mechanism.mechanism;
            if (mechanism != null) {
              flag = mechanism.handled;
            }
          }
          if (flag == null) {
            flag = true;
          }
          if (flag) {
            if ("crashed" !== requestSession.status) {
              requestSession.status = "errored";
            }
          }
          if (!flag) {
            requestSession.status = "crashed";
          }
        }
        const obj = ServerRuntimeClient(717);
      }
      const self = this;
      let fn = metroRequire(hasOwnProperty(ServerRuntimeClient.prototype), "captureEvent", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [type, mechanism, arg2];
      return fn(items);
    }
  },
  {
    key: "captureCheckIn",
    value: function captureCheckIn(checkInId, arg1, arg2) {
      if ("checkInId" in checkInId) {
        if (checkInId.checkInId) {
          checkInId = checkInId.checkInId;
        }
        const self = this;
        if (this._isEnabled()) {
          options = self.getOptions();
          const tunnel = options.tunnel;
          const obj5 = { check_in_id: checkInId, monitor_slug: null, status: null, release: null, environment: null };
          ({ monitorSlug: obj2.monitor_slug, status: obj2.status } = checkInId);
          ({ release: obj2.release, environment: obj2.environment } = options);
          if ("duration" in checkInId) {
            obj5.duration = checkInId.duration;
          }
          if (arg1) {
            ({ schedule: obj3.schedule, checkinMargin: obj3.checkin_margin, maxRuntime: obj3.max_runtime, timezone: obj3.timezone, failureIssueThreshold: obj3.failure_issue_threshold, recoveryThreshold: obj3.recovery_threshold } = arg1);
            obj5.monitor_config = { schedule: null, checkin_margin: null, max_runtime: null, timezone: null, failure_issue_threshold: null, recovery_threshold: null };
            const obj6 = { schedule: null, checkin_margin: null, max_runtime: null, timezone: null, failure_issue_threshold: null, recovery_threshold: null };
          }
          const obj4 = ServerRuntimeClient(750);
          [tmp11, tmp12] = ServerRuntimeClient(750)._getTraceInfoFromScope(self, arg2);
          if (tmp12) {
            const obj9 = { trace: tmp12 };
            obj5.contexts = obj9;
          }
          const tmp7Result = ServerRuntimeClient(763);
          const sdkMetadata = self.getSdkMetadata();
          const checkInEnvelope = tmp7Result.createCheckInEnvelope(obj5, tmp11, sdkMetadata, tunnel, self.getDsn());
          if (ServerRuntimeClient(692).DEBUG_BUILD) {
            const debug2 = tmp7(693).debug;
            debug2.log("Sending checkin:", checkInId.monitorSlug, checkInId.status);
          }
          self.sendEnvelope(checkInEnvelope);
          return checkInId;
        } else {
          if (ServerRuntimeClient(692).DEBUG_BUILD) {
            const debug = ServerRuntimeClient(693).debug;
            debug.warn("SDK not enabled, will not capture check-in.");
          }
          return checkInId;
        }
      }
      checkInId = ServerRuntimeClient(699).uuid4();
    }
  },
  {
    key: "_prepareEvent",
    value: function _prepareEvent(platform, arg1, arg2, arg3) {
      const self = this;
      if (this._options.platform) {
        platform.platform = platform.platform || self._options.platform;
      }
      if (self._options.runtime) {
        const obj = {};
        const merged = Object.assign(platform.contexts);
        const contexts = platform.contexts;
        let runtime;
        if (contexts != null) {
          runtime = contexts.runtime;
        }
        if (!runtime) {
          runtime = self._options.runtime;
        }
        obj.runtime = runtime;
        platform.contexts = obj;
      }
      if (self._options.serverName) {
        platform.server_name = platform.server_name || self._options.serverName;
      }
      let fn = metroRequire(hasOwnProperty(ServerRuntimeClient.prototype), "_prepareEvent", self);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [platform, arg1, arg2, arg3];
      return fn(items);
    }
  },
  {
    key: "_setUpMetricsProcessing",
    value: function _setUpMetricsProcessing() {
      const self = this;
      this.on("processMetric", (attributes) => {
        if (self._options.serverName) {
          const obj = { "server.address": tmp._options.serverName };
          const merged = Object.assign(attributes.attributes);
          attributes.attributes = obj;
        }
      });
    }
  }
];

export const ServerRuntimeClient = _createClass(ServerRuntimeClient, items);
