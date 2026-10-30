// Module ID: 5630
// Function ID: 5631
// Name: BaseTextButton
// Dependencies: [32, 19, 17, 21, 5009, 575, 5090, 5631, 5632, 5633, 5635, 1376, 5636, 5619, 5023, 5255, 5638, 5182, 5640, 2]

// Module 5630 (BaseTextButton)
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import HapticUtils from "HapticUtils" /* 5255 */;
import IconDefault from "Icon" /* 5631 */;
import ButtonConstants from "ButtonConstants" /* 5635 */;
import ButtonHooks from "ButtonHooks" /* 5636 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let rect;
let rect1;
let rect2;
function CollapsingText(collapseText) {
  let items1;
  collapseText = collapseText.collapseText;
  let sharedValue;
  const children = collapseText.children;
  const tmp = closure_10();
  let obj = sharedValue(5090);
  sharedValue = obj.useSharedValue(0);
  let obj2 = sharedValue(5090);
  const fn = function o(nativeEvent) {
    nativeEvent = nativeEvent.nativeEvent;
    const obj = sharedValue;
    if (0 === sharedValue.get()) {
      const result = obj.set(nativeEvent.layout.width);
    }
  };
  fn.__closure = { containerWidth: sharedValue };
  fn.__workletHash = 5541458715155;
  fn.__initData = __initData;
  const items = [sharedValue];
  const workletCallback = obj2.useWorkletCallback(fn, items);
  obj3 = sharedValue(5090);
  const fn2 = function o() {
    let obj2;
    let withSpring;
    const obj = sharedValue;
    if (0 === sharedValue.get()) {
      obj2 = {};
    } else {
      const withSpring2 = sharedValue(dependencyMap[8]).withSpring;
      let num2 = 1;
      let num = 0;
      sharedValue(dependencyMap[8]);
      obj3 = collapseText;
      if (1 !== collapseText.get()) {
        num = obj.get();
      }
      obj2 = { width: withSpring2(num, sharedValue(dependencyMap[9]).SUBTLE_SPRING, "animate-always"), opacity: withSpring(num2, sharedValue(dependencyMap[9]).SUBTLE_SPRING, "animate-always") };
      withSpring = sharedValue(dependencyMap[8]).withSpring;
      sharedValue(dependencyMap[8]);
      if (num2 === obj3.get()) {
        num2 = 0;
      }
    }
    return obj2;
  };
  fn2.__closure = { containerWidth: sharedValue, withSpring: sharedValue(5632).withSpring, collapsed: collapseText, SUBTLE_SPRING: sharedValue(5633).SUBTLE_SPRING };
  fn2.__workletHash = 493185281611;
  fn2.__initData = __initData2;
  ({ containerWidth: sharedValue, withSpring: sharedValue(5632).withSpring, collapsed: collapseText, SUBTLE_SPRING: sharedValue(5633).SUBTLE_SPRING });
  const animatedStyle = obj3.useAnimatedStyle(fn2);
  const textCollapsed = closure_10().textCollapsed;
  const fn3 = function s() {
    let obj;
    if (0 === collapseText.get()) {
      obj = {};
    } else {
      obj = { width: sharedValue.get() };
      const merged = Object.assign(textCollapsed);
    }
    return obj;
  };
  fn3.__closure = { collapsed: collapseText, textCollapsed, containerWidth: sharedValue };
  fn3.__workletHash = 5824483783888;
  fn3.__initData = __initData3;
  const obj5 = sharedValue(5090);
  const animatedStyle1 = obj5.useAnimatedStyle(fn3);
  const obj6 = { style: items1, onLayout: workletCallback, children: closure_7(ReanimatedRexport.View, { style: animatedStyle1, children }) };
  items1 = [tmp.container, animatedStyle];
  const View = ReanimatedRexport.View;
  return closure_7(View, obj6);
}
function BaseTextButtonIcon(arg0) {
  let icon;
  let iconOpticalOffsetMargin;
  let iconPosition;
  let items;
  let style;
  ({ icon, size, iconPosition, iconOpticalOffsetMargin, style } = arg0);
  const obj = ButtonHooks;
  const iconSizeStyles = obj.useIconSizeStyles(size);
  const obj2 = { source: icon, style: items };
  items = [style, iconSizeStyles, closure_18(iconPosition, iconOpticalOffsetMargin).offset];
  return metroImportDefault(Icon, obj2);
}
class BaseTextButton {
  constructor(ref) {
    let ButtonPill;
    let Provider;
    let accessibilityLabel;
    let accessibilityRole;
    let c4;
    let collapseText;
    let icon;
    let iconPosition;
    let items3;
    let items4;
    let items5;
    let items6;
    let maxFontSizeMultiplier;
    let obj8;
    let obj9;
    let pillStyle;
    let str4;
    let style;
    let text;
    let textElement;
    let textVariant;
    let tmp23;
    let tmp31;
    let tmp32;
    let tmp33;
    ref = ref.ref;
    let merged = Object.assign(ref, Object.assign({ ref: 0 }));
    let onPressIn;
    let onPressOut;
    let onLayout;
    let enabled;
    react = undefined;
    let ref1;
    ref = undefined;
    let closure_7;
    ({ text, textElement, size, style, pillStyle } = merged);
    if (undefined === size) {
      let tmp3 = onLayout;
      size = onPressIn(onLayout[10]).DEFAULT_BUTTON_SIZE;
    }
    ({ icon, iconPosition } = merged);
    let str = "start";
    const loading = merged.loading;
    if (undefined !== iconPosition) {
      str = iconPosition;
    }
    const iconOpticalOffsetMargin = merged.iconOpticalOffsetMargin;
    let num = 0;
    if (undefined !== iconOpticalOffsetMargin) {
      num = iconOpticalOffsetMargin;
    }
    const grow = merged.grow;
    let grow2 = undefined !== grow && grow;
    const shrink = merged.shrink;
    let shrink2 = undefined !== shrink && shrink;
    ({ collapseText, accessibilityRole } = merged);
    let str2 = "button";
    if (undefined !== accessibilityRole) {
      str2 = accessibilityRole;
    }
    ({ accessibilityLabel, maxFontSizeMultiplier } = merged);
    if (undefined === maxFontSizeMultiplier) {
      let tmp4 = onPressIn;
      maxFontSizeMultiplier = onPressIn(onLayout[10]).BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
    }
    const shiny = merged.shiny;
    onPressIn = merged.onPressIn;
    onPressOut = merged.onPressOut;
    onLayout = merged.onLayout;
    const tmp6 = undefined !== shiny && shiny;
    if (null != merged.textVariant) {
      textVariant = merged.textVariant;
    } else {
      let obj = onPressIn(onLayout[10]);
      textVariant = obj.getButtonDefaultTextVariant(size);
    }
    const tmp11 = onPressIn(onLayout[13]).TextStyleSheet[textVariant];
    const tmp12 = closure_9(size, tmp11.fontSize);
    let obj2 = react;
    const tmp13 = obj3[size];
    enabled = react.useContext(onPressIn(onLayout[14]).AccessibilityPreferencesContext).reducedMotion.enabled;
    let str3 = merged.variant;
    if (str3 == null) {
      str3 = "primary";
    }
    if ("tertiary" === str3) {
      str3 = "secondary";
    }
    const tmp9Result = onPressIn(onLayout[6]);
    const sharedValue = tmp9Result.useSharedValue(0);
    const startsWithResult = str3.startsWith("expressive");
    react = startsWithResult;
    ref1 = obj2.useRef(null);
    ref = obj2.useRef({ width: 0, height: 0 });
    const tmp17 = enabled(obj2.useState({ pressed: false, posx: 0, posy: 0 }), 2);
    closure_7 = tmp17[1];
    const items = [onLayout, startsWithResult];
    const first = tmp17[0];
    const items1 = [startsWithResult, onPressIn, enabled];
    const callback = obj2.useCallback((nativeEvent) => {
      if (onLayout != null) {
        tmp(nativeEvent);
      }
      const tmp3 = c4;
      if (tmp3) {
        size = { width: null, height: null };
        ({ width: obj.width, height: obj.height } = nativeEvent.nativeEvent.layout);
        ref.current = size;
      }
    }, items);
    const items2 = [startsWithResult, onPressOut];
    const callback1 = obj2.useCallback((nativeEvent) => {
      if (onPressIn != null) {
        tmp(nativeEvent);
      }
      const tmp3 = c4;
      if (tmp3) {
        const tmp4 = enabled;
        if (tmp4) {
          const current2 = ref1.current;
          if (current2 != null) {
            current2.play();
          }
        } else {
          nativeEvent = nativeEvent.nativeEvent;
          const current = ref.current;
          const obj = { pressed: true, posx: nativeEvent.locationX - current.width / 2, posy: nativeEvent.locationY - current.height / 2 };
          closure_7(obj);
        }
        const obj2 = HapticUtils;
        const result = obj2.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_HEAVY);
      }
    }, items1);
    const callback2 = obj2.useCallback((arg0) => {
      if (onPressOut != null) {
        tmp(arg0);
      }
      const tmp4 = c4;
      if (tmp4) {
        closure_7((arg0) => {
          const obj = { pressed: false };
          const merged = Object.assign(arg0);
          return obj;
        });
        let obj = HapticUtils;
        const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      }
    }, items2);
    const tmp9Result4 = onPressIn(onLayout[12]);
    const buttonTextColorStyles = tmp9Result4.useButtonTextColorStyles(str3);
    if (null == icon) {
      obj3 = {};
    } else {
      obj3 = "start" === str ? tmp12.iconLeft : tmp12.iconRight;
    }
    if (null == icon) {
      const obj4 = { icon, size, style: items3, iconOpticalOffsetMargin: num, iconPosition: str };
      items3 = [tmp12.icon, ];
      const obj5 = { tintColor: buttonTextColorStyles.color };
      items3[1] = obj5;
      tmp23 = closure_7(BaseTextButtonIcon, obj4);
    } else {
      tmp23 = icon;
    }
    if (null == textElement) {
      const obj6 = { maxFontSizeMultiplier, numberOfLines: 1, style: items4, children: text };
      items4 = [tmp12.buttonText, tmp11, , , ];
      let androidLineHeight = null;
      const tmp26 = closure_7;
      const tmp27 = ref1;
      const tmp9Result5 = onPressIn(onLayout[11]);
      if (tmp9Result5.isAndroid()) {
        androidLineHeight = tmp12.androidLineHeight;
      }
      items4[2] = androidLineHeight;
      items4[3] = buttonTextColorStyles;
      items4[4] = obj3;
      textElement = tmp26(tmp27, obj6);
    }
    const obj7 = { ref, onPressIn: callback1, onPressOut: callback2, onLayout: callback, style: items5, pointerEvents: str4, pressed: sharedValue, accessibilityRole: str2, accessibilityLabel, hitSlop: tmp13, children: closure_7(ButtonPill, obj8) };
    const BaseButton = tmp9(tmp10[16]).BaseButton;
    const merged1 = Object.assign(merged);
    if (grow2) {
      grow2 = tmp12.grow;
    }
    items5 = [grow2, , , ];
    if (shrink2) {
      shrink2 = tmp12.shrink;
    }
    items5[1] = shrink2;
    items5[2] = style;
    items5[3] = startsWithResult && tmp12.expressiveButtonContainer;
    str4 = "box-only";
    if (!startsWithResult) {
      str4 = merged.pointerEvents;
    }
    if (accessibilityLabel == null) {
      const tmp9Result6 = onPressIn(onLayout[17]);
      accessibilityLabel = tmp9Result6.getNodeText(text);
    }
    obj8 = { variant: str3, size, loading, pressed: sharedValue, style: pillStyle, shiny: tmp6, expressiveRiveRef: tmp31, expressivePressState: tmp32, children: tmp33(Provider, obj9) };
    tmp31 = undefined;
    ButtonPill = tmp9(tmp10[18]).ButtonPill;
    if (startsWithResult) {
      tmp31 = ref1;
    }
    tmp32 = undefined;
    if (startsWithResult) {
      tmp32 = first;
    }
    let tmp34 = null != icon;
    Provider = redux.Provider;
    obj9 = { value: size, children: items6 };
    tmp33 = closure_8;
    if (tmp34) {
      tmp34 = "start" === str;
    }
    if (tmp34) {
      tmp34 = tmp23;
    }
    items6 = [tmp34, , ];
    let tmp29Result = textElement;
    if (undefined !== collapseText) {
      const obj10 = { collapseText, children: textElement };
      tmp29Result = tmp29(CollapsingText, obj10);
    }
    items6[1] = tmp29Result;
    const tmp37 = null != icon && "end" === str && tmp23;
    items6[2] = tmp37;
    return closure_7(BaseButton, obj7);
  }
}
let react = react_mod;
({ Text: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
const React4 = createStyles.createStyles((arg0, sm) => {
  const obj = { grow: { flexGrow: 1, alignSelf: "stretch" }, shrink: { flexShrink: 1 }, buttonText: { flexShrink: 1, flexGrow: 0 }, androidLineHeight: null, icon: null, iconLeft: null, iconRight: null, expressiveButtonContainer: null };
  if (typeof getTextPlatformLineHeight === "function") {
    let tmp3;
    if (null != sm) {
      tmp3 = { sm, md: sm + 0.5, lg: sm + 1.9 }[arg0];
    }
    let tmp7;
    obj3 = PlatformUtils;
    if (obj3.isAndroid()) {
      tmp7 = tmp3;
    }
    const obj4 = { lineHeight: tmp7 };
    obj.androidLineHeight = obj4;
    obj.icon = { flexShrink: 0, flexGrow: 0 };
    obj.iconLeft = { paddingLeft: 4 };
    obj.iconRight = { paddingRight: 4 };
    obj.expressiveButtonContainer = { position: "relative" };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
createStyles = createStyles_mod;
let closure_10 = createStyles.createStyles({ container: { flexDirection: "row", alignItems: "center", position: "relative" }, textCollapsed: { position: "absolute", left: 0 } });
createStyles = createStyles_mod;
let obj = { entityWrapper: obj2 };
obj2 = { borderWidth: 1, borderRadius: nativeDefault.radii.round, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden" };
let closure_11 = createStyles.createStyles(obj);
const Icon = ReanimatedRexport.createAnimatedComponent(IconDefault);
react.createContext("md");
const __initData = { code: "function BaseTextButtonNativeTsx1({nativeEvent:nativeEvent}){const{containerWidth}=this.__closure;if(containerWidth.get()!==0)return;const{width:width}=nativeEvent.layout;containerWidth.set(width);}" };
const __initData2 = { code: "function BaseTextButtonNativeTsx2(){const{containerWidth,withSpring,collapsed,SUBTLE_SPRING}=this.__closure;if(containerWidth.get()===0)return{};return{width:withSpring(collapsed.get()===1?0:containerWidth.get(),SUBTLE_SPRING,'animate-always'),opacity:withSpring(collapsed.get()===1?0:1,SUBTLE_SPRING,'animate-always')};}" };
const __initData3 = { code: "function BaseTextButtonNativeTsx3(){const{collapsed,textCollapsed,containerWidth}=this.__closure;if(collapsed.get()===0)return{};return{...textCollapsed,width:containerWidth.get()};}" };
createStyles = createStyles_mod;
let closure_18 = createStyles.createStyles((arg0, marginLeft) => {
  if (0 === marginLeft) {
    return { offset: {} };
  } else if ("start" === arg0) {
    obj3 = { offset: obj4 };
    return obj3;
  } else if ("end" === arg0) {
    const obj5 = { offset: obj6 };
    return obj5;
  } else {
    return { offset: {} };
  }
});
let obj3 = { sm: rect, md: rect1, lg: rect2 };
const LARGE_BUTTON_HEIGHT = ButtonConstants.LARGE_BUTTON_HEIGHT;
const bound = Math.max((ButtonConstants.MINIMUM_HIT_AREA - ButtonConstants.SMALL_BUTTON_HEIGHT) / 2, 0);
rect = { top: bound, left: "Array", right: "applicationId", bottom: bound };
const LARGE_BUTTON_HEIGHT2 = ButtonConstants.LARGE_BUTTON_HEIGHT;
const bound1 = Math.max((ButtonConstants.MINIMUM_HIT_AREA - ButtonConstants.MEDIUM_BUTTON_HEIGHT) / 2, 0);
rect1 = { top: bound1, left: "Array", right: "applicationId", bottom: bound1 };
const bound2 = Math.max((ButtonConstants.MINIMUM_HIT_AREA - ButtonConstants.LARGE_BUTTON_HEIGHT) / 2, 0);
rect2 = { top: bound2, left: "Array", right: "applicationId", bottom: bound2 };
function getTextPlatformLineHeight(arg0, arg1) {

}
BaseTextButton.Icon = function TextButtonIcon(variant) {
  let str = variant.variant;
  const source = variant.source;
  if (str === undefined) {
    str = "icon";
  }
  let flag = variant.disableColor;
  if (flag === undefined) {
    flag = true;
  }
  const context = react.useContext(redux);
  const tmp2 = closure_11();
  const obj = ButtonHooks;
  const obj2 = { source, disableColor: flag, style: obj.useIconSizeStyles(context) };
  const tmp4 = metroImportDefault(Icon, obj2);
  let tmp3Result = tmp4;
  const tmp3 = metroImportDefault;
  if ("entity" === str) {
    obj3 = { style: tmp2.entityWrapper, children: tmp4 };
    tmp3Result = tmp3(metroRequire, obj3);
  }
  return tmp3Result;
};
let size = size_mod;
let result = size.fileFinishedImporting("design/components/Button/native/BaseTextButton.native.tsx");

export { BaseTextButton };
