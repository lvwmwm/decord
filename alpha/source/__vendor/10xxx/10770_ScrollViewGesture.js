// Module ID: 10770
// Function ID: 10771
// Name: ScrollViewGesture
// Dependencies: [19, 21, 10758, 1652, 10752, 10768, 10771, 5420]
// Exports: ScrollViewGesture

// Module 10770 (ScrollViewGesture)
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import _mod10758 from "module_10758" /* 10758 */;

const react = react2;
let _undefined;

let tmp;
const _mod1652 = tmp(1652);
const LegacyBaseButton = tmp(5420);
const DATA_LENGTH = tmp(10752);
const dealWithAnimation = tmp(10768);
const usePanGestureProxy = tmp(10771);
const useCallback = react2.useCallback;
const jsx = Fragment.jsx;
let closure_6 = { code: "(function pnpm_ScrollViewGestureTsx1(){let[vertical]=this.__closure;return!vertical;})" };
let closure_7 = { code: "(function pnpm_ScrollViewGestureTsx2(){let[loop,overscrollEnabled,measure,containerRef,dataLength,size]=this.__closure;if(!loop&&!overscrollEnabled){const measurement=measure(containerRef);const containerWidth=(measurement===null||measurement===void 0?void 0:measurement.width)||0;if(dataLength*size<containerWidth)return 0;return dataLength*size-containerWidth;}return dataLength*size;})" };
let closure_8 = { code: "(function pnpm_ScrollViewGestureTsx3(isFinished){let[onFinished,runOnJS]=this.__closure;if(isFinished)onFinished&&runOnJS(onFinished)();})" };
let closure_9 = { code: "(function pnpm_ScrollViewGestureTsx4(toValue,onFinished){let[scrollAnimationDuration,Easing,dealWithAnimation,withAnimation,_worklet_17103031480378_init_data,runOnJS]=this.__closure;var _withAnimation;const defaultWithAnimation={type:\"timing\",config:{duration:scrollAnimationDuration+100,easing:Easing.easeOutQuart}};return dealWithAnimation((_withAnimation=withAnimation)!==null&&_withAnimation!==void 0?_withAnimation:defaultWithAnimation)(toValue,function pnpm_ScrollViewGestureTsx3Factory([_worklet_17103031480378_init_data,onFinished,runOnJS]){const pnpm_ScrollViewGestureTsx3=function(isFinished){if(isFinished)onFinished&&runOnJS(onFinished)();};pnpm_ScrollViewGestureTsx3.__closure=[onFinished,runOnJS];pnpm_ScrollViewGestureTsx3.__workletHash=17103031480378;pnpm_ScrollViewGestureTsx3.__initData=_worklet_17103031480378_init_data;return pnpm_ScrollViewGestureTsx3;}([_worklet_17103031480378_init_data,onFinished,runOnJS]));})" };
let closure_10 = { code: "(function pnpm_ScrollViewGestureTsx5(scrollEndTranslationValue,scrollEndVelocityValue,onFinished){let[translation,withDecay,maxScrollDistancePerSwipeIsSet,maxScrollDistancePerSwipe,size,pagingEnabled,withSpring,loop,maxPage,snapEnabled,overscrollEnabled,getLimit]=this.__closure;const origin=translation.value;const velocity=scrollEndVelocityValue;let finalTranslation=withDecay({velocity:velocity,deceleration:0.999});if(maxScrollDistancePerSwipeIsSet&&Math.abs(scrollEndTranslationValue)>maxScrollDistancePerSwipe){finalTranslation=origin;}else{const nextPage=-Math.round((origin+velocity*2)/size);if(pagingEnabled){const offset=-(scrollEndTranslationValue>=0?1:-1);const computed=offset<0?Math.ceil:Math.floor;const page=computed(-origin/size);const velocityDirection=-Math.sign(velocity);if(page===nextPage||velocityDirection!==offset){finalTranslation=withSpring(withProcessTranslation(-page*size),onFinished);}else if(loop){const finalPage=page+offset;finalTranslation=withSpring(withProcessTranslation(-finalPage*size),onFinished);}else{const finalPage=Math.min(maxPage-1,Math.max(0,page+offset));finalTranslation=withSpring(withProcessTranslation(-finalPage*size),onFinished);}}if(!pagingEnabled&&snapEnabled){finalTranslation=withSpring(withProcessTranslation(-nextPage*size),onFinished);}}translation.value=finalTranslation;function withProcessTranslation(translation){if(!loop&&!overscrollEnabled){const limit=getLimit();const sign=Math.sign(translation);return sign*Math.max(0,Math.min(limit,Math.abs(translation)));}return translation;}})" };
let closure_11 = { code: "(function pnpm_ScrollViewGestureTsx6(isFinished){let[touching,onScrollEnd,runOnJS]=this.__closure;if(isFinished){touching.value=false;onScrollEnd&&runOnJS(onScrollEnd)();}})" };
let closure_12 = { code: "(function pnpm_ScrollViewGestureTsx7(isFinished){let[onFinish]=this.__closure;return onFinish(isFinished);})" };
let closure_13 = { code: "(function pnpm_ScrollViewGestureTsx8(){let[touching,translation,withDecay,scrollEndVelocity,_worklet_7886845276932_init_data,onFinish]=this.__closure;touching.value=true;translation.value=withDecay({velocity:scrollEndVelocity.value},function pnpm_ScrollViewGestureTsx7Factory([_worklet_7886845276932_init_data,onFinish]){const pnpm_ScrollViewGestureTsx7=function(isFinished){return onFinish(isFinished);};pnpm_ScrollViewGestureTsx7.__closure=[onFinish];pnpm_ScrollViewGestureTsx7.__workletHash=7886845276932;pnpm_ScrollViewGestureTsx7.__initData=_worklet_7886845276932_init_data;return pnpm_ScrollViewGestureTsx7;}([_worklet_7886845276932_init_data,onFinish]));})" };
let closure_14 = { code: "(function pnpm_ScrollViewGestureTsx9(){let[touching,translation,scrollEndTranslation,activeDecay,loop,withSpring,maxPage,size]=this.__closure;if(touching.value)return;if(translation.value>0){if(scrollEndTranslation.value<0){activeDecay();return;}if(!loop){translation.value=withSpring(0);return;}}if(translation.value<-((maxPage-1)*size)){if(scrollEndTranslation.value>0){activeDecay();return;}if(!loop)translation.value=withSpring(-((maxPage-1)*size));}})" };
let closure_15 = { code: "(function pnpm_ScrollViewGestureTsx10(){let[translation]=this.__closure;return translation.value;})" };
let closure_16 = { code: "(function pnpm_ScrollViewGestureTsx11(){let[pagingEnabled,resetBoundary]=this.__closure;if(!pagingEnabled)resetBoundary();})" };
let closure_17 = { code: "(function withProcessTranslation_Pnpm_ScrollViewGestureTsx12(translation){let[loop,overscrollEnabled,getLimit]=this.__closure;if(!loop&&!overscrollEnabled){const limit=getLimit();const sign=Math.sign(translation);return sign*Math.max(0,Math.min(limit,Math.abs(translation)));}return translation;})" };
let closure_18 = { code: "(function pnpm_ScrollViewGestureTsx13(_){let[touching,validStart,onScrollStart,runOnJS,max,maxPage,size,loop,overscrollEnabled,getLimit,panOffset,translation]=this.__closure;touching.value=true;validStart.value=true;onScrollStart&&runOnJS(onScrollStart)();max.value=(maxPage-1)*size;if(!loop&&!overscrollEnabled)max.value=getLimit();panOffset.value=translation.value;})" };
let closure_19 = { code: "(function pnpm_ScrollViewGestureTsx14(e){let[panOffset,validStart,cancelAnimation,translation,touching,isHorizontal,fixedDirection,loop,max]=this.__closure;if(panOffset.value===undefined){return;}if(validStart.value){validStart.value=false;cancelAnimation(translation);}touching.value=true;const{translationX:translationX,translationY:translationY}=e;let panTranslation=isHorizontal.value?translationX:translationY;if(fixedDirection===\"negative\")panTranslation=-Math.abs(panTranslation);else if(fixedDirection===\"positive\")panTranslation=+Math.abs(panTranslation);if(!loop){if(translation.value>0||translation.value<-max.value){const boundary=translation.value>0?0:-max.value;const fixed=boundary-panOffset.value;const dynamic=panTranslation-fixed;translation.value=boundary+dynamic*0.5;return;}}const translationValue=panOffset.value+panTranslation;translation.value=translationValue;})" };
let closure_20 = { code: "(function pnpm_ScrollViewGestureTsx15(e,_success){let[panOffset,isHorizontal,scrollEndVelocity,fixedDirection,scrollEndTranslation,maxScrollDistancePerSwipeIsSet,maxScrollDistancePerSwipe,size,translation,withSpring,withProcessTranslation,onScrollEnd,minScrollDistancePerSwipeIsSet,minScrollDistancePerSwipe,endWithSpring,loop,touching]=this.__closure;if(panOffset.value===undefined){return;}const{velocityX:velocityX,velocityY:velocityY,translationX:translationX,translationY:translationY}=e;const scrollEndVelocityValue=isHorizontal.value?velocityX:velocityY;scrollEndVelocity.value=scrollEndVelocityValue;let panTranslation=isHorizontal.value?translationX:translationY;if(fixedDirection===\"negative\")panTranslation=-Math.abs(panTranslation);else if(fixedDirection===\"positive\")panTranslation=+Math.abs(panTranslation);scrollEndTranslation.value=panTranslation;const totalTranslation=scrollEndVelocityValue+panTranslation;if(maxScrollDistancePerSwipeIsSet&&Math.abs(totalTranslation)>maxScrollDistancePerSwipe){const nextPage=Math.round((panOffset.value+maxScrollDistancePerSwipe*Math.sign(totalTranslation))/size)*size;translation.value=withSpring(withProcessTranslation(nextPage),onScrollEnd);}else if(minScrollDistancePerSwipeIsSet&&Math.abs(totalTranslation)<minScrollDistancePerSwipe){const nextPage=Math.round((panOffset.value+minScrollDistancePerSwipe*Math.sign(totalTranslation))/size)*size;translation.value=withSpring(withProcessTranslation(nextPage),onScrollEnd);}else{endWithSpring(panTranslation,scrollEndVelocityValue,onScrollEnd);}if(!loop)touching.value=false;panOffset.value=undefined;})" };
let closure_21 = { code: "(function pnpm_ScrollViewGestureTsx16(e){let[updateContainerSize]=this.__closure;updateContainerSize({width:e.nativeEvent.layout.width,height:e.nativeEvent.layout.height});})" };

export function ScrollViewGesture(children) {
  let dataLength;
  let enabled;
  let fixedDirection;
  let loop;
  let maxScrollDistancePerSwipe;
  let minScrollDistancePerSwipe;
  let onConfigurePanGesture;
  let onScrollEnd;
  let onScrollStart;
  let onTouchBegin;
  let onTouchEnd;
  let overscrollEnabled;
  let pagingEnabled;
  let scrollAnimationDuration;
  let snapEnabled;
  let style;
  let tmp100;
  let tmp101;
  let tmp102;
  let tmp105;
  let tmp106;
  let tmp107;
  let tmp108;
  let tmp109;
  let tmp110;
  let tmp111;
  let tmp112;
  let tmp113;
  let tmp114;
  let tmp115;
  let tmp116;
  let tmp117;
  let tmp118;
  let tmp119;
  let tmp120;
  let tmp121;
  let tmp122;
  let tmp125;
  let tmp126;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp39;
  let tmp4;
  let tmp40;
  let tmp41;
  let tmp42;
  let tmp43;
  let tmp45;
  let tmp46;
  let tmp47;
  let tmp48;
  let tmp5;
  let tmp50;
  let tmp51;
  let tmp52;
  let tmp53;
  let tmp54;
  let tmp55;
  let tmp56;
  let tmp58;
  let tmp59;
  let tmp60;
  let tmp61;
  let tmp62;
  let tmp63;
  let tmp64;
  let tmp65;
  let tmp66;
  let tmp68;
  let tmp69;
  let tmp70;
  let tmp71;
  let tmp72;
  let tmp74;
  let tmp75;
  let tmp76;
  let tmp77;
  let tmp79;
  let tmp80;
  let tmp81;
  let tmp82;
  let tmp83;
  let tmp84;
  let tmp85;
  let tmp86;
  let tmp87;
  let tmp88;
  let tmp89;
  let tmp90;
  let tmp91;
  let tmp93;
  let tmp94;
  let tmp95;
  let tmp96;
  let tmp97;
  let tmp98;
  let tmp99;
  let translation;
  let vertical;
  let withAnimation;
  let tmp = require;
  let tmp2 = dependencyMap;
  let obj = _mod10758;
  const globalState = obj.useGlobalState();
  const props = globalState.props;
  ({ vertical, pagingEnabled, snapEnabled, loop, scrollAnimationDuration, withAnimation, dataLength, overscrollEnabled, maxScrollDistancePerSwipe, minScrollDistancePerSwipe, fixedDirection } = props);
  size = globalState.common.size;
  const updateContainerSize = globalState.layout.updateContainerSize;
  ({ translation, style } = children);
  ({ onConfigurePanGesture, enabled } = props);
  const testID = children.testID;
  if (undefined === style) {
    style = {};
  }
  ({ onScrollStart, onScrollEnd, onTouchBegin, onTouchEnd } = children);
  let items = [closure_6, vertical];
  [tmp4, tmp5] = items;
  function pnpm_ScrollViewGestureTsx1() {
    return !c0;
  }
  let items1 = [tmp5];
  pnpm_ScrollViewGestureTsx1.__closure = items1;
  pnpm_ScrollViewGestureTsx1.__workletHash = 7359755646338;
  pnpm_ScrollViewGestureTsx1.__initData = tmp4;
  const items2 = [vertical];
  const tmpResult = _mod1652;
  const derivedValue = tmpResult.useDerivedValue(pnpm_ScrollViewGestureTsx1, items2);
  const tmpResult10 = _mod1652;
  const sharedValue = tmpResult10.useSharedValue(0);
  const tmpResult11 = _mod1652;
  const sharedValue1 = tmpResult11.useSharedValue(undefined);
  const tmpResult12 = _mod1652;
  const sharedValue2 = tmpResult12.useSharedValue(false);
  const tmpResult13 = _mod1652;
  const sharedValue3 = tmpResult13.useSharedValue(false);
  const tmpResult14 = _mod1652;
  const sharedValue4 = tmpResult14.useSharedValue(0);
  const tmpResult15 = _mod1652;
  const sharedValue5 = tmpResult15.useSharedValue(0);
  const tmpResult16 = _mod1652;
  const animatedRef = tmpResult16.useAnimatedRef();
  const items3 = [closure_7, loop, overscrollEnabled, _mod1652.measure, animatedRef, dataLength, size];
  [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items3;
  function pnpm_ScrollViewGestureTsx2() {
    const tmp = c0;
    if (!tmp) {
      const tmp2 = c1;
      if (!tmp2) {
        const tmp5 = _undefined(c3);
        let num;
        if (tmp5 != null) {
          num = tmp5.width;
        }
        if (!num) {
          num = 0;
        }
        let num2 = 0;
        if (c4 * c5 >= num) {
          num2 = c4 * c5 - num;
        }
        return num2;
      }
    }
    return c4 * c5;
  }
  const items4 = [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20];
  pnpm_ScrollViewGestureTsx2.__closure = items4;
  pnpm_ScrollViewGestureTsx2.__workletHash = 13525623005766;
  pnpm_ScrollViewGestureTsx2.__initData = tmp14;
  const items5 = [loop, size, dataLength, overscrollEnabled];
  const callback = useCallback(pnpm_ScrollViewGestureTsx2, items5);
  const items6 = [closure_9, scrollAnimationDuration, , , , , ];
  const useCallback2 = react.useCallback;
  items6[2] = DATA_LENGTH.Easing;
  items6[3] = dealWithAnimation.dealWithAnimation;
  items6[4] = withAnimation;
  items6[5] = closure_8;
  items6[6] = _mod1652.runOnJS;
  [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28] = items6;
  function pnpm_ScrollViewGestureTsx4(arg0, arg1) {
    let obj2;
    let tmp3;
    let tmp4;
    let tmp5;
    const obj = { type: "timing", config: obj2 };
    let tmp2 = c3;
    let tmp = c2;
    obj2 = { duration: c0 + 100, easing: _undefined.easeOutQuart };
    if (c3 == null) {
      tmp2 = obj;
    }
    const items = [c4, arg1, c5];
    c0 = undefined;
    _undefined = undefined;
    [tmp3, tmp4, tmp5] = items;
    function pnpm_ScrollViewGestureTsx3(arg0) {
      const tmp = arg0 && c0;
      if (tmp) {
        _undefined(c0)();
      }
    }
    const items1 = [tmp4, tmp5];
    pnpm_ScrollViewGestureTsx3.__closure = items1;
    pnpm_ScrollViewGestureTsx3.__workletHash = 17103031480378;
    pnpm_ScrollViewGestureTsx3.__initData = tmp3;
    return tmp(tmp2)(arg0, pnpm_ScrollViewGestureTsx3);
  }
  const items7 = [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28];
  pnpm_ScrollViewGestureTsx4.__closure = items7;
  pnpm_ScrollViewGestureTsx4.__workletHash = 2650282611715;
  pnpm_ScrollViewGestureTsx4.__initData = tmp22;
  const items8 = [scrollAnimationDuration, withAnimation];
  const callback2 = useCallback2(pnpm_ScrollViewGestureTsx4, items8);
  const items9 = [closure_10, translation, , , , , , , , , , , ];
  const useCallback3 = react.useCallback;
  items9[2] = _mod1652.withDecay;
  items9[3] = typeof maxScrollDistancePerSwipe === "number";
  items9[4] = maxScrollDistancePerSwipe;
  items9[5] = size;
  items9[6] = pagingEnabled;
  items9[7] = callback2;
  items9[8] = loop;
  items9[9] = dataLength;
  items9[10] = snapEnabled;
  items9[11] = overscrollEnabled;
  items9[12] = callback;
  [tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43] = items9;
  function pnpm_ScrollViewGestureTsx5(arg0, velocity, arg2) {
    let tmp39Result;
    const value = _undefined.value;
    const obj = { velocity, deceleration: 0.999 };
    let tmp23Result = _undefined2(obj);
    const tmp = _undefined;
    const tmp3 = c2;
    if (!tmp3) {
      const _Math2 = Math;
      const tmp10 = -Math.round((value + 2 * velocity) / c4);
      if (c5) {
        let floor;
        let num3 = -1;
        if (arg0 >= 0) {
          num3 = 1;
        }
        if (-num3 < 0) {
          const _Math4 = Math;
          floor = Math.ceil;
        } else {
          const _Math3 = Math;
          floor = Math.floor;
        }
        const floorResult = floor(-value / c4);
        const _Math5 = Math;
        if (floorResult !== tmp10) {
          if (-Math.sign(velocity) === -num3) {
            if (c7) {
              const result = -floorResult + tmp12 * tmp9;
              let result1 = result;
              const tmp23 = c6;
              if (!c7) {
                result1 = result;
                if (!c10) {
                  const _Math12 = Math;
                  const _Math13 = Math;
                  const _Math14 = Math;
                  const _Math15 = Math;
                  const tmp28 = _undefined3();
                  const signResult = Math.sign(result);
                  result1 = signResult * Math.max(0, Math.min(tmp28, Math.abs(result)));
                }
              }
              tmp23Result = tmp23(result1, arg2);
            } else {
              const _Math6 = Math;
              const _Math7 = Math;
              const diff = c8 - 1;
              const result2 = -Math.min(diff, Math.max(0, floorResult + tmp12)) * tmp9;
              let result3 = result2;
              const tmp16 = c6;
              if (!c7) {
                result3 = result2;
                if (!c10) {
                  const _Math8 = Math;
                  const _Math9 = Math;
                  const _Math10 = Math;
                  const _Math11 = Math;
                  const tmp21 = _undefined3();
                  const signResult1 = Math.sign(result2);
                  result3 = signResult1 * Math.max(0, Math.min(tmp21, Math.abs(result2)));
                }
              }
              tmp23Result = tmp16(result3, arg2);
            }
          }
        }
        const result4 = -floorResult * tmp9;
        let result5 = result4;
        const tmp30 = c6;
        if (!c7) {
          result5 = result4;
          if (!c10) {
            const _Math16 = Math;
            const _Math17 = Math;
            const _Math18 = Math;
            const _Math19 = Math;
            const tmp36 = _undefined3();
            const signResult2 = Math.sign(result4);
            result5 = signResult2 * Math.max(0, Math.min(tmp36, Math.abs(result4)));
          }
        }
        tmp23Result = tmp30(result5, arg2);
      }
      tmp39Result = tmp23Result;
      const tmp38 = !c5 && c9;
      if (tmp38) {
        const result6 = -tmp10 * tmp9;
        let result7 = result6;
        const tmp39 = c6;
        if (!c7) {
          result7 = result6;
          if (!c10) {
            const _Math20 = Math;
            const _Math21 = Math;
            const _Math22 = Math;
            const _Math23 = Math;
            const tmp45 = _undefined3();
            const signResult3 = Math.sign(result6);
            result7 = signResult3 * Math.max(0, Math.min(tmp45, Math.abs(result6)));
          }
        }
        tmp39Result = tmp39(result7, arg2);
      }
    } else {
      const _Math = Math;
      tmp39Result = value;
    }
    tmp.value = tmp39Result;
  }
  const items10 = [tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43];
  pnpm_ScrollViewGestureTsx5.__closure = items10;
  pnpm_ScrollViewGestureTsx5.__workletHash = 14219285338620;
  pnpm_ScrollViewGestureTsx5.__initData = tmp31;
  const items11 = [callback2, size, dataLength, loop, snapEnabled, translation, pagingEnabled, maxScrollDistancePerSwipe, tmp29];
  const callback3 = useCallback3(pnpm_ScrollViewGestureTsx5, items11);
  const items12 = [closure_11, sharedValue2, onScrollEnd, ];
  const useCallback4 = react.useCallback;
  items12[3] = _mod1652.runOnJS;
  [tmp45, tmp46, tmp47, tmp48] = items12;
  function pnpm_ScrollViewGestureTsx6(arg0) {
    const tmp = arg0;
    if (tmp) {
      c0.value = false;
      if (c1) {
        _undefined(tmp3)();
      }
    }
  }
  const items13 = [tmp46, tmp47, tmp48];
  pnpm_ScrollViewGestureTsx6.__closure = items13;
  pnpm_ScrollViewGestureTsx6.__workletHash = 15614287143067;
  pnpm_ScrollViewGestureTsx6.__initData = tmp45;
  const items14 = [onScrollEnd, sharedValue2];
  const callback4 = useCallback4(pnpm_ScrollViewGestureTsx6, items14);
  const items15 = [closure_13, sharedValue2, translation, , , , ];
  const useCallback5 = react.useCallback;
  items15[3] = _mod1652.withDecay;
  items15[4] = sharedValue5;
  items15[5] = closure_12;
  items15[6] = callback4;
  [tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56] = items15;
  function pnpm_ScrollViewGestureTsx8() {
    let tmp2;
    let tmp3;
    c0.value = true;
    const items = [, ];
    const obj = { velocity: _undefined2.value };
    items[0] = c4;
    items[1] = c5;
    c0 = undefined;
    [tmp2, tmp3] = items;
    function pnpm_ScrollViewGestureTsx7(arg0) {
      return _undefined(arg0);
    }
    const items1 = [tmp3];
    pnpm_ScrollViewGestureTsx7.__closure = items1;
    pnpm_ScrollViewGestureTsx7.__workletHash = 7886845276932;
    pnpm_ScrollViewGestureTsx7.__initData = tmp2;
    c1.value = _undefined(obj, pnpm_ScrollViewGestureTsx7);
  }
  const items16 = [tmp51, tmp52, tmp53, tmp54, tmp55, tmp56];
  pnpm_ScrollViewGestureTsx8.__closure = items16;
  pnpm_ScrollViewGestureTsx8.__workletHash = 16796181476367;
  pnpm_ScrollViewGestureTsx8.__initData = tmp50;
  const items17 = [callback4, sharedValue5, sharedValue2, translation];
  const callback5 = useCallback5(pnpm_ScrollViewGestureTsx8, items17);
  const items18 = [closure_14, sharedValue2, translation, sharedValue4, callback5, loop, callback2, dataLength, size];
  [tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66] = items18;
  function pnpm_ScrollViewGestureTsx9() {
    if (!_undefined.value) {
      if (_undefined2.value > 0) {
        if (_undefined3.value < 0) {
          _undefined4();
        } else {
          const tmp12 = c4;
          if (!tmp12) {
            _undefined2.value = _undefined5(0);
          }
        }
      }
      if (_undefined2.value < -c6 - 1 * c7) {
        if (_undefined3.value > 0) {
          _undefined4();
        } else {
          const tmp6 = c4;
          if (!tmp6) {
            _undefined2.value = _undefined5(-tmp3 - 1 * tmp4);
          }
        }
      }
    }
  }
  const items19 = [tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66];
  pnpm_ScrollViewGestureTsx9.__closure = items19;
  pnpm_ScrollViewGestureTsx9.__workletHash = 7719556442370;
  pnpm_ScrollViewGestureTsx9.__initData = tmp58;
  const items20 = [sharedValue2, translation, dataLength, size, sharedValue4, loop, callback5, callback2];
  const callback1 = obj10.useCallback(pnpm_ScrollViewGestureTsx9, items20);
  const items21 = [closure_15, translation];
  [tmp68, tmp69] = items21;
  function pnpm_ScrollViewGestureTsx10() {
    return _undefined.value;
  }
  const items22 = [tmp69];
  pnpm_ScrollViewGestureTsx10.__closure = items22;
  pnpm_ScrollViewGestureTsx10.__workletHash = 16593869871286;
  pnpm_ScrollViewGestureTsx10.__initData = tmp68;
  const items23 = [closure_16, pagingEnabled, callback1];
  [tmp70, tmp71, tmp72] = items23;
  function pnpm_ScrollViewGestureTsx11() {
    const tmp = c0;
    if (!tmp) {
      _undefined();
    }
  }
  const items24 = [tmp71, tmp72];
  pnpm_ScrollViewGestureTsx11.__closure = items24;
  pnpm_ScrollViewGestureTsx11.__workletHash = 7134235687258;
  pnpm_ScrollViewGestureTsx11.__initData = tmp70;
  const items25 = [pagingEnabled, callback1];
  const tmpResult17 = _mod1652;
  const animatedReaction = tmpResult17.useAnimatedReaction(pnpm_ScrollViewGestureTsx10, pnpm_ScrollViewGestureTsx11, items25);
  const items26 = [closure_17, loop, overscrollEnabled, callback];
  [tmp74, tmp75, tmp76, tmp77] = items26;
  function withProcessTranslation(arg0) {
    const tmp = c0;
    if (!tmp) {
      const tmp2 = c1;
      if (!tmp2) {
        const _Math = Math;
        const _Math2 = Math;
        const _Math3 = Math;
        const _Math4 = Math;
        const tmp4 = _undefined();
        const signResult = Math.sign(arg0);
        return signResult * Math.max(0, Math.min(tmp4, Math.abs(arg0)));
      }
    }
    return arg0;
  }
  const items27 = [tmp75, tmp76, tmp77];
  withProcessTranslation.__closure = items27;
  withProcessTranslation.__workletHash = 13733068836819;
  withProcessTranslation.__initData = tmp74;
  const items28 = [closure_18, sharedValue2, sharedValue3, onScrollStart, _mod1652.runOnJS, sharedValue, dataLength, size, loop, overscrollEnabled, callback, sharedValue1, translation];
  [tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91] = items28;
  function pnpm_ScrollViewGestureTsx13(arg0) {
    c0.value = true;
    c1.value = true;
    if (c2) {
      _undefined(tmp)();
    }
    c4.value = (c5 - 1) * c6;
    let tmp5 = c7;
    const tmp4 = c4;
    if (!c7) {
      tmp5 = c8;
    }
    if (!tmp5) {
      tmp4.value = _undefined2();
    }
    c10.value = _undefined3.value;
  }
  const items29 = [tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91];
  pnpm_ScrollViewGestureTsx13.__closure = items29;
  pnpm_ScrollViewGestureTsx13.__workletHash = 13175886918959;
  pnpm_ScrollViewGestureTsx13.__initData = tmp79;
  const items30 = [sharedValue, size, dataLength, loop, sharedValue2, sharedValue1, sharedValue3, translation, overscrollEnabled, callback, onScrollStart];
  const items31 = [closure_19, sharedValue1, sharedValue3, , , , , , , ];
  const tmp78Result = react.useCallback(pnpm_ScrollViewGestureTsx13, items30);
  items31[3] = _mod1652.cancelAnimation;
  items31[4] = translation;
  items31[5] = sharedValue2;
  items31[6] = derivedValue;
  items31[7] = fixedDirection;
  items31[8] = loop;
  items31[9] = sharedValue;
  [tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102] = items31;
  function pnpm_ScrollViewGestureTsx14(translationY) {
    if (undefined !== _undefined.value) {
      let tmp8;
      if (_undefined2.value) {
        tmp15.value = false;
        _undefined3(_undefined4);
      }
      c4.value = true;
      let translationX = translationY.translationY;
      if (_undefined5.value) {
        translationX = translationY.translationX;
      }
      if ("negative" === c6) {
        const _Math2 = Math;
        tmp8 = -Math.abs(translationX);
      } else {
        tmp8 = translationX;
        if ("positive" === tmp7) {
          const _Math = Math;
          tmp8 = +Math.abs(translationX);
        }
      }
      const tmp11 = c7;
      if (!tmp11) {
        let num2 = 0;
        if (_undefined4.value <= 0) {
          num2 = -_undefined6.value;
        }
        _undefined4.value = num2 + 0.5 * (tmp8 - (num2 - _undefined.value));
      }
      _undefined4.value = _undefined.value + tmp8;
    }
  }
  const items32 = [tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102];
  pnpm_ScrollViewGestureTsx14.__closure = items32;
  pnpm_ScrollViewGestureTsx14.__workletHash = 11932635873928;
  pnpm_ScrollViewGestureTsx14.__initData = tmp93;
  const items33 = [derivedValue, sharedValue, sharedValue1, loop, overscrollEnabled, fixedDirection, translation, sharedValue3, sharedValue2];
  const items34 = [, , , , , , , , , , , , , , , , , ];
  const tmp103 = typeof minScrollDistancePerSwipe === "number";
  items34[0] = closure_20;
  items34[1] = sharedValue1;
  items34[2] = derivedValue;
  items34[3] = sharedValue5;
  items34[4] = fixedDirection;
  items34[5] = sharedValue4;
  items34[6] = typeof maxScrollDistancePerSwipe === "number";
  items34[7] = maxScrollDistancePerSwipe;
  items34[8] = size;
  items34[9] = translation;
  items34[10] = callback2;
  items34[11] = withProcessTranslation;
  items34[12] = onScrollEnd;
  items34[13] = tmp103;
  items34[14] = minScrollDistancePerSwipe;
  items34[15] = callback3;
  items34[16] = loop;
  items34[17] = sharedValue2;
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
  [tmp105, tmp106, tmp107, tmp108, tmp109, tmp110, tmp111, tmp112, tmp113, tmp114, tmp115, tmp116, tmp117, tmp118, tmp119, tmp120, tmp121, tmp122] = items34;
  function pnpm_ScrollViewGestureTsx15(velocityX, arg1) {
    let translationX;
    let translationY;
    let velocityY;
    if (undefined !== _undefined.value) {
      let tmp3;
      ({ velocityY, translationY, translationX } = velocityX);
      const iter2 = _undefined2;
      if (_undefined2.value) {
        velocityY = velocityX.velocityX;
      }
      c2.value = velocityY;
      if (iter2.value) {
        translationY = translationX;
      }
      if ("negative" === c3) {
        const _Math2 = Math;
        tmp3 = -Math.abs(translationY);
      } else {
        tmp3 = translationY;
        if ("positive" === tmp2) {
          const _Math = Math;
          tmp3 = +Math.abs(translationY);
        }
      }
      c4.value = tmp3;
      const sum = velocityY + tmp3;
      const tmp8 = c5;
      if (tmp8) {
        const _Math3 = Math;
        if (Math.abs(sum) > c6) {
          const _Math7 = Math;
          const _Math8 = Math;
          c8.value = _undefined3(_undefined4(Math.round((_undefined.value + tmp10 * Math.sign(sum)) / c7) * c7), c11);
        }
        const tmp27 = c15;
        if (!tmp27) {
          c16.value = false;
        }
        _undefined.value = undefined;
      }
      const tmp11 = c12;
      if (tmp11) {
        const _Math4 = Math;
        if (Math.abs(sum) < c13) {
          const _Math5 = Math;
          const _Math6 = Math;
          c8.value = _undefined3(_undefined4(Math.round((_undefined.value + tmp13 * Math.sign(sum)) / c7) * c7), c11);
        }
      }
      _undefined5(tmp3, velocityY, c11);
    }
  }
  const items35 = [tmp106, tmp107, tmp108, tmp109, tmp110, tmp111, tmp112, tmp113, tmp114, tmp115, tmp116, tmp117, tmp118, tmp119, tmp120, tmp121, tmp122];
  pnpm_ScrollViewGestureTsx15.__closure = items35;
  pnpm_ScrollViewGestureTsx15.__workletHash = 1869871892063;
  pnpm_ScrollViewGestureTsx15.__initData = tmp105;
  const items36 = [size, loop, sharedValue2, sharedValue1, translation, derivedValue, sharedValue5, sharedValue4, fixedDirection, tmp29, maxScrollDistancePerSwipe, tmp29, minScrollDistancePerSwipe, callback3, callback2, onScrollEnd];
  const tmp78Result3 = react.useCallback(pnpm_ScrollViewGestureTsx14, items33);
  let obj2 = { onConfigurePanGesture, onGestureStart: tmp78Result, onGestureUpdate: tmp78Result3, onGestureEnd: react.useCallback(pnpm_ScrollViewGestureTsx15, items36), options: { enabled } };
  const items37 = [closure_21, updateContainerSize];
  let c0;
  [tmp125, tmp126] = items37;
  function pnpm_ScrollViewGestureTsx16(nativeEvent) {
    size = { width: nativeEvent.nativeEvent.layout.width, height: nativeEvent.nativeEvent.layout.height };
    _undefined(size);
  }
  const items38 = [tmp126];
  pnpm_ScrollViewGestureTsx16.__closure = items38;
  pnpm_ScrollViewGestureTsx16.__workletHash = 11968331702097;
  pnpm_ScrollViewGestureTsx16.__initData = tmp125;
  const items39 = [updateContainerSize];
  const tmp78Result4 = react.useCallback(pnpm_ScrollViewGestureTsx15, items36);
  const tmpResult18 = usePanGestureProxy;
  const panGestureProxy = tmpResult18.usePanGestureProxy(obj2);
  const callback6 = obj10.useCallback(pnpm_ScrollViewGestureTsx16, items39);
  const GestureDetector = LegacyBaseButton.GestureDetector;
  return <GestureDetector gesture={panGestureProxy}>{null}</GestureDetector>;
}
