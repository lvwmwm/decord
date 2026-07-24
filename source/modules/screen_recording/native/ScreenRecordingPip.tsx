// Module ID: 14763
// Function ID: 112492
// Name: DraggableContainer
// Dependencies: [57, 31, 27, 14764, 33, 4130, 689, 3991, 10423, 14757, 5217, 4542, 4546, 4098, 14768, 1934, 14758, 4660, 4126, 4543, 4082, 14769, 2]
// Exports: default

// Module 14763 (DraggableContainer)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { useScreenRecordingStore } from "useScreenRecordingStore";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
let closure_9;
let require = arg1;
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
  let c9;
  let callback;
  let obj = _require(contentWidth[7]);
  sharedValue = obj.useSharedValue(x.get());
  let obj1 = _require(contentWidth[7]);
  sharedValue1 = obj1.useSharedValue(y.get());
  const tmp4 = importDefault(contentWidth[8])();
  c8 = tmp4;
  const tmp5 = importDefault(contentWidth[9])();
  c9 = tmp5;
  class C {
    constructor(arg0, arg1) {
      value = c9.get();
      ({ width, height } = value);
      rect = c8.get();
      obj = {};
      obj2 = closure_0(contentWidth[7]);
      obj.x = obj2.clamp(children, rect.left + c4, width - rect.right - contentWidth - c4);
      obj3 = closure_0(contentWidth[7]);
      obj.y = obj3.clamp(arg1, rect.top + c4, height - rect.bottom - contentHeight - c4);
      return obj;
    }
  }
  obj = { windowDimensionsSharedValue: tmp5, insetsSharedValue: tmp4, clamp: _require(contentWidth[7]).clamp, dragBoundsPadding: num, contentWidth, contentHeight };
  C.__closure = obj;
  C.__workletHash = 5314404716267;
  C.__initData = closure_12;
  let items = [contentHeight, contentWidth, num, tmp4, tmp5];
  callback = num.useCallback(C, items);
  const Gesture = _require(contentWidth[10]).Gesture;
  const tmp = _createForOfIteratorHelperLoose();
  class X {
    constructor() {
      result = c6.set(closure_0.get());
      result1 = c7.set(closure_1.get());
      return;
    }
  }
  X.__closure = { originalX: sharedValue, x, originalY: sharedValue1, y };
  X.__workletHash = 7766704092529;
  X.__initData = closure_15;
  const PanResult = Gesture.Pan();
  const fn = function v(translationX) {
    const sum = sharedValue.get() + translationX.translationX;
    const point = callback(sum, sharedValue1.get() + translationX.translationY);
    const result = store.set(point.x);
    const result1 = store2.set(point.y);
  };
  fn.__closure = { getClampedPosition: callback, originalX: sharedValue, originalY: sharedValue1, x, y };
  fn.__workletHash = 3428194988690;
  fn.__initData = closure_14;
  const onStartResult = Gesture.Pan().onStart(X);
  const fn2 = function f() {
    let obj = store(contentWidth[7]);
    obj = { x: store.get(), y: store2.get() };
    obj.runOnJS(onChangePosition)(obj);
  };
  obj = { runOnJS: _require(contentWidth[7]).runOnJS, onChangePosition, x, y };
  fn2.__closure = obj;
  fn2.__workletHash = 144401388839;
  fn2.__initData = closure_13;
  const onUpdateResult = Gesture.Pan().onStart(X).onUpdate(fn);
  const onEndResult = Gesture.Pan().onStart(X).onUpdate(fn).onEnd(fn2);
  const fn3 = function b() {
    let x;
    let y;
    const value = store.get();
    let obj = {};
    obj = {};
    ({ x, y } = callback(value, store2.get()));
    const tmp2 = callback(value, store2.get());
    obj.translateX = store(contentWidth[11]).withSpring(x, store(contentWidth[12]).springUnclamped);
    const items = [obj, ];
    obj = {};
    const obj3 = store(contentWidth[11]);
    obj.translateY = store(contentWidth[11]).withSpring(y, store(contentWidth[12]).springUnclamped);
    items[1] = obj;
    obj.transform = items;
    return obj;
  };
  obj1 = { getClampedPosition: callback, x, y, withSpring: _require(contentWidth[11]).withSpring, springUnclamped: _require(contentWidth[12]).springUnclamped };
  fn3.__closure = obj1;
  fn3.__workletHash = 5273315246744;
  fn3.__initData = closure_16;
  const animatedStyle = _require(contentWidth[7]).useAnimatedStyle(fn3);
  let obj2 = { gesture: onEndResult };
  const items1 = [tmp.widgetContainer, animatedStyle];
  obj2.children = sharedValue1(importDefault(contentWidth[7]).View, { style: items1, children: children.children });
  return sharedValue1(_require(contentWidth[10]).GestureDetector, obj2);
}
function ScreenRecordingPip(surveyConfig) {
  surveyConfig = surveyConfig.surveyConfig;
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = importDefault(point[9])();
  const require = tmp2;
  const tmp3 = importDefault(point[8])();
  importDefault = tmp3;
  const tmp5 = useScreenRecordingStore((currentStep) => currentStep.currentStep);
  const tmp6 = useScreenRecordingStore((isUploading) => isUploading.isUploading);
  const items = [tmp2, tmp3];
  const isStepCompleted = surveyConfig.useIsStepCompleted(tmp5);
  const tmp8 = sharedValue(sharedValue1.useState(sharedValue1.useCallback(() => {
    const rect = tmp3.get();
    const diff = tmp2.get().width - rect.right - outer1_10;
    return { x: diff - tmp3(point[6]).space.PX_16, y: rect.top + tmp3(point[6]).space.PX_16 };
  }, items)), 2);
  point = tmp8[0];
  let obj = require(point[7]);
  sharedValue = obj.useSharedValue(point.x);
  let obj1 = require(point[7]);
  sharedValue1 = obj1.useSharedValue(point.y);
  const items1 = [, , , ];
  ({ x: arr2[0], y: arr2[1] } = point);
  items1[2] = sharedValue;
  items1[3] = sharedValue1;
  const effect = sharedValue1.useEffect(() => {
    const result = sharedValue.set(point.x);
    const result1 = sharedValue1.set(point.y);
  }, items1);
  if (!tmp4) {
    return null;
  } else {
    obj = {};
    obj = { x: sharedValue, y: sharedValue1 };
    const items2 = [callback(importDefault(point[16]), obj), ];
    obj1 = { x: sharedValue, y: sharedValue1, contentWidth: c10, contentHeight: c10, dragBoundsPadding: importDefault(point[6]).space.PX_4, onChangePosition: tmp8[1] };
    let obj2 = { style: tmp.widget, accessibilityRole: "button", onPress: tmp12, activeOpacity: 0.5 };
    const obj3 = { variant: "text-xs/semibold", color: "text-overlay-light", style: tmp.stepText };
    let str2 = "Uploading...";
    if (!tmp6) {
      const _HermesInternal = HermesInternal;
      str2 = "Step " + tmp5 + 1;
    }
    obj3.children = str2;
    const items3 = [callback(require(point[18]).Text, obj3), ];
    if (tmp6) {
      const obj4 = {
        loading: true,
        text: "",
        onPress() {

            }
      };
      let tmp26Result = tmp26(require(point[19]).Button, obj4);
    } else {
      const obj5 = {};
      if (isStepCompleted) {
        obj5.style = tmp.doneButton;
        obj5.children = callback(require(point[20]).CheckmarkLargeIcon, { size: "md", color: "status-positive" });
        let tmp31 = obj5;
      } else {
        obj5.style = tmp.stopButton;
        obj5.children = callback(require(point[21]).StopIcon, { size: "md", color: "text-feedback-critical" });
        tmp31 = obj5;
      }
      tmp26Result = tmp26(View, tmp31);
      const tmp27 = View;
    }
    items3[1] = tmp26Result;
    obj2.children = items3;
    obj2 = closure_8(require(point[17]).PressableOpacity, obj2);
    obj1.children = obj2;
    obj1 = callback(DraggableContainer, obj1);
    items2[1] = obj1;
    obj.children = items2;
    closure_8(closure_9, obj);
    const tmp13 = closure_8;
    const tmp14 = closure_9;
    const tmp18 = callback;
    const tmp19 = DraggableContainer;
    const tmp22 = closure_8;
    const tmp24 = callback;
  }
}
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let c10 = 100;
_createForOfIteratorHelperLoose = { widgetContainer: { position: "absolute" } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, justifyContent: "center", alignItems: "center", height: 100, width: 100, gap: require("_createForOfIteratorHelperLoose").space.PX_8, padding: require("_createForOfIteratorHelperLoose").space.PX_8, borderRadius: require("_createForOfIteratorHelperLoose").radii.xl };
const merged = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_MOBILE_NAVIGATOR_X);
_createForOfIteratorHelperLoose.widget = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.stepText = { textAlign: "center", maxWidth: 68 };
_createForOfIteratorHelperLoose.stopButton = { padding: require("_createForOfIteratorHelperLoose").space.PX_8, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.WHITE, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
let obj1 = { padding: require("_createForOfIteratorHelperLoose").space.PX_8, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.WHITE, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose.doneButton = { padding: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_12 = { code: "function ScreenRecordingPipTsx1(x,y){const{windowDimensionsSharedValue,insetsSharedValue,clamp,dragBoundsPadding,contentWidth,contentHeight}=this.__closure;const{width:windowWidth,height:windowHeight}=windowDimensionsSharedValue.get();const insets=insetsSharedValue.get();return{x:clamp(x,insets.left+dragBoundsPadding,windowWidth-insets.right-contentWidth-dragBoundsPadding),y:clamp(y,insets.top+dragBoundsPadding,windowHeight-insets.bottom-contentHeight-dragBoundsPadding)};}" };
let closure_13 = { code: "function ScreenRecordingPipTsx2(){const{runOnJS,onChangePosition,x,y}=this.__closure;runOnJS(onChangePosition)({x:x.get(),y:y.get()});}" };
let closure_14 = { code: "function ScreenRecordingPipTsx3(event){const{getClampedPosition,originalX,originalY,x,y}=this.__closure;const{x:xClamped,y:yClamped}=getClampedPosition(originalX.get()+event.translationX,originalY.get()+event.translationY);x.set(xClamped);y.set(yClamped);}" };
let closure_15 = { code: "function ScreenRecordingPipTsx4(){const{originalX,x,originalY,y}=this.__closure;originalX.set(x.get());originalY.set(y.get());}" };
let closure_16 = { code: "function ScreenRecordingPipTsx5(){const{getClampedPosition,x,y,withSpring,springUnclamped}=this.__closure;const{x:translateX,y:translateY}=getClampedPosition(x.get(),y.get());return{transform:[{translateX:withSpring(translateX,springUnclamped)},{translateY:withSpring(translateY,springUnclamped)}]};}" };
let obj2 = { padding: require("_createForOfIteratorHelperLoose").space.PX_8 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/screen_recording/native/ScreenRecordingPip.tsx");

export default function ScreenRecordingPipConnected() {
  const tmp = useScreenRecordingStore((currentSurveyConfig) => currentSurveyConfig.currentSurveyConfig);
  let tmp2 = null;
  if (null != tmp) {
    const obj = { surveyConfig: tmp };
    tmp2 = callback(ScreenRecordingPip, obj);
  }
  return tmp2;
};
