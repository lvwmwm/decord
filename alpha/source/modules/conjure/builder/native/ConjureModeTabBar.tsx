// Module ID: 17129
// Function ID: 17130
// Name: ConjureModeTabBar
// Dependencies: [19, 17, 21, 5092, 587, 558, 576, 4818, 4850, 5378, 1382, 8394, 1126, 5088, 2]

// Module 17129 (ConjureModeTabBar)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4850 */;
import spring from "spring" /* 5378 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let inactive;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ Pressable: closure_4, ScrollView: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let c9 = 0.04;
let closure_10 = { mass: 0.3, damping: 13, stiffness: 100, restDisplacementThreshold: 0.001, overshootClamping: true };
const TEXT_SPRING = { mass: 0.3, damping: 13, stiffness: 250, overshootClamping: true };
let createStyles = createStyles_mod;
let closure_12 = createStyles.createStyles((borderRadius, arg1) => {
  const obj = { scrollContentContainer: { flexGrow: 1 }, controlsContainer: { backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_BACKGROUND, borderRadius: borderRadius + 4, paddingVertical: 4, flexDirection: "row", alignItems: "center" }, indicatorContainer: { position: "absolute", width: "100%", height: "100%", borderRadius, flexDirection: "row" }, indicator: { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_INDICATOR_BACKGROUND, borderRadius }, indicatorHidden: { opacity: 0 }, item: { width: `${1 / arg1 * 100}%`, borderRadius: nativeDefault.radii.lg, paddingVertical: nativeDefault.space.PX_4, flexDirection: "row", justifyContent: "center" }, itemFirst: { marginStart: 4, marginEnd: -4 }, itemLast: { marginStart: -4, marginEnd: 4 }, label: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, maxWidth: "100%" }, labelText: { flexShrink: 1 }, prefix: { flexShrink: 0 } };
  ({ backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_BACKGROUND, borderRadius: borderRadius + 4, paddingVertical: 4, flexDirection: "row", alignItems: "center" });
  ({ flex: 1, backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_INDICATOR_BACKGROUND, borderRadius });
  ({ width: `${1 / arg1 * 100}%`, borderRadius: nativeDefault.radii.lg, paddingVertical: nativeDefault.space.PX_4, flexDirection: "row", justifyContent: "center" });
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, maxWidth: "100%" });
  return obj;
});
createStyles = createStyles_mod;
let obj = { inactive: nativeDefault.colors.TEXT_MUTED, active: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let closure_13 = createStyles.createStyleProperties(obj);
const __initData = { code: "function ConjureModeTabBarTsx1(){const{indicatorWidth}=this.__closure;return indicatorWidth.get();}" };
const __initData2 = { code: "function ConjureModeTabBarTsx2(_,previous){const{previousIndicatorWidth}=this.__closure;if(previous!=null){previousIndicatorWidth.set(previous);}}" };
const __initData3 = { code: "function ConjureModeTabBarTsx3(){const{activeIndex,itemCount}=this.__closure;return Math.min(Math.max(activeIndex.get(),0),itemCount-1);}" };
const __initData4 = { code: "function ConjureModeTabBarTsx4(){const{clampedActiveIndex,defaultActiveIndex,indicatorWidth,pressedIndex,PRESSED_TRANSLATE_AMOUNT,SEGMENT_SPACING,itemCount,previousIndicatorWidth,withSpring,INDICATOR_SPRING}=this.__closure;let translateX=(clampedActiveIndex.get()-defaultActiveIndex.get())*indicatorWidth.get();let scaleX=1;if(pressedIndex.get()>=0&&pressedIndex.get()!==clampedActiveIndex.get()){const direction=pressedIndex.get()<clampedActiveIndex.get()?-1:1;scaleX=1+PRESSED_TRANSLATE_AMOUNT;translateX=translateX+direction*indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}if(clampedActiveIndex.get()===0){translateX=translateX+SEGMENT_SPACING;}else{if(clampedActiveIndex.get()===itemCount-1){translateX=translateX-SEGMENT_SPACING;}}const animated=indicatorWidth.get()===previousIndicatorWidth.get();if(!animated){previousIndicatorWidth.set(indicatorWidth.get());}return{transform:[{translateX:animated?withSpring(translateX,INDICATOR_SPRING):translateX},{scaleX:withSpring(scaleX,INDICATOR_SPRING)}]};}" };
const __initData5 = { code: "function ConjureModeTabBarTsx5(){const{indicatorWidth}=this.__closure;return indicatorWidth.get();}" };
const __initData6 = { code: "function ConjureModeTabBarTsx6(_,previous){const{previousIndicatorWidth}=this.__closure;if(previous!=null)previousIndicatorWidth.set(previous);}" };
const __initData7 = { code: "function ConjureModeTabBarTsx7(){const{activeIndex,itemCount}=this.__closure;return Math.min(Math.max(activeIndex.get(),0),itemCount-1);}" };
const __initData8 = { code: "function ConjureModeTabBarTsx8(){const{clampedActiveIndex,defaultActiveIndex,indicatorWidth,pressedIndex,PRESSED_TRANSLATE_AMOUNT,SEGMENT_SPACING,itemCount,previousIndicatorWidth,withSpring,INDICATOR_SPRING}=this.__closure;let translateX=(clampedActiveIndex.get()-defaultActiveIndex.get())*indicatorWidth.get();let scaleX=1;if(pressedIndex.get()>=0&&pressedIndex.get()!==clampedActiveIndex.get()){const direction=pressedIndex.get()<clampedActiveIndex.get()?-1:1;scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX+=direction*indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}if(clampedActiveIndex.get()===0)translateX+=SEGMENT_SPACING;else if(clampedActiveIndex.get()===itemCount-1)translateX-=SEGMENT_SPACING;const animated=indicatorWidth.get()===previousIndicatorWidth.get();if(!animated)previousIndicatorWidth.set(indicatorWidth.get());return{transform:[{translateX:animated?withSpring(translateX,INDICATOR_SPRING):translateX},{scaleX:withSpring(scaleX,INDICATOR_SPRING)}]};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
const __initData9 = { code: "function ConjureModeTabBarTsx9(){const{pressed,colors,index,activeIndex,withSpring,TEXT_SPRING}=this.__closure;const pressedIndex=pressed.get();let color=colors.inactive;if(pressedIndex===index){color=colors.active;}else{if(pressedIndex<0&&Math.round(activeIndex.get())===index){color=colors.active;}}return{color:withSpring(color,TEXT_SPRING,\"animate-always\")};}" };
const __initData10 = { code: "function ConjureModeTabBarTsx10(){const{pressed,colors,index,activeIndex,withSpring,TEXT_SPRING}=this.__closure;const pressedIndex=pressed.get();let color=colors.inactive;if(pressedIndex===index)color=colors.active;else if(pressedIndex<0&&Math.round(activeIndex.get())===index)color=colors.active;return{color:withSpring(color,TEXT_SPRING,'animate-always')};}" };
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureModeTabBar(arg0) {
  let extras;
  let items;
  let items1;
  let pressedIndex;
  let state;
  let tmp12;
  let tmp8;
  let tmp = extras;
  let tmp2 = pressedIndex;
  let obj = extras(pressedIndex[6]);
  const cResult = obj.c(51);
  ({ state, extras } = arg0);
  const activeIndex = state.activeIndex;
  ({ items, pressedIndex } = state);
  const setActiveIndex = state.setActiveIndex;
  const obj2 = extras(pressedIndex[7]);
  const length = items.length;
  let tmp4 = closure_12(obj2.useToken(activeIndex(pressedIndex[4]).modules.mobile.SEGMENTED_CONTROL_BORDER_RADIUS), length);
  let closure_5 = tmp4;
  const obj3 = extras(pressedIndex[8]);
  const sharedValue = obj3.useSharedValue(0);
  let obj4 = extras(pressedIndex[8]);
  const sharedValue1 = obj4.useSharedValue(0);
  let obj5 = extras(pressedIndex[8]);
  const fn = function o() {
    return sharedValue.get();
  };
  fn.__closure = { indicatorWidth: sharedValue };
  fn.__workletHash = 21525623447;
  fn.__initData = __initData;
  const fn2 = function n(arg0, arg1) {
    if (null != arg1) {
      const result = sharedValue1.set(arg1);
    }
  };
  fn2.__closure = { previousIndicatorWidth: sharedValue1 };
  fn2.__workletHash = 4921607418503;
  fn2.__initData = __initData2;
  const animatedReaction = obj5.useAnimatedReaction(fn, fn2);
  if (cResult[0] !== sharedValue) {
    const fn3 = function c(nativeEvent) {
      return sharedValue.set(nativeEvent.nativeEvent.layout.width);
    };
    cResult[0] = sharedValue;
    let num = 1;
    cResult[1] = fn3;
    tmp8 = fn3;
  } else {
    tmp8 = cResult[1];
  }
  let closure_8 = tmp8;
  const tmpResult = tmp(tmp2[8]);
  const sharedValue2 = tmpResult.useSharedValue(activeIndex.get());
  const tmpResult5 = tmp(tmp2[8]);
  class G {
    constructor() {
      return Math.min(Math.max(activeIndex.get(), 0), length - 1);
    }
  }
  G.__closure = { activeIndex, itemCount: length };
  G.__workletHash = 5614191421067;
  G.__initData = __initData3;
  const derivedValue = tmpResult5.useDerivedValue(G);
  const tmpResult6 = tmp(tmp2[8]);
  class O {
    constructor() {
      let items;
      let obj8;
      let sum1;
      const value = derivedValue.get();
      const diff = value - sharedValue2.get();
      const result = diff * sharedValue.get();
      let tmp4 = pressedIndex.get() >= 0;
      if (tmp4) {
        const value4 = obj3.get();
        tmp4 = value4 !== obj.get();
      }
      let num = 1;
      let sum = result;
      if (tmp4) {
        const value5 = obj3.get();
        let num2 = 1;
        if (value5 < derivedValue.get()) {
          num2 = -1;
        }
        sum = result + num2 * obj2.get() * 0.02;
        num = 1.04;
      }
      if (0 === derivedValue.get()) {
        sum1 = sum + 4;
      } else {
        sum1 = sum;
        if (derivedValue.get() === length - 1) {
          sum1 = sum - 4;
        }
      }
      const value6 = obj2.get();
      const tmp11 = value6 === sharedValue1.get();
      const obj4 = sharedValue1;
      if (!tmp11) {
        const result1 = obj4.set(obj2.get());
      }
      let withSpringResult = sum1;
      if (tmp11) {
        const obj5 = spring;
        withSpringResult = obj5.withSpring(sum1, closure_10);
      }
      const obj6 = { transform: items };
      items = [{ translateX: withSpringResult }, ];
      const obj7 = { scaleX: obj8.withSpring(num, closure_10) };
      items[1] = obj7;
      obj8 = spring;
      return obj6;
    }
  }
  let obj6 = { clampedActiveIndex: derivedValue, defaultActiveIndex: sharedValue2, indicatorWidth: sharedValue, pressedIndex, PRESSED_TRANSLATE_AMOUNT: sharedValue2, SEGMENT_SPACING: 4, itemCount: length, previousIndicatorWidth: sharedValue1, withSpring: tmp(tmp2[9]).withSpring, INDICATOR_SPRING: derivedValue };
  O.__closure = obj6;
  O.__workletHash = 10078056504670;
  O.__initData = __initData4;
  const animatedStyle = tmpResult6.useAnimatedStyle(O);
  if (cResult[2] === sharedValue2) {
    if (cResult[3] === tmp8) {
      if (cResult[4] === animatedStyle) {
        if (cResult[5] === items) {
          if (cResult[6] === tmp4.indicator) {
            let tmp15;
            if (cResult[7] === tmp4.indicatorHidden) {
              tmp12 = cResult[8];
            }
            if (cResult[15] === activeIndex) {
              if (cResult[16] === extras) {
                if (cResult[17] === length) {
                  if (cResult[18] === items) {
                    if (cResult[19] === pressedIndex) {
                      if (cResult[20] === setActiveIndex) {
                        if (cResult[21] === tmp4.item) {
                          if (cResult[22] === tmp4.itemFirst) {
                            if (cResult[23] === tmp4.itemLast) {
                              if (cResult[24] === tmp4.label) {
                                if (cResult[25] === tmp4.labelText) {
                                  if (cResult[26] === tmp4.prefix) {
                                    tmp15 = cResult[27];
                                  }
                                  if (cResult[40] === tmp12) {
                                    let tmp18;
                                    if (cResult[41] === tmp4.indicatorContainer) {
                                      tmp18 = cResult[42];
                                    }
                                    if (cResult[43] === tmp15) {
                                      if (cResult[44] === items.length) {
                                        if (cResult[45] === tmp4.controlsContainer) {
                                          let tmp21;
                                          if (cResult[46] === tmp18) {
                                            tmp21 = cResult[47];
                                          }
                                          if (cResult[48] === tmp4.scrollContentContainer) {
                                            let tmp25;
                                            if (cResult[49] === tmp21) {
                                              tmp25 = cResult[50];
                                            }
                                            return tmp25;
                                          }
                                          const tmp26 = sharedValue1;
                                          class F {
                                            constructor(id, index) {
                                              let itemLast;
                                              let items;
                                              let tmp6;
                                              id = id.id;
                                              const label = id.label;
                                              if (0 === index) {
                                                itemLast = closure_5.itemFirst;
                                              } else if (index === length - 1) {
                                                itemLast = closure_5.itemLast;
                                              }
                                              const obj = { label, index, itemCount: length, activeIndex, pressed: pressedIndex, extras: tmp6, onSelect: setActiveIndex, itemStyle: items, labelStyle: null, labelTextStyle: null, prefixStyle: null };
                                              tmp6 = undefined;
                                              const tmp4 = metroImportDefault;
                                              const tmp5 = closure_24;
                                              if (extras != null) {
                                                tmp6 = extras[id];
                                              }
                                              items = [closure_5.item, itemLast];
                                              ({ label: obj.labelStyle, labelText: obj.labelTextStyle, prefix: obj.prefixStyle } = closure_5);
                                              return tmp4(tmp5, obj, id);
                                            }
                                          }
                                          let str2;
                                          const tmpResult7 = tmp(tmp2[10]);
                                          if (tmpResult7.isIOS()) {
                                            str2 = "tabbar";
                                          }
                                          let obj7 = { horizontal: true, accessibilityRole: str2, alwaysBounceHorizontal: false, contentContainerStyle: tmp4.scrollContentContainer, children: tmp21 };
                                          const tmp26Result = tmp26(tmp27, obj7);
                                          cResult[48] = tmp4.scrollContentContainer;
                                          cResult[49] = tmp21;
                                          cResult[50] = tmp26Result;
                                          tmp25 = tmp26Result;
                                        }
                                      }
                                    }
                                    const tmp22 = closure_8;
                                    class F {
                                      constructor(id, index) {
                                        let itemLast;
                                        let items;
                                        let tmp6;
                                        id = id.id;
                                        const label = id.label;
                                        if (0 === index) {
                                          itemLast = closure_5.itemFirst;
                                        } else if (index === length - 1) {
                                          itemLast = closure_5.itemLast;
                                        }
                                        const obj = { label, index, itemCount: length, activeIndex, pressed: pressedIndex, extras: tmp6, onSelect: setActiveIndex, itemStyle: items, labelStyle: null, labelTextStyle: null, prefixStyle: null };
                                        tmp6 = undefined;
                                        const tmp4 = metroImportDefault;
                                        const tmp5 = closure_24;
                                        if (extras != null) {
                                          tmp6 = extras[id];
                                        }
                                        items = [closure_5.item, itemLast];
                                        ({ label: obj.labelStyle, labelText: obj.labelTextStyle, prefix: obj.prefixStyle } = closure_5);
                                        return tmp4(tmp5, obj, id);
                                      }
                                    }
                                    let str;
                                    const tmpResult8 = tmp(tmp2[10]);
                                    if (tmpResult8.isAndroid()) {
                                      str = "tablist";
                                    }
                                    let obj8 = { accessibilityRole: str, style: tmp4.controlsContainer, children: items1 };
                                    items1 = [tmp18, tmp15];
                                    const tmp22Result = tmp22(tmp23, obj8, items.length);
                                    cResult[43] = tmp15;
                                    cResult[44] = items.length;
                                    cResult[45] = tmp4.controlsContainer;
                                    cResult[46] = tmp18;
                                    cResult[47] = tmp22Result;
                                    tmp21 = tmp22Result;
                                  }
                                  class F {
                                    constructor(id, index) {
                                      let itemLast;
                                      let items;
                                      let tmp6;
                                      id = id.id;
                                      const label = id.label;
                                      if (0 === index) {
                                        itemLast = closure_5.itemFirst;
                                      } else if (index === length - 1) {
                                        itemLast = closure_5.itemLast;
                                      }
                                      const obj = { label, index, itemCount: length, activeIndex, pressed: pressedIndex, extras: tmp6, onSelect: setActiveIndex, itemStyle: items, labelStyle: null, labelTextStyle: null, prefixStyle: null };
                                      tmp6 = undefined;
                                      const tmp4 = metroImportDefault;
                                      const tmp5 = closure_24;
                                      if (extras != null) {
                                        tmp6 = extras[id];
                                      }
                                      items = [closure_5.item, itemLast];
                                      ({ label: obj.labelStyle, labelText: obj.labelTextStyle, prefix: obj.prefixStyle } = closure_5);
                                      return tmp4(tmp5, obj, id);
                                    }
                                  }
                                  const obj9 = { accessible: false, style: tmp4.indicatorContainer, children: tmp12 };
                                  const tmp20 = sharedValue1(sharedValue, obj9);
                                  cResult[40] = tmp12;
                                  cResult[41] = tmp4.indicatorContainer;
                                  cResult[42] = tmp20;
                                  tmp18 = tmp20;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            if (cResult[28] === activeIndex) {
              if (cResult[29] === extras) {
                if (cResult[30] === length) {
                  if (cResult[31] === pressedIndex) {
                    if (cResult[32] === setActiveIndex) {
                      if (cResult[33] === tmp4.item) {
                        if (cResult[34] === tmp4.itemFirst) {
                          if (cResult[35] === tmp4.itemLast) {
                            if (cResult[36] === tmp4.label) {
                              if (cResult[37] === tmp4.labelText) {
                                let tmp16;
                                if (cResult[38] === tmp4.prefix) {
                                  tmp16 = cResult[39];
                                }
                                const mapped = items.map(tmp16);
                                class F {
                                  constructor(id, index) {
                                    let itemLast;
                                    let items;
                                    let tmp6;
                                    id = id.id;
                                    const label = id.label;
                                    if (0 === index) {
                                      itemLast = closure_5.itemFirst;
                                    } else if (index === length - 1) {
                                      itemLast = closure_5.itemLast;
                                    }
                                    const obj = { label, index, itemCount: length, activeIndex, pressed: pressedIndex, extras: tmp6, onSelect: setActiveIndex, itemStyle: items, labelStyle: null, labelTextStyle: null, prefixStyle: null };
                                    tmp6 = undefined;
                                    const tmp4 = metroImportDefault;
                                    const tmp5 = closure_24;
                                    if (extras != null) {
                                      tmp6 = extras[id];
                                    }
                                    items = [closure_5.item, itemLast];
                                    ({ label: obj.labelStyle, labelText: obj.labelTextStyle, prefix: obj.prefixStyle } = closure_5);
                                    return tmp4(tmp5, obj, id);
                                  }
                                }
                                cResult[16] = extras;
                                cResult[17] = length;
                                cResult[18] = items;
                                cResult[19] = pressedIndex;
                                cResult[20] = setActiveIndex;
                                cResult[21] = tmp4.item;
                                cResult[22] = tmp4.itemFirst;
                                cResult[23] = tmp4.itemLast;
                                cResult[24] = tmp4.label;
                                cResult[25] = tmp4.labelText;
                                cResult[26] = tmp4.prefix;
                                cResult[27] = mapped;
                                tmp15 = mapped;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            class F {
              constructor(id, index) {
                let itemLast;
                let items;
                let tmp6;
                id = id.id;
                const label = id.label;
                if (0 === index) {
                  itemLast = closure_5.itemFirst;
                } else if (index === length - 1) {
                  itemLast = closure_5.itemLast;
                }
                const obj = { label, index, itemCount: length, activeIndex, pressed: pressedIndex, extras: tmp6, onSelect: setActiveIndex, itemStyle: items, labelStyle: null, labelTextStyle: null, prefixStyle: null };
                tmp6 = undefined;
                const tmp4 = metroImportDefault;
                const tmp5 = closure_24;
                if (extras != null) {
                  tmp6 = extras[id];
                }
                items = [closure_5.item, itemLast];
                ({ label: obj.labelStyle, labelText: obj.labelTextStyle, prefix: obj.prefixStyle } = closure_5);
                return tmp4(tmp5, obj, id);
              }
            }
            cResult[28] = activeIndex;
            cResult[29] = extras;
            cResult[30] = length;
            cResult[31] = pressedIndex;
            cResult[32] = setActiveIndex;
            cResult[33] = tmp4.item;
            cResult[34] = tmp4.itemFirst;
            cResult[35] = tmp4.itemLast;
            cResult[36] = tmp4.label;
            cResult[37] = tmp4.labelText;
            cResult[38] = tmp4.prefix;
            cResult[39] = F;
            tmp16 = F;
          }
        }
      }
    }
  }
  if (cResult[9] === sharedValue2) {
    if (cResult[10] === tmp8) {
      if (cResult[11] === animatedStyle) {
        if (cResult[12] === tmp4.indicator) {
          let tmp13;
          if (cResult[13] === tmp4.indicatorHidden) {
            tmp13 = cResult[14];
          }
          const mapped1 = items.map(tmp13);
          let num2 = 2;
          class F {
            constructor(id, index) {
              let itemLast;
              let items;
              let tmp6;
              id = id.id;
              const label = id.label;
              if (0 === index) {
                itemLast = closure_5.itemFirst;
              } else if (index === length - 1) {
                itemLast = closure_5.itemLast;
              }
              const obj = { label, index, itemCount: length, activeIndex, pressed: pressedIndex, extras: tmp6, onSelect: setActiveIndex, itemStyle: items, labelStyle: null, labelTextStyle: null, prefixStyle: null };
              tmp6 = undefined;
              const tmp4 = metroImportDefault;
              const tmp5 = closure_24;
              if (extras != null) {
                tmp6 = extras[id];
              }
              items = [closure_5.item, itemLast];
              ({ label: obj.labelStyle, labelText: obj.labelTextStyle, prefix: obj.prefixStyle } = closure_5);
              return tmp4(tmp5, obj, id);
            }
          }
          cResult[3] = tmp8;
          cResult[4] = animatedStyle;
          cResult[5] = items;
          cResult[6] = tmp4.indicator;
          cResult[7] = tmp4.indicatorHidden;
          cResult[8] = mapped1;
          tmp12 = mapped1;
        }
      }
    }
  }
  class L {
    constructor(id, arg1) {
      let items;
      id = id.id;
      const tmp = sharedValue2.get() === arg1;
      let tmp3;
      const View = ReanimatedRexportDefault.View;
      const tmp2 = metroImportDefault;
      if (tmp) {
        tmp3 = closure_8;
      }
      const obj = { onLayout: tmp3, style: items };
      items = [closure_5.indicator, tmp ? animatedStyle : closure_5.indicatorHidden];
      return tmp2(View, obj, id);
    }
  }
  cResult[9] = sharedValue2;
  cResult[10] = tmp8;
  cResult[11] = animatedStyle;
  cResult[12] = tmp4.indicator;
  cResult[13] = tmp4.indicatorHidden;
  cResult[14] = L;
  tmp13 = L;
}) : (function ConjureModeTabBar(arg0) {
  let items;
  let items2;
  let obj11;
  let pressedIndex;
  let require;
  let state;
  let tmp13;
  ({ state, extras: require } = arg0);
  pressedIndex = undefined;
  let derivedValue;
  let closure_11;
  const activeIndex = state.activeIndex;
  ({ items, pressedIndex } = state);
  const setActiveIndex = state.setActiveIndex;
  let tmp = require;
  let tmp2 = pressedIndex;
  let obj = require("useToken");
  const length = items.length;
  let tmp3 = closure_12(obj.useToken(activeIndex(pressedIndex[4]).modules.mobile.SEGMENTED_CONTROL_BORDER_RADIUS), length);
  let closure_5 = tmp3;
  const obj2 = require("ReanimatedRexport");
  const sharedValue = obj2.useSharedValue(0);
  const obj3 = require("ReanimatedRexport");
  const sharedValue1 = obj3.useSharedValue(0);
  let obj4 = require("ReanimatedRexport");
  const fn = function x() {
    return sharedValue.get();
  };
  fn.__closure = { indicatorWidth: sharedValue };
  fn.__workletHash = 4450114368275;
  fn.__initData = __initData5;
  const fn2 = function c(arg0, arg1) {
    if (null != arg1) {
      const result = sharedValue1.set(arg1);
    }
  };
  fn2.__closure = { previousIndicatorWidth: sharedValue1 };
  fn2.__workletHash = 14934442796069;
  fn2.__initData = __initData6;
  const animatedReaction = obj4.useAnimatedReaction(fn, fn2);
  const items1 = [sharedValue];
  let closure_8 = setActiveIndex.useCallback((nativeEvent) => sharedValue.set(nativeEvent.nativeEvent.layout.width), items1);
  let obj5 = require("ReanimatedRexport");
  const sharedValue2 = obj5.useSharedValue(activeIndex.get());
  let obj6 = require("ReanimatedRexport");
  class P {
    constructor() {
      return Math.min(Math.max(activeIndex.get(), 0), length - 1);
    }
  }
  P.__closure = { activeIndex, itemCount: length };
  P.__workletHash = 1185602676239;
  P.__initData = __initData7;
  derivedValue = obj6.useDerivedValue(P);
  let obj7 = require("ReanimatedRexport");
  class X {
    constructor() {
      let items;
      let obj8;
      let sum1;
      const value = derivedValue.get();
      const diff = value - sharedValue2.get();
      const result = diff * sharedValue.get();
      let num = 1;
      let sum = result;
      if (pressedIndex.get() >= 0) {
        const value4 = obj3.get();
        num = 1;
        sum = result;
        if (value4 !== derivedValue.get()) {
          const value5 = obj3.get();
          let num2 = 1;
          if (value5 < derivedValue.get()) {
            num2 = -1;
          }
          num = 1 + c9;
          sum = result + num2 * obj2.get() * 0.02;
        }
      }
      if (0 === derivedValue.get()) {
        sum1 = sum + 4;
      } else {
        sum1 = sum;
        if (derivedValue.get() === length - 1) {
          sum1 = sum - 4;
        }
      }
      const value6 = obj2.get();
      const tmp11 = value6 === sharedValue1.get();
      const obj4 = sharedValue1;
      if (!tmp11) {
        const result1 = obj4.set(obj2.get());
      }
      let withSpringResult = sum1;
      if (tmp11) {
        const obj5 = spring;
        withSpringResult = obj5.withSpring(sum1, closure_10);
      }
      const obj6 = { transform: items };
      items = [{ translateX: withSpringResult }, ];
      const obj7 = { scaleX: obj8.withSpring(num, closure_10) };
      items[1] = obj7;
      obj8 = spring;
      return obj6;
    }
  }
  let obj8 = { clampedActiveIndex: derivedValue, defaultActiveIndex: sharedValue2, indicatorWidth: sharedValue, pressedIndex, PRESSED_TRANSLATE_AMOUNT: sharedValue2, SEGMENT_SPACING: 4, itemCount: length, previousIndicatorWidth: sharedValue1, withSpring: require("spring").withSpring, INDICATOR_SPRING: derivedValue };
  X.__closure = obj8;
  X.__workletHash = 4191922249789;
  X.__initData = __initData8;
  closure_11 = obj7.useAnimatedStyle(X);
  const mapped = items.map((id, index) => {
    let items;
    id = id.id;
    const tmp = sharedValue2.get() === index;
    let tmp3;
    const View = ReanimatedRexportDefault.View;
    const tmp2 = metroImportDefault;
    if (tmp) {
      tmp3 = closure_8;
    }
    const obj = { onLayout: tmp3, style: items };
    items = [closure_5.indicator, tmp ? closure_11 : closure_5.indicatorHidden];
    return tmp2(View, obj, id);
  });
  let tmp11 = sharedValue1;
  const mapped1 = items.map((id, index) => {
    let itemLast;
    let items;
    let tmp6;
    id = id.id;
    const label = id.label;
    if (0 === index) {
      itemLast = closure_5.itemFirst;
    } else if (index === length - 1) {
      itemLast = closure_5.itemLast;
    }
    const obj = { label, index, itemCount: length, activeIndex, pressed: pressedIndex, extras: tmp6, onSelect: setActiveIndex, itemStyle: items, labelStyle: null, labelTextStyle: null, prefixStyle: null };
    tmp6 = undefined;
    const tmp4 = metroImportDefault;
    const tmp5 = closure_24;
    if (_require != null) {
      tmp6 = _require[id];
    }
    items = [closure_5.item, itemLast];
    ({ label: obj.labelStyle, labelText: obj.labelTextStyle, prefix: obj.prefixStyle } = closure_5);
    return tmp4(tmp5, obj, id);
  });
  let str;
  const obj9 = require("PlatformUtils");
  const tmp12 = closure_5;
  if (obj9.isIOS()) {
    str = "tabbar";
  }
  const obj10 = { horizontal: true, accessibilityRole: str, alwaysBounceHorizontal: false, contentContainerStyle: tmp3.scrollContentContainer, children: tmp13(tmp14, obj11, items.length) };
  let str2;
  tmp13 = closure_8;
  const tmpResult = tmp(tmp2[10]);
  if (tmpResult.isAndroid()) {
    str2 = "tablist";
  }
  obj11 = { accessibilityRole: str2, style: tmp3.controlsContainer, children: items2 };
  items2 = [, ];
  const obj12 = { accessible: false, style: tmp3.indicatorContainer, children: mapped };
  items2[0] = tmp11(sharedValue, obj12);
  items2[1] = mapped1;
  return tmp11(tmp12, obj10);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureModeTab(pressed) {
  let activeIndex;
  let extras;
  let index;
  let itemCount;
  let itemStyle;
  let label;
  let labelStyle;
  let labelTextStyle;
  let onSelect;
  let prefixStyle;
  let tmp5;
  let tmp7;
  let tmp = index;
  let tmp2 = pressed;
  let obj = index(pressed[6]);
  const cResult = obj.c(53);
  ({ label, index } = pressed);
  ({ itemCount, activeIndex } = pressed);
  pressed = pressed.pressed;
  ({ extras, onSelect } = pressed);
  ({ itemStyle, labelStyle, labelTextStyle, prefixStyle } = pressed);
  let tmp4 = closure_13();
  inactive = tmp4;
  if (cResult[0] !== index) {
    const fn = function n(arg0) {
      return Math.round(arg0) === index;
    };
    cResult[0] = index;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  const tmpResult = tmp(tmp2[11]);
  const derivedStateFromSharedValue = tmpResult.useDerivedStateFromSharedValue(activeIndex, tmp5);
  if (cResult[2] !== index) {
    const fn2 = function y(arg0) {
      return arg0 === index;
    };
    cResult[2] = index;
    cResult[3] = fn2;
    tmp7 = fn2;
  } else {
    tmp7 = cResult[3];
  }
  const tmpResult4 = tmp(tmp2[11]);
  const derivedStateFromSharedValue1 = tmpResult4.useDerivedStateFromSharedValue(pressed, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function w(arg0) {
      return arg0 >= 0;
    };
    cResult[4] = fn3;
  }
  tmp(tmp2[11]);
  if (derivedStateFromSharedValue1) {
    inactive = tmp4.active;
  } else {
    inactive = tmp4.inactive;
  }
  const tmpResult6 = tmp(tmp2[8]);
  class P {
    constructor() {
      let obj2;
      const value = pressed.get();
      let active = inactive.inactive;
      let tmp4 = value === index;
      const tmp2 = inactive;
      if (!tmp4) {
        let tmp5 = value < 0;
        if (tmp5) {
          const _Math = Math;
          tmp5 = Math.round(activeIndex.get()) === tmp3;
        }
        tmp4 = tmp5;
      }
      if (tmp4) {
        active = tmp2.active;
      }
      const obj = { color: obj2.withSpring(active, TEXT_SPRING, "animate-always") };
      obj2 = spring;
      return obj;
    }
  }
  let obj2 = { pressed, colors: tmp4, index, activeIndex, withSpring: tmp(tmp2[9]).withSpring, TEXT_SPRING };
  P.__closure = obj2;
  P.__workletHash = 3817815187134;
  P.__initData = __initData9;
  const animatedStyle = tmpResult6.useAnimatedStyle(P);
  let onShowMenu;
  if (extras != null) {
    onShowMenu = extras.onShowMenu;
  }
  let menuLabel;
  if (extras != null) {
    menuLabel = extras.menuLabel;
  }
  if (cResult[5] === menuLabel) {
    if (cResult[8] !== onShowMenu) {
      class B {
        constructor(nativeEvent) {
          if ("longpress" === nativeEvent.nativeEvent.actionName) {
            if (onShowMenu != null) {
              tmp();
            }
          }
        }
      }
      cResult[8] = onShowMenu;
      cResult[9] = B;
    } else {
      class B {
        constructor(nativeEvent) {
          if ("longpress" === nativeEvent.nativeEvent.actionName) {
            if (onShowMenu != null) {
              tmp();
            }
          }
        }
      }
    }
    if (cResult[10] === index) {
      class B {
        constructor(nativeEvent) {
          if ("longpress" === nativeEvent.nativeEvent.actionName) {
            if (onShowMenu != null) {
              tmp();
            }
          }
        }
      }
    }
    const fn4 = function j() {
      const tmp = derivedStateFromSharedValue;
      if (tmp) {
        let tmp2Result;
        if (null != onShowMenu) {
          tmp2Result = tmp2();
        }
        return tmp2Result;
      }
      tmp2Result = onSelect(index);
    };
    cResult[10] = index;
    cResult[11] = onSelect;
    cResult[12] = onShowMenu;
    cResult[13] = derivedStateFromSharedValue;
    cResult[14] = fn4;
  }
  let tmp16;
  if (null != onShowMenu) {
    class B {
      constructor(nativeEvent) {
        if ("longpress" === nativeEvent.nativeEvent.actionName) {
          if (onShowMenu != null) {
            tmp();
          }
        }
      }
    }
    if (null != menuLabel) {
      class B {
        constructor(nativeEvent) {
          if ("longpress" === nativeEvent.nativeEvent.actionName) {
            if (onShowMenu != null) {
              tmp();
            }
          }
        }
      }
      tmp17[1] = menuLabel;
      const items = [tmp17];
      tmp16 = items;
    }
  }
  cResult[5] = menuLabel;
  cResult[6] = onShowMenu;
  cResult[7] = tmp16;
}) : (function ConjureModeTab(index) {
  let extras;
  let formatToPlainStringResult;
  let itemCount;
  let itemStyle;
  let items2;
  let items3;
  let label;
  let labelStyle;
  let labelTextStyle;
  let obj6;
  let prefixStyle;
  let tmp15;
  let tmp16;
  index = index.index;
  const activeIndex = index.activeIndex;
  const pressed = index.pressed;
  ({ extras, onSelect: react } = index);
  let onShowMenu;
  let menuLabel;
  ({ label, itemCount, itemStyle, labelStyle, labelTextStyle, prefixStyle } = index);
  let tmp = closure_13();
  inactive = tmp;
  let tmp2 = index;
  const tmp3 = pressed;
  let obj = index(pressed[11]);
  const derivedStateFromSharedValue = obj.useDerivedStateFromSharedValue(activeIndex, (arg0) => Math.round(arg0) === index);
  let obj2 = index(pressed[11]);
  const derivedStateFromSharedValue1 = obj2.useDerivedStateFromSharedValue(pressed, (arg0) => arg0 === index);
  index(pressed[11]);
  if (derivedStateFromSharedValue1) {
    inactive = tmp.active;
  } else {
    inactive = tmp.inactive;
  }
  let tmp2Result = tmp2(tmp3[8]);
  const fn = function f() {
    let obj2;
    const value = pressed.get();
    let active = inactive.inactive;
    let tmp4 = value === index;
    const tmp2 = inactive;
    if (!tmp4) {
      let tmp5 = value < 0;
      if (tmp5) {
        const _Math = Math;
        tmp5 = Math.round(activeIndex.get()) === tmp3;
      }
      tmp4 = tmp5;
    }
    if (tmp4) {
      active = tmp2.active;
    }
    const obj = { color: obj2.withSpring(active, TEXT_SPRING, "animate-always") };
    obj2 = spring;
    return obj;
  };
  fn.__closure = { pressed, colors: tmp, index, activeIndex, withSpring: tmp2(tmp3[9]).withSpring, TEXT_SPRING };
  fn.__workletHash = 2267779316288;
  fn.__initData = __initData10;
  onShowMenu = undefined;
  ({ pressed, colors: tmp, index, activeIndex, withSpring: tmp2(tmp3[9]).withSpring, TEXT_SPRING });
  const animatedStyle = tmp2Result.useAnimatedStyle(fn);
  if (extras != null) {
    onShowMenu = extras.onShowMenu;
  }
  menuLabel = undefined;
  if (extras != null) {
    menuLabel = extras.menuLabel;
  }
  let items = [menuLabel, onShowMenu];
  const items1 = [onShowMenu];
  const memo = react.useMemo(() => {
    let tmp;
    if (null != onShowMenu) {
      if (null != menuLabel) {
        const items = [{ name: "longpress", label: tmp2 }];
        tmp = items;
        const obj = { name: "longpress", label: tmp2 };
      }
    }
    return tmp;
  }, items);
  const obj4 = {
    style: itemStyle,
    onPress() {
      const tmp = derivedStateFromSharedValue;
      if (tmp) {
        let tmp2Result;
        if (null != onShowMenu) {
          tmp2Result = tmp2();
        }
        return tmp2Result;
      }
      tmp2Result = react(index);
    },
    onLongPress: onShowMenu,
    onPressIn() {
      return pressed.set(index);
    },
    onPressOut() {
      return pressed.set(-1);
    },
    accessibilityRole: "tab",
    accessibilityState: { selected: derivedStateFromSharedValue },
    accessibilityActions: memo,
    onAccessibilityAction: react.useCallback((nativeEvent) => {
      if ("longpress" === nativeEvent.nativeEvent.actionName) {
        if (onShowMenu != null) {
          tmp();
        }
      }
    }, items1),
    accessibilityHint: formatToPlainStringResult,
    children: tmp15(tmp16, obj6)
  };
  formatToPlainStringResult = undefined;
  const tmp13 = inactive;
  const tmp2Result2 = tmp2(tmp3[10]);
  if (tmp2Result2.isAndroid()) {
    const intl = tmp2(tmp3[12]).intl;
    const obj5 = { position: index + 1, tabCount: itemCount };
    formatToPlainStringResult = intl.formatToPlainString(tmp2(tmp3[12]).t["4EsQA1"], obj5);
  }
  let prefix;
  obj6 = { style: labelStyle, children: items2 };
  tmp15 = closure_8;
  tmp16 = onShowMenu;
  if (extras != null) {
    prefix = extras.prefix;
  }
  let tmp12Result = null;
  if (null != prefix) {
    const obj7 = { variant: "text-sm/medium", color: "text-muted", style: prefixStyle, children: extras.prefix };
    tmp12Result = tmp12(tmp2(tmp3[13]).Text, obj7);
  }
  items2 = [tmp12Result, , ];
  const obj8 = { animated: true, variant: "text-sm/semibold", style: items3, lineClamp: 1, children: label };
  items3 = [labelTextStyle, animatedStyle];
  items2[1] = menuLabel(tmp2(tmp3[13]).Text, obj8);
  let renderTrailingIconResult;
  if (extras != null) {
    const renderTrailingIcon = extras.renderTrailingIcon;
    if (renderTrailingIcon != null) {
      renderTrailingIconResult = renderTrailingIcon(inactive);
    }
  }
  items2[2] = renderTrailingIconResult;
  return menuLabel(tmp13, obj4);
});
let result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureModeTabBar.tsx");

export default tmp4;
