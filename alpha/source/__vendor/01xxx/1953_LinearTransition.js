// Module ID: 1953
// Function ID: 1954
// Name: LinearTransition
// Dependencies: [32, 41, 42, 93, 95, 98, 1875]

// Module 1953 (LinearTransition)
import _mod1875 from "module_1875" /* 1875 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c2_mod from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

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
let c2 = c2_mod;
let closure_5 = { code: "(function pnpm_LinearTransitionTs1(values){let[delayFunction,delay,animation,config,callback]=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,animation(values.targetOriginX,config)),originY:delayFunction(delay,animation(values.targetOriginY,config)),width:delayFunction(delay,animation(values.targetWidth,config)),height:delayFunction(delay,animation(values.targetHeight,config))},callback:callback};})" };
class LinearTransition {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, LinearTransition);
    let items1 = [...items];
    const tmp2 = _getPrototypeOf;
    let obj = _getPrototypeOf(LinearTransition);
    const tmp3 = c2;
    if (_isNativeReflectConstruct()) {
      const tmp5 = globalThis;
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      let tmp10;
      let tmp3;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const delayFunction = closure_0.getDelayFunction();
      [tmp3, tmp4] = LinearTransition(closure_0.getAnimationAndConfig(), 2);
      const callbackV = closure_0.callbackV;
      const items = [closure_2_5, delayFunction, , , , ];
      LinearTransition(closure_0.getAnimationAndConfig(), 2);
      items[2] = closure_0.getDelay();
      items[3] = tmp3;
      items[4] = tmp4;
      items[5] = callbackV;
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items;
      function pnpm_LinearTransitionTs1(originX) {
        const obj = { initialValues: { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight }, animations: size, callback };
        size = { originX: _undefined(c1, _undefined2(originX.targetOriginX, c3)), originY: _undefined(c1, _undefined2(originX.targetOriginY, c3)), width: _undefined(c1, _undefined2(originX.targetWidth, c3)), height: _undefined(c1, _undefined2(originX.targetHeight, c3)) };
        return obj;
      }
      const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10];
      pnpm_LinearTransitionTs1.__closure = items1;
      pnpm_LinearTransitionTs1.__workletHash = 5021943592286;
      pnpm_LinearTransitionTs1.__initData = tmp5;
      return pnpm_LinearTransitionTs1;
    };
    return tmp3Result;
  }
}
_inherits(LinearTransition, _mod1875.AnimationConfigBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = LinearTransition();
    return tmp;
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(LinearTransition, null, items);
importDefaultResultResult.presetName = "LinearTransition";
const LinearTransition_export = importDefaultResultResult;

export { LinearTransition_export as LinearTransition };
export const Layout = importDefaultResultResult;
