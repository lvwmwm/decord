// Module ID: 19476
// Function ID: 19477
// Name: useLaunchPadGesture
// Dependencies: [19, 11713, 5346, 1627, 5452, 1377, 13060, 11399, 1705, 5408, 2]
// Exports: default

// Module 19476 (useLaunchPadGesture)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import _mod1705 from "module_1705" /* 1705 */;
import HapticUtils from "HapticUtils" /* 5408 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5452 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11399 */;
import useWindowDimensionsSharedValue from "useWindowDimensionsSharedValue" /* 13060 */;
import react from "react" /* 19 */;
import LaunchPadConstants from "LaunchPadConstants" /* 11713 */;
import size from "module_2" /* 2 */;

let set, set2;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
({ LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE: closure_4, LAUNCH_PAD_END_TRANSLATION_THRESHOLD: hasOwnProperty, LAUNCH_PAD_END_VELOCITY_THRESHOLD: metroRequire, LAUNCH_PAD_PULL_TAB_HEIGHT: metroImportDefault, LAUNCH_PAD_PULL_TAB_HIT_SLOP: metroImportAll, LAUNCH_PAD_PULL_TAB_SCALE_FACTOR: c9, LAUNCH_PAD_PULL_TAB_WIDTH: c10, LaunchPadTypes: unpackModuleId } = LaunchPadConstants);
let closure_12 = { code: "(function useLaunchPadGestureTsx1(event){let[gestureState,launchPadSharedState]=this.__closure;const{x:x,y:y}=event.changedTouches[0];gestureState.set({active:false,initialLaunchPadPosition:launchPadSharedState.get(),initialPullTabPosition:0,initialTouchX:x,initialTouchY:y,positionOffsetX:0,positionOffsetY:0,startTime:Date.now(),requiresPop:launchPadSharedState.get()===0,startShown:!(launchPadSharedState.get()===0)});})" };
let closure_13 = { code: "(function useLaunchPadGestureTsx2(event,manager){let[gestureState,State,getWindowDimensionsWorklet,launchPadType,LaunchPadTypes,LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE,LAUNCH_PAD_PULL_TAB_WIDTH,LAUNCH_PAD_PULL_TAB_HIT_SLOP,launchPadPullTabState,LAUNCH_PAD_PULL_TAB_HEIGHT,updaters,LAUNCH_PAD_PULL_TAB_SCALE_FACTOR,launchPadSharedState,MANUAL_ACTIVATION_THRESHOLD]=this.__closure;const{active:active,initialLaunchPadPosition:initialLaunchPadPosition,initialTouchX:initialTouchX,initialTouchY:initialTouchY}=gestureState.get();if(event.state!==State.BEGAN||active)return;const currentTouch=event.changedTouches[0];if(currentTouch==null){manager.fail();return;}const{x:x,y:y}=currentTouch;const{width:windowWidth}=getWindowDimensionsWorklet();switch(launchPadType){case LaunchPadTypes.DISABLED:manager.fail();return;case LaunchPadTypes.GESTURE_EDGE:if(initialLaunchPadPosition===0&&initialTouchX<windowWidth-LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE){manager.fail();return;}break;case LaunchPadTypes.PULL_TAB:{if(initialLaunchPadPosition>0)break;const inPullTabX=x>windowWidth-LAUNCH_PAD_PULL_TAB_WIDTH-LAUNCH_PAD_PULL_TAB_HIT_SLOP&&x<windowWidth;const inPullTabY=y>launchPadPullTabState.get().position-LAUNCH_PAD_PULL_TAB_HIT_SLOP&&y<launchPadPullTabState.get().position+LAUNCH_PAD_PULL_TAB_HEIGHT+LAUNCH_PAD_PULL_TAB_HIT_SLOP;if(!inPullTabX||!inPullTabY){manager.fail();return;}gestureState.set({...gestureState.get(),initialPullTabPosition:launchPadPullTabState.get().position,active:true});updaters.setLaunchPadPullTabScale(LAUNCH_PAD_PULL_TAB_SCALE_FACTOR);updaters.setLaunchPadShown(true);manager.activate();return;}case LaunchPadTypes.GESTURE_FULL:break;default:launchPadType;manager.fail();return;}const horizontalDistance=x-initialTouchX;const verticalDistance=Math.abs(y-initialTouchY);const hasMovedCorrectDirection=launchPadSharedState.get()>0&&horizontalDistance>0||launchPadSharedState.get()<=0&&horizontalDistance<0;if(hasMovedCorrectDirection&&Math.abs(horizontalDistance)>verticalDistance){if(Math.abs(horizontalDistance)<MANUAL_ACTIVATION_THRESHOLD){return;}gestureState.set({...gestureState.get(),active:true});updaters.setLaunchPadShown(true);manager.activate();return;}manager.fail();})" };
let closure_14 = { code: "(function useLaunchPadGestureTsx3({translationX:translationX,translationY:translationY,absoluteX:absoluteX}){let[gestureState,getWindowDimensionsWorklet,POP_RESISTANCE,launchPadType,LaunchPadTypes,PIP_POP_DISTANCE,updaters,updateSharedValueIfChanged,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes]=this.__closure;if(!gestureState.get().active)return;const{initialTouchX:initialTouchX,requiresPop:requiresPop}=gestureState.get();const{width:windowWidth}=getWindowDimensionsWorklet();const newXOffset=absoluteX-initialTouchX;const distance=Math.max(newXOffset*-1,0);const resistance=distance*POP_RESISTANCE;const positionOffsetX=absoluteX-gestureState.get().initialTouchX;const launchPadPosition=1-(gestureState.get().initialTouchX+translationX-(launchPadType!==LaunchPadTypes.PULL_TAB?40:0))/windowWidth;if(requiresPop&&distance<=PIP_POP_DISTANCE){if(launchPadType!==LaunchPadTypes.PULL_TAB){const a=(distance-resistance)/windowWidth;updaters.setLaunchPadPosition(a);}else{updaters.setLaunchPadPullTabTranslation(translationY);}updateSharedValueIfChanged(gestureState,{positionOffsetX:positionOffsetX});}else{if(requiresPop){updateSharedValueIfChanged(gestureState,{requiresPop:false,positionOffsetX:positionOffsetX});scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.IMPACT_MEDIUM);}else{updateSharedValueIfChanged(gestureState,{positionOffsetX:positionOffsetX});}updaters.setLaunchPadPosition(launchPadPosition);}})" };
let closure_15 = { code: "(function useLaunchPadGestureTsx4({velocityX:velocityX,velocityY:velocityY,translationX:translationX,translationY:translationY}){let[gestureState,launchPadType,LaunchPadTypes,LAUNCH_PAD_END_TRANSLATION_THRESHOLD,LAUNCH_PAD_END_VELOCITY_THRESHOLD,updaters,launchPadSharedState]=this.__closure;const{requiresPop:requiresPop,startShown:startShown}=gestureState.get();if(requiresPop){if(!startShown){const isPullTabTapComplete=launchPadType===LaunchPadTypes.PULL_TAB&&Math.abs(translationX)<=LAUNCH_PAD_END_TRANSLATION_THRESHOLD&&Math.abs(translationY)<=LAUNCH_PAD_END_TRANSLATION_THRESHOLD&&Math.abs(velocityX)<=LAUNCH_PAD_END_VELOCITY_THRESHOLD&&Math.abs(velocityY)<=LAUNCH_PAD_END_VELOCITY_THRESHOLD;if(isPullTabTapComplete){updaters.setLaunchPadPosition(1);}else{updaters.setLaunchPadPosition(0);}}else{updaters.setLaunchPadPosition(1);}}else if(Math.abs(velocityX)<LAUNCH_PAD_END_VELOCITY_THRESHOLD){if(launchPadSharedState.get()>=0.5){updaters.setLaunchPadPosition(1);}else{updaters.setLaunchPadPosition(0);}}else if(velocityX>0){updaters.setLaunchPadPosition(0);}else{updaters.setLaunchPadPosition(1);}})" };
let closure_16 = { code: "(function useLaunchPadGestureTsx5(){let[gestureState,updaters,updateSharedValueIfChanged]=this.__closure;const{initialLaunchPadPosition:initialLaunchPadPosition,active:active}=gestureState.get();if(active){if(initialLaunchPadPosition===1){updaters.setLaunchPadPosition(1);}else{updaters.setLaunchPadPosition(0);}}updateSharedValueIfChanged(gestureState,{active:false,initialLaunchPadPosition:0,initialPullTabPosition:0,initialTouchX:0,initialTouchY:0,positionOffsetX:0,positionOffsetY:0,startTime:-1});})" };
let closure_17 = { code: "(function useLaunchPadGestureTsx6(){let[updateSharedValueIfChanged,gestureState,updaters]=this.__closure;updateSharedValueIfChanged(gestureState,{active:false,initialLaunchPadPosition:0,initialPullTabPosition:0,initialTouchX:0,initialTouchY:0,positionOffsetX:0,positionOffsetY:0,startTime:-1});updaters.setLaunchPadPullTabScale(1.0);})" };
let result = size.fileFinishedImporting("modules/launchpad/native/useLaunchPadGesture.tsx");

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
  let items = [gestureState, tmp2, isModalOpen, launchPadPullTabState, launchPadSharedState, launchPadType, updaters];
  let obj2 = {
    gesture: gestureState.useMemo(() => {
      let tmp11;
      let tmp12;
      let tmp13;
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
      let tmp33;
      let tmp34;
      let tmp35;
      let tmp36;
      let tmp37;
      let tmp38;
      let tmp39;
      let tmp40;
      let tmp41;
      let tmp42;
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
      let tmp54;
      let tmp55;
      let tmp56;
      let tmp57;
      let tmp59;
      let tmp60;
      let tmp61;
      let tmp62;
      let tmp = launchPadType;
      const tmp2 = unpackModuleId;
      let num = 0;
      if (launchPadType === unpackModuleId.GESTURE_FULL) {
        const tmp3 = React3;
        let num2 = -1;
        num = -1 * React3;
      }
      const Gesture = LegacyBaseButton.Gesture;
      let tmp7 = !isModalOpen;
      const enabled = Gesture.Pan().enabled;
      Gesture.Pan();
      if (!isModalOpen) {
        tmp7 = tmp !== tmp2.DISABLED;
      }
      const enabledResult = enabled(tmp7);
      const withRefResult = enabledResult.withRef(ref);
      const minDistanceResult = withRefResult.minDistance(0);
      const manualActivation = minDistanceResult.maxPointers(1).manualActivation;
      minDistanceResult.maxPointers(1);
      const rect = { top: -1 * metroRequire.top, left: 0, bottom: -1 * metroRequire.bottom, right: num };
      const tmp4Result = PlatformUtils;
      const items = [closure_12, , ];
      items[1] = gestureState;
      items[2] = launchPadSharedState;
      [tmp11, tmp12, tmp13] = items;
      function useLaunchPadGestureTsx1(arg0) {
        let x;
        let y;
        const first = arg0.changedTouches[0];
        const obj = { active: false, initialLaunchPadPosition: _undefined2.get(), initialPullTabPosition: 0, initialTouchX: x, initialTouchY: y, positionOffsetX: 0, positionOffsetY: 0, startTime: Date.now(), requiresPop: 0 === _undefined2.get(), startShown: 0 !== _undefined2.get() };
        ({ x, y } = first);
        const result = _undefined.set(obj);
      }
      const items1 = [tmp12, tmp13];
      useLaunchPadGestureTsx1.__closure = items1;
      useLaunchPadGestureTsx1.__workletHash = 2207673071474;
      useLaunchPadGestureTsx1.__initData = tmp11;
      const manualActivationResult = manualActivation(tmp4Result.isAndroid());
      const hitSlopResult = manualActivationResult.hitSlop(rect);
      const items2 = [closure_13, tmp9, , , , , , , , , , , , , ];
      const onTouchesMove = hitSlopResult.onTouchesDown(useLaunchPadGestureTsx1).onTouchesMove;
      hitSlopResult.onTouchesDown(useLaunchPadGestureTsx1);
      items2[2] = LegacyBaseButton.State;
      items2[3] = useWindowDimensionsSharedValue.getWindowDimensionsWorklet;
      items2[4] = tmp;
      items2[5] = tmp2;
      items2[6] = React3;
      items2[7] = authStore;
      items2[8] = metroImportAll;
      items2[9] = launchPadPullTabState;
      items2[10] = metroImportDefault;
      items2[11] = updaters;
      items2[12] = React4;
      items2[13] = launchPadSharedState;
      items2[14] = 3;
      let c11;
      let c12;
      let c13;
      [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30] = items2;
      function useLaunchPadGestureTsx2(state, fail) {
        let initialLaunchPadPosition;
        let initialTouchX;
        let x;
        let y;
        const value = _undefined.get();
        ({ initialLaunchPadPosition, initialTouchX } = value);
        if (state.state === _undefined2.BEGAN) {
          if (!value.active) {
            const first = state.changedTouches[0];
            if (null != first) {
              ({ x, y } = first);
              const width = _undefined3().width;
              if (_undefined4.DISABLED === c3) {
                fail.fail();
              } else {
                if (_undefined4.GESTURE_EDGE === c3) {
                  if (0 === initialLaunchPadPosition) {
                    if (initialTouchX < width - c5) {
                      fail.fail();
                    }
                  }
                } else if (_undefined4.PULL_TAB === c3) {
                  if (initialLaunchPadPosition <= 0) {
                    const tmp11 = y > _undefined5.get().position - c7 && y < obj5.get().position + c9 + tmp38;
                    if (x > width - c6 - c7) {
                      if (x < width) {
                        if (tmp11) {
                          const obj2 = { initialPullTabPosition: _undefined5.get().position, active: true };
                          set = _undefined.set;
                          const merged = Object.assign(obj.get());
                          const result = set(obj2);
                          const result1 = _undefined6.setLaunchPadPullTabScale(c11);
                          _undefined6.setLaunchPadShown(true);
                          fail.activate();
                        }
                        return tmp14;
                      }
                    }
                    fail.fail();
                  }
                } else if (_undefined4.GESTURE_FULL !== c3) {
                  fail.fail();
                }
                const diff = x - initialTouchX;
                const _Math = Math;
                const absolute = Math.abs(y - tmp2);
                if (_undefined7.get() <= 0) {
                  fail.fail();
                }
                const _Math2 = Math;
                if (Math.abs(diff) > absolute) {
                  const _Math3 = Math;
                  if (Math.abs(diff) >= c13) {
                    const obj4 = { active: true };
                    set2 = _undefined.set;
                    const merged1 = Object.assign(obj.get());
                    set2(obj4);
                    _undefined6.setLaunchPadShown(true);
                    fail.activate();
                  }
                }
              }
            } else {
              fail.fail();
            }
          }
        }
      }
      const items3 = [tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30];
      useLaunchPadGestureTsx2.__closure = items3;
      useLaunchPadGestureTsx2.__workletHash = 8151770639255;
      useLaunchPadGestureTsx2.__initData = tmp16;
      const items4 = [closure_14, tmp9, , , , , , , , , , ];
      const onChange = onTouchesMove(useLaunchPadGestureTsx2).onChange;
      onTouchesMove(useLaunchPadGestureTsx2);
      items4[2] = useWindowDimensionsSharedValue.getWindowDimensionsWorklet;
      items4[3] = 0.5;
      items4[4] = tmp;
      items4[5] = tmp2;
      items4[6] = 70;
      items4[7] = updaters;
      items4[8] = updateSharedValueIfChangedDefault;
      items4[9] = _mod1705.scheduleOnRN;
      items4[10] = HapticUtils.triggerHapticFeedback;
      items4[11] = HapticUtils.HapticFeedbackTypes;
      let c7;
      let c8;
      let c9;
      let c10;
      [tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44] = items4;
      function useLaunchPadGestureTsx3(absoluteX) {
        let translationX;
        let translationY;
        absoluteX = absoluteX.absoluteX;
        ({ translationX, translationY } = absoluteX);
        if (_undefined.get().active) {
          const value = obj.get();
          const requiresPop = value.requiresPop;
          const initialTouchX = value.initialTouchX;
          const width = _undefined2().width;
          const _Math = Math;
          let num2 = 0;
          const bound = Math.max(-1 * (absoluteX - initialTouchX), 0);
          const diff = absoluteX - obj.get().initialTouchX;
          const sum = obj.get().initialTouchX + translationX;
          const tmp7 = c3;
          const tmp8 = _undefined3;
          if (c3 !== _undefined3.PULL_TAB) {
            num2 = 40;
          }
          const result = (sum - num2) / width;
          if (requiresPop) {
            if (bound <= c5) {
              if (tmp7 !== tmp8.PULL_TAB) {
                _undefined4.setLaunchPadPosition((bound - bound * c2) / width);
              } else {
                const result1 = _undefined4.setLaunchPadPullTabTranslation(translationY);
              }
              const obj2 = { positionOffsetX: diff };
              _undefined5(_undefined, obj2);
            }
          }
          if (requiresPop) {
            const obj3 = { requiresPop: false, positionOffsetX: diff };
            _undefined5(_undefined, obj3);
            _undefined6(c9, _undefined7.IMPACT_MEDIUM);
          } else {
            const obj4 = { positionOffsetX: diff };
            _undefined5(_undefined, obj4);
          }
          _undefined4.setLaunchPadPosition(1 - result);
        }
      }
      const items5 = [tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44];
      useLaunchPadGestureTsx3.__closure = items5;
      useLaunchPadGestureTsx3.__workletHash = 925122443250;
      useLaunchPadGestureTsx3.__initData = tmp33;
      const items6 = [closure_15, tmp9, tmp, tmp2, hasOwnProperty, metroRequire, tmp15, tmp10];
      let c3;
      let c4;
      let c5;
      let c6;
      [tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52] = items6;
      function useLaunchPadGestureTsx4(velocityX) {
        let translationX;
        let translationY;
        let velocityY;
        velocityX = velocityX.velocityX;
        ({ velocityY, translationX, translationY } = velocityX);
        const value = _undefined.get();
        if (value.requiresPop) {
          if (value.startShown) {
            _undefined3.setLaunchPadPosition(1);
          } else {
            if (c1 === _undefined2.PULL_TAB) {
              const _Math2 = Math;
              if (Math.abs(translationX) <= c3) {
                const _Math3 = Math;
                if (Math.abs(translationY) <= tmp16) {
                  const _Math4 = Math;
                  if (Math.abs(velocityX) <= c4) {
                    const _Math5 = Math;
                  }
                }
              }
            }
            _undefined3.setLaunchPadPosition(0);
          }
        } else {
          const _Math = Math;
          if (Math.abs(velocityX) < c4) {
            if (_undefined4.get() >= 0.5) {
              _undefined3.setLaunchPadPosition(1);
            } else {
              _undefined3.setLaunchPadPosition(0);
            }
          } else if (velocityX > 0) {
            _undefined3.setLaunchPadPosition(0);
          } else {
            _undefined3.setLaunchPadPosition(1);
          }
        }
      }
      const items7 = [tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52];
      useLaunchPadGestureTsx4.__closure = items7;
      useLaunchPadGestureTsx4.__workletHash = 2846313959194;
      useLaunchPadGestureTsx4.__initData = tmp45;
      const onChangeResult = onChange(useLaunchPadGestureTsx3);
      const items8 = [closure_16, tmp9, tmp15, ];
      const onTouchesCancelled = onChangeResult.onEnd(useLaunchPadGestureTsx4).onTouchesCancelled;
      onChangeResult.onEnd(useLaunchPadGestureTsx4);
      items8[3] = updateSharedValueIfChangedDefault;
      [tmp54, tmp55, tmp56, tmp57] = items8;
      function useLaunchPadGestureTsx5() {
        const value = _undefined.get();
        const tmp = _undefined;
        if (value.active) {
          if (1 === tmp3) {
            _undefined2.setLaunchPadPosition(1);
          } else {
            _undefined2.setLaunchPadPosition(0);
          }
        }
        _undefined3(tmp, { active: false, initialLaunchPadPosition: 0, initialPullTabPosition: 0, initialTouchX: 0, initialTouchY: 0, positionOffsetX: 0, positionOffsetY: 0, startTime: -1 });
      }
      const items9 = [tmp55, tmp56, tmp57];
      useLaunchPadGestureTsx5.__closure = items9;
      useLaunchPadGestureTsx5.__workletHash = 7907495432472;
      useLaunchPadGestureTsx5.__initData = tmp54;
      const items10 = [closure_17, , , ];
      const onFinalize = onTouchesCancelled(useLaunchPadGestureTsx5).onFinalize;
      onTouchesCancelled(useLaunchPadGestureTsx5);
      items10[1] = updateSharedValueIfChangedDefault;
      items10[2] = gestureState;
      items10[3] = updaters;
      let c0;
      let c1;
      let c2;
      [tmp59, tmp60, tmp61, tmp62] = items10;
      function useLaunchPadGestureTsx6() {
        _undefined(c1, { active: false, initialLaunchPadPosition: 0, initialPullTabPosition: 0, initialTouchX: 0, initialTouchY: 0, positionOffsetX: 0, positionOffsetY: 0, startTime: -1 });
        const result = _undefined2.setLaunchPadPullTabScale(1);
      }
      const items11 = [tmp60, tmp61, tmp62];
      useLaunchPadGestureTsx6.__closure = items11;
      useLaunchPadGestureTsx6.__workletHash = 6246931034279;
      useLaunchPadGestureTsx6.__initData = tmp59;
      return onFinalize(useLaunchPadGestureTsx6);
    }, items),
    gestureRef: ref
  };
  return obj2;
};
