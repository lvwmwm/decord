// Module ID: 14196
// Function ID: 14197
// Name: ZoomLayoutGesture
// Dependencies: [19, 17, 21, 5194, 5233, 5038, 4969, 558, 576, 5283, 2]

// Module 14196 (ZoomLayoutGesture)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5038 */;
import reanimated_AccessibilityPreferencesSharedValue from "reanimated/AccessibilityPreferencesSharedValue" /* 5194 */;
import spring from "spring" /* 5233 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5283 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4969 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, obj, set, set2, set3;

const View = react_native.View;
const jsx = Fragment.jsx;
let SPRING_CONFIG = { damping: 20, stiffness: 250, overshootClamping: true };
let c7 = 0.3;
function resistTranslation(arg0, arg1) {
  const tmp = -arg1;
  const bound = Math.max(tmp, Math.min(arg1, arg0));
  return bound + (arg0 - bound) * c7;
}
resistTranslation.__closure = { PAN_EDGE_RESISTANCE: 0.3 };
resistTranslation.__workletHash = 4111916050524;
resistTranslation.__initData = { code: "function resistTranslation_ZoomLayoutGestureNativeTsx1(position,bound){const{PAN_EDGE_RESISTANCE}=this.__closure;const clamped=Math.max(-bound,Math.min(bound,position));return clamped+(position-clamped)*PAN_EDGE_RESISTANCE;}" };
const __initData = { code: "function ZoomLayoutGestureNativeTsx3(finished){const{bound,translation,withSpring,SPRING_CONFIG}=this.__closure;if(!finished)return;const restingPosition=Math.max(-bound,Math.min(bound,translation.get()));if(restingPosition!==translation.get())translation.set(withSpring(restingPosition,SPRING_CONFIG));}" };
function releaseTranslation(sharedValue2, point, velocityX) {
  let items;
  _require = sharedValue2;
  let closure_1 = point;
  const value = sharedValue2.get();
  const tmp2 = -point;
  let bound = Math.max(tmp2, Math.min(point, value));
  const bound1 = Math.max(-4000, Math.min(4000, velocityX));
  let tmp5 = _require;
  const accessibilityPreferencesSharedValue = require("reanimated/AccessibilityPreferencesSharedValue").accessibilityPreferencesSharedValue;
  if (accessibilityPreferencesSharedValue.get().reduceMotion) {
    let result = sharedValue2.set(bound);
  } else {
    let SPRING_CONFIG;
    if (value === bound) {
      if (0 !== point) {
        let _Math = Math;
        let _Math2 = Math;
        const bound2 = Math.min(48, 0.02 * Math.abs(bound1));
        SPRING_CONFIG = { velocity: bound1, deceleration: 0.998, clamp: items };
        items = [-point - bound2, point + bound2];
        const fn = function c(arg0) {
          const tmp = arg0;
          if (tmp) {
            const _Math = Math;
            const _Math2 = Math;
            const tmp4 = -point;
            const bound = Math.max(tmp4, Math.min(point, sharedValue2.get()));
            const tmp5 = sharedValue2;
            if (bound !== sharedValue2.get()) {
              set = tmp5.set;
              obj = spring;
              const result = set(obj.withSpring(bound, obj));
            }
          }
        };
        set2 = sharedValue2.set;
        const obj2 = { bound: point, translation: sharedValue2, withSpring: tmp5(5233).withSpring, SPRING_CONFIG };
        const withDecay = tmp5(5038).withDecay;
        tmp5(5038);
        fn.__closure = obj2;
        fn.__workletHash = 7034972790996;
        fn.__initData = __initData;
        set2(withDecay(SPRING_CONFIG, fn));
      }
    }
    set = sharedValue2.set;
    const tmp5Result2 = tmp5(5233);
    const result1 = set(tmp5Result2.withSpring(bound, SPRING_CONFIG));
  }
}
let obj2 = { MAX_PAN_VELOCITY: 4000, accessibilityPreferencesSharedValue: reanimated_AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue, withSpring: spring.withSpring, SPRING_CONFIG, MAX_FLING_OVERSHOOT: 48, withDecay: ReanimatedRexport.withDecay, PAN_DECELERATION: 0.998 };
releaseTranslation.__closure = obj2;
releaseTranslation.__workletHash = 13339877968106;
releaseTranslation.__initData = { code: "function releaseTranslation_ZoomLayoutGestureNativeTsx2(translation,bound,velocity){const{MAX_PAN_VELOCITY,accessibilityPreferencesSharedValue,withSpring,SPRING_CONFIG,MAX_FLING_OVERSHOOT,withDecay,PAN_DECELERATION}=this.__closure;const position=translation.get();const clamped=Math.max(-bound,Math.min(bound,position));const releaseVelocity=Math.max(-MAX_PAN_VELOCITY,Math.min(MAX_PAN_VELOCITY,velocity));if(accessibilityPreferencesSharedValue.get().reduceMotion){translation.set(clamped);}else if(position!==clamped||bound===0){translation.set(withSpring(clamped,SPRING_CONFIG));}else{const overshoot=Math.min(MAX_FLING_OVERSHOOT,Math.abs(releaseVelocity)*0.02);translation.set(withDecay({velocity:releaseVelocity,deceleration:PAN_DECELERATION,clamp:[-bound-overshoot,bound+overshoot]},function(finished){if(!finished)return;const restingPosition=Math.max(-bound,Math.min(bound,translation.get()));if(restingPosition!==translation.get())translation.set(withSpring(restingPosition,SPRING_CONFIG));}));}}" };
let closure_11 = createStyles.createStyles({ container: { flex: 1, overflow: "hidden" }, content: { flex: 1 } });
let closure_12 = { code: "function ZoomLayoutGestureNativeTsx4(){const{cancelAnimation,scale,translateX,translateY}=this.__closure;cancelAnimation(scale);cancelAnimation(translateX);cancelAnimation(translateY);}" };
let closure_13 = { code: "function ZoomLayoutGestureNativeTsx5(zoom){const{contentWidth,containerWidth,contentHeight,containerHeight}=this.__closure;return{x:Math.max(0,(contentWidth*zoom-containerWidth.get())/2),y:Math.max(0,(contentHeight*zoom-containerHeight.get())/2)};}" };
let closure_14 = { code: "function ZoomLayoutGestureNativeTsx6(x,y,zoom_0){const{getTranslationBounds}=this.__closure;const bounds=getTranslationBounds(zoom_0);return{x:Math.max(-bounds.x,Math.min(bounds.x,x)),y:Math.max(-bounds.y,Math.min(bounds.y,y))};}" };
let closure_15 = { code: "function ZoomLayoutGestureNativeTsx7(){const{clampTranslation,translateX,translateY,scale,withSpring,SPRING_CONFIG}=this.__closure;const position=clampTranslation(translateX.get(),translateY.get(),scale.get());if(position.x!==translateX.get()){translateX.set(withSpring(position.x,SPRING_CONFIG));}if(position.y!==translateY.get()){translateY.set(withSpring(position.y,SPRING_CONFIG));}}" };
let closure_16 = { code: "function ZoomLayoutGestureNativeTsx8(){const{pinching,returnToBounds}=this.__closure;if(!pinching.get()){return;}pinching.set(false);returnToBounds();}" };
let closure_17 = { code: "function ZoomLayoutGestureNativeTsx9(event_0){const{containerWidth,containerHeight,pinchStart,scale,translateX,translateY,minimumZoomScale,maximumZoomScale,clampTranslation,panPosition}=this.__closure;if(event_0.numberOfPointers<2){return;}var focalX=event_0.focalX-containerWidth.get()/2;var focalY=event_0.focalY-containerHeight.get()/2;var start=pinchStart.get();if(event_0.numberOfPointers!==start.pointers){pinchStart.set({scale:scale.get(),x:translateX.get(),y:translateY.get(),focalX:focalX,focalY:focalY,gestureScale:event_0.scale,pointers:event_0.numberOfPointers});return;}var nextScale=Math.max(minimumZoomScale,Math.min(maximumZoomScale,start.scale*event_0.scale/start.gestureScale));var ratio=nextScale/start.scale;var position_0=clampTranslation(focalX+(start.x-start.focalX)*ratio,focalY+(start.y-start.focalY)*ratio,nextScale);scale.set(nextScale);translateX.set(position_0.x);translateY.set(position_0.y);panPosition.set(position_0);}" };
let __initData2 = { code: "function ZoomLayoutGestureNativeTsx10(event){const{stopAnimation,pinching,canFling,pinchStart,scale,translateX,translateY,containerWidth,containerHeight}=this.__closure;stopAnimation();pinching.set(true);canFling.set(false);pinchStart.set({scale:scale.get(),x:translateX.get(),y:translateY.get(),focalX:event.focalX-containerWidth.get()/2,focalY:event.focalY-containerHeight.get()/2,gestureScale:event.scale,pointers:event.numberOfPointers});}" };
let closure_19 = { code: "function ZoomLayoutGestureNativeTsx11(_,success_0){const{touchStoppedAnimation,pinching,returnToBounds}=this.__closure;var shouldReturn=touchStoppedAnimation.get();touchStoppedAnimation.set(false);if(!success_0&&shouldReturn&&!pinching.get()){returnToBounds();}}" };
let closure_20 = { code: "function ZoomLayoutGestureNativeTsx12(event_3,success){const{panInterrupted,pinching,canFling,returnToBounds,getTranslationBounds,scale,releaseTranslation,translateX,translateY}=this.__closure;if(panInterrupted.get()){return;}if(!success||pinching.get()||event_3.numberOfPointers>1){return;}if(!canFling.get()){returnToBounds();return;}var bounds_1=getTranslationBounds(scale.get());releaseTranslation(translateX,bounds_1.x,event_3.velocityX);releaseTranslation(translateY,bounds_1.y,event_3.velocityY);}" };
let closure_21 = { code: "function ZoomLayoutGestureNativeTsx13(event_2){const{panInterrupted,scale,minimumZoomScale,panPosition,getTranslationBounds,translateX,resistTranslation,translateY}=this.__closure;if(panInterrupted.get()||event_2.numberOfPointers!==1||scale.get()<=minimumZoomScale){return;}var previous=panPosition.get();var position_1={x:previous.x+event_2.changeX,y:previous.y+event_2.changeY};panPosition.set(position_1);var bounds_0=getTranslationBounds(scale.get());translateX.set(resistTranslation(position_1.x,bounds_0.x));translateY.set(resistTranslation(position_1.y,bounds_0.y));}" };
let closure_22 = { code: "function ZoomLayoutGestureNativeTsx14(){const{panInterrupted,stopAnimation,translateX,translateY,clampTranslation,scale,panPosition,PAN_EDGE_RESISTANCE}=this.__closure;if(panInterrupted.get()){return;}stopAnimation();var x_0=translateX.get();var y_0=translateY.get();var clamped=clampTranslation(x_0,y_0,scale.get());panPosition.set({x:clamped.x+(x_0-clamped.x)/PAN_EDGE_RESISTANCE,y:clamped.y+(y_0-clamped.y)/PAN_EDGE_RESISTANCE});}" };
let closure_23 = { code: "function ZoomLayoutGestureNativeTsx15(event_1,manager){const{panInterrupted,scale,minimumZoomScale,canFling}=this.__closure;if(panInterrupted.get()){return;}if(event_1.numberOfTouches===1&&scale.get()>minimumZoomScale){canFling.set(true);manager.activate();}}" };
const __initData3 = { code: "function ZoomLayoutGestureNativeTsx16(){const{panInterrupted,canFling,scale,minimumZoomScale,stopAnimation,touchStoppedAnimation}=this.__closure;panInterrupted.set(false);canFling.set(false);if(scale.get()<=minimumZoomScale){return;}stopAnimation();touchStoppedAnimation.set(true);}" };
const __initData4 = { code: "function ZoomLayoutGestureNativeTsx17(){const{translateX,translateY,scale}=this.__closure;return{transform:[{translateX:translateX.get()},{translateY:translateY.get()},{scale:scale.get()}]};}" };
let closure_26 = { code: "function ZoomLayoutGestureNativeTsx18(){const{stopAnimation,touchStoppedAnimation,panInterrupted,minimumZoomScale,maximumZoomScale,requestedScale,scale,x_1,containerWidth,y_1,containerHeight,clampTranslation,translateX,translateY,animated,withSpring,SPRING_CONFIG}=this.__closure;stopAnimation();touchStoppedAnimation.set(false);panInterrupted.set(true);const nextScale_0=Math.max(minimumZoomScale,Math.min(maximumZoomScale,requestedScale));const ratio_0=nextScale_0/scale.get();const focalX_0=x_1-containerWidth.get()/2;const focalY_0=y_1-containerHeight.get()/2;const position_2=clampTranslation(focalX_0+(translateX.get()-focalX_0)*ratio_0,focalY_0+(translateY.get()-focalY_0)*ratio_0,nextScale_0);scale.set(animated?withSpring(nextScale_0,SPRING_CONFIG):nextScale_0);translateX.set(animated?withSpring(position_2.x,SPRING_CONFIG):position_2.x);translateY.set(animated?withSpring(position_2.y,SPRING_CONFIG):position_2.y);}" };
let closure_27 = { code: "function ZoomLayoutGestureNativeTsx19(){const{stopAnimation,touchStoppedAnimation,panInterrupted,scale,animated_0,withSpring,minimumZoomScale,SPRING_CONFIG,translateX,translateY}=this.__closure;stopAnimation();touchStoppedAnimation.set(false);panInterrupted.set(true);scale.set(animated_0?withSpring(minimumZoomScale,SPRING_CONFIG):minimumZoomScale);translateX.set(animated_0?withSpring(0,SPRING_CONFIG):0);translateY.set(animated_0?withSpring(0,SPRING_CONFIG):0);}" };
const __initData5 = { code: "function ZoomLayoutGestureNativeTsx20(){const{cancelAnimation,scale,translateX,translateY}=this.__closure;cancelAnimation(scale);cancelAnimation(translateX);cancelAnimation(translateY);}" };
const __initData6 = { code: "function ZoomLayoutGestureNativeTsx21(zoom){const{contentWidth,containerWidth,contentHeight,containerHeight}=this.__closure;return{x:Math.max(0,(contentWidth*zoom-containerWidth.get())/2),y:Math.max(0,(contentHeight*zoom-containerHeight.get())/2)};}" };
const __initData7 = { code: "function ZoomLayoutGestureNativeTsx22(x,y,zoom_0){const{getTranslationBounds}=this.__closure;const bounds=getTranslationBounds(zoom_0);return{x:Math.max(-bounds.x,Math.min(bounds.x,x)),y:Math.max(-bounds.y,Math.min(bounds.y,y))};}" };
const __initData8 = { code: "function ZoomLayoutGestureNativeTsx23(){const{clampTranslation,translateX,translateY,scale,withSpring,SPRING_CONFIG}=this.__closure;const position=clampTranslation(translateX.get(),translateY.get(),scale.get());if(position.x!==translateX.get())translateX.set(withSpring(position.x,SPRING_CONFIG));if(position.y!==translateY.get())translateY.set(withSpring(position.y,SPRING_CONFIG));}" };
let closure_32 = { code: "function ZoomLayoutGestureNativeTsx24(){const{pinching,returnToBounds}=this.__closure;if(!pinching.get())return;pinching.set(false);returnToBounds();}" };
let closure_33 = { code: "function ZoomLayoutGestureNativeTsx25(event_0){const{containerWidth,containerHeight,pinchStart,scale,translateX,translateY,minimumZoomScale,maximumZoomScale,clampTranslation,panPosition}=this.__closure;if(event_0.numberOfPointers<2)return;const focalX=event_0.focalX-containerWidth.get()/2;const focalY=event_0.focalY-containerHeight.get()/2;const start=pinchStart.get();if(event_0.numberOfPointers!==start.pointers){pinchStart.set({scale:scale.get(),x:translateX.get(),y:translateY.get(),focalX:focalX,focalY:focalY,gestureScale:event_0.scale,pointers:event_0.numberOfPointers});return;}const nextScale=Math.max(minimumZoomScale,Math.min(maximumZoomScale,start.scale*event_0.scale/start.gestureScale));const ratio=nextScale/start.scale;const position_0=clampTranslation(focalX+(start.x-start.focalX)*ratio,focalY+(start.y-start.focalY)*ratio,nextScale);scale.set(nextScale);translateX.set(position_0.x);translateY.set(position_0.y);panPosition.set(position_0);}" };
let closure_34 = { code: "function ZoomLayoutGestureNativeTsx26(event){const{stopAnimation,pinching,canFling,pinchStart,scale,translateX,translateY,containerWidth,containerHeight}=this.__closure;stopAnimation();pinching.set(true);canFling.set(false);pinchStart.set({scale:scale.get(),x:translateX.get(),y:translateY.get(),focalX:event.focalX-containerWidth.get()/2,focalY:event.focalY-containerHeight.get()/2,gestureScale:event.scale,pointers:event.numberOfPointers});}" };
let closure_35 = { code: "function ZoomLayoutGestureNativeTsx27(_,success_0){const{touchStoppedAnimation,pinching,returnToBounds}=this.__closure;const shouldReturn=touchStoppedAnimation.get();touchStoppedAnimation.set(false);if(!success_0&&shouldReturn&&!pinching.get())returnToBounds();}" };
let closure_36 = { code: "function ZoomLayoutGestureNativeTsx28(event_3,success){const{panInterrupted,pinching,canFling,returnToBounds,getTranslationBounds,scale,releaseTranslation,translateX,translateY}=this.__closure;if(panInterrupted.get())return;if(!success||pinching.get()||event_3.numberOfPointers>1)return;if(!canFling.get()){returnToBounds();return;}const bounds_1=getTranslationBounds(scale.get());releaseTranslation(translateX,bounds_1.x,event_3.velocityX);releaseTranslation(translateY,bounds_1.y,event_3.velocityY);}" };
let closure_37 = { code: "function ZoomLayoutGestureNativeTsx29(event_2){const{panInterrupted,scale,minimumZoomScale,panPosition,getTranslationBounds,translateX,resistTranslation,translateY}=this.__closure;if(panInterrupted.get()||event_2.numberOfPointers!==1||scale.get()<=minimumZoomScale)return;const previous=panPosition.get();const position_1={x:previous.x+event_2.changeX,y:previous.y+event_2.changeY};panPosition.set(position_1);const bounds_0=getTranslationBounds(scale.get());translateX.set(resistTranslation(position_1.x,bounds_0.x));translateY.set(resistTranslation(position_1.y,bounds_0.y));}" };
let closure_38 = { code: "function ZoomLayoutGestureNativeTsx30(){const{panInterrupted,stopAnimation,translateX,translateY,clampTranslation,scale,panPosition,PAN_EDGE_RESISTANCE}=this.__closure;if(panInterrupted.get())return;stopAnimation();const x_0=translateX.get();const y_0=translateY.get();const clamped=clampTranslation(x_0,y_0,scale.get());panPosition.set({x:clamped.x+(x_0-clamped.x)/PAN_EDGE_RESISTANCE,y:clamped.y+(y_0-clamped.y)/PAN_EDGE_RESISTANCE});}" };
let closure_39 = { code: "function ZoomLayoutGestureNativeTsx31(event_1,manager){const{panInterrupted,scale,minimumZoomScale,canFling}=this.__closure;if(panInterrupted.get())return;if(event_1.numberOfTouches===1&&scale.get()>minimumZoomScale){canFling.set(true);manager.activate();}}" };
let closure_40 = { code: "function ZoomLayoutGestureNativeTsx32(){const{panInterrupted,canFling,scale,minimumZoomScale,stopAnimation,touchStoppedAnimation}=this.__closure;panInterrupted.set(false);canFling.set(false);if(scale.get()<=minimumZoomScale)return;stopAnimation();touchStoppedAnimation.set(true);}" };
const __initData9 = { code: "function ZoomLayoutGestureNativeTsx33(){const{translateX,translateY,scale}=this.__closure;return{transform:[{translateX:translateX.get()},{translateY:translateY.get()},{scale:scale.get()}]};}" };
let closure_42 = { code: "function ZoomLayoutGestureNativeTsx34(){const{stopAnimation,touchStoppedAnimation,panInterrupted,minimumZoomScale,maximumZoomScale,requestedScale,scale,x_1,containerWidth,y_1,containerHeight,clampTranslation,translateX,translateY,animated,withSpring,SPRING_CONFIG}=this.__closure;stopAnimation();touchStoppedAnimation.set(false);panInterrupted.set(true);const nextScale_0=Math.max(minimumZoomScale,Math.min(maximumZoomScale,requestedScale));const ratio_0=nextScale_0/scale.get();const focalX_0=x_1-containerWidth.get()/2;const focalY_0=y_1-containerHeight.get()/2;const position_2=clampTranslation(focalX_0+(translateX.get()-focalX_0)*ratio_0,focalY_0+(translateY.get()-focalY_0)*ratio_0,nextScale_0);scale.set(animated?withSpring(nextScale_0,SPRING_CONFIG):nextScale_0);translateX.set(animated?withSpring(position_2.x,SPRING_CONFIG):position_2.x);translateY.set(animated?withSpring(position_2.y,SPRING_CONFIG):position_2.y);}" };
let closure_43 = { code: "function ZoomLayoutGestureNativeTsx35(){const{stopAnimation,touchStoppedAnimation,panInterrupted,scale,animated_0,withSpring,minimumZoomScale,SPRING_CONFIG,translateX,translateY}=this.__closure;stopAnimation();touchStoppedAnimation.set(false);panInterrupted.set(true);scale.set(animated_0?withSpring(minimumZoomScale,SPRING_CONFIG):minimumZoomScale);translateX.set(animated_0?withSpring(0,SPRING_CONFIG):0);translateY.set(animated_0?withSpring(0,SPRING_CONFIG):0);}" };
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ZoomLayoutGesture(contentHeight) {
  let SimultaneousResult;
  let children;
  let closure_18;
  let contentWidth;
  let gestureEnabled;
  let maximumZoomScale;
  let minimumZoomScale;
  let onCreateGesture;
  let onLayout;
  let sharedValue5;
  let style;
  let tmp = onLayout;
  let tmp2 = contentHeight;
  obj = onLayout(contentHeight[8]);
  const cResult = obj.c(148);
  ({ children, style, onCreateGesture, onLayout } = contentHeight);
  ({ gestureEnabled, minimumZoomScale, maximumZoomScale, contentWidth } = contentHeight);
  contentHeight = contentHeight.contentHeight;
  const zoomScale = contentHeight.zoomScale;
  let num = 1;
  if (undefined !== minimumZoomScale) {
    num = minimumZoomScale;
  }
  let num2 = 4;
  if (undefined !== maximumZoomScale) {
    num2 = maximumZoomScale;
  }
  let tmp5 = sharedValue5();
  const tmpResult = tmp(tmp2[5]);
  const sharedValue = tmpResult.useSharedValue(0);
  const tmpResult11 = tmp(tmp2[5]);
  const sharedValue1 = tmpResult11.useSharedValue(0);
  const tmpResult12 = tmp(tmp2[5]);
  const sharedValue2 = tmpResult12.useSharedValue(0);
  const tmpResult13 = tmp(tmp2[5]);
  const sharedValue3 = tmpResult13.useSharedValue(0);
  const tmpResult14 = tmp(tmp2[5]);
  const sharedValue4 = tmpResult14.useSharedValue({ x: 0, y: 0 });
  const tmpResult15 = tmp(tmp2[5]);
  sharedValue5 = tmpResult15.useSharedValue(false);
  const tmpResult16 = tmp(tmp2[5]);
  const sharedValue6 = tmpResult16.useSharedValue(false);
  const tmpResult17 = tmp(tmp2[5]);
  const sharedValue7 = tmpResult17.useSharedValue(false);
  const tmpResult18 = tmp(tmp2[5]);
  const sharedValue8 = tmpResult18.useSharedValue(false);
  const tmpResult19 = tmp(tmp2[5]);
  const sharedValue9 = tmpResult19.useSharedValue({ scale: 1, x: 0, y: 0, focalX: 0, focalY: 0, gestureScale: 1, pointers: 0 });
  if (cResult[0] === zoomScale) {
    if (cResult[1] === sharedValue2) {
      let tmp16;
      if (cResult[2] === sharedValue3) {
        tmp16 = cResult[3];
      }
      closure_16 = tmp16;
      if (cResult[4] === sharedValue1) {
        if (cResult[5] === sharedValue) {
          if (cResult[6] === contentHeight) {
            let tmp17;
            let tmp21;
            if (cResult[7] === contentWidth) {
              tmp17 = cResult[8];
            }
            closure_17 = tmp17;
            if (cResult[9] !== tmp17) {
              function ut(arg0, arg1, arg2) {
                const point = closure_17(arg2);
                const point1 = { x: Math.max(tmp, Math.min(point.x, arg0)), y: Math.max(tmp2, Math.min(point.y, arg1)) };
                return point1;
              }
              let obj2 = { getTranslationBounds: tmp17 };
              ut.__closure = obj2;
              ut.__workletHash = 15864255111109;
              ut.__initData = sharedValue8;
              cResult[9] = tmp17;
              cResult[10] = ut;
              tmp21 = ut;
            } else {
              tmp21 = cResult[10];
            }
            __initData2 = tmp21;
            if (cResult[11] === tmp21) {
              if (cResult[12] === zoomScale) {
                if (cResult[13] === sharedValue2) {
                  let tmp23;
                  if (cResult[14] === sharedValue3) {
                    tmp23 = cResult[15];
                  }
                  closure_19 = tmp23;
                  if (cResult[16] === sharedValue6) {
                    if (cResult[17] === tmp21) {
                      if (cResult[18] === sharedValue1) {
                        if (cResult[19] === sharedValue) {
                          if (cResult[20] === (undefined === gestureEnabled || gestureEnabled)) {
                            if (cResult[21] === num2) {
                              if (cResult[22] === num) {
                                if (cResult[23] === sharedValue4) {
                                  if (cResult[24] === sharedValue9) {
                                    if (cResult[25] === sharedValue5) {
                                      if (cResult[26] === tmp23) {
                                        if (cResult[27] === zoomScale) {
                                          if (cResult[28] === tmp16) {
                                            if (cResult[29] === sharedValue2) {
                                              if (cResult[56] === sharedValue6) {
                                                if (cResult[57] === tmp21) {
                                                  if (cResult[58] === (undefined === gestureEnabled || gestureEnabled)) {
                                                    if (cResult[59] === tmp17) {
                                                      if (cResult[60] === num) {
                                                        if (cResult[61] === sharedValue7) {
                                                          if (cResult[62] === sharedValue4) {
                                                            if (cResult[63] === sharedValue5) {
                                                              if (cResult[64] === tmp23) {
                                                                if (cResult[65] === zoomScale) {
                                                                  if (cResult[66] === tmp16) {
                                                                    if (cResult[67] === sharedValue8) {
                                                                      if (cResult[68] === sharedValue2) {
                                                                        if (cResult[112] === onCreateGesture) {
                                                                          if (cResult[113] === tmp29) {
                                                                            function wt() {
                                                                              let items;
                                                                              obj = { transform: items };
                                                                              items = [{ translateX: sharedValue2.get() }, , ];
                                                                              ({ translateX: sharedValue2.get() });
                                                                              items[1] = { translateY: sharedValue3.get() };
                                                                              ({ translateY: sharedValue3.get() });
                                                                              items[2] = { scale: zoomScale.get() };
                                                                              ({ scale: zoomScale.get() });
                                                                              return obj;
                                                                            }
                                                                            const tmpResult20 = tmp(tmp2[5]);
                                                                            class ZoomLayoutGestureNativeTsx16 {
                                                                              constructor() {
                                                                                result = closure_13.set(false);
                                                                                result1 = closure_12.set(false);
                                                                                if (zoomScale.get() > minimumZoomScale) {
                                                                                  tmp3 = closure_16;
                                                                                  tmp4 = closure_16();
                                                                                  tmp5 = closure_14;
                                                                                  flag = true;
                                                                                  result2 = closure_14.set(true);
                                                                                }
                                                                                return;
                                                                              }
                                                                            }
                                                                            class ZoomLayoutGestureNativeTsx10 {
                                                                              constructor(arg0) {
                                                                                tmp = closure_16();
                                                                                result = closure_11.set(true);
                                                                                result1 = closure_12.set(false);
                                                                                point = { scale: zoomScale.get(), x: closure_8.get(), y: closure_9.get(), focalX: contentHeight.focalX - closure_6.get() / 2, focalY: contentHeight.focalY - closure_7.get() / 2, gestureScale: contentHeight.scale, pointers: contentHeight.numberOfPointers };
                                                                                set = closure_15.set;
                                                                                result2 = set(point);
                                                                                return;
                                                                              }
                                                                            }
                                                                            tmp35[1] = sharedValue3;
                                                                            tmp35[2] = zoomScale;
                                                                            wt.__closure = tmp35;
                                                                            wt.__workletHash = 13565307855671;
                                                                            wt.__initData = __initData4;
                                                                            const animatedStyle = tmpResult20.useAnimatedStyle(wt);
                                                                            if (cResult[116] === sharedValue1) {
                                                                              if (cResult[117] === sharedValue) {
                                                                                if (cResult[120] === tmp21) {
                                                                                  if (cResult[121] === sharedValue1) {
                                                                                    if (cResult[122] === sharedValue) {
                                                                                      if (cResult[123] === num2) {
                                                                                        if (cResult[124] === num) {
                                                                                          if (cResult[125] === sharedValue7) {
                                                                                            if (cResult[126] === zoomScale) {
                                                                                              if (cResult[127] === tmp16) {
                                                                                                if (cResult[128] === sharedValue8) {
                                                                                                  if (cResult[129] === sharedValue2) {
                                                                                                    class Mt {
                                                                                                      constructor() {
                                                                                                        obj = {
                                                                                                          zoomTo(arg0) {
                                                                                                                                                                                                                  let animated;
                                                                                                                                                                                                                  let closure_3;
                                                                                                                                                                                                                  let x = arg0.x;
                                                                                                                                                                                                                  let closure_0 = x;
                                                                                                                                                                                                                  let y = arg0.y;
                                                                                                                                                                                                                  let closure_1 = y;
                                                                                                                                                                                                                  ({ scale, animated } = arg0);
                                                                                                                                                                                                                  num = 2;
                                                                                                                                                                                                                  if (undefined !== scale) {
                                                                                                                                                                                                                    num = scale;
                                                                                                                                                                                                                  }
                                                                                                                                                                                                                  scale = tmp;
                                                                                                                                                                                                                  obj = onLayout(contentHeight[5]);
                                                                                                                                                                                                                  const fn = function n() { /* body not rendered: F159968 */ };
                                                                                                                                                                                                                  let obj2 = { stopAnimation, touchStoppedAnimation, panInterrupted, minimumZoomScale, maximumZoomScale, requestedScale: num, scale, x_1: x, containerWidth, y_1: y, containerHeight, clampTranslation, translateX, translateY, animated: tmp, withSpring: onLayout(contentHeight[4]).withSpring, SPRING_CONFIG };
                                                                                                                                                                                                                  fn.__closure = obj2;
                                                                                                                                                                                                                  fn.__workletHash = 8380953020180;
                                                                                                                                                                                                                  fn.__initData = __initData;
                                                                                                                                                                                                                  obj.runOnUI(fn)();
                                                                                                                                                                                                                },
                                                                                                          unzoom(arg0) {
                                                                                                                                                                                                                  obj = arg0;
                                                                                                                                                                                                                  if (undefined === arg0) {
                                                                                                                                                                                                                    obj = {};
                                                                                                                                                                                                                  }
                                                                                                                                                                                                                  const animated = obj.animated;
                                                                                                                                                                                                                  let closure_0 = tmp;
                                                                                                                                                                                                                  let obj2 = onLayout(contentHeight[5]);
                                                                                                                                                                                                                  const fn = function n() { /* body not rendered: F159969 */ };
                                                                                                                                                                                                                  let obj3 = { stopAnimation, touchStoppedAnimation, panInterrupted, scale, animated_0: tmp, withSpring: onLayout(contentHeight[4]).withSpring, minimumZoomScale, SPRING_CONFIG, translateX, translateY };
                                                                                                                                                                                                                  fn.__closure = obj3;
                                                                                                                                                                                                                  fn.__workletHash = 7952194524856;
                                                                                                                                                                                                                  fn.__initData = __initData2;
                                                                                                                                                                                                                  obj2.runOnUI(fn)();
                                                                                                                                                                                                                }
                                                                                                        };
                                                                                                        return obj;
                                                                                                      }
                                                                                                    }
                                                                                                    class ZoomLayoutGestureNativeTsx16 {
                                                                                                      constructor() {
                                                                                                        result = closure_13.set(false);
                                                                                                        result1 = closure_12.set(false);
                                                                                                        if (zoomScale.get() > minimumZoomScale) {
                                                                                                          tmp3 = closure_16;
                                                                                                          tmp4 = closure_16();
                                                                                                          tmp5 = closure_14;
                                                                                                          flag = true;
                                                                                                          result2 = closure_14.set(true);
                                                                                                        }
                                                                                                        return;
                                                                                                      }
                                                                                                    }
                                                                                                    class ZoomLayoutGestureNativeTsx10 {
                                                                                                      constructor(arg0) {
                                                                                                        tmp = closure_16();
                                                                                                        result = closure_11.set(true);
                                                                                                        result1 = closure_12.set(false);
                                                                                                        point = { scale: zoomScale.get(), x: closure_8.get(), y: closure_9.get(), focalX: contentHeight.focalX - closure_6.get() / 2, focalY: contentHeight.focalY - closure_7.get() / 2, gestureScale: contentHeight.scale, pointers: contentHeight.numberOfPointers };
                                                                                                        set = closure_15.set;
                                                                                                        result2 = set(point);
                                                                                                        return;
                                                                                                      }
                                                                                                    }
                                                                                                    tmp42[0] = tmp5.container;
                                                                                                    tmp42[1] = style;
                                                                                                    cResult[132] = style;
                                                                                                    cResult[133] = tmp5.container;
                                                                                                    cResult[134] = tmp42;
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                                class Mt {
                                                                                  constructor() {
                                                                                    obj = {
                                                                                      zoomTo(arg0) {
                                                                                                                                                                          let animated;
                                                                                                                                                                          let closure_3;
                                                                                                                                                                          let x = arg0.x;
                                                                                                                                                                          let closure_0 = x;
                                                                                                                                                                          let y = arg0.y;
                                                                                                                                                                          let closure_1 = y;
                                                                                                                                                                          ({ scale, animated } = arg0);
                                                                                                                                                                          num = 2;
                                                                                                                                                                          if (undefined !== scale) {
                                                                                                                                                                            num = scale;
                                                                                                                                                                          }
                                                                                                                                                                          scale = tmp;
                                                                                                                                                                          obj = onLayout(contentHeight[5]);
                                                                                                                                                                          const fn = function n() { /* body not rendered: F159968 */ };
                                                                                                                                                                          let obj2 = { stopAnimation, touchStoppedAnimation, panInterrupted, minimumZoomScale, maximumZoomScale, requestedScale: num, scale, x_1: x, containerWidth, y_1: y, containerHeight, clampTranslation, translateX, translateY, animated: tmp, withSpring: onLayout(contentHeight[4]).withSpring, SPRING_CONFIG };
                                                                                                                                                                          fn.__closure = obj2;
                                                                                                                                                                          fn.__workletHash = 8380953020180;
                                                                                                                                                                          fn.__initData = __initData;
                                                                                                                                                                          obj.runOnUI(fn)();
                                                                                                                                                                        },
                                                                                      unzoom(arg0) {
                                                                                                                                                                          obj = arg0;
                                                                                                                                                                          if (undefined === arg0) {
                                                                                                                                                                            obj = {};
                                                                                                                                                                          }
                                                                                                                                                                          const animated = obj.animated;
                                                                                                                                                                          let closure_0 = tmp;
                                                                                                                                                                          let obj2 = onLayout(contentHeight[5]);
                                                                                                                                                                          const fn = function n() { /* body not rendered: F159969 */ };
                                                                                                                                                                          let obj3 = { stopAnimation, touchStoppedAnimation, panInterrupted, scale, animated_0: tmp, withSpring: onLayout(contentHeight[4]).withSpring, minimumZoomScale, SPRING_CONFIG, translateX, translateY };
                                                                                                                                                                          fn.__closure = obj3;
                                                                                                                                                                          fn.__workletHash = 7952194524856;
                                                                                                                                                                          fn.__initData = __initData2;
                                                                                                                                                                          obj2.runOnUI(fn)();
                                                                                                                                                                        }
                                                                                    };
                                                                                    return obj;
                                                                                  }
                                                                                }
                                                                                class ZoomLayoutGestureNativeTsx16 {
                                                                                  constructor() {
                                                                                    result = closure_13.set(false);
                                                                                    result1 = closure_12.set(false);
                                                                                    if (zoomScale.get() > minimumZoomScale) {
                                                                                      tmp3 = closure_16;
                                                                                      tmp4 = closure_16();
                                                                                      tmp5 = closure_14;
                                                                                      flag = true;
                                                                                      result2 = closure_14.set(true);
                                                                                    }
                                                                                    return;
                                                                                  }
                                                                                }
                                                                                class ZoomLayoutGestureNativeTsx10 {
                                                                                  constructor(arg0) {
                                                                                    tmp = closure_16();
                                                                                    result = closure_11.set(true);
                                                                                    result1 = closure_12.set(false);
                                                                                    point = { scale: zoomScale.get(), x: closure_8.get(), y: closure_9.get(), focalX: contentHeight.focalX - closure_6.get() / 2, focalY: contentHeight.focalY - closure_7.get() / 2, gestureScale: contentHeight.scale, pointers: contentHeight.numberOfPointers };
                                                                                    set = closure_15.set;
                                                                                    result2 = set(point);
                                                                                    return;
                                                                                  }
                                                                                }
                                                                                cResult[121] = sharedValue1;
                                                                                cResult[122] = sharedValue;
                                                                                cResult[123] = num2;
                                                                                cResult[124] = num;
                                                                                cResult[125] = sharedValue7;
                                                                                cResult[126] = zoomScale;
                                                                                cResult[127] = tmp16;
                                                                                cResult[128] = sharedValue8;
                                                                                cResult[129] = sharedValue2;
                                                                                cResult[130] = sharedValue3;
                                                                                cResult[131] = Mt;
                                                                              }
                                                                            }
                                                                            function bt(nativeEvent) {
                                                                              const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
                                                                              const result1 = sharedValue1.set(nativeEvent.nativeEvent.layout.height);
                                                                              if (onLayout != null) {
                                                                                tmp3(nativeEvent);
                                                                              }
                                                                            }
                                                                            cResult[116] = sharedValue1;
                                                                            cResult[117] = sharedValue;
                                                                            cResult[118] = onLayout;
                                                                            cResult[119] = bt;
                                                                          }
                                                                        }
                                                                        class ZoomLayoutGestureNativeTsx16 {
                                                                          constructor() {
                                                                            result = closure_13.set(false);
                                                                            result1 = closure_12.set(false);
                                                                            if (zoomScale.get() > minimumZoomScale) {
                                                                              tmp3 = closure_16;
                                                                              tmp4 = closure_16();
                                                                              tmp5 = closure_14;
                                                                              flag = true;
                                                                              result2 = closure_14.set(true);
                                                                            }
                                                                            return;
                                                                          }
                                                                        }
                                                                        class ZoomLayoutGestureNativeTsx10 {
                                                                          constructor(arg0) {
                                                                            tmp = closure_16();
                                                                            result = closure_11.set(true);
                                                                            result1 = closure_12.set(false);
                                                                            point = { scale: zoomScale.get(), x: closure_8.get(), y: closure_9.get(), focalX: contentHeight.focalX - closure_6.get() / 2, focalY: contentHeight.focalY - closure_7.get() / 2, gestureScale: contentHeight.scale, pointers: contentHeight.numberOfPointers };
                                                                            set = closure_15.set;
                                                                            result2 = set(point);
                                                                            return;
                                                                          }
                                                                        }
                                                                        if (SimultaneousResult == null) {
                                                                          const Gesture = tmp(tmp2[9]).Gesture;
                                                                          SimultaneousResult = Gesture.Simultaneous(tmp26, tmp29);
                                                                        }
                                                                        cResult[112] = onCreateGesture;
                                                                        cResult[113] = tmp29;
                                                                        cResult[114] = tmp26;
                                                                        cResult[115] = SimultaneousResult;
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                              class ZoomLayoutGestureNativeTsx16 {
                                                constructor() {
                                                  result = closure_13.set(false);
                                                  result1 = closure_12.set(false);
                                                  if (zoomScale.get() > minimumZoomScale) {
                                                    tmp3 = closure_16;
                                                    tmp4 = closure_16();
                                                    tmp5 = closure_14;
                                                    flag = true;
                                                    result2 = closure_14.set(true);
                                                  }
                                                  return;
                                                }
                                              }
                                              class ZoomLayoutGestureNativeTsx10 {
                                                constructor(arg0) {
                                                  tmp = closure_16();
                                                  result = closure_11.set(true);
                                                  result1 = closure_12.set(false);
                                                  point = { scale: zoomScale.get(), x: closure_8.get(), y: closure_9.get(), focalX: contentHeight.focalX - closure_6.get() / 2, focalY: contentHeight.focalY - closure_7.get() / 2, gestureScale: contentHeight.scale, pointers: contentHeight.numberOfPointers };
                                                  set = closure_15.set;
                                                  result2 = set(point);
                                                  return;
                                                }
                                              }
                                              tmp31[0] = sharedValue7;
                                              tmp31[1] = sharedValue6;
                                              tmp31[2] = zoomScale;
                                              tmp31[3] = num;
                                              tmp31[4] = tmp16;
                                              tmp31[5] = sharedValue8;
                                              ZoomLayoutGestureNativeTsx16.__closure = tmp31;
                                              ZoomLayoutGestureNativeTsx16.__workletHash = 6770726807034;
                                              ZoomLayoutGestureNativeTsx16.__initData = __initData3;
                                              cResult[71] = sharedValue6;
                                              cResult[72] = num;
                                              cResult[73] = sharedValue7;
                                              cResult[74] = zoomScale;
                                              cResult[75] = tmp16;
                                              cResult[76] = sharedValue8;
                                              cResult[77] = ZoomLayoutGestureNativeTsx16;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  class ZoomLayoutGestureNativeTsx10 {
                    constructor(arg0) {
                      tmp = closure_16();
                      result = closure_11.set(true);
                      result1 = closure_12.set(false);
                      point = { scale: zoomScale.get(), x: closure_8.get(), y: closure_9.get(), focalX: contentHeight.focalX - closure_6.get() / 2, focalY: contentHeight.focalY - closure_7.get() / 2, gestureScale: contentHeight.scale, pointers: contentHeight.numberOfPointers };
                      set = closure_15.set;
                      result2 = set(point);
                      return;
                    }
                  }
                  let obj3 = { stopAnimation: tmp16, pinching: sharedValue5, canFling: sharedValue6, pinchStart: sharedValue9, scale: zoomScale, translateX: sharedValue2, translateY: sharedValue3, containerWidth: sharedValue, containerHeight: sharedValue1 };
                  ZoomLayoutGestureNativeTsx10.__closure = obj3;
                  ZoomLayoutGestureNativeTsx10.__workletHash = 8997643613873;
                  ZoomLayoutGestureNativeTsx10.__initData = __initData2;
                  cResult[32] = sharedValue6;
                  cResult[33] = sharedValue1;
                  cResult[34] = sharedValue;
                  cResult[35] = sharedValue9;
                  cResult[36] = sharedValue5;
                  cResult[37] = zoomScale;
                  cResult[38] = tmp16;
                  cResult[39] = sharedValue2;
                  cResult[40] = sharedValue3;
                  cResult[41] = ZoomLayoutGestureNativeTsx10;
                }
              }
            }
            function pt() {
              const value = sharedValue2.get();
              const value2 = sharedValue3.get();
              const point = closure_18(value, value2, zoomScale.get());
              const tmp = sharedValue2;
              if (point.x !== sharedValue2.get()) {
                set = tmp.set;
                const obj2 = spring;
                const result = set(obj2.withSpring(point.x, obj));
              }
              if (point.y !== sharedValue3.get()) {
                set2 = sharedValue3.set;
                const obj3 = spring;
                set2(obj3.withSpring(point.y, sharedValue3));
              }
            }
            const obj4 = { clampTranslation: tmp21, translateX: sharedValue2, translateY: sharedValue3, scale: zoomScale, withSpring: tmp(tmp2[4]).withSpring, SPRING_CONFIG: sharedValue };
            pt.__closure = obj4;
            pt.__workletHash = 1683143664548;
            pt.__initData = sharedValue9;
            cResult[11] = tmp21;
            cResult[12] = zoomScale;
            cResult[13] = sharedValue2;
            cResult[14] = sharedValue3;
            cResult[15] = pt;
            tmp23 = pt;
          }
        }
      }
      tmp19[0] = contentWidth;
      tmp19[1] = sharedValue;
      tmp19[2] = contentHeight;
      tmp19[3] = sharedValue1;
      tmp18.__closure = tmp19;
      tmp18.__workletHash = 11198863760158;
      tmp18.__initData = sharedValue7;
      cResult[4] = sharedValue1;
      cResult[5] = sharedValue;
      cResult[6] = contentHeight;
      cResult[7] = contentWidth;
      cResult[8] = tmp18;
      tmp17 = tmp18;
    }
  }
  let fn = function p() {
    obj = ReanimatedRexport;
    obj.cancelAnimation(zoomScale);
    const obj2 = ReanimatedRexport;
    obj2.cancelAnimation(sharedValue2);
    const obj3 = ReanimatedRexport;
    obj3.cancelAnimation(sharedValue3);
  };
  fn.__closure = { cancelAnimation: tmp(tmp2[5]).cancelAnimation, scale: zoomScale, translateX: sharedValue2, translateY: sharedValue3 };
  fn.__workletHash = 10792934756616;
  fn.__initData = sharedValue6;
  cResult[0] = zoomScale;
  cResult[1] = sharedValue2;
  cResult[2] = sharedValue3;
  cResult[3] = fn;
  tmp16 = fn;
  ({ cancelAnimation: tmp(tmp2[5]).cancelAnimation, scale: zoomScale, translateX: sharedValue2, translateY: sharedValue3 });
}) : (function ZoomLayoutGesture(onCreateGesture) {
  let PAN_EDGE_RESISTANCE;
  let children;
  let items8;
  let items9;
  let obj15;
  let obj16;
  let ref;
  let style;
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
  const contentWidth = onCreateGesture.contentWidth;
  const contentHeight = onCreateGesture.contentHeight;
  const zoomScale = onCreateGesture.zoomScale;
  let sharedValue3;
  let stopAnimation;
  let callback1;
  let callback2;
  let callback3;
  let memo;
  let memo1;
  let tmp = sharedValue3();
  obj = onCreateGesture(flag[5]);
  const sharedValue = obj.useSharedValue(0);
  let obj2 = onCreateGesture(flag[5]);
  const sharedValue1 = obj2.useSharedValue(0);
  let obj3 = onCreateGesture(flag[5]);
  const sharedValue2 = obj3.useSharedValue(0);
  let obj4 = onCreateGesture(flag[5]);
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
  class X {
    constructor() {
      obj = ReanimatedRexport;
      obj.cancelAnimation(zoomScale);
      const obj2 = ReanimatedRexport;
      obj2.cancelAnimation(sharedValue2);
      const obj3 = ReanimatedRexport;
      obj3.cancelAnimation(sharedValue3);
    }
  }
  X.__closure = { cancelAnimation: onCreateGesture(flag[5]).cancelAnimation, scale: zoomScale, translateX: sharedValue2, translateY: sharedValue3 };
  X.__workletHash = 11378325427390;
  X.__initData = __initData5;
  let items = [zoomScale, sharedValue2, sharedValue3];
  ({ cancelAnimation: onCreateGesture(flag[5]).cancelAnimation, scale: zoomScale, translateX: sharedValue2, translateY: sharedValue3 });
  stopAnimation = num.useCallback(X, items);
  class Y {
    constructor(arg0) {
      let result;
      let result1;
      const point = { x: Math.max(0, (result - sharedValue.get()) / 2), y: Math.max(0, (result1 - sharedValue1.get()) / 2) };
      result = contentWidth * arg0;
      result1 = contentHeight * arg0;
      return point;
    }
  }
  Y.__closure = { contentWidth, containerWidth: sharedValue, contentHeight, containerHeight: sharedValue1 };
  Y.__workletHash = 1100269327720;
  Y.__initData = __initData6;
  const items1 = [contentWidth, contentHeight, sharedValue, sharedValue1];
  callback1 = num.useCallback(Y, items1);
  class A {
    constructor(arg0, arg1, arg2) {
      const point = callback1(arg2);
      const point1 = { x: Math.max(tmp, Math.min(point.x, arg0)), y: Math.max(tmp2, Math.min(point.y, arg1)) };
      return point1;
    }
  }
  A.__closure = { getTranslationBounds: callback1 };
  A.__workletHash = 2845500186771;
  A.__initData = __initData7;
  const items2 = [callback1];
  callback2 = num.useCallback(A, items2);
  class P {
    constructor() {
      const value = sharedValue2.get();
      const value2 = sharedValue3.get();
      const point = callback2(value, value2, zoomScale.get());
      const tmp = sharedValue2;
      if (point.x !== sharedValue2.get()) {
        set = tmp.set;
        const obj2 = spring;
        const result = set(obj2.withSpring(point.x, obj));
      }
      if (point.y !== sharedValue3.get()) {
        set2 = sharedValue3.set;
        const obj3 = spring;
        set2(obj3.withSpring(point.y, sharedValue3));
      }
    }
  }
  P.__closure = { clampTranslation: callback2, translateX: sharedValue2, translateY: sharedValue3, scale: zoomScale, withSpring: onCreateGesture(flag[4]).withSpring, SPRING_CONFIG: contentHeight };
  P.__workletHash = 9305314117458;
  P.__initData = __initData8;
  const items3 = [callback2, zoomScale, sharedValue2, sharedValue3];
  ({ clampTranslation: callback2, translateX: sharedValue2, translateY: sharedValue3, scale: zoomScale, withSpring: onCreateGesture(flag[4]).withSpring, SPRING_CONFIG: contentHeight });
  callback3 = num.useCallback(P, items3);
  const items4 = [flag, stopAnimation, sharedValue5, sharedValue6, sharedValue9, zoomScale, sharedValue2, sharedValue3, sharedValue4, sharedValue, sharedValue1, num, num2, callback2, callback3];
  memo = num.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const fn = function o(focalX) {
      stopAnimation();
      const result = sharedValue5.set(true);
      const result1 = sharedValue6.set(false);
      const point = { scale: PAN_EDGE_RESISTANCE.get(), x: sharedValue2.get(), y: sharedValue3.get(), focalX: focalX.focalX - sharedValue.get() / 2, focalY: focalX.focalY - sharedValue1.get() / 2, gestureScale: focalX.scale, pointers: focalX.numberOfPointers };
      set = sharedValue9.set;
      const result2 = set(point);
    };
    const __closure = { stopAnimation, pinching: sharedValue5, canFling: sharedValue6, pinchStart: sharedValue9, scale: zoomScale, translateX: sharedValue2, translateY: sharedValue3, containerWidth: sharedValue, containerHeight: sharedValue1 };
    fn.__closure = __closure;
    fn.__workletHash = 10195045343124;
    fn.__initData = __initData3;
    const PinchResult = Gesture.Pinch();
    const fn2 = function n(numberOfPointers) {
      if (numberOfPointers.numberOfPointers >= 2) {
        const diff = numberOfPointers.focalX - sharedValue.get() / 2;
        const diff1 = numberOfPointers.focalY - sharedValue1.get() / 2;
        const point2 = sharedValue9.get();
        const tmp23 = sharedValue9;
        if (numberOfPointers.numberOfPointers === point2.pointers) {
          const _Math = Math;
          const _Math2 = Math;
          const bound = Math.max(num, Math.min(num2, point2.scale * numberOfPointers.scale / point2.gestureScale));
          const result = bound / point2.scale;
          const point = callback2(diff + (point2.x - point2.focalX) * result, diff1 + (point2.y - point2.focalY) * result, bound);
          const result1 = PAN_EDGE_RESISTANCE.set(bound);
          const result2 = sharedValue2.set(point.x);
          const result3 = sharedValue3.set(point.y);
          const result4 = sharedValue4.set(point);
        } else {
          const point1 = { scale: PAN_EDGE_RESISTANCE.get(), x: sharedValue2.get(), y: sharedValue3.get(), focalX: diff, focalY: diff1, gestureScale: null, pointers: null };
          set = tmp23.set;
          ({ scale: obj.gestureScale, numberOfPointers: obj.pointers } = numberOfPointers);
          const result5 = set(point1);
        }
      }
    };
    const obj2 = { containerWidth: sharedValue, containerHeight: sharedValue1, pinchStart: sharedValue9, scale: zoomScale, translateX: sharedValue2, translateY: sharedValue3, minimumZoomScale: num, maximumZoomScale: num2, clampTranslation: callback2, panPosition: sharedValue4 };
    fn2.__closure = obj2;
    fn2.__workletHash = 7749657838822;
    fn2.__initData = __initData2;
    const enabledResult = PinchResult.enabled(flag);
    const fn3 = function t() {
      obj = sharedValue5;
      if (sharedValue5.get()) {
        const result = obj.set(false);
        callback3();
      }
    };
    const obj3 = { pinching: sharedValue5, returnToBounds: callback3 };
    fn3.__closure = obj3;
    fn3.__workletHash = 15068567741578;
    fn3.__initData = __initData;
    const onStartResult = enabledResult.onStart(fn);
    const onUpdateResult = onStartResult.onUpdate(fn2);
    return onUpdateResult.onFinalize(fn3);
  }, items4);
  const items5 = [flag, zoomScale, num, stopAnimation, callback2, callback1, sharedValue2, sharedValue3, sharedValue4, sharedValue5, sharedValue6, sharedValue7, sharedValue8, callback3];
  memo1 = num.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const fn = function _() {
      const result = sharedValue7.set(false);
      const result1 = sharedValue6.set(false);
      if (PAN_EDGE_RESISTANCE.get() > num) {
        stopAnimation();
        const result2 = sharedValue8.set(true);
      }
    };
    const __closure = { panInterrupted: sharedValue7, canFling: sharedValue6, scale: zoomScale, minimumZoomScale: num, stopAnimation, touchStoppedAnimation: sharedValue8 };
    fn.__closure = __closure;
    fn.__workletHash = 4250727710618;
    fn.__initData = __initData9;
    const enabledResult = PanResult.enabled(flag);
    const fn2 = function l(numberOfTouches, activate) {
      if (!sharedValue7.get()) {
        const tmp2 = 1 === numberOfTouches.numberOfTouches && PAN_EDGE_RESISTANCE.get() > num;
        if (tmp2) {
          const result = sharedValue6.set(true);
          activate.activate();
        }
      }
    };
    fn2.__closure = { panInterrupted: sharedValue7, scale: zoomScale, minimumZoomScale: num, canFling: sharedValue6 };
    fn2.__workletHash = 5856356127447;
    fn2.__initData = __initData8;
    const manualActivationResult = enabledResult.manualActivation(true);
    const fn3 = function s() {
      if (!sharedValue7.get()) {
        stopAnimation();
        const value = sharedValue2.get();
        const value2 = sharedValue3.get();
        const point = callback2(value, value2, PAN_EDGE_RESISTANCE.get());
        const point1 = { x: point.x + (value - point.x) / zoomScale, y: point.y + (value2 - point.y) / zoomScale };
        const result = sharedValue4.set(point1);
      }
    };
    const obj2 = { panInterrupted: sharedValue7, stopAnimation, translateX: sharedValue2, translateY: sharedValue3, clampTranslation: callback2, scale: zoomScale, panPosition: sharedValue4, PAN_EDGE_RESISTANCE };
    fn3.__closure = obj2;
    fn3.__workletHash = 2255969225875;
    fn3.__initData = __initData7;
    const onTouchesDownResult = manualActivationResult.onTouchesDown(fn);
    const fn4 = function o(numberOfPointers) {
      if (!sharedValue7.get()) {
        if (1 === numberOfPointers.numberOfPointers) {
          obj = PAN_EDGE_RESISTANCE;
          if (PAN_EDGE_RESISTANCE.get() > 1) {
            const point = sharedValue4.get();
            const point2 = { x: point.x + numberOfPointers.changeX, y: point.y + numberOfPointers.changeY };
            const result = sharedValue4.set(point2);
            const point3 = callback1(obj.get());
            const x = point2.x;
            const x2 = point3.x;
            if (typeof sharedValue === "function") {
              const _Math = Math;
              const _Math2 = Math;
              const tmp3 = -x2;
              const bound = Math.max(tmp3, Math.min(x2, x));
              tmp17(bound + (x - bound) * zoomScale);
              const y = point2.y;
              const y2 = point3.y;
              const tmp5 = zoomScale;
              if (typeof tmp18 === "function") {
                const _Math3 = Math;
                const _Math4 = Math;
                const tmp9 = -y2;
                const bound1 = Math.max(tmp9, Math.min(y2, y));
                tmp8(bound1 + (y - bound1) * tmp5);
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        }
      }
    };
    const obj3 = { panInterrupted: sharedValue7, scale: zoomScale, minimumZoomScale: num, panPosition: sharedValue4, getTranslationBounds: callback1, translateX: sharedValue2, resistTranslation, translateY: sharedValue3 };
    fn4.__closure = obj3;
    fn4.__workletHash = 6583122162416;
    fn4.__initData = __initData6;
    const onTouchesMoveResult = onTouchesDownResult.onTouchesMove(fn2);
    const fn5 = function n(numberOfPointers, arg1) {
      if (!sharedValue7.get()) {
        const tmp = arg1;
        if (tmp) {
          if (!sharedValue5.get()) {
            if (numberOfPointers.numberOfPointers <= 1) {
              if (sharedValue6.get()) {
                const point = callback1(PAN_EDGE_RESISTANCE.get());
                sharedValue2(closure_1_10, point.x, numberOfPointers.velocityX);
                sharedValue2(sharedValue3, point.y, numberOfPointers.velocityY);
              } else {
                callback3();
              }
            }
          }
        }
      }
    };
    const obj4 = { panInterrupted: sharedValue7, pinching: sharedValue5, canFling: sharedValue6, returnToBounds: callback3, getTranslationBounds: callback1, scale: zoomScale, releaseTranslation, translateX: sharedValue2, translateY: sharedValue3 };
    fn5.__closure = obj4;
    fn5.__workletHash = 2649106985891;
    fn5.__initData = __initData5;
    const onStartResult = onTouchesMoveResult.onStart(fn3);
    const fn6 = function t(arg0, arg1) {
      let value2 = arg1;
      const value = sharedValue8.get();
      const result = sharedValue8.set(false);
      if (!arg1) {
        value2 = !value;
      }
      if (!value2) {
        value2 = sharedValue5.get();
      }
      if (!value2) {
        callback3();
      }
    };
    fn6.__closure = { touchStoppedAnimation: sharedValue8, pinching: sharedValue5, returnToBounds: callback3 };
    fn6.__workletHash = 7431399968410;
    fn6.__initData = __initData4;
    const onChangeResult = onStartResult.onChange(fn4);
    const onEndResult = onChangeResult.onEnd(fn5);
    return onEndResult.onFinalize(fn6);
  }, items5);
  const items6 = [onCreateGesture, memo, memo1];
  const memo2 = num.useMemo(() => {
    let SimultaneousResult;
    if (onCreateGesture != null) {
      SimultaneousResult = tmp(memo, memo1);
    }
    if (SimultaneousResult == null) {
      const Gesture = LegacyBaseButton.Gesture;
      SimultaneousResult = Gesture.Simultaneous(memo, memo1);
    }
    return SimultaneousResult;
  }, items6);
  let fn = function w() {
    let items;
    obj = { transform: items };
    items = [{ translateX: sharedValue2.get() }, , ];
    ({ translateX: sharedValue2.get() });
    items[1] = { translateY: sharedValue3.get() };
    ({ translateY: sharedValue3.get() });
    items[2] = { scale: zoomScale.get() };
    ({ scale: zoomScale.get() });
    return obj;
  };
  fn.__closure = { translateX: sharedValue2, translateY: sharedValue3, scale: zoomScale };
  fn.__workletHash = 15149414804721;
  fn.__initData = __initData9;
  const items7 = [sharedValue, sharedValue1, onLayout];
  const obj13 = onCreateGesture(flag[5]);
  const animatedStyle = obj13.useAnimatedStyle(fn);
  const callback4 = num.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
    const result1 = sharedValue1.set(nativeEvent.nativeEvent.layout.height);
    if (onLayout != null) {
      tmp3(nativeEvent);
    }
  }, items7);
  const imperativeHandle = num.useImperativeHandle(ref, () => {
    let SPRING_CONFIG;
    let clampTranslation;
    let containerHeight;
    let containerWidth;
    let maximumZoomScale;
    let minimumZoomScale;
    let panInterrupted;
    let scale;
    let touchStoppedAnimation;
    let translateX;
    let translateY;
    obj = {
      zoomTo(arg0) {
        let x = arg0.x;
        let closure_0 = x;
        let y = arg0.y;
        let closure_1 = y;
        num = arg0.scale;
        if (num === undefined) {
          num = 2;
        }
        flag = arg0.animated;
        if (flag === undefined) {
          flag = true;
        }
        obj = onCreateGesture(closure_1_2[5]);
        const fn = function l() {
          let x;
          let y;
          stopAnimation();
          const result = touchStoppedAnimation.set(false);
          const result1 = panInterrupted.set(true);
          const bound = Math.max(minimumZoomScale, Math.min(maximumZoomScale, num));
          const result2 = bound / scale.get();
          const diff = closure_0 - containerWidth.get() / 2;
          const diff1 = closure_1 - containerHeight.get() / 2;
          const result3 = (translateX.get() - diff) * result2;
          const point = clampTranslation(diff + result3, diff1 + (translateY.get() - diff1) * result2, bound);
          let withSpringResult = bound;
          set = scale.set;
          const tmp11 = translateY;
          const tmp9 = translateX;
          if (flag) {
            obj = onCreateGesture(flag[4]);
            withSpringResult = obj.withSpring(bound, contentHeight);
          }
          const result4 = set(withSpringResult);
          set2 = tmp9.set;
          if (flag) {
            const obj2 = onCreateGesture(flag[4]);
            x = obj2.withSpring(point.x, contentHeight);
          } else {
            x = point.x;
          }
          set2(x);
          set3 = tmp11.set;
          if (flag) {
            const obj3 = onCreateGesture(flag[4]);
            y = obj3.withSpring(point.y, contentHeight);
          } else {
            y = point.y;
          }
          set3(y);
        };
        let obj2 = { stopAnimation, touchStoppedAnimation, panInterrupted, minimumZoomScale: flag, maximumZoomScale, requestedScale: num, scale, x_1: x, containerWidth, y_1: y, containerHeight, clampTranslation, translateX, translateY, animated: flag, withSpring: onCreateGesture(closure_1_2[4]).withSpring, SPRING_CONFIG };
        fn.__closure = obj2;
        fn.__workletHash = 2092714849882;
        fn.__initData = __initData;
        obj.runOnUI(fn)();
      },
      unzoom() {
        obj = arg0;
        if (arg0 === undefined) {
          obj = {};
        }
        flag = obj.animated;
        if (flag === undefined) {
          flag = true;
        }
        let obj2 = onCreateGesture(closure_1_2[5]);
        const fn = function n() {
          let withSpringResult;
          stopAnimation();
          const result = touchStoppedAnimation.set(false);
          const result1 = panInterrupted.set(true);
          set = scale.set;
          if (flag) {
            obj = onCreateGesture(flag[4]);
            withSpringResult = obj.withSpring(minimumZoomScale, contentHeight);
          } else {
            withSpringResult = minimumZoomScale;
          }
          const result2 = set(withSpringResult);
          num = 0;
          set2 = translateX.set;
          if (flag) {
            const obj2 = onCreateGesture(flag[4]);
            num = obj2.withSpring(0, contentHeight);
          }
          set2(num);
          num2 = 0;
          set3 = translateY.set;
          if (flag) {
            const obj3 = onCreateGesture(flag[4]);
            num2 = obj3.withSpring(0, contentHeight);
          }
          set3(num2);
        };
        let obj3 = { stopAnimation, touchStoppedAnimation, panInterrupted, scale, animated_0: flag, withSpring: onCreateGesture(closure_1_2[4]).withSpring, minimumZoomScale, SPRING_CONFIG, translateX, translateY };
        fn.__closure = obj3;
        fn.__workletHash = 3638818216438;
        fn.__initData = __initData2;
        obj2.runOnUI(fn)();
      }
    };
    return obj;
  });
  const obj14 = { gesture: memo2, children: contentWidth(num2, obj15) };
  obj15 = { collapsable: false, style: items8, onLayout: callback4, children: contentWidth(onLayout(flag[5]).View, obj16) };
  items8 = [tmp.container, style];
  const GestureDetector = onCreateGesture(flag[9]).GestureDetector;
  obj16 = { style: items9, children };
  items9 = [tmp.content, animatedStyle];
  return contentWidth(GestureDetector, obj14);
}));
let result = size.fileFinishedImporting("modules/zoom_layout/ZoomLayoutGesture.native.tsx");

export default memoResult;
