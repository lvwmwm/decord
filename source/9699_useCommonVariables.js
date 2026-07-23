// Module ID: 9699
// Function ID: 75440
// Name: useCommonVariables
// Dependencies: [1582, 9700, 9701, 9702]

// Module 9699 (useCommonVariables)
const require = arg1;
const dependencyMap = arg6;
let closure_2 = { code: "function pnpm_useCommonVariablesTs1(){const{prevDataLength,dataLength,loop}=this.__closure;const previousLength=prevDataLength.value;const currentLength=dataLength;const isLengthChanged=previousLength!==currentLength;const shouldComputed=isLengthChanged&&loop;if(shouldComputed)prevDataLength.value=dataLength;return{shouldComputed:shouldComputed,previousLength:previousLength,currentLength:currentLength};}" };
let closure_3 = { code: "function pnpm_useCommonVariablesTs2({shouldComputed:shouldComputed,previousLength:previousLength,currentLength:currentLength}){const{handlerOffsetDirection,handlerOffset,computeOffsetIfDataChanged,size}=this.__closure;if(shouldComputed){const direction=handlerOffsetDirection(handlerOffset);handlerOffset.value=computeOffsetIfDataChanged({direction:direction,previousLength:previousLength,currentLength:currentLength,size:size,handlerOffset:handlerOffset.value});}}" };
let closure_4 = { code: "function pnpm_useCommonVariablesTs3(){const{prevSize,size}=this.__closure;const previousSize=prevSize.value;const isSizeChanged=previousSize!==size;const shouldComputed=isSizeChanged;if(shouldComputed)prevSize.value=size;return{shouldComputed:shouldComputed,previousSize:previousSize,size:size};}" };
let closure_5 = { code: "function pnpm_useCommonVariablesTs4({shouldComputed:shouldComputed,previousSize:previousSize,size:size}){const{handlerOffset,computeOffsetIfSizeChanged}=this.__closure;if(shouldComputed){handlerOffset.value=computeOffsetIfSizeChanged({handlerOffset:handlerOffset.value,prevSize:previousSize,size:size});}}" };
arg5.useCommonVariables = function useCommonVariables(initProps) {
  let dataLength;
  let defaultScrollOffsetValue;
  let loop;
  let width;
  ({ width, dataLength } = initProps);
  ({ defaultScrollOffsetValue, loop } = initProps);
  if (initProps.vertical) {
    width = initProps.height;
  }
  let obj = dataLength(loop[0]);
  let sharedValue = obj.useSharedValue(-Math.abs(initProps.defaultIndex * width));
  if (null != defaultScrollOffsetValue) {
    sharedValue = defaultScrollOffsetValue;
  }
  let obj1 = dataLength(loop[0]);
  const sharedValue1 = obj1.useSharedValue(dataLength);
  let obj2 = dataLength(loop[0]);
  const sharedValue2 = obj2.useSharedValue(width);
  const tmp = -Math.abs(initProps.defaultIndex * width);
  /* worklet (recovered source) */ function pnpm_useCommonVariablesTs1(){const{prevDataLength,dataLength,loop}=this.__closure;const previousLength=prevDataLength.value;const currentLength=dataLength;const isLengthChanged=previousLength!==currentLength;const shouldComputed=isLengthChanged&&loop;if(shouldComputed)prevDataLength.value=dataLength;return{shouldComputed:shouldComputed,previousLength:previousLength,currentLength:currentLength};}
  pnpm_useCommonVariablesTs1.__closure = { prevDataLength: sharedValue1, dataLength, loop };
  pnpm_useCommonVariablesTs1.__workletHash = 16900133248154;
  pnpm_useCommonVariablesTs1.__initData = width;
  /* worklet (recovered source) */ function pnpm_useCommonVariablesTs2({shouldComputed:shouldComputed,previousLength:previousLength,currentLength:currentLength}){const{handlerOffsetDirection,handlerOffset,computeOffsetIfDataChanged,size}=this.__closure;if(shouldComputed){const direction=handlerOffsetDirection(handlerOffset);handlerOffset.value=computeOffsetIfDataChanged({direction:direction,previousLength:previousLength,currentLength:currentLength,size:size,handlerOffset:handlerOffset.value});}}
  obj = { handlerOffsetDirection: dataLength(loop[1]).handlerOffsetDirection, handlerOffset: sharedValue, computeOffsetIfDataChanged: dataLength(loop[2]).computeOffsetIfDataChanged, size: width };
  pnpm_useCommonVariablesTs2.__closure = obj;
  pnpm_useCommonVariablesTs2.__workletHash = 6990374823872;
  pnpm_useCommonVariablesTs2.__initData = sharedValue;
  const items = [dataLength, loop];
  const animatedReaction = dataLength(loop[0]).useAnimatedReaction(pnpm_useCommonVariablesTs1, pnpm_useCommonVariablesTs2, items);
  const obj4 = dataLength(loop[0]);
  /* worklet (recovered source) */ function pnpm_useCommonVariablesTs3(){const{prevSize,size}=this.__closure;const previousSize=prevSize.value;const isSizeChanged=previousSize!==size;const shouldComputed=isSizeChanged;if(shouldComputed)prevSize.value=size;return{shouldComputed:shouldComputed,previousSize:previousSize,size:size};}
  obj = { prevSize: sharedValue2, size: width };
  pnpm_useCommonVariablesTs3.__closure = obj;
  pnpm_useCommonVariablesTs3.__workletHash = 10373775645111;
  pnpm_useCommonVariablesTs3.__initData = sharedValue1;
  /* worklet (recovered source) */ function pnpm_useCommonVariablesTs4({shouldComputed:shouldComputed,previousSize:previousSize,size:size}){const{handlerOffset,computeOffsetIfSizeChanged}=this.__closure;if(shouldComputed){handlerOffset.value=computeOffsetIfSizeChanged({handlerOffset:handlerOffset.value,prevSize:previousSize,size:size});}}
  obj1 = { handlerOffset: sharedValue, computeOffsetIfSizeChanged: dataLength(loop[3]).computeOffsetIfSizeChanged };
  pnpm_useCommonVariablesTs4.__closure = obj1;
  pnpm_useCommonVariablesTs4.__workletHash = 12618693189041;
  pnpm_useCommonVariablesTs4.__initData = sharedValue2;
  const items1 = [width];
  const animatedReaction1 = dataLength(loop[0]).useAnimatedReaction(pnpm_useCommonVariablesTs3, pnpm_useCommonVariablesTs4, items1);
  obj2 = { size: width, validLength: dataLength - 1, handlerOffset: sharedValue };
  return obj2;
};
