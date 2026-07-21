// Module ID: 5149
// Function ID: 43645
// Name: AverageWindow
// Dependencies: []

// Module 5149 (AverageWindow)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
const tmp2 = () => {
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
  let closure_0 = AverageWindow;
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
      const tmp2 = this.inputValues[nextIndex];
      if (undefined === tmp2) {
        let currentCount = self.currentCount + 1;
      } else {
        currentCount = self.currentCount;
      }
      self.inputValues[nextIndex] = arg0;
      let num2 = 0;
      const result = self.currentAverage * (self.currentCount / currentCount);
      if (null != tmp2) {
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
}();

export const AverageWindow = tmp2;
export const MultiTypeAverageWindow = () => {
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
  let closure_0 = MultiTypeAverageWindow;
  let obj = {
    key: "addValue",
    value: function addValue(arg0, arg1) {
      const self = this;
      const averageWindows = this.averageWindows;
      let value = averageWindows.get(arg1);
      if (!value) {
        const prototype = ctor.prototype;
        const tmp4 = new ctor(self.windowSize);
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
}();
