// Module ID: 18230
// Function ID: 18231
// Name: DevWidget
// Dependencies: [19, 8003, 573, 21, 5141, 575, 1652, 11432, 13033, 5428, 1705, 5771, 5772, 7121, 16682, 17827, 18231, 17826, 2]
// Exports: default

// Module 18230 (DevWidget)
import Constants from "Constants" /* 573 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5428 */;
import spring_spring from "spring/spring" /* 5771 */;
import springPresets from "springPresets" /* 5772 */;
import Pressables from "Pressables" /* 7121 */;
import useSafeAreaInsetsSharedValueDefault from "useSafeAreaInsetsSharedValue" /* 11432 */;
import useWindowDimensionsSharedValueDefault from "useWindowDimensionsSharedValue" /* 13033 */;
import StaffBadgeIcon from "StaffBadgeIcon" /* 17827 */;
import VEVOODefault from "VEVOO" /* 18231 */;
import react from "react" /* 19 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 8003 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let obj1, rect, result1, sum, value;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let size;
let tmp6;
const _modDef1652 = tmp6(1652);
function DraggableContainer(arg0) {
  let children;
  let contentHeight;
  let contentWidth;
  let dragBoundsPadding;
  let items11;
  let obj5;
  let onChangePosition;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp37;
  let tmp38;
  let tmp39;
  let tmp40;
  let tmp41;
  let tmp42;
  let x;
  let y;
  ({ x, y, contentWidth, contentHeight, dragBoundsPadding } = arg0);
  if (dragBoundsPadding === undefined) {
    dragBoundsPadding = 0;
  }
  ({ onChangePosition, children } = arg0);
  const tmp = closure_9();
  let obj = _mod1652;
  const sharedValue = obj.useSharedValue(x.get());
  const obj2 = _mod1652;
  const sharedValue1 = obj2.useSharedValue(y.get());
  const tmp7 = useSafeAreaInsetsSharedValueDefault();
  const tmp8 = useWindowDimensionsSharedValueDefault();
  let items = [closure_10, tmp8, tmp7, , , , ];
  const useCallback = react.useCallback;
  items[3] = _mod1652.clamp;
  items[4] = dragBoundsPadding;
  items[5] = contentWidth;
  items[6] = contentHeight;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items;
  class DevWidgetTsx1 {
    constructor(arg0, arg1) {
      value = closure_0.get();
      ({ width, height } = value);
      rect = closure_1.get();
      point = { x: closure_2(arg0, rect.left + closure_3, width - rect.right - closure_4 - closure_3), y: closure_2(arg1, rect.top + closure_3, height - rect.bottom - closure_5 - closure_3) };
      return point;
    }
  }
  const items1 = [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
  DevWidgetTsx1.__closure = items1;
  DevWidgetTsx1.__workletHash = 7329108226657;
  DevWidgetTsx1.__initData = tmp10;
  const items2 = [contentHeight, contentWidth, dragBoundsPadding, tmp7, tmp8];
  const callback = useCallback(DevWidgetTsx1, items2);
  const items3 = [closure_11, sharedValue, x, sharedValue1, y];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp19, tmp20, tmp21, tmp22, tmp23] = items3;
  const obj3 = { onActivate: DevWidgetTsx2, onUpdate: DevWidgetTsx3, onDeactivate: DevWidgetTsx4 };
  const tmp2Result = LegacyBaseButton;
  class DevWidgetTsx2 {
    constructor() {
      result = closure_0.set(closure_1.get());
      result1 = closure_2.set(closure_3.get());
      return;
    }
  }
  const items4 = [tmp20, tmp21, tmp22, tmp23];
  DevWidgetTsx2.__closure = items4;
  DevWidgetTsx2.__workletHash = 13170682718653;
  DevWidgetTsx2.__initData = tmp19;
  const items5 = [closure_12, callback, sharedValue, sharedValue1, x, y];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29] = items5;
  class DevWidgetTsx3 {
    constructor(arg0) {
      sum = closure_1.get() + arg0.translationX;
      point = closure_0(sum, closure_2.get() + arg0.translationY);
      y = point.y;
      result = closure_3.set(point.x);
      result1 = closure_4.set(y);
      return;
    }
  }
  const items6 = [tmp25, tmp26, tmp27, tmp28, tmp29];
  DevWidgetTsx3.__closure = items6;
  DevWidgetTsx3.__workletHash = 9152627460216;
  DevWidgetTsx3.__initData = tmp24;
  const items7 = [closure_13, , , , ];
  const usePanGesture = tmp2Result.usePanGesture;
  items7[1] = _mod1705.scheduleOnRN;
  items7[2] = onChangePosition;
  items7[3] = x;
  items7[4] = y;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp30, tmp31, tmp32, tmp33, tmp34] = items7;
  class DevWidgetTsx4 {
    constructor() {
      point = { x: closure_2.get(), y: closure_3.get() };
      tmp = closure_0(closure_1, point);
      return;
    }
  }
  const items8 = [tmp31, tmp32, tmp33, tmp34];
  DevWidgetTsx4.__closure = items8;
  DevWidgetTsx4.__workletHash = 9806948257030;
  DevWidgetTsx4.__initData = tmp30;
  const panGesture = usePanGesture(obj3);
  const items9 = [closure_14, callback, x, y, , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items9[4] = spring_spring.withSpring;
  items9[5] = springPresets.springUnclamped;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp37, tmp38, tmp39, tmp40, tmp41, tmp42] = items9;
  class DevWidgetTsx5 {
    constructor() {
      value = closure_1.get();
      point = closure_0(value, closure_2.get());
      obj = { transform: null };
      obj1 = { translateX: closure_3(point.x, closure_4) };
      items = [, ];
      items[0] = obj1;
      obj4 = { translateY: closure_3(point.y, closure_4) };
      items[1] = obj4;
      obj.transform = items;
      return obj;
    }
  }
  const items10 = [tmp38, tmp39, tmp40, tmp41, tmp42];
  DevWidgetTsx5.__closure = items10;
  DevWidgetTsx5.__workletHash = 4562461506226;
  DevWidgetTsx5.__initData = tmp37;
  const animatedStyle = useAnimatedStyle(DevWidgetTsx5);
  const obj4 = { gesture: panGesture, children: metroRequire(_modDef1652.View, obj5) };
  const GestureDetector = tmp2(5428).GestureDetector;
  obj5 = { style: items11, children };
  items11 = [tmp.widgetContainer, animatedStyle];
  return metroRequire(GestureDetector, obj4);
}
const DEV_WIDGET_SIZE = Constants.DEV_WIDGET_SIZE;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { widgetContainer: { position: "absolute" }, widget: size };
size = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, justifyContent: "center", alignItems: "center", height: DEV_WIDGET_SIZE, width: DEV_WIDGET_SIZE, borderRadius: nativeDefault.radii.xl };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_MOBILE_NAVIGATOR_X);
let closure_9 = createStyles(obj);
let closure_10 = { code: "(function DevWidgetTsx1(x,y){let[windowDimensionsSharedValue,insetsSharedValue,clamp,dragBoundsPadding,contentWidth,contentHeight]=this.__closure;const{width:windowWidth,height:windowHeight}=windowDimensionsSharedValue.get();const insets=insetsSharedValue.get();return{x:clamp(x,insets.left+dragBoundsPadding,windowWidth-insets.right-contentWidth-dragBoundsPadding),y:clamp(y,insets.top+dragBoundsPadding,windowHeight-insets.bottom-contentHeight-dragBoundsPadding)};})" };
let closure_11 = { code: "(function DevWidgetTsx2(){let[originalX,x,originalY,y]=this.__closure;originalX.set(x.get());originalY.set(y.get());})" };
let closure_12 = { code: "(function DevWidgetTsx3(event){let[getClampedPosition,originalX,originalY,x,y]=this.__closure;const{x:xClamped,y:yClamped}=getClampedPosition(originalX.get()+event.translationX,originalY.get()+event.translationY);x.set(xClamped);y.set(yClamped);})" };
let closure_13 = { code: "(function DevWidgetTsx4(){let[scheduleOnRN,onChangePosition,x,y]=this.__closure;scheduleOnRN(onChangePosition,{x:x.get(),y:y.get()});})" };
let closure_14 = { code: "(function DevWidgetTsx5(){let[getClampedPosition,x,y,withSpring,springUnclamped]=this.__closure;const{x:translateX,y:translateY}=getClampedPosition(x.get(),y.get());return{transform:[{translateX:withSpring(translateX,springUnclamped)},{translateY:withSpring(translateY,springUnclamped)}]};})" };
let closure_16 = react.memo(function DevWidgetContent() {
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
  let obj = _mod1652;
  const sharedValue = obj.useSharedValue(DevToolsSettingsStore.devWidgetPosition.x);
  let obj2 = _mod1652;
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
