// Module ID: 9345
// Function ID: 9346
// Name: ImageButton
// Dependencies: [19, 17, 21, 4836, 5286, 576, 5287, 4566, 5280, 5284, 5289, 7364, 4832, 2]

// Module 9345 (ImageButton)
import nativeDefault from "native" /* 576 */;
import spring from "spring" /* 5280 */;
import ButtonConstants from "ButtonConstants" /* 5286 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let tmp;
const springPresets = tmp(5284);
({ View: closure_4, Image: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles((arg0, arg1, arg2) => {
  let num;
  let rect;
  let MEDIUM_BUTTON_PADDING = ButtonConstants.LARGE_BUTTON_PADDING;
  if ("sm" === arg0) {
    MEDIUM_BUTTON_PADDING = tmp(5286).SMALL_BUTTON_PADDING;
  } else if ("md" === arg0) {
    MEDIUM_BUTTON_PADDING = tmp(5286).MEDIUM_BUTTON_PADDING;
  }
  const sum = arg1 + 2 * MEDIUM_BUTTON_PADDING;
  const tmpResult = ButtonConstants;
  const buttonBorderRadius = tmpResult.getButtonBorderRadius(arg0);
  const obj = { paddingBottom: nativeDefault.space.PX_4, gap: nativeDefault.space.PX_8, alignItems: "center", alignSelf: "center", flexGrow: num };
  num = 0;
  if (arg2) {
    num = 1;
  }
  const obj2 = { labelPressable: obj, pill: { paddingHorizontal: 0, paddingVertical: 0, minHeight: sum, minWidth: sum, borderRadius: buttonBorderRadius, borderWidth: 0, outlineWidth: ButtonConstants.BUTTON_BORDER_WIDTH, outlineColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT, outlineStyle: "solid" }, imageWrapper: { width: sum, height: sum, position: "relative" }, image: { width: sum, height: sum }, imageDim: rect };
  ({ paddingHorizontal: 0, paddingVertical: 0, minHeight: sum, minWidth: sum, borderRadius: buttonBorderRadius, borderWidth: 0, outlineWidth: ButtonConstants.BUTTON_BORDER_WIDTH, outlineColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT, outlineStyle: "solid" });
  rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: tmp5(576).colors.REDESIGN_IMAGE_BUTTON_PRESSED_BACKGROUND, borderRadius: buttonBorderRadius };
  return obj2;
});
const __initData = { code: "function ImageButtonNativeTsx1(){const{withSpring,pressed,ON_PRESS_SPRING}=this.__closure;return{opacity:withSpring(pressed.get()===1?1:0,ON_PRESS_SPRING,'animate-always')};}" };
const forwardRefResult = react.forwardRef((size, ref) => {
  let accessibilityLabel;
  let grow;
  let image;
  let items2;
  let items3;
  let items4;
  let label;
  let maxFontSizeMultiplier;
  let onPressIn;
  let tmp10Result;
  let str = size.size;
  if (str === undefined) {
    str = "lg";
  }
  ({ label, accessibilityLabel, maxFontSizeMultiplier, onPressIn } = size);
  const onPressOut = size.onPressOut;
  ({ grow, image } = size);
  const merged = Object.assign(size, Object.assign({ size: 0, label: 0, grow: 0, image: 0, accessibilityLabel: 0, maxFontSizeMultiplier: 0, onPressIn: 0, onPressOut: 0 }));
  let sharedValue;
  const tmp2 = onPressIn;
  const tmp3 = sharedValue;
  let obj = onPressIn(sharedValue[6]);
  const tmp4 = closure_8(str, obj.useIconSizeStyles(str, true, maxFontSizeMultiplier).width, grow);
  const obj2 = onPressIn(sharedValue[7]);
  sharedValue = obj2.useSharedValue(0);
  const items = [sharedValue, onPressIn];
  const callback = react.useCallback((arg0) => {
    const result = sharedValue.set(1);
    if (onPressIn != null) {
      tmp2(arg0);
    }
  }, items);
  const items1 = [sharedValue, onPressOut];
  const callback1 = react.useCallback((arg0) => {
    const result = sharedValue.set(0);
    if (onPressOut != null) {
      tmp2(arg0);
    }
  }, items1);
  const obj3 = onPressIn(sharedValue[7]);
  class B {
    constructor() {
      const withSpring = spring.withSpring;
      let num = 0;
      spring;
      if (1 === sharedValue.get()) {
        num = 1;
      }
      const obj = { opacity: withSpring(num, springPresets.ON_PRESS_SPRING, "animate-always") };
      return obj;
    }
  }
  B.__closure = { withSpring: onPressIn(sharedValue[8]).withSpring, pressed: sharedValue, ON_PRESS_SPRING: onPressIn(sharedValue[9]).ON_PRESS_SPRING };
  B.__workletHash = 17257158773379;
  B.__initData = __initData;
  const obj5 = { style: tmp4.imageWrapper, children: items2 };
  ({ withSpring: onPressIn(sharedValue[8]).withSpring, pressed: sharedValue, ON_PRESS_SPRING: onPressIn(sharedValue[9]).ON_PRESS_SPRING });
  const obj6 = { source: image, style: tmp4.image };
  const animatedStyle = obj3.useAnimatedStyle(B);
  items2 = [closure_6(closure_5, obj6), ];
  const obj7 = { style: items3 };
  items3 = [tmp4.imageDim, animatedStyle];
  items2[1] = closure_6(onPressOut(sharedValue[7]).View, obj7);
  const tmp11 = closure_7(closure_4, obj5);
  const tmp9 = closure_7;
  if (null != label) {
    const obj8 = { style: tmp4.labelPressable, variant: "none", accessibilityLabel, children: items4 };
    const BaseButton = tmp2(tmp3[10]).BaseButton;
    const merged1 = Object.assign(merged);
    const obj9 = { ref, icon: tmp11, accessibilityRole: "none", accessibilityLabel: "", size: "lg", pillStyle: tmp4.pill, variant: "secondary", onPressIn: callback, onPressOut: callback1, maxFontSizeMultiplier };
    const BaseIconButton2 = tmp2(tmp3[11]).BaseIconButton;
    const merged2 = Object.assign(merged);
    items4 = [closure_6(BaseIconButton2, obj9), ];
    const obj10 = { variant: "text-xs/medium", color: "interactive-text-default", maxFontSizeMultiplier, children: label };
    items4[1] = closure_6(tmp2(tmp3[12]).Text, obj10);
    tmp10Result = tmp9(BaseButton, obj8);
  } else {
    const obj11 = { ref, size: str, icon: tmp11, accessibilityLabel, pillStyle: tmp4.pill, variant: "secondary", onPressIn: callback, onPressOut: callback1 };
    const BaseIconButton = tmp2(tmp3[11]).BaseIconButton;
    const merged3 = Object.assign(merged);
    tmp10Result = tmp10(BaseIconButton, obj11);
  }
  return tmp10Result;
});
let result = size.fileFinishedImporting("design/components/Button/native/ImageButton.native.tsx");

export const ImageButton = forwardRefResult;
