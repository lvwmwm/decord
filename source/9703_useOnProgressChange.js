// Module ID: 9703
// Function ID: 75431
// Name: useOnProgressChange
// Dependencies: []

// Module 9703 (useOnProgressChange)
let closure_2 = { code: "function pnpm_useOnProgressChangeTs1(){const{offsetX}=this.__closure;return offsetX.value;}" };
let closure_3 = { code: "function pnpm_useOnProgressChangeTs2(_value){const{computedOffsetXValueWithAutoFillData,rawDataLength,size,autoFillData,loop,onProgressChange,isFunc,runOnJS}=this.__closure;let value=computedOffsetXValueWithAutoFillData({value:_value,rawDataLength:rawDataLength,size:size,autoFillData:autoFillData,loop:loop});if(!loop){value=Math.max(-((rawDataLength-1)*size),Math.min(value,0));}let absoluteProgress=Math.abs(value/size);if(value>0)absoluteProgress=rawDataLength-absoluteProgress;if(onProgressChange){if(isFunc)runOnJS(onProgressChange)(value,absoluteProgress);else onProgressChange.value=absoluteProgress;}}" };
arg5.useOnProgressChange = function useOnProgressChange(autoFillData) {
  autoFillData = autoFillData.autoFillData;
  const arg1 = autoFillData;
  const loop = autoFillData.loop;
  const arg6 = loop;
  const offsetX = autoFillData.offsetX;
  let closure_2 = offsetX;
  const size = autoFillData.size;
  let closure_3 = size;
  const rawDataLength = autoFillData.rawDataLength;
  const onProgressChange = autoFillData.onProgressChange;
  const tmp = "function" === typeof onProgressChange;
  let obj = arg1(arg6[0]);
  /* worklet (recovered source) */ function pnpm_useOnProgressChangeTs1(){const{offsetX}=this.__closure;return offsetX.value;}
  pnpm_useOnProgressChangeTs1.__closure = { offsetX };
  pnpm_useOnProgressChangeTs1.__workletHash = 355184931449;
  pnpm_useOnProgressChangeTs1.__initData = closure_2;
  /* worklet (recovered source) */ function pnpm_useOnProgressChangeTs2(_value){const{computedOffsetXValueWithAutoFillData,rawDataLength,size,autoFillData,loop,onProgressChange,isFunc,runOnJS}=this.__closure;let value=computedOffsetXValueWithAutoFillData({value:_value,rawDataLength:rawDataLength,size:size,autoFillData:autoFillData,loop:loop});if(!loop){value=Math.max(-((rawDataLength-1)*size),Math.min(value,0));}let absoluteProgress=Math.abs(value/size);if(value>0)absoluteProgress=rawDataLength-absoluteProgress;if(onProgressChange){if(isFunc)runOnJS(onProgressChange)(value,absoluteProgress);else onProgressChange.value=absoluteProgress;}}
  obj = { computedOffsetXValueWithAutoFillData: arg1(arg6[1]).computedOffsetXValueWithAutoFillData, rawDataLength, size, autoFillData, loop, onProgressChange, isFunc: tmp, runOnJS: arg1(arg6[0]).runOnJS };
  pnpm_useOnProgressChangeTs2.__closure = obj;
  pnpm_useOnProgressChangeTs2.__workletHash = 12473781608319;
  pnpm_useOnProgressChangeTs2.__initData = closure_3;
  const items = [loop, autoFillData, rawDataLength, onProgressChange, size];
  const animatedReaction = obj.useAnimatedReaction(pnpm_useOnProgressChangeTs1, pnpm_useOnProgressChangeTs2, items);
};
