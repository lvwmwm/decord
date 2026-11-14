// Module ID: 15923
// Function ID: 15924
// Name: ImageButton
// Dependencies: [19, 17, 21, 5306, 5942, 575, 5943, 1655, 5939, 5940, 6020, 5945, 7448, 5929, 2]
// Exports: ImageButton

// Module 15923 (ImageButton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _mod1655 from "module_1655" /* 1655 */;
import spring_spring from "spring/spring" /* 5939 */;
import springPresets from "springPresets" /* 5940 */;
import ButtonConstants from "ButtonConstants" /* 5942 */;
import ButtonHooks from "ButtonHooks" /* 5943 */;
import FastImageDefault from "FastImage" /* 6020 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

const _modDef1655 = _mod1655;

let hasOwnProperty;
let metroRequire;
let tmp2;
const Text_Text = tmp2(5929);
const Button_BaseButton = tmp2(5945);
const BaseIconButton3 = tmp2(7448);
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles((arg0, arg1, arg2) => {
  let num;
  let rect;
  let MEDIUM_BUTTON_PADDING = ButtonConstants.LARGE_BUTTON_PADDING;
  if ("sm" === arg0) {
    MEDIUM_BUTTON_PADDING = tmp(5942).SMALL_BUTTON_PADDING;
  } else if ("md" === arg0) {
    MEDIUM_BUTTON_PADDING = tmp(5942).MEDIUM_BUTTON_PADDING;
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
  rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: tmp5(575).colors.REDESIGN_IMAGE_BUTTON_PRESSED_BACKGROUND, borderRadius: buttonBorderRadius };
  return obj2;
});
let closure_8 = { code: "(function ImageButtonNativeTsx1(){let[withSpring,pressed,ON_PRESS_SPRING]=this.__closure;return{opacity:withSpring(pressed.get()===1?1:0,ON_PRESS_SPRING,'animate-always')};})" };
let result = size.fileFinishedImporting("design/components/Button/native/ImageButton.native.tsx");

export function ImageButton(size) {
  let accessibilityLabel;
  let grow;
  let image;
  let items4;
  let items5;
  let items6;
  let label;
  let maxFontSizeMultiplier;
  let onPressIn;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp15Result;
  let tmp9;
  let str = size.size;
  if (str === undefined) {
    str = "lg";
  }
  ({ label, accessibilityLabel, maxFontSizeMultiplier, onPressIn } = size);
  const onPressOut = size.onPressOut;
  ({ grow, image } = size);
  const merged = Object.assign(size, Object.assign({ size: 0, label: 0, grow: 0, image: 0, accessibilityLabel: 0, maxFontSizeMultiplier: 0, onPressIn: 0, onPressOut: 0, ref: 0 }));
  const tmp2 = require;
  let obj = ButtonHooks;
  const tmp4 = closure_7(str, obj.useIconSizeStyles(str, true, maxFontSizeMultiplier).width, grow);
  const obj2 = _mod1655;
  const sharedValue = obj2.useSharedValue(0);
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
  const items2 = [closure_8, , , ];
  const useAnimatedStyle = _mod1655.useAnimatedStyle;
  _mod1655;
  items2[1] = spring_spring.withSpring;
  items2[2] = sharedValue;
  items2[3] = springPresets.ON_PRESS_SPRING;
  let c0;
  let c1;
  let c2;
  [tmp9, tmp10, tmp11, tmp12] = items2;
  class ImageButtonNativeTsx1 {
    constructor() {
      let num = 0;
      const tmp = c0;
      if (1 === _undefined.get()) {
        num = 1;
      }
      const obj = { opacity: tmp(num, c2, "animate-always") };
      return obj;
    }
  }
  const items3 = [tmp10, tmp11, tmp12];
  ImageButtonNativeTsx1.__closure = items3;
  ImageButtonNativeTsx1.__workletHash = 4981315531162;
  ImageButtonNativeTsx1.__initData = tmp9;
  const obj3 = { style: tmp4.imageWrapper, children: items4 };
  const animatedStyle = useAnimatedStyle(ImageButtonNativeTsx1);
  items4 = [, ];
  const obj4 = { source: image, style: tmp4.image };
  items4[0] = hasOwnProperty(FastImageDefault, obj4);
  const obj5 = { style: items5 };
  items5 = [tmp4.imageDim, animatedStyle];
  items4[1] = hasOwnProperty(_modDef1655.View, obj5);
  const tmp16 = metroRequire(View, obj3);
  const tmp14 = metroRequire;
  if (null != label) {
    const obj6 = { style: tmp4.labelPressable, variant: "none", accessibilityLabel, children: items6 };
    const BaseButton = Button_BaseButton.BaseButton;
    const merged1 = Object.assign(merged);
    const obj7 = { ref: size.ref, icon: tmp16, accessibilityRole: "none", accessibilityLabel: "", size: "lg", pillStyle: tmp4.pill, variant: "secondary", onPressIn: callback, onPressOut: callback1, maxFontSizeMultiplier };
    const BaseIconButton2 = BaseIconButton3.BaseIconButton;
    const merged2 = Object.assign(merged);
    items6 = [hasOwnProperty(BaseIconButton2, obj7), ];
    const obj8 = { variant: "body-xs/medium", color: "interactive-text-default", maxFontSizeMultiplier, children: label };
    items6[1] = hasOwnProperty(Text_Text.Text, obj8);
    tmp15Result = tmp14(BaseButton, obj6);
  } else {
    const obj9 = { ref: size.ref, size: str, icon: tmp16, accessibilityLabel, pillStyle: tmp4.pill, variant: "secondary", onPressIn: callback, onPressOut: callback1 };
    const BaseIconButton = BaseIconButton3.BaseIconButton;
    const merged3 = Object.assign(merged);
    tmp15Result = tmp15(BaseIconButton, obj9);
  }
  return tmp15Result;
}
