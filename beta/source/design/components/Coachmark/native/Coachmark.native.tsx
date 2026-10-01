// Module ID: 10597
// Function ID: 10598
// Name: Coachmark
// Dependencies: [109, 32, 19, 17, 1074, 21, 4566, 4836, 576, 10593, 5287, 9693, 5275, 4832, 5281, 1115, 5992, 8370, 9692, 1364, 4540, 2]
// Exports: CoachmarkContainer

// Module 10597 (Coachmark)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import native from "native" /* 4540 */;
import react_native from "react-native" /* 5275 */;
import Graphic2 from "Graphic" /* 9693 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let Pressable;
let closure_12;
let map1;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let rect;
let size;
let size1;
let unpackModuleId;
class Coachmark {
  constructor(graphic) {
    let XSmallIcon;
    let buttonIcon;
    let buttonLabel;
    let buttonShiny;
    let buttonVariant;
    let description;
    let enterExitAnimatedStyles;
    let experimental_withBlurBackground;
    let gradientColor;
    let intl;
    let items10;
    let items11;
    let items12;
    let items14;
    let items3;
    let items5;
    let items8;
    let items9;
    let obj12;
    let offsetY;
    let onButtonPress;
    let onDismiss;
    let position;
    let renderImgComponent;
    let sharedValue;
    let surfaceMeasurements;
    let targetMeasurements;
    let title;
    let tmp14Result3;
    let tmp4;
    let tooltipX;
    let tooltipY;
    ({ targetMeasurements, surfaceMeasurements, offsetY } = graphic);
    let num = 0;
    ({ title, description } = graphic);
    if (undefined !== offsetY) {
      num = offsetY;
    }
    graphic = graphic.graphic;
    const imgSource = graphic.imgSource;
    ({ position, onDismiss, buttonLabel, buttonVariant, buttonIcon, onButtonPress, gradientColor, experimental_withBlurBackground, renderImgComponent } = graphic);
    ({ buttonShiny, enterExitAnimatedStyles } = graphic);
    const tmp = closure_15();
    closure_3 = tmp;
    const ref = sharedValue.useRef(null);
    const tmp3 = _slicedToArray(sharedValue.useState(null), 2);
    [tmp4, _slicedToArray] = tmp3;
    let tmp7 = imgSource(renderImgComponent[9])(tmp4, surfaceMeasurements, targetMeasurements, position, -8 + num);
    const adjustmentX = tmp7.adjustmentX;
    ({ tooltipX, tooltipY } = tmp7);
    let obj = graphic(renderImgComponent[6]);
    sharedValue = obj.useSharedValue(0);
    let items = [sharedValue];
    const items1 = [sharedValue];
    const callback = sharedValue.useCallback(() => {
      const result = sharedValue.set(1);
    }, items);
    const callback1 = sharedValue.useCallback(() => {
      const result = sharedValue.set(0);
    }, items1);
    let obj2 = graphic(renderImgComponent[10]);
    const buttonPressAnimationProps = obj2.useButtonPressAnimationProps(sharedValue);
    const style = buttonPressAnimationProps.style;
    const items2 = [graphic, imgSource, renderImgComponent, tmp];
    let tmp14 = closure_12;
    let obj3 = {
      ref,
      accessibilityRole: "alert",
      style: tmp.center,
      accessible: true,
      onLayout() {
        const obj = react_native;
        const obj2 = { ref, delay: 100 };
        const result = obj.setAccessibilityFocus(obj2);
      },
      children: items3
    };
    const tmp13 = ref(buttonPressAnimationProps, closure_3);
    items3 = [
      sharedValue.useMemo(() => {
        let Graphic;
        let items;
        let obj3;
        let tmp14;
        if (null != graphic) {
          const obj2 = { style: items, children: tmp14(Graphic, obj3) };
          items = [closure_3.bottomMargin];
          obj3 = { style: size };
          Graphic = Graphic2.Graphic;
          const merged = Object.assign(tmp);
          let str = tmp.aspectRatio;
          const tmp11 = unpackModuleId;
          const tmp12 = metroImportDefault;
          tmp14 = unpackModuleId;
          const tmp20 = closure_16;
          if (str == null) {
            str = "1/1";
          }
          size = { height: tmp20[str], width: "auto" };
          return tmp11(tmp12, obj2);
        } else {
          let tmp2 = null;
          if (null != renderImgComponent) {
            tmp2 = tmp21();
          }
          if (null != imgSource) {
            const obj = { source: tmp3, style: closure_3.image };
            tmp2 = unpackModuleId(Image, obj);
          }
          let tmp7 = null;
          if (null != tmp2) {
            const obj4 = { style: closure_3.bottomMargin, children: tmp2 };
            tmp7 = unpackModuleId(metroImportDefault, obj4);
          }
          return tmp7;
        }
      }, items2),

    ];
    let obj4 = { style: tmp.textGap, children: items5 };
    const items4 = [tmp.text, ];
    let textOnlyPadding;
    const Text = graphic(renderImgComponent[13]).Text;
    if (null == graphic) {
      textOnlyPadding = tmp.textOnlyPadding;
    }
    items4[1] = textOnlyPadding;
    items5 = [tmp17(Text, { style: items4, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: title }), ];
    const obj5 = { style: tmp.text, variant: "text-sm/medium", color: "text-subtle", children: description };
    items5[1] = closure_11(graphic(renderImgComponent[13]).Text, obj5);
    items3[1] = tmp14(closure_7, obj4);
    const items6 = [tmp14(tmp16, obj3), , ];
    let tmp14Result = null;
    if (null != buttonLabel) {
      tmp14Result = null;
      if (null != onButtonPress) {
        let obj8;
        const obj6 = { style: tmp.buttonSpacing };
        const items7 = [tmp17(tmp16, obj6), ];
        const Button = tmp8(tmp6[14]).Button;
        if (experimental_withBlurBackground) {
          obj8 = { variant: "secondary-overlay", size: "lg", icon: buttonIcon, text: buttonLabel, onPress: onButtonPress, grow: true };
          const obj7 = { variant: "secondary-overlay", size: "lg", icon: buttonIcon, text: buttonLabel, onPress: onButtonPress, grow: true };
        } else {
          if (buttonVariant == null) {
            buttonVariant = "secondary";
          }
          obj8 = { variant: buttonVariant, size: "sm", icon: buttonIcon, text: buttonLabel, onPress: onButtonPress, shiny: buttonShiny, grow: true };
        }
        const obj9 = { children: items7 };
        items7[1] = closure_11(Button, obj8);
        tmp14Result = tmp14(tmp15, obj9);
      }
    }
    const obj10 = { children: items6 };
    items6[1] = tmp14Result;
    const obj11 = { accessibilityRole: "button", accessibilityLabel: intl.string(graphic(renderImgComponent[15]).t.cpT0Cq), style: tmp.closeButton, onPress: onDismiss, onPressIn: callback, onPressOut: callback1, children: closure_11(XSmallIcon, obj12) };
    intl = tmp8(tmp6[15]).intl;
    obj12 = { size: "xs", color: imgSource(renderImgComponent[8]).colors.ICON_STRONG };
    XSmallIcon = tmp8(tmp6[16]).XSmallIcon;
    items6[2] = closure_11(Pressable, obj11);
    const tmp14Result2 = tmp14(closure_13, obj10);
    if (experimental_withBlurBackground) {
      const obj13 = { style: tmp.bodyContainer, blurTheme: "dark", pressed: sharedValue, children: tmp14Result2 };
      tmp14Result3 = tmp17(tmp8(tmp6[17]).BackgroundBlurView, obj13);
    } else {
      const obj14 = { style: items8, children: items9 };
      items8 = [, ];
      ({ bodyContainer: arr9[0], bodyBgColor: arr9[1] } = tmp);
      let tmp17Result4 = null;
      if (null != gradientColor) {
        const obj15 = { style: tmp.gradient, color: gradientColor, backgroundColor: imgSource(renderImgComponent[8]).colors.MOBILE_COACHMARK_BACKGROUND_DEFAULT };
        const ExpressiveGradient = tmp8(tmp6[18]).ExpressiveGradient;
        tmp17Result4 = tmp17(ExpressiveGradient, obj15);
      }
      items9 = [tmp17Result4, tmp14Result2];
      tmp14Result3 = tmp14(tmp16, obj14);
    }
    const obj16 = {
      onLayout(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
        _slicedToArray(size);
      },
      style: items10,
      children: items11
    };
    items10 = [tmp.container, , ];
    let shadow;
    const tmp8Result = graphic(renderImgComponent[19]);
    if (tmp8Result.isIOS()) {
      shadow = tmp.shadow;
    }
    items10[1] = shadow;
    let num2 = 0;
    if (null != tmp4) {
      num2 = 1;
    }
    items10[2] = { opacity: num2, top: tooltipY, left: tooltipX };
    let tmp17Result5 = "bottom" === position;
    if (tmp17Result5) {
      const obj17 = { position: "bottom", adjustmentX };
      tmp17Result5 = tmp17(Cursor, obj17);
    }
    items11 = [tmp17Result5, , ];
    const obj18 = { onAccessibilityEscape: onDismiss, accessible: false, onPress: onDismiss, style: items12, children: tmp14Result3 };
    let merged = Object.assign(tmp13);
    items12 = [tmp.body, ];
    const tmp26 = closure_14;
    const tmp8Result2 = graphic(renderImgComponent[19]);
    if (tmp8Result2.isAndroid()) {
      const items13 = [tmp.shadow, enterExitAnimatedStyles];
      items14 = items13;
    } else {
      items14 = [];
    }
    items12[HermesBuiltin.arraySpread(items12, items14, 1)] = style;
    items11[1] = closure_11(tmp26, obj18);
    let tmp17Result6 = "top" === position;
    if (tmp17Result6) {
      const obj19 = { position: "top", adjustmentX };
      tmp17Result6 = tmp17(Cursor, obj19);
    }
    items11[2] = tmp17Result6;
    return tmp14(closure_7, obj16);
  }
}
function Cursor(arg0) {
  let adjustmentX;
  let items;
  let items1;
  let position;
  ({ position, adjustmentX } = arg0);
  const tmp = closure_15();
  let str = "column";
  if ("top" === position) {
    str = "column-reverse";
  }
  const obj = { style: items, children: items1 };
  items = [tmp.cursorContainer, "top" === position ? { marginTop: -6 } : { marginBottom: -6 }, { flexDirection: str, left: -adjustmentX }];
  items1 = [, ];
  const obj2 = { style: tmp.cursorHead };
  items1[0] = unpackModuleId(metroImportDefault, obj2);
  const obj3 = { style: tmp.cursorSpine };
  items1[1] = unpackModuleId(metroImportDefault, obj3);
  return closure_12(metroImportDefault, obj);
}
let closure_3 = ["style"];
({ View: metroImportDefault, Pressable } = react_native2);
const Image = react_native2.Image;
const ThemeTypes = Constants.ThemeTypes;
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let closure_14 = ReanimatedRexport.createAnimatedComponent(Pressable);
let createStyles = createStyles_mod;
let obj = { container: { position: "absolute", alignItems: "center" }, shadow: obj2, body: obj3, textGap: { gap: 4 }, textOnlyPadding: obj4, bodyBgColor: obj5, gradient: obj6, bodyContainer: obj7, center: { alignItems: "center", justifyContent: "center" }, buttonSpacing: obj8, text: { maxWidth: 200, textAlign: "center" }, cursorContainer: { alignItems: "center", zIndex: 0 }, cursorHead: size, cursorSpine: size1, image: { height: 40, width: 40 }, bottomMargin: obj9, closeButton: rect };
obj2 = {};
createStyles = createStyles.createStyles;
let merged = Object.assign(nativeDefault.shadows.SHADOW_BUTTON_OVERLAY);
obj3 = { width: nativeDefault.modules.mobile.COACHMARK_BODY_WIDTH, borderRadius: nativeDefault.radii.lg, overflow: "hidden", zIndex: 1 };
obj4 = { paddingHorizontal: nativeDefault.space.PX_24 };
obj5 = { borderWidth: 1, borderColor: nativeDefault.colors.MOBILE_COACHMARK_BORDER_DEFAULT, backgroundColor: nativeDefault.colors.MOBILE_COACHMARK_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg };
obj6 = { borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
obj7 = { padding: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
obj8 = { height: nativeDefault.modules.mobile.COACHMARK_BUTTON_SPACING };
size = { height: 8, width: 8, borderRadius: nativeDefault.radii.xs, borderWidth: 2, backgroundColor: "transparent", borderColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
size1 = { width: 2, height: 16, backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj9 = { marginBottom: nativeDefault.modules.mobile.COACHMARK_BUTTON_SPACING };
rect = { position: "absolute", top: nativeDefault.modules.mobile.COACHMARK_BUTTON_SPACING, right: nativeDefault.modules.mobile.COACHMARK_BUTTON_SPACING };
let closure_15 = createStyles(obj);
let closure_16 = { "21/9": 90, "16/9": 90, "6/4": 60, "2/1": 40, "1/1": 40 };
size = size_mod;
let result = size.fileFinishedImporting("design/components/Coachmark/native/Coachmark.native.tsx");

export { Coachmark };
export const CoachmarkContainer = function CoachmarkContainer(experimental_withBlurBackground) {
  let obj3;
  const obj = native;
  let DARK = obj.useThemeContext().theme;
  if (experimental_withBlurBackground.experimental_withBlurBackground) {
    DARK = ThemeTypes.DARK;
  }
  const obj2 = { theme: DARK, children: unpackModuleId(Coachmark, obj3) };
  obj3 = {};
  const ThemeContextProvider = native.ThemeContextProvider;
  const merged = Object.assign(experimental_withBlurBackground);
  return unpackModuleId(ThemeContextProvider, obj2);
};
