// Module ID: 16001
// Function ID: 16002
// Name: ContextMenuItem
// Dependencies: [19, 17, 21, 1652, 5141, 10007, 575, 10006, 5757, 5758, 5756, 1705, 5747, 2]
// Exports: ContextMenuItem

// Module 16001 (ContextMenuItem)
import nativeDefault from "native" /* 575 */;
import _mod1705 from "module_1705" /* 1705 */;
import ContextMenuState from "ContextMenuState" /* 10006 */;
import ContextMenuConstants from "ContextMenuConstants" /* 10007 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import module_1652 from "module_1652" /* 1652 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let Pressable;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ View: closure_4, Pressable } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = module_1652.createAnimatedComponent(Pressable);
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
let closure_9 = { code: "(function ContextMenuItemNativeTsx1(){let[pan]=this.__closure;return pan.get();})" };
let closure_10 = { code: "(function ContextMenuItemNativeTsx2(_current,previous){let[measure,ref,index,INDEX_BOUNDS_OFFSET,itemMeasurements,INDEX_BOUNDS_PAGE_X_OFFSET,INDEX_BOUNDS_PAGE_Y_OFFSET,INDEX_BOUNDS_WIDTH_OFFSET,INDEX_BOUNDS_HEIGHT_OFFSET]=this.__closure;if(previous==null||_current===previous)return;const measurements=measure(ref);if(measurements!=null){const{pageX:pageX,pageY:pageY,width:width,height:height}=measurements;const offset=index*INDEX_BOUNDS_OFFSET;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_X_OFFSET]=pageX;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_Y_OFFSET]=pageY;itemMeasurements.get()[offset+INDEX_BOUNDS_WIDTH_OFFSET]=width;itemMeasurements.get()[offset+INDEX_BOUNDS_HEIGHT_OFFSET]=height;}})" };
let closure_11 = { code: "(function ContextMenuItemNativeTsx3(){let[activeIndex,index,pressed,withSpring,backgroundColor,SUBTLE_SPRING]=this.__closure;const isActive=activeIndex.get()===index||pressed.get()===1;return{backgroundColor:withSpring(isActive?backgroundColor:'transparent',SUBTLE_SPRING,'animate-always')};})" };
let closure_12 = { code: "(function ContextMenuItemNativeTsx4(){let[activeIndex,index]=this.__closure;activeIndex.set(index);})" };
let result = size.fileFinishedImporting("design/components/ContextMenu/native/ContextMenuItem.native.tsx");

export function ContextMenuItem(accessibilityRole) {
  let IconComponent;
  let callback2;
  let end;
  let iconSource;
  let index;
  let items10;
  let items9;
  let label;
  let lastInSection;
  let onPress;
  let start;
  let state;
  let str2;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp29;
  let tmp7;
  let tmp8;
  let tmp9;
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
  let activeIndex;
  let tmp = index;
  const tmp2 = activeIndex;
  let obj = index(activeIndex[3]);
  const animatedRef = obj.useAnimatedRef();
  let tmp4 = closure_8(variant);
  const itemMeasurements = state.itemMeasurements;
  activeIndex = state.activeIndex;
  const pan = state.pan;
  const obj2 = index(activeIndex[3]);
  const sharedValue = obj2.useSharedValue(0);
  let items = [closure_9, pan];
  let c0;
  [tmp7, tmp8] = items;
  const tmp6 = index(activeIndex[3]);
  class ContextMenuItemNativeTsx1 {
    constructor() {
      return _undefined.get();
    }
  }
  let items1 = [tmp8];
  ContextMenuItemNativeTsx1.__closure = items1;
  ContextMenuItemNativeTsx1.__workletHash = 10932936281465;
  ContextMenuItemNativeTsx1.__initData = tmp7;
  const items2 = [closure_10, , , , , , , , , ];
  const useAnimatedReaction = tmp6.useAnimatedReaction;
  items2[1] = tmp(tmp2[3]).measure;
  items2[2] = animatedRef;
  items2[3] = index;
  items2[4] = tmp(tmp2[7]).INDEX_BOUNDS_OFFSET;
  items2[5] = itemMeasurements;
  items2[6] = tmp(tmp2[7]).INDEX_BOUNDS_PAGE_X_OFFSET;
  items2[7] = tmp(tmp2[7]).INDEX_BOUNDS_PAGE_Y_OFFSET;
  items2[8] = tmp(tmp2[7]).INDEX_BOUNDS_WIDTH_OFFSET;
  items2[9] = tmp(tmp2[7]).INDEX_BOUNDS_HEIGHT_OFFSET;
  c0 = undefined;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items2;
  class ContextMenuItemNativeTsx2 {
    constructor(arg0, arg1) {
      let height;
      let pageX;
      let pageY;
      let width;
      if (null != arg1) {
        if (arg0 !== arg1) {
          const tmp4 = _undefined(c1);
          if (null != tmp4) {
            const result = c2 * c3;
            ({ pageX, pageY, width, height } = tmp4);
            _undefined2.get()[result + c5] = pageX;
            _undefined2.get()[result + c6] = pageY;
            _undefined2.get()[result + c7] = width;
            _undefined2.get()[result + c8] = height;
          }
        }
      }
    }
  }
  const items3 = [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18];
  ContextMenuItemNativeTsx2.__closure = items3;
  ContextMenuItemNativeTsx2.__workletHash = 15799031050779;
  ContextMenuItemNativeTsx2.__initData = tmp9;
  const animatedReaction = useAnimatedReaction(ContextMenuItemNativeTsx1, ContextMenuItemNativeTsx2);
  const backgroundColor = tmp4.pressed.backgroundColor;
  const items4 = [closure_11, activeIndex, index, sharedValue, , , ];
  const useAnimatedStyle = tmp(tmp2[3]).useAnimatedStyle;
  tmp(tmp2[3]);
  items4[4] = tmp(tmp2[8]).withSpring;
  items4[5] = backgroundColor;
  items4[6] = tmp(tmp2[9]).SUBTLE_SPRING;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27] = items4;
  class ContextMenuItemNativeTsx3 {
    constructor() {
      let str = "transparent";
      const tmp = _undefined.get() === c1 || 1 === _undefined2.get();
      const tmp3 = c3;
      if (tmp) {
        str = c4;
      }
      const obj = { backgroundColor: tmp3(str, c5, "animate-always") };
      return obj;
    }
  }
  const items5 = [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27];
  ContextMenuItemNativeTsx3.__closure = items5;
  ContextMenuItemNativeTsx3.__workletHash = 5959605672534;
  ContextMenuItemNativeTsx3.__initData = tmp21;
  const animatedStyle = useAnimatedStyle(ContextMenuItemNativeTsx3);
  if (null != IconComponent) {
    const obj3 = { size: "sm", color: tmp4.icon.tintColor };
    tmp29 = closure_5(IconComponent, obj3);
  } else {
    tmp29 = null;
    if (null != iconSource) {
      const obj4 = { source: iconSource, style: tmp4.icon };
      tmp29 = closure_5(itemMeasurements(tmp2[10]), obj4);
    }
  }
  let tmp33 = null;
  if (null != trailingIndicator) {
    const obj5 = { size: "sm", color: tmp4.icon.tintColor };
    tmp33 = closure_5(trailingIndicator, obj5);
  }
  const items6 = [index, itemMeasurements];
  const items7 = [activeIndex, index];
  const callback = react.useCallback((nativeEvent) => {
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
  }, items6);
  const items8 = [activeIndex];
  const callback1 = react.useCallback(() => {
    let tmp;
    let tmp2;
    let tmp3;
    const items = [closure_12, activeIndex, index];
    let c0;
    let c1;
    [tmp, tmp2, tmp3] = items;
    const obj = _mod1705;
    class ContextMenuItemNativeTsx4 {
      constructor() {
        result = closure_0.set(closure_1);
        return;
      }
    }
    const items1 = [tmp2, tmp3];
    ContextMenuItemNativeTsx4.__closure = items1;
    ContextMenuItemNativeTsx4.__workletHash = 5723143478734;
    ContextMenuItemNativeTsx4.__initData = tmp;
    obj.runOnUISync(ContextMenuItemNativeTsx4);
  }, items7);
  const obj6 = { ref: animatedRef, style: items9, onLayout: callback, onPressIn: callback1, onPressOut: callback2, onPress, accessibilityRole: str, children: items10 };
  items9 = [, , , , , ];
  ({ container: arr10[0], containerRefresh: arr10[1] } = tmp4);
  let border = !end;
  callback2 = react.useCallback(() => {
    const result = activeIndex.set(-1);
  }, items8);
  const tmp38 = closure_6;
  const tmp39 = closure_7;
  if (!end) {
    border = !lastInSection;
  }
  if (border) {
    border = tmp4.border;
  }
  items9[2] = border;
  if (start) {
    start = tmp4.roundedTop;
  }
  items9[3] = start;
  if (end) {
    end = tmp4.roundedBottom;
  }
  items9[4] = end;
  items9[5] = animatedStyle;
  items10 = [closure_5(closure_4, { children: tmp29 }), , ];
  const obj7 = { animated: true, variant: "text-md/medium", style: tmp4.label, color: str2, children: label };
  str2 = "text-strong";
  const Text = tmp(tmp2[12]).Text;
  const tmp41 = closure_4;
  if ("destructive" === variant) {
    str2 = "text-feedback-critical";
  }
  items10[1] = closure_5(Text, obj7);
  let tmp40Result = null != tmp33;
  if (tmp40Result) {
    const obj8 = { style: tmp4.trailingIndicator, children: tmp33 };
    tmp40Result = tmp40(tmp41, obj8);
  }
  items10[2] = tmp40Result;
  return tmp38(tmp39, obj6);
}
