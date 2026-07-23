// Module ID: 9716
// Function ID: 75537
// Name: IScrollViewGesture
// Dependencies: [31, 33, 9704, 1582, 9698, 9714, 9717, 5217]
// Exports: ScrollViewGesture

// Module 9716 (IScrollViewGesture)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
require("result").useCallback;
let closure_6 = { code: "function pnpm_ScrollViewGestureTsx1(){const{vertical}=this.__closure;return!vertical;}" };
let closure_7 = { code: "function pnpm_ScrollViewGestureTsx2(){const{loop,overscrollEnabled,measure,containerRef,dataLength,size}=this.__closure;if(!loop&&!overscrollEnabled){const measurement=measure(containerRef);const containerWidth=(measurement===null||measurement===void 0?void 0:measurement.width)||0;if(dataLength*size<containerWidth)return 0;return dataLength*size-containerWidth;}return dataLength*size;}" };
let closure_8 = { code: "function pnpm_ScrollViewGestureTsx3(toValue,onFinished){const{scrollAnimationDuration,Easing,dealWithAnimation,withAnimation,runOnJS}=this.__closure;var _withAnimation;const defaultWithAnimation={type:\"timing\",config:{duration:scrollAnimationDuration+100,easing:Easing.easeOutQuart}};return dealWithAnimation((_withAnimation=withAnimation)!==null&&_withAnimation!==void 0?_withAnimation:defaultWithAnimation)(toValue,function(isFinished){\"worklet\";if(isFinished)onFinished&&runOnJS(onFinished)();});}" };
let closure_9 = { code: "function pnpm_ScrollViewGestureTsx4(isFinished){const{onFinished,runOnJS}=this.__closure;if(isFinished)onFinished&&runOnJS(onFinished)();}" };
let closure_10 = { code: "function pnpm_ScrollViewGestureTsx5(scrollEndTranslationValue,scrollEndVelocityValue,onFinished){const{translation,withDecay,maxScrollDistancePerSwipeIsSet,maxScrollDistancePerSwipe,size,pagingEnabled,withSpring,loop,maxPage,snapEnabled,overscrollEnabled,getLimit}=this.__closure;const origin=translation.value;const velocity=scrollEndVelocityValue;let finalTranslation=withDecay({velocity:velocity,deceleration:0.999});if(maxScrollDistancePerSwipeIsSet&&Math.abs(scrollEndTranslationValue)>maxScrollDistancePerSwipe){finalTranslation=origin;}else{const nextPage=-Math.round((origin+velocity*2)/size);if(pagingEnabled){const offset=-(scrollEndTranslationValue>=0?1:-1);const computed=offset<0?Math.ceil:Math.floor;const page=computed(-origin/size);const velocityDirection=-Math.sign(velocity);if(page===nextPage||velocityDirection!==offset){finalTranslation=withSpring(withProcessTranslation(-page*size),onFinished);}else if(loop){const finalPage=page+offset;finalTranslation=withSpring(withProcessTranslation(-finalPage*size),onFinished);}else{const finalPage=Math.min(maxPage-1,Math.max(0,page+offset));finalTranslation=withSpring(withProcessTranslation(-finalPage*size),onFinished);}}if(!pagingEnabled&&snapEnabled){finalTranslation=withSpring(withProcessTranslation(-nextPage*size),onFinished);}}translation.value=finalTranslation;function withProcessTranslation(translation){if(!loop&&!overscrollEnabled){const limit=getLimit();const sign=Math.sign(translation);return sign*Math.max(0,Math.min(limit,Math.abs(translation)));}return translation;}}" };
let closure_11 = { code: "function pnpm_ScrollViewGestureTsx6(isFinished){const{touching,onScrollEnd,runOnJS}=this.__closure;if(isFinished){touching.value=false;onScrollEnd&&runOnJS(onScrollEnd)();}}" };
let closure_12 = { code: "function pnpm_ScrollViewGestureTsx7(){const{touching,translation,withDecay,scrollEndVelocity,onFinish}=this.__closure;touching.value=true;translation.value=withDecay({velocity:scrollEndVelocity.value},function(isFinished){return onFinish(isFinished);});}" };
let closure_13 = { code: "function pnpm_ScrollViewGestureTsx8(isFinished){const{onFinish}=this.__closure;return onFinish(isFinished);}" };
let closure_14 = { code: "function pnpm_ScrollViewGestureTsx9(){const{touching,translation,scrollEndTranslation,activeDecay,loop,withSpring,maxPage,size}=this.__closure;if(touching.value)return;if(translation.value>0){if(scrollEndTranslation.value<0){activeDecay();return;}if(!loop){translation.value=withSpring(0);return;}}if(translation.value<-((maxPage-1)*size)){if(scrollEndTranslation.value>0){activeDecay();return;}if(!loop)translation.value=withSpring(-((maxPage-1)*size));}}" };
let closure_15 = { code: "function pnpm_ScrollViewGestureTsx10(){const{translation}=this.__closure;return translation.value;}" };
let closure_16 = { code: "function pnpm_ScrollViewGestureTsx11(){const{pagingEnabled,resetBoundary}=this.__closure;if(!pagingEnabled)resetBoundary();}" };
let closure_17 = { code: "function withProcessTranslation_Pnpm_ScrollViewGestureTsx12(translation){const{loop,overscrollEnabled,getLimit}=this.__closure;if(!loop&&!overscrollEnabled){const limit=getLimit();const sign=Math.sign(translation);return sign*Math.max(0,Math.min(limit,Math.abs(translation)));}return translation;}" };
let closure_18 = { code: "function pnpm_ScrollViewGestureTsx13(_){const{touching,validStart,onScrollStart,runOnJS,max,maxPage,size,loop,overscrollEnabled,getLimit,panOffset,translation}=this.__closure;touching.value=true;validStart.value=true;onScrollStart&&runOnJS(onScrollStart)();max.value=(maxPage-1)*size;if(!loop&&!overscrollEnabled)max.value=getLimit();panOffset.value=translation.value;}" };
let closure_19 = { code: "function pnpm_ScrollViewGestureTsx14(e){const{panOffset,validStart,cancelAnimation,translation,touching,isHorizontal,fixedDirection,loop,max}=this.__closure;if(panOffset.value===undefined){return;}if(validStart.value){validStart.value=false;cancelAnimation(translation);}touching.value=true;const{translationX:translationX,translationY:translationY}=e;let panTranslation=isHorizontal.value?translationX:translationY;if(fixedDirection===\"negative\")panTranslation=-Math.abs(panTranslation);else if(fixedDirection===\"positive\")panTranslation=+Math.abs(panTranslation);if(!loop){if(translation.value>0||translation.value<-max.value){const boundary=translation.value>0?0:-max.value;const fixed=boundary-panOffset.value;const dynamic=panTranslation-fixed;translation.value=boundary+dynamic*0.5;return;}}const translationValue=panOffset.value+panTranslation;translation.value=translationValue;}" };
let closure_20 = { code: "function pnpm_ScrollViewGestureTsx15(e,_success){const{panOffset,isHorizontal,scrollEndVelocity,fixedDirection,scrollEndTranslation,maxScrollDistancePerSwipeIsSet,maxScrollDistancePerSwipe,size,translation,withSpring,withProcessTranslation,onScrollEnd,minScrollDistancePerSwipeIsSet,minScrollDistancePerSwipe,endWithSpring,loop,touching}=this.__closure;if(panOffset.value===undefined){return;}const{velocityX:velocityX,velocityY:velocityY,translationX:translationX,translationY:translationY}=e;const scrollEndVelocityValue=isHorizontal.value?velocityX:velocityY;scrollEndVelocity.value=scrollEndVelocityValue;let panTranslation=isHorizontal.value?translationX:translationY;if(fixedDirection===\"negative\")panTranslation=-Math.abs(panTranslation);else if(fixedDirection===\"positive\")panTranslation=+Math.abs(panTranslation);scrollEndTranslation.value=panTranslation;const totalTranslation=scrollEndVelocityValue+panTranslation;if(maxScrollDistancePerSwipeIsSet&&Math.abs(totalTranslation)>maxScrollDistancePerSwipe){const nextPage=Math.round((panOffset.value+maxScrollDistancePerSwipe*Math.sign(totalTranslation))/size)*size;translation.value=withSpring(withProcessTranslation(nextPage),onScrollEnd);}else if(minScrollDistancePerSwipeIsSet&&Math.abs(totalTranslation)<minScrollDistancePerSwipe){const nextPage=Math.round((panOffset.value+minScrollDistancePerSwipe*Math.sign(totalTranslation))/size)*size;translation.value=withSpring(withProcessTranslation(nextPage),onScrollEnd);}else{endWithSpring(panTranslation,scrollEndVelocityValue,onScrollEnd);}if(!loop)touching.value=false;panOffset.value=undefined;}" };
let closure_21 = { code: "function pnpm_ScrollViewGestureTsx16(e){const{updateContainerSize}=this.__closure;updateContainerSize({width:e.nativeEvent.layout.width,height:e.nativeEvent.layout.height});}" };

export const ScrollViewGesture = function IScrollViewGesture(testID) {
  let enabled;
  let onConfigurePanGesture;
  let onTouchBegin;
  let onTouchEnd;
  let obj = vertical(snapEnabled[2]);
  const globalState = obj.useGlobalState();
  const props = globalState.props;
  vertical = props.vertical;
  const pagingEnabled = props.pagingEnabled;
  snapEnabled = props.snapEnabled;
  const loop = props.loop;
  const scrollAnimationDuration = props.scrollAnimationDuration;
  const withAnimation = props.withAnimation;
  const dataLength = props.dataLength;
  const overscrollEnabled = props.overscrollEnabled;
  const maxScrollDistancePerSwipe = props.maxScrollDistancePerSwipe;
  const minScrollDistancePerSwipe = props.minScrollDistancePerSwipe;
  const fixedDirection = props.fixedDirection;
  const size = globalState.common.size;
  const updateContainerSize = globalState.layout.updateContainerSize;
  const translation = testID.translation;
  let style = testID.style;
  ({ onConfigurePanGesture, enabled } = props);
  if (undefined === style) {
    style = {};
  }
  const onScrollStart = testID.onScrollStart;
  const onScrollEnd = testID.onScrollEnd;
  ({ onTouchBegin, onTouchEnd } = testID);
  let obj2 = vertical(snapEnabled[3]);
  /* worklet (recovered source) */ function pnpm_ScrollViewGestureTsx1(){const{vertical}=this.__closure;return!vertical;}
  pnpm_ScrollViewGestureTsx1.__closure = { vertical };
  pnpm_ScrollViewGestureTsx1.__workletHash = 1538641593051;
  pnpm_ScrollViewGestureTsx1.__initData = dataLength;
  const items = [vertical];
  const derivedValue = obj2.useDerivedValue(pnpm_ScrollViewGestureTsx1, items);
  let obj3 = vertical(snapEnabled[3]);
  const sharedValue = obj3.useSharedValue(0);
  let obj4 = vertical(snapEnabled[3]);
  const sharedValue1 = obj4.useSharedValue(undefined);
  let obj5 = vertical(snapEnabled[3]);
  const sharedValue2 = obj5.useSharedValue(false);
  let obj6 = vertical(snapEnabled[3]);
  const sharedValue3 = obj6.useSharedValue(false);
  let obj7 = vertical(snapEnabled[3]);
  const sharedValue4 = obj7.useSharedValue(0);
  const sharedValue5 = vertical(snapEnabled[3]).useSharedValue(0);
  const obj9 = vertical(snapEnabled[3]);
  const animatedRef = vertical(snapEnabled[3]).useAnimatedRef();
  let closure_25 = tmp10;
  let closure_26 = tmp11;
  /* worklet (recovered source) */ function pnpm_ScrollViewGestureTsx2(){const{loop,overscrollEnabled,measure,containerRef,dataLength,size}=this.__closure;if(!loop&&!overscrollEnabled){const measurement=measure(containerRef);const containerWidth=(measurement===null||measurement===void 0?void 0:measurement.width)||0;if(dataLength*size<containerWidth)return 0;return dataLength*size-containerWidth;}return dataLength*size;}
  obj = { loop, overscrollEnabled, measure: vertical(snapEnabled[3]).measure, containerRef: animatedRef, dataLength, size };
  pnpm_ScrollViewGestureTsx2.__closure = obj;
  pnpm_ScrollViewGestureTsx2.__workletHash = 14254270315231;
  pnpm_ScrollViewGestureTsx2.__initData = overscrollEnabled;
  const items1 = [loop, size, dataLength, overscrollEnabled];
  const callback = loop.useCallback(pnpm_ScrollViewGestureTsx2, items1);
  /* worklet (recovered source) */ function pnpm_ScrollViewGestureTsx3(toValue,onFinished){const{scrollAnimationDuration,Easing,dealWithAnimation,withAnimation,runOnJS}=this.__closure;var _withAnimation;const defaultWithAnimation={type:"timing",config:{duration:scrollAnimationDuration+100,easing:Easing.easeOutQuart}};return dealWithAnimation((_withAnimation=withAnimation)!==null&&_withAnimation!==void 0?_withAnimation:defaultWithAnimation)(toValue,function(isFinished){"worklet";if(isFinished)onFinished&&runOnJS(onFinished)();});}
  obj = { scrollAnimationDuration, Easing: vertical(snapEnabled[4]).Easing, dealWithAnimation: vertical(snapEnabled[5]).dealWithAnimation, withAnimation, runOnJS: vertical(snapEnabled[3]).runOnJS };
  pnpm_ScrollViewGestureTsx3.__closure = obj;
  pnpm_ScrollViewGestureTsx3.__workletHash = 14905784555207;
  pnpm_ScrollViewGestureTsx3.__initData = maxScrollDistancePerSwipe;
  const items2 = [scrollAnimationDuration, withAnimation];
  const callback1 = loop.useCallback(pnpm_ScrollViewGestureTsx3, items2);
  /* worklet (recovered source) */ function pnpm_ScrollViewGestureTsx5(scrollEndTranslationValue,scrollEndVelocityValue,onFinished){const{translation,withDecay,maxScrollDistancePerSwipeIsSet,maxScrollDistancePerSwipe,size,pagingEnabled,withSpring,loop,maxPage,snapEnabled,overscrollEnabled,getLimit}=this.__closure;const origin=translation.value;const velocity=scrollEndVelocityValue;let finalTranslation=withDecay({velocity:velocity,deceleration:0.999});if(maxScrollDistancePerSwipeIsSet&&Math.abs(scrollEndTranslationValue)>maxScrollDistancePerSwipe){finalTranslation=origin;}else{const nextPage=-Math.round((origin+velocity*2)/size);if(pagingEnabled){const offset=-(scrollEndTranslationValue>=0?1:-1);const computed=offset<0?Math.ceil:Math.floor;const page=computed(-origin/size);const velocityDirection=-Math.sign(velocity);if(page===nextPage||velocityDirection!==offset){finalTranslation=withSpring(withProcessTranslation(-page*size),onFinished);}else if(loop){const finalPage=page+offset;finalTranslation=withSpring(withProcessTranslation(-finalPage*size),onFinished);}else{const finalPage=Math.min(maxPage-1,Math.max(0,page+offset));finalTranslation=withSpring(withProcessTranslation(-finalPage*size),onFinished);}}if(!pagingEnabled&&snapEnabled){finalTranslation=withSpring(withProcessTranslation(-nextPage*size),onFinished);}}translation.value=finalTranslation;function withProcessTranslation(translation){if(!loop&&!overscrollEnabled){const limit=getLimit();const sign=Math.sign(translation);return sign*Math.max(0,Math.min(limit,Math.abs(translation)));}return translation;}}
  const obj10 = vertical(snapEnabled[3]);
  pnpm_ScrollViewGestureTsx5.__closure = { translation, withDecay: vertical(snapEnabled[3]).withDecay, maxScrollDistancePerSwipeIsSet: "number" === typeof maxScrollDistancePerSwipe, maxScrollDistancePerSwipe, size, pagingEnabled, withSpring: callback1, loop, maxPage: dataLength, snapEnabled, overscrollEnabled, getLimit: callback };
  pnpm_ScrollViewGestureTsx5.__workletHash = 205523855173;
  pnpm_ScrollViewGestureTsx5.__initData = fixedDirection;
  const items3 = [callback1, size, dataLength, loop, snapEnabled, translation, pagingEnabled, maxScrollDistancePerSwipe, "number" === typeof maxScrollDistancePerSwipe];
  const callback2 = loop.useCallback(pnpm_ScrollViewGestureTsx5, items3);
  /* worklet (recovered source) */ function pnpm_ScrollViewGestureTsx6(isFinished){const{touching,onScrollEnd,runOnJS}=this.__closure;if(isFinished){touching.value=false;onScrollEnd&&runOnJS(onScrollEnd)();}}
  obj2 = { touching: sharedValue2, onScrollEnd, runOnJS: vertical(snapEnabled[3]).runOnJS };
  pnpm_ScrollViewGestureTsx6.__closure = obj2;
  pnpm_ScrollViewGestureTsx6.__workletHash = 13381002348098;
  pnpm_ScrollViewGestureTsx6.__initData = size;
  const items4 = [onScrollEnd, sharedValue2];
  const callback3 = loop.useCallback(pnpm_ScrollViewGestureTsx6, items4);
  /* worklet (recovered source) */ function pnpm_ScrollViewGestureTsx7(){const{touching,translation,withDecay,scrollEndVelocity,onFinish}=this.__closure;touching.value=true;translation.value=withDecay({velocity:scrollEndVelocity.value},function(isFinished){return onFinish(isFinished);});}
  obj3 = { touching: sharedValue2, translation, withDecay: vertical(snapEnabled[3]).withDecay, scrollEndVelocity: sharedValue5, onFinish: callback3 };
  pnpm_ScrollViewGestureTsx7.__closure = obj3;
  pnpm_ScrollViewGestureTsx7.__workletHash = 12267307896109;
  pnpm_ScrollViewGestureTsx7.__initData = updateContainerSize;
  const items5 = [callback3, sharedValue5, sharedValue2, translation];
  const callback4 = loop.useCallback(pnpm_ScrollViewGestureTsx7, items5);
  /* worklet (recovered source) */ function pnpm_ScrollViewGestureTsx9(){const{touching,translation,scrollEndTranslation,activeDecay,loop,withSpring,maxPage,size}=this.__closure;if(touching.value)return;if(translation.value>0){if(scrollEndTranslation.value<0){activeDecay();return;}if(!loop){translation.value=withSpring(0);return;}}if(translation.value<-((maxPage-1)*size)){if(scrollEndTranslation.value>0){activeDecay();return;}if(!loop)translation.value=withSpring(-((maxPage-1)*size));}}
  pnpm_ScrollViewGestureTsx9.__closure = { touching: sharedValue2, translation, scrollEndTranslation: sharedValue4, activeDecay: callback4, loop, withSpring: callback1, maxPage: dataLength, size };
  pnpm_ScrollViewGestureTsx9.__workletHash = 11689345102683;
  pnpm_ScrollViewGestureTsx9.__initData = onScrollStart;
  const items6 = [sharedValue2, translation, dataLength, size, sharedValue4, loop, callback4, callback1];
  const callback5 = loop.useCallback(pnpm_ScrollViewGestureTsx9, items6);
  const obj1 = { translation, withDecay: vertical(snapEnabled[3]).withDecay, maxScrollDistancePerSwipeIsSet: "number" === typeof maxScrollDistancePerSwipe, maxScrollDistancePerSwipe, size, pagingEnabled, withSpring: callback1, loop, maxPage: dataLength, snapEnabled, overscrollEnabled, getLimit: callback };
  /* worklet (recovered source) */ function pnpm_ScrollViewGestureTsx10(){const{translation}=this.__closure;return translation.value;}
  pnpm_ScrollViewGestureTsx10.__closure = { translation };
  pnpm_ScrollViewGestureTsx10.__workletHash = 10264158907215;
  pnpm_ScrollViewGestureTsx10.__initData = onScrollEnd;
  /* worklet (recovered source) */ function pnpm_ScrollViewGestureTsx11(){const{pagingEnabled,resetBoundary}=this.__closure;if(!pagingEnabled)resetBoundary();}
  pnpm_ScrollViewGestureTsx11.__closure = { pagingEnabled, resetBoundary: callback5 };
  pnpm_ScrollViewGestureTsx11.__workletHash = 1428786849795;
  pnpm_ScrollViewGestureTsx11.__initData = dataLength;
  const items7 = [pagingEnabled, callback5];
  const animatedReaction = vertical(snapEnabled[3]).useAnimatedReaction(pnpm_ScrollViewGestureTsx10, pnpm_ScrollViewGestureTsx11, items7);
  const tmp19 = (() => {
    function withProcessTranslation(arg0) {
      if (!outer1_3) {
        if (!outer1_7) {
          const _Math = Math;
          const _Math2 = Math;
          const _Math3 = Math;
          const _Math4 = Math;
          const tmp3 = outer1_27();
          return Math.sign(arg0) * Math.max(0, Math.min(tmp3, Math.abs(arg0)));
        }
      }
      return arg0;
    }
    withProcessTranslation.__closure = { loop, overscrollEnabled, getLimit: callback };
    withProcessTranslation.__workletHash = 4415703918410;
    withProcessTranslation.__initData = derivedValue;
    return withProcessTranslation;
  })();
  let closure_33 = tmp19;
  /* worklet (recovered source) */ function pnpm_ScrollViewGestureTsx13(_){const{touching,validStart,onScrollStart,runOnJS,max,maxPage,size,loop,overscrollEnabled,getLimit,panOffset,translation}=this.__closure;touching.value=true;validStart.value=true;onScrollStart&&runOnJS(onScrollStart)();max.value=(maxPage-1)*size;if(!loop&&!overscrollEnabled)max.value=getLimit();panOffset.value=translation.value;}
  obj4 = { touching: sharedValue2, validStart: sharedValue3, onScrollStart, runOnJS: vertical(snapEnabled[3]).runOnJS, max: sharedValue, maxPage: dataLength, size, loop, overscrollEnabled, getLimit: callback, panOffset: sharedValue1, translation };
  pnpm_ScrollViewGestureTsx13.__closure = obj4;
  pnpm_ScrollViewGestureTsx13.__workletHash = 11962065871670;
  pnpm_ScrollViewGestureTsx13.__initData = sharedValue;
  const items8 = [sharedValue, size, dataLength, loop, sharedValue2, sharedValue1, sharedValue3, translation, overscrollEnabled, callback, onScrollStart];
  /* worklet (recovered source) */ function pnpm_ScrollViewGestureTsx14(e){const{panOffset,validStart,cancelAnimation,translation,touching,isHorizontal,fixedDirection,loop,max}=this.__closure;if(panOffset.value===undefined){return;}if(validStart.value){validStart.value=false;cancelAnimation(translation);}touching.value=true;const{translationX:translationX,translationY:translationY}=e;let panTranslation=isHorizontal.value?translationX:translationY;if(fixedDirection==="negative")panTranslation=-Math.abs(panTranslation);else if(fixedDirection==="positive")panTranslation=+Math.abs(panTranslation);if(!loop){if(translation.value>0||translation.value<-max.value){const boundary=translation.value>0?0:-max.value;const fixed=boundary-panOffset.value;const dynamic=panTranslation-fixed;translation.value=boundary+dynamic*0.5;return;}}const translationValue=panOffset.value+panTranslation;translation.value=translationValue;}
  obj5 = { panOffset: sharedValue1, validStart: sharedValue3 };
  const obj16 = vertical(snapEnabled[3]);
  obj5.cancelAnimation = vertical(snapEnabled[3]).cancelAnimation;
  obj5.translation = translation;
  obj5.touching = sharedValue2;
  obj5.isHorizontal = derivedValue;
  obj5.fixedDirection = fixedDirection;
  obj5.loop = loop;
  obj5.max = sharedValue;
  pnpm_ScrollViewGestureTsx14.__closure = obj5;
  pnpm_ScrollViewGestureTsx14.__workletHash = 851179073329;
  pnpm_ScrollViewGestureTsx14.__initData = sharedValue1;
  const items9 = [derivedValue, sharedValue, sharedValue1, loop, overscrollEnabled, fixedDirection, translation, sharedValue3, sharedValue2];
  /* worklet (recovered source) */ function pnpm_ScrollViewGestureTsx15(e,_success){const{panOffset,isHorizontal,scrollEndVelocity,fixedDirection,scrollEndTranslation,maxScrollDistancePerSwipeIsSet,maxScrollDistancePerSwipe,size,translation,withSpring,withProcessTranslation,onScrollEnd,minScrollDistancePerSwipeIsSet,minScrollDistancePerSwipe,endWithSpring,loop,touching}=this.__closure;if(panOffset.value===undefined){return;}const{velocityX:velocityX,velocityY:velocityY,translationX:translationX,translationY:translationY}=e;const scrollEndVelocityValue=isHorizontal.value?velocityX:velocityY;scrollEndVelocity.value=scrollEndVelocityValue;let panTranslation=isHorizontal.value?translationX:translationY;if(fixedDirection==="negative")panTranslation=-Math.abs(panTranslation);else if(fixedDirection==="positive")panTranslation=+Math.abs(panTranslation);scrollEndTranslation.value=panTranslation;const totalTranslation=scrollEndVelocityValue+panTranslation;if(maxScrollDistancePerSwipeIsSet&&Math.abs(totalTranslation)>maxScrollDistancePerSwipe){const nextPage=Math.round((panOffset.value+maxScrollDistancePerSwipe*Math.sign(totalTranslation))/size)*size;translation.value=withSpring(withProcessTranslation(nextPage),onScrollEnd);}else if(minScrollDistancePerSwipeIsSet&&Math.abs(totalTranslation)<minScrollDistancePerSwipe){const nextPage=Math.round((panOffset.value+minScrollDistancePerSwipe*Math.sign(totalTranslation))/size)*size;translation.value=withSpring(withProcessTranslation(nextPage),onScrollEnd);}else{endWithSpring(panTranslation,scrollEndVelocityValue,onScrollEnd);}if(!loop)touching.value=false;panOffset.value=undefined;}
  pnpm_ScrollViewGestureTsx15.__closure = { panOffset: sharedValue1, isHorizontal: derivedValue, scrollEndVelocity: sharedValue5, fixedDirection, scrollEndTranslation: sharedValue4, maxScrollDistancePerSwipeIsSet: "number" === typeof maxScrollDistancePerSwipe, maxScrollDistancePerSwipe, size, translation, withSpring: callback1, withProcessTranslation: tmp19, onScrollEnd, minScrollDistancePerSwipeIsSet: "number" === typeof minScrollDistancePerSwipe, minScrollDistancePerSwipe, endWithSpring: callback2, loop, touching: sharedValue2 };
  pnpm_ScrollViewGestureTsx15.__workletHash = 14460845775334;
  pnpm_ScrollViewGestureTsx15.__initData = sharedValue2;
  const items10 = [size, loop, sharedValue2, sharedValue1, translation, derivedValue, sharedValue5, sharedValue4, fixedDirection, "number" === typeof maxScrollDistancePerSwipe, maxScrollDistancePerSwipe, "number" === typeof maxScrollDistancePerSwipe, minScrollDistancePerSwipe, callback2, callback1, onScrollEnd];
  const tmp20 = scrollAnimationDuration(pnpm_ScrollViewGestureTsx13, items8);
  const tmp21 = scrollAnimationDuration(pnpm_ScrollViewGestureTsx14, items9);
  let tmp22 = scrollAnimationDuration(pnpm_ScrollViewGestureTsx15, items10);
  /* worklet (recovered source) */ function pnpm_ScrollViewGestureTsx16(e){const{updateContainerSize}=this.__closure;updateContainerSize({width:e.nativeEvent.layout.width,height:e.nativeEvent.layout.height});}
  pnpm_ScrollViewGestureTsx16.__closure = { updateContainerSize };
  pnpm_ScrollViewGestureTsx16.__workletHash = 15591637556712;
  pnpm_ScrollViewGestureTsx16.__initData = sharedValue3;
  const items11 = [updateContainerSize];
  const panGestureProxy = vertical(snapEnabled[6]).usePanGestureProxy({ onConfigurePanGesture, onGestureStart: tmp20, onGestureUpdate: tmp21, onGestureEnd: tmp22, options: { enabled } });
  const callback6 = loop.useCallback(pnpm_ScrollViewGestureTsx16, items11);
  obj6 = { gesture: panGestureProxy };
  obj7 = { ref: animatedRef, testID: testID.testID, style, onTouchStart: onTouchBegin, onTouchEnd, onLayout: callback6, children: testID.children };
  obj6.children = withAnimation(pagingEnabled(snapEnabled[3]).View, obj7);
  return withAnimation(vertical(snapEnabled[7]).GestureDetector, obj6);
};
