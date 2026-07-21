// Module ID: 12627
// Function ID: 97106
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 12627 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class SystemResponsiveness {
    constructor(arg0) {
      SystemResponsiveness = this;
      tmp = closure_3(this, SystemResponsiveness);
      this.connection = arg0;
      this.sampleStats = (rtp) => {
        if (null != rtp) {
          const item = callback(closure_2[2]).forEach(rtp.rtp.outbound, (type) => {
            let done;
            if ("audio" === type.type) {
              let prop = type.pttQueueLatencyMicrosSamples;
              if (null == prop) {
                prop = [];
              }
              const tmpResult = closure_5(prop);
              let iter = tmpResult();
              if (!iter.done) {
                do {
                  let tmp4 = closure_0;
                  let pttQueueLatencyHistogram = closure_0.pttQueueLatencyHistogram;
                  let addSampleResult = pttQueueLatencyHistogram.addSample(iter.value / 1000);
                  let iter2 = tmpResult();
                  iter = iter2;
                  done = iter2.done;
                } while (!done);
              }
              const tmp = closure_5;
            }
          });
          const arr = callback(closure_2[2]);
        }
      };
      histogram = new SystemResponsiveness(closure_2[3]).Histogram();
      this.pttQueueLatencyHistogram = histogram;
      return;
    }
  }
  const arg1 = SystemResponsiveness;
  let obj = {
    key: "start",
    value() {
      const connection = this.connection;
      connection.on(SystemResponsiveness(closure_2[4]).BaseConnectionEvent.Stats, this.sampleStats);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "stop",
    value() {
      const connection = this.connection;
      connection.off(SystemResponsiveness(closure_2[4]).BaseConnectionEvent.Stats, this.sampleStats);
    }
  };
  items[1] = obj;
  obj = {
    key: "getPttQueueLatencyStats",
    value() {
      const pttQueueLatencyHistogram = this.pttQueueLatencyHistogram;
      const report = pttQueueLatencyHistogram.getReport(["\u21E5", "SPACE"]);
      return { ptt_queue_latency_max: report.max, ptt_queue_latency_mean: report.mean, ptt_queue_latency_p50: report.percentiles[50], ptt_queue_latency_p95: report.percentiles[95], ptt_queue_latency_samples: report.samples };
    }
  };
  items[2] = obj;
  return callback(SystemResponsiveness, items);
}();
const result = arg1(dependencyMap[5]).fileFinishedImporting("lib/SystemResponsiveness.tsx");

export default tmp2;
