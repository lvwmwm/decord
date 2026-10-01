// Module ID: 7364
// Function ID: 7365
// Name: BaseIconButton
// Dependencies: [19, 21, 4836, 5286, 4566, 5283, 5287, 5289, 5291, 2]

// Module 7364 (BaseIconButton)
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4566 */;
import IconDefault from "Icon" /* 5283 */;
import ButtonConstants from "ButtonConstants" /* 5286 */;
import ButtonHooks from "ButtonHooks" /* 5287 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const ReanimatedRexport = ReanimatedRexport2;
let variant;

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles((arg0, arg1) => {
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
const forwardRefResult = react.forwardRef((variant, ref) => {
  let icon;
  let items2;
  let loading;
  let maxFontSizeMultiplier;
  let pillStyle;
  let scaleAmountInPx;
  let style;
  variant = variant.variant;
  let str = "primary";
  ({ style, pillStyle } = variant);
  if (undefined !== variant) {
    str = variant;
  }
  let DEFAULT_BUTTON_SIZE = variant.size;
  if (undefined === DEFAULT_BUTTON_SIZE) {
    DEFAULT_BUTTON_SIZE = ButtonConstants.DEFAULT_BUTTON_SIZE;
  }
  ({ icon, scaleAmountInPx } = variant);
  let num = 4;
  ({ maxFontSizeMultiplier, loading } = variant);
  if (undefined !== scaleAmountInPx) {
    num = scaleAmountInPx;
  }
  const tmp3 = closure_4(str, DEFAULT_BUTTON_SIZE);
  const obj = ReanimatedRexport2;
  const sharedValue = obj.useSharedValue(0);
  const obj2 = ButtonHooks;
  const iconTintStyles = obj2.useIconTintStyles(str, sharedValue);
  const obj3 = ButtonHooks;
  const iconSizeStyles = obj3.useIconSizeStyles(DEFAULT_BUTTON_SIZE, true, maxFontSizeMultiplier);
  let MEDIUM_BUTTON_HEIGHT = ButtonConstants.LARGE_BUTTON_HEIGHT;
  if ("sm" === DEFAULT_BUTTON_SIZE) {
    MEDIUM_BUTTON_HEIGHT = tmp4(5286).SMALL_BUTTON_HEIGHT;
  } else if ("md" === DEFAULT_BUTTON_SIZE) {
    MEDIUM_BUTTON_HEIGHT = tmp4(5286).MEDIUM_BUTTON_HEIGHT;
  }
  const bound = Math.max((tmp4(5286).MINIMUM_HIT_AREA - MEDIUM_BUTTON_HEIGHT) / 2, 0);
  const BaseButton = tmp4(5289).BaseButton;
  const merged = Object.assign(variant);
  const items = [tmp3.button, style];
  const items1 = [tmp3.pill, pillStyle];
  let str3 = "xs";
  const ButtonPill = tmp4(5291).ButtonPill;
  if ("lg" === DEFAULT_BUTTON_SIZE) {
    str3 = "sm";
  }
  let tmp10Result = icon;
  if (!react.isValidElement(icon)) {
    const obj6 = { source: icon, style: items2 };
    items2 = [iconTintStyles, iconSizeStyles];
    tmp10Result = tmp10(Icon, obj6);
  }
  return <BaseButton ref={arg1} style={items} pressed={sharedValue} scaleAmountInPx={num} hitSlop={bound}><ButtonPill style={items1} variant={str} size={DEFAULT_BUTTON_SIZE} loading={loading} loaderSize={str3} pressed={sharedValue}>{tmp10Result}</ButtonPill></BaseButton>;
});
const result = size.fileFinishedImporting("design/components/Button/native/BaseIconButton.native.tsx");

export const BaseIconButton = forwardRefResult;
