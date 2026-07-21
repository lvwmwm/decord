// Module ID: 7263
// Function ID: 58495
// Name: SentryNonRecordingSpan
// Dependencies: []

// Module 7263 (SentryNonRecordingSpan)
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);

export const SentryNonRecordingSpan = () => {
  class SentryNonRecordingSpan {
    constructor() {
      self = this;
      if (arguments.length > 0) {
        if (undefined !== arguments[0]) {
          first = arguments[0];
        }
        tmp = closure_2;
        tmp2 = SentryNonRecordingSpan;
        tmp3 = closure_2(self, SentryNonRecordingSpan);
        traceId = first.traceId;
        if (!traceId) {
          tmp4 = SentryNonRecordingSpan;
          tmp5 = closure_1;
          num = 2;
          obj2 = SentryNonRecordingSpan(closure_1[2]);
          traceId = obj2.generateTraceId();
        }
        self._traceId = traceId;
        spanId = first.spanId;
        if (!spanId) {
          tmp6 = SentryNonRecordingSpan;
          tmp7 = closure_1;
          num2 = 2;
          obj3 = SentryNonRecordingSpan(closure_1[2]);
          spanId = obj3.generateSpanId();
        }
        self._spanId = spanId;
        return;
      }
      first = {};
      return;
    }
  }
  const require = SentryNonRecordingSpan;
  let obj = {
    key: "spanContext",
    value: function spanContext() {
      return { spanId: this._spanId, traceId: this._traceId, traceFlags: SentryNonRecordingSpan(closure_1[3]).TRACE_FLAG_NONE };
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
  return callback(SentryNonRecordingSpan, items);
}();
