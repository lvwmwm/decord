// Module ID: 12966
// Function ID: 98647
// Name: ContextMenuDivider
// Dependencies: []
// Exports: ContextMenuPopout

// Module 12966 (ContextMenuDivider)
function ContextMenuDivider() {
  return callback2(View, { style: callback3().divider });
}
function renderMenuItems(items) {
  items = items.items;
  const arg1 = items;
  ({ title: closure_1, state: closure_2, onPress: closure_3, dividerIndexes: closure_4 } = items);
  return items.map((arg0, index) => {
    let IconComponent;
    let accessibilityRole;
    let iconSource;
    let label;
    let trailingIndicator;
    let variant;
    ({ label, action: closure_0 } = arg0);
    ({ iconSource, IconComponent, trailingIndicator, variant, accessibilityRole } = arg0);
    const diff = items.length - 1;
    let obj = { index, label };
    let tmp3 = 0 === index;
    if (tmp3) {
      tmp3 = null == closure_1;
    }
    obj.start = tmp3;
    obj.end = index === diff;
    obj.lastInSection = closure_4.includes(index + 1);
    obj.iconSource = iconSource;
    obj.IconComponent = IconComponent;
    obj.trailingIndicator = trailingIndicator;
    obj.state = closure_2;
    obj.onPress = function onPress(arg0) {
      let isAndroidResult = callback(closure_2[11]).isAndroid();
      if (isAndroidResult) {
        isAndroidResult = callback(closure_2[17]).getIsScreenReaderEnabled();
        const obj2 = callback(closure_2[17]);
      }
      if (isAndroidResult) {
        callback();
      }
      if (null != callback2) {
        callback2(arg0);
      }
    };
    obj.variant = variant;
    obj.accessibilityRole = accessibilityRole;
    const tmp2Result = callback(items(closure_2[16]).ContextMenuItem, obj, "" + label + "-" + index);
    let tmp7 = tmp2Result;
    if (closure_4.includes(index)) {
      obj = {};
      const _HermesInternal = HermesInternal;
      const items = [callback(closure_16, {}, "divider-" + index), tmp2Result];
      obj.children = items;
      tmp7 = callback2(closure_7, obj);
    }
    return tmp7;
  });
}
function ContextMenuBackdrop(onDismiss) {
  const visible = onDismiss.visible;
  const arg1 = visible;
  let obj = arg1(dependencyMap[7]);
  const fn = function n() {
    const obj = {};
    const value = visible.get();
    obj.opacity = visible(closure_2[12]).withSpring(value, visible(closure_2[6]).CONTEXT_MENU_SPRING);
    return obj;
  };
  obj = { withSpring: arg1(dependencyMap[12]).withSpring, visible, CONTEXT_MENU_SPRING: arg1(dependencyMap[6]).CONTEXT_MENU_SPRING };
  fn.__closure = obj;
  fn.__workletHash = 6862317967896;
  fn.__initData = closure_15;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { blur: "none", style: animatedStyle, accessibleDismissStyle: callback4().accessibleDismiss, onDismiss: onDismiss.onPress };
  const tmp = callback4();
  const tmp3 = closure_6;
  const obj4 = arg1(dependencyMap[11]);
  const intl = arg1(dependencyMap[19]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[19]).t;
  if (isAndroidResult) {
    let stringResult = string(t.hPBScv);
  } else {
    stringResult = string(t.xs0juG);
  }
  obj.accessibilityLabel = stringResult;
  return tmp3(arg1(dependencyMap[18]).Backdrop, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
const View = tmp2.View;
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { "Bool(false)": "hybridGdiFrames", "Bool(false)": "useBountiesModalVideoAnalytics", "Bool(false)": "Array", backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGHEST, borderColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE, borderRadius: importDefault(dependencyMap[5]).radii.lg, minWidth: arg1(dependencyMap[6]).CONTEXT_MENU_MIN_WIDTH };
const merged = Object.assign(importDefault(dependencyMap[5]).shadows.SHADOW_HIGH);
obj.container = obj;
const tmp3 = arg1(dependencyMap[3]);
obj.titleContainer = { padding: arg1(dependencyMap[6]).CONTEXT_MENU_ITEM_PADDING };
const obj1 = { padding: arg1(dependencyMap[6]).CONTEXT_MENU_ITEM_PADDING };
obj.divider = { borderBottomWidth: arg1(dependencyMap[6]).CONTEXT_MENU_DIVIDER_HEIGHT, borderBottomColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
let closure_9 = obj.createStyles(obj);
let closure_10 = { code: "function ContextMenuPopoutNativeTsx1(){const{maxHeight,height,CONTEXT_MENU_MIN_WIDTH,positionY,positionX,CONTEXT_MENU_MIN_SCALE,withSpring,interpolate,visible,CONTEXT_MENU_SPRING,transitionState,TransitionStates,runOnJS,cleanUp,onClose}=this.__closure;const visibleHeight=Math.min(maxHeight,height);const halfHeight=visibleHeight/2;const halfWidth=CONTEXT_MENU_MIN_WIDTH/2;const translateYDirection=positionY==='below'?-1:1;const translateXDirection=positionX==='left'?-1:1;const translateY=translateYDirection*halfHeight+CONTEXT_MENU_MIN_SCALE*-translateYDirection*halfHeight;const translateX=translateXDirection*halfWidth+CONTEXT_MENU_MIN_SCALE*-translateXDirection*halfWidth;return{opacity:withSpring(interpolate(visible.get(),[0,1],[0,1]),CONTEXT_MENU_SPRING,'respect-motion-settings',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();runOnJS(onClose)();}}),transform:[{translateX:withSpring(interpolate(visible.get(),[0,1],[translateX,0]),CONTEXT_MENU_SPRING)},{translateY:withSpring(interpolate(visible.get(),[0,1],[translateY,0]),CONTEXT_MENU_SPRING)},{scale:withSpring(interpolate(visible.get(),[0,1],[CONTEXT_MENU_MIN_SCALE,1]),CONTEXT_MENU_SPRING)}]};}" };
let closure_11 = { code: "function ContextMenuPopoutNativeTsx2(finished){const{transitionState,TransitionStates,runOnJS,cleanUp,onClose}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();runOnJS(onClose)();}}" };
let closure_12 = { code: "function update_ContextMenuPopoutNativeTsx3(e){const{updateContextMenuState,state}=this.__closure;updateContextMenuState(e.absoluteX,e.absoluteY,state);}" };
let closure_13 = { code: "function ContextMenuPopoutNativeTsx4(){const{state,runOnJS,requestClose}=this.__closure;const{activeIndex:activeIndex}=state;const isDismiss=activeIndex.get()===-1;runOnJS(requestClose)(isDismiss);}" };
const obj2 = { borderBottomWidth: arg1(dependencyMap[6]).CONTEXT_MENU_DIVIDER_HEIGHT, borderBottomColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
const obj3 = {};
const obj4 = {};
const merged1 = Object.assign(tmp2.StyleSheet.absoluteFillObject);
obj4["height"] = "auto";
obj3.accessibleDismiss = obj4;
let closure_14 = arg1(dependencyMap[4]).createStyles(obj3);
let closure_15 = { code: "function ContextMenuPopoutNativeTsx5(){const{withSpring,visible,CONTEXT_MENU_SPRING}=this.__closure;return{opacity:withSpring(visible.get(),CONTEXT_MENU_SPRING)};}" };
const obj6 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("design/components/ContextMenu/native/ContextMenuPopout.native.tsx");

export const ContextMenuPopout = function ContextMenuPopout(cleanUp) {
  let bottom;
  let keyboardShouldPersistTaps;
  let menu;
  let positionX;
  let title;
  let top;
  let transitionState;
  let x;
  ({ menu, transitionState } = cleanUp);
  const arg1 = transitionState;
  cleanUp = cleanUp.cleanUp;
  const importDefault = cleanUp;
  let sharedValue;
  let callback3;
  let closure_10;
  let closure_11;
  ({ x, positionX } = menu);
  const dependencyMap = positionX;
  const positionY = menu.positionY;
  let callback = positionY;
  const height = menu.height;
  const React = height;
  const state = menu.state;
  const View = state;
  const requestClose = menu.requestClose;
  const onClose = menu.onClose;
  ({ title, keyboardShouldPersistTaps } = menu);
  let str = "handled";
  if (undefined !== keyboardShouldPersistTaps) {
    str = keyboardShouldPersistTaps;
  }
  const y = menu.y;
  let obj = arg1(dependencyMap[7]);
  let num = 0;
  if (transitionState === arg1(dependencyMap[8]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = obj.useSharedValue(num);
  const items = [transitionState, sharedValue];
  const effect = React.useEffect(() => {
    if (transitionState === transitionState(positionX[8]).TransitionStates.YEETED) {
      const result = sharedValue.set(0);
    } else {
      const result1 = sharedValue.set(1);
    }
  }, items);
  const tmp3 = callback3();
  ({ top, bottom } = importDefault(dependencyMap[9])({ includeKeyboardHeight: true }).insets);
  obj = {};
  let obj2 = arg1(dependencyMap[11]);
  obj.ignoreKeyboard = obj2.isAndroid();
  const size = importDefault(dependencyMap[10])(obj);
  const diff = size.height - y;
  if ("below" === positionY) {
    const diff1 = diff - bottom;
    let diff2 = diff1 - arg1(dependencyMap[6]).CONTEXT_MENU_EDGE_OFFSET;
  } else {
    const diff3 = diff - top;
    diff2 = diff3 - arg1(dependencyMap[6]).CONTEXT_MENU_EDGE_OFFSET;
  }
  callback3 = diff2;
  const tmp14 = callback(React.useState(height >= diff2), 2);
  const first = tmp14[0];
  closure_10 = first;
  closure_11 = tmp14[1];
  obj = {};
  let str2 = "bottom";
  if ("below" === positionY) {
    str2 = "top";
  }
  obj[str2] = y;
  obj[positionX] = x;
  obj["maxHeight"] = diff2;
  obj["maxWidth"] = size.width - arg1(dependencyMap[6]).CONTEXT_MENU_EDGE_OFFSET - x;
  let obj4 = arg1(dependencyMap[7]);
  class R {
    constructor() {
      result = Math.min(CONTEXT_MENU_EDGE_OFFSET, height) / 2;
      result1 = transitionState(positionX[6]).CONTEXT_MENU_MIN_WIDTH / 2;
      num = 1;
      if ("below" === positionY) {
        num = -1;
      }
      num2 = 1;
      if ("left" === positionX) {
        num2 = -1;
      }
      obj = {};
      obj2 = transitionState(positionX[12]);
      obj3 = transitionState(positionX[7]);
      interpolateResult = obj3.interpolate(closure_8.get(), [77601039, 1612144654], [77601039, 1612144654]);
      fn = function t(arg0) {
        let tmp = arg0;
        if (arg0) {
          tmp = callback === callback(closure_2[8]).TransitionStates.YEETED;
        }
        if (tmp) {
          callback(closure_2[7]).runOnJS(closure_1)();
          const obj = callback(closure_2[7]);
          callback(closure_2[7]).runOnJS(closure_7)();
          const obj2 = callback(closure_2[7]);
        }
      };
      obj = { transitionState };
      obj.TransitionStates = transitionState(positionX[8]).TransitionStates;
      obj.runOnJS = transitionState(positionX[7]).runOnJS;
      obj.cleanUp = cleanUp;
      obj.onClose = onClose;
      fn.__closure = obj;
      fn.__workletHash = 4025068986009;
      fn.__initData = closure_11;
      obj.opacity = obj2.withSpring(interpolateResult, transitionState(positionX[6]).CONTEXT_MENU_SPRING, "respect-motion-settings", fn);
      obj1 = {};
      obj6 = transitionState(positionX[12]);
      obj7 = transitionState(positionX[7]);
      value = closure_8.get();
      items = [, ];
      items[0] = num2 * result1 + transitionState(positionX[6]).CONTEXT_MENU_MIN_SCALE * -num2 * result1;
      items[1] = 0;
      interpolateResult1 = obj7.interpolate(value, [77601039, 1612144654], items);
      obj1.translateX = obj6.withSpring(interpolateResult1, transitionState(positionX[6]).CONTEXT_MENU_SPRING);
      items1 = [, , ];
      items1[0] = obj1;
      obj2 = {};
      obj9 = transitionState(positionX[12]);
      obj10 = transitionState(positionX[7]);
      value1 = closure_8.get();
      items2 = [, ];
      items2[0] = num * result + transitionState(positionX[6]).CONTEXT_MENU_MIN_SCALE * -num * result;
      items2[1] = 0;
      interpolateResult2 = obj10.interpolate(value1, [77601039, 1612144654], items2);
      obj2.translateY = obj9.withSpring(interpolateResult2, transitionState(positionX[6]).CONTEXT_MENU_SPRING);
      items1[1] = obj2;
      obj3 = {};
      obj12 = transitionState(positionX[12]);
      obj13 = transitionState(positionX[7]);
      value2 = closure_8.get();
      items3 = [, ];
      items3[0] = transitionState(positionX[6]).CONTEXT_MENU_MIN_SCALE;
      items3[1] = 1;
      interpolateResult3 = obj13.interpolate(value2, [77601039, 1612144654], items3);
      obj3.scale = obj12.withSpring(interpolateResult3, transitionState(positionX[6]).CONTEXT_MENU_SPRING);
      items1[2] = obj3;
      obj.transform = items1;
      return obj;
    }
  }
  const obj1 = { maxHeight: diff2, height, CONTEXT_MENU_MIN_WIDTH: arg1(dependencyMap[6]).CONTEXT_MENU_MIN_WIDTH, positionY, positionX, CONTEXT_MENU_MIN_SCALE: arg1(dependencyMap[6]).CONTEXT_MENU_MIN_SCALE, withSpring: arg1(dependencyMap[12]).withSpring, interpolate: arg1(dependencyMap[7]).interpolate, visible: sharedValue, CONTEXT_MENU_SPRING: arg1(dependencyMap[6]).CONTEXT_MENU_SPRING, transitionState, TransitionStates: arg1(dependencyMap[8]).TransitionStates, runOnJS: arg1(dependencyMap[7]).runOnJS, cleanUp, onClose };
  R.__closure = obj1;
  R.__workletHash = 16778623591634;
  R.__initData = closure_10;
  const items1 = [state, requestClose, first];
  const animatedStyle = obj4.useAnimatedStyle(R);
  const items2 = [diff2];
  const memo = React.useMemo(() => {
    const tmp = () => {
      function update(absoluteX) {
        const result = callback(closure_2[13]).updateContextMenuState(absoluteX.absoluteX, absoluteX.absoluteY, closure_5);
      }
      update.__closure = { updateContextMenuState: callback(closure_2[13]).updateContextMenuState, state: closure_5 };
      update.__workletHash = 4218299258082;
      update.__initData = closure_12;
      return update;
    }();
    const Gesture = transitionState(positionX[14]).Gesture;
    const PanResult = Gesture.Pan();
    const enabledResult = Gesture.Pan().enabled(!first);
    const onStartResult = Gesture.Pan().enabled(!first).onStart(tmp);
    const fn = function t() {
      const activeIndex = activeIndex.activeIndex;
      const value = activeIndex.get();
      callback(closure_2[7]).runOnJS(closure_6)(-1 === value);
    };
    const onUpdateResult = Gesture.Pan().enabled(!first).onStart(tmp).onUpdate(tmp);
    fn.__closure = { state, runOnJS: transitionState(positionX[7]).runOnJS, requestClose };
    fn.__workletHash = 14495067009140;
    fn.__initData = closure_13;
    return onUpdateResult.onEnd(fn);
  }, items1);
  const items3 = [requestClose];
  callback = React.useCallback((nativeEvent) => {
    const rounded = Math.round(nativeEvent.nativeEvent.layout.height);
    callback(rounded >= Math.round(diff2));
  }, items2);
  const items4 = [requestClose];
  const callback1 = React.useCallback(() => {
    requestClose(true);
  }, items3);
  obj2 = {};
  const callback2 = React.useCallback(() => {
    requestClose(false);
  }, items4);
  const items5 = [requestClose(ContextMenuBackdrop, { onPress: callback1, visible: sharedValue }), ];
  const obj3 = { gesture: memo };
  obj4 = { onLayout: callback, bounces: false, style: items6 };
  const items6 = [tmp3.container, obj, animatedStyle];
  obj4.keyboardShouldPersistTaps = str;
  obj4.accessibilityRole = "list";
  let tmp25 = null;
  if (null != title) {
    const obj5 = {};
    const obj6 = { style: tmp3.titleContainer };
    const obj7 = { gauge: 1231704321, onLayerLoaded: 32296513, ExpressiveGradient: 57737472, children: title };
    obj6.children = requestClose(arg1(dependencyMap[15]).Text, obj7);
    const items7 = [requestClose(View, obj6), requestClose(ContextMenuDivider, {})];
    obj5.children = items7;
    tmp25 = sharedValue(onClose, obj5);
  }
  const items8 = [tmp25, renderMenuItems({ items: menu.items, title, state, onPress: callback2, dividerIndexes: menu.dividerIndexes })];
  obj4.children = items8;
  obj3.children = sharedValue(importDefault(dependencyMap[7]).ScrollView, obj4);
  items5[1] = requestClose(arg1(dependencyMap[14]).GestureDetector, obj3);
  obj2.children = items5;
  return sharedValue(onClose, obj2);
};
