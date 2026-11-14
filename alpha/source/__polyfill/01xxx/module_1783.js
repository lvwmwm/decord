// Module ID: 1783
// Function ID: 1784
// Dependencies: [41, 42]

// Module 1783
import _createClassDefault from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

const ERROR_MESSAGES = {
  invalidStepsNumber(stepsNumber) {
    return "Steps easing function accepts only positive integers as numbers of steps, " + stepsNumber + " isn't a one";
  }
};
class StepsEasing {
  constructor(stepsNumber, arg1) {
    let str = arg1;
    if (arg1 === undefined) {
      str = "jump-end";
    }
    const self = this;
    _classCallCheck(this, StepsEasing);
    if (stepsNumber > 0) {
      if (stepsNumber % 1 === 0) {
        self.stepsNumber = stepsNumber;
        self.modifier = str;
      }
    }
    const error = new Error("[Reanimated] " + obj.invalidStepsNumber(stepsNumber));
    throw error;
  }
}
const entry = {
  key: "toString",
  value: function toString() {
    return "" + StepsEasing.easingName + "(" + this.stepsNumber + ", " + this.modifier + ")";
  }
};
let items = [
  entry,
  {
    key: "normalize",
    value: function normalize() {
      const self = this;
      const modifier = this.modifier;
      if ("jump-start" !== modifier) {
        if ("start" !== modifier) {
          if ("jump-end" !== modifier) {
            if ("end" !== modifier) {
              if ("jump-both" === modifier) {
                return self.jumpBoth();
              } else {
                let str5 = "linear";
                if (1 !== self.stepsNumber) {
                  str5 = self.jumpNone();
                }
                return str5;
              }
            }
          }
          return self.jumpEnd();
        }
      }
      return self.jumpStart();
    }
  },
  {
    key: "jumpNone",
    value: function jumpNone() {
      let stepsNumber;
      const self = this;
      const items = [];
      let num = 0;
      if (0 < this.stepsNumber) {
        do {
          let point = { x: num / self.stepsNumber, y: num / tmp };
          let arr = items.push(point);
          num = num + 1;
          stepsNumber = self.stepsNumber;
        } while (num < stepsNumber);
      }
      return self.withName(items);
    }
  },
  {
    key: "jumpStart",
    value: function jumpStart() {
      let stepsNumber;
      let sum;
      const self = this;
      const items = [];
      let num = 0;
      if (0 < this.stepsNumber) {
        do {
          let point = { x: num / self.stepsNumber, y: sum / self.stepsNumber };
          sum = num + 1;
          let arr = items.push(point);
          num = sum;
          stepsNumber = self.stepsNumber;
        } while (sum < stepsNumber);
      }
      return self.withName(items);
    }
  },
  {
    key: "jumpEnd",
    value: function jumpEnd() {
      let stepsNumber;
      const self = this;
      const items = [];
      let num = 0;
      if (0 < this.stepsNumber) {
        do {
          let point = { x: num / self.stepsNumber, y: num / self.stepsNumber };
          let arr = items.push(point);
          num = num + 1;
          stepsNumber = self.stepsNumber;
        } while (num < stepsNumber);
      }
      items.push({ x: 1, y: 1 });
      return self.withName(items);
    }
  },
  {
    key: "jumpBoth",
    value: function jumpBoth() {
      let stepsNumber;
      let sum;
      const self = this;
      const items = [];
      let num = 0;
      if (0 < this.stepsNumber) {
        do {
          let point = { x: num / self.stepsNumber, y: sum / tmp };
          sum = num + 1;
          let arr = items.push(point);
          num = sum;
          stepsNumber = self.stepsNumber;
        } while (sum < stepsNumber);
      }
      items.push({ x: 1, y: 1 });
      return self.withName(items);
    }
  },
  {
    key: "withName",
    value: function withName(items) {
      return { name: StepsEasing.easingName, points: items };
    }
  }
];
const tmp2 = _createClassDefault(StepsEasing, items);
tmp2.easingName = "steps";
const StepsEasing_export = tmp2;

export { ERROR_MESSAGES };
export { StepsEasing_export as StepsEasing };
