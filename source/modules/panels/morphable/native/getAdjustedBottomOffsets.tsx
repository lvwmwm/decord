// Module ID: 15694
// Function ID: 121020
// Name: t
// Dependencies: [477, 2]
// Exports: default

// Module 15694 (t)
import set from "set";
import set from "set";

set = set.isAndroid();
const fn = function t(arg0) {
  let keyboardHeight;
  let screenBottomOffset;
  ({ screenBottomOffset, keyboardHeight } = arg0);
  let sum = screenBottomOffset;
  if (keyboardHeight > 0) {
    let num = 0;
    if (!set) {
      num = keyboardHeight;
    }
    sum = screenBottomOffset + (num - tmp);
  }
  const obj = { bottomOffset: sum };
  return obj;
};
fn.__closure = { IS_ANDROID: set };
fn.__workletHash = 9166664651792;
fn.__initData = { code: "function getAdjustedBottomOffsets_getAdjustedBottomOffsetsTsx1({screenBottomOffset:screenBottomOffset,safeAreaBottom:safeAreaBottom,keyboardHeight:keyboardHeight}){const{IS_ANDROID}=this.__closure;let bottomOffset=screenBottomOffset;if(keyboardHeight>0){bottomOffset+=(IS_ANDROID?0:keyboardHeight)-safeAreaBottom;}return{bottomOffset:bottomOffset};}" };
const result = set.fileFinishedImporting("modules/panels/morphable/native/getAdjustedBottomOffsets.tsx");

export default fn;
