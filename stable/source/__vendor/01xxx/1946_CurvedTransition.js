// Module ID: 1946
// Function ID: 1947
// Name: CurvedTransition
// Dependencies: [41, 42, 93, 95, 98, 1861, 1839, 1872]

// Module 1946 (CurvedTransition)
import Easing5 from "Easing" /* 1861 */;
import _mod1872 from "module_1872" /* 1872 */;
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
let closure_6 = { code: "(function pnpm_CurvedTransitionTs1(values){let[delayFunction,delay,withTiming,duration,easing,callback]=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,withTiming(values.targetOriginX,{duration:duration,easing:easing.easingX})),originY:delayFunction(delay,withTiming(values.targetOriginY,{duration:duration,easing:easing.easingY})),width:delayFunction(delay,withTiming(values.targetWidth,{duration:duration,easing:easing.easingWidth})),height:delayFunction(delay,withTiming(values.targetHeight,{duration:duration,easing:easing.easingHeight}))},callback:callback};})" };
class CurvedTransition {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    const tmp = _classCallCheck(this, CurvedTransition);
    let items1 = [...items];
    let obj = _getPrototypeOf(CurvedTransition);
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
    const Easing = Easing5.Easing;
    tmp3Result.easingXV = Easing.in(Easing5.Easing.ease);
    const Easing2 = Easing5.Easing;
    tmp3Result.easingYV = Easing2.out(Easing5.Easing.ease);
    const Easing3 = Easing5.Easing;
    tmp3Result.easingWidthV = Easing3.in(Easing5.Easing.exp);
    const Easing4 = Easing5.Easing;
    tmp3Result.easingHeightV = Easing4.out(Easing5.Easing.exp);
    tmp3Result.build = () => {
      let callbackV;
      let durationV;
      let tmp10;
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
      let obj = { easingX: tmp.easingXV, easingY: tmp.easingYV, easingWidth: tmp.easingWidthV, easingHeight: tmp.easingHeightV };
      const items = [closure_2_6, delayFunction, delay, CurvedTransition(closure_2_1[6]).withTiming, durationV, obj, callbackV];
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items;
      function pnpm_CurvedTransitionTs1(originX) {
        const obj = { initialValues: { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight }, animations: size, callback };
        size = { originX: _undefined(c1, _undefined2(originX.targetOriginX, obj2)), originY: _undefined(c1, _undefined2(originX.targetOriginY, obj3)), width: _undefined(c1, _undefined2(originX.targetWidth, obj4)), height: _undefined(c1, _undefined2(originX.targetHeight, obj5)) };
        return obj;
      }
      const items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10];
      pnpm_CurvedTransitionTs1.__closure = items1;
      pnpm_CurvedTransitionTs1.__workletHash = 16947476180931;
      pnpm_CurvedTransitionTs1.__initData = tmp4;
      return pnpm_CurvedTransitionTs1;
    };
    return tmp3Result;
  }
}
_inherits(CurvedTransition, _mod1872.BaseAnimationBuilder);
const entry = {
  key: "easingX",
  value: function easingX(easingXV) {
    this.easingXV = easingXV;
    return this;
  }
};
let items = [
  entry,
  {
    key: "easingY",
    value: function easingY(easingYV) {
      this.easingYV = easingYV;
      return this;
    }
  },
  {
    key: "easingWidth",
    value: function easingWidth(easingWidthV) {
      this.easingWidthV = easingWidthV;
      return this;
    }
  },
  {
    key: "easingHeight",
    value: function easingHeight(easingHeightV) {
      this.easingHeightV = easingHeightV;
      return this;
    }
  }
];
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = CurvedTransition();
    return tmp;
  }
};
let items1 = [
  entry1,
  {
    key: "easingX",
    value: function easingX(arg0) {
      const instance = this.createInstance();
      return instance.easingX(arg0);
    }
  },
  {
    key: "easingY",
    value: function easingY(arg0) {
      const instance = this.createInstance();
      return instance.easingY(arg0);
    }
  },
  {
    key: "easingWidth",
    value: function easingWidth(arg0) {
      const instance = this.createInstance();
      return instance.easingWidth(arg0);
    }
  },
  {
    key: "easingHeight",
    value: function easingHeight(arg0) {
      const instance = this.createInstance();
      return instance.easingHeight(arg0);
    }
  }
];
const importDefaultResultResult = _createClass(CurvedTransition, items, items1);
importDefaultResultResult.presetName = "CurvedTransition";
const CurvedTransition_export = importDefaultResultResult;

export { CurvedTransition_export as CurvedTransition };
