// Module ID: 8029
// Function ID: 8030
// Name: BaseIconButton
// Dependencies: [19, 21, 5014, 5640, 5095, 5636, 5641, 5643, 5645, 2]
// Exports: BaseIconButton

// Module 8029 (BaseIconButton)
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 5095 */;
import IconDefault from "Icon" /* 5636 */;
import ButtonConstants from "ButtonConstants" /* 5640 */;
import ButtonHooks from "ButtonHooks" /* 5641 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const ReanimatedRexport = ReanimatedRexport2;

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
const result = size.fileFinishedImporting("design/components/Button/native/BaseIconButton.native.tsx");

export function BaseIconButton(ref) {
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
  const tmp4 = closure_4(str, DEFAULT_BUTTON_SIZE);
  const obj = ReanimatedRexport2;
  const sharedValue = obj.useSharedValue(0);
  const obj2 = ButtonHooks;
  const iconTintStyles = obj2.useIconTintStyles(str, sharedValue);
  const obj3 = ButtonHooks;
  const iconSizeStyles = obj3.useIconSizeStyles(DEFAULT_BUTTON_SIZE, true, maxFontSizeMultiplier);
  let MEDIUM_BUTTON_HEIGHT = ButtonConstants.LARGE_BUTTON_HEIGHT;
  if ("sm" === DEFAULT_BUTTON_SIZE) {
    MEDIUM_BUTTON_HEIGHT = tmp5(5640).SMALL_BUTTON_HEIGHT;
  } else if ("md" === DEFAULT_BUTTON_SIZE) {
    MEDIUM_BUTTON_HEIGHT = tmp5(5640).MEDIUM_BUTTON_HEIGHT;
  }
  const bound = Math.max((tmp5(5640).MINIMUM_HIT_AREA - MEDIUM_BUTTON_HEIGHT) / 2, 0);
  const BaseButton = tmp5(5643).BaseButton;
  const merged1 = Object.assign(merged);
  const items = [tmp4.button, style];
  const items1 = [tmp4.pill, pillStyle];
  let str3 = "xs";
  const ButtonPill = tmp5(5645).ButtonPill;
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
}
