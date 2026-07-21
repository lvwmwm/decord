// Module ID: 867
// Function ID: 9659
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 867 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _superPropGet(arg0, arg1, arg2, arg3) {
  const require = arg2;
  let prototype = arg0;
  if (1) {
    prototype = arg0.prototype;
  }
  const tmpResult = closure_7(closure_6(prototype), arg1, arg2);
  const dependencyMap = tmpResult;
  let fn = tmpResult;
  if (2) {
    fn = tmpResult;
    if ("function" === typeof tmpResult) {
      fn = (arg0) => tmpResult.apply(arg2, arg0);
    }
  }
  return fn;
}
function setCurrentRequestSessionErroredOrCrashed(mechanism) {
  const isolationScope = require(dependencyMap[17]).getIsolationScope();
  const requestSession = isolationScope.getScopeData().sdkProcessingMetadata.requestSession;
  if (requestSession) {
    let handled;
    if (null != mechanism) {
      mechanism = mechanism.mechanism;
      if (null != mechanism) {
        handled = mechanism.handled;
      }
    }
    if (null == handled || handled) {
      if ("crashed" !== requestSession.status) {
        requestSession.status = "errored";
      }
    }
    if (!(null == handled || handled)) {
      requestSession.status = "crashed";
    }
  }
}
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
let closure_4 = require(dependencyMap[2]);
let closure_5 = require(dependencyMap[3]);
let closure_6 = require(dependencyMap[4]);
let closure_7 = require(dependencyMap[5]);
let closure_8 = require(dependencyMap[6]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const ServerRuntimeClient = (Client) => {
  class ServerRuntimeClient {
    constructor(arg0) {
      self = this;
      tmp = closure_3(this, ServerRuntimeClient);
      obj = ServerRuntimeClient(closure_1[7]);
      result = obj.registerSpanErrorInstrumentation();
      obj2 = ServerRuntimeClient(closure_1[8]);
      result1 = obj2.addUserAgentToTransportHeaders(Client);
      items = [];
      items[0] = Client;
      obj3 = closure_6(ServerRuntimeClient);
      tmp4 = closure_5;
      if (closure_9()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        constructResult = Reflect.construct(obj3, items, closure_6(self).constructor);
      } else {
        constructResult = obj3.apply(self, items);
      }
      tmp4Result = tmp4(self, constructResult);
      result2 = tmp4Result._setUpMetricsProcessing();
      return tmp4Result;
    }
  }
  const require = ServerRuntimeClient;
  callback2(ServerRuntimeClient, Client);
  let obj = {
    key: "eventFromException",
    value: function eventFromException(arg0, arg1) {
      const result = ServerRuntimeClient(closure_1[9]).eventFromUnknownInput(this, this._options.stackParser, arg0, arg1);
      result.level = "error";
      const obj = ServerRuntimeClient(closure_1[9]);
      return ServerRuntimeClient(closure_1[10]).resolvedSyncPromise(result);
    }
  };
  const items = [obj, , , , , , ];
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
      const obj = ServerRuntimeClient(closure_1[10]);
      return obj.resolvedSyncPromise(ServerRuntimeClient(closure_1[9]).eventFromMessage(self._options.stackParser, arg0, str, tmp, self._options.attachStacktrace));
    }
  };
  items[1] = obj;
  obj = {
    key: "captureException",
    value: function captureException(arg0, arg1, arg2) {
      callback6(arg1);
      const items = [arg0, arg1, arg2];
      return callback5(ServerRuntimeClient, "captureException", this, 3)(items);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "captureEvent",
    value: function captureEvent(type) {
      let tmp = !type.type;
      if (tmp) {
        const exception = type.exception;
        let values;
        if (null != exception) {
          values = exception.values;
        }
        tmp = values;
      }
      if (tmp) {
        tmp = type.exception.values.length > 0;
      }
      if (tmp) {
        callback6(arg1);
      }
      const items = [type, arg1, arg2];
      return callback5(ServerRuntimeClient, "captureEvent", this, 3)(items);
    }
  };
  items[4] = {
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
          const tmp11 = callback(ServerRuntimeClient(closure_1[14])._getTraceInfoFromScope(self, arg2), 2);
          const first = tmp11[0];
          if (tmp11[1]) {
            const obj1 = { trace: tmp13 };
            obj.contexts = obj1;
          }
          const obj6 = ServerRuntimeClient(closure_1[15]);
          const sdkMetadata = self.getSdkMetadata();
          const checkInEnvelope = obj6.createCheckInEnvelope(obj, first, sdkMetadata, tunnel, self.getDsn());
          if (ServerRuntimeClient(closure_1[12]).DEBUG_BUILD) {
            const debug2 = ServerRuntimeClient(closure_1[13]).debug;
            debug2.log("Sending checkin:", checkInId.monitorSlug, checkInId.status);
          }
          self.sendEnvelope(checkInEnvelope);
          return checkInId;
        } else {
          if (ServerRuntimeClient(closure_1[12]).DEBUG_BUILD) {
            const debug = ServerRuntimeClient(closure_1[13]).debug;
            debug.warn("SDK not enabled, will not capture check-in.");
          }
          return checkInId;
        }
      }
      obj = ServerRuntimeClient(closure_1[11]);
      checkInId = obj.uuid4();
    }
  };
  items[5] = {
    key: "_prepareEvent",
    value: function _prepareEvent(platform) {
      const self = this;
      if (this._options.platform) {
        platform.platform = platform.platform || self._options.platform;
      }
      if (self._options.runtime) {
        const obj = {};
        const contexts = platform.contexts;
        let runtime;
        if (null != contexts) {
          runtime = contexts.runtime;
        }
        if (!runtime) {
          runtime = self._options.runtime;
        }
        obj.runtime = runtime;
        platform.contexts = Object.assign({}, platform.contexts, obj);
      }
      if (self._options.serverName) {
        platform.server_name = platform.server_name || self._options.serverName;
      }
      const items = [platform, arg1, arg2, arg3];
      return callback5(ServerRuntimeClient, "_prepareEvent", self, 3)(items);
    }
  };
  items[6] = {
    key: "_setUpMetricsProcessing",
    value: function _setUpMetricsProcessing() {
      const ServerRuntimeClient = this;
      this.on("processMetric", (attributes) => {
        if (self._options.serverName) {
          const _Object = Object;
          const obj = { server.address: self._options.serverName };
          attributes.attributes = Object.assign(obj, attributes.attributes);
        }
      });
    }
  };
  return callback(ServerRuntimeClient, items);
}(require(dependencyMap[16]).Client);
