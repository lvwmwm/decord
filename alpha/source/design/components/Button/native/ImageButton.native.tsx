// Module ID: 8986
// Function ID: 8987
// Name: ImageButton
// Dependencies: [109, 19, 17, 21, 5154, 5447, 587, 558, 576, 5448, 4909, 5441, 5445, 5091, 7795, 5150, 5450, 2]

// Module 8986 (ImageButton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import spring from "spring" /* 5441 */;
import ButtonConstants from "ButtonConstants" /* 5447 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5154 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let metroImportAll;
let metroImportDefault;
let tmp;
const springPresets = tmp(5445);
let closure_3 = ["size", "label", "grow", "image", "accessibilityLabel", "maxFontSizeMultiplier", "onPressIn", "onPressOut", "ref"];
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles((arg0, arg1, arg2) => {
  let num;
  let rect;
  let MEDIUM_BUTTON_PADDING = ButtonConstants.LARGE_BUTTON_PADDING;
  if ("sm" === arg0) {
    MEDIUM_BUTTON_PADDING = tmp(5447).SMALL_BUTTON_PADDING;
  } else if ("md" === arg0) {
    MEDIUM_BUTTON_PADDING = tmp(5447).MEDIUM_BUTTON_PADDING;
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
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ImageButton(onPressOut) {
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
  const tmp17 = closure_9(str, tmpResult.useIconSizeStyles(str, true, tmp8).width, tmp5);
  const tmpResult3 = tmp(tmp2[10]);
  sharedValue = tmpResult3.useSharedValue(0);
  if (cResult[11] === tmp9) {
    if (cResult[14] === tmp10) {
      const tmpResult4 = tmp(tmp2[10]);
      class E {
        constructor(arg0) {
          const result = sharedValue.set(0);
          if (closure_1 != null) {
            tmp2(arg0);
          }
        }
      }
      const useAnimatedStyle = tmpResult4.useAnimatedStyle;
      tmp22.__closure = { withSpring: tmp(tmp2[11]).withSpring, pressed: sharedValue, ON_PRESS_SPRING: tmp(tmp2[12]).ON_PRESS_SPRING };
      tmp22.__workletHash = 12412199607843;
      tmp22.__initData = __initData;
      const obj2 = { withSpring: tmp(tmp2[11]).withSpring, pressed: sharedValue, ON_PRESS_SPRING: tmp(tmp2[12]).ON_PRESS_SPRING };
      const animatedStyle = useAnimatedStyle(tmp22);
      if (cResult[17] === tmp6) {
        let tmp25;
        if (cResult[18] === tmp17.image) {
          tmp25 = cResult[19];
        }
        if (cResult[20] === animatedStyle) {
          let tmp29;
          if (cResult[21] === tmp17.imageDim) {
            tmp29 = cResult[22];
          }
          if (cResult[23] === tmp17.imageWrapper) {
            if (cResult[24] === tmp25) {
              class E {
                constructor(arg0) {
                  const result = sharedValue.set(0);
                  if (closure_1 != null) {
                    tmp2(arg0);
                  }
                }
              }
              return tmp36;
            }
          }
          class E {
            constructor(arg0) {
              const result = sharedValue.set(0);
              if (closure_1 != null) {
                tmp2(arg0);
              }
            }
          }
          const obj3 = { style: tmp17.imageWrapper, children: items };
          items = [tmp25, tmp29];
          cResult[23] = tmp17.imageWrapper;
          cResult[24] = tmp25;
          cResult[25] = tmp29;
          cResult[26] = closure_8(View, obj3);
          const tmp34 = closure_8(View, obj3);
        }
        class E {
          constructor(arg0) {
            const result = sharedValue.set(0);
            if (closure_1 != null) {
              tmp2(arg0);
            }
          }
        }
        const obj4 = { style: items1 };
        items1 = [tmp17.imageDim, animatedStyle];
        const tmp31 = closure_7(require("ReanimatedRexport").View, obj4);
        cResult[20] = animatedStyle;
        cResult[21] = tmp17.imageDim;
        cResult[22] = tmp31;
        tmp29 = tmp31;
      }
      const obj5 = { source: tmp6, style: tmp17.image };
      const tmp28 = closure_7(require("FastImage"), obj5);
      cResult[17] = tmp6;
      cResult[18] = tmp17.image;
      cResult[19] = tmp28;
      tmp25 = tmp28;
    }
    class E {
      constructor(arg0) {
        const result = sharedValue.set(0);
        if (closure_1 != null) {
          tmp2(arg0);
        }
      }
    }
    cResult[14] = tmp10;
    cResult[15] = sharedValue;
    cResult[16] = E;
  }
  const fn = function w(arg0) {
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
  const tmp4 = closure_9(str, obj.useIconSizeStyles(str, true, maxFontSizeMultiplier).width, grow);
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
  class N {
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
  N.__closure = { withSpring: onPressIn(sharedValue[11]).withSpring, pressed: sharedValue, ON_PRESS_SPRING: onPressIn(sharedValue[12]).ON_PRESS_SPRING };
  N.__workletHash = 2649796969632;
  N.__initData = __initData2;
  const obj5 = { style: tmp4.imageWrapper, children: items2 };
  ({ withSpring: onPressIn(sharedValue[11]).withSpring, pressed: sharedValue, ON_PRESS_SPRING: onPressIn(sharedValue[12]).ON_PRESS_SPRING });
  const animatedStyle = obj3.useAnimatedStyle(N);
  items2 = [, ];
  const obj6 = { source: image, style: tmp4.image };
  items2[0] = closure_7(onPressOut(sharedValue[13]), obj6);
  const obj7 = { style: items3 };
  items3 = [tmp4.imageDim, animatedStyle];
  items2[1] = closure_7(onPressOut(sharedValue[10]).View, obj7);
  const tmp11 = closure_8(View, obj5);
  const tmp9 = closure_8;
  if (null != label) {
    const obj8 = { style: tmp4.labelPressable, variant: "none", accessibilityLabel, children: items4 };
    const BaseButton = tmp2(tmp3[16]).BaseButton;
    const merged1 = Object.assign(merged);
    const obj9 = { ref: size.ref, icon: tmp11, accessibilityRole: "none", accessibilityLabel: "", size: "lg", pillStyle: tmp4.pill, variant: "secondary", onPressIn: callback, onPressOut: callback1, maxFontSizeMultiplier };
    const BaseIconButton2 = tmp2(tmp3[14]).BaseIconButton;
    const merged2 = Object.assign(merged);
    items4 = [closure_7(BaseIconButton2, obj9), ];
    const obj10 = { variant: "text-xs/medium", color: "interactive-text-default", maxFontSizeMultiplier, children: label };
    items4[1] = closure_7(tmp2(tmp3[15]).Text, obj10);
    tmp10Result = tmp9(BaseButton, obj8);
  } else {
    const obj11 = { ref: size.ref, size: str, icon: tmp11, accessibilityLabel, pillStyle: tmp4.pill, variant: "secondary", onPressIn: callback, onPressOut: callback1 };
    const BaseIconButton = tmp2(tmp3[14]).BaseIconButton;
    const merged3 = Object.assign(merged);
    tmp10Result = tmp10(BaseIconButton, obj11);
  }
  return tmp10Result;
});
let result = size.fileFinishedImporting("design/components/Button/native/ImageButton.native.tsx");

export const ImageButton = tmp3;
