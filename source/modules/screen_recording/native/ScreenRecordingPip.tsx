// Module ID: 14583
// Function ID: 109910
// Name: DraggableContainer
// Dependencies: []
// Exports: default

// Module 14583 (DraggableContainer)
function DraggableContainer(children) {
  const x = children.x;
  const arg1 = x;
  const y = children.y;
  const importDefault = y;
  const contentWidth = children.contentWidth;
  const dependencyMap = contentWidth;
  const contentHeight = children.contentHeight;
  let closure_3 = contentHeight;
  let num = children.dragBoundsPadding;
  if (num === undefined) {
    num = 0;
  }
  const React = num;
  const onChangePosition = children.onChangePosition;
  const View = onChangePosition;
  let useScreenRecordingStore;
  let sharedValue1;
  let tmp4;
  let tmp5;
  let closure_10;
  let obj = arg1(dependencyMap[7]);
  const sharedValue = obj.useSharedValue(x.get());
  useScreenRecordingStore = sharedValue;
  let obj1 = arg1(dependencyMap[7]);
  sharedValue1 = obj1.useSharedValue(y.get());
  tmp4 = importDefault(dependencyMap[8])();
  tmp5 = importDefault(dependencyMap[9])();
  class C {
    constructor(arg0, arg1) {
      value = closure_9.get();
      ({ width, height } = value);
      rect = closure_8.get();
      obj = {};
      obj2 = x(contentWidth[7]);
      obj.x = obj2.clamp(children, rect.left + closure_4, width - rect.right - contentWidth - closure_4);
      obj3 = x(contentWidth[7]);
      obj.y = obj3.clamp(arg1, rect.top + closure_4, height - rect.bottom - contentHeight - closure_4);
      return obj;
    }
  }
  obj = { windowDimensionsSharedValue: tmp5, insetsSharedValue: tmp4, clamp: arg1(dependencyMap[7]).clamp, dragBoundsPadding: num, contentWidth, contentHeight };
  C.__closure = obj;
  C.__workletHash = 5314404716267;
  C.__initData = closure_12;
  const items = [contentHeight, contentWidth, num, tmp4, tmp5];
  const callback = React.useCallback(C, items);
  closure_10 = callback;
  const Gesture = arg1(dependencyMap[10]).Gesture;
  const tmp = callback3();
  class X {
    constructor() {
      result = closure_6.set(x.get());
      result1 = closure_7.set(y.get());
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
    const result = x.set(point.x);
    const result1 = y.set(point.y);
  };
  fn.__closure = { getClampedPosition: callback, originalX: sharedValue, originalY: sharedValue1, x, y };
  fn.__workletHash = 3428194988690;
  fn.__initData = closure_14;
  const onStartResult = Gesture.Pan().onStart(X);
  const fn2 = function f() {
    let obj = x(contentWidth[7]);
    obj = { x: x.get(), y: y.get() };
    obj.runOnJS(onChangePosition)(obj);
  };
  obj = { runOnJS: arg1(dependencyMap[7]).runOnJS, onChangePosition, x, y };
  fn2.__closure = obj;
  fn2.__workletHash = 144401388839;
  fn2.__initData = closure_13;
  const onUpdateResult = Gesture.Pan().onStart(X).onUpdate(fn);
  const onEndResult = Gesture.Pan().onStart(X).onUpdate(fn).onEnd(fn2);
  const fn3 = function b() {
    let x;
    let y;
    const value = x.get();
    let obj = {};
    obj = {};
    ({ x, y } = callback(value, y.get()));
    const tmp2 = callback(value, y.get());
    obj.translateX = x(contentWidth[11]).withSpring(x, x(contentWidth[12]).springUnclamped);
    const items = [obj, ];
    obj = {};
    const obj3 = x(contentWidth[11]);
    obj.translateY = x(contentWidth[11]).withSpring(y, x(contentWidth[12]).springUnclamped);
    items[1] = obj;
    obj.transform = items;
    return obj;
  };
  obj1 = { getClampedPosition: callback, x, y, withSpring: arg1(dependencyMap[11]).withSpring, springUnclamped: arg1(dependencyMap[12]).springUnclamped };
  fn3.__closure = obj1;
  fn3.__workletHash = 5273315246744;
  fn3.__initData = closure_16;
  const animatedStyle = arg1(dependencyMap[7]).useAnimatedStyle(fn3);
  const obj2 = { gesture: onEndResult };
  const items1 = [tmp.widgetContainer, animatedStyle];
  obj2.children = sharedValue1(importDefault(dependencyMap[7]).View, { style: items1, children: children.children });
  return sharedValue1(arg1(dependencyMap[10]).GestureDetector, obj2);
}
function ScreenRecordingPip(surveyConfig) {
  surveyConfig = surveyConfig.surveyConfig;
  const tmp = callback3();
  const tmp2 = importDefault(dependencyMap[9])();
  const arg1 = tmp2;
  const tmp3 = importDefault(dependencyMap[8])();
  const importDefault = tmp3;
  const tmp5 = useScreenRecordingStore((currentStep) => currentStep.currentStep);
  const tmp6 = useScreenRecordingStore((isUploading) => isUploading.isUploading);
  const items = [tmp2, tmp3];
  const isStepCompleted = surveyConfig.useIsStepCompleted(tmp5);
  const tmp8 = callback(React.useState(React.useCallback(() => {
    const rect = tmp3.get();
    const diff = tmp2.get().width - rect.right - closure_10;
    return { x: diff - tmp3(point[6]).space.PX_16, y: rect.top + tmp3(point[6]).space.PX_16 };
  }, items)), 2);
  const point = tmp8[0];
  const dependencyMap = point;
  let obj = arg1(dependencyMap[7]);
  const sharedValue = obj.useSharedValue(point.x);
  const callback = sharedValue;
  let obj1 = arg1(dependencyMap[7]);
  const sharedValue1 = obj1.useSharedValue(point.y);
  const React = sharedValue1;
  const items1 = [, , , ];
  ({ x: arr2[0], y: arr2[1] } = point);
  items1[2] = sharedValue;
  items1[3] = sharedValue1;
  const effect = React.useEffect(() => {
    const result = sharedValue.set(point.x);
    const result1 = sharedValue1.set(point.y);
  }, items1);
  if (!tmp4) {
    return null;
  } else {
    obj = {};
    obj = { x: sharedValue, y: sharedValue1 };
    const items2 = [callback2(importDefault(dependencyMap[16]), obj), ];
    obj1 = { x: sharedValue, y: sharedValue1, contentWidth: closure_10, contentHeight: closure_10, dragBoundsPadding: importDefault(dependencyMap[6]).space.PX_4, onChangePosition: tmp8[1] };
    let obj2 = { style: tmp.widget, accessibilityRole: "button", onPress: tmp12, activeOpacity: 0.5 };
    const obj3 = { style: tmp.stepText };
    let str2 = "Uploading...";
    if (!tmp6) {
      const _HermesInternal = HermesInternal;
      str2 = "Step " + tmp5 + 1;
    }
    obj3.children = str2;
    const items3 = [callback2(arg1(dependencyMap[18]).Text, obj3), ];
    if (tmp6) {
      const obj4 = {
        onPress() {

            }
      };
      let tmp26Result = tmp26(arg1(dependencyMap[19]).Button, obj4);
    } else {
      const obj5 = {};
      if (isStepCompleted) {
        obj5.style = tmp.doneButton;
        obj5.children = callback2(arg1(dependencyMap[20]).CheckmarkLargeIcon, { flexDirection: "", alignItems: 0 });
        let tmp31 = obj5;
      } else {
        obj5.style = tmp.stopButton;
        obj5.children = callback2(arg1(dependencyMap[21]).StopIcon, { flexDirection: null, alignItems: false });
        tmp31 = obj5;
      }
      tmp26Result = tmp26(View, tmp31);
      const tmp27 = View;
    }
    items3[1] = tmp26Result;
    obj2.children = items3;
    obj2 = closure_8(arg1(dependencyMap[17]).PressableOpacity, obj2);
    obj1.children = obj2;
    obj1 = callback2(DraggableContainer, obj1);
    items2[1] = obj1;
    obj.children = items2;
    closure_8(closure_9, obj);
    const tmp13 = closure_8;
    const tmp14 = closure_9;
    const tmp18 = callback2;
    const tmp19 = DraggableContainer;
    const tmp22 = closure_8;
    const tmp24 = callback2;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const useScreenRecordingStore = arg1(dependencyMap[3]).useScreenRecordingStore;
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = arg1(dependencyMap[4]));
let closure_10 = 100;
let obj = arg1(dependencyMap[5]);
obj = { widgetContainer: { position: "absolute" } };
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BRAND, gap: importDefault(dependencyMap[6]).space.PX_8, padding: importDefault(dependencyMap[6]).space.PX_8, borderRadius: importDefault(dependencyMap[6]).radii.xl };
const merged = Object.assign(importDefault(dependencyMap[6]).shadows.SHADOW_MOBILE_NAVIGATOR_X);
obj.widget = obj;
obj.stepText = {};
const tmp2 = arg1(dependencyMap[4]);
obj.stopButton = { padding: importDefault(dependencyMap[6]).space.PX_8, borderWidth: 1, borderColor: importDefault(dependencyMap[6]).colors.WHITE, borderRadius: importDefault(dependencyMap[6]).radii.round };
const obj1 = { padding: importDefault(dependencyMap[6]).space.PX_8, borderWidth: 1, borderColor: importDefault(dependencyMap[6]).colors.WHITE, borderRadius: importDefault(dependencyMap[6]).radii.round };
obj.doneButton = { padding: importDefault(dependencyMap[6]).space.PX_8 };
let closure_11 = obj.createStyles(obj);
let closure_12 = { code: "function ScreenRecordingPipTsx1(x,y){const{windowDimensionsSharedValue,insetsSharedValue,clamp,dragBoundsPadding,contentWidth,contentHeight}=this.__closure;const{width:windowWidth,height:windowHeight}=windowDimensionsSharedValue.get();const insets=insetsSharedValue.get();return{x:clamp(x,insets.left+dragBoundsPadding,windowWidth-insets.right-contentWidth-dragBoundsPadding),y:clamp(y,insets.top+dragBoundsPadding,windowHeight-insets.bottom-contentHeight-dragBoundsPadding)};}" };
let closure_13 = { code: "function ScreenRecordingPipTsx2(){const{runOnJS,onChangePosition,x,y}=this.__closure;runOnJS(onChangePosition)({x:x.get(),y:y.get()});}" };
let closure_14 = { code: "function ScreenRecordingPipTsx3(event){const{getClampedPosition,originalX,originalY,x,y}=this.__closure;const{x:xClamped,y:yClamped}=getClampedPosition(originalX.get()+event.translationX,originalY.get()+event.translationY);x.set(xClamped);y.set(yClamped);}" };
let closure_15 = { code: "function ScreenRecordingPipTsx4(){const{originalX,x,originalY,y}=this.__closure;originalX.set(x.get());originalY.set(y.get());}" };
let closure_16 = { code: "function ScreenRecordingPipTsx5(){const{getClampedPosition,x,y,withSpring,springUnclamped}=this.__closure;const{x:translateX,y:translateY}=getClampedPosition(x.get(),y.get());return{transform:[{translateX:withSpring(translateX,springUnclamped)},{translateY:withSpring(translateY,springUnclamped)}]};}" };
const obj2 = { padding: importDefault(dependencyMap[6]).space.PX_8 };
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/screen_recording/native/ScreenRecordingPip.tsx");

export default function ScreenRecordingPipConnected() {
  const tmp = useScreenRecordingStore((currentSurveyConfig) => currentSurveyConfig.currentSurveyConfig);
  let tmp2 = null;
  if (null != tmp) {
    const obj = { surveyConfig: tmp };
    tmp2 = callback2(ScreenRecordingPip, obj);
  }
  return tmp2;
};
