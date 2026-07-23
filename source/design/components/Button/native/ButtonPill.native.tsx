// Module ID: 4552
// Function ID: 39906
// Name: PillWrapper
// Dependencies: [57, 31, 27, 33, 4547, 4130, 689, 4548, 3842, 3834, 4553, 4554, 3991, 3976, 4558, 3849, 4542, 4546, 2]
// Exports: ButtonPill

// Module 4552 (PillWrapper)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import getButtonPadding from "getButtonPadding";
import getButtonPadding from "getButtonPadding";
import getButtonPadding from "getButtonPadding";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function PillWrapper(expressivePressState) {
  let children;
  let expressiveRiveRef;
  let shiny;
  let size;
  let style;
  let variant;
  ({ children, variant, style, shiny } = expressivePressState);
  if (shiny === undefined) {
    shiny = false;
  }
  expressivePressState = expressivePressState.expressivePressState;
  ({ expressiveRiveRef, size } = expressivePressState);
  let obj = require(4548) /* useProfileThemedButtonStyles */;
  const buttonPillStyles = obj.useButtonPillStyles(variant, expressivePressState.pressed);
  let obj1 = require(4548) /* useProfileThemedButtonStyles */;
  const gradientPillStyles = obj1.useGradientPillStyles(variant);
  let obj2 = require(3842) /* ManaContext */;
  const tmp3 = callback4(variant, size);
  let obj3 = require(3834) /* map */;
  let items = [obj3.useToken(importDefault(689).colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT), , ];
  let obj4 = require(3834) /* map */;
  items[1] = obj4.useToken(importDefault(689).colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2);
  let obj5 = require(3834) /* map */;
  items[2] = obj5.useToken(importDefault(689).colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PINK_FOR_GRADIENT);
  const items1 = [importDefault(689).unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS, importDefault(689).unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2, importDefault(689).unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS];
  let tmp4 = null;
  if (shiny) {
    obj = { variant };
    tmp4 = callback2(require(4553) /* useShineEffectStyles */.ButtonShine, obj);
  }
  if ("experimental_premium-primary" !== variant) {
    if ("experimental_premium-basic" !== variant) {
      obj = {};
      let tmp10Result = "expressive" === variant;
      if (tmp10Result) {
        obj1 = {};
        const items2 = [closure_6.absoluteFill, tmp3.expressivePill];
        obj1.style = items2;
        obj2 = { withReducedMotion: "short-loop", ref: expressiveRiveRef, fit: "layout" };
        let str = "Mobile Expressive Button Dark Mode";
        if (obj10.isThemeLight(obj2.useThemeContext().theme)) {
          str = "Mobile Expressive Button Lightmode";
        }
        obj2.artboard = str;
        obj3 = { buttonColor: tmp3.expressiveRiveFill.color, cornerRadius: tmp3.expressivePill.borderRadius };
        const merged = Object.assign(expressivePressState);
        obj2.dataBinding = obj3;
        obj1.children = callback2(require(3842) /* ManaContext */.ExpressiveButtonRive, obj2);
        tmp10Result = callback2(closure_5, obj1);
        obj10 = require(3976) /* AccessibilityAnnouncer */;
        const tmp10 = callback2;
        const tmp11 = closure_5;
        const tmp13 = callback2;
      }
      const items3 = [tmp10Result, ];
      obj4 = {};
      const items4 = [style, buttonPillStyles];
      obj4.style = items4;
      const items5 = [children, tmp4];
      obj4.children = items5;
      items3[1] = callback3(importDefault(3991).View, obj4);
      obj.children = items3;
    }
    return tmp8(tmp9, obj);
  }
  obj5 = {};
  const obj6 = { start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, style: items6 };
  items6 = [style, gradientPillStyles, closure_6.absoluteFill];
  if ("experimental_premium-basic" === variant) {
    items = items1;
  }
  obj6.colors = items;
  const items7 = [callback2(importDefault(4554), obj6), ];
  const items8 = [style, buttonPillStyles];
  const items9 = [children, tmp4];
  items7[1] = callback3(importDefault(3991).View, { style: items8, children: items9 });
  obj5.children = items7;
  obj = obj5;
}
class BasicButtonPill {
  constructor(arg0) {
    str = global.variant;
    ({ children, style, pressed } = global);
    if (str === undefined) {
      str = "primary";
    }
    DEFAULT_BUTTON_SIZE = global.size;
    if (DEFAULT_BUTTON_SIZE === undefined) {
      tmp = closure_0;
      tmp2 = closure_2;
      num = 4;
      DEFAULT_BUTTON_SIZE = require("getButtonPadding").DEFAULT_BUTTON_SIZE;
    }
    flag = global.shiny;
    if (flag === undefined) {
      flag = false;
    }
    ({ expressiveRiveRef, expressivePressState } = global);
    tmp3 = f39915(str, DEFAULT_BUTTON_SIZE);
    obj = {};
    obj.variant = str;
    obj.size = DEFAULT_BUTTON_SIZE;
    items = [, ];
    items[0] = tmp3.pill;
    items[1] = style;
    obj.style = items;
    obj.pressed = pressed;
    obj.shiny = flag;
    obj.expressiveRiveRef = expressiveRiveRef;
    obj.expressivePressState = expressivePressState;
    obj = { style: tmp3.childContainer, children };
    obj.children = jsx(View, obj);
    return jsx(PillWrapper, obj);
  }
}
class LoadingButtonPill {
  constructor(arg0) {
    str = global.variant;
    ({ children, style, pressed } = global);
    if (str === undefined) {
      str = "primary";
    }
    DEFAULT_BUTTON_SIZE = global.size;
    if (DEFAULT_BUTTON_SIZE === undefined) {
      tmp = c0;
      tmp2 = c2;
      num = 4;
      DEFAULT_BUTTON_SIZE = require("getButtonPadding").DEFAULT_BUTTON_SIZE;
    }
    flag = global.loading;
    if (flag === undefined) {
      flag = false;
    }
    c0 = flag;
    loaderSize = global.loaderSize;
    useRef = undefined;
    c2 = undefined;
    ({ expressiveRiveRef, expressivePressState } = global);
    tmp3 = f39915(str, DEFAULT_BUTTON_SIZE);
    useRef = result.useRef(null);
    tmp4 = _slicedToArray(result.useState(flag), 2);
    first = tmp4[0];
    c2 = tmp4[1];
    items = [];
    items[0] = flag;
    effect = result.useEffect(() => {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
      }
      if (flag) {
        callback(true);
      } else {
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          outer1_2(false);
        }, 500);
      }
    }, items);
    tmp7 = _slicedToArray(useLoadingStyles(flag, DEFAULT_BUTTON_SIZE), 2);
    obj = {};
    obj.variant = str;
    obj.size = DEFAULT_BUTTON_SIZE;
    items1 = [, ];
    items1[0] = tmp3.pill;
    items1[1] = style;
    obj.style = items1;
    obj.pressed = pressed;
    obj.expressiveRiveRef = expressiveRiveRef;
    obj.expressivePressState = expressivePressState;
    [tmp8, tmp9] = tmp7;
    tmp10 = jsxs;
    tmp11 = PillWrapper;
    items2 = [, ];
    items2[0] = tmp3.childContainer;
    items2[1] = tmp8;
    items3 = [, ];
    items3[0] = jsx(require("module_3991").View, { style: items2, children });
    tmp12 = jsx;
    obj = { style: items4 };
    items4 = [, ];
    items4[0] = tmp3.ellipsis;
    items4[1] = tmp9;
    if (first) {
      tmp14 = c0;
      tmp15 = c2;
      num2 = 14;
      tmp13 = jsx;
      obj1 = {};
      obj1.variant = str;
      if (null != loaderSize) {
        DEFAULT_BUTTON_SIZE = loaderSize;
      }
      obj1.size = DEFAULT_BUTTON_SIZE;
      first = tmp13(require("EllipsisCircle").Ellipsis, obj1);
    }
    obj.children = first;
    items3[1] = tmp12(require("module_3991").View, obj);
    obj.children = items3;
    return tmp10(tmp11, obj);
  }
}
function useLoadingStyles(flag, DEFAULT_BUTTON_SIZE) {
  const _require = flag;
  const enabled = React.useContext(_require(num[15]).AccessibilityPreferencesContext).reducedMotion.enabled;
  num = 12;
  if ("lg" === DEFAULT_BUTTON_SIZE) {
    num = 18;
  }
  let obj = _require(num[12]);
  const fn = function o() {
    let obj = callback(num[16]);
    num = 1;
    if (callback) {
      num = 0;
    }
    const withSpringResult = obj.withSpring(num, callback(num[17]).SUBTLE_SPRING, "animate-always");
    obj = {};
    if (enabled) {
      let withDelayResult = withSpringResult;
      if (!callback) {
        withDelayResult = callback(num[12]).withDelay(outer1_10, withSpringResult);
        const obj5 = callback(num[12]);
      }
      obj.opacity = withDelayResult;
      obj = { translateY: 0 };
      const items = [obj];
      obj.transform = items;
      let tmp8 = obj;
    } else {
      obj.opacity = withSpringResult;
      const obj1 = {};
      let num2 = 0;
      if (callback) {
        num2 = -1 * num;
      }
      obj1.translateY = callback(num[16]).withSpring(num2, callback(num[17]).SUBTLE_SPRING);
      const items1 = [obj1];
      obj.transform = items1;
      tmp8 = obj;
      const obj4 = callback(num[16]);
    }
    return tmp8;
  };
  obj = { withSpring: _require(num[16]).withSpring, loading: flag, SUBTLE_SPRING: _require(num[17]).SUBTLE_SPRING, useReducedMotion: enabled, withDelay: _require(num[12]).withDelay, FADE_DELAY: c10, offsetY: num };
  fn.__closure = obj;
  fn.__workletHash = 9388603334085;
  fn.__initData = closure_15;
  let items = [obj.useAnimatedStyle(fn), ];
  const fn2 = function l() {
    let obj = callback(num[16]);
    num = 0;
    if (callback) {
      num = 1;
    }
    const withSpringResult = obj.withSpring(num, callback(num[17]).SUBTLE_SPRING, "animate-always");
    obj = {};
    if (enabled) {
      let withDelayResult = withSpringResult;
      if (callback) {
        withDelayResult = callback(num[12]).withDelay(outer1_10, withSpringResult);
        const obj5 = callback(num[12]);
      }
      obj.opacity = withDelayResult;
      obj = { translateY: 0 };
      const items = [obj];
      obj.transform = items;
      let tmp7 = obj;
    } else {
      obj.opacity = withSpringResult;
      const obj1 = {};
      let num2 = 0;
      if (!callback) {
        num2 = num;
      }
      obj1.translateY = callback(num[16]).withSpring(num2, callback(num[17]).SUBTLE_SPRING);
      const items1 = [obj1];
      obj.transform = items1;
      tmp7 = obj;
      const obj4 = callback(num[16]);
    }
    return tmp7;
  };
  obj = { withSpring: _require(num[16]).withSpring, loading: flag, SUBTLE_SPRING: _require(num[17]).SUBTLE_SPRING, useReducedMotion: enabled, withDelay: _require(num[12]).withDelay, FADE_DELAY: c10, offsetY: num };
  fn2.__closure = obj;
  fn2.__workletHash = 8255420825872;
  fn2.__initData = closure_16;
  items[1] = _require(num[12]).useAnimatedStyle(fn2);
  return items;
}
({ View: closure_5, StyleSheet: closure_6 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let c10 = 300;
const buttonPadding = getButtonPadding.getButtonPadding(require("getButtonPadding").SMALL_BUTTON_HEIGHT, require("getButtonPadding").SMALL_BUTTON_ICON_SIZE);
const buttonPadding2 = getButtonPadding.getButtonPadding(require("getButtonPadding").MEDIUM_BUTTON_HEIGHT, require("getButtonPadding").MEDIUM_BUTTON_ICON_SIZE);
const buttonPadding3 = getButtonPadding.getButtonPadding(require("getButtonPadding").LARGE_BUTTON_HEIGHT, require("getButtonPadding").LARGE_BUTTON_ICON_SIZE);
let closure_14 = _createForOfIteratorHelperLoose.createStyles((arg0, arg1) => {
  let obj = {};
  if ("sm" === arg1) {
    obj = { minHeight: require(4547) /* getButtonPadding */.SMALL_BUTTON_HEIGHT, minWidth: require(4547) /* getButtonPadding */.SMALL_BUTTON_HEIGHT, paddingHorizontal: require(4547) /* getButtonPadding */.SMALL_BUTTON_HORIZONTAL_PADDING, paddingVertical: closure_11 };
  } else if ("md" === arg1) {
    obj = { minHeight: require(4547) /* getButtonPadding */.MEDIUM_BUTTON_HEIGHT, minWidth: require(4547) /* getButtonPadding */.MEDIUM_BUTTON_HEIGHT, paddingHorizontal: require(4547) /* getButtonPadding */.MEDIUM_BUTTON_HORIZONTAL_PADDING, paddingVertical: closure_12 };
  } else if ("lg" === arg1) {
    const obj1 = { minHeight: require(4547) /* getButtonPadding */.LARGE_BUTTON_HEIGHT, minWidth: require(4547) /* getButtonPadding */.LARGE_BUTTON_HEIGHT, paddingHorizontal: require(4547) /* getButtonPadding */.LARGE_BUTTON_HORIZONTAL_PADDING, paddingVertical: closure_13 };
    obj = obj1;
  }
  if ("lg" === arg1) {
    let BORDER_RADIUS = importDefault(689).modules.button.BORDER_RADIUS_LG;
  } else {
    BORDER_RADIUS = importDefault(689).modules.button.BORDER_RADIUS;
  }
  const obj2 = {};
  const obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "center", overflow: "hidden", borderWidth: require(4547) /* getButtonPadding */.BUTTON_BORDER_WIDTH, borderRadius: BORDER_RADIUS };
  const merged = Object.assign(obj);
  obj2.pill = obj3;
  const obj4 = { overflow: "hidden", borderRadius: BORDER_RADIUS };
  obj2.expressivePill = obj4;
  obj2.expressiveRiveFill = { color: importDefault(689).colors.CONTROL_EXPRESSIVE_BACKGROUND_DEFAULT };
  obj2.childContainer = { flexDirection: "row", alignItems: "center", justifyContent: "center", flexGrow: 1, maxWidth: "100%" };
  obj2.ellipsis = { position: "absolute", height: "100%", width: "100%", justifyContent: "center", alignItems: "center" };
  return obj2;
});
let closure_15 = { code: "function ButtonPillNativeTsx1(){const{withSpring,loading,SUBTLE_SPRING,useReducedMotion,withDelay,FADE_DELAY,offsetY}=this.__closure;const opacityTransition=withSpring(loading?0:1,SUBTLE_SPRING,'animate-always');if(useReducedMotion){return{opacity:loading?opacityTransition:withDelay(FADE_DELAY,opacityTransition),transform:[{translateY:0}]};}return{opacity:opacityTransition,transform:[{translateY:withSpring(loading?-1*offsetY:0,SUBTLE_SPRING)}]};}" };
let closure_16 = { code: "function ButtonPillNativeTsx2(){const{withSpring,loading,SUBTLE_SPRING,useReducedMotion,withDelay,FADE_DELAY,offsetY}=this.__closure;const opacityTransition=withSpring(loading?1:0,SUBTLE_SPRING,'animate-always');if(useReducedMotion){return{opacity:loading?withDelay(FADE_DELAY,opacityTransition):opacityTransition,transform:[{translateY:0}]};}return{opacity:opacityTransition,transform:[{translateY:withSpring(loading?0:offsetY,SUBTLE_SPRING)}]};}" };
const result = require("get ActivityIndicator").fileFinishedImporting("design/components/Button/native/ButtonPill.native.tsx");

export const ButtonPill = function ButtonPill(loading) {
  if (null == loading.loading) {
    let obj = {};
    const merged = Object.assign(loading);
    let tmp6 = callback2(BasicButtonPill, obj);
  } else {
    obj = {};
    const merged1 = Object.assign(loading);
    tmp6 = callback2(LoadingButtonPill, obj);
  }
  return tmp6;
};
export { BasicButtonPill };
export { LoadingButtonPill };
export { useLoadingStyles };
