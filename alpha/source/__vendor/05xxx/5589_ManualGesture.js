// Module ID: 5589
// Function ID: 5590
// Name: ManualGesture
// Dependencies: [41, 42, 93, 95, 96, 98, 5470]

// Module 5589 (ManualGesture)
import Gesture from "Gesture" /* 5470 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import map from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _get from "_get" /* 96 */;
import _inherits from "_inherits" /* 98 */;

let tmp4;
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
let items = [{ code: "(function changeEventCalculator_Pnpm_manualGestureTs1(current,_previous){return current;})" }];
[tmp4] = items;
function changeEventCalculator(arg0, arg1) {
  return arg0;
}
changeEventCalculator.__workletHash = 8372703750542;
changeEventCalculator.__initData = tmp4;
class ManualGesture {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ManualGesture);
    const obj = _getPrototypeOf(ManualGesture);
    const tmp2 = _getPrototypeOf;
    const tmp3 = map;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    const tmp3Result = tmp3(self, constructResult);
    tmp3Result.handlerName = "ManualGestureHandler";
    return tmp3Result;
  }
}
_inherits(ManualGesture, Gesture.ContinousBaseGesture);
const entry = {
  key: "onChange",
  value: function onChange(arg0) {
    this.handlers.changeEventCalculator = changeEventCalculator;
    const self = this;
    let fn = _get(_getPrototypeOf(ManualGesture.prototype), "onChange", this);
    if (typeof fn === "function") {
      fn = (items) => fn.apply(self, items);
    }
    const items = [arg0];
    return fn(items);
  }
};
const items1 = [entry];
const ManualGesture_export = _createClass(ManualGesture, items1);

export { ManualGesture_export as ManualGesture };
