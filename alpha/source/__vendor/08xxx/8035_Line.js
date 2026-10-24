// Module ID: 8035
// Function ID: 8036
// Name: Line
// Dependencies: [41, 42, 93, 95, 98, 19, 21, 7977, 8036, 7986]

// Module 8035 (Line)
import Fragment from "Fragment" /* 21 */;
import extractProps from "extractProps" /* 7977 */;
import multiplyMatricesDefault from "multiplyMatrices" /* 7986 */;
import _modDef8036 from "module_8036" /* 8036 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;

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
class Line {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, Line);
    const obj = _getPrototypeOf(Line);
    const tmp2 = _getPrototypeOf;
    const tmp3 = _possibleConstructorReturn;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(Line, multiplyMatricesDefault);
const entry = {
  key: "render",
  value: function render() {
    let x1;
    let x2;
    let y1;
    let y2;
    const self = this;
    const props = this.props;
    const obj = { x1, y1, x2, y2 };
    ({ x1, y1, x2, y2 } = props);
    const obj2 = extractProps;
    const merged = Object.assign(obj2.extract(this, props));
    _modDef8036;
    const merged1 = Object.assign(obj);
    return <tmp2 ref={function ref(arg0) {
      return self.refMethod(arg0);
    }} />;
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(Line, items);
importDefaultResultResult.displayName = "Line";
importDefaultResultResult.defaultProps = { x1: 0, y1: 0, x2: 0, y2: 0 };

export default importDefaultResultResult;
