// Module ID: 1954
// Function ID: 1955
// Name: SequencedTransition
// Dependencies: [41, 42, 93, 95, 98, 1842, 1875]

// Module 1954 (SequencedTransition)
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
let closure_6 = { code: "(function pnpm_SequencedTransitionTs1(values){let[delayFunction,delay,withSequence,withTiming,reverse,config,callback]=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,withSequence(withTiming(reverse?values.currentOriginX:values.targetOriginX,config),withTiming(values.targetOriginX,config))),originY:delayFunction(delay,withSequence(withTiming(reverse?values.targetOriginY:values.currentOriginY,config),withTiming(values.targetOriginY,config))),width:delayFunction(delay,withSequence(withTiming(reverse?values.currentWidth:values.targetWidth,config),withTiming(values.targetWidth,config))),height:delayFunction(delay,withSequence(withTiming(reverse?values.targetHeight:values.currentHeight,config),withTiming(values.targetHeight,config)))},callback:callback};})" };
class SequencedTransition {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    let tmp = _classCallCheck(this, SequencedTransition);
    let items1 = [...items];
    let obj = _getPrototypeOf(SequencedTransition);
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
    tmp3Result.reversed = false;
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
      const tmp = closure_0;
      if (durationV == null) {
        durationV = 500;
      }
      let obj = { duration: durationV / 2 };
      const items = [closure_2_6, delayFunction, delay, , , , , ];
      const reversed = tmp.reversed;
      items[3] = SequencedTransition(closure_2_1[5]).withSequence;
      items[4] = SequencedTransition(closure_2_1[5]).withTiming;
      items[5] = reversed;
      items[6] = obj;
      items[7] = callbackV;
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items;
      function pnpm_SequencedTransitionTs1(originX) {
        let tmp4Result;
        let tmp4Result4;
        let tmp4Result5;
        let tmp4Result6;
        const obj = { initialValues: { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight }, animations: size, callback };
        size = { originX: _undefined(c1, _undefined2(tmp4Result, _undefined3(originX.targetOriginX, c5))), originY: _undefined(c1, _undefined2(tmp4Result4, _undefined3(originX.targetOriginY, c5))), width: _undefined(c1, _undefined2(tmp4Result5, _undefined3(originX.targetWidth, c5))), height: _undefined(c1, _undefined2(tmp4Result6, _undefined3(originX.targetHeight, c5))) };
        tmp4Result = _undefined3(c4 ? originX.currentOriginX : originX.targetOriginX, c5);
        tmp4Result4 = _undefined3(c4 ? originX.targetOriginY : originX.currentOriginY, c5);
        tmp4Result5 = _undefined3(c4 ? originX.currentWidth : originX.targetWidth, c5);
        tmp4Result6 = _undefined3(c4 ? originX.targetHeight : originX.currentHeight, c5);
        return obj;
      }
      const items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11];
      pnpm_SequencedTransitionTs1.__closure = items1;
      pnpm_SequencedTransitionTs1.__workletHash = 11737009723617;
      pnpm_SequencedTransitionTs1.__initData = tmp4;
      return pnpm_SequencedTransitionTs1;
    };
    return tmp3Result;
  }
}
_inherits(SequencedTransition, _mod1875.BaseAnimationBuilder);
const entry = {
  key: "reverse",
  value: function reverse() {
    this.reversed = !this.reversed;
    return this;
  }
};
let items = [entry];
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = SequencedTransition();
    return tmp;
  }
};
let items1 = [
  entry1,
  {
    key: "reverse",
    value: function reverse() {
      const instance = SequencedTransition.createInstance();
      return instance.reverse();
    }
  }
];
const importDefaultResultResult = _createClass(SequencedTransition, items, items1);
importDefaultResultResult.presetName = "SequencedTransition";
const SequencedTransition_export = importDefaultResultResult;

export { SequencedTransition_export as SequencedTransition };
