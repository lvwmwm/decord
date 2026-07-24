// Module ID: 10576
// Function ID: 82582
// Name: clamp
// Dependencies: [57, 10240, 10558, 3991, 4131, 1273, 9459, 5217, 4542, 2]
// Exports: useDraggablePip

// Module 10576 (clamp)
import _slicedToArray from "_slicedToArray";
import { useChannelCallStore } from "resetFocusTimer";
import PIP_GESTURE_ACTIVE_OFFSET from "PIP_GESTURE_ACTIVE_OFFSET";

let closure_4;
let closure_5;
const require = arg1;
({ PIP_FOCUS_SCALE: closure_4, PIP_GESTURE_ACTIVE_OFFSET: closure_5 } = PIP_GESTURE_ACTIVE_OFFSET);
let closure_6 = { mass: 1, stiffness: 250, overshootClamping: true, restSpeedThreshold: 0.001, restDisplacementThreshold: 0.001, damping: 20 };
let closure_7 = { code: "function useDraggablePipTsx1(){const{withTiming,pipFocus,PIP_FOCUS_SCALE,STANDARD_EASING}=this.__closure;return withTiming(pipFocus?PIP_FOCUS_SCALE:1,{easing:STANDARD_EASING,duration:250});}" };
let closure_8 = { code: "function useDraggablePipTsx2(){const{width}=this.__closure;return width;}" };
let closure_9 = { code: "function useDraggablePipTsx3(){const{height}=this.__closure;return height;}" };
let closure_10 = { code: "function useDraggablePipTsx4(){const{pipScale,width}=this.__closure;return pipScale.get()*width;}" };
let closure_11 = { code: "function useDraggablePipTsx5(){const{pipScale,height}=this.__closure;return pipScale.get()*height;}" };
let closure_12 = { code: "function useDraggablePipTsx6(){const{containerWidth}=this.__closure;return containerWidth;}" };
let closure_13 = { code: "function useDraggablePipTsx7(){const{containerHeight}=this.__closure;return containerHeight;}" };
let closure_14 = { code: "function useDraggablePipTsx8(){const{containerWidth,scaledWidthDv,xPosition}=this.__closure;return[containerWidth-scaledWidthDv.get(),xPosition.get()];}" };
let closure_15 = { code: "function useDraggablePipTsx9(result,previous){const{cheapWorkletArrayShallowEqual,clamp,xPosition,xDestination}=this.__closure;if(cheapWorkletArrayShallowEqual(result,previous!==null&&previous!==void 0?previous:undefined))return;const[containerWidthNew,xPositionNew]=result;const[containerWidthOld]=previous!==null&&previous!==void 0?previous:[0,0];if(previous!=null&&containerWidthNew!==containerWidthOld){const newX=clamp(xPositionNew*(containerWidthNew/containerWidthOld),0,containerWidthNew);xPosition.set(newX);xDestination.set(newX);}}" };
let closure_16 = { code: "function useDraggablePipTsx10(){const{containerHeight,scaledHeightDv,yPosition}=this.__closure;return[containerHeight-scaledHeightDv.get(),yPosition.get()];}" };
let closure_17 = { code: "function useDraggablePipTsx11(result,previous){const{cheapWorkletArrayShallowEqual,clamp,yPosition,yDestination}=this.__closure;if(cheapWorkletArrayShallowEqual(result,previous!==null&&previous!==void 0?previous:undefined))return;const[containerHeightNew,yPositionNew]=result;const[containerHeightOld]=previous!==null&&previous!==void 0?previous:[0,0];if(previous!=null&&containerHeightNew!==containerHeightOld){const newY=clamp(yPositionNew*(containerHeightNew/containerHeightOld),0,containerHeightNew);yPosition.set(newY);yDestination.set(newY);}}" };
let closure_18 = { code: "function useDraggablePipTsx12(event){const{xPosition,containerWidthDv,scaledWidthDv,clamp,yPosition,containerHeightDv,scaledHeightDv,snapToCorners,withSpring,spring,xDestination,yDestination}=this.__closure;const toss=0.0875;const xToss=xPosition.get()+toss*event.velocityX;const xMin=0;const xMax=containerWidthDv.get()-scaledWidthDv.get();const targetX=clamp(xToss,xMin,xMax);const yToss=yPosition.get()+toss*event.velocityY;const yMin=0;const yMax=containerHeightDv.get()-scaledHeightDv.get();const targetY=clamp(yToss,yMin,yMax);const top=targetY;const bottom=containerHeightDv.get()-scaledHeightDv.get()-targetY;const left=targetX;const right=containerWidthDv.get()-scaledWidthDv.get()-targetX;const minDistance=Math.min(top,bottom,left,right);let snapX=targetX;let snapY=targetY;switch(minDistance){case top:snapY=yMin;if(snapToCorners){snapX=left<right?xMin:xMax;}break;case bottom:snapY=yMax;if(snapToCorners){snapX=left<right?xMin:xMax;}break;case left:snapX=xMin;if(snapToCorners){snapY=top<bottom?yMin:yMax;}break;case right:snapX=xMax;if(snapToCorners){snapY=top<bottom?yMin:yMax;}break;}xPosition.set(withSpring(snapX,{...spring,velocity:event.velocityX}));xDestination.set(snapX);yPosition.set(withSpring(snapY,{...spring,velocity:event.velocityY}));yDestination.set(snapY);}" };
let closure_19 = { code: "function useDraggablePipTsx13(event){const{xPosition,xDestination,yPosition,yDestination,trackedVoiceControlsToggleMovedForGestureSv,onMoved,runOnJS}=this.__closure;xPosition.set(xDestination.get()+event.translationX);yPosition.set(yDestination.get()+event.translationY);if(!trackedVoiceControlsToggleMovedForGestureSv.get()){if(onMoved!=null){runOnJS(onMoved)();}trackedVoiceControlsToggleMovedForGestureSv.set(true);}}" };
let closure_20 = { code: "function useDraggablePipTsx14(){const{onPress,runOnJS}=this.__closure;if(onPress!=null){runOnJS(onPress)();}}" };
let closure_21 = { code: "function useDraggablePipTsx15(){const{xPosition,scaledWidthDv,widthDv,yPosition,scaledHeightDv,heightDv,pipScale}=this.__closure;return{transform:[{translateX:xPosition.get()+(scaledWidthDv.get()-widthDv.get())/2},{translateY:yPosition.get()+(scaledHeightDv.get()-heightDv.get())/2},{scale:pipScale.get()}]};}" };
let closure_22 = { code: "function clamp_useDraggablePipTsx16(value,min,max){return Math.min(Math.max(value,min),max);}" };
let closure_23 = (() => {
  function clamp(arg0, arg1, arg2) {
    return Math.min(Math.max(arg0, arg1), arg2);
  }
  clamp.__closure = {};
  clamp.__workletHash = 1988116204206;
  clamp.__initData = closure_22;
  return clamp;
})();
let result = require("PIP_GESTURE_ACTIVE_OFFSET").fileFinishedImporting("modules/video_calls/native/useDraggablePip.tsx");

export const useDraggablePip = function useDraggablePip(width) {
  width = width.width;
  const height = width.height;
  const containerWidth = width.containerWidth;
  const containerHeight = width.containerHeight;
  const onPress = width.onPress;
  const onMoved = width.onMoved;
  const snapToCorners = width.snapToCorners;
  let tmp = containerHeight((pipFocus) => pipFocus.pipFocus);
  let closure_7 = tmp;
  let obj = width(height[3]);
  class X {
    constructor() {
      obj = width(height[4]);
      num = 1;
      if (closure_7) {
        num = onPress;
      }
      obj = { easing: width(height[5]).STANDARD_EASING, duration: 250 };
      return obj.withTiming(num, obj);
    }
  }
  obj = { withTiming: width(height[4]).withTiming, pipFocus: tmp, PIP_FOCUS_SCALE: onPress, STANDARD_EASING: width(height[5]).STANDARD_EASING };
  X.__closure = obj;
  X.__workletHash = 7848271415351;
  X.__initData = closure_7;
  const derivedValue = obj.useDerivedValue(X);
  let obj2 = width(height[3]);
  class Y {
    constructor() {
      return width;
    }
  }
  Y.__closure = { width };
  Y.__workletHash = 14810909441301;
  Y.__initData = derivedValue;
  const derivedValue1 = obj2.useDerivedValue(Y);
  let obj3 = width(height[3]);
  class N {
    constructor() {
      return height;
    }
  }
  N.__closure = { height };
  N.__workletHash = 15343935194036;
  N.__initData = derivedValue1;
  const derivedValue2 = obj3.useDerivedValue(N);
  let obj4 = width(height[3]);
  class V {
    constructor() {
      return useDerivedValue.get() * width;
    }
  }
  V.__closure = { pipScale: derivedValue, width };
  V.__workletHash = 3468337829868;
  V.__initData = derivedValue2;
  const derivedValue3 = obj4.useDerivedValue(V);
  let obj5 = width(height[3]);
  class F {
    constructor() {
      return useDerivedValue.get() * height;
    }
  }
  F.__closure = { pipScale: derivedValue, height };
  F.__workletHash = 7163944260205;
  F.__initData = derivedValue3;
  const derivedValue4 = obj5.useDerivedValue(F);
  class G {
    constructor() {
      return containerWidth;
    }
  }
  G.__closure = { containerWidth };
  G.__workletHash = 13449836478609;
  G.__initData = derivedValue4;
  const derivedValue5 = width(height[3]).useDerivedValue(G);
  const obj7 = width(height[3]);
  class I {
    constructor() {
      return containerHeight;
    }
  }
  I.__closure = { containerHeight };
  I.__workletHash = 4105281399152;
  I.__initData = derivedValue5;
  const derivedValue6 = width(height[3]).useDerivedValue(I);
  const obj8 = width(height[3]);
  const sharedValue = width(height[3]).useSharedValue(0);
  const obj9 = width(height[3]);
  const sharedValue1 = width(height[3]).useSharedValue(sharedValue.get());
  const obj11 = width(height[3]);
  const sharedValue2 = width(height[3]).useSharedValue(0);
  const obj12 = width(height[3]);
  const sharedValue3 = width(height[3]).useSharedValue(sharedValue2.get());
  const obj14 = width(height[3]);
  const sharedValue4 = width(height[3]).useSharedValue(false);
  const obj15 = width(height[3]);
  class J {
    constructor() {
      items = [, ];
      items[0] = containerWidth - c11.get();
      items[1] = c16.get();
      return items;
    }
  }
  J.__closure = { containerWidth, scaledWidthDv: derivedValue3, xPosition: sharedValue1 };
  J.__workletHash = 2741340788440;
  J.__initData = derivedValue6;
  const fn = function q(arg0, arg1) {
    let tmp;
    if (null != arg1) {
      tmp = arg1;
    }
    if (!obj.cheapWorkletArrayShallowEqual(arg0, tmp)) {
      const tmp3 = containerWidth(arg0, 2);
      const first = tmp3[0];
      let items = arg1;
      if (null == arg1) {
        items = [0, 0];
      }
      const first1 = containerWidth(items, 1)[0];
      if (null != arg1) {
        if (first !== first1) {
          const tmp7 = outer1_23(tmp3[1] * (first / first1), 0, first);
          const result = sharedValue1.set(tmp7);
          const result1 = sharedValue.set(tmp7);
        }
      }
      const tmp2 = containerWidth;
    }
  };
  obj = { cheapWorkletArrayShallowEqual: width(height[6]).cheapWorkletArrayShallowEqual, clamp: closure_23, xPosition: sharedValue1, xDestination: sharedValue };
  fn.__closure = obj;
  fn.__workletHash = 15748808822770;
  fn.__initData = sharedValue;
  const animatedReaction = width(height[3]).useAnimatedReaction(J, fn);
  const obj16 = width(height[3]);
  class U {
    constructor() {
      items = [, ];
      items[0] = containerHeight - useDerivedValue.get();
      items[1] = useSharedValue.get();
      return items;
    }
  }
  U.__closure = { containerHeight, scaledHeightDv: derivedValue4, yPosition: sharedValue3 };
  U.__workletHash = 11475249153313;
  U.__initData = sharedValue1;
  class R {
    constructor(arg0, arg1) {
      obj = width(height[6]);
      tmp = undefined;
      if (null != arg1) {
        tmp = arg1;
      }
      if (!obj.cheapWorkletArrayShallowEqual(width, tmp)) {
        num = 2;
        tmp2 = containerWidth;
        tmp3 = containerWidth(width, 2);
        num2 = 0;
        first = tmp3[0];
        num3 = 1;
        items = arg1;
        if (null == arg1) {
          items = [0, 0];
        }
        first1 = tmp2(items, 1)[0];
        if (null != arg1) {
          if (first !== first1) {
            tmp6 = outer1_23;
            tmp7 = outer1_23(tmp3[1] * (first / first1), 0, first);
            tmp8 = useSharedValue;
            result = useSharedValue.set(tmp7);
            tmp10 = closure_17;
            result1 = closure_17.set(tmp7);
          }
        }
      }
      return;
    }
  }
  const obj18 = width(height[3]);
  R.__closure = { cheapWorkletArrayShallowEqual: width(height[6]).cheapWorkletArrayShallowEqual, clamp: closure_23, yPosition: sharedValue3, yDestination: sharedValue2 };
  R.__workletHash = 7685377389843;
  R.__initData = sharedValue2;
  const animatedReaction1 = obj18.useAnimatedReaction(U, R);
  const Gesture = width(height[7]).Gesture;
  const obj1 = { cheapWorkletArrayShallowEqual: width(height[6]).cheapWorkletArrayShallowEqual, clamp: closure_23, yPosition: sharedValue3, yDestination: sharedValue2 };
  let items = [-onMoved, onMoved];
  const PanResult = Gesture.Pan();
  const items1 = [-onMoved, onMoved];
  const activeOffsetXResult = Gesture.Pan().activeOffsetX(items);
  function ae(translationX) {
    const result = sharedValue1.set(sharedValue.get() + translationX.translationX);
    const result1 = sharedValue3.set(sharedValue2.get() + translationX.translationY);
    if (!sharedValue4.get()) {
      if (null != onMoved) {
        width(height[3]).runOnJS(onMoved)();
        const obj = width(height[3]);
      }
      const result2 = sharedValue4.set(true);
    }
  }
  obj2 = { xPosition: sharedValue1, xDestination: sharedValue, yPosition: sharedValue3, yDestination: sharedValue2, trackedVoiceControlsToggleMovedForGestureSv: sharedValue4, onMoved, runOnJS: width(height[3]).runOnJS };
  ae.__closure = obj2;
  ae.__workletHash = 14964390506971;
  ae.__initData = sharedValue4;
  const activeOffsetYResult = Gesture.Pan().activeOffsetX(items).activeOffsetY(items1);
  function se(velocityX) {
    const sum = sharedValue1.get() + 0.0875 * velocityX.velocityX;
    let value = derivedValue5.get();
    const diff = value - derivedValue3.get();
    const tmp4 = outer1_23(sum, 0, diff);
    const sum1 = sharedValue3.get() + 0.0875 * velocityX.velocityY;
    value = derivedValue6.get();
    const diff1 = value - derivedValue4.get();
    const tmp8 = outer1_23(sum1, 0, diff1);
    const value1 = derivedValue6.get();
    const diff2 = value1 - derivedValue4.get() - tmp8;
    const value2 = derivedValue5.get();
    const diff3 = value2 - derivedValue3.get() - tmp4;
    const bound = Math.min(tmp8, diff2, tmp4, diff3);
    if (tmp8 === bound) {
      let num = tmp4;
      let num2 = 0;
      if (snapToCorners) {
        let num6 = 0;
        if (tmp4 >= diff3) {
          num6 = diff;
        }
        num = num6;
        num2 = 0;
      }
    } else if (diff2 === bound) {
      num = tmp4;
      num2 = diff1;
      if (snapToCorners) {
        let num5 = 0;
        if (tmp4 >= diff3) {
          num5 = diff;
        }
        num = num5;
        num2 = diff1;
      }
    } else if (tmp4 === bound) {
      num = 0;
      num2 = tmp8;
      if (snapToCorners) {
        let num4 = 0;
        if (tmp8 >= diff2) {
          num4 = diff1;
        }
        num2 = num4;
        num = 0;
      }
    } else {
      num = tmp4;
      num2 = tmp8;
      if (diff3 === bound) {
        num = diff;
        num2 = tmp8;
        if (snapToCorners) {
          let num3 = 0;
          if (tmp8 >= diff2) {
            num3 = diff1;
          }
          num2 = num3;
          num = diff;
        }
      }
    }
    let obj = width(height[8]);
    obj = {};
    const merged = Object.assign(snapToCorners);
    obj["velocity"] = velocityX.velocityX;
    const result = sharedValue1.set(obj.withSpring(num, obj));
    const result1 = sharedValue.set(num);
    obj = {};
    const merged1 = Object.assign(snapToCorners);
    obj["velocity"] = velocityX.velocityY;
    const result2 = sharedValue3.set(width(height[8]).withSpring(num2, obj));
    const result3 = sharedValue2.set(num2);
  }
  obj3 = { xPosition: sharedValue1, containerWidthDv: derivedValue5, scaledWidthDv: derivedValue3, clamp: closure_23, yPosition: sharedValue3, containerHeightDv: derivedValue6, scaledHeightDv: derivedValue4, snapToCorners, withSpring: width(height[8]).withSpring, spring: snapToCorners, xDestination: sharedValue, yDestination: sharedValue2 };
  se.__closure = obj3;
  se.__workletHash = 690760681755;
  se.__initData = sharedValue3;
  const onUpdateResult = Gesture.Pan().activeOffsetX(items).activeOffsetY(items1).onUpdate(ae);
  const Gesture2 = width(height[7]).Gesture;
  const onEndResult = Gesture.Pan().activeOffsetX(items).activeOffsetY(items1).onUpdate(ae).onEnd(se);
  function re() {
    if (null != onPress) {
      width(height[3]).runOnJS(onPress)();
      const obj = width(height[3]);
    }
  }
  obj4 = { onPress, runOnJS: width(height[3]).runOnJS };
  re.__closure = obj4;
  re.__workletHash = 4692146362189;
  re.__initData = closure_20;
  obj5 = {};
  const TapResult = Gesture2.Tap();
  const Gesture3 = width(height[7]).Gesture;
  obj5.gesture = Gesture3.Race(onEndResult, Gesture2.Tap().onStart(re));
  const onStartResult = Gesture2.Tap().onStart(re);
  function le() {
    let obj = {};
    obj = {};
    let value = sharedValue1.get();
    value = derivedValue3.get();
    obj.translateX = value + (value - derivedValue1.get()) / 2;
    const items = [obj, , ];
    obj = {};
    const value1 = sharedValue3.get();
    const value2 = derivedValue4.get();
    obj.translateY = value1 + (value2 - derivedValue2.get()) / 2;
    items[1] = obj;
    items[2] = { scale: derivedValue.get() };
    obj.transform = items;
    return obj;
  }
  le.__closure = { xPosition: sharedValue1, scaledWidthDv: derivedValue3, widthDv: derivedValue1, yPosition: sharedValue3, scaledHeightDv: derivedValue4, heightDv: derivedValue2, pipScale: derivedValue };
  le.__workletHash = 12534173786665;
  le.__initData = closure_21;
  obj5.draggableGridItemStyles = width(height[3]).useAnimatedStyle(le);
  return obj5;
};
