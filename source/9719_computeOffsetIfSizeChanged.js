// Module ID: 9719
// Function ID: 9720
// Name: computeOffsetIfSizeChanged
// Dependencies: []

// Module 9719 (computeOffsetIfSizeChanged)
function computeOffsetIfSizeChanged(handlerOffset) {
  return handlerOffset.handlerOffset / handlerOffset.prevSize * handlerOffset.size;
}
computeOffsetIfSizeChanged.__closure = {};
computeOffsetIfSizeChanged.__workletHash = 15588362707928;
computeOffsetIfSizeChanged.__initData = { code: "function computeOffsetIfSizeChanged_Pnpm_computeOffsetIfSizeChangedTs1(params){const{handlerOffset:handlerOffset,prevSize:prevSize,size:size}=params;return handlerOffset/prevSize*size;}" };
arg5.computeOffsetIfSizeChanged = computeOffsetIfSizeChanged;
