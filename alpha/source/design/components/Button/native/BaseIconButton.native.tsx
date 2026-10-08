// Module ID: 8107
// Function ID: 8108
// Name: BaseIconButton
// Dependencies: [109, 19, 21, 5090, 5380, 4810, 5377, 558, 576, 5381, 5383, 5385, 2]

// Module 8107 (BaseIconButton)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4810 */;
import IconDefault from "Icon" /* 5377 */;
import ButtonConstants from "ButtonConstants" /* 5380 */;
import ButtonHooks from "ButtonHooks" /* 5381 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const ReanimatedRexport = ReanimatedRexport2;

let closure_2 = ["ref"];
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles((arg0, arg1) => {
  let obj;
  let obj6;
  if ("sm" === arg1) {
    obj = { paddingHorizontal: ButtonConstants.SMALL_BUTTON_PADDING, paddingVertical: ButtonConstants.SMALL_BUTTON_PADDING };
    const obj2 = { paddingHorizontal: ButtonConstants.SMALL_BUTTON_PADDING, paddingVertical: ButtonConstants.SMALL_BUTTON_PADDING };
  } else if ("md" === arg1) {
    obj = { paddingHorizontal: ButtonConstants.MEDIUM_BUTTON_PADDING, paddingVertical: ButtonConstants.MEDIUM_BUTTON_PADDING };
    const obj3 = { paddingHorizontal: ButtonConstants.MEDIUM_BUTTON_PADDING, paddingVertical: ButtonConstants.MEDIUM_BUTTON_PADDING };
  } else {
    obj = {};
    if ("lg" === arg1) {
      obj = { paddingHorizontal: ButtonConstants.LARGE_BUTTON_PADDING, paddingVertical: ButtonConstants.LARGE_BUTTON_PADDING };
      const obj4 = { paddingHorizontal: ButtonConstants.LARGE_BUTTON_PADDING, paddingVertical: ButtonConstants.LARGE_BUTTON_PADDING };
    }
  }
  const obj5 = { button: { flexShrink: 0, flexGrow: 0, alignSelf: "center" }, pill: obj6 };
  obj6 = {};
  const merged = Object.assign(obj);
  return obj5;
});
const Icon = ReanimatedRexport.createAnimatedComponent(IconDefault);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function BaseIconButton(ref) {
  let icon;
  let items2;
  let loading;
  let maxFontSizeMultiplier;
  let pillStyle;
  let scaleAmountInPx;
  let style;
  let tmp9;
  let variant;
  const obj = react2;
  const cResult = obj.c(2);
  ref = ref.ref;
  const tmp4 = _objectWithoutProperties(ref, closure_2);
  ({ variant, size, icon, scaleAmountInPx } = tmp4);
  let str = "primary";
  ({ style, pillStyle, maxFontSizeMultiplier, loading } = tmp4);
  if (undefined !== variant) {
    str = variant;
  }
  if (undefined === size) {
    size = tmp(5380).DEFAULT_BUTTON_SIZE;
  }
  let num = 4;
  if (undefined !== scaleAmountInPx) {
    num = scaleAmountInPx;
  }
  const tmp5 = closure_6(str, size);
  const tmpResult = ReanimatedRexport2;
  const sharedValue = tmpResult.useSharedValue(0);
  const tmpResult3 = ButtonHooks;
  const iconTintStyles = tmpResult3.useIconTintStyles(str, sharedValue);
  const tmpResult4 = ButtonHooks;
  const iconSizeStyles = tmpResult4.useIconSizeStyles(size, true, maxFontSizeMultiplier);
  if (cResult[0] !== size) {
    let MEDIUM_BUTTON_HEIGHT = tmp(5380).LARGE_BUTTON_HEIGHT;
    if ("sm" === size) {
      MEDIUM_BUTTON_HEIGHT = tmp(5380).SMALL_BUTTON_HEIGHT;
    } else if ("md" === size) {
      MEDIUM_BUTTON_HEIGHT = tmp(5380).MEDIUM_BUTTON_HEIGHT;
    }
    const _Math = Math;
    const bound = Math.max((tmp(5380).MINIMUM_HIT_AREA - MEDIUM_BUTTON_HEIGHT) / 2, 0);
    cResult[0] = size;
    cResult[1] = bound;
    tmp9 = bound;
  } else {
    tmp9 = cResult[1];
  }
  const BaseButton = tmp(5383).BaseButton;
  const merged = Object.assign(tmp4);
  const items = [tmp5.button, style];
  const items1 = [tmp5.pill, pillStyle];
  let str4 = "xs";
  const ButtonPill = tmp(5385).ButtonPill;
  if ("lg" === size) {
    str4 = "sm";
  }
  let tmp12Result = icon;
  if (!react.isValidElement(icon)) {
    const obj4 = { source: icon, style: items2 };
    items2 = [iconTintStyles, iconSizeStyles];
    tmp12Result = tmp12(Icon, obj4);
  }
  return <BaseButton ref={ref} style={items} pressed={sharedValue} scaleAmountInPx={num} hitSlop={tmp9}><ButtonPill style={items1} variant={str} size={size} loading={loading} loaderSize={str4} pressed={sharedValue}>{tmp12Result}</ButtonPill></BaseButton>;
}) : (function BaseIconButton(ref) {
  let icon;
  let items2;
  let loading;
  let maxFontSizeMultiplier;
  let pillStyle;
  let scaleAmountInPx;
  let style;
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const variant = merged.variant;
  let str = "primary";
  ({ style, pillStyle } = merged);
  if (undefined !== variant) {
    str = variant;
  }
  let DEFAULT_BUTTON_SIZE = merged.size;
  if (undefined === DEFAULT_BUTTON_SIZE) {
    DEFAULT_BUTTON_SIZE = ButtonConstants.DEFAULT_BUTTON_SIZE;
  }
  ({ icon, scaleAmountInPx } = merged);
  let num = 4;
  ({ maxFontSizeMultiplier, loading } = merged);
  if (undefined !== scaleAmountInPx) {
    num = scaleAmountInPx;
  }
  const tmp4 = closure_6(str, DEFAULT_BUTTON_SIZE);
  const obj = ReanimatedRexport2;
  const sharedValue = obj.useSharedValue(0);
  const obj2 = ButtonHooks;
  const iconTintStyles = obj2.useIconTintStyles(str, sharedValue);
  const obj3 = ButtonHooks;
  const iconSizeStyles = obj3.useIconSizeStyles(DEFAULT_BUTTON_SIZE, true, maxFontSizeMultiplier);
  let MEDIUM_BUTTON_HEIGHT = ButtonConstants.LARGE_BUTTON_HEIGHT;
  if ("sm" === DEFAULT_BUTTON_SIZE) {
    MEDIUM_BUTTON_HEIGHT = tmp5(5380).SMALL_BUTTON_HEIGHT;
  } else if ("md" === DEFAULT_BUTTON_SIZE) {
    MEDIUM_BUTTON_HEIGHT = tmp5(5380).MEDIUM_BUTTON_HEIGHT;
  }
  const bound = Math.max((tmp5(5380).MINIMUM_HIT_AREA - MEDIUM_BUTTON_HEIGHT) / 2, 0);
  const BaseButton = tmp5(5383).BaseButton;
  const merged1 = Object.assign(merged);
  const items = [tmp4.button, style];
  const items1 = [tmp4.pill, pillStyle];
  let str3 = "xs";
  const ButtonPill = tmp5(5385).ButtonPill;
  if ("lg" === DEFAULT_BUTTON_SIZE) {
    str3 = "sm";
  }
  let tmp11Result = icon;
  if (!react.isValidElement(icon)) {
    const obj6 = { source: icon, style: items2 };
    items2 = [iconTintStyles, iconSizeStyles];
    tmp11Result = tmp11(Icon, obj6);
  }
  return <BaseButton ref={ref} style={items} pressed={sharedValue} scaleAmountInPx={num} hitSlop={bound}><ButtonPill style={items1} variant={str} size={DEFAULT_BUTTON_SIZE} loading={loading} loaderSize={str3} pressed={sharedValue}>{tmp11Result}</ButtonPill></BaseButton>;
});
let size = size_mod;
const result = size.fileFinishedImporting("design/components/Button/native/BaseIconButton.native.tsx");

export const BaseIconButton = tmp2;
