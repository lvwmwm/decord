// Module ID: 10239
// Function ID: 10240
// Dependencies: [1638, 10225]
// Exports: useOnProgressChange

// Module 10239
import cancelAnimation from "cancelAnimation" /* 1638 */;
import SINGLE_ITEM from "SINGLE_ITEM" /* 10225 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = { code: "function pnpm_useOnProgressChangeTs1(){const{offsetX}=this.__closure;return offsetX.value;}" };
let closure_3 = { code: "function pnpm_useOnProgressChangeTs2(_value){const{computedOffsetXValueWithAutoFillData,rawDataLength,size,autoFillData,loop,onProgressChange,isFunc,runOnJS}=this.__closure;let value=computedOffsetXValueWithAutoFillData({value:_value,rawDataLength:rawDataLength,size:size,autoFillData:autoFillData,loop:loop});if(!loop){value=Math.max(-((rawDataLength-1)*size),Math.min(value,0));}let absoluteProgress=Math.abs(value/size);if(value>0)absoluteProgress=rawDataLength-absoluteProgress;if(onProgressChange){if(isFunc)runOnJS(onProgressChange)(value,absoluteProgress);else onProgressChange.value=absoluteProgress;}}" };

export const useOnProgressChange = function useOnProgressChange(autoFillData) {
  autoFillData = autoFillData.autoFillData;
  const loop = autoFillData.loop;
  const offsetX = autoFillData.offsetX;
  const size = autoFillData.size;
  const rawDataLength = autoFillData.rawDataLength;
  const onProgressChange = autoFillData.onProgressChange;
  closure_6 = tmp;
  const fn = function n() {
    return offsetX.value;
  };
  fn.__closure = { offsetX };
  fn.__workletHash = 355184931449;
  fn.__initData = offsetX;
  const fn2 = function u(value) {
    const result = SINGLE_ITEM.computedOffsetXValueWithAutoFillData({ value, rawDataLength, size, autoFillData, loop });
    let bound = result;
    if (!loop) {
      const _Math = Math;
      const _Math2 = Math;
      const result1 = -tmp3 - 1 * tmp4;
      bound = Math.max(result1, Math.min(result, 0));
    }
    const absolute = Math.abs(bound / tmp4);
    let diff = absolute;
    if (bound > 0) {
      diff = tmp3 - absolute;
    }
    if (onProgressChange) {
      if (closure_6) {
        cancelAnimation.runOnJS(tmp11)(bound, diff);
        const tmpResult = cancelAnimation;
      } else {
        tmp11.value = diff;
      }
    }
  };
  const obj = autoFillData(loop[0]);
  fn2.__closure = { computedOffsetXValueWithAutoFillData: autoFillData(loop[1]).computedOffsetXValueWithAutoFillData, rawDataLength, size, autoFillData, loop, onProgressChange, isFunc: typeof onProgressChange === "function", runOnJS: autoFillData(loop[0]).runOnJS };
  fn2.__workletHash = 12473781608319;
  fn2.__initData = size;
  const items = [loop, autoFillData, rawDataLength, onProgressChange, size];
  const animatedReaction = obj.useAnimatedReaction(fn, fn2, items);
};
