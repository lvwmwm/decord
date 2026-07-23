// Module ID: 1631
// Function ID: 18241
// Name: isSharedValue
// Dependencies: []

// Module 1631 (isSharedValue)
let closure_0 = { code: "function isSharedValue_Pnpm_isSharedValueTs1(value){return(value===null||value===void 0?void 0:value._isReanimatedSharedValue)===true;}" };
arg5.isSharedValue = (() => {
  function isSharedValue(iter) {
    let prop;
    if (null != iter) {
      prop = iter._isReanimatedSharedValue;
    }
    return true === prop;
  }
  isSharedValue.__closure = {};
  isSharedValue.__workletHash = 8230330706259;
  isSharedValue.__initData = closure_0;
  return isSharedValue;
})();
