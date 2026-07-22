// Module ID: 14594
// Function ID: 109962
// Name: DraggableContainer
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 4294967295, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 14594 (DraggableContainer)
import importAllResult from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import { DEV_WIDGET_SIZE } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

function DraggableContainer(children) {
  const x = children.x;
  const arg1 = x;
  const y = children.y;
  const importDefault = y;
  const contentWidth = children.contentWidth;
  const dependencyMap = contentWidth;
  const contentHeight = children.contentHeight;
  let num = children.dragBoundsPadding;
  if (num === undefined) {
    num = 0;
  }
  let closure_4 = num;
  const onChangePosition = children.onChangePosition;
  const DEV_WIDGET_SIZE = onChangePosition;
  let sharedValue;
  let sharedValue1;
  let tmp4;
  let callback3;
  let closure_10;
  let obj = arg1(dependencyMap[6]);
  sharedValue = obj.useSharedValue(x.get());
  let obj1 = arg1(dependencyMap[6]);
  sharedValue1 = obj1.useSharedValue(y.get());
  tmp4 = importDefault(dependencyMap[7])();
  const tmp5 = importDefault(dependencyMap[8])();
  callback3 = tmp5;
  class P {
    constructor(arg0, arg1) {
      value = closure_9.get();
      ({ width, height } = value);
      rect = closure_8.get();
      obj = {};
      obj2 = x(contentWidth[6]);
      obj.x = obj2.clamp(children, rect.left + closure_4, width - rect.right - contentWidth - closure_4);
      obj3 = x(contentWidth[6]);
      obj.y = obj3.clamp(arg1, rect.top + closure_4, height - rect.bottom - contentHeight - closure_4);
      return obj;
    }
  }
  obj = { windowDimensionsSharedValue: tmp5, insetsSharedValue: tmp4, clamp: arg1(dependencyMap[6]).clamp, dragBoundsPadding: num, contentWidth, contentHeight };
  P.__closure = obj;
  P.__workletHash = 729779775192;
  P.__initData = closure_10;
  const items = [contentHeight, contentWidth, num, tmp4, tmp5];
  const callback = contentHeight.useCallback(P, items);
  closure_10 = callback;
  const Gesture = arg1(dependencyMap[9]).Gesture;
  const importAllResult = contentHeight;
  const tmp = callback3();
  class C {
    constructor() {
      result = closure_6.set(x.get());
      result1 = closure_7.set(y.get());
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
    const result = x.set(point.x);
    const result1 = y.set(point.y);
  };
  fn.__closure = { getClampedPosition: callback, originalX: sharedValue, originalY: sharedValue1, x, y };
  fn.__workletHash = 10056531764801;
  fn.__initData = closure_12;
  const onStartResult = Gesture.Pan().onStart(C);
  class D {
    constructor() {
      obj = x(contentWidth[6]);
      obj = {};
      runOnJSResult = obj.runOnJS(onChangePosition);
      obj.x = x.get();
      obj.y = y.get();
      tmpResult = runOnJSResult(obj);
      return;
    }
  }
  obj = { runOnJS: arg1(dependencyMap[6]).runOnJS, onChangePosition, x, y };
  D.__closure = obj;
  D.__workletHash = 12890758993684;
  D.__initData = closure_11;
  const onUpdateResult = Gesture.Pan().onStart(C).onUpdate(fn);
  const onEndResult = Gesture.Pan().onStart(C).onUpdate(fn).onEnd(D);
  class W {
    constructor() {
      value = x.get();
      tmp2 = closure_10(value, y.get());
      obj = {};
      obj = {};
      ({ x, y } = tmp2);
      obj3 = x(contentWidth[10]);
      obj.translateX = obj3.withSpring(x, x(contentWidth[11]).springUnclamped);
      items = [, ];
      items[0] = obj;
      obj1 = {};
      obj5 = x(contentWidth[10]);
      obj1.translateY = obj5.withSpring(y, x(contentWidth[11]).springUnclamped);
      items[1] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  obj1 = { getClampedPosition: callback, x, y, withSpring: arg1(dependencyMap[10]).withSpring, springUnclamped: arg1(dependencyMap[11]).springUnclamped };
  W.__closure = obj1;
  W.__workletHash = 6251354551691;
  W.__initData = closure_14;
  const animatedStyle = arg1(dependencyMap[6]).useAnimatedStyle(W);
  const obj2 = { gesture: onEndResult };
  const items1 = [tmp.widgetContainer, animatedStyle];
  obj2.children = sharedValue(importDefault(dependencyMap[6]).View, { style: items1, children: children.children });
  return sharedValue(arg1(dependencyMap[9]).GestureDetector, obj2);
}
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = __exportStarResult1);
let obj = { widgetContainer: { position: "absolute" } };
obj = { __v_isVNode: "string", _$esjava$I_x: "string", EmbeddedActivitiesStore: "color", backgroundColor: require("__exportStarResult1").colors.BACKGROUND_BRAND, height: DEV_WIDGET_SIZE, width: DEV_WIDGET_SIZE, borderRadius: require("__exportStarResult1").radii.xl };
const merged = Object.assign(require("__exportStarResult1").shadows.SHADOW_MOBILE_NAVIGATOR_X);
obj.widget = obj;
let closure_9 = __exportStarResult1.createStyles(obj);
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
      return callback(closure_2[13]).navigateToDevTools();
    },
    activeOpacity: 0.5,
    children: callback(arg1(dependencyMap[14]).StaffBadgeIcon, { "Bool(false)": "event", "Bool(false)": "events" })
  };
  return callback(arg1(dependencyMap[12]).PressableOpacity, obj);
});
const result = __exportStarResult1.fileFinishedImporting("modules/devtools/native/components/DevWidget.tsx");

export default function DevWidget() {
  let obj = arg1(dependencyMap[6]);
  const sharedValue = obj.useSharedValue(closure_4.devWidgetPosition.x);
  const sharedValue1 = arg1(dependencyMap[6]).useSharedValue(closure_4.devWidgetPosition.y);
  obj = {};
  const items = [callback(importDefault(dependencyMap[15]), { x: sharedValue, y: sharedValue1 }), ];
  obj = {
    x: sharedValue,
    y: sharedValue1,
    contentWidth: DEV_WIDGET_SIZE,
    contentHeight: DEV_WIDGET_SIZE,
    dragBoundsPadding: importDefault(dependencyMap[5]).space.PX_4,
    onChangePosition(devWidgetPosition) {
      let obj = callback(closure_2[16]);
      obj = { devWidgetPosition };
      return obj.updateDevToolsSettings(obj);
    },
    children: callback(closure_15, {})
  };
  items[1] = callback(DraggableContainer, obj);
  obj.children = items;
  return callback2(closure_7, obj);
};
