// Module ID: 1715
// Function ID: 19276
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 1715 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
let closure_6 = { code: "function pnpm_LinearTransitionTs1(values){const{delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,animation(values.targetOriginX,config)),originY:delayFunction(delay,animation(values.targetOriginY,config)),width:delayFunction(delay,animation(values.targetWidth,config)),height:delayFunction(delay,animation(values.targetHeight,config))},callback:callback};}" };
const tmp2 = (ComplexAnimationBuilder) => {
  class LinearTransition {
    constructor() {
      self = this;
      tmp = closure_1(this, LinearTransition);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = closure_4(LinearTransition);
      tmp3 = closure_3;
      if (closure_7()) {
        if (!combined) {
          combined = [];
        }
        tmp5 = closure_4;
        constructResult = Reflect.construct(obj, combined, closure_4(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp3Result = tmp3(self, constructResult);
      LinearTransition = tmp3Result;
      tmp3Result.build = () => {
        const delayFunction = tmp3Result.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const callbackV = tmp3Result.callbackV;
        const delay = tmp3Result.getDelay();
        /* worklet (recovered source) */ function pnpm_LinearTransitionTs1(values){const{delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,animation(values.targetOriginX,config)),originY:delayFunction(delay,animation(values.targetOriginY,config)),width:delayFunction(delay,animation(values.targetWidth,config)),height:delayFunction(delay,animation(values.targetHeight,config))},callback:callback};}
        pnpm_LinearTransitionTs1.__closure = { delayFunction, delay, animation: first, config: tmp4, callback: callbackV };
        pnpm_LinearTransitionTs1.__workletHash = 16224579837767;
        pnpm_LinearTransitionTs1.__initData = closure_6;
        return pnpm_LinearTransitionTs1;
      };
      return tmp3Result;
    }
  }
  let closure_0 = LinearTransition;
  callback2(LinearTransition, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new LinearTransition();
      }
    }
  ];
  return callback(LinearTransition, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp2.presetName = "LinearTransition";

export const LinearTransition = tmp2;
export const Layout = tmp2;
