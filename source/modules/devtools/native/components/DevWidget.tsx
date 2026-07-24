// Module ID: 14756
// Function ID: 112447
// Name: DraggableContainer
// Dependencies: [31, 6959, 687, 33, 4130, 689, 3991, 10423, 14757, 5217, 4542, 4546, 4660, 13556, 14454, 14758, 13561, 2]
// Exports: default

// Module 14756 (DraggableContainer)
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { DEV_WIDGET_SIZE } from "STORAGE_KEY_LOG_DISPATCHES";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function DraggableContainer(children) {
  const x = children.x;
  const _require = x;
  const y = children.y;
  const importDefault = y;
  const contentWidth = children.contentWidth;
  const contentHeight = children.contentHeight;
  let num = children.dragBoundsPadding;
  if (num === undefined) {
    num = 0;
  }
  const onChangePosition = children.onChangePosition;
  let sharedValue;
  let sharedValue1;
  let c8;
  let callback3;
  let callback;
  let obj = _require(contentWidth[6]);
  sharedValue = obj.useSharedValue(x.get());
  let obj1 = _require(contentWidth[6]);
  sharedValue1 = obj1.useSharedValue(y.get());
  const tmp4 = importDefault(contentWidth[7])();
  c8 = tmp4;
  const tmp5 = importDefault(contentWidth[8])();
  callback3 = tmp5;
  class P {
    constructor(arg0, arg1) {
      value = c9.get();
      ({ width, height } = value);
      rect = c8.get();
      obj = {};
      obj2 = closure_0(contentWidth[6]);
      obj.x = obj2.clamp(children, rect.left + c4, width - rect.right - contentWidth - c4);
      obj3 = closure_0(contentWidth[6]);
      obj.y = obj3.clamp(arg1, rect.top + c4, height - rect.bottom - contentHeight - c4);
      return obj;
    }
  }
  obj = { windowDimensionsSharedValue: tmp5, insetsSharedValue: tmp4, clamp: _require(contentWidth[6]).clamp, dragBoundsPadding: num, contentWidth, contentHeight };
  P.__closure = obj;
  P.__workletHash = 729779775192;
  P.__initData = callback;
  let items = [contentHeight, contentWidth, num, tmp4, tmp5];
  callback = contentHeight.useCallback(P, items);
  const Gesture = _require(contentWidth[9]).Gesture;
  const tmp = callback3();
  class C {
    constructor() {
      result = c6.set(closure_0.get());
      result1 = c7.set(closure_1.get());
      return;
    }
  }
  C.__closure = { originalX: sharedValue, x, originalY: sharedValue1, y };
  C.__workletHash = 7165614533762;
  C.__initData = closure_13;
  const PanResult = Gesture.Pan();
  const fn = function f(translationX) {
    const sum = sharedValue.get() + translationX.translationX;
    const point = callback(sum, sharedValue1.get() + translationX.translationY);
    const result = store.set(point.x);
    const result1 = store2.set(point.y);
  };
  fn.__closure = { getClampedPosition: callback, originalX: sharedValue, originalY: sharedValue1, x, y };
  fn.__workletHash = 10056531764801;
  fn.__initData = closure_12;
  const onStartResult = Gesture.Pan().onStart(C);
  class D {
    constructor() {
      obj = closure_0(contentWidth[6]);
      obj = {};
      runOnJSResult = obj.runOnJS(onChangePosition);
      obj.x = closure_0.get();
      obj.y = closure_1.get();
      tmpResult = runOnJSResult(obj);
      return;
    }
  }
  obj = { runOnJS: _require(contentWidth[6]).runOnJS, onChangePosition, x, y };
  D.__closure = obj;
  D.__workletHash = 12890758993684;
  D.__initData = closure_11;
  const onUpdateResult = Gesture.Pan().onStart(C).onUpdate(fn);
  const onEndResult = Gesture.Pan().onStart(C).onUpdate(fn).onEnd(D);
  class W {
    constructor() {
      value = closure_0.get();
      tmp2 = c10(value, closure_1.get());
      obj = {};
      obj = {};
      ({ x, y } = tmp2);
      obj3 = closure_0(contentWidth[10]);
      obj.translateX = obj3.withSpring(x, closure_0(contentWidth[11]).springUnclamped);
      items = [, ];
      items[0] = obj;
      obj1 = {};
      obj5 = closure_0(contentWidth[10]);
      obj1.translateY = obj5.withSpring(y, closure_0(contentWidth[11]).springUnclamped);
      items[1] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  obj1 = { getClampedPosition: callback, x, y, withSpring: _require(contentWidth[10]).withSpring, springUnclamped: _require(contentWidth[11]).springUnclamped };
  W.__closure = obj1;
  W.__workletHash = 6251354551691;
  W.__initData = closure_14;
  const animatedStyle = _require(contentWidth[6]).useAnimatedStyle(W);
  let obj2 = { gesture: onEndResult };
  const items1 = [tmp.widgetContainer, animatedStyle];
  obj2.children = sharedValue(importDefault(contentWidth[6]).View, { style: items1, children: children.children });
  return sharedValue(_require(contentWidth[9]).GestureDetector, obj2);
}
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
let obj = { widgetContainer: { position: "absolute" } };
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, justifyContent: "center", alignItems: "center", height: DEV_WIDGET_SIZE, width: DEV_WIDGET_SIZE, borderRadius: require("_createForOfIteratorHelperLoose").radii.xl };
const merged = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_MOBILE_NAVIGATOR_X);
obj.widget = obj;
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_10 = { code: "function DevWidgetTsx1(x,y){const{windowDimensionsSharedValue,insetsSharedValue,clamp,dragBoundsPadding,contentWidth,contentHeight}=this.__closure;const{width:windowWidth,height:windowHeight}=windowDimensionsSharedValue.get();const insets=insetsSharedValue.get();return{x:clamp(x,insets.left+dragBoundsPadding,windowWidth-insets.right-contentWidth-dragBoundsPadding),y:clamp(y,insets.top+dragBoundsPadding,windowHeight-insets.bottom-contentHeight-dragBoundsPadding)};}" };
let closure_11 = { code: "function DevWidgetTsx2(){const{runOnJS,onChangePosition,x,y}=this.__closure;runOnJS(onChangePosition)({x:x.get(),y:y.get()});}" };
let closure_12 = { code: "function DevWidgetTsx3(event){const{getClampedPosition,originalX,originalY,x,y}=this.__closure;const{x:xClamped,y:yClamped}=getClampedPosition(originalX.get()+event.translationX,originalY.get()+event.translationY);x.set(xClamped);y.set(yClamped);}" };
let closure_13 = { code: "function DevWidgetTsx4(){const{originalX,x,originalY,y}=this.__closure;originalX.set(x.get());originalY.set(y.get());}" };
let closure_14 = { code: "function DevWidgetTsx5(){const{getClampedPosition,x,y,withSpring,springUnclamped}=this.__closure;const{x:translateX,y:translateY}=getClampedPosition(x.get(),y.get());return{transform:[{translateX:withSpring(translateX,springUnclamped)},{translateY:withSpring(translateY,springUnclamped)}]};}" };
let closure_15 = importAllResult.memo(() => {
  const obj = {
    style: callback3().widget,
    accessibilityRole: "button",
    onPress() {
      return outer1_0(outer1_2[13]).navigateToDevTools();
    },
    activeOpacity: 0.5,
    children: callback(require(14454) /* StaffBadgeIcon */.StaffBadgeIcon, { size: "md", color: "white" })
  };
  return callback(require(4660) /* PressableBase */.PressableOpacity, obj);
});
let result = require("STORAGE_KEY_LOG_DISPATCHES").fileFinishedImporting("modules/devtools/native/components/DevWidget.tsx");

export default function DevWidget() {
  let obj = require(3991);
  const sharedValue = obj.useSharedValue(_isNativeReflectConstruct.devWidgetPosition.x);
  const sharedValue1 = require(3991).useSharedValue(_isNativeReflectConstruct.devWidgetPosition.y);
  obj = {};
  const items = [callback(importDefault(14758), { x: sharedValue, y: sharedValue1 }), ];
  obj = {
    x: sharedValue,
    y: sharedValue1,
    contentWidth: DEV_WIDGET_SIZE,
    contentHeight: DEV_WIDGET_SIZE,
    dragBoundsPadding: importDefault(689).space.PX_4,
    onChangePosition(devWidgetPosition) {
      let obj = outer1_0(outer1_2[16]);
      obj = { devWidgetPosition };
      return obj.updateDevToolsSettings(obj);
    },
    children: callback(closure_15, {})
  };
  items[1] = callback(DraggableContainer, obj);
  obj.children = items;
  return callback2(closure_7, obj);
};
