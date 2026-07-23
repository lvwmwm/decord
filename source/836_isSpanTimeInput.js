// Module ID: 836
// Function ID: 9290
// Name: isSpanTimeInput
// Dependencies: [65, 77, 6, 7, 806, 815, 816, 796, 837, 838, 800, 801, 825, 839, 797, 833]

// Module 836 (isSpanTimeInput)
import _toConsumableArray from "_toConsumableArray";
import _defineProperty from "_defineProperty";
import _classCallCheck from "module_816";
import _defineProperties from "convertSpanLinksForEnvelope";

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
  return isStandaloneSpan instanceof closure_6 && isStandaloneSpan.isStandaloneSpan();
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const tmp2 = (() => {
  class SentrySpan {
    constructor() {
      self = this;
      if (arguments.length > 0) {
        if (undefined !== arguments[0]) {
          first = arguments[0];
        }
        tmp = outer1_4;
        tmp2 = SentrySpan;
        tmp3 = outer1_4(self, SentrySpan);
        traceId = first.traceId;
        if (!traceId) {
          tmp4 = SentrySpan;
          tmp5 = outer1_1;
          num = 4;
          obj2 = SentrySpan(outer1_1[4]);
          traceId = obj2.generateTraceId();
        }
        self._traceId = traceId;
        spanId = first.spanId;
        if (!spanId) {
          tmp6 = SentrySpan;
          tmp7 = outer1_1;
          num2 = 4;
          obj3 = SentrySpan(outer1_1[4]);
          spanId = obj3.generateSpanId();
        }
        self._spanId = spanId;
        startTimestamp = first.startTimestamp;
        if (!startTimestamp) {
          tmp8 = SentrySpan;
          tmp9 = outer1_1;
          num3 = 5;
          obj4 = SentrySpan(outer1_1[5]);
          startTimestamp = obj4.timestampInSeconds();
        }
        self._startTime = startTimestamp;
        self._links = first.links;
        self._attributes = {};
        tmp10 = globalThis;
        _Object = Object;
        tmp11 = outer1_3;
        tmp12 = SentrySpan;
        tmp13 = outer1_1;
        num4 = 6;
        str = "manual";
        tmp14 = outer1_3({}, SentrySpan(outer1_1[6]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "manual");
        setAttributesResult = self.setAttributes(Object.assign(outer1_3(tmp14, SentrySpan(outer1_1[6]).SEMANTIC_ATTRIBUTE_SENTRY_OP, first.op), first.attributes));
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
      const self = this;
      if (this._links) {
        const _links = self._links;
        _links.push(arg0);
      } else {
        const items = [arg0];
        self._links = items;
      }
      return self;
    }
  };
  let items = [obj, , , , , , , , , , , , , , , ];
  obj = {
    key: "addLinks",
    value: function addLinks(_links) {
      const self = this;
      if (this._links) {
        _links = self._links;
        const push = _links.push;
        push.apply(_links, outer1_2(_links));
      } else {
        self._links = _links;
      }
      return self;
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
      const tmp = SentrySpan(outer1_1[7]);
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
      this._startTime = SentrySpan(outer1_1[7]).spanTimeInputToSeconds(arg0);
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
      const attr = this.setAttribute(SentrySpan(outer1_1[6]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "custom");
      return this;
    }
  };
  items[9] = {
    key: "end",
    value: function end(arg0) {
      const self = this;
      if (!this._endTime) {
        self._endTime = SentrySpan(outer1_1[7]).spanTimeInputToSeconds(arg0);
        const obj = SentrySpan(outer1_1[7]);
        SentrySpan(outer1_1[8]).logSpanEnd(self);
        self._onSpanEnded();
        const obj2 = SentrySpan(outer1_1[8]);
      }
    }
  };
  items[10] = {
    key: "getSpanJSON",
    value: function getSpanJSON() {
      let _attributes;
      const self = this;
      const obj = { data: this._attributes, description: this._name, op: this._attributes[SentrySpan(undefined, outer1_1[6]).SEMANTIC_ATTRIBUTE_SENTRY_OP], parent_span_id: this._parentSpanId, span_id: this._spanId, start_timestamp: this._startTime, status: SentrySpan(outer1_1[7]).getStatusMessage(this._status) };
      ({ _endTime: obj.timestamp, _traceId: obj.trace_id, _attributes } = this);
      obj.origin = _attributes[SentrySpan(undefined, outer1_1[6]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN];
      obj.profile_id = this._attributes[SentrySpan(undefined, outer1_1[6]).SEMANTIC_ATTRIBUTE_PROFILE_ID];
      obj.exclusive_time = this._attributes[SentrySpan(undefined, outer1_1[6]).SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME];
      const obj2 = SentrySpan(outer1_1[7]);
      obj.measurements = SentrySpan(outer1_1[9]).timedEventsToMeasurements(this._events);
      let _isStandaloneSpan = this._isStandaloneSpan;
      if (_isStandaloneSpan) {
        _isStandaloneSpan = SentrySpan(outer1_1[7]).getRootSpan(self) === self;
        const obj4 = SentrySpan(outer1_1[7]);
      }
      obj.is_segment = _isStandaloneSpan;
      let spanId;
      if (self._isStandaloneSpan) {
        const rootSpan = SentrySpan(outer1_1[7]).getRootSpan(self);
        spanId = rootSpan.spanContext().spanId;
        const obj5 = SentrySpan(outer1_1[7]);
      }
      obj.segment_id = spanId;
      const obj3 = SentrySpan(outer1_1[9]);
      obj.links = SentrySpan(outer1_1[7]).convertSpanLinksForEnvelope(self._links);
      return obj;
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
      if (SentrySpan(outer1_1[10]).DEBUG_BUILD) {
        const debug = SentrySpan(outer1_1[11]).debug;
        debug.log("[Tracing] Adding an event to span:", name);
      }
      let tmp5 = obj;
      if (!outer1_7(obj)) {
        if (!timestampInSecondsResult) {
          timestampInSecondsResult = SentrySpan(outer1_1[5]).timestampInSeconds();
          const obj2 = SentrySpan(outer1_1[5]);
        }
        tmp5 = timestampInSecondsResult;
      }
      if (outer1_7(obj)) {
        obj = {};
      } else if (!obj) {
        obj = {};
      }
      obj = { name, time: SentrySpan(outer1_1[7]).spanTimeInputToSeconds(tmp5) };
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
      const client = SentrySpan(outer1_1[12]).getClient();
      if (client) {
        client.emit("spanEnd", self);
      }
      if (self._isStandaloneSpan) {
        if (self._isStandaloneSpan) {
          if (self._sampled) {
            let tmp10Result = tmp10(tmp11[13]);
            const items = [self];
            const spanEnvelope = tmp10Result.createSpanEnvelope(items, client);
            tmp10Result = tmp10(tmp11[12]);
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
            if (tmp10(tmp11[10]).DEBUG_BUILD) {
              const debug = SentrySpan(outer1_1[11]).debug;
              debug.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled.");
            }
            if (client) {
              client.recordDroppedEvent("sample_rate", "span");
            }
          }
        } else {
          const result = self._convertSpanToTransaction();
          if (result) {
            let scope = SentrySpan(outer1_1[14]).getCapturedScopesOnSpan(self).scope;
            if (!scope) {
              scope = SentrySpan(outer1_1[12]).getCurrentScope();
              const obj5 = SentrySpan(outer1_1[12]);
            }
            scope.captureEvent(result);
            const obj4 = SentrySpan(outer1_1[14]);
          }
        }
      } else {
        const obj3 = SentrySpan(outer1_1[7]);
      }
    }
  };
  items[15] = {
    key: "_convertSpanToTransaction",
    value: function _convertSpanToTransaction() {
      let self = this;
      self = this;
      let obj = SentrySpan(outer1_1[7]);
      if (outer1_8(obj.spanToJSON(this))) {
        if (!self._name) {
          if (SentrySpan(outer1_1[10]).DEBUG_BUILD) {
            const debug = SentrySpan(outer1_1[11]).debug;
            debug.warn("Transaction has no name, falling back to `<unlabeled transaction>`.");
          }
          self._name = "<unlabeled transaction>";
        }
        let obj1 = SentrySpan(outer1_1[14]);
        const capturedScopesOnSpan = obj1.getCapturedScopesOnSpan(self);
        const scope = capturedScopesOnSpan.scope;
        if (null != scope) {
          const sdkProcessingMetadata = scope.getScopeData().sdkProcessingMetadata;
          if (null != sdkProcessingMetadata) {
            const normalizedRequest = sdkProcessingMetadata.normalizedRequest;
          }
        }
        if (true === self._sampled) {
          let obj2 = SentrySpan(outer1_1[7]);
          const spanDescendants = obj2.getSpanDescendants(self);
          const found = spanDescendants.filter((arg0) => {
            let tmp = arg0 !== self;
            if (tmp) {
              tmp = !outer2_9(arg0);
            }
            return tmp;
          });
          const mapped = found.map((arg0) => SentrySpan(outer2_1[7]).spanToJSON(arg0));
          const found1 = mapped.filter(outer1_8);
          const tmp15 = self._attributes[SentrySpan(undefined, outer1_1[6]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
          const _attributes = self._attributes;
          let SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME = SentrySpan(outer1_1[6]).SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME;
          delete tmp2[tmp];
          const item = found1.forEach((arg0) => {
            const SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME = SentrySpan(outer2_1[6]).SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME;
            delete tmp2[tmp];
          });
          obj = {};
          obj = { trace: SentrySpan(outer1_1[7]).spanToTransactionTraceContext(self) };
          obj.contexts = obj;
          let substr = found1;
          if (found1.length > 1000) {
            const sorted = found1.sort((start_timestamp, start_timestamp2) => start_timestamp.start_timestamp - start_timestamp2.start_timestamp);
            substr = sorted.slice(0, 1000);
          }
          obj.spans = substr;
          ({ _startTime: obj4.start_timestamp, _endTime: obj4.timestamp, _name: obj4.transaction } = self);
          obj.type = "transaction";
          obj1 = { capturedSpanScope: scope, capturedSpanIsolationScope: capturedScopesOnSpan.isolationScope };
          const obj6 = SentrySpan(outer1_1[7]);
          obj1.dynamicSamplingContext = SentrySpan(outer1_1[15]).getDynamicSamplingContextFromSpan(self);
          obj.sdkProcessingMetadata = obj1;
          obj.request = normalizedRequest;
          let tmp21 = tmp15;
          if (tmp15) {
            obj2 = {};
            const obj3 = { source: tmp15 };
            obj2.transaction_info = obj3;
            tmp21 = obj2;
          }
          const merged = Object.assign(obj, tmp21);
          const obj8 = SentrySpan(outer1_1[15]);
          const result = SentrySpan(outer1_1[9]).timedEventsToMeasurements(self._events);
          let length = result;
          if (result) {
            const _Object = Object;
            length = Object.keys(result).length;
          }
          if (length) {
            if (SentrySpan(outer1_1[10]).DEBUG_BUILD) {
              const debug2 = SentrySpan(outer1_1[11]).debug;
              const _JSON = JSON;
              debug2.log("[Measurements] Adding measurements to transaction event", JSON.stringify(result, undefined, 2));
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
let closure_6 = tmp2;

export const SentrySpan = tmp2;
