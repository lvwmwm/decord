// Module ID: 6701
// Function ID: 51891
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: getRTCTotalBytes

// Module 6701 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let importDefault = Symbol_iterator;
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
      importDefault = tmp;
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = [];
const tmp2 = () => {
  class RTCBandwidthMonitor {
    constructor() {
      RTCBandwidthMonitor = this;
      tmp = closure_2(this, RTCBandwidthMonitor);
      this.bytes = {};
      this.record = (rtp) => {
        let iter4;
        if (null != rtp) {
          for (const key10002 in arg0.rtp.inbound) {
            let tmp13 = key10002;
            let tmp14 = closure_5;
            let tmp15 = closure_5(arg0.rtp.inbound[key10002]);
            let iter2 = tmp15();
            if (iter2.done) {
              continue;
            } else {
              while (true) {
                let value = iter2.value;
                let _HermesInternal = HermesInternal;
                let combined = "inbound-" + key10002 + "-" + value.type;
                let tmp2 = closure_0;
                if (!(combined in closure_0.bytes)) {
                  let tmp3 = closure_0;
                  closure_0.bytes[combined] = 0;
                }
                let tmp4 = closure_0;
                closure_0.bytes[combined] = value.bytesReceived;
                let iter = tmp15();
                let tmp5 = combined;
                iter2 = iter;
                if (iter.done) {
                  break;
                } else {
                  // continue
                }
              }
            }
            continue;
          }
          const tmp7 = callback(rtp.rtp.outbound);
          let iter3 = tmp7();
          if (!iter3.done) {
            do {
              value = iter3.value;
              let _HermesInternal2 = HermesInternal;
              let combined1 = "outbound-" + value.type;
              let tmp9 = closure_0;
              if (!(combined1 in closure_0.bytes)) {
                let tmp10 = closure_0;
                closure_0.bytes[combined1] = 0;
              }
              let tmp11 = closure_0;
              closure_0.bytes[combined1] = value.bytesSent;
              iter4 = tmp7();
              iter3 = iter4;
            } while (!iter4.done);
          }
        }
      };
      return;
    }
  }
  const importDefault = RTCBandwidthMonitor;
  let obj = {
    key: "getTotalBytes",
    value() {
      return RTCBandwidthMonitor(closure_1[2]).sum(Object.values(this.bytes));
    }
  };
  const items = [obj];
  obj = {
    key: "create",
    value() {
      const tmp = new RTCBandwidthMonitor();
      return tmp.record;
    }
  };
  const items1 = [obj];
  return callback(RTCBandwidthMonitor, items, items1);
}();
const result = arg1(dependencyMap[3]).fileFinishedImporting("lib/RTCBandwidthMonitor.tsx");

export default tmp2;
export const getRTCTotalBytes = function getRTCTotalBytes() {
  return importDefault(dependencyMap[2]).sum(closure_4.map((getTotalBytes) => getTotalBytes.getTotalBytes()));
};
