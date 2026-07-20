// Module ID: 1714
// Function ID: 19267
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 1714 (_isNativeReflectConstruct)
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
let closure_7 = { code: "function pnpm_JumpingTransitionTs1(values){const{delayFunction,delay,withTiming,config,withSequence,halfDuration,Easing,callback}=this.__closure;const d=Math.max(Math.abs(values.targetOriginX-values.currentOriginX),Math.abs(values.targetOriginY-values.currentOriginY));return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,withTiming(values.targetOriginX,config)),originY:delayFunction(delay,withSequence(withTiming(Math.min(values.targetOriginY,values.currentOriginY)-d,{duration:halfDuration,easing:Easing.out(Easing.exp)}),withTiming(values.targetOriginY,{...config,duration:halfDuration,easing:Easing.bounce}))),width:delayFunction(delay,withTiming(values.targetWidth,config)),height:delayFunction(delay,withTiming(values.targetHeight,config))},callback:callback};}" };
const tmp2 = (BaseAnimationBuilder) => {
  class JumpingTransition {
    constructor() {
      self = this;
      tmp = closure_2(this, JumpingTransition);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = closure_5(JumpingTransition);
      tmp3 = closure_4;
      if (closure_8()) {
        if (!combined) {
          combined = [];
        }
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, combined, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp3Result = tmp3(self, constructResult);
      JumpingTransition = tmp3Result;
      tmp3Result.build = () => {
        const delayFunction = tmp3Result.getDelayFunction();
        const callbackV = tmp3Result.callbackV;
        const delay = tmp3Result.getDelay();
        const durationV = tmp3Result.durationV;
        let num = 300;
        if (null != durationV) {
          num = durationV;
        }
        const result = num / 2;
        let obj = { duration: num };
        /* worklet (recovered source) */ function pnpm_JumpingTransitionTs1(values){const{delayFunction,delay,withTiming,config,withSequence,halfDuration,Easing,callback}=this.__closure;const d=Math.max(Math.abs(values.targetOriginX-values.currentOriginX),Math.abs(values.targetOriginY-values.currentOriginY));return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,withTiming(values.targetOriginX,config)),originY:delayFunction(delay,withSequence(withTiming(Math.min(values.targetOriginY,values.currentOriginY)-d,{duration:halfDuration,easing:Easing.out(Easing.exp)}),withTiming(values.targetOriginY,{...config,duration:halfDuration,easing:Easing.bounce}))),width:delayFunction(delay,withTiming(values.targetWidth,config)),height:delayFunction(delay,withTiming(values.targetHeight,config))},callback:callback};}
        obj = { delayFunction, delay, withTiming: tmp3Result(callbackV[5]).withTiming, config: obj, withSequence: tmp3Result(callbackV[5]).withSequence, halfDuration: result, Easing: tmp3Result(callbackV[6]).Easing, callback: callbackV };
        pnpm_JumpingTransitionTs1.__closure = obj;
        pnpm_JumpingTransitionTs1.__workletHash = 11549153259849;
        pnpm_JumpingTransitionTs1.__initData = closure_7;
        return pnpm_JumpingTransitionTs1;
      };
      return tmp3Result;
    }
  }
  const arg1 = JumpingTransition;
  callback2(JumpingTransition, BaseAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new JumpingTransition();
      }
    }
  ];
  return callback(JumpingTransition, null, items);
}(arg1(dependencyMap[7]).BaseAnimationBuilder);
tmp2.presetName = "JumpingTransition";

export const JumpingTransition = tmp2;
