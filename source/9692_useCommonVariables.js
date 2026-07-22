// Module ID: 9692
// Function ID: 75399
// Name: useCommonVariables
// Dependencies: [9717, 9719, 27, 31]

// Module 9692 (useCommonVariables)
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
  const arg1 = dataLength;
  ({ defaultScrollOffsetValue, loop } = initProps);
  const arg6 = loop;
  if (initProps.vertical) {
    width = initProps.height;
  }
  let closure_2 = width;
  let obj = arg1(arg6[0]);
  let sharedValue = obj.useSharedValue(-Math.abs(initProps.defaultIndex * width));
  if (null != defaultScrollOffsetValue) {
    sharedValue = defaultScrollOffsetValue;
  }
  let closure_3 = sharedValue;
  let obj1 = arg1(arg6[0]);
  const sharedValue1 = obj1.useSharedValue(dataLength);
  let closure_4 = sharedValue1;
  let obj2 = arg1(arg6[0]);
  const sharedValue2 = obj2.useSharedValue(width);
  let closure_5 = sharedValue2;
  const tmp = -Math.abs(initProps.defaultIndex * width);
  /* worklet (recovered source) */ function pnpm_useCommonVariablesTs1(){const{prevDataLength,dataLength,loop}=this.__closure;const previousLength=prevDataLength.value;const currentLength=dataLength;const isLengthChanged=previousLength!==currentLength;const shouldComputed=isLengthChanged&&loop;if(shouldComputed)prevDataLength.value=dataLength;return{shouldComputed:shouldComputed,previousLength:previousLength,currentLength:currentLength};}
  pnpm_useCommonVariablesTs1.__closure = { prevDataLength: sharedValue1, dataLength, loop };
  pnpm_useCommonVariablesTs1.__workletHash = 16900133248154;
  pnpm_useCommonVariablesTs1.__initData = closure_2;
  /* worklet (recovered source) */ function pnpm_useCommonVariablesTs2({shouldComputed:shouldComputed,previousLength:previousLength,currentLength:currentLength}){const{handlerOffsetDirection,handlerOffset,computeOffsetIfDataChanged,size}=this.__closure;if(shouldComputed){const direction=handlerOffsetDirection(handlerOffset);handlerOffset.value=computeOffsetIfDataChanged({direction:direction,previousLength:previousLength,currentLength:currentLength,size:size,handlerOffset:handlerOffset.value});}}
  obj = { handlerOffsetDirection: arg1(arg6[1]).handlerOffsetDirection, handlerOffset: sharedValue, computeOffsetIfDataChanged: arg1(arg6[2]).computeOffsetIfDataChanged, size: width };
  pnpm_useCommonVariablesTs2.__closure = obj;
  pnpm_useCommonVariablesTs2.__workletHash = 6990374823872;
  pnpm_useCommonVariablesTs2.__initData = closure_3;
  const items = [dataLength, loop];
  const animatedReaction = arg1(arg6[0]).useAnimatedReaction(pnpm_useCommonVariablesTs1, pnpm_useCommonVariablesTs2, items);
  const obj4 = arg1(arg6[0]);
  /* worklet (recovered source) */ function pnpm_useCommonVariablesTs3(){const{prevSize,size}=this.__closure;const previousSize=prevSize.value;const isSizeChanged=previousSize!==size;const shouldComputed=isSizeChanged;if(shouldComputed)prevSize.value=size;return{shouldComputed:shouldComputed,previousSize:previousSize,size:size};}
  obj = { prevSize: sharedValue2, size: width };
  pnpm_useCommonVariablesTs3.__closure = obj;
  pnpm_useCommonVariablesTs3.__workletHash = 10373775645111;
  pnpm_useCommonVariablesTs3.__initData = closure_4;
  /* worklet (recovered source) */ function pnpm_useCommonVariablesTs4({shouldComputed:shouldComputed,previousSize:previousSize,size:size}){const{handlerOffset,computeOffsetIfSizeChanged}=this.__closure;if(shouldComputed){handlerOffset.value=computeOffsetIfSizeChanged({handlerOffset:handlerOffset.value,prevSize:previousSize,size:size});}}
  obj1 = { handlerOffset: sharedValue, computeOffsetIfSizeChanged: arg1(arg6[3]).computeOffsetIfSizeChanged };
  pnpm_useCommonVariablesTs4.__closure = obj1;
  pnpm_useCommonVariablesTs4.__workletHash = 12618693189041;
  pnpm_useCommonVariablesTs4.__initData = closure_5;
  const items1 = [width];
  const animatedReaction1 = arg1(arg6[0]).useAnimatedReaction(pnpm_useCommonVariablesTs3, pnpm_useCommonVariablesTs4, items1);
  obj2 = { size: width, validLength: dataLength - 1, handlerOffset: sharedValue };
  return obj2;
};
