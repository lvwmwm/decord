// Module ID: 1635
// Function ID: 18303
// Name: calcBezier
// Dependencies: [1593]

// Module 1635 (calcBezier)
const require = arg1;
const dependencyMap = arg6;
let closure_2 = { code: "function A_Pnpm_BezierTs1(aA1,aA2){return 1.0-3.0*aA2+3.0*aA1;}" };
let closure_3 = (() => {
  class A {
    constructor(arg0, arg1) {
      return 1 - 3 * arg1 + 3 * arg0;
    }
  }
  A.__closure = {};
  A.__workletHash = 6646411187233;
  A.__initData = closure_2;
  return A;
})();
let closure_4 = { code: "function B_Pnpm_BezierTs2(aA1,aA2){return 3.0*aA2-6.0*aA1;}" };
let closure_5 = (() => {
  class B {
    constructor(arg0, arg1) {
      return 3 * arg1 - 6 * arg0;
    }
  }
  B.__closure = {};
  B.__workletHash = 4657056619296;
  B.__initData = closure_4;
  return B;
})();
let closure_6 = { code: "function C_Pnpm_BezierTs3(aA1){return 3.0*aA1;}" };
let closure_7 = (() => {
  class C {
    constructor(arg0) {
      return 3 * arg0;
    }
  }
  C.__closure = {};
  C.__workletHash = 10558087844899;
  C.__initData = closure_6;
  return C;
})();
let closure_8 = { code: "function calcBezier_Pnpm_BezierTs4(aT,aA1,aA2){const{A,B,C}=this.__closure;return((A(aA1,aA2)*aT+B(aA1,aA2))*aT+C(aA1))*aT;}" };
let closure_9 = (() => {
  function calcBezier(arg0, arg1, arg2) {
    const result = outer1_3(arg1, arg2) * arg0;
    const result1 = (result + outer1_5(arg1, arg2)) * arg0;
    return (result1 + outer1_7(arg1)) * arg0;
  }
  calcBezier.__closure = { A: closure_3, B: closure_5, C: closure_7 };
  calcBezier.__workletHash = 6436686649451;
  calcBezier.__initData = closure_8;
  return calcBezier;
})();
let closure_10 = { code: "function getSlope_Pnpm_BezierTs5(aT,aA1,aA2){const{A,B,C}=this.__closure;return 3.0*A(aA1,aA2)*aT*aT+2.0*B(aA1,aA2)*aT+C(aA1);}" };
let closure_11 = (() => {
  function getSlope(arg0, arg1, arg2) {
    const result = 3 * outer1_3(arg1, arg2) * arg0 * arg0;
    const result1 = 2 * outer1_5(arg1, arg2) * arg0;
    return result + result1 + outer1_7(arg1);
  }
  getSlope.__closure = { A: closure_3, B: closure_5, C: closure_7 };
  getSlope.__workletHash = 7144143660854;
  getSlope.__initData = closure_10;
  return getSlope;
})();
let closure_12 = { code: "function binarySubdivide_Pnpm_BezierTs6(aX,aA,aB,mX1,mX2){const{calcBezier,SUBDIVISION_PRECISION,SUBDIVISION_MAX_ITERATIONS}=this.__closure;let currentX;let currentT;let i=0;do{currentT=aA+(aB-aA)/2.0;currentX=calcBezier(currentT,mX1,mX2)-aX;if(currentX>0.0){aB=currentT;}else{aA=currentT;}}while(Math.abs(currentX)>SUBDIVISION_PRECISION&&++i<SUBDIVISION_MAX_ITERATIONS);return currentT;}" };
let closure_13 = (() => {
  function binarySubdivide(arg0, arg1, arg2, arg3, arg4) {
    let sum;
    let tmp = arg1;
    let tmp2 = arg2;
    let num = 0;
    while (true) {
      let tmp3 = outer1_9;
      sum = tmp + (tmp2 - tmp) / 2;
      let diff = outer1_9(sum, arg3, arg4) - arg0;
      let tmp6 = sum;
      if (diff > 0) {
        tmp6 = tmp;
        tmp2 = sum;
      }
      let _Math = Math;
      if (Math.abs(diff) <= 0.0000001) {
        break;
      } else {
        num = num + 1;
        tmp = tmp6;
        if (num >= 10) {
          break;
        }
      }
    }
    return sum;
  }
  const obj = { calcBezier: closure_9, SUBDIVISION_PRECISION: 0.0000001, SUBDIVISION_MAX_ITERATIONS: 10 };
  binarySubdivide.__closure = obj;
  binarySubdivide.__workletHash = 16502327865282;
  binarySubdivide.__initData = closure_12;
  return binarySubdivide;
})();
let closure_14 = { code: "function newtonRaphsonIterate_Pnpm_BezierTs7(aX,aGuessT,mX1,mX2){const{NEWTON_ITERATIONS,getSlope,calcBezier}=this.__closure;for(let i=0;i<NEWTON_ITERATIONS;++i){const currentSlope=getSlope(aGuessT,mX1,mX2);if(currentSlope===0.0){return aGuessT;}const currentX=calcBezier(aGuessT,mX1,mX2)-aX;aGuessT-=currentX/currentSlope;}return aGuessT;}" };
let closure_15 = (() => {
  function newtonRaphsonIterate(arg0, arg1, arg2, arg3) {
    let tmp = arg1;
    let num = 0;
    const tmp2 = outer1_11(tmp, arg2, arg3);
    while (0 !== tmp2) {
      let tmp3 = outer1_9;
      let diff = tmp - (outer1_9(tmp, arg2, arg3) - arg0) / tmp2;
      num = num + 1;
      tmp = diff;
      if (num < 4) {
        continue;
      } else {
        return diff;
      }
    }
    return tmp;
  }
  newtonRaphsonIterate.__closure = { NEWTON_ITERATIONS: 4, getSlope: closure_11, calcBezier: closure_9 };
  newtonRaphsonIterate.__workletHash = 13998382484908;
  newtonRaphsonIterate.__initData = closure_14;
  return newtonRaphsonIterate;
})();
let closure_16 = { code: "function Bezier_Pnpm_BezierTs8(mX1,mY1,mX2,mY2){const{kSplineTableSize,calcBezier,kSampleStepSize,getSlope,NEWTON_MIN_SLOPE,newtonRaphsonIterate,binarySubdivide}=this.__closure;function LinearEasing(x){'worklet';return x;}if(!(mX1>=0&&mX1<=1&&mX2>=0&&mX2<=1)){throw new ReanimatedError('Bezier x values must be in [0, 1] range.');}if(mX1===mY1&&mX2===mY2){return LinearEasing;}const sampleValues=new Array(kSplineTableSize);for(let i=0;i<kSplineTableSize;++i){sampleValues[i]=calcBezier(i*kSampleStepSize,mX1,mX2);}function getTForX(aX){'worklet';let intervalStart=0.0;let currentSample=1;const lastSample=kSplineTableSize-1;for(;currentSample!==lastSample&&sampleValues[currentSample]<=aX;++currentSample){intervalStart+=kSampleStepSize;}--currentSample;const dist=(aX-sampleValues[currentSample])/(sampleValues[currentSample+1]-sampleValues[currentSample]);const guessForT=intervalStart+dist*kSampleStepSize;const initialSlope=getSlope(guessForT,mX1,mX2);if(initialSlope>=NEWTON_MIN_SLOPE){return newtonRaphsonIterate(aX,guessForT,mX1,mX2);}else if(initialSlope===0.0){return guessForT;}else{return binarySubdivide(aX,intervalStart,intervalStart+kSampleStepSize,mX1,mX2);}}return function Bezier_Pnpm_BezierTs8(x){'worklet';if(mX1===mY1&&mX2===mY2){return x;}if(x===0){return 0;}if(x===1){return 1;}return calcBezier(getTForX(x),mY1,mY2);};}" };
let closure_17 = { code: "function LinearEasing_Pnpm_BezierTs9(x){return x;}" };
let closure_18 = { code: "function getTForX_Pnpm_BezierTs10(aX){const{kSplineTableSize,sampleValues,kSampleStepSize,getSlope,mX1,mX2,NEWTON_MIN_SLOPE,newtonRaphsonIterate,binarySubdivide}=this.__closure;let intervalStart=0.0;let currentSample=1;const lastSample=kSplineTableSize-1;for(;currentSample!==lastSample&&sampleValues[currentSample]<=aX;++currentSample){intervalStart+=kSampleStepSize;}--currentSample;const dist=(aX-sampleValues[currentSample])/(sampleValues[currentSample+1]-sampleValues[currentSample]);const guessForT=intervalStart+dist*kSampleStepSize;const initialSlope=getSlope(guessForT,mX1,mX2);if(initialSlope>=NEWTON_MIN_SLOPE){return newtonRaphsonIterate(aX,guessForT,mX1,mX2);}else if(initialSlope===0.0){return guessForT;}else{return binarySubdivide(aX,intervalStart,intervalStart+kSampleStepSize,mX1,mX2);}}" };
let closure_19 = { code: "function BezierEasing_Pnpm_BezierTs11(x){const{mX1,mY1,mX2,mY2,calcBezier,getTForX}=this.__closure;if(mX1===mY1&&mX2===mY2){return x;}if(x===0){return 0;}if(x===1){return 1;}return calcBezier(getTForX(x),mY1,mY2);}" };
arg5.Bezier = (() => {
  class Bezier {
    constructor(arg0, arg1, arg2, arg3) {
      closure_0 = arg0;
      closure_1 = arg1;
      closure_2 = arg2;
      closure_3 = arg3;
      if (arg0 >= 0) {
        num = 1;
        if (arg0 <= 1) {
          if (arg2 >= 0) {
            if (arg2 <= 1) {
              if (arg0 === arg1) {
                if (arg2 === arg3) {
                  return tmp;
                }
              }
              tmp3 = globalThis;
              _Array = Array;
              prototype = Array.prototype;
              tmp4 = new.target;
              num2 = 11;
              tmp5 = new.target;
              num3 = 11;
              array = new Array(11);
              tmp7 = array;
              Array = array;
              num4 = 0.1;
              num5 = 0;
              do {
                tmp8 = outer1_9;
                array[num5] = outer1_9(num5 * 0.1, arg0, arg2);
                num5 = num5 + 1;
              } while (num5 < 11);
              tmp9 = (() => {
                function getTForX(arg0) {
                  let num = 0;
                  let num2 = 1;
                  let num3 = 0;
                  let num4 = 1;
                  if (outer1_4[1] <= arg0) {
                    const sum = num + 0.1;
                    const sum1 = num2 + 1;
                    num3 = sum;
                    num4 = sum1;
                    while (10 !== sum1) {
                      let tmp3 = outer1_4;
                      num = sum;
                      num2 = sum1;
                      num3 = sum;
                      num4 = sum1;
                      if (outer1_4[sum1] > arg0) {
                        break;
                      }
                    }
                  }
                  const diff = num4 - 1;
                  const sum2 = num3 + (arg0 - outer1_4[diff]) / (outer1_4[diff + 1] - outer1_4[diff]) * 0.1;
                  const tmp6 = outer3_11(sum2, outer1_0, outer1_2);
                  if (tmp6 >= 0.001) {
                    let tmp7 = outer3_15(arg0, sum2, outer1_0, outer1_2);
                  } else {
                    tmp7 = sum2;
                    if (0 !== tmp6) {
                      tmp7 = outer3_13(arg0, num3, num3 + 0.1, outer1_0, outer1_2);
                    }
                  }
                  return tmp7;
                }
                const obj = { kSplineTableSize: 11, sampleValues: array, kSampleStepSize: 0.1, getSlope: outer2_11, mX1: closure_0, mX2: closure_2, NEWTON_MIN_SLOPE: 0.001, newtonRaphsonIterate: outer2_15, binarySubdivide: outer2_13 };
                getTForX.__closure = obj;
                getTForX.__workletHash = 8576728300710;
                getTForX.__initData = outer2_18;
                return getTForX;
              })();
              c5 = tmp9;
              class BezierEasing {
                constructor(arg0) {
                  if (closure_0 !== closure_1) {
                    num = 0;
                    if (0 !== arg0) {
                      num2 = 1;
                      if (1 !== arg0) {
                        tmp4 = outer2_9;
                        tmp5 = c5;
                        tmp6 = closure_1;
                        tmp7 = closure_3;
                        num2 = outer2_9(c5(arg0), closure_1, closure_3);
                      }
                      num = num2;
                    }
                    tmp3 = num;
                  } else {
                    tmp = closure_2;
                    tmp2 = closure_3;
                    tmp3 = arg0;
                  }
                  return tmp3;
                }
              }
              obj = {};
              obj.mX1 = arg0;
              obj.mY1 = arg1;
              obj.mX2 = arg2;
              obj.mY2 = arg3;
              tmp10 = outer1_9;
              obj.calcBezier = outer1_9;
              obj.getTForX = tmp9;
              BezierEasing.__closure = obj;
              num6 = 4633198201234;
              BezierEasing.__workletHash = 4633198201234;
              tmp11 = outer1_19;
              BezierEasing.__initData = outer1_19;
              return BezierEasing;
            }
          }
        }
      }
      reanimatedError = new outer1_0(outer1_1[0]).ReanimatedError("Bezier x values must be in [0, 1] range.");
      throw reanimatedError;
    }
  }
  let obj = { kSplineTableSize: 11, calcBezier: closure_9, kSampleStepSize: 0.1, getSlope: closure_11, NEWTON_MIN_SLOPE: 0.001, newtonRaphsonIterate: closure_15, binarySubdivide: closure_13 };
  Bezier.__closure = obj;
  Bezier.__workletHash = 1707642440340;
  Bezier.__initData = closure_16;
  return Bezier;
})();
