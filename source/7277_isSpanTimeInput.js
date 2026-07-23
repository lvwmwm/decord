// Module ID: 7277
// Function ID: 58620
// Name: isSpanTimeInput
// Dependencies: [77, 6, 7, 7246, 7250, 7251, 7241, 7274, 7242, 7252, 7278, 7264, 7236, 7263, 7279, 7265, 7272]

// Module 7277 (isSpanTimeInput)
import _defineProperty from "_defineProperty";
import _classCallCheck from "spanTimeInputToSeconds";
import _defineProperties from "logSpanEnd";

function isSpanTimeInput(arg0) {
  let isArray = arg0;
  if (arg0) {
    isArray = "number" === typeof arg0;
  }
  if (!isArray) {
    const _Date = Date;
    isArray = arg0 instanceof Date;
  }
  if (!isArray) {
    const _Array = Array;
    isArray = Array.isArray(arg0);
  }
  return isArray;
}
function isFullFinishedSpan(start_timestamp) {
  return start_timestamp.start_timestamp && start_timestamp.timestamp && start_timestamp.span_id && start_timestamp.trace_id;
}
function isStandaloneSpan(isStandaloneSpan) {
  return isStandaloneSpan instanceof closure_5 && isStandaloneSpan.isStandaloneSpan();
}
const tmp2 = (() => {
  class SentrySpan {
    constructor() {
      self = this;
      if (arguments.length > 0) {
        if (undefined !== arguments[0]) {
          first = arguments[0];
        }
        tmp = outer1_3;
        tmp2 = SentrySpan;
        tmp3 = outer1_3(self, SentrySpan);
        traceId = first.traceId;
        if (!traceId) {
          tmp4 = SentrySpan;
          tmp5 = outer1_1;
          num = 3;
          obj2 = SentrySpan(outer1_1[3]);
          traceId = obj2.generateTraceId();
        }
        self._traceId = traceId;
        spanId = first.spanId;
        if (!spanId) {
          tmp6 = SentrySpan;
          tmp7 = outer1_1;
          num2 = 3;
          obj3 = SentrySpan(outer1_1[3]);
          spanId = obj3.generateSpanId();
        }
        self._spanId = spanId;
        startTimestamp = first.startTimestamp;
        if (!startTimestamp) {
          tmp8 = SentrySpan;
          tmp9 = outer1_1;
          num3 = 4;
          obj4 = SentrySpan(outer1_1[4]);
          startTimestamp = obj4.timestampInSeconds();
        }
        self._startTime = startTimestamp;
        self._attributes = {};
        tmp10 = globalThis;
        _Object = Object;
        tmp11 = outer1_2;
        tmp12 = SentrySpan;
        tmp13 = outer1_1;
        num4 = 5;
        str = "manual";
        tmp14 = outer1_2({}, SentrySpan(outer1_1[5]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "manual");
        setAttributesResult = self.setAttributes(Object.assign(outer1_2(tmp14, SentrySpan(outer1_1[5]).SEMANTIC_ATTRIBUTE_SENTRY_OP, first.op), first.attributes));
        self._name = first.name;
        if (first.parentSpanId) {
          self._parentSpanId = first.parentSpanId;
        }
        str2 = "sampled";
        if ("sampled" in first) {
          self._sampled = first.sampled;
        }
        if (first.endTimestamp) {
          self._endTime = first.endTimestamp;
        }
        self._events = [];
        self._isStandaloneSpan = first.isStandalone;
        if (self._endTime) {
          _onSpanEndedResult = self._onSpanEnded();
        }
        return;
      }
      first = {};
      return;
    }
  }
  let obj = {
    key: "addLink",
    value: function addLink(arg0) {
      return this;
    }
  };
  let items = [obj, , , , , , , , , , , , , , , ];
  obj = {
    key: "addLinks",
    value: function addLinks(arg0) {
      return this;
    }
  };
  items[1] = obj;
  obj = {
    key: "recordException",
    value: function recordException(arg0, arg1) {

    }
  };
  items[2] = obj;
  items[3] = {
    key: "spanContext",
    value: function spanContext() {
      const obj = { spanId: this._spanId, traceId: this._traceId };
      const tmp = SentrySpan(outer1_1[6]);
      obj.traceFlags = this._sampled ? tmp.TRACE_FLAG_SAMPLED : tmp.TRACE_FLAG_NONE;
      return obj;
    }
  };
  items[4] = {
    key: "setAttribute",
    value: function setAttribute(arg0, arg1) {
      const self = this;
      if (undefined === arg1) {
        const _attributes = self._attributes;
        delete tmp[tmp2];
      } else {
        self._attributes[arg0] = arg1;
      }
      return self;
    }
  };
  items[5] = {
    key: "setAttributes",
    value: function setAttributes(arg0) {
      let closure_0 = arg0;
      const self = this;
      const keys = Object.keys(arg0);
      const item = keys.forEach((arg0) => self.setAttribute(arg0, table[arg0]));
      return this;
    }
  };
  items[6] = {
    key: "updateStartTime",
    value: function updateStartTime(arg0) {
      this._startTime = SentrySpan(outer1_1[6]).spanTimeInputToSeconds(arg0);
    }
  };
  items[7] = {
    key: "setStatus",
    value: function setStatus(_status) {
      this._status = _status;
      return this;
    }
  };
  items[8] = {
    key: "updateName",
    value: function updateName(_name) {
      this._name = _name;
      const attr = this.setAttribute(SentrySpan(outer1_1[5]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "custom");
      return this;
    }
  };
  items[9] = {
    key: "end",
    value: function end(arg0) {
      const self = this;
      if (!this._endTime) {
        self._endTime = SentrySpan(outer1_1[6]).spanTimeInputToSeconds(arg0);
        const obj = SentrySpan(outer1_1[6]);
        SentrySpan(outer1_1[7]).logSpanEnd(self);
        self._onSpanEnded();
        const obj2 = SentrySpan(outer1_1[7]);
      }
    }
  };
  items[10] = {
    key: "getSpanJSON",
    value: function getSpanJSON() {
      let _attributes;
      const self = this;
      let obj = SentrySpan(outer1_1[8]);
      obj = { data: this._attributes, description: this._name, op: this._attributes[SentrySpan(undefined, outer1_1[5]).SEMANTIC_ATTRIBUTE_SENTRY_OP], parent_span_id: this._parentSpanId, span_id: this._spanId, start_timestamp: this._startTime, status: SentrySpan(outer1_1[6]).getStatusMessage(this._status) };
      ({ _endTime: obj2.timestamp, _traceId: obj2.trace_id, _attributes } = this);
      obj.origin = _attributes[SentrySpan(undefined, outer1_1[5]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN];
      const obj3 = SentrySpan(outer1_1[6]);
      obj._metrics_summary = SentrySpan(outer1_1[9]).getMetricSummaryJsonForSpan(this);
      obj.profile_id = this._attributes[SentrySpan(undefined, outer1_1[5]).SEMANTIC_ATTRIBUTE_PROFILE_ID];
      obj.exclusive_time = this._attributes[SentrySpan(undefined, outer1_1[5]).SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME];
      const obj4 = SentrySpan(outer1_1[9]);
      obj.measurements = SentrySpan(outer1_1[10]).timedEventsToMeasurements(this._events);
      let _isStandaloneSpan = this._isStandaloneSpan;
      if (_isStandaloneSpan) {
        _isStandaloneSpan = SentrySpan(outer1_1[6]).getRootSpan(self) === self;
        const obj6 = SentrySpan(outer1_1[6]);
      }
      obj.is_segment = _isStandaloneSpan;
      let spanId;
      if (self._isStandaloneSpan) {
        const rootSpan = SentrySpan(outer1_1[6]).getRootSpan(self);
        spanId = rootSpan.spanContext().spanId;
        const obj7 = SentrySpan(outer1_1[6]);
      }
      obj.segment_id = spanId;
      return obj.dropUndefinedKeys(obj);
    }
  };
  items[11] = {
    key: "isRecording",
    value: function isRecording() {
      return !this._endTime && this._sampled;
    }
  };
  items[12] = {
    key: "addEvent",
    value: function addEvent(name) {
      let obj = arg1;
      let timestampInSecondsResult = arg2;
      const self = this;
      if (SentrySpan(outer1_1[11]).DEBUG_BUILD) {
        const logger = SentrySpan(outer1_1[12]).logger;
        logger.log("[Tracing] Adding an event to span:", name);
      }
      let tmp5 = obj;
      if (!outer1_6(obj)) {
        if (!timestampInSecondsResult) {
          timestampInSecondsResult = SentrySpan(outer1_1[4]).timestampInSeconds();
          const obj2 = SentrySpan(outer1_1[4]);
        }
        tmp5 = timestampInSecondsResult;
      }
      if (outer1_6(obj)) {
        obj = {};
      } else if (!obj) {
        obj = {};
      }
      obj = { name, time: SentrySpan(outer1_1[6]).spanTimeInputToSeconds(tmp5) };
      obj.attributes = obj;
      const _events = self._events;
      _events.push(obj);
      return self;
    }
  };
  items[13] = {
    key: "isStandaloneSpan",
    value: function isStandaloneSpan() {
      return this._isStandaloneSpan;
    }
  };
  items[14] = {
    key: "_onSpanEnded",
    value: function _onSpanEnded() {
      const self = this;
      const client = SentrySpan(outer1_1[13]).getClient();
      if (client) {
        client.emit("spanEnd", self);
      }
      if (self._isStandaloneSpan) {
        if (self._isStandaloneSpan) {
          if (self._sampled) {
            let tmp10Result = tmp10(tmp11[14]);
            const items = [self];
            const spanEnvelope = tmp10Result.createSpanEnvelope(items, client);
            tmp10Result = tmp10(tmp11[13]);
            const client1 = tmp10Result.getClient();
            if (client1) {
              if (spanEnvelope[1]) {
                if (0 !== arr2.length) {
                  client1.sendEnvelope(spanEnvelope);
                }
              }
              client1.recordDroppedEvent("before_send", "span");
            }
          } else {
            if (tmp10(tmp11[11]).DEBUG_BUILD) {
              const logger = SentrySpan(outer1_1[12]).logger;
              logger.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled.");
            }
            if (client) {
              client.recordDroppedEvent("sample_rate", "span");
            }
          }
        } else {
          const result = self._convertSpanToTransaction();
          if (result) {
            let scope = SentrySpan(outer1_1[15]).getCapturedScopesOnSpan(self).scope;
            if (!scope) {
              scope = SentrySpan(outer1_1[13]).getCurrentScope();
              const obj5 = SentrySpan(outer1_1[13]);
            }
            scope.captureEvent(result);
            const obj4 = SentrySpan(outer1_1[15]);
          }
        }
      } else {
        const obj3 = SentrySpan(outer1_1[6]);
      }
    }
  };
  items[15] = {
    key: "_convertSpanToTransaction",
    value: function _convertSpanToTransaction() {
      let self = this;
      self = this;
      let obj = SentrySpan(outer1_1[6]);
      if (outer1_7(obj.spanToJSON(this))) {
        if (!self._name) {
          if (SentrySpan(outer1_1[11]).DEBUG_BUILD) {
            const logger = SentrySpan(outer1_1[12]).logger;
            logger.warn("Transaction has no name, falling back to `<unlabeled transaction>`.");
          }
          self._name = "<unlabeled transaction>";
        }
        let obj1 = SentrySpan(outer1_1[15]);
        const capturedScopesOnSpan = obj1.getCapturedScopesOnSpan(self);
        const scope = capturedScopesOnSpan.scope;
        let currentScope = scope;
        if (!scope) {
          let obj3 = SentrySpan(outer1_1[13]);
          currentScope = obj3.getCurrentScope();
        }
        let client = currentScope.getClient();
        if (!client) {
          client = SentrySpan(outer1_1[13]).getClient();
          const obj6 = SentrySpan(outer1_1[13]);
        }
        if (true !== self._sampled) {
          if (SentrySpan(outer1_1[11]).DEBUG_BUILD) {
            const logger3 = SentrySpan(outer1_1[12]).logger;
            logger3.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled.");
          }
          if (client) {
            client.recordDroppedEvent("sample_rate", "transaction");
          }
        } else {
          const spanDescendants = SentrySpan(outer1_1[6]).getSpanDescendants(self);
          const found = spanDescendants.filter((arg0) => {
            let tmp = arg0 !== self;
            if (tmp) {
              tmp = !outer2_8(arg0);
            }
            return tmp;
          });
          const mapped = found.map((arg0) => SentrySpan(outer2_1[6]).spanToJSON(arg0));
          const found1 = mapped.filter(outer1_7);
          const tmp38 = self._attributes[SentrySpan(undefined, outer1_1[5]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
          const _attributes = self._attributes;
          let SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME = SentrySpan(outer1_1[5]).SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME;
          delete tmp2[tmp];
          const item = found1.forEach((data) => {
            if (data.data) {
              data = data.data;
              const SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME = SentrySpan(outer2_1[5]).SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME;
              delete tmp2[tmp];
            }
          });
          obj = {};
          obj = {};
          const obj15 = SentrySpan(outer1_1[6]);
          obj.trace = SentrySpan(outer1_1[6]).spanToTransactionTraceContext(self);
          obj.contexts = obj;
          let substr = found1;
          if (found1.length > 1000) {
            const sorted = found1.sort((start_timestamp, start_timestamp2) => start_timestamp.start_timestamp - start_timestamp2.start_timestamp);
            substr = sorted.slice(0, 1000);
          }
          obj.spans = substr;
          ({ _startTime: obj16.start_timestamp, _endTime: obj16.timestamp, _name: obj16.transaction } = self);
          obj.type = "transaction";
          const _Object = Object;
          obj1 = { capturedSpanScope: scope, capturedSpanIsolationScope: capturedScopesOnSpan.isolationScope };
          const obj18 = SentrySpan(outer1_1[6]);
          const obj2 = {};
          const obj8 = SentrySpan(outer1_1[8]);
          obj2.dynamicSamplingContext = SentrySpan(outer1_1[16]).getDynamicSamplingContextFromSpan(self);
          obj.sdkProcessingMetadata = Object.assign(obj1, obj8.dropUndefinedKeys(obj2));
          const obj10 = SentrySpan(outer1_1[16]);
          obj._metrics_summary = SentrySpan(outer1_1[9]).getMetricSummaryJsonForSpan(self);
          let tmp18 = tmp38;
          if (tmp38) {
            obj3 = {};
            const obj4 = { source: tmp38 };
            obj3.transaction_info = obj4;
            tmp18 = obj3;
          }
          const merged = Object.assign(obj, tmp18);
          const obj11 = SentrySpan(outer1_1[9]);
          const result = SentrySpan(outer1_1[10]).timedEventsToMeasurements(self._events);
          let length = result;
          if (result) {
            const _Object2 = Object;
            length = Object.keys(result).length;
          }
          if (length) {
            if (SentrySpan(outer1_1[11]).DEBUG_BUILD) {
              const logger2 = SentrySpan(outer1_1[12]).logger;
              const _JSON = JSON;
              logger2.log("[Measurements] Adding measurements to transaction event", JSON.stringify(result, undefined, 2));
            }
            merged.measurements = result;
          }
          return merged;
        }
      }
    }
  };
  return _defineProperties(SentrySpan, items);
})();
let closure_5 = tmp2;

export const SentrySpan = tmp2;
