// Module ID: 16513
// Function ID: 16514
// Name: ContextMenuItem
// Dependencies: [19, 17, 21, 1655, 5310, 9160, 575, 9161, 5933, 5934, 5932, 1708, 5923, 2]
// Exports: ContextMenuItem

// Module 16513 (ContextMenuItem)
import nativeDefault from "native" /* 575 */;
import _mod1708 from "module_1708" /* 1708 */;
import ContextMenuConstants from "ContextMenuConstants" /* 9160 */;
import ContextMenuState from "ContextMenuState" /* 9161 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import module_1655 from "module_1655" /* 1655 */;
import createStyles from "createStyles" /* 5310 */;
import size_mod from "module_2" /* 2 */;

let Pressable;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ View: closure_4, Pressable } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = module_1655.createAnimatedComponent(Pressable);
let closure_8 = createStyles.createStyles((arg0) => {
  let TEXT_STRONG;
  const obj = { container: { padding: ContextMenuConstants.CONTEXT_MENU_ITEM_PADDING, minHeight: ContextMenuConstants.CONTEXT_MENU_ITEM_BASE_HEIGHT, flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: ContextMenuConstants.CONTEXT_MENU_ITEM_GAP }, containerRefresh: { justifyContent: "flex-start" }, roundedTop: { borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg }, roundedBottom: { borderBottomLeftRadius: nativeDefault.radii.lg, borderBottomRightRadius: nativeDefault.radii.lg }, border: { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE }, pressed: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE }, disabled: { opacity: 0.5 }, icon: size, label: { flexShrink: 1 }, trailingIndicator: { marginLeft: "auto" } };
  ({ padding: ContextMenuConstants.CONTEXT_MENU_ITEM_PADDING, minHeight: ContextMenuConstants.CONTEXT_MENU_ITEM_BASE_HEIGHT, flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: ContextMenuConstants.CONTEXT_MENU_ITEM_GAP });
  ({ borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg });
  ({ borderBottomLeftRadius: nativeDefault.radii.lg, borderBottomRightRadius: nativeDefault.radii.lg });
  ({ borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE });
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE });
  size = { width: ContextMenuConstants.CONTEXT_MENU_ITEM_ICON_SIZE, height: ContextMenuConstants.CONTEXT_MENU_ITEM_ICON_SIZE, tintColor: TEXT_STRONG };
  if ("destructive" === arg0) {
    TEXT_STRONG = tmp2(575).colors.TEXT_FEEDBACK_CRITICAL;
  } else {
    TEXT_STRONG = tmp2(575).colors.TEXT_STRONG;
  }
  return obj;
});
let closure_9 = { code: "(function ContextMenuItemNativeTsx1(){let[pan]=this.__closure;return pan.get();})" };
let closure_10 = { code: "(function ContextMenuItemNativeTsx2(_current,previous){let[disabled,measure,ref,index,INDEX_BOUNDS_OFFSET,itemMeasurements,INDEX_BOUNDS_PAGE_X_OFFSET,INDEX_BOUNDS_PAGE_Y_OFFSET,INDEX_BOUNDS_WIDTH_OFFSET,INDEX_BOUNDS_HEIGHT_OFFSET]=this.__closure;if(previous==null||_current===previous)return;if(disabled)return;const measurements=measure(ref);if(measurements!=null){const{pageX:pageX,pageY:pageY,width:width,height:height}=measurements;const offset=index*INDEX_BOUNDS_OFFSET;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_X_OFFSET]=pageX;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_Y_OFFSET]=pageY;itemMeasurements.get()[offset+INDEX_BOUNDS_WIDTH_OFFSET]=width;itemMeasurements.get()[offset+INDEX_BOUNDS_HEIGHT_OFFSET]=height;}})" };
let closure_11 = { code: "(function ContextMenuItemNativeTsx3(){let[activeIndex,index,pressed,withSpring,backgroundColor,SUBTLE_SPRING]=this.__closure;const isActive=activeIndex.get()===index||pressed.get()===1;return{backgroundColor:withSpring(isActive?backgroundColor:'transparent',SUBTLE_SPRING,'animate-always')};})" };
let closure_12 = { code: "(function ContextMenuItemNativeTsx4(bounds){let[offset,INDEX_BOUNDS_HEIGHT_OFFSET,height,INDEX_BOUNDS_WIDTH_OFFSET,width]=this.__closure;bounds[offset+INDEX_BOUNDS_HEIGHT_OFFSET]=height;bounds[offset+INDEX_BOUNDS_WIDTH_OFFSET]=width;return bounds;})" };
let closure_13 = { code: "(function ContextMenuItemNativeTsx5(){let[activeIndex,index]=this.__closure;activeIndex.set(index);})" };
let size = size_mod;
let result = size.fileFinishedImporting("design/components/ContextMenu/native/ContextMenuItem.native.tsx");

export function ContextMenuItem(label) {
  let IconComponent;
  let callback2;
  let disabled;
  let end;
  let iconSource;
  let index;
  let items10;
  let items11;
  let items9;
  let lastInSection;
  let onPress;
  let start;
  let state;
  let str3;
  let subLabel;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp30;
  let tmp7;
  let tmp8;
  let tmp9;
  let trailingIndicator;
  let variant;
  ({ subLabel, disabled } = label);
  label = label.label;
  if (disabled === undefined) {
    disabled = false;
  }
  ({ IconComponent, trailingIndicator, iconSource, start, end, index } = label);
  ({ state, variant, lastInSection, onPress } = label);
  if (variant === undefined) {
    variant = "default";
  }
  let str = label.accessibilityRole;
  if (str === undefined) {
    str = "button";
  }
  let itemMeasurements;
  let tmp = disabled;
  const tmp2 = itemMeasurements;
  let obj = disabled(itemMeasurements[3]);
  const animatedRef = obj.useAnimatedRef();
  const tmp4 = closure_8(variant);
  itemMeasurements = state.itemMeasurements;
  const activeIndex = state.activeIndex;
  const pan = state.pan;
  const obj2 = disabled(itemMeasurements[3]);
  const sharedValue = obj2.useSharedValue(0);
  let items = [closure_9, pan];
  let c0;
  [tmp7, tmp8] = items;
  const tmp6 = disabled(itemMeasurements[3]);
  class ContextMenuItemNativeTsx1 {
    constructor() {
      return _undefined.get();
    }
  }
  let items1 = [tmp8];
  ContextMenuItemNativeTsx1.__closure = items1;
  ContextMenuItemNativeTsx1.__workletHash = 10932936281465;
  ContextMenuItemNativeTsx1.__initData = tmp7;
  const items2 = [closure_10, disabled, , , , , , , , , ];
  const useAnimatedReaction = tmp6.useAnimatedReaction;
  items2[2] = tmp(tmp2[3]).measure;
  items2[3] = animatedRef;
  items2[4] = index;
  items2[5] = tmp(tmp2[7]).INDEX_BOUNDS_OFFSET;
  items2[6] = itemMeasurements;
  items2[7] = tmp(tmp2[7]).INDEX_BOUNDS_PAGE_X_OFFSET;
  items2[8] = tmp(tmp2[7]).INDEX_BOUNDS_PAGE_Y_OFFSET;
  items2[9] = tmp(tmp2[7]).INDEX_BOUNDS_WIDTH_OFFSET;
  items2[10] = tmp(tmp2[7]).INDEX_BOUNDS_HEIGHT_OFFSET;
  c0 = undefined;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19] = items2;
  class ContextMenuItemNativeTsx2 {
    constructor(arg0, arg1) {
      let height;
      let pageX;
      let pageY;
      let width;
      if (null != arg1) {
        if (arg0 !== arg1) {
          const tmp5 = c0;
          if (!tmp5) {
            const tmp3 = _undefined(c2);
            if (null != tmp3) {
              const result = c3 * c4;
              ({ pageX, pageY, width, height } = tmp3);
              _undefined2.get()[result + c6] = pageX;
              _undefined2.get()[result + c7] = pageY;
              _undefined2.get()[result + c8] = width;
              _undefined2.get()[result + c9] = height;
            }
          }
        }
      }
    }
  }
  const items3 = [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19];
  ContextMenuItemNativeTsx2.__closure = items3;
  ContextMenuItemNativeTsx2.__workletHash = 1361143641064;
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
  [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28] = items4;
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
  const items5 = [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28];
  ContextMenuItemNativeTsx3.__closure = items5;
  ContextMenuItemNativeTsx3.__workletHash = 5959605672534;
  ContextMenuItemNativeTsx3.__initData = tmp22;
  const animatedStyle = useAnimatedStyle(ContextMenuItemNativeTsx3);
  if (null != IconComponent) {
    const obj3 = { size: "sm", color: tmp4.icon.tintColor };
    tmp30 = closure_5(IconComponent, obj3);
  } else {
    tmp30 = null;
    if (null != iconSource) {
      const obj4 = { source: iconSource, style: tmp4.icon };
      tmp30 = closure_5(index(tmp2[10]), obj4);
    }
  }
  let tmp34 = null;
  if (null != trailingIndicator) {
    const obj5 = { size: "sm", color: tmp4.icon.tintColor };
    tmp34 = closure_5(trailingIndicator, obj5);
  }
  const items6 = [disabled, index, itemMeasurements];
  const items7 = [activeIndex, index];
  const callback = activeIndex.useCallback((nativeEvent) => {
    let height;
    let tmp10;
    let tmp11;
    let tmp12;
    let tmp13;
    let tmp8;
    let tmp9;
    let width;
    ({ height, width } = nativeEvent.nativeEvent.layout);
    const tmp = disabled || 0 === height || 0 === width;
    if (!tmp) {
      const items = [closure_12, , , , , ];
      const modify = itemMeasurements.modify;
      items[1] = index * ContextMenuState.INDEX_BOUNDS_OFFSET;
      items[2] = ContextMenuState.INDEX_BOUNDS_HEIGHT_OFFSET;
      items[3] = height;
      items[4] = ContextMenuState.INDEX_BOUNDS_WIDTH_OFFSET;
      items[5] = width;
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13] = items;
      class ContextMenuItemNativeTsx4 {
        constructor(arg0) {
          nativeEvent[closure_0 + closure_1] = closure_2;
          nativeEvent[closure_0 + closure_3] = closure_4;
          return nativeEvent;
        }
      }
      const items1 = [tmp9, tmp10, tmp11, tmp12, tmp13];
      ContextMenuItemNativeTsx4.__closure = items1;
      ContextMenuItemNativeTsx4.__workletHash = 7995786915080;
      ContextMenuItemNativeTsx4.__initData = tmp8;
      modify(ContextMenuItemNativeTsx4, false);
    }
  }, items6);
  const items8 = [activeIndex];
  const callback1 = activeIndex.useCallback(() => {
    let tmp;
    let tmp2;
    let tmp3;
    const items = [closure_13, activeIndex, index];
    let c0;
    let c1;
    [tmp, tmp2, tmp3] = items;
    const obj = _mod1708;
    class ContextMenuItemNativeTsx5 {
      constructor() {
        result = closure_0.set(closure_1);
        return;
      }
    }
    const items1 = [tmp2, tmp3];
    ContextMenuItemNativeTsx5.__closure = items1;
    ContextMenuItemNativeTsx5.__workletHash = 3832423612687;
    ContextMenuItemNativeTsx5.__initData = tmp;
    obj.runOnUISync(ContextMenuItemNativeTsx5);
  }, items7);
  const obj6 = { ref: animatedRef, style: items9, onLayout: callback, onPressIn: callback1, onPressOut: callback2, onPress, disabled, accessibilityRole: str, children: items10 };
  items9 = [, , , , , , ];
  ({ container: arr10[0], containerRefresh: arr10[1] } = tmp4);
  let border = !end;
  callback2 = activeIndex.useCallback(() => {
    const result = activeIndex.set(-1);
  }, items8);
  const tmp40 = closure_7;
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
  items9[5] = disabled && tmp4.disabled;
  items9[6] = animatedStyle;
  items10 = [closure_5(closure_4, { children: tmp30 }), , ];
  let str2 = "text-strong";
  const obj7 = { style: tmp4.label, children: items11 };
  const Text = tmp(tmp2[12]).Text;
  if ("destructive" === variant) {
    str2 = "text-feedback-critical";
  }
  items11 = [closure_5(Text, { animated: true, variant: "body-md/medium", color: str2, children: label }), ];
  let tmp41Result = null != subLabel;
  if (tmp41Result) {
    const obj8 = { variant: tmp(tmp2[5]).CONTEXT_MENU_ITEM_SUB_LABEL_VARIANT, color: str3, children: subLabel };
    const Text2 = tmp(tmp2[12]).Text;
    str3 = "text-subtle";
    if ("destructive" === variant) {
      str3 = "text-feedback-critical";
    }
    tmp41Result = tmp41(Text2, obj8);
  }
  items11[1] = tmp41Result;
  items10[1] = closure_6(closure_4, obj7);
  let tmp41Result2 = null != tmp34;
  if (tmp41Result2) {
    const obj9 = { style: tmp4.trailingIndicator, children: tmp34 };
    tmp41Result2 = tmp41(tmp42, obj9);
  }
  items10[2] = tmp41Result2;
  return closure_6(tmp40, obj6);
}
