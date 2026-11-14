// Module ID: 7445
// Function ID: 7446
// Name: Card/Card
// Dependencies: [109, 19, 17, 21, 1655, 575, 5306, 7446, 5942, 5902, 7447, 1380, 5939, 5940, 7451, 2]

// Module 7445 (Card/Card)
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1380 */;
import useToken2 from "useToken" /* 5902 */;
import ButtonConstants from "ButtonConstants" /* 5942 */;
import CardTokens from "CardTokens" /* 7446 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import module_1655 from "module_1655" /* 1655 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let Pressable;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp;
let tmp2;
const _mod1655 = tmp(1655);
const spring_spring = tmp(5939);
const springPresets = tmp(5940);
const DragHandle2 = tmp2(7447);
const AnimatedPressableHighlight2 = tmp(7451);
class Card {
  constructor(start) {
    let children;
    let dragHandlePressableProps;
    let items1;
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
    let str4 = start.padding;
    if (str4 === undefined) {
      str4 = "default";
    }
    let flag3 = start.draggable;
    if (flag3 === undefined) {
      flag3 = false;
    }
    ({ dragHandlePressableProps, children } = start);
    const merged = Object.assign(start, Object.assign({ start: 0, end: 0, shadow: 0, border: 0, variant: 0, padding: 0, draggable: 0, dragHandlePressableProps: 0, children: 0 }));
    const useToken = useToken2.useToken;
    let radius = merged.radius;
    useToken2;
    if (radius == null) {
      radius = useToken(nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS);
    }
    const tmp5 = closure_12(flag, flag2, str3, str, str2, str4, radius);
    const items = [tmp5.card, , ];
    let draggableCard;
    if (flag3) {
      draggableCard = tmp5.draggableCard;
    }
    items[1] = draggableCard;
    items[2] = merged.style;
    let tmp7 = children;
    if (flag3) {
      const obj = { children: items1 };
      const obj2 = { stretch: true, borderRadius: 0, style: tmp5.dragHandle };
      const DragHandle = DragHandle2.DragHandle;
      const merged1 = Object.assign(dragHandlePressableProps);
      items1 = [metroImportDefault(DragHandle, obj2), ];
      const obj3 = { style: tmp5.draggableContent, children };
      items1[1] = metroImportDefault(metroRequire, obj3);
      tmp7 = React4(metroImportAll, obj);
    }
    if ("onPress" in merged) {
      if (null != merged.onPress) {
        let str5 = merged.accessibilityRole;
        const tmp18 = _objectWithoutProperties(merged, closure_3);
        const tmp19 = metroImportDefault;
        const tmp20 = PressableCard;
        if (str5 == null) {
          str5 = "button";
        }
        const obj4 = { accessibilityRole: str5, start: flag, end: flag2, style: items, variant: str3, radius, children: tmp7 };
        const merged2 = Object.assign(tmp18);
        return tmp19(tmp20, obj4);
      }
    }
    const obj5 = { style: items, children: tmp7 };
    const merged3 = Object.assign(merged);
    return metroImportDefault(metroRequire, obj5);
  }
}
function PressableCard(start) {
  let backgroundColor;
  let backgroundColorPressed;
  let children;
  let end;
  let items5;
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
    const obj3 = { androidRippleConfig: memo, children: children2 };
    const AnimatedPressableHighlight = AnimatedPressableHighlight2.AnimatedPressableHighlight;
    const merged1 = Object.assign(merged);
    tmp28 = metroImportDefault(AnimatedPressableHighlight, obj3);
  } else {
    const onPressIn = start.onPressIn;
    const onPressOut = start.onPressOut;
    ({ radius, start, end } = start);
    ({ children, style, variant } = start);
    const merged2 = Object.assign(start, Object.assign({ children: 0, style: 0, variant: 0, onPressIn: 0, onPressOut: 0, radius: 0, start: 0, end: 0 }));
    const tmpResult = _mod1655;
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
    ({ backgroundColor, backgroundColorPressed } = closure_11(variant));
    closure_11(variant);
    const items3 = [closure_14, , , , , , ];
    const useAnimatedStyle = _mod1655.useAnimatedStyle;
    _mod1655;
    items3[1] = spring_spring.withSpring;
    items3[2] = _mod1655.interpolateColor;
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
    const obj5 = { onPressIn: callback, onPressOut: callback1, style: items5, unstable_pressDelay: 130, children };
    const animatedStyle = useAnimatedStyle(CardNativeTsx1);
    const merged3 = Object.assign(merged2);
    items5 = [style, animatedStyle];
    tmp28 = metroImportDefault(closure_10, obj5);
  }
  return tmp28;
}
let closure_3 = ["accessibilityRole"];
({ View: metroRequire, Pressable } = react_native);
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = module_1655.createAnimatedComponent(Pressable);
let createStyles = createStyles_mod;
let closure_11 = createStyles.createStyleProperties((arg0) => {
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
const authStore2 = createStyles.createStyles((arg0, arg1, arg2, arg3, arg4, arg5, arg6) => {
  let BACKGROUND_SURFACE_HIGH;
  let num;
  let num2;
  let num3;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
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
  const obj = { borderTopStartRadius: tmp23, borderTopEndRadius: tmp24, borderBottomStartRadius: tmp25, borderBottomEndRadius: tmp26, borderColor: BORDER_SUBTLE, borderWidth: num, backgroundColor: BACKGROUND_SURFACE_HIGH, padding: num2 };
  const obj2 = CardTokens;
  const merged = Object.assign(obj2.createCardShadowToken(arg3));
  tmp23 = undefined;
  if (arg0) {
    tmp23 = arg6;
  }
  tmp24 = undefined;
  if (arg0) {
    tmp24 = arg6;
  }
  tmp25 = undefined;
  if (arg1) {
    tmp25 = arg6;
  }
  tmp26 = undefined;
  if (arg1) {
    tmp26 = arg6;
  }
  num = 0;
  if ("none" !== arg4) {
    num = 1;
  }
  num2 = 0;
  if ("default" === arg5) {
    num2 = 16;
  }
  const obj3 = { card: obj, draggableCard: { flexDirection: "row", alignItems: "stretch", padding: 0, overflow: "hidden" }, draggableContent: { flexGrow: 0, flexShrink: 1, flexBasis: "100%", padding: num3, paddingStart: 4 }, dragHandle: { flexShrink: 1, flexGrow: 0, minWidth: ButtonConstants.MEDIUM_BUTTON_HEIGHT, height: "100%" } };
  num3 = 0;
  if ("default" === arg5) {
    num3 = 16;
  }
  ({ flexShrink: 1, flexGrow: 0, minWidth: ButtonConstants.MEDIUM_BUTTON_HEIGHT, height: "100%" });
  return obj3;
});
let closure_14 = { code: "(function CardNativeTsx1(){let[withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING]=this.__closure;const pressedColor=withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always');return{backgroundColor:pressedColor};})" };
let result = size.fileFinishedImporting("design/components/Card/native/Card.native.tsx");

export { Card };
export const InternalCard = Card;
