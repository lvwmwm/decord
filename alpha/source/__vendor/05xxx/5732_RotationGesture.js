// Module ID: 5732
// Function ID: 5733
// Name: RotationGesture
// Dependencies: [41, 42, 93, 95, 96, 98, 5618]

// Module 5732 (RotationGesture)
import Gesture from "Gesture" /* 5618 */;
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
let items = [{ code: "(function changeEventCalculator_Pnpm_rotationGestureTs1(current,previous){let changePayload;if(previous===undefined){changePayload={rotationChange:current.rotation};}else{changePayload={rotationChange:current.rotation-previous.rotation};}return{...current,...changePayload};})" }];
[tmp4] = items;
function changeEventCalculator(rotation, rotation2) {
  let obj;
  if (undefined === rotation2) {
    obj = { rotationChange: rotation.rotation };
    const obj2 = { rotationChange: rotation.rotation };
  } else {
    obj = { rotationChange: rotation.rotation - rotation2.rotation };
  }
  const obj3 = {};
  const merged = Object.assign(rotation);
  const merged1 = Object.assign(obj);
  return obj3;
}
changeEventCalculator.__workletHash = 6562048285106;
changeEventCalculator.__initData = tmp4;
class RotationGesture {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, RotationGesture);
    const obj = _getPrototypeOf(RotationGesture);
    const tmp2 = _getPrototypeOf;
    const tmp3 = map;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    const tmp3Result = tmp3(self, constructResult);
    tmp3Result.handlerName = "RotationGestureHandler";
    return tmp3Result;
  }
}
_inherits(RotationGesture, Gesture.ContinousBaseGesture);
const entry = {
  key: "onChange",
  value: function onChange(arg0) {
    this.handlers.changeEventCalculator = changeEventCalculator;
    const self = this;
    let fn = _get(_getPrototypeOf(RotationGesture.prototype), "onChange", this);
    if (typeof fn === "function") {
      fn = (items) => fn.apply(self, items);
    }
    const items = [arg0];
    return fn(items);
  }
};
const items1 = [entry];
const RotationGesture_export = _createClass(RotationGesture, items1);

export { RotationGesture_export as RotationGesture };
