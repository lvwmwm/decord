// Module ID: 5386
// Function ID: 46137
// Name: ConsecutiveNumbers
// Dependencies: [5368, 5369]

// Module 5386 (ConsecutiveNumbers)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

let tmp2 = (() => {
  class ConsecutiveNumbers {
    constructor(arg0, arg1) {
      tmp = ConsecutiveNumbers(this, ConsecutiveNumbers);
      this.startIndex = arg0;
      this.endIndex = arg1;
      return;
    }
  }
  let obj = {
    key: "length",
    get() {
      return Math.max(0, this.endIndex - this.startIndex + 1);
    }
  };
  const items = [obj, , , , , , , , , ];
  obj = {
    key: "at",
    value: function at(arg0) {
      return this.startIndex + arg0;
    }
  };
  items[1] = obj;
  obj = {
    key: "equals",
    value: function equals(startIndex) {
      return this.startIndex === startIndex.startIndex && this.endIndex === startIndex.endIndex;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "toArray",
    value: function toArray() {
      let length;
      const self = this;
      if (0 === this.length) {
        return [];
      } else {
        const _Array = Array;
        const array = new Array(self.length);
        let num = 0;
        if (0 < self.length) {
          do {
            array[num] = self.startIndex + num;
            num = num + 1;
            length = self.length;
          } while (num < length);
        }
        return array;
      }
    }
  };
  items[4] = {
    key: "includes",
    value: function includes(arg0) {
      return arg0 >= this.startIndex && arg0 <= this.endIndex;
    }
  };
  items[5] = {
    key: "indexOf",
    value: function indexOf(arg0) {
      let num = -1;
      if (this.includes(arg0)) {
        num = arg0 - this.startIndex;
      }
      return num;
    }
  };
  items[6] = {
    key: "findValue",
    value: function findValue(arg0) {
      const self = this;
      let num = 0;
      if (0 < this.length) {
        const sum = self.startIndex + num;
        while (!arg0(sum, num, self)) {
          num = num + 1;
        }
        return sum;
      }
    }
  };
  items[7] = {
    key: "every",
    value: function every(arg0) {
      const self = this;
      let num = 0;
      if (0 < this.length) {
        while (arg0(self.startIndex + num, num, self)) {
          num = num + 1;
        }
        return false;
      }
      return true;
    }
  };
  items[8] = {
    key: "slice",
    value: function slice() {
      const self = this;
      let num = 0;
      if (arguments.length > 0) {
        num = 0;
        if (undefined !== arguments[0]) {
          num = arguments[0];
        }
      }
      if (arguments.length > 1) {
        if (undefined !== arguments[1]) {
          let length = arguments[1];
        }
        const sum = self.startIndex + num;
        const _Math = Math;
        const _Math2 = Math;
        const prototype = ConsecutiveNumbers.prototype;
        const tmp7 = new ConsecutiveNumbers(sum, Math.max(sum - 1, self.startIndex + Math.min(length, self.length) - 1));
        return tmp7;
      }
      length = self.length;
    }
  };
  items[9] = {
    key: Symbol.iterator,
    *value() {
      const self = this;
      let startIndex = self.startIndex;
      if (startIndex <= self.endIndex) {
        yield startIndex;
        do {
          startIndex = startIndex + 1;
        } while (startIndex <= self.endIndex);
      }
    }
  };
  return callback(ConsecutiveNumbers, items);
})();
tmp2 = new tmp2(-1, -2);
tmp2.EMPTY = tmp2;

export const ConsecutiveNumbers = tmp2;
