// Module ID: 11929
// Function ID: 11930
// Name: useAutocompleteAnimatedHeightStyles
// Dependencies: [4311, 4187, 4449, 4452, 2]
// Exports: default

// Module 11929 (useAutocompleteAnimatedHeightStyles)
import set from "set" /* 2 */;

let closure_2 = { code: "function useAutocompleteAnimatedHeightStylesTsx1(){const{withTiming,height,timingStandard,isFrozenSharedValue}=this.__closure;return{height:withTiming(height,timingStandard),display:!isFrozenSharedValue.get()?'flex':'none'};}" };
const result = set.fileFinishedImporting("modules/autocompleter/native/useAutocompleteAnimatedHeightStyles.tsx");

export default function useAutocompleteAnimatedHeightStyles(height) {
  const _require = height;
  let obj = _require(isScreenIndexFrozenSharedValue[0]);
  isScreenIndexFrozenSharedValue = obj.useIsScreenIndexFrozenSharedValue(arg1);
  const fn = function s() {
    const obj = { height: height(isScreenIndexFrozenSharedValue[2]).withTiming(height, height(isScreenIndexFrozenSharedValue[3]).timingStandard), display: null };
    let str = "flex";
    if (isScreenIndexFrozenSharedValue.get()) {
      str = "none";
    }
    obj[1] = str;
    return obj;
  };
  obj = { withTiming: _require(isScreenIndexFrozenSharedValue[2]).withTiming, height, timingStandard: _require(isScreenIndexFrozenSharedValue[3]).timingStandard, isFrozenSharedValue: isScreenIndexFrozenSharedValue };
  fn.__closure = obj;
  fn.__workletHash = 3862216441966;
  fn.__initData = closure_2;
  return _require(isScreenIndexFrozenSharedValue[1]).useAnimatedStyle(fn);
};
