// Module ID: 12354
// Function ID: 12355
// Dependencies: [41, 42, 12323, 12327, 12328, 12318, 12351, 12319, 12329, 12355, 12341, 12313, 12340, 12356, 12342, 12349]

// Module 12354
import _mod12318 from "module_12318" /* 12318 */;
import _mod12319 from "module_12319" /* 12319 */;
import generatePropagationContext from "generatePropagationContext" /* 12323 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12327 */;
import _mod12328 from "module_12328" /* 12328 */;
import _slicedToArray from "_slicedToArray" /* 12329 */;
import _mod12340 from "module_12340" /* 12340 */;
import _mod12341 from "module_12341" /* 12341 */;
import _mod12342 from "module_12342" /* 12342 */;
import _mod12351 from "module_12351" /* 12351 */;
import _mod12355 from "module_12355" /* 12355 */;
import _mod12356 from "module_12356" /* 12356 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

let data;

function isFullFinishedSpan(start_timestamp) {
  return start_timestamp.start_timestamp && start_timestamp.timestamp && start_timestamp.span_id && start_timestamp.trace_id;
}
class SentrySpan {
  constructor() {
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    const self = this;
    _classCallCheck(this, SentrySpan);
    let traceId = obj.traceId;
    if (!traceId) {
      const obj2 = generatePropagationContext;
      traceId = obj2.generateTraceId();
    }
    self._traceId = traceId;
    let spanId = obj.spanId;
    if (!spanId) {
      const obj3 = generatePropagationContext;
      spanId = obj3.generateSpanId();
    }
    self._spanId = spanId;
    let startTimestamp = obj.startTimestamp;
    if (!startTimestamp) {
      const obj4 = _browserPerformanceTimeOriginMode;
      startTimestamp = obj4.timestampInSeconds();
    }
    self._startTime = startTimestamp;
    self._attributes = {};
    const obj5 = { [closure_2_0(closure_2_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "manual" };
    const setAttributes = self.setAttributes;
    obj5[_mod12328.SEMANTIC_ATTRIBUTE_SENTRY_OP] = obj.op;
    const merged = Object.assign(obj.attributes);
    setAttributes(obj5);
    self._name = obj.name;
    if (obj.parentSpanId) {
      self._parentSpanId = obj.parentSpanId;
    }
    if ("sampled" in obj) {
      self._sampled = obj.sampled;
    }
    if (obj.endTimestamp) {
      self._endTime = obj.endTimestamp;
    }
    self._events = [];
    self._isStandaloneSpan = obj.isStandalone;
    if (self._endTime) {
      self._onSpanEnded();
    }
  }
}
const entry = {
  key: "addLink",
  value: function addLink(arg0) {
    return this;
  }
};
let items = [
  entry,
  {
    key: "addLinks",
    value: function addLinks(arg0) {
      return this;
    }
  },
  {
    key: "recordException",
    value: function recordException(arg0, arg1) {

    }
  },
  {
    key: "spanContext",
    value: function spanContext() {
      let _sampled;
      let tmp;
      const obj = { spanId: this._spanId, traceId: this._traceId, traceFlags: _sampled ? tmp.TRACE_FLAG_SAMPLED : tmp.TRACE_FLAG_NONE };
      _sampled = this._sampled;
      tmp = _mod12318;
      return obj;
    }
  },
  {
    key: "setAttribute",
    value: function setAttribute(arg0, arg1) {
      const self = this;
      if (undefined === arg1) {
        delete self._attributes[tmp];
      } else {
        self._attributes[arg0] = arg1;
      }
      return self;
    }
  },
  {
    key: "setAttributes",
    value: function setAttributes(arg0) {
      const self = this;
      let closure_0 = arg0;
      const keys = Object.keys(arg0);
      const item = keys.forEach((item) => self.setAttribute(item, closure_0[item]));
      return this;
    }
  },
  {
    key: "updateStartTime",
    value: function updateStartTime(arg0) {
      const obj = _mod12318;
      this._startTime = obj.spanTimeInputToSeconds(arg0);
    }
  },
  {
    key: "setStatus",
    value: function setStatus(_status) {
      this._status = _status;
      return this;
    }
  },
  {
    key: "updateName",
    value: function updateName(_name) {
      this._name = _name;
      const attr = this.setAttribute(_mod12328.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "custom");
      return this;
    }
  },
  {
    key: "end",
    value: function end(arg0) {
      const self = this;
      if (!this._endTime) {
        const obj = _mod12318;
        self._endTime = obj.spanTimeInputToSeconds(arg0);
        const obj2 = _mod12351;
        obj2.logSpanEnd(self);
        self._onSpanEnded();
      }
    }
  },
  {
    key: "getSpanJSON",
    value: function getSpanJSON() {
      let _attributes;
      let _isStandaloneSpan;
      let obj2;
      let obj3;
      let obj4;
      let spanId;
      const self = this;
      const tmp3 = _mod12319;
      const obj = { data: this._attributes, description: this._name, op: this._attributes[_mod12328.SEMANTIC_ATTRIBUTE_SENTRY_OP], parent_span_id: this._parentSpanId, span_id: this._spanId, start_timestamp: this._startTime, status: obj2.getStatusMessage(this._status), timestamp: null, trace_id: null, origin: _attributes[_mod12328.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN], _metrics_summary: obj3.getMetricSummaryJsonForSpan(this), profile_id: this._attributes[_mod12328.SEMANTIC_ATTRIBUTE_PROFILE_ID], exclusive_time: this._attributes[_mod12328.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME], measurements: obj4.timedEventsToMeasurements(this._events), is_segment: _isStandaloneSpan, segment_id: spanId };
      const dropUndefinedKeys = tmp3.dropUndefinedKeys;
      ({ _endTime: obj.timestamp, _traceId: obj.trace_id, _attributes } = this);
      obj2 = _mod12318;
      obj3 = _slicedToArray;
      _isStandaloneSpan = this._isStandaloneSpan;
      obj4 = _mod12355;
      if (_isStandaloneSpan) {
        const tmpResult = _mod12318;
        _isStandaloneSpan = tmpResult.getRootSpan(self) === self;
      }
      spanId = undefined;
      if (self._isStandaloneSpan) {
        const tmpResult2 = _mod12318;
        const rootSpan = tmpResult2.getRootSpan(self);
        spanId = rootSpan.spanContext().spanId;
      }
      return dropUndefinedKeys(obj);
    }
  },
  {
    key: "isRecording",
    value: function isRecording() {
      return !this._endTime && this._sampled;
    }
  },
  {
    key: "addEvent",
    value: function addEvent(name, num, arg2) {
      let obj;
      let tmpResult2;
      if (_mod12341.DEBUG_BUILD) {
        const logger = tmp(12313).logger;
        logger.log("[Tracing] Adding an event to span:", name);
      }
      let isArray = num && typeof num === "number";
      if (!isArray) {
        const _Date = Date;
        isArray = num instanceof Date;
      }
      if (!isArray) {
        const _Array = Array;
        isArray = Array.isArray(num);
      }
      let tmp7 = num;
      if (!isArray) {
        let timestampInSecondsResult = arg2;
        if (!timestampInSecondsResult) {
          const tmpResult = _browserPerformanceTimeOriginMode;
          timestampInSecondsResult = tmpResult.timestampInSeconds();
        }
        tmp7 = timestampInSecondsResult;
      }
      let isArray1 = num && typeof num === "number";
      if (!isArray1) {
        const _Date2 = Date;
        isArray1 = num instanceof Date;
      }
      if (!isArray1) {
        const _Array2 = Array;
        isArray1 = Array.isArray(num);
      }
      if (isArray1) {
        obj = {};
      } else {
        obj = num || {};
      }
      const obj2 = { name, time: tmpResult2.spanTimeInputToSeconds(tmp7), attributes: obj };
      const _events = this._events;
      tmpResult2 = _mod12318;
      _events.push(obj2);
      return this;
    }
  },
  {
    key: "isStandaloneSpan",
    value: function isStandaloneSpan() {
      return this._isStandaloneSpan;
    }
  },
  {
    key: "_onSpanEnded",
    value: function _onSpanEnded() {
      const self = this;
      const obj = _mod12340;
      const client = obj.getClient();
      if (client) {
        client.emit("spanEnd", self);
      }
      if (self._isStandaloneSpan) {
        if (self._isStandaloneSpan) {
          if (self._sampled) {
            const items = [self];
            const tmpResult = _mod12356;
            const spanEnvelope = tmpResult.createSpanEnvelope(items, client);
            const tmpResult5 = _mod12340;
            const client1 = tmpResult5.getClient();
            if (client1) {
              if (spanEnvelope[1]) {
                if (0 !== spanEnvelope[1].length) {
                  client1.sendEnvelope(spanEnvelope);
                }
              }
              client1.recordDroppedEvent("before_send", "span");
            }
          } else {
            if (_mod12341.DEBUG_BUILD) {
              const logger = tmp(12313).logger;
              logger.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled.");
            }
            if (client) {
              client.recordDroppedEvent("sample_rate", "span");
            }
          }
        } else {
          const result = self._convertSpanToTransaction();
          if (result) {
            const tmpResult6 = _mod12342;
            let scope = tmpResult6.getCapturedScopesOnSpan(self).scope;
            if (!scope) {
              const tmpResult7 = _mod12340;
              scope = tmpResult7.getCurrentScope();
            }
            scope.captureEvent(result);
          }
        }
      } else {
        _mod12318;
      }
    }
  },
  {
    key: "_convertSpanToTransaction",
    value: function _convertSpanToTransaction() {
      let obj3;
      let obj4;
      let obj7;
      let substr;
      let tmpResult12;
      let tmpResult14;
      let tmpResult15;
      const self = this;
      let tmp = self;
      let obj = self(12318);
      const spanToJSONResult = obj.spanToJSON(this);
      const tmp4 = spanToJSONResult.start_timestamp && spanToJSONResult.timestamp && spanToJSONResult.span_id && spanToJSONResult.trace_id;
      if (tmp4) {
        if (!self._name) {
          if (tmp(12341).DEBUG_BUILD) {
            const logger = tmp(12313).logger;
            logger.warn("Transaction has no name, falling back to `<unlabeled transaction>`.");
          }
          self._name = "<unlabeled transaction>";
        }
        const tmpResult = tmp(12342);
        const capturedScopesOnSpan = tmpResult.getCapturedScopesOnSpan(self);
        const scope = capturedScopesOnSpan.scope;
        let currentScope = scope;
        const isolationScope = capturedScopesOnSpan.isolationScope;
        if (!scope) {
          const tmpResult9 = tmp(12340);
          currentScope = tmpResult9.getCurrentScope();
        }
        let client = currentScope.getClient();
        if (!client) {
          const tmpResult10 = tmp(12340);
          client = tmpResult10.getClient();
        }
        if (true !== self._sampled) {
          if (tmp(12341).DEBUG_BUILD) {
            const logger3 = tmp(12313).logger;
            logger3.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled.");
          }
          const tmp20 = client;
          if (tmp20) {
            client.recordDroppedEvent("sample_rate", "transaction");
          }
        } else {
          const tmpResult11 = tmp(12318);
          const spanDescendants = tmpResult11.getSpanDescendants(self);
          const found = spanDescendants.filter((isStandaloneSpan) => {
            let tmp = isStandaloneSpan !== self;
            if (tmp) {
              tmp = !(isStandaloneSpan instanceof c3 && isStandaloneSpan.isStandaloneSpan());
              isStandaloneSpan instanceof c3 && isStandaloneSpan.isStandaloneSpan();
            }
            return tmp;
          });
          const mapped = found.map((item) => {
            const obj = self(dependencyMap[5]);
            return obj.spanToJSON(item);
          });
          const found1 = mapped.filter(isFullFinishedSpan);
          const tmp23 = self._attributes[tmp(undefined, 12328).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
          const _attributes = self._attributes;
          delete _attributes[tmp(undefined, 12328).SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
          const item = found1.forEach((data) => {
            if (data.data) {
              data = data.data;
              delete data[self(undefined, dependencyMap[4]).SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
            }
          });
          const obj2 = { contexts: obj3, spans: substr, start_timestamp: null, timestamp: null, transaction: null, type: "transaction", sdkProcessingMetadata: obj4, _metrics_summary: tmpResult15.getMetricSummaryJsonForSpan(self) };
          obj3 = { trace: tmpResult12.spanToTransactionTraceContext(self) };
          substr = found1;
          tmpResult12 = tmp(12318);
          if (found1.length > 1000) {
            const sorted = found1.sort((start_timestamp, start_timestamp2) => start_timestamp.start_timestamp - start_timestamp2.start_timestamp);
            substr = sorted.slice(0, 1000);
          }
          ({ _startTime: obj15.start_timestamp, _endTime: obj15.timestamp, _name: obj15.transaction } = self);
          obj4 = { capturedSpanScope: scope, capturedSpanIsolationScope: isolationScope };
          const obj5 = { dynamicSamplingContext: tmpResult14.getDynamicSamplingContextFromSpan(self) };
          const dropUndefinedKeys = tmp(12319).dropUndefinedKeys;
          tmp(12319);
          tmpResult14 = tmp(12349);
          const merged = Object.assign(dropUndefinedKeys(obj5));
          let tmp11 = tmp23;
          tmpResult15 = tmp(12329);
          if (tmp11) {
            const obj6 = { transaction_info: obj7 };
            tmp11 = obj6;
            obj7 = { source: tmp23 };
          }
          const merged1 = Object.assign(tmp11);
          const tmpResult16 = tmp(12355);
          const result = tmpResult16.timedEventsToMeasurements(self._events);
          let length = result;
          if (length) {
            const _Object = Object;
            length = Object.keys(result).length;
          }
          if (length) {
            if (tmp(12341).DEBUG_BUILD) {
              const logger2 = tmp(12313).logger;
              const _JSON = JSON;
              logger2.log("[Measurements] Adding measurements to transaction event", JSON.stringify(result, undefined, 2));
            }
            obj2.measurements = result;
          }
          return obj2;
        }
      }
    }
  }
];
const _moduleResult = _createClass(SentrySpan, items);
let c3 = _moduleResult;
const SentrySpan_export = _moduleResult;

export { SentrySpan_export as SentrySpan };
