// Module ID: 1770
// Function ID: 1771
// Dependencies: []
// Exports: isSharedValue

// Module 1770
let tmp2;
const items = [{ code: "(function isSharedValue_Pnpm_isSharedValueTs1(value){return(value===null||value===void 0?void 0:value._isReanimatedSharedValue)===true;})" }];
[tmp2] = items;
function isSharedValue(iter) {
  let prop;
  if (iter != null) {
    prop = iter._isReanimatedSharedValue;
  }
  return true === prop;
}
isSharedValue.__workletHash = 13980042946770;
isSharedValue.__initData = tmp2;

export { isSharedValue };
