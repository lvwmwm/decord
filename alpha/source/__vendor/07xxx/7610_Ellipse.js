// Module ID: 7610
// Function ID: 7611
// Name: Ellipse
// Dependencies: [41, 42, 93, 95, 98, 19, 21, 7591, 7611, 7600]

// Module 7610 (Ellipse)
import Fragment from "Fragment" /* 21 */;
import extractProps from "extractProps" /* 7591 */;
import multiplyMatricesDefault from "multiplyMatrices" /* 7600 */;
import _modDef7611 from "module_7611" /* 7611 */;
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
class Ellipse {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, Ellipse);
    const obj = _getPrototypeOf(Ellipse);
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
_inherits(Ellipse, multiplyMatricesDefault);
const entry = {
  key: "render",
  value: function render() {
    let cx;
    let cy;
    let rx;
    let ry;
    const self = this;
    const props = this.props;
    const obj = { cx, cy, rx, ry };
    ({ cx, cy, rx, ry } = props);
    const obj2 = extractProps;
    const merged = Object.assign(obj2.extract(this, props));
    _modDef7611;
    const merged1 = Object.assign(obj);
    return <tmp2 ref={function ref(arg0) {
      return self.refMethod(arg0);
    }} />;
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(Ellipse, items);
importDefaultResultResult.displayName = "Ellipse";
importDefaultResultResult.defaultProps = { cx: 0, cy: 0, rx: 0, ry: 0 };

export default importDefaultResultResult;
