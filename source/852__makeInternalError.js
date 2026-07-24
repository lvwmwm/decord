// Module ID: 852
// Function ID: 9498
// Name: _makeInternalError
// Dependencies: [57, 5, 6, 7, 77, 853, 854, 814, 800, 801, 851, 856, 861, 807, 804, 822, 863, 839, 840, 834, 846, 825, 833, 864, 813, 808, 849, 865, 866, 835, 796, 823]

// Module 852 (_makeInternalError)
import _slicedToArray from "_slicedToArray";
import asyncGeneratorStep from "makePromiseBuffer";
import _classCallCheck from "createTransport";
import _defineProperties from "dsnFromString";
import _defineProperty from "_defineProperty";

function _makeInternalError(message) {
  return _defineProperty({ message }, closure_7, true);
}
function _makeDoNotSendEventError(message) {
  return _defineProperty({ message }, closure_8, true);
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
  let closure_0 = on;
  let closure_1 = arg3;
  let closure_2 = arg4;
  let c4 = 0;
  let c5 = false;
  on.on(arg2, () => {
    let c4 = 0;
    clearTimeout(closure_3);
    let c5 = false;
  });
  on.on(arg1, (arg0) => {
    const sum = c4 + callback(arg0);
    c4 = sum;
    if (sum >= 800000) {
      callback2(closure_0);
    } else if (!c5) {
      c5 = true;
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        outer1_2(outer1_0);
      }, 5000);
    }
  });
  on.on("flush", () => {
    callback2(closure_0);
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
    let c0 = 0;
    const _Object = Object;
    const values = Object.values(attributes);
    const item = values.forEach((arg0) => {
      if (Array.isArray(arg0)) {
        closure_0 = closure_0 + arg0.length * outer1_20(arg0[0]);
      } else {
        if (obj.isPrimitive(arg0)) {
          closure_0 = tmp3 + outer1_20(arg0);
        } else {
          closure_0 = tmp3 + 100;
        }
        obj = v0(outer1_1[14]);
      }
    });
    return c0;
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
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_7 = Symbol.for("SentryInternalError");
let closure_8 = Symbol.for("SentryDoNotSendEventError");

export const Client = (() => {
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
      obj = f9558(f9553[5]);
      transportOptions = arg0.transportOptions;
      bufferSize = undefined;
      if (null != transportOptions) {
        bufferSize = transportOptions.bufferSize;
      }
      if (null == bufferSize) {
        tmp3 = f9558;
        tmp4 = f9553;
        num = 6;
        bufferSize = f9558(f9553[6]).DEFAULT_TRANSPORT_BUFFER_SIZE;
      }
      self._promiseBuffer = obj.makePromiseBuffer(bufferSize);
      tmp5 = f9558;
      tmp6 = f9553;
      if (arg0.dsn) {
        num4 = 7;
        tmp5Result = tmp5(tmp6[7]);
        self._dsn = tmp5Result.makeDsn(arg0.dsn);
      } else {
        num2 = 8;
        if (tmp5(tmp6[8]).DEBUG_BUILD) {
          tmp7 = f9558;
          tmp8 = f9553;
          num3 = 9;
          debug = f9558(f9553[9]).debug;
          str = "No DSN provided, client will not send events.";
          warnResult = debug.warn("No DSN provided, client will not send events.");
        }
      }
      if (self._dsn) {
        tmp10 = f9558;
        tmp11 = f9553;
        num5 = 10;
        obj3 = f9558(f9553[10]);
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
        tmp16 = outer1_13;
        tmp17 = outer1_18;
        tmp18 = f9558;
        tmp19 = f9553;
        num6 = 11;
        str2 = "afterCaptureLog";
        str3 = "flushLogs";
        tmp20 = self;
        tmp21 = outer1_13(self, "afterCaptureLog", "flushLogs", outer1_18, f9558(f9553[11])._INTERNAL_flushLogsBuffer);
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
        tmp24 = outer1_13;
        tmp25 = outer1_17;
        tmp26 = f9558;
        tmp27 = f9553;
        num7 = 12;
        str4 = "afterCaptureMetric";
        str5 = "flushMetrics";
        tmp28 = self;
        tmp29 = outer1_13(self, "afterCaptureMetric", "flushMetrics", outer1_17, f9558(f9553[12])._INTERNAL_flushMetricsBuffer);
      }
      return;
    }
  }
  let obj = {
    key: "captureException",
    value: function captureException(arg0, arg1, arg2) {
      let self = this;
      const callback = arg0;
      const dependencyMap = arg2;
      self = this;
      let obj = callback(807);
      const uuid4Result = obj.uuid4();
      if (obj2.checkOrSetAlreadyCaught(arg0)) {
        if (callback(800).DEBUG_BUILD) {
          const debug = callback(801).debug;
          debug.log("Not capturing exception because it's already been captured.");
        }
        return uuid4Result;
      } else {
        const _Object = Object;
        obj = { event_id: uuid4Result };
        const merged = Object.assign(obj, arg1);
        self._process(() => {
          const eventFromExceptionResult = self.eventFromException(closure_0, merged);
          return self.eventFromException(closure_0, merged).then((arg0) => outer1_2._captureEvent(arg0, outer1_3, outer1_1)).then((arg0) => arg0);
        }, "error");
        return merged.event_id;
      }
      obj2 = callback(807);
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "captureMessage",
    value: function captureMessage(arg0, arg1, arg2, arg3) {
      let self = this;
      const callback = arg3;
      self = this;
      const obj = { event_id: callback(807).uuid4() };
      const merged = Object.assign(obj, arg2);
      const obj2 = callback(807);
      let StringResult = arg0;
      if (!obj3.isParameterizedString(arg0)) {
        const _String = String;
        StringResult = String(arg0);
      }
      obj3 = callback(804);
      const isPrimitiveResult = callback(804).isPrimitive(arg0);
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
      self._process(() => eventFromMessageResult.then((arg0) => outer1_1._captureEvent(arg0, outer1_2, outer1_0)), str);
      return merged.event_id;
    }
  };
  items[1] = obj;
  obj = {
    key: "captureEvent",
    value: function captureEvent(sdkProcessingMetadata, originalException) {
      let Client;
      let closure_5;
      let self = this;
      const callback = sdkProcessingMetadata;
      const dependencyMap = arg2;
      self = this;
      const uuid4Result = callback(807).uuid4();
      if (null != originalException) {
        if (originalException.originalException) {
          if (obj2.checkOrSetAlreadyCaught(originalException.originalException)) {
            if (callback(800).DEBUG_BUILD) {
              const debug = callback(801).debug;
              debug.log("Not capturing exception because it's already been captured.");
            }
            return uuid4Result;
          }
          obj2 = callback(807);
        }
      }
      const merged = Object.assign({ event_id: uuid4Result }, originalException);
      ({ capturedSpanScope: Client, capturedSpanIsolationScope: closure_5 } = sdkProcessingMetadata.sdkProcessingMetadata || {});
      self._process(() => {
        let tmp4 = closure_4;
        if (!closure_4) {
          tmp4 = closure_1;
        }
        return self._captureEvent(closure_0, merged, tmp4, closure_5);
      }, outer1_14(sdkProcessingMetadata.type));
      return merged.event_id;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "captureSession",
    value: function captureSession(arg0) {
      this.sendSession(arg0);
      callback(822).updateSession(arg0, { init: false });
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
  asyncGeneratorStep = asyncGeneratorStep(async function(arg0) {
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
    return callback3(...arguments);
  };
  items[8] = obj6;
  let obj7 = { key: "close" };
  let closure_2 = asyncGeneratorStep(async function(arg0) {
    const self = this;
    self.getOptions().enabled = false;
    self.emit("close");
    return yield self.flush(arg0);
  });
  obj7.value = function close(arg0) {
    return callback2(...arguments);
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
      callback(863).setupIntegration(this, arg0, this._integrations);
      if (!this._integrations[arg0.name]) {
        const items = [arg0];
        const result = callback(863).afterSetupIntegrations(this, items);
        const obj2 = callback(863);
      }
    }
  };
  items[15] = {
    key: "sendEvent",
    value: function sendEvent(arg0) {
      let self = this;
      const callback = arg0;
      self = this;
      if (arguments.length > 1) {
        if (undefined !== arguments[1]) {
          let obj = arguments[1];
        }
        self.emit("beforeSendEvent", arg0, obj);
        const obj2 = callback(839);
        let eventEnvelope = obj2.createEventEnvelope(arg0, self._dsn, self._options._metadata, self._options.tunnel);
        const tmp7 = obj.attachments || [];
        const tmp9 = tmp7[Symbol.iterator]();
        while (tmp9 !== undefined) {
          let tmp12 = callback;
          let tmp13 = dependencyMap;
          let obj3 = callback(840);
          let tmp14 = eventEnvelope;
          let obj4 = callback(840);
          eventEnvelope = obj3.addItemToEnvelope(eventEnvelope, obj4.createAttachmentEnvelopeItem(tmp10));
          continue;
        }
        self.sendEnvelope(eventEnvelope).then((arg0) => self.emit("afterSendEvent", closure_0, arg0));
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
        environment = callback(834).DEFAULT_ENVIRONMENT;
      }
      if ("aggregates" in attrs) {
        const tmp8 = attrs.attrs || {};
        if (!tmp8.release) {
          if (!release) {
            if (callback(800).DEBUG_BUILD) {
              const debug2 = callback(801).debug;
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
            if (callback(800).DEBUG_BUILD) {
              const debug = callback(801).debug;
              debug.warn("Discarded session because of missing or non-string release");
            }
          }
        }
        attrs.release = attrs.release || release;
        attrs.environment = attrs.environment || environment;
      }
      self.emit("beforeSendSession", attrs);
      self.sendEnvelope(callback(839).createSessionEnvelope(attrs, self._dsn, self._options._metadata, self._options.tunnel));
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
        if (callback(800).DEBUG_BUILD) {
          const debug = callback(801).debug;
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
      function uniqueCallback() {
        return callback(...arguments);
      }
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
      for (let num2 = 1; num2 < length; num2 = num2 + 1) {
        array[num2 - 1] = arguments[num2];
      }
      if (this._hooks[arg0]) {
        const item = arr.forEach((apply) => apply.apply(undefined, array));
      }
    }
  };
  const obj18 = { key: "sendEnvelope" };
  let closure_1 = asyncGeneratorStep(async function(arg0) {
    const self = this;
    self.emit("beforeEnvelope", arg0);
    if (self._isEnabled()) {
      if (self._transport) {
        const _transport = self._transport;
        return yield _transport.send(arg0);
      }
    }
    if (callback(800).DEBUG_BUILD) {
      const debug = callback(801).debug;
      debug.error("Transport disabled");
    }
    return {};
  });
  obj18.value = function sendEnvelope(arg0) {
    return dependencyMap(...arguments);
  };
  items[20] = obj18;
  items[21] = {
    key: "_setupIntegrations",
    value: function _setupIntegrations() {
      const integrations = this._options.integrations;
      this._integrations = callback(863).setupIntegrations(this, integrations);
      const obj = callback(863);
      const result = callback(863).afterSetupIntegrations(this, integrations);
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
            break;
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
        let obj = callback(822);
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
  let closure_0 = asyncGeneratorStep(async (arg0) => {
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
      let self = this;
      const callback = integrations;
      const dependencyMap = arg2;
      self = this;
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
      let obj = callback(846);
      return callback(846).prepareEvent(options, type, integrations, arg2, self, setLastEventId).then((contexts) => {
        if (null === contexts) {
          return contexts;
        } else {
          self.emit("postprocessEvent", contexts, integrations);
          const _Object = Object;
          let obj = { trace: integrations(825).getTraceContextFromScope(dependencyMap) };
          contexts.contexts = Object.assign(obj, contexts.contexts);
          const obj2 = integrations(825);
          const _Object2 = Object;
          obj = { dynamicSamplingContext: integrations(833).getDynamicSamplingContextFromScope(self, dependencyMap) };
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
            let DEBUG_BUILD = callback(800).DEBUG_BUILD;
            if (DEBUG_BUILD) {
              DEBUG_BUILD = outer1_15(message);
            }
            if (DEBUG_BUILD) {
              let debug = callback(801).debug;
              const obj4 = callback(864);
              const _HermesInternal = HermesInternal;
              debug.log("Captured error event `" + callback(864).getPossibleEventMessages(message)[0] || "<unknown>" + "`");
              const tmp12 = callback(864).getPossibleEventMessages(message)[0] || "<unknown>";
            }
            return self._processEvent(message, obj, currentScope, isolationScope).then((event_id) => event_id.event_id, (message) => {
              if (callback(800).DEBUG_BUILD) {
                if (outer2_12(message)) {
                  const debug2 = callback(801).debug;
                  debug2.log(message.message);
                } else {
                  const debug = callback(801).debug;
                  const warn = debug.warn;
                  if (tmp3) {
                    warn(message.message);
                  } else {
                    warn(message);
                  }
                  tmp3 = outer2_11(message);
                }
              }
            });
          }
          isolationScope = callback(825).getIsolationScope();
          const obj3 = callback(825);
        }
        currentScope = callback(825).getCurrentScope();
        const obj2 = callback(825);
      }
      obj = {};
    }
  };
  items[27] = {
    key: "_processEvent",
    value: function _processEvent(type) {
      let self = this;
      let callback = type;
      const dependencyMap = arg1;
      let closure_2 = arg2;
      let closure_3 = arg3;
      self = this;
      const options = this.getOptions();
      const sampleRate = options.sampleRate;
      let closure_6 = outer1_16(type);
      const tmp2 = outer1_15(type);
      let closure_7 = tmp2;
      let closure_8 = "before send for type `" + type.type || "error" + "`";
      if (undefined !== sampleRate) {
        const parseSampleRateResult = callback(813).parseSampleRate(sampleRate);
        let obj = callback(813);
      }
      if (tmp2) {
        if ("number" === typeof parseSampleRateResult) {
          if (obj2.safeMathRandom() > parseSampleRateResult) {
            self.recordDroppedEvent("sample_rate", "error");
            let _HermesInternal = HermesInternal;
            return callback(849).rejectedSyncPromise(outer1_10("Discarding event because it's not included in the random sample (sampling rate = " + sampleRate + ")"));
          }
          obj2 = callback(808);
        }
      }
      let closure_9 = outer1_14(type.type);
      const _prepareEventResult = self._prepareEvent(type, arg1, arg2, arg3);
      let tmp3 = type.type || "error";
      const nextPromise = self._prepareEvent(type, arg1, arg2, arg3).then((sdkProcessingMetadata) => {
        let beforeSend;
        let beforeSendSpan;
        let beforeSendTransaction;
        let ignoreSpans;
        if (null === sdkProcessingMetadata) {
          self.recordDroppedEvent("event_processor", closure_9);
          throw outer2_10("An event processor returned `null`, will not send event.");
        } else {
          if (closure_1.data) {
            if (true === closure_1.data.__sentry__) {
              return sdkProcessingMetadata;
            }
          }
          let obj = self;
          ({ beforeSend, beforeSendTransaction, beforeSendSpan, ignoreSpans } = options);
          if (outer2_15(sdkProcessingMetadata)) {
            if (beforeSend) {
              let beforeSendResult = beforeSend(sdkProcessingMetadata, tmp3);
            }
            return (function _validateBeforeSendResult(beforeSendResult, closure_8) {
              const callback = closure_8;
              const combined = "" + closure_8 + " must return `null` or a valid event.";
              if (obj.isThenable(beforeSendResult)) {
                return beforeSendResult.then((arg0) => {
                  if (!obj.isPlainObject(arg0)) {
                    if (null !== arg0) {
                      throw outer4_9(combined);
                    }
                  }
                  return arg0;
                }, (rejected) => {
                  throw outer4_9("" + closure_0 + " rejected with " + rejected);
                });
              } else {
                if (!obj2.isPlainObject(beforeSendResult)) {
                  if (null !== beforeSendResult) {
                    throw outer3_9(combined);
                  }
                }
                return beforeSendResult;
              }
              obj = callback(804);
            })(beforeSendResult, closure_8);
          }
          let tmp6 = sdkProcessingMetadata;
          if (outer2_16(sdkProcessingMetadata)) {
            if (beforeSendSpan) {
              const result = type(closure_1[28]).convertTransactionEventToSpanJson(sdkProcessingMetadata);
              if (null != ignoreSpans) {
                if (ignoreSpans.length) {
                  beforeSendResult = null;
                  const obj3 = type(closure_1[29]);
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
                      let tmp31 = type;
                      let tmp32 = closure_1;
                      let obj7 = type(closure_1[29]);
                      let tmp33 = nextResult;
                      let tmp34 = ignoreSpans;
                      if (obj7.shouldIgnoreSpan(tmp67, ignoreSpans)) {
                        let tmp52 = type;
                        let tmp53 = closure_1;
                        let obj9 = type(closure_1[29]);
                        let tmp54 = spans;
                        let tmp55 = nextResult;
                        let reparentChildSpansResult = obj9.reparentChildSpans(tmp26, tmp67);
                        continue;
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
                      let tmp43 = type;
                      let tmp44 = closure_1;
                      let obj8 = type(closure_1[30]);
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
                tmp26 = spans;
              }
              const obj2 = type(closure_1[28]);
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
          throw outer2_10("An event processor returned `null`, will not send event.");
        } else {
          if (closure_1.data) {
            if (true === closure_1.data.__sentry__) {
              return sdkProcessingMetadata;
            }
          }
          let obj = self;
          ({ beforeSend, beforeSendTransaction, beforeSendSpan, ignoreSpans } = options);
          if (outer2_15(sdkProcessingMetadata)) {
            if (beforeSend) {
              let beforeSendResult = beforeSend(sdkProcessingMetadata, tmp3);
            }
            return (function _validateBeforeSendResult(beforeSendResult, closure_8) {
              const callback = closure_8;
              const combined = "" + closure_8 + " must return `null` or a valid event.";
              if (obj.isThenable(beforeSendResult)) {
                return beforeSendResult.then((arg0) => {
                  if (!obj.isPlainObject(arg0)) {
                    if (null !== arg0) {
                      throw outer4_9(combined);
                    }
                  }
                  return arg0;
                }, (rejected) => {
                  throw outer4_9("" + closure_0 + " rejected with " + rejected);
                });
              } else {
                if (!obj2.isPlainObject(beforeSendResult)) {
                  if (null !== beforeSendResult) {
                    throw outer3_9(combined);
                  }
                }
                return beforeSendResult;
              }
              obj = callback(804);
            })(beforeSendResult, closure_8);
          }
          let tmp6 = sdkProcessingMetadata;
          if (outer2_16(sdkProcessingMetadata)) {
            if (beforeSendSpan) {
              const result = type(closure_1[28]).convertTransactionEventToSpanJson(sdkProcessingMetadata);
              if (null != ignoreSpans) {
                if (ignoreSpans.length) {
                  beforeSendResult = null;
                  const obj3 = type(closure_1[29]);
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
                      let tmp31 = type;
                      let tmp32 = closure_1;
                      let obj7 = type(closure_1[29]);
                      let tmp33 = nextResult;
                      let tmp34 = ignoreSpans;
                      if (obj7.shouldIgnoreSpan(tmp67, ignoreSpans)) {
                        let tmp52 = type;
                        let tmp53 = closure_1;
                        let obj9 = type(closure_1[29]);
                        let tmp54 = spans;
                        let tmp55 = nextResult;
                        let reparentChildSpansResult = obj9.reparentChildSpans(tmp26, tmp67);
                        continue;
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
                      let tmp43 = type;
                      let tmp44 = closure_1;
                      let obj8 = type(closure_1[30]);
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
                tmp26 = spans;
              }
              const obj2 = type(closure_1[28]);
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
            self.recordDroppedEvent("before_send", "span", 1 + type.spans || [].length);
            const arr = type.spans || [];
          }
          const _HermesInternal = HermesInternal;
          throw outer2_10("" + closure_8 + " returned `null`, will not send event.");
        } else {
          session = session.getSession();
          if (!session) {
            session = session2.getSession();
          }
          let tmp3 = closure_7;
          if (closure_7) {
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
              if (sdkProcessingMetadata.transaction !== type.transaction) {
                const _Object = Object;
                const obj = { source: "custom" };
                sdkProcessingMetadata.transaction_info = Object.assign({}, transaction_info, obj);
              }
            }
          }
          self.sendEvent(sdkProcessingMetadata, closure_1);
          return sdkProcessingMetadata;
        }
      }).then(null, (originalException) => {
        if (!outer2_12(originalException)) {
          if (!outer2_11(originalException)) {
            let obj = { mechanism: { handled: false, type: "internal" } };
            obj = { __sentry__: true };
            obj.data = obj;
            obj.originalException = originalException;
            self.captureException(originalException, obj);
            const _HermesInternal = HermesInternal;
            throw outer2_9("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + originalException);
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
      const self = this;
      this._numProcessing = this._numProcessing + 1;
      const _promiseBuffer = this._promiseBuffer;
      _promiseBuffer.add(arg0).then((arg0) => {
        self._numProcessing = self._numProcessing - 1;
        return arg0;
      }, (arg0) => {
        self._numProcessing = self._numProcessing - 1;
        if (arg0 === callback(_self[5]).SENTRY_BUFFER_FULL_ERROR) {
          self.recordDroppedEvent("queue_overflow", callback);
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
      if (callback(800).DEBUG_BUILD) {
        const debug = callback(801).debug;
        debug.log("Flushing outcomes...");
      }
      const _clearOutcomesResult = self._clearOutcomes();
      if (0 !== _clearOutcomesResult.length) {
        const DEBUG_BUILD = callback(800).DEBUG_BUILD;
        if (self._dsn) {
          if (DEBUG_BUILD) {
            const debug4 = callback(801).debug;
            debug4.log("Sending outcomes:", _clearOutcomesResult);
          }
          let tunnel = self._options.tunnel;
          if (tunnel) {
            tunnel = callback(814).dsnToString(self._dsn);
            const obj2 = callback(814);
          }
          self.sendEnvelope(callback(865).createClientReportEnvelope(_clearOutcomesResult, tunnel));
          const obj = callback(865);
        } else if (DEBUG_BUILD) {
          const debug3 = callback(801).debug;
          debug3.log("No dsn provided, will not send outcomes");
        }
      } else if (callback(800).DEBUG_BUILD) {
        const debug2 = callback(801).debug;
        debug2.log("No outcomes to send");
      }
    }
  };
  return _defineProperties(Client, items);
})();
