// Module ID: 1711
// Function ID: 19231
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1634, 1654, 1652]

// Module 1711 (_isNativeReflectConstruct)
import withClamp from "withClamp";
import BaseAnimationBuilder from "BaseAnimationBuilder";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_7 = { code: "function pnpm_CurvedTransitionTs1(values){const{delayFunction,delay,withTiming,duration,easing,callback}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,withTiming(values.targetOriginX,{duration:duration,easing:easing.easingX})),originY:delayFunction(delay,withTiming(values.targetOriginY,{duration:duration,easing:easing.easingY})),width:delayFunction(delay,withTiming(values.targetWidth,{duration:duration,easing:easing.easingWidth})),height:delayFunction(delay,withTiming(values.targetHeight,{duration:duration,easing:easing.easingHeight}))},callback:callback};}" };
const tmp2 = ((BaseAnimationBuilder) => {
  class CurvedTransition {
    constructor() {
      self = this;
      tmp = outer1_2(this, apply);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = outer1_5(apply);
      tmp4 = outer1_4;
      if (outer1_8()) {
        items1 = combined;
        if (!combined) {
          items1 = [];
        }
        tmp6 = outer1_5;
        constructResult = Reflect.construct(obj, items1, outer1_5(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp4Result = tmp4(self, constructResult);
      apply = tmp4Result;
      Easing = CurvedTransition(outer1_1[5]).Easing;
      tmp4Result.easingXV = Easing.in(CurvedTransition(outer1_1[5]).Easing.ease);
      Easing2 = CurvedTransition(outer1_1[5]).Easing;
      tmp4Result.easingYV = Easing2.out(CurvedTransition(outer1_1[5]).Easing.ease);
      Easing3 = CurvedTransition(outer1_1[5]).Easing;
      tmp4Result.easingWidthV = Easing3.in(CurvedTransition(outer1_1[5]).Easing.exp);
      Easing4 = CurvedTransition(outer1_1[5]).Easing;
      tmp4Result.easingHeightV = Easing4.out(CurvedTransition(outer1_1[5]).Easing.exp);
      tmp4Result.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const callbackV = delayFunction.callbackV;
        const delay = delayFunction.getDelay();
        const durationV = delayFunction.durationV;
        let num = 300;
        if (null != durationV) {
          num = durationV;
        }
        let obj = { easingX: delayFunction.easingXV, easingY: delayFunction.easingYV, easingWidth: delayFunction.easingWidthV, easingHeight: delayFunction.easingHeightV };
        /* worklet (recovered source) */ function pnpm_CurvedTransitionTs1(values){const{delayFunction,delay,withTiming,duration,easing,callback}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,withTiming(values.targetOriginX,{duration:duration,easing:easing.easingX})),originY:delayFunction(delay,withTiming(values.targetOriginY,{duration:duration,easing:easing.easingY})),width:delayFunction(delay,withTiming(values.targetWidth,{duration:duration,easing:easing.easingWidth})),height:delayFunction(delay,withTiming(values.targetHeight,{duration:duration,easing:easing.easingHeight}))},callback:callback};}
        obj = { delayFunction, delay, withTiming: CurvedTransition(outer2_1[6]).withTiming, duration: num };
        obj.easing = obj;
        obj.callback = callbackV;
        pnpm_CurvedTransitionTs1.__closure = obj;
        pnpm_CurvedTransitionTs1.__workletHash = 8113645568730;
        pnpm_CurvedTransitionTs1.__initData = outer2_7;
        return pnpm_CurvedTransitionTs1;
      };
      return tmp4Result;
    }
  }
  callback2(CurvedTransition, BaseAnimationBuilder);
  let obj = {
    key: "easingX",
    value: function easingX(easingXV) {
      this.easingXV = easingXV;
      return this;
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "easingY",
    value: function easingY(easingYV) {
      this.easingYV = easingYV;
      return this;
    }
  };
  items[1] = obj;
  obj = {
    key: "easingWidth",
    value: function easingWidth(easingWidthV) {
      this.easingWidthV = easingWidthV;
      return this;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "easingHeight",
    value: function easingHeight(easingHeightV) {
      this.easingHeightV = easingHeightV;
      return this;
    }
  };
  let items1 = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new CurvedTransition();
      }
    },
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
  return callback(CurvedTransition, items, items1);
})(require("BaseAnimationBuilder").BaseAnimationBuilder);
tmp2.presetName = "CurvedTransition";

export const CurvedTransition = tmp2;
