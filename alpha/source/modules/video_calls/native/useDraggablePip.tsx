// Module ID: 11919
// Function ID: 11920
// Name: useDraggablePip
// Dependencies: [32, 11189, 11906, 1652, 5380, 1187, 10275, 5430, 1705, 5773, 2]
// Exports: useDraggablePip

// Module 11919 (useDraggablePip)
import ChannelCallStore from "ChannelCallStore" /* 11189 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import Constants from "Constants" /* 11906 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, set, set2;

let closure_4;
let hasOwnProperty;
let tmp3;
let useChannelCallStore = ChannelCallStore.useChannelCallStore;
({ PIP_FOCUS_SCALE: closure_4, PIP_GESTURE_ACTIVE_OFFSET: hasOwnProperty } = Constants);
let closure_6 = { mass: 1, stiffness: 250, overshootClamping: true, damping: 20 };
let closure_7 = { code: "(function useDraggablePipTsx1(){let[withTiming,pipFocus,PIP_FOCUS_SCALE,STANDARD_EASING]=this.__closure;return withTiming(pipFocus?PIP_FOCUS_SCALE:1,{easing:STANDARD_EASING,duration:250});})" };
let closure_8 = { code: "(function useDraggablePipTsx2(){let[width]=this.__closure;return width;})" };
let closure_9 = { code: "(function useDraggablePipTsx3(){let[height]=this.__closure;return height;})" };
let closure_10 = { code: "(function useDraggablePipTsx4(){let[pipScale,width]=this.__closure;return pipScale.get()*width;})" };
let closure_11 = { code: "(function useDraggablePipTsx5(){let[pipScale,height]=this.__closure;return pipScale.get()*height;})" };
let closure_12 = { code: "(function useDraggablePipTsx6(){let[containerWidth]=this.__closure;return containerWidth;})" };
let closure_13 = { code: "(function useDraggablePipTsx7(){let[containerHeight]=this.__closure;return containerHeight;})" };
let closure_14 = { code: "(function useDraggablePipTsx8(){let[containerWidth,scaledWidthDv,xPosition]=this.__closure;return[containerWidth-scaledWidthDv.get(),xPosition.get()];})" };
let closure_15 = { code: "(function useDraggablePipTsx9(result,previous){let[cheapWorkletArrayShallowEqual,clamp,xPosition,xDestination]=this.__closure;if(cheapWorkletArrayShallowEqual(result,previous!==null&&previous!==void 0?previous:undefined))return;const[containerWidthNew,xPositionNew]=result;const[containerWidthOld]=previous!==null&&previous!==void 0?previous:[0,0];if(previous!=null&&containerWidthNew!==containerWidthOld){const newX=clamp(xPositionNew*(containerWidthNew/containerWidthOld),0,containerWidthNew);xPosition.set(newX);xDestination.set(newX);}})" };
let closure_16 = { code: "(function useDraggablePipTsx10(){let[containerHeight,scaledHeightDv,yPosition]=this.__closure;return[containerHeight-scaledHeightDv.get(),yPosition.get()];})" };
let closure_17 = { code: "(function useDraggablePipTsx11(result,previous){let[cheapWorkletArrayShallowEqual,clamp,yPosition,yDestination]=this.__closure;if(cheapWorkletArrayShallowEqual(result,previous!==null&&previous!==void 0?previous:undefined))return;const[containerHeightNew,yPositionNew]=result;const[containerHeightOld]=previous!==null&&previous!==void 0?previous:[0,0];if(previous!=null&&containerHeightNew!==containerHeightOld){const newY=clamp(yPositionNew*(containerHeightNew/containerHeightOld),0,containerHeightNew);yPosition.set(newY);yDestination.set(newY);}})" };
let closure_18 = { code: "(function useDraggablePipTsx12(event){let[xPosition,xDestination,yPosition,yDestination,trackedVoiceControlsToggleMovedForGestureSv,onMoved,scheduleOnRN]=this.__closure;xPosition.set(xDestination.get()+event.translationX);yPosition.set(yDestination.get()+event.translationY);if(!trackedVoiceControlsToggleMovedForGestureSv.get()){if(onMoved!=null){scheduleOnRN(onMoved);}trackedVoiceControlsToggleMovedForGestureSv.set(true);}})" };
let closure_19 = { code: "(function useDraggablePipTsx13(event){let[xPosition,containerWidthDv,scaledWidthDv,clamp,yPosition,containerHeightDv,scaledHeightDv,snapToCorners,withSpring,spring,xDestination,yDestination]=this.__closure;const toss=0.0875;const xToss=xPosition.get()+toss*event.velocityX;const xMin=0;const xMax=containerWidthDv.get()-scaledWidthDv.get();const targetX=clamp(xToss,xMin,xMax);const yToss=yPosition.get()+toss*event.velocityY;const yMin=0;const yMax=containerHeightDv.get()-scaledHeightDv.get();const targetY=clamp(yToss,yMin,yMax);const top=targetY;const bottom=containerHeightDv.get()-scaledHeightDv.get()-targetY;const left=targetX;const right=containerWidthDv.get()-scaledWidthDv.get()-targetX;const minDistance=Math.min(top,bottom,left,right);let snapX=targetX;let snapY=targetY;switch(minDistance){case top:snapY=yMin;if(snapToCorners){snapX=left<right?xMin:xMax;}break;case bottom:snapY=yMax;if(snapToCorners){snapX=left<right?xMin:xMax;}break;case left:snapX=xMin;if(snapToCorners){snapY=top<bottom?yMin:yMax;}break;case right:snapX=xMax;if(snapToCorners){snapY=top<bottom?yMin:yMax;}break;}xPosition.set(withSpring(snapX,{...spring,velocity:event.velocityX}));xDestination.set(snapX);yPosition.set(withSpring(snapY,{...spring,velocity:event.velocityY}));yDestination.set(snapY);})" };
let closure_20 = { code: "(function useDraggablePipTsx14(){let[onPress,scheduleOnRN]=this.__closure;if(onPress!=null){scheduleOnRN(onPress);}})" };
let closure_21 = { code: "(function useDraggablePipTsx15(){let[xPosition,scaledWidthDv,widthDv,yPosition,scaledHeightDv,heightDv,pipScale]=this.__closure;return{transform:[{translateX:xPosition.get()+(scaledWidthDv.get()-widthDv.get())/2},{translateY:yPosition.get()+(scaledHeightDv.get()-heightDv.get())/2},{scale:pipScale.get()}]};})" };
let items = [{ code: "(function clamp_useDraggablePipTsx16(value,min,max){return Math.min(Math.max(value,min),max);})" }];
[tmp3] = items;
function clamp(arg0, arg1, arg2) {
  return Math.min(Math.max(arg0, arg1), arg2);
}
clamp.__workletHash = 10177312700431;
clamp.__initData = tmp3;
let result = size.fileFinishedImporting("modules/video_calls/native/useDraggablePip.tsx");

export function useDraggablePip(size1) {
  let _undefined2;
  let _undefined3;
  let c0;
  let containerHeight;
  let containerWidth;
  let height;
  let onMoved;
  let onPress;
  let snapToCorners;
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp15;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp25;
  let tmp26;
  let tmp28;
  let tmp29;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp40;
  let tmp41;
  let tmp42;
  let tmp43;
  let tmp44;
  let tmp47;
  let tmp48;
  let tmp49;
  let tmp5;
  let tmp50;
  let tmp51;
  let tmp52;
  let tmp53;
  let tmp54;
  let tmp55;
  let tmp58;
  let tmp59;
  let tmp6;
  let tmp60;
  let tmp61;
  let tmp62;
  let tmp63;
  let tmp64;
  let tmp65;
  let tmp67;
  let tmp68;
  let tmp69;
  let tmp7;
  let tmp70;
  let tmp71;
  let tmp72;
  let tmp73;
  let tmp74;
  let tmp75;
  let tmp76;
  let tmp77;
  let tmp78;
  let tmp79;
  let tmp8;
  let tmp82;
  let tmp83;
  let tmp84;
  let tmp87;
  let tmp88;
  let tmp89;
  let tmp9;
  let tmp90;
  let tmp91;
  let tmp92;
  let tmp93;
  let tmp94;
  let width;
  ({ width, height, containerWidth, containerHeight } = size1);
  ({ onPress, onMoved, snapToCorners } = size1);
  let tmp2 = _require;
  let tmp3 = dependencyMap;
  let tmp = useChannelCallStore((pipFocus) => pipFocus.pipFocus);
  let tmp4 = require("module_1652");
  let items = [closure_7, , , , ];
  const useDerivedValue = tmp4.useDerivedValue;
  items[1] = require("timing/timing").withTiming;
  items[2] = tmp;
  items[3] = closure_4;
  items[4] = require("native").STANDARD_EASING;
  [tmp5, tmp6, tmp7, tmp8, tmp9] = items;
  function useDraggablePipTsx1() {
    let num = 1;
    const tmp = c0;
    if (c1) {
      num = c2;
    }
    const obj = { easing, duration: 250 };
    return tmp(num, obj);
  }
  let items1 = [tmp6, tmp7, tmp8, tmp9];
  useDraggablePipTsx1.__closure = items1;
  useDraggablePipTsx1.__workletHash = 10550433910574;
  useDraggablePipTsx1.__initData = tmp5;
  const derivedValue = useDerivedValue(useDraggablePipTsx1);
  const items2 = [closure_8, width];
  [tmp11, tmp12] = items2;
  function useDraggablePipTsx2() {
    return c0;
  }
  const items3 = [tmp12];
  useDraggablePipTsx2.__closure = items3;
  useDraggablePipTsx2.__workletHash = 13080281623020;
  useDraggablePipTsx2.__initData = tmp11;
  const tmp2Result = tmp2(1652);
  const derivedValue1 = tmp2Result.useDerivedValue(useDraggablePipTsx2);
  const items4 = [closure_9, height];
  [tmp14, tmp15] = items4;
  function useDraggablePipTsx3() {
    return c0;
  }
  const items5 = [tmp15];
  useDraggablePipTsx3.__closure = items5;
  useDraggablePipTsx3.__workletHash = 13817744495277;
  useDraggablePipTsx3.__initData = tmp14;
  const tmp2Result14 = tmp2(1652);
  const derivedValue2 = tmp2Result14.useDerivedValue(useDraggablePipTsx3);
  const items6 = [closure_10, derivedValue, width];
  [tmp17, tmp18, tmp19] = items6;
  function useDraggablePipTsx4() {
    return _undefined.get() * c1;
  }
  const items7 = [tmp18, tmp19];
  useDraggablePipTsx4.__closure = items7;
  useDraggablePipTsx4.__workletHash = 4679088203701;
  useDraggablePipTsx4.__initData = tmp17;
  const tmp2Result15 = tmp2(1652);
  const derivedValue3 = tmp2Result15.useDerivedValue(useDraggablePipTsx4);
  const items8 = [closure_11, derivedValue, height];
  [tmp21, tmp22, tmp23] = items8;
  function useDraggablePipTsx5() {
    return _undefined.get() * c1;
  }
  const items9 = [tmp22, tmp23];
  useDraggablePipTsx5.__closure = items9;
  useDraggablePipTsx5.__workletHash = 14486531035348;
  useDraggablePipTsx5.__initData = tmp21;
  const tmp2Result16 = tmp2(1652);
  const derivedValue4 = tmp2Result16.useDerivedValue(useDraggablePipTsx5);
  const items10 = [closure_12, containerWidth];
  [tmp25, tmp26] = items10;
  function useDraggablePipTsx6() {
    return c0;
  }
  const items11 = [tmp26];
  useDraggablePipTsx6.__closure = items11;
  useDraggablePipTsx6.__workletHash = 10331837421608;
  useDraggablePipTsx6.__initData = tmp25;
  const tmp2Result17 = tmp2(1652);
  const derivedValue5 = tmp2Result17.useDerivedValue(useDraggablePipTsx6);
  const items12 = [closure_13, containerHeight];
  [tmp28, tmp29] = items12;
  function useDraggablePipTsx7() {
    return c0;
  }
  const items13 = [tmp29];
  useDraggablePipTsx7.__closure = items13;
  useDraggablePipTsx7.__workletHash = 15634754187305;
  useDraggablePipTsx7.__initData = tmp28;
  const tmp2Result18 = tmp2(1652);
  const derivedValue6 = tmp2Result18.useDerivedValue(useDraggablePipTsx7);
  const tmp2Result19 = tmp2(1652);
  const sharedValue = tmp2Result19.useSharedValue(0);
  const tmp2Result20 = tmp2(1652);
  const sharedValue1 = tmp2Result20.useSharedValue(sharedValue.get());
  const tmp2Result21 = tmp2(1652);
  const sharedValue2 = tmp2Result21.useSharedValue(0);
  const tmp2Result22 = tmp2(1652);
  const sharedValue3 = tmp2Result22.useSharedValue(sharedValue2.get());
  const tmp2Result23 = tmp2(1652);
  const sharedValue4 = tmp2Result23.useSharedValue(false);
  const items14 = [closure_14, containerWidth, derivedValue3, sharedValue1];
  [tmp35, tmp36, tmp37, tmp38] = items14;
  function useDraggablePipTsx8() {
    const items = [c0 - _undefined.get(), _undefined2.get()];
    return items;
  }
  const items15 = [tmp36, tmp37, tmp38];
  useDraggablePipTsx8.__closure = items15;
  useDraggablePipTsx8.__workletHash = 6983319962401;
  useDraggablePipTsx8.__initData = tmp35;
  const items16 = [closure_15, , , , ];
  const useAnimatedReaction = tmp2(1652).useAnimatedReaction;
  tmp2(1652);
  items16[1] = tmp2(10275).cheapWorkletArrayShallowEqual;
  items16[2] = clamp;
  items16[3] = sharedValue1;
  items16[4] = sharedValue;
  [tmp40, tmp41, tmp42, tmp43, tmp44] = items16;
  function useDraggablePipTsx9(arg0, arg1) {
    let first;
    let tmp6;
    const tmp = c0;
    const tmp2 = arg1;
    if (!tmp(arg0, tmp2)) {
      [first, tmp6] = arg0;
      let items = arg1;
      const tmp3 = _slicedToArray;
      if (arg1 == null) {
        items = [0, 0];
      }
      const first1 = tmp3(items, 1)[0];
      if (null != arg1) {
        if (first !== first1) {
          const tmp9 = _undefined(tmp6 * (first / first1), 0, first);
          const result = _undefined2.set(tmp9);
          const result1 = _undefined3.set(tmp9);
        }
      }
    }
  }
  const items17 = [tmp41, tmp42, tmp43, tmp44];
  useDraggablePipTsx9.__closure = items17;
  useDraggablePipTsx9.__workletHash = 11336346908651;
  useDraggablePipTsx9.__initData = tmp40;
  const animatedReaction = useAnimatedReaction(useDraggablePipTsx8, useDraggablePipTsx9);
  const items18 = [closure_16, containerHeight, derivedValue4, sharedValue3];
  [tmp47, tmp48, tmp49, tmp50] = items18;
  function useDraggablePipTsx10() {
    const items = [c0 - _undefined.get(), _undefined2.get()];
    return items;
  }
  const items19 = [tmp48, tmp49, tmp50];
  useDraggablePipTsx10.__closure = items19;
  useDraggablePipTsx10.__workletHash = 7165446858776;
  useDraggablePipTsx10.__initData = tmp47;
  const items20 = [closure_17, , , , ];
  const useAnimatedReaction2 = tmp2(1652).useAnimatedReaction;
  tmp2(1652);
  items20[1] = tmp2(10275).cheapWorkletArrayShallowEqual;
  items20[2] = clamp;
  items20[3] = sharedValue3;
  items20[4] = sharedValue2;
  [tmp51, tmp52, tmp53, tmp54, tmp55] = items20;
  function useDraggablePipTsx11(arg0, arg1) {
    const tmp = c0;
    const tmp2 = arg1;
    if (!tmp(arg0, tmp2)) {
      const tmp4 = _undefined2(arg0, 2);
      const first = tmp4[0];
      let items = arg1;
      const tmp3 = _undefined2;
      const tmp6 = tmp4[1];
      if (arg1 == null) {
        items = [0, 0];
      }
      const first1 = tmp3(items, 1)[0];
      if (null != arg1) {
        if (first !== first1) {
          const tmp9 = _undefined(tmp6 * (first / first1), 0, first);
          const result = _undefined2.set(tmp9);
          const result1 = _undefined3.set(tmp9);
        }
      }
    }
  }
  const items21 = [tmp52, tmp53, tmp54, tmp55];
  useDraggablePipTsx11.__closure = items21;
  useDraggablePipTsx11.__workletHash = 14934070264554;
  useDraggablePipTsx11.__initData = tmp51;
  const animatedReaction2 = useAnimatedReaction2(useDraggablePipTsx10, useDraggablePipTsx11);
  let Gesture = tmp2(5430).Gesture;
  const items22 = [-closure_5, closure_5];
  const items23 = [-closure_5, closure_5];
  const PanResult = Gesture.Pan();
  const activeOffsetXResult = PanResult.activeOffsetX(items22);
  const items24 = [closure_18, sharedValue1, sharedValue, sharedValue3, sharedValue2, sharedValue4, onMoved, ];
  const onUpdate = activeOffsetXResult.activeOffsetY(items23).onUpdate;
  activeOffsetXResult.activeOffsetY(items23);
  items24[7] = tmp2(1705).scheduleOnRN;
  [tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65] = items24;
  function useDraggablePipTsx12(translationX) {
    const result = _undefined.set(_undefined2.get() + translationX.translationX);
    const result1 = _undefined3.set(_undefined4.get() + translationX.translationY);
    const obj = _undefined5;
    if (!_undefined5.get()) {
      if (null != c5) {
        _undefined6(tmp3);
      }
      const result2 = obj.set(true);
    }
  }
  const items25 = [tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65];
  useDraggablePipTsx12.__closure = items25;
  useDraggablePipTsx12.__workletHash = 477536808578;
  useDraggablePipTsx12.__initData = tmp58;
  const items26 = [closure_19, sharedValue1, derivedValue5, derivedValue3, clamp, sharedValue3, derivedValue6, derivedValue4, snapToCorners, , , , ];
  const onEnd = onUpdate(useDraggablePipTsx12).onEnd;
  onUpdate(useDraggablePipTsx12);
  items26[9] = tmp2(5773).withSpring;
  items26[10] = closure_6;
  items26[11] = sharedValue;
  items26[12] = sharedValue2;
  let c7;
  let c8;
  let c9;
  let c10;
  let c11;
  [tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79] = items26;
  function useDraggablePipTsx13(velocityX) {
    let num;
    let num2;
    const sum = _undefined.get() + 0.0875 * velocityX.velocityX;
    const value = _undefined2.get();
    const diff = value - _undefined3.get();
    const tmp5 = _undefined4(sum, 0, diff);
    const sum1 = _undefined5.get() + 0.0875 * velocityX.velocityY;
    const value4 = _undefined6.get();
    const diff1 = value4 - _undefined7.get();
    const tmp10 = _undefined4(sum1, 0, diff1);
    const value5 = _undefined6.get();
    const diff2 = value5 - _undefined7.get() - tmp10;
    const value6 = _undefined2.get();
    const diff3 = value6 - _undefined3.get() - tmp5;
    const bound = Math.min(tmp10, diff2, tmp5, diff3);
    const tmp = _undefined;
    const tmp6 = _undefined5;
    if (tmp10 === bound) {
      num = 0;
      num2 = tmp5;
      if (c7) {
        let num6 = 0;
        if (tmp5 >= diff3) {
          num6 = diff;
        }
        num2 = num6;
        num = 0;
      }
    } else if (diff2 === bound) {
      num = diff1;
      num2 = tmp5;
      if (c7) {
        let num5 = 0;
        if (tmp5 >= diff3) {
          num5 = diff;
        }
        num2 = num5;
        num = diff1;
      }
    } else if (tmp5 === bound) {
      num = tmp10;
      num2 = 0;
      if (c7) {
        let num4 = 0;
        if (tmp10 >= diff2) {
          num4 = diff1;
        }
        num = num4;
        num2 = 0;
      }
    } else {
      num = tmp10;
      num2 = tmp5;
      if (diff3 === bound) {
        num = tmp10;
        num2 = diff;
        if (c7) {
          let num3 = 0;
          if (tmp10 >= diff2) {
            num3 = diff1;
          }
          num = num3;
          num2 = diff;
        }
      }
    }
    const obj = { velocity: velocityX.velocityX };
    set = tmp.set;
    const merged = Object.assign(c9);
    const result = set(_undefined8(num2, obj));
    const result1 = _undefined9.set(num2);
    const obj2 = { velocity: velocityX.velocityY };
    set2 = tmp6.set;
    const merged1 = Object.assign(c9);
    set2(_undefined8(num, obj2));
    const result2 = _undefined10.set(num);
  }
  const items27 = [tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79];
  useDraggablePipTsx13.__closure = items27;
  useDraggablePipTsx13.__workletHash = 12738554963651;
  useDraggablePipTsx13.__initData = tmp67;
  const onEndResult = onEnd(useDraggablePipTsx13);
  const Gesture2 = tmp2(5430).Gesture;
  const TapResult = Gesture2.Tap();
  const items28 = [closure_20, onPress, ];
  const onStart = TapResult.onStart;
  items28[2] = tmp2(1705).scheduleOnRN;
  [tmp82, tmp83, tmp84] = items28;
  function useDraggablePipTsx14() {
    if (null != c0) {
      _undefined(tmp);
    }
  }
  const items29 = [tmp83, tmp84];
  useDraggablePipTsx14.__closure = items29;
  useDraggablePipTsx14.__workletHash = 16181399743221;
  useDraggablePipTsx14.__initData = tmp82;
  const onStartResult = onStart(useDraggablePipTsx14);
  const Gesture3 = tmp2(5430).Gesture;
  const items30 = [closure_21, sharedValue1, derivedValue3, derivedValue1, sharedValue3, derivedValue4, derivedValue2, derivedValue];
  _require = undefined;
  dependencyMap = undefined;
  let c2;
  useChannelCallStore = undefined;
  let c4;
  let c5;
  let c6;
  [tmp87, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93, tmp94] = items30;
  function useDraggablePipTsx15() {
    let items;
    let value;
    let value4;
    let value5;
    let value6;
    const obj = { transform: items };
    const obj2 = { translateX: value + (value4 - _undefined3.get()) / 2 };
    value = _undefined.get();
    value4 = _undefined2.get();
    items = [obj2, , ];
    const obj3 = { translateY: value5 + (value6 - _undefined6.get()) / 2 };
    value5 = _undefined4.get();
    value6 = _undefined5.get();
    items[1] = obj3;
    items[2] = { scale: _undefined7.get() };
    ({ scale: _undefined7.get() });
    return obj;
  }
  const items31 = [tmp88, tmp89, tmp90, tmp91, tmp92, tmp93, tmp94];
  useDraggablePipTsx15.__closure = items31;
  useDraggablePipTsx15.__workletHash = 13245105428304;
  useDraggablePipTsx15.__initData = tmp87;
  const RaceResult = Gesture3.Race(onEndResult, onStartResult);
  const tmp2Result26 = tmp2(1652);
  let obj = { gesture: RaceResult, draggableGridItemStyles: tmp2Result26.useAnimatedStyle(useDraggablePipTsx15) };
  return obj;
}
