// Module ID: 1687
// Function ID: 1688
// Dependencies: []
// Exports: isSharedValue

// Module 1687
function isSharedValue(iter) {
  let prop;
  if (iter != null) {
    prop = iter._isReanimatedSharedValue;
  }
  return true === prop;
}
isSharedValue.__closure = {};
isSharedValue.__workletHash = 8230330706259;
isSharedValue.__initData = { code: "function isSharedValue_Pnpm_isSharedValueTs1(value){return(value===null||value===void 0?void 0:value._isReanimatedSharedValue)===true;}" };

export { isSharedValue };
