// Module ID: 5373
// Function ID: 46034
// Name: AverageWindow
// Dependencies: [5368, 5369]

// Module 5373 (AverageWindow)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const tmp2 = (() => {
  class AverageWindow {
    constructor(arg0, arg1) {
      self = this;
      tmp = AverageWindow(this, AverageWindow);
      this.nextIndex = 0;
      num = 1;
      array = new Array(Math.max(1, arg0));
      this.inputValues = array;
      num2 = 0;
      if (null != arg1) {
        num2 = arg1;
      }
      self.currentAverage = num2;
      if (undefined === arg1) {
        num = 0;
      }
      self.currentCount = num;
      self.nextIndex = self.currentCount;
      self.inputValues[0] = arg1;
      return;
    }
  }
  let obj = {
    key: "currentValue",
    get() {
      return this.currentAverage;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "addValue",
    value: function addValue(arg0) {
      const self = this;
      const nextIndex = this.getNextIndex();
      if (undefined === this.inputValues[nextIndex]) {
        let currentCount = self.currentCount + 1;
      } else {
        currentCount = self.currentCount;
      }
      self.inputValues[nextIndex] = arg0;
      let num2 = 0;
      const result = self.currentAverage * (self.currentCount / currentCount);
      if (null != this.inputValues[nextIndex]) {
        num2 = tmp2;
      }
      self.currentAverage = Math.max(0, result + (arg0 - num2) / currentCount);
      self.currentCount = currentCount;
    }
  };
  items[1] = obj;
  obj = {
    key: "getNextIndex",
    value: function getNextIndex() {
      this.nextIndex = (this.nextIndex + 1) % this.inputValues.length;
      return this.nextIndex;
    }
  };
  items[2] = obj;
  return callback(AverageWindow, items);
})();
let closure_2 = tmp2;

export const AverageWindow = tmp2;
export const MultiTypeAverageWindow = (() => {
  class MultiTypeAverageWindow {
    constructor(arg0, arg1) {
      tmp = MultiTypeAverageWindow(this, MultiTypeAverageWindow);
      map = new Map();
      this.averageWindows = map;
      this.windowSize = arg0;
      this.defaultValue = arg1;
      return;
    }
  }
  let obj = {
    key: "addValue",
    value: function addValue(arg0, arg1) {
      const self = this;
      const averageWindows = this.averageWindows;
      let value = averageWindows.get(arg1);
      if (!value) {
        const prototype = outer1_2.prototype;
        const tmp4 = new outer1_2(self.windowSize);
        const averageWindows2 = self.averageWindows;
        const result = averageWindows2.set(arg1, tmp4);
        value = tmp4;
      }
      value.addValue(arg0);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getCurrentValue",
    value: function getCurrentValue(itemType) {
      const averageWindows = this.averageWindows;
      const value = averageWindows.get(itemType);
      let currentValue;
      if (null != value) {
        currentValue = value.currentValue;
      }
      if (null == currentValue) {
        currentValue = this.defaultValue;
      }
      let num = 0;
      if (null != currentValue) {
        num = currentValue;
      }
      return num;
    }
  };
  items[1] = obj;
  obj = {
    key: "reset",
    value: function reset() {
      const averageWindows = this.averageWindows;
      averageWindows.clear();
    }
  };
  items[2] = obj;
  return callback(MultiTypeAverageWindow, items);
})();
