// Module ID: 15566
// Function ID: 118765
// Name: t
// Dependencies: []
// Exports: default

// Module 15566 (t)
const _module = require(dependencyMap[0]);
const isAndroidResult = _module.isAndroid();
const fn = function t(arg0) {
  let keyboardHeight;
  let screenBottomOffset;
  ({ screenBottomOffset, keyboardHeight } = arg0);
  let sum = screenBottomOffset;
  if (keyboardHeight > 0) {
    let num = 0;
    if (!isAndroidResult) {
      num = keyboardHeight;
    }
    sum = screenBottomOffset + (num - tmp);
  }
  const obj = { bottomOffset: sum };
  return obj;
};
fn.__closure = { IS_ANDROID: isAndroidResult };
fn.__workletHash = 9166664651792;
fn.__initData = { code: "function getAdjustedBottomOffsets_getAdjustedBottomOffsetsTsx1({screenBottomOffset:screenBottomOffset,safeAreaBottom:safeAreaBottom,keyboardHeight:keyboardHeight}){const{IS_ANDROID}=this.__closure;let bottomOffset=screenBottomOffset;if(keyboardHeight>0){bottomOffset+=(IS_ANDROID?0:keyboardHeight)-safeAreaBottom;}return{bottomOffset:bottomOffset};}" };
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/panels/morphable/native/getAdjustedBottomOffsets.tsx");

export default fn;
