// Module ID: 9764
// Function ID: 9765
// Dependencies: [41, 42, 9741, 9736]

// Module 9764
import _mod9736 from "module_9736" /* 9736 */;
import generatePropagationContext from "generatePropagationContext" /* 9741 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

class SentryNonRecordingSpan {
  constructor() {
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    const self = this;
    _classCallCheck(this, SentryNonRecordingSpan);
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
  }
}
const entry = {
  key: "spanContext",
  value: function spanContext() {
    const obj = { spanId: this._spanId, traceId: this._traceId, traceFlags: _mod9736.TRACE_FLAG_NONE };
    return obj;
  }
};
const items = [
  entry,
  {
    key: "end",
    value: function end(arg0) {

    }
  },
  {
    key: "setAttribute",
    value: function setAttribute(arg0, arg1) {
      return this;
    }
  },
  {
    key: "setAttributes",
    value: function setAttributes(arg0) {
      return this;
    }
  },
  {
    key: "setStatus",
    value: function setStatus(arg0) {
      return this;
    }
  },
  {
    key: "updateName",
    value: function updateName(arg0) {
      return this;
    }
  },
  {
    key: "isRecording",
    value: function isRecording() {
      return false;
    }
  },
  {
    key: "addEvent",
    value: function addEvent(arg0, arg1, arg2) {
      return this;
    }
  },
  {
    key: "addLink",
    value: function addLink(arg0) {
      return this;
    }
  },
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
  }
];
const SentryNonRecordingSpan_export = _createClass(SentryNonRecordingSpan, items);

export { SentryNonRecordingSpan_export as SentryNonRecordingSpan };
