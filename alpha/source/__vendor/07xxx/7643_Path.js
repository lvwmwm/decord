// Module ID: 7643
// Function ID: 7644
// Name: Path
// Dependencies: [41, 42, 93, 95, 98, 19, 21, 7574, 7644, 7583]

// Module 7643 (Path)
import Fragment from "Fragment" /* 21 */;
import extractProps from "extractProps" /* 7574 */;
import multiplyMatricesDefault from "multiplyMatrices" /* 7583 */;
import _modDef7644 from "module_7644" /* 7644 */;
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
class Path {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, Path);
    const obj = _getPrototypeOf(Path);
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
_inherits(Path, multiplyMatricesDefault);
const entry = {
  key: "render",
  value: function render() {
    let d;
    const self = this;
    const props = this.props;
    const obj = { d };
    d = props.d;
    const obj2 = extractProps;
    const merged = Object.assign(obj2.extract(this, props));
    _modDef7644;
    const merged1 = Object.assign(obj);
    return <tmp2 ref={function ref(arg0) {
      return self.refMethod(arg0);
    }} />;
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(Path, items);
importDefaultResultResult.displayName = "Path";

export default importDefaultResultResult;
