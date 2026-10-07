// Module ID: 8164
// Function ID: 8165
// Dependencies: [41, 42, 93, 95, 98, 19, 21, 8151, 8165, 8160]

// Module 8164
import Fragment from "Fragment" /* 21 */;
import extractProps from "extractProps" /* 8151 */;
import multiplyMatricesDefault from "multiplyMatrices" /* 8160 */;
import _modDef8165 from "module_8165" /* 8165 */;
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
class Circle {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, Circle);
    const obj = _getPrototypeOf(Circle);
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
_inherits(Circle, multiplyMatricesDefault);
const entry = {
  key: "render",
  value: function render() {
    let cx;
    let cy;
    let r;
    const self = this;
    const props = this.props;
    const obj = { cx, cy, r };
    ({ cx, cy, r } = props);
    const obj2 = extractProps;
    const merged = Object.assign(obj2.extract(this, props));
    _modDef8165;
    const merged1 = Object.assign(obj);
    return <tmp2 ref={function ref(arg0) {
      return self.refMethod(arg0);
    }} />;
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(Circle, items);
importDefaultResultResult.displayName = "Circle";
importDefaultResultResult.defaultProps = { cx: 0, cy: 0, r: 0 };

export default importDefaultResultResult;
