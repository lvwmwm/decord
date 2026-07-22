// Module ID: 4540
// Function ID: 39816
// Name: CollapsingText
// Dependencies: []

// Module 4540 (CollapsingText)
let Platform;
function CollapsingText(children) {
  const collapseText = children.collapseText;
  let obj = arg1(dependencyMap[6]);
  const sharedValue = obj.useSharedValue(0);
  const arg1 = sharedValue;
  const tmp = callback4();
  const fn = function o(nativeEvent) {
    if (0 === sharedValue.get()) {
      const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
    }
  };
  fn.__closure = { containerWidth: sharedValue };
  fn.__workletHash = 5541458715155;
  fn.__initData = closure_14;
  const items = [sharedValue];
  const obj2 = arg1(dependencyMap[6]);
  const workletCallback = arg1(dependencyMap[6]).useWorkletCallback(fn, items);
  const tmp4 = function useCollapsingTextContainerStyles(sharedValue, collapseText) {
    let obj = sharedValue(closure_2[6]);
    const fn = function o() {
      if (0 === arg0.get()) {
        let obj = {};
      } else {
        obj = {};
        let num3 = 1;
        let num = 0;
        if (1 !== arg1.get()) {
          num = arg0.get();
        }
        obj.width = arg0(closure_2[8]).withSpring(num, arg0(closure_2[9]).SUBTLE_SPRING, "animate-always");
        obj = arg0(closure_2[8]);
        if (num3 === arg1.get()) {
          num3 = 0;
        }
        obj.opacity = obj.withSpring(num3, arg0(closure_2[9]).SUBTLE_SPRING, "animate-always");
        const obj3 = arg0(closure_2[8]);
      }
      return obj;
    };
    obj = { containerWidth: sharedValue, withSpring: sharedValue(closure_2[8]).withSpring, collapsed: collapseText, SUBTLE_SPRING: sharedValue(closure_2[9]).SUBTLE_SPRING };
    fn.__closure = obj;
    fn.__workletHash = 493185281611;
    fn.__initData = closure_15;
    return obj.useAnimatedStyle(fn);
  }(sharedValue, collapseText);
  obj = { style: items1, onLayout: workletCallback };
  const items1 = [tmp.container, tmp4];
  obj.children = callback2(importDefault(dependencyMap[6]).View, {
    style: function useCollapsingTextStyles(sharedValue, collapseText) {
      const textCollapsed = callback().textCollapsed;
      const fn = function s() {
        if (0 === arg1.get()) {
          let obj = {};
        } else {
          obj = {};
          const merged = Object.assign(textCollapsed);
          obj["width"] = arg0.get();
        }
        return obj;
      };
      fn.__closure = { collapsed: collapseText, textCollapsed, containerWidth: sharedValue };
      fn.__workletHash = 5824483783888;
      fn.__initData = closure_16;
      return sharedValue(textCollapsed[6]).useAnimatedStyle(fn);
    }(sharedValue, collapseText),
    children: children.children
  });
  return callback2(importDefault(dependencyMap[6]).View, obj);
}
function getHitSlop(lg) {
  let MEDIUM_BUTTON_HEIGHT = arg1(dependencyMap[10]).LARGE_BUTTON_HEIGHT;
  if ("sm" === lg) {
    MEDIUM_BUTTON_HEIGHT = arg1(dependencyMap[10]).SMALL_BUTTON_HEIGHT;
  } else if ("md" === lg) {
    MEDIUM_BUTTON_HEIGHT = arg1(dependencyMap[10]).MEDIUM_BUTTON_HEIGHT;
  }
  const top = Math.max((arg1(dependencyMap[10]).MINIMUM_HIT_AREA - MEDIUM_BUTTON_HEIGHT) / 2, 0);
  return { top, left: undefined, right: undefined, bottom: top };
}
function BaseTextButtonIcon(arg0) {
  let icon;
  let iconOpticalOffsetMargin;
  let iconPosition;
  let size;
  let style;
  ({ icon, size, iconPosition, iconOpticalOffsetMargin, style } = arg0);
  let obj = arg1(dependencyMap[11]);
  const iconSizeStyles = obj.useIconSizeStyles(size);
  obj = { source: icon };
  const items = [style, iconSizeStyles, callback6(iconPosition, iconOpticalOffsetMargin).offset];
  obj.style = items;
  return callback2(closure_12, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ Platform, Text: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj1 = arg1(dependencyMap[4]);
let closure_9 = obj1.createStyles((arg0, sm) => {
  let obj = { grow: { <string:1385783798>: null, <string:3266691745>: null }, shrink: { flexShrink: 1 } };
  obj = { createStyles: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001288835093747774, guild_id: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005740555781694437, lineHeight: getTextPlatformLineHeight(sm, arg0) };
  obj.buttonText = obj;
  obj.icon = { createStyles: "%FunctionPrototype%", guild_id: "paddingStart" };
  obj.iconLeft = { paddingLeft: 4 };
  obj.iconRight = { paddingRight: 4 };
  obj.expressiveButtonContainer = { position: "relative" };
  return obj;
});
let obj2 = arg1(dependencyMap[4]);
let closure_10 = obj2.createStyles({ container: { bitrateFloor: "/assets/design/components/Icon/native/redesign/generated/images", createHDR: 24, frameRate: 24 }, textCollapsed: {} });
const tmp3 = arg1(dependencyMap[3]);
let obj = {};
obj = { borderWidth: 1, borderRadius: importDefault(dependencyMap[5]).radii.round, borderColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE, overflow: "hidden" };
obj.entityWrapper = obj;
let closure_11 = arg1(dependencyMap[4]).createStyles(obj);
const obj4 = arg1(dependencyMap[4]);
let closure_12 = importDefault(dependencyMap[6]).createAnimatedComponent(importDefault(dependencyMap[7]));
const context = importAllResult.createContext("md");
let closure_14 = { code: "function BaseTextButtonNativeTsx1({nativeEvent:nativeEvent}){const{containerWidth}=this.__closure;if(containerWidth.get()!==0)return;const{width:width}=nativeEvent.layout;containerWidth.set(width);}" };
let closure_15 = { code: "function BaseTextButtonNativeTsx2(){const{containerWidth,withSpring,collapsed,SUBTLE_SPRING}=this.__closure;if(containerWidth.get()===0)return{};return{width:withSpring(collapsed.get()===1?0:containerWidth.get(),SUBTLE_SPRING,'animate-always'),opacity:withSpring(collapsed.get()===1?0:1,SUBTLE_SPRING,'animate-always')};}" };
let closure_16 = { code: "function BaseTextButtonNativeTsx3(){const{collapsed,textCollapsed,containerWidth}=this.__closure;if(collapsed.get()===0)return{};return{...textCollapsed,width:containerWidth.get()};}" };
const importDefaultResult = importDefault(dependencyMap[6]);
let closure_17 = arg1(dependencyMap[4]).createStyles((arg0, marginLeft) => {
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
obj1 = { sm: getHitSlop("sm"), md: getHitSlop("md"), lg: getHitSlop("lg") };
function getTextPlatformLineHeight(sm, arg1) {
  let tmp;
  if (null != sm) {
    const obj = { sm, md: sm + 0.5, lg: sm + 1.9 };
    tmp = obj[arg1];
  }
  return tmp;
}
obj2 = {
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
    let obj = arg1(dependencyMap[11]);
    obj = { source: source.source, disableColor: flag };
    obj.style = obj.useIconSizeStyles(context);
    const tmp3 = callback2(closure_12, obj);
    let tmp4 = tmp3;
    if ("entity" === str) {
      obj = { style: tmp2.entityWrapper, children: tmp3 };
      tmp4 = callback2(closure_6, obj);
    }
    return tmp4;
  }
};
const merged = Object.assign({}, importAllResult.forwardRef((iconOpticalOffsetMargin, ref) => {
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
    size = ref(dependencyMap[10]).DEFAULT_BUTTON_SIZE;
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
    maxFontSizeMultiplier = ref(dependencyMap[10]).BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
  }
  const shiny = iconOpticalOffsetMargin.shiny;
  const onPressIn = iconOpticalOffsetMargin.onPressIn;
  ref = onPressIn;
  const onPressOut = iconOpticalOffsetMargin.onPressOut;
  const importDefault = onPressOut;
  const onLayout = iconOpticalOffsetMargin.onLayout;
  const dependencyMap = onLayout;
  let tmp6 = importDefault(dependencyMap[12])("BaseTextButton");
  if (null != iconOpticalOffsetMargin.textVariant) {
    let textVariant = iconOpticalOffsetMargin.textVariant;
  } else {
    let obj = ref(dependencyMap[10]);
    textVariant = obj.getButtonDefaultTextVariant(size);
  }
  const tmp9 = ref(dependencyMap[13]).TextStyleSheet[textVariant];
  const tmp10 = callback3(size, tmp9.fontSize);
  const enabled = importAllResult.useContext(ref(dependencyMap[14]).AccessibilityPreferencesContext).reducedMotion.enabled;
  let callback = enabled;
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
  let obj1 = ref(dependencyMap[6]);
  const sharedValue = obj1.useSharedValue(0);
  const startsWithResult = str3.startsWith("expressive");
  ref = importAllResult.useRef(null);
  let closure_6 = importAllResult.useRef({ "Null": "%FunctionPrototype%", "Null": "paddingStart" });
  const tmp14 = callback(startsWithResult.useState({ <string:3825758625>: true, <string:686877886>: true, <string:84079581>: true }), 2);
  let callback2 = tmp14[1];
  const items = [onLayout, startsWithResult];
  const items1 = [startsWithResult, onPressIn, enabled];
  callback = importAllResult.useCallback((nativeEvent) => {
    if (null != onLayout) {
      onLayout(nativeEvent);
    }
    if (startsWithResult) {
      const obj = {};
      ({ width: obj.width, height: obj.height } = nativeEvent.nativeEvent.layout);
      closure_6.current = obj;
    }
  }, items);
  const items2 = [startsWithResult, onPressOut];
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    let result = null;
    if (null != onPressIn) {
      onPressIn(nativeEvent);
    }
    if (startsWithResult) {
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
  callback2 = importAllResult.useCallback((arg0) => {
    if (null != onPressOut) {
      onPressOut(arg0);
    }
    if (startsWithResult) {
      callback((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj["pressed"] = false;
        return obj;
      });
      const result = onPressIn(onLayout[15]).triggerHapticFeedback(onPressIn(onLayout[15]).HapticFeedbackTypes.IMPACT_MEDIUM);
      const obj = onPressIn(onLayout[15]);
    }
  }, items2);
  let obj2 = ref(dependencyMap[11]);
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
    let tmp20 = callback2(BaseTextButtonIcon, obj);
  } else {
    tmp20 = icon;
  }
  if (null == textElement) {
    obj2 = { maxFontSizeMultiplier, numberOfLines: 1 };
    const items4 = [tmp10.buttonText, tmp9, buttonTextColorStyles, obj];
    obj2.style = items4;
    obj2.children = text;
    textElement = callback2(ref, obj2);
  }
  const obj3 = { ref };
  const merged = Object.assign(iconOpticalOffsetMargin);
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
    accessibilityLabel = ref(dependencyMap[17]).getNodeText(text);
    const obj9 = ref(dependencyMap[17]);
  }
  obj3["accessibilityLabel"] = accessibilityLabel;
  obj3["hitSlop"] = obj1[size];
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
    tmp34 = callback2(CollapsingText, obj6);
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
  obj3["children"] = callback2(ref(dependencyMap[18]).ButtonPill, obj4);
  return callback2(ref(dependencyMap[16]).BaseButton, obj3);
}), obj2);
const obj8 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("design/components/Button/native/BaseTextButton.native.tsx");

export const BaseTextButton = merged;
