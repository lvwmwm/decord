// Module ID: 5462
// Function ID: 5463
// Name: hoverGestureHandlerProps
// Dependencies: [41, 42, 93, 95, 96, 98, 5440]

// Module 5462 (hoverGestureHandlerProps)
import Gesture from "Gesture" /* 5440 */;
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
let items = [{ code: "(function changeEventCalculator_Pnpm_hoverGestureTs1(current,previous){let changePayload;if(previous===undefined){changePayload={changeX:current.x,changeY:current.y};}else{changePayload={changeX:current.x-previous.x,changeY:current.y-previous.y};}return{...current,...changePayload};})" }];
[tmp4] = items;
function changeEventCalculator(arg0, arg1) {
  let obj;
  if (undefined === arg1) {
    const obj3 = { changeX: null, changeY: null };
    ({ x: obj2.changeX, y: obj2.changeY } = arg0);
    obj = obj3;
  } else {
    obj = { changeX: arg0.x - arg1.x, changeY: arg0.y - arg1.y };
  }
  const obj5 = {};
  const merged = Object.assign(arg0);
  const merged1 = Object.assign(obj);
  return obj5;
}
changeEventCalculator.__workletHash = 8313798372423;
changeEventCalculator.__initData = tmp4;
class HoverGesture {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, HoverGesture);
    const obj = _getPrototypeOf(HoverGesture);
    const tmp2 = _getPrototypeOf;
    const tmp3 = map;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    const tmp3Result = tmp3(self, constructResult);
    tmp3Result.config = {};
    tmp3Result.handlerName = "HoverGestureHandler";
    return tmp3Result;
  }
}
_inherits(HoverGesture, Gesture.ContinousBaseGesture);
const entry = {
  key: "effect",
  value: function effect(hoverEffect) {
    this.config.hoverEffect = hoverEffect;
    return this;
  }
};
const items1 = [
  entry,
  {
    key: "onChange",
    value: function onChange(arg0) {
      this.handlers.changeEventCalculator = changeEventCalculator;
      const self = this;
      let fn = _get(_getPrototypeOf(HoverGesture.prototype), "onChange", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0];
      return fn(items);
    }
  }
];
const HoverGesture_export = _createClass(HoverGesture, items1);

export const hoverGestureHandlerProps = ["hoverEffect"];
export { HoverGesture_export as HoverGesture };
