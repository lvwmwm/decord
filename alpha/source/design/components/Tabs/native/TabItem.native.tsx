// Module ID: 12358
// Function ID: 12359
// Name: TabItem
// Dependencies: [109, 19, 17, 21, 4850, 5092, 587, 558, 5378, 576, 5088, 1382, 1126, 2]

// Module 12358 (TabItem)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4850 */;
import spring from "spring" /* 5378 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ReanimatedRexport = ReanimatedRexport2;
let _require;

let metroImportDefault;
let metroRequire;
let obj2;
let closure_3 = ["label", "count", "index", "itemCount", "state", "pressed", "grow", "variant"];
const Pressable = react_native.Pressable;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = ReanimatedRexport.createAnimatedComponent(Pressable);
const TEXT_SPRING_CONFIG = { mass: 0.3, damping: 13, stiffness: 250, overshootClamping: true };
const COUNT_SPRING_CONFIG = { mass: 2, damping: 30, stiffness: 300, overshootClamping: true };
let createStyles = createStyles_mod;
let obj = { item: { flexShrink: 0, flexBasis: 0, paddingBottom: 14, flexDirection: "row", justifyContent: "center" }, count: obj2 };
obj2 = { marginLeft: nativeDefault.space.PX_8 };
let closure_11 = createStyles.createStyles(obj);
createStyles = createStyles_mod;
let obj3 = { inactive: nativeDefault.colors.TEXT_MUTED, active: nativeDefault.colors.TEXT_BRAND, pressed: nativeDefault.colors.TEXT_BRAND };
let closure_12 = createStyles.createStyleProperties(obj3);
createStyles = createStyles_mod;
let obj4 = { inactive: nativeDefault.colors.TEXT_MUTED, active: nativeDefault.colors.TEXT_STRONG, pressed: nativeDefault.colors.TEXT_STRONG };
let closure_13 = createStyles.createStyleProperties(obj4);
const __initData = { code: "function TabItemNativeTsx1(){const{colors,pressed,index,activeIndex,withSpring,TEXT_SPRING_CONFIG}=this.__closure;let color=colors.inactive;const isPressActive=pressed.get()>=0;const isPressed=pressed.get()===index;const isActive=Math.round(activeIndex.get())===index;if(isPressed){color=colors.pressed;}else{if(isPressActive){color=colors.inactive;}else{if(isActive){color=colors.active;}}}return{color:withSpring(color,TEXT_SPRING_CONFIG,\"animate-always\")};}" };
const __initData2 = { code: "function TabItemNativeTsx2(){const{colors,pressed,index,activeIndex,withSpring,TEXT_SPRING_CONFIG}=this.__closure;let color=colors.inactive;const isPressActive=pressed.get()>=0;const isPressed=pressed.get()===index;const isActive=Math.round(activeIndex.get())===index;if(isPressed){color=colors.pressed;}else if(isPressActive){color=colors.inactive;}else if(isActive){color=colors.active;}return{color:withSpring(color,TEXT_SPRING_CONFIG,'animate-always')};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAnimatedTextStyle(index) {
  index = index.index;
  const activeIndex = index.activeIndex;
  const pressed = index.pressed;
  const variant = index.variant;
  let tmp = closure_12();
  if ("overlay" === variant) {
    tmp = closure_13();
  }
  const inactive = tmp;
  let obj = index(pressed[4]);
  const fn = function n() {
    let obj2;
    let active = inactive.inactive;
    const tmp2 = pressed.get() >= 0;
    const value = pressed.get();
    const tmp4 = index;
    if (value === index) {
      active = tmp.pressed;
    } else if (tmp2) {
      active = tmp.inactive;
    } else if (tmp5 === tmp4) {
      active = tmp.active;
    }
    const obj = { color: obj2.withSpring(active, TEXT_SPRING_CONFIG, "animate-always") };
    obj2 = spring;
    return obj;
  };
  let obj2 = { colors: tmp, pressed, index, activeIndex, withSpring: index(pressed[8]).withSpring, TEXT_SPRING_CONFIG };
  fn.__closure = obj2;
  fn.__workletHash = 3501288786345;
  fn.__initData = __initData;
  return obj.useAnimatedStyle(fn);
}) : (function useAnimatedTextStyle(index) {
  index = index.index;
  const activeIndex = index.activeIndex;
  const pressed = index.pressed;
  let inactive;
  const variant = index.variant;
  let tmp = closure_12();
  if ("overlay" === variant) {
    tmp = closure_13();
  }
  inactive = tmp;
  let obj = index(pressed[4]);
  const fn = function c() {
    let obj2;
    let active = inactive.inactive;
    const tmp2 = pressed.get() >= 0;
    const value = pressed.get();
    const tmp4 = index;
    if (value === index) {
      active = tmp.pressed;
    } else if (tmp2) {
      active = tmp.inactive;
    } else if (tmp5 === tmp4) {
      active = tmp.active;
    }
    const obj = { color: obj2.withSpring(active, TEXT_SPRING_CONFIG, "animate-always") };
    obj2 = spring;
    return obj;
  };
  let obj2 = { colors: tmp, pressed, index, activeIndex, withSpring: index(pressed[8]).withSpring, TEXT_SPRING_CONFIG };
  fn.__closure = obj2;
  fn.__workletHash = 376048369930;
  fn.__initData = __initData2;
  return obj.useAnimatedStyle(fn);
});
const __initData3 = { code: "function TabItemNativeTsx3(){const{withSpring,countAnimationState,COUNT_SPRING_CONFIG,interpolate}=this.__closure;return{opacity:withSpring(countAnimationState.get(),COUNT_SPRING_CONFIG),transform:[{translateX:withSpring(interpolate(countAnimationState.get(),[0,1],[-10,0]),COUNT_SPRING_CONFIG)}]};}" };
const __initData4 = { code: "function TabItemNativeTsx4(){const{withSpring,countAnimationState,COUNT_SPRING_CONFIG,interpolate}=this.__closure;return{opacity:withSpring(countAnimationState.get(),COUNT_SPRING_CONFIG),transform:[{translateX:withSpring(interpolate(countAnimationState.get(),[0,1],[-10,0]),COUNT_SPRING_CONFIG)}]};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function TabItemCount(arg0) {
  let activeIndex;
  let count;
  let index;
  let pressed;
  let sharedValue;
  let tmp6;
  let tmp7;
  let variant;
  const tmp = sharedValue;
  let obj = sharedValue(576);
  const cResult = obj.c(17);
  ({ count, index, activeIndex, pressed, variant } = arg0);
  const tmp4 = closure_11();
  let obj2 = sharedValue(4850);
  sharedValue = obj2.useSharedValue(0);
  if (cResult[0] !== sharedValue) {
    const fn = function n() {
      const result = sharedValue.set(1);
    };
    let items = [sharedValue];
    cResult[0] = sharedValue;
    cResult[1] = fn;
    cResult[2] = items;
    tmp7 = items;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const layoutEffect = react.useLayoutEffect(tmp6, tmp7);
  const fn2 = function y() {
    let items;
    let obj2;
    let obj4;
    let withSpring;
    const obj = { opacity: obj2.withSpring(sharedValue.get(), COUNT_SPRING_CONFIG), transform: items };
    obj2 = spring;
    const obj3 = { translateX: withSpring(obj4.interpolate(sharedValue.get(), [0, 1], [-10, 0]), COUNT_SPRING_CONFIG) };
    withSpring = spring.withSpring;
    spring;
    items = [obj3];
    obj4 = ReanimatedRexport2;
    return obj;
  };
  const tmpResult = tmp(4850);
  let obj3 = { withSpring: tmp(5378).withSpring, countAnimationState: sharedValue, COUNT_SPRING_CONFIG, interpolate: tmp(4850).interpolate };
  fn2.__closure = obj3;
  fn2.__workletHash = 5074862072194;
  fn2.__initData = __initData3;
  const animatedStyle = tmpResult.useAnimatedStyle(fn2);
  if (cResult[3] === activeIndex) {
    if (cResult[4] === index) {
      if (cResult[5] === pressed) {
        let tmp10;
        if (cResult[6] === variant) {
          tmp10 = cResult[7];
        }
        const tmp12 = closure_16(tmp10);
        if (cResult[8] === animatedStyle) {
          let tmp13;
          if (cResult[9] === tmp4.count) {
            tmp13 = cResult[10];
          }
          if (cResult[11] === tmp12) {
            let tmp14;
            if (cResult[12] === count) {
              tmp14 = cResult[13];
            }
            if (cResult[14] === tmp13) {
              let tmp17;
              if (cResult[15] === tmp14) {
                tmp17 = cResult[16];
              }
              return tmp17;
            }
            let obj4 = { style: tmp13, children: tmp14 };
            const tmp20 = closure_6(ReanimatedRexport.View, obj4);
            cResult[14] = tmp13;
            cResult[15] = tmp14;
            cResult[16] = tmp20;
            tmp17 = tmp20;
          }
          const obj5 = { animated: true, variant: "text-sm/medium", style: tmp12, lineClamp: 1, children: count };
          const tmp16 = closure_6(tmp(5088).Text, obj5);
          cResult[11] = tmp12;
          cResult[12] = count;
          cResult[13] = tmp16;
          tmp14 = tmp16;
        }
        const items1 = [tmp4.count, animatedStyle];
        cResult[8] = animatedStyle;
        cResult[9] = tmp4.count;
        cResult[10] = items1;
        tmp13 = items1;
      }
    }
  }
  const obj6 = { index, activeIndex, pressed, variant };
  cResult[3] = activeIndex;
  cResult[4] = index;
  cResult[5] = pressed;
  cResult[6] = variant;
  cResult[7] = obj6;
  tmp10 = obj6;
}) : (function TabItemCount(arg0) {
  let activeIndex;
  let count;
  let index;
  let items1;
  let pressed;
  let tmp5;
  let variant;
  let sharedValue;
  ({ count, index, activeIndex, pressed, variant } = arg0);
  const tmp = closure_11();
  let obj = sharedValue(4850);
  sharedValue = obj.useSharedValue(0);
  let items = [sharedValue];
  const layoutEffect = react.useLayoutEffect(() => {
    const result = sharedValue.set(1);
  }, items);
  let obj2 = sharedValue(4850);
  class I {
    constructor() {
      let items;
      let obj2;
      let obj4;
      let withSpring;
      const obj = { opacity: obj2.withSpring(sharedValue.get(), COUNT_SPRING_CONFIG), transform: items };
      obj2 = spring;
      const obj3 = { translateX: withSpring(obj4.interpolate(sharedValue.get(), [0, 1], [-10, 0]), COUNT_SPRING_CONFIG) };
      withSpring = spring.withSpring;
      spring;
      items = [obj3];
      obj4 = ReanimatedRexport2;
      return obj;
    }
  }
  let obj3 = { withSpring: sharedValue(5378).withSpring, countAnimationState: sharedValue, COUNT_SPRING_CONFIG, interpolate: sharedValue(4850).interpolate };
  I.__closure = obj3;
  I.__workletHash = 8384757524453;
  I.__initData = __initData4;
  const animatedStyle = obj2.useAnimatedStyle(I);
  let obj4 = { style: items1, children: closure_6(sharedValue(5088).Text, { animated: true, variant: "text-sm/medium", style: tmp5, lineClamp: 1, children: count }) };
  items1 = [tmp.count, animatedStyle];
  tmp5 = closure_16({ index, activeIndex, pressed, variant });
  const View = ReanimatedRexport.View;
  return closure_6(View, obj4);
});
const __initData5 = { code: "function TabItemNativeTsx5(){const{activeIndex,index}=this.__closure;return{accessibilityState:{selected:activeIndex.get()===index}};}" };
const __initData6 = { code: "function TabItemNativeTsx6(){const{activeIndex,index}=this.__closure;return{accessibilityState:{selected:activeIndex.get()===index}};}" };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function TabItem(arg0) {
  let closure_0;
  let count;
  let grow;
  let index;
  let itemCount;
  let items;
  let label;
  let pressed;
  let setItemDimensions;
  let state;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp4;
  let tmp5;
  let tmp7;
  let tmp8;
  let tmp9;
  let variant;
  let obj = require("react");
  const cResult = obj.c(43);
  if (cResult[0] !== arg0) {
    ({ label, count, index } = arg0);
    _require = index;
    ({ itemCount, state, pressed, grow, variant } = arg0);
    const tmp15 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = count;
    cResult[2] = grow;
    cResult[3] = index;
    cResult[4] = itemCount;
    cResult[5] = label;
    cResult[6] = pressed;
    cResult[7] = tmp15;
    cResult[8] = state;
    cResult[9] = variant;
    tmp12 = variant;
    tmp11 = state;
    tmp10 = tmp15;
    tmp9 = pressed;
    tmp8 = label;
    tmp7 = itemCount;
    tmp5 = grow;
    tmp4 = count;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    _require = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
    tmp11 = cResult[8];
    tmp12 = cResult[9];
  }
  const activeIndex = tmp11.activeIndex;
  setItemDimensions = tmp11.setItemDimensions;
  const tmp16 = closure_11();
  const fn = function b() {
    const obj = { accessibilityState: { selected: activeIndex.get() === closure_0 } };
    ({ selected: activeIndex.get() === closure_0 });
    return obj;
  };
  fn.__closure = { activeIndex, index: tmp6 };
  fn.__workletHash = 4443106768702;
  fn.__initData = __initData5;
  const tmpResult = require("ReanimatedRexport");
  const animatedProps = tmpResult.useAnimatedProps(fn);
  if (cResult[10] === activeIndex) {
    if (cResult[11] === tmp6) {
      if (cResult[12] === tmp9) {
        let tmp18;
        if (cResult[13] === tmp12) {
          tmp18 = cResult[14];
        }
        const tmp20 = closure_16(tmp18);
        if (cResult[15] === tmp6) {
          let tmp21;
          let tmp22;
          if (cResult[16] === setItemDimensions) {
            tmp21 = cResult[17];
          }
          let num14 = 0;
          if (tmp5) {
            num14 = 1;
          }
          if (cResult[18] !== num14) {
            const obj2 = { flexGrow: num14 };
            cResult[18] = num14;
            cResult[19] = obj2;
            tmp22 = obj2;
          } else {
            tmp22 = cResult[19];
          }
          if (cResult[20] === tmp16.item) {
            let tmp23;
            if (cResult[21] === tmp22) {
              tmp23 = cResult[22];
            }
            if (cResult[23] === tmp6) {
              let tmp24;
              if (cResult[24] === tmp7) {
                tmp24 = cResult[25];
              }
              if (cResult[26] === tmp20) {
                let tmp26;
                if (cResult[27] === tmp8) {
                  tmp26 = cResult[28];
                }
                if (cResult[29] === activeIndex) {
                  if (cResult[30] === tmp4) {
                    if (cResult[31] === tmp6) {
                      if (cResult[32] === tmp9) {
                        let tmp29;
                        if (cResult[33] === tmp12) {
                          tmp29 = cResult[34];
                        }
                        if (cResult[35] === animatedProps) {
                          if (cResult[36] === tmp21) {
                            if (cResult[37] === tmp10) {
                              if (cResult[38] === tmp23) {
                                if (cResult[39] === tmp24) {
                                  if (cResult[40] === tmp26) {
                                    let tmp33;
                                    if (cResult[41] === tmp29) {
                                      tmp33 = cResult[42];
                                    }
                                    return tmp33;
                                  }
                                }
                              }
                            }
                          }
                        }
                        const obj3 = { style: tmp23, onLayout: tmp21, accessibilityRole: "tab", accessibilityHint: tmp24, animatedProps, children: items };
                        const merged = Object.assign(tmp10);
                        items = [tmp26, tmp29];
                        const tmp39 = closure_7(closure_8, obj3);
                        cResult[35] = animatedProps;
                        cResult[36] = tmp21;
                        cResult[37] = tmp10;
                        cResult[38] = tmp23;
                        cResult[39] = tmp24;
                        cResult[40] = tmp26;
                        cResult[41] = tmp29;
                        cResult[42] = tmp39;
                        tmp33 = tmp39;
                      }
                    }
                  }
                }
                let tmp30 = null;
                if (null != tmp4) {
                  const obj4 = { count: tmp4, index: tmp6, activeIndex, pressed: tmp9, variant: tmp12 };
                  tmp30 = closure_6(closure_19, obj4);
                }
                cResult[29] = activeIndex;
                cResult[30] = tmp4;
                cResult[31] = tmp6;
                cResult[32] = tmp9;
                cResult[33] = tmp12;
                cResult[34] = tmp30;
                tmp29 = tmp30;
              }
              const obj5 = { animated: true, variant: "text-sm/semibold", style: tmp20, lineClamp: 1, children: tmp8 };
              const tmp28 = closure_6(require("Text/Text").Text, obj5);
              cResult[26] = tmp20;
              cResult[27] = tmp8;
              cResult[28] = tmp28;
              tmp26 = tmp28;
            }
            let formatToPlainStringResult;
            const tmpResult2 = require("PlatformUtils");
            if (tmpResult2.isAndroid()) {
              const intl = tmp(tmp2[12]).intl;
              const obj6 = { position: tmp6 + 1, tabCount: tmp7 };
              formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[12]).t["4EsQA1"], obj6);
            }
            cResult[23] = tmp6;
            cResult[24] = tmp7;
            cResult[25] = formatToPlainStringResult;
            tmp24 = formatToPlainStringResult;
          }
          const items1 = [tmp16.item, tmp22];
          cResult[20] = tmp16.item;
          cResult[21] = tmp22;
          cResult[22] = items1;
          tmp23 = items1;
        }
        function handleLayout(nativeEvent) {
          const obj = ReanimatedRexport2;
          obj.runOnUI(setItemDimensions)(closure_0, nativeEvent.nativeEvent.layout);
        }
        cResult[15] = tmp6;
        cResult[16] = setItemDimensions;
        cResult[17] = handleLayout;
        tmp21 = handleLayout;
      }
    }
  }
  const obj7 = { index: tmp6, activeIndex, pressed: tmp9, variant: tmp12 };
  cResult[10] = activeIndex;
  cResult[11] = tmp6;
  cResult[12] = tmp9;
  cResult[13] = tmp12;
  cResult[14] = obj7;
  tmp18 = obj7;
}) : (function TabItem(arg0) {
  let count;
  let formatToPlainStringResult;
  let grow;
  let index;
  let itemCount;
  let items1;
  let label;
  let pressed;
  let state;
  let variant;
  ({ count, index } = arg0);
  ({ state, pressed, variant } = arg0);
  ({ label, itemCount, grow } = arg0);
  const merged = Object.assign(arg0, Object.assign({ label: 0, count: 0, index: 0, itemCount: 0, state: 0, pressed: 0, grow: 0, variant: 0 }));
  const activeIndex = state.activeIndex;
  const setItemDimensions = state.setItemDimensions;
  const tmp2 = closure_11();
  let obj = index(setItemDimensions[4]);
  class T {
    constructor() {
      const obj = { accessibilityState: { selected: activeIndex.get() === index } };
      ({ selected: activeIndex.get() === index });
      return obj;
    }
  }
  T.__closure = { activeIndex, index };
  T.__workletHash = 16424800592413;
  T.__initData = __initData6;
  const animatedProps = obj.useAnimatedProps(T);
  const items = [tmp2.item, ];
  let num = 0;
  const tmp6 = closure_16({ index, activeIndex, pressed, variant });
  const tmp7 = closure_7;
  const tmp8 = closure_8;
  if (grow) {
    num = 1;
  }
  const obj2 = {
    style: items,
    onLayout: function handleLayout(nativeEvent) {
      const obj = ReanimatedRexport2;
      obj.runOnUI(setItemDimensions)(index, nativeEvent.nativeEvent.layout);
    },
    accessibilityRole: "tab",
    accessibilityHint: formatToPlainStringResult,
    animatedProps,
    children: items1
  };
  items[1] = { flexGrow: num };
  const merged1 = Object.assign(merged);
  formatToPlainStringResult = undefined;
  const tmp3Result = index(setItemDimensions[11]);
  if (tmp3Result.isAndroid()) {
    const intl = tmp3(tmp4[12]).intl;
    const obj3 = { position: index + 1, tabCount: itemCount };
    formatToPlainStringResult = intl.formatToPlainString(tmp3(tmp4[12]).t["4EsQA1"], obj3);
  }
  items1 = [closure_6(index(setItemDimensions[10]).Text, { animated: true, variant: "text-sm/semibold", style: tmp6, lineClamp: 1, children: label }), ];
  let tmp11Result = null;
  const tmp11 = closure_6;
  if (null != count) {
    const obj4 = { count, index, activeIndex, pressed, variant };
    tmp11Result = tmp11(closure_19, obj4);
  }
  items1[1] = tmp11Result;
  return tmp7(tmp8, obj2);
});
let result = size.fileFinishedImporting("design/components/Tabs/native/TabItem.native.tsx");

export const TabItem = tmp3;
