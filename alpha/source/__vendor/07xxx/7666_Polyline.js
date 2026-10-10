// Module ID: 7666
// Function ID: 7667
// Name: Polyline
// Dependencies: [41, 42, 93, 95, 98, 19, 21, 7665, 7660, 7600]

// Module 7666 (Polyline)
import Fragment from "Fragment" /* 21 */;
import multiplyMatricesDefault from "multiplyMatrices" /* 7600 */;
import PathDefault from "Path" /* 7660 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;

let tmp2;
const extractPolyPointsDefault = tmp2(7665);
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
const jsx = Fragment.jsx;
class Polyline {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    _classCallCheck(this, Polyline);
    const items1 = [...items];
    const obj = _getPrototypeOf(Polyline);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.setNativeProps = (points) => {
      points = points.points;
      if (points) {
        const _HermesInternal = HermesInternal;
        points.d = "M" + Polyline(closure_2_1[7])(points);
      }
      if (closure_0.root) {
        const root = closure_0.root;
        root.setNativeProps(points);
      }
    };
    return tmp3Result;
  }
}
_inherits(Polyline, multiplyMatricesDefault);
const entry = {
  key: "render",
  value: function render() {
    let combined;
    const props = this.props;
    const points = props.points;
    const obj = { ref: this.refMethod, d: combined };
    combined = points;
    const tmp = jsx;
    const tmp4 = PathDefault;
    if (points) {
      const _HermesInternal = HermesInternal;
      combined = "M" + extractPolyPointsDefault(points);
    }
    const merged = Object.assign(props);
    return tmp(tmp4, obj);
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(Polyline, items);
importDefaultResultResult.displayName = "Polyline";
importDefaultResultResult.defaultProps = { points: "" };

export default importDefaultResultResult;
