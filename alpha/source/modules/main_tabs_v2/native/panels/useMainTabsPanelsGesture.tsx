// Module ID: 18200
// Function ID: 18201
// Name: useMainTabsPanelsGesture
// Dependencies: [19, 11673, 1377, 18201, 11674, 1627, 1493, 1652, 1705, 5377, 5380, 5757, 18202, 5426, 2]
// Exports: default

// Module 18200 (useMainTabsPanelsGesture)
import _mod1705 from "module_1705" /* 1705 */;
import timing_timing from "timing/timing" /* 5377 */;
import timingPresets from "timingPresets" /* 5380 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5426 */;
import LaunchPadConstants from "LaunchPadConstants" /* 11673 */;
import react from "react" /* 19 */;
import PlatformUtils_mod from "PlatformUtils" /* 1377 */;
import PanelsConfig from "PanelsConfig" /* 18201 */;
import size from "module_2" /* 2 */;

let set;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
let PlatformUtils = PlatformUtils_mod;
PlatformUtils = PlatformUtils.isAndroid();
let closure_6 = PlatformUtils ? PanelsConfig.ANDROID_PANELS_ANIMATION_CONFIG : PanelsConfig.DEFAULT_PANELS_ANIMATION_CONFIG;
let closure_7 = { code: "(function useMainTabsPanelsGestureTsx1(width){let[isDragging,translateX,IS_ANDROID,withTiming,timingInstant,isFoldChange,timingStandard]=this.__closure;if(isDragging.get())return;if(translateX.get()===0)return;if(IS_ANDROID){translateX.set(withTiming(width,timingInstant,'animate-always'));}else{translateX.set(isFoldChange?withTiming(width,timingStandard,'respect-motion-settings'):width);}})" };
let closure_8 = { code: "(function handleAnimationFinish_useMainTabsPanelsGestureTsx2(finished){let[onVisibilityChange,scheduleOnRN,show]=this.__closure;if(!finished)return;if(onVisibilityChange!=null){scheduleOnRN(onVisibilityChange,show);}})" };
let closure_9 = { code: "(function useMainTabsPanelsGestureTsx3(show,isFling,velocity,force){let[translateX,width,onVisibilityChange,scheduleOnRN,onPreMovement,panelsConfig,_worklet_7013338449266_init_data,isTimingConfig,withTiming,withSpring]=this.__closure;if(!force&&translateX.get()!==0&&translateX.get()!==width){return false;}const targetTranslationX=show?0:width;if(translateX.get()===targetTranslationX){if(onVisibilityChange!=null){scheduleOnRN(onVisibilityChange,show);}return false;}if(onPreMovement!=null){scheduleOnRN(onPreMovement,show);}const animationConfig=show?isFling?panelsConfig.swipeSidePanelOpen:panelsConfig.nonSwipeSidePanelOpen:isFling?panelsConfig.swipeSidePanelClose:panelsConfig.nonSwipeSidePanelClose;const handleAnimationFinish=function handleAnimationFinish_useMainTabsPanelsGestureTsx2Factory([_worklet_7013338449266_init_data,onVisibilityChange,scheduleOnRN,show]){const handleAnimationFinish=function(finished){if(!finished)return;if(onVisibilityChange!=null){scheduleOnRN(onVisibilityChange,show);}};handleAnimationFinish.__closure=[onVisibilityChange,scheduleOnRN,show];handleAnimationFinish.__workletHash=7013338449266;handleAnimationFinish.__initData=_worklet_7013338449266_init_data;return handleAnimationFinish;}([_worklet_7013338449266_init_data,onVisibilityChange,scheduleOnRN,show]);translateX.set(isTimingConfig(animationConfig)?withTiming(targetTranslationX,animationConfig,'respect-motion-settings',handleAnimationFinish):withSpring(targetTranslationX,{...animationConfig,velocity:velocity},'respect-motion-settings',handleAnimationFinish));return true;})" };
let closure_10 = { code: "(function useMainTabsPanelsGestureTsx4(){let[disallowGesture]=this.__closure;return disallowGesture.get();})" };
let closure_11 = { code: "(function useMainTabsPanelsGestureTsx5(currentDisallow,previousDisallow){let[didJustAllowGesture]=this.__closure;if(currentDisallow===previousDisallow)return;if(currentDisallow)return;didJustAllowGesture.set(true);})" };
let closure_12 = { code: "(function useMainTabsPanelsGestureTsx6(event,manager){let[edgeSwipeOnly,translateX,insets,EDGE_SWIPE_WIDTH,startPosition]=this.__closure;const touch=event.allTouches[0];if(touch==null)return;if(edgeSwipeOnly.get()&&translateX.get()===0&&touch.x>insets.left+EDGE_SWIPE_WIDTH){manager.fail();return;}startPosition.set({x:touch.x,y:touch.y});})" };
let closure_13 = { code: "(function useMainTabsPanelsGestureTsx7(event,manager){let[State,startPosition,GESTURE_MIN_DISTANCE,disallowGesture,translateX,cancelOnSwipeRightFromStart,width,launchPadType,LaunchPadTypes,windowWidth,LAUNCHPAD_GESTURE_INSET]=this.__closure;if(event.state!==State.BEGAN)return;const touch=event.allTouches[0];if(touch==null)return;const xDiff=touch.x-startPosition.get().x;const xDiffAbs=Math.abs(xDiff);if(xDiffAbs<=GESTURE_MIN_DISTANCE)return;if(disallowGesture.get()){return;}const yDiffAbs=Math.abs(touch.y-startPosition.get().y);if(xDiffAbs<=yDiffAbs||xDiffAbs*xDiffAbs+yDiffAbs*yDiffAbs<GESTURE_MIN_DISTANCE*GESTURE_MIN_DISTANCE){return;}if(xDiff<=0){if(translateX.get()===0){manager.fail();return;}}else{if(cancelOnSwipeRightFromStart===true&&translateX.get()>=width){manager.fail();return;}}const isGestureBasedLaunchPad=launchPadType===LaunchPadTypes.GESTURE_EDGE||launchPadType===LaunchPadTypes.GESTURE_FULL;if(isGestureBasedLaunchPad&&xDiff<0){const launchpadGestureEdge=windowWidth-LAUNCHPAD_GESTURE_INSET;if(launchPadType===LaunchPadTypes.GESTURE_FULL&&startPosition.get().x<launchpadGestureEdge||launchPadType===LaunchPadTypes.GESTURE_EDGE&&startPosition.get().x>=launchpadGestureEdge){manager.fail();return;}}manager.activate();})" };
let closure_14 = { code: "(function useMainTabsPanelsGestureTsx8(){let[isDragging,scheduleOnRN,setIsDraggingRef,onDragStart]=this.__closure;isDragging.set(true);scheduleOnRN(setIsDraggingRef,true);if(onDragStart!=null){scheduleOnRN(onDragStart);}})" };
let closure_15 = { code: "(function useMainTabsPanelsGestureTsx9(e){let[disallowGesture,translateX,width,didJustAllowGesture]=this.__closure;if(disallowGesture.get()){const currentTranslateX=translateX.get();if(currentTranslateX===0||currentTranslateX===width){return;}translateX.set(0);return;}translateX.set(Math.max(0,Math.min(width,translateX.get()+e.changeX)));didJustAllowGesture.set(false);})" };
let closure_16 = { code: "(function useMainTabsPanelsGestureTsx10(e){let[isDragging,disallowGesture,didJustAllowGesture,scheduleOnRN,setIsDraggingRef,panelsConfig,movePanel,translateX,width]=this.__closure;try{if(!isDragging.get()||disallowGesture.get()||didJustAllowGesture.get()){return;}}finally{isDragging.set(false);didJustAllowGesture.set(false);scheduleOnRN(setIsDraggingRef,false);}if(Math.abs(e.velocityX)>panelsConfig.minFlingVelocityX){movePanel(e.velocityX<0,true,e.velocityX,true);}else{movePanel(translateX.get()<width/2,false,e.velocityX,true);}})" };
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/useMainTabsPanelsGesture.tsx");

export default function useMainTabsPanelsGesture(canDrag) {
  let foldSeam;
  let onDragStart;
  let onPreMovement;
  let onVisibilityChange;
  let openWidth;
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
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  canDrag = canDrag.canDrag;
  ({ onVisibilityChange, onDragStart } = canDrag);
  ({ onPreMovement, openWidth, foldSeam } = canDrag);
  const startShown = canDrag.startShown;
  if (foldSeam === undefined) {
    foldSeam = null;
  }
  const cancelOnSwipeRightFromStart = canDrag.cancelOnSwipeRightFromStart;
  openWidth = undefined;
  let sharedValue;
  let sharedValue1;
  let callback;
  let sharedValue2;
  let sharedValue3;
  let ref;
  let callback1;
  let sharedValue4;
  let sharedValue5;
  let context;
  let memo;
  let tmp2 = foldSeam;
  let tmp = onDragStart;
  let tmp3 = onDragStart(foldSeam[4])();
  let closure_4 = tmp3;
  const tmp4 = onDragStart(foldSeam[5])();
  let closure_5 = tmp4;
  const width = onDragStart(foldSeam[6])().width;
  if (openWidth == null) {
    openWidth = width;
  }
  let tmp5 = canDrag;
  const tmp6 = canDrag(tmp2[7]);
  let num = 0;
  const useSharedValue = tmp6.useSharedValue;
  if (!startShown) {
    num = openWidth;
  }
  sharedValue = useSharedValue(num);
  const tmp5Result = tmp5(tmp2[7]);
  sharedValue1 = tmp5Result.useSharedValue(false);
  let obj2 = cancelOnSwipeRightFromStart;
  ref = cancelOnSwipeRightFromStart.useRef(false);
  let items = [ref];
  callback = cancelOnSwipeRightFromStart.useCallback((current) => {
    ref.current = current;
  }, items);
  const tmp5Result6 = tmp5(tmp2[7]);
  sharedValue2 = tmp5Result6.useSharedValue(false);
  const tmp5Result7 = tmp5(tmp2[7]);
  sharedValue3 = tmp5Result7.useSharedValue(false);
  ref = cancelOnSwipeRightFromStart.useRef(foldSeam);
  let items1 = [foldSeam, sharedValue1, sharedValue, openWidth];
  const effect = cancelOnSwipeRightFromStart.useEffect(() => {
    let tmp2;
    let tmp3;
    let tmp4;
    let tmp5;
    let tmp6;
    let tmp7;
    let tmp8;
    let tmp9;
    ref.current = foldSeam;
    const current = ref.current;
    const tmp = _mod1705;
    const items = [closure_7, sharedValue1, sharedValue, PlatformUtils, , , , ];
    const scheduleOnUI = tmp.scheduleOnUI;
    items[4] = timing_timing.withTiming;
    items[5] = timingPresets.timingInstant;
    items[6] = current !== foldSeam;
    items[7] = timingPresets.timingStandard;
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = items;
    function useMainTabsPanelsGestureTsx1(arg0) {
      if (!_undefined.get()) {
        if (0 !== _undefined2.get()) {
          if (c2) {
            const result = set(_undefined3(arg0, c4, "animate-always"));
          } else {
            let tmp5 = arg0;
            if (c5) {
              tmp5 = _undefined3(arg0, c6, "respect-motion-settings");
            }
            const result1 = set(tmp5);
          }
        }
      }
    }
    const items1 = [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9];
    useMainTabsPanelsGestureTsx1.__closure = items1;
    useMainTabsPanelsGestureTsx1.__workletHash = 6120850630646;
    useMainTabsPanelsGestureTsx1.__initData = tmp2;
    scheduleOnUI(useMainTabsPanelsGestureTsx1, openWidth);
  }, items1);
  let items2 = [sharedValue1, sharedValue, openWidth, onVisibilityChange, , , , , , , ];
  const useCallback = cancelOnSwipeRightFromStart.useCallback;
  items2[4] = tmp5(tmp2[8]).scheduleOnRN;
  items2[5] = onPreMovement;
  items2[6] = width;
  items2[7] = sharedValue;
  items2[8] = tmp5(tmp2[3]).isTimingConfig;
  items2[9] = tmp5(tmp2[9]).withTiming;
  items2[10] = tmp5(tmp2[11]).withSpring;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24] = items2;
  function useMainTabsPanelsGestureTsx3(arg0, arg1, velocity, arg3) {
    let tmp13;
    let tmp14;
    let tmp15;
    let tmp16;
    let tmp = arg3;
    if (!tmp) {
      const obj = _undefined;
      if (0 !== _undefined.get()) {
        if (obj.get() !== c1) {
          return false;
        }
      }
    }
    let num2 = 0;
    if (!arg0) {
      num2 = c1;
    }
    const tmp3 = _undefined;
    if (_undefined.get() === num2) {
      if (null != c2) {
        _undefined2(tmp32, arg0);
      }
      return false;
    } else {
      let tmp8;
      let tmp26;
      if (null != c4) {
        _undefined2(tmp36, arg0);
      }
      if (arg0) {
        tmp8 = arg1 ? tmp7.swipeSidePanelOpen : tmp7.nonSwipeSidePanelOpen;
      } else {
        tmp8 = arg1 ? tmp7.swipeSidePanelClose : tmp7.nonSwipeSidePanelClose;
      }
      const items = [c6, c2, _undefined2, arg0];
      [tmp13, tmp14, tmp15, tmp16] = items;
      function handleAnimationFinish(arg0) {
        const tmp = arg0 && null != closure_1_0;
        if (tmp) {
          closure_1_1(closure_1_0, closure_1_2);
        }
      }
      const items1 = [tmp14, tmp15, tmp16];
      handleAnimationFinish.__closure = items1;
      handleAnimationFinish.__workletHash = 7013338449266;
      handleAnimationFinish.__initData = tmp13;
      set = tmp3.set;
      if (_undefined3(tmp8)) {
        tmp26 = _undefined4(num2, tmp8, "respect-motion-settings", handleAnimationFinish);
      } else {
        const obj2 = { velocity };
        const merged = Object.assign(tmp8);
        tmp26 = _undefined5(num2, obj2, "respect-motion-settings", handleAnimationFinish);
      }
      const result = set(tmp26);
      return true;
    }
  }
  let items3 = [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24];
  useMainTabsPanelsGestureTsx3.__closure = items3;
  useMainTabsPanelsGestureTsx3.__workletHash = 9203875723416;
  useMainTabsPanelsGestureTsx3.__initData = tmp14;
  let items4 = [onVisibilityChange, onPreMovement, sharedValue, openWidth];
  callback1 = useCallback(useMainTabsPanelsGestureTsx3, items4);
  const tmp5Result8 = tmp5(tmp2[7]);
  sharedValue4 = tmp5Result8.useSharedValue(false);
  let items5 = [ref, sharedValue2];
  [tmp27, tmp28] = items5;
  function useMainTabsPanelsGestureTsx4() {
    return _undefined.get();
  }
  let items6 = [tmp28];
  useMainTabsPanelsGestureTsx4.__closure = items6;
  useMainTabsPanelsGestureTsx4.__workletHash = 12109375653834;
  useMainTabsPanelsGestureTsx4.__initData = tmp27;
  let items7 = [callback, sharedValue4];
  let c0;
  [tmp29, tmp30] = items7;
  function useMainTabsPanelsGestureTsx5(arg0, arg1) {
    if (arg0 !== arg1) {
      if (!arg0) {
        const result = _undefined.set(true);
      }
    }
  }
  let items8 = [tmp30];
  useMainTabsPanelsGestureTsx5.__closure = items8;
  useMainTabsPanelsGestureTsx5.__workletHash = 10653285139228;
  useMainTabsPanelsGestureTsx5.__initData = tmp29;
  const tmp5Result9 = tmp5(tmp2[7]);
  const animatedReaction = tmp5Result9.useAnimatedReaction(useMainTabsPanelsGestureTsx4, useMainTabsPanelsGestureTsx5);
  const tmp5Result10 = tmp5(tmp2[7]);
  sharedValue5 = tmp5Result10.useSharedValue({ x: 0, y: 0 });
  context = obj2.useContext(tmp(tmp2[12]));
  let items9 = [tmp4, sharedValue, openWidth, width, sharedValue1, callback1, onDragStart, canDrag, sharedValue5, tmp3, cancelOnSwipeRightFromStart, sharedValue2, sharedValue3, callback, context, sharedValue4];
  memo = obj2.useMemo(() => {
    let tmp10;
    let tmp11;
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
    let tmp30;
    let tmp31;
    let tmp32;
    let tmp33;
    let tmp34;
    let tmp36;
    let tmp37;
    let tmp38;
    let tmp39;
    let tmp40;
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
    let tmp6;
    let tmp7;
    let tmp8;
    let tmp9;
    let tmp2 = dependencyMap;
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const enabledResult = PanResult.enabled(canDrag);
    let result = enabledResult.requireExternalGestureToFail(context);
    const manualActivation = result.manualActivation;
    const rect = { top: -closure_5.top, left: -closure_5.left, bottom: -closure_5.bottom, right: -closure_5.right };
    const obj3 = PlatformUtils;
    const items = [closure_12, sharedValue3, , , , ];
    items[2] = sharedValue;
    items[3] = closure_5;
    items[4] = 24;
    items[5] = sharedValue5;
    [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items;
    function useMainTabsPanelsGestureTsx6(arg0, fail) {
      const first = arg0.allTouches[0];
      if (null != first) {
        if (_undefined.get()) {
          if (0 === _undefined2.get()) {
            if (first.x > _undefined3.left + c3) {
              fail.fail();
            }
          }
        }
        const point = { x: null, y: null };
        ({ x: obj.x, y: obj.y } = first);
        const result = _undefined4.set(point);
      }
    }
    const items1 = [tmp7, tmp8, tmp9, tmp10, tmp11];
    useMainTabsPanelsGestureTsx6.__closure = items1;
    useMainTabsPanelsGestureTsx6.__workletHash = 4480021236652;
    useMainTabsPanelsGestureTsx6.__initData = tmp6;
    const manualActivationResult = manualActivation(obj3.isAndroid());
    const hitSlopResult = manualActivationResult.hitSlop(rect);
    const items2 = [closure_13, , , , , , , , , , , ];
    const onTouchesMove = hitSlopResult.onTouchesDown(useMainTabsPanelsGestureTsx6).onTouchesMove;
    hitSlopResult.onTouchesDown(useMainTabsPanelsGestureTsx6);
    items2[1] = LegacyBaseButton.State;
    items2[2] = sharedValue5;
    items2[3] = 12;
    items2[4] = sharedValue2;
    items2[5] = sharedValue;
    items2[6] = cancelOnSwipeRightFromStart;
    items2[7] = openWidth;
    items2[8] = closure_4;
    items2[9] = LaunchPadTypes;
    items2[10] = width;
    items2[11] = 48;
    let c9;
    let c10;
    [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26] = items2;
    function useMainTabsPanelsGestureTsx7(state, fail) {
      if (state.state === _undefined.BEGAN) {
        const point = state.allTouches[0];
        if (null != point) {
          const diff = point.x - _undefined2.get().x;
          const _Math2 = Math;
          const absolute = Math.abs(diff);
          if (absolute > c2) {
            if (!_undefined3.get()) {
              const _Math = Math;
              const absolute1 = Math.abs(point.y - obj.get().y);
              if (absolute > absolute1) {
                if (absolute * absolute + absolute1 * absolute1 >= c2 * c2) {
                  if (diff <= 0) {
                    if (0 === _undefined4.get()) {
                      fail.fail();
                    }
                  } else if (true === c5) {
                    if (_undefined4.get() >= c6) {
                      fail.fail();
                    }
                  }
                  if (c7 === _undefined5.GESTURE_EDGE) {
                    if (diff < 0) {
                      const diff1 = c9 - c10;
                      fail.fail();
                    }
                  }
                  fail.activate();
                }
              }
            }
          }
        }
      }
    }
    const items3 = [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26];
    useMainTabsPanelsGestureTsx7.__closure = items3;
    useMainTabsPanelsGestureTsx7.__workletHash = 6803230960781;
    useMainTabsPanelsGestureTsx7.__initData = tmp15;
    const items4 = [closure_14, sharedValue1, , , ];
    const onStart = onTouchesMove(useMainTabsPanelsGestureTsx7).onStart;
    const tmp28 = sharedValue1;
    onTouchesMove(useMainTabsPanelsGestureTsx7);
    items4[2] = _mod1705.scheduleOnRN;
    items4[3] = callback;
    items4[4] = onDragStart;
    [tmp30, tmp31, tmp32, tmp33, tmp34] = items4;
    function useMainTabsPanelsGestureTsx8() {
      const result = _undefined.set(true);
      _undefined2(c2, true);
      const tmp2 = _undefined2;
      if (null != c3) {
        tmp2(c3);
      }
    }
    const items5 = [tmp31, tmp32, tmp33, tmp34];
    useMainTabsPanelsGestureTsx8.__closure = items5;
    useMainTabsPanelsGestureTsx8.__workletHash = 15588107934398;
    useMainTabsPanelsGestureTsx8.__initData = tmp30;
    const items6 = [closure_15, tmp13, tmp4, tmp14, sharedValue4];
    [tmp36, tmp37, tmp38, tmp39, tmp40] = items6;
    function useMainTabsPanelsGestureTsx9(changeX) {
      if (_undefined.get()) {
        const value = obj.get();
        if (0 !== value) {
          if (value !== c2) {
            const result = obj.set(0);
          }
        }
      } else {
        const _Math = Math;
        const _Math2 = Math;
        const result1 = obj.set(Math.max(0, Math.min(c2, obj.get() + changeX.changeX)));
        const result2 = _undefined2.set(false);
      }
    }
    const items7 = [tmp37, tmp38, tmp39, tmp40];
    useMainTabsPanelsGestureTsx9.__closure = items7;
    useMainTabsPanelsGestureTsx9.__workletHash = 13482277131208;
    useMainTabsPanelsGestureTsx9.__initData = tmp36;
    const onStartResult = onStart(useMainTabsPanelsGestureTsx8);
    const items8 = [closure_16, tmp28, tmp13, sharedValue4, , , , , , ];
    const onFinalize = onStartResult.onChange(useMainTabsPanelsGestureTsx9).onFinalize;
    onStartResult.onChange(useMainTabsPanelsGestureTsx9);
    items8[4] = _mod1705.scheduleOnRN;
    items8[5] = callback;
    items8[6] = closure_6;
    items8[7] = callback1;
    items8[8] = sharedValue;
    items8[9] = openWidth;
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    let c7;
    let c8;
    [tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51] = items8;
    function useMainTabsPanelsGestureTsx10(velocityX) {
      try {
        if (_undefined.get()) {
          if (!_undefined2.get()) {
            const obj2 = _undefined3;
            if (!_undefined3.get()) {
              const result = obj.set(false);
              const result1 = obj2.set(false);
              _undefined4(c4, false);
              const _Math = Math;
              if (Math.abs(velocityX.velocityX) > _undefined5.minFlingVelocityX) {
                _undefined6(velocityX.velocityX < 0, true, velocityX.velocityX, true);
              } else {
                _undefined6(_undefined7.get() < c8 / 2, false, velocityX.velocityX, true);
              }
            }
          }
        }
        const result2 = obj.set(false);
        const result3 = _undefined3.set(false);
        _undefined4(c4, false);
      } catch (tmp28) {
        const result4 = _undefined.set(false);
        const result5 = _undefined3.set(false);
        _undefined4(c4, false);
        throw tmp28;
      }
    }
    const items9 = [tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51];
    useMainTabsPanelsGestureTsx10.__closure = items9;
    useMainTabsPanelsGestureTsx10.__workletHash = 7511309601893;
    useMainTabsPanelsGestureTsx10.__initData = tmp42;
    return onFinalize(useMainTabsPanelsGestureTsx10);
  }, items9);
  const items10 = [memo, sharedValue2, sharedValue3, sharedValue];
  let obj = { gesture: memo, panelGestureContext: obj2.useMemo(() => ({ gesture: memo, disallowGesture: sharedValue2, edgeSwipeOnly: sharedValue3, translateX: sharedValue, isInMainTabs: true }), items10), isDragging: sharedValue1, translateX: sharedValue, movePanel: callback1, maxWidth: openWidth, isDraggingRef: ref };
  return obj;
};
