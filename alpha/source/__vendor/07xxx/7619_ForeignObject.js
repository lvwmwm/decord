// Module ID: 7619
// Function ID: 7620
// Name: ForeignObject
// Dependencies: [41, 42, 93, 95, 98, 19, 21, 7620, 7565, 7564]

// Module 7619 (ForeignObject)
import Fragment from "Fragment" /* 21 */;
import _modDef7564 from "module_7564" /* 7564 */;
import extractProps from "extractProps" /* 7565 */;
import _modDef7620 from "module_7620" /* 7620 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;

let size;

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
class ForeignObject {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ForeignObject);
    const obj = _getPrototypeOf(ForeignObject);
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
_inherits(ForeignObject, _modDef7564);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    const props = this.props;
    size = { x: props.x, y: props.y, width: props.width, height: props.height };
    const children = props.children;
    _modDef7620;
    const obj3 = extractProps;
    const merged = Object.assign(obj3.withoutXY(this, props));
    const merged1 = Object.assign(size);
    return <tmp ref={function ref(arg0) {
      return self.refMethod(arg0);
    }}>{children}</tmp>;
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(ForeignObject, items);
importDefaultResultResult.displayName = "ForeignObject";
importDefaultResultResult.defaultProps = { x: "0%", y: "0%", width: "100%", height: "100%" };

export default importDefaultResultResult;
