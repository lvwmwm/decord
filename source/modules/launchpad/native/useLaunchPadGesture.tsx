// Module ID: 15527
// Function ID: 118466
// Name: useLaunchPadGesture
// Dependencies: []
// Exports: default

// Module 15527 (useLaunchPadGesture)
let closure_3 = importAll(dependencyMap[0]);
({ LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE: closure_4, LAUNCH_PAD_END_TRANSLATION_THRESHOLD: closure_5, LAUNCH_PAD_END_VELOCITY_THRESHOLD: closure_6, LAUNCH_PAD_PULL_TAB_HEIGHT: closure_7, LAUNCH_PAD_PULL_TAB_HIT_SLOP: closure_8, LAUNCH_PAD_PULL_TAB_SCALE_FACTOR: closure_9, LAUNCH_PAD_PULL_TAB_WIDTH: closure_10, LaunchPadTypes: closure_11 } = arg1(dependencyMap[1]));
let closure_12 = { code: "function useLaunchPadGestureTsx1(){const{updateSharedValueIfChanged,gestureState,updaters}=this.__closure;updateSharedValueIfChanged(gestureState,{active:false,initialLaunchPadPosition:0,initialPullTabPosition:0,initialTouchX:0,initialTouchY:0,positionOffsetX:0,positionOffsetY:0,startTime:-1});updaters.setLaunchPadPullTabScale(1.0);}" };
let closure_13 = { code: "function useLaunchPadGestureTsx2(){const{gestureState,updaters,updateSharedValueIfChanged}=this.__closure;const{initialLaunchPadPosition:initialLaunchPadPosition,active:active}=gestureState.get();if(active){if(initialLaunchPadPosition===1){updaters.setLaunchPadPosition(1);}else{updaters.setLaunchPadPosition(0);}}updateSharedValueIfChanged(gestureState,{active:false,initialLaunchPadPosition:0,initialPullTabPosition:0,initialTouchX:0,initialTouchY:0,positionOffsetX:0,positionOffsetY:0,startTime:-1});}" };
let closure_14 = { code: "function useLaunchPadGestureTsx3({velocityX:velocityX,velocityY:velocityY,translationX:translationX,translationY:translationY}){const{gestureState,launchPadType,LaunchPadTypes,LAUNCH_PAD_END_TRANSLATION_THRESHOLD,LAUNCH_PAD_END_VELOCITY_THRESHOLD,updaters,launchPadSharedState}=this.__closure;const{requiresPop:requiresPop,startShown:startShown}=gestureState.get();if(requiresPop){if(!startShown){const isPullTabTapComplete=launchPadType===LaunchPadTypes.PULL_TAB&&Math.abs(translationX)<=LAUNCH_PAD_END_TRANSLATION_THRESHOLD&&Math.abs(translationY)<=LAUNCH_PAD_END_TRANSLATION_THRESHOLD&&Math.abs(velocityX)<=LAUNCH_PAD_END_VELOCITY_THRESHOLD&&Math.abs(velocityY)<=LAUNCH_PAD_END_VELOCITY_THRESHOLD;if(isPullTabTapComplete){updaters.setLaunchPadPosition(1);}else{updaters.setLaunchPadPosition(0);}}else{updaters.setLaunchPadPosition(1);}}else if(Math.abs(velocityX)<LAUNCH_PAD_END_VELOCITY_THRESHOLD){if(launchPadSharedState.get()>=0.5){updaters.setLaunchPadPosition(1);}else{updaters.setLaunchPadPosition(0);}}else if(velocityX>0){updaters.setLaunchPadPosition(0);}else{updaters.setLaunchPadPosition(1);}}" };
let closure_15 = { code: "function useLaunchPadGestureTsx4({translationX:translationX,translationY:translationY,absoluteX:absoluteX}){const{gestureState,getWindowDimensionsWorklet,POP_RESISTANCE,launchPadType,LaunchPadTypes,PIP_POP_DISTANCE,updaters,updateSharedValueIfChanged,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(!gestureState.get().active)return;const{initialTouchX:initialTouchX,requiresPop:requiresPop}=gestureState.get();const{width:windowWidth}=getWindowDimensionsWorklet();const newXOffset=absoluteX-initialTouchX;const distance=Math.max(newXOffset*-1,0);const resistance=distance*POP_RESISTANCE;const positionOffsetX=absoluteX-gestureState.get().initialTouchX;const launchPadPosition=1-(gestureState.get().initialTouchX+translationX-(launchPadType!==LaunchPadTypes.PULL_TAB?40:0))/windowWidth;if(requiresPop&&distance<=PIP_POP_DISTANCE){if(launchPadType!==LaunchPadTypes.PULL_TAB){const a=(distance-resistance)/windowWidth;updaters.setLaunchPadPosition(a);}else{updaters.setLaunchPadPullTabTranslation(translationY);}updateSharedValueIfChanged(gestureState,{positionOffsetX:positionOffsetX});}else{if(requiresPop){updateSharedValueIfChanged(gestureState,{requiresPop:false,positionOffsetX:positionOffsetX});runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}else{updateSharedValueIfChanged(gestureState,{positionOffsetX:positionOffsetX});}updaters.setLaunchPadPosition(launchPadPosition);}}" };
let closure_16 = { code: "function useLaunchPadGestureTsx5(event,manager){const{gestureState,State,getWindowDimensionsWorklet,launchPadType,LaunchPadTypes,LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE,LAUNCH_PAD_PULL_TAB_WIDTH,LAUNCH_PAD_PULL_TAB_HIT_SLOP,launchPadPullTabState,LAUNCH_PAD_PULL_TAB_HEIGHT,updaters,LAUNCH_PAD_PULL_TAB_SCALE_FACTOR,launchPadSharedState,MANUAL_ACTIVATION_THRESHOLD}=this.__closure;const{active:active,initialLaunchPadPosition:initialLaunchPadPosition,initialTouchX:initialTouchX,initialTouchY:initialTouchY}=gestureState.get();if(event.state!==State.BEGAN||active)return;const currentTouch=event.changedTouches[0];if(currentTouch==null){manager.fail();return;}const{x:x,y:y}=currentTouch;const{width:windowWidth}=getWindowDimensionsWorklet();switch(launchPadType){case LaunchPadTypes.DISABLED:manager.fail();return;case LaunchPadTypes.GESTURE_EDGE:if(initialLaunchPadPosition===0&&initialTouchX<windowWidth-LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE){manager.fail();return;}break;case LaunchPadTypes.PULL_TAB:{if(initialLaunchPadPosition>0)break;const inPullTabX=x>windowWidth-LAUNCH_PAD_PULL_TAB_WIDTH-LAUNCH_PAD_PULL_TAB_HIT_SLOP&&x<windowWidth;const inPullTabY=y>launchPadPullTabState.get().position-LAUNCH_PAD_PULL_TAB_HIT_SLOP&&y<launchPadPullTabState.get().position+LAUNCH_PAD_PULL_TAB_HEIGHT+LAUNCH_PAD_PULL_TAB_HIT_SLOP;if(!inPullTabX||!inPullTabY){manager.fail();return;}gestureState.set({...gestureState.get(),initialPullTabPosition:launchPadPullTabState.get().position,active:true});updaters.setLaunchPadPullTabScale(LAUNCH_PAD_PULL_TAB_SCALE_FACTOR);updaters.setLaunchPadShown(true);manager.activate();return;}case LaunchPadTypes.GESTURE_FULL:break;default:launchPadType;manager.fail();return;}const horizontalDistance=x-initialTouchX;const verticalDistance=Math.abs(y-initialTouchY);const hasMovedCorrectDirection=launchPadSharedState.get()>0&&horizontalDistance>0||launchPadSharedState.get()<=0&&horizontalDistance<0;if(hasMovedCorrectDirection&&Math.abs(horizontalDistance)>verticalDistance){if(Math.abs(horizontalDistance)<MANUAL_ACTIVATION_THRESHOLD){return;}gestureState.set({...gestureState.get(),active:true});updaters.setLaunchPadShown(true);manager.activate();return;}manager.fail();}" };
let closure_17 = { code: "function useLaunchPadGestureTsx6(event){const{gestureState,launchPadSharedState}=this.__closure;const{x:x,y:y}=event.changedTouches[0];gestureState.set({active:false,initialLaunchPadPosition:launchPadSharedState.get(),initialPullTabPosition:0,initialTouchX:x,initialTouchY:y,positionOffsetX:0,positionOffsetY:0,startTime:Date.now(),requiresPop:launchPadSharedState.get()===0,startShown:!(launchPadSharedState.get()===0)});}" };
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/launchpad/native/useLaunchPadGesture.tsx");

export default function useLaunchPadGesture(launchPadType) {
  launchPadType = launchPadType.launchPadType;
  const arg1 = launchPadType;
  const launchPadSharedState = launchPadType.launchPadSharedState;
  const importDefault = launchPadSharedState;
  const launchPadPullTabState = launchPadType.launchPadPullTabState;
  const dependencyMap = launchPadPullTabState;
  const gestureState = launchPadType.gestureState;
  const React = gestureState;
  const updaters = launchPadType.updaters;
  let obj = arg1(dependencyMap[2]);
  const isModalOpen = obj.useIsModalOpen();
  const tmp2 = importDefault(dependencyMap[3])();
  const ref = React.useRef(undefined);
  obj = {
    gesture: React.useMemo(() => {
      let num = 0;
      if (launchPadType === constants.GESTURE_FULL) {
        num = -1 * updaters;
      }
      const Gesture = launchPadType(launchPadPullTabState[4]).Gesture;
      let tmp2 = !isModalOpen;
      if (tmp2) {
        tmp2 = launchPadType !== constants.DISABLED;
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
        const obj = { <string:2897007698>: false, <string:1365402028>: false, <string:3999364003>: false, <string:1666079313>: false, <string:1673040955>: false, <string:1387789115>: false, <string:4137211654>: false };
        ({ x, y } = arg0.changedTouches[0]);
        obj.initialLaunchPadPosition = store.get();
        obj.initialTouchX = x;
        obj.initialTouchY = y;
        obj.startTime = Date.now();
        obj.requiresPop = 0 === store.get();
        obj.startShown = 0 !== store.get();
        const result = store3.set(obj);
      };
      obj = { gestureState, launchPadSharedState };
      fn.__closure = obj;
      fn.__workletHash = 14359599806316;
      fn.__initData = closure_17;
      const hitSlopResult = Gesture.Pan().enabled(tmp2).withRef(ref).minDistance(0).maxPointers(1).manualActivation(obj5.isAndroid()).hitSlop(obj);
      class X {
        constructor(arg0, arg1) {
          value = closure_3.get();
          ({ initialLaunchPadPosition, initialTouchX } = value);
          ({ active, initialTouchY } = value);
          if (arg0.state === closure_0(closure_2[4]).State.BEGAN) {
            if (!active) {
              num = 0;
              first = arg0.changedTouches[0];
              tmp3 = null;
              if (null != first) {
                ({ x, y } = first);
                tmp5 = closure_0;
                tmp6 = closure_2;
                num2 = 6;
                obj = closure_0(closure_2[6]);
                width = obj.getWindowDimensionsWorklet().width;
                tmp7 = closure_0;
                tmp8 = closure_11;
                if (closure_11.DISABLED === closure_0) {
                  failResult = arg1.fail();
                  return;
                } else {
                  tmp44 = closure_11;
                  if (closure_11.GESTURE_EDGE === tmp7) {
                    if (0 === initialLaunchPadPosition) {
                      tmp28 = closure_4;
                      if (initialTouchX < width - closure_4) {
                        failResult1 = arg1.fail();
                        return;
                      }
                    }
                  } else {
                    tmp45 = closure_11;
                    if (closure_11.PULL_TAB === tmp7) {
                      if (initialLaunchPadPosition <= 0) {
                        tmp47 = closure_2;
                        tmp48 = closure_8;
                        tmp13 = y > closure_2.get().position - closure_8;
                        if (tmp13) {
                          tmp10 = closure_2;
                          tmp11 = closure_7;
                          tmp12 = closure_8;
                          tmp13 = y < closure_2.get().position + closure_7 + closure_8;
                        }
                        tmp14 = closure_10;
                        tmp15 = closure_8;
                        if (x > width - closure_10 - closure_8) {
                          if (x < width) {
                            if (tmp13) {
                              tmp18 = closure_3;
                              obj = {};
                              tmp19 = obj;
                              merged = Object.assign(closure_3.get());
                              tmp21 = closure_2;
                              str = "initialPullTabPosition";
                              obj["initialPullTabPosition"] = closure_2.get().position;
                              flag = true;
                              str2 = "active";
                              obj["active"] = true;
                              result = closure_3.set(obj);
                              tmp23 = closure_4;
                              tmp24 = closure_9;
                              result1 = closure_4.setLaunchPadPullTabScale(closure_9);
                              setLaunchPadShownResult = closure_4.setLaunchPadShown(true);
                              activateResult = arg1.activate();
                            }
                            return tmp17;
                          }
                        }
                        failResult2 = arg1.fail();
                      }
                    } else {
                      tmp9 = closure_11;
                      if (closure_11.GESTURE_FULL !== tmp7) {
                        failResult3 = arg1.fail();
                        return;
                      }
                    }
                  }
                  diff = x - initialTouchX;
                  tmp30 = globalThis;
                  _Math = Math;
                  tmp32 = closure_1;
                  absolute = Math.abs(y - initialTouchY);
                  if (closure_1.get() <= 0) {
                    tmp33 = closure_1;
                    if (closure_1.get() <= 0) {
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
                      tmp35 = closure_3;
                      obj1 = {};
                      tmp36 = obj1;
                      merged1 = Object.assign(closure_3.get());
                      flag2 = true;
                      str3 = "active";
                      obj1["active"] = true;
                      result2 = closure_3.set(obj1);
                      tmp39 = closure_4;
                      setLaunchPadShownResult1 = closure_4.setLaunchPadShown(true);
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
      X.__closure = { gestureState, State: launchPadType(launchPadPullTabState[4]).State, getWindowDimensionsWorklet: launchPadType(launchPadPullTabState[6]).getWindowDimensionsWorklet, launchPadType, LaunchPadTypes: constants, LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE: updaters, LAUNCH_PAD_PULL_TAB_WIDTH: closure_10, LAUNCH_PAD_PULL_TAB_HIT_SLOP: closure_8, launchPadPullTabState, LAUNCH_PAD_PULL_TAB_HEIGHT: ref, updaters, LAUNCH_PAD_PULL_TAB_SCALE_FACTOR: closure_9, launchPadSharedState, MANUAL_ACTIVATION_THRESHOLD: 3 };
      X.__workletHash = 17469318427529;
      X.__initData = closure_16;
      const obj1 = { gestureState, State: launchPadType(launchPadPullTabState[4]).State, getWindowDimensionsWorklet: launchPadType(launchPadPullTabState[6]).getWindowDimensionsWorklet, launchPadType, LaunchPadTypes: constants, LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE: updaters, LAUNCH_PAD_PULL_TAB_WIDTH: closure_10, LAUNCH_PAD_PULL_TAB_HIT_SLOP: closure_8, launchPadPullTabState, LAUNCH_PAD_PULL_TAB_HEIGHT: ref, updaters, LAUNCH_PAD_PULL_TAB_SCALE_FACTOR: closure_9, launchPadSharedState, MANUAL_ACTIVATION_THRESHOLD: 3 };
      class I {
        constructor(arg0) {
          absoluteX = arg0.absoluteX;
          ({ translationX, translationY } = arg0);
          if (closure_3.get().active) {
            tmp = closure_3;
            value = closure_3.get();
            requiresPop = value.requiresPop;
            tmp3 = closure_0;
            tmp4 = closure_2;
            num = 6;
            obj = closure_0(closure_2[6]);
            width = obj.getWindowDimensionsWorklet().width;
            tmp5 = globalThis;
            _Math = Math;
            num2 = -1;
            num3 = 0;
            bound = Math.max(-1 * (absoluteX - value.initialTouchX), 0);
            diff = absoluteX - closure_3.get().initialTouchX;
            tmp9 = closure_0;
            tmp10 = closure_11;
            sum = closure_3.get().initialTouchX + translationX;
            if (closure_0 !== closure_11.PULL_TAB) {
              num3 = 40;
            }
            result = (sum - num3) / width;
            if (requiresPop) {
              num4 = 70;
              if (bound <= 70) {
                tmp23 = closure_0;
                tmp24 = closure_11;
                if (closure_0 !== closure_11.PULL_TAB) {
                  tmp27 = closure_4;
                  num9 = 0.5;
                  setLaunchPadPositionResult = closure_4.setLaunchPadPosition((bound - 0.5 * bound) / width);
                } else {
                  tmp25 = closure_4;
                  result1 = closure_4.setLaunchPadPullTabTranslation(translationY);
                }
                tmp29 = closure_1;
                tmp30 = closure_2;
                num10 = 7;
                tmp31 = closure_3;
                obj = {};
                obj.positionOffsetX = diff;
                tmp32 = closure_1(closure_2[7])(closure_3, obj);
              }
            }
            tmp12 = closure_1;
            tmp13 = closure_2;
            num5 = 7;
            tmp14 = closure_1(closure_2[7]);
            tmp15 = closure_3;
            if (requiresPop) {
              obj1 = {};
              flag = false;
              obj1.requiresPop = false;
              obj1.positionOffsetX = diff;
              tmp14Result = tmp14(tmp15, obj1);
              tmp18 = closure_0;
              num6 = 8;
              obj4 = closure_0(tmp13[8]);
              num7 = 9;
              runOnJSResult = obj4.runOnJS(closure_0(tmp13[9]).triggerHapticFeedback);
              tmp19Result = runOnJSResult(closure_0(tmp13[9]).HapticFeedbackTypes.IMPACT_MEDIUM);
            } else {
              obj2 = {};
              obj2.positionOffsetX = diff;
              tmp14Result1 = tmp14(tmp15, obj2);
            }
            tmp21 = closure_4;
            num8 = 1;
            setLaunchPadPositionResult1 = closure_4.setLaunchPadPosition(1 - result);
          }
          return;
        }
      }
      const onTouchesMoveResult = onTouchesDownResult.onTouchesMove(X);
      I.__closure = { gestureState, getWindowDimensionsWorklet: launchPadType(launchPadPullTabState[6]).getWindowDimensionsWorklet, POP_RESISTANCE: 0.5, launchPadType, LaunchPadTypes: constants, PIP_POP_DISTANCE: 70, updaters, updateSharedValueIfChanged: launchPadSharedState(launchPadPullTabState[7]), runOnJS: launchPadType(launchPadPullTabState[8]).runOnJS, triggerHapticFeedback: launchPadType(launchPadPullTabState[9]).triggerHapticFeedback, HapticFeedbackTypes: launchPadType(launchPadPullTabState[9]).HapticFeedbackTypes };
      I.__workletHash = 8073380735713;
      I.__initData = closure_15;
      const obj2 = { gestureState, getWindowDimensionsWorklet: launchPadType(launchPadPullTabState[6]).getWindowDimensionsWorklet, POP_RESISTANCE: 0.5, launchPadType, LaunchPadTypes: constants, PIP_POP_DISTANCE: 70, updaters, updateSharedValueIfChanged: launchPadSharedState(launchPadPullTabState[7]), runOnJS: launchPadType(launchPadPullTabState[8]).runOnJS, triggerHapticFeedback: launchPadType(launchPadPullTabState[9]).triggerHapticFeedback, HapticFeedbackTypes: launchPadType(launchPadPullTabState[9]).HapticFeedbackTypes };
      const fn2 = function v(velocityX) {
        let translationX;
        let translationY;
        let velocityY;
        velocityX = velocityX.velocityX;
        ({ velocityY, translationX, translationY } = velocityX);
        const value = store3.get();
        if (value.requiresPop) {
          if (value.startShown) {
            uiStore.setLaunchPadPosition(1);
          } else {
            if (closure_0 === constants.PULL_TAB) {
              const _Math2 = Math;
              if (Math.abs(translationX) <= closure_5) {
                const _Math3 = Math;
                if (Math.abs(translationY) <= closure_5) {
                  const _Math4 = Math;
                  if (Math.abs(velocityX) <= closure_6) {
                    const _Math5 = Math;
                  }
                }
              }
            }
            uiStore.setLaunchPadPosition(0);
          }
        } else {
          const _Math = Math;
          if (Math.abs(velocityX) < closure_6) {
            if (store.get() >= 0.5) {
              uiStore.setLaunchPadPosition(1);
            } else {
              uiStore.setLaunchPadPosition(0);
            }
          } else if (velocityX > 0) {
            uiStore.setLaunchPadPosition(0);
          } else {
            uiStore.setLaunchPadPosition(1);
          }
        }
      };
      fn2.__closure = { gestureState, launchPadType, LaunchPadTypes: constants, LAUNCH_PAD_END_TRANSLATION_THRESHOLD: isModalOpen, LAUNCH_PAD_END_VELOCITY_THRESHOLD: tmp2, updaters, launchPadSharedState };
      fn2.__workletHash = 13108163303108;
      fn2.__initData = closure_14;
      const obj3 = { gestureState, launchPadType, LaunchPadTypes: constants, LAUNCH_PAD_END_TRANSLATION_THRESHOLD: isModalOpen, LAUNCH_PAD_END_VELOCITY_THRESHOLD: tmp2, updaters, launchPadSharedState };
      const onChangeResult = onTouchesMoveResult.onChange(I);
      const fn3 = function b() {
        const value = store3.get();
        if (value.active) {
          if (1 === tmp2) {
            uiStore.setLaunchPadPosition(1);
          } else {
            uiStore.setLaunchPadPosition(0);
          }
        }
        store(closure_2[7])(store3, {});
      };
      const onEndResult = onTouchesMoveResult.onChange(I).onEnd(fn2);
      fn3.__closure = { gestureState, updaters, updateSharedValueIfChanged: launchPadSharedState(launchPadPullTabState[7]) };
      fn3.__workletHash = 11677880944102;
      fn3.__initData = closure_13;
      const obj4 = { gestureState, updaters, updateSharedValueIfChanged: launchPadSharedState(launchPadPullTabState[7]) };
      const fn4 = function t() {
        store(closure_2[7])(closure_3, {});
        const result = uiStore.setLaunchPadPullTabScale(1);
      };
      obj5 = { updateSharedValueIfChanged: launchPadSharedState(launchPadPullTabState[7]), gestureState, updaters };
      fn4.__closure = obj5;
      fn4.__workletHash = 14463491499289;
      fn4.__initData = closure_12;
      return onEndResult.onTouchesCancelled(fn3).onFinalize(fn4);
    }, items),
    gestureRef: ref
  };
  const items = [gestureState, tmp2, isModalOpen, launchPadPullTabState, launchPadSharedState, launchPadType, updaters];
  return obj;
};
