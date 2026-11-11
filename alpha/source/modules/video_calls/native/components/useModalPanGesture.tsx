// Module ID: 13935
// Function ID: 13936
// Name: useModalPanGesture
// Dependencies: [1652, 5535, 1705, 5876, 6785, 2]
// Exports: default

// Module 13935 (useModalPanGesture)
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5535 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import size from "module_2" /* 2 */;

let _undefined;

let tmp;
const spring_spring = tmp(5876);
let closure_3 = { code: "(function useModalPanGestureTsx1(){let[onStart,scheduleOnRN,start,translateY]=this.__closure;if(onStart!=null){scheduleOnRN(onStart);}start.set({y:translateY.get()});})" };
let closure_4 = { code: "(function useModalPanGestureTsx2({translationY:translationY}){let[translateY,interpolate,start,maxTranslate,Extrapolate]=this.__closure;translateY.set(interpolate(start.get().y+translationY,[0,maxTranslate],[0,maxTranslate],Extrapolate.CLAMP));})" };
let closure_5 = { code: "(function useModalPanGestureTsx3(){let[scheduleOnRN,ModalActionCreators]=this.__closure;scheduleOnRN(ModalActionCreators.pop);})" };
let closure_6 = { code: "(function useModalPanGestureTsx4({velocityY:velocityY}){let[translateY,thresholdTranslate,thresholdVelocity,withSpring,height,_worklet_7373190729132_init_data,scheduleOnRN,ModalActionCreators,onClose,onEnd]=this.__closure;const config={damping:15,mass:1,stiffness:250,overshootClamping:true,velocity:velocityY};if(translateY.get()>=thresholdTranslate||velocityY>=thresholdVelocity){translateY.set(withSpring(height,config,'respect-motion-settings',function useModalPanGestureTsx3Factory([_worklet_7373190729132_init_data,scheduleOnRN,ModalActionCreators]){const useModalPanGestureTsx3=function(){scheduleOnRN(ModalActionCreators.pop);};useModalPanGestureTsx3.__closure=[scheduleOnRN,ModalActionCreators];useModalPanGestureTsx3.__workletHash=7373190729132;useModalPanGestureTsx3.__initData=_worklet_7373190729132_init_data;return useModalPanGestureTsx3;}([_worklet_7373190729132_init_data,scheduleOnRN,ModalActionCreators])));if(onClose!=null){scheduleOnRN(onClose);}}else{translateY.set(withSpring(0,config));}if(onEnd!=null){scheduleOnRN(onEnd);}})" };
let result = size.fileFinishedImporting("modules/video_calls/native/components/useModalPanGesture.tsx");

export default function useModalPanGesture(thresholdVelocity) {
  let gestureEnabled;
  let height;
  let maxTranslate;
  let onClose;
  let onEnd;
  let onStart;
  let thresholdTranslate;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp18;
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
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let num = thresholdVelocity.thresholdVelocity;
  if (num === undefined) {
    num = 500;
  }
  const translateY = thresholdVelocity.translateY;
  const tmp = require;
  ({ gestureEnabled, maxTranslate, thresholdTranslate, height, onStart, onEnd, onClose } = thresholdVelocity);
  let obj = _mod1652;
  const sharedValue = obj.useSharedValue({ y: 0 });
  const Gesture = LegacyBaseButton.Gesture;
  const PanResult = Gesture.Pan();
  let items = [closure_3, onStart, , , ];
  const onStart2 = PanResult.enabled(gestureEnabled).onStart;
  PanResult.enabled(gestureEnabled);
  items[2] = _mod1705.scheduleOnRN;
  items[3] = sharedValue;
  items[4] = translateY;
  [tmp5, tmp6, tmp7, tmp8, tmp9] = items;
  function useModalPanGestureTsx1() {
    if (null != c0) {
      _undefined(tmp);
    }
    const obj = { y: _undefined3.get() };
    const result = _undefined2.set(obj);
  }
  let items1 = [tmp6, tmp7, tmp8, tmp9];
  useModalPanGestureTsx1.__closure = items1;
  useModalPanGestureTsx1.__workletHash = 8962705443819;
  useModalPanGestureTsx1.__initData = tmp5;
  const items2 = [closure_4, translateY, , , , ];
  const onUpdate = onStart2(useModalPanGestureTsx1).onUpdate;
  onStart2(useModalPanGestureTsx1);
  items2[2] = _mod1652.interpolate;
  items2[3] = sharedValue;
  items2[4] = maxTranslate;
  items2[5] = _mod1652.Extrapolate;
  [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items2;
  function useModalPanGestureTsx2(translationY) {
    const items = [0, c3];
    const items1 = [0, c3];
    const result = _undefined.set(_undefined2(_undefined3.get().y + translationY.translationY, items, items1, _undefined4.CLAMP));
  }
  const items3 = [tmp12, tmp13, tmp14, tmp15, tmp16];
  useModalPanGestureTsx2.__closure = items3;
  useModalPanGestureTsx2.__workletHash = 6248783476229;
  useModalPanGestureTsx2.__initData = tmp11;
  const items4 = [closure_6, translateY, thresholdTranslate, num, , , , , , , ];
  const onEnd2 = onUpdate(useModalPanGestureTsx2).onEnd;
  onUpdate(useModalPanGestureTsx2);
  items4[4] = spring_spring.withSpring;
  items4[5] = height;
  items4[6] = closure_5;
  items4[7] = _mod1705.scheduleOnRN;
  items4[8] = ModalActionCreatorsDefault;
  items4[9] = onClose;
  items4[10] = onEnd;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28] = items4;
  function useModalPanGestureTsx4(velocityY) {
    let tmp6;
    let tmp7;
    let tmp8;
    velocityY = velocityY.velocityY;
    const obj = { damping: 15, mass: 1, stiffness: 250, overshootClamping: true, velocity: velocityY };
    if (_undefined.get() < c1) {
      if (velocityY < c2) {
        const result = obj2.set(_undefined2(0, obj));
      }
      if (null != c9) {
        _undefined3(tmp11);
      }
    }
    const items = [c5, _undefined3, c7];
    _undefined = undefined;
    c1 = undefined;
    [tmp6, tmp7, tmp8] = items;
    function useModalPanGestureTsx3() {
      _undefined(_undefined2.pop);
    }
    const items1 = [tmp7, tmp8];
    useModalPanGestureTsx3.__closure = items1;
    useModalPanGestureTsx3.__workletHash = 7373190729132;
    useModalPanGestureTsx3.__initData = tmp6;
    const result1 = obj2.set(_undefined2(c4, obj, "respect-motion-settings", useModalPanGestureTsx3));
    const tmp5 = _undefined3;
    if (null != c8) {
      tmp5(c8);
    }
  }
  const items5 = [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28];
  useModalPanGestureTsx4.__closure = items5;
  useModalPanGestureTsx4.__workletHash = 15324722005675;
  useModalPanGestureTsx4.__initData = tmp18;
  const onEnd2Result = onEnd2(useModalPanGestureTsx4);
  const failOffsetYResult = onEnd2Result.failOffsetY(-0.01);
  return failOffsetYResult.activeOffsetY([-5, 15]);
};
