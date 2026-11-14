// Module ID: 1951
// Function ID: 1952
// Name: FadingTransition
// Dependencies: [41, 42, 93, 95, 98, 1842, 1875]

// Module 1951 (FadingTransition)
import _mod1875 from "module_1875" /* 1875 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3_mod from "_possibleConstructorReturn" /* 93 */;
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
let c3 = c3_mod;
let closure_6 = { code: "(function pnpm_FadingTransitionTs1(values){let[delayFunction,delay,withSequence,withTiming,halfDuration,withDelay,callback]=this.__closure;return{initialValues:{opacity:1,originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{opacity:delayFunction(delay,withSequence(withTiming(0,{duration:halfDuration}),withTiming(1,{duration:halfDuration}))),originX:withDelay(delay+halfDuration,withTiming(values.targetOriginX,{duration:0})),originY:withDelay(delay+halfDuration,withTiming(values.targetOriginY,{duration:0})),width:withDelay(delay+halfDuration,withTiming(values.targetWidth,{duration:0})),height:withDelay(delay+halfDuration,withTiming(values.targetHeight,{duration:0}))},callback:callback};})" };
class FadingTransition {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    let tmp = _classCallCheck(this, FadingTransition);
    let items1 = [...items];
    let obj = _getPrototypeOf(FadingTransition);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
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
      let callbackV;
      let durationV;
      let tmp10;
      let tmp11;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const delayFunction = closure_0.getDelayFunction();
      ({ callbackV, durationV } = closure_0);
      const delay = closure_0.getDelay();
      if (durationV == null) {
        durationV = 500;
      }
      const items = [closure_2_6, delayFunction, delay, , , , , ];
      const result = durationV / 2;
      items[3] = FadingTransition(closure_2_1[5]).withSequence;
      items[4] = FadingTransition(closure_2_1[5]).withTiming;
      items[5] = result;
      items[6] = FadingTransition(closure_2_1[5]).withDelay;
      items[7] = callbackV;
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items;
      function pnpm_FadingTransitionTs1(originX) {
        let obj3;
        let sum;
        let sum1;
        let sum2;
        let sum3;
        let tmp;
        const obj = { initialValues: { opacity: 1, originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight }, animations: size, callback };
        size = { opacity: _undefined(c1, _undefined2(tmp, _undefined3(1, obj3))), originX: _undefined4(sum, _undefined3(originX.targetOriginX, { duration: 0 })), originY: _undefined4(sum1, _undefined3(originX.targetOriginY, { duration: 0 })), width: _undefined4(sum2, _undefined3(originX.targetWidth, { duration: 0 })), height: _undefined4(sum3, _undefined3(originX.targetHeight, { duration: 0 })) };
        const obj2 = { duration };
        obj3 = { duration };
        sum = c1 + duration;
        sum1 = c1 + duration;
        sum2 = c1 + duration;
        sum3 = c1 + duration;
        tmp = _undefined3(0, obj2);
        return obj;
      }
      const items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11];
      pnpm_FadingTransitionTs1.__closure = items1;
      pnpm_FadingTransitionTs1.__workletHash = 998771338102;
      pnpm_FadingTransitionTs1.__initData = tmp4;
      return pnpm_FadingTransitionTs1;
    };
    return tmp3Result;
  }
}
_inherits(FadingTransition, _mod1875.BaseAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FadingTransition();
    return tmp;
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(FadingTransition, null, items);
importDefaultResultResult.presetName = "FadingTransition";
const FadingTransition_export = importDefaultResultResult;

export { FadingTransition_export as FadingTransition };
