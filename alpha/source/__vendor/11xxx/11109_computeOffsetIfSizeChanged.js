// Module ID: 11109
// Function ID: 11110
// Name: computeOffsetIfSizeChanged
// Dependencies: []
// Exports: computeOffsetIfSizeChanged

// Module 11109 (computeOffsetIfSizeChanged)
function computeOffsetIfSizeChanged(handlerOffset) {
  return handlerOffset.handlerOffset / handlerOffset.prevSize * handlerOffset.size;
}
computeOffsetIfSizeChanged.__closure = {};
computeOffsetIfSizeChanged.__workletHash = 15588362707928;
computeOffsetIfSizeChanged.__initData = { code: "function computeOffsetIfSizeChanged_Pnpm_computeOffsetIfSizeChangedTs1(params){const{handlerOffset:handlerOffset,prevSize:prevSize,size:size}=params;return handlerOffset/prevSize*size;}" };

export { computeOffsetIfSizeChanged };
