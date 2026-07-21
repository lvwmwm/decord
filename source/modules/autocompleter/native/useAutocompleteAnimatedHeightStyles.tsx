// Module ID: 11425
// Function ID: 88914
// Name: useAutocompleteAnimatedHeightStyles
// Dependencies: []
// Exports: default

// Module 11425 (useAutocompleteAnimatedHeightStyles)
let closure_2 = { code: "function useAutocompleteAnimatedHeightStylesTsx1(){const{withTiming,height,timingStandard,isFrozenSharedValue}=this.__closure;return{height:withTiming(height,timingStandard),display:!isFrozenSharedValue.get()?'flex':'none'};}" };
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/autocompleter/native/useAutocompleteAnimatedHeightStyles.tsx");

export default function useAutocompleteAnimatedHeightStyles(height) {
  const require = height;
  let obj = require(dependencyMap[0]);
  const isScreenIndexFrozenSharedValue = obj.useIsScreenIndexFrozenSharedValue(arg1);
  const dependencyMap = isScreenIndexFrozenSharedValue;
  const fn = function s() {
    const obj = { height: arg0(isScreenIndexFrozenSharedValue[2]).withTiming(arg0, arg0(isScreenIndexFrozenSharedValue[3]).timingStandard) };
    let str = "flex";
    if (isScreenIndexFrozenSharedValue.get()) {
      str = "none";
    }
    obj.display = str;
    return obj;
  };
  obj = { withTiming: require(dependencyMap[2]).withTiming, height, timingStandard: require(dependencyMap[3]).timingStandard, isFrozenSharedValue: isScreenIndexFrozenSharedValue };
  fn.__closure = obj;
  fn.__workletHash = 3862216441966;
  fn.__initData = closure_2;
  return require(dependencyMap[1]).useAnimatedStyle(fn);
};
