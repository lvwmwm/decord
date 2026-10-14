// Module ID: 7669
// Function ID: 7670
// Name: Pattern
// Dependencies: [41, 42, 93, 95, 98, 19, 21, 7591, 7661, 7670, 7596, 7607]

// Module 7669 (Pattern)
import Fragment from "Fragment" /* 21 */;
import extractTransformDefault from "extractTransform" /* 7591 */;
import multiplyMatricesDefault from "multiplyMatrices" /* 7607 */;
import unitsDefault from "units" /* 7661 */;
import _modDef7670 from "module_7670" /* 7670 */;
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
class Pattern {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, Pattern);
    const obj = _getPrototypeOf(Pattern);
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
_inherits(Pattern, multiplyMatricesDefault);
const entry = {
  key: "render",
  value: function render() {
    let children;
    let height;
    let id;
    let num;
    let patternContentUnits;
    let patternTransform;
    let patternUnits;
    let preserveAspectRatio;
    let transform;
    let viewBox;
    let width;
    let x;
    let y;
    const self = this;
    const props = this.props;
    ({ patternTransform, patternUnits, patternContentUnits } = props);
    ({ transform, id, x, y, width, height, children, viewBox, preserveAspectRatio } = props);
    const tmp3 = extractTransformDefault;
    if (!patternTransform) {
      patternTransform = transform;
    }
    if (!patternTransform) {
      patternTransform = props;
    }
    const tmp3Result = tmp3(patternTransform);
    size = { x, y, width, height, name: id, matrix: tmp3Result, patternTransform: tmp3Result, patternUnits: patternUnits && unitsDefault[patternUnits] || 0, patternContentUnits: num };
    num = 1;
    patternUnits && unitsDefault[patternUnits] || 0;
    if (patternContentUnits) {
      num = tmp(7661)[patternContentUnits];
    }
    _modDef7670;
    const merged = Object.assign(size);
    const merged1 = Object.assign(tmp(7596)({ viewBox, preserveAspectRatio }));
    return <tmpResult ref={function ref(arg0) {
      return self.refMethod(arg0);
    }}>{children}</tmpResult>;
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(Pattern, items);
importDefaultResultResult.displayName = "Pattern";
importDefaultResultResult.defaultProps = { x: "0%", y: "0%", width: "100%", height: "100%" };

export default importDefaultResultResult;
