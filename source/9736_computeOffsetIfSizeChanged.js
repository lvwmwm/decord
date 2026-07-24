// Module ID: 9736
// Function ID: 75666
// Name: computeOffsetIfSizeChanged
// Dependencies: []

// Module 9736 (computeOffsetIfSizeChanged)
let closure_0 = { code: "function computeOffsetIfSizeChanged_Pnpm_computeOffsetIfSizeChangedTs1(params){const{handlerOffset:handlerOffset,prevSize:prevSize,size:size}=params;return handlerOffset/prevSize*size;}" };
arg5.computeOffsetIfSizeChanged = (() => {
  function computeOffsetIfSizeChanged(handlerOffset) {
    return handlerOffset.handlerOffset / handlerOffset.prevSize * handlerOffset.size;
  }
  computeOffsetIfSizeChanged.__closure = {};
  computeOffsetIfSizeChanged.__workletHash = 15588362707928;
  computeOffsetIfSizeChanged.__initData = closure_0;
  return computeOffsetIfSizeChanged;
})();
