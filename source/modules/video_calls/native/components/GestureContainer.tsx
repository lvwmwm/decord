// Module ID: 10751
// Function ID: 83530
// Name: GestureContainer
// Dependencies: [31, 27, 10210, 10529, 33, 4130, 689, 1450, 3991, 5217, 4337, 4131, 1273, 2]
// Exports: default

// Module 10751 (GestureContainer)
import "result";
import { View } from "get ActivityIndicator";
import { useChannelCallStore } from "resetFocusTimer";
import PIP_GESTURE_ACTIVE_OFFSET from "PIP_GESTURE_ACTIVE_OFFSET";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ PAN_GESTURE_FAIL_OFFSET_Y: closure_5, SWIPE_TO_CHAT_ACTIVE_OFFSET: closure_6 } = PIP_GESTURE_ACTIVE_OFFSET);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BLACK };
_createForOfIteratorHelperLoose.background = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_9 = { code: "function GestureContainerTsx1({velocityY:velocityY}){const{position,THRESHOLD_VELOCITY,runOnJS,ModalActionCreators,withTiming,DECELERATED_EASING}=this.__closure;if(position.get()===1||velocityY>THRESHOLD_VELOCITY){runOnJS(ModalActionCreators.pop)();}else{position.set(withTiming(0,{duration:300,easing:DECELERATED_EASING}));}}" };
let closure_10 = { code: "function GestureContainerTsx2({translationY:translationY}){const{THRESHOLD_TRANSLATE,position}=this.__closure;const boundedGestureY=Math.max(Math.min(translationY,THRESHOLD_TRANSLATE),0)/THRESHOLD_TRANSLATE;const easeOutCubic=1-Math.pow(1-boundedGestureY,3);position.set(easeOutCubic);}" };
let closure_11 = { code: "function GestureContainerTsx3(){const{interpolate,position,height}=this.__closure;return{flex:1,transform:[{translateY:interpolate(position.get(),[0,1],[0,height*0.06])},{scale:interpolate(position.get(),[0,1],[1,0.9])}]};}" };
let result = require("resetFocusTimer").fileFinishedImporting("modules/video_calls/native/components/GestureContainer.tsx");

export default function GestureContainer(children) {
  const tmp = _createForOfIteratorHelperLoose();
  const height = sharedValue(1450)().height;
  let obj = height(3991);
  sharedValue = obj.useSharedValue(0);
  const Gesture = height(5217).Gesture;
  const tmp2 = useChannelCallStore((isGestureEnabled) => isGestureEnabled.isGestureEnabled);
  const PanResult = Gesture.Pan();
  class S {
    constructor(arg0) {
      result = closure_1.set(1 - Math.pow(1 - Math.max(Math.min(children.translationY, 200), 0) / 200, 3));
      return;
    }
  }
  S.__closure = { THRESHOLD_TRANSLATE: 200, position: sharedValue };
  S.__workletHash = 9476726087456;
  S.__initData = closure_10;
  const enabledResult = Gesture.Pan().enabled(tmp2);
  const fn = function h(velocityY) {
    if (1 !== sharedValue.get()) {
      if (velocityY.velocityY <= 500) {
        let obj = height(outer1_2[11]);
        obj = { duration: 300, easing: height(outer1_2[12]).DECELERATED_EASING };
        const result = sharedValue.set(obj.withTiming(0, obj));
      }
    }
    height(outer1_2[8]).runOnJS(sharedValue(outer1_2[10]).pop)();
  };
  obj = { position: sharedValue, THRESHOLD_VELOCITY: 500, runOnJS: height(3991).runOnJS, ModalActionCreators: sharedValue(4337), withTiming: height(4131).withTiming, DECELERATED_EASING: height(1273).DECELERATED_EASING };
  fn.__closure = obj;
  fn.__workletHash = 10736744030668;
  fn.__initData = closure_9;
  const onUpdateResult = Gesture.Pan().enabled(tmp2).onUpdate(S);
  let items = [-closure_5, closure_5];
  const onEndResult = Gesture.Pan().enabled(tmp2).onUpdate(S).onEnd(fn);
  let items1 = [-closure_6, closure_6];
  const activeOffsetYResult = Gesture.Pan().enabled(tmp2).onUpdate(S).onEnd(fn).activeOffsetY(items);
  const failOffsetXResult = Gesture.Pan().enabled(tmp2).onUpdate(S).onEnd(fn).activeOffsetY(items).failOffsetX(items1);
  const fn2 = function p() {
    let obj = { flex: 1 };
    obj = {};
    const items = [0, 0.06 * height];
    obj.translateY = height(outer1_2[8]).interpolate(sharedValue.get(), [0, 1], items);
    const items1 = [obj, ];
    obj = {};
    const obj3 = height(outer1_2[8]);
    obj.scale = height(outer1_2[8]).interpolate(sharedValue.get(), [0, 1], [1, 0.9]);
    items1[1] = obj;
    obj.transform = items1;
    return obj;
  };
  obj = { interpolate: height(3991).interpolate, position: sharedValue, height };
  fn2.__closure = obj;
  fn2.__workletHash = 16049033434372;
  fn2.__initData = closure_11;
  const obj1 = { style: tmp.background };
  const animatedStyle = height(3991).useAnimatedStyle(fn2);
  const obj2 = { gesture: failOffsetXResult, children: jsx(sharedValue(3991).View, { style: animatedStyle, children: children.children }) };
  obj1.children = jsx(height(5217).GestureDetector, { gesture: failOffsetXResult, children: jsx(sharedValue(3991).View, { style: animatedStyle, children: children.children }) });
  return <View style={tmp.background} />;
};
