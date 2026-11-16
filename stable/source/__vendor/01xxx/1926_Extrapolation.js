// Module ID: 1926
// Function ID: 1927
// Name: Extrapolation
// Dependencies: []
// Exports: clamp, interpolate

// Module 1926 (Extrapolation)
let tmp10;
let tmp11;
let tmp12;
let tmp13;
let tmp14;
let tmp2;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
let tmp8;
let tmp9;
let obj = { IDENTITY: "identity", CLAMP: "clamp", EXTEND: "extend" };
const items = [{ code: "(function getVal_Pnpm_interpolationTs1(type,coef,val,leftEdgeOutput,rightEdgeOutput,x){let[Extrapolation]=this.__closure;switch(type){case Extrapolation.IDENTITY:return x;case Extrapolation.CLAMP:if(coef*val<coef*leftEdgeOutput){return leftEdgeOutput;}return rightEdgeOutput;case Extrapolation.EXTEND:default:return val;}})" }, obj];
[tmp2, tmp3] = items;
function getVal(arg0, arg1, arg2, arg3, arg4, arg5) {
  if (constants.IDENTITY === arg0) {
    return arg5;
  } else if (constants.CLAMP === arg0) {
    let tmp5 = arg4;
    if (arg1 * arg2 < arg1 * arg3) {
      tmp5 = arg3;
    }
    return tmp5;
  } else {
    const EXTEND = tmp.EXTEND;
    return arg2;
  }
}
const items1 = [tmp3];
getVal.__closure = items1;
getVal.__workletHash = 9746283677561;
getVal.__initData = tmp2;
const items2 = [{ code: "(function isExtrapolate_Pnpm_interpolationTs2(value){let[Extrapolation]=this.__closure;return value===Extrapolation.EXTEND||value===Extrapolation.CLAMP||value===Extrapolation.IDENTITY;})" }, obj];
[tmp4, tmp5] = items2;
function isExtrapolate(arg0) {
  return arg0 === _undefined.EXTEND || arg0 === _undefined.CLAMP || arg0 === _undefined.IDENTITY;
}
const items3 = [tmp5];
isExtrapolate.__closure = items3;
isExtrapolate.__workletHash = 2614032807769;
isExtrapolate.__initData = tmp4;
const items4 = [{ code: "(function validateType_Pnpm_interpolationTs3(type){let[Extrapolation,isExtrapolate]=this.__closure;const extrapolationConfig={extrapolateLeft:Extrapolation.EXTEND,extrapolateRight:Extrapolation.EXTEND};if(!type){return extrapolationConfig;}if(typeof type==='string'){if(!isExtrapolate(type)){throw new Error(\"[Reanimated] Unsupported value for \\\"interpolate\\\" \\nSupported values: [\\\"extend\\\", \\\"clamp\\\", \\\"identity\\\", Extrapolation.CLAMP, Extrapolation.EXTEND, Extrapolation.IDENTITY]\\n Valid example:\\n        interpolate(value, [inputRange], [outputRange], \\\"clamp\\\")\");}extrapolationConfig.extrapolateLeft=type;extrapolationConfig.extrapolateRight=type;return extrapolationConfig;}if(type.extrapolateLeft&&!isExtrapolate(type.extrapolateLeft)||type.extrapolateRight&&!isExtrapolate(type.extrapolateRight)){throw new Error(\"[Reanimated] Unsupported value for \\\"interpolate\\\" \\nSupported values: [\\\"extend\\\", \\\"clamp\\\", \\\"identity\\\", Extrapolation.CLAMP, Extrapolation.EXTEND, Extrapolation.IDENTITY]\\n Valid example:\\n      interpolate(value, [inputRange], [outputRange], {\\n        extrapolateLeft: Extrapolation.CLAMP,\\n        extrapolateRight: Extrapolation.IDENTITY\\n      }})\");}Object.assign(extrapolationConfig,type);return extrapolationConfig;})" }, obj, isExtrapolate];
[tmp6, tmp7, tmp8] = items4;
function validateType(extrapolateLeft) {
  const obj = { extrapolateLeft: _undefined.EXTEND, extrapolateRight: _undefined.EXTEND };
  if (extrapolateLeft) {
    if (typeof extrapolateLeft === "string") {
      if (_undefined2(extrapolateLeft)) {
        obj.extrapolateLeft = extrapolateLeft;
        obj.extrapolateRight = extrapolateLeft;
        return obj;
      } else {
        const _Error2 = Error;
        const self3 = this;
        const self4 = this;
        const error = new Error("[Reanimated] Unsupported value for \"interpolate\" \nSupported values: [\"extend\", \"clamp\", \"identity\", Extrapolation.CLAMP, Extrapolation.EXTEND, Extrapolation.IDENTITY]\n Valid example:\n        interpolate(value, [inputRange], [outputRange], \"clamp\")");
        throw error;
      }
    } else {
      if (!extrapolateLeft.extrapolateLeft) {
        const _Object = Object;
        const merged = Object.assign(obj, extrapolateLeft);
        return obj;
      }
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error1 = new Error("[Reanimated] Unsupported value for \"interpolate\" \nSupported values: [\"extend\", \"clamp\", \"identity\", Extrapolation.CLAMP, Extrapolation.EXTEND, Extrapolation.IDENTITY]\n Valid example:\n      interpolate(value, [inputRange], [outputRange], {\n        extrapolateLeft: Extrapolation.CLAMP,\n        extrapolateRight: Extrapolation.IDENTITY\n      }})");
      throw error1;
    }
  } else {
    return obj;
  }
}
const items5 = [tmp7, tmp8];
validateType.__closure = items5;
validateType.__workletHash = 1861796590910;
validateType.__initData = tmp6;
const items6 = [{ code: "(function internalInterpolate_Pnpm_interpolationTs4(x,narrowedInput,extrapolationConfig){let[getVal]=this.__closure;const{leftEdgeInput:leftEdgeInput,rightEdgeInput:rightEdgeInput,leftEdgeOutput:leftEdgeOutput,rightEdgeOutput:rightEdgeOutput}=narrowedInput;if(rightEdgeInput-leftEdgeInput===0){return leftEdgeOutput;}const progress=(x-leftEdgeInput)/(rightEdgeInput-leftEdgeInput);const val=leftEdgeOutput+progress*(rightEdgeOutput-leftEdgeOutput);const coef=rightEdgeOutput>=leftEdgeOutput?1:-1;if(coef*val<coef*leftEdgeOutput){return getVal(extrapolationConfig.extrapolateLeft,coef,val,leftEdgeOutput,rightEdgeOutput,x);}else if(coef*val>coef*rightEdgeOutput){return getVal(extrapolationConfig.extrapolateRight,coef,val,leftEdgeOutput,rightEdgeOutput,x);}return val;})" }, getVal];
[tmp9, tmp10] = items6;
function internalInterpolate(arg0, arg1, extrapolateLeft) {
  let leftEdgeInput;
  let leftEdgeOutput;
  let rightEdgeInput;
  let rightEdgeOutput;
  ({ leftEdgeInput, rightEdgeInput, leftEdgeOutput, rightEdgeOutput } = arg1);
  if (rightEdgeInput - leftEdgeInput == 0) {
    return leftEdgeOutput;
  } else {
    let tmp2;
    const sum = leftEdgeOutput + (arg0 - leftEdgeInput) / (rightEdgeInput - leftEdgeInput) * (rightEdgeOutput - leftEdgeOutput);
    let num = -1;
    if (rightEdgeOutput >= leftEdgeOutput) {
      num = 1;
    }
    if (num * sum < num * leftEdgeOutput) {
      tmp2 = _undefined(extrapolateLeft.extrapolateLeft, num, sum, leftEdgeOutput, rightEdgeOutput, arg0);
    } else {
      tmp2 = sum;
      if (num * rightEdgeOutput < num * sum) {
        tmp2 = _undefined(extrapolateLeft.extrapolateRight, num, sum, leftEdgeOutput, rightEdgeOutput, arg0);
      }
    }
    return tmp2;
  }
}
const items7 = [tmp10];
internalInterpolate.__closure = items7;
internalInterpolate.__workletHash = 11943656015833;
internalInterpolate.__initData = tmp9;
const items8 = [{ code: "(function interpolate_Pnpm_interpolationTs5(value,inputRange,outputRange,type){let[validateType,internalInterpolate]=this.__closure;if(inputRange.length<2||outputRange.length<2){throw new Error('[Reanimated] Interpolation input and output ranges should contain at least two values.');}const extrapolationConfig=validateType(type);const length=inputRange.length;let narrowedInput;if(value>inputRange[length-1]){narrowedInput={leftEdgeInput:inputRange[length-2],rightEdgeInput:inputRange[length-1],leftEdgeOutput:outputRange[length-2],rightEdgeOutput:outputRange[length-1]};}else{let left=1;let right=length-1;while(left<right){const mid=Math.floor((left+right)/2);if(value<=inputRange[mid]){right=mid;}else{left=mid+1;}}const segmentIndex=left;narrowedInput={leftEdgeInput:inputRange[segmentIndex-1],rightEdgeInput:inputRange[segmentIndex],leftEdgeOutput:outputRange[segmentIndex-1],rightEdgeOutput:outputRange[segmentIndex]};}return internalInterpolate(value,narrowedInput,extrapolationConfig);})" }, validateType, internalInterpolate];
let c0;
let c1;
[tmp11, tmp12, tmp13] = items8;
function interpolate(arg0, arg1, arg2, arg3) {
  let diff1;
  let sum;
  let tmp4;
  if (arg1.length >= 2) {
    if (arg2.length >= 2) {
      let obj;
      const tmp13 = _undefined(arg3);
      if (arg0 > arg1[arg1.length - 1]) {
        obj = { leftEdgeInput: arg1[arg1.length - 2], rightEdgeInput: arg1[arg1.length - 1], leftEdgeOutput: arg2[arg1.length - 2], rightEdgeOutput: arg2[arg1.length - 1] };
        const obj2 = { leftEdgeInput: arg1[arg1.length - 2], rightEdgeInput: arg1[arg1.length - 1], leftEdgeOutput: arg2[arg1.length - 2], rightEdgeOutput: arg2[arg1.length - 1] };
      } else {
        let diff = length - 1;
        let num = 1;
        let num2 = 1;
        if (1 < diff) {
          do {
            let _Math = Math;
            let rounded = Math.floor((num + diff) / 2);
            sum = num;
            tmp4 = rounded;
            if (arg0 > arg1[rounded]) {
              sum = rounded + 1;
              tmp4 = diff;
            }
            diff = tmp4;
            num = sum;
            num2 = sum;
          } while (sum < tmp4);
        }
        obj = { leftEdgeInput: arg1[diff1], rightEdgeInput: arg1[num2], leftEdgeOutput: arg2[diff1], rightEdgeOutput: arg2[num2] };
        diff1 = num2 - 1;
      }
      return _undefined2(arg0, obj, tmp13);
    }
  }
  const error = new Error("[Reanimated] Interpolation input and output ranges should contain at least two values.");
  throw error;
}
const items9 = [tmp12, tmp13];
interpolate.__closure = items9;
interpolate.__workletHash = 5158302140286;
interpolate.__initData = tmp11;
const items10 = [{ code: "(function clamp_Pnpm_interpolationTs6(value,min,max){return Math.min(Math.max(value,min),max);})" }];
[tmp14] = items10;
function clamp(arg0, arg1, arg2) {
  return Math.min(Math.max(arg0, arg1), arg2);
}
clamp.__workletHash = 9382877233223;
clamp.__initData = tmp14;

export const Extrapolation = obj;
export { interpolate };
export { clamp };
