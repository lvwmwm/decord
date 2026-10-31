// Module ID: 13942
// Function ID: 13943
// Name: useAutocompleteAnimatedHeightStyles
// Dependencies: [5208, 5095, 5254, 5257, 2]
// Exports: default

// Module 13942 (useAutocompleteAnimatedHeightStyles)
import timing from "timing" /* 5254 */;
import timingPresets from "timingPresets" /* 5257 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const __initData = { code: "function useAutocompleteAnimatedHeightStylesTsx1(){const{withTiming,height,timingStandard,isFrozenSharedValue}=this.__closure;return{height:withTiming(height,timingStandard),display:!isFrozenSharedValue.get()?'flex':'none'};}" };
const result = size.fileFinishedImporting("modules/autocompleter/native/useAutocompleteAnimatedHeightStyles.tsx");

export default function useAutocompleteAnimatedHeightStyles(height, arg1) {
  let isScreenIndexFrozenSharedValue;
  _require = height;
  let obj = require("ScreenIndexFrozen");
  isScreenIndexFrozenSharedValue = obj.useIsScreenIndexFrozenSharedValue(arg1);
  let obj2 = require("ReanimatedRexport");
  const fn = function s() {
    let obj2;
    let str;
    const obj = { height: obj2.withTiming(height, timingPresets.timingStandard), display: str };
    str = "flex";
    obj2 = timing;
    if (isScreenIndexFrozenSharedValue.get()) {
      str = "none";
    }
    return obj;
  };
  fn.__closure = { withTiming: require("timing").withTiming, height, timingStandard: require("timingPresets").timingStandard, isFrozenSharedValue: isScreenIndexFrozenSharedValue };
  fn.__workletHash = 3862216441966;
  fn.__initData = __initData;
  ({ withTiming: require("timing").withTiming, height, timingStandard: require("timingPresets").timingStandard, isFrozenSharedValue: isScreenIndexFrozenSharedValue });
  return obj2.useAnimatedStyle(fn);
};
