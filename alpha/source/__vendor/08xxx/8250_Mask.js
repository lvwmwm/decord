// Module ID: 8250
// Function ID: 8251
// Name: Mask
// Dependencies: [41, 42, 93, 95, 98, 19, 21, 8247, 8251, 8252, 8184, 8193]

// Module 8250 (Mask)
import Fragment from "Fragment" /* 21 */;
import multiplyMatricesDefault from "multiplyMatrices" /* 8193 */;
import unitsDefault from "units" /* 8247 */;
import maskType2 from "maskType" /* 8251 */;
import _modDef8252 from "module_8252" /* 8252 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;

let size;

let tmp5;
const extractProps = tmp5(8184);
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
class Mask {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, Mask);
    const obj = _getPrototypeOf(Mask);
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
_inherits(Mask, multiplyMatricesDefault);
const entry = {
  key: "render",
  value: function render() {
    let maskContentUnits;
    let maskType;
    let maskUnits;
    let num;
    let num2;
    let str;
    let style;
    const self = this;
    const props = this.props;
    ({ maskUnits, maskContentUnits, style } = props);
    size = { x: props.x, y: props.y, width: props.width, height: props.height, maskUnits: num, maskContentUnits: num2, maskType: maskType[str] };
    num = 0;
    const children = props.children;
    if (undefined !== maskUnits) {
      num = unitsDefault[maskUnits];
    }
    num2 = 1;
    if (undefined !== maskContentUnits) {
      num2 = unitsDefault[maskContentUnits];
    }
    str = undefined;
    maskType = maskType2.maskType;
    if (props != null) {
      str = props.maskType;
    }
    if (!str) {
      let maskType1;
      if (style != null) {
        maskType1 = style.maskType;
      }
      str = maskType1;
    }
    if (!str) {
      str = "luminance";
    }
    _modDef8252;
    const tmp5Result = extractProps;
    const merged = Object.assign(tmp5Result.withoutXY(this, props));
    const merged1 = Object.assign(size);
    return <tmp8 ref={function ref(arg0) {
      return self.refMethod(arg0);
    }}>{children}</tmp8>;
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(Mask, items);
importDefaultResultResult.displayName = "Mask";
importDefaultResultResult.defaultProps = { x: "0%", y: "0%", width: "100%", height: "100%" };

export default importDefaultResultResult;
