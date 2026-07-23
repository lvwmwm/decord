// Module ID: 6706
// Function ID: 51923
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 22, 2]
// Exports: getRTCTotalBytes

// Module 6706 (_createForOfIteratorHelperLoose)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

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
let closure_4 = [];
let tmp2 = (() => {
  class RTCBandwidthMonitor {
    constructor() {
      self = this;
      tmp = outer1_2(this, self);
      this.bytes = {};
      this.record = (rtp) => {
        let iter4;
        if (null != rtp) {
          for (const key10002 in arg0.rtp.inbound) {
            let tmp13 = key10002;
            let tmp14 = outer2_5;
            let tmp15 = outer2_5(arg0.rtp.inbound[key10002]);
            let iter2 = tmp15();
            if (iter2.done) {
              continue;
            } else {
              do {
                let value = iter2.value;
                let _HermesInternal = HermesInternal;
                let combined = "inbound-" + key10002 + "-" + value.type;
                let tmp2 = self;
                if (!(combined in self.bytes)) {
                  let tmp3 = self;
                  self.bytes[combined] = 0;
                }
                let tmp4 = self;
                self.bytes[combined] = value.bytesReceived;
                let iter = tmp15();
                let tmp5 = combined;
                iter2 = iter;
              } while (!iter.done);
            }
            continue;
          }
          const tmp7 = outer2_5(rtp.rtp.outbound);
          let iter3 = tmp7();
          if (!iter3.done) {
            do {
              value = iter3.value;
              let _HermesInternal2 = HermesInternal;
              let combined1 = "outbound-" + value.type;
              let tmp9 = self;
              if (!(combined1 in self.bytes)) {
                let tmp10 = self;
                self.bytes[combined1] = 0;
              }
              let tmp11 = self;
              self.bytes[combined1] = value.bytesSent;
              iter4 = tmp7();
              iter3 = iter4;
            } while (!iter4.done);
          }
        }
      };
      return;
    }
  }
  let obj = {
    key: "getTotalBytes",
    value() {
      return RTCBandwidthMonitor(outer1_1[2]).sum(Object.values(this.bytes));
    }
  };
  const items = [obj];
  obj = {
    key: "create",
    value() {
      const tmp = new RTCBandwidthMonitor();
      outer1_4.push(tmp);
      return tmp.record;
    }
  };
  const items1 = [obj];
  return callback(RTCBandwidthMonitor, items, items1);
})();
const result = require("apply").fileFinishedImporting("lib/RTCBandwidthMonitor.tsx");

export default tmp2;
export const getRTCTotalBytes = function getRTCTotalBytes() {
  return importDefault(22).sum(closure_4.map((getTotalBytes) => getTotalBytes.getTotalBytes()));
};
