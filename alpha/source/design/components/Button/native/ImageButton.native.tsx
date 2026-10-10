// Module ID: 8759
// Function ID: 8760
// Name: ImageButton
// Dependencies: [109, 19, 17, 21, 5092, 5384, 587, 558, 576, 5385, 4850, 5378, 5382, 7574, 5088, 5387, 2]

// Module 8759 (ImageButton)
import nativeDefault from "native" /* 587 */;
import spring from "spring" /* 5378 */;
import ButtonConstants from "ButtonConstants" /* 5384 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp;
const springPresets = tmp(5382);
let closure_3 = ["size", "label", "grow", "image", "accessibilityLabel", "maxFontSizeMultiplier", "onPressIn", "onPressOut", "ref"];
({ View: metroRequire, Image: metroImportDefault } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles((arg0, arg1, arg2) => {
  let num;
  let rect;
  let MEDIUM_BUTTON_PADDING = ButtonConstants.LARGE_BUTTON_PADDING;
  if ("sm" === arg0) {
    MEDIUM_BUTTON_PADDING = tmp(5384).SMALL_BUTTON_PADDING;
  } else if ("md" === arg0) {
    MEDIUM_BUTTON_PADDING = tmp(5384).MEDIUM_BUTTON_PADDING;
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
  rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: tmp5(587).colors.REDESIGN_IMAGE_BUTTON_PRESSED_BACKGROUND, borderRadius: buttonBorderRadius };
  return obj2;
});
const __initData = { code: "function ImageButtonNativeTsx1(){const{withSpring,pressed,ON_PRESS_SPRING}=this.__closure;return{opacity:withSpring(pressed.get()===1?1:0,ON_PRESS_SPRING,\"animate-always\")};}" };
const __initData2 = { code: "function ImageButtonNativeTsx2(){const{withSpring,pressed,ON_PRESS_SPRING}=this.__closure;return{opacity:withSpring(pressed.get()===1?1:0,ON_PRESS_SPRING,'animate-always')};}" };
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ImageButton(onPressOut) {
  let accessibilityLabel;
  let closure_0;
  let closure_1;
  let grow;
  let image;
  let items;
  let items1;
  let label;
  let maxFontSizeMultiplier;
  let onPressIn;
  let sharedValue;
  let tmp13;
  let tmp5;
  let tmp6;
  let tmp8;
  let tmp = _require;
  const tmp2 = sharedValue;
  let obj = require("react");
  const cResult = obj.c(53);
  if (cResult[0] !== onPressOut) {
    ({ size, label, grow, image, accessibilityLabel, maxFontSizeMultiplier, onPressIn } = onPressOut);
    _require = onPressIn;
    onPressOut = onPressOut.onPressOut;
    importDefault = onPressOut;
    let num = 0;
    cResult[0] = onPressOut;
    cResult[1] = accessibilityLabel;
    cResult[2] = grow;
    cResult[3] = image;
    cResult[4] = label;
    cResult[5] = maxFontSizeMultiplier;
    cResult[6] = onPressIn;
    cResult[7] = onPressOut;
    cResult[8] = _objectWithoutProperties(onPressOut, closure_3);
    cResult[9] = onPressOut.ref;
    cResult[10] = size;
    tmp13 = size;
    tmp8 = maxFontSizeMultiplier;
    tmp6 = image;
    tmp5 = grow;
    const tmp16 = _objectWithoutProperties(onPressOut, closure_3);
  } else {
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp8 = cResult[5];
    _require = cResult[6];
    importDefault = cResult[7];
    tmp13 = cResult[10];
  }
  let str = "lg";
  if (undefined !== tmp13) {
    str = tmp13;
  }
  const tmpResult = tmp(tmp2[9]);
  const tmp17 = closure_10(str, tmpResult.useIconSizeStyles(str, true, tmp8).width, tmp5);
  const tmpResult3 = tmp(tmp2[10]);
  sharedValue = tmpResult3.useSharedValue(0);
  if (cResult[11] === tmp9) {
    if (cResult[14] === tmp10) {
      const tmpResult4 = tmp(tmp2[10]);
      class T {
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
      const useAnimatedStyle = tmpResult4.useAnimatedStyle;
      T.__closure = { withSpring: tmp(tmp2[11]).withSpring, pressed: sharedValue, ON_PRESS_SPRING: tmp(tmp2[12]).ON_PRESS_SPRING };
      T.__workletHash = 12412199607843;
      T.__initData = __initData;
      const obj2 = { withSpring: tmp(tmp2[11]).withSpring, pressed: sharedValue, ON_PRESS_SPRING: tmp(tmp2[12]).ON_PRESS_SPRING };
      const animatedStyle = useAnimatedStyle(T);
      if (cResult[17] === tmp6) {
        let tmp24;
        if (cResult[18] === tmp17.image) {
          tmp24 = cResult[19];
        }
        if (cResult[20] === animatedStyle) {
          let tmp28;
          if (cResult[21] === tmp17.imageDim) {
            tmp28 = cResult[22];
          }
          if (cResult[23] === tmp17.imageWrapper) {
            if (cResult[24] === tmp24) {
              class T {
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
              return tmp35;
            }
          }
          class T {
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
          const obj3 = { style: tmp17.imageWrapper, children: items };
          items = [tmp24, tmp28];
          cResult[23] = tmp17.imageWrapper;
          cResult[24] = tmp24;
          cResult[25] = tmp28;
          cResult[26] = closure_9(closure_6, obj3);
          const tmp33 = closure_9(closure_6, obj3);
        }
        class T {
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
        const obj4 = { style: items1 };
        items1 = [tmp17.imageDim, animatedStyle];
        const tmp30 = closure_8(require("ReanimatedRexport").View, obj4);
        cResult[20] = animatedStyle;
        cResult[21] = tmp17.imageDim;
        cResult[22] = tmp30;
        tmp28 = tmp30;
      }
      const obj5 = { source: tmp6, style: tmp17.image };
      const tmp27 = closure_8(closure_7, obj5);
      cResult[17] = tmp6;
      cResult[18] = tmp17.image;
      cResult[19] = tmp27;
      tmp24 = tmp27;
    }
    class G {
      constructor(arg0) {
        const result = sharedValue.set(0);
        if (closure_1 != null) {
          tmp2(arg0);
        }
      }
    }
    cResult[14] = tmp10;
    cResult[15] = sharedValue;
    cResult[16] = G;
  }
  const fn = function v(arg0) {
    const result = sharedValue.set(1);
    if (closure_0 != null) {
      tmp2(arg0);
    }
  };
  cResult[11] = tmp9;
  cResult[12] = sharedValue;
  cResult[13] = fn;
}) : (function ImageButton(size) {
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
  const merged = Object.assign(size, Object.assign({ size: 0, label: 0, grow: 0, image: 0, accessibilityLabel: 0, maxFontSizeMultiplier: 0, onPressIn: 0, onPressOut: 0, ref: 0 }));
  let sharedValue;
  const tmp2 = onPressIn;
  const tmp3 = sharedValue;
  let obj = onPressIn(sharedValue[9]);
  const tmp4 = closure_10(str, obj.useIconSizeStyles(str, true, maxFontSizeMultiplier).width, grow);
  const obj2 = onPressIn(sharedValue[10]);
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
  const obj3 = onPressIn(sharedValue[10]);
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
  B.__closure = { withSpring: onPressIn(sharedValue[11]).withSpring, pressed: sharedValue, ON_PRESS_SPRING: onPressIn(sharedValue[12]).ON_PRESS_SPRING };
  B.__workletHash = 2649796969632;
  B.__initData = __initData2;
  const obj5 = { style: tmp4.imageWrapper, children: items2 };
  ({ withSpring: onPressIn(sharedValue[11]).withSpring, pressed: sharedValue, ON_PRESS_SPRING: onPressIn(sharedValue[12]).ON_PRESS_SPRING });
  const obj6 = { source: image, style: tmp4.image };
  const animatedStyle = obj3.useAnimatedStyle(B);
  items2 = [closure_8(closure_7, obj6), ];
  const obj7 = { style: items3 };
  items3 = [tmp4.imageDim, animatedStyle];
  items2[1] = closure_8(onPressOut(sharedValue[10]).View, obj7);
  const tmp11 = closure_9(closure_6, obj5);
  const tmp9 = closure_9;
  if (null != label) {
    const obj8 = { style: tmp4.labelPressable, variant: "none", accessibilityLabel, children: items4 };
    const BaseButton = tmp2(tmp3[15]).BaseButton;
    const merged1 = Object.assign(merged);
    const obj9 = { ref: size.ref, icon: tmp11, accessibilityRole: "none", accessibilityLabel: "", size: "lg", pillStyle: tmp4.pill, variant: "secondary", onPressIn: callback, onPressOut: callback1, maxFontSizeMultiplier };
    const BaseIconButton2 = tmp2(tmp3[13]).BaseIconButton;
    const merged2 = Object.assign(merged);
    items4 = [closure_8(BaseIconButton2, obj9), ];
    const obj10 = { variant: "text-xs/medium", color: "interactive-text-default", maxFontSizeMultiplier, children: label };
    items4[1] = closure_8(tmp2(tmp3[14]).Text, obj10);
    tmp10Result = tmp9(BaseButton, obj8);
  } else {
    const obj11 = { ref: size.ref, size: str, icon: tmp11, accessibilityLabel, pillStyle: tmp4.pill, variant: "secondary", onPressIn: callback, onPressOut: callback1 };
    const BaseIconButton = tmp2(tmp3[13]).BaseIconButton;
    const merged3 = Object.assign(merged);
    tmp10Result = tmp10(BaseIconButton, obj11);
  }
  return tmp10Result;
});
let result = size.fileFinishedImporting("design/components/Button/native/ImageButton.native.tsx");

export const ImageButton = tmp4;
