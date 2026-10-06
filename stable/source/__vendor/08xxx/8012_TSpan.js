// Module ID: 8012
// Function ID: 8013
// Name: TSpan
// Dependencies: [41, 42, 93, 95, 98, 19, 21, 7921, 7928, 7929, 7935, 8013, 7937]

// Module 8012 (TSpan)
import Fragment from "Fragment" /* 21 */;
import extractProps from "extractProps" /* 7928 */;
import extractTextDefault from "extractText" /* 7935 */;
import multiplyMatricesDefault from "multiplyMatrices" /* 7937 */;
import _modDef8013 from "module_8013" /* 8013 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;

const extractPropsDefault = extractProps;
const extractText = extractTextDefault;

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
class TSpan {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    let tmp = _classCallCheck(this, TSpan);
    const items1 = [...items];
    let obj = _getPrototypeOf(TSpan);
    const tmp2 = _getPrototypeOf;
    const tmp3 = _possibleConstructorReturn;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.setNativeProps = (matrix) => {
      const tmp = !matrix.matrix && closure_2_1(closure_2_2[7])(matrix);
      if (tmp) {
        matrix.matrix = tmp;
      }
      const obj = TSpan(closure_2_2[8]);
      const propsAndStylesResult = obj.propsAndStyles(matrix);
      const obj2 = TSpan(closure_2_2[9]);
      assign(propsAndStylesResult, obj2.pickNotNil(closure_2_1(closure_2_2[10])(propsAndStylesResult, false)));
      if (closure_0.root) {
        const root = closure_0.root;
        root.setNativeProps(propsAndStylesResult);
      }
    };
    return tmp3Result;
  }
}
_inherits(TSpan, multiplyMatricesDefault);
const entry = {
  key: "render",
  value: function render() {
    const obj = extractProps;
    const propsAndStylesResult = obj.propsAndStyles(this.props);
    const obj2 = { x: null, y: null };
    const tmp2 = extractPropsDefault;
    const merged = Object.assign(propsAndStylesResult);
    const tmp2Result = tmp2(obj2, this);
    const merged1 = Object.assign(tmp2Result, extractTextDefault(propsAndStylesResult, false));
    tmp2Result.ref = this.refMethod;
    _modDef8013;
    const merged2 = Object.assign(tmp2Result);
    return <tmp6 />;
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(TSpan, items);
importDefaultResultResult.displayName = "TSpan";
extractText.setTSpan(importDefaultResultResult);

export default importDefaultResultResult;
