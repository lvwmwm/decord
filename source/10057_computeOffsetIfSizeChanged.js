// Module ID: 10057
// Function ID: 10058
// Name: computeOffsetIfSizeChanged
// Dependencies: []

// Module 10057 (computeOffsetIfSizeChanged)
function computeOffsetIfSizeChanged(handlerOffset) {
  return handlerOffset.handlerOffset / handlerOffset.prevSize * handlerOffset.size;
}
computeOffsetIfSizeChanged.__closure = {};
computeOffsetIfSizeChanged.__workletHash = 15588362707928;
computeOffsetIfSizeChanged.__initData = { code: "function computeOffsetIfSizeChanged_Pnpm_computeOffsetIfSizeChangedTs1(params){const{handlerOffset:handlerOffset,prevSize:prevSize,size:size}=params;return handlerOffset/prevSize*size;}" };
arg5.computeOffsetIfSizeChanged = computeOffsetIfSizeChanged;
