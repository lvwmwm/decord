// Module ID: 6980
// Function ID: 55805
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 6980 (_createForOfIteratorHelperLoose)
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class Histogram {
    constructor() {
      tmp = closure_2(this, Histogram);
      digest = new Histogram(closure_1[2]).Digest();
      this.digest = digest;
      this.total = 0;
      this.samples = 0;
      this.totalWeight = 0;
      return;
    }
  }
  const arg1 = Histogram;
  let obj = {
    key: "getSamples",
    value() {
      return this.samples;
    }
  };
  const items = [obj, , , , ];
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
      const push = Histogram(closure_1[2]).TDigest.prototype.push;
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
      const Histogram = num;
      self.total = self.total + arr.reduce((arg0, arg1) => arg0 + arg1 * num, 0);
      self.totalWeight = self.totalWeight + num * arr.length;
      self.samples = self.samples + arr.length;
      const push = Histogram(closure_1[2]).TDigest.prototype.push;
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
        items = [];
      }
      let obj = {};
      const tmp = callback2(items);
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
}();
const result = arg1(dependencyMap[3]).fileFinishedImporting("lib/Histogram.tsx");

export const Histogram = tmp2;
