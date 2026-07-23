// Module ID: 6985
// Function ID: 55839
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 6986, 2]

// Module 6985 (_createForOfIteratorHelperLoose)
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
  class Histogram {
    constructor() {
      tmp = outer1_2(this, Histogram);
      digest = new Histogram(outer1_1[2]).Digest();
      this.digest = digest;
      this.total = 0;
      this.samples = 0;
      this.totalWeight = 0;
      return;
    }
  }
  let obj = {
    key: "getSamples",
    value() {
      return this.samples;
    }
  };
  let items = [obj, , , , ];
  obj = {
    key: "addSample",
    value(arg0) {
      let num = arg1;
      const self = this;
      if (arg1 === undefined) {
        num = 1;
      }
      self.total = self.total + arg0 * num;
      self.totalWeight = self.totalWeight + num;
      self.samples = self.samples + 1;
      const push = Histogram(outer1_1[2]).TDigest.prototype.push;
      push.call(self.digest, arg0, num);
      const digest = self.digest;
      digest.check_continuous();
    }
  };
  items[1] = obj;
  obj = {
    key: "addSamples",
    value(arr) {
      let num = arg1;
      const self = this;
      if (arg1 === undefined) {
        num = 1;
      }
      self.total = self.total + arr.reduce((arg0, arg1) => arg0 + arg1 * num, 0);
      self.totalWeight = self.totalWeight + num * arr.length;
      self.samples = self.samples + arr.length;
      const push = Histogram(outer1_1[2]).TDigest.prototype.push;
      push.call(self.digest, arr, num);
      const digest = self.digest;
      digest.check_continuous();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getReport",
    value() {
      let iter2;
      let items = arg0;
      const self = this;
      if (arg0 === undefined) {
        items = [25, 50, 75, 90, 95];
      }
      let obj = {};
      const tmp = outer1_4(items);
      let iter = tmp();
      if (!iter.done) {
        do {
          let value = iter.value;
          let digest = self.digest;
          let percentileResult = digest.percentile(value / 100);
          let num = 0;
          if (null != percentileResult) {
            num = percentileResult;
          }
          obj[value] = num;
          iter2 = tmp();
          iter = iter2;
        } while (!iter2.done);
      }
      obj = {};
      const digest2 = self.digest;
      const percentileResult1 = digest2.percentile(0);
      let num2 = 0;
      if (null != percentileResult1) {
        num2 = percentileResult1;
      }
      obj.min = num2;
      const digest3 = self.digest;
      const percentileResult2 = digest3.percentile(1);
      let num3 = 0;
      if (null != percentileResult2) {
        num3 = percentileResult2;
      }
      obj.max = num3;
      const digest4 = self.digest;
      const sizeResult = digest4.size();
      let num4 = 0;
      if (null != sizeResult) {
        num4 = sizeResult;
      }
      obj.count = num4;
      obj.percentiles = obj;
      let num5 = 0;
      if (self.totalWeight > 0) {
        num5 = self.total / self.totalWeight;
      }
      obj.mean = num5;
      obj.samples = self.samples;
      return obj;
    }
  };
  items[4] = {
    key: "getPercentile",
    value(arg0) {
      const digest = this.digest;
      const percentileResult = digest.percentile(arg0 / 100);
      let num = 0;
      if (null != percentileResult) {
        num = percentileResult;
      }
      return num;
    }
  };
  return callback(Histogram, items);
})();
const result = require("TDigest").fileFinishedImporting("lib/Histogram.tsx");

export const Histogram = tmp2;
