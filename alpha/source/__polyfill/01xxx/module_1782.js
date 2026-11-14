// Module ID: 1782
// Function ID: 1783
// Dependencies: [41, 42]

// Module 1782
import _createClassDefault from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

const ERROR_MESSAGES = {
  invalidCoordinate(x1, x2) {
    return "Invalid " + x1 + " coordinate for cubic bezier easing point, it should be a number between 0 and 1, received " + x2;
  }
};
class CubicBezierEasing {
  constructor(x1, y1, x2, y2) {
    const self = this;
    _classCallCheck(this, CubicBezierEasing);
    if (x1 >= 0) {
      if (x1 <= 1) {
        if (x2 >= 0) {
          if (x2 <= 1) {
            self.x1 = x1;
            self.y1 = y1;
            self.x2 = x2;
            self.y2 = y2;
          }
        }
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const self2 = this;
        const self3 = this;
        const error = new Error("[Reanimated] " + obj.invalidCoordinate("x2", x2));
        throw error;
      }
    }
    const error1 = new Error("[Reanimated] " + obj.invalidCoordinate("x1", x1));
    throw error1;
  }
}
const entry = {
  key: "toString",
  value: function toString() {
    return "" + CubicBezierEasing.easingName + "(" + this.x1 + ", " + this.y1 + ", " + this.x2 + ", " + this.y2 + ")";
  }
};
const items = [
  entry,
  {
    key: "normalize",
    value: function normalize() {
      return { name: CubicBezierEasing.easingName, x1: this.x1, y1: this.y1, x2: this.x2, y2: this.y2 };
    }
  }
];
const tmp2 = _createClassDefault(CubicBezierEasing, items);
tmp2.easingName = "cubicBezier";
const CubicBezierEasing_export = tmp2;

export { ERROR_MESSAGES };
export { CubicBezierEasing_export as CubicBezierEasing };
