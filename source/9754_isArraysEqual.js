// Module ID: 9754
// Function ID: 75791
// Name: isArraysEqual
// Dependencies: [31, 1582]
// Exports: useVisibleRanges

// Module 9754 (isArraysEqual)
import { useRef } from "result";

let closure_3 = { code: "function pnpm_useVisibleRangesTsx1(){const{windowSize,translation,viewSize,total,loop,isArraysEqual,cachedRanges}=this.__closure;var _cachedRanges$current,_cachedRanges$current2,_cachedRanges$current3,_cachedRanges$current4;const positiveCount=Math.round(windowSize/2);const negativeCount=windowSize-positiveCount;let currentIndex=Math.round(-translation.value/viewSize);currentIndex=currentIndex<0?currentIndex%total+total:currentIndex;let newRanges;if(!loop){newRanges={negativeRange:[0+currentIndex-(windowSize-1),0+currentIndex],positiveRange:[0+currentIndex,currentIndex+(windowSize-1)]};}else{const negativeRange=[(currentIndex-negativeCount+total)%total,(currentIndex-1+total)%total];const positiveRange=[(currentIndex+total)%total,(currentIndex+positiveCount+total)%total];if(negativeRange[0]<total&&negativeRange[0]>negativeRange[1]){negativeRange[1]=total-1;positiveRange[0]=0;}if(positiveRange[0]>positiveRange[1]){negativeRange[1]=total-1;positiveRange[0]=0;}newRanges={negativeRange:negativeRange,positiveRange:positiveRange};}if(isArraysEqual((_cachedRanges$current=(_cachedRanges$current2=cachedRanges.current)===null||_cachedRanges$current2===void 0?void 0:_cachedRanges$current2.negativeRange)!==null&&_cachedRanges$current!==void 0?_cachedRanges$current:[],newRanges.negativeRange)&&isArraysEqual((_cachedRanges$current3=(_cachedRanges$current4=cachedRanges.current)===null||_cachedRanges$current4===void 0?void 0:_cachedRanges$current4.positiveRange)!==null&&_cachedRanges$current3!==void 0?_cachedRanges$current3:[],newRanges.positiveRange))return cachedRanges.current;cachedRanges.current=newRanges;return cachedRanges.current;}" };
let closure_4 = { code: "function isArraysEqual_Pnpm_useVisibleRangesTsx2(a,b){if(a.length!==b.length)return false;return a.every(function(value,index){return value===b[index];});}" };
let closure_5 = (() => {
  function isArraysEqual(arr) {
    let closure_0 = arg1;
    return arr.length === arg1.length && arr.every((arg0, arg1) => arg0 === table[arg1]);
  }
  isArraysEqual.__closure = {};
  isArraysEqual.__workletHash = 6222082561981;
  isArraysEqual.__initData = closure_4;
  return isArraysEqual;
})();

export const useVisibleRanges = function useVisibleRanges(total) {
  let loop;
  let windowSize;
  total = total.total;
  let num = 0;
  if (undefined !== total) {
    num = total;
  }
  const viewSize = total.viewSize;
  const translation = total.translation;
  ({ windowSize, loop } = total);
  let tmp = num;
  if (null != windowSize) {
    tmp = windowSize;
  }
  let closure_4 = tmp;
  const tmp2 = translation(null);
  let closure_5 = tmp2;
  let obj = num(viewSize[1]);
  /* worklet (recovered source) */ function pnpm_useVisibleRangesTsx1(){const{windowSize,translation,viewSize,total,loop,isArraysEqual,cachedRanges}=this.__closure;var _cachedRanges$current,_cachedRanges$current2,_cachedRanges$current3,_cachedRanges$current4;const positiveCount=Math.round(windowSize/2);const negativeCount=windowSize-positiveCount;let currentIndex=Math.round(-translation.value/viewSize);currentIndex=currentIndex<0?currentIndex%total+total:currentIndex;let newRanges;if(!loop){newRanges={negativeRange:[0+currentIndex-(windowSize-1),0+currentIndex],positiveRange:[0+currentIndex,currentIndex+(windowSize-1)]};}else{const negativeRange=[(currentIndex-negativeCount+total)%total,(currentIndex-1+total)%total];const positiveRange=[(currentIndex+total)%total,(currentIndex+positiveCount+total)%total];if(negativeRange[0]<total&&negativeRange[0]>negativeRange[1]){negativeRange[1]=total-1;positiveRange[0]=0;}if(positiveRange[0]>positiveRange[1]){negativeRange[1]=total-1;positiveRange[0]=0;}newRanges={negativeRange:negativeRange,positiveRange:positiveRange};}if(isArraysEqual((_cachedRanges$current=(_cachedRanges$current2=cachedRanges.current)===null||_cachedRanges$current2===void 0?void 0:_cachedRanges$current2.negativeRange)!==null&&_cachedRanges$current!==void 0?_cachedRanges$current:[],newRanges.negativeRange)&&isArraysEqual((_cachedRanges$current3=(_cachedRanges$current4=cachedRanges.current)===null||_cachedRanges$current4===void 0?void 0:_cachedRanges$current4.positiveRange)!==null&&_cachedRanges$current3!==void 0?_cachedRanges$current3:[],newRanges.positiveRange))return cachedRanges.current;cachedRanges.current=newRanges;return cachedRanges.current;}
  obj = { windowSize: tmp, translation, viewSize, total: num, loop, isArraysEqual: closure_5, cachedRanges: tmp2 };
  pnpm_useVisibleRangesTsx1.__closure = obj;
  pnpm_useVisibleRangesTsx1.__workletHash = 627759706032;
  pnpm_useVisibleRangesTsx1.__initData = loop;
  let items = [loop, num, tmp, translation];
  return obj.useDerivedValue(pnpm_useVisibleRangesTsx1, items);
};
