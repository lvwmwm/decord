// Module ID: 10841
// Function ID: 10842
// Name: useOffsetX
// Dependencies: [1652]
// Exports: useOffsetX

// Module 10841 (useOffsetX)
import _mod1652 from "module_1652" /* 1652 */;

let closure_2 = { code: "(function pnpm_useOffsetXTs1(){let[visibleRanges,index,loop,TOTAL_WIDTH,MIN,HALF_WIDTH,startPos,MAX,interpolate,handlerOffset,Extrapolation,size]=this.__closure;const{negativeRange:negativeRange,positiveRange:positiveRange}=visibleRanges.value;if(index>=negativeRange[0]&&index<=negativeRange[1]||index>=positiveRange[0]&&index<=positiveRange[1]){if(loop){const inputRange=[-TOTAL_WIDTH,MIN-HALF_WIDTH-startPos-Number.MIN_VALUE,MIN-HALF_WIDTH-startPos,0,MAX+HALF_WIDTH-startPos,MAX+HALF_WIDTH-startPos+Number.MIN_VALUE,TOTAL_WIDTH];const outputRange=[startPos,MAX+HALF_WIDTH-Number.MIN_VALUE,MIN-HALF_WIDTH,startPos,MAX+HALF_WIDTH,MIN-HALF_WIDTH+Number.MIN_VALUE,startPos];return interpolate(handlerOffset.value,inputRange,outputRange,Extrapolation.CLAMP);}return handlerOffset.value+size*index;}return Number.MAX_SAFE_INTEGER;})" };

export const useOffsetX = (viewCount, arg1) => {
  let dataLength;
  let handlerOffset;
  let index;
  let loop;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let type;
  ({ handlerOffset, index, size, loop, dataLength, type } = viewCount);
  let str = "positive";
  if (undefined !== type) {
    str = type;
  }
  const diff = dataLength - 1;
  viewCount = viewCount.viewCount;
  const result = size * dataLength;
  const result1 = 0.5 * size;
  if (viewCount == null) {
    const _Math = Math;
    viewCount = Math.round((dataLength - 1) / 2);
  }
  let diff1 = viewCount;
  if ("positive" !== str) {
    diff1 = diff - viewCount;
  }
  let result2 = size * index;
  if (index > diff1) {
    result2 = (index - dataLength) * size;
  }
  const result3 = diff1 * size;
  const result4 = -diff - diff1 * size;
  let items = [closure_2, arg1, index, loop, result, result4, result1, result2, result3, , , , ];
  const useDerivedValue = _mod1652.useDerivedValue;
  items[9] = _mod1652.interpolate;
  items[10] = handlerOffset;
  items[11] = _mod1652.Extrapolation;
  items[12] = size;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  let c10;
  let c11;
  [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22] = items;
  function pnpm_useOffsetXTs1() {
    let negativeRange;
    let positiveRange;
    ({ negativeRange, positiveRange } = _undefined.value);
    if (c1 < negativeRange[0]) {
      const _Number = Number;
      return Number.MAX_SAFE_INTEGER;
    }
    const tmp3 = c2;
    if (tmp3) {
      const items = [-c3, , , , , , ];
      const _Number2 = Number;
      items[1] = c4 - c5 - c6 - Number.MIN_VALUE;
      items[2] = c4 - c5 - c6;
      items[3] = 0;
      items[4] = c7 + c5 - c6;
      const _Number3 = Number;
      items[5] = c7 + c5 - c6 + Number.MIN_VALUE;
      items[6] = c3;
      const items1 = [c6, , , , , , ];
      const _Number4 = Number;
      items1[1] = c7 + c5 - Number.MIN_VALUE;
      items1[2] = c4 - c5;
      items1[3] = c6;
      items1[4] = c7 + c5;
      const _Number5 = Number;
      items1[5] = c4 - c5 + Number.MIN_VALUE;
      items1[6] = c6;
      return _undefined2(_undefined3.value, items, items1, _undefined4.CLAMP);
    } else {
      return _undefined3.value + c11 * c1;
    }
  }
  let items1 = [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22];
  pnpm_useOffsetXTs1.__closure = items1;
  pnpm_useOffsetXTs1.__workletHash = 11642073628354;
  pnpm_useOffsetXTs1.__initData = tmp10;
  const items2 = [loop, dataLength, viewCount, str, size, arg1, handlerOffset];
  return useDerivedValue(pnpm_useOffsetXTs1, items2);
};
