// Module ID: 753
// Function ID: 754
// Name: Client
// Dependencies: [32, 5, 41, 42, 754, 755, 714, 700, 701, 752, 757, 762, 707, 704, 722, 764, 740, 741, 735, 747, 725, 734, 765, 713, 708, 750, 766, 767, 736, 696, 723]

// Module 753 (Client)
import _mod700 from "module_700" /* 700 */;
import _mod704 from "module_704" /* 704 */;
import uuid4 from "uuid4" /* 707 */;
import _mod714 from "module_714" /* 714 */;
import closeSession from "closeSession" /* 722 */;
import _mod725 from "module_725" /* 725 */;
import freezeDscOnSpan from "freezeDscOnSpan" /* 734 */;
import DEFAULT_ENVIRONMENT from "DEFAULT_ENVIRONMENT" /* 735 */;
import _enhanceEventWithSdkInfo from "_enhanceEventWithSdkInfo" /* 740 */;
import _mod741 from "module_741" /* 741 */;
import SENTRY_BUFFER_FULL_ERROR from "SENTRY_BUFFER_FULL_ERROR" /* 754 */;
import _mod764 from "module_764" /* 764 */;
import _mod765 from "module_765" /* 765 */;
import _mod766 from "module_766" /* 766 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const require = globalThis.__r;
let _numProcessing, _require, closure_3, closure_4, dependencyMap, set;

let tmp2;
const CONSOLE_LEVELS = tmp2(701);
const _mod752 = tmp2(752);
const DEFAULT_TRANSPORT_BUFFER_SIZE = tmp2(755);
const _INTERNAL_captureLog = tmp2(757);
const _INTERNAL_captureMetric = tmp2(762);
const f80809 = (item) => {
  if (Array.isArray(item)) {
    let num4;
    const first = item[0];
    const length = item.length;
    const tmp4 = closure_0;
    if (typeof first === "string") {
      num4 = 2 * first.length;
    } else {
      num4 = 8;
      if (typeof first !== "number") {
        let num7 = 0;
        if (typeof first === "boolean") {
          num7 = 4;
        }
        num4 = num7;
      }
    }
    closure_0 = tmp4 + length * num4;
  } else {
    const obj = _mod704;
    if (obj.isPrimitive(item)) {
      let num2;
      if (typeof item === "string") {
        num2 = 2 * item.length;
      } else {
        num2 = 8;
        if (typeof item !== "number") {
          let num6 = 0;
          if (typeof item === "boolean") {
            num6 = 4;
          }
          num2 = num6;
        }
      }
      closure_0 = tmp3 + num2;
    } else {
      closure_0 = tmp3 + 100;
    }
  }
};
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
  const attributes = name.attributes;
  let c0;
  let num3 = 0;
  if (attributes) {
    c0 = 0;
    const _Object = Object;
    const values = Object.values(attributes);
    const item = values.forEach(f80809);
    num3 = c0;
  }
  return num + 8 + num3;
}
function estimateLogSizeInBytes(message) {
  let num = 0;
  if (message.message) {
    let num2 = 2;
    num = 2 * message.message.length;
  }
  const attributes = message.attributes;
  let closure_0;
  let num3 = 0;
  if (attributes) {
    closure_0 = 0;
    const _Object = Object;
    const values = Object.values(attributes);
    const item = values.forEach(f80809);
    num3 = closure_0;
  }
  return num + num3;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let c4 = "Not capturing exception because it's already been captured.";
let c5 = "Discarded session because of missing or non-string release";
let closure_6 = Symbol.for("SentryInternalError");
let closure_7 = Symbol.for("SentryDoNotSendEventError");
let React;
let closure_2;
let _false;
class Client {
  constructor(_options) {
    let envelopeEndpointWithUrlEncodedAuth;
    let recordDroppedEvent;
    const f80806 = () => {
      sum = 0;
      clearTimeout(closure_3);
      c5 = false;
    };
    const f80807 = (arg0) => {
      sum = sum + closure_1(arg0);
      if (sum >= 800000) {
        closure_2(self);
      } else {
        const tmp2 = c5;
        if (!tmp2) {
          c5 = true;
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => {
            closure_1_2(self);
          }, 5000);
        }
      }
    };
    const f80808 = () => {
      closure_2(self);
    };
    const self = this;
    _classCallCheck(this, Client);
    this._options = _options;
    this._integrations = {};
    this._numProcessing = 0;
    this._outcomes = {};
    this._hooks = {};
    this._eventProcessors = [];
    let tmp2 = require;
    const transportOptions = _options.transportOptions;
    let bufferSize;
    const makePromiseBuffer = SENTRY_BUFFER_FULL_ERROR.makePromiseBuffer;
    if (transportOptions != null) {
      bufferSize = transportOptions.bufferSize;
    }
    if (bufferSize == null) {
      bufferSize = DEFAULT_TRANSPORT_BUFFER_SIZE.DEFAULT_TRANSPORT_BUFFER_SIZE;
    }
    self._promiseBuffer = makePromiseBuffer(bufferSize);
    if (_options.dsn) {
      const tmp2Result = _mod714;
      self._dsn = tmp2Result.makeDsn(_options.dsn);
    } else if (_mod700.DEBUG_BUILD) {
      const debug = CONSOLE_LEVELS.debug;
      debug.warn("No DSN provided, client will not send events.");
    }
    if (self._dsn) {
      let sdk;
      const getEnvelopeEndpointWithUrlEncodedAuth = _mod752.getEnvelopeEndpointWithUrlEncodedAuth;
      const _dsn = self._dsn;
      const tunnel = _options.tunnel;
      _mod752;
      if (_options._metadata) {
        sdk = _options._metadata.sdk;
      }
      const obj = { tunnel: self._options.tunnel, recordDroppedEvent: recordDroppedEvent.bind(self), url: envelopeEndpointWithUrlEncodedAuth };
      recordDroppedEvent = self.recordDroppedEvent;
      envelopeEndpointWithUrlEncodedAuth = getEnvelopeEndpointWithUrlEncodedAuth(_dsn, tunnel, sdk);
      const transport = _options.transport;
      const merged = Object.assign(_options.transportOptions);
      self._transport = transport(obj);
    }
    let enableLogs = self._options.enableLogs;
    _options = self._options;
    if (enableLogs == null) {
      const _experiments = self._options._experiments;
      let enableLogs1;
      if (_experiments != null) {
        enableLogs1 = _experiments.enableLogs;
      }
      enableLogs = enableLogs1;
    }
    _options.enableLogs = enableLogs;
    if (self._options.enableLogs) {
      closure_1 = estimateLogSizeInBytes;
      const _INTERNAL_flushLogsBuffer = _INTERNAL_captureLog._INTERNAL_flushLogsBuffer;
      let c3;
      c4 = 0;
      c5 = false;
      self.on("flushLogs", f80806);
      self.on("afterCaptureLog", f80807);
      self.on("flush", f80808);
    }
    let flag2 = self._options.enableMetrics;
    if (flag2 == null) {
      const _experiments2 = self._options._experiments;
      let enableMetrics;
      if (_experiments2 != null) {
        enableMetrics = _experiments2.enableMetrics;
      }
      flag2 = enableMetrics;
    }
    if (flag2 == null) {
      flag2 = true;
    }
    if (flag2) {
      closure_1 = estimateMetricSizeInBytes;
      closure_2 = _INTERNAL_captureMetric._INTERNAL_flushMetricsBuffer;
      closure_3 = undefined;
      let sum = 0;
      c5 = false;
      self.on("flushMetrics", f80806);
      self.on("afterCaptureMetric", f80807);
      self.on("flush", f80808);
    }
  }
}
const entry = {
  key: "captureException",
  value: function captureException(arg0, arg1, arg2) {
    const self = this;
    let closure_1 = arg0;
    let closure_2 = arg2;
    const obj = uuid4;
    const uuid4Result = obj.uuid4();
    const obj2 = uuid4;
    if (obj2.checkOrSetAlreadyCaught(arg0)) {
      if (_mod700.DEBUG_BUILD) {
        const debug = tmp(701).debug;
        debug.log(c4);
      }
      return uuid4Result;
    } else {
      const obj3 = { event_id: uuid4Result };
      const merged = Object.assign(arg1);
      self._process(() => {
        const eventFromExceptionResult = self.eventFromException(closure_1, obj3);
        const nextPromise = eventFromExceptionResult.then((result) => self._captureEvent(result, obj3, closure_1_2));
        return nextPromise.then((result) => result);
      }, "error");
      return obj3.event_id;
    }
  }
};
let items = [
  entry,
  {
    key: "captureMessage",
    value: function captureMessage(arg0, arg1, arg2, arg3) {
      let obj2;
      const self = this;
      let closure_1 = arg3;
      const obj = { event_id: obj2.uuid4() };
      obj2 = uuid4;
      const merged = Object.assign(arg2);
      let StringResult = arg0;
      const obj3 = _mod704;
      if (!obj3.isParameterizedString(arg0)) {
        const _String = String;
        StringResult = String(arg0);
      }
      const tmpResult = _mod704;
      const isPrimitiveResult = tmpResult.isPrimitive(arg0);
      if (isPrimitiveResult) {
        let eventFromMessageResult = self.eventFromMessage(StringResult, arg1, obj);
      } else {
        eventFromMessageResult = self.eventFromException(arg0, obj);
      }
      let str = "error";
      const _process = self._process;
      if (isPrimitiveResult) {
        str = "unknown";
      }
      _process(() => eventFromMessageResult.then((result) => self._captureEvent(result, obj, closure_1_1)), str);
      return obj.event_id;
    }
  },
  {
    key: "captureEvent",
    value: function captureEvent(sdkProcessingMetadata, originalException, arg2) {
      let closure_129_0;
      let closure_129_4;
      const self = this;
      let closure_1 = sdkProcessingMetadata;
      let closure_2 = arg2;
      let tmp2 = dependencyMap;
      const obj = uuid4;
      const uuid4Result = obj.uuid4();
      originalException = undefined;
      if (originalException != null) {
        originalException = originalException.originalException;
      }
      if (originalException) {
        const tmpResult = uuid4;
        if (tmpResult.checkOrSetAlreadyCaught(originalException.originalException)) {
          if (_mod700.DEBUG_BUILD) {
            const debug = tmp(701).debug;
            debug.log(c4);
          }
          return uuid4Result;
        }
      }
      const obj2 = { event_id: uuid4Result };
      const merged = Object.assign(originalException);
      ({ capturedSpanScope: closure_129_4, capturedSpanIsolationScope: closure_129_0 } = sdkProcessingMetadata.sdkProcessingMetadata || {});
      let str = sdkProcessingMetadata.type;
      let str2 = "replay";
      if ("replay_event" !== str) {
        if (!str) {
          str = "error";
        }
        str2 = str;
      }
      self._process(() => {
        let tmp4 = closure_1_4;
        const _captureEvent = self._captureEvent;
        const tmp2 = closure_1;
        const tmp3 = obj2;
        if (!closure_1_4) {
          tmp4 = closure_2;
        }
        return _captureEvent(tmp2, tmp3, tmp4, closure_1_0);
      }, str2);
      return obj2.event_id;
    }
  },
  {
    key: "captureSession",
    value: function captureSession(arg0) {
      this.sendSession(arg0);
      const obj = closeSession;
      obj.updateSession(arg0, { init: false });
    }
  },
  {
    key: "getDsn",
    value: function getDsn() {
      return this._dsn;
    }
  },
  {
    key: "getOptions",
    value: function getOptions() {
      return this._options;
    }
  },
  {
    key: "getSdkMetadata",
    value: function getSdkMetadata() {
      return this._options._metadata;
    }
  },
  {
    key: "getTransport",
    value: function getTransport() {
      return this._transport;
    }
  },
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,

];
const entry1 = {
  key: "flush",
  value: function flush(arg0) {
    return closure_3(...arguments);
  }
};
_false = _asyncToGenerator(async function(arg0) {
  const self = this;
  closure_1 = arg0;
  let c3 = 0;
  c4 = 0;
  return (async (arg0) => {
    closure_2 = tmp;
    closure_0 = closure_1;
    const _transport = self._transport;
    if (!_transport) {
      return true;
    }
    self.emit("flush");
    closure_2 = await self._isClientDoneProcessing(tmp15);
    closure_3 = await _transport.flush(closure_0);
    return closure_2 && closure_3;
  })();
});
items[8] = entry1;
const entry2 = {
  key: "close",
  value: function close(arg0) {
    return closure_2(...arguments);
  }
};
closure_2 = _asyncToGenerator(async function(arg0) {
  const self = this;
  closure_1 = arg0;
  c4 = 0;
  c5 = 0;
  return (async (arg0) => {
    closure_3 = self;
    value = await self.flush(closure_1);
    closure_3.getOptions().enabled = false;
    closure_3.emit("close");
    return value;
  })();
});
items[9] = entry2;
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
      integrations = self._options.integrations;
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
    const tmp = this._integrations[arg0.name];
    const obj = _mod764;
    obj.setupIntegration(this, arg0, this._integrations);
    if (!tmp) {
      const items = [arg0];
      const tmp2Result = _mod764;
      const result = tmp2Result.afterSetupIntegrations(this, items);
    }
  }
};
items[15] = {
  key: "sendEvent",
  value: function sendEvent(arg0) {
    const self = this;
    let closure_0 = arg0;
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    self.emit("beforeSendEvent", arg0, obj);
    const obj2 = _enhanceEventWithSdkInfo;
    let eventEnvelope = obj2.createEventEnvelope(arg0, self._dsn, self._options._metadata, self._options.tunnel);
    const tmp3 = obj.attachments || [];
    for (const item10025 of tmp3) {
      let tmp6 = _mod741;
      let addItemToEnvelope = tmp6.addItemToEnvelope;
      let obj3 = _mod741;
      eventEnvelope = addItemToEnvelope(eventEnvelope, obj3.createAttachmentEnvelopeItem(item10025));
      continue;
    }
    const sendEnvelopeResult = self.sendEnvelope(eventEnvelope);
    sendEnvelopeResult.then((result) => self.emit("afterSendEvent", closure_0, result));
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
      environment = DEFAULT_ENVIRONMENT.DEFAULT_ENVIRONMENT;
    }
    if ("aggregates" in attrs) {
      const tmp7 = attrs.attrs || {};
      if (!tmp7.release) {
        if (!release) {
          const tmp8 = require;
          if (_mod700.DEBUG_BUILD) {
            const debug2 = tmp8(701).debug;
            debug2.warn(c5);
          }
        }
      }
      tmp7.release = tmp7.release || release;
      tmp7.environment = tmp7.environment || environment;
      attrs.attrs = tmp7;
    } else {
      if (!attrs.release) {
        if (!release) {
          const tmp3 = require;
          if (_mod700.DEBUG_BUILD) {
            const debug = tmp3(701).debug;
            debug.warn(c5);
          }
        }
      }
      attrs.release = attrs.release || release;
      attrs.environment = attrs.environment || environment;
    }
    self.emit("beforeSendSession", attrs);
    const obj = _enhanceEventWithSdkInfo;
    self.sendEnvelope(obj.createSessionEnvelope(attrs, self._dsn, self._options._metadata, self._options.tunnel));
  }
};
items[17] = {
  key: "recordDroppedEvent",
  value: function recordDroppedEvent(arg0, arg1) {
    let num = arg2;
    if (arg2 === undefined) {
      num = 1;
    }
    const self = this;
    if (this._options.sendClientReports) {
      const _HermesInternal = HermesInternal;
      const combined = "" + arg0 + ":" + arg1;
      const tmp5 = require;
      if (_mod700.DEBUG_BUILD) {
        const debug = tmp5(701).debug;
        let str3 = "";
        const log = debug.log;
        if (num > 1) {
          const _HermesInternal2 = HermesInternal;
          str3 = " (" + num + " times)";
        }
        const _HermesInternal3 = HermesInternal;
        log("Recording outcome: \"" + combined + "\"" + str3);
      }
      let num3 = self._outcomes[combined];
      const _outcomes = self._outcomes;
      if (!num3) {
        num3 = 0;
      }
      _outcomes[combined] = num3 + num;
    }
  }
};
items[18] = {
  key: "on",
  value: function on(arg0, arg1) {
    let closure_0 = arg1;
    set = this._hooks[arg0];
    const _hooks = this._hooks;
    if (!set) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set();
    }
    _hooks[arg0] = set;
    function uniqueCallback() {
      return closure_0(...HermesBuiltin.copyRestArgs());
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
    const args = [...arguments].slice();
    if (this._hooks[arg0]) {
      const item = arr.forEach((fn) => fn(...closure_0));
    }
  }
};
const entry3 = {
  key: "sendEnvelope",
  value: function sendEnvelope(arg0) {
    return closure_1(...arguments);
  }
};
_asyncToGenerator(async function(arg0) {
  const self = this;
  closure_1 = arg0;
  let c6 = 0;
  let c7 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        return { value, done: true };
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            return { value, done: true };
          } else {
            closure_3 = tmp;
            self.emit("beforeEnvelope", closure_1);
            _transport = self._isEnabled();
            const tmp27 = closure_1;
            if (_transport) {
              _transport = tmp26._transport;
              if (_transport) {
                c5 = 1;
                const _transport2 = tmp26._transport;
                _transport = _transport2.send(tmp27);
                c6 = 2;
                c7 = 1;
                return { value: _transport, done: false };
              }
            }
            if (self(closure_1[7]).DEBUG_BUILD) {
              const debug2 = self(closure_1[8]).debug;
              _transport = debug2.error("Transport disabled");
            }
            c7 = 3;
            return { value: {}, done: true };
          }
        } else if (1 === tmp4) {
          c5 = 0;
          closure_0 = closure_4;
          _transport = self;
          if (self(closure_1[7]).DEBUG_BUILD) {
            const debug = self(closure_1[8]).debug;
            debug.error("Error while sending envelope:", closure_0);
          }
          c7 = 3;
          return { value: {}, done: true };
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          return { value, done: true };
        } else {
          c5 = 0;
          c7 = 3;
          return { value, done: true };
        }
      } catch (tmp20) {
        closure_4 = tmp20;
        if (0 === c5) {
          c7 = 3;
          throw tmp20;
        } else {
          c6 = 1;
        }
      }
    }
  })();
});
items[20] = entry3;
items[21] = {
  key: "_setupIntegrations",
  value: function _setupIntegrations() {
    integrations = this._options.integrations;
    const obj = _mod764;
    this._integrations = obj.setupIntegrations(this, integrations);
    const obj2 = _mod764;
    const result = obj2.afterSetupIntegrations(this, integrations);
  }
};
items[22] = {
  key: "_updateSessionFromEvent",
  value: function _updateSessionFromEvent(status, level) {
    let errors;
    let flag = "fatal" === level.level;
    const exception = level.exception;
    let values;
    if (exception != null) {
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
        if (mechanism != null) {
          handled = mechanism.handled;
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
    let tmp8 = tmp7 && 0 === status.errors;
    if (!tmp8) {
      if (tmp7) {
        tmp7 = flag;
      }
      tmp8 = tmp7;
    }
    if (tmp8) {
      let obj = flag;
      const updateSession = closeSession.updateSession;
      closeSession;
      if (flag) {
        obj = { status: "crashed" };
      }
      const obj2 = { errors };
      const merged = Object.assign(obj);
      errors = status.errors;
      if (!errors) {
        const _Number = Number;
        if (!flag2) {
          flag2 = flag;
        }
        errors = _Number(flag2);
      }
      const self = this;
      updateSession(status, obj2);
      this.captureSession(status);
    }
  }
};
const entry4 = {
  key: "_isClientDoneProcessing",
  value: function _isClientDoneProcessing(arg0) {
    return closure_0(...arguments);
  }
};
React = _asyncToGenerator(async function(arg0) {
  let self = this;
  closure_1 = arg0;
  c4 = 0;
  c5 = 0;
  return (async function(arg0, value) {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        return { value, done: true };
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            _numProcessing = self;
            closure_2 = self;
            closure_0 = closure_1;
            closure_1 = 0;
            if (closure_1) {
              if (closure_1 >= tmp19) {
                c5 = 3;
                return { value: false, done: true };
              }
            }
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          return { value, done: true };
        } else if (_numProcessing._numProcessing) {
          closure_1 = closure_1 + 1;
        } else {
          c5 = 3;
          return { value: true, done: true };
        }
        self = this;
        const self2 = this;
        c4 = 1;
        c5 = 1;
        const obj4 = { value: new Promise((arg0) => setTimeout(arg0, 1)), done: false };
        return obj4;
      } catch (tmp14) {
        c5 = 3;
        throw tmp14;
      }
    }
  })();
});
items[23] = entry4;
items[24] = {
  key: "_isEnabled",
  value: function _isEnabled() {
    const tmp = false !== this.getOptions().enabled && undefined !== this._transport;
    return tmp;
  }
};
items[25] = {
  key: "_prepareEvent",
  value: function _prepareEvent(type, integrations, arg2, setLastEventId) {
    let closure_0;
    const self = this;
    dependencyMap = integrations;
    _require = arg2;
    const options = this.getOptions();
    const keys = Object.keys(this._integrations);
    let tmp2 = !integrations.integrations;
    if (tmp2) {
      let length;
      if (keys != null) {
        length = keys.length;
      }
      tmp2 = length;
    }
    if (tmp2) {
      integrations.integrations = keys;
    }
    self.emit("preprocessEvent", type, integrations);
    if (!type.type) {
      let event_id = type.event_id;
      setLastEventId = setLastEventId.setLastEventId;
      if (!event_id) {
        event_id = integrations.event_id;
      }
      setLastEventId(event_id);
    }
    let obj = require("applyClientOptions");
    const prepareEventResult = obj.prepareEvent(options, type, integrations, arg2, self, setLastEventId);
    return prepareEventResult.then((contexts) => {
      let obj2;
      let obj3;
      if (null === contexts) {
        return contexts;
      } else {
        self.emit("postprocessEvent", contexts, integrations);
        const obj = { trace: obj2.getTraceContextFromScope(closure_0) };
        obj2 = _mod725;
        const merged = Object.assign(contexts.contexts);
        contexts.contexts = obj;
        const obj4 = { dynamicSamplingContext: obj3.getDynamicSamplingContextFromScope(self, closure_0) };
        obj3 = freezeDscOnSpan;
        const merged1 = Object.assign(contexts.sdkProcessingMetadata);
        contexts.sdkProcessingMetadata = obj4;
        return contexts;
      }
    });
  }
};
items[26] = {
  key: "_captureEvent",
  value: function _captureEvent(type) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    let currentScope = arg2;
    if (arg2 === undefined) {
      const tmp2 = require;
      const obj2 = _mod725;
      currentScope = obj2.getCurrentScope();
    }
    let isolationScope = arg3;
    if (arg3 === undefined) {
      let tmp6 = dependencyMap;
      const obj3 = _mod725;
      isolationScope = obj3.getIsolationScope();
    }
    const tmp9 = _mod700.DEBUG_BUILD && undefined === type.type;
    if (tmp9) {
      let debug = tmp7(701).debug;
      const log = debug.log;
      const _HermesInternal = HermesInternal;
      const tmp7Result = _mod765;
      const tmp10 = tmp7Result.getPossibleEventMessages(type)[0] || "<unknown>";
      log("Captured error event `" + tmp10 + "`");
    }
    const _processEventResult = this._processEvent(type, obj, currentScope, isolationScope);
    return _processEventResult.then((event_id) => event_id.event_id, (message) => {
      if (require("module_700").DEBUG_BUILD) {
        const tmp4 = message && typeof message === "object" && closure_1_7 in message;
        if (tmp4) {
          const debug2 = tmp(tmp2[8]).debug;
          debug2.log(message.message);
        } else {
          const tmp6 = message && typeof message === "object" && closure_1_6 in message;
          const debug = tmp(tmp2[8]).debug;
          const warn = debug.warn;
          if (tmp6) {
            warn(message.message);
          } else {
            warn(message);
          }
        }
      }
    });
  }
};
items[27] = {
  key: "_processEvent",
  value: function _processEvent(type, arg1, arg2, arg3) {
    let parseSampleRateResult;
    let str2;
    const self = this;
    dependencyMap = type;
    const data = arg1;
    let session = arg2;
    const session2 = arg3;
    const options = this.getOptions();
    const sampleRate = options.sampleRate;
    closure_6 = "transaction" === type.type;
    let tmp2 = undefined === type.type;
    closure_7 = tmp2;
    let tmp3 = type.type || "error";
    let closure_8 = "before send for type `" + tmp3 + "`";
    if (undefined !== sampleRate) {
      let obj = str2(713);
      parseSampleRateResult = obj.parseSampleRate(sampleRate);
    }
    if (tmp2) {
      if (typeof parseSampleRateResult === "number") {
        let obj3 = str2(708);
        const tmp10 = str2;
        if (obj3.safeMathRandom() > parseSampleRateResult) {
          const recordDroppedEventResult = self.recordDroppedEvent("sample_rate", "error");
          let _HermesInternal = HermesInternal;
          let obj2 = { message: "Discarding event because it's not included in the random sample (sampling rate = " + sampleRate + ")" };
          const flag = true;
          obj2[closure_7] = true;
          const rejectedSyncPromise = tmp10(750).rejectedSyncPromise;
          return rejectedSyncPromise(obj2);
        }
      }
    }
    let str = type.type;
    str2 = "replay";
    if ("replay_event" !== str) {
      if (!str) {
        str = "error";
      }
      str2 = str;
    }
    const _prepareEventResult = self._prepareEvent(type, arg1, arg2, arg3);
    let nextPromise = _prepareEventResult.then((result) => {
      function processBeforeSend(self, options, sdkProcessingMetadata, arg3) {
        let beforeSend;
        let beforeSendSpan;
        let beforeSendTransaction;
        let ignoreSpans;
        let length;
        ({ beforeSend, beforeSendTransaction, beforeSendSpan, ignoreSpans } = options);
        if (closure_1_8(sdkProcessingMetadata)) {
          if (beforeSend) {
            return beforeSend(sdkProcessingMetadata, arg3);
          }
        }
        let tmp = sdkProcessingMetadata;
        if (self(sdkProcessingMetadata)) {
          let tmp2;
          if (beforeSendSpan) {
            const obj = str2(type[27]);
            const result = obj.convertTransactionEventToSpanJson(sdkProcessingMetadata);
            let length1;
            if (ignoreSpans != null) {
              length1 = ignoreSpans.length;
            }
            if (length1) {
              const tmp4Result = str2(type[28]);
              if (tmp4Result.shouldIgnoreSpan(result, ignoreSpans)) {
                return null;
              }
            }
            let mergeResult = sdkProcessingMetadata;
            if (beforeSendSpan) {
              const beforeSendSpanResult = beforeSendSpan(result);
              if (beforeSendSpanResult) {
                const merge = str2(type[30]).merge;
                str2(type[30]);
                const tmp4Result5 = str2(type[27]);
                mergeResult = merge(sdkProcessingMetadata, tmp4Result5.convertSpanJsonToTransactionEvent(beforeSendSpanResult));
              } else {
                const tmp4Result6 = str2(type[29]);
                tmp4Result6.showSpanDropWarning();
                mergeResult = sdkProcessingMetadata;
              }
            }
            tmp2 = mergeResult;
            if (mergeResult.spans) {
              const items = [];
              const spans = mergeResult.spans;
              for (const item10054 of spans) {
                let tmp20 = item10054;
                let length2;
                if (ignoreSpans != null) {
                  length2 = ignoreSpans.length;
                }
                if (length2) {
                  let tmp23 = str2;
                  let tmp25 = type;
                  let obj5 = str2(type[28]);
                  if (obj5.shouldIgnoreSpan(tmp20, ignoreSpans)) {
                    let tmp23Result = tmp23(tmp25[28]);
                    let reparentChildSpansResult = tmp23Result.reparentChildSpans(spans, tmp20);
                    continue;
                  }
                }
                if (beforeSendSpan) {
                  let beforeSendSpanResult1 = beforeSendSpan(tmp20);
                  if (beforeSendSpanResult1) {
                    let arr = items.push(tmp31);
                  } else {
                    let obj6 = str2(type[29]);
                    let showSpanDropWarningResult1 = obj6.showSpanDropWarning();
                    let arr4 = items.push(tmp20);
                  }
                } else {
                  let arr5 = items.push(tmp20);
                }
              }
              const diff = mergeResult.spans.length - items.length;
              if (diff) {
                self.recordDroppedEvent("before_send", "span", diff);
              }
              mergeResult.spans = items;
              tmp2 = mergeResult;
            }
          } else {
            tmp2 = sdkProcessingMetadata;
          }
          tmp = tmp2;
          if (beforeSendTransaction) {
            if (tmp2.spans) {
              const obj2 = { spanCountBeforeProcessing: length };
              length = tmp2.spans.length;
              const merged = Object.assign(sdkProcessingMetadata.sdkProcessingMetadata);
              tmp2.sdkProcessingMetadata = obj2;
            }
            return beforeSendTransaction(tmp2, arg3);
          }
        }
        return tmp;
      }
      if (null === result) {
        self.recordDroppedEvent("event_processor", str2);
        let obj2 = { message: "An event processor returned `null`, will not send event." };
        obj2[closure_7] = true;
        throw obj2;
      } else {
        let nextPromise;
        if (data.data) {
          if (true === data.data.__sentry__) {
            return result;
          }
        }
        let tmp = self;
        let tmp2 = options;
        const promise = processBeforeSend(self, options, result, data);
        let closure_0 = closure_8;
        const _HermesInternal = HermesInternal;
        str2 = "";
        const combined = "" + closure_8 + " must return `null` or a valid event.";
        let obj = _mod704;
        const tmp8 = require;
        if (obj.isThenable(promise)) {
          nextPromise = promise.then((result) => {
            const obj = str2(type[13]);
            if (!obj.isPlainObject(result)) {
              if (null !== result) {
                const obj2 = { message: combined };
                obj2[closure_2_6] = true;
                throw obj2;
              }
            }
            return result;
          }, (arg0) => {
            const obj = { message: "" + closure_0 + " rejected with " + arg0 };
            obj[closure_2_6] = true;
            throw obj;
          });
        } else {
          nextPromise = promise;
          const tmp8Result = tmp8(704);
          if (!tmp8Result.isPlainObject(promise)) {
            nextPromise = promise;
            if (null !== promise) {
              const obj3 = { message: combined };
              obj3[closure_6] = true;
              throw obj3;
            }
          }
        }
        return nextPromise;
      }
    });
    const nextPromise1 = nextPromise.then((sdkProcessingMetadata) => {
      if (null === sdkProcessingMetadata) {
        self.recordDroppedEvent("before_send", str2);
        const obj2 = self;
        const tmp19 = closure_6;
        if (tmp19) {
          const arr = type.spans || [];
          obj2.recordDroppedEvent("before_send", "span", 1 + arr.length);
        }
        const _HermesInternal = HermesInternal;
        const obj3 = { message: "" + closure_8 + " returned `null`, will not send event." };
        obj3[closure_7] = true;
        throw obj3;
      } else {
        session = session.getSession() || session2.getSession();
        const tmp3 = closure_7 && session;
        if (tmp3) {
          const result = self._updateSessionFromEvent(session, sdkProcessingMetadata);
        }
        if (closure_6) {
          sdkProcessingMetadata = sdkProcessingMetadata.sdkProcessingMetadata;
          let num;
          if (sdkProcessingMetadata != null) {
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
              const obj = { source: "custom" };
              const merged = Object.assign(transaction_info);
              sdkProcessingMetadata.transaction_info = obj;
            }
          }
        }
        self.sendEvent(sdkProcessingMetadata, data);
        return sdkProcessingMetadata;
      }
    });
    return nextPromise1.then(null, (originalException) => {
      const tmp = originalException && typeof originalException === "object" && closure_7 in originalException;
      if (!tmp) {
        const tmp3 = originalException && typeof originalException === "object" && closure_6 in originalException;
        if (!tmp3) {
          const obj = { mechanism: { handled: false, type: "internal" }, data: { __sentry__: true }, originalException };
          self.captureException(originalException, obj);
          const _HermesInternal = HermesInternal;
          const obj2 = { message: "Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + originalException };
          obj2[closure_6] = true;
          throw obj2;
        }
      }
      throw originalException;
    });
  }
};
items[28] = {
  key: "_process",
  value: function _process(arg0, arg1) {
    const self = this;
    let closure_0 = arg1;
    this._numProcessing = this._numProcessing + 1;
    const _promiseBuffer = this._promiseBuffer;
    const addResult = _promiseBuffer.add(arg0);
    addResult.then((result) => {
      self._numProcessing = self._numProcessing - 1;
      return result;
    }, (arg0) => {
      self._numProcessing = self._numProcessing - 1;
      const obj = self;
      if (arg0 === SENTRY_BUFFER_FULL_ERROR.SENTRY_BUFFER_FULL_ERROR) {
        obj.recordDroppedEvent("queue_overflow", closure_0);
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
    return entries.map((item) => {
      let str;
      let tmp;
      [str, tmp] = item;
      const tmp2 = _slicedToArray(str.split(":"), 2);
      return { reason: tmp2[0], category: tmp2[1], quantity: tmp };
    });
  }
};
items[30] = {
  key: "_flushOutcomes",
  value: function _flushOutcomes() {
    if (_mod700.DEBUG_BUILD) {
      const debug = tmp(701).debug;
      debug.log("Flushing outcomes...");
    }
    const self = this;
    const _clearOutcomesResult = this._clearOutcomes();
    if (0 !== _clearOutcomesResult.length) {
      const _dsn = self._dsn;
      const DEBUG_BUILD = tmp(700).DEBUG_BUILD;
      if (_dsn) {
        if (DEBUG_BUILD) {
          const debug4 = tmp(701).debug;
          debug4.log("Sending outcomes:", _clearOutcomesResult);
        }
        let tunnel = self._options.tunnel;
        const createClientReportEnvelope = _mod766.createClientReportEnvelope;
        _mod766;
        if (tunnel) {
          const tmpResult2 = _mod714;
          tunnel = tmpResult2.dsnToString(self._dsn);
        }
        self.sendEnvelope(createClientReportEnvelope(_clearOutcomesResult, tunnel));
      } else if (DEBUG_BUILD) {
        const debug3 = tmp(701).debug;
        debug3.log("No dsn provided, will not send outcomes");
      }
    } else if (_mod700.DEBUG_BUILD) {
      const debug2 = tmp(701).debug;
      debug2.log("No outcomes to send");
    }
  }
};
const Client_export = _createClass(Client, items);

export { Client_export as Client };
