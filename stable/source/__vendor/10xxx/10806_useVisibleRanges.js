// Module ID: 10806
// Function ID: 10807
// Name: useVisibleRanges
// Dependencies: [19, 1652]
// Exports: useVisibleRanges

// Module 10806 (useVisibleRanges)
import react from "react" /* 19 */;
import _mod1652 from "module_1652" /* 1652 */;

let tmp2;
const useRef = react.useRef;
let closure_3 = { code: "(function pnpm_useVisibleRangesTsx1(){let[windowSize,translation,viewSize,total,loop,isArraysEqual,cachedRanges]=this.__closure;var _cachedRanges$current,_cachedRanges$current2,_cachedRanges$current3,_cachedRanges$current4;const positiveCount=Math.round(windowSize/2);const negativeCount=windowSize-positiveCount;let currentIndex=Math.round(-translation.value/viewSize);currentIndex=currentIndex<0?currentIndex%total+total:currentIndex;let newRanges;if(!loop){newRanges={negativeRange:[0+currentIndex-(windowSize-1),0+currentIndex],positiveRange:[0+currentIndex,currentIndex+(windowSize-1)]};}else{const negativeRange=[(currentIndex-negativeCount+total)%total,(currentIndex-1+total)%total];const positiveRange=[(currentIndex+total)%total,(currentIndex+positiveCount+total)%total];if(negativeRange[0]<total&&negativeRange[0]>negativeRange[1]){negativeRange[1]=total-1;positiveRange[0]=0;}if(positiveRange[0]>positiveRange[1]){negativeRange[1]=total-1;positiveRange[0]=0;}newRanges={negativeRange:negativeRange,positiveRange:positiveRange};}if(isArraysEqual((_cachedRanges$current=(_cachedRanges$current2=cachedRanges.current)===null||_cachedRanges$current2===void 0?void 0:_cachedRanges$current2.negativeRange)!==null&&_cachedRanges$current!==void 0?_cachedRanges$current:[],newRanges.negativeRange)&&isArraysEqual((_cachedRanges$current3=(_cachedRanges$current4=cachedRanges.current)===null||_cachedRanges$current4===void 0?void 0:_cachedRanges$current4.positiveRange)!==null&&_cachedRanges$current3!==void 0?_cachedRanges$current3:[],newRanges.positiveRange))return cachedRanges.current;cachedRanges.current=newRanges;return cachedRanges.current;})" };
let items = [{ code: "(function isArraysEqual_Pnpm_useVisibleRangesTsx2(a,b){if(a.length!==b.length)return false;return a.every(function(value,index){return value===b[index];});})" }];
[tmp2] = items;
function isArraysEqual(arr, arg1) {
  let closure_0 = arg1;
  const tmp = arr.length === arg1.length && arr.every((item, index) => item === closure_0[index]);
  return tmp;
}
isArraysEqual.__workletHash = 596603840316;
isArraysEqual.__initData = tmp2;

export function useVisibleRanges(total) {
  let loop;
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let translation;
  let windowSize;
  total = total.total;
  let num = 0;
  if (undefined !== total) {
    num = total;
  }
  ({ translation, windowSize, loop } = total);
  const viewSize = total.viewSize;
  if (windowSize == null) {
    windowSize = num;
  }
  const tmp = useRef(null);
  let obj = _mod1652;
  let items = [closure_3, windowSize, translation, viewSize, num, loop, isArraysEqual, tmp];
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = items;
  function pnpm_useVisibleRangesTsx1() {
    let items2;
    let items3;
    let obj;
    const rounded = Math.round(c0 / 2);
    const diff = c0 - rounded;
    const rounded1 = Math.round(-_undefined.value / c2);
    let sum = rounded1;
    if (rounded1 < 0) {
      sum = rounded1 % c3 + c3;
    }
    const tmp7 = c4;
    if (tmp7) {
      const items = [(sum - diff + c3) % c3, (sum - 1 + c3) % c3];
      const items1 = [(sum + c3) % c3, (sum + rounded + c3) % c3];
      const tmp9 = items[0] < c3 && items[0] > items[1];
      if (tmp9) {
        items[1] = c3 - 1;
        items1[0] = 0;
      }
      if (items1[0] > items1[1]) {
        items[1] = c3 - 1;
        items1[0] = 0;
      }
      obj = { negativeRange: items, positiveRange: items1 };
      const obj2 = { negativeRange: items, positiveRange: items1 };
    } else {
      obj = { negativeRange: items2, positiveRange: items3 };
      items2 = [sum - (c0 - 1), sum];
      items3 = [sum, sum + (c0 - 1)];
    }
    const current = _undefined2.current;
    let negativeRange;
    if (current != null) {
      negativeRange = current.negativeRange;
    }
    if (negativeRange == null) {
      negativeRange = [];
    }
    let tmp10Result = tmp10(negativeRange, obj.negativeRange);
    if (tmp10Result) {
      const current2 = tmp11.current;
      let positiveRange;
      if (current2 != null) {
        positiveRange = current2.positiveRange;
      }
      if (positiveRange == null) {
        positiveRange = [];
      }
      tmp10Result = tmp10(positiveRange, obj.positiveRange);
    }
    if (!tmp10Result) {
      _undefined2.current = obj;
    }
    return _undefined2.current;
  }
  let items1 = [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9];
  pnpm_useVisibleRangesTsx1.__closure = items1;
  pnpm_useVisibleRangesTsx1.__workletHash = 6169560456169;
  pnpm_useVisibleRangesTsx1.__initData = tmp2;
  let items2 = [loop, num, windowSize, translation];
  return obj.useDerivedValue(pnpm_useVisibleRangesTsx1, items2);
}
