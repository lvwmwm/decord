// Module ID: 7663
// Function ID: 7664
// Name: Use
// Dependencies: [41, 42, 93, 95, 98, 19, 21, 7575, 7664, 7574, 7583]

// Module 7663 (Use)
import Fragment from "Fragment" /* 21 */;
import extractProps from "extractProps" /* 7574 */;
import warnOnce from "warnOnce" /* 7575 */;
import multiplyMatricesDefault from "multiplyMatrices" /* 7583 */;
import _modDef7664 from "module_7664" /* 7664 */;
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
class Use {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, Use);
    const obj = _getPrototypeOf(Use);
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
_inherits(Use, multiplyMatricesDefault);
const entry = {
  key: "render",
  value: function render() {
    let children;
    let height;
    let width;
    let x;
    let y;
    const self = this;
    const props = this.props;
    let str = props.href;
    ({ children, x, y, width, height } = props);
    if (undefined === str) {
      str = props.xlinkHref;
    }
    const match = str && str.match(warnOnce.idPattern);
    if (!(match && match[1])) {
      const _console = console;
      console.warn(`Invalid \`href\` prop for \`Use\` element, expected a href like "#id", but got: "${str}"`);
    }
    size = { href: tmp4, x, y, width, height };
    _modDef7664;
    const obj3 = extractProps;
    const merged = Object.assign(obj3.withoutXY(this, props));
    const merged1 = Object.assign(size);
    return <tmp7 ref={function ref(arg0) {
      return self.refMethod(arg0);
    }}>{children}</tmp7>;
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(Use, items);
importDefaultResultResult.displayName = "Use";
importDefaultResultResult.defaultProps = { x: 0, y: 0, width: 0, height: 0 };

export default importDefaultResultResult;
