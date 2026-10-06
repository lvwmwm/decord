// Module ID: 8001
// Function ID: 8002
// Name: Polygon
// Dependencies: [41, 42, 93, 95, 98, 19, 21, 8002, 7997, 7937]

// Module 8001 (Polygon)
import Fragment from "Fragment" /* 21 */;
import multiplyMatricesDefault from "multiplyMatrices" /* 7937 */;
import PathDefault from "Path" /* 7997 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;

let tmp2;
const extractPolyPointsDefault = tmp2(8002);
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
class Polygon {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    _classCallCheck(this, Polygon);
    const items1 = [...items];
    const obj = _getPrototypeOf(Polygon);
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
        points.d = "M" + Polygon(closure_2_1[7])(points) + "z";
      }
      if (closure_0.root) {
        const root = closure_0.root;
        root.setNativeProps(points);
      }
    };
    return tmp3Result;
  }
}
_inherits(Polygon, multiplyMatricesDefault);
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
      combined = "M" + extractPolyPointsDefault(points) + "z";
    }
    const merged = Object.assign(props);
    return tmp(tmp4, obj);
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(Polygon, items);
importDefaultResultResult.displayName = "Polygon";
importDefaultResultResult.defaultProps = { points: "" };

export default importDefaultResultResult;
