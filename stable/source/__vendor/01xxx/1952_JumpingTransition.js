// Module ID: 1952
// Function ID: 1953
// Name: JumpingTransition
// Dependencies: [41, 42, 93, 95, 98, 1842, 1864, 1875]

// Module 1952 (JumpingTransition)
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
let closure_6 = { code: "(function pnpm_JumpingTransitionTs1(values){let[delayFunction,delay,withTiming,config,withSequence,halfDuration,Easing,callback]=this.__closure;const d=Math.max(Math.abs(values.targetOriginX-values.currentOriginX),Math.abs(values.targetOriginY-values.currentOriginY));return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,withTiming(values.targetOriginX,config)),originY:delayFunction(delay,withSequence(withTiming(Math.min(values.targetOriginY,values.currentOriginY)-d,{duration:halfDuration,easing:Easing.out(Easing.exp)}),withTiming(values.targetOriginY,{...config,duration:halfDuration,easing:Easing.bounce}))),width:delayFunction(delay,withTiming(values.targetWidth,config)),height:delayFunction(delay,withTiming(values.targetHeight,config))},callback:callback};})" };
class JumpingTransition {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, JumpingTransition);
    let items1 = [...items];
    let obj = _getPrototypeOf(JumpingTransition);
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
      let tmp12;
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
        durationV = 300;
      }
      const items = [closure_2_6, delayFunction, delay, , , , , , ];
      const result = durationV / 2;
      items[3] = JumpingTransition(closure_2_1[5]).withTiming;
      items[4] = { duration: durationV };
      items[5] = JumpingTransition(closure_2_1[5]).withSequence;
      items[6] = result;
      items[7] = JumpingTransition(closure_2_1[6]).Easing;
      items[8] = callbackV;
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_JumpingTransitionTs1(originX) {
        let obj3;
        let targetOriginY;
        let tmp4;
        const absolute = Math.abs(originX.targetOriginX - originX.currentOriginX);
        const obj = { initialValues: { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight }, animations: size, callback };
        size = { originX: _undefined(c1, _undefined2(originX.targetOriginX, c3)), originY: _undefined(c1, _undefined3(tmp4, _undefined2(targetOriginY, obj3))), width: _undefined(c1, _undefined2(originX.targetWidth, c3)), height: _undefined(c1, _undefined2(originX.targetHeight, c3)) };
        const maxResult = max(absolute, Math.abs(originX.targetOriginY - originX.currentOriginY));
        const obj2 = { duration, easing: _undefined4.out(_undefined4.exp) };
        const diff = Math.min(originX.targetOriginY, originX.currentOriginY) - maxResult;
        targetOriginY = originX.targetOriginY;
        obj3 = { duration, easing: _undefined4.bounce };
        tmp4 = _undefined2(diff, obj2);
        const merged = Object.assign(c3);
        return obj;
      }
      const items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_JumpingTransitionTs1.__closure = items1;
      pnpm_JumpingTransitionTs1.__workletHash = 14689950966864;
      pnpm_JumpingTransitionTs1.__initData = tmp4;
      return pnpm_JumpingTransitionTs1;
    };
    return tmp3Result;
  }
}
_inherits(JumpingTransition, _mod1875.BaseAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = JumpingTransition();
    return tmp;
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(JumpingTransition, null, items);
importDefaultResultResult.presetName = "JumpingTransition";
const JumpingTransition_export = importDefaultResultResult;

export { JumpingTransition_export as JumpingTransition };
