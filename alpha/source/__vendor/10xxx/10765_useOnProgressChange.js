// Module ID: 10765
// Function ID: 10766
// Name: useOnProgressChange
// Dependencies: [1652, 10751]
// Exports: useOnProgressChange

// Module 10765 (useOnProgressChange)
import _mod1652 from "module_1652" /* 1652 */;

let tmp;
const convertToSharedIndex = tmp(10751);
let closure_2 = { code: "(function pnpm_useOnProgressChangeTs1(){let[offsetX]=this.__closure;return offsetX.value;})" };
let closure_3 = { code: "(function pnpm_useOnProgressChangeTs2(_value){let[computedOffsetXValueWithAutoFillData,rawDataLength,size,autoFillData,loop,onProgressChange,isFunc,runOnJS]=this.__closure;let value=computedOffsetXValueWithAutoFillData({value:_value,rawDataLength:rawDataLength,size:size,autoFillData:autoFillData,loop:loop});if(!loop){value=Math.max(-((rawDataLength-1)*size),Math.min(value,0));}let absoluteProgress=Math.abs(value/size);if(value>0)absoluteProgress=rawDataLength-absoluteProgress;if(onProgressChange){if(isFunc)runOnJS(onProgressChange)(value,absoluteProgress);else onProgressChange.value=absoluteProgress;}})" };

export function useOnProgressChange(offsetX) {
  let autoFillData;
  let loop;
  let onProgressChange;
  let rawDataLength;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp4;
  let tmp5;
  let tmp7;
  let tmp8;
  let tmp9;
  ({ autoFillData, loop, size, rawDataLength, onProgressChange } = offsetX);
  const tmp = require;
  const tmp2 = dependencyMap;
  offsetX = offsetX.offsetX;
  let tmp3 = _mod1652;
  const items = [closure_2, offsetX];
  [tmp4, tmp5] = items;
  function pnpm_useOnProgressChangeTs1() {
    return _undefined.value;
  }
  const items1 = [tmp5];
  pnpm_useOnProgressChangeTs1.__closure = items1;
  pnpm_useOnProgressChangeTs1.__workletHash = 14875767740928;
  pnpm_useOnProgressChangeTs1.__initData = tmp4;
  const items2 = [closure_3, , , , , , , , ];
  const useAnimatedReaction = tmp3.useAnimatedReaction;
  const tmp6 = typeof onProgressChange === "function";
  items2[1] = convertToSharedIndex.computedOffsetXValueWithAutoFillData;
  items2[2] = rawDataLength;
  items2[3] = size;
  items2[4] = autoFillData;
  items2[5] = loop;
  items2[6] = onProgressChange;
  items2[7] = tmp6;
  items2[8] = _mod1652.runOnJS;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15] = items2;
  function pnpm_useOnProgressChangeTs2(value) {
    const obj = { value, rawDataLength, size, autoFillData, loop };
    const tmp3 = _undefined(obj);
    let bound = tmp3;
    if (!loop) {
      const _Math = Math;
      const _Math2 = Math;
      const result = -tmp - 1 * tmp2;
      bound = Math.max(result, Math.min(tmp3, 0));
    }
    const absolute = Math.abs(bound / tmp2);
    let diff = absolute;
    if (bound > 0) {
      diff = tmp - absolute;
    }
    if (c5) {
      const tmp10 = c6;
      if (tmp10) {
        _undefined2(c5)(bound, diff);
      } else {
        c5.value = diff;
      }
    }
  }
  const items3 = [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15];
  pnpm_useOnProgressChangeTs2.__closure = items3;
  pnpm_useOnProgressChangeTs2.__workletHash = 16405314453734;
  pnpm_useOnProgressChangeTs2.__initData = tmp7;
  const items4 = [loop, autoFillData, rawDataLength, onProgressChange, size];
  const animatedReaction = useAnimatedReaction(pnpm_useOnProgressChangeTs1, pnpm_useOnProgressChangeTs2, items4);
}
