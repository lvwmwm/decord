// Module ID: 17966
// Function ID: 17967
// Name: VEVOOSlider
// Dependencies: [19, 17, 21, 5014, 1375, 575, 15853, 2]

// Module 17966 (VEVOOSlider)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5014 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
createStyles = createStyles.createStyles;
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = nativeDefault.space.PX_8;
}
const obj = { slider: { marginTop: num } };
let closure_4 = createStyles(obj);
const memoResult = react.memo(function VEVOOSlider(disabledOpacity) {
  let accessibilityLabel;
  let initialValue;
  let onValueChange;
  let flag = disabledOpacity.disabledOpacity;
  const disabled = disabledOpacity.disabled;
  if (flag === undefined) {
    flag = false;
  }
  ({ initialValue, onValueChange, accessibilityLabel } = disabledOpacity);
  const items = [closure_4().slider, ];
  let num = 1;
  if (flag) {
    num = 0.5;
  }
  items[1] = { opacity: num };
  return <tmp2 style={items}>{null}</tmp2>;
});
const result = size.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOSlider.tsx");

export default memoResult;
