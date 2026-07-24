// Module ID: 13130
// Function ID: 101108
// Name: ContextMenuItem
// Dependencies: [31, 27, 33, 3991, 4130, 9340, 689, 1324, 9339, 4542, 4546, 4545, 4126, 2]
// Exports: ContextMenuItem

// Module 13130 (ContextMenuItem)
import result from "result";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "module_3991";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = require("module_3991").createAnimatedComponent(require("get ActivityIndicator").Pressable);
let closure_7 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { padding: require(9340) /* CONTEXT_MENU_LONG_PRESS_DURATION_MS */.CONTEXT_MENU_ITEM_PADDING, minHeight: require(9340) /* CONTEXT_MENU_LONG_PRESS_DURATION_MS */.CONTEXT_MENU_ITEM_BASE_HEIGHT, flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 8 };
  obj.container = obj;
  obj.containerRefresh = { justifyContent: "flex-start" };
  obj = { borderTopLeftRadius: importDefault(689).radii.lg, borderTopRightRadius: importDefault(689).radii.lg };
  obj.roundedTop = obj;
  obj.roundedBottom = { borderBottomLeftRadius: importDefault(689).radii.lg, borderBottomRightRadius: importDefault(689).radii.lg };
  const obj1 = { borderBottomLeftRadius: importDefault(689).radii.lg, borderBottomRightRadius: importDefault(689).radii.lg };
  obj.border = { borderBottomWidth: 1, borderBottomColor: importDefault(689).colors.BORDER_SUBTLE };
  const obj2 = { borderBottomWidth: 1, borderBottomColor: importDefault(689).colors.BORDER_SUBTLE };
  obj.pressed = { backgroundColor: importDefault(689).colors.BACKGROUND_MOD_SUBTLE };
  const obj4 = { width: 20, height: 20 };
  if ("destructive" === arg0) {
    let TEXT_STRONG = importDefault(689).colors.TEXT_FEEDBACK_CRITICAL;
  } else {
    TEXT_STRONG = importDefault(689).colors.TEXT_STRONG;
  }
  obj4.tintColor = TEXT_STRONG;
  obj.icon = obj4;
  obj.label = { flexShrink: 1 };
  obj.trailingIndicator = { marginLeft: "auto" };
  return obj;
});
let closure_8 = { code: "function ContextMenuItemNativeTsx1(){const{pan}=this.__closure;return pan.get();}" };
let closure_9 = { code: "function ContextMenuItemNativeTsx2(_current,previous){const{measure,ref,index,INDEX_BOUNDS_OFFSET,itemMeasurements,INDEX_BOUNDS_PAGE_X_OFFSET,INDEX_BOUNDS_PAGE_Y_OFFSET,INDEX_BOUNDS_WIDTH_OFFSET,INDEX_BOUNDS_HEIGHT_OFFSET}=this.__closure;if(previous==null||_current===previous)return;const measurements=measure(ref);if(measurements!=null){const{pageX:pageX,pageY:pageY,width:width,height:height}=measurements;const offset=index*INDEX_BOUNDS_OFFSET;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_X_OFFSET]=pageX;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_Y_OFFSET]=pageY;itemMeasurements.get()[offset+INDEX_BOUNDS_WIDTH_OFFSET]=width;itemMeasurements.get()[offset+INDEX_BOUNDS_HEIGHT_OFFSET]=height;}}" };
let closure_10 = { code: "function ContextMenuItemNativeTsx3(){const{activeIndex,index,pressed,withSpring,backgroundColor,SUBTLE_SPRING}=this.__closure;const isActive=activeIndex.get()===index||pressed.get()===1;return{backgroundColor:withSpring(isActive?backgroundColor:'transparent',SUBTLE_SPRING,'animate-always')};}" };
let result = require("jsxProd").fileFinishedImporting("design/components/ContextMenu/native/ContextMenuItem.native.tsx");

export const ContextMenuItem = function ContextMenuItem(accessibilityRole) {
  let IconComponent;
  let end;
  let iconSource;
  let index;
  let label;
  let lastInSection;
  let onPress;
  let start;
  let state;
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
  let animatedRef;
  let pan;
  let itemMeasurements;
  let activeIndex;
  let sharedValue;
  let backgroundColor;
  let obj = index(pan[3]);
  animatedRef = obj.useAnimatedRef();
  const tmp2 = callback(variant);
  const tmp3 = animatedRef(pan[7])("ContextMenuItem");
  pan = state.pan;
  itemMeasurements = state.itemMeasurements;
  activeIndex = state.activeIndex;
  let obj1 = index(pan[3]);
  sharedValue = obj1.useSharedValue(0);
  let obj2 = index(pan[3]);
  class U {
    constructor() {
      return pan.get();
    }
  }
  U.__closure = { pan };
  U.__workletHash = 11852115418144;
  U.__initData = closure_8;
  const fn = function p(arg0, arg1) {
    let height;
    let pageX;
    let pageY;
    let width;
    if (null != arg1) {
      if (arg0 !== arg1) {
        const measureResult = index(pan[3]).measure(animatedRef);
        if (null != measureResult) {
          ({ pageX, pageY, width, height } = measureResult);
          const result = index * index(pan[8]).INDEX_BOUNDS_OFFSET;
          let value = itemMeasurements.get();
          value[result + index(pan[8]).INDEX_BOUNDS_PAGE_X_OFFSET] = pageX;
          value = itemMeasurements.get();
          value[result + index(pan[8]).INDEX_BOUNDS_PAGE_Y_OFFSET] = pageY;
          const value1 = itemMeasurements.get();
          value1[result + index(pan[8]).INDEX_BOUNDS_WIDTH_OFFSET] = width;
          const value2 = itemMeasurements.get();
          value2[result + index(pan[8]).INDEX_BOUNDS_HEIGHT_OFFSET] = height;
        }
        const obj = index(pan[3]);
      }
    }
  };
  obj = { measure: index(pan[3]).measure, ref: animatedRef, index, INDEX_BOUNDS_OFFSET: index(pan[8]).INDEX_BOUNDS_OFFSET, itemMeasurements, INDEX_BOUNDS_PAGE_X_OFFSET: index(pan[8]).INDEX_BOUNDS_PAGE_X_OFFSET, INDEX_BOUNDS_PAGE_Y_OFFSET: index(pan[8]).INDEX_BOUNDS_PAGE_Y_OFFSET, INDEX_BOUNDS_WIDTH_OFFSET: index(pan[8]).INDEX_BOUNDS_WIDTH_OFFSET, INDEX_BOUNDS_HEIGHT_OFFSET: index(pan[8]).INDEX_BOUNDS_HEIGHT_OFFSET };
  fn.__closure = obj;
  fn.__workletHash = 9571959267234;
  fn.__initData = closure_9;
  const animatedReaction = obj2.useAnimatedReaction(U, fn);
  backgroundColor = tmp2.pressed.backgroundColor;
  let obj4 = index(pan[3]);
  class R {
    constructor() {
      tmp = activeIndex.get() === index;
      if (!tmp) {
        tmp2 = c5;
        num = 1;
        tmp = 1 === c5.get();
      }
      obj = {};
      obj2 = index(pan[9]);
      str = "transparent";
      if (tmp) {
        str = backgroundColor;
      }
      obj.backgroundColor = obj2.withSpring(str, index(pan[10]).SUBTLE_SPRING, "animate-always");
      return obj;
    }
  }
  obj = { activeIndex, index, pressed: sharedValue, withSpring: index(pan[9]).withSpring, backgroundColor, SUBTLE_SPRING: index(pan[10]).SUBTLE_SPRING };
  R.__closure = obj;
  R.__workletHash = 624481847983;
  R.__initData = closure_10;
  const animatedStyle = obj4.useAnimatedStyle(R);
  if (null != IconComponent) {
    obj1 = { size: "sm", color: tmp2.icon.tintColor };
    let tmp7 = activeIndex(IconComponent, obj1);
  } else {
    tmp7 = null;
    if (null != iconSource) {
      obj2 = { source: iconSource, style: tmp2.icon };
      tmp7 = activeIndex(animatedRef(pan[11]), obj2);
    }
  }
  let tmp12 = null;
  if (null != trailingIndicator) {
    const obj3 = { size: "sm", color: tmp2.icon.tintColor };
    tmp12 = activeIndex(trailingIndicator, obj3);
  }
  const items = [index, itemMeasurements];
  const items1 = [activeIndex, index];
  callback = itemMeasurements.useCallback((nativeEvent) => {
    let height;
    let width;
    ({ height, width } = nativeEvent.nativeEvent.layout);
    if (0 !== height) {
      if (0 !== width) {
        const result = index * index(pan[8]).INDEX_BOUNDS_OFFSET;
        let value = itemMeasurements.get();
        value[result + index(pan[8]).INDEX_BOUNDS_HEIGHT_OFFSET] = height;
        value = itemMeasurements.get();
        value[result + index(pan[8]).INDEX_BOUNDS_WIDTH_OFFSET] = width;
      }
    }
  }, items);
  const items2 = [activeIndex];
  const callback1 = itemMeasurements.useCallback(() => {
    const result = activeIndex.set(index);
  }, items1);
  obj4 = { ref: animatedRef };
  const items3 = [tmp2.container, , , , , ];
  let containerRefresh = tmp3;
  const callback2 = itemMeasurements.useCallback(() => {
    const result = activeIndex.set(-1);
  }, items2);
  if (tmp3) {
    containerRefresh = tmp2.containerRefresh;
  }
  items3[1] = containerRefresh;
  items3[2] = !end && !lastInSection && tmp2.border;
  if (start) {
    start = tmp2.roundedTop;
  }
  items3[3] = start;
  if (end) {
    end = tmp2.roundedBottom;
  }
  items3[4] = end;
  items3[5] = animatedStyle;
  obj4.style = items3;
  obj4.onLayout = callback;
  obj4.onPressIn = callback1;
  obj4.onPressOut = callback2;
  obj4.onPress = onPress;
  obj4.accessibilityRole = str;
  let tmp19 = tmp3;
  if (tmp3) {
    const obj5 = { children: tmp7 };
    tmp19 = activeIndex(animatedRef(pan[3]).View, obj5);
  }
  const items4 = [tmp19, , , ];
  const obj6 = { animated: true, variant: "text-md/medium", style: tmp2.label };
  let str4 = "text-strong";
  if ("destructive" === variant) {
    str4 = "text-feedback-critical";
  }
  obj6.color = str4;
  obj6.children = label;
  items4[1] = activeIndex(index(pan[12]).Text, obj6);
  let tmp24 = !tmp3;
  if (tmp24) {
    const obj7 = { children: tmp7 };
    tmp24 = activeIndex(animatedRef(pan[3]).View, obj7);
  }
  items4[2] = tmp24;
  let tmp28 = null != tmp12;
  if (tmp28) {
    const obj8 = { style: tmp2.trailingIndicator, children: tmp12 };
    tmp28 = activeIndex(animatedRef(pan[3]).View, obj8);
  }
  items4[3] = tmp28;
  obj4.children = items4;
  return sharedValue(backgroundColor, obj4);
};
