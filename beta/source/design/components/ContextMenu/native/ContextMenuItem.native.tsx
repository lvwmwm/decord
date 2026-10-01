// Module ID: 13983
// Function ID: 13984
// Name: ContextMenuItem
// Dependencies: [19, 17, 21, 4566, 4836, 7360, 576, 7359, 5280, 5284, 5283, 4832, 2]
// Exports: ContextMenuItem

// Module 13983 (ContextMenuItem)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4566 */;
import spring from "spring" /* 5280 */;
import ContextMenuState from "ContextMenuState" /* 7359 */;
import ContextMenuConstants from "ContextMenuConstants" /* 7360 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const ReanimatedRexport = ReanimatedRexport2;

let closure_4;
let hasOwnProperty;
let tmp3;
const springPresets = tmp3(5284);
const Pressable = react_native.Pressable;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = ReanimatedRexport.createAnimatedComponent(Pressable);
let closure_7 = createStyles.createStyles((arg0) => {
  let TEXT_STRONG;
  const obj = { container: { padding: ContextMenuConstants.CONTEXT_MENU_ITEM_PADDING, minHeight: ContextMenuConstants.CONTEXT_MENU_ITEM_BASE_HEIGHT, flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 8 }, containerRefresh: { justifyContent: "flex-start" }, roundedTop: { borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg }, roundedBottom: { borderBottomLeftRadius: nativeDefault.radii.lg, borderBottomRightRadius: nativeDefault.radii.lg }, border: { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE }, pressed: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE }, icon: { width: 20, height: 20, tintColor: TEXT_STRONG }, label: { flexShrink: 1 }, trailingIndicator: { marginLeft: "auto" } };
  ({ padding: ContextMenuConstants.CONTEXT_MENU_ITEM_PADDING, minHeight: ContextMenuConstants.CONTEXT_MENU_ITEM_BASE_HEIGHT, flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 8 });
  ({ borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg });
  ({ borderBottomLeftRadius: nativeDefault.radii.lg, borderBottomRightRadius: nativeDefault.radii.lg });
  ({ borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE });
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE });
  if ("destructive" === arg0) {
    TEXT_STRONG = tmp2(576).colors.TEXT_FEEDBACK_CRITICAL;
  } else {
    TEXT_STRONG = tmp2(576).colors.TEXT_STRONG;
  }
  return obj;
});
const __initData = { code: "function ContextMenuItemNativeTsx1(){const{pan}=this.__closure;return pan.get();}" };
const __initData2 = { code: "function ContextMenuItemNativeTsx2(_current,previous){const{measure,ref,index,INDEX_BOUNDS_OFFSET,itemMeasurements,INDEX_BOUNDS_PAGE_X_OFFSET,INDEX_BOUNDS_PAGE_Y_OFFSET,INDEX_BOUNDS_WIDTH_OFFSET,INDEX_BOUNDS_HEIGHT_OFFSET}=this.__closure;if(previous==null||_current===previous)return;const measurements=measure(ref);if(measurements!=null){const{pageX:pageX,pageY:pageY,width:width,height:height}=measurements;const offset=index*INDEX_BOUNDS_OFFSET;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_X_OFFSET]=pageX;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_Y_OFFSET]=pageY;itemMeasurements.get()[offset+INDEX_BOUNDS_WIDTH_OFFSET]=width;itemMeasurements.get()[offset+INDEX_BOUNDS_HEIGHT_OFFSET]=height;}}" };
const __initData3 = { code: "function ContextMenuItemNativeTsx3(){const{activeIndex,index,pressed,withSpring,backgroundColor,SUBTLE_SPRING}=this.__closure;const isActive=activeIndex.get()===index||pressed.get()===1;return{backgroundColor:withSpring(isActive?backgroundColor:'transparent',SUBTLE_SPRING,'animate-always')};}" };
let result = size.fileFinishedImporting("design/components/ContextMenu/native/ContextMenuItem.native.tsx");

export const ContextMenuItem = function ContextMenuItem(accessibilityRole) {
  let IconComponent;
  let callback2;
  let end;
  let iconSource;
  let index;
  let items3;
  let items4;
  let label;
  let lastInSection;
  let onPress;
  let start;
  let state;
  let str2;
  let tmp8;
  let trailingIndicator;
  let variant;
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
  const tmp2 = pan;
  let tmp = index;
  let obj = index(pan[3]);
  const animatedRef = obj.useAnimatedRef();
  const tmp4 = closure_7(variant);
  pan = state.pan;
  const itemMeasurements = state.itemMeasurements;
  const activeIndex = state.activeIndex;
  const obj2 = index(pan[3]);
  const sharedValue = obj2.useSharedValue(0);
  const obj3 = index(pan[3]);
  class U {
    constructor() {
      return pan.get();
    }
  }
  U.__closure = { pan };
  U.__workletHash = 11852115418144;
  U.__initData = __initData;
  const fn = function p(arg0, arg1) {
    let height;
    let pageX;
    let pageY;
    let width;
    if (null != arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport2;
        const measureResult = obj.measure(animatedRef);
        if (null != measureResult) {
          ({ pageX, pageY, width, height } = measureResult);
          const result = index * tmp2(7359).INDEX_BOUNDS_OFFSET;
          const value = itemMeasurements.get();
          value[result + ContextMenuState.INDEX_BOUNDS_PAGE_X_OFFSET] = pageX;
          const value4 = itemMeasurements.get();
          value4[result + ContextMenuState.INDEX_BOUNDS_PAGE_Y_OFFSET] = pageY;
          const value5 = itemMeasurements.get();
          value5[result + ContextMenuState.INDEX_BOUNDS_WIDTH_OFFSET] = width;
          const value6 = itemMeasurements.get();
          value6[result + ContextMenuState.INDEX_BOUNDS_HEIGHT_OFFSET] = height;
        }
      }
    }
  };
  fn.__closure = { measure: index(pan[3]).measure, ref: animatedRef, index, INDEX_BOUNDS_OFFSET: index(pan[7]).INDEX_BOUNDS_OFFSET, itemMeasurements, INDEX_BOUNDS_PAGE_X_OFFSET: index(pan[7]).INDEX_BOUNDS_PAGE_X_OFFSET, INDEX_BOUNDS_PAGE_Y_OFFSET: index(pan[7]).INDEX_BOUNDS_PAGE_Y_OFFSET, INDEX_BOUNDS_WIDTH_OFFSET: index(pan[7]).INDEX_BOUNDS_WIDTH_OFFSET, INDEX_BOUNDS_HEIGHT_OFFSET: index(pan[7]).INDEX_BOUNDS_HEIGHT_OFFSET };
  fn.__workletHash = 9571959267234;
  fn.__initData = __initData2;
  ({ measure: index(pan[3]).measure, ref: animatedRef, index, INDEX_BOUNDS_OFFSET: index(pan[7]).INDEX_BOUNDS_OFFSET, itemMeasurements, INDEX_BOUNDS_PAGE_X_OFFSET: index(pan[7]).INDEX_BOUNDS_PAGE_X_OFFSET, INDEX_BOUNDS_PAGE_Y_OFFSET: index(pan[7]).INDEX_BOUNDS_PAGE_Y_OFFSET, INDEX_BOUNDS_WIDTH_OFFSET: index(pan[7]).INDEX_BOUNDS_WIDTH_OFFSET, INDEX_BOUNDS_HEIGHT_OFFSET: index(pan[7]).INDEX_BOUNDS_HEIGHT_OFFSET });
  const animatedReaction = obj3.useAnimatedReaction(U, fn);
  backgroundColor = tmp4.pressed.backgroundColor;
  const obj5 = index(pan[3]);
  class P {
    constructor() {
      let str = "transparent";
      const tmp = activeIndex.get() === index || 1 === sharedValue.get();
      const withSpring = spring.withSpring;
      spring;
      if (tmp) {
        str = backgroundColor;
      }
      const obj = { backgroundColor: withSpring(str, springPresets.SUBTLE_SPRING, "animate-always") };
      return obj;
    }
  }
  P.__closure = { activeIndex, index, pressed: sharedValue, withSpring: index(pan[8]).withSpring, backgroundColor, SUBTLE_SPRING: index(pan[9]).SUBTLE_SPRING };
  P.__workletHash = 624481847983;
  P.__initData = __initData3;
  ({ activeIndex, index, pressed: sharedValue, withSpring: index(pan[8]).withSpring, backgroundColor, SUBTLE_SPRING: index(pan[9]).SUBTLE_SPRING });
  const animatedStyle = obj5.useAnimatedStyle(P);
  if (null != IconComponent) {
    const obj7 = { size: "sm", color: tmp4.icon.tintColor };
    tmp8 = activeIndex(IconComponent, obj7);
  } else {
    tmp8 = null;
    if (null != iconSource) {
      const obj8 = { source: iconSource, style: tmp4.icon };
      tmp8 = activeIndex(animatedRef(tmp2[10]), obj8);
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
    let height;
    let width;
    ({ height, width } = nativeEvent.nativeEvent.layout);
    if (0 !== height) {
      if (0 !== width) {
        const result = index * ContextMenuState.INDEX_BOUNDS_OFFSET;
        const value = itemMeasurements.get();
        value[result + ContextMenuState.INDEX_BOUNDS_HEIGHT_OFFSET] = height;
        const value2 = itemMeasurements.get();
        value2[result + ContextMenuState.INDEX_BOUNDS_WIDTH_OFFSET] = width;
      }
    }
  }, items);
  const items2 = [activeIndex];
  const callback1 = itemMeasurements.useCallback(() => {
    const result = activeIndex.set(index);
  }, items1);
  const obj10 = { ref: animatedRef, style: items3, onLayout: callback, onPressIn: callback1, onPressOut: callback2, onPress, accessibilityRole: str, children: items4 };
  items3 = [, , , , , ];
  ({ container: arr4[0], containerRefresh: arr4[1] } = tmp4);
  let border = !end;
  callback2 = itemMeasurements.useCallback(() => {
    const result = activeIndex.set(-1);
  }, items2);
  const tmp17 = sharedValue;
  const tmp18 = backgroundColor;
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
  items4 = [activeIndex(animatedRef(tmp2[3]).View, { children: tmp8 }), , ];
  const obj11 = { animated: true, variant: "text-md/medium", style: tmp4.label, color: str2, children: label };
  str2 = "text-strong";
  const Text = tmp(tmp2[11]).Text;
  const tmp20 = animatedRef;
  if ("destructive" === variant) {
    str2 = "text-feedback-critical";
  }
  items4[1] = activeIndex(Text, obj11);
  let tmp19Result = null != tmp12;
  if (tmp19Result) {
    const obj12 = { style: tmp4.trailingIndicator, children: tmp12 };
    tmp19Result = tmp19(tmp20(tmp2[3]).View, obj12);
  }
  items4[2] = tmp19Result;
  return tmp17(tmp18, obj10);
};
