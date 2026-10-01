// Module ID: 12442
// Function ID: 12443
// Name: useModalPanGesture
// Dependencies: [4566, 6073, 5280, 5039, 2]
// Exports: default

// Module 12442 (useModalPanGesture)
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import spring from "spring" /* 5280 */;
import size from "module_2" /* 2 */;

let obj1, obj5, obj6, set, set2, set2Result, tmp, tmp10, tmp12, tmp13, tmp14, tmp15, tmp2, tmp3, tmp4, tmp8, tmp9, velocityY;

let closure_3 = { code: "function useModalPanGestureTsx1({velocityY:velocityY}){const{translateY,thresholdTranslate,thresholdVelocity,withSpring,height,runOnJS,ModalActionCreators,onClose,onEnd}=this.__closure;const config={damping:15,mass:1,stiffness:250,overshootClamping:true,restSpeedThreshold:0.001,restDisplacementThreshold:0.001,velocity:velocityY};if(translateY.get()>=thresholdTranslate||velocityY>=thresholdVelocity){translateY.set(withSpring(height,config,'respect-motion-settings',function(){runOnJS(ModalActionCreators.pop)();}));if(onClose!=null){runOnJS(onClose)();}}else{translateY.set(withSpring(0,config));}if(onEnd!=null){runOnJS(onEnd)();}}" };
let closure_4 = { code: "function useModalPanGestureTsx2({translationY:translationY}){const{translateY,interpolate,start,maxTranslate,Extrapolate}=this.__closure;translateY.set(interpolate(start.get().y+translationY,[0,maxTranslate],[0,maxTranslate],Extrapolate.CLAMP));}" };
let closure_5 = { code: "function useModalPanGestureTsx3(){const{onStart,runOnJS,start,translateY}=this.__closure;if(onStart!=null){runOnJS(onStart)();}start.set({y:translateY.get()});}" };
const __initData = { code: "function useModalPanGestureTsx4(){const{runOnJS,ModalActionCreators}=this.__closure;runOnJS(ModalActionCreators.pop)();}" };
let result = size.fileFinishedImporting("modules/video_calls/native/components/useModalPanGesture.tsx");

export default function useModalPanGesture(thresholdVelocity) {
  let num = thresholdVelocity.thresholdVelocity;
  if (num === undefined) {
    num = 500;
  }
  const maxTranslate = thresholdVelocity.maxTranslate;
  const thresholdTranslate = thresholdVelocity.thresholdTranslate;
  const height = thresholdVelocity.height;
  const translateY = thresholdVelocity.translateY;
  const onStart = thresholdVelocity.onStart;
  const onEnd = thresholdVelocity.onEnd;
  const onClose = thresholdVelocity.onClose;
  const gestureEnabled = thresholdVelocity.gestureEnabled;
  let obj = num(thresholdTranslate[0]);
  const sharedValue = obj.useSharedValue({ y: 0 });
  const Gesture = num(thresholdTranslate[1]).Gesture;
  const PanResult = Gesture.Pan();
  const enabledResult = PanResult.enabled(gestureEnabled);
  class J {
    constructor() {
      if (null != onStart) {
        const obj = ReanimatedRexport;
        obj.runOnJS(tmp)();
      }
      const obj2 = { y: translateY.get() };
      const result = sharedValue.set(obj2);
    }
  }
  let obj2 = { onStart, runOnJS: num(thresholdTranslate[0]).runOnJS, start: sharedValue, translateY };
  J.__closure = obj2;
  J.__workletHash = 15847989720945;
  J.__initData = onStart;
  let fn = function x(translationY) {
    translationY = translationY.translationY;
    set = translateY.set;
    const interpolate = ReanimatedRexport.interpolate;
    ReanimatedRexport;
    const sum = sharedValue.get().y + translationY;
    const items = [0, maxTranslate];
    const items1 = [0, maxTranslate];
    const result = set(interpolate(sum, items, items1, ReanimatedRexport.Extrapolate.CLAMP));
  };
  const onStartResult = enabledResult.onStart(J);
  let obj3 = { translateY, interpolate: num(thresholdTranslate[0]).interpolate, start: sharedValue, maxTranslate, Extrapolate: num(thresholdTranslate[0]).Extrapolate };
  fn.__closure = obj3;
  fn.__workletHash = 6809176231356;
  fn.__initData = translateY;
  const onUpdateResult = onStartResult.onUpdate(fn);
  class O {
    constructor(arg0) {
      velocityY = thresholdVelocity.velocityY;
      obj = { damping: 15, mass: 1, stiffness: 250, overshootClamping: true, restSpeedThreshold: 0.001, restDisplacementThreshold: 0.001, velocity: velocityY };
      tmp = translateY;
      if (translateY.get() < thresholdTranslate) {
        tmp2 = c0;
        if (velocityY < c0) {
          tmp3 = closure_0;
          tmp4 = closure_2;
          set = tmp.set;
          obj2 = closure_0(closure_2[2]);
          num = 0;
          result = set(obj2.withSpring(0, obj));
        }
        tmp12 = null;
        if (null != onEnd) {
          tmp13 = closure_0;
          tmp14 = closure_2;
          obj6 = closure_0(closure_2[0]);
          tmp15 = obj6.runOnJS(tmp11)();
        }
        return;
      }
      set2 = tmp.set;
      obj3 = closure_0(closure_2[2]);
      fn = function n() {
        const obj = num(thresholdTranslate[0]);
        obj.runOnJS(maxTranslate(thresholdTranslate[3]).pop)();
      };
      obj1 = { runOnJS: closure_0(closure_2[0]).runOnJS, ModalActionCreators: closure_1(closure_2[3]) };
      fn.__closure = obj1;
      fn.__workletHash = 14223008059411;
      fn.__initData = closure_6;
      set2Result = set2(obj3.withSpring(height, obj, "respect-motion-settings", fn));
      if (null != onClose) {
        tmp8 = closure_0;
        tmp9 = closure_2;
        obj5 = closure_0(closure_2[0]);
        tmp10 = obj5.runOnJS(tmp7)();
      }
      return;
    }
  }
  const obj4 = { translateY, thresholdTranslate, thresholdVelocity: num, withSpring: num(thresholdTranslate[2]).withSpring, height, runOnJS: num(thresholdTranslate[0]).runOnJS, ModalActionCreators: maxTranslate(thresholdTranslate[3]), onClose, onEnd };
  O.__closure = obj4;
  O.__workletHash = 16881029664873;
  O.__initData = height;
  const onEndResult = onUpdateResult.onEnd(O);
  const failOffsetYResult = onEndResult.failOffsetY(-0.01);
  return failOffsetYResult.activeOffsetY([-5, 15]);
};
