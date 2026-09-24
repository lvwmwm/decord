// Module ID: 14487
// Function ID: 14488
// Name: ContextMenuItem
// Dependencies: [19, 17, 21, 4529, 4790, 8216, 580, 558, 568, 8215, 5219, 5223, 5222, 4786, 2]

// Module 14487 (ContextMenuItem)
import nativeDefault from "native" /* 580 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4529 */;
import spring from "spring" /* 5219 */;
import springPresets from "springPresets" /* 5223 */;
import ContextMenuState from "ContextMenuState" /* 8215 */;
import ContextMenuConstants from "ContextMenuConstants" /* 8216 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let closure_6 = ReanimatedRexport.createAnimatedComponent(fn(17).Pressable);
const createStyles = fn(4790);
let closure_7 = createStyles.createStyles((arg0) => {
  const obj = { container: { padding: ContextMenuConstants.CONTEXT_MENU_ITEM_PADDING, minHeight: ContextMenuConstants.CONTEXT_MENU_ITEM_BASE_HEIGHT, flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 8 }, containerRefresh: { justifyContent: "flex-start" }, roundedTop: null, roundedBottom: null, border: null, pressed: null, icon: null, label: null, trailingIndicator: null };
  const obj2 = { padding: ContextMenuConstants.CONTEXT_MENU_ITEM_PADDING, minHeight: ContextMenuConstants.CONTEXT_MENU_ITEM_BASE_HEIGHT, flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 8 };
  obj.roundedTop = { borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg };
  const obj3 = { borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg };
  obj.roundedBottom = { borderBottomLeftRadius: nativeDefault.radii.lg, borderBottomRightRadius: nativeDefault.radii.lg };
  const obj4 = { borderBottomLeftRadius: nativeDefault.radii.lg, borderBottomRightRadius: nativeDefault.radii.lg };
  obj.border = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
  const obj5 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
  obj.pressed = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
  if ("destructive" === arg0) {
    let TEXT_STRONG = tmp2(580).colors.TEXT_FEEDBACK_CRITICAL;
  } else {
    TEXT_STRONG = tmp2(580).colors.TEXT_STRONG;
  }
  obj.icon = { width: 20, height: 20, tintColor: TEXT_STRONG };
  obj.label = { flexShrink: 1 };
  obj.trailingIndicator = { marginLeft: "auto" };
  return obj;
});
const __initData = { code: "function ContextMenuItemNativeTsx1(){const{pan}=this.__closure;return pan.get();}" };
const __initData2 = { code: "function ContextMenuItemNativeTsx2(_current,previous){const{measure,ref,index,INDEX_BOUNDS_OFFSET,itemMeasurements,INDEX_BOUNDS_PAGE_X_OFFSET,INDEX_BOUNDS_PAGE_Y_OFFSET,INDEX_BOUNDS_WIDTH_OFFSET,INDEX_BOUNDS_HEIGHT_OFFSET}=this.__closure;if(previous==null||_current===previous){return;}const measurements=measure(ref);if(measurements!=null){const{pageX:pageX,pageY:pageY,width:width,height:height}=measurements;const offset=index*INDEX_BOUNDS_OFFSET;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_X_OFFSET]=pageX;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_Y_OFFSET]=pageY;itemMeasurements.get()[offset+INDEX_BOUNDS_WIDTH_OFFSET]=width;itemMeasurements.get()[offset+INDEX_BOUNDS_HEIGHT_OFFSET]=height;}}" };
const __initData3 = { code: "function ContextMenuItemNativeTsx3(){const{activeIndex,index,pressed,withSpring,backgroundColor,SUBTLE_SPRING}=this.__closure;const isActive=activeIndex.get()===index||pressed.get()===1;return{backgroundColor:withSpring(isActive?backgroundColor:\"transparent\",SUBTLE_SPRING,\"animate-always\")};}" };
const __initData4 = { code: "function ContextMenuItemNativeTsx4(){const{pan}=this.__closure;return pan.get();}" };
const __initData5 = { code: "function ContextMenuItemNativeTsx5(_current,previous){const{measure,ref,index,INDEX_BOUNDS_OFFSET,itemMeasurements,INDEX_BOUNDS_PAGE_X_OFFSET,INDEX_BOUNDS_PAGE_Y_OFFSET,INDEX_BOUNDS_WIDTH_OFFSET,INDEX_BOUNDS_HEIGHT_OFFSET}=this.__closure;if(previous==null||_current===previous)return;const measurements=measure(ref);if(measurements!=null){const{pageX:pageX,pageY:pageY,width:width,height:height}=measurements;const offset=index*INDEX_BOUNDS_OFFSET;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_X_OFFSET]=pageX;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_Y_OFFSET]=pageY;itemMeasurements.get()[offset+INDEX_BOUNDS_WIDTH_OFFSET]=width;itemMeasurements.get()[offset+INDEX_BOUNDS_HEIGHT_OFFSET]=height;}}" };
const __initData6 = { code: "function ContextMenuItemNativeTsx6(){const{activeIndex,index,pressed,withSpring,backgroundColor,SUBTLE_SPRING}=this.__closure;const isActive=activeIndex.get()===index||pressed.get()===1;return{backgroundColor:withSpring(isActive?backgroundColor:'transparent',SUBTLE_SPRING,'animate-always')};}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("design/components/ContextMenu/native/ContextMenuItem.native.tsx");

export const ContextMenuItem = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = index(pan[8]).c(42);
  ({ label, IconComponent, trailingIndicator, iconSource, start, end, index } = arg0);
  ({ state, onPress, variant, accessibilityRole } = arg0);
  let str = "default";
  if (undefined !== variant) {
    str = variant;
  }
  let obj = index(pan[8]);
  const animatedRef = index(pan[3]).useAnimatedRef();
  const tmp6 = closure_7(str);
  pan = state.pan;
  const itemMeasurements = state.itemMeasurements;
  const activeIndex = state.activeIndex;
  const tmpResult = index(pan[3]);
  let num = 0;
  const sharedValue = index(pan[3]).useSharedValue(0);
  const tmpResult4 = index(pan[3]);
  const fn = function o() {
    return pan.get();
  };
  fn.__closure = { pan };
  fn.__workletHash = 11852115418144;
  fn.__initData = __initData;
  const fn2 = function n(arg0, arg1) {
    if (null != arg1) {
      if (arg0 !== arg1) {
        const measureResult = ReanimatedRexport2.measure(animatedRef);
        if (null != measureResult) {
          ({ pageX, pageY, width, height } = measureResult);
          const result = index * tmp2(8215).INDEX_BOUNDS_OFFSET;
          value = itemMeasurements.get();
          value[result + tmp2(8215).INDEX_BOUNDS_PAGE_X_OFFSET] = pageX;
          const value4 = itemMeasurements.get();
          value4[result + tmp2(8215).INDEX_BOUNDS_PAGE_Y_OFFSET] = pageY;
          const value5 = itemMeasurements.get();
          value5[result + tmp2(8215).INDEX_BOUNDS_WIDTH_OFFSET] = width;
          const value6 = itemMeasurements.get();
          value6[result + tmp2(8215).INDEX_BOUNDS_HEIGHT_OFFSET] = height;
        }
      }
    }
  };
  const tmpResult5 = index(pan[3]);
  fn2.__closure = { measure: index(pan[3]).measure, ref: animatedRef, index, INDEX_BOUNDS_OFFSET: index(pan[9]).INDEX_BOUNDS_OFFSET, itemMeasurements, INDEX_BOUNDS_PAGE_X_OFFSET: index(pan[9]).INDEX_BOUNDS_PAGE_X_OFFSET, INDEX_BOUNDS_PAGE_Y_OFFSET: index(pan[9]).INDEX_BOUNDS_PAGE_Y_OFFSET, INDEX_BOUNDS_WIDTH_OFFSET: index(pan[9]).INDEX_BOUNDS_WIDTH_OFFSET, INDEX_BOUNDS_HEIGHT_OFFSET: index(pan[9]).INDEX_BOUNDS_HEIGHT_OFFSET };
  fn2.__workletHash = 1414096049732;
  fn2.__initData = __initData2;
  const animatedReaction = tmpResult5.useAnimatedReaction(fn, fn2);
  const backgroundColor = tmp6.pressed.backgroundColor;
  const obj2 = { measure: index(pan[3]).measure, ref: animatedRef, index, INDEX_BOUNDS_OFFSET: index(pan[9]).INDEX_BOUNDS_OFFSET, itemMeasurements, INDEX_BOUNDS_PAGE_X_OFFSET: index(pan[9]).INDEX_BOUNDS_PAGE_X_OFFSET, INDEX_BOUNDS_PAGE_Y_OFFSET: index(pan[9]).INDEX_BOUNDS_PAGE_Y_OFFSET, INDEX_BOUNDS_WIDTH_OFFSET: index(pan[9]).INDEX_BOUNDS_WIDTH_OFFSET, INDEX_BOUNDS_HEIGHT_OFFSET: index(pan[9]).INDEX_BOUNDS_HEIGHT_OFFSET };
  class R {
    constructor() {
      tmp = activeIndex.get() === index;
      if (!tmp) {
        tmp2 = closure_5;
        num = 1;
        tmp = 1 === closure_5.get();
      }
      tmp3 = closure_0;
      tmp4 = closure_2;
      obj = closure_0(closure_2[10]);
      str = "transparent";
      if (tmp) {
        str = backgroundColor;
      }
      obj1 = { backgroundColor: obj.withSpring(str, tmp3(tmp4[11]).SUBTLE_SPRING, "animate-always") };
      return obj1;
    }
  }
  const tmpResult6 = index(pan[3]);
  R.__closure = { activeIndex, index, pressed: sharedValue, withSpring: index(pan[10]).withSpring, backgroundColor, SUBTLE_SPRING: index(pan[11]).SUBTLE_SPRING };
  R.__workletHash = 12424649901967;
  R.__initData = __initData3;
  const animatedStyle = tmpResult6.useAnimatedStyle(R);
  if (cResult[0] === IconComponent) {
    if (cResult[1] === iconSource) {
      if (cResult[2] === tmp6.icon) {
        if (cResult[4] === trailingIndicator) {
          if (cResult[7] === index) {
            if (cResult[10] === activeIndex) {
              if (cResult[13] !== activeIndex) {
                class K {
                  constructor() {
                    result = activeIndex.set(-1);
                    return;
                  }
                }
                class W {
                  constructor(arg0) {
                    ({ height, width } = arg0.nativeEvent.layout);
                    if (0 !== height) {
                      if (0 !== width) {
                        tmp = index;
                        tmp2 = closure_0;
                        tmp3 = closure_2;
                        result = index * closure_0(closure_2[9]).INDEX_BOUNDS_OFFSET;
                        tmp5 = itemMeasurements;
                        value = itemMeasurements.get();
                        value[result + closure_0(closure_2[9]).INDEX_BOUNDS_HEIGHT_OFFSET] = height;
                        value1 = itemMeasurements.get();
                        value1[result + closure_0(closure_2[9]).INDEX_BOUNDS_WIDTH_OFFSET] = width;
                      }
                    }
                    return;
                  }
                }
                cResult[14] = K;
              } else {
                class K {
                  constructor() {
                    result = activeIndex.set(-1);
                    return;
                  }
                }
              }
              class W {
                constructor(arg0) {
                  ({ height, width } = arg0.nativeEvent.layout);
                  if (0 !== height) {
                    if (0 !== width) {
                      tmp = index;
                      tmp2 = closure_0;
                      tmp3 = closure_2;
                      result = index * closure_0(closure_2[9]).INDEX_BOUNDS_OFFSET;
                      tmp5 = itemMeasurements;
                      value = itemMeasurements.get();
                      value[result + closure_0(closure_2[9]).INDEX_BOUNDS_HEIGHT_OFFSET] = height;
                      value1 = itemMeasurements.get();
                      value1[result + closure_0(closure_2[9]).INDEX_BOUNDS_WIDTH_OFFSET] = width;
                    }
                  }
                  return;
                }
              }
              if (!end) {
                class K {
                  constructor() {
                    result = activeIndex.set(-1);
                    return;
                  }
                }
              }
              if (tmp20) {
                class K {
                  constructor() {
                    result = activeIndex.set(-1);
                    return;
                  }
                }
              }
              if (start) {
                class K {
                  constructor() {
                    result = activeIndex.set(-1);
                    return;
                  }
                }
              }
              if (end) {
                class K {
                  constructor() {
                    result = activeIndex.set(-1);
                    return;
                  }
                }
              }
              if (cResult[15] === animatedStyle) {
                class K {
                  constructor() {
                    result = activeIndex.set(-1);
                    return;
                  }
                }
              }
              const items = [, , , , , ];
              ({ container: arr[0], containerRefresh: arr[1] } = tmp6);
              items[2] = tmp20;
              items[3] = start;
              items[4] = end;
              items[5] = animatedStyle;
              cResult[15] = animatedStyle;
              cResult[16] = tmp6.container;
              cResult[17] = tmp6.containerRefresh;
              cResult[18] = end;
              cResult[19] = tmp20;
              cResult[20] = start;
              cResult[21] = items;
            }
            class W {
              constructor(arg0) {
                ({ height, width } = arg0.nativeEvent.layout);
                if (0 !== height) {
                  if (0 !== width) {
                    tmp = index;
                    tmp2 = closure_0;
                    tmp3 = closure_2;
                    result = index * closure_0(closure_2[9]).INDEX_BOUNDS_OFFSET;
                    tmp5 = itemMeasurements;
                    value = itemMeasurements.get();
                    value[result + closure_0(closure_2[9]).INDEX_BOUNDS_HEIGHT_OFFSET] = height;
                    value1 = itemMeasurements.get();
                    value1[result + closure_0(closure_2[9]).INDEX_BOUNDS_WIDTH_OFFSET] = width;
                  }
                }
                return;
              }
            }
            cResult[10] = activeIndex;
            cResult[11] = index;
            cResult[12] = tmp18;
          }
          class W {
            constructor(arg0) {
              ({ height, width } = arg0.nativeEvent.layout);
              if (0 !== height) {
                if (0 !== width) {
                  tmp = index;
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  result = index * closure_0(closure_2[9]).INDEX_BOUNDS_OFFSET;
                  tmp5 = itemMeasurements;
                  value = itemMeasurements.get();
                  value[result + closure_0(closure_2[9]).INDEX_BOUNDS_HEIGHT_OFFSET] = height;
                  value1 = itemMeasurements.get();
                  value1[result + closure_0(closure_2[9]).INDEX_BOUNDS_WIDTH_OFFSET] = width;
                }
              }
              return;
            }
          }
          cResult[7] = index;
          cResult[8] = itemMeasurements;
          cResult[9] = W;
        }
        if (null != trailingIndicator) {
          class K {
            constructor() {
              result = activeIndex.set(-1);
              return;
            }
          }
          class W {
            constructor(arg0) {
              ({ height, width } = arg0.nativeEvent.layout);
              if (0 !== height) {
                if (0 !== width) {
                  tmp = index;
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  result = index * closure_0(closure_2[9]).INDEX_BOUNDS_OFFSET;
                  tmp5 = itemMeasurements;
                  value = itemMeasurements.get();
                  value[result + closure_0(closure_2[9]).INDEX_BOUNDS_HEIGHT_OFFSET] = height;
                  value1 = itemMeasurements.get();
                  value1[result + closure_0(closure_2[9]).INDEX_BOUNDS_WIDTH_OFFSET] = width;
                }
              }
              return;
            }
          }
          const tmp15 = activeIndex(trailingIndicator, { size: "sm", color: null });
          const obj4 = { size: "sm", color: null };
        }
        cResult[4] = trailingIndicator;
        cResult[5] = tmp6.icon;
        cResult[6] = tmp15;
      }
    }
  }
  if (null != IconComponent) {
    class K {
      constructor() {
        result = activeIndex.set(-1);
        return;
      }
    }
    class W {
      constructor(arg0) {
        ({ height, width } = arg0.nativeEvent.layout);
        if (0 !== height) {
          if (0 !== width) {
            tmp = index;
            tmp2 = closure_0;
            tmp3 = closure_2;
            result = index * closure_0(closure_2[9]).INDEX_BOUNDS_OFFSET;
            tmp5 = itemMeasurements;
            value = itemMeasurements.get();
            value[result + closure_0(closure_2[9]).INDEX_BOUNDS_HEIGHT_OFFSET] = height;
            value1 = itemMeasurements.get();
            value1[result + closure_0(closure_2[9]).INDEX_BOUNDS_WIDTH_OFFSET] = width;
          }
        }
        return;
      }
    }
    let tmp11 = activeIndex(IconComponent, { size: "sm", color: null });
    const obj5 = { size: "sm", color: null };
  } else {
    class K {
      constructor() {
        result = activeIndex.set(-1);
        return;
      }
    }
    if (null != iconSource) {
      class K {
        constructor() {
          result = activeIndex.set(-1);
          return;
        }
      }
      class W {
        constructor(arg0) {
          ({ height, width } = arg0.nativeEvent.layout);
          if (0 !== height) {
            if (0 !== width) {
              tmp = index;
              tmp2 = closure_0;
              tmp3 = closure_2;
              result = index * closure_0(closure_2[9]).INDEX_BOUNDS_OFFSET;
              tmp5 = itemMeasurements;
              value = itemMeasurements.get();
              value[result + closure_0(closure_2[9]).INDEX_BOUNDS_HEIGHT_OFFSET] = height;
              value1 = itemMeasurements.get();
              value1[result + closure_0(closure_2[9]).INDEX_BOUNDS_WIDTH_OFFSET] = width;
            }
          }
          return;
        }
      }
      tmp13[0] = iconSource;
      tmp13[1] = tmp6.icon;
      tmp11 = activeIndex(animatedRef(tmp2[12]), tmp13);
    }
  }
  cResult[num] = IconComponent;
  cResult[1] = iconSource;
  iconSource = tmp6.icon;
  cResult[2] = iconSource;
  num = 3;
  cResult[3] = tmp11;
}) : ((accessibilityRole) => {
  ({ IconComponent, trailingIndicator, iconSource, start, end, index } = accessibilityRole);
  ({ state, variant } = accessibilityRole);
  ({ label, lastInSection, onPress } = accessibilityRole);
  if (variant === undefined) {
    variant = "default";
  }
  let str = accessibilityRole.accessibilityRole;
  if (str === undefined) {
    str = "button";
  }
  let pan;
  let backgroundColor;
  const animatedRef = index(pan[3]).useAnimatedRef();
  const tmp4 = closure_7(variant);
  pan = state.pan;
  const itemMeasurements = state.itemMeasurements;
  const activeIndex = state.activeIndex;
  let obj = index(pan[3]);
  let tmp = index;
  const sharedValue = index(pan[3]).useSharedValue(0);
  const obj2 = index(pan[3]);
  const fn = function p() {
    return pan.get();
  };
  fn.__closure = { pan };
  fn.__workletHash = 2673706425541;
  fn.__initData = __initData4;
  class U {
    constructor(arg0, arg1) {
      if (null != arg1) {
        tmp = accessibilityRole;
        if (accessibilityRole !== arg1) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[3]);
          tmp4 = closure_1;
          measureResult = obj.measure(closure_1);
          if (null != measureResult) {
            tmp6 = index;
            ({ pageX, pageY, width, height } = measureResult);
            result = index * tmp2(tmp3[9]).INDEX_BOUNDS_OFFSET;
            tmp8 = itemMeasurements;
            value = itemMeasurements.get();
            value[result + tmp2(tmp3[9]).INDEX_BOUNDS_PAGE_X_OFFSET] = pageX;
            value1 = itemMeasurements.get();
            value1[result + tmp2(tmp3[9]).INDEX_BOUNDS_PAGE_Y_OFFSET] = pageY;
            value2 = itemMeasurements.get();
            value2[result + tmp2(tmp3[9]).INDEX_BOUNDS_WIDTH_OFFSET] = width;
            value3 = itemMeasurements.get();
            value3[result + tmp2(tmp3[9]).INDEX_BOUNDS_HEIGHT_OFFSET] = height;
          }
        }
      }
      return;
    }
  }
  const obj3 = index(pan[3]);
  U.__closure = { measure: index(pan[3]).measure, ref: animatedRef, index, INDEX_BOUNDS_OFFSET: index(pan[9]).INDEX_BOUNDS_OFFSET, itemMeasurements, INDEX_BOUNDS_PAGE_X_OFFSET: index(pan[9]).INDEX_BOUNDS_PAGE_X_OFFSET, INDEX_BOUNDS_PAGE_Y_OFFSET: index(pan[9]).INDEX_BOUNDS_PAGE_Y_OFFSET, INDEX_BOUNDS_WIDTH_OFFSET: index(pan[9]).INDEX_BOUNDS_WIDTH_OFFSET, INDEX_BOUNDS_HEIGHT_OFFSET: index(pan[9]).INDEX_BOUNDS_HEIGHT_OFFSET };
  U.__workletHash = 15529529884805;
  U.__initData = __initData5;
  const animatedReaction = obj3.useAnimatedReaction(fn, U);
  backgroundColor = tmp4.pressed.backgroundColor;
  const obj4 = { measure: index(pan[3]).measure, ref: animatedRef, index, INDEX_BOUNDS_OFFSET: index(pan[9]).INDEX_BOUNDS_OFFSET, itemMeasurements, INDEX_BOUNDS_PAGE_X_OFFSET: index(pan[9]).INDEX_BOUNDS_PAGE_X_OFFSET, INDEX_BOUNDS_PAGE_Y_OFFSET: index(pan[9]).INDEX_BOUNDS_PAGE_Y_OFFSET, INDEX_BOUNDS_WIDTH_OFFSET: index(pan[9]).INDEX_BOUNDS_WIDTH_OFFSET, INDEX_BOUNDS_HEIGHT_OFFSET: index(pan[9]).INDEX_BOUNDS_HEIGHT_OFFSET };
  class P {
    constructor() {
      tmp = activeIndex.get() === index;
      if (!tmp) {
        tmp2 = closure_5;
        num = 1;
        tmp = 1 === closure_5.get();
      }
      tmp3 = closure_0;
      tmp4 = closure_2;
      obj = closure_0(closure_2[10]);
      str = "transparent";
      if (tmp) {
        str = backgroundColor;
      }
      obj1 = { backgroundColor: obj.withSpring(str, tmp3(tmp4[11]).SUBTLE_SPRING, "animate-always") };
      return obj1;
    }
  }
  const obj5 = index(pan[3]);
  P.__closure = { activeIndex, index, pressed: sharedValue, withSpring: index(pan[10]).withSpring, backgroundColor, SUBTLE_SPRING: index(pan[11]).SUBTLE_SPRING };
  P.__workletHash = 3560470743946;
  P.__initData = __initData6;
  const animatedStyle = obj5.useAnimatedStyle(P);
  if (null != IconComponent) {
    const obj7 = { size: "sm", color: tmp4.icon.tintColor };
    let tmp8 = activeIndex(IconComponent, obj7);
  } else {
    tmp8 = null;
    if (null != iconSource) {
      const obj8 = { source: iconSource, style: tmp4.icon };
      tmp8 = activeIndex(animatedRef(tmp2[12]), obj8);
    }
  }
  let tmp12 = null;
  if (null != trailingIndicator) {
    const obj9 = { size: "sm", color: tmp4.icon.tintColor };
    tmp12 = activeIndex(trailingIndicator, obj9);
  }
  const items = [index, itemMeasurements];
  const items1 = [activeIndex, index];
  const callback = itemMeasurements.useCallback((nativeEvent) => {
    ({ height, width } = nativeEvent.nativeEvent.layout);
    if (0 !== height) {
      if (0 !== width) {
        const result = index * ContextMenuState.INDEX_BOUNDS_OFFSET;
        value = itemMeasurements.get();
        value[result + ContextMenuState.INDEX_BOUNDS_HEIGHT_OFFSET] = height;
        value2 = itemMeasurements.get();
        value2[result + ContextMenuState.INDEX_BOUNDS_WIDTH_OFFSET] = width;
      }
    }
  }, items);
  const items2 = [activeIndex];
  const callback1 = itemMeasurements.useCallback(() => {
    const result = activeIndex.set(index);
  }, items1);
  const obj10 = { ref: animatedRef, style: null, onLayout: null, onPressIn: null, onPressOut: null, onPress: null, accessibilityRole: null, children: null };
  const items3 = [, , , , , ];
  ({ container: arr4[0], containerRefresh: arr4[1] } = tmp4);
  let border = !end;
  const callback2 = itemMeasurements.useCallback(() => {
    const result = activeIndex.set(-1);
  }, items2);
  if (!end) {
    border = !lastInSection;
  }
  if (border) {
    border = tmp4.border;
  }
  items3[2] = border;
  if (start) {
    start = tmp4.roundedTop;
  }
  items3[3] = start;
  if (end) {
    end = tmp4.roundedBottom;
  }
  items3[4] = end;
  items3[5] = animatedStyle;
  obj10.style = items3;
  obj10.onLayout = callback;
  obj10.onPressIn = callback1;
  obj10.onPressOut = callback2;
  obj10.onPress = onPress;
  obj10.accessibilityRole = str;
  const items4 = [activeIndex(animatedRef(pan[3]).View, { children: tmp8 }), , ];
  const obj11 = { animated: true, variant: "text-md/medium", style: tmp4.label, color: null, children: null };
  let str2 = "text-strong";
  if ("destructive" === variant) {
    str2 = "text-feedback-critical";
  }
  obj11.color = str2;
  obj11.children = label;
  items4[1] = activeIndex(tmp(pan[13]).Text, obj11);
  let tmp19Result = null != tmp12;
  if (tmp19Result) {
    const obj12 = { style: tmp4.trailingIndicator, children: tmp12 };
    tmp19Result = tmp19(animatedRef(tmp2[3]).View, obj12);
  }
  items4[2] = tmp19Result;
  obj10.children = items4;
  return sharedValue(backgroundColor, obj10);
});
