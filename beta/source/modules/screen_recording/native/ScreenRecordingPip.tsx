// Module ID: 15555
// Function ID: 15556
// Name: ScreenRecordingPip
// Dependencies: [32, 19, 17, 15556, 21, 4836, 576, 4566, 10895, 11515, 6073, 5280, 5284, 4800, 15560, 1981, 15550, 5435, 4832, 5281, 4783, 15561, 2]
// Exports: default

// Module 15555 (ScreenRecordingPip)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import spring from "spring" /* 5280 */;
import springPresets from "springPresets" /* 5284 */;
import ScreenRecordingStore from "ScreenRecordingStore" /* 15556 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let size;
function DraggableContainer(arg0) {
  let closure_0;
  let closure_1;
  let fn;
  let fn2;
  let fn3;
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
  let getClampedPosition;
  const children = arg0.children;
  const tmp = closure_11();
  let obj = require("ReanimatedRexport");
  const sharedValue = obj.useSharedValue(x.get());
  let obj2 = require("ReanimatedRexport");
  const sharedValue1 = obj2.useSharedValue(y.get());
  const tmp4 = require("useSafeAreaInsetsSharedValue")();
  let closure_8 = tmp4;
  const tmp5 = require("useWindowDimensionsSharedValue")();
  let closure_9 = tmp5;
  class C {
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
  C.__closure = obj3;
  C.__workletHash = 5314404716267;
  C.__initData = __initData;
  let items = [contentHeight, contentWidth, num, tmp4, tmp5];
  getClampedPosition = num.useCallback(C, items);
  let obj4 = require("LegacyBaseButton");
  let obj5 = { onActivate: fn, onUpdate: fn2, onDeactivate: fn3 };
  fn = function b() {
    const result = sharedValue.set(closure_0.get());
    const result1 = sharedValue1.set(closure_1.get());
  };
  fn.__closure = { originalX: sharedValue, x, originalY: sharedValue1, y };
  fn.__workletHash = 13009482509687;
  fn.__initData = __initData2;
  fn2 = function v(translationX) {
    const sum = sharedValue.get() + translationX.translationX;
    const point = callback(sum, sharedValue1.get() + translationX.translationY);
    const y = point.y;
    const result = closure_0.set(point.x);
    const result1 = closure_1.set(y);
  };
  fn2.__closure = { getClampedPosition, originalX: sharedValue, originalY: sharedValue1, x, y };
  fn2.__workletHash = 3428194988690;
  fn2.__initData = __initData3;
  fn3 = function f() {
    const point = { x: closure_0.get(), y: closure_1.get() };
    const obj = ReanimatedRexport;
    const runOnJSResult = obj.runOnJS(onChangePosition);
    runOnJSResult(point);
  };
  let point = { runOnJS: require("ReanimatedRexport").runOnJS, onChangePosition, x, y };
  fn3.__closure = point;
  fn3.__workletHash = 15302036225057;
  fn3.__initData = __initData4;
  const panGesture = obj4.usePanGesture(obj5);
  const obj7 = require("ReanimatedRexport");
  class X {
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
  X.__closure = point1;
  X.__workletHash = 5273315246744;
  X.__initData = __initData5;
  const animatedStyle = obj7.useAnimatedStyle(X);
  const obj6 = { gesture: panGesture, children: sharedValue1(require("ReanimatedRexport").View, obj8) };
  const GestureDetector = require("LegacyBaseButton").GestureDetector;
  obj8 = { style: items1, children };
  items1 = [tmp.widgetContainer, animatedStyle];
  return sharedValue1(GestureDetector, obj6);
}
function ScreenRecordingPip(surveyConfig) {
  let PressableOpacity;
  let closure_0;
  let closure_1;
  let items3;
  let obj3;
  let str;
  surveyConfig = surveyConfig.surveyConfig;
  importDefault = undefined;
  let point;
  let sharedValue;
  let sharedValue1;
  const tmp = closure_11();
  const tmp4 = require("useWindowDimensionsSharedValue")();
  _require = tmp4;
  const tmp5 = require("useSafeAreaInsetsSharedValue")();
  importDefault = tmp5;
  const tmp6 = useScreenRecordingStore((isRecording) => isRecording.isRecording);
  const tmp7 = useScreenRecordingStore((currentStep) => currentStep.currentStep);
  const tmp8 = useScreenRecordingStore((isUploading) => isUploading.isUploading);
  const items = [tmp4, tmp5];
  const isStepCompleted = surveyConfig.useIsStepCompleted(tmp7);
  const tmp10 = sharedValue(sharedValue1.useState(sharedValue1.useCallback(() => {
    let diff;
    const width = closure_0.get().width;
    const rect = closure_1.get();
    point = { x: diff - nativeDefault.space.PX_16, y: rect.top + nativeDefault.space.PX_16 };
    diff = width - rect.right - c10;
    return point;
  }, items)), 2);
  point = tmp10[0];
  const tmp11 = tmp10[1];
  let obj = require("ReanimatedRexport");
  sharedValue = obj.useSharedValue(point.x);
  const obj2 = require("ReanimatedRexport");
  sharedValue1 = obj2.useSharedValue(point.y);
  const items1 = [, , , ];
  ({ x: arr2[0], y: arr2[1] } = point);
  items1[2] = sharedValue;
  items1[3] = sharedValue1;
  const effect = sharedValue1.useEffect(() => {
    const result = sharedValue.set(point.x);
    const result1 = sharedValue1.set(point.y);
  }, items1);
  let tmp18Result = null;
  if (tmp6) {
    let tmp20Result;
    const point1 = { x: sharedValue, y: sharedValue1 };
    const items2 = [closure_7(require("VEVOO"), point1), ];
    const point2 = { x: sharedValue, y: sharedValue1, contentWidth: v100, contentHeight: v100, dragBoundsPadding: require("native").space.PX_4, onChangePosition: tmp11, children: closure_8(PressableOpacity, obj3) };
    obj3 = { style: tmp.widget, accessibilityRole: "button", onPress: tmp16, activeOpacity: 0.5, children: items3 };
    PressableOpacity = tmp12(tmp3[17]).PressableOpacity;
    const obj4 = { variant: "text-xs/semibold", color: "text-overlay-light", style: tmp.stepText, children: str };
    str = "Uploading...";
    const Text = tmp12(tmp3[18]).Text;
    const tmp19 = closure_9;
    const tmp21 = DraggableContainer;
    if (!tmp8) {
      const _HermesInternal = HermesInternal;
      str = "Step " + tmp7 + 1;
    }
    items3 = [closure_7(Text, obj4), ];
    if (tmp8) {
      const obj5 = {
        loading: true,
        text: "",
        onPress() {

            }
      };
      tmp20Result = tmp20(tmp12(tmp3[19]).Button, obj5);
    } else {
      let tmp25;
      const obj6 = { style: null, children: null };
      const tmp24 = View;
      if (isStepCompleted) {
        obj6.style = tmp.doneButton;
        obj6.children = closure_7(require("CheckmarkLargeIcon").CheckmarkLargeIcon, { size: "md", color: "status-positive" });
        tmp25 = obj6;
      } else {
        obj6.style = tmp.stopButton;
        obj6.children = closure_7(require("StopIcon").StopIcon, { size: "md", color: "text-feedback-critical" });
        tmp25 = obj6;
      }
      tmp20Result = tmp20(tmp24, tmp25);
    }
    const obj7 = { children: items2 };
    items3[1] = tmp20Result;
    items2[1] = closure_7(tmp21, point2);
    tmp18Result = tmp18(tmp19, obj7);
  }
  return tmp18Result;
}
const View = react_native.View;
const useScreenRecordingStore = ScreenRecordingStore.useScreenRecordingStore;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let c10 = 100;
let createStyles = createStyles_mod;
let obj = { widgetContainer: { position: "absolute" }, widget: size, stepText: { textAlign: "center", maxWidth: 68 }, stopButton: obj2, doneButton: obj3 };
size = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, justifyContent: "center", alignItems: "center", height: 100, width: 100, gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.xl };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_MOBILE_NAVIGATOR_X);
obj2 = { padding: nativeDefault.space.PX_8, borderWidth: 1, borderColor: nativeDefault.colors.WHITE, borderRadius: nativeDefault.radii.round };
obj3 = { padding: nativeDefault.space.PX_8 };
let closure_11 = createStyles(obj);
const __initData = { code: "function ScreenRecordingPipTsx1(x,y){const{windowDimensionsSharedValue,insetsSharedValue,clamp,dragBoundsPadding,contentWidth,contentHeight}=this.__closure;const{width:windowWidth,height:windowHeight}=windowDimensionsSharedValue.get();const insets=insetsSharedValue.get();return{x:clamp(x,insets.left+dragBoundsPadding,windowWidth-insets.right-contentWidth-dragBoundsPadding),y:clamp(y,insets.top+dragBoundsPadding,windowHeight-insets.bottom-contentHeight-dragBoundsPadding)};}" };
const __initData2 = { code: "function ScreenRecordingPipTsx2(){const{originalX,x,originalY,y}=this.__closure;originalX.set(x.get());originalY.set(y.get());}" };
const __initData3 = { code: "function ScreenRecordingPipTsx3(event){const{getClampedPosition,originalX,originalY,x,y}=this.__closure;const{x:xClamped,y:yClamped}=getClampedPosition(originalX.get()+event.translationX,originalY.get()+event.translationY);x.set(xClamped);y.set(yClamped);}" };
const __initData4 = { code: "function ScreenRecordingPipTsx4(){const{runOnJS,onChangePosition,x,y}=this.__closure;runOnJS(onChangePosition)({x:x.get(),y:y.get()});}" };
const __initData5 = { code: "function ScreenRecordingPipTsx5(){const{getClampedPosition,x,y,withSpring,springUnclamped}=this.__closure;const{x:translateX,y:translateY}=getClampedPosition(x.get(),y.get());return{transform:[{translateX:withSpring(translateX,springUnclamped)},{translateY:withSpring(translateY,springUnclamped)}]};}" };
size = size_mod;
let result = size.fileFinishedImporting("modules/screen_recording/native/ScreenRecordingPip.tsx");

export default function ScreenRecordingPipConnected() {
  const tmp = useScreenRecordingStore((currentSurveyConfig) => currentSurveyConfig.currentSurveyConfig);
  let tmp2 = null;
  if (null != tmp) {
    const obj = { surveyConfig: tmp };
    tmp2 = metroImportDefault(ScreenRecordingPip, obj);
  }
  return tmp2;
};
