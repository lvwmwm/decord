// Module ID: 15239
// Function ID: 15240
// Name: ZoomLayoutGesture
// Dependencies: [19, 17, 21, 5550, 5939, 1655, 5306, 5598, 1708, 2]

// Module 15239 (ZoomLayoutGesture)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _mod1655 from "module_1655" /* 1655 */;
import reanimated_AccessibilityPreferencesSharedValue from "reanimated/AccessibilityPreferencesSharedValue" /* 5550 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5598 */;
import spring_spring from "spring/spring" /* 5939 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let _undefined, _undefined2, activateResult, diff, diff1, point2, point3, result3, result4, result5, set, set2, set2Result, set3, set3Result, value1;

let tmp10;
let tmp11;
let tmp12;
let tmp2;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
let tmp8;
let tmp9;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { damping: 20, stiffness: 250, overshootClamping: true };
let items = [{ code: "(function resistTranslation_ZoomLayoutGestureNativeTsx1(position,bound){let[PAN_EDGE_RESISTANCE]=this.__closure;const clamped=Math.max(-bound,Math.min(bound,position));return clamped+(position-clamped)*PAN_EDGE_RESISTANCE;})" }, 0.3];
[tmp2, tmp3] = items;
function resistTranslation(arg0, arg1) {
  const tmp = -arg1;
  const bound = Math.max(tmp, Math.min(arg1, arg0));
  return bound + (arg0 - bound) * c0;
}
let items1 = [tmp3];
resistTranslation.__closure = items1;
resistTranslation.__workletHash = 234320700197;
resistTranslation.__initData = tmp2;
let items2 = [{ code: "(function releaseTranslation_ZoomLayoutGestureNativeTsx3(translation,bound,velocity){let[MAX_PAN_VELOCITY,accessibilityPreferencesSharedValue,withSpring,SPRING_CONFIG,MAX_FLING_OVERSHOOT,withDecay,PAN_DECELERATION,_worklet_10161841114284_init_data]=this.__closure;const position=translation.get();const clamped=Math.max(-bound,Math.min(bound,position));const releaseVelocity=Math.max(-MAX_PAN_VELOCITY,Math.min(MAX_PAN_VELOCITY,velocity));if(accessibilityPreferencesSharedValue.get().reduceMotion){translation.set(clamped);}else if(position!==clamped||bound===0){translation.set(withSpring(clamped,SPRING_CONFIG));}else{const overshoot=Math.min(MAX_FLING_OVERSHOOT,Math.abs(releaseVelocity)*0.02);translation.set(withDecay({velocity:releaseVelocity,deceleration:PAN_DECELERATION,clamp:[-bound-overshoot,bound+overshoot]},function releaseTranslation_ZoomLayoutGestureNativeTsx3([_worklet_10161841114284_init_data,bound,translation,withSpring,SPRING_CONFIG]){const ZoomLayoutGestureNativeTsx2=function(finished){if(!finished)return;const restingPosition=Math.max(-bound,Math.min(bound,translation.get()));if(restingPosition!==translation.get())translation.set(withSpring(restingPosition,SPRING_CONFIG));};ZoomLayoutGestureNativeTsx2.__closure=[bound,translation,withSpring,SPRING_CONFIG];ZoomLayoutGestureNativeTsx2.__workletHash=10161841114284;ZoomLayoutGestureNativeTsx2.__initData=_worklet_10161841114284_init_data;return ZoomLayoutGestureNativeTsx2;}([_worklet_10161841114284_init_data,bound,translation,withSpring,SPRING_CONFIG])));}})" }, 4000, reanimated_AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue, spring_spring.withSpring, obj, 48, _mod1655.withDecay, 0.998, { code: "(function ZoomLayoutGestureNativeTsx2(finished){let[bound,translation,withSpring,SPRING_CONFIG]=this.__closure;if(!finished)return;const restingPosition=Math.max(-bound,Math.min(bound,translation.get()));if(restingPosition!==translation.get())translation.set(withSpring(restingPosition,SPRING_CONFIG));})" }];
let c0;
let c1;
let c2;
let c3;
let c4;
let c5;
let c6;
let c7;
[tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items2;
function releaseTranslation(get, arg1, arg2) {
  let items;
  let tmp10;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  const value = get.get();
  const tmp2 = -arg1;
  let bound = Math.max(tmp2, Math.min(arg1, value));
  let tmp4 = -c0;
  const bound1 = Math.max(tmp4, Math.min(c0, arg2));
  if (_undefined.get().reduceMotion) {
    let result = get.set(bound);
  } else {
    if (value === bound) {
      if (0 !== arg1) {
        let _Math = Math;
        let _Math2 = Math;
        const bound2 = Math.min(c4, 0.02 * Math.abs(bound1));
        obj = { velocity: bound1, deceleration, clamp: items };
        items = [-arg1 - bound2, arg1 + bound2];
        const items1 = [c7, arg1, get, _undefined2, c3];
        c0 = undefined;
        _undefined = undefined;
        _undefined2 = undefined;
        c3 = undefined;
        [tmp6, tmp7, tmp8, tmp9, tmp10] = items1;
        class ZoomLayoutGestureNativeTsx2 {
          constructor(arg0) {
            tmp = get;
            if (tmp) {
              tmp2 = globalThis;
              _Math = Math;
              tmp3 = closure_0;
              _Math2 = Math;
              obj = closure_1;
              tmp4 = -closure_0;
              bound = Math.max(tmp4, Math.min(closure_0, closure_1.get()));
              if (bound !== closure_1.get()) {
                tmp6 = closure_2;
                tmp7 = closure_3;
                result = obj.set(closure_2(bound, closure_3));
              }
            }
            return;
          }
        }
        const items2 = [tmp7, tmp8, tmp9, tmp10];
        ZoomLayoutGestureNativeTsx2.__closure = items2;
        ZoomLayoutGestureNativeTsx2.__workletHash = 10161841114284;
        ZoomLayoutGestureNativeTsx2.__initData = tmp6;
        const result1 = get.set(_undefined3(obj, ZoomLayoutGestureNativeTsx2));
      }
    }
    const result2 = get.set(_undefined2(bound, c3));
  }
}
let items3 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
releaseTranslation.__closure = items3;
releaseTranslation.__workletHash = 13668627211373;
releaseTranslation.__initData = tmp4;
let closure_9 = createStyles.createStyles({ container: { flex: 1, overflow: "hidden" }, content: { flex: 1 } });
let closure_10 = { code: "(function ZoomLayoutGestureNativeTsx4(){let[cancelAnimation,scale,translateX,translateY]=this.__closure;cancelAnimation(scale);cancelAnimation(translateX);cancelAnimation(translateY);})" };
let closure_11 = { code: "(function ZoomLayoutGestureNativeTsx5(zoom){let[contentWidth,containerWidth,contentHeight,containerHeight]=this.__closure;return{x:Math.max(0,(contentWidth*zoom-containerWidth.get())/2),y:Math.max(0,(contentHeight*zoom-containerHeight.get())/2)};})" };
let closure_12 = { code: "(function ZoomLayoutGestureNativeTsx6(x,y,zoom){let[getTranslationBounds]=this.__closure;const bounds=getTranslationBounds(zoom);return{x:Math.max(-bounds.x,Math.min(bounds.x,x)),y:Math.max(-bounds.y,Math.min(bounds.y,y))};})" };
let closure_13 = { code: "(function ZoomLayoutGestureNativeTsx7(){let[clampTranslation,translateX,translateY,scale,withSpring,SPRING_CONFIG]=this.__closure;const position=clampTranslation(translateX.get(),translateY.get(),scale.get());if(position.x!==translateX.get())translateX.set(withSpring(position.x,SPRING_CONFIG));if(position.y!==translateY.get())translateY.set(withSpring(position.y,SPRING_CONFIG));})" };
let closure_14 = { code: "(function ZoomLayoutGestureNativeTsx8(event){let[stopAnimation,pinching,canFling,pinchStart,scale,translateX,translateY,containerWidth,containerHeight]=this.__closure;stopAnimation();pinching.set(true);canFling.set(false);pinchStart.set({scale:scale.get(),x:translateX.get(),y:translateY.get(),focalX:event.focalX-containerWidth.get()/2,focalY:event.focalY-containerHeight.get()/2,gestureScale:event.scale,pointers:event.numberOfPointers});})" };
let closure_15 = { code: "(function ZoomLayoutGestureNativeTsx9(event){let[containerWidth,containerHeight,pinchStart,scale,translateX,translateY,minimumZoomScale,maximumZoomScale,clampTranslation,panPosition]=this.__closure;if(event.numberOfPointers<2)return;const focalX=event.focalX-containerWidth.get()/2;const focalY=event.focalY-containerHeight.get()/2;const start=pinchStart.get();if(event.numberOfPointers!==start.pointers){pinchStart.set({scale:scale.get(),x:translateX.get(),y:translateY.get(),focalX:focalX,focalY:focalY,gestureScale:event.scale,pointers:event.numberOfPointers});return;}const nextScale=Math.max(minimumZoomScale,Math.min(maximumZoomScale,start.scale*event.scale/start.gestureScale));const ratio=nextScale/start.scale;const position=clampTranslation(focalX+(start.x-start.focalX)*ratio,focalY+(start.y-start.focalY)*ratio,nextScale);scale.set(nextScale);translateX.set(position.x);translateY.set(position.y);panPosition.set(position);})" };
let closure_16 = { code: "(function ZoomLayoutGestureNativeTsx10(){let[pinching,returnToBounds]=this.__closure;if(!pinching.get())return;pinching.set(false);returnToBounds();})" };
let closure_17 = { code: "(function ZoomLayoutGestureNativeTsx11(){let[panInterrupted,canFling,scale,minimumZoomScale,stopAnimation,touchStoppedAnimation]=this.__closure;panInterrupted.set(false);canFling.set(false);if(scale.get()<=minimumZoomScale)return;stopAnimation();touchStoppedAnimation.set(true);})" };
let closure_18 = { code: "(function ZoomLayoutGestureNativeTsx12(event,manager){let[panInterrupted,scale,minimumZoomScale,canFling]=this.__closure;if(panInterrupted.get())return;if(event.numberOfTouches===1&&scale.get()>minimumZoomScale){canFling.set(true);manager.activate();}})" };
let closure_19 = { code: "(function ZoomLayoutGestureNativeTsx13(){let[panInterrupted,stopAnimation,translateX,translateY,clampTranslation,scale,panPosition,PAN_EDGE_RESISTANCE]=this.__closure;if(panInterrupted.get())return;stopAnimation();const x=translateX.get();const y=translateY.get();const clamped=clampTranslation(x,y,scale.get());panPosition.set({x:clamped.x+(x-clamped.x)/PAN_EDGE_RESISTANCE,y:clamped.y+(y-clamped.y)/PAN_EDGE_RESISTANCE});})" };
let closure_20 = { code: "(function ZoomLayoutGestureNativeTsx14(event){let[panInterrupted,scale,minimumZoomScale,panPosition,getTranslationBounds,translateX,resistTranslation,translateY]=this.__closure;if(panInterrupted.get()||event.numberOfPointers!==1||scale.get()<=minimumZoomScale)return;const previous=panPosition.get();const position={x:previous.x+event.changeX,y:previous.y+event.changeY};panPosition.set(position);const bounds=getTranslationBounds(scale.get());translateX.set(resistTranslation(position.x,bounds.x));translateY.set(resistTranslation(position.y,bounds.y));})" };
let closure_21 = { code: "(function ZoomLayoutGestureNativeTsx15(event,success){let[panInterrupted,pinching,canFling,returnToBounds,getTranslationBounds,scale,releaseTranslation,translateX,translateY]=this.__closure;if(panInterrupted.get())return;if(!success||pinching.get()||event.numberOfPointers>1)return;if(!canFling.get()){returnToBounds();return;}const bounds=getTranslationBounds(scale.get());releaseTranslation(translateX,bounds.x,event.velocityX);releaseTranslation(translateY,bounds.y,event.velocityY);})" };
let closure_22 = { code: "(function ZoomLayoutGestureNativeTsx16(_,success){let[touchStoppedAnimation,pinching,returnToBounds]=this.__closure;const shouldReturn=touchStoppedAnimation.get();touchStoppedAnimation.set(false);if(!success&&shouldReturn&&!pinching.get())returnToBounds();})" };
let closure_23 = { code: "(function ZoomLayoutGestureNativeTsx17(){let[translateX,translateY,scale]=this.__closure;return{transform:[{translateX:translateX.get()},{translateY:translateY.get()},{scale:scale.get()}]};})" };
let closure_24 = { code: "(function ZoomLayoutGestureNativeTsx18(){let[stopAnimation,touchStoppedAnimation,panInterrupted,minimumZoomScale,maximumZoomScale,requestedScale,scale,x,containerWidth,y,containerHeight,clampTranslation,translateX,translateY,animated,withSpring,SPRING_CONFIG]=this.__closure;stopAnimation();touchStoppedAnimation.set(false);panInterrupted.set(true);const nextScale=Math.max(minimumZoomScale,Math.min(maximumZoomScale,requestedScale));const ratio=nextScale/scale.get();const focalX=x-containerWidth.get()/2;const focalY=y-containerHeight.get()/2;const position=clampTranslation(focalX+(translateX.get()-focalX)*ratio,focalY+(translateY.get()-focalY)*ratio,nextScale);scale.set(animated?withSpring(nextScale,SPRING_CONFIG):nextScale);translateX.set(animated?withSpring(position.x,SPRING_CONFIG):position.x);translateY.set(animated?withSpring(position.y,SPRING_CONFIG):position.y);})" };
let closure_25 = { code: "(function ZoomLayoutGestureNativeTsx19(){let[stopAnimation,touchStoppedAnimation,panInterrupted,scale,animated,withSpring,minimumZoomScale,SPRING_CONFIG,translateX,translateY]=this.__closure;stopAnimation();touchStoppedAnimation.set(false);panInterrupted.set(true);scale.set(animated?withSpring(minimumZoomScale,SPRING_CONFIG):minimumZoomScale);translateX.set(animated?withSpring(0,SPRING_CONFIG):0);translateY.set(animated?withSpring(0,SPRING_CONFIG):0);})" };
const memoResult = react.memo(function ZoomLayoutGesture(onCreateGesture) {
  let children;
  let contentHeight;
  let contentWidth;
  let items18;
  let items19;
  let obj13;
  let obj14;
  let ref;
  let style;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp26;
  let tmp27;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp40;
  let tmp41;
  let tmp42;
  let tmp43;
  let zoomScale;
  onCreateGesture = onCreateGesture.onCreateGesture;
  const onLayout = onCreateGesture.onLayout;
  let flag = onCreateGesture.gestureEnabled;
  ({ ref, children, style } = onCreateGesture);
  if (flag === undefined) {
    flag = true;
  }
  let num = onCreateGesture.minimumZoomScale;
  if (num === undefined) {
    num = 1;
  }
  let num2 = onCreateGesture.maximumZoomScale;
  if (num2 === undefined) {
    num2 = 4;
  }
  ({ contentWidth, contentHeight, zoomScale } = onCreateGesture);
  let sharedValue3;
  let callback;
  let callback1;
  let callback2;
  let callback21;
  let memo;
  let memo1;
  let tmp = sharedValue3();
  let tmp2 = onCreateGesture;
  let tmp3 = flag;
  obj = onCreateGesture(flag[5]);
  const sharedValue = obj.useSharedValue(0);
  const obj2 = onCreateGesture(flag[5]);
  const sharedValue1 = obj2.useSharedValue(0);
  const obj3 = onCreateGesture(flag[5]);
  const sharedValue2 = obj3.useSharedValue(0);
  const obj4 = onCreateGesture(flag[5]);
  sharedValue3 = obj4.useSharedValue(0);
  const obj5 = onCreateGesture(flag[5]);
  const sharedValue4 = obj5.useSharedValue({ x: 0, y: 0 });
  const obj6 = onCreateGesture(flag[5]);
  const sharedValue5 = obj6.useSharedValue(false);
  const obj7 = onCreateGesture(flag[5]);
  const sharedValue6 = obj7.useSharedValue(false);
  const obj8 = onCreateGesture(flag[5]);
  const sharedValue7 = obj8.useSharedValue(false);
  const obj9 = onCreateGesture(flag[5]);
  const sharedValue8 = obj9.useSharedValue(false);
  const obj10 = onCreateGesture(flag[5]);
  const sharedValue9 = obj10.useSharedValue({ scale: 1, x: 0, y: 0, focalX: 0, focalY: 0, gestureScale: 1, pointers: 0 });
  let items = [sharedValue4, , , , ];
  const useCallback = num.useCallback;
  items[1] = onCreateGesture(flag[5]).cancelAnimation;
  items[2] = zoomScale;
  items[3] = sharedValue2;
  items[4] = sharedValue3;
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp14, tmp15, tmp16, tmp17, tmp18] = items;
  class ZoomLayoutGestureNativeTsx4 {
    constructor() {
      _undefined(c1);
      _undefined(c2);
      _undefined(c3);
    }
  }
  let items1 = [tmp15, tmp16, tmp17, tmp18];
  ZoomLayoutGestureNativeTsx4.__closure = items1;
  ZoomLayoutGestureNativeTsx4.__workletHash = 12077393304849;
  ZoomLayoutGestureNativeTsx4.__initData = tmp14;
  let items2 = [zoomScale, sharedValue2, sharedValue3];
  callback = useCallback(ZoomLayoutGestureNativeTsx4, items2);
  let items3 = [sharedValue5, contentWidth, sharedValue, contentHeight, sharedValue1];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp20, tmp21, tmp22, tmp23, tmp24] = items3;
  class ZoomLayoutGestureNativeTsx5 {
    constructor(arg0) {
      let result;
      let result1;
      const point = { x: Math.max(0, (result - _undefined.get()) / 2), y: Math.max(0, (result1 - _undefined2.get()) / 2) };
      result = c0 * arg0;
      result1 = c2 * arg0;
      return point;
    }
  }
  let items4 = [tmp21, tmp22, tmp23, tmp24];
  ZoomLayoutGestureNativeTsx5.__closure = items4;
  ZoomLayoutGestureNativeTsx5.__workletHash = 4656744008551;
  ZoomLayoutGestureNativeTsx5.__initData = tmp20;
  let items5 = [contentWidth, contentHeight, sharedValue, sharedValue1];
  callback1 = obj11.useCallback(ZoomLayoutGestureNativeTsx5, items5);
  let items6 = [sharedValue6, callback1];
  c0 = undefined;
  [tmp26, tmp27] = items6;
  class ZoomLayoutGestureNativeTsx6 {
    constructor(arg0, arg1, arg2) {
      const point = _undefined(arg2);
      const point1 = { x: Math.max(tmp, Math.min(point.x, arg0)), y: Math.max(tmp2, Math.min(point.y, arg1)) };
      return point1;
    }
  }
  let items7 = [tmp27];
  ZoomLayoutGestureNativeTsx6.__closure = items7;
  ZoomLayoutGestureNativeTsx6.__workletHash = 9317273254044;
  ZoomLayoutGestureNativeTsx6.__initData = tmp26;
  let items8 = [callback1];
  callback2 = obj11.useCallback(ZoomLayoutGestureNativeTsx6, items8);
  let items9 = [sharedValue7, callback2, sharedValue2, sharedValue3, zoomScale, , ];
  const useCallback2 = num.useCallback;
  items9[5] = tmp2(tmp3[4]).withSpring;
  items9[6] = sharedValue;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  let c4;
  let c5;
  [tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35] = items9;
  class ZoomLayoutGestureNativeTsx7 {
    constructor() {
      const value = _undefined2.get();
      const value2 = _undefined3.get();
      const point = _undefined(value, value2, _undefined4.get());
      obj = _undefined2;
      if (point.x !== _undefined2.get()) {
        const result = obj.set(_undefined5(point.x, c5));
      }
      if (point.y !== _undefined3.get()) {
        const result1 = obj2.set(_undefined5(point.y, c5));
      }
    }
  }
  let items10 = [tmp30, tmp31, tmp32, tmp33, tmp34, tmp35];
  ZoomLayoutGestureNativeTsx7.__closure = items10;
  ZoomLayoutGestureNativeTsx7.__workletHash = 13954530779581;
  ZoomLayoutGestureNativeTsx7.__initData = tmp29;
  let items11 = [callback2, zoomScale, sharedValue2, sharedValue3];
  callback21 = useCallback2(ZoomLayoutGestureNativeTsx7, items11);
  const items12 = [flag, callback, sharedValue5, sharedValue6, sharedValue9, zoomScale, sharedValue2, sharedValue3, sharedValue4, sharedValue, sharedValue1, num, num2, callback2, callback21];
  memo = obj11.useMemo(() => {
    let tmp10;
    let tmp11;
    let tmp12;
    let tmp13;
    let tmp14;
    let tmp15;
    let tmp16;
    let tmp17;
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
    let tmp29;
    let tmp30;
    let tmp31;
    let tmp8;
    let tmp9;
    const Gesture = LegacyBaseButton.Gesture;
    const items = [closure_14, callback, sharedValue5, sharedValue6, sharedValue9, zoomScale, sharedValue2, sharedValue3, sharedValue, sharedValue1];
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    let c7;
    let c8;
    [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items;
    const PinchResult = Gesture.Pinch();
    const enabledResult = PinchResult.enabled(flag);
    class ZoomLayoutGestureNativeTsx8 {
      constructor(arg0) {
        tmp = closure_0();
        result = closure_1.set(true);
        result1 = closure_2.set(false);
        point = { scale: closure_4.get(), x: closure_5.get(), y: closure_6.get(), focalX: arg0.focalX - closure_7.get() / 2, focalY: arg0.focalY - closure_8.get() / 2, gestureScale: arg0.scale, pointers: arg0.numberOfPointers };
        set = closure_3.set;
        result2 = set(point);
        return;
      }
    }
    const items1 = [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17];
    ZoomLayoutGestureNativeTsx8.__closure = items1;
    ZoomLayoutGestureNativeTsx8.__workletHash = 6554303942353;
    ZoomLayoutGestureNativeTsx8.__initData = tmp8;
    const items2 = [closure_15, sharedValue, sharedValue1, sharedValue9, zoomScale, sharedValue2, sharedValue3, num, num2, callback2, sharedValue4];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    c8 = undefined;
    let c9;
    [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28] = items2;
    const onStartResult = enabledResult.onStart(ZoomLayoutGestureNativeTsx8);
    const tmp = sharedValue5;
    class ZoomLayoutGestureNativeTsx9 {
      constructor(arg0) {
        if (arg0.numberOfPointers >= 2) {
          tmp19 = closure_0;
          diff = arg0.focalX - closure_0.get() / 2;
          tmp21 = closure_1;
          diff1 = arg0.focalY - closure_1.get() / 2;
          tmp23 = closure_2;
          point2 = closure_2.get();
          if (arg0.numberOfPointers === point2.pointers) {
            tmp5 = globalThis;
            _Math = Math;
            tmp6 = closure_6;
            _Math2 = Math;
            tmp7 = closure_7;
            bound = Math.max(closure_6, Math.min(closure_7, point2.scale * arg0.scale / point2.gestureScale));
            result = bound / point2.scale;
            tmp10 = closure_8;
            point = closure_8(diff + (point2.x - point2.focalX) * result, diff1 + (point2.y - point2.focalY) * result, bound);
            tmp11 = closure_3;
            result1 = closure_3.set(bound);
            tmp13 = closure_4;
            result2 = closure_4.set(point.x);
            tmp15 = closure_5;
            result3 = closure_5.set(point.y);
            tmp17 = closure_9;
            result4 = closure_9.set(point);
          } else {
            point1 = { scale: null, x: null, y: null, focalX: null, focalY: null, gestureScale: null, pointers: null };
            tmp = closure_3;
            set = tmp23.set;
            point1.scale = closure_3.get();
            tmp2 = closure_4;
            point1.x = closure_4.get();
            tmp3 = closure_5;
            point1.y = closure_5.get();
            point1.focalX = diff;
            point1.focalY = diff1;
            ({ scale: obj.gestureScale, numberOfPointers: obj.pointers } = arg0);
            result5 = set(point1);
          }
        }
        return;
      }
    }
    const items3 = [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28];
    ZoomLayoutGestureNativeTsx9.__closure = items3;
    ZoomLayoutGestureNativeTsx9.__workletHash = 10018523503809;
    ZoomLayoutGestureNativeTsx9.__initData = tmp18;
    const items4 = [closure_16, tmp, callback21];
    c0 = undefined;
    c1 = undefined;
    [tmp29, tmp30, tmp31] = items4;
    const onUpdateResult = onStartResult.onUpdate(ZoomLayoutGestureNativeTsx9);
    class ZoomLayoutGestureNativeTsx10 {
      constructor() {
        obj = closure_0;
        if (closure_0.get()) {
          flag = false;
          result = obj.set(false);
          tmp2 = closure_1;
          tmp3 = closure_1();
        }
        return;
      }
    }
    const items5 = [tmp30, tmp31];
    ZoomLayoutGestureNativeTsx10.__closure = items5;
    ZoomLayoutGestureNativeTsx10.__workletHash = 7035520443764;
    ZoomLayoutGestureNativeTsx10.__initData = tmp29;
    return onUpdateResult.onFinalize(ZoomLayoutGestureNativeTsx10);
  }, items12);
  const items13 = [flag, zoomScale, num, callback, callback2, callback1, sharedValue2, sharedValue3, sharedValue4, sharedValue5, sharedValue6, sharedValue7, sharedValue8, callback21];
  memo1 = obj11.useMemo(() => {
    let tmp10;
    let tmp11;
    let tmp12;
    let tmp13;
    let tmp14;
    let tmp15;
    let tmp16;
    let tmp17;
    let tmp18;
    let tmp22;
    let tmp23;
    let tmp24;
    let tmp25;
    let tmp26;
    let tmp27;
    let tmp28;
    let tmp29;
    let tmp30;
    let tmp32;
    let tmp33;
    let tmp34;
    let tmp35;
    let tmp36;
    let tmp37;
    let tmp38;
    let tmp39;
    let tmp40;
    let tmp43;
    let tmp44;
    let tmp45;
    let tmp46;
    let tmp47;
    let tmp48;
    let tmp49;
    let tmp50;
    let tmp51;
    let tmp52;
    let tmp53;
    let tmp54;
    let tmp55;
    let tmp56;
    let tmp7;
    let tmp8;
    let tmp9;
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const items = [closure_17, , , , , , ];
    let tmp = sharedValue7;
    items[1] = sharedValue7;
    let tmp2 = sharedValue6;
    items[2] = sharedValue6;
    items[3] = zoomScale;
    items[4] = num;
    items[5] = callback;
    items[6] = sharedValue8;
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13] = items;
    const enabledResult = PanResult.enabled(flag);
    const manualActivationResult = enabledResult.manualActivation(true);
    class ZoomLayoutGestureNativeTsx11 {
      constructor() {
        result = closure_0.set(false);
        result1 = closure_1.set(false);
        if (closure_2.get() > closure_3) {
          tmp3 = closure_4;
          tmp4 = closure_4();
          tmp5 = closure_5;
          flag = true;
          result2 = closure_5.set(true);
        }
        return;
      }
    }
    const items1 = [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13];
    ZoomLayoutGestureNativeTsx11.__closure = items1;
    ZoomLayoutGestureNativeTsx11.__workletHash = 6030949190530;
    ZoomLayoutGestureNativeTsx11.__initData = tmp7;
    const items2 = [closure_18, tmp, tmp3, tmp4, tmp2];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    [tmp14, tmp15, tmp16, tmp17, tmp18] = items2;
    const onTouchesDownResult = manualActivationResult.onTouchesDown(ZoomLayoutGestureNativeTsx11);
    const tmp5 = callback;
    const tmp6 = sharedValue8;
    class ZoomLayoutGestureNativeTsx12 {
      constructor(arg0, arg1) {
        if (!closure_0.get()) {
          tmp = arg0;
          num = 1;
          tmp2 = 1 === arg0.numberOfTouches;
          if (tmp2) {
            tmp3 = closure_1;
            tmp4 = closure_2;
            tmp2 = closure_1.get() > closure_2;
          }
          if (tmp2) {
            tmp5 = arg1;
            tmp6 = closure_3;
            flag = true;
            result = closure_3.set(true);
            activateResult = arg1.activate();
          }
        }
        return;
      }
    }
    const items3 = [tmp15, tmp16, tmp17, tmp18];
    ZoomLayoutGestureNativeTsx12.__closure = items3;
    ZoomLayoutGestureNativeTsx12.__workletHash = 1838143506383;
    ZoomLayoutGestureNativeTsx12.__initData = tmp14;
    const items4 = [closure_19, tmp, tmp5, sharedValue2, sharedValue3, callback2, tmp3, sharedValue4, 0.3];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    let c6;
    let c7;
    [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30] = items4;
    const onTouchesMoveResult = onTouchesDownResult.onTouchesMove(ZoomLayoutGestureNativeTsx12);
    class ZoomLayoutGestureNativeTsx13 {
      constructor() {
        if (!closure_0.get()) {
          tmp = closure_1;
          tmp2 = closure_1();
          tmp3 = closure_2;
          value = closure_2.get();
          tmp5 = closure_3;
          value1 = closure_3.get();
          tmp7 = closure_4;
          tmp8 = closure_5;
          point = closure_4(value, value1, closure_5.get());
          tmp9 = closure_6;
          point1 = { x: null, y: null };
          tmp10 = closure_7;
          point1.x = point.x + (value - point.x) / closure_7;
          point1.y = point.y + (value1 - point.y) / closure_7;
          result = closure_6.set(point1);
        }
        return;
      }
    }
    const items5 = [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30];
    ZoomLayoutGestureNativeTsx13.__closure = items5;
    ZoomLayoutGestureNativeTsx13.__workletHash = 7963059043371;
    ZoomLayoutGestureNativeTsx13.__initData = tmp22;
    const items6 = [closure_20, tmp, tmp3, tmp4, sharedValue4, callback1, sharedValue2, resistTranslation, sharedValue3];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    [tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40] = items6;
    const onStartResult = onTouchesMoveResult.onStart(ZoomLayoutGestureNativeTsx13);
    class ZoomLayoutGestureNativeTsx14 {
      constructor(arg0) {
        if (!closure_0.get()) {
          tmp = arg0;
          num = 1;
          if (1 === arg0.numberOfPointers) {
            obj = closure_1;
            tmp2 = closure_2;
            if (closure_1.get() > closure_2) {
              tmp3 = closure_3;
              point = closure_3.get();
              point2 = { x: null, y: null };
              point2.x = point.x + arg0.changeX;
              point2.y = point.y + arg0.changeY;
              result = closure_3.set(point2);
              tmp5 = closure_4;
              point3 = closure_4(obj.get());
              tmp6 = closure_5;
              tmp7 = closure_6;
              result1 = closure_5.set(closure_6(point2.x, point3.x));
              tmp9 = closure_7;
              result2 = closure_7.set(closure_6(point2.y, point3.y));
            }
          }
        }
        return;
      }
    }
    const items7 = [tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40];
    ZoomLayoutGestureNativeTsx14.__closure = items7;
    ZoomLayoutGestureNativeTsx14.__workletHash = 2662631838600;
    ZoomLayoutGestureNativeTsx14.__initData = tmp32;
    const items8 = [closure_21, tmp, sharedValue5, tmp2, callback21, callback1, tmp3, releaseTranslation, sharedValue2, sharedValue3];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    let c8;
    [tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52] = items8;
    const onChangeResult = onStartResult.onChange(ZoomLayoutGestureNativeTsx14);
    class ZoomLayoutGestureNativeTsx15 {
      constructor(arg0, arg1) {
        if (!closure_0.get()) {
          tmp = arg1;
          if (tmp) {
            tmp2 = closure_1;
            if (!closure_1.get()) {
              tmp3 = arg0;
              num = 1;
              if (arg0.numberOfPointers <= 1) {
                tmp4 = closure_2;
                if (closure_2.get()) {
                  tmp7 = closure_4;
                  tmp8 = closure_5;
                  point = closure_4(closure_5.get());
                  tmp9 = closure_6;
                  tmp10 = closure_7;
                  tmp11 = closure_6(closure_7, point.x, arg0.velocityX);
                  tmp12 = closure_8;
                  tmp13 = closure_6(closure_8, point.y, arg0.velocityY);
                } else {
                  tmp5 = closure_3;
                  tmp6 = closure_3();
                }
              }
            }
          }
        }
        return;
      }
    }
    const items9 = [tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52];
    ZoomLayoutGestureNativeTsx15.__closure = items9;
    ZoomLayoutGestureNativeTsx15.__workletHash = 929238165786;
    ZoomLayoutGestureNativeTsx15.__initData = tmp43;
    const items10 = [closure_22, tmp6, sharedValue5, callback21];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    [tmp53, tmp54, tmp55, tmp56] = items10;
    const onEndResult = onChangeResult.onEnd(ZoomLayoutGestureNativeTsx15);
    class ZoomLayoutGestureNativeTsx16 {
      constructor(arg0, arg1) {
        value1 = arg1;
        value = closure_0.get();
        result = closure_0.set(false);
        if (!arg1) {
          value1 = !value;
        }
        if (!value1) {
          tmp4 = closure_1;
          value1 = closure_1.get();
        }
        if (!value1) {
          tmp5 = closure_2;
          tmp6 = closure_2();
        }
        return;
      }
    }
    const items11 = [tmp54, tmp55, tmp56];
    ZoomLayoutGestureNativeTsx16.__closure = items11;
    ZoomLayoutGestureNativeTsx16.__workletHash = 14950204314849;
    ZoomLayoutGestureNativeTsx16.__initData = tmp53;
    return onEndResult.onFinalize(ZoomLayoutGestureNativeTsx16);
  }, items13);
  const items14 = [onCreateGesture, memo, memo1];
  const memo2 = obj11.useMemo(() => {
    let SimultaneousResult;
    if (onCreateGesture != null) {
      SimultaneousResult = tmp(memo, memo1);
    }
    if (SimultaneousResult == null) {
      const Gesture = LegacyBaseButton.Gesture;
      SimultaneousResult = Gesture.Simultaneous(memo, memo1);
    }
    return SimultaneousResult;
  }, items14);
  const items15 = [closure_23, sharedValue2, sharedValue3, zoomScale];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp40, tmp41, tmp42, tmp43] = items15;
  const tmp2Result = tmp2(tmp3[5]);
  class ZoomLayoutGestureNativeTsx17 {
    constructor() {
      let items;
      obj = { transform: items };
      items = [{ translateX: _undefined.get() }, , ];
      ({ translateX: _undefined.get() });
      items[1] = { translateY: _undefined2.get() };
      ({ translateY: _undefined2.get() });
      items[2] = { scale: _undefined3.get() };
      ({ scale: _undefined3.get() });
      return obj;
    }
  }
  const items16 = [tmp41, tmp42, tmp43];
  ZoomLayoutGestureNativeTsx17.__closure = items16;
  ZoomLayoutGestureNativeTsx17.__workletHash = 12652072835214;
  ZoomLayoutGestureNativeTsx17.__initData = tmp40;
  const items17 = [sharedValue, sharedValue1, onLayout];
  const animatedStyle = tmp2Result.useAnimatedStyle(ZoomLayoutGestureNativeTsx17);
  const callback3 = obj11.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
    const result1 = sharedValue1.set(nativeEvent.nativeEvent.layout.height);
    if (onLayout != null) {
      tmp3(nativeEvent);
    }
  }, items17);
  const imperativeHandle = obj11.useImperativeHandle(ref, () => {
    obj = {
      zoomTo(scale) {
        let tmp10;
        let tmp11;
        let tmp12;
        let tmp13;
        let tmp14;
        let tmp15;
        let tmp16;
        let tmp17;
        let tmp18;
        let tmp19;
        let tmp2;
        let tmp3;
        let tmp4;
        let tmp5;
        let tmp6;
        let tmp7;
        let tmp8;
        let tmp9;
        let x;
        let y;
        num = scale.scale;
        ({ x, y } = scale);
        if (num === undefined) {
          num = 2;
        }
        flag = scale.animated;
        if (flag === undefined) {
          flag = true;
        }
        const items = [closure_2_24, callback, sharedValue8, sharedValue7, set, num2, num, zoomScale, x, closure_1_6, y, sharedValue1, callback2, sharedValue2, set2, flag, , ];
        const scheduleOnUI = onCreateGesture(flag[8]).scheduleOnUI;
        const tmp = onCreateGesture(flag[8]);
        items[16] = onCreateGesture(flag[4]).withSpring;
        items[17] = sharedValue;
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
        let c10;
        let c11;
        let c12;
        let c13;
        let c14;
        let c15;
        let c16;
        [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19] = items;
        class ZoomLayoutGestureNativeTsx18 {
          constructor() {
            tmp = closure_0();
            result = closure_1.set(false);
            result1 = closure_2.set(true);
            bound = Math.max(closure_3, Math.min(closure_4, closure_5));
            tmp5 = closure_6;
            result2 = bound / closure_6.get();
            diff = closure_7 - closure_8.get() / 2;
            diff1 = closure_9 - closure_10.get() / 2;
            tmp9 = closure_12;
            tmp11 = closure_13;
            result3 = (closure_12.get() - diff) * result2;
            point = closure_11(diff + result3, diff1 + (closure_13.get() - diff1) * result2, bound);
            tmp12 = closure_14;
            tmp13 = bound;
            set = closure_6.set;
            if (closure_14) {
              tmp14 = closure_15;
              tmp15 = closure_16;
              tmp13 = closure_15(bound, closure_16);
            }
            result4 = set(tmp13);
            set2 = tmp9.set;
            if (tmp12) {
              tmp17 = closure_15;
              tmp18 = closure_16;
              x = closure_15(point.x, closure_16);
            } else {
              x = point.x;
            }
            set2Result = set2(x);
            set3 = tmp11.set;
            if (tmp12) {
              tmp20 = closure_15;
              tmp21 = closure_16;
              y = closure_15(point.y, closure_16);
            } else {
              y = point.y;
            }
            set3Result = set3(y);
            return;
          }
        }
        const items1 = [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19];
        ZoomLayoutGestureNativeTsx18.__closure = items1;
        ZoomLayoutGestureNativeTsx18.__workletHash = 12917402826720;
        ZoomLayoutGestureNativeTsx18.__initData = tmp2;
        scheduleOnUI(ZoomLayoutGestureNativeTsx18);
      },
      unzoom() {
        let tmp10;
        let tmp11;
        let tmp12;
        let tmp2;
        let tmp3;
        let tmp4;
        let tmp5;
        let tmp6;
        let tmp7;
        let tmp8;
        let tmp9;
        obj = arg0;
        if (arg0 === undefined) {
          obj = {};
        }
        flag = obj.animated;
        if (flag === undefined) {
          flag = true;
        }
        const items = [closure_2_25, callback, sharedValue8, sharedValue7, zoomScale, flag, , , , , ];
        const scheduleOnUI = onCreateGesture(flag[8]).scheduleOnUI;
        const tmp = onCreateGesture(flag[8]);
        items[6] = onCreateGesture(flag[4]).withSpring;
        items[7] = set;
        items[8] = sharedValue;
        items[9] = sharedValue2;
        items[10] = set2;
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
        [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
        class ZoomLayoutGestureNativeTsx19 {
          constructor() {
            tmp = closure_0();
            result = closure_1.set(false);
            result1 = closure_2.set(true);
            tmp5 = closure_4;
            tmp4 = closure_3;
            set = closure_3.set;
            if (closure_4) {
              tmp7 = closure_5;
              tmp8 = closure_6;
              tmp9 = closure_7;
              tmp6 = closure_5(closure_6, closure_7);
            } else {
              tmp6 = closure_6;
            }
            result2 = set(tmp6);
            num = 0;
            tmp11 = closure_8;
            set2 = closure_8.set;
            if (tmp5) {
              tmp12 = closure_5;
              tmp13 = closure_7;
              num = closure_5(0, closure_7);
            }
            set2Result = set2(num);
            num2 = 0;
            tmp15 = closure_9;
            set3 = closure_9.set;
            if (tmp5) {
              tmp16 = closure_5;
              tmp17 = closure_7;
              num2 = closure_5(0, closure_7);
            }
            set3Result = set3(num2);
            return;
          }
        }
        const items1 = [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
        ZoomLayoutGestureNativeTsx19.__closure = items1;
        ZoomLayoutGestureNativeTsx19.__workletHash = 16104393212129;
        ZoomLayoutGestureNativeTsx19.__initData = tmp2;
        scheduleOnUI(ZoomLayoutGestureNativeTsx19);
      }
    };
    return obj;
  });
  const obj12 = { gesture: memo2, children: zoomScale(num2, obj13) };
  obj13 = { collapsable: false, style: items18, onLayout: callback3, children: zoomScale(onLayout(tmp3[5]).View, obj14) };
  items18 = [tmp.container, style];
  const GestureDetector = tmp2(tmp3[7]).GestureDetector;
  obj14 = { style: items19, children };
  items19 = [tmp.content, animatedStyle];
  return zoomScale(GestureDetector, obj12);
});
let result = size.fileFinishedImporting("modules/zoom_layout/ZoomLayoutGesture.native.tsx");

export default memoResult;
