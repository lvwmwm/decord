// Module ID: 7941
// Function ID: 7942
// Name: Defs
// Dependencies: [41, 42, 93, 95, 98, 19, 21, 7942]

// Module 7941 (Defs)
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import _modDef7942 from "module_7942" /* 7942 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

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
const Component = react2.Component;
const jsx = Fragment.jsx;
class Defs {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, Defs);
    const obj = _getPrototypeOf(Defs);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(Defs, Component);
const entry = {
  key: "render",
  value: function render() {
    return jsx(_modDef7942, { children: this.props.children });
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(Defs, items);
importDefaultResultResult.displayName = "Defs";

export default importDefaultResultResult;
