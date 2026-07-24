// Module ID: 12799
// Function ID: 99633
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 22, 6984, 4227, 2]

// Module 12799 (_createForOfIteratorHelperLoose)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
let tmp2 = (() => {
  class SystemResponsiveness {
    constructor(arg0) {
      self = this;
      tmp = outer1_3(this, self);
      this.connection = arg0;
      this.sampleStats = (rtp) => {
        if (null != rtp) {
          const item = outer2_1(outer2_2[2]).forEach(rtp.rtp.outbound, (type) => {
            let done;
            if ("audio" === type.type) {
              let prop = type.pttQueueLatencyMicrosSamples;
              if (null == prop) {
                prop = [];
              }
              const tmpResult = outer3_5(prop);
              let iter = tmpResult();
              if (!iter.done) {
                do {
                  let tmp4 = outer1_0;
                  let pttQueueLatencyHistogram = outer1_0.pttQueueLatencyHistogram;
                  let addSampleResult = pttQueueLatencyHistogram.addSample(iter.value / 1000);
                  let iter2 = tmpResult();
                  iter = iter2;
                  done = iter2.done;
                } while (!done);
              }
              const tmp = outer3_5;
            }
          });
          const arr = outer2_1(outer2_2[2]);
        }
      };
      histogram = new SystemResponsiveness(outer1_2[3]).Histogram();
      this.pttQueueLatencyHistogram = histogram;
      return;
    }
  }
  let obj = {
    key: "start",
    value() {
      const connection = this.connection;
      connection.on(SystemResponsiveness(outer1_2[4]).BaseConnectionEvent.Stats, this.sampleStats);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "stop",
    value() {
      const connection = this.connection;
      connection.off(SystemResponsiveness(outer1_2[4]).BaseConnectionEvent.Stats, this.sampleStats);
    }
  };
  items[1] = obj;
  obj = {
    key: "getPttQueueLatencyStats",
    value() {
      const pttQueueLatencyHistogram = this.pttQueueLatencyHistogram;
      const report = pttQueueLatencyHistogram.getReport([50, 95]);
      return { ptt_queue_latency_max: report.max, ptt_queue_latency_mean: report.mean, ptt_queue_latency_p50: report.percentiles[50], ptt_queue_latency_p95: report.percentiles[95], ptt_queue_latency_samples: report.samples };
    }
  };
  items[2] = obj;
  return callback(SystemResponsiveness, items);
})();
const result = require("apply").fileFinishedImporting("lib/SystemResponsiveness.tsx");

export default tmp2;
