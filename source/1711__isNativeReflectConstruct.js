// Module ID: 1711
// Function ID: 19229
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 1711 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = { code: "function pnpm_CurvedTransitionTs1(values){const{delayFunction,delay,withTiming,duration,easing,callback}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,withTiming(values.targetOriginX,{duration:duration,easing:easing.easingX})),originY:delayFunction(delay,withTiming(values.targetOriginY,{duration:duration,easing:easing.easingY})),width:delayFunction(delay,withTiming(values.targetWidth,{duration:duration,easing:easing.easingWidth})),height:delayFunction(delay,withTiming(values.targetHeight,{duration:duration,easing:easing.easingHeight}))},callback:callback};}" };
const tmp2 = (BaseAnimationBuilder) => {
  class CurvedTransition {
    constructor() {
      self = this;
      tmp = closure_2(this, CurvedTransition);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = closure_5(CurvedTransition);
      tmp4 = closure_4;
      if (closure_8()) {
        items1 = combined;
        if (!combined) {
          items1 = [];
        }
        tmp6 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp4Result = tmp4(self, constructResult);
      CurvedTransition = tmp4Result;
      Easing = CurvedTransition(closure_1[5]).Easing;
      tmp4Result.easingXV = Easing.in(CurvedTransition(closure_1[5]).Easing.ease);
      Easing2 = CurvedTransition(closure_1[5]).Easing;
      tmp4Result.easingYV = Easing2.out(CurvedTransition(closure_1[5]).Easing.ease);
      Easing3 = CurvedTransition(closure_1[5]).Easing;
      tmp4Result.easingWidthV = Easing3.in(CurvedTransition(closure_1[5]).Easing.exp);
      Easing4 = CurvedTransition(closure_1[5]).Easing;
      tmp4Result.easingHeightV = Easing4.out(CurvedTransition(closure_1[5]).Easing.exp);
      tmp4Result.build = () => {
        const delayFunction = tmp4Result.getDelayFunction();
        const callbackV = tmp4Result.callbackV;
        const delay = tmp4Result.getDelay();
        const durationV = tmp4Result.durationV;
        let num = 300;
        if (null != durationV) {
          num = durationV;
        }
        let obj = { easingX: tmp4Result.easingXV, easingY: tmp4Result.easingYV, easingWidth: tmp4Result.easingWidthV, easingHeight: tmp4Result.easingHeightV };
        /* worklet (recovered source) */ function pnpm_CurvedTransitionTs1(values){const{delayFunction,delay,withTiming,duration,easing,callback}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,withTiming(values.targetOriginX,{duration:duration,easing:easing.easingX})),originY:delayFunction(delay,withTiming(values.targetOriginY,{duration:duration,easing:easing.easingY})),width:delayFunction(delay,withTiming(values.targetWidth,{duration:duration,easing:easing.easingWidth})),height:delayFunction(delay,withTiming(values.targetHeight,{duration:duration,easing:easing.easingHeight}))},callback:callback};}
        obj = { delayFunction, delay, withTiming: tmp4Result(callbackV[6]).withTiming, duration: num };
        obj.easing = obj;
        obj.callback = callbackV;
        pnpm_CurvedTransitionTs1.__closure = obj;
        pnpm_CurvedTransitionTs1.__workletHash = 8113645568730;
        pnpm_CurvedTransitionTs1.__initData = closure_7;
        return pnpm_CurvedTransitionTs1;
      };
      return tmp4Result;
    }
  }
  const arg1 = CurvedTransition;
  callback2(CurvedTransition, BaseAnimationBuilder);
  let obj = {
    key: "easingX",
    value: function easingX(easingXV) {
      this.easingXV = easingXV;
      return this;
    }
  };
  const items = [obj, , , ];
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
  const items1 = [
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
}(arg1(dependencyMap[7]).BaseAnimationBuilder);
tmp2.presetName = "CurvedTransition";

export const CurvedTransition = tmp2;
