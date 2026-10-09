// Module ID: 7626
// Function ID: 7627
// Name: Filter
// Dependencies: [41, 42, 93, 95, 98, 19, 21, 7627, 7583]

// Module 7626 (Filter)
import Fragment from "Fragment" /* 21 */;
import multiplyMatricesDefault from "multiplyMatrices" /* 7583 */;
import _modDef7627 from "module_7627" /* 7627 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
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
class Filter {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, Filter);
    const obj = _getPrototypeOf(Filter);
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
_inherits(Filter, multiplyMatricesDefault);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    const props = this.props;
    size = { name: props.id, x: props.x, y: props.y, width: props.width, height: props.height, filterUnits: props.filterUnits, primitiveUnits: props.primitiveUnits };
    _modDef7627;
    const merged = Object.assign(size);
    return <tmp ref={function ref(arg0) {
      return self.refMethod(arg0);
    }}>{this.props.children}</tmp>;
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(Filter, items);
importDefaultResultResult.displayName = "Filter";
importDefaultResultResult.defaultProps = { x: "-10%", y: "-10%", width: "120%", height: "120%", filterUnits: "objectBoundingBox", primitiveUnits: "userSpaceOnUse" };

export default importDefaultResultResult;
