// Module ID: 18224
// Function ID: 18225
// Name: useHomeDrawerGesture
// Dependencies: [32, 19, 18218, 18225, 1072, 11379, 11673, 5327, 1652, 1500, 1252, 5377, 1705, 5383, 1493, 1627, 5324, 11674, 18226, 5321, 5379, 18219, 5426, 7362, 2]
// Exports: useDoesLandOnHomeDrawer, useHomeDrawerState, useHomeGesture, useIsHomeDrawerEnabled

// Module 18224 (useHomeDrawerGesture)
import Constants from "Constants" /* 1072 */;
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5321 */;
import timing_timing from "timing/timing" /* 5377 */;
import HapticUtils from "HapticUtils" /* 5383 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5426 */;
import LaunchPadConstants from "LaunchPadConstants" /* 11673 */;
import HomeDrawerStore2 from "HomeDrawerStore" /* 18218 */;
import HomeDrawerAnimations from "HomeDrawerAnimations" /* 18219 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import HomeDrawerSubtitleStore from "HomeDrawerSubtitleStore" /* 18225 */;
import GestureConstants from "GestureConstants" /* 11379 */;
import "ReanimatedHelperTypes";
import ReanimatedHelperTypes_mod from "ReanimatedHelperTypes" /* 7362 */;
import size from "module_2" /* 2 */;

let navigation, set;

let Gesture;
let PULL_GESTURE_RESISTANCE;
let ReanimatedHelperTypes;
let c10;
let c9;
let closure_14;
let map1;
let unpackModuleId;
const computeMaxX = HomeDrawerStore2.computeMaxX;
const AnalyticEvents = Constants.AnalyticEvents;
({ FLING_MIN_DISTANCE: c9, FLING_MIN_VELOCITY: c10, PULL_GESTURE_ACTIVATION_DISTANCE: unpackModuleId, PULL_GESTURE_RESISTANCE } = GestureConstants);
({ PULL_GESTURE_SNAP_TIMING: map1, PULL_GESTURE_UNSNAP_TIMING: closure_14 } = GestureConstants);
const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
let c16 = 144;
let result = 144 * (1 - 1 / PULL_GESTURE_RESISTANCE);
let closure_18 = 48 + result;
let closure_19 = { PEEK: "PEEK", OPEN: "OPEN" };
let closure_20 = { code: "(function useHomeDrawerGestureTsx1(){let[gestureState,dragOffsetX,INITIAL_OPEN_WIDTH]=this.__closure;return gestureState.get().panelX===0&&dragOffsetX.get()>=INITIAL_OPEN_WIDTH;})" };
let closure_21 = { code: "(function useHomeDrawerGestureTsx2(){let[isSnappedOpen]=this.__closure;return isSnappedOpen.get();})" };
let closure_22 = { code: "(function useHomeDrawerGestureTsx3(isSnapped,wasSnapped){let[gestureState,didSnapThisGesture,snapX,withTiming,SNAP_OPEN_DISTANCE,PULL_GESTURE_SNAP_TIMING,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes,flingThrow,PULL_GESTURE_UNSNAP_TIMING,hasThrown,snappedByDrag]=this.__closure;if(!gestureState.get().active||wasSnapped===null){return;}if(isSnapped===wasSnapped){return;}if(isSnapped){didSnapThisGesture.set(true);snapX.set(withTiming(SNAP_OPEN_DISTANCE,PULL_GESTURE_SNAP_TIMING,'animate-always'));scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.IMPACT_MEDIUM);return;}if(!didSnapThisGesture.get()){return;}flingThrow.set(withTiming(0,PULL_GESTURE_UNSNAP_TIMING));hasThrown.set(false);snappedByDrag.set(false);snapX.set(withTiming(0,PULL_GESTURE_UNSNAP_TIMING,'animate-always'));scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.SOFT);})" };
let closure_23 = { code: "(function useHomeDrawerGestureTsx4(){let[panelX,snapX,peekX]=this.__closure;return panelX.get()+snapX.get()+peekX.get();})" };
let closure_24 = { code: "(function useHomeDrawerGestureTsx5(){let[panelTranslateX]=this.__closure;return{transform:[{translateX:panelTranslateX.get()}]};})" };
let closure_25 = { code: "(function useHomeDrawerGestureTsx6(){let[isOpenTarget,isPanelTouchActive,panelTranslateX]=this.__closure;return isOpenTarget.get()||!isPanelTouchActive.get()&&panelTranslateX.get()<=0;})" };
let closure_26 = { code: "(function useHomeDrawerGestureTsx7(isPullDone){let[isPullActive]=this.__closure;if(isPullDone&&isPullActive.get()){isPullActive.set(false);}})" };
let closure_27 = { code: "(function useHomeDrawerGestureTsx8(){let[panelTranslateX,isPullActive,HOME_DRAWER_PULL_SETTLE_WIDTH,MAX_HOME_DRAWER_ANIMATING_WIDTH,SNAP_OPEN_DISTANCE]=this.__closure;const reveal=panelTranslateX.get();if(!isPullActive.get()||reveal<=0||reveal>=HOME_DRAWER_PULL_SETTLE_WIDTH){return 0;}return reveal<MAX_HOME_DRAWER_ANIMATING_WIDTH?reveal/MAX_HOME_DRAWER_ANIMATING_WIDTH:1-(reveal-MAX_HOME_DRAWER_ANIMATING_WIDTH)/SNAP_OPEN_DISTANCE;})" };
let closure_28 = { code: "(function useHomeDrawerGestureTsx9(){let[accessibilityPreferencesSharedValue,pullFraction,HOME_DRAWER_PULL_DISTANCE,flingThrow,HOME_DRAWER_FLING_THROW_DISTANCE]=this.__closure;if(accessibilityPreferencesSharedValue.get().reduceMotion){return 0;}return Math.max(pullFraction.get()*HOME_DRAWER_PULL_DISTANCE,flingThrow.get()*HOME_DRAWER_FLING_THROW_DISTANCE);})" };
let closure_29 = { code: "(function useHomeDrawerGestureTsx10(){let[guildsBarPullX]=this.__closure;return{transform:[{translateX:guildsBarPullX.get()}]};})" };
let closure_30 = { code: "(function visualPanelX_useHomeDrawerGestureTsx11(){let[panelX,isSnappedOpen,SNAP_OPEN_DISTANCE]=this.__closure;return panelX.get()+(isSnappedOpen.get()?SNAP_OPEN_DISTANCE:0);})" };
let closure_31 = { code: "(function settleDrawer_useHomeDrawerGestureTsx12(shouldOpen){let[isOpenTarget,panelX,withTiming,maxX,HOME_DRAWER_SETTLE_TIMING,snapX,scheduleOnRN,setHomeDrawerState]=this.__closure;isOpenTarget.set(shouldOpen);panelX.set(withTiming(shouldOpen?maxX:0,HOME_DRAWER_SETTLE_TIMING,'animate-always'));snapX.set(withTiming(0,HOME_DRAWER_SETTLE_TIMING,'animate-always'));scheduleOnRN(setHomeDrawerState,shouldOpen);})" };
let closure_32 = { code: "(function fireThrow_useHomeDrawerGestureTsx13(){let[hasThrown,isPullActive,flingThrow,clamp,pullFraction,HOME_DRAWER_PULL_DISTANCE,HOME_DRAWER_FLING_THROW_DISTANCE,withSequence,withTiming,HOME_DRAWER_FLING_THROW_TIMING,HOME_DRAWER_FLING_RETURN_TIMING]=this.__closure;if(hasThrown.get()||!isPullActive.get()){return;}hasThrown.set(true);flingThrow.set(clamp(pullFraction.get()*HOME_DRAWER_PULL_DISTANCE/HOME_DRAWER_FLING_THROW_DISTANCE,0,1));flingThrow.set(withSequence(withTiming(1,HOME_DRAWER_FLING_THROW_TIMING),withTiming(0,HOME_DRAWER_FLING_RETURN_TIMING)));})" };
let closure_33 = { code: "(function beginDrag_useHomeDrawerGestureTsx14(touchX){let[panelX,snapX,activationOffsetX,gestureState,isPullActive,PULL_ACTIVE_MAX_START]=this.__closure;const currentX=panelX.get()+snapX.get();activationOffsetX.set(touchX-gestureState.get().initialX);isPullActive.set(currentX<PULL_ACTIVE_MAX_START);panelX.set(currentX);snapX.set(0);gestureState.set({...gestureState.get(),active:true,initialX:touchX,panelX:currentX});})" };
let closure_34 = { code: "(function shouldOpenFromPosition_useHomeDrawerGestureTsx15(){let[visualPanelX,FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN,maxX,INITIAL_OPEN_WIDTH,dragOffsetX]=this.__closure;const currentX=visualPanelX();if(currentX===0)return false;if(currentX>FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN*maxX)return true;if(currentX>=INITIAL_OPEN_WIDTH&&dragOffsetX.get()>0)return true;return false;})" };
let closure_35 = { code: "(function useHomeDrawerGestureTsx16(event){let[isPanelTouchActive,dragOffsetX,activationOffsetX,didSettle,didSnapThisGesture,snappedByDrag,hasThrown,flingThrow,withTiming,HOME_DRAWER_FLING_RETURN_TIMING,gestureState,panelX,snapX]=this.__closure;isPanelTouchActive.set(true);dragOffsetX.set(0);activationOffsetX.set(0);didSettle.set(false);didSnapThisGesture.set(false);snappedByDrag.set(false);hasThrown.set(false);flingThrow.set(withTiming(0,HOME_DRAWER_FLING_RETURN_TIMING));gestureState.set({active:false,initialX:event.absoluteX,initialY:event.absoluteY,panelX:panelX.get()+snapX.get()});})" };
let closure_36 = { code: "(function useHomeDrawerGestureTsx17(event,manager){let[gestureState,isOpenTarget,PULL_GESTURE_ACTIVATION_DISTANCE,beginDrag]=this.__closure;if(gestureState.get().active)return;const touchX=event.changedTouches[0].absoluteX;const touchY=event.changedTouches[0].absoluteY;const absoluteXDiff=Math.abs(touchX-gestureState.get().initialX);const absoluteYDiff=Math.abs(touchY-gestureState.get().initialY);const isOpen=isOpenTarget.get();if(absoluteYDiff>absoluteXDiff||!isOpen&&touchX<gestureState.get().initialX||isOpen&&touchX>gestureState.get().initialX){manager.fail();return;}if(absoluteXDiff<PULL_GESTURE_ACTIVATION_DISTANCE){return;}beginDrag(touchX);manager.activate();})" };
let closure_37 = { code: "(function useHomeDrawerGestureTsx18(event){let[gestureState,dragOffsetX,panelX,snapX,INITIAL_OPEN_WIDTH,PULL_GESTURE_RESISTANCE,SNAP_OPEN_DISTANCE,MAX_HOME_DRAWER_ANIMATING_WIDTH,FLING_THROW_MIN_VELOCITY,snappedByDrag,fireThrow]=this.__closure;if(!gestureState.get().active)return;const newXOffset=event.absoluteX-gestureState.get().initialX;dragOffsetX.set(newXOffset);const previousReveal=panelX.get()+snapX.get();if(gestureState.get().panelX===0&&newXOffset>=0){panelX.set(newXOffset<INITIAL_OPEN_WIDTH?newXOffset/PULL_GESTURE_RESISTANCE:newXOffset-SNAP_OPEN_DISTANCE);}else{panelX.set(Math.max(newXOffset+gestureState.get().panelX,0));}if(previousReveal<MAX_HOME_DRAWER_ANIMATING_WIDTH&&panelX.get()+snapX.get()>=MAX_HOME_DRAWER_ANIMATING_WIDTH){if(event.velocityX<=FLING_THROW_MIN_VELOCITY){snappedByDrag.set(true);}else if(!snappedByDrag.get()){fireThrow();}}})" };
let closure_38 = { code: "(function useHomeDrawerGestureTsx19(event){let[activationOffsetX,dragOffsetX,FLING_MIN_VELOCITY,FLING_MIN_DISTANCE,snappedByDrag,fireThrow,INITIAL_OPEN_WIDTH,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes,shouldOpenFromPosition,settleDrawer,didSettle,gestureState,trackServerDrawerInteract,ServerDrawerInteractAction]=this.__closure;const flingDistanceX=activationOffsetX.get()+dragOffsetX.get();const passesOpeningVelocity=event.velocityX>FLING_MIN_VELOCITY;const passesMinDistance=flingDistanceX>FLING_MIN_DISTANCE;const isBlockedByDragSnap=snappedByDrag.get();const isOpeningFling=passesOpeningVelocity&&passesMinDistance;const shouldAttemptThrow=isOpeningFling&&!isBlockedByDragSnap;if(shouldAttemptThrow){fireThrow();}let shouldOpen;if(isOpeningFling){shouldOpen=true;if(flingDistanceX<INITIAL_OPEN_WIDTH){scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.IMPACT_MEDIUM);}}else if(event.velocityX<-FLING_MIN_VELOCITY&&flingDistanceX<-FLING_MIN_DISTANCE){shouldOpen=false;scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.SOFT);}else{shouldOpen=shouldOpenFromPosition();}settleDrawer(shouldOpen);didSettle.set(true);const wasOpenAtStart=gestureState.get().panelX>0;if(shouldOpen&&!wasOpenAtStart){scheduleOnRN(trackServerDrawerInteract,ServerDrawerInteractAction.OPEN);}else if(!wasOpenAtStart){scheduleOnRN(trackServerDrawerInteract,ServerDrawerInteractAction.PEEK);}})" };
let closure_39 = { code: "(function useHomeDrawerGestureTsx20(){let[gestureState,didSettle,settleDrawer,shouldOpenFromPosition,isPanelTouchActive,scheduleOnRN,noteInteraction,dragOffsetX,activationOffsetX]=this.__closure;if(gestureState.get().active&&!didSettle.get()){settleDrawer(shouldOpenFromPosition());}isPanelTouchActive.set(false);scheduleOnRN(noteInteraction);gestureState.set({active:false,initialX:0,initialY:0,panelX:0});dragOffsetX.set(0);activationOffsetX.set(0);})" };
let obj = { gesture: Gesture.Pan(), panelStyles: {}, gestureState: ReanimatedHelperTypes.createFakeSharedValue({ active: false, initialX: 0, initialY: 0, panelX: 0 }), panelX: ReanimatedHelperTypes.createFakeSharedValue(0), panelTranslateX: ReanimatedHelperTypes.createFakeSharedValue(0), guildsBarDrawerStyle: {}, guildsBarPullX: ReanimatedHelperTypes.createFakeSharedValue(0) };
Gesture = LegacyBaseButton.Gesture;
ReanimatedHelperTypes = ReanimatedHelperTypes_mod;
const context = react.createContext({ homeDrawerState: obj, enableHome: false, landOnHome: false });
let result1 = size.fileFinishedImporting("modules/home_drawer/native/useHomeDrawerGesture.tsx");

export const INITIAL_OPEN_WIDTH = 144;
export const HOME_DRAWER_FLING_PHYSICS = { mass: 0.4, damping: 100, stiffness: 250 };
export function useHomeGesture() {
  let derivedValue;
  let drawerOpen;
  let enableHome;
  let landOnHome;
  let snapX;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp20;
  let tmp21;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp58;
  let tmp59;
  let tmp60;
  let tmp61;
  let tmp63;
  let tmp64;
  let tmp66;
  let tmp67;
  let tmp68;
  let tmp69;
  let tmp70;
  let tmp71;
  let tmp73;
  let tmp74;
  let tmp75;
  let tmp76;
  let tmp77;
  let tmp78;
  let tmp81;
  let tmp82;
  let tmp83;
  let tmp84;
  let tmp85;
  let tmp86;
  let tmp88;
  let tmp89;
  let updateMaxX;
  let tmp = landOnHome;
  let tmp2 = snapX;
  const MobileHomeDrawerExperiment = landOnHome(snapX[7]).MobileHomeDrawerExperiment;
  const config = MobileHomeDrawerExperiment.useConfig({ location: "gesture" });
  ({ enableHome, landOnHome } = config);
  const enablePeekHint = config.enablePeekHint;
  let tmp4 = updateMaxX();
  const panelX = tmp4.panelX;
  snapX = tmp4.snapX;
  const isOpenTarget = tmp4.isOpenTarget;
  const gestureState = tmp4.gestureState;
  updateMaxX = tmp4.updateMaxX;
  const maxX = tmp4.maxX;
  const setPanelX = tmp4.setPanelX;
  const isPanelTouchActive = tmp4.isPanelTouchActive;
  const noteInteraction = tmp4.noteInteraction;
  let obj = landOnHome(snapX[8]);
  const sharedValue = obj.useSharedValue(0);
  let obj2 = landOnHome(snapX[8]);
  const sharedValue1 = obj2.useSharedValue(0);
  let obj3 = landOnHome(snapX[8]);
  const sharedValue2 = obj3.useSharedValue(false);
  const obj4 = landOnHome(snapX[8]);
  const sharedValue3 = obj4.useSharedValue(false);
  const obj5 = landOnHome(snapX[8]);
  const sharedValue4 = obj5.useSharedValue(false);
  const obj6 = landOnHome(snapX[8]);
  const sharedValue5 = obj6.useSharedValue(0);
  const obj7 = landOnHome(snapX[8]);
  const sharedValue6 = obj7.useSharedValue(false);
  const obj8 = landOnHome(snapX[8]);
  const sharedValue7 = obj8.useSharedValue(false);
  const obj9 = landOnHome(snapX[9]);
  navigation = obj9.useNavigation();
  const callback = gestureState.useCallback((action) => {
    const obj = panelX(snapX[10]);
    const obj2 = { action };
    obj.track(isPanelTouchActive.SERVER_DRAWER_INTERACT, obj2);
  }, []);
  let items = [derivedValue, gestureState, sharedValue, sharedValue6];
  [tmp14, tmp15, tmp16, tmp17] = items;
  function useHomeDrawerGestureTsx1() {
    const tmp = 0 === _undefined.get().panelX && _undefined2.get() >= c2;
    return tmp;
  }
  let items1 = [tmp15, tmp16, tmp17];
  useHomeDrawerGestureTsx1.__closure = items1;
  useHomeDrawerGestureTsx1.__workletHash = 3177392550602;
  useHomeDrawerGestureTsx1.__initData = tmp14;
  const obj12 = landOnHome(snapX[8]);
  derivedValue = obj12.useDerivedValue(useHomeDrawerGestureTsx1);
  let items2 = [closure_21, derivedValue];
  [tmp20, tmp21] = items2;
  function useHomeDrawerGestureTsx2() {
    return _undefined.get();
  }
  let items3 = [tmp21];
  useHomeDrawerGestureTsx2.__closure = items3;
  useHomeDrawerGestureTsx2.__workletHash = 2182322128830;
  useHomeDrawerGestureTsx2.__initData = tmp20;
  let items4 = [closure_22, gestureState, sharedValue3, snapX, , , , , , , , , , ];
  const useAnimatedReaction = tmp(tmp2[8]).useAnimatedReaction;
  const tmpResult = tmp(tmp2[8]);
  items4[4] = tmp(tmp2[11]).withTiming;
  items4[5] = sharedValue7;
  items4[6] = sharedValue3;
  items4[7] = tmp(tmp2[12]).scheduleOnRN;
  items4[8] = tmp(tmp2[13]).triggerHapticFeedback;
  items4[9] = tmp(tmp2[13]).HapticFeedbackTypes;
  items4[10] = sharedValue5;
  items4[11] = sharedValue4;
  items4[12] = sharedValue7;
  items4[13] = sharedValue6;
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
  [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36] = items4;
  function useHomeDrawerGestureTsx3(arg0, arg1) {
    if (_undefined.get().active) {
      if (null !== arg1) {
        if (arg0 !== arg1) {
          if (arg0) {
            result = obj.set(true);
            const result1 = _undefined2.set(_undefined3(c4, c5, "animate-always"));
            _undefined4(c7, _undefined5.IMPACT_MEDIUM);
          } else if (_undefined.get()) {
            const result2 = _undefined6.set(_undefined3(0, c10));
            const result3 = _undefined7.set(false);
            const result4 = _undefined8.set(false);
            const result5 = _undefined2.set(_undefined3(0, c10, "animate-always"));
            _undefined4(c7, _undefined5.SOFT);
          }
          return tmp18;
        }
      }
    }
  }
  let items5 = [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36];
  useHomeDrawerGestureTsx3.__closure = items5;
  useHomeDrawerGestureTsx3.__workletHash = 16083884898345;
  useHomeDrawerGestureTsx3.__initData = tmp23;
  const animatedReaction = useAnimatedReaction(useHomeDrawerGestureTsx2, useHomeDrawerGestureTsx3);
  const tmp38 = panelX(tmp2[14])();
  closure_21 = tmp38;
  const tmp39 = panelX(tmp2[15])();
  closure_22 = tmp39;
  const isChatBesideChannelList = panelX(tmp2[16])().isChatBesideChannelList;
  const tmp40 = panelX(tmp2[17])();
  const tmp41 = tmp40 === sharedValue5.GESTURE_FULL || tmp40 === sharedValue5.GESTURE_EDGE;
  const tmp22 = sharedValue7;
  if (enableHome) {
    enableHome = !tmp41;
  }
  if (enableHome) {
    enableHome = !isChatBesideChannelList;
  }
  const tmpResult11 = tmp(tmp2[9]);
  const tmp42 = enableHome && tmpResult11.useIsFocused();
  closure_24 = tmp42;
  const tmpResult12 = tmp(tmp2[8]);
  const sharedValue8 = tmpResult12.useSharedValue(0);
  let tmp45 = enableHome;
  const useHomeDrawerPeekHint = tmp(tmp2[18]).useHomeDrawerPeekHint;
  tmp(tmp2[18]);
  if (enableHome) {
    tmp45 = enablePeekHint;
  }
  const homeDrawerPeekHint = useHomeDrawerPeekHint(tmp45, sharedValue8);
  let state = navigation.getState();
  let tmp49;
  let coerceGuildsRoute = tmp(tmp2[19]).coerceGuildsRoute;
  tmp(tmp2[19]);
  if (state != null) {
    let routes = state.routes;
    if (routes != null) {
      let num;
      if (state != null) {
        num = state.index;
      }
      if (num == null) {
        num = 0;
      }
      tmp49 = routes[num];
    }
  }
  let coerceGuildsRouteResult = coerceGuildsRoute(tmp49);
  let tmp51 = enableHome;
  if (tmp51) {
    drawerOpen = undefined;
    if (coerceGuildsRouteResult != null) {
      let params = coerceGuildsRouteResult.params;
      if (params != null) {
        drawerOpen = params.drawerOpen;
      }
    }
    if (drawerOpen == null) {
      drawerOpen = landOnHome;
    }
    tmp51 = drawerOpen;
  }
  drawerOpen = tmp51;
  let num2 = 0;
  if (tmp51) {
    num2 = maxX(tmp38, tmp39);
  }
  let items6 = [tmp38, tmp39, updateMaxX, enableHome];
  const effect = obj11.useEffect(() => {
    if (enableHome) {
      updateMaxX(closure_21, closure_22);
    } else {
      updateMaxX({ width: 0, height: 0 }, { top: 0, bottom: 0, left: 0, right: 0 });
    }
  }, items6);
  let items7 = [enableHome, panelX, snapX, isOpenTarget];
  const effect1 = obj11.useEffect(() => {
    const tmp = enableHome;
    if (!tmp) {
      result = panelX.set(0);
      const result1 = snapX.set(0);
      const result2 = isOpenTarget.set(false);
      const obj = NavigationRouteUtils;
      obj.setHomeDrawerState(false);
    }
  }, items7);
  let items8 = [navigation, setPanelX, enableHome];
  const effect2 = obj11.useEffect(() => {
    function handleStateChange(data) {
      const state = data.data.state;
      let tmp2;
      const coerceGuildsRoute = landOnHome(snapX[19]).coerceGuildsRoute;
      landOnHome(snapX[19]);
      if (state != null) {
        const routes = state.routes;
        if (routes != null) {
          let num;
          if (state != null) {
            num = state.index;
          }
          if (num == null) {
            num = 0;
          }
          tmp2 = routes[num];
        }
      }
      const coerceGuildsRouteResult = coerceGuildsRoute(tmp2);
      if (null != coerceGuildsRouteResult) {
        const tmp4 = enableHome;
        if (tmp4) {
          const params = coerceGuildsRouteResult.params;
          drawerOpen = undefined;
          if (params != null) {
            drawerOpen = params.drawerOpen;
          }
          let str = "closed";
          const tmp7 = closure_1_7;
          if (true === drawerOpen) {
            str = "open";
          }
          tmp7(str);
          const state1 = setPanelX.getState();
          if (true === drawerOpen) {
            state1.startTimer();
          } else {
            state1.stopTimer();
          }
        }
      }
    }
    navigation.addListener("state", handleStateChange);
    return () => {
      navigation.removeListener("state", handleStateChange);
      const state = HomeDrawerSubtitleStore.getState();
      state.stopTimer();
    };
  }, items8);
  const ref = obj11.useRef(false);
  let items9 = [enableHome, tmp51, num2, panelX, isOpenTarget];
  const layoutEffect = obj11.useLayoutEffect(() => {
    const tmp = enableHome && !ref.current;
    if (tmp) {
      result = panelX.set(num2);
      const result1 = isOpenTarget.set(true === drawerOpen);
      if (drawerOpen) {
        const state = HomeDrawerSubtitleStore.getState();
        state.startTimer();
      }
      ref.current = true;
    }
  }, items9);
  let items10 = [enableHome, panelX, snapX, sharedValue8];
  [tmp58, tmp59, tmp60, tmp61] = items10;
  function useHomeDrawerGestureTsx4() {
    const value = _undefined.get();
    const sum = value + _undefined2.get();
    return sum + _undefined3.get();
  }
  let items11 = [tmp59, tmp60, tmp61];
  useHomeDrawerGestureTsx4.__closure = items11;
  useHomeDrawerGestureTsx4.__workletHash = 13135043941592;
  useHomeDrawerGestureTsx4.__initData = tmp58;
  const tmpResult15 = tmp(tmp2[8]);
  const derivedValue1 = tmpResult15.useDerivedValue(useHomeDrawerGestureTsx4);
  let items12 = [closure_24, derivedValue1];
  [tmp63, tmp64] = items12;
  function useHomeDrawerGestureTsx5() {
    let items;
    const obj = { transform: items };
    items = [{ translateX: _undefined.get() }];
    ({ translateX: _undefined.get() });
    return obj;
  }
  let items13 = [tmp64];
  useHomeDrawerGestureTsx5.__closure = items13;
  useHomeDrawerGestureTsx5.__workletHash = 3831081045453;
  useHomeDrawerGestureTsx5.__initData = tmp63;
  const tmpResult16 = tmp(tmp2[8]);
  const animatedStyle = tmpResult16.useAnimatedStyle(useHomeDrawerGestureTsx5);
  let items14 = [drawerOpen, isOpenTarget, isPanelTouchActive, derivedValue1];
  [tmp66, tmp67, tmp68, tmp69] = items14;
  function useHomeDrawerGestureTsx6() {
    let value = _undefined.get();
    if (!value) {
      const value2 = _undefined2.get();
      value = !value2 && _undefined3.get() <= 0;
      const tmp4 = !value2 && _undefined3.get() <= 0;
    }
    return value;
  }
  let items15 = [tmp67, tmp68, tmp69];
  useHomeDrawerGestureTsx6.__closure = items15;
  useHomeDrawerGestureTsx6.__workletHash = 10136721116202;
  useHomeDrawerGestureTsx6.__initData = tmp66;
  let items16 = [num2, sharedValue4];
  [tmp70, tmp71] = items16;
  function useHomeDrawerGestureTsx7(arg0) {
    const value = arg0 && _undefined.get();
    if (value) {
      result = _undefined.set(false);
    }
  }
  let items17 = [tmp71];
  useHomeDrawerGestureTsx7.__closure = items17;
  useHomeDrawerGestureTsx7.__workletHash = 818068477594;
  useHomeDrawerGestureTsx7.__initData = tmp70;
  const tmpResult17 = tmp(tmp2[8]);
  const animatedReaction1 = tmpResult17.useAnimatedReaction(useHomeDrawerGestureTsx6, useHomeDrawerGestureTsx7);
  let items18 = [ref, derivedValue1, sharedValue4, navigation, 48, tmp22];
  [tmp73, tmp74, tmp75, tmp76, tmp77, tmp78] = items18;
  function useHomeDrawerGestureTsx8() {
    const value = _undefined.get();
    let num = 0;
    if (_undefined2.get()) {
      num = 0;
      if (value > 0) {
        num = 0;
        if (value < c2) {
          if (value < c3) {
            result = value / tmp3;
          } else {
            result = 1 - (value - tmp3) / c4;
          }
          num = result;
        }
      }
    }
    return num;
  }
  let items19 = [tmp74, tmp75, tmp76, tmp77, tmp78];
  useHomeDrawerGestureTsx8.__closure = items19;
  useHomeDrawerGestureTsx8.__workletHash = 4744333108989;
  useHomeDrawerGestureTsx8.__initData = tmp73;
  const tmpResult18 = tmp(tmp2[8]);
  const derivedValue2 = tmpResult18.useDerivedValue(useHomeDrawerGestureTsx8);
  const items20 = [derivedValue1, , , , , ];
  const useDerivedValue = tmp(tmp2[8]).useDerivedValue;
  tmp(tmp2[8]);
  items20[1] = tmp(tmp2[20]).accessibilityPreferencesSharedValue;
  items20[2] = derivedValue2;
  items20[3] = 12;
  items20[4] = sharedValue5;
  items20[5] = 16;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp81, tmp82, tmp83, tmp84, tmp85, tmp86] = items20;
  function useHomeDrawerGestureTsx9() {
    let num = 0;
    if (!_undefined.get().reduceMotion) {
      const _Math = Math;
      result = _undefined2.get() * c2;
      num = max(result, _undefined3.get() * c4);
    }
    return num;
  }
  const items21 = [tmp82, tmp83, tmp84, tmp85, tmp86];
  useHomeDrawerGestureTsx9.__closure = items21;
  useHomeDrawerGestureTsx9.__workletHash = 7013202740043;
  useHomeDrawerGestureTsx9.__initData = tmp81;
  const derivedValue3 = useDerivedValue(useHomeDrawerGestureTsx9);
  const items22 = [animatedStyle, derivedValue3];
  c0 = undefined;
  [tmp88, tmp89] = items22;
  function useHomeDrawerGestureTsx10() {
    let items;
    const obj = { transform: items };
    items = [{ translateX: _undefined.get() }];
    ({ translateX: _undefined.get() });
    return obj;
  }
  const items23 = [tmp89];
  useHomeDrawerGestureTsx10.__closure = items23;
  useHomeDrawerGestureTsx10.__workletHash = 3575476532345;
  useHomeDrawerGestureTsx10.__initData = tmp88;
  const tmpResult20 = tmp(tmp2[8]);
  const guildsBarDrawerStyle = tmpResult20.useAnimatedStyle(useHomeDrawerGestureTsx10);
  const items24 = [gestureState, panelX, snapX, isOpenTarget, sharedValue2, sharedValue3, derivedValue, sharedValue4, derivedValue2, sharedValue5, sharedValue6, sharedValue7, sharedValue, sharedValue1, tmp42, maxX, isPanelTouchActive, noteInteraction, callback];
  const memo = obj11.useMemo(() => {
    let tmp100;
    let tmp101;
    let tmp102;
    let tmp103;
    let tmp104;
    let tmp105;
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
    let tmp12;
    let tmp13;
    let tmp14;
    let tmp15;
    let tmp16;
    let tmp17;
    let tmp18;
    let tmp19;
    let tmp20;
    let tmp24;
    let tmp25;
    let tmp26;
    let tmp27;
    let tmp28;
    let tmp29;
    let tmp3;
    let tmp30;
    let tmp31;
    let tmp32;
    let tmp33;
    let tmp34;
    let tmp35;
    let tmp38;
    let tmp39;
    let tmp4;
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
    let tmp57;
    let tmp58;
    let tmp59;
    let tmp6;
    let tmp60;
    let tmp61;
    let tmp62;
    let tmp63;
    let tmp64;
    let tmp65;
    let tmp66;
    let tmp67;
    let tmp68;
    let tmp69;
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
    let tmp80;
    let tmp81;
    let tmp82;
    let tmp83;
    let tmp84;
    let tmp85;
    let tmp86;
    let tmp87;
    let tmp89;
    let tmp90;
    let tmp91;
    let tmp92;
    let tmp93;
    let tmp94;
    let tmp95;
    let tmp96;
    let tmp97;
    let tmp98;
    let tmp99;
    const items = [closure_30, , , ];
    let tmp = panelX;
    items[1] = panelX;
    items[2] = derivedValue;
    items[3] = result;
    [tmp3, tmp4, tmp5, tmp6] = items;
    function visualPanelX() {
      const value = closure_1_0.get();
      let num = 0;
      if (closure_1_1.get()) {
        num = closure_1_2;
      }
      return value + num;
    }
    const items1 = [tmp4, tmp5, tmp6];
    visualPanelX.__closure = items1;
    visualPanelX.__workletHash = 2869044857423;
    visualPanelX.__initData = tmp3;
    const items2 = [closure_31, isOpenTarget, tmp, , , , , , ];
    let tmp2 = result;
    let tmp7 = isOpenTarget;
    items2[3] = timing_timing.withTiming;
    items2[4] = maxX;
    items2[5] = HomeDrawerAnimations.HOME_DRAWER_SETTLE_TIMING;
    items2[6] = snapX;
    items2[7] = _mod1705.scheduleOnRN;
    items2[8] = NavigationRouteUtils.setHomeDrawerState;
    [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items2;
    function settleDrawer(arg0) {
      result = _undefined.set(arg0);
      let num = 0;
      set = _undefined2.set;
      if (arg0) {
        num = c3;
      }
      const result1 = set(tmp3(num, c4, "animate-always"));
      const result2 = _undefined3.set(tmp3(0, c4, "animate-always"));
      _undefined4(c7, arg0);
    }
    const items3 = [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20];
    settleDrawer.__closure = items3;
    settleDrawer.__workletHash = 14466862505699;
    settleDrawer.__initData = tmp12;
    const items4 = [closure_32, sharedValue7, sharedValue4, sharedValue5, , , , , , , , ];
    let tmp23 = sharedValue5;
    items4[4] = _mod1652.clamp;
    items4[5] = derivedValue2;
    items4[6] = 12;
    items4[7] = 16;
    items4[8] = _mod1652.withSequence;
    items4[9] = timing_timing.withTiming;
    items4[10] = HomeDrawerAnimations.HOME_DRAWER_FLING_THROW_TIMING;
    items4[11] = HomeDrawerAnimations.HOME_DRAWER_FLING_RETURN_TIMING;
    [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35] = items4;
    function fireThrow() {
      const value = _undefined.get();
      let value2 = !value;
      const obj = _undefined;
      if (value2) {
        value2 = _undefined2.get();
      }
      if (value2) {
        result = obj.set(true);
        const result1 = _undefined3.set(_undefined4(_undefined5.get() * c5 / c6, 0, 1));
        set = _undefined3.set;
        const tmp14 = _undefined7(1, c9);
        const result2 = set(_undefined6(tmp14, _undefined7(0, c10)));
      }
    }
    const items5 = [tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35];
    fireThrow.__closure = items5;
    fireThrow.__workletHash = 10972527810867;
    fireThrow.__initData = tmp24;
    const items6 = [closure_33, tmp, tmp11, sharedValue1, gestureState, sharedValue4, 16];
    [tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44] = items6;
    function beginDrag(initialX) {
      const value = _undefined.get();
      const sum = value + _undefined2.get();
      result = _undefined3.set(initialX - _undefined4.get().initialX);
      const result1 = _undefined5.set(sum < c5);
      const result2 = _undefined.set(sum);
      const result3 = _undefined2.set(0);
      const obj = { active: true, initialX, panelX: sum };
      set = _undefined4.set;
      const merged = Object.assign(_undefined4.get());
      const result4 = set(obj);
    }
    const items7 = [tmp39, tmp40, tmp41, tmp42, tmp43, tmp44];
    beginDrag.__closure = items7;
    beginDrag.__workletHash = 29697990201;
    beginDrag.__initData = tmp38;
    const items8 = [closure_34, visualPanelX, 0.5, maxX, c16, sharedValue];
    [tmp47, tmp48, tmp49, tmp50, tmp51, tmp52] = items8;
    function shouldOpenFromPosition() {
      const tmp = _undefined();
      let tmp2 = 0 !== tmp;
      if (tmp2) {
        let tmp5 = tmp > c1 * c2;
        if (!tmp5) {
          tmp5 = tmp >= c3 && _undefined2.get() > 0;
          const tmp7 = tmp >= c3 && _undefined2.get() > 0;
        }
        tmp2 = tmp5;
      }
      return tmp2;
    }
    const items9 = [tmp48, tmp49, tmp50, tmp51, tmp52];
    shouldOpenFromPosition.__closure = items9;
    shouldOpenFromPosition.__workletHash = 345325928396;
    shouldOpenFromPosition.__initData = tmp47;
    const Gesture = tmp8(5426).Gesture;
    const PanResult = Gesture.Pan();
    const enabledResult = PanResult.enabled(closure_24);
    const manualActivationResult = enabledResult.manualActivation(true);
    result = manualActivationResult.shouldCancelWhenOutside(false);
    const items10 = [closure_35, isPanelTouchActive, sharedValue, sharedValue1, sharedValue2, sharedValue3, sharedValue6, sharedValue7, tmp23, , , , , ];
    const onBegin = result.maxPointers(1).onBegin;
    result.maxPointers(1);
    items10[9] = timing_timing.withTiming;
    items10[10] = HomeDrawerAnimations.HOME_DRAWER_FLING_RETURN_TIMING;
    items10[11] = gestureState;
    items10[12] = tmp;
    items10[13] = snapX;
    [tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70] = items10;
    function useHomeDrawerGestureTsx16(absoluteX) {
      let value;
      result = _undefined.set(true);
      const result1 = _undefined2.set(0);
      const result2 = _undefined3.set(0);
      const result3 = _undefined4.set(false);
      const result4 = _undefined5.set(false);
      const result5 = _undefined6.set(false);
      const result6 = _undefined7.set(false);
      const result7 = _undefined8.set(_undefined9(0, c9));
      const obj = { active: false, initialX: absoluteX.absoluteX, initialY: absoluteX.absoluteY, panelX: value + _undefined12.get() };
      set = _undefined10.set;
      value = _undefined11.get();
      const result8 = set(obj);
    }
    const items11 = [tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70];
    useHomeDrawerGestureTsx16.__closure = items11;
    useHomeDrawerGestureTsx16.__workletHash = 10665906887596;
    useHomeDrawerGestureTsx16.__initData = tmp57;
    const items12 = [closure_36, gestureState, tmp7, unpackModuleId, beginDrag];
    [tmp71, tmp72, tmp73, tmp74, tmp75] = items12;
    function useHomeDrawerGestureTsx17(arg0, activate) {
      if (!_undefined.get().active) {
        const absoluteX = arg0.changedTouches[0].absoluteX;
        const _Math = Math;
        const absoluteY = arg0.changedTouches[0].absoluteY;
        const absolute = Math.abs(absoluteX - obj.get().initialX);
        const _Math2 = Math;
        const absolute1 = Math.abs(absoluteY - obj.get().initialY);
        const value = _undefined2.get();
        if (absolute1 <= absolute) {
          if (value) {
            if (absolute >= c2) {
              _undefined3(absoluteX);
              activate.activate();
            }
          }
        }
        activate.fail();
      }
    }
    const items13 = [tmp72, tmp73, tmp74, tmp75];
    useHomeDrawerGestureTsx17.__closure = items13;
    useHomeDrawerGestureTsx17.__workletHash = 9129637106834;
    useHomeDrawerGestureTsx17.__initData = tmp71;
    const items14 = [closure_37, gestureState, sharedValue, tmp, tmp11, c16, PULL_GESTURE_RESISTANCE, tmp2, 48, 400, sharedValue6, fireThrow];
    [tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87] = items14;
    function useHomeDrawerGestureTsx18(absoluteX) {
      if (_undefined.get().active) {
        const diff = absoluteX.absoluteX - obj.get().initialX;
        result = _undefined2.set(diff);
        const value = _undefined3.get();
        const sum = value + _undefined4.get();
        const obj3 = _undefined4;
        if (0 === _undefined.get().panelX) {
          if (diff >= 0) {
            let result1;
            set = _undefined3.set;
            if (diff < c4) {
              result1 = diff / c5;
            } else {
              result1 = diff - c6;
            }
            const result2 = set(result1);
          }
          let tmp15 = sum < c7;
          if (tmp15) {
            const value2 = obj2.get();
            tmp15 = value2 + obj3.get() >= tmp14;
          }
          if (tmp15) {
            if (absoluteX.velocityX <= c8) {
              const result3 = _undefined5.set(true);
            } else if (!_undefined5.get()) {
              _undefined6();
            }
          }
        }
        const _Math = Math;
        const result4 = obj2.set(Math.max(diff + obj.get().panelX, 0));
      }
    }
    const items15 = [tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87];
    useHomeDrawerGestureTsx18.__closure = items15;
    useHomeDrawerGestureTsx18.__workletHash = 17074708416812;
    useHomeDrawerGestureTsx18.__initData = tmp76;
    const onBeginResult = onBegin(useHomeDrawerGestureTsx16);
    const onTouchesMoveResult = onBeginResult.onTouchesMove(useHomeDrawerGestureTsx17);
    const items16 = [closure_38, sharedValue1, sharedValue, authStore, React4, sharedValue6, fireThrow, c16, , , , , , , , , ];
    const onEnd = onTouchesMoveResult.onChange(useHomeDrawerGestureTsx18).onEnd;
    onTouchesMoveResult.onChange(useHomeDrawerGestureTsx18);
    items16[8] = _mod1705.scheduleOnRN;
    items16[9] = HapticUtils.triggerHapticFeedback;
    items16[10] = HapticUtils.HapticFeedbackTypes;
    items16[11] = shouldOpenFromPosition;
    items16[12] = settleDrawer;
    items16[13] = sharedValue2;
    items16[14] = gestureState;
    items16[15] = callback;
    items16[16] = closure_19;
    let c9;
    let c10;
    let c11;
    let c12;
    let c13;
    let c14;
    let c15;
    [tmp89, tmp90, tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105] = items16;
    function useHomeDrawerGestureTsx19(velocityX) {
      let flag;
      const value = _undefined.get();
      const sum = value + _undefined2.get();
      let tmp4 = velocityX.velocityX > c2;
      const value2 = _undefined3.get();
      const tmp3 = c2;
      if (tmp4) {
        tmp4 = sum > c3;
      }
      const tmp7 = tmp4 && !value2;
      if (tmp7) {
        _undefined4();
      }
      if (tmp4) {
        flag = true;
        if (sum < c6) {
          _undefined5(c8, _undefined6.IMPACT_MEDIUM);
          flag = true;
        }
      } else {
        if (velocityX.velocityX < -tmp3) {
          if (sum < -c3) {
            _undefined5(c8, _undefined6.SOFT);
            flag = false;
          }
        }
        flag = _undefined7();
      }
      _undefined8(flag);
      result = _undefined9.set(true);
      const tmp23 = _undefined10.get().panelX > 0;
      if (flag) {
        if (!tmp23) {
          _undefined5(c14, _undefined11.OPEN);
        }
      }
      if (!tmp23) {
        _undefined5(c14, _undefined11.PEEK);
      }
    }
    const items17 = [tmp90, tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105];
    useHomeDrawerGestureTsx19.__closure = items17;
    useHomeDrawerGestureTsx19.__workletHash = 14013089644907;
    useHomeDrawerGestureTsx19.__initData = tmp89;
    const items18 = [closure_39, gestureState, sharedValue2, settleDrawer, shouldOpenFromPosition, isPanelTouchActive, , , , ];
    const onFinalize = onEnd(useHomeDrawerGestureTsx19).onFinalize;
    onEnd(useHomeDrawerGestureTsx19);
    items18[6] = _mod1705.scheduleOnRN;
    items18[7] = noteInteraction;
    items18[8] = sharedValue;
    items18[9] = sharedValue1;
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    let c7;
    let c8;
    [tmp107, tmp108, tmp109, tmp110, tmp111, tmp112, tmp113, tmp114, tmp115, tmp116] = items18;
    function useHomeDrawerGestureTsx20() {
      let active = _undefined.get().active;
      const obj = _undefined;
      if (active) {
        active = !_undefined2.get();
      }
      if (active) {
        _undefined3(_undefined4());
      }
      result = _undefined5.set(false);
      _undefined6(c6);
      const result1 = obj.set({ active: false, initialX: 0, initialY: 0, panelX: 0 });
      const result2 = _undefined7.set(0);
      const result3 = _undefined8.set(0);
    }
    const items19 = [tmp108, tmp109, tmp110, tmp111, tmp112, tmp113, tmp114, tmp115, tmp116];
    useHomeDrawerGestureTsx20.__closure = items19;
    useHomeDrawerGestureTsx20.__workletHash = 4642709264773;
    useHomeDrawerGestureTsx20.__initData = tmp107;
    return onFinalize(useHomeDrawerGestureTsx20);
  }, items24);
  const first = isOpenTarget(obj11.useState(() => ({ gesture: memo, panelStyles: animatedStyle, gestureState, panelX, panelTranslateX: derivedValue1, guildsBarDrawerStyle, guildsBarPullX: derivedValue3 })), 1)[0];
  const items25 = [first, memo];
  const memo1 = obj11.useMemo(() => {
    const obj = { gesture: memo };
    const merged = Object.assign(first);
    return obj;
  }, items25);
  const items26 = [memo1, enableHome, landOnHome];
  const obj10 = {
    gesture: memo,
    panelStyles: animatedStyle,
    homeDrawerContext: gestureState.useMemo(() => {
      const obj = { homeDrawerState: memo1, enableHome, landOnHome: tmp };
      return obj;
    }, items26)
  };
  return obj10;
}
export const HomeDrawerStateContext = context;
export function useHomeDrawerState() {
  return react.useContext(context).homeDrawerState;
}
export function useIsHomeDrawerEnabled() {
  return react.useContext(context).enableHome;
}
export function useDoesLandOnHomeDrawer() {
  return react.useContext(context).landOnHome;
}
