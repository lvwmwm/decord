// Module ID: 13080
// Function ID: 100803
// Name: ContextMenuDivider
// Dependencies: [57, 31, 27, 33, 4130, 689, 9304, 3991, 4476, 5160, 1450, 477, 4542, 9303, 5217, 4126, 13078, 4528, 4531, 1212, 2]
// Exports: ContextMenuPopout

// Module 13080 (ContextMenuDivider)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function ContextMenuDivider() {
  return callback(View, { style: _createForOfIteratorHelperLoose().divider });
}
function renderMenuItems(items) {
  let _slicedToArray;
  let result;
  let dependencyMap;
  let importDefault;
  items = items.items;
  ({ title: importDefault, state: dependencyMap, onPress: _slicedToArray, dividerIndexes: result } = items);
  return items.map((arg0, index) => {
    let IconComponent;
    let accessibilityRole;
    let iconSource;
    let items;
    let label;
    let trailingIndicator;
    let variant;
    ({ label, action: items } = arg0);
    ({ iconSource, IconComponent, trailingIndicator, variant, accessibilityRole } = arg0);
    const diff = items.length - 1;
    let obj = { index, label };
    let tmp3 = 0 === index;
    if (tmp3) {
      tmp3 = null == closure_1;
    }
    obj.start = tmp3;
    obj.end = index === diff;
    obj.lastInSection = result.includes(index + 1);
    obj.iconSource = iconSource;
    obj.IconComponent = IconComponent;
    obj.trailingIndicator = trailingIndicator;
    obj.state = closure_2;
    obj.onPress = function onPress(arg0) {
      let isAndroidResult = items(outer2_2[11]).isAndroid();
      if (isAndroidResult) {
        isAndroidResult = items(outer2_2[17]).getIsScreenReaderEnabled();
        const obj2 = items(outer2_2[17]);
      }
      if (isAndroidResult) {
        callback();
      }
      if (null != outer1_3) {
        outer1_3(arg0);
      }
    };
    obj.variant = variant;
    obj.accessibilityRole = accessibilityRole;
    const tmp2Result = outer1_6(items(outer1_2[16]).ContextMenuItem, obj, "" + label + "-" + index);
    let tmp7 = tmp2Result;
    if (result.includes(index)) {
      obj = {};
      const _HermesInternal = HermesInternal;
      items = [outer1_6(outer1_16, {}, "divider-" + index), tmp2Result];
      obj.children = items;
      tmp7 = outer1_8(outer1_7, obj);
    }
    return tmp7;
  });
}
function ContextMenuBackdrop(onDismiss) {
  const visible = onDismiss.visible;
  let obj = visible(3991);
  const fn = function n() {
    const obj = {};
    const value = visible.get();
    obj.opacity = visible(outer1_2[12]).withSpring(value, visible(outer1_2[6]).CONTEXT_MENU_SPRING);
    return obj;
  };
  obj = { withSpring: visible(4542).withSpring, visible, CONTEXT_MENU_SPRING: visible(9304).CONTEXT_MENU_SPRING };
  fn.__closure = obj;
  fn.__workletHash = 6862317967896;
  fn.__initData = closure_15;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { blur: "none", style: animatedStyle, accessibleDismissStyle: callback2().accessibleDismiss, onDismiss: onDismiss.onPress };
  const tmp = callback2();
  const tmp3 = closure_6;
  const obj4 = visible(477);
  const intl = visible(1212).intl;
  const string = intl.string;
  const t = visible(1212).t;
  if (isAndroidResult) {
    let stringResult = string(t.hPBScv);
  } else {
    stringResult = string(t.xs0juG);
  }
  obj.accessibilityLabel = stringResult;
  return tmp3(visible(4531).Backdrop, obj);
}
const View = get_ActivityIndicator.View;
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { position: "absolute", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, minWidth: require("CONTEXT_MENU_LONG_PRESS_DURATION_MS").CONTEXT_MENU_MIN_WIDTH };
const merged = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_HIGH);
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.titleContainer = { padding: require("CONTEXT_MENU_LONG_PRESS_DURATION_MS").CONTEXT_MENU_ITEM_PADDING };
let obj1 = { padding: require("CONTEXT_MENU_LONG_PRESS_DURATION_MS").CONTEXT_MENU_ITEM_PADDING };
_createForOfIteratorHelperLoose.divider = { borderBottomWidth: require("CONTEXT_MENU_LONG_PRESS_DURATION_MS").CONTEXT_MENU_DIVIDER_HEIGHT, borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_10 = { code: "function ContextMenuPopoutNativeTsx1(){const{maxHeight,height,CONTEXT_MENU_MIN_WIDTH,positionY,positionX,CONTEXT_MENU_MIN_SCALE,withSpring,interpolate,visible,CONTEXT_MENU_SPRING,transitionState,TransitionStates,runOnJS,cleanUp,onClose}=this.__closure;const visibleHeight=Math.min(maxHeight,height);const halfHeight=visibleHeight/2;const halfWidth=CONTEXT_MENU_MIN_WIDTH/2;const translateYDirection=positionY==='below'?-1:1;const translateXDirection=positionX==='left'?-1:1;const translateY=translateYDirection*halfHeight+CONTEXT_MENU_MIN_SCALE*-translateYDirection*halfHeight;const translateX=translateXDirection*halfWidth+CONTEXT_MENU_MIN_SCALE*-translateXDirection*halfWidth;return{opacity:withSpring(interpolate(visible.get(),[0,1],[0,1]),CONTEXT_MENU_SPRING,'respect-motion-settings',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();runOnJS(onClose)();}}),transform:[{translateX:withSpring(interpolate(visible.get(),[0,1],[translateX,0]),CONTEXT_MENU_SPRING)},{translateY:withSpring(interpolate(visible.get(),[0,1],[translateY,0]),CONTEXT_MENU_SPRING)},{scale:withSpring(interpolate(visible.get(),[0,1],[CONTEXT_MENU_MIN_SCALE,1]),CONTEXT_MENU_SPRING)}]};}" };
let closure_11 = { code: "function ContextMenuPopoutNativeTsx2(finished){const{transitionState,TransitionStates,runOnJS,cleanUp,onClose}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();runOnJS(onClose)();}}" };
let closure_12 = { code: "function update_ContextMenuPopoutNativeTsx3(e){const{updateContextMenuState,state}=this.__closure;updateContextMenuState(e.absoluteX,e.absoluteY,state);}" };
let closure_13 = { code: "function ContextMenuPopoutNativeTsx4(){const{state,runOnJS,requestClose}=this.__closure;const{activeIndex:activeIndex}=state;const isDismiss=activeIndex.get()===-1;runOnJS(requestClose)(isDismiss);}" };
let obj3 = {};
let obj4 = {};
const merged1 = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
obj4["height"] = "auto";
obj3.accessibleDismiss = obj4;
let closure_14 = _createForOfIteratorHelperLoose.createStyles(obj3);
let closure_15 = { code: "function ContextMenuPopoutNativeTsx5(){const{withSpring,visible,CONTEXT_MENU_SPRING}=this.__closure;return{opacity:withSpring(visible.get(),CONTEXT_MENU_SPRING)};}" };
let obj2 = { borderBottomWidth: require("CONTEXT_MENU_LONG_PRESS_DURATION_MS").CONTEXT_MENU_DIVIDER_HEIGHT, borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
let result = require("get ActivityIndicator").fileFinishedImporting("design/components/ContextMenu/native/ContextMenuPopout.native.tsx");

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
  cleanUp = cleanUp.cleanUp;
  let sharedValue;
  let diff2;
  let first;
  let closure_11;
  ({ x, positionX } = menu);
  const positionY = menu.positionY;
  const height = menu.height;
  const state = menu.state;
  const requestClose = menu.requestClose;
  const onClose = menu.onClose;
  ({ title, keyboardShouldPersistTaps } = menu);
  let str = "handled";
  if (undefined !== keyboardShouldPersistTaps) {
    str = keyboardShouldPersistTaps;
  }
  const y = menu.y;
  let obj = transitionState(positionX[7]);
  let num = 0;
  if (transitionState === transitionState(positionX[8]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = obj.useSharedValue(num);
  let items = [transitionState, sharedValue];
  const effect = height.useEffect(() => {
    if (transitionState === transitionState(positionX[8]).TransitionStates.YEETED) {
      const result = sharedValue.set(0);
    } else {
      const result1 = sharedValue.set(1);
    }
  }, items);
  const tmp3 = diff2();
  ({ top, bottom } = cleanUp(positionX[9])({ includeKeyboardHeight: true }).insets);
  obj = {};
  let obj2 = transitionState(positionX[11]);
  obj.ignoreKeyboard = obj2.isAndroid();
  const size = cleanUp(positionX[10])(obj);
  const diff = size.height - y;
  if ("below" === positionY) {
    const diff1 = diff - bottom;
    diff2 = diff1 - transitionState(positionX[6]).CONTEXT_MENU_EDGE_OFFSET;
  } else {
    const diff3 = diff - top;
    diff2 = diff3 - transitionState(positionX[6]).CONTEXT_MENU_EDGE_OFFSET;
  }
  const tmp14 = positionY(height.useState(height >= diff2), 2);
  first = tmp14[0];
  closure_11 = tmp14[1];
  obj = {};
  let str2 = "bottom";
  if ("below" === positionY) {
    str2 = "top";
  }
  obj[str2] = y;
  obj[positionX] = x;
  obj["maxHeight"] = diff2;
  obj["maxWidth"] = size.width - transitionState(positionX[6]).CONTEXT_MENU_EDGE_OFFSET - x;
  let obj4 = transitionState(positionX[7]);
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
      interpolateResult = obj3.interpolate(c8.get(), [0, 1], [0, 1]);
      fn = function t(arg0) {
        let tmp = arg0;
        if (arg0) {
          tmp = outer1_0 === transitionState(positionX[8]).TransitionStates.YEETED;
        }
        if (tmp) {
          transitionState(positionX[7]).runOnJS(outer1_1)();
          const obj = transitionState(positionX[7]);
          transitionState(positionX[7]).runOnJS(outer1_7)();
          const obj2 = transitionState(positionX[7]);
        }
      };
      obj = { transitionState };
      obj.TransitionStates = transitionState(positionX[8]).TransitionStates;
      obj.runOnJS = transitionState(positionX[7]).runOnJS;
      obj.cleanUp = cleanUp;
      obj.onClose = onClose;
      fn.__closure = obj;
      fn.__workletHash = 4025068986009;
      fn.__initData = c11;
      obj.opacity = obj2.withSpring(interpolateResult, transitionState(positionX[6]).CONTEXT_MENU_SPRING, "respect-motion-settings", fn);
      obj1 = {};
      obj6 = transitionState(positionX[12]);
      obj7 = transitionState(positionX[7]);
      value = c8.get();
      items = [, ];
      items[0] = num2 * result1 + transitionState(positionX[6]).CONTEXT_MENU_MIN_SCALE * -num2 * result1;
      items[1] = 0;
      interpolateResult1 = obj7.interpolate(value, [0, 1], items);
      obj1.translateX = obj6.withSpring(interpolateResult1, transitionState(positionX[6]).CONTEXT_MENU_SPRING);
      items1 = [, , ];
      items1[0] = obj1;
      obj2 = {};
      obj9 = transitionState(positionX[12]);
      obj10 = transitionState(positionX[7]);
      value1 = c8.get();
      items2 = [, ];
      items2[0] = num * result + transitionState(positionX[6]).CONTEXT_MENU_MIN_SCALE * -num * result;
      items2[1] = 0;
      interpolateResult2 = obj10.interpolate(value1, [0, 1], items2);
      obj2.translateY = obj9.withSpring(interpolateResult2, transitionState(positionX[6]).CONTEXT_MENU_SPRING);
      items1[1] = obj2;
      obj3 = {};
      obj12 = transitionState(positionX[12]);
      obj13 = transitionState(positionX[7]);
      value2 = c8.get();
      items3 = [, ];
      items3[0] = transitionState(positionX[6]).CONTEXT_MENU_MIN_SCALE;
      items3[1] = 1;
      interpolateResult3 = obj13.interpolate(value2, [0, 1], items3);
      obj3.scale = obj12.withSpring(interpolateResult3, transitionState(positionX[6]).CONTEXT_MENU_SPRING);
      items1[2] = obj3;
      obj.transform = items1;
      return obj;
    }
  }
  let obj1 = { maxHeight: diff2, height, CONTEXT_MENU_MIN_WIDTH: transitionState(positionX[6]).CONTEXT_MENU_MIN_WIDTH, positionY, positionX, CONTEXT_MENU_MIN_SCALE: transitionState(positionX[6]).CONTEXT_MENU_MIN_SCALE, withSpring: transitionState(positionX[12]).withSpring, interpolate: transitionState(positionX[7]).interpolate, visible: sharedValue, CONTEXT_MENU_SPRING: transitionState(positionX[6]).CONTEXT_MENU_SPRING, transitionState, TransitionStates: transitionState(positionX[8]).TransitionStates, runOnJS: transitionState(positionX[7]).runOnJS, cleanUp, onClose };
  R.__closure = obj1;
  R.__workletHash = 16778623591634;
  R.__initData = first;
  let items1 = [state, requestClose, first];
  const animatedStyle = obj4.useAnimatedStyle(R);
  let items2 = [diff2];
  const memo = height.useMemo(() => {
    const tmp = (() => {
      function update(absoluteX) {
        const result = transitionState(positionX[13]).updateContextMenuState(absoluteX.absoluteX, absoluteX.absoluteY, outer2_5);
      }
      update.__closure = { updateContextMenuState: transitionState(positionX[13]).updateContextMenuState, state: outer1_5 };
      update.__workletHash = 4218299258082;
      update.__initData = outer2_12;
      return update;
    })();
    const Gesture = transitionState(positionX[14]).Gesture;
    const PanResult = Gesture.Pan();
    const enabledResult = Gesture.Pan().enabled(!first);
    const onStartResult = Gesture.Pan().enabled(!first).onStart(tmp);
    const fn = function t() {
      const activeIndex = outer1_5.activeIndex;
      const value = activeIndex.get();
      transitionState(positionX[7]).runOnJS(outer1_6)(-1 === value);
    };
    const onUpdateResult = Gesture.Pan().enabled(!first).onStart(tmp).onUpdate(tmp);
    fn.__closure = { state, runOnJS: transitionState(positionX[7]).runOnJS, requestClose };
    fn.__workletHash = 14495067009140;
    fn.__initData = outer1_13;
    return onUpdateResult.onEnd(fn);
  }, items1);
  let items3 = [requestClose];
  const callback = height.useCallback((nativeEvent) => {
    const rounded = Math.round(nativeEvent.nativeEvent.layout.height);
    callback(rounded >= Math.round(diff2));
  }, items2);
  const items4 = [requestClose];
  const callback1 = height.useCallback(() => {
    requestClose(true);
  }, items3);
  obj2 = {};
  const callback2 = height.useCallback(() => {
    requestClose(false);
  }, items4);
  const items5 = [requestClose(ContextMenuBackdrop, { onPress: callback1, visible: sharedValue }), ];
  const obj3 = { gesture: memo };
  obj4 = { onLayout: callback, bounces: false, style: items6 };
  items6 = [tmp3.container, obj, animatedStyle];
  obj4.keyboardShouldPersistTaps = str;
  obj4.accessibilityRole = "list";
  let tmp25 = null;
  if (null != title) {
    const obj5 = {};
    let obj6 = { style: tmp3.titleContainer };
    let obj7 = { variant: "text-md/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
    obj6.children = requestClose(transitionState(positionX[15]).Text, obj7);
    const items7 = [requestClose(state, obj6), requestClose(ContextMenuDivider, {})];
    obj5.children = items7;
    tmp25 = sharedValue(onClose, obj5);
  }
  const items8 = [tmp25, renderMenuItems({ items: menu.items, title, state, onPress: callback2, dividerIndexes: menu.dividerIndexes })];
  obj4.children = items8;
  obj3.children = sharedValue(cleanUp(positionX[7]).ScrollView, obj4);
  items5[1] = requestClose(transitionState(positionX[14]).GestureDetector, obj3);
  obj2.children = items5;
  return sharedValue(onClose, obj2);
};
