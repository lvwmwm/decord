// Module ID: 5919
// Function ID: 5920
// Name: Card/Card
// Dependencies: [109, 19, 17, 21, 4566, 576, 4836, 5920, 4531, 1364, 5280, 5284, 5921, 2]

// Module 5919 (Card/Card)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import useToken2 from "useToken" /* 4531 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4566 */;
import spring from "spring" /* 5280 */;
import springPresets from "springPresets" /* 5284 */;
import CardTokens from "CardTokens" /* 5920 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const ReanimatedRexport = ReanimatedRexport2;

let Pressable;
let metroRequire;
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
  let children;
  let end;
  let onPressIn;
  let radius;
  let sharedValue;
  let style;
  let tmp20;
  let variant;
  let tmp = onPressIn;
  const tmp2 = sharedValue;
  let obj = onPressIn(sharedValue[9]);
  if (obj.isAndroid()) {
    const start2 = start.start;
    const end2 = start.end;
    const radius2 = start.radius;
    const children2 = start.children;
    let obj2 = {};
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
    const AnimatedPressableHighlight = tmp(tmp2[12]).AnimatedPressableHighlight;
    const merged1 = Object.assign(merged);
    tmp20 = <AnimatedPressableHighlight androidRippleConfig={memo}>{children2}</AnimatedPressableHighlight>;
  } else {
    onPressIn = start.onPressIn;
    const onPressOut = start.onPressOut;
    ({ radius, start, end } = start);
    ({ children, style, variant } = start);
    const merged2 = Object.assign(start, Object.assign({ children: 0, style: 0, variant: 0, onPressIn: 0, onPressOut: 0, radius: 0, start: 0, end: 0 }));
    const tmpResult = tmp(tmp2[4]);
    sharedValue = tmpResult.useSharedValue(0);
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
    const tmp11 = closure_9(variant);
    const backgroundColor = tmp11.backgroundColor;
    const backgroundColorPressed = tmp11.backgroundColorPressed;
    const tmpResult2 = tmp(tmp2[4]);
    class B {
      constructor() {
        let interpolateColorResult;
        let withSpring;
        const obj = { backgroundColor: withSpring(interpolateColorResult, springPresets.ON_PRESS_SPRING, "animate-always") };
        withSpring = spring.withSpring;
        spring;
        const items = [backgroundColor, backgroundColorPressed];
        const obj2 = ReanimatedRexport2;
        interpolateColorResult = obj2.interpolateColor(sharedValue.get(), [0, 1], items);
        return obj;
      }
    }
    const useAnimatedStyle = tmpResult2.useAnimatedStyle;
    B.__closure = { withSpring: tmp(tmp2[10]).withSpring, interpolateColor: tmp(tmp2[4]).interpolateColor, pressed: sharedValue, backgroundColor, backgroundColorPressed, ON_PRESS_SPRING: tmp(tmp2[11]).ON_PRESS_SPRING };
    B.__workletHash = 14943431549291;
    B.__initData = __initData;
    const obj5 = { withSpring: tmp(tmp2[10]).withSpring, interpolateColor: tmp(tmp2[4]).interpolateColor, pressed: sharedValue, backgroundColor, backgroundColorPressed, ON_PRESS_SPRING: tmp(tmp2[11]).ON_PRESS_SPRING };
    const animatedStyle = useAnimatedStyle(B);
    const merged3 = Object.assign(merged2);
    const items3 = [style, animatedStyle];
    tmp20 = <closure_8 onPressIn={callback} onPressOut={callback1} style={items3} unstable_pressDelay={130}>{children}</closure_8>;
  }
  return tmp20;
}
let closure_3 = ["accessibilityRole"];
({ View: metroRequire, Pressable } = react_native);
const jsx = Fragment.jsx;
let closure_8 = ReanimatedRexport.createAnimatedComponent(Pressable);
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
const __initData = { code: "function CardNativeTsx1(){const{withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING}=this.__closure;const pressedColor=withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always');return{backgroundColor:pressedColor};}" };
let result = size.fileFinishedImporting("design/components/Card/native/Card.native.tsx");

export { Card };
export const InternalCard = Card;
