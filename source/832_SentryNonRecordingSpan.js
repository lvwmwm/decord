// Module ID: 832
// Function ID: 9264
// Name: SentryNonRecordingSpan
// Dependencies: [6, 7, 806, 796]

// Module 832 (SentryNonRecordingSpan)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const SentryNonRecordingSpan = (() => {
  class SentryNonRecordingSpan {
    constructor() {
      self = this;
      if (arguments.length > 0) {
        if (undefined !== arguments[0]) {
          first = arguments[0];
        }
        tmp = outer1_2;
        tmp2 = SentryNonRecordingSpan;
        tmp3 = outer1_2(self, SentryNonRecordingSpan);
        traceId = first.traceId;
        if (!traceId) {
          tmp4 = SentryNonRecordingSpan;
          tmp5 = outer1_1;
          num = 2;
          obj2 = SentryNonRecordingSpan(outer1_1[2]);
          traceId = obj2.generateTraceId();
        }
        self._traceId = traceId;
        spanId = first.spanId;
        if (!spanId) {
          tmp6 = SentryNonRecordingSpan;
          tmp7 = outer1_1;
          num2 = 2;
          obj3 = SentryNonRecordingSpan(outer1_1[2]);
          spanId = obj3.generateSpanId();
        }
        self._spanId = spanId;
        return;
      }
      first = {};
      return;
    }
  }
  let obj = {
    key: "spanContext",
    value: function spanContext() {
      return { spanId: this._spanId, traceId: this._traceId, traceFlags: SentryNonRecordingSpan(outer1_1[3]).TRACE_FLAG_NONE };
    }
  };
  const items = [obj, , , , , , , , , , ];
  obj = {
    key: "end",
    value: function end(arg0) {

    }
  };
  items[1] = obj;
  obj = {
    key: "setAttribute",
    value: function setAttribute(arg0, arg1) {
      return this;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "setAttributes",
    value: function setAttributes(arg0) {
      return this;
    }
  };
  items[4] = {
    key: "setStatus",
    value: function setStatus(arg0) {
      return this;
    }
  };
  items[5] = {
    key: "updateName",
    value: function updateName(arg0) {
      return this;
    }
  };
  items[6] = {
    key: "isRecording",
    value: function isRecording() {
      return false;
    }
  };
  items[7] = {
    key: "addEvent",
    value: function addEvent(arg0, arg1, arg2) {
      return this;
    }
  };
  items[8] = {
    key: "addLink",
    value: function addLink(arg0) {
      return this;
    }
  };
  items[9] = {
    key: "addLinks",
    value: function addLinks(arg0) {
      return this;
    }
  };
  items[10] = {
    key: "recordException",
    value: function recordException(arg0, arg1) {

    }
  };
  return _defineProperties(SentryNonRecordingSpan, items);
})();
