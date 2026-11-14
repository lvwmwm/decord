// Module ID: 14809
// Function ID: 14810
// Name: useAutocompleteAnimatedHeightStyles
// Dependencies: [5502, 1655, 5548, 5551, 2]
// Exports: default

// Module 14809 (useAutocompleteAnimatedHeightStyles)
import _mod1655 from "module_1655" /* 1655 */;
import ScreenIndexFrozen from "ScreenIndexFrozen" /* 5502 */;
import timing_timing from "timing/timing" /* 5548 */;
import timingPresets from "timingPresets" /* 5551 */;
import size from "module_2" /* 2 */;

let closure_2 = { code: "(function useAutocompleteAnimatedHeightStylesTsx1(){let[withTiming,height,timingStandard,isFrozenSharedValue]=this.__closure;return{height:withTiming(height,timingStandard),display:!isFrozenSharedValue.get()?'flex':'none'};})" };
const result = size.fileFinishedImporting("modules/autocompleter/native/useAutocompleteAnimatedHeightStyles.tsx");

export default function useAutocompleteAnimatedHeightStyles(arg0, arg1) {
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let obj = ScreenIndexFrozen;
  const isScreenIndexFrozenSharedValue = obj.useIsScreenIndexFrozenSharedValue(arg1);
  const items = [closure_2, , , , ];
  const useAnimatedStyle = _mod1655.useAnimatedStyle;
  _mod1655;
  items[1] = timing_timing.withTiming;
  items[2] = arg0;
  items[3] = timingPresets.timingStandard;
  items[4] = isScreenIndexFrozenSharedValue;
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp3, tmp4, tmp5, tmp6, tmp7] = items;
  function useAutocompleteAnimatedHeightStylesTsx1() {
    let str;
    const obj = { height: _undefined(c1, c2), display: str };
    str = "flex";
    if (_undefined2.get()) {
      str = "none";
    }
    return obj;
  }
  const items1 = [tmp4, tmp5, tmp6, tmp7];
  useAutocompleteAnimatedHeightStylesTsx1.__closure = items1;
  useAutocompleteAnimatedHeightStylesTsx1.__workletHash = 1718162287415;
  useAutocompleteAnimatedHeightStylesTsx1.__initData = tmp3;
  return useAnimatedStyle(useAutocompleteAnimatedHeightStylesTsx1);
};
