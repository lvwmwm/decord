// Module ID: 5282
// Function ID: 5283
// Name: BaseTextButton
// Dependencies: [32, 19, 17, 21, 4836, 576, 4566, 5283, 5280, 5284, 5286, 1364, 5287, 4832, 4550, 4801, 5289, 4533, 5291, 2]

// Module 5282 (BaseTextButton)
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import HapticUtils from "HapticUtils" /* 4801 */;
import IconDefault from "Icon" /* 5283 */;
import ButtonConstants from "ButtonConstants" /* 5286 */;
import ButtonHooks from "ButtonHooks" /* 5287 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import size_mod from "module_2" /* 2 */;

let loading;

let bound;
let bound1;
let bound2;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
function CollapsingText(collapseText) {
  let items1;
  collapseText = collapseText.collapseText;
  let sharedValue;
  const children = collapseText.children;
  const tmp = closure_10();
  let obj = sharedValue(4566);
  sharedValue = obj.useSharedValue(0);
  let obj2 = sharedValue(4566);
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
  obj3 = sharedValue(4566);
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
  fn2.__closure = { containerWidth: sharedValue, withSpring: sharedValue(5280).withSpring, collapsed: collapseText, SUBTLE_SPRING: sharedValue(5284).SUBTLE_SPRING };
  fn2.__workletHash = 493185281611;
  fn2.__initData = __initData2;
  ({ containerWidth: sharedValue, withSpring: sharedValue(5280).withSpring, collapsed: collapseText, SUBTLE_SPRING: sharedValue(5284).SUBTLE_SPRING });
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
  const obj5 = sharedValue(4566);
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
let react = react_mod;
({ Text: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let closure_9 = createStyles.createStyles((arg0, sm) => {
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
const redux = react.createContext("md");
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
let obj3 = { sm: { top: bound, left: "Array", right: "paddingHorizontal", bottom: bound }, md: { top: bound1, left: "Array", right: "paddingHorizontal", bottom: bound1 }, lg: { top: bound2, left: "Array", right: "paddingHorizontal", bottom: bound2 } };
const LARGE_BUTTON_HEIGHT = ButtonConstants.LARGE_BUTTON_HEIGHT;
bound = Math.max((ButtonConstants.MINIMUM_HIT_AREA - ButtonConstants.SMALL_BUTTON_HEIGHT) / 2, 0);
const LARGE_BUTTON_HEIGHT2 = ButtonConstants.LARGE_BUTTON_HEIGHT;
bound1 = Math.max((ButtonConstants.MINIMUM_HIT_AREA - ButtonConstants.MEDIUM_BUTTON_HEIGHT) / 2, 0);
bound2 = Math.max((ButtonConstants.MINIMUM_HIT_AREA - ButtonConstants.LARGE_BUTTON_HEIGHT) / 2, 0);
function getTextPlatformLineHeight(arg0, arg1) {

}
let obj4 = {
  Icon: function TextButtonIcon(variant) {
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
  }
};
let merged = Object.assign({}, react.forwardRef((loading, ref) => {
  let ButtonPill;
  let Provider;
  let accessibilityLabel;
  let accessibilityRole;
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
  let onLayout;
  let onPressIn;
  let pillStyle;
  let str4;
  let style;
  let text;
  let textElement;
  let textVariant;
  let tmp22;
  let tmp30;
  let tmp31;
  let tmp32;
  ({ text, textElement, size } = loading);
  ({ style, pillStyle } = loading);
  if (undefined === size) {
    const tmp = onPressIn;
    size = onPressIn(onLayout[10]).DEFAULT_BUTTON_SIZE;
  }
  ({ icon, iconPosition } = loading);
  let str = "start";
  loading = loading.loading;
  if (undefined !== iconPosition) {
    str = iconPosition;
  }
  const iconOpticalOffsetMargin = loading.iconOpticalOffsetMargin;
  let num = 0;
  if (undefined !== iconOpticalOffsetMargin) {
    num = iconOpticalOffsetMargin;
  }
  const grow = loading.grow;
  let grow2 = undefined !== grow && grow;
  const shrink = loading.shrink;
  let shrink2 = undefined !== shrink && shrink;
  ({ collapseText, accessibilityRole } = loading);
  let str2 = "button";
  if (undefined !== accessibilityRole) {
    str2 = accessibilityRole;
  }
  ({ accessibilityLabel, maxFontSizeMultiplier } = loading);
  if (undefined === maxFontSizeMultiplier) {
    let tmp3 = onPressIn;
    let tmp4 = onLayout;
    maxFontSizeMultiplier = onPressIn(onLayout[10]).BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
  }
  const shiny = loading.shiny;
  onPressIn = loading.onPressIn;
  const onPressOut = loading.onPressOut;
  onLayout = loading.onLayout;
  const tmp5 = undefined !== shiny && shiny;
  if (null != loading.textVariant) {
    textVariant = loading.textVariant;
  } else {
    let obj = onPressIn(onLayout[10]);
    textVariant = obj.getButtonDefaultTextVariant(size);
  }
  const tmp10 = onPressIn(onLayout[13]).TextStyleSheet[textVariant];
  const tmp11 = closure_9(size, tmp10.fontSize);
  let obj2 = react;
  const tmp12 = obj3[size];
  const enabled = react.useContext(onPressIn(onLayout[14]).AccessibilityPreferencesContext).reducedMotion.enabled;
  let str3 = loading.variant;
  if (str3 == null) {
    str3 = "primary";
  }
  if ("tertiary" === str3) {
    str3 = "secondary";
  }
  const tmp8Result = onPressIn(onLayout[6]);
  const sharedValue = tmp8Result.useSharedValue(0);
  const startsWithResult = str3.startsWith("expressive");
  react = startsWithResult;
  obj2.useRef(null);
  ref = obj2.useRef({ width: 0, height: 0 });
  const tmp16 = enabled(obj2.useState({ pressed: false, posx: 0, posy: 0 }), 2);
  let closure_7 = tmp16[1];
  const items = [onLayout, startsWithResult];
  const first = tmp16[0];
  const items1 = [startsWithResult, onPressIn, enabled];
  const callback = obj2.useCallback((nativeEvent) => {
    if (onLayout != null) {
      tmp(nativeEvent);
    }
    const tmp3 = react;
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
    const tmp3 = react;
    if (tmp3) {
      const tmp4 = enabled;
      if (tmp4) {
        const current2 = ref.current;
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
    const tmp4 = react;
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
  const tmp8Result4 = onPressIn(onLayout[12]);
  const buttonTextColorStyles = tmp8Result4.useButtonTextColorStyles(str3);
  if (null == icon) {
    obj3 = {};
  } else {
    obj3 = "start" === str ? tmp11.iconLeft : tmp11.iconRight;
  }
  if (null == icon) {
    const obj4 = { icon, size, style: items3, iconOpticalOffsetMargin: num, iconPosition: str };
    items3 = [tmp11.icon, ];
    const obj5 = { tintColor: buttonTextColorStyles.color };
    items3[1] = obj5;
    tmp22 = closure_7(BaseTextButtonIcon, obj4);
  } else {
    tmp22 = icon;
  }
  if (null == textElement) {
    const obj6 = { maxFontSizeMultiplier, numberOfLines: 1, style: items4, children: text };
    items4 = [tmp11.buttonText, tmp10, , , ];
    let androidLineHeight = null;
    const tmp25 = closure_7;
    const tmp26 = ref;
    const tmp8Result5 = onPressIn(onLayout[11]);
    if (tmp8Result5.isAndroid()) {
      androidLineHeight = tmp11.androidLineHeight;
    }
    items4[2] = androidLineHeight;
    items4[3] = buttonTextColorStyles;
    items4[4] = obj3;
    textElement = tmp25(tmp26, obj6);
  }
  const obj7 = { ref, onPressIn: callback1, onPressOut: callback2, onLayout: callback, style: items5, pointerEvents: str4, pressed: sharedValue, accessibilityRole: str2, accessibilityLabel, hitSlop: tmp12, children: closure_7(ButtonPill, obj8) };
  const BaseButton = tmp8(tmp9[16]).BaseButton;
  let merged = Object.assign(loading);
  if (grow2) {
    grow2 = tmp11.grow;
  }
  items5 = [grow2, , , ];
  if (shrink2) {
    shrink2 = tmp11.shrink;
  }
  items5[1] = shrink2;
  items5[2] = style;
  items5[3] = startsWithResult && tmp11.expressiveButtonContainer;
  str4 = "box-only";
  if (!startsWithResult) {
    str4 = loading.pointerEvents;
  }
  if (accessibilityLabel == null) {
    const tmp8Result6 = onPressIn(onLayout[17]);
    accessibilityLabel = tmp8Result6.getNodeText(text);
  }
  obj8 = { variant: str3, size, loading, pressed: sharedValue, style: pillStyle, shiny: tmp5, expressiveRiveRef: tmp30, expressivePressState: tmp31, children: tmp32(Provider, obj9) };
  tmp30 = undefined;
  ButtonPill = tmp8(tmp9[18]).ButtonPill;
  if (startsWithResult) {
    tmp30 = ref;
  }
  tmp31 = undefined;
  if (startsWithResult) {
    tmp31 = first;
  }
  let tmp33 = null != icon;
  Provider = redux.Provider;
  obj9 = { value: size, children: items6 };
  tmp32 = closure_8;
  if (tmp33) {
    tmp33 = "start" === str;
  }
  if (tmp33) {
    tmp33 = tmp22;
  }
  items6 = [tmp33, , ];
  let tmp28Result = textElement;
  if (undefined !== collapseText) {
    const obj10 = { collapseText, children: textElement };
    tmp28Result = tmp28(CollapsingText, obj10);
  }
  items6[1] = tmp28Result;
  const tmp36 = null != icon && "end" === str && tmp22;
  items6[2] = tmp36;
  return closure_7(BaseButton, obj7);
}), obj4);
let size = size_mod;
let result = size.fileFinishedImporting("design/components/Button/native/BaseTextButton.native.tsx");

export const BaseTextButton = merged;
