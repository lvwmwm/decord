// Module ID: 15644
// Function ID: 120639
// Name: useLaunchPadGesture
// Dependencies: [31, 10451, 3981, 1557, 5217, 477, 14710, 10019, 3991, 4099, 2]
// Exports: default

// Module 15644 (useLaunchPadGesture)
import result from "result";
import LAUNCH_PAD_SPRING_CONFIG from "LAUNCH_PAD_SPRING_CONFIG";

let closure_10;
let closure_11;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE: closure_4, LAUNCH_PAD_END_TRANSLATION_THRESHOLD: closure_5, LAUNCH_PAD_END_VELOCITY_THRESHOLD: closure_6, LAUNCH_PAD_PULL_TAB_HEIGHT: closure_7, LAUNCH_PAD_PULL_TAB_HIT_SLOP: closure_8, LAUNCH_PAD_PULL_TAB_SCALE_FACTOR: closure_9, LAUNCH_PAD_PULL_TAB_WIDTH: closure_10, LaunchPadTypes: closure_11 } = LAUNCH_PAD_SPRING_CONFIG);
let closure_12 = { code: "function useLaunchPadGestureTsx1(){const{updateSharedValueIfChanged,gestureState,updaters}=this.__closure;updateSharedValueIfChanged(gestureState,{active:false,initialLaunchPadPosition:0,initialPullTabPosition:0,initialTouchX:0,initialTouchY:0,positionOffsetX:0,positionOffsetY:0,startTime:-1});updaters.setLaunchPadPullTabScale(1.0);}" };
let closure_13 = { code: "function useLaunchPadGestureTsx2(){const{gestureState,updaters,updateSharedValueIfChanged}=this.__closure;const{initialLaunchPadPosition:initialLaunchPadPosition,active:active}=gestureState.get();if(active){if(initialLaunchPadPosition===1){updaters.setLaunchPadPosition(1);}else{updaters.setLaunchPadPosition(0);}}updateSharedValueIfChanged(gestureState,{active:false,initialLaunchPadPosition:0,initialPullTabPosition:0,initialTouchX:0,initialTouchY:0,positionOffsetX:0,positionOffsetY:0,startTime:-1});}" };
let closure_14 = { code: "function useLaunchPadGestureTsx3({velocityX:velocityX,velocityY:velocityY,translationX:translationX,translationY:translationY}){const{gestureState,launchPadType,LaunchPadTypes,LAUNCH_PAD_END_TRANSLATION_THRESHOLD,LAUNCH_PAD_END_VELOCITY_THRESHOLD,updaters,launchPadSharedState}=this.__closure;const{requiresPop:requiresPop,startShown:startShown}=gestureState.get();if(requiresPop){if(!startShown){const isPullTabTapComplete=launchPadType===LaunchPadTypes.PULL_TAB&&Math.abs(translationX)<=LAUNCH_PAD_END_TRANSLATION_THRESHOLD&&Math.abs(translationY)<=LAUNCH_PAD_END_TRANSLATION_THRESHOLD&&Math.abs(velocityX)<=LAUNCH_PAD_END_VELOCITY_THRESHOLD&&Math.abs(velocityY)<=LAUNCH_PAD_END_VELOCITY_THRESHOLD;if(isPullTabTapComplete){updaters.setLaunchPadPosition(1);}else{updaters.setLaunchPadPosition(0);}}else{updaters.setLaunchPadPosition(1);}}else if(Math.abs(velocityX)<LAUNCH_PAD_END_VELOCITY_THRESHOLD){if(launchPadSharedState.get()>=0.5){updaters.setLaunchPadPosition(1);}else{updaters.setLaunchPadPosition(0);}}else if(velocityX>0){updaters.setLaunchPadPosition(0);}else{updaters.setLaunchPadPosition(1);}}" };
let closure_15 = { code: "function useLaunchPadGestureTsx4({translationX:translationX,translationY:translationY,absoluteX:absoluteX}){const{gestureState,getWindowDimensionsWorklet,POP_RESISTANCE,launchPadType,LaunchPadTypes,PIP_POP_DISTANCE,updaters,updateSharedValueIfChanged,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(!gestureState.get().active)return;const{initialTouchX:initialTouchX,requiresPop:requiresPop}=gestureState.get();const{width:windowWidth}=getWindowDimensionsWorklet();const newXOffset=absoluteX-initialTouchX;const distance=Math.max(newXOffset*-1,0);const resistance=distance*POP_RESISTANCE;const positionOffsetX=absoluteX-gestureState.get().initialTouchX;const launchPadPosition=1-(gestureState.get().initialTouchX+translationX-(launchPadType!==LaunchPadTypes.PULL_TAB?40:0))/windowWidth;if(requiresPop&&distance<=PIP_POP_DISTANCE){if(launchPadType!==LaunchPadTypes.PULL_TAB){const a=(distance-resistance)/windowWidth;updaters.setLaunchPadPosition(a);}else{updaters.setLaunchPadPullTabTranslation(translationY);}updateSharedValueIfChanged(gestureState,{positionOffsetX:positionOffsetX});}else{if(requiresPop){updateSharedValueIfChanged(gestureState,{requiresPop:false,positionOffsetX:positionOffsetX});runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}else{updateSharedValueIfChanged(gestureState,{positionOffsetX:positionOffsetX});}updaters.setLaunchPadPosition(launchPadPosition);}}" };
let closure_16 = { code: "function useLaunchPadGestureTsx5(event,manager){const{gestureState,State,getWindowDimensionsWorklet,launchPadType,LaunchPadTypes,LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE,LAUNCH_PAD_PULL_TAB_WIDTH,LAUNCH_PAD_PULL_TAB_HIT_SLOP,launchPadPullTabState,LAUNCH_PAD_PULL_TAB_HEIGHT,updaters,LAUNCH_PAD_PULL_TAB_SCALE_FACTOR,launchPadSharedState,MANUAL_ACTIVATION_THRESHOLD}=this.__closure;const{active:active,initialLaunchPadPosition:initialLaunchPadPosition,initialTouchX:initialTouchX,initialTouchY:initialTouchY}=gestureState.get();if(event.state!==State.BEGAN||active)return;const currentTouch=event.changedTouches[0];if(currentTouch==null){manager.fail();return;}const{x:x,y:y}=currentTouch;const{width:windowWidth}=getWindowDimensionsWorklet();switch(launchPadType){case LaunchPadTypes.DISABLED:manager.fail();return;case LaunchPadTypes.GESTURE_EDGE:if(initialLaunchPadPosition===0&&initialTouchX<windowWidth-LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE){manager.fail();return;}break;case LaunchPadTypes.PULL_TAB:{if(initialLaunchPadPosition>0)break;const inPullTabX=x>windowWidth-LAUNCH_PAD_PULL_TAB_WIDTH-LAUNCH_PAD_PULL_TAB_HIT_SLOP&&x<windowWidth;const inPullTabY=y>launchPadPullTabState.get().position-LAUNCH_PAD_PULL_TAB_HIT_SLOP&&y<launchPadPullTabState.get().position+LAUNCH_PAD_PULL_TAB_HEIGHT+LAUNCH_PAD_PULL_TAB_HIT_SLOP;if(!inPullTabX||!inPullTabY){manager.fail();return;}gestureState.set({...gestureState.get(),initialPullTabPosition:launchPadPullTabState.get().position,active:true});updaters.setLaunchPadPullTabScale(LAUNCH_PAD_PULL_TAB_SCALE_FACTOR);updaters.setLaunchPadShown(true);manager.activate();return;}case LaunchPadTypes.GESTURE_FULL:break;default:launchPadType;manager.fail();return;}const horizontalDistance=x-initialTouchX;const verticalDistance=Math.abs(y-initialTouchY);const hasMovedCorrectDirection=launchPadSharedState.get()>0&&horizontalDistance>0||launchPadSharedState.get()<=0&&horizontalDistance<0;if(hasMovedCorrectDirection&&Math.abs(horizontalDistance)>verticalDistance){if(Math.abs(horizontalDistance)<MANUAL_ACTIVATION_THRESHOLD){return;}gestureState.set({...gestureState.get(),active:true});updaters.setLaunchPadShown(true);manager.activate();return;}manager.fail();}" };
let closure_17 = { code: "function useLaunchPadGestureTsx6(event){const{gestureState,launchPadSharedState}=this.__closure;const{x:x,y:y}=event.changedTouches[0];gestureState.set({active:false,initialLaunchPadPosition:launchPadSharedState.get(),initialPullTabPosition:0,initialTouchX:x,initialTouchY:y,positionOffsetX:0,positionOffsetY:0,startTime:Date.now(),requiresPop:launchPadSharedState.get()===0,startShown:!(launchPadSharedState.get()===0)});}" };
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/launchpad/native/useLaunchPadGesture.tsx");

export default function useLaunchPadGesture(launchPadType) {
  launchPadType = launchPadType.launchPadType;
  const launchPadSharedState = launchPadType.launchPadSharedState;
  const launchPadPullTabState = launchPadType.launchPadPullTabState;
  const gestureState = launchPadType.gestureState;
  const updaters = launchPadType.updaters;
  let obj = launchPadType(launchPadPullTabState[2]);
  const isModalOpen = obj.useIsModalOpen();
  let tmp2 = launchPadSharedState(launchPadPullTabState[3])();
  let closure_6 = tmp2;
  const ref = gestureState.useRef(undefined);
  obj = {
    gesture: gestureState.useMemo(() => {
      let num = 0;
      if (launchPadType === outer1_11.GESTURE_FULL) {
        num = -1 * updaters;
      }
      const Gesture = launchPadType(launchPadPullTabState[4]).Gesture;
      let tmp2 = !isModalOpen;
      if (tmp2) {
        tmp2 = launchPadType !== outer1_11.DISABLED;
      }
      const PanResult = Gesture.Pan();
      const enabledResult = Gesture.Pan().enabled(tmp2);
      const withRefResult = Gesture.Pan().enabled(tmp2).withRef(ref);
      const minDistanceResult = Gesture.Pan().enabled(tmp2).withRef(ref).minDistance(0);
      let obj5 = launchPadType(launchPadPullTabState[5]);
      const maxPointersResult = Gesture.Pan().enabled(tmp2).withRef(ref).minDistance(0).maxPointers(1);
      let obj = { top: -1 * tmp2.top, left: 0, bottom: -1 * tmp2.bottom, right: num };
      const manualActivationResult = Gesture.Pan().enabled(tmp2).withRef(ref).minDistance(0).maxPointers(1).manualActivation(obj5.isAndroid());
      const fn = function w(arg0) {
        let x;
        let y;
        const obj = { active: false, initialLaunchPadPosition: null, initialPullTabPosition: 0, initialTouchX: null, initialTouchY: null, positionOffsetX: 0, positionOffsetY: 0 };
        ({ x, y } = arg0.changedTouches[0]);
        obj.initialLaunchPadPosition = outer1_1.get();
        obj.initialTouchX = x;
        obj.initialTouchY = y;
        obj.startTime = Date.now();
        obj.requiresPop = 0 === outer1_1.get();
        obj.startShown = 0 !== outer1_1.get();
        const result = outer1_3.set(obj);
      };
      obj = { gestureState, launchPadSharedState };
      fn.__closure = obj;
      fn.__workletHash = 14359599806316;
      fn.__initData = outer1_17;
      const hitSlopResult = Gesture.Pan().enabled(tmp2).withRef(ref).minDistance(0).maxPointers(1).manualActivation(obj5.isAndroid()).hitSlop(obj);
      class X {
        constructor(arg0, arg1) {
          value = outer1_3.get();
          ({ initialLaunchPadPosition, initialTouchX } = value);
          ({ active, initialTouchY } = value);
          if (arg0.state === launchPadType(launchPadPullTabState[4]).State.BEGAN) {
            if (!active) {
              num = 0;
              first = arg0.changedTouches[0];
              tmp3 = null;
              if (null != first) {
                ({ x, y } = first);
                tmp5 = launchPadType;
                tmp6 = launchPadPullTabState;
                num2 = 6;
                obj = launchPadType(launchPadPullTabState[6]);
                width = obj.getWindowDimensionsWorklet().width;
                tmp7 = outer1_0;
                tmp8 = outer2_11;
                if (outer2_11.DISABLED === outer1_0) {
                  failResult = arg1.fail();
                  return;
                } else {
                  tmp44 = outer2_11;
                  if (outer2_11.GESTURE_EDGE === tmp7) {
                    if (0 === initialLaunchPadPosition) {
                      tmp28 = updaters;
                      if (initialTouchX < width - updaters) {
                        failResult1 = arg1.fail();
                        return;
                      }
                    }
                  } else {
                    tmp45 = outer2_11;
                    if (outer2_11.PULL_TAB === tmp7) {
                      if (initialLaunchPadPosition <= 0) {
                        tmp47 = outer1_2;
                        tmp48 = outer2_8;
                        tmp13 = y > outer1_2.get().position - outer2_8;
                        if (tmp13) {
                          tmp10 = outer1_2;
                          tmp11 = c7;
                          tmp12 = outer2_8;
                          tmp13 = y < outer1_2.get().position + c7 + outer2_8;
                        }
                        tmp14 = outer2_10;
                        tmp15 = outer2_8;
                        if (x > width - outer2_10 - outer2_8) {
                          if (x < width) {
                            if (tmp13) {
                              tmp18 = outer1_3;
                              obj = {};
                              tmp19 = obj;
                              merged = Object.assign(outer1_3.get());
                              tmp21 = outer1_2;
                              str = "initialPullTabPosition";
                              obj["initialPullTabPosition"] = outer1_2.get().position;
                              flag = true;
                              str2 = "active";
                              obj["active"] = true;
                              result = outer1_3.set(obj);
                              tmp23 = outer1_4;
                              tmp24 = outer2_9;
                              result1 = outer1_4.setLaunchPadPullTabScale(outer2_9);
                              setLaunchPadShownResult = outer1_4.setLaunchPadShown(true);
                              activateResult = arg1.activate();
                            }
                            return tmp17;
                          }
                        }
                        failResult2 = arg1.fail();
                      }
                    } else {
                      tmp9 = outer2_11;
                      if (outer2_11.GESTURE_FULL !== tmp7) {
                        failResult3 = arg1.fail();
                        return;
                      }
                    }
                  }
                  diff = x - initialTouchX;
                  tmp30 = globalThis;
                  _Math = Math;
                  tmp32 = outer1_1;
                  absolute = Math.abs(y - initialTouchY);
                  if (outer1_1.get() <= 0) {
                    tmp33 = outer1_1;
                    if (outer1_1.get() <= 0) {
                    }
                    failResult4 = arg1.fail();
                  }
                  _Math2 = Math;
                  if (Math.abs(diff) > absolute) {
                    _Math3 = Math;
                    num3 = 3;
                    if (Math.abs(diff) < 3) {
                      return;
                    } else {
                      tmp35 = outer1_3;
                      obj1 = {};
                      tmp36 = obj1;
                      merged1 = Object.assign(outer1_3.get());
                      flag2 = true;
                      str3 = "active";
                      obj1["active"] = true;
                      result2 = outer1_3.set(obj1);
                      tmp39 = outer1_4;
                      setLaunchPadShownResult1 = outer1_4.setLaunchPadShown(true);
                      activateResult1 = arg1.activate();
                      return;
                    }
                  }
                }
              } else {
                failResult5 = arg1.fail();
              }
            }
          }
          return;
        }
      }
      const onTouchesDownResult = Gesture.Pan().enabled(tmp2).withRef(ref).minDistance(0).maxPointers(1).manualActivation(obj5.isAndroid()).hitSlop(obj).onTouchesDown(fn);
      X.__closure = { gestureState, State: launchPadType(launchPadPullTabState[4]).State, getWindowDimensionsWorklet: launchPadType(launchPadPullTabState[6]).getWindowDimensionsWorklet, launchPadType, LaunchPadTypes: outer1_11, LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE: updaters, LAUNCH_PAD_PULL_TAB_WIDTH: outer1_10, LAUNCH_PAD_PULL_TAB_HIT_SLOP: outer1_8, launchPadPullTabState, LAUNCH_PAD_PULL_TAB_HEIGHT: ref, updaters, LAUNCH_PAD_PULL_TAB_SCALE_FACTOR: outer1_9, launchPadSharedState, MANUAL_ACTIVATION_THRESHOLD: 3 };
      X.__workletHash = 17469318427529;
      X.__initData = outer1_16;
      let obj1 = { gestureState, State: launchPadType(launchPadPullTabState[4]).State, getWindowDimensionsWorklet: launchPadType(launchPadPullTabState[6]).getWindowDimensionsWorklet, launchPadType, LaunchPadTypes: outer1_11, LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE: updaters, LAUNCH_PAD_PULL_TAB_WIDTH: outer1_10, LAUNCH_PAD_PULL_TAB_HIT_SLOP: outer1_8, launchPadPullTabState, LAUNCH_PAD_PULL_TAB_HEIGHT: ref, updaters, LAUNCH_PAD_PULL_TAB_SCALE_FACTOR: outer1_9, launchPadSharedState, MANUAL_ACTIVATION_THRESHOLD: 3 };
      class I {
        constructor(arg0) {
          absoluteX = arg0.absoluteX;
          ({ translationX, translationY } = arg0);
          if (outer1_3.get().active) {
            tmp = outer1_3;
            value = outer1_3.get();
            requiresPop = value.requiresPop;
            tmp3 = launchPadType;
            tmp4 = launchPadPullTabState;
            num = 6;
            obj = launchPadType(launchPadPullTabState[6]);
            width = obj.getWindowDimensionsWorklet().width;
            tmp5 = globalThis;
            _Math = Math;
            num2 = -1;
            num3 = 0;
            bound = Math.max(-1 * (absoluteX - value.initialTouchX), 0);
            diff = absoluteX - outer1_3.get().initialTouchX;
            tmp9 = outer1_0;
            tmp10 = outer2_11;
            sum = outer1_3.get().initialTouchX + translationX;
            if (outer1_0 !== outer2_11.PULL_TAB) {
              num3 = 40;
            }
            result = (sum - num3) / width;
            if (requiresPop) {
              num4 = 70;
              if (bound <= 70) {
                tmp23 = outer1_0;
                tmp24 = outer2_11;
                if (outer1_0 !== outer2_11.PULL_TAB) {
                  tmp27 = outer1_4;
                  num9 = 0.5;
                  setLaunchPadPositionResult = outer1_4.setLaunchPadPosition((bound - 0.5 * bound) / width);
                } else {
                  tmp25 = outer1_4;
                  result1 = outer1_4.setLaunchPadPullTabTranslation(translationY);
                }
                tmp29 = launchPadSharedState;
                tmp30 = launchPadPullTabState;
                num10 = 7;
                tmp31 = outer1_3;
                obj = {};
                obj.positionOffsetX = diff;
                tmp32 = launchPadSharedState(launchPadPullTabState[7])(outer1_3, obj);
              }
            }
            tmp12 = launchPadSharedState;
            tmp13 = launchPadPullTabState;
            num5 = 7;
            tmp14 = launchPadSharedState(launchPadPullTabState[7]);
            tmp15 = outer1_3;
            if (requiresPop) {
              obj1 = {};
              flag = false;
              obj1.requiresPop = false;
              obj1.positionOffsetX = diff;
              tmp14Result = tmp14(tmp15, obj1);
              tmp18 = launchPadType;
              num6 = 8;
              obj4 = launchPadType(tmp13[8]);
              num7 = 9;
              runOnJSResult = obj4.runOnJS(launchPadType(tmp13[9]).triggerHapticFeedback);
              tmp19Result = runOnJSResult(launchPadType(tmp13[9]).HapticFeedbackTypes.IMPACT_MEDIUM);
            } else {
              obj2 = {};
              obj2.positionOffsetX = diff;
              tmp14Result1 = tmp14(tmp15, obj2);
            }
            tmp21 = outer1_4;
            num8 = 1;
            setLaunchPadPositionResult1 = outer1_4.setLaunchPadPosition(1 - result);
          }
          return;
        }
      }
      const onTouchesMoveResult = onTouchesDownResult.onTouchesMove(X);
      I.__closure = { gestureState, getWindowDimensionsWorklet: launchPadType(launchPadPullTabState[6]).getWindowDimensionsWorklet, POP_RESISTANCE: 0.5, launchPadType, LaunchPadTypes: outer1_11, PIP_POP_DISTANCE: 70, updaters, updateSharedValueIfChanged: launchPadSharedState(launchPadPullTabState[7]), runOnJS: launchPadType(launchPadPullTabState[8]).runOnJS, triggerHapticFeedback: launchPadType(launchPadPullTabState[9]).triggerHapticFeedback, HapticFeedbackTypes: launchPadType(launchPadPullTabState[9]).HapticFeedbackTypes };
      I.__workletHash = 8073380735713;
      I.__initData = outer1_15;
      const obj2 = { gestureState, getWindowDimensionsWorklet: launchPadType(launchPadPullTabState[6]).getWindowDimensionsWorklet, POP_RESISTANCE: 0.5, launchPadType, LaunchPadTypes: outer1_11, PIP_POP_DISTANCE: 70, updaters, updateSharedValueIfChanged: launchPadSharedState(launchPadPullTabState[7]), runOnJS: launchPadType(launchPadPullTabState[8]).runOnJS, triggerHapticFeedback: launchPadType(launchPadPullTabState[9]).triggerHapticFeedback, HapticFeedbackTypes: launchPadType(launchPadPullTabState[9]).HapticFeedbackTypes };
      const fn2 = function v(velocityX) {
        let translationX;
        let translationY;
        let velocityY;
        velocityX = velocityX.velocityX;
        ({ velocityY, translationX, translationY } = velocityX);
        const value = outer1_3.get();
        if (value.requiresPop) {
          if (value.startShown) {
            outer1_4.setLaunchPadPosition(1);
          } else {
            if (outer1_0 === outer2_11.PULL_TAB) {
              const _Math2 = Math;
              if (Math.abs(translationX) <= isModalOpen) {
                const _Math3 = Math;
                if (Math.abs(translationY) <= isModalOpen) {
                  const _Math4 = Math;
                  if (Math.abs(velocityX) <= closure_6) {
                    const _Math5 = Math;
                  }
                }
              }
            }
            outer1_4.setLaunchPadPosition(0);
          }
        } else {
          const _Math = Math;
          if (Math.abs(velocityX) < closure_6) {
            if (outer1_1.get() >= 0.5) {
              outer1_4.setLaunchPadPosition(1);
            } else {
              outer1_4.setLaunchPadPosition(0);
            }
          } else if (velocityX > 0) {
            outer1_4.setLaunchPadPosition(0);
          } else {
            outer1_4.setLaunchPadPosition(1);
          }
        }
      };
      fn2.__closure = { gestureState, launchPadType, LaunchPadTypes: outer1_11, LAUNCH_PAD_END_TRANSLATION_THRESHOLD: isModalOpen, LAUNCH_PAD_END_VELOCITY_THRESHOLD: tmp2, updaters, launchPadSharedState };
      fn2.__workletHash = 13108163303108;
      fn2.__initData = outer1_14;
      const obj3 = { gestureState, launchPadType, LaunchPadTypes: outer1_11, LAUNCH_PAD_END_TRANSLATION_THRESHOLD: isModalOpen, LAUNCH_PAD_END_VELOCITY_THRESHOLD: tmp2, updaters, launchPadSharedState };
      const onChangeResult = onTouchesMoveResult.onChange(I);
      const fn3 = function b() {
        const value = outer1_3.get();
        if (value.active) {
          if (1 === tmp2) {
            outer1_4.setLaunchPadPosition(1);
          } else {
            outer1_4.setLaunchPadPosition(0);
          }
        }
        launchPadSharedState(launchPadPullTabState[7])(outer1_3, { active: false, initialLaunchPadPosition: 0, initialPullTabPosition: 0, initialTouchX: 0, initialTouchY: 0, positionOffsetX: 0, positionOffsetY: 0, startTime: -1 });
      };
      const onEndResult = onTouchesMoveResult.onChange(I).onEnd(fn2);
      fn3.__closure = { gestureState, updaters, updateSharedValueIfChanged: launchPadSharedState(launchPadPullTabState[7]) };
      fn3.__workletHash = 11677880944102;
      fn3.__initData = outer1_13;
      let obj4 = { gestureState, updaters, updateSharedValueIfChanged: launchPadSharedState(launchPadPullTabState[7]) };
      const fn4 = function t() {
        launchPadSharedState(launchPadPullTabState[7])(outer1_3, { active: false, initialLaunchPadPosition: 0, initialPullTabPosition: 0, initialTouchX: 0, initialTouchY: 0, positionOffsetX: 0, positionOffsetY: 0, startTime: -1 });
        const result = outer1_4.setLaunchPadPullTabScale(1);
      };
      obj5 = { updateSharedValueIfChanged: launchPadSharedState(launchPadPullTabState[7]), gestureState, updaters };
      fn4.__closure = obj5;
      fn4.__workletHash = 14463491499289;
      fn4.__initData = outer1_12;
      return onEndResult.onTouchesCancelled(fn3).onFinalize(fn4);
    }, items),
    gestureRef: ref
  };
  items = [gestureState, tmp2, isModalOpen, launchPadPullTabState, launchPadSharedState, launchPadType, updaters];
  return obj;
};
