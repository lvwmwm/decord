// Module ID: 15549
// Function ID: 15550
// Name: DevWidget
// Dependencies: [19, 7132, 574, 21, 4836, 576, 4566, 10895, 11515, 6073, 5280, 5284, 5435, 14139, 15131, 15550, 15130, 2]
// Exports: default

// Module 15549 (DevWidget)
import Constants from "Constants" /* 574 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import spring from "spring" /* 5280 */;
import springPresets from "springPresets" /* 5284 */;
import Pressables from "Pressables" /* 5435 */;
import StaffBadgeIcon from "StaffBadgeIcon" /* 15131 */;
import VEVOODefault from "VEVOO" /* 15550 */;
import react from "react" /* 19 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 7132 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let size;
function DraggableContainer(arg0) {
  let callback;
  let closure_0;
  let closure_1;
  let fn;
  let items1;
  let obj8;
  const x = arg0.x;
  _require = x;
  let y = arg0.y;
  importDefault = y;
  const contentWidth = arg0.contentWidth;
  const contentHeight = arg0.contentHeight;
  let num = arg0.dragBoundsPadding;
  if (num === undefined) {
    num = 0;
  }
  const onChangePosition = arg0.onChangePosition;
  closure_9 = undefined;
  let getClampedPosition;
  const children = arg0.children;
  const tmp = closure_9();
  let obj = require("ReanimatedRexport");
  const sharedValue = obj.useSharedValue(x.get());
  let obj2 = require("ReanimatedRexport");
  const sharedValue1 = obj2.useSharedValue(y.get());
  const tmp4 = require("useSafeAreaInsetsSharedValue")();
  let closure_8 = tmp4;
  const tmp5 = require("useWindowDimensionsSharedValue")();
  closure_9 = tmp5;
  class P {
    constructor(arg0, arg1) {
      let height;
      let obj2;
      let obj3;
      let width;
      const value = closure_9.get();
      ({ width, height } = value);
      const rect = closure_8.get();
      const point = { x: obj2.clamp(arg0, rect.left + num, width - rect.right - contentWidth - num), y: obj3.clamp(arg1, rect.top + num, height - rect.bottom - contentHeight - num) };
      obj2 = ReanimatedRexport;
      obj3 = ReanimatedRexport;
      return point;
    }
  }
  let obj3 = { windowDimensionsSharedValue: tmp5, insetsSharedValue: tmp4, clamp: require("ReanimatedRexport").clamp, dragBoundsPadding: num, contentWidth, contentHeight };
  P.__closure = obj3;
  P.__workletHash = 729779775192;
  P.__initData = getClampedPosition;
  let items = [contentHeight, contentWidth, num, tmp4, tmp5];
  getClampedPosition = contentHeight.useCallback(P, items);
  let obj4 = require("LegacyBaseButton");
  let obj5 = { onActivate: C, onUpdate: fn, onDeactivate: D };
  class C {
    constructor() {
      const result = sharedValue.set(closure_0.get());
      const result1 = sharedValue1.set(closure_1.get());
    }
  }
  C.__closure = { originalX: sharedValue, x, originalY: sharedValue1, y };
  C.__workletHash = 11333606215108;
  C.__initData = __initData;
  fn = function f(translationX) {
    const sum = sharedValue.get() + translationX.translationX;
    const point = callback(sum, sharedValue1.get() + translationX.translationY);
    const y = point.y;
    const result = closure_0.set(point.x);
    const result1 = closure_1.set(y);
  };
  fn.__closure = { getClampedPosition, originalX: sharedValue, originalY: sharedValue1, x, y };
  fn.__workletHash = 10056531764801;
  fn.__initData = __initData2;
  class D {
    constructor() {
      const point = { x: closure_0.get(), y: closure_1.get() };
      const obj = ReanimatedRexport;
      const runOnJSResult = obj.runOnJS(onChangePosition);
      runOnJSResult(point);
    }
  }
  let point = { runOnJS: require("ReanimatedRexport").runOnJS, onChangePosition, x, y };
  D.__closure = point;
  D.__workletHash = 10003102447058;
  D.__initData = __initData3;
  const panGesture = obj4.usePanGesture(obj5);
  const obj7 = require("ReanimatedRexport");
  class W {
    constructor() {
      let items;
      let obj3;
      let obj5;
      let x;
      let y;
      const value = closure_0.get();
      const obj = { transform: items };
      const obj2 = { translateX: obj3.withSpring(x, springPresets.springUnclamped) };
      ({ x, y } = callback(value, closure_1.get()));
      callback(value, closure_1.get());
      items = [obj2, ];
      obj3 = spring;
      const obj4 = { translateY: obj5.withSpring(y, springPresets.springUnclamped) };
      items[1] = obj4;
      obj5 = spring;
      return obj;
    }
  }
  const point1 = { getClampedPosition, x, y, withSpring: require("spring").withSpring, springUnclamped: require("springPresets").springUnclamped };
  W.__closure = point1;
  W.__workletHash = 6251354551691;
  W.__initData = __initData4;
  const animatedStyle = obj7.useAnimatedStyle(W);
  const obj6 = { gesture: panGesture, children: sharedValue(require("ReanimatedRexport").View, obj8) };
  const GestureDetector = require("LegacyBaseButton").GestureDetector;
  obj8 = { style: items1, children };
  items1 = [tmp.widgetContainer, animatedStyle];
  return sharedValue(GestureDetector, obj6);
}
const DEV_WIDGET_SIZE = Constants.DEV_WIDGET_SIZE;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { widgetContainer: { position: "absolute" }, widget: size };
size = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, justifyContent: "center", alignItems: "center", height: DEV_WIDGET_SIZE, width: DEV_WIDGET_SIZE, borderRadius: nativeDefault.radii.xl };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_MOBILE_NAVIGATOR_X);
let closure_9 = createStyles(obj);
let closure_10 = { code: "function DevWidgetTsx1(x,y){const{windowDimensionsSharedValue,insetsSharedValue,clamp,dragBoundsPadding,contentWidth,contentHeight}=this.__closure;const{width:windowWidth,height:windowHeight}=windowDimensionsSharedValue.get();const insets=insetsSharedValue.get();return{x:clamp(x,insets.left+dragBoundsPadding,windowWidth-insets.right-contentWidth-dragBoundsPadding),y:clamp(y,insets.top+dragBoundsPadding,windowHeight-insets.bottom-contentHeight-dragBoundsPadding)};}" };
const __initData = { code: "function DevWidgetTsx2(){const{originalX,x,originalY,y}=this.__closure;originalX.set(x.get());originalY.set(y.get());}" };
const __initData2 = { code: "function DevWidgetTsx3(event){const{getClampedPosition,originalX,originalY,x,y}=this.__closure;const{x:xClamped,y:yClamped}=getClampedPosition(originalX.get()+event.translationX,originalY.get()+event.translationY);x.set(xClamped);y.set(yClamped);}" };
const __initData3 = { code: "function DevWidgetTsx4(){const{runOnJS,onChangePosition,x,y}=this.__closure;runOnJS(onChangePosition)({x:x.get(),y:y.get()});}" };
const __initData4 = { code: "function DevWidgetTsx5(){const{getClampedPosition,x,y,withSpring,springUnclamped}=this.__closure;const{x:translateX,y:translateY}=getClampedPosition(x.get(),y.get());return{transform:[{translateX:withSpring(translateX,springUnclamped)},{translateY:withSpring(translateY,springUnclamped)}]};}" };
let closure_16 = react.memo(() => {
  let obj = {
    style: closure_9().widget,
    accessibilityRole: "button",
    onPress() {
      const obj = require("DevToolsNavigator");
      return obj.navigateToDevTools();
    },
    activeOpacity: 0.5,
    children: metroRequire(StaffBadgeIcon.StaffBadgeIcon, { size: "md", color: "white" })
  };
  closure_9();
  const PressableOpacity = Pressables.PressableOpacity;
  return metroRequire(PressableOpacity, obj);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/devtools/native/components/DevWidget.tsx");

export default function DevWidget() {
  let items;
  let obj = ReanimatedRexport;
  const sharedValue = obj.useSharedValue(DevToolsSettingsStore.devWidgetPosition.x);
  let obj2 = ReanimatedRexport;
  const sharedValue1 = obj2.useSharedValue(DevToolsSettingsStore.devWidgetPosition.y);
  const obj3 = { children: items };
  items = [metroRequire(VEVOODefault, { x: sharedValue, y: sharedValue1 }), ];
  const point = {
    x: sharedValue,
    y: sharedValue1,
    contentWidth: DEV_WIDGET_SIZE,
    contentHeight: DEV_WIDGET_SIZE,
    dragBoundsPadding: nativeDefault.space.PX_4,
    onChangePosition(devWidgetPosition) {
      const obj = require("DevToolsActionCreators");
      const obj2 = { devWidgetPosition };
      return obj.updateDevToolsSettings(obj2);
    },
    children: metroRequire(closure_16, {})
  };
  items[1] = metroRequire(DraggableContainer, point);
  return metroImportAll(metroImportDefault, obj3);
};
