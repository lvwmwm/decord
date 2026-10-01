// Module ID: 12302
// Function ID: 12303
// Dependencies: [109, 41, 42, 93, 95, 98, 19, 17, 21, 4666, 4663]

// Module 12302
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import hasOwnProperty from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;
import module_4663_mod from "module_4663" /* 4663 */;

const require = globalThis.__r;
let _require;

let items1;
let module_4663;
let oneOfType;
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
let closure_2 = ["component", "to", "replace"];
const TouchableHighlight = react_native.TouchableHighlight;
const jsx = Fragment.jsx;
class Link {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    const tmp = _classCallCheck(this, Link);
    const items1 = [...items];
    const obj = _getPrototypeOf(Link);
    const tmp2 = _getPrototypeOf;
    const tmp3 = hasOwnProperty;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.handlePress = (defaultPrevented, str) => {
      if (props.props.onPress) {
        props = tmp.props;
        props.onPress(defaultPrevented);
      }
      if (!defaultPrevented.defaultPrevented) {
        const to = str.to;
        if (props.props.replace) {
          const replaced = str.replace(to);
        } else {
          str.push(to);
        }
      }
    };
    return tmp3Result;
  }
}
_inherits(Link, react.Component);
const entry = {
  key: "render",
  value: function render() {
    let replace;
    let to;
    const self = this;
    const props = this.props;
    ({ component: dependencyMap, to, replace } = props);
    _require = _objectWithoutProperties(props, self);
    return jsx(require("MemoryRouter").__HistoryContext.Consumer, {
      children(arg0) {
        closure_0 = arg0;
        const merged = Object.assign(closure_0);
        return <closure_1 onPress={function onPress(arg0) {
          return self.handlePress(arg0, closure_0);
        }} />;
      }
    });
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(Link, items);
importDefaultResultResult.defaultProps = { component: TouchableHighlight, replace: false };
let obj = { onPress: module_4663.func, component: module_4663.elementType, replace: module_4663.bool, to: oneOfType(items1) };
module_4663 = module_4663_mod;
oneOfType = module_4663.oneOfType;
items1 = [module_4663.string, module_4663.object];
importDefaultResultResult.propTypes = obj;

export default importDefaultResultResult;
