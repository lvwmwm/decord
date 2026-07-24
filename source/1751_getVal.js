// Module ID: 1751
// Function ID: 19588
// Name: getVal
// Dependencies: [1593]

// Module 1751 (getVal)
const require = arg1;
const dependencyMap = arg6;
let obj = { IDENTITY: "identity", CLAMP: "clamp", EXTEND: "extend" };
let closure_3 = { code: "function getVal_Pnpm_interpolationTs1(type,coef,val,leftEdgeOutput,rightEdgeOutput,x){const{Extrapolation}=this.__closure;switch(type){case Extrapolation.IDENTITY:return x;case Extrapolation.CLAMP:if(coef*val<coef*leftEdgeOutput){return leftEdgeOutput;}return rightEdgeOutput;case Extrapolation.EXTEND:default:return val;}}" };
let closure_4 = (() => {
  function getVal(arg0, arg1, arg2, arg3, arg4, arg5) {
    let tmp = arg4;
    if (outer1_2.IDENTITY === arg0) {
      return arg5;
    } else if (outer1_2.CLAMP === arg0) {
      if (arg1 * arg2 < arg1 * arg3) {
        tmp = arg3;
      }
      return tmp;
    } else {
      const EXTEND = outer1_2.EXTEND;
      return arg2;
    }
  }
  obj = { Extrapolation: obj };
  getVal.__closure = obj;
  getVal.__workletHash = 15103214376416;
  getVal.__initData = closure_3;
  return getVal;
})();
let closure_5 = { code: "function isExtrapolate_Pnpm_interpolationTs2(value){const{Extrapolation}=this.__closure;return value===Extrapolation.EXTEND||value===Extrapolation.CLAMP||value===Extrapolation.IDENTITY;}" };
let closure_6 = (() => {
  function isExtrapolate(arg0) {
    let tmp = arg0 === outer1_2.EXTEND;
    if (!tmp) {
      tmp = arg0 === outer1_2.CLAMP;
    }
    if (!tmp) {
      tmp = arg0 === outer1_2.IDENTITY;
    }
    return tmp;
  }
  obj = { Extrapolation: obj };
  isExtrapolate.__closure = obj;
  isExtrapolate.__workletHash = 1560831703072;
  isExtrapolate.__initData = closure_5;
  return isExtrapolate;
})();
let closure_7 = { code: "function validateType_Pnpm_interpolationTs3(type){const{Extrapolation,isExtrapolate}=this.__closure;const extrapolationConfig={extrapolateLeft:Extrapolation.EXTEND,extrapolateRight:Extrapolation.EXTEND};if(!type){return extrapolationConfig;}if(typeof type==='string'){if(!isExtrapolate(type)){throw new ReanimatedError(\"Unsupported value for \\\"interpolate\\\" \\nSupported values: [\\\"extend\\\", \\\"clamp\\\", \\\"identity\\\", Extrapolatation.CLAMP, Extrapolatation.EXTEND, Extrapolatation.IDENTITY]\\n Valid example:\\n        interpolate(value, [inputRange], [outputRange], \\\"clamp\\\")\");}extrapolationConfig.extrapolateLeft=type;extrapolationConfig.extrapolateRight=type;return extrapolationConfig;}if(type.extrapolateLeft&&!isExtrapolate(type.extrapolateLeft)||type.extrapolateRight&&!isExtrapolate(type.extrapolateRight)){throw new ReanimatedError(\"Unsupported value for \\\"interpolate\\\" \\nSupported values: [\\\"extend\\\", \\\"clamp\\\", \\\"identity\\\", Extrapolatation.CLAMP, Extrapolatation.EXTEND, Extrapolatation.IDENTITY]\\n Valid example:\\n      interpolate(value, [inputRange], [outputRange], {\\n        extrapolateLeft: Extrapolation.CLAMP,\\n        extrapolateRight: Extrapolation.IDENTITY\\n      }})\");}Object.assign(extrapolationConfig,type);return extrapolationConfig;}" };
let closure_8 = (() => {
  function validateType(extrapolateLeft) {
    const obj = { extrapolateLeft: outer1_2.EXTEND, extrapolateRight: outer1_2.EXTEND };
    if (extrapolateLeft) {
      if ("string" === typeof extrapolateLeft) {
        if (outer1_6(extrapolateLeft)) {
          obj.extrapolateLeft = extrapolateLeft;
          obj.extrapolateRight = extrapolateLeft;
          return obj;
        } else {
          const ReanimatedError2 = outer1_0(outer1_1[0]).ReanimatedError;
          const prototype2 = ReanimatedError2.prototype;
          const reanimatedError2 = new ReanimatedError2("Unsupported value for \"interpolate\" \nSupported values: [\"extend\", \"clamp\", \"identity\", Extrapolatation.CLAMP, Extrapolatation.EXTEND, Extrapolatation.IDENTITY]\n Valid example:\n        interpolate(value, [inputRange], [outputRange], \"clamp\")");
          throw reanimatedError2;
        }
      } else {
        if (!extrapolateLeft.extrapolateLeft) {
          const _Object = Object;
          const merged = Object.assign(obj, extrapolateLeft);
          return obj;
        }
        const ReanimatedError = outer1_0(outer1_1[0]).ReanimatedError;
        const prototype = ReanimatedError.prototype;
        const reanimatedError = new ReanimatedError("Unsupported value for \"interpolate\" \nSupported values: [\"extend\", \"clamp\", \"identity\", Extrapolatation.CLAMP, Extrapolatation.EXTEND, Extrapolatation.IDENTITY]\n Valid example:\n      interpolate(value, [inputRange], [outputRange], {\n        extrapolateLeft: Extrapolation.CLAMP,\n        extrapolateRight: Extrapolation.IDENTITY\n      }})");
        throw reanimatedError;
      }
    } else {
      return obj;
    }
  }
  obj = { Extrapolation: obj, isExtrapolate: closure_6 };
  validateType.__closure = obj;
  validateType.__workletHash = 9722315466599;
  validateType.__initData = closure_7;
  return validateType;
})();
let closure_9 = { code: "function internalInterpolate_Pnpm_interpolationTs4(x,narrowedInput,extrapolationConfig){const{getVal}=this.__closure;const{leftEdgeInput:leftEdgeInput,rightEdgeInput:rightEdgeInput,leftEdgeOutput:leftEdgeOutput,rightEdgeOutput:rightEdgeOutput}=narrowedInput;if(rightEdgeInput-leftEdgeInput===0){return leftEdgeOutput;}const progress=(x-leftEdgeInput)/(rightEdgeInput-leftEdgeInput);const val=leftEdgeOutput+progress*(rightEdgeOutput-leftEdgeOutput);const coef=rightEdgeOutput>=leftEdgeOutput?1:-1;if(coef*val<coef*leftEdgeOutput){return getVal(extrapolationConfig.extrapolateLeft,coef,val,leftEdgeOutput,rightEdgeOutput,x);}else if(coef*val>coef*rightEdgeOutput){return getVal(extrapolationConfig.extrapolateRight,coef,val,leftEdgeOutput,rightEdgeOutput,x);}return val;}" };
let closure_10 = (() => {
  function internalInterpolate(arg0, arg1, extrapolateLeft) {
    let leftEdgeInput;
    let leftEdgeOutput;
    let rightEdgeInput;
    let rightEdgeOutput;
    ({ leftEdgeInput, rightEdgeInput, leftEdgeOutput, rightEdgeOutput } = arg1);
    if (rightEdgeInput - leftEdgeInput == 0) {
      return leftEdgeOutput;
    } else {
      const sum = leftEdgeOutput + (arg0 - leftEdgeInput) / (rightEdgeInput - leftEdgeInput) * (rightEdgeOutput - leftEdgeOutput);
      let num = -1;
      if (rightEdgeOutput >= leftEdgeOutput) {
        num = 1;
      }
      if (num * sum < num * leftEdgeOutput) {
        let tmp = outer1_4(extrapolateLeft.extrapolateLeft, num, sum, leftEdgeOutput, rightEdgeOutput, arg0);
      } else {
        tmp = sum;
        if (num * sum > num * rightEdgeOutput) {
          tmp = outer1_4(extrapolateLeft.extrapolateRight, num, sum, leftEdgeOutput, rightEdgeOutput, arg0);
        }
      }
      return tmp;
    }
  }
  internalInterpolate.__closure = { getVal: closure_4 };
  internalInterpolate.__workletHash = 16257995045856;
  internalInterpolate.__initData = closure_9;
  return internalInterpolate;
})();
let closure_11 = { code: "function interpolate_Pnpm_interpolationTs5(x,inputRange,outputRange,type){const{validateType,internalInterpolate}=this.__closure;if(inputRange.length<2||outputRange.length<2){throw new ReanimatedError('Interpolation input and output ranges should contain at least two values.');}const extrapolationConfig=validateType(type);const length=inputRange.length;const narrowedInput={leftEdgeInput:inputRange[0],rightEdgeInput:inputRange[1],leftEdgeOutput:outputRange[0],rightEdgeOutput:outputRange[1]};if(length>2){if(x>inputRange[length-1]){narrowedInput.leftEdgeInput=inputRange[length-2];narrowedInput.rightEdgeInput=inputRange[length-1];narrowedInput.leftEdgeOutput=outputRange[length-2];narrowedInput.rightEdgeOutput=outputRange[length-1];}else{for(let i=1;i<length;++i){if(x<=inputRange[i]){narrowedInput.leftEdgeInput=inputRange[i-1];narrowedInput.rightEdgeInput=inputRange[i];narrowedInput.leftEdgeOutput=outputRange[i-1];narrowedInput.rightEdgeOutput=outputRange[i];break;}}}}return internalInterpolate(x,narrowedInput,extrapolationConfig);}" };
let closure_12 = { code: "function clamp_Pnpm_interpolationTs6(value,min,max){return Math.min(Math.max(value,min),max);}" };
arg5.Extrapolation = obj;
arg5.interpolate = (() => {
  function interpolate(arg0, arg1, arg2, arg3) {
    if (arg1.length >= 2) {
      if (arg2.length >= 2) {
        const obj = { leftEdgeInput: arg1[0], rightEdgeInput: arg1[1] };
        [obj.leftEdgeOutput, obj.rightEdgeOutput] = arg2;
        if (arg1.length > 2) {
          if (arg0 > arg1[length - 1]) {
            obj.leftEdgeInput = arg1[length - 2];
            obj.rightEdgeInput = arg1[length - 1];
            obj.leftEdgeOutput = arg2[length - 2];
            obj.rightEdgeOutput = arg2[length - 1];
          } else {
            let num = 1;
            if (1 < length) {
              while (arg0 > arg1[num]) {
                num = num + 1;
              }
              obj.leftEdgeInput = arg1[num - 1];
              obj.rightEdgeInput = arg1[num];
              obj.leftEdgeOutput = arg2[num - 1];
              obj.rightEdgeOutput = arg2[num];
            }
          }
        }
        return outer1_10(arg0, obj, outer1_8(arg3));
      }
    }
    const reanimatedError = new outer1_0(outer1_1[0]).ReanimatedError("Interpolation input and output ranges should contain at least two values.");
    throw reanimatedError;
  }
  interpolate.__closure = { validateType: closure_8, internalInterpolate: closure_10 };
  interpolate.__workletHash = 16263308339935;
  interpolate.__initData = closure_11;
  return interpolate;
})();
arg5.clamp = (() => {
  function clamp(arg0, arg1, arg2) {
    return Math.min(Math.max(arg0, arg1), arg2);
  }
  clamp.__closure = {};
  clamp.__workletHash = 13846341562950;
  clamp.__initData = closure_12;
  return clamp;
})();
