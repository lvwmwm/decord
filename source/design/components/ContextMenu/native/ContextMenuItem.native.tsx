// Module ID: 12955
// Function ID: 98574
// Name: ContextMenuItem
// Dependencies: []
// Exports: ContextMenuItem

// Module 12955 (ContextMenuItem)
let closure_3 = importAll(dependencyMap[0]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]).createAnimatedComponent(arg1(dependencyMap[1]).Pressable);
const importDefaultResult = importDefault(dependencyMap[3]);
let closure_7 = arg1(dependencyMap[4]).createStyles((arg0) => {
  let obj = {};
  obj = { padding: arg1(dependencyMap[5]).CONTEXT_MENU_ITEM_PADDING, minHeight: arg1(dependencyMap[5]).CONTEXT_MENU_ITEM_BASE_HEIGHT };
  obj.container = obj;
  obj.containerRefresh = { justifyContent: "flex-start" };
  obj = { borderTopLeftRadius: importDefault(dependencyMap[6]).radii.lg, borderTopRightRadius: importDefault(dependencyMap[6]).radii.lg };
  obj.roundedTop = obj;
  obj.roundedBottom = { borderBottomLeftRadius: importDefault(dependencyMap[6]).radii.lg, borderBottomRightRadius: importDefault(dependencyMap[6]).radii.lg };
  const obj1 = { borderBottomLeftRadius: importDefault(dependencyMap[6]).radii.lg, borderBottomRightRadius: importDefault(dependencyMap[6]).radii.lg };
  obj.border = { borderBottomWidth: 1, borderBottomColor: importDefault(dependencyMap[6]).colors.BORDER_SUBTLE };
  const obj2 = { borderBottomWidth: 1, borderBottomColor: importDefault(dependencyMap[6]).colors.BORDER_SUBTLE };
  obj.pressed = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_SUBTLE };
  const obj4 = { bhk: false, bic: "internal" };
  if ("destructive" === arg0) {
    let TEXT_STRONG = importDefault(dependencyMap[6]).colors.TEXT_FEEDBACK_CRITICAL;
  } else {
    TEXT_STRONG = importDefault(dependencyMap[6]).colors.TEXT_STRONG;
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
const obj2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("design/components/ContextMenu/native/ContextMenuItem.native.tsx");

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
  const arg1 = index;
  ({ state, variant } = accessibilityRole);
  ({ label, lastInSection, onPress } = accessibilityRole);
  if (variant === undefined) {
    variant = "default";
  }
  let str = accessibilityRole.accessibilityRole;
  if (str === undefined) {
    str = "button";
  }
  let importDefault;
  let dependencyMap;
  let React;
  let activeIndex;
  let sharedValue;
  let closure_6;
  let obj = arg1(dependencyMap[3]);
  const animatedRef = obj.useAnimatedRef();
  importDefault = animatedRef;
  const tmp2 = callback(variant);
  const tmp3 = importDefault(dependencyMap[7])("ContextMenuItem");
  const pan = state.pan;
  dependencyMap = pan;
  const itemMeasurements = state.itemMeasurements;
  React = itemMeasurements;
  activeIndex = state.activeIndex;
  let obj1 = arg1(dependencyMap[3]);
  sharedValue = obj1.useSharedValue(0);
  let obj2 = arg1(dependencyMap[3]);
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
  obj = { measure: arg1(dependencyMap[3]).measure, ref: animatedRef, index, INDEX_BOUNDS_OFFSET: arg1(dependencyMap[8]).INDEX_BOUNDS_OFFSET, itemMeasurements, INDEX_BOUNDS_PAGE_X_OFFSET: arg1(dependencyMap[8]).INDEX_BOUNDS_PAGE_X_OFFSET, INDEX_BOUNDS_PAGE_Y_OFFSET: arg1(dependencyMap[8]).INDEX_BOUNDS_PAGE_Y_OFFSET, INDEX_BOUNDS_WIDTH_OFFSET: arg1(dependencyMap[8]).INDEX_BOUNDS_WIDTH_OFFSET, INDEX_BOUNDS_HEIGHT_OFFSET: arg1(dependencyMap[8]).INDEX_BOUNDS_HEIGHT_OFFSET };
  fn.__closure = obj;
  fn.__workletHash = 9571959267234;
  fn.__initData = closure_9;
  const animatedReaction = obj2.useAnimatedReaction(U, fn);
  const backgroundColor = tmp2.pressed.backgroundColor;
  closure_6 = backgroundColor;
  let obj4 = arg1(dependencyMap[3]);
  class R {
    constructor() {
      tmp = activeIndex.get() === index;
      if (!tmp) {
        tmp2 = closure_5;
        num = 1;
        tmp = 1 === closure_5.get();
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
  obj = { activeIndex, index, pressed: sharedValue, withSpring: arg1(dependencyMap[9]).withSpring, backgroundColor, SUBTLE_SPRING: arg1(dependencyMap[10]).SUBTLE_SPRING };
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
      tmp7 = activeIndex(importDefault(dependencyMap[11]), obj2);
    }
  }
  let tmp12 = null;
  if (null != trailingIndicator) {
    const obj3 = { size: "sm", color: tmp2.icon.tintColor };
    tmp12 = activeIndex(trailingIndicator, obj3);
  }
  const items = [index, itemMeasurements];
  const items1 = [activeIndex, index];
  const callback = React.useCallback((nativeEvent) => {
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
  const callback1 = React.useCallback(() => {
    const result = activeIndex.set(index);
  }, items1);
  obj4 = { ref: animatedRef };
  const items3 = [tmp2.container, , , , , ];
  let containerRefresh = tmp3;
  const callback2 = React.useCallback(() => {
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
    tmp19 = activeIndex(importDefault(dependencyMap[3]).View, obj5);
  }
  const items4 = [tmp19, , , ];
  const obj6 = { style: tmp2.label };
  let str4 = "text-strong";
  if ("destructive" === variant) {
    str4 = "text-feedback-critical";
  }
  obj6.color = str4;
  obj6.children = label;
  items4[1] = activeIndex(arg1(dependencyMap[12]).Text, obj6);
  let tmp24 = !tmp3;
  if (tmp24) {
    const obj7 = { children: tmp7 };
    tmp24 = activeIndex(importDefault(dependencyMap[3]).View, obj7);
  }
  items4[2] = tmp24;
  let tmp28 = null != tmp12;
  if (tmp28) {
    const obj8 = { style: tmp2.trailingIndicator, children: tmp12 };
    tmp28 = activeIndex(importDefault(dependencyMap[3]).View, obj8);
  }
  items4[3] = tmp28;
  obj4.children = items4;
  return sharedValue(closure_6, obj4);
};
