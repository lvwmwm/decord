// Module ID: 1751
// Function ID: 1752
// Dependencies: []
// Exports: isShareable

// Module 1751
let tmp2;
const items = [{ code: "(function isShareable_Pnpm_isShareableTs1(value){return typeof value==='object'&&value!==null&&!!value.__shareableRef;})" }];
[tmp2] = items;
function isShareable(__shareableRef) {
  __shareableRef = typeof __shareableRef === "object";
  if (typeof __shareableRef === "object") {
    __shareableRef = null !== __shareableRef;
  }
  if (__shareableRef) {
    __shareableRef = __shareableRef.__shareableRef;
  }
  return __shareableRef;
}
isShareable.__workletHash = 12626032708700;
isShareable.__initData = tmp2;

export { isShareable };
