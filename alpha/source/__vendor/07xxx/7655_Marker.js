// Module ID: 7655
// Function ID: 7656
// Name: Marker
// Dependencies: [41, 42, 93, 95, 98, 19, 21, 7656, 7589, 7600]

// Module 7655 (Marker)
import Fragment from "Fragment" /* 21 */;
import extractViewBoxDefault from "extractViewBox" /* 7589 */;
import multiplyMatricesDefault from "multiplyMatrices" /* 7600 */;
import _modDef7656 from "module_7656" /* 7656 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
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
class Marker {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, Marker);
    const obj = _getPrototypeOf(Marker);
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
_inherits(Marker, multiplyMatricesDefault);
const entry = {
  key: "render",
  value: function render() {
    let children;
    let markerHeight;
    let markerWidth;
    let preserveAspectRatio;
    let viewBox;
    const self = this;
    const props = this.props;
    const obj = { name: props.id, refX: props.refX, refY: props.refY, markerUnits: props.markerUnits, orient: String(props.orient), markerWidth, markerHeight };
    ({ viewBox, preserveAspectRatio, markerWidth, markerHeight, children } = props);
    _modDef7656;
    const merged = Object.assign(obj);
    const merged1 = Object.assign(extractViewBoxDefault({ viewBox, preserveAspectRatio }));
    return <tmp ref={function ref(arg0) {
      return self.refMethod(arg0);
    }}>{children}</tmp>;
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(Marker, items);
importDefaultResultResult.displayName = "Marker";
importDefaultResultResult.defaultProps = { refX: 0, refY: 0, orient: "0", markerWidth: 3, markerHeight: 3, markerUnits: "strokeWidth" };

export default importDefaultResultResult;
