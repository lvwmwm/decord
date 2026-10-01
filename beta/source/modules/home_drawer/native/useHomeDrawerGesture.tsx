// Module ID: 15655
// Function ID: 15656
// Name: useHomeDrawerGesture
// Dependencies: [32, 19, 15649, 15656, 1074, 11002, 4698, 4566, 1486, 1241, 4837, 15650, 4801, 1479, 1613, 4695, 11003, 4693, 15657, 4692, 4839, 6073, 6495, 2]
// Exports: useDoesLandOnHomeDrawer, useHomeDrawerState, useHomeGesture, useIsHomeDrawerEnabled

// Module 15655 (useHomeDrawerGesture)
import Constants from "Constants" /* 1074 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4692 */;
import HapticUtils from "HapticUtils" /* 4801 */;
import timing from "timing" /* 4837 */;
import reanimated_AccessibilityPreferencesSharedValue from "reanimated/AccessibilityPreferencesSharedValue" /* 4839 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6073 */;
import LaunchPadConstants from "LaunchPadConstants" /* 11002 */;
import HomeDrawerStore2 from "HomeDrawerStore" /* 15649 */;
import HomeDrawerAnimations from "HomeDrawerAnimations" /* 15650 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import HomeDrawerSubtitleStore from "HomeDrawerSubtitleStore" /* 15656 */;
import "ReanimatedHelperTypes";
import ReanimatedHelperTypes_mod from "ReanimatedHelperTypes" /* 6495 */;
import size from "module_2" /* 2 */;

let __initData3, navigation, set, set2, set3;

let Gesture;
let ReanimatedHelperTypes;
const computeMaxX = HomeDrawerStore2.computeMaxX;
const AnalyticEvents = Constants.AnalyticEvents;
const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
let c10 = 144;
let c11 = 96.00000000000001;
let c12 = 48;
let closure_13 = { PEEK: "PEEK", OPEN: "OPEN" };
let closure_14 = { code: "function useHomeDrawerGestureTsx1(){const{gestureState,dragOffsetX,INITIAL_OPEN_WIDTH}=this.__closure;return gestureState.get().panelX===0&&dragOffsetX.get()>=INITIAL_OPEN_WIDTH;}" };
let closure_15 = { code: "function useHomeDrawerGestureTsx2(){const{isSnappedOpen}=this.__closure;return isSnappedOpen.get();}" };
let closure_16 = { code: "function useHomeDrawerGestureTsx3(isSnapped,wasSnapped){const{gestureState,didSnapThisGesture,snapX,withTiming,SNAP_OPEN_DISTANCE,HOME_DRAWER_SNAP_TIMING,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,flingThrow,HOME_DRAWER_UNSNAP_TIMING,hasThrown,snappedByDrag}=this.__closure;if(!gestureState.get().active||wasSnapped===null){return;}if(isSnapped===wasSnapped){return;}if(isSnapped){didSnapThisGesture.set(true);snapX.set(withTiming(SNAP_OPEN_DISTANCE,HOME_DRAWER_SNAP_TIMING,'animate-always'));runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);return;}if(!didSnapThisGesture.get()){return;}flingThrow.set(withTiming(0,HOME_DRAWER_UNSNAP_TIMING));hasThrown.set(false);snappedByDrag.set(false);snapX.set(withTiming(0,HOME_DRAWER_UNSNAP_TIMING,'animate-always'));runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.SOFT);}" };
let closure_17 = { code: "function useHomeDrawerGestureTsx4(){const{panelX,snapX,peekX}=this.__closure;return panelX.get()+snapX.get()+peekX.get();}" };
let closure_18 = { code: "function useHomeDrawerGestureTsx5(){const{panelTranslateX}=this.__closure;return{transform:[{translateX:panelTranslateX.get()}]};}" };
let closure_19 = { code: "function useHomeDrawerGestureTsx6(){const{isOpenTarget,isPanelTouchActive,panelTranslateX}=this.__closure;return isOpenTarget.get()||!isPanelTouchActive.get()&&panelTranslateX.get()<=0;}" };
let closure_20 = { code: "function useHomeDrawerGestureTsx7(isPullDone){const{isPullActive}=this.__closure;if(isPullDone&&isPullActive.get()){isPullActive.set(false);}}" };
let __initData = { code: "function useHomeDrawerGestureTsx8(){const{panelTranslateX,isPullActive,HOME_DRAWER_PULL_SETTLE_WIDTH,MAX_HOME_DRAWER_ANIMATING_WIDTH,SNAP_OPEN_DISTANCE}=this.__closure;const reveal=panelTranslateX.get();if(!isPullActive.get()||reveal<=0||reveal>=HOME_DRAWER_PULL_SETTLE_WIDTH){return 0;}return reveal<MAX_HOME_DRAWER_ANIMATING_WIDTH?reveal/MAX_HOME_DRAWER_ANIMATING_WIDTH:1-(reveal-MAX_HOME_DRAWER_ANIMATING_WIDTH)/SNAP_OPEN_DISTANCE;}" };
let __initData2 = { code: "function useHomeDrawerGestureTsx9(){const{accessibilityPreferencesSharedValue,pullFraction,HOME_DRAWER_PULL_DISTANCE,flingThrow,HOME_DRAWER_FLING_THROW_DISTANCE}=this.__closure;if(accessibilityPreferencesSharedValue.get().reduceMotion){return 0;}return Math.max(pullFraction.get()*HOME_DRAWER_PULL_DISTANCE,flingThrow.get()*HOME_DRAWER_FLING_THROW_DISTANCE);}" };
let closure_23 = { code: "function useHomeDrawerGestureTsx10(){const{guildsBarPullX}=this.__closure;return{transform:[{translateX:guildsBarPullX.get()}]};}" };
let closure_24 = { code: "function visualPanelX_useHomeDrawerGestureTsx11(){const{panelX,isSnappedOpen,SNAP_OPEN_DISTANCE}=this.__closure;return panelX.get()+(isSnappedOpen.get()?SNAP_OPEN_DISTANCE:0);}" };
let closure_25 = { code: "function settleDrawer_useHomeDrawerGestureTsx12(shouldOpen){const{isOpenTarget,panelX,withTiming,maxX,HOME_DRAWER_SETTLE_TIMING,snapX,runOnJS,setHomeDrawerState}=this.__closure;isOpenTarget.set(shouldOpen);panelX.set(withTiming(shouldOpen?maxX:0,HOME_DRAWER_SETTLE_TIMING,'animate-always'));snapX.set(withTiming(0,HOME_DRAWER_SETTLE_TIMING,'animate-always'));runOnJS(setHomeDrawerState)(shouldOpen);}" };
let closure_26 = { code: "function fireThrow_useHomeDrawerGestureTsx13(){const{hasThrown,isPullActive,flingThrow,clamp,pullFraction,HOME_DRAWER_PULL_DISTANCE,HOME_DRAWER_FLING_THROW_DISTANCE,withSequence,withTiming,HOME_DRAWER_FLING_THROW_TIMING,HOME_DRAWER_FLING_RETURN_TIMING}=this.__closure;if(hasThrown.get()||!isPullActive.get()){return;}hasThrown.set(true);flingThrow.set(clamp(pullFraction.get()*HOME_DRAWER_PULL_DISTANCE/HOME_DRAWER_FLING_THROW_DISTANCE,0,1));flingThrow.set(withSequence(withTiming(1,HOME_DRAWER_FLING_THROW_TIMING),withTiming(0,HOME_DRAWER_FLING_RETURN_TIMING)));}" };
let closure_27 = { code: "function beginDrag_useHomeDrawerGestureTsx14(touchX){const{panelX,snapX,activationOffsetX,gestureState,isPullActive,PULL_ACTIVE_MAX_START}=this.__closure;const currentX=panelX.get()+snapX.get();activationOffsetX.set(touchX-gestureState.get().initialX);isPullActive.set(currentX<PULL_ACTIVE_MAX_START);panelX.set(currentX);snapX.set(0);gestureState.set({...gestureState.get(),active:true,initialX:touchX,panelX:currentX});}" };
let closure_28 = { code: "function shouldOpenFromPosition_useHomeDrawerGestureTsx15(){const{visualPanelX,FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN,maxX,INITIAL_OPEN_WIDTH,dragOffsetX}=this.__closure;const currentX=visualPanelX();if(currentX===0)return false;if(currentX>FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN*maxX)return true;if(currentX>=INITIAL_OPEN_WIDTH&&dragOffsetX.get()>0)return true;return false;}" };
let closure_29 = { code: "function useHomeDrawerGestureTsx16(){const{gestureState,didSettle,settleDrawer,shouldOpenFromPosition,isPanelTouchActive,runOnJS,noteInteraction,dragOffsetX,activationOffsetX}=this.__closure;if(gestureState.get().active&&!didSettle.get()){settleDrawer(shouldOpenFromPosition());}isPanelTouchActive.set(false);runOnJS(noteInteraction)();gestureState.set({active:false,initialX:0,initialY:0,panelX:0});dragOffsetX.set(0);activationOffsetX.set(0);}" };
let closure_30 = { code: "function useHomeDrawerGestureTsx17(event){const{activationOffsetX,dragOffsetX,FLING_MIN_VELOCITY,FLING_MIN_DISTANCE,snappedByDrag,fireThrow,INITIAL_OPEN_WIDTH,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,shouldOpenFromPosition,settleDrawer,didSettle,gestureState,trackServerDrawerInteract,ServerDrawerInteractAction}=this.__closure;const flingDistanceX=activationOffsetX.get()+dragOffsetX.get();const passesOpeningVelocity=event.velocityX>FLING_MIN_VELOCITY;const passesMinDistance=flingDistanceX>FLING_MIN_DISTANCE;const isBlockedByDragSnap=snappedByDrag.get();const isOpeningFling=passesOpeningVelocity&&passesMinDistance;const shouldAttemptThrow=isOpeningFling&&!isBlockedByDragSnap;if(shouldAttemptThrow){fireThrow();}let shouldOpen;if(isOpeningFling){shouldOpen=true;if(flingDistanceX<INITIAL_OPEN_WIDTH){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}else if(event.velocityX<-FLING_MIN_VELOCITY&&flingDistanceX<-FLING_MIN_DISTANCE){shouldOpen=false;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.SOFT);}else{shouldOpen=shouldOpenFromPosition();}settleDrawer(shouldOpen);didSettle.set(true);const wasOpenAtStart=gestureState.get().panelX>0;if(shouldOpen&&!wasOpenAtStart){runOnJS(trackServerDrawerInteract)(ServerDrawerInteractAction.OPEN);}else if(!wasOpenAtStart){runOnJS(trackServerDrawerInteract)(ServerDrawerInteractAction.PEEK);}}" };
let closure_31 = { code: "function useHomeDrawerGestureTsx18(event){const{gestureState,dragOffsetX,panelX,snapX,INITIAL_OPEN_WIDTH,DRAWER_RESISTANCE,SNAP_OPEN_DISTANCE,MAX_HOME_DRAWER_ANIMATING_WIDTH,FLING_THROW_MIN_VELOCITY,snappedByDrag,fireThrow}=this.__closure;if(!gestureState.get().active)return;const newXOffset=event.absoluteX-gestureState.get().initialX;dragOffsetX.set(newXOffset);const previousReveal=panelX.get()+snapX.get();if(gestureState.get().panelX===0&&newXOffset>=0){panelX.set(newXOffset<INITIAL_OPEN_WIDTH?newXOffset/DRAWER_RESISTANCE:newXOffset-SNAP_OPEN_DISTANCE);}else{panelX.set(Math.max(newXOffset+gestureState.get().panelX,0));}if(previousReveal<MAX_HOME_DRAWER_ANIMATING_WIDTH&&panelX.get()+snapX.get()>=MAX_HOME_DRAWER_ANIMATING_WIDTH){if(event.velocityX<=FLING_THROW_MIN_VELOCITY){snappedByDrag.set(true);}else if(!snappedByDrag.get()){fireThrow();}}}" };
let closure_32 = { code: "function useHomeDrawerGestureTsx19(event,manager){const{gestureState,isOpenTarget,ACTIVATION_MIN_DISTANCE,beginDrag}=this.__closure;if(gestureState.get().active)return;const touchX=event.changedTouches[0].absoluteX;const touchY=event.changedTouches[0].absoluteY;const absoluteXDiff=Math.abs(touchX-gestureState.get().initialX);const absoluteYDiff=Math.abs(touchY-gestureState.get().initialY);const isOpen=isOpenTarget.get();if(absoluteYDiff>absoluteXDiff||!isOpen&&touchX<gestureState.get().initialX||isOpen&&touchX>gestureState.get().initialX){manager.fail();return;}if(absoluteXDiff<ACTIVATION_MIN_DISTANCE){return;}beginDrag(touchX);manager.activate();}" };
let closure_33 = { code: "function useHomeDrawerGestureTsx20(event){const{isPanelTouchActive,dragOffsetX,activationOffsetX,didSettle,didSnapThisGesture,snappedByDrag,hasThrown,flingThrow,withTiming,HOME_DRAWER_FLING_RETURN_TIMING,gestureState,panelX,snapX}=this.__closure;isPanelTouchActive.set(true);dragOffsetX.set(0);activationOffsetX.set(0);didSettle.set(false);didSnapThisGesture.set(false);snappedByDrag.set(false);hasThrown.set(false);flingThrow.set(withTiming(0,HOME_DRAWER_FLING_RETURN_TIMING));gestureState.set({active:false,initialX:event.absoluteX,initialY:event.absoluteY,panelX:panelX.get()+snapX.get()});}" };
let obj = { gesture: Gesture.Pan(), panelStyles: {}, gestureState: ReanimatedHelperTypes.createFakeSharedValue({ active: false, initialX: 0, initialY: 0, panelX: 0 }), panelX: ReanimatedHelperTypes.createFakeSharedValue(0), panelTranslateX: ReanimatedHelperTypes.createFakeSharedValue(0), guildsBarDrawerStyle: {}, guildsBarPullX: ReanimatedHelperTypes.createFakeSharedValue(0) };
Gesture = LegacyBaseButton.Gesture;
ReanimatedHelperTypes = ReanimatedHelperTypes_mod;
const context = react.createContext({ homeDrawerState: obj, enableHome: false, landOnHome: false });
let result = size.fileFinishedImporting("modules/home_drawer/native/useHomeDrawerGesture.tsx");

export const INITIAL_OPEN_WIDTH = 144;
export const HOME_DRAWER_FLING_PHYSICS = { mass: 0.4, damping: 100, stiffness: 250 };
export const useHomeGesture = function useHomeGesture() {
  let callback;
  let closure_21;
  let closure_22;
  let enableHome;
  let landOnHome;
  let snapX;
  let updateMaxX;
  let tmp = landOnHome;
  let tmp2 = snapX;
  const MobileHomeDrawerExperiment = landOnHome(snapX[6]).MobileHomeDrawerExperiment;
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
  let obj = landOnHome(snapX[7]);
  const sharedValue = obj.useSharedValue(0);
  let obj2 = landOnHome(snapX[7]);
  const sharedValue1 = obj2.useSharedValue(0);
  let obj3 = landOnHome(snapX[7]);
  const sharedValue2 = obj3.useSharedValue(false);
  let obj4 = landOnHome(snapX[7]);
  const sharedValue3 = obj4.useSharedValue(false);
  let obj5 = landOnHome(snapX[7]);
  const sharedValue4 = obj5.useSharedValue(false);
  let obj6 = landOnHome(snapX[7]);
  const sharedValue5 = obj6.useSharedValue(0);
  let obj7 = landOnHome(snapX[7]);
  const sharedValue6 = obj7.useSharedValue(false);
  const obj8 = landOnHome(snapX[7]);
  const sharedValue7 = obj8.useSharedValue(false);
  const obj9 = landOnHome(snapX[8]);
  navigation = obj9.useNavigation();
  __initData = gestureState.useCallback((action) => {
    const obj = panelX(snapX[9]);
    const obj2 = { action };
    obj.track(isPanelTouchActive.SERVER_DRAWER_INTERACT, obj2);
  }, []);
  const obj12 = landOnHome(snapX[7]);
  class C {
    constructor() {
      const tmp = 0 === gestureState.get().panelX && sharedValue.get() >= c10;
      return tmp;
    }
  }
  const obj10 = { gestureState, dragOffsetX: sharedValue, INITIAL_OPEN_WIDTH: sharedValue };
  C.__closure = obj10;
  C.__workletHash = 17562466882099;
  C.__initData = sharedValue4;
  const derivedValue = obj12.useDerivedValue(C);
  let fn = function k() {
    return derivedValue.get();
  };
  fn.__closure = { isSnappedOpen: derivedValue };
  fn.__workletHash = 5063476059943;
  fn.__initData = sharedValue5;
  let fn2 = function b(arg0, arg1) {
    if (gestureState.get().active) {
      if (null !== arg1) {
        if (arg0 !== arg1) {
          if (arg0) {
            const result = obj.set(true);
            set3 = snapX.set;
            const obj5 = timing;
            set3(obj5.withTiming(c11, HomeDrawerAnimations.HOME_DRAWER_SNAP_TIMING, "animate-always"));
            const obj6 = ReanimatedRexport;
            const runOnJSResult = obj6.runOnJS(HapticUtils.triggerHapticFeedback);
            runOnJSResult(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
          } else if (sharedValue3.get()) {
            set = sharedValue5.set;
            const obj2 = timing;
            const result1 = set(obj2.withTiming(0, HomeDrawerAnimations.HOME_DRAWER_UNSNAP_TIMING));
            const result2 = sharedValue7.set(false);
            const result3 = sharedValue6.set(false);
            set2 = snapX.set;
            const obj3 = timing;
            set2(obj3.withTiming(0, HomeDrawerAnimations.HOME_DRAWER_UNSNAP_TIMING, "animate-always"));
            const obj4 = ReanimatedRexport;
            const runOnJSResult1 = obj4.runOnJS(HapticUtils.triggerHapticFeedback);
            runOnJSResult1(HapticUtils.HapticFeedbackTypes.SOFT);
          }
          return tmp28;
        }
      }
    }
  };
  let tmp15 = sharedValue1;
  const obj14 = landOnHome(snapX[7]);
  fn2.__closure = { gestureState, didSnapThisGesture: sharedValue3, snapX, withTiming: landOnHome(snapX[10]).withTiming, SNAP_OPEN_DISTANCE: sharedValue1, HOME_DRAWER_SNAP_TIMING: landOnHome(snapX[11]).HOME_DRAWER_SNAP_TIMING, runOnJS: landOnHome(snapX[7]).runOnJS, triggerHapticFeedback: landOnHome(snapX[12]).triggerHapticFeedback, HapticFeedbackTypes: landOnHome(snapX[12]).HapticFeedbackTypes, flingThrow: sharedValue5, HOME_DRAWER_UNSNAP_TIMING: landOnHome(snapX[11]).HOME_DRAWER_UNSNAP_TIMING, hasThrown: sharedValue7, snappedByDrag: sharedValue6 };
  fn2.__workletHash = 7899810169347;
  fn2.__initData = sharedValue6;
  ({ gestureState, didSnapThisGesture: sharedValue3, snapX, withTiming: landOnHome(snapX[10]).withTiming, SNAP_OPEN_DISTANCE: sharedValue1, HOME_DRAWER_SNAP_TIMING: landOnHome(snapX[11]).HOME_DRAWER_SNAP_TIMING, runOnJS: landOnHome(snapX[7]).runOnJS, triggerHapticFeedback: landOnHome(snapX[12]).triggerHapticFeedback, HapticFeedbackTypes: landOnHome(snapX[12]).HapticFeedbackTypes, flingThrow: sharedValue5, HOME_DRAWER_UNSNAP_TIMING: landOnHome(snapX[11]).HOME_DRAWER_UNSNAP_TIMING, hasThrown: sharedValue7, snappedByDrag: sharedValue6 });
  const animatedReaction = obj14.useAnimatedReaction(fn, fn2);
  const tmp17 = panelX(snapX[13])();
  __initData = tmp17;
  const tmp18 = panelX(snapX[14])();
  __initData2 = tmp18;
  const isChatBesideChannelList = panelX(snapX[15])().isChatBesideChannelList;
  const tmp19 = panelX(snapX[16])();
  const tmp20 = tmp19 === noteInteraction.GESTURE_FULL || tmp19 === noteInteraction.GESTURE_EDGE;
  if (enableHome) {
    enableHome = !tmp20;
  }
  if (enableHome) {
    enableHome = !isChatBesideChannelList;
  }
  const tmp22 = isOpenTarget(obj11.useState({ isOnMain: true }), 2);
  __initData = tmp22[1];
  const effect = obj11.useEffect(() => {
    let obj = landOnHome(snapX[17]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (null != rootNavigationRef) {
      let state;
      if (rootNavigationRef != null) {
        state = rootNavigationRef.getState();
      }
      let tmp2 = null != state;
      if (tmp2) {
        const tmp3 = state.routes[state.index];
        let name;
        if (tmp3 != null) {
          name = tmp3.name;
        }
        tmp2 = "main" === name;
      }
      let closure_0 = tmp2;
      function handleRootStateChange() {
        let obj = rootNavigationRef;
        let state;
        if (rootNavigationRef != null) {
          state = obj.getState();
        }
        let tmp2 = null != state;
        if (tmp2) {
          let name;
          if (state.routes[state.index] != null) {
            name = tmp3.name;
          }
          tmp2 = "main" === name;
        }
        let closure_0 = tmp2;
        __initData((isOnMain) => {
          let tmp = isOnMain;
          if (isOnMain.isOnMain !== closure_0) {
            tmp = { isOnMain: tmp2 };
            const obj = { isOnMain: tmp2 };
          }
          return tmp;
        });
      }
      __initData((isOnMain) => {
        let tmp = isOnMain;
        if (isOnMain.isOnMain !== closure_0) {
          tmp = { isOnMain: tmp2 };
          const obj = { isOnMain: tmp2 };
        }
        return tmp;
      });
      return rootNavigationRef.addListener("state", handleRootStateChange);
    }
  }, []);
  const tmpResult = tmp(tmp2[8]);
  const tmp25 = enableHome && tmpResult.useIsFocused();
  __initData2 = tmp25;
  const tmpResult10 = tmp(tmp2[7]);
  const sharedValue8 = tmpResult10.useSharedValue(0);
  let tmp28 = enableHome;
  const useHomeDrawerPeekHint = tmp(tmp2[18]).useHomeDrawerPeekHint;
  tmp(tmp2[18]);
  const tmp21 = isOpenTarget;
  if (enableHome) {
    tmp28 = enablePeekHint;
  }
  const homeDrawerPeekHint = useHomeDrawerPeekHint(tmp28, sharedValue8);
  let state = navigation.getState();
  let tmp32;
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
      tmp32 = routes[num];
    }
  }
  let coerceGuildsRouteResult = coerceGuildsRoute(tmp32);
  let tmp34 = enableHome;
  if (tmp34) {
    let drawerOpen;
    if (coerceGuildsRouteResult != null) {
      let params = coerceGuildsRouteResult.params;
      if (params != null) {
        drawerOpen = params.drawerOpen;
      }
    }
    if (drawerOpen == null) {
      drawerOpen = landOnHome;
    }
    tmp34 = drawerOpen;
  }
  drawerOpen = tmp34;
  let num2 = 0;
  if (tmp34) {
    num2 = maxX(tmp17, tmp18);
  }
  let items = [tmp17, tmp18, updateMaxX, enableHome];
  const effect1 = obj11.useEffect(() => {
    if (enableHome) {
      updateMaxX(closure_21, closure_22);
    } else {
      updateMaxX({ width: 0, height: 0 }, { top: 0, bottom: 0, left: 0, right: 0 });
    }
  }, items);
  const items1 = [enableHome, panelX, snapX, isOpenTarget];
  const effect2 = obj11.useEffect(() => {
    const tmp = enableHome;
    if (!tmp) {
      const result = panelX.set(0);
      const result1 = snapX.set(0);
      const result2 = isOpenTarget.set(false);
      const obj = NavigationRouteUtils;
      obj.setHomeDrawerState(false);
    }
  }, items1);
  const items2 = [navigation, setPanelX, enableHome];
  const effect3 = obj11.useEffect(() => {
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
  }, items2);
  __initData3 = obj11.useRef(false);
  const items3 = [enableHome, tmp34, num2, panelX, isOpenTarget];
  const layoutEffect = obj11.useLayoutEffect(() => {
    const tmp = enableHome && !__initData3.current;
    if (tmp) {
      const result = panelX.set(num2);
      const result1 = isOpenTarget.set(true === drawerOpen);
      if (drawerOpen) {
        const state = HomeDrawerSubtitleStore.getState();
        state.startTimer();
      }
      __initData3.current = true;
    }
  }, items3);
  function me() {
    const value = panelX.get();
    const sum = value + snapX.get();
    return sum + sharedValue8.get();
  }
  me.__closure = { panelX, snapX, peekX: sharedValue8 };
  me.__workletHash = 2679501612865;
  me.__initData = sharedValue7;
  const tmpResult13 = tmp(tmp2[7]);
  const derivedValue1 = tmpResult13.useDerivedValue(me);
  function ve() {
    let items;
    const obj = { transform: items };
    items = [{ translateX: derivedValue1.get() }];
    ({ translateX: derivedValue1.get() });
    return obj;
  }
  ve.__closure = { panelTranslateX: derivedValue1 };
  ve.__workletHash = 15504517955444;
  ve.__initData = navigation;
  const tmpResult14 = tmp(tmp2[7]);
  const animatedStyle = tmpResult14.useAnimatedStyle(ve);
  const tmpResult15 = tmp(tmp2[7]);
  class Ge {
    constructor() {
      let value = isOpenTarget.get();
      if (!value) {
        const value2 = isPanelTouchActive.get();
        value = !value2 && derivedValue1.get() <= 0;
        const tmp4 = !value2 && derivedValue1.get() <= 0;
      }
      return value;
    }
  }
  Ge.__closure = { isOpenTarget, isPanelTouchActive, panelTranslateX: derivedValue1 };
  Ge.__workletHash = 635704459123;
  Ge.__initData = __initData;
  class Pe {
    constructor(arg0) {
      const value = arg0 && sharedValue4.get();
      if (value) {
        const result = sharedValue4.set(false);
      }
    }
  }
  Pe.__closure = { isPullActive: sharedValue4 };
  Pe.__workletHash = 2260649385283;
  Pe.__initData = derivedValue;
  const animatedReaction1 = tmpResult15.useAnimatedReaction(Ge, Pe);
  const tmpResult16 = tmp(tmp2[7]);
  class Le {
    constructor() {
      const value = derivedValue1.get();
      let num = 0;
      if (sharedValue4.get()) {
        num = 0;
        if (value > 0) {
          num = 0;
          if (value < 144) {
            let result;
            if (value < c12) {
              result = value / tmp2;
            } else {
              result = 1 - (value - tmp2) / c11;
            }
            num = result;
          }
        }
      }
      return num;
    }
  }
  const obj15 = { panelTranslateX: derivedValue1, isPullActive: sharedValue4, HOME_DRAWER_PULL_SETTLE_WIDTH: 144, MAX_HOME_DRAWER_ANIMATING_WIDTH: sharedValue2, SNAP_OPEN_DISTANCE: tmp15 };
  Le.__closure = obj15;
  Le.__workletHash = 11347595493924;
  Le.__initData = __initData;
  const derivedValue2 = tmpResult16.useDerivedValue(Le);
  const tmpResult17 = tmp(tmp2[7]);
  class Ce {
    constructor() {
      const accessibilityPreferencesSharedValue = reanimated_AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue;
      let num = 0;
      if (!accessibilityPreferencesSharedValue.get().reduceMotion) {
        const _Math = Math;
        const result = 12 * derivedValue2.get();
        num = max(result, 16 * sharedValue5.get());
      }
      return num;
    }
  }
  Ce.__closure = { accessibilityPreferencesSharedValue: tmp(tmp2[20]).accessibilityPreferencesSharedValue, pullFraction: derivedValue2, HOME_DRAWER_PULL_DISTANCE: 12, flingThrow: sharedValue5, HOME_DRAWER_FLING_THROW_DISTANCE: 16 };
  Ce.__workletHash = 9960352904018;
  Ce.__initData = __initData2;
  ({ accessibilityPreferencesSharedValue: tmp(tmp2[20]).accessibilityPreferencesSharedValue, pullFraction: derivedValue2, HOME_DRAWER_PULL_DISTANCE: 12, flingThrow: sharedValue5, HOME_DRAWER_FLING_THROW_DISTANCE: 16 });
  const derivedValue3 = tmpResult17.useDerivedValue(Ce);
  function be() {
    let items;
    const obj = { transform: items };
    items = [{ translateX: derivedValue3.get() }];
    ({ translateX: derivedValue3.get() });
    return obj;
  }
  be.__closure = { guildsBarPullX: derivedValue3 };
  be.__workletHash = 12108954192160;
  be.__initData = enableHome;
  const tmpResult18 = tmp(tmp2[7]);
  const guildsBarDrawerStyle = tmpResult18.useAnimatedStyle(be);
  const items4 = [gestureState, panelX, snapX, isOpenTarget, sharedValue2, sharedValue3, derivedValue, sharedValue4, derivedValue2, sharedValue5, sharedValue6, sharedValue7, sharedValue, sharedValue1, tmp25, maxX, isPanelTouchActive, noteInteraction, __initData, __initData];
  const memo = obj11.useMemo(() => {
    let beginDrag;
    let fireThrow;
    let settleDrawer;
    let shouldOpenFromPosition;
    function visualPanelX() {
      const value = settleDrawer.get();
      let num = 0;
      if (derivedValue.get()) {
        num = sharedValue1;
      }
      return value + num;
    }
    let obj = { panelX: settleDrawer, isSnappedOpen: derivedValue, SNAP_OPEN_DISTANCE: sharedValue1 };
    visualPanelX.__closure = obj;
    visualPanelX.__workletHash = 4571251061814;
    visualPanelX.__initData = __initData;
    settleDrawer = function settleDrawer(flag) {
      const result = beginDrag.set(flag);
      let num = 0;
      set = settleDrawer.set;
      const withTiming = landOnHome(snapX[10]).withTiming;
      landOnHome(snapX[10]);
      if (flag) {
        num = maxX;
      }
      const result1 = set(withTiming(num, tmp3(tmp4[11]).HOME_DRAWER_SETTLE_TIMING, "animate-always"));
      set2 = fireThrow.set;
      const tmp3Result = landOnHome(snapX[10]);
      set2(tmp3Result.withTiming(0, landOnHome(snapX[11]).HOME_DRAWER_SETTLE_TIMING, "animate-always"));
      const tmp3Result2 = landOnHome(snapX[7]);
      tmp3Result2.runOnJS(landOnHome(snapX[19]).setHomeDrawerState)(flag);
    };
    let obj2 = { isOpenTarget: beginDrag, panelX: settleDrawer, withTiming: landOnHome(snapX[10]).withTiming, maxX, HOME_DRAWER_SETTLE_TIMING: landOnHome(snapX[11]).HOME_DRAWER_SETTLE_TIMING, snapX: fireThrow, runOnJS: landOnHome(snapX[7]).runOnJS, setHomeDrawerState: landOnHome(snapX[19]).setHomeDrawerState };
    const tmp4 = landOnHome;
    let tmp5 = snapX;
    const tmp2 = sharedValue1;
    let tmp3 = beginDrag;
    settleDrawer.__closure = obj2;
    settleDrawer.__workletHash = 13128455922839;
    settleDrawer.__initData = __initData;
    fireThrow = function fireThrow() {
      const value = sharedValue7.get();
      let value2 = !value;
      const obj = sharedValue7;
      if (value2) {
        value2 = sharedValue4.get();
      }
      if (value2) {
        const result = obj.set(true);
        set = sharedValue5.set;
        const obj2 = landOnHome(snapX[7]);
        const result1 = set(obj2.clamp(12 * derivedValue2.get() / 16, 0, 1));
        set2 = sharedValue5.set;
        const withSequence = landOnHome(snapX[7]).withSequence;
        landOnHome(snapX[7]);
        const obj3 = landOnHome(snapX[10]);
        const withTimingResult = obj3.withTiming(1, landOnHome(snapX[11]).HOME_DRAWER_FLING_THROW_TIMING);
        const obj4 = landOnHome(snapX[10]);
        set2(withSequence(withTimingResult, obj4.withTiming(0, landOnHome(snapX[11]).HOME_DRAWER_FLING_RETURN_TIMING)));
      }
    };
    let obj3 = { hasThrown: sharedValue7, isPullActive: sharedValue4, flingThrow: sharedValue5, clamp: landOnHome(snapX[7]).clamp, pullFraction: derivedValue2, HOME_DRAWER_PULL_DISTANCE: 12, HOME_DRAWER_FLING_THROW_DISTANCE: 16, withSequence: landOnHome(snapX[7]).withSequence, withTiming: landOnHome(snapX[10]).withTiming, HOME_DRAWER_FLING_THROW_TIMING: landOnHome(snapX[11]).HOME_DRAWER_FLING_THROW_TIMING, HOME_DRAWER_FLING_RETURN_TIMING: landOnHome(snapX[11]).HOME_DRAWER_FLING_RETURN_TIMING };
    let tmp7 = sharedValue7;
    fireThrow.__closure = obj3;
    fireThrow.__workletHash = 7181188083978;
    fireThrow.__initData = __initData2;
    beginDrag = function beginDrag(initialX) {
      const value = settleDrawer.get();
      const sum = value + fireThrow.get();
      const result = sharedValue1.set(initialX - shouldOpenFromPosition.get().initialX);
      const result1 = sharedValue4.set(sum < 16);
      const result2 = settleDrawer.set(sum);
      const result3 = fireThrow.set(0);
      const obj = { active: true, initialX, panelX: sum };
      set = shouldOpenFromPosition.set;
      const merged = Object.assign(shouldOpenFromPosition.get());
      const result4 = set(obj);
    };
    let obj4 = { panelX: settleDrawer, snapX: fireThrow, activationOffsetX: sharedValue1, gestureState: shouldOpenFromPosition, isPullActive: sharedValue4, PULL_ACTIVE_MAX_START: 16 };
    let tmp9 = sharedValue1;
    const tmp10 = shouldOpenFromPosition;
    beginDrag.__closure = obj4;
    beginDrag.__workletHash = 8821841484672;
    beginDrag.__initData = sharedValue8;
    shouldOpenFromPosition = function shouldOpenFromPosition() {
      if (typeof visualPanelX === "function") {
        const value = panelX.get();
        num2 = 0;
        if (derivedValue.get()) {
          num2 = c11;
        }
        const sum = value + num2;
        let tmp5 = 0 !== sum;
        if (tmp5) {
          let tmp7 = sum > 0.5 * maxX;
          if (!tmp7) {
            tmp7 = sum >= c10 && sharedValue.get() > 0;
            const tmp9 = sum >= c10 && sharedValue.get() > 0;
          }
          tmp5 = tmp7;
        }
        return tmp5;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    let obj5 = { visualPanelX, FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN: 0.5, maxX, INITIAL_OPEN_WIDTH: sharedValue, dragOffsetX: sharedValue };
    let tmp11 = sharedValue;
    shouldOpenFromPosition.__closure = obj5;
    shouldOpenFromPosition.__workletHash = 13719937872789;
    shouldOpenFromPosition.__initData = drawerOpen;
    const Gesture = landOnHome(snapX[21]).Gesture;
    let isOnMain = __initData2;
    const enabled = Gesture.Pan().enabled;
    Gesture.Pan();
    if (__initData2) {
      let tmp14 = __initData;
      isOnMain = __initData.isOnMain;
    }
    const enabledResult = enabled(isOnMain);
    const manualActivationResult = enabledResult.manualActivation(true);
    let result = manualActivationResult.shouldCancelWhenOutside(false);
    const fn = function _(absoluteX) {
      let value;
      const result = isPanelTouchActive.set(true);
      const result1 = sharedValue.set(0);
      const result2 = sharedValue1.set(0);
      const result3 = sharedValue2.set(false);
      const result4 = sharedValue3.set(false);
      const result5 = sharedValue6.set(false);
      const result6 = sharedValue7.set(false);
      set = sharedValue5.set;
      const obj = landOnHome(snapX[10]);
      const result7 = set(obj.withTiming(0, landOnHome(snapX[11]).HOME_DRAWER_FLING_RETURN_TIMING));
      const obj2 = { active: false, initialX: absoluteX.absoluteX, initialY: absoluteX.absoluteY, panelX: value + fireThrow.get() };
      set2 = shouldOpenFromPosition.set;
      value = settleDrawer.get();
      set2(obj2);
    };
    const maxPointersResult = result.maxPointers(1);
    fn.__closure = { isPanelTouchActive, dragOffsetX: sharedValue, activationOffsetX: tmp9, didSettle: sharedValue2, didSnapThisGesture: sharedValue3, snappedByDrag: sharedValue6, hasThrown: tmp7, flingThrow: sharedValue5, withTiming: tmp4(tmp5[10]).withTiming, HOME_DRAWER_FLING_RETURN_TIMING: tmp4(tmp5[11]).HOME_DRAWER_FLING_RETURN_TIMING, gestureState: tmp10, panelX: settleDrawer, snapX: fireThrow };
    fn.__workletHash = 13127799697200;
    fn.__initData = derivedValue2;
    ({ isPanelTouchActive, dragOffsetX: sharedValue, activationOffsetX: tmp9, didSettle: sharedValue2, didSnapThisGesture: sharedValue3, snappedByDrag: sharedValue6, hasThrown: tmp7, flingThrow: sharedValue5, withTiming: tmp4(tmp5[10]).withTiming, HOME_DRAWER_FLING_RETURN_TIMING: tmp4(tmp5[11]).HOME_DRAWER_FLING_RETURN_TIMING, gestureState: tmp10, panelX: settleDrawer, snapX: fireThrow });
    const fn2 = function s(arg0, activate) {
      if (!gestureState.get().active) {
        const absoluteX = arg0.changedTouches[0].absoluteX;
        const _Math = Math;
        const absoluteY = arg0.changedTouches[0].absoluteY;
        const absolute = Math.abs(absoluteX - obj.get().initialX);
        const _Math2 = Math;
        const absolute1 = Math.abs(absoluteY - obj.get().initialY);
        const value = isOpenTarget.get();
        if (absolute1 <= absolute) {
          if (value) {
            if (absolute >= 10) {
              if (typeof beginDrag === "function") {
                const value2 = panelX.get();
                const sum = value2 + snapX.get();
                const result = sharedValue1.set(absoluteX - obj.get().initialX);
                const result1 = sharedValue4.set(sum < 16);
                const result2 = panelX.set(sum);
                const result3 = snapX.set(0);
                const obj2 = { active: true, initialX: absoluteX, panelX: sum };
                set = gestureState.set;
                const merged = Object.assign(obj.get());
                const result4 = set(obj2);
                activate.activate();
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
          }
        }
        activate.fail();
      }
    };
    fn2.__closure = { gestureState: tmp10, isOpenTarget: tmp3, ACTIVATION_MIN_DISTANCE: 10, beginDrag };
    fn2.__workletHash = 9771907003045;
    fn2.__initData = animatedStyle;
    const fn3 = function n(absoluteX) {
      if (gestureState.get().active) {
        const diff = absoluteX.absoluteX - obj.get().initialX;
        const result = sharedValue.set(diff);
        const value = panelX.get();
        const sum = value + snapX.get();
        const obj3 = snapX;
        if (0 === gestureState.get().panelX) {
          if (diff >= 0) {
            let result1;
            set = panelX.set;
            if (diff < c10) {
              result1 = diff / 3;
            } else {
              result1 = diff - c11;
            }
            const result2 = set(result1);
          }
          let tmp14 = sum < c12;
          if (tmp14) {
            const value2 = obj2.get();
            tmp14 = value2 + obj3.get() >= tmp13;
          }
          if (tmp14) {
            if (absoluteX.velocityX <= 400) {
              const result3 = sharedValue6.set(true);
            } else if (!sharedValue6.get()) {
              fireThrow();
            }
          }
        }
        const _Math = Math;
        const result4 = obj2.set(Math.max(diff + obj.get().panelX, 0));
      }
    };
    const obj7 = { gestureState: tmp10, dragOffsetX: sharedValue, panelX: settleDrawer, snapX: fireThrow, INITIAL_OPEN_WIDTH: tmp11, DRAWER_RESISTANCE: 3, SNAP_OPEN_DISTANCE: tmp2, MAX_HOME_DRAWER_ANIMATING_WIDTH: sharedValue2, FLING_THROW_MIN_VELOCITY: 400, snappedByDrag: sharedValue6, fireThrow };
    fn3.__closure = obj7;
    fn3.__workletHash = 7401507013781;
    fn3.__initData = derivedValue1;
    const onBeginResult = maxPointersResult.onBegin(fn);
    const fn4 = function t(velocityX) {
      let flag;
      const value = sharedValue1.get();
      const sum = value + sharedValue.get();
      let tmp3 = velocityX.velocityX > 50;
      const value3 = sharedValue6.get();
      if (tmp3) {
        tmp3 = sum > 40;
      }
      const tmp5 = tmp3 && !value3;
      if (tmp5) {
        fireThrow();
      }
      if (tmp3) {
        flag = true;
        if (sum < c10) {
          const obj3 = ReanimatedRexport;
          const runOnJSResult = obj3.runOnJS(HapticUtils.triggerHapticFeedback);
          runOnJSResult(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
          flag = true;
        }
      } else {
        if (velocityX.velocityX < -50) {
          if (sum < -40) {
            const obj2 = ReanimatedRexport;
            const runOnJSResult1 = obj2.runOnJS(HapticUtils.triggerHapticFeedback);
            runOnJSResult1(HapticUtils.HapticFeedbackTypes.SOFT);
            flag = false;
          }
        }
        if (typeof shouldOpenFromPosition === "function") {
          if (typeof visualPanelX === "function") {
            const value4 = panelX.get();
            let num5 = 0;
            if (derivedValue.get()) {
              num5 = c11;
            }
            const sum1 = value4 + num5;
            flag = 0 !== sum1;
            if (flag) {
              let tmp15 = sum1 > 0.5 * maxX;
              if (!tmp15) {
                tmp15 = sum1 >= c10 && obj.get() > 0;
                sum1 >= c10 && sharedValue.get() > 0;
              }
              flag = tmp15;
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      settleDrawer(flag);
      const result = sharedValue2.set(true);
      const tmp37 = gestureState.get().panelX > 0;
      if (flag) {
        if (!tmp37) {
          const obj4 = ReanimatedRexport;
          obj4.runOnJS(callback)(constants.OPEN);
        }
      }
      if (!tmp37) {
        const obj5 = ReanimatedRexport;
        obj5.runOnJS(callback)(constants.PEEK);
      }
    };
    const onTouchesMoveResult = onBeginResult.onTouchesMove(fn2);
    const onChangeResult = onTouchesMoveResult.onChange(fn3);
    fn4.__closure = { activationOffsetX: tmp9, dragOffsetX: sharedValue, FLING_MIN_VELOCITY: 50, FLING_MIN_DISTANCE: 40, snappedByDrag: sharedValue6, fireThrow, INITIAL_OPEN_WIDTH: tmp11, runOnJS: tmp4(tmp5[7]).runOnJS, triggerHapticFeedback: tmp4(tmp5[12]).triggerHapticFeedback, HapticFeedbackTypes: tmp4(tmp5[12]).HapticFeedbackTypes, shouldOpenFromPosition, settleDrawer, didSettle: sharedValue2, gestureState: tmp10, trackServerDrawerInteract, ServerDrawerInteractAction: sharedValue3 };
    fn4.__workletHash = 15243480929717;
    fn4.__initData = __initData3;
    ({ activationOffsetX: tmp9, dragOffsetX: sharedValue, FLING_MIN_VELOCITY: 50, FLING_MIN_DISTANCE: 40, snappedByDrag: sharedValue6, fireThrow, INITIAL_OPEN_WIDTH: tmp11, runOnJS: tmp4(tmp5[7]).runOnJS, triggerHapticFeedback: tmp4(tmp5[12]).triggerHapticFeedback, HapticFeedbackTypes: tmp4(tmp5[12]).HapticFeedbackTypes, shouldOpenFromPosition, settleDrawer, didSettle: sharedValue2, gestureState: tmp10, trackServerDrawerInteract, ServerDrawerInteractAction: sharedValue3 });
    const fn5 = function e() {
      let active = gestureState.get().active;
      const obj = gestureState;
      if (active) {
        active = !sharedValue2.get();
      }
      if (active) {
        if (typeof shouldOpenFromPosition === "function") {
          if (typeof visualPanelX === "function") {
            const value = panelX.get();
            num2 = 0;
            if (derivedValue.get()) {
              num2 = c11;
            }
            const sum = value + num2;
            let tmp9 = 0 !== sum;
            if (tmp9) {
              let tmp11 = sum > 0.5 * maxX;
              if (!tmp11) {
                tmp11 = sum >= c10 && sharedValue.get() > 0;
                const tmp13 = sum >= c10 && sharedValue.get() > 0;
              }
              tmp9 = tmp11;
            }
            tmp2(tmp9);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      const result = isPanelTouchActive.set(false);
      const obj2 = ReanimatedRexport;
      obj2.runOnJS(noteInteraction)();
      const result1 = obj.set({ active: false, initialX: 0, initialY: 0, panelX: 0 });
      const result2 = sharedValue.set(0);
      const result3 = sharedValue1.set(0);
    };
    const onEndResult = onChangeResult.onEnd(fn4);
    fn5.__closure = { gestureState: tmp10, didSettle: sharedValue2, settleDrawer, shouldOpenFromPosition, isPanelTouchActive, runOnJS: tmp4(tmp5[7]).runOnJS, noteInteraction, dragOffsetX: sharedValue, activationOffsetX: tmp9 };
    fn5.__workletHash = 1272825722136;
    fn5.__initData = num2;
    ({ gestureState: tmp10, didSettle: sharedValue2, settleDrawer, shouldOpenFromPosition, isPanelTouchActive, runOnJS: tmp4(tmp5[7]).runOnJS, noteInteraction, dragOffsetX: sharedValue, activationOffsetX: tmp9 });
    return onEndResult.onFinalize(fn5);
  }, items4);
  const first1 = tmp21(obj11.useState(() => ({ gesture: memo, panelStyles: animatedStyle, gestureState, panelX, panelTranslateX: derivedValue1, guildsBarDrawerStyle, guildsBarPullX: derivedValue3 })), 1)[0];
  const items5 = [first1, memo];
  const memo1 = obj11.useMemo(() => {
    const obj = { gesture: memo };
    const merged = Object.assign(first1);
    return obj;
  }, items5);
  const items6 = [memo1, enableHome, landOnHome];
  const obj17 = {
    gesture: memo,
    panelStyles: animatedStyle,
    homeDrawerContext: gestureState.useMemo(() => {
      const obj = { homeDrawerState: memo1, enableHome, landOnHome: tmp };
      return obj;
    }, items6)
  };
  return obj17;
};
export const HomeDrawerStateContext = context;
export const useHomeDrawerState = function useHomeDrawerState() {
  return react.useContext(context).homeDrawerState;
};
export const useIsHomeDrawerEnabled = function useIsHomeDrawerEnabled() {
  return react.useContext(context).enableHome;
};
export const useDoesLandOnHomeDrawer = function useDoesLandOnHomeDrawer() {
  return react.useContext(context).landOnHome;
};
