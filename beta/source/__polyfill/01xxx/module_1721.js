// Module ID: 1721
// Function ID: 1722
// Dependencies: []
// Exports: isWorkletFunction

// Module 1721
let tmp2;
const items = [{ code: "(function isWorkletFunction_Pnpm_workletFunctionTs1(value){return(typeof value==='function'&&!!value.__workletHash);})" }];
[tmp2] = items;
function isWorkletFunction(initializer) {
  let __workletHash = typeof initializer === "function";
  if (typeof initializer === "function") {
    __workletHash = initializer.__workletHash;
  }
  return __workletHash;
}
isWorkletFunction.__workletHash = 10543175955225;
isWorkletFunction.__initData = tmp2;

export { isWorkletFunction };
