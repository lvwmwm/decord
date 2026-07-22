// Module ID: 852
// Function ID: 9496
// Name: _makeInternalError
// Dependencies: []

// Module 852 (_makeInternalError)
function _makeInternalError(message) {
  return callback3({ message }, closure_7, true);
}
function _makeDoNotSendEventError(message) {
  return callback3({ message }, closure_8, true);
}
function _isInternalError(arg0) {
  let tmp2 = !tmp;
  if (!!arg0) {
    tmp2 = "object" === typeof arg0;
  }
  if (tmp2) {
    tmp2 = closure_7 in arg0;
  }
  return tmp2;
}
function _isDoNotSendEventError(arg0) {
  let tmp2 = !tmp;
  if (!!arg0) {
    tmp2 = "object" === typeof arg0;
  }
  if (tmp2) {
    tmp2 = closure_8 in arg0;
  }
  return tmp2;
}
function setupWeightBasedFlushing(on) {
  const require = on;
  const dependencyMap = arg3;
  let closure_2 = arg4;
  let closure_4 = 0;
  let closure_5 = false;
  on.on(arg2, () => {
    let closure_4 = 0;
    clearTimeout(closure_3);
    let closure_5 = false;
  });
  on.on(arg1, (arg0) => {
    const sum = closure_4 + arg3(arg0);
    closure_4 = sum;
    if (sum >= 800000) {
      arg4(arg0);
    } else if (!closure_5) {
      closure_5 = true;
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        callback(closure_0);
      }, 5000);
    }
  });
  on.on("flush", () => {
    arg4(arg0);
  });
}
function getDataCategoryByType(arg0) {
  let str = arg0;
  let str2 = "replay";
  if ("replay_event" !== arg0) {
    if (!str) {
      str = "error";
    }
    str2 = str;
  }
  return str2;
}
function isErrorEvent(type) {
  return undefined === type.type;
}
function isTransactionEvent(type) {
  return "transaction" === type.type;
}
function estimateMetricSizeInBytes(name) {
  let num = 0;
  if (name.name) {
    num = 2 * name.name.length;
  }
  return num + 8 + estimateAttributesSizeInBytes(name.attributes);
}
function estimateLogSizeInBytes(message) {
  let num = 0;
  if (message.message) {
    num = 2 * message.message.length;
  }
  return num + estimateAttributesSizeInBytes(message.attributes);
}
function estimateAttributesSizeInBytes(attributes) {
  if (attributes) {
    let closure_0 = 0;
    const _Object = Object;
    const values = Object.values(attributes);
    const item = values.forEach((arg0) => {
      if (Array.isArray(arg0)) {
        let v0 = v0 + arg0.length * callback(arg0[0]);
      } else {
        if (obj.isPrimitive(arg0)) {
          v0 = tmp3 + callback(arg0);
        } else {
          v0 = tmp3 + 100;
        }
        const obj = v0(closure_1[14]);
      }
    });
    return closure_0;
  } else {
    return 0;
  }
}
function estimatePrimitiveSizeInBytes(arg0) {
  if ("string" === typeof arg0) {
    let num = 2 * arg0.length;
  } else {
    num = 8;
    if ("number" !== tmp) {
      let num2 = 0;
      if ("boolean" === tmp) {
        num2 = 4;
      }
      num = num2;
    }
  }
  return num;
}
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
let closure_4 = require(dependencyMap[2]);
let closure_5 = require(dependencyMap[3]);
let closure_6 = require(dependencyMap[4]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_7 = Symbol.for("SentryInternalError");
let closure_8 = Symbol.for("SentryDoNotSendEventError");

export const Client = () => {
  class Client {
    constructor(arg0) {
      self = this;
      tmp = Client(this, Client);
      this._options = arg0;
      this._integrations = {};
      this._numProcessing = 0;
      this._outcomes = {};
      this._hooks = {};
      this._eventProcessors = [];
      obj = f9556(f9551[5]);
      transportOptions = arg0.transportOptions;
      bufferSize = undefined;
      if (null != transportOptions) {
        bufferSize = transportOptions.bufferSize;
      }
      if (null == bufferSize) {
        tmp3 = f9556;
        tmp4 = f9551;
        num = 6;
        bufferSize = f9556(f9551[6]).DEFAULT_TRANSPORT_BUFFER_SIZE;
      }
      self._promiseBuffer = obj.makePromiseBuffer(bufferSize);
      tmp5 = f9556;
      tmp6 = f9551;
      if (arg0.dsn) {
        num4 = 7;
        tmp5Result = tmp5(tmp6[7]);
        self._dsn = tmp5Result.makeDsn(arg0.dsn);
      } else {
        num2 = 8;
        if (tmp5(tmp6[8]).DEBUG_BUILD) {
          tmp7 = f9556;
          tmp8 = f9551;
          num3 = 9;
          debug = f9556(f9551[9]).debug;
          str = "No DSN provided, client will not send events.";
          warnResult = debug.warn("No DSN provided, client will not send events.");
        }
      }
      if (self._dsn) {
        tmp10 = f9556;
        tmp11 = f9551;
        num5 = 10;
        obj3 = f9556(f9551[10]);
        sdk = undefined;
        if (arg0._metadata) {
          sdk = arg0._metadata.sdk;
        }
        tmp14 = globalThis;
        _Object = Object;
        obj = {};
        obj.tunnel = self._options.tunnel;
        recordDroppedEvent = self.recordDroppedEvent;
        envelopeEndpointWithUrlEncodedAuth = obj3.getEnvelopeEndpointWithUrlEncodedAuth(self._dsn, arg0.tunnel, sdk);
        obj.recordDroppedEvent = recordDroppedEvent.bind(self);
        obj1 = {};
        obj1.url = envelopeEndpointWithUrlEncodedAuth;
        self._transport = arg0.transport(Object.assign(obj, arg0.transportOptions, obj1));
      }
      enableLogs = self._options.enableLogs;
      if (null == enableLogs) {
        _experiments = self._options._experiments;
        enableLogs = undefined;
        if (null != _experiments) {
          enableLogs = _experiments.enableLogs;
        }
      }
      self._options.enableLogs = enableLogs;
      if (self._options.enableLogs) {
        tmp16 = closure_13;
        tmp17 = closure_18;
        tmp18 = f9556;
        tmp19 = f9551;
        num6 = 11;
        str2 = "afterCaptureLog";
        str3 = "flushLogs";
        tmp20 = self;
        tmp21 = closure_13(self, "afterCaptureLog", "flushLogs", closure_18, f9556(f9551[11])._INTERNAL_flushLogsBuffer);
      }
      enableMetrics = self._options.enableMetrics;
      if (null == enableMetrics) {
        _experiments2 = self._options._experiments;
        enableMetrics = undefined;
        if (null != _experiments2) {
          enableMetrics = _experiments2.enableMetrics;
        }
      }
      tmp23 = null == enableMetrics || enableMetrics;
      if (tmp23) {
        tmp24 = closure_13;
        tmp25 = closure_17;
        tmp26 = f9556;
        tmp27 = f9551;
        num7 = 12;
        str4 = "afterCaptureMetric";
        str5 = "flushMetrics";
        tmp28 = self;
        tmp29 = closure_13(self, "afterCaptureMetric", "flushMetrics", closure_17, f9556(f9551[12])._INTERNAL_flushMetricsBuffer);
      }
      return;
    }
  }
  let closure_4 = Client;
  let obj = {
    key: "captureException",
    value: function captureException(arg0, arg1, arg2) {
      const self = this;
      const callback = arg0;
      let closure_1 = arg2;
      let closure_2 = this;
      let obj = callback(closure_1[13]);
      const uuid4Result = obj.uuid4();
      if (obj2.checkOrSetAlreadyCaught(arg0)) {
        if (callback(closure_1[8]).DEBUG_BUILD) {
          const debug = callback(closure_1[9]).debug;
          debug.log("Not capturing exception because it's already been captured.");
        }
        return uuid4Result;
      } else {
        const _Object = Object;
        obj = { event_id: uuid4Result };
        const merged = Object.assign(obj, arg1);
        let closure_3 = merged;
        self._process(() => {
          const eventFromExceptionResult = self.eventFromException(arg0, merged);
          return self.eventFromException(arg0, merged).then((arg0) => closure_2._captureEvent(arg0, closure_3, closure_1)).then((arg0) => arg0);
        }, "error");
        return merged.event_id;
      }
      const obj2 = callback(closure_1[13]);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "captureMessage",
    value: function captureMessage(arg0, arg1, arg2, arg3) {
      const self = this;
      const callback = arg3;
      let closure_1 = this;
      const obj = { event_id: callback(closure_1[13]).uuid4() };
      const merged = Object.assign(obj, arg2);
      let closure_2 = merged;
      const obj2 = callback(closure_1[13]);
      let StringResult = arg0;
      if (!obj3.isParameterizedString(arg0)) {
        const _String = String;
        StringResult = String(arg0);
      }
      const obj3 = callback(closure_1[14]);
      const isPrimitiveResult = callback(closure_1[14]).isPrimitive(arg0);
      if (isPrimitiveResult) {
        let eventFromMessageResult = self.eventFromMessage(StringResult, arg1, merged);
      } else {
        eventFromMessageResult = self.eventFromException(arg0, merged);
      }
      let closure_3 = eventFromMessageResult;
      let str = "error";
      if (isPrimitiveResult) {
        str = "unknown";
      }
      self._process(() => eventFromMessageResult.then((arg0) => closure_1._captureEvent(arg0, closure_2, closure_0)), str);
      return merged.event_id;
    }
  };
  items[1] = obj;
  obj = {
    key: "captureEvent",
    value: function captureEvent(sdkProcessingMetadata, originalException) {
      const self = this;
      const callback = sdkProcessingMetadata;
      let closure_1 = arg2;
      let closure_2 = this;
      const uuid4Result = callback(closure_1[13]).uuid4();
      if (null != originalException) {
        if (originalException.originalException) {
          if (obj2.checkOrSetAlreadyCaught(originalException.originalException)) {
            if (callback(closure_1[8]).DEBUG_BUILD) {
              const debug = callback(closure_1[9]).debug;
              debug.log("Not capturing exception because it's already been captured.");
            }
            return uuid4Result;
          }
          const obj2 = callback(closure_1[13]);
        }
      }
      const merged = Object.assign({ event_id: uuid4Result }, originalException);
      let closure_3 = merged;
      ({ capturedSpanScope: closure_4, capturedSpanIsolationScope: closure_5 } = sdkProcessingMetadata.sdkProcessingMetadata || {});
      self._process(() => {
        let tmp4 = closure_4;
        if (!closure_4) {
          tmp4 = arg2;
        }
        return self._captureEvent(arg0, merged, tmp4, closure_5);
      }, callback7(sdkProcessingMetadata.type));
      return merged.event_id;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "captureSession",
    value: function captureSession(arg0) {
      this.sendSession(arg0);
      callback(closure_1[15]).updateSession(arg0, { init: false });
    }
  };
  items[4] = {
    key: "getDsn",
    value: function getDsn() {
      return this._dsn;
    }
  };
  items[5] = {
    key: "getOptions",
    value: function getOptions() {
      return this._options;
    }
  };
  items[6] = {
    key: "getSdkMetadata",
    value: function getSdkMetadata() {
      return this._options._metadata;
    }
  };
  items[7] = {
    key: "getTransport",
    value: function getTransport() {
      return this._transport;
    }
  };
  const obj6 = { key: "flush" };
  const callback = callback(async function(arg0) {
    const self = this;
    const _transport = self._transport;
    if (_transport) {
      self.emit("flush");
      const tmp2 = yield self._isClientDoneProcessing(arg0);
      let tmp3 = tmp2;
      if (tmp2) {
        tmp3 = yield _transport.flush(arg0);
      }
      return tmp3;
    } else {
      return true;
    }
  });
  obj6.value = function flush(arg0) {
    return callback4(...arguments);
  };
  items[8] = obj6;
  const obj7 = { key: "close" };
  let closure_2 = callback(async function(arg0) {
    const self = this;
    self.getOptions().enabled = false;
    self.emit("close");
    return yield self.flush(arg0);
  });
  obj7.value = function close(arg0) {
    return callback3(...arguments);
  };
  items[9] = obj7;
  items[10] = {
    key: "getEventProcessors",
    value: function getEventProcessors() {
      return this._eventProcessors;
    }
  };
  items[11] = {
    key: "addEventProcessor",
    value: function addEventProcessor(arg0) {
      const _eventProcessors = this._eventProcessors;
      _eventProcessors.push(arg0);
    }
  };
  items[12] = {
    key: "init",
    value: function init() {
      const self = this;
      let _isEnabledResult = this._isEnabled();
      if (!_isEnabledResult) {
        const integrations = self._options.integrations;
        _isEnabledResult = integrations.some((name) => {
          name = name.name;
          return name.startsWith("Spotlight");
        });
      }
      if (_isEnabledResult) {
        self._setupIntegrations();
      }
    }
  };
  items[13] = {
    key: "getIntegrationByName",
    value: function getIntegrationByName(arg0) {
      return this._integrations[arg0];
    }
  };
  items[14] = {
    key: "addIntegration",
    value: function addIntegration(arg0) {
      callback(closure_1[16]).setupIntegration(this, arg0, this._integrations);
      if (!this._integrations[arg0.name]) {
        const items = [arg0];
        const result = callback(closure_1[16]).afterSetupIntegrations(this, items);
        const obj2 = callback(closure_1[16]);
      }
    }
  };
  items[15] = {
    key: "sendEvent",
    value: function sendEvent(arg0) {
      const self = this;
      const callback = arg0;
      let closure_1 = this;
      if (arguments.length > 1) {
        if (undefined !== arguments[1]) {
          let obj = arguments[1];
        }
        self.emit("beforeSendEvent", arg0, obj);
        const obj2 = callback(closure_1[17]);
        let eventEnvelope = obj2.createEventEnvelope(arg0, self._dsn, self._options._metadata, self._options.tunnel);
        const tmp7 = obj.attachments || [];
        const tmp9 = tmp7[Symbol.iterator]();
        while (tmp9 !== undefined) {
          let tmp12 = callback;
          let tmp13 = closure_1;
          let obj3 = callback(closure_1[18]);
          let tmp14 = eventEnvelope;
          let obj4 = callback(closure_1[18]);
          eventEnvelope = obj3.addItemToEnvelope(eventEnvelope, obj4.createAttachmentEnvelopeItem(tmp10));
          // continue
        }
        self.sendEnvelope(eventEnvelope).then((arg0) => self.emit("afterSendEvent", arg0, arg0));
      }
      obj = {};
    }
  };
  items[16] = {
    key: "sendSession",
    value: function sendSession(attrs) {
      let environment;
      let release;
      const self = this;
      ({ release, environment } = this._options);
      if (undefined === environment) {
        environment = callback(closure_1[19]).DEFAULT_ENVIRONMENT;
      }
      if ("aggregates" in attrs) {
        const tmp8 = attrs.attrs || {};
        if (!tmp8.release) {
          if (!release) {
            if (callback(closure_1[8]).DEBUG_BUILD) {
              const debug2 = callback(closure_1[9]).debug;
              debug2.warn("Discarded session because of missing or non-string release");
            }
          }
        }
        tmp8.release = tmp8.release || release;
        tmp8.environment = tmp8.environment || environment;
        attrs.attrs = tmp8;
      } else {
        if (!attrs.release) {
          if (!release) {
            if (callback(closure_1[8]).DEBUG_BUILD) {
              const debug = callback(closure_1[9]).debug;
              debug.warn("Discarded session because of missing or non-string release");
            }
          }
        }
        attrs.release = attrs.release || release;
        attrs.environment = attrs.environment || environment;
      }
      self.emit("beforeSendSession", attrs);
      self.sendEnvelope(callback(closure_1[17]).createSessionEnvelope(attrs, self._dsn, self._options._metadata, self._options.tunnel));
    }
  };
  items[17] = {
    key: "recordDroppedEvent",
    value: function recordDroppedEvent(arg0, arg1) {
      const self = this;
      let num = 1;
      if (arguments.length > 2) {
        num = 1;
        if (undefined !== arguments[2]) {
          num = arguments[2];
        }
      }
      if (self._options.sendClientReports) {
        const _HermesInternal = HermesInternal;
        const combined = "" + arg0 + ":" + arg1;
        if (callback(closure_1[8]).DEBUG_BUILD) {
          const debug = callback(closure_1[9]).debug;
          let str3 = "";
          if (num > 1) {
            const _HermesInternal2 = HermesInternal;
            str3 = " (" + num + " times)";
          }
          const _HermesInternal3 = HermesInternal;
          debug.log("Recording outcome: \"" + combined + "\"" + str3);
        }
        let num4 = self._outcomes[combined];
        if (!num4) {
          num4 = 0;
        }
        self._outcomes[combined] = num4 + num;
      }
    }
  };
  items[18] = {
    key: "on",
    value: function on(arg0, arg1) {
      let closure_0 = arg1;
      let set = this._hooks[arg0];
      if (!set) {
        const _Set = Set;
        set = new Set();
      }
      this._hooks[arg0] = set;
      let closure_1 = set;
      function uniqueCallback() {
        return arg1(...arguments);
      }
      let closure_2 = uniqueCallback;
      set.add(uniqueCallback);
      return () => {
        set.delete(uniqueCallback);
      };
    }
  };
  items[19] = {
    key: "emit",
    value: function emit(arg0) {
      const length = arguments.length;
      let num = 0;
      if (length > 1) {
        num = length - 1;
      }
      const array = new Array(num);
      let closure_0 = array;
      for (let num2 = 1; num2 < length; num2 = num2 + 1) {
        array[num2 - 1] = arguments[num2];
      }
      const arr = this._hooks[arg0];
      if (arr) {
        const item = arr.forEach((apply) => apply.apply(undefined, array));
      }
    }
  };
  const obj18 = { key: "sendEnvelope" };
  let closure_1 = callback(async function(arg0) {
    const self = this;
    self.emit("beforeEnvelope", arg0);
    if (self._isEnabled()) {
      if (self._transport) {
        const _transport = self._transport;
        return yield _transport.send(arg0);
      }
    }
    if (callback(closure_1[8]).DEBUG_BUILD) {
      const debug = callback(closure_1[9]).debug;
      debug.error("Transport disabled");
    }
    return {};
  });
  obj18.value = function sendEnvelope(arg0) {
    return callback2(...arguments);
  };
  items[20] = obj18;
  items[21] = {
    key: "_setupIntegrations",
    value: function _setupIntegrations() {
      const integrations = this._options.integrations;
      this._integrations = callback(closure_1[16]).setupIntegrations(this, integrations);
      const obj = callback(closure_1[16]);
      const result = callback(closure_1[16]).afterSetupIntegrations(this, integrations);
    }
  };
  items[22] = {
    key: "_updateSessionFromEvent",
    value: function _updateSessionFromEvent(status, level) {
      const self = this;
      let flag = "fatal" === level.level;
      const exception = level.exception;
      let values;
      if (null != exception) {
        values = exception.values;
      }
      let flag2 = false;
      if (values) {
        flag = false;
        const iter = values[Symbol.iterator]();
        flag2 = true;
        while (iter !== undefined) {
          let mechanism = iter.next().mechanism;
          let handled;
          if (null != mechanism) {
            let tmp6 = mechanism;
            handled = tmp4.handled;
          }
          if (false === handled) {
            flag = true;
            iter.return();
            flag2 = true;
            // break
          } else {
            // continue
          }
          break;
        }
      }
      let tmp7 = "ok" === status.status;
      let tmp8 = tmp7;
      if (tmp7) {
        tmp8 = 0 === status.errors;
      }
      if (!tmp8) {
        if (tmp7) {
          tmp7 = flag;
        }
        tmp8 = tmp7;
      }
      if (tmp8) {
        let obj = callback(closure_1[15]);
        let tmp12 = flag;
        if (flag) {
          obj = { status: "crashed" };
          tmp12 = obj;
        }
        obj = {};
        let errors = status.errors;
        if (!errors) {
          if (!flag2) {
            flag2 = flag;
          }
          errors = Number(flag2);
        }
        obj.errors = errors;
        obj.updateSession(status, Object.assign({}, tmp12, obj));
        self.captureSession(status);
      }
    }
  };
  const obj21 = { key: "_isClientDoneProcessing" };
  let closure_0 = callback(async (arg0) => {
    let num = 0;
    if (!arg0) {
      yield new Promise((arg0) => setTimeout(arg0, 1));
      while (true) {
        if (!tmp._numProcessing) {
          break;
        } else {
          let sum = num + 1;
          num = sum;
          if (!arg0) {
            continue;
          } else {
            num = sum;
          }
          continue;
        }
      }
    } else {
      num = 0;
    }
    return false;
  });
  obj21.value = function _isClientDoneProcessing(arg0) {
    return callback(...arguments);
  };
  items[23] = obj21;
  items[24] = {
    key: "_isEnabled",
    value: function _isEnabled() {
      let tmp = false !== this.getOptions().enabled;
      if (tmp) {
        tmp = undefined !== this._transport;
      }
      return tmp;
    }
  };
  items[25] = {
    key: "_prepareEvent",
    value: function _prepareEvent(type, integrations, arg2, setLastEventId) {
      const self = this;
      const callback = integrations;
      let closure_1 = arg2;
      let closure_2 = this;
      const options = this.getOptions();
      const keys = Object.keys(this._integrations);
      let length = !integrations.integrations;
      if (length) {
        length = null != keys;
      }
      if (length) {
        length = keys.length;
      }
      if (length) {
        integrations.integrations = keys;
      }
      self.emit("preprocessEvent", type, integrations);
      if (!type.type) {
        let event_id = type.event_id;
        if (!event_id) {
          event_id = integrations.event_id;
        }
        setLastEventId.setLastEventId(event_id);
      }
      const obj = callback(closure_1[20]);
      return callback(closure_1[20]).prepareEvent(options, type, integrations, arg2, self, setLastEventId).then((contexts) => {
        if (null === contexts) {
          return contexts;
        } else {
          self.emit("postprocessEvent", contexts, arg1);
          const _Object = Object;
          let obj = { trace: arg1(arg2[21]).getTraceContextFromScope(arg2) };
          contexts.contexts = Object.assign(obj, contexts.contexts);
          const obj2 = arg1(arg2[21]);
          const _Object2 = Object;
          obj = { dynamicSamplingContext: arg1(arg2[22]).getDynamicSamplingContextFromScope(self, arg2) };
          contexts.sdkProcessingMetadata = Object.assign(obj, contexts.sdkProcessingMetadata);
          return contexts;
        }
      });
    }
  };
  items[26] = {
    key: "_captureEvent",
    value: function _captureEvent(message) {
      const self = this;
      if (arguments.length > 1) {
        if (undefined !== arguments[1]) {
          let obj = arguments[1];
        }
        if (arguments.length > 2) {
          if (undefined !== arguments[2]) {
            let currentScope = arguments[2];
          }
          if (arguments.length > 3) {
            if (undefined !== arguments[3]) {
              let isolationScope = arguments[3];
            }
            let DEBUG_BUILD = callback(closure_1[8]).DEBUG_BUILD;
            if (DEBUG_BUILD) {
              DEBUG_BUILD = callback8(message);
            }
            if (DEBUG_BUILD) {
              const debug = callback(closure_1[9]).debug;
              const obj4 = callback(closure_1[23]);
              const _HermesInternal = HermesInternal;
              debug.log("Captured error event `" + callback(closure_1[23]).getPossibleEventMessages(message)[0] || "<unknown>" + "`");
              const tmp12 = callback(closure_1[23]).getPossibleEventMessages(message)[0] || "<unknown>";
            }
            return self._processEvent(message, obj, currentScope, isolationScope).then((event_id) => event_id.event_id, (message) => {
              if (callback(closure_1[8]).DEBUG_BUILD) {
                if (callback3(message)) {
                  const debug2 = callback(closure_1[9]).debug;
                  debug2.log(message.message);
                } else {
                  const debug = callback(closure_1[9]).debug;
                  const warn = debug.warn;
                  if (tmp3) {
                    warn(message.message);
                  } else {
                    warn(message);
                  }
                  const tmp3 = callback2(message);
                }
              }
            });
          }
          isolationScope = callback(closure_1[21]).getIsolationScope();
          const obj3 = callback(closure_1[21]);
        }
        currentScope = callback(closure_1[21]).getCurrentScope();
        const obj2 = callback(closure_1[21]);
      }
      obj = {};
    }
  };
  items[27] = {
    key: "_processEvent",
    value: function _processEvent(type) {
      const self = this;
      const callback = type;
      let closure_1 = arg1;
      let closure_2 = arg2;
      let closure_3 = arg3;
      const Client = this;
      const options = this.getOptions();
      const sampleRate = options.sampleRate;
      let closure_6 = callback9(type);
      const tmp2 = callback8(type);
      let closure_8 = "before send for type `" + type.type || "error" + "`";
      if (undefined !== sampleRate) {
        const parseSampleRateResult = callback(closure_1[24]).parseSampleRate(sampleRate);
        const obj = callback(closure_1[24]);
      }
      if (tmp2) {
        if ("number" === typeof parseSampleRateResult) {
          if (obj2.safeMathRandom() > parseSampleRateResult) {
            self.recordDroppedEvent("sample_rate", "error");
            const _HermesInternal = HermesInternal;
            return callback(closure_1[26]).rejectedSyncPromise(callback5("Discarding event because it's not included in the random sample (sampling rate = " + sampleRate + ")"));
          }
          const obj2 = callback(closure_1[25]);
        }
      }
      let closure_9 = callback7(type.type);
      const _prepareEventResult = self._prepareEvent(type, arg1, arg2, arg3);
      const tmp3 = type.type || "error";
      const nextPromise = self._prepareEvent(type, arg1, arg2, arg3).then((sdkProcessingMetadata) => {
        let beforeSend;
        let beforeSendSpan;
        let beforeSendTransaction;
        let ignoreSpans;
        if (null === sdkProcessingMetadata) {
          self.recordDroppedEvent("event_processor", closure_9);
          throw callback2("An event processor returned `null`, will not send event.");
        } else {
          if (arg1.data) {
            if (true === arg1.data.__sentry__) {
              return sdkProcessingMetadata;
            }
          }
          let obj = self;
          ({ beforeSend, beforeSendTransaction, beforeSendSpan, ignoreSpans } = options);
          if (callback5(sdkProcessingMetadata)) {
            if (beforeSend) {
              let beforeSendResult = beforeSend(sdkProcessingMetadata, tmp3);
            }
            return function _validateBeforeSendResult(beforeSendResult, closure_8) {
              const combined = "" + closure_8 + " must return `null` or a valid event.";
              if (obj.isThenable(beforeSendResult)) {
                return beforeSendResult.then((arg0) => {
                  if (!obj.isPlainObject(arg0)) {
                    if (null !== arg0) {
                      throw callback(combined);
                    }
                  }
                  return arg0;
                }, (arg0) => {
                  throw callback("" + arg1 + " rejected with " + arg0);
                });
              } else {
                if (!obj2.isPlainObject(beforeSendResult)) {
                  if (null !== beforeSendResult) {
                    throw callback(combined);
                  }
                }
                return beforeSendResult;
              }
              const obj = closure_8(combined[14]);
            }(beforeSendResult, closure_8);
          }
          let tmp6 = sdkProcessingMetadata;
          if (callback6(sdkProcessingMetadata)) {
            if (beforeSendSpan) {
              const result = sdkProcessingMetadata(arg1[28]).convertTransactionEventToSpanJson(sdkProcessingMetadata);
              if (null != ignoreSpans) {
                if (ignoreSpans.length) {
                  beforeSendResult = null;
                  const obj3 = sdkProcessingMetadata(arg1[29]);
                }
              }
              let mergeResult = sdkProcessingMetadata;
              if (beforeSendSpan) {
                const beforeSendSpanResult = beforeSendSpan(result);
                if (beforeSendSpanResult) {
                  let tmp23Result = tmp23(tmp24[31]);
                  tmp23Result = tmp23(tmp24[28]);
                  mergeResult = tmp23Result.merge(sdkProcessingMetadata, tmp23Result.convertSpanJsonToTransactionEvent(beforeSendSpanResult));
                } else {
                  tmp23(tmp24[30]).showSpanDropWarning();
                  mergeResult = sdkProcessingMetadata;
                  const tmp23Result1 = tmp23(tmp24[30]);
                }
              }
              let tmp9 = mergeResult;
              if (mergeResult.spans) {
                const items = [];
                const spans = mergeResult.spans;
                const iter = spans[Symbol.iterator]();
                const nextResult = iter.next();
                while (iter !== undefined) {
                  let tmp67 = nextResult;
                  let tmp68 = ignoreSpans;
                  if (null != ignoreSpans) {
                    let tmp30 = ignoreSpans;
                    if (ignoreSpans.length) {
                      let tmp31 = sdkProcessingMetadata;
                      let tmp32 = arg1;
                      let obj7 = sdkProcessingMetadata(arg1[29]);
                      let tmp33 = nextResult;
                      let tmp34 = ignoreSpans;
                      if (obj7.shouldIgnoreSpan(tmp67, ignoreSpans)) {
                        let tmp52 = sdkProcessingMetadata;
                        let tmp53 = arg1;
                        let obj9 = sdkProcessingMetadata(arg1[29]);
                        let tmp54 = spans;
                        let tmp55 = nextResult;
                        let reparentChildSpansResult = obj9.reparentChildSpans(tmp26, tmp67);
                        // continue
                      }
                    }
                  }
                  let tmp35 = beforeSendSpan;
                  if (beforeSendSpan) {
                    let tmp39 = beforeSendSpan;
                    let tmp40 = nextResult;
                    let beforeSendSpanResult1 = beforeSendSpan(tmp67);
                    if (beforeSendSpanResult1) {
                      let tmp49 = items;
                      let tmp50 = beforeSendSpanResult1;
                      let arr = items.push(tmp42);
                    } else {
                      let tmp43 = sdkProcessingMetadata;
                      let tmp44 = arg1;
                      let obj8 = sdkProcessingMetadata(arg1[30]);
                      let showSpanDropWarningResult1 = obj8.showSpanDropWarning();
                      let tmp46 = items;
                      let tmp47 = nextResult;
                      arr = items.push(tmp67);
                    }
                  } else {
                    let tmp36 = items;
                    let tmp37 = nextResult;
                    let arr1 = items.push(tmp67);
                  }
                }
                const diff = mergeResult.spans.length - items.length;
                if (diff) {
                  obj.recordDroppedEvent("before_send", "span", diff);
                }
                mergeResult.spans = items;
                tmp9 = mergeResult;
                const tmp26 = spans;
              }
              const obj2 = sdkProcessingMetadata(arg1[28]);
            } else {
              tmp9 = sdkProcessingMetadata;
            }
            tmp6 = tmp9;
            if (beforeSendTransaction) {
              if (tmp9.spans) {
                const _Object = Object;
                obj = { spanCountBeforeProcessing: tmp9.spans.length };
                tmp9.sdkProcessingMetadata = Object.assign({}, sdkProcessingMetadata.sdkProcessingMetadata, obj);
              }
              beforeSendResult = beforeSendTransaction(tmp9, tmp3);
            }
          }
          beforeSendResult = tmp6;
        }
      });
      return self._prepareEvent(type, arg1, arg2, arg3).then((sdkProcessingMetadata) => {
        let beforeSend;
        let beforeSendSpan;
        let beforeSendTransaction;
        let ignoreSpans;
        if (null === sdkProcessingMetadata) {
          self.recordDroppedEvent("event_processor", closure_9);
          throw callback2("An event processor returned `null`, will not send event.");
        } else {
          if (arg1.data) {
            if (true === arg1.data.__sentry__) {
              return sdkProcessingMetadata;
            }
          }
          let obj = self;
          ({ beforeSend, beforeSendTransaction, beforeSendSpan, ignoreSpans } = options);
          if (callback5(sdkProcessingMetadata)) {
            if (beforeSend) {
              let beforeSendResult = beforeSend(sdkProcessingMetadata, tmp3);
            }
            return function _validateBeforeSendResult(beforeSendResult, closure_8) {
              const combined = "" + closure_8 + " must return `null` or a valid event.";
              if (obj.isThenable(beforeSendResult)) {
                return beforeSendResult.then((arg0) => {
                  if (!obj.isPlainObject(arg0)) {
                    if (null !== arg0) {
                      throw callback(combined);
                    }
                  }
                  return arg0;
                }, (arg0) => {
                  throw callback("" + arg1 + " rejected with " + arg0);
                });
              } else {
                if (!obj2.isPlainObject(beforeSendResult)) {
                  if (null !== beforeSendResult) {
                    throw callback(combined);
                  }
                }
                return beforeSendResult;
              }
              const obj = closure_8(combined[14]);
            }(beforeSendResult, closure_8);
          }
          let tmp6 = sdkProcessingMetadata;
          if (callback6(sdkProcessingMetadata)) {
            if (beforeSendSpan) {
              const result = sdkProcessingMetadata(arg1[28]).convertTransactionEventToSpanJson(sdkProcessingMetadata);
              if (null != ignoreSpans) {
                if (ignoreSpans.length) {
                  beforeSendResult = null;
                  const obj3 = sdkProcessingMetadata(arg1[29]);
                }
              }
              let mergeResult = sdkProcessingMetadata;
              if (beforeSendSpan) {
                const beforeSendSpanResult = beforeSendSpan(result);
                if (beforeSendSpanResult) {
                  let tmp23Result = tmp23(tmp24[31]);
                  tmp23Result = tmp23(tmp24[28]);
                  mergeResult = tmp23Result.merge(sdkProcessingMetadata, tmp23Result.convertSpanJsonToTransactionEvent(beforeSendSpanResult));
                } else {
                  tmp23(tmp24[30]).showSpanDropWarning();
                  mergeResult = sdkProcessingMetadata;
                  const tmp23Result1 = tmp23(tmp24[30]);
                }
              }
              let tmp9 = mergeResult;
              if (mergeResult.spans) {
                const items = [];
                const spans = mergeResult.spans;
                const iter = spans[Symbol.iterator]();
                const nextResult = iter.next();
                while (iter !== undefined) {
                  let tmp67 = nextResult;
                  let tmp68 = ignoreSpans;
                  if (null != ignoreSpans) {
                    let tmp30 = ignoreSpans;
                    if (ignoreSpans.length) {
                      let tmp31 = sdkProcessingMetadata;
                      let tmp32 = arg1;
                      let obj7 = sdkProcessingMetadata(arg1[29]);
                      let tmp33 = nextResult;
                      let tmp34 = ignoreSpans;
                      if (obj7.shouldIgnoreSpan(tmp67, ignoreSpans)) {
                        let tmp52 = sdkProcessingMetadata;
                        let tmp53 = arg1;
                        let obj9 = sdkProcessingMetadata(arg1[29]);
                        let tmp54 = spans;
                        let tmp55 = nextResult;
                        let reparentChildSpansResult = obj9.reparentChildSpans(tmp26, tmp67);
                        // continue
                      }
                    }
                  }
                  let tmp35 = beforeSendSpan;
                  if (beforeSendSpan) {
                    let tmp39 = beforeSendSpan;
                    let tmp40 = nextResult;
                    let beforeSendSpanResult1 = beforeSendSpan(tmp67);
                    if (beforeSendSpanResult1) {
                      let tmp49 = items;
                      let tmp50 = beforeSendSpanResult1;
                      let arr = items.push(tmp42);
                    } else {
                      let tmp43 = sdkProcessingMetadata;
                      let tmp44 = arg1;
                      let obj8 = sdkProcessingMetadata(arg1[30]);
                      let showSpanDropWarningResult1 = obj8.showSpanDropWarning();
                      let tmp46 = items;
                      let tmp47 = nextResult;
                      arr = items.push(tmp67);
                    }
                  } else {
                    let tmp36 = items;
                    let tmp37 = nextResult;
                    let arr1 = items.push(tmp67);
                  }
                }
                const diff = mergeResult.spans.length - items.length;
                if (diff) {
                  obj.recordDroppedEvent("before_send", "span", diff);
                }
                mergeResult.spans = items;
                tmp9 = mergeResult;
                const tmp26 = spans;
              }
              const obj2 = sdkProcessingMetadata(arg1[28]);
            } else {
              tmp9 = sdkProcessingMetadata;
            }
            tmp6 = tmp9;
            if (beforeSendTransaction) {
              if (tmp9.spans) {
                const _Object = Object;
                obj = { spanCountBeforeProcessing: tmp9.spans.length };
                tmp9.sdkProcessingMetadata = Object.assign({}, sdkProcessingMetadata.sdkProcessingMetadata, obj);
              }
              beforeSendResult = beforeSendTransaction(tmp9, tmp3);
            }
          }
          beforeSendResult = tmp6;
        }
      }).then((sdkProcessingMetadata) => {
        if (null === sdkProcessingMetadata) {
          self.recordDroppedEvent("before_send", closure_9);
          if (closure_6) {
            self.recordDroppedEvent("before_send", "span", 1 + sdkProcessingMetadata.spans || [].length);
            const arr = sdkProcessingMetadata.spans || [];
          }
          const _HermesInternal = HermesInternal;
          throw callback2("" + closure_8 + " returned `null`, will not send event.");
        } else {
          let session = arg2.getSession();
          if (!session) {
            session = arg3.getSession();
          }
          let tmp3 = tmp2;
          if (tmp2) {
            tmp3 = session;
          }
          if (tmp3) {
            const result = self._updateSessionFromEvent(session, sdkProcessingMetadata);
          }
          if (closure_6) {
            sdkProcessingMetadata = sdkProcessingMetadata.sdkProcessingMetadata;
            let num;
            if (null != sdkProcessingMetadata) {
              num = sdkProcessingMetadata.spanCountBeforeProcessing;
            }
            if (!num) {
              num = 0;
            }
            let num3 = 0;
            if (sdkProcessingMetadata.spans) {
              num3 = sdkProcessingMetadata.spans.length;
            }
            const diff = num - num3;
            if (diff > 0) {
              self.recordDroppedEvent("before_send", "span", diff);
            }
          }
          const transaction_info = sdkProcessingMetadata.transaction_info;
          if (closure_6) {
            if (transaction_info) {
              if (sdkProcessingMetadata.transaction !== sdkProcessingMetadata.transaction) {
                const _Object = Object;
                const obj = { source: "custom" };
                sdkProcessingMetadata.transaction_info = Object.assign({}, transaction_info, obj);
              }
            }
          }
          self.sendEvent(sdkProcessingMetadata, arg1);
          return sdkProcessingMetadata;
        }
      }).then(null, (originalException) => {
        if (!callback4(originalException)) {
          if (!callback3(originalException)) {
            let obj = { mechanism: { priority: false, "Bool(false)": false } };
            obj = { __sentry__: true };
            obj.data = obj;
            obj.originalException = originalException;
            self.captureException(originalException, obj);
            const _HermesInternal = HermesInternal;
            throw callback("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + originalException);
          }
        }
        throw originalException;
      });
    }
  };
  items[28] = {
    key: "_process",
    value: function _process(arg0, arg1) {
      let closure_0 = arg1;
      let closure_1 = this;
      this._numProcessing = this._numProcessing + 1;
      const _promiseBuffer = this._promiseBuffer;
      _promiseBuffer.add(arg0).then((arg0) => {
        self._numProcessing = self._numProcessing - 1;
        return arg0;
      }, (arg0) => {
        self._numProcessing = self._numProcessing - 1;
        if (arg0 === arg1(self[5]).SENTRY_BUFFER_FULL_ERROR) {
          self.recordDroppedEvent("queue_overflow", arg1);
        }
        return arg0;
      });
    }
  };
  items[29] = {
    key: "_clearOutcomes",
    value: function _clearOutcomes() {
      this._outcomes = {};
      const entries = Object.entries(this._outcomes);
      return entries.map((arg0) => {
        const tmp = callback(arg0, 2);
        const tmp2 = callback(tmp[0].split(":"), 2);
        return { reason: tmp2[0], category: tmp2[1], quantity: tmp[1] };
      });
    }
  };
  items[30] = {
    key: "_flushOutcomes",
    value: function _flushOutcomes() {
      const self = this;
      if (callback(closure_1[8]).DEBUG_BUILD) {
        const debug = callback(closure_1[9]).debug;
        debug.log("Flushing outcomes...");
      }
      const _clearOutcomesResult = self._clearOutcomes();
      if (0 !== _clearOutcomesResult.length) {
        const DEBUG_BUILD = callback(closure_1[8]).DEBUG_BUILD;
        if (self._dsn) {
          if (DEBUG_BUILD) {
            const debug4 = callback(closure_1[9]).debug;
            debug4.log("Sending outcomes:", _clearOutcomesResult);
          }
          let tunnel = self._options.tunnel;
          if (tunnel) {
            tunnel = callback(closure_1[7]).dsnToString(self._dsn);
            const obj2 = callback(closure_1[7]);
          }
          self.sendEnvelope(callback(closure_1[27]).createClientReportEnvelope(_clearOutcomesResult, tunnel));
          const obj = callback(closure_1[27]);
        } else if (DEBUG_BUILD) {
          const debug3 = callback(closure_1[9]).debug;
          debug3.log("No dsn provided, will not send outcomes");
        }
      } else if (callback(closure_1[8]).DEBUG_BUILD) {
        const debug2 = callback(closure_1[9]).debug;
        debug2.log("No outcomes to send");
      }
    }
  };
  return callback2(Client, items);
}();
