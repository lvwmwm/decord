// Module ID: 4544
// Function ID: 39810
// Name: PillWrapper
// Dependencies: []
// Exports: ButtonPill

// Module 4544 (PillWrapper)
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
  let obj = arg1(dependencyMap[7]);
  const buttonPillStyles = obj.useButtonPillStyles(variant, expressivePressState.pressed);
  let obj1 = arg1(dependencyMap[7]);
  const gradientPillStyles = obj1.useGradientPillStyles(variant);
  let obj2 = arg1(dependencyMap[8]);
  const tmp3 = callback4(variant, size);
  let obj3 = arg1(dependencyMap[9]);
  let items = [obj3.useToken(importDefault(dependencyMap[6]).colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT), , ];
  let obj4 = arg1(dependencyMap[9]);
  items[1] = obj4.useToken(importDefault(dependencyMap[6]).colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2);
  let obj5 = arg1(dependencyMap[9]);
  items[2] = obj5.useToken(importDefault(dependencyMap[6]).colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PINK_FOR_GRADIENT);
  const items1 = [importDefault(dependencyMap[6]).unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS, importDefault(dependencyMap[6]).unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2, importDefault(dependencyMap[6]).unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS];
  let tmp4 = null;
  if (shiny) {
    obj = { variant };
    tmp4 = callback2(arg1(dependencyMap[10]).ButtonShine, obj);
  }
  if ("experimental_premium-primary" !== variant) {
    if ("experimental_premium-basic" !== variant) {
      obj = {};
      let tmp10Result = "expressive" === variant;
      if (tmp10Result) {
        obj1 = {};
        const items2 = [closure_6.absoluteFill, tmp3.expressivePill];
        obj1.style = items2;
        obj2 = { "Bool(false)": "key", "Bool(false)": "Text", "Bool(false)": "Icon", ref: expressiveRiveRef };
        let str = "Mobile Expressive Button Dark Mode";
        if (obj10.isThemeLight(obj2.useThemeContext().theme)) {
          str = "Mobile Expressive Button Lightmode";
        }
        obj2.artboard = str;
        obj3 = { buttonColor: tmp3.expressiveRiveFill.color, cornerRadius: tmp3.expressivePill.borderRadius };
        const merged = Object.assign(expressivePressState);
        obj2.dataBinding = obj3;
        obj1.children = callback2(arg1(dependencyMap[8]).ExpressiveButtonRive, obj2);
        tmp10Result = callback2(closure_5, obj1);
        const obj10 = arg1(dependencyMap[13]);
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
      items3[1] = callback3(importDefault(dependencyMap[12]).View, obj4);
      obj.children = items3;
    }
    return tmp8(tmp9, obj);
  }
  obj5 = {};
  const obj6 = { start: { "Null": false, "Null": true }, end: { "Null": null, "Null": null }, style: items6 };
  const items6 = [style, gradientPillStyles, closure_6.absoluteFill];
  if ("experimental_premium-basic" === variant) {
    items = items1;
  }
  obj6.colors = items;
  const items7 = [callback2(importDefault(dependencyMap[11]), obj6), ];
  const items8 = [style, buttonPillStyles];
  const items9 = [children, tmp4];
  items7[1] = callback3(importDefault(dependencyMap[12]).View, { style: items8, children: items9 });
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
      tmp = arg1;
      tmp2 = dependencyMap;
      num = 4;
      DEFAULT_BUTTON_SIZE = arg1(dependencyMap[4]).DEFAULT_BUTTON_SIZE;
    }
    flag = global.shiny;
    if (flag === undefined) {
      flag = false;
    }
    ({ expressiveRiveRef, expressivePressState } = global);
    tmp3 = f39819(str, DEFAULT_BUTTON_SIZE);
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
      tmp = closure_0;
      tmp2 = closure_2;
      num = 4;
      DEFAULT_BUTTON_SIZE = closure_0(closure_2[4]).DEFAULT_BUTTON_SIZE;
    }
    flag = global.loading;
    if (flag === undefined) {
      flag = false;
    }
    closure_0 = flag;
    loaderSize = global.loaderSize;
    importDefault = undefined;
    closure_2 = undefined;
    ({ expressiveRiveRef, expressivePressState } = global);
    tmp3 = f39819(str, DEFAULT_BUTTON_SIZE);
    importDefault = importAll.useRef(null);
    tmp4 = closure_3(importAll.useState(flag), 2);
    first = tmp4[0];
    closure_2 = tmp4[1];
    items = [];
    items[0] = flag;
    effect = importAll.useEffect(() => {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
      }
      if (flag) {
        callback(true);
      } else {
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          callback(false);
        }, 500);
      }
    }, items);
    tmp7 = closure_3(useLoadingStyles(flag, DEFAULT_BUTTON_SIZE), 2);
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
    items3[0] = jsx(importDefault(closure_2[12]).View, { style: items2, children });
    tmp12 = jsx;
    obj = { style: items4 };
    items4 = [, ];
    items4[0] = tmp3.ellipsis;
    items4[1] = tmp9;
    if (first) {
      tmp14 = closure_0;
      tmp15 = closure_2;
      num2 = 14;
      tmp13 = jsx;
      obj1 = {};
      obj1.variant = str;
      if (null != loaderSize) {
        DEFAULT_BUTTON_SIZE = loaderSize;
      }
      obj1.size = DEFAULT_BUTTON_SIZE;
      first = tmp13(closure_0(closure_2[14]).Ellipsis, obj1);
    }
    obj.children = first;
    items3[1] = tmp12(importDefault(closure_2[12]).View, obj);
    obj.children = items3;
    return tmp10(tmp11, obj);
  }
}
function useLoadingStyles(flag, DEFAULT_BUTTON_SIZE) {
  DEFAULT_BUTTON_SIZE = flag;
  const enabled = React.useContext(DEFAULT_BUTTON_SIZE(dependencyMap[15]).AccessibilityPreferencesContext).reducedMotion.enabled;
  const importDefault = enabled;
  let num = 12;
  if ("lg" === DEFAULT_BUTTON_SIZE) {
    num = 18;
  }
  const dependencyMap = num;
  let obj = DEFAULT_BUTTON_SIZE(dependencyMap[12]);
  const fn = function o() {
    let obj = arg0(num[16]);
    let num = 1;
    if (arg0) {
      num = 0;
    }
    const withSpringResult = obj.withSpring(num, arg0(num[17]).SUBTLE_SPRING, "animate-always");
    obj = {};
    if (enabled) {
      let withDelayResult = withSpringResult;
      if (!arg0) {
        withDelayResult = arg0(num[12]).withDelay(closure_10, withSpringResult);
        const obj5 = arg0(num[12]);
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
      if (arg0) {
        num2 = -1 * num;
      }
      obj1.translateY = arg0(num[16]).withSpring(num2, arg0(num[17]).SUBTLE_SPRING);
      const items1 = [obj1];
      obj.transform = items1;
      tmp8 = obj;
      const obj4 = arg0(num[16]);
    }
    return tmp8;
  };
  obj = { withSpring: DEFAULT_BUTTON_SIZE(dependencyMap[16]).withSpring, loading: flag, SUBTLE_SPRING: DEFAULT_BUTTON_SIZE(dependencyMap[17]).SUBTLE_SPRING, useReducedMotion: enabled, withDelay: DEFAULT_BUTTON_SIZE(dependencyMap[12]).withDelay, FADE_DELAY: closure_10, offsetY: num };
  fn.__closure = obj;
  fn.__workletHash = 9388603334085;
  fn.__initData = closure_15;
  const items = [obj.useAnimatedStyle(fn), ];
  const fn2 = function l() {
    let obj = arg0(num[16]);
    let num = 0;
    if (arg0) {
      num = 1;
    }
    const withSpringResult = obj.withSpring(num, arg0(num[17]).SUBTLE_SPRING, "animate-always");
    obj = {};
    if (enabled) {
      let withDelayResult = withSpringResult;
      if (arg0) {
        withDelayResult = arg0(num[12]).withDelay(closure_10, withSpringResult);
        const obj5 = arg0(num[12]);
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
      if (!arg0) {
        num2 = num;
      }
      obj1.translateY = arg0(num[16]).withSpring(num2, arg0(num[17]).SUBTLE_SPRING);
      const items1 = [obj1];
      obj.transform = items1;
      tmp7 = obj;
      const obj4 = arg0(num[16]);
    }
    return tmp7;
  };
  obj = { withSpring: DEFAULT_BUTTON_SIZE(dependencyMap[16]).withSpring, loading: flag, SUBTLE_SPRING: DEFAULT_BUTTON_SIZE(dependencyMap[17]).SUBTLE_SPRING, useReducedMotion: enabled, withDelay: DEFAULT_BUTTON_SIZE(dependencyMap[12]).withDelay, FADE_DELAY: closure_10, offsetY: num };
  fn2.__closure = obj;
  fn2.__workletHash = 8255420825872;
  fn2.__initData = closure_16;
  items[1] = DEFAULT_BUTTON_SIZE(dependencyMap[12]).useAnimatedStyle(fn2);
  return items;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, StyleSheet: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = arg1(dependencyMap[3]));
let closure_10 = 300;
const tmp3 = arg1(dependencyMap[3]);
const buttonPadding = arg1(dependencyMap[4]).getButtonPadding(arg1(dependencyMap[4]).SMALL_BUTTON_HEIGHT, arg1(dependencyMap[4]).SMALL_BUTTON_ICON_SIZE);
const obj = arg1(dependencyMap[4]);
const buttonPadding2 = arg1(dependencyMap[4]).getButtonPadding(arg1(dependencyMap[4]).MEDIUM_BUTTON_HEIGHT, arg1(dependencyMap[4]).MEDIUM_BUTTON_ICON_SIZE);
const obj2 = arg1(dependencyMap[4]);
const buttonPadding3 = arg1(dependencyMap[4]).getButtonPadding(arg1(dependencyMap[4]).LARGE_BUTTON_HEIGHT, arg1(dependencyMap[4]).LARGE_BUTTON_ICON_SIZE);
const obj3 = arg1(dependencyMap[4]);
let closure_14 = arg1(dependencyMap[5]).createStyles((arg0, arg1) => {
  let obj = {};
  if ("sm" === arg1) {
    obj = { minHeight: arg1(dependencyMap[4]).SMALL_BUTTON_HEIGHT, minWidth: arg1(dependencyMap[4]).SMALL_BUTTON_HEIGHT, paddingHorizontal: arg1(dependencyMap[4]).SMALL_BUTTON_HORIZONTAL_PADDING, paddingVertical: closure_11 };
  } else if ("md" === arg1) {
    obj = { minHeight: arg1(dependencyMap[4]).MEDIUM_BUTTON_HEIGHT, minWidth: arg1(dependencyMap[4]).MEDIUM_BUTTON_HEIGHT, paddingHorizontal: arg1(dependencyMap[4]).MEDIUM_BUTTON_HORIZONTAL_PADDING, paddingVertical: closure_12 };
  } else if ("lg" === arg1) {
    const obj1 = { minHeight: arg1(dependencyMap[4]).LARGE_BUTTON_HEIGHT, minWidth: arg1(dependencyMap[4]).LARGE_BUTTON_HEIGHT, paddingHorizontal: arg1(dependencyMap[4]).LARGE_BUTTON_HORIZONTAL_PADDING, paddingVertical: closure_13 };
    obj = obj1;
  }
  if ("lg" === arg1) {
    let BORDER_RADIUS = importDefault(dependencyMap[6]).modules.button.BORDER_RADIUS_LG;
  } else {
    BORDER_RADIUS = importDefault(dependencyMap[6]).modules.button.BORDER_RADIUS;
  }
  const obj2 = {};
  const obj3 = { borderWidth: arg1(dependencyMap[4]).BUTTON_BORDER_WIDTH, borderRadius: BORDER_RADIUS };
  const merged = Object.assign(obj);
  obj2.pill = obj3;
  const obj4 = { overflow: "hidden", borderRadius: BORDER_RADIUS };
  obj2.expressivePill = obj4;
  obj2.expressiveRiveFill = { color: importDefault(dependencyMap[6]).colors.CONTROL_EXPRESSIVE_BACKGROUND_DEFAULT };
  obj2.childContainer = {};
  obj2.ellipsis = { 758274158: true, 1911668291: false, -1943171307: "", -1723054236: false, 1986079004: false };
  return obj2;
});
let closure_15 = { code: "function ButtonPillNativeTsx1(){const{withSpring,loading,SUBTLE_SPRING,useReducedMotion,withDelay,FADE_DELAY,offsetY}=this.__closure;const opacityTransition=withSpring(loading?0:1,SUBTLE_SPRING,'animate-always');if(useReducedMotion){return{opacity:loading?opacityTransition:withDelay(FADE_DELAY,opacityTransition),transform:[{translateY:0}]};}return{opacity:opacityTransition,transform:[{translateY:withSpring(loading?-1*offsetY:0,SUBTLE_SPRING)}]};}" };
let closure_16 = { code: "function ButtonPillNativeTsx2(){const{withSpring,loading,SUBTLE_SPRING,useReducedMotion,withDelay,FADE_DELAY,offsetY}=this.__closure;const opacityTransition=withSpring(loading?1:0,SUBTLE_SPRING,'animate-always');if(useReducedMotion){return{opacity:loading?withDelay(FADE_DELAY,opacityTransition):opacityTransition,transform:[{translateY:0}]};}return{opacity:opacityTransition,transform:[{translateY:withSpring(loading?0:offsetY,SUBTLE_SPRING)}]};}" };
const obj4 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("design/components/Button/native/ButtonPill.native.tsx");

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
