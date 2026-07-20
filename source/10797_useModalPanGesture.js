// Module ID: 10797
// Function ID: 83865
// Name: useModalPanGesture
// Dependencies: [0, 0, 0, 0, 0]
// Exports: default

// Module 10797 (useModalPanGesture)
import result from "result";

let closure_3 = { code: "function useModalPanGestureTsx1({velocityY:velocityY}){const{translateY,thresholdTranslate,thresholdVelocity,withSpring,height,runOnJS,ModalActionCreators,onClose,onEnd}=this.__closure;const config={damping:15,mass:1,stiffness:250,overshootClamping:true,restSpeedThreshold:0.001,restDisplacementThreshold:0.001,velocity:velocityY};if(translateY.get()>=thresholdTranslate||velocityY>=thresholdVelocity){translateY.set(withSpring(height,config,'respect-motion-settings',function(){runOnJS(ModalActionCreators.pop)();}));if(onClose!=null){runOnJS(onClose)();}}else{translateY.set(withSpring(0,config));}if(onEnd!=null){runOnJS(onEnd)();}}" };
let closure_4 = { code: "function useModalPanGestureTsx2({translationY:translationY}){const{translateY,interpolate,start,maxTranslate,Extrapolate}=this.__closure;translateY.set(interpolate(start.get().y+translationY,[0,maxTranslate],[0,maxTranslate],Extrapolate.CLAMP));}" };
let closure_5 = { code: "function useModalPanGestureTsx3(){const{onStart,runOnJS,start,translateY}=this.__closure;if(onStart!=null){runOnJS(onStart)();}start.set({y:translateY.get()});}" };
let closure_6 = { code: "function useModalPanGestureTsx4(){const{runOnJS,ModalActionCreators}=this.__closure;runOnJS(ModalActionCreators.pop)();}" };
result = result.fileFinishedImporting("modules/video_calls/native/components/useModalPanGesture.tsx");

export default function useModalPanGesture(thresholdVelocity) {
  let num = thresholdVelocity.thresholdVelocity;
  if (num === undefined) {
    num = 500;
  }
  const require = num;
  const maxTranslate = thresholdVelocity.maxTranslate;
  const importDefault = maxTranslate;
  const thresholdTranslate = thresholdVelocity.thresholdTranslate;
  const dependencyMap = thresholdTranslate;
  const height = thresholdVelocity.height;
  let closure_3 = height;
  const translateY = thresholdVelocity.translateY;
  let closure_4 = translateY;
  const onStart = thresholdVelocity.onStart;
  let closure_5 = onStart;
  const onEnd = thresholdVelocity.onEnd;
  let closure_6 = onEnd;
  const onClose = thresholdVelocity.onClose;
  let sharedValue;
  let obj = require(dependencyMap[0]);
  sharedValue = obj.useSharedValue({ y: 0 });
  const Gesture = require(dependencyMap[1]).Gesture;
  const PanResult = Gesture.Pan();
  class J {
    constructor() {
      if (null != onStart) {
        tmp = closure_0;
        tmp2 = thresholdTranslate;
        num = 0;
        obj = closure_0(thresholdTranslate[0]);
        tmp3 = onStart;
        tmp4 = obj.runOnJS(onStart)();
      }
      obj = { y: translateY.get() };
      result = closure_8.set(obj);
      return;
    }
  }
  obj = { onStart, runOnJS: require(dependencyMap[0]).runOnJS, start: sharedValue, translateY };
  J.__closure = obj;
  J.__workletHash = 15847989720945;
  J.__initData = closure_5;
  const enabledResult = Gesture.Pan().enabled(thresholdVelocity.gestureEnabled);
  const fn = function x(translationY) {
    const sum = sharedValue.get().y + translationY.translationY;
    const items = [0.229, maxTranslate];
    const items1 = [0.229, maxTranslate];
    const result = translateY.set(num(thresholdTranslate[0]).interpolate(sum, items, items1, num(thresholdTranslate[0]).Extrapolate.CLAMP));
  };
  obj = { translateY, interpolate: require(dependencyMap[0]).interpolate, start: sharedValue, maxTranslate, Extrapolate: require(dependencyMap[0]).Extrapolate };
  fn.__closure = obj;
  fn.__workletHash = 6809176231356;
  fn.__initData = closure_4;
  const onStartResult = Gesture.Pan().enabled(thresholdVelocity.gestureEnabled).onStart(J);
  class O {
    constructor(arg0) {
      velocityY = thresholdVelocity.velocityY;
      obj = { velocity: velocityY };
      if (translateY.get() < thresholdTranslate) {
        tmp = closure_0;
        if (velocityY < closure_0) {
          tmp2 = translateY;
          tmp3 = closure_0;
          tmp4 = thresholdTranslate;
          num = 2;
          obj2 = closure_0(thresholdTranslate[2]);
          num2 = 0;
          result = translateY.set(obj2.withSpring(0, obj));
        }
        tmp11 = onEnd;
        tmp12 = null;
        if (null != onEnd) {
          tmp13 = closure_0;
          tmp14 = thresholdTranslate;
          num3 = 0;
          obj6 = closure_0(thresholdTranslate[0]);
          tmp15 = onEnd;
          tmp16 = obj6.runOnJS(onEnd)();
        }
        return;
      }
      obj3 = closure_0(thresholdTranslate[2]);
      fn = function n() {
        callback(closure_2[0]).runOnJS(callback2(closure_2[3]).pop)();
      };
      obj = { runOnJS: closure_0(thresholdTranslate[0]).runOnJS, ModalActionCreators: maxTranslate(thresholdTranslate[3]) };
      fn.__closure = obj;
      fn.__workletHash = 14223008059411;
      fn.__initData = onEnd;
      result1 = translateY.set(obj3.withSpring(height, obj, "respect-motion-settings", fn));
      if (null != onClose) {
        tmp7 = closure_0;
        tmp8 = thresholdTranslate;
        obj5 = closure_0(thresholdTranslate[0]);
        tmp9 = onClose;
        tmp10 = obj5.runOnJS(onClose)();
      }
      return;
    }
  }
  const obj1 = { translateY, thresholdTranslate, thresholdVelocity: num, withSpring: require(dependencyMap[2]).withSpring, height, runOnJS: require(dependencyMap[0]).runOnJS, ModalActionCreators: importDefault(dependencyMap[3]), onClose, onEnd };
  O.__closure = obj1;
  O.__workletHash = 16881029664873;
  O.__initData = closure_3;
  const onUpdateResult = Gesture.Pan().enabled(thresholdVelocity.gestureEnabled).onStart(J).onUpdate(fn);
  const onEndResult = Gesture.Pan().enabled(thresholdVelocity.gestureEnabled).onStart(J).onUpdate(fn).onEnd(O);
  const items = [-5, 15];
  return Gesture.Pan().enabled(thresholdVelocity.gestureEnabled).onStart(J).onUpdate(fn).onEnd(O).failOffsetY(-0.01).activeOffsetY(items);
};
