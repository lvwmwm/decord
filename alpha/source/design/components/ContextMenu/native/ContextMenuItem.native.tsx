// Module ID: 15814
// Function ID: 15815
// Name: ContextMenuItem
// Dependencies: [19, 17, 21, 5090, 5009, 9855, 575, 9854, 5632, 5633, 5631, 5619, 2]
// Exports: ContextMenuItem

// Module 15814 (ContextMenuItem)
import nativeDefault from "native" /* 575 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 5090 */;
import spring from "spring" /* 5632 */;
import ContextMenuState from "ContextMenuState" /* 9854 */;
import ContextMenuConstants from "ContextMenuConstants" /* 9855 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const ReanimatedRexport = ReanimatedRexport2;

let Pressable;
let closure_4;
let hasOwnProperty;
let metroRequire;
let tmp3;
const springPresets = tmp3(5633);
({ View: closure_4, Pressable } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = ReanimatedRexport.createAnimatedComponent(Pressable);
let closure_8 = createStyles.createStyles((arg0) => {
  let TEXT_STRONG;
  const obj = { container: { padding: ContextMenuConstants.CONTEXT_MENU_ITEM_PADDING, minHeight: ContextMenuConstants.CONTEXT_MENU_ITEM_BASE_HEIGHT, flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 8 }, containerRefresh: { justifyContent: "flex-start" }, roundedTop: { borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg }, roundedBottom: { borderBottomLeftRadius: nativeDefault.radii.lg, borderBottomRightRadius: nativeDefault.radii.lg }, border: { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE }, pressed: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE }, icon: { width: 20, height: 20, tintColor: TEXT_STRONG }, label: { flexShrink: 1 }, trailingIndicator: { marginLeft: "auto" } };
  ({ padding: ContextMenuConstants.CONTEXT_MENU_ITEM_PADDING, minHeight: ContextMenuConstants.CONTEXT_MENU_ITEM_BASE_HEIGHT, flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 8 });
  ({ borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg });
  ({ borderBottomLeftRadius: nativeDefault.radii.lg, borderBottomRightRadius: nativeDefault.radii.lg });
  ({ borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE });
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE });
  if ("destructive" === arg0) {
    TEXT_STRONG = tmp2(575).colors.TEXT_FEEDBACK_CRITICAL;
  } else {
    TEXT_STRONG = tmp2(575).colors.TEXT_STRONG;
  }
  return obj;
});
const __initData = { code: "function ContextMenuItemNativeTsx1(){const{pan}=this.__closure;return pan.get();}" };
const __initData2 = { code: "function ContextMenuItemNativeTsx2(_current,previous){const{measure,ref,index,INDEX_BOUNDS_OFFSET,itemMeasurements,INDEX_BOUNDS_PAGE_X_OFFSET,INDEX_BOUNDS_PAGE_Y_OFFSET,INDEX_BOUNDS_WIDTH_OFFSET,INDEX_BOUNDS_HEIGHT_OFFSET}=this.__closure;if(previous==null||_current===previous)return;const measurements=measure(ref);if(measurements!=null){const{pageX:pageX,pageY:pageY,width:width,height:height}=measurements;const offset=index*INDEX_BOUNDS_OFFSET;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_X_OFFSET]=pageX;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_Y_OFFSET]=pageY;itemMeasurements.get()[offset+INDEX_BOUNDS_WIDTH_OFFSET]=width;itemMeasurements.get()[offset+INDEX_BOUNDS_HEIGHT_OFFSET]=height;}}" };
const __initData3 = { code: "function ContextMenuItemNativeTsx3(){const{activeIndex,index,pressed,withSpring,backgroundColor,SUBTLE_SPRING}=this.__closure;const isActive=activeIndex.get()===index||pressed.get()===1;return{backgroundColor:withSpring(isActive?backgroundColor:'transparent',SUBTLE_SPRING,'animate-always')};}" };
let closure_12 = { code: "function ContextMenuItemNativeTsx4(){const{activeIndex,index}=this.__closure;activeIndex.set(index);}" };
let result = size.fileFinishedImporting("design/components/ContextMenu/native/ContextMenuItem.native.tsx");

export function ContextMenuItem(accessibilityRole) {
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
  const tmp4 = closure_8(variant);
  pan = state.pan;
  const itemMeasurements = state.itemMeasurements;
  const activeIndex = state.activeIndex;
  let obj2 = index(pan[3]);
  const sharedValue = obj2.useSharedValue(0);
  let fn = function v() {
    return pan.get();
  };
  fn.__closure = { pan };
  fn.__workletHash = 11852115418144;
  fn.__initData = __initData;
  const obj3 = index(pan[3]);
  class U {
    constructor(arg0, arg1) {
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
            const result = index * tmp2(9854).INDEX_BOUNDS_OFFSET;
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
    }
  }
  U.__closure = { measure: index(pan[3]).measure, ref: animatedRef, index, INDEX_BOUNDS_OFFSET: index(pan[7]).INDEX_BOUNDS_OFFSET, itemMeasurements, INDEX_BOUNDS_PAGE_X_OFFSET: index(pan[7]).INDEX_BOUNDS_PAGE_X_OFFSET, INDEX_BOUNDS_PAGE_Y_OFFSET: index(pan[7]).INDEX_BOUNDS_PAGE_Y_OFFSET, INDEX_BOUNDS_WIDTH_OFFSET: index(pan[7]).INDEX_BOUNDS_WIDTH_OFFSET, INDEX_BOUNDS_HEIGHT_OFFSET: index(pan[7]).INDEX_BOUNDS_HEIGHT_OFFSET };
  U.__workletHash = 9571959267234;
  U.__initData = __initData2;
  ({ measure: index(pan[3]).measure, ref: animatedRef, index, INDEX_BOUNDS_OFFSET: index(pan[7]).INDEX_BOUNDS_OFFSET, itemMeasurements, INDEX_BOUNDS_PAGE_X_OFFSET: index(pan[7]).INDEX_BOUNDS_PAGE_X_OFFSET, INDEX_BOUNDS_PAGE_Y_OFFSET: index(pan[7]).INDEX_BOUNDS_PAGE_Y_OFFSET, INDEX_BOUNDS_WIDTH_OFFSET: index(pan[7]).INDEX_BOUNDS_WIDTH_OFFSET, INDEX_BOUNDS_HEIGHT_OFFSET: index(pan[7]).INDEX_BOUNDS_HEIGHT_OFFSET });
  const animatedReaction = obj3.useAnimatedReaction(fn, U);
  backgroundColor = tmp4.pressed.backgroundColor;
  const obj5 = index(pan[3]);
  class A {
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
  A.__closure = { activeIndex, index, pressed: sharedValue, withSpring: index(pan[8]).withSpring, backgroundColor, SUBTLE_SPRING: index(pan[9]).SUBTLE_SPRING };
  A.__workletHash = 624481847983;
  A.__initData = __initData3;
  ({ activeIndex, index, pressed: sharedValue, withSpring: index(pan[8]).withSpring, backgroundColor, SUBTLE_SPRING: index(pan[9]).SUBTLE_SPRING });
  const animatedStyle = obj5.useAnimatedStyle(A);
  if (null != IconComponent) {
    const obj7 = { size: "sm", color: tmp4.icon.tintColor };
    tmp8 = sharedValue(IconComponent, obj7);
  } else {
    tmp8 = null;
    if (null != iconSource) {
      const obj8 = { source: iconSource, style: tmp4.icon };
      tmp8 = sharedValue(animatedRef(tmp2[10]), obj8);
    }
  }
  let tmp12 = null;
  if (null != trailingIndicator) {
    const obj9 = { size: "sm", color: tmp4.icon.tintColor };
    tmp12 = sharedValue(trailingIndicator, obj9);
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
    const fn = function t() {
      const result = activeIndex.set(index);
    };
    const obj2 = { activeIndex, index };
    fn.__closure = obj2;
    fn.__workletHash = 14761332236151;
    fn.__initData = __initData;
    const obj = ReanimatedRexport2;
    obj.executeOnUIRuntimeSync(fn)();
  }, items1);
  const obj10 = { ref: animatedRef, style: items3, onLayout: callback, onPressIn: callback1, onPressOut: callback2, onPress, accessibilityRole: str, children: items4 };
  items3 = [, , , , , ];
  ({ container: arr4[0], containerRefresh: arr4[1] } = tmp4);
  let border = !end;
  callback2 = itemMeasurements.useCallback(() => {
    const result = activeIndex.set(-1);
  }, items2);
  const tmp17 = backgroundColor;
  const tmp18 = closure_7;
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
  items4 = [sharedValue(activeIndex, { children: tmp8 }), , ];
  const obj11 = { animated: true, variant: "text-md/medium", style: tmp4.label, color: str2, children: label };
  str2 = "text-strong";
  const Text = tmp(tmp2[11]).Text;
  const tmp20 = activeIndex;
  if ("destructive" === variant) {
    str2 = "text-feedback-critical";
  }
  items4[1] = sharedValue(Text, obj11);
  let tmp19Result = null != tmp12;
  if (tmp19Result) {
    const obj12 = { style: tmp4.trailingIndicator, children: tmp12 };
    tmp19Result = tmp19(tmp20, obj12);
  }
  items4[2] = tmp19Result;
  return tmp17(tmp18, obj10);
}
