// Module ID: 15552
// Function ID: 15553
// Name: VEVOOSlider
// Dependencies: [19, 21, 4836, 1364, 576, 7726, 2]

// Module 15552 (VEVOOSlider)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import _modDef7726 from "module_7726" /* 7726 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
createStyles = createStyles.createStyles;
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = nativeDefault.space.PX_8;
}
let obj = { slider: { marginTop: num } };
let closure_4 = createStyles(obj);
const memoResult = react.memo(function VEVOOSlider(disabledOpacity) {
  let current;
  let fn;
  let initialValue;
  let onValueChange;
  let flag = disabledOpacity.disabledOpacity;
  const disabled = disabledOpacity.disabled;
  if (flag === undefined) {
    flag = false;
  }
  ({ initialValue, onValueChange } = disabledOpacity);
  const items = [closure_4().slider, ];
  let num = 1;
  closure_4();
  const tmp2 = jsx;
  const tmp5 = _modDef7726;
  if (flag) {
    num = 0.5;
  }
  items[1] = { opacity: num };
  const obj = { style: items, disabled, value: current, minimumValue: 0, maximumValue: 1, minimumTrackTintColor: nativeDefault.unsafe_rawColors.BRAND_500, maximumTrackTintColor: nativeDefault.unsafe_rawColors.PRIMARY_400, onValueChange, onResponderGrant: fn };
  current = initialValue.current;
  fn = undefined;
  const obj2 = PlatformUtils;
  if (obj2.isAndroid()) {
    fn = () => true;
  }
  return tmp2(tmp5, obj);
});
const result = size.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOSlider.tsx");

export default memoResult;
