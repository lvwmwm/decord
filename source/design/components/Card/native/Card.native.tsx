// Module ID: 5167
// Function ID: 44978
// Name: getCardBackgroundToken
// Dependencies: [29, 31, 27, 33, 3991, 689, 5127, 4130, 1324, 3834, 477, 4542, 4546, 5168, 2]

// Module 5167 (getCardBackgroundToken)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "module_3991";

const require = arg1;
function getCardBackgroundToken(arg0) {
  if ("primary" === arg0) {
    return require(5127) /* createCardBackgroundToken */.CARD_PRIMARY_BG;
  } else if ("secondary" === arg0) {
    return importDefault(689).colors.CARD_SECONDARY_BACKGROUND_DEFAULT;
  } else if ("muted" === arg0) {
    return importDefault(689).colors.BACKGROUND_MOD_MUTED;
  } else if ("transparent" === arg0) {
    return importDefault(689).unsafe_rawColors.TRANSPARENT;
  } else if ("control-secondary" === arg0) {
    return importDefault(689).colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT;
  } else if ("surface-high" === arg0) {
    return importDefault(689).colors.BACKGROUND_SURFACE_HIGH;
  }
}
class Card {
  constructor(arg0) {
    flag = global.start;
    if (flag === undefined) {
      flag = true;
    }
    flag2 = global.end;
    if (flag2 === undefined) {
      flag2 = true;
    }
    str = global.shadow;
    if (str === undefined) {
      str = "none";
    }
    str2 = global.border;
    if (str2 === undefined) {
      str2 = "faint";
    }
    str3 = global.variant;
    if (str3 === undefined) {
      str3 = "primary";
    }
    obj = { start: 0, end: 0, shadow: 0, border: 0, variant: 0 };
    setPrototypeOfResult = Object.setPrototypeOf(null);
    merged = Object.assign(global, obj);
    tmp3 = require("useIsMobileVisualRefreshExperimentEnabled")("Card");
    obj2 = require("map");
    token = obj2.useToken(require("_createForOfIteratorHelperLoose").modules.mobile.CARD_DEFAULT_RADIUS);
    radius = merged.radius;
    if (null != radius) {
      token = radius;
    }
    tmp5 = f44989(flag, flag2, str3, str, str2, token);
    items = [, , ];
    ({ spacing: arr[0], card: arr[1] } = tmp5);
    items[2] = merged.style;
    if ("onPress" in merged) {
      if (null != merged.onPress) {
        accessibilityRole = merged.accessibilityRole;
        tmp7 = _objectWithoutProperties;
        tmp8 = PressableCard;
        tmp9 = _objectWithoutProperties(merged, PressableCard);
        obj = {};
        str4 = "button";
        tmp10 = jsx;
        tmp11 = PressableCard;
        if (null != accessibilityRole) {
          str4 = accessibilityRole;
        }
        obj.accessibilityRole = str4;
        tmp12 = obj;
        tmp13 = tmp9;
        merged1 = Object.assign(tmp9);
        str5 = "start";
        obj["start"] = flag;
        str6 = "end";
        obj["end"] = flag2;
        str7 = "style";
        obj["style"] = items;
        str8 = "variant";
        obj["variant"] = str3;
        str9 = "isRefreshEnabled";
        obj["isRefreshEnabled"] = tmp3;
        str10 = "radius";
        obj["radius"] = token;
        return tmp10(tmp11, obj);
      }
    }
    obj1 = {};
    merged2 = Object.assign(merged);
    obj1["style"] = items;
    return jsx(View, obj1);
  }
}
function PressableCard(start) {
  if (obj.isAndroid()) {
    let tmp = (function PressableCardAndroid(start) {
      start = start.start;
      const end = start.end;
      const radius = start.radius;
      let obj = { children: 0, start: 0, end: 0, radius: 0, isRefreshEnabled: 0 };
      Object.setPrototypeOf(null);
      const merged = Object.assign(start, obj);
      const items = [start, end, radius];
      const memo = outer1_5.useMemo(() => {
        const obj = {};
        if (start) {
          let num = radius;
        } else {
          num = 0;
        }
        obj.cornerRadius = num;
        return obj;
      }, items);
      obj = { androidRippleConfig: memo };
      const merged1 = Object.assign(merged);
      obj["children"] = start.children;
      return outer1_7(outer1_0(outer1_2[13]).AnimatedPressableHighlight, obj);
    })(start);
  } else {
    tmp = (function PressableCardiOS(onPressIn) {
      let children;
      let end;
      let isRefreshEnabled;
      let radius;
      let start;
      let style;
      let variant;
      onPressIn = onPressIn.onPressIn;
      const onPressOut = onPressIn.onPressOut;
      ({ radius, start, end } = onPressIn);
      let obj = { children: 0, style: 0, variant: 0, onPressIn: 0, onPressOut: 0, isRefreshEnabled: 0, radius: 0, start: 0, end: 0 };
      ({ children, style, variant, isRefreshEnabled } = onPressIn);
      Object.setPrototypeOf(null);
      const merged = Object.assign(onPressIn, obj);
      const sharedValue = outer1_0(outer1_2[4]).useSharedValue(0);
      let items = [sharedValue, onPressIn];
      const items1 = [sharedValue, onPressOut];
      const callback = outer1_5.useCallback((arg0) => {
        const result = sharedValue.set(1);
        if (null != onPressIn) {
          onPressIn(arg0);
        }
      }, items);
      const callback1 = outer1_5.useCallback((arg0) => {
        const result = sharedValue.set(0);
        if (null != onPressOut) {
          onPressOut(arg0);
        }
      }, items1);
      const tmp6 = outer1_9(variant, isRefreshEnabled);
      const backgroundColor = tmp6.backgroundColor;
      const backgroundColorPressed = tmp6.backgroundColorPressed;
      let obj2 = outer1_0(outer1_2[4]);
      class B {
        constructor() {
          obj = {};
          obj2 = outer2_0(outer2_2[11]);
          obj3 = outer2_0(outer2_2[4]);
          items = [, ];
          items[0] = backgroundColor;
          items[1] = backgroundColorPressed;
          interpolateColorResult = obj3.interpolateColor(closure_2.get(), [0, 1], items);
          obj.backgroundColor = obj2.withSpring(interpolateColorResult, outer2_0(outer2_2[12]).ON_PRESS_SPRING, "animate-always");
          return obj;
        }
      }
      obj = { withSpring: outer1_0(outer1_2[11]).withSpring, interpolateColor: outer1_0(outer1_2[4]).interpolateColor, pressed: sharedValue, backgroundColor, backgroundColorPressed, ON_PRESS_SPRING: outer1_0(outer1_2[12]).ON_PRESS_SPRING };
      B.__closure = obj;
      B.__workletHash = 14943431549291;
      B.__initData = outer1_11;
      obj = {};
      const animatedStyle = outer1_0(outer1_2[4]).useAnimatedStyle(B);
      const merged1 = Object.assign(merged);
      obj["onPressIn"] = callback;
      obj["onPressOut"] = callback1;
      const items2 = [style, animatedStyle];
      obj["style"] = items2;
      obj["unstable_pressDelay"] = 130;
      obj["children"] = children;
      return outer1_7(outer1_8, obj);
    })(start);
  }
  return tmp;
}
let closure_3 = ["accessibilityRole"];
const View = get_ActivityIndicator.View;
let closure_8 = require("module_3991").createAnimatedComponent(get_ActivityIndicator.Pressable);
let closure_9 = _createForOfIteratorHelperLoose.createStyleProperties((arg0) => {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (flag === undefined) {
    flag = false;
  }
  if ("primary" === arg0) {
    let BACKGROUND_BASE_LOW = require(5127) /* createCardBackgroundToken */.CARD_PRIMARY_PRESSED_BG;
  } else if ("secondary" === arg0) {
    BACKGROUND_BASE_LOW = importDefault(689).colors.CARD_SECONDARY_BACKGROUND_ACTIVE;
  } else if ("muted" === arg0) {
    BACKGROUND_BASE_LOW = importDefault(689).colors.BACKGROUND_MOD_SUBTLE;
  } else if ("transparent" === arg0) {
    const tmp6 = importDefault(689);
    if (flag) {
      let TRANSPARENT = tmp6.colors.BACKGROUND_MOD_SUBTLE;
    } else {
      TRANSPARENT = tmp6.unsafe_rawColors.TRANSPARENT;
    }
    BACKGROUND_BASE_LOW = TRANSPARENT;
  } else if ("control-secondary" === arg0) {
    BACKGROUND_BASE_LOW = importDefault(689).colors.CONTROL_SECONDARY_BACKGROUND_ACTIVE;
  } else if ("surface-high" === arg0) {
    BACKGROUND_BASE_LOW = importDefault(689).colors.BACKGROUND_BASE_LOW;
  }
  const obj = { backgroundColor: getCardBackgroundToken(arg0), backgroundColorPressed: BACKGROUND_BASE_LOW };
  return obj;
});
let closure_10 = _createForOfIteratorHelperLoose.createStyles((arg0, arg1, arg2, arg3, arg4, arg5) => {
  const tmp = getCardBackgroundToken(arg2);
  let BORDER_SUBTLE = null;
  if ("none" !== arg4) {
    if ("subtle" === arg4) {
      BORDER_SUBTLE = importDefault(689).colors.BORDER_SUBTLE;
    } else if ("strong" === arg4) {
      BORDER_SUBTLE = importDefault(689).colors.BORDER_STRONG;
    } else if ("faint" === arg4) {
      BORDER_SUBTLE = importDefault(689).colors.BORDER_MUTED;
    } else if ("control-secondary" === arg4) {
      BORDER_SUBTLE = importDefault(689).colors.CONTROL_SECONDARY_BORDER_DEFAULT;
    }
  }
  let tmp11 = tmp;
  if (null != BORDER_SUBTLE) {
    tmp11 = BORDER_SUBTLE;
  }
  let obj = {};
  obj = {};
  const merged = Object.assign(require(5127) /* createCardBackgroundToken */.createCardShadowToken(arg3));
  let tmp13;
  if (arg0) {
    tmp13 = arg5;
  }
  obj["borderTopStartRadius"] = tmp13;
  let tmp14;
  if (arg0) {
    tmp14 = arg5;
  }
  obj["borderTopEndRadius"] = tmp14;
  let tmp15;
  if (arg1) {
    tmp15 = arg5;
  }
  obj["borderBottomStartRadius"] = tmp15;
  let tmp16;
  if (arg1) {
    tmp16 = arg5;
  }
  obj["borderBottomEndRadius"] = tmp16;
  obj["borderColor"] = tmp11;
  let num5 = 0;
  if ("none" !== arg4) {
    num5 = 1;
  }
  obj["borderWidth"] = num5;
  obj["backgroundColor"] = tmp;
  obj.card = obj;
  obj.spacing = { padding: 16 };
  return obj;
});
let closure_11 = { code: "function CardNativeTsx1(){const{withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING}=this.__closure;const pressedColor=withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always');return{backgroundColor:pressedColor};}" };
let result = require("get ActivityIndicator").fileFinishedImporting("design/components/Card/native/Card.native.tsx");

export { Card };
export const InternalCard = Card;
