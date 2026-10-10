// Module ID: 16324
// Function ID: 16325
// Name: VEVOOSlider
// Dependencies: [19, 21, 5092, 1382, 587, 558, 576, 8404, 2]

// Module 16324 (VEVOOSlider)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef8404 from "module_8404" /* 8404 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5092 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VEVOOSlider(initialValue) {
  let disabled;
  let disabledOpacity;
  let onValueChange;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(11);
  ({ disabled, disabledOpacity, onValueChange } = initialValue);
  let tmp4 = undefined !== disabledOpacity;
  initialValue = initialValue.initialValue;
  if (tmp4) {
    tmp4 = disabledOpacity;
  }
  const tmp5 = closure_4();
  let num = 1;
  if (tmp4) {
    num = 0.5;
  }
  if (cResult[0] !== num) {
    const obj2 = { opacity: num };
    cResult[0] = num;
    cResult[1] = obj2;
    tmp6 = obj2;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === tmp5.slider) {
    let tmp7;
    let tmp10;
    if (cResult[3] === tmp6) {
      tmp7 = cResult[4];
    }
    const current = initialValue.current;
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      let fn;
      const tmpResult = PlatformUtils;
      if (tmpResult.isAndroid()) {
        fn = () => true;
      }
      cResult[5] = fn;
      tmp10 = fn;
    } else {
      tmp10 = cResult[5];
    }
    if (cResult[6] === disabled) {
      if (cResult[7] === onValueChange) {
        if (cResult[8] === tmp7) {
          let tmp11;
          if (cResult[9] === current) {
            tmp11 = cResult[10];
          }
          return tmp11;
        }
      }
    }
    _modDef8404;
    const tmp15 = <tmp14 style={tmp7} disabled={disabled} value={current} minimumValue={0} maximumValue={1} minimumTrackTintColor={nativeDefault.unsafe_rawColors.BRAND_500} maximumTrackTintColor={nativeDefault.unsafe_rawColors.PRIMARY_400} onValueChange={onValueChange} onResponderGrant={tmp10} />;
    cResult[6] = disabled;
    cResult[7] = onValueChange;
    cResult[8] = tmp7;
    cResult[9] = current;
    cResult[10] = tmp15;
    tmp11 = tmp15;
  }
  const items = [tmp5.slider, tmp6];
  cResult[2] = tmp5.slider;
  cResult[3] = tmp6;
  cResult[4] = items;
  tmp7 = items;
}) : (function VEVOOSlider(disabledOpacity) {
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
  const tmp5 = _modDef8404;
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
}));
const result = size.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOSlider.tsx");

export default memoResult;
