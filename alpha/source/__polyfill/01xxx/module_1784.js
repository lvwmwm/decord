// Module ID: 1784
// Function ID: 1785
// Dependencies: [41, 42, 1764, 1668]

// Module 1784
import _createClassDefault from "_createClass" /* 42 */;
import _mod1668 from "module_1668" /* 1668 */;
import _mod1764 from "module_1764" /* 1764 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

const ERROR_MESSAGES = {
  invalidPointsCount() {
    return "Invalid linear easing points count. There should be at least two points";
  },
  invalidInputProgressValue(item) {
    return "Invalid input progress " + item + " value, it should be a percentage between 0% and 100%";
  }
};
const obj2 = {
  inputProgressLessThanPrecedingPoint(arg0, arg1) {
    return "Linear easing point x value " + arg0 + " is less than value of the preceding control point " + arg1 + ". Value will be overridden by " + arg1;
  }
};
function parsePercentage(arg0) {

}
function extrapolate(arg0, arg1, arg2) {

}
class LinearEasing {
  constructor(arr) {
    _classCallCheck(this, LinearEasing);
    if (arr.length < 2) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error("[Reanimated] " + obj.invalidPointsCount());
      throw error;
    } else {
      this.points = arr.map((item) => {
        let first = item;
        if (Array.isArray(item)) {
          first = item;
          if (1 === item.length) {
            first = item[0];
          }
        }
        return first;
      });
    }
  }
}
const entry = {
  key: "toString",
  value: function toString() {
    const easingName = LinearEasing.easingName;
    const points = this.points;
    let mapped = points.map((arr) => {
      let combined = arr;
      if (Array.isArray(arr)) {
        const mapped = arr.map((item) => {
          let combined = item;
          if (typeof item === "string") {
            const _HermesInternal = HermesInternal;
            combined = "\"" + item + "\"";
          }
          return combined;
        });
        let _HermesInternal = HermesInternal;
        combined = "[" + mapped.join(", ") + "]";
      }
      return combined;
    });
    return "" + easingName + "(" + mapped.join(", ") + ")";
  }
};
const items = [
  entry,
  {
    key: "normalize",
    value: function normalize() {
      let point;
      let point2;
      const canonicalizeResult = this.canonicalize();
      if (canonicalizeResult[0].x > 0) {
        [point, point2] = canonicalizeResult;
        if (typeof extrapolate === "function") {
          let sum;
          if (point.x === point2.x) {
            sum = 0 <= point.x ? point.y : point2.y;
          } else {
            sum = point.y + (point2.y - point.y) / (point2.x - point.x) * (0 - point.x);
          }
          const point1 = { x: 0, y: sum };
          tmp5(point1);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      if (canonicalizeResult[canonicalizeResult.length - 1].x < 1) {
        const point3 = canonicalizeResult[canonicalizeResult.length - 2];
        const point4 = canonicalizeResult[canonicalizeResult.length - 1];
        if (typeof extrapolate === "function") {
          let sum1;
          if (point3.x === point4.x) {
            sum1 = 1 <= point3.x ? point3.y : point4.y;
          } else {
            sum1 = point3.y + (point4.y - point3.y) / (point4.x - point3.x) * (1 - point3.x);
          }
          const point5 = { x: 1, y: sum1 };
          tmp7(point5);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      return { name: LinearEasing.easingName, points: canonicalizeResult };
    }
  },
  {
    key: "canonicalize",
    value: function canonicalize() {
      let sum;
      const points = this.points;
      const flatMapResult = points.flatMap((item) => {
        let mapped;
        if (Array.isArray(item)) {
          const substr = item.slice(1);
          mapped = substr.map(function(item) {
            if (typeof parsePercentage === "function") {
              let result = item;
              if (typeof item !== "number") {
                const PERCENTAGE_REGEX = _mod1764.PERCENTAGE_REGEX;
                if (PERCENTAGE_REGEX.test(item)) {
                  const _parseFloat = parseFloat;
                  result = parseFloat(item) / 100;
                }
              }
              if (undefined !== result) {
                if (result >= 0) {
                  if (result <= 1) {
                    const point = { x: result, y: item[0] };
                    return point;
                  }
                }
              }
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const self = this;
              const self2 = this;
              const error = new Error("[Reanimated] " + ERROR_MESSAGES.invalidInputProgressValue(item));
              throw error;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          });
        } else {
          mapped = [{ y: item }];
          const obj = { y: item };
        }
        return mapped;
      });
      if (undefined === flatMapResult[0].x) {
        flatMapResult[0].x = 0;
      }
      if (undefined === flatMapResult[flatMapResult.length - 1].x) {
        flatMapResult[flatMapResult.length - 1].x = 1;
      }
      let num2 = -Infinity;
      let num3 = 0;
      if (0 < flatMapResult.length) {
        do {
          let x = flatMapResult[num3].x;
          let tmp3 = num2;
          if (undefined !== x) {
            let tmp4 = x;
            if (x < num2) {
              let logger = _mod1668.logger;
              let warnResult = logger.warn(obj2.inputProgressLessThanPrecedingPoint(x, num2));
              flatMapResult[num3].x = num2;
              tmp4 = num2;
            }
            tmp3 = tmp4;
          }
          num3 = num3 + 1;
          num2 = tmp3;
        } while (num3 < flatMapResult.length);
      }
      let x2 = flatMapResult[0].x;
      let num4 = 1;
      let num5 = 0;
      if (1 < flatMapResult.length) {
        do {
          let tmp12;
          let num6;
          let x3 = flatMapResult[num4].x;
          if (undefined !== x3) {
            tmp12 = x3;
            num6 = 0;
            if (0 < num5) {
              let num7 = 0;
              num6 = 0;
              tmp12 = x3;
              if (0 < num5) {
                do {
                  sum = num7 + 1;
                  flatMapResult[num4 - num5 + num7].x = x2 + tmp13 * sum / tmp14;
                  num6 = 0;
                  tmp12 = x3;
                  num7 = sum;
                } while (sum < num5);
              }
            }
          } else {
            num6 = num5 + 1;
            tmp12 = x2;
          }
          num4 = num4 + 1;
          num5 = num6;
          x2 = tmp12;
        } while (num4 < flatMapResult.length);
      }
      return flatMapResult;
    }
  }
];
let tmp2 = _createClassDefault(LinearEasing, items);
tmp2.easingName = "linear";
const LinearEasing_export = tmp2;

export { ERROR_MESSAGES };
export const WARN_MESSAGES = obj2;
export { LinearEasing_export as LinearEasing };
