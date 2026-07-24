// Module ID: 8617
// Function ID: 68344
// Name: Coachmark
// Dependencies: [29, 57, 31, 27, 33, 3991, 4130, 689, 8612, 4548, 7517, 1324, 4539, 4126, 4543, 1212, 5119, 8416, 7516, 477, 3842, 2]
// Exports: CoachmarkContainer

// Module 8617 (Coachmark)
import _objectWithoutProperties from "_objectWithoutProperties";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "module_3991";

let Pressable;
let closure_10;
let closure_11;
let closure_12;
let closure_7;
const require = arg1;
class Coachmark {
  constructor(arg0) {
    ({ targetMeasurements, surfaceMeasurements, offsetY } = global);
    num = 0;
    ({ title, description } = global);
    if (undefined !== offsetY) {
      num = offsetY;
    }
    graphic = global.graphic;
    imgSource = global.imgSource;
    ({ position, onDismiss, buttonLabel, buttonVariant, onButtonPress, gradientColor, experimental_withBlurBackground, renderImgComponent } = global);
    tmp = c14();
    Cursor = tmp;
    ref = result.useRef(null);
    _objectWithoutProperties = ref;
    tmp3 = c5(result.useState(null), 2);
    first = tmp3[0];
    c5 = tmp3[1];
    tmp5 = require("useTooltipPosition")(first, surfaceMeasurements, targetMeasurements, position, -8 + num);
    adjustmentX = tmp5.adjustmentX;
    ({ tooltipX, tooltipY } = tmp5);
    obj = require("module_3991");
    sharedValue = require("_objectWithoutProperties");
    result = sharedValue;
    items = [];
    items[0] = sharedValue;
    items1 = [];
    items1[0] = sharedValue;
    callback = result.useCallback(() => {
      const result = sharedValue.set(1);
    }, items);
    callback1 = result.useCallback(() => {
      const result = sharedValue.set(0);
    }, items1);
    obj2 = require("useProfileThemedButtonStyles");
    buttonPressAnimationProps = obj2.useButtonPressAnimationProps(sharedValue);
    tmp10 = _objectWithoutProperties(buttonPressAnimationProps, Cursor);
    items2 = [, , , ];
    items2[0] = graphic;
    items2[1] = imgSource;
    items2[2] = renderImgComponent;
    items2[3] = tmp;
    memo = result.useMemo(() => {
      if (null != graphic) {
        let obj = {};
        const items = [tmp.bottomMargin];
        obj.style = items;
        obj = {};
        const merged = Object.assign(graphic);
        const obj1 = {};
        const aspectRatio = graphic.aspectRatio;
        let str = "1/1";
        if (null != aspectRatio) {
          str = aspectRatio;
        }
        obj1.height = outer1_15[str];
        obj1.width = "auto";
        obj["style"] = obj1;
        obj.children = outer1_10(graphic(renderImgComponent[10]).Graphic, obj);
        return outer1_10(outer1_7, obj);
      } else {
        let tmp2 = null;
        if (null != renderImgComponent) {
          tmp2 = renderImgComponent();
        }
        if (null != imgSource) {
          obj = { source: imgSource, style: tmp.image };
          tmp2 = outer1_10(outer1_9, obj);
        }
        let tmp8 = null;
        if (null != tmp2) {
          const obj2 = { style: tmp.bottomMargin, children: tmp2 };
          tmp8 = outer1_10(outer1_7, obj2);
        }
        return tmp8;
      }
    }, items2);
    tmp12 = require("useIsMobileVisualRefreshExperimentEnabled")("Coachmark");
    tmp13 = jsxs;
    obj = {};
    obj1 = {
      ref,
      accessibilityRole: "alert",
      style: tmp.center,
      accessible: true,
      onLayout() {
            let obj = graphic(renderImgComponent[12]);
            obj = { ref, delay: 100 };
            const result = obj.setAccessibilityFocus(obj);
          }
    };
    items3 = [, ];
    items3[0] = memo;
    obj2 = {};
    textGap = undefined;
    tmp14 = Fragment;
    tmp15 = View;
    tmp16 = jsxs;
    tmp17 = View;
    if (tmp12) {
      textGap = tmp.textGap;
    }
    obj2.style = textGap;
    tmp19 = jsx;
    obj3 = {};
    items4 = [, ];
    items4[0] = tmp.text;
    textOnlyPadding = undefined;
    if (null == graphic) {
      textOnlyPadding = tmp.textOnlyPadding;
    }
    items4[1] = textOnlyPadding;
    obj3.style = items4;
    str = "heading-md/bold";
    if (tmp12) {
      str = "text-md/semibold";
    }
    obj3.variant = str;
    obj3.color = "mobile-text-heading-primary";
    obj3.children = title;
    items5 = [, ];
    items5[0] = tmp19(require("Text").Text, obj3);
    tmp21 = jsx;
    obj4 = { style: tmp.text, variant: "text-sm/medium" };
    str2 = "text-default";
    if (tmp12) {
      str2 = "text-subtle";
    }
    obj4.color = str2;
    obj4.children = description;
    items5[1] = tmp21(require("Text").Text, obj4);
    obj2.children = items5;
    items3[1] = tmp16(tmp17, obj2);
    obj1.children = items3;
    items6 = [, , ];
    items6[0] = tmp13(tmp15, obj1);
    tmp22 = null;
    if (null != buttonLabel) {
      tmp22 = null;
      if (null != onButtonPress) {
        obj5 = {};
        tmp25 = jsx;
        tmp26 = View;
        obj6 = {};
        obj6.style = tmp.buttonSpacing;
        tmp23 = jsxs;
        tmp24 = Fragment;
        items7 = [, ];
        items7[0] = jsx(View, obj6);
        tmp28 = graphic;
        tmp29 = renderImgComponent;
        num2 = 14;
        tmp27 = jsx;
        if (experimental_withBlurBackground) {
          obj7 = { variant: "secondary-overlay", size: "lg", text: null, onPress: null, grow: true };
          obj7.text = buttonLabel;
          obj7.onPress = onButtonPress;
          obj8 = obj7;
        } else {
          obj8 = {};
          str3 = "secondary";
          if (null != buttonVariant) {
            str3 = buttonVariant;
          }
          obj8.variant = str3;
          str4 = "lg";
          if (tmp12) {
            str4 = "sm";
          }
          obj8.size = str4;
          obj8.text = buttonLabel;
          obj8.onPress = onButtonPress;
          obj8.grow = true;
        }
        items7[1] = tmp27(require("Button").Button, obj8);
        obj5.children = items7;
        tmp23Result = tmp23(tmp24, obj5);
      }
    }
    items6[1] = tmp22;
    obj9 = { accessibilityRole: "button" };
    tmp31 = jsx;
    tmp32 = Pressable;
    intl = require("getSystemLocale").intl;
    obj9.accessibilityLabel = intl.string(require("getSystemLocale").t.cpT0Cq);
    obj9.style = tmp.closeButton;
    obj9.onPress = onDismiss;
    obj9.onPressIn = callback;
    obj9.onPressOut = callback1;
    tmp33 = jsx;
    if (tmp12) {
      obj10 = {};
      str5 = "xs";
      obj10.size = "xs";
      tmp34 = imgSource;
      tmp35 = renderImgComponent;
      num3 = 7;
      obj10.color = require("_createForOfIteratorHelperLoose").colors.ICON_STRONG;
      obj11 = obj10;
    } else {
      obj11 = {};
    }
    obj9.children = tmp33(require("XSmallIcon").XSmallIcon, obj11);
    items6[2] = tmp31(tmp32, obj9);
    obj.children = items6;
    tmp13Result = tmp13(tmp14, obj);
    if (experimental_withBlurBackground) {
      tmp45 = jsx;
      tmp46 = graphic;
      tmp47 = renderImgComponent;
      num6 = 17;
      obj12 = {};
      obj12.style = tmp.bodyContainer;
      str6 = "dark";
      obj12.blurTheme = "dark";
      obj12.pressed = sharedValue;
      obj12.children = tmp13Result;
      tmp37Result = jsx(require("TwinButtons").BackgroundBlurView, obj12);
    } else {
      obj13 = {};
      items8 = [, ];
      ({ bodyContainer: arr9[0], bodyBgColor: arr9[1] } = tmp);
      obj13.style = items8;
      tmp39 = null;
      tmp37 = jsxs;
      tmp38 = View;
      if (tmp12) {
        tmp39 = null;
        if (null != gradientColor) {
          tmp40 = jsx;
          tmp41 = graphic;
          tmp42 = renderImgComponent;
          num4 = 18;
          obj14 = {};
          obj14.style = tmp.gradient;
          obj14.color = gradientColor;
          tmp43 = imgSource;
          num5 = 7;
          obj14.backgroundColor = require("_createForOfIteratorHelperLoose").colors.MOBILE_COACHMARK_BACKGROUND_DEFAULT;
          tmp39 = jsx(require("ExpressiveGradient").ExpressiveGradient, obj14);
        }
      }
      items9 = [, ];
      items9[0] = tmp39;
      items9[1] = tmp13Result;
      obj13.children = items9;
      tmp37Result = tmp37(tmp38, obj13);
    }
    obj15 = {
      onLayout(nativeEvent) {
            nativeEvent = nativeEvent.nativeEvent;
            callback({ width: nativeEvent.layout.width, height: nativeEvent.layout.height });
          }
    };
    items10 = [, , ];
    items10[0] = tmp.container;
    tmp48 = jsxs;
    tmp49 = View;
    obj19 = require("set");
    shadow = undefined;
    if (obj19.isIOS()) {
      shadow = tmp.shadow;
    }
    items10[1] = shadow;
    obj16 = {};
    num7 = 0;
    if (null != first) {
      num7 = 1;
    }
    obj16.opacity = num7;
    obj16.top = tooltipY;
    obj16.left = tooltipX;
    items10[2] = obj16;
    obj15.style = items10;
    tmp51 = "bottom" === position;
    if (tmp51) {
      tmp52 = jsx;
      tmp53 = Cursor;
      obj17 = {};
      obj17.position = "bottom";
      obj17.adjustmentX = adjustmentX;
      tmp51 = jsx(Cursor, obj17);
    }
    items11 = [, , ];
    items11[0] = tmp51;
    obj18 = {};
    tmp54 = jsx;
    tmp55 = createAnimatedComponent;
    merged = Object.assign(tmp10);
    obj18["onAccessibilityEscape"] = onDismiss;
    obj18["accessible"] = false;
    obj18["onPress"] = onDismiss;
    items12 = [, ];
    items12[0] = tmp.body;
    obj23 = require("set");
    if (obj23.isAndroid()) {
      items13 = [, ];
      items13[0] = tmp.shadow;
      items13[1] = global.enterExitAnimatedStyles;
      items14 = items13;
    } else {
      items14 = [];
    }
    arraySpreadResult = HermesBuiltin.arraySpread(items14, 1);
    items12[arraySpreadResult] = buttonPressAnimationProps.style;
    obj18["style"] = items12;
    obj18["children"] = tmp37Result;
    items11[1] = tmp54(tmp55, obj18);
    tmp58 = "top" === position;
    if (tmp58) {
      tmp59 = jsx;
      tmp60 = Cursor;
      obj19 = {};
      obj19.position = "top";
      obj19.adjustmentX = adjustmentX;
      tmp58 = jsx(Cursor, obj19);
    }
    items11[2] = tmp58;
    obj15.children = items11;
    return tmp48(tmp49, obj15);
  }
}
function Cursor(arg0) {
  let adjustmentX;
  let position;
  ({ position, adjustmentX } = arg0);
  const tmp = callback4();
  let str = "column";
  if ("top" === position) {
    str = "column-reverse";
  }
  let obj = {};
  if ("top" === position) {
    obj.marginTop = -6;
    let tmp3 = obj;
  } else {
    obj.marginBottom = -6;
    tmp3 = obj;
  }
  obj = { style: items };
  items = [tmp.cursorContainer, tmp3, ];
  obj = { flexDirection: str, left: -adjustmentX };
  items[2] = obj;
  const items1 = [callback2(closure_7, { style: tmp.cursorHead }), callback2(closure_7, { style: tmp.cursorSpine })];
  obj.children = items1;
  return callback3(closure_7, obj);
}
let closure_3 = ["style"];
({ View: closure_7, Pressable } = get_ActivityIndicator);
const Image = get_ActivityIndicator.Image;
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
let closure_13 = require("module_3991").createAnimatedComponent(Pressable);
let obj = { container: { position: "absolute", alignItems: "center" } };
obj = {};
let merged = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_BUTTON_OVERLAY);
obj.shadow = obj;
_createForOfIteratorHelperLoose = { width: require("_createForOfIteratorHelperLoose").modules.mobile.COACHMARK_BODY_WIDTH, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, overflow: "hidden", zIndex: 1 };
obj.body = _createForOfIteratorHelperLoose;
obj.textGap = { gap: 4 };
obj.textOnlyPadding = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_24 };
let obj2 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_24 };
obj.bodyBgColor = { borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_COACHMARK_BORDER_DEFAULT, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_COACHMARK_BACKGROUND_DEFAULT, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
let obj3 = { borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_COACHMARK_BORDER_DEFAULT, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_COACHMARK_BACKGROUND_DEFAULT, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
obj.gradient = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, overflow: "hidden" };
let obj5 = { padding: require("_createForOfIteratorHelperLoose").space.PX_16, alignItems: "center", justifyContent: "center" };
obj.bodyContainer = obj5;
obj.center = { alignItems: "center", justifyContent: "center" };
let obj4 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, overflow: "hidden" };
obj.buttonSpacing = { height: require("_createForOfIteratorHelperLoose").modules.mobile.COACHMARK_BUTTON_SPACING };
obj.text = { maxWidth: 200, textAlign: "center" };
obj.cursorContainer = { alignItems: "center", zIndex: 0 };
let obj7 = { height: 8, width: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, borderWidth: 2, backgroundColor: "transparent", borderColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE };
obj.cursorHead = obj7;
let obj8 = { width: 2, height: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE };
obj.cursorSpine = obj8;
obj.image = { height: 40, width: 40 };
let obj6 = { height: require("_createForOfIteratorHelperLoose").modules.mobile.COACHMARK_BUTTON_SPACING };
obj.bottomMargin = { marginBottom: require("_createForOfIteratorHelperLoose").modules.mobile.COACHMARK_BUTTON_SPACING };
let obj9 = { marginBottom: require("_createForOfIteratorHelperLoose").modules.mobile.COACHMARK_BUTTON_SPACING };
obj.closeButton = { position: "absolute", top: require("_createForOfIteratorHelperLoose").modules.mobile.COACHMARK_BUTTON_SPACING, right: require("_createForOfIteratorHelperLoose").modules.mobile.COACHMARK_BUTTON_SPACING };
let closure_14 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_15 = { "21/9": 90, "16/9": 90, "6/4": 60, "2/1": 40, "1/1": 40 };
let obj10 = { position: "absolute", top: require("_createForOfIteratorHelperLoose").modules.mobile.COACHMARK_BUTTON_SPACING, right: require("_createForOfIteratorHelperLoose").modules.mobile.COACHMARK_BUTTON_SPACING };
let result = require("result").fileFinishedImporting("design/components/Coachmark/native/Coachmark.native.tsx");

export { Coachmark };
export const CoachmarkContainer = function CoachmarkContainer(experimental_withBlurBackground) {
  let obj = require(3842) /* ManaContext */;
  let str = "dark";
  if (!experimental_withBlurBackground.experimental_withBlurBackground) {
    str = obj.useThemeContext().theme;
  }
  obj = { theme: str };
  obj = {};
  const merged = Object.assign(experimental_withBlurBackground);
  obj.children = callback2(Coachmark, obj);
  return callback2(require(3842) /* ManaContext */.ThemeContextProvider, obj);
};
