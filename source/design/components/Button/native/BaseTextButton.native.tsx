// Module ID: 4544
// Function ID: 39849
// Name: CollapsingText
// Dependencies: [57, 31, 27, 33, 4130, 689, 3991, 4545, 4542, 4546, 4547, 4548, 1324, 4126, 3849, 4099, 4550, 3836, 4552, 2]

// Module 4544 (CollapsingText)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import getIconSize from "getIconSize";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "module_3991";

let Platform;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function CollapsingText(children) {
  const collapseText = children.collapseText;
  let obj = sharedValue(3991);
  sharedValue = obj.useSharedValue(0);
  const tmp = callback3();
  let fn = function o(nativeEvent) {
    if (0 === sharedValue.get()) {
      const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
    }
  };
  fn.__closure = { containerWidth: sharedValue };
  fn.__workletHash = 5541458715155;
  fn.__initData = closure_14;
  const items = [sharedValue];
  const obj2 = sharedValue(3991);
  const workletCallback = sharedValue(3991).useWorkletCallback(fn, items);
  const tmp4 = (function useCollapsingTextContainerStyles(sharedValue, collapseText) {
    let closure_0 = sharedValue;
    let closure_1 = collapseText;
    let obj = sharedValue(outer1_2[6]);
    const fn = function o() {
      if (0 === sharedValue.get()) {
        let obj = {};
      } else {
        obj = {};
        let num3 = 1;
        let num = 0;
        if (1 !== store.get()) {
          num = sharedValue.get();
        }
        obj.width = sharedValue(outer2_2[8]).withSpring(num, sharedValue(outer2_2[9]).SUBTLE_SPRING, "animate-always");
        obj = sharedValue(outer2_2[8]);
        if (num3 === store.get()) {
          num3 = 0;
        }
        obj.opacity = obj.withSpring(num3, sharedValue(outer2_2[9]).SUBTLE_SPRING, "animate-always");
        const obj3 = sharedValue(outer2_2[8]);
      }
      return obj;
    };
    obj = { containerWidth: sharedValue, withSpring: sharedValue(outer1_2[8]).withSpring, collapsed: collapseText, SUBTLE_SPRING: sharedValue(outer1_2[9]).SUBTLE_SPRING };
    fn.__closure = obj;
    fn.__workletHash = 493185281611;
    fn.__initData = outer1_15;
    return obj.useAnimatedStyle(fn);
  })(sharedValue, collapseText);
  obj = { style: items1, onLayout: workletCallback };
  items1 = [tmp.container, tmp4];
  obj.children = callback(importDefault(3991).View, {
    style: (function useCollapsingTextStyles(sharedValue, collapseText) {
      let closure_0 = sharedValue;
      let closure_1 = collapseText;
      const textCollapsed = outer1_10().textCollapsed;
      const fn = function s() {
        if (0 === collapseText.get()) {
          let obj = {};
        } else {
          obj = {};
          const merged = Object.assign(textCollapsed);
          obj["width"] = sharedValue.get();
        }
        return obj;
      };
      fn.__closure = { collapsed: collapseText, textCollapsed, containerWidth: sharedValue };
      fn.__workletHash = 5824483783888;
      fn.__initData = outer1_16;
      return sharedValue(outer1_2[6]).useAnimatedStyle(fn);
    })(sharedValue, collapseText),
    children: children.children
  });
  return callback(importDefault(3991).View, obj);
}
function getHitSlop(lg) {
  let MEDIUM_BUTTON_HEIGHT = require(4547) /* getButtonPadding */.LARGE_BUTTON_HEIGHT;
  if ("sm" === lg) {
    MEDIUM_BUTTON_HEIGHT = require(4547) /* getButtonPadding */.SMALL_BUTTON_HEIGHT;
  } else if ("md" === lg) {
    MEDIUM_BUTTON_HEIGHT = require(4547) /* getButtonPadding */.MEDIUM_BUTTON_HEIGHT;
  }
  const top = Math.max((require(4547) /* getButtonPadding */.MINIMUM_HIT_AREA - MEDIUM_BUTTON_HEIGHT) / 2, 0);
  return { top, left: undefined, right: undefined, bottom: top };
}
function BaseTextButtonIcon(arg0) {
  let icon;
  let iconOpticalOffsetMargin;
  let iconPosition;
  let size;
  let style;
  ({ icon, size, iconPosition, iconOpticalOffsetMargin, style } = arg0);
  let obj = require(4548) /* useProfileThemedButtonStyles */;
  const iconSizeStyles = obj.useIconSizeStyles(size);
  obj = { source: icon };
  const items = [style, iconSizeStyles, callback5(iconPosition, iconOpticalOffsetMargin).offset];
  obj.style = items;
  return callback(getIconSize, obj);
}
({ Platform, Text: closure_5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = _createForOfIteratorHelperLoose.createStyles((arg0, sm) => {
  let obj = { grow: { flexGrow: 1, alignSelf: "stretch" }, shrink: { flexShrink: 1 } };
  obj = { flexShrink: 1, flexGrow: 0, lineHeight: getTextPlatformLineHeight(sm, arg0) };
  obj.buttonText = obj;
  obj.icon = { flexShrink: 0, flexGrow: 0 };
  obj.iconLeft = { paddingLeft: 4 };
  obj.iconRight = { paddingRight: 4 };
  obj.expressiveButtonContainer = { position: "relative" };
  return obj;
});
let closure_10 = _createForOfIteratorHelperLoose.createStyles({ container: { flexDirection: "row", alignItems: "center", position: "relative" }, textCollapsed: { position: "absolute", left: 0 } });
let obj = {};
obj = { borderWidth: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, overflow: "hidden" };
obj.entityWrapper = obj;
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj);
let context = importAllResult.createContext("md");
let closure_14 = { code: "function BaseTextButtonNativeTsx1({nativeEvent:nativeEvent}){const{containerWidth}=this.__closure;if(containerWidth.get()!==0)return;const{width:width}=nativeEvent.layout;containerWidth.set(width);}" };
let closure_15 = { code: "function BaseTextButtonNativeTsx2(){const{containerWidth,withSpring,collapsed,SUBTLE_SPRING}=this.__closure;if(containerWidth.get()===0)return{};return{width:withSpring(collapsed.get()===1?0:containerWidth.get(),SUBTLE_SPRING,'animate-always'),opacity:withSpring(collapsed.get()===1?0:1,SUBTLE_SPRING,'animate-always')};}" };
let closure_16 = { code: "function BaseTextButtonNativeTsx3(){const{collapsed,textCollapsed,containerWidth}=this.__closure;if(collapsed.get()===0)return{};return{...textCollapsed,width:containerWidth.get()};}" };
let closure_17 = _createForOfIteratorHelperLoose.createStyles((arg0, marginLeft) => {
  if (0 === marginLeft) {
    let obj = { offset: {} };
    return obj;
  } else if ("start" === arg0) {
    obj = {};
    const obj1 = { marginLeft };
    obj.offset = obj1;
    return obj;
  } else if ("end" === arg0) {
    const obj2 = {};
    const obj3 = { marginRight: marginLeft };
    obj2.offset = obj3;
    return obj2;
  } else {
    obj = { offset: {} };
    return obj;
  }
});
_createForOfIteratorHelperLoose = { sm: getHitSlop("sm"), md: getHitSlop("md"), lg: getHitSlop("lg") };
function getTextPlatformLineHeight(sm, arg1) {
  let tmp;
  if (null != sm) {
    const obj = { sm, md: sm + 0.5, lg: sm + 1.9 };
    tmp = obj[arg1];
  }
  return tmp;
}
_createForOfIteratorHelperLoose = {
  Icon: function TextButtonIcon(source) {
    let str = source.variant;
    if (str === undefined) {
      str = "icon";
    }
    let flag = source.disableColor;
    if (flag === undefined) {
      flag = true;
    }
    const context = importAllResult.useContext(closure_13);
    let obj = require(4548) /* useProfileThemedButtonStyles */;
    obj = { source: source.source, disableColor: flag };
    obj.style = obj.useIconSizeStyles(context);
    const tmp3 = callback(getIconSize, obj);
    let tmp4 = tmp3;
    if ("entity" === str) {
      obj = { style: tmp2.entityWrapper, children: tmp3 };
      tmp4 = callback(closure_6, obj);
    }
    return tmp4;
  }
};
let merged = Object.assign({}, importAllResult.forwardRef((iconOpticalOffsetMargin, ref) => {
  let accessibilityLabel;
  let accessibilityRole;
  let collapseText;
  let icon;
  let iconPosition;
  let maxFontSizeMultiplier;
  let pillStyle;
  let size;
  let style;
  let text;
  let textElement;
  ({ text, textElement, size } = iconOpticalOffsetMargin);
  ({ style, pillStyle } = iconOpticalOffsetMargin);
  if (undefined === size) {
    size = onPressIn(onLayout[10]).DEFAULT_BUTTON_SIZE;
  }
  ({ icon, iconPosition } = iconOpticalOffsetMargin);
  let str = "start";
  if (undefined !== iconPosition) {
    str = iconPosition;
  }
  iconOpticalOffsetMargin = iconOpticalOffsetMargin.iconOpticalOffsetMargin;
  let num2 = 0;
  if (undefined !== iconOpticalOffsetMargin) {
    num2 = iconOpticalOffsetMargin;
  }
  const grow = iconOpticalOffsetMargin.grow;
  let grow2 = undefined !== grow && grow;
  const shrink = iconOpticalOffsetMargin.shrink;
  let shrink2 = undefined !== shrink && shrink;
  ({ collapseText, accessibilityRole } = iconOpticalOffsetMargin);
  let str2 = "button";
  if (undefined !== accessibilityRole) {
    str2 = accessibilityRole;
  }
  ({ accessibilityLabel, maxFontSizeMultiplier } = iconOpticalOffsetMargin);
  if (undefined === maxFontSizeMultiplier) {
    maxFontSizeMultiplier = onPressIn(onLayout[10]).BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
  }
  const shiny = iconOpticalOffsetMargin.shiny;
  onPressIn = iconOpticalOffsetMargin.onPressIn;
  const onPressOut = iconOpticalOffsetMargin.onPressOut;
  onLayout = iconOpticalOffsetMargin.onLayout;
  let tmp6 = onPressOut(onLayout[12])("BaseTextButton");
  if (null != iconOpticalOffsetMargin.textVariant) {
    let textVariant = iconOpticalOffsetMargin.textVariant;
  } else {
    let obj = onPressIn(onLayout[10]);
    textVariant = obj.getButtonDefaultTextVariant(size);
  }
  const tmp9 = onPressIn(onLayout[13]).TextStyleSheet[textVariant];
  const tmp10 = callback2(size, tmp9.fontSize);
  const enabled = startsWithResult.useContext(onPressIn(onLayout[14]).AccessibilityPreferencesContext).reducedMotion.enabled;
  const variant = iconOpticalOffsetMargin.variant;
  let str3 = "primary";
  if (null != variant) {
    str3 = variant;
  }
  if (tmp6) {
    tmp6 = "tertiary" === str3;
  }
  if (tmp6) {
    str3 = "secondary";
  }
  let obj1 = onPressIn(onLayout[6]);
  const sharedValue = obj1.useSharedValue(0);
  startsWithResult = str3.startsWith("expressive");
  ref = startsWithResult.useRef(null);
  let closure_6 = startsWithResult.useRef({ width: 0, height: 0 });
  const tmp14 = enabled(startsWithResult.useState({ pressed: false, posx: 0, posy: 0 }), 2);
  let callback = tmp14[1];
  const items = [onLayout, startsWithResult];
  const items1 = [startsWithResult, onPressIn, enabled];
  callback = startsWithResult.useCallback((nativeEvent) => {
    if (null != onLayout) {
      onLayout(nativeEvent);
    }
    if (closure_4) {
      const obj = {};
      ({ width: obj.width, height: obj.height } = nativeEvent.nativeEvent.layout);
      closure_6.current = obj;
    }
  }, items);
  const items2 = [startsWithResult, onPressOut];
  const callback1 = startsWithResult.useCallback((nativeEvent) => {
    let result = null;
    if (null != onPressIn) {
      onPressIn(nativeEvent);
    }
    if (closure_4) {
      if (enabled) {
        const current2 = ref.current;
        if (result != current2) {
          current2.play();
        }
      } else {
        nativeEvent = nativeEvent.nativeEvent;
        const current = ref.current;
        const obj = { pressed: true, posx: nativeEvent.locationX - current.width / 2, posy: nativeEvent.locationY - current.height / 2 };
        callback(obj);
      }
      result = onPressIn(onLayout[15]).triggerHapticFeedback(onPressIn(onLayout[15]).HapticFeedbackTypes.IMPACT_HEAVY);
      const obj2 = onPressIn(onLayout[15]);
    }
  }, items1);
  callback2 = startsWithResult.useCallback((arg0) => {
    if (null != onPressOut) {
      onPressOut(arg0);
    }
    if (closure_4) {
      callback((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj["pressed"] = false;
        return obj;
      });
      const result = onPressIn(onLayout[15]).triggerHapticFeedback(onPressIn(onLayout[15]).HapticFeedbackTypes.IMPACT_MEDIUM);
      let obj = onPressIn(onLayout[15]);
    }
  }, items2);
  let obj2 = onPressIn(onLayout[11]);
  const buttonTextColorStyles = obj2.useButtonTextColorStyles(str3);
  if (null == icon) {
    obj = {};
  } else {
    obj = "start" === str ? tmp10.iconLeft : tmp10.iconRight;
  }
  if (null == icon) {
    obj = { icon, size };
    const items3 = [tmp10.icon, ];
    obj1 = { tintColor: buttonTextColorStyles.color };
    items3[1] = obj1;
    obj.style = items3;
    obj.iconOpticalOffsetMargin = num2;
    obj.iconPosition = str;
    let tmp20 = callback(BaseTextButtonIcon, obj);
  } else {
    tmp20 = icon;
  }
  if (null == textElement) {
    obj2 = { maxFontSizeMultiplier, numberOfLines: 1 };
    const items4 = [tmp10.buttonText, tmp9, buttonTextColorStyles, obj];
    obj2.style = items4;
    obj2.children = text;
    textElement = callback(ref, obj2);
  }
  const obj3 = { ref };
  let merged = Object.assign(iconOpticalOffsetMargin);
  obj3["onPressIn"] = callback1;
  obj3["onPressOut"] = callback2;
  obj3["onLayout"] = callback;
  if (grow2) {
    grow2 = tmp10.grow;
  }
  const items5 = [grow2, , , ];
  if (shrink2) {
    shrink2 = tmp10.shrink;
  }
  items5[1] = shrink2;
  items5[2] = style;
  let expressiveButtonContainer = startsWithResult;
  if (startsWithResult) {
    expressiveButtonContainer = tmp10.expressiveButtonContainer;
  }
  items5[3] = expressiveButtonContainer;
  obj3["style"] = items5;
  let str5 = "box-only";
  if (!startsWithResult) {
    str5 = iconOpticalOffsetMargin.pointerEvents;
  }
  obj3["pointerEvents"] = str5;
  obj3["pressed"] = sharedValue;
  obj3["accessibilityRole"] = str2;
  if (null == accessibilityLabel) {
    accessibilityLabel = onPressIn(onLayout[17]).getNodeText(text);
    const obj9 = onPressIn(onLayout[17]);
  }
  obj3["accessibilityLabel"] = accessibilityLabel;
  obj3["hitSlop"] = _createForOfIteratorHelperLoose[size];
  const obj4 = { variant: str3, size, loading: iconOpticalOffsetMargin.loading, pressed: sharedValue, style: pillStyle, shiny: undefined !== shiny && shiny };
  let tmp30;
  if (startsWithResult) {
    tmp30 = ref;
  }
  obj4.expressiveRiveRef = tmp30;
  let first;
  if (startsWithResult) {
    first = tmp14[0];
  }
  obj4.expressivePressState = first;
  const obj5 = { value: size };
  let tmp33 = null != icon;
  if (tmp33) {
    tmp33 = "start" === str;
  }
  if (tmp33) {
    tmp33 = tmp20;
  }
  const items6 = [tmp33, , ];
  let tmp34 = textElement;
  if (undefined !== collapseText) {
    const obj6 = { collapseText, children: textElement };
    tmp34 = callback(CollapsingText, obj6);
  }
  items6[1] = tmp34;
  let tmp37 = null != icon;
  if (tmp37) {
    tmp37 = "end" === str;
  }
  if (tmp37) {
    tmp37 = tmp20;
  }
  items6[2] = tmp37;
  obj5.children = items6;
  obj4.children = closure_8(redux.Provider, obj5);
  obj3["children"] = callback(onPressIn(onLayout[18]).ButtonPill, obj4);
  return callback(onPressIn(onLayout[16]).BaseButton, obj3);
}), _createForOfIteratorHelperLoose);
let result = require("get ActivityIndicator").fileFinishedImporting("design/components/Button/native/BaseTextButton.native.tsx");

export const BaseTextButton = merged;
