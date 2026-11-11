// Module ID: 7381
// Function ID: 7382
// Name: Card/Card
// Dependencies: [109, 19, 17, 21, 1652, 575, 5243, 7382, 5839, 1377, 5876, 5877, 7383, 2]

// Module 7381 (Card/Card)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import useToken2 from "useToken" /* 5839 */;
import CardTokens from "CardTokens" /* 7382 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import module_1652 from "module_1652" /* 1652 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let Pressable;
let metroRequire;
let tmp;
const _mod1652 = tmp(1652);
const spring_spring = tmp(5876);
const springPresets = tmp(5877);
const AnimatedPressableHighlight2 = tmp(7383);
class Card {
  constructor(start) {
    let flag = start.start;
    if (flag === undefined) {
      flag = true;
    }
    let flag2 = start.end;
    if (flag2 === undefined) {
      flag2 = true;
    }
    let str = start.shadow;
    if (str === undefined) {
      str = "none";
    }
    let str2 = start.border;
    if (str2 === undefined) {
      str2 = "faint";
    }
    let str3 = start.variant;
    if (str3 === undefined) {
      str3 = "primary";
    }
    const merged = Object.assign(start, Object.assign({ start: 0, end: 0, shadow: 0, border: 0, variant: 0 }));
    const useToken = useToken2.useToken;
    let radius = merged.radius;
    useToken2;
    if (radius == null) {
      radius = useToken(nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS);
    }
    const items = [, , ];
    ({ spacing: arr[0], card: arr[1] } = closure_10(flag, flag2, str3, str, str2, radius));
    items[2] = merged.style;
    closure_10(flag, flag2, str3, str, str2, radius);
    if ("onPress" in merged) {
      if (null != merged.onPress) {
        let str4 = merged.accessibilityRole;
        const tmp7 = _objectWithoutProperties(merged, closure_3);
        const tmp8 = jsx;
        const tmp9 = PressableCard;
        if (str4 == null) {
          str4 = "button";
        }
        const obj2 = { accessibilityRole: str4, start: flag, end: flag2, style: items, variant: str3, radius };
        const merged1 = Object.assign(tmp7);
        return tmp8(tmp9, obj2);
      }
    }
    const merged2 = Object.assign(merged);
    return <metroRequire style={items} />;
  }
}
function PressableCard(start) {
  let backgroundColor;
  let backgroundColorPressed;
  let children;
  let end;
  let radius;
  let style;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp28;
  let variant;
  let tmp = require;
  const tmp2 = dependencyMap;
  let obj = PlatformUtils;
  if (obj.isAndroid()) {
    const start2 = start.start;
    const end2 = start.end;
    const radius2 = start.radius;
    const children2 = start.children;
    const merged = Object.assign(start, Object.assign({ children: 0, start: 0, end: 0, radius: 0 }));
    let items = [start2, end2, radius2];
    const memo = react.useMemo(() => {
      let cornerRadius;
      const tmp = start2;
      if (tmp) {
        cornerRadius = radius2;
      } else {
        cornerRadius = 0;
      }
      return { cornerRadius };
    }, items);
    const AnimatedPressableHighlight = AnimatedPressableHighlight2.AnimatedPressableHighlight;
    const merged1 = Object.assign(merged);
    tmp28 = <AnimatedPressableHighlight androidRippleConfig={memo}>{children2}</AnimatedPressableHighlight>;
  } else {
    const onPressIn = start.onPressIn;
    const onPressOut = start.onPressOut;
    ({ radius, start, end } = start);
    ({ children, style, variant } = start);
    const merged2 = Object.assign(start, Object.assign({ children: 0, style: 0, variant: 0, onPressIn: 0, onPressOut: 0, radius: 0, start: 0, end: 0 }));
    const tmpResult = _mod1652;
    const sharedValue = tmpResult.useSharedValue(0);
    const items1 = [sharedValue, onPressIn];
    const items2 = [sharedValue, onPressOut];
    const callback = react.useCallback((arg0) => {
      const result = sharedValue.set(1);
      if (onPressIn != null) {
        tmp2(arg0);
      }
    }, items1);
    const callback1 = react.useCallback((arg0) => {
      const result = sharedValue.set(0);
      if (onPressOut != null) {
        tmp2(arg0);
      }
    }, items2);
    ({ backgroundColor, backgroundColorPressed } = closure_9(variant));
    closure_9(variant);
    const items3 = [closure_12, , , , , , ];
    const useAnimatedStyle = _mod1652.useAnimatedStyle;
    _mod1652;
    items3[1] = spring_spring.withSpring;
    items3[2] = _mod1652.interpolateColor;
    items3[3] = sharedValue;
    items3[4] = backgroundColor;
    items3[5] = backgroundColorPressed;
    items3[6] = springPresets.ON_PRESS_SPRING;
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21] = items3;
    class CardNativeTsx1 {
      constructor() {
        let items;
        const obj = { backgroundColor: _undefined(_undefined2(_undefined3.get(), [0, 1], items), c5, "animate-always") };
        items = [c3, c4];
        return obj;
      }
    }
    const items4 = [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21];
    CardNativeTsx1.__closure = items4;
    CardNativeTsx1.__workletHash = 12443532750962;
    CardNativeTsx1.__initData = tmp15;
    const animatedStyle = useAnimatedStyle(CardNativeTsx1);
    const merged3 = Object.assign(merged2);
    const items5 = [style, animatedStyle];
    tmp28 = <closure_8 onPressIn={callback} onPressOut={callback1} style={items5} unstable_pressDelay={130}>{children}</closure_8>;
  }
  return tmp28;
}
let closure_3 = ["accessibilityRole"];
({ View: metroRequire, Pressable } = react_native);
const jsx = Fragment.jsx;
let closure_8 = module_1652.createAnimatedComponent(Pressable);
let createStyles = createStyles_mod;
let closure_9 = createStyles.createStyleProperties((arg0) => {
  let backgroundColor;
  let backgroundColorPressed;
  if ("primary" === arg0) {
    backgroundColor = nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT;
  } else if ("secondary" === arg0) {
    backgroundColor = nativeDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT;
  } else if ("muted" === arg0) {
    backgroundColor = nativeDefault.colors.CARD_MUTED_BG;
  } else if ("transparent" === arg0) {
    backgroundColor = nativeDefault.unsafe_rawColors.TRANSPARENT;
  } else if ("control-secondary" === arg0) {
    backgroundColor = nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT;
  } else if ("surface-high" === arg0) {
    backgroundColor = nativeDefault.colors.BACKGROUND_SURFACE_HIGH;
  }
  if ("primary" === arg0) {
    backgroundColorPressed = nativeDefault.colors.TABLEROW_BACKGROUND_PRESSED;
  } else if ("secondary" === arg0) {
    backgroundColorPressed = nativeDefault.colors.CARD_SECONDARY_BACKGROUND_ACTIVE;
  } else if ("muted" === arg0) {
    backgroundColorPressed = nativeDefault.colors.CARD_MUTED_PRESSED_BG;
  } else if ("transparent" === arg0) {
    backgroundColorPressed = nativeDefault.colors.BACKGROUND_MOD_SUBTLE;
  } else if ("control-secondary" === arg0) {
    backgroundColorPressed = nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_ACTIVE;
  } else if ("surface-high" === arg0) {
    backgroundColorPressed = nativeDefault.colors.BACKGROUND_BASE_LOW;
  }
  return { backgroundColor, backgroundColorPressed };
});
createStyles = createStyles_mod;
const authStore = createStyles.createStyles((arg0, arg1, arg2, arg3, arg4, arg5) => {
  let BACKGROUND_SURFACE_HIGH;
  let num;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  if ("primary" === arg2) {
    BACKGROUND_SURFACE_HIGH = nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT;
  } else if ("secondary" === arg2) {
    BACKGROUND_SURFACE_HIGH = nativeDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT;
  } else if ("muted" === arg2) {
    BACKGROUND_SURFACE_HIGH = nativeDefault.colors.CARD_MUTED_BG;
  } else if ("transparent" === arg2) {
    BACKGROUND_SURFACE_HIGH = nativeDefault.unsafe_rawColors.TRANSPARENT;
  } else if ("control-secondary" === arg2) {
    BACKGROUND_SURFACE_HIGH = nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT;
  } else if ("surface-high" === arg2) {
    BACKGROUND_SURFACE_HIGH = nativeDefault.colors.BACKGROUND_SURFACE_HIGH;
  }
  let BORDER_SUBTLE = null;
  if ("none" !== arg4) {
    if ("subtle" === arg4) {
      BORDER_SUBTLE = nativeDefault.colors.BORDER_SUBTLE;
    } else if ("strong" === arg4) {
      BORDER_SUBTLE = nativeDefault.colors.BORDER_STRONG;
    } else if ("faint" === arg4) {
      BORDER_SUBTLE = nativeDefault.colors.BORDER_MUTED;
    } else if ("control-secondary" === arg4) {
      BORDER_SUBTLE = nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT;
    }
  }
  if (BORDER_SUBTLE == null) {
    BORDER_SUBTLE = BACKGROUND_SURFACE_HIGH;
  }
  const card = { borderTopStartRadius: tmp21, borderTopEndRadius: tmp22, borderBottomStartRadius: tmp23, borderBottomEndRadius: tmp24, borderColor: BORDER_SUBTLE, borderWidth: num, backgroundColor: BACKGROUND_SURFACE_HIGH };
  const obj2 = CardTokens;
  const merged = Object.assign(obj2.createCardShadowToken(arg3));
  tmp21 = undefined;
  if (arg0) {
    tmp21 = arg5;
  }
  tmp22 = undefined;
  if (arg0) {
    tmp22 = arg5;
  }
  tmp23 = undefined;
  if (arg1) {
    tmp23 = arg5;
  }
  tmp24 = undefined;
  if (arg1) {
    tmp24 = arg5;
  }
  num = 0;
  if ("none" !== arg4) {
    num = 1;
  }
  return { card, spacing: { padding: 16 } };
});
let closure_12 = { code: "(function CardNativeTsx1(){let[withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING]=this.__closure;const pressedColor=withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always');return{backgroundColor:pressedColor};})" };
let result = size.fileFinishedImporting("design/components/Card/native/Card.native.tsx");

export { Card };
export const InternalCard = Card;
