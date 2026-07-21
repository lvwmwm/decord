// Module ID: 8564
// Function ID: 68051
// Name: Coachmark
// Dependencies: []
// Exports: CoachmarkContainer

// Module 8564 (Coachmark)
let Pressable;
class Coachmark {
  constructor(arg0) {
    ({ targetMeasurements, surfaceMeasurements, offsetY } = global);
    num = 0;
    ({ title, description } = global);
    if (undefined !== offsetY) {
      num = offsetY;
    }
    graphic = global.graphic;
    arg1 = graphic;
    imgSource = global.imgSource;
    importDefault = imgSource;
    ({ position, onDismiss, buttonLabel, buttonVariant, onButtonPress, gradientColor, experimental_withBlurBackground, renderImgComponent } = global);
    dependencyMap = renderImgComponent;
    tmp = closure_14();
    Cursor = tmp;
    ref = importAll.useRef(null);
    closure_4 = ref;
    tmp3 = closure_5(importAll.useState(null), 2);
    first = tmp3[0];
    closure_5 = tmp3[1];
    tmp5 = importDefault(dependencyMap[8])(first, surfaceMeasurements, targetMeasurements, position, -8 + num);
    adjustmentX = tmp5.adjustmentX;
    ({ tooltipX, tooltipY } = tmp5);
    obj = arg1(dependencyMap[5]);
    sharedValue = require("module_0");
    importAll = sharedValue;
    items = [];
    items[0] = sharedValue;
    items1 = [];
    items1[0] = sharedValue;
    callback = importAll.useCallback(() => {
      const result = sharedValue.set(1);
    }, items);
    callback1 = importAll.useCallback(() => {
      const result = sharedValue.set(0);
    }, items1);
    obj2 = arg1(dependencyMap[9]);
    buttonPressAnimationProps = obj2.useButtonPressAnimationProps(sharedValue);
    tmp10 = closure_4(buttonPressAnimationProps, Cursor);
    items2 = [, , , ];
    items2[0] = graphic;
    items2[1] = imgSource;
    items2[2] = renderImgComponent;
    items2[3] = tmp;
    memo = importAll.useMemo(() => {
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
        obj1.height = closure_15[str];
        obj1.width = "auto";
        obj["style"] = obj1;
        obj.children = callback2(graphic(renderImgComponent[10]).Graphic, obj);
        return callback2(closure_7, obj);
      } else {
        let tmp2 = null;
        if (null != renderImgComponent) {
          tmp2 = renderImgComponent();
        }
        if (null != imgSource) {
          obj = { source: imgSource, style: tmp.image };
          tmp2 = callback2(closure_9, obj);
        }
        let tmp8 = null;
        if (null != tmp2) {
          const obj2 = { style: tmp.bottomMargin, children: tmp2 };
          tmp8 = callback2(closure_7, obj2);
        }
        return tmp8;
      }
    }, items2);
    tmp12 = importDefault(dependencyMap[11])("Coachmark");
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
    items5[0] = tmp19(arg1(dependencyMap[13]).Text, obj3);
    tmp21 = jsx;
    obj4 = { style: tmp.text, variant: "text-sm/medium" };
    str2 = "text-default";
    if (tmp12) {
      str2 = "text-subtle";
    }
    obj4.color = str2;
    obj4.children = description;
    items5[1] = tmp21(arg1(dependencyMap[13]).Text, obj4);
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
        tmp28 = arg1;
        tmp29 = dependencyMap;
        num2 = 14;
        tmp27 = jsx;
        if (experimental_withBlurBackground) {
          obj7 = {};
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
        items7[1] = tmp27(arg1(dependencyMap[14]).Button, obj8);
        obj5.children = items7;
        tmp23Result = tmp23(tmp24, obj5);
      }
    }
    items6[1] = tmp22;
    obj9 = { accessibilityRole: "button" };
    tmp31 = jsx;
    tmp32 = Pressable;
    intl = arg1(dependencyMap[15]).intl;
    obj9.accessibilityLabel = intl.string(arg1(dependencyMap[15]).t.cpT0Cq);
    obj9.style = tmp.closeButton;
    obj9.onPress = onDismiss;
    obj9.onPressIn = callback;
    obj9.onPressOut = callback1;
    tmp33 = jsx;
    if (tmp12) {
      obj10 = {};
      str5 = "xs";
      obj10.size = "xs";
      tmp34 = importDefault;
      tmp35 = dependencyMap;
      num3 = 7;
      obj10.color = importDefault(dependencyMap[7]).colors.ICON_STRONG;
      obj11 = obj10;
    } else {
      obj11 = {};
    }
    obj9.children = tmp33(arg1(dependencyMap[16]).XSmallIcon, obj11);
    items6[2] = tmp31(tmp32, obj9);
    obj.children = items6;
    tmp13Result = tmp13(tmp14, obj);
    if (experimental_withBlurBackground) {
      tmp45 = jsx;
      tmp46 = arg1;
      tmp47 = dependencyMap;
      num6 = 17;
      obj12 = {};
      obj12.style = tmp.bodyContainer;
      str6 = "dark";
      obj12.blurTheme = "dark";
      obj12.pressed = sharedValue;
      obj12.children = tmp13Result;
      tmp37Result = jsx(arg1(dependencyMap[17]).BackgroundBlurView, obj12);
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
          tmp41 = arg1;
          tmp42 = dependencyMap;
          num4 = 18;
          obj14 = {};
          obj14.style = tmp.gradient;
          obj14.color = gradientColor;
          tmp43 = importDefault;
          num5 = 7;
          obj14.backgroundColor = importDefault(dependencyMap[7]).colors.MOBILE_COACHMARK_BACKGROUND_DEFAULT;
          tmp39 = jsx(arg1(dependencyMap[18]).ExpressiveGradient, obj14);
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
    obj19 = arg1(dependencyMap[19]);
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
    obj23 = arg1(dependencyMap[19]);
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
  const tmp = callback5();
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
  const items = [tmp.cursorContainer, tmp3, ];
  obj = { flexDirection: str, left: -adjustmentX };
  items[2] = obj;
  const items1 = [callback3(closure_7, { style: tmp.cursorHead }), callback3(closure_7, { style: tmp.cursorSpine })];
  obj.children = items1;
  return callback4(closure_7, obj);
}
let closure_3 = ["GUILD_DELETE"];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importAll(dependencyMap[2]);
const tmp2 = arg1(dependencyMap[3]);
({ View: closure_7, Pressable } = tmp2);
const Image = tmp2.Image;
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
let closure_13 = importDefault(dependencyMap[5]).createAnimatedComponent(Pressable);
let obj1 = arg1(dependencyMap[6]);
let obj = { container: {} };
obj = {};
const merged = Object.assign(importDefault(dependencyMap[7]).shadows.SHADOW_BUTTON_OVERLAY);
obj.shadow = obj;
obj1 = { width: importDefault(dependencyMap[7]).modules.mobile.COACHMARK_BODY_WIDTH, borderRadius: importDefault(dependencyMap[7]).radii.lg, overflow: "hidden", zIndex: 1 };
obj.body = obj1;
obj.textGap = { gap: 4 };
const importDefaultResult = importDefault(dependencyMap[5]);
obj.textOnlyPadding = { paddingHorizontal: importDefault(dependencyMap[7]).space.PX_24 };
const obj2 = { paddingHorizontal: importDefault(dependencyMap[7]).space.PX_24 };
obj.bodyBgColor = { borderWidth: 1, borderColor: importDefault(dependencyMap[7]).colors.MOBILE_COACHMARK_BORDER_DEFAULT, backgroundColor: importDefault(dependencyMap[7]).colors.MOBILE_COACHMARK_BACKGROUND_DEFAULT, borderRadius: importDefault(dependencyMap[7]).radii.lg };
const obj3 = { borderWidth: 1, borderColor: importDefault(dependencyMap[7]).colors.MOBILE_COACHMARK_BORDER_DEFAULT, backgroundColor: importDefault(dependencyMap[7]).colors.MOBILE_COACHMARK_BACKGROUND_DEFAULT, borderRadius: importDefault(dependencyMap[7]).radii.lg };
obj.gradient = { borderRadius: importDefault(dependencyMap[7]).radii.lg, overflow: "hidden" };
const obj5 = { <string:1365418235>: false, <string:1398886034>: false, <string:3584858450>: false, padding: importDefault(dependencyMap[7]).space.PX_16 };
obj.bodyContainer = obj5;
obj.center = {};
const obj4 = { borderRadius: importDefault(dependencyMap[7]).radii.lg, overflow: "hidden" };
obj.buttonSpacing = { height: importDefault(dependencyMap[7]).modules.mobile.COACHMARK_BUTTON_SPACING };
obj.text = {};
obj.cursorContainer = {};
const obj6 = { height: importDefault(dependencyMap[7]).modules.mobile.COACHMARK_BUTTON_SPACING };
obj.cursorHead = { borderRadius: importDefault(dependencyMap[7]).radii.xs, borderColor: importDefault(dependencyMap[7]).colors.INTERACTIVE_TEXT_ACTIVE };
const obj8 = { bhk: false, bic: false, backgroundColor: importDefault(dependencyMap[7]).colors.INTERACTIVE_TEXT_ACTIVE };
obj.cursorSpine = obj8;
obj.image = {};
const obj7 = { borderRadius: importDefault(dependencyMap[7]).radii.xs, borderColor: importDefault(dependencyMap[7]).colors.INTERACTIVE_TEXT_ACTIVE };
obj.bottomMargin = { marginBottom: importDefault(dependencyMap[7]).modules.mobile.COACHMARK_BUTTON_SPACING };
const obj9 = { marginBottom: importDefault(dependencyMap[7]).modules.mobile.COACHMARK_BUTTON_SPACING };
obj.closeButton = { position: "absolute", top: importDefault(dependencyMap[7]).modules.mobile.COACHMARK_BUTTON_SPACING, right: importDefault(dependencyMap[7]).modules.mobile.COACHMARK_BUTTON_SPACING };
let closure_14 = obj1.createStyles(obj);
let closure_15 = { -648468124: null, -1067341607: null, 74951703: null, 73901312: null, 74178560: null };
const obj10 = { position: "absolute", top: importDefault(dependencyMap[7]).modules.mobile.COACHMARK_BUTTON_SPACING, right: importDefault(dependencyMap[7]).modules.mobile.COACHMARK_BUTTON_SPACING };
const result = arg1(dependencyMap[21]).fileFinishedImporting("design/components/Coachmark/native/Coachmark.native.tsx");

export { Coachmark };
export const CoachmarkContainer = function CoachmarkContainer(experimental_withBlurBackground) {
  let obj = arg1(dependencyMap[20]);
  let str = "dark";
  if (!experimental_withBlurBackground.experimental_withBlurBackground) {
    str = obj.useThemeContext().theme;
  }
  obj = { theme: str };
  obj = {};
  const merged = Object.assign(experimental_withBlurBackground);
  obj.children = callback3(Coachmark, obj);
  return callback3(arg1(dependencyMap[20]).ThemeContextProvider, obj);
};
