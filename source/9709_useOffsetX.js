// Module ID: 9709
// Function ID: 75507
// Name: useOffsetX
// Dependencies: []

// Module 9709 (useOffsetX)
let closure_2 = { code: "function pnpm_useOffsetXTs1(){const{visibleRanges,index,loop,TOTAL_WIDTH,MIN,HALF_WIDTH,startPos,MAX,interpolate,handlerOffset,Extrapolation,size}=this.__closure;const{negativeRange:negativeRange,positiveRange:positiveRange}=visibleRanges.value;if(index>=negativeRange[0]&&index<=negativeRange[1]||index>=positiveRange[0]&&index<=positiveRange[1]){if(loop){const inputRange=[-TOTAL_WIDTH,MIN-HALF_WIDTH-startPos-Number.MIN_VALUE,MIN-HALF_WIDTH-startPos,0,MAX+HALF_WIDTH-startPos,MAX+HALF_WIDTH-startPos+Number.MIN_VALUE,TOTAL_WIDTH];const outputRange=[startPos,MAX+HALF_WIDTH-Number.MIN_VALUE,MIN-HALF_WIDTH,startPos,MAX+HALF_WIDTH,MIN-HALF_WIDTH+Number.MIN_VALUE,startPos];return interpolate(handlerOffset.value,inputRange,outputRange,Extrapolation.CLAMP);}return handlerOffset.value+size*index;}return Number.MAX_SAFE_INTEGER;}" };
arg5.useOffsetX = function useOffsetX(merged, visibleRanges) {
  let dataLength;
  let type;
  const handlerOffset = merged.handlerOffset;
  const arg6 = handlerOffset;
  const index = merged.index;
  let closure_2 = index;
  const size = merged.size;
  const loop = merged.loop;
  ({ dataLength, type } = merged);
  let str = "positive";
  if (undefined !== type) {
    str = type;
  }
  let viewCount = merged.viewCount;
  const diff = dataLength - 1;
  const result = size * dataLength;
  const result1 = 0.5 * size;
  if (null == viewCount) {
    const _Math = Math;
    viewCount = Math.round((dataLength - 1) / 2);
  }
  let diff1 = viewCount;
  if ("positive" !== str) {
    diff1 = diff - viewCount;
  }
  let result2 = size * index;
  let result3 = result2;
  if (index > diff1) {
    result3 = (index - dataLength) * size;
    result2 = result3;
  }
  const result4 = diff1 * size;
  const result5 = -diff - diff1 * size;
  let obj = visibleRanges(arg6[0]);
  /* worklet (recovered source) */ function pnpm_useOffsetXTs1(){const{visibleRanges,index,loop,TOTAL_WIDTH,MIN,HALF_WIDTH,startPos,MAX,interpolate,handlerOffset,Extrapolation,size}=this.__closure;const{negativeRange:negativeRange,positiveRange:positiveRange}=visibleRanges.value;if(index>=negativeRange[0]&&index<=negativeRange[1]||index>=positiveRange[0]&&index<=positiveRange[1]){if(loop){const inputRange=[-TOTAL_WIDTH,MIN-HALF_WIDTH-startPos-Number.MIN_VALUE,MIN-HALF_WIDTH-startPos,0,MAX+HALF_WIDTH-startPos,MAX+HALF_WIDTH-startPos+Number.MIN_VALUE,TOTAL_WIDTH];const outputRange=[startPos,MAX+HALF_WIDTH-Number.MIN_VALUE,MIN-HALF_WIDTH,startPos,MAX+HALF_WIDTH,MIN-HALF_WIDTH+Number.MIN_VALUE,startPos];return interpolate(handlerOffset.value,inputRange,outputRange,Extrapolation.CLAMP);}return handlerOffset.value+size*index;}return Number.MAX_SAFE_INTEGER;}
  obj = { visibleRanges, index, loop, TOTAL_WIDTH: result, MIN: result5, HALF_WIDTH: result1, startPos: result2, MAX: result4, interpolate: visibleRanges(arg6[0]).interpolate, handlerOffset, Extrapolation: visibleRanges(arg6[0]).Extrapolation, size };
  pnpm_useOffsetXTs1.__closure = obj;
  pnpm_useOffsetXTs1.__workletHash = 6313251538875;
  pnpm_useOffsetXTs1.__initData = closure_2;
  const items = [loop, dataLength, viewCount, str, size, visibleRanges, handlerOffset];
  return obj.useDerivedValue(pnpm_useOffsetXTs1, items);
};
