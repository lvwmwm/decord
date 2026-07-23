// Module ID: 15842
// Function ID: 122352
// Name: VoicePanelPIP
// Dependencies: [57, 31, 27, 1347, 10479, 4342, 10015, 10013, 15770, 10226, 33, 4542, 4130, 10014, 15774, 3991, 15769, 5217, 10019, 15776, 10233, 566, 3748, 10483, 10486, 8277, 1212, 7589, 15843, 15844, 5517, 15846, 4476, 2]

// Module 15842 (VoicePanelPIP)
import _slicedToArray from "_slicedToArray";
import importAllResult from "VoicePanelSecondaryPIPContent";
import get_ActivityIndicator from "module_7589";
import closure_7 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import withEqualityFn from "withEqualityFn";
import VoicePanelModes from "VoicePanelModes";
import { VoicePanelControlsModes } from "VoicePanelControlsModes";
import { VoicePanelPIPModes } from "VoicePanelPIPModes";
import { ActivityPanelModes } from "ActivityPanelModes";
import jsxProd from "set";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_15;
let closure_16;
const require = arg1;
function VoicePanelPIP() {
  let mainPIPGesture;
  let mainPIPWrapperStyles;
  let multiPIPWrapperStyles;
  let secondaryPIPGesture;
  let secondaryPIPWrapperStyles;
  let tmp = callback2();
  let context = importAllResult.useContext(pIPState(10014));
  let setMode = context.setMode;
  let obj = setMode(15774);
  pIPState = obj.usePIPState();
  ({ multiPIPWrapperStyles, mainPIPWrapperStyles, secondaryPIPWrapperStyles, mainPIPGesture, secondaryPIPGesture } = (function usePIPGesture(mode) {
    let closure_0 = mode;
    const tmp = outer1_20();
    let pIPState = tmp;
    const context = outer1_5.useContext(pIPState(10014));
    const controlsSpecs = context.controlsSpecs;
    const hideControls = context.hideControls;
    const pipAvoidanceSpecs = context.pipAvoidanceSpecs;
    const safeArea = context.safeArea;
    const setFocused = context.setFocused;
    const setMode = context.setMode;
    const showControls = context.showControls;
    const windowDimensions = context.windowDimensions;
    const wrapperDimensions = context.wrapperDimensions;
    const wrapperOffset = context.wrapperOffset;
    const channelId = context.channelId;
    let obj = setMode(15774);
    pIPState = obj.usePIPState();
    let obj1 = setMode(3991);
    const sharedValue = obj1.useSharedValue({ x: 0, y: 0, absoluteX: 0, absoluteY: 0, active: false, pressed: false });
    const sharedValue1 = setMode(3991).useSharedValue(0);
    let items = [sharedValue1];
    const effect = outer1_5.useEffect(() => {
      const timeout = setTimeout(() => {
        const result = outer1_15.set(1);
      }, 200);
      return () => {
        clearTimeout(closure_0);
      };
    }, items);
    let obj3 = setMode(3991);
    class U {
      constructor() {
        width = usePIPState.width;
        tmp = usePIPState;
        tmp2 = usePIPState.showSecondaryPIP ? tmp.containerHeight : tmp.height;
        obj = setMode(c3[16]);
        obj = { pipX: wrapperDimensions.get().pipX, pipY: wrapperDimensions.get().pipY, width, height: tmp2, windowDimensions: windowDimensions.get(), safeArea: safeArea.get(), bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom, topAvoidanceRegion: pipAvoidanceSpecs.get().top };
        value = undefined;
        if (closure_14.get().active) {
          tmp4 = closure_14;
          value = closure_14.get();
        }
        obj.positionOffset = value;
        clampedPIPPosition = obj.getClampedPIPPosition(obj);
        obj1 = { width, height: tmp2, opacity: closure_15.get() };
        ({ x, y } = clampedPIPPosition);
        obj2 = {};
        obj5 = setMode(c3[11]);
        obj2.translateX = obj5.withSpring(x, closure_14.get().active ? outer2_10 : outer2_17);
        items = [, ];
        items[0] = obj2;
        obj3 = {};
        obj7 = setMode(c3[11]);
        obj3.translateY = obj7.withSpring(y, closure_14.get().active ? outer2_10 : outer2_17);
        items[1] = obj3;
        obj1.transform = items;
        obj8 = setMode(c3[16]);
        obj1.borderRadius = obj8.getVoicePanelPIPBorderRadius(width, tmp2);
        return obj1;
      }
    }
    obj = { pipState: pIPState, getClampedPIPPosition: setMode(15769).getClampedPIPPosition, wrapperDimensions, windowDimensions, safeArea, pipAvoidanceSpecs, initialGestureOffset: sharedValue, opacity: sharedValue1, withSpring: setMode(4542).withSpring, DRAWER_SPRING_PHYSICS: outer1_10, LAYOUT_PHYSICS: outer1_17, getVoicePanelPIPBorderRadius: setMode(15769).getVoicePanelPIPBorderRadius };
    U.__closure = obj;
    U.__workletHash = 6729444248940;
    U.__initData = outer1_21;
    const animatedStyle = setMode(3991).useAnimatedStyle(U);
    let obj4 = setMode(3991);
    let fn = function j() {
      let height;
      let width;
      ({ width, height } = pIPState);
      const obj = { width, height, borderRadius: setMode(hideControls[16]).getVoicePanelPIPBorderRadius(width, height) };
      return obj;
    };
    obj = { pipState: pIPState, getVoicePanelPIPBorderRadius: setMode(15769).getVoicePanelPIPBorderRadius };
    fn.__closure = obj;
    fn.__workletHash = 1914976453427;
    fn.__initData = outer1_22;
    const items1 = [tmp, , ];
    ({ width: arr2[1], height: arr2[2] } = pIPState);
    const animatedStyle1 = setMode(3991).useAnimatedStyle(fn);
    const items2 = [sharedValue, safeArea, windowDimensions, wrapperDimensions, wrapperOffset];
    const memo = outer1_5.useMemo(() => {
      const items = [tmp.pipContentWrapper, , ];
      const obj = { width: pIPState.width, height: pIPState.height, borderRadius: setMode(hideControls[16]).getVoicePanelPIPBorderRadius(pIPState.width, pIPState.height) };
      items[1] = obj;
      items[2] = tmp.inAppElevationShadow;
      return items;
    }, items1);
    const callback = outer1_5.useCallback(() => {
      const Gesture = setMode(hideControls[17]).Gesture;
      const PanResult = Gesture.Pan();
      const enabledResult = Gesture.Pan().enabled(true);
      const manualActivationResult = Gesture.Pan().enabled(true).manualActivation(true);
      let result = Gesture.Pan().enabled(true).manualActivation(true).maxPointers(1).shouldCancelWhenOutside(false);
      const fn = function c(arg0) {
        const obj = { x: 0, y: 0, absoluteX: null, absoluteY: null, active: false, pressed: true };
        ({ absoluteX: obj.absoluteX, absoluteY: obj.absoluteY } = arg0);
        const result = outer1_14.set(obj);
      };
      let obj = { initialGestureOffset: sharedValue };
      fn.__closure = obj;
      fn.__workletHash = 4684366251999;
      fn.__initData = outer2_29;
      const maxPointersResult = Gesture.Pan().enabled(true).manualActivation(true).maxPointers(1);
      const fn2 = function l() {
        pIPState(10019)(outer1_14, { pressed: false });
      };
      obj = { updateSharedValueIfChanged: pIPState(hideControls[18]), initialGestureOffset: sharedValue };
      fn2.__closure = obj;
      fn2.__workletHash = 17295075038028;
      fn2.__initData = outer2_28;
      const onBeginResult = result.onBegin(fn);
      const fn3 = function u(state, activate) {
        let absoluteX;
        let absoluteY;
        if (state.state === setMode(5217).State.BEGAN) {
          if (!outer1_14.get().active) {
            ({ absoluteY, absoluteX } = state.changedTouches[0]);
            const _Math = Math;
            let tmp3 = Math.abs(outer1_14.get().absoluteX - absoluteX) > 10;
            if (!tmp3) {
              const _Math2 = Math;
              tmp3 = Math.abs(outer1_14.get().absoluteY - absoluteY) > 10;
            }
            if (tmp3) {
              const obj = { x: 0, y: 0, absoluteX, absoluteY, pressed: true, active: true };
              const result = outer1_14.set(obj);
              pIPState(10019)(outer1_11, { gestureActive: true, x: 0, y: 0 });
              activate.activate();
              setMode(3991).runOnJS(pIPState(15776))();
              const obj2 = setMode(3991);
            }
          }
        }
      };
      const onTouchesUpResult = result.onBegin(fn).onTouchesUp(fn2);
      fn3.__closure = { State: setMode(hideControls[17]).State, initialGestureOffset: sharedValue, MIN_GESTURE_START: 10, updateSharedValueIfChanged: pIPState(hideControls[18]), wrapperOffset, runOnJS: setMode(hideControls[15]).runOnJS, triggerIOSHaptic: pIPState(hideControls[19]) };
      fn3.__workletHash = 16714994610987;
      fn3.__initData = outer2_27;
      const obj1 = { State: setMode(hideControls[17]).State, initialGestureOffset: sharedValue, MIN_GESTURE_START: 10, updateSharedValueIfChanged: pIPState(hideControls[18]), wrapperOffset, runOnJS: setMode(hideControls[15]).runOnJS, triggerIOSHaptic: pIPState(hideControls[19]) };
      const fn4 = function o(arg0) {
        let absoluteX;
        let absoluteY;
        ({ absoluteX, absoluteY } = arg0);
        const obj = { x: absoluteX - outer1_14.get().absoluteX, y: absoluteY - outer1_14.get().absoluteY };
        pIPState(10019)(outer1_14, obj);
      };
      const onTouchesMoveResult = onTouchesUpResult.onTouchesMove(fn3);
      fn4.__closure = { updateSharedValueIfChanged: pIPState(hideControls[18]), initialGestureOffset: sharedValue };
      fn4.__workletHash = 7822444262980;
      fn4.__initData = outer2_26;
      let obj2 = { updateSharedValueIfChanged: pIPState(hideControls[18]), initialGestureOffset: sharedValue };
      const fn5 = function s(arg0) {
        let absoluteX;
        let absoluteY;
        let pipX;
        let pipY;
        let velocityX;
        let velocityY;
        ({ velocityX, velocityY, absoluteX, absoluteY } = arg0);
        let obj = setMode(15769);
        obj = { velocityX, velocityY, absoluteX, absoluteY, windowDimensions: outer1_9.get(), safeArea: outer1_5.get() };
        const result = obj.calculatePIPPositionFromVelocity(obj);
        ({ pipX, pipY } = result);
        pIPState(10019)(outer1_10, { pipX, pipY });
        pIPState(10019)(outer1_11, { gestureActive: false });
        pIPState(10019)(outer1_14, { active: false, pressed: false });
        setMode(3991).runOnJS(pIPState(10233).updateSourceTrackingView)();
      };
      const onChangeResult = onTouchesMoveResult.onChange(fn4);
      fn5.__closure = { calculatePIPPositionFromVelocity: setMode(hideControls[16]).calculatePIPPositionFromVelocity, windowDimensions, safeArea, updateSharedValueIfChanged: pIPState(hideControls[18]), wrapperDimensions, wrapperOffset, initialGestureOffset: sharedValue, runOnJS: setMode(hideControls[15]).runOnJS, updateSourceTrackingView: pIPState(hideControls[20]).updateSourceTrackingView };
      fn5.__workletHash = 1502716164658;
      fn5.__initData = outer2_25;
      const obj3 = { calculatePIPPositionFromVelocity: setMode(hideControls[16]).calculatePIPPositionFromVelocity, windowDimensions, safeArea, updateSharedValueIfChanged: pIPState(hideControls[18]), wrapperDimensions, wrapperOffset, initialGestureOffset: sharedValue, runOnJS: setMode(hideControls[15]).runOnJS, updateSourceTrackingView: pIPState(hideControls[20]).updateSourceTrackingView };
      const fn6 = function n() {
        pIPState(10019)(outer1_14, { active: false, pressed: false });
      };
      const onEndResult = onChangeResult.onEnd(fn5);
      fn6.__closure = { updateSharedValueIfChanged: pIPState(hideControls[18]), initialGestureOffset: sharedValue };
      fn6.__workletHash = 4606005866023;
      fn6.__initData = outer2_24;
      const obj4 = { updateSharedValueIfChanged: pIPState(hideControls[18]), initialGestureOffset: sharedValue };
      const fn7 = function t() {
        pIPState(10019)(outer1_14, { active: false, pressed: false });
      };
      const onTouchesCancelledResult = onEndResult.onTouchesCancelled(fn6);
      fn7.__closure = { updateSharedValueIfChanged: pIPState(hideControls[18]), initialGestureOffset: sharedValue };
      fn7.__workletHash = 5443656412422;
      fn7.__initData = outer2_23;
      return onTouchesCancelledResult.onFinalize(fn7);
    }, items2);
    const items3 = [controlsSpecs, hideControls, setFocused, showControls, mode, setMode, callback];
    const memo1 = outer1_5.useMemo(() => {
      const Gesture = setMode(hideControls[17]).Gesture;
      const Gesture2 = setMode(hideControls[17]).Gesture;
      const TapResult = Gesture2.Tap();
      const enabledResult = Gesture2.Tap().enabled(closure_0 !== outer2_13.IN_APP);
      const fn = function s() {
        setMode(3991).runOnJS(outer1_6)(null);
      };
      let obj = { runOnJS: setMode(hideControls[15]).runOnJS, setFocused };
      fn.__closure = obj;
      fn.__workletHash = 10703348418884;
      fn.__initData = outer2_30;
      const maxDistanceResult = Gesture2.Tap().enabled(closure_0 !== outer2_13.IN_APP).maxDistance(30);
      const onStartResult = Gesture2.Tap().enabled(closure_0 !== outer2_13.IN_APP).maxDistance(30).onStart(fn);
      const Gesture3 = setMode(hideControls[17]).Gesture;
      const numberOfTapsResult = Gesture2.Tap().enabled(closure_0 !== outer2_13.IN_APP).maxDistance(30).onStart(fn).numberOfTaps(2);
      const TapResult1 = Gesture3.Tap();
      const enabledResult1 = Gesture3.Tap().enabled(true);
      const fn2 = function n() {
        if (outer1_0 === outer3_13.IN_APP) {
          setMode(3991).runOnJS(outer1_7)(outer3_11.PANEL);
          const obj3 = setMode(3991);
        } else if (outer1_2.get().mode === outer3_12.HIDDEN) {
          setMode(3991).runOnJS(outer1_8)();
          const obj2 = setMode(3991);
        } else {
          setMode(3991).runOnJS(outer1_3)();
          const obj = setMode(3991);
        }
      };
      obj = { pipMode: closure_0, VoicePanelPIPModes: outer2_13, runOnJS: setMode(hideControls[15]).runOnJS, setMode, VoicePanelModes: outer2_11, controlsSpecs, VoicePanelControlsModes: outer2_12, showControls, hideControls };
      fn2.__closure = obj;
      fn2.__workletHash = 9532493963151;
      fn2.__initData = outer2_31;
      const maxDistanceResult1 = Gesture3.Tap().enabled(true).maxDistance(30);
      return Gesture.Exclusive(numberOfTapsResult, Gesture3.Tap().enabled(true).maxDistance(30).onStart(fn2), callback());
    }, items3);
    const obj6 = setMode(3991);
    const items4 = [outer1_7, outer1_8];
    const stateFromStoresObject = setMode(566).useStateFromStoresObject(items4, () => {
      const currentEmbeddedActivity = outer2_7.getCurrentEmbeddedActivity();
      let _location;
      let obj = setMode(hideControls[22]);
      if (null != currentEmbeddedActivity) {
        _location = currentEmbeddedActivity.location;
      }
      const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(_location);
      obj = { currentEmbeddedActivityIsNotInCurrentChannel: embeddedActivityLocationChannelId !== channelId, hasFrame: null != outer2_8.getConnectedFrame() };
      return obj;
    });
    const currentEmbeddedActivityIsNotInCurrentChannel = stateFromStoresObject.currentEmbeddedActivityIsNotInCurrentChannel;
    const hasFrame = stateFromStoresObject.hasFrame;
    const items5 = [currentEmbeddedActivityIsNotInCurrentChannel, hasFrame, setMode, setFocused];
    const callback1 = outer1_5.useCallback(() => {
      if (currentEmbeddedActivityIsNotInCurrentChannel) {
        setMode(outer2_11.PIP);
        setFocused(null);
      }
      if (hasFrame) {
        pIPState(hideControls[23]).updateFramePanelMode(outer2_14.PANEL);
        const obj2 = pIPState(hideControls[23]);
      } else {
        const result = first(hideControls[24]).updateActivityPanelMode(outer2_14.PANEL);
        const obj = first(hideControls[24]);
      }
    }, items5);
    obj1 = {
      multiPIPWrapperStyles: animatedStyle,
      mainPIPWrapperStyles: animatedStyle1,
      secondaryPIPWrapperStyles: memo,
      mainPIPGesture: memo1,
      secondaryPIPGesture: outer1_5.useMemo(() => {
        const Gesture = setMode(hideControls[17]).Gesture;
        const Gesture2 = setMode(hideControls[17]).Gesture;
        const TapResult = Gesture2.Tap();
        const fn = function t() {
          setMode(table[15]).runOnJS(outer1_19)();
        };
        const maxDistanceResult = Gesture2.Tap().maxDistance(30);
        fn.__closure = { runOnJS: setMode(hideControls[15]).runOnJS, handleSecondaryPIPTap: callback1 };
        fn.__workletHash = 8361527940381;
        fn.__initData = outer2_32;
        const obj = { runOnJS: setMode(hideControls[15]).runOnJS, handleSecondaryPIPTap: callback1 };
        return Gesture.Exclusive(maxDistanceResult.onStart(fn), callback());
      }, items6)
    };
    items6 = [callback, callback1];
    return obj1;
  })(pIPState.mode));
  let pushToTalk = pIPState(8277)(context.controlsSpecs).pushToTalk;
  const tmp5 = stateFromStoresObject(importAllResult.useState(null != pIPState.mode), 2);
  const first = tmp5[0];
  const dependencyMap = tmp5[1];
  let items = [pIPState.mode, first];
  let effect = importAllResult.useEffect(() => {
    if (!tmp) {
      dependencyMap(true);
    }
  }, items);
  let tmp18Result = null != pIPState.mode || first;
  let obj1 = setMode(566);
  let items1 = [_isNativeReflectConstruct];
  stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => null != outer1_8.getConnectedFrame());
  let obj2 = setMode(3991);
  class Z {
    constructor() {
      obj = {};
      obj2 = setMode(c3[16]);
      obj.borderRadius = obj2.getVoicePanelPIPBorderRadius(closure_1.width, closure_1.height);
      return obj;
    }
  }
  obj = { getVoicePanelPIPBorderRadius: setMode(15769).getVoicePanelPIPBorderRadius, pipState: pIPState };
  Z.__closure = obj;
  Z.__workletHash = 9598016909682;
  Z.__initData = closure_33;
  let animatedStyle = obj2.useAnimatedStyle(Z);
  let items2 = [setMode];
  let memo = importAllResult.useMemo(() => {
    const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "button" };
    const intl = setMode(1212).intl;
    obj.accessibilityLabel = intl.string(setMode(1212).t.oN8bqe);
    const items = [{ name: "activate" }];
    obj.accessibilityActions = items;
    obj.onAccessibilityAction = function onAccessibilityAction() {
      outer1_0(outer2_11.PANEL);
    };
    return obj;
  }, items2);
  let items3 = [stateFromStoresObject];
  let memo1 = importAllResult.useMemo(() => {
    let obj = { accessible: true };
    const intl = setMode(1212).intl;
    obj.accessibilityLabel = intl.string(setMode(1212).t["3ejJer"]);
    const items = [{ name: "activate" }];
    obj.accessibilityActions = items;
    obj.onAccessibilityAction = function onAccessibilityAction() {
      if (outer1_4) {
        pIPState(10483).updateFramePanelMode(outer2_14.PANEL);
        const obj2 = pIPState(10483);
      } else {
        const result = first(10486).updateActivityPanelMode(outer2_14.PANEL);
        const obj = first(10486);
      }
    };
    return obj;
  }, items3);
  if (pushToTalk) {
    pushToTalk = pIPState.mode !== VoicePanelPIPModes.IN_PANEL || tmp13;
    const tmp15 = pIPState.mode !== VoicePanelPIPModes.IN_PANEL || tmp13;
  }
  obj = { pointerEvents: "box-none", style: items4, layout: closure_19 };
  items4 = [tmp.multiPIPContainer, multiPIPWrapperStyles];
  const tmp16 = closure_16;
  const tmp4 = (function usePIPGesture(mode) {
    let closure_0 = mode;
    const tmp = outer1_20();
    let pIPState = tmp;
    const context = outer1_5.useContext(pIPState(10014));
    const controlsSpecs = context.controlsSpecs;
    const hideControls = context.hideControls;
    const pipAvoidanceSpecs = context.pipAvoidanceSpecs;
    const safeArea = context.safeArea;
    const setFocused = context.setFocused;
    const setMode = context.setMode;
    const showControls = context.showControls;
    const windowDimensions = context.windowDimensions;
    const wrapperDimensions = context.wrapperDimensions;
    const wrapperOffset = context.wrapperOffset;
    const channelId = context.channelId;
    let obj = setMode(15774);
    pIPState = obj.usePIPState();
    let obj1 = setMode(3991);
    const sharedValue = obj1.useSharedValue({ x: 0, y: 0, absoluteX: 0, absoluteY: 0, active: false, pressed: false });
    const sharedValue1 = setMode(3991).useSharedValue(0);
    let items = [sharedValue1];
    const effect = outer1_5.useEffect(() => {
      const timeout = setTimeout(() => {
        const result = outer1_15.set(1);
      }, 200);
      return () => {
        clearTimeout(closure_0);
      };
    }, items);
    let obj3 = setMode(3991);
    class U {
      constructor() {
        width = usePIPState.width;
        tmp = usePIPState;
        tmp2 = usePIPState.showSecondaryPIP ? tmp.containerHeight : tmp.height;
        obj = setMode(c3[16]);
        obj = { pipX: wrapperDimensions.get().pipX, pipY: wrapperDimensions.get().pipY, width, height: tmp2, windowDimensions: windowDimensions.get(), safeArea: safeArea.get(), bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom, topAvoidanceRegion: pipAvoidanceSpecs.get().top };
        value = undefined;
        if (closure_14.get().active) {
          tmp4 = closure_14;
          value = closure_14.get();
        }
        obj.positionOffset = value;
        clampedPIPPosition = obj.getClampedPIPPosition(obj);
        obj1 = { width, height: tmp2, opacity: closure_15.get() };
        ({ x, y } = clampedPIPPosition);
        obj2 = {};
        obj5 = setMode(c3[11]);
        obj2.translateX = obj5.withSpring(x, closure_14.get().active ? outer2_10 : outer2_17);
        items = [, ];
        items[0] = obj2;
        obj3 = {};
        obj7 = setMode(c3[11]);
        obj3.translateY = obj7.withSpring(y, closure_14.get().active ? outer2_10 : outer2_17);
        items[1] = obj3;
        obj1.transform = items;
        obj8 = setMode(c3[16]);
        obj1.borderRadius = obj8.getVoicePanelPIPBorderRadius(width, tmp2);
        return obj1;
      }
    }
    obj = { pipState: pIPState, getClampedPIPPosition: setMode(15769).getClampedPIPPosition, wrapperDimensions, windowDimensions, safeArea, pipAvoidanceSpecs, initialGestureOffset: sharedValue, opacity: sharedValue1, withSpring: setMode(4542).withSpring, DRAWER_SPRING_PHYSICS: outer1_10, LAYOUT_PHYSICS: outer1_17, getVoicePanelPIPBorderRadius: setMode(15769).getVoicePanelPIPBorderRadius };
    U.__closure = obj;
    U.__workletHash = 6729444248940;
    U.__initData = outer1_21;
    const animatedStyle = setMode(3991).useAnimatedStyle(U);
    let obj4 = setMode(3991);
    let fn = function j() {
      let height;
      let width;
      ({ width, height } = pIPState);
      const obj = { width, height, borderRadius: setMode(hideControls[16]).getVoicePanelPIPBorderRadius(width, height) };
      return obj;
    };
    obj = { pipState: pIPState, getVoicePanelPIPBorderRadius: setMode(15769).getVoicePanelPIPBorderRadius };
    fn.__closure = obj;
    fn.__workletHash = 1914976453427;
    fn.__initData = outer1_22;
    const items1 = [tmp, , ];
    ({ width: arr2[1], height: arr2[2] } = pIPState);
    const animatedStyle1 = setMode(3991).useAnimatedStyle(fn);
    const items2 = [sharedValue, safeArea, windowDimensions, wrapperDimensions, wrapperOffset];
    const memo = outer1_5.useMemo(() => {
      const items = [tmp.pipContentWrapper, , ];
      const obj = { width: pIPState.width, height: pIPState.height, borderRadius: setMode(hideControls[16]).getVoicePanelPIPBorderRadius(pIPState.width, pIPState.height) };
      items[1] = obj;
      items[2] = tmp.inAppElevationShadow;
      return items;
    }, items1);
    const callback = outer1_5.useCallback(() => {
      const Gesture = setMode(hideControls[17]).Gesture;
      const PanResult = Gesture.Pan();
      const enabledResult = Gesture.Pan().enabled(true);
      const manualActivationResult = Gesture.Pan().enabled(true).manualActivation(true);
      let result = Gesture.Pan().enabled(true).manualActivation(true).maxPointers(1).shouldCancelWhenOutside(false);
      const fn = function c(arg0) {
        const obj = { x: 0, y: 0, absoluteX: null, absoluteY: null, active: false, pressed: true };
        ({ absoluteX: obj.absoluteX, absoluteY: obj.absoluteY } = arg0);
        const result = outer1_14.set(obj);
      };
      let obj = { initialGestureOffset: sharedValue };
      fn.__closure = obj;
      fn.__workletHash = 4684366251999;
      fn.__initData = outer2_29;
      const maxPointersResult = Gesture.Pan().enabled(true).manualActivation(true).maxPointers(1);
      const fn2 = function l() {
        pIPState(10019)(outer1_14, { pressed: false });
      };
      obj = { updateSharedValueIfChanged: pIPState(hideControls[18]), initialGestureOffset: sharedValue };
      fn2.__closure = obj;
      fn2.__workletHash = 17295075038028;
      fn2.__initData = outer2_28;
      const onBeginResult = result.onBegin(fn);
      const fn3 = function u(state, activate) {
        let absoluteX;
        let absoluteY;
        if (state.state === setMode(5217).State.BEGAN) {
          if (!outer1_14.get().active) {
            ({ absoluteY, absoluteX } = state.changedTouches[0]);
            const _Math = Math;
            let tmp3 = Math.abs(outer1_14.get().absoluteX - absoluteX) > 10;
            if (!tmp3) {
              const _Math2 = Math;
              tmp3 = Math.abs(outer1_14.get().absoluteY - absoluteY) > 10;
            }
            if (tmp3) {
              const obj = { x: 0, y: 0, absoluteX, absoluteY, pressed: true, active: true };
              const result = outer1_14.set(obj);
              pIPState(10019)(outer1_11, { gestureActive: true, x: 0, y: 0 });
              activate.activate();
              setMode(3991).runOnJS(pIPState(15776))();
              const obj2 = setMode(3991);
            }
          }
        }
      };
      const onTouchesUpResult = result.onBegin(fn).onTouchesUp(fn2);
      fn3.__closure = { State: setMode(hideControls[17]).State, initialGestureOffset: sharedValue, MIN_GESTURE_START: 10, updateSharedValueIfChanged: pIPState(hideControls[18]), wrapperOffset, runOnJS: setMode(hideControls[15]).runOnJS, triggerIOSHaptic: pIPState(hideControls[19]) };
      fn3.__workletHash = 16714994610987;
      fn3.__initData = outer2_27;
      const obj1 = { State: setMode(hideControls[17]).State, initialGestureOffset: sharedValue, MIN_GESTURE_START: 10, updateSharedValueIfChanged: pIPState(hideControls[18]), wrapperOffset, runOnJS: setMode(hideControls[15]).runOnJS, triggerIOSHaptic: pIPState(hideControls[19]) };
      const fn4 = function o(arg0) {
        let absoluteX;
        let absoluteY;
        ({ absoluteX, absoluteY } = arg0);
        const obj = { x: absoluteX - outer1_14.get().absoluteX, y: absoluteY - outer1_14.get().absoluteY };
        pIPState(10019)(outer1_14, obj);
      };
      const onTouchesMoveResult = onTouchesUpResult.onTouchesMove(fn3);
      fn4.__closure = { updateSharedValueIfChanged: pIPState(hideControls[18]), initialGestureOffset: sharedValue };
      fn4.__workletHash = 7822444262980;
      fn4.__initData = outer2_26;
      let obj2 = { updateSharedValueIfChanged: pIPState(hideControls[18]), initialGestureOffset: sharedValue };
      const fn5 = function s(arg0) {
        let absoluteX;
        let absoluteY;
        let pipX;
        let pipY;
        let velocityX;
        let velocityY;
        ({ velocityX, velocityY, absoluteX, absoluteY } = arg0);
        let obj = setMode(15769);
        obj = { velocityX, velocityY, absoluteX, absoluteY, windowDimensions: outer1_9.get(), safeArea: outer1_5.get() };
        const result = obj.calculatePIPPositionFromVelocity(obj);
        ({ pipX, pipY } = result);
        pIPState(10019)(outer1_10, { pipX, pipY });
        pIPState(10019)(outer1_11, { gestureActive: false });
        pIPState(10019)(outer1_14, { active: false, pressed: false });
        setMode(3991).runOnJS(pIPState(10233).updateSourceTrackingView)();
      };
      const onChangeResult = onTouchesMoveResult.onChange(fn4);
      fn5.__closure = { calculatePIPPositionFromVelocity: setMode(hideControls[16]).calculatePIPPositionFromVelocity, windowDimensions, safeArea, updateSharedValueIfChanged: pIPState(hideControls[18]), wrapperDimensions, wrapperOffset, initialGestureOffset: sharedValue, runOnJS: setMode(hideControls[15]).runOnJS, updateSourceTrackingView: pIPState(hideControls[20]).updateSourceTrackingView };
      fn5.__workletHash = 1502716164658;
      fn5.__initData = outer2_25;
      const obj3 = { calculatePIPPositionFromVelocity: setMode(hideControls[16]).calculatePIPPositionFromVelocity, windowDimensions, safeArea, updateSharedValueIfChanged: pIPState(hideControls[18]), wrapperDimensions, wrapperOffset, initialGestureOffset: sharedValue, runOnJS: setMode(hideControls[15]).runOnJS, updateSourceTrackingView: pIPState(hideControls[20]).updateSourceTrackingView };
      const fn6 = function n() {
        pIPState(10019)(outer1_14, { active: false, pressed: false });
      };
      const onEndResult = onChangeResult.onEnd(fn5);
      fn6.__closure = { updateSharedValueIfChanged: pIPState(hideControls[18]), initialGestureOffset: sharedValue };
      fn6.__workletHash = 4606005866023;
      fn6.__initData = outer2_24;
      const obj4 = { updateSharedValueIfChanged: pIPState(hideControls[18]), initialGestureOffset: sharedValue };
      const fn7 = function t() {
        pIPState(10019)(outer1_14, { active: false, pressed: false });
      };
      const onTouchesCancelledResult = onEndResult.onTouchesCancelled(fn6);
      fn7.__closure = { updateSharedValueIfChanged: pIPState(hideControls[18]), initialGestureOffset: sharedValue };
      fn7.__workletHash = 5443656412422;
      fn7.__initData = outer2_23;
      return onTouchesCancelledResult.onFinalize(fn7);
    }, items2);
    const items3 = [controlsSpecs, hideControls, setFocused, showControls, mode, setMode, callback];
    const memo1 = outer1_5.useMemo(() => {
      const Gesture = setMode(hideControls[17]).Gesture;
      const Gesture2 = setMode(hideControls[17]).Gesture;
      const TapResult = Gesture2.Tap();
      const enabledResult = Gesture2.Tap().enabled(closure_0 !== outer2_13.IN_APP);
      const fn = function s() {
        setMode(3991).runOnJS(outer1_6)(null);
      };
      let obj = { runOnJS: setMode(hideControls[15]).runOnJS, setFocused };
      fn.__closure = obj;
      fn.__workletHash = 10703348418884;
      fn.__initData = outer2_30;
      const maxDistanceResult = Gesture2.Tap().enabled(closure_0 !== outer2_13.IN_APP).maxDistance(30);
      const onStartResult = Gesture2.Tap().enabled(closure_0 !== outer2_13.IN_APP).maxDistance(30).onStart(fn);
      const Gesture3 = setMode(hideControls[17]).Gesture;
      const numberOfTapsResult = Gesture2.Tap().enabled(closure_0 !== outer2_13.IN_APP).maxDistance(30).onStart(fn).numberOfTaps(2);
      const TapResult1 = Gesture3.Tap();
      const enabledResult1 = Gesture3.Tap().enabled(true);
      const fn2 = function n() {
        if (outer1_0 === outer3_13.IN_APP) {
          setMode(3991).runOnJS(outer1_7)(outer3_11.PANEL);
          const obj3 = setMode(3991);
        } else if (outer1_2.get().mode === outer3_12.HIDDEN) {
          setMode(3991).runOnJS(outer1_8)();
          const obj2 = setMode(3991);
        } else {
          setMode(3991).runOnJS(outer1_3)();
          const obj = setMode(3991);
        }
      };
      obj = { pipMode: closure_0, VoicePanelPIPModes: outer2_13, runOnJS: setMode(hideControls[15]).runOnJS, setMode, VoicePanelModes: outer2_11, controlsSpecs, VoicePanelControlsModes: outer2_12, showControls, hideControls };
      fn2.__closure = obj;
      fn2.__workletHash = 9532493963151;
      fn2.__initData = outer2_31;
      const maxDistanceResult1 = Gesture3.Tap().enabled(true).maxDistance(30);
      return Gesture.Exclusive(numberOfTapsResult, Gesture3.Tap().enabled(true).maxDistance(30).onStart(fn2), callback());
    }, items3);
    const obj6 = setMode(3991);
    const items4 = [outer1_7, outer1_8];
    const stateFromStoresObject = setMode(566).useStateFromStoresObject(items4, () => {
      const currentEmbeddedActivity = outer2_7.getCurrentEmbeddedActivity();
      let _location;
      let obj = setMode(hideControls[22]);
      if (null != currentEmbeddedActivity) {
        _location = currentEmbeddedActivity.location;
      }
      const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(_location);
      obj = { currentEmbeddedActivityIsNotInCurrentChannel: embeddedActivityLocationChannelId !== channelId, hasFrame: null != outer2_8.getConnectedFrame() };
      return obj;
    });
    const currentEmbeddedActivityIsNotInCurrentChannel = stateFromStoresObject.currentEmbeddedActivityIsNotInCurrentChannel;
    const hasFrame = stateFromStoresObject.hasFrame;
    const items5 = [currentEmbeddedActivityIsNotInCurrentChannel, hasFrame, setMode, setFocused];
    const callback1 = outer1_5.useCallback(() => {
      if (currentEmbeddedActivityIsNotInCurrentChannel) {
        setMode(outer2_11.PIP);
        setFocused(null);
      }
      if (hasFrame) {
        pIPState(hideControls[23]).updateFramePanelMode(outer2_14.PANEL);
        const obj2 = pIPState(hideControls[23]);
      } else {
        const result = first(hideControls[24]).updateActivityPanelMode(outer2_14.PANEL);
        const obj = first(hideControls[24]);
      }
    }, items5);
    obj1 = {
      multiPIPWrapperStyles: animatedStyle,
      mainPIPWrapperStyles: animatedStyle1,
      secondaryPIPWrapperStyles: memo,
      mainPIPGesture: memo1,
      secondaryPIPGesture: outer1_5.useMemo(() => {
        const Gesture = setMode(hideControls[17]).Gesture;
        const Gesture2 = setMode(hideControls[17]).Gesture;
        const TapResult = Gesture2.Tap();
        const fn = function t() {
          setMode(table[15]).runOnJS(outer1_19)();
        };
        const maxDistanceResult = Gesture2.Tap().maxDistance(30);
        fn.__closure = { runOnJS: setMode(hideControls[15]).runOnJS, handleSecondaryPIPTap: callback1 };
        fn.__workletHash = 8361527940381;
        fn.__initData = outer2_32;
        const obj = { runOnJS: setMode(hideControls[15]).runOnJS, handleSecondaryPIPTap: callback1 };
        return Gesture.Exclusive(maxDistanceResult.onStart(fn), callback());
      }, items6)
    };
    items6 = [callback, callback1];
    return obj1;
  })(pIPState.mode);
  if (tmp18Result) {
    obj1 = {};
    let items5 = [, , ];
    ({ pipContentWrapper: arr6[0], inAppElevationShadow: arr6[1] } = tmp);
    items5[2] = mainPIPWrapperStyles;
    obj1.style = items5;
    obj1.pointerEvents = "box-none";
    obj1.layout = closure_19;
    const merged = Object.assign(memo);
    obj2 = { gesture: mainPIPGesture };
    let obj3 = {};
    let items6 = [tmp.pipMask, animatedStyle];
    obj3.style = items6;
    obj3.layout = closure_19;
    const tmp18 = closure_16;
    const tmp21 = pIPState(7589);
    obj3.children = callback(pIPState(15843), {});
    obj2.children = callback(pIPState(7589), obj3);
    const items7 = [callback(setMode(5217).GestureDetector, obj2), ];
    let tmp32 = null;
    if (pushToTalk) {
      tmp32 = callback(pIPState(15844), {});
    }
    items7[1] = tmp32;
    obj1["children"] = items7;
    tmp18Result = tmp18(tmp21, obj1);
    const tmp29 = pIPState(7589);
  }
  const items8 = [tmp18Result, ];
  let showSecondaryPIP = pIPState.showSecondaryPIP;
  if (showSecondaryPIP) {
    let obj4 = { style: secondaryPIPWrapperStyles };
    const merged1 = Object.assign(memo1);
    let obj5 = {};
    const items9 = [tmp.pipMask, animatedStyle];
    obj5.style = items9;
    const tmp39 = pIPState(5517);
    let obj6 = { gesture: secondaryPIPGesture };
    let obj7 = { style: StyleSheet.absoluteFill };
    const tmp44 = pIPState(7589);
    obj7.children = callback(pIPState(15846), {});
    obj6.children = callback(pIPState(5517), obj7);
    obj5.children = callback(setMode(5217).GestureDetector, obj6);
    obj4["children"] = callback(tmp44, obj5);
    showSecondaryPIP = callback(tmp39, obj4);
    const tmp48 = pIPState(5517);
  }
  items8[1] = showSecondaryPIP;
  obj.children = items8;
  return tmp16(pIPState(7589), obj);
}
function renderPIPWrapper(arg0, pipMode, transitionState, transitionCleanUp) {
  return callback(closure_36, { pipMode: pipMode.pipMode, transitionState, transitionCleanUp }, arg0);
}
const StyleSheet = get_ActivityIndicator.StyleSheet;
({ DRAWER_SPRING_PHYSICS: closure_10, VoicePanelModes: closure_11 } = VoicePanelModes);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let closure_17 = { mass: 0.3, damping: 80, stiffness: 150 };
let closure_18 = { code: "function layoutTransition_VoicePanelPIPTsx1(values){const{withSpring,LAYOUT_PHYSICS}=this.__closure;return{animations:{originX:withSpring(values.targetOriginX,LAYOUT_PHYSICS),originY:withSpring(values.targetOriginY,LAYOUT_PHYSICS),width:withSpring(values.targetWidth,LAYOUT_PHYSICS),height:withSpring(values.targetHeight,LAYOUT_PHYSICS)},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};}" };
let closure_19 = (() => {
  function layoutTransition(originX) {
    let obj = {};
    obj = { originX: outer1_0(outer1_3[11]).withSpring(originX.targetOriginX, outer1_17) };
    const obj3 = outer1_0(outer1_3[11]);
    obj.originY = outer1_0(outer1_3[11]).withSpring(originX.targetOriginY, outer1_17);
    const obj4 = outer1_0(outer1_3[11]);
    obj.width = outer1_0(outer1_3[11]).withSpring(originX.targetWidth, outer1_17);
    const obj5 = outer1_0(outer1_3[11]);
    obj.height = outer1_0(outer1_3[11]).withSpring(originX.targetHeight, outer1_17);
    obj.animations = obj;
    obj.initialValues = { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight };
    return obj;
  }
  layoutTransition.__closure = { withSpring: require(4542) /* withSpring */.withSpring, LAYOUT_PHYSICS: closure_17 };
  layoutTransition.__workletHash = 9346092352642;
  layoutTransition.__initData = closure_18;
  return layoutTransition;
})();
let obj = { pipContentWrapper: { backgroundColor: "black" }, inAppElevationShadow: {} };
obj = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj["overflow"] = "hidden";
obj.pipMask = obj;
_createForOfIteratorHelperLoose = { position: "absolute", zIndex: 10, flexDirection: "column", alignItems: "center", gap: VoicePanelModes.SECONDARY_PIP_TOP_MARGIN };
obj.multiPIPContainer = _createForOfIteratorHelperLoose;
let closure_20 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_21 = { code: "function VoicePanelPIPTsx2(){const{pipState,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,initialGestureOffset,opacity,withSpring,DRAWER_SPRING_PHYSICS,LAYOUT_PHYSICS,getVoicePanelPIPBorderRadius}=this.__closure;const width=pipState.width;const height=!pipState.showSecondaryPIP?pipState.height:pipState.containerHeight;const{x:x,y:y}=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:width,height:height,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top,positionOffset:initialGestureOffset.get().active?initialGestureOffset.get():undefined});return{width:width,height:height,opacity:opacity.get(),transform:[{translateX:withSpring(x,initialGestureOffset.get().active?DRAWER_SPRING_PHYSICS:LAYOUT_PHYSICS)},{translateY:withSpring(y,initialGestureOffset.get().active?DRAWER_SPRING_PHYSICS:LAYOUT_PHYSICS)}],borderRadius:getVoicePanelPIPBorderRadius(width,height)};}" };
let closure_22 = { code: "function VoicePanelPIPTsx3(){const{pipState,getVoicePanelPIPBorderRadius}=this.__closure;const{width:width,height:height}=pipState;return{width:width,height:height,borderRadius:getVoicePanelPIPBorderRadius(width,height)};}" };
let closure_23 = { code: "function VoicePanelPIPTsx4(){const{updateSharedValueIfChanged,initialGestureOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false,pressed:false});}" };
let closure_24 = { code: "function VoicePanelPIPTsx5(){const{updateSharedValueIfChanged,initialGestureOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false,pressed:false});}" };
let closure_25 = { code: "function VoicePanelPIPTsx6({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY}){const{calculatePIPPositionFromVelocity,windowDimensions,safeArea,updateSharedValueIfChanged,wrapperDimensions,wrapperOffset,initialGestureOffset,runOnJS,updateSourceTrackingView}=this.__closure;const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions.get(),safeArea:safeArea.get()});updateSharedValueIfChanged(wrapperDimensions,{pipX:pipX,pipY:pipY});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});updateSharedValueIfChanged(initialGestureOffset,{active:false,pressed:false});runOnJS(updateSourceTrackingView)();}" };
let closure_26 = { code: "function VoicePanelPIPTsx7({absoluteX:absoluteX,absoluteY:absoluteY}){const{updateSharedValueIfChanged,initialGestureOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{x:absoluteX-initialGestureOffset.get().absoluteX,y:absoluteY-initialGestureOffset.get().absoluteY});}" };
let closure_27 = { code: "function VoicePanelPIPTsx8(event,manager){const{State,initialGestureOffset,MIN_GESTURE_START,updateSharedValueIfChanged,wrapperOffset,runOnJS,triggerIOSHaptic}=this.__closure;if(event.state!==State.BEGAN||initialGestureOffset.get().active)return;const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];if(Math.abs(initialGestureOffset.get().absoluteX-absoluteX)>MIN_GESTURE_START||Math.abs(initialGestureOffset.get().absoluteY-absoluteY)>MIN_GESTURE_START){initialGestureOffset.set({x:0,y:0,absoluteX:absoluteX,absoluteY:absoluteY,pressed:true,active:true});updateSharedValueIfChanged(wrapperOffset,{gestureActive:true,x:0,y:0});manager.activate();runOnJS(triggerIOSHaptic)();}}" };
let closure_28 = { code: "function VoicePanelPIPTsx9(){const{updateSharedValueIfChanged,initialGestureOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{pressed:false});}" };
let closure_29 = { code: "function VoicePanelPIPTsx10({absoluteX:absoluteX,absoluteY:absoluteY}){const{initialGestureOffset}=this.__closure;initialGestureOffset.set({x:0,y:0,absoluteX:absoluteX,absoluteY:absoluteY,active:false,pressed:true});}" };
let closure_30 = { code: "function VoicePanelPIPTsx11(){const{runOnJS,setFocused}=this.__closure;runOnJS(setFocused)(null);}" };
let closure_31 = { code: "function VoicePanelPIPTsx12(){const{pipMode,VoicePanelPIPModes,runOnJS,setMode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,showControls,hideControls}=this.__closure;if(pipMode===VoicePanelPIPModes.IN_APP){runOnJS(setMode)(VoicePanelModes.PANEL);}else{if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){runOnJS(showControls)();}else{runOnJS(hideControls)();}}}" };
let closure_32 = { code: "function VoicePanelPIPTsx13(){const{runOnJS,handleSecondaryPIPTap}=this.__closure;runOnJS(handleSecondaryPIPTap)();}" };
let closure_33 = { code: "function VoicePanelPIPTsx14(){const{getVoicePanelPIPBorderRadius,pipState}=this.__closure;return{borderRadius:getVoicePanelPIPBorderRadius(pipState.width,pipState.height)};}" };
let closure_34 = { code: "function VoicePanelPIPTsx15(){const{transitionState,TransitionStates,panelCardStillInPIP}=this.__closure;return transitionState===TransitionStates.YEETED&&!panelCardStillInPIP.get();}" };
let closure_35 = { code: "function VoicePanelPIPTsx16(ready,prev){const{runOnJS,fireCleanup}=this.__closure;if(ready&&prev!==ready){runOnJS(fireCleanup)();}}" };
let closure_36 = importAllResult.memo((transitionState) => {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  let closure_2;
  let dependencyMap;
  let callback;
  let panelCardStillInPIP;
  let tmp2 = transitionState.pipMode === VoicePanelPIPModes.IN_PANEL;
  if (!tmp2) {
    tmp2 = transitionState === transitionState(4476).TransitionStates.MOUNTED;
  }
  const tmp5 = callback(panelCardStillInPIP.useState(tmp2), 2);
  closure_2 = tmp5[1];
  const effect = panelCardStillInPIP.useEffect(() => {
    const timeout = setTimeout(() => outer1_2(true), 400);
    return () => {
      clearTimeout(closure_0);
    };
  }, []);
  let tmp7 = null;
  dependencyMap = panelCardStillInPIP.useRef(null);
  const items = [transitionCleanUp];
  callback = panelCardStillInPIP.useCallback(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
    transitionCleanUp();
  }, items);
  const items1 = [transitionState, callback];
  const effect1 = panelCardStillInPIP.useEffect(() => {
    if (transitionState === transitionState(ref[32]).TransitionStates.YEETED) {
      const _setTimeout = setTimeout;
      ref.current = setTimeout(callback, 500);
      return () => {
        if (null != outer1_3.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(outer1_3.current);
          outer1_3.current = null;
        }
      };
    }
  }, items1);
  panelCardStillInPIP = panelCardStillInPIP.useContext(transitionCleanUp(10014)).panelCardStillInPIP;
  let obj = transitionState(3991);
  class I {
    constructor() {
      tmp = transitionState === transitionState(useRef[32]).TransitionStates.YEETED;
      if (tmp) {
        tmp2 = panelCardStillInPIP;
        tmp = !panelCardStillInPIP.get();
      }
      return tmp;
    }
  }
  obj = { transitionState, TransitionStates: transitionState(4476).TransitionStates, panelCardStillInPIP };
  I.__closure = obj;
  I.__workletHash = 10653972388666;
  I.__initData = closure_34;
  const fn = function f(arg0, arg1) {
    let tmp = arg0;
    if (arg0) {
      tmp = arg1 !== arg0;
    }
    if (tmp) {
      transitionState(ref[15]).runOnJS(callback)();
      const obj = transitionState(ref[15]);
    }
  };
  obj = { runOnJS: transitionState(3991).runOnJS, fireCleanup: callback };
  fn.__closure = obj;
  fn.__workletHash = 1599147342710;
  fn.__initData = closure_35;
  const animatedReaction = obj.useAnimatedReaction(I, fn);
  if (tmp5[0]) {
    tmp7 = callback(VoicePanelPIP, {});
  }
  return tmp7;
});
const memoResult = importAllResult.memo(function VoicePanelPIPWrapper() {
  let obj = require(15774) /* context */;
  const pIPState = obj.usePIPState();
  const mode = pIPState.mode;
  obj = {};
  if (null != mode) {
    obj = { pipMode: mode };
    const tmp3 = obj;
  }
  obj.item = tmp3;
  obj.renderItem = renderPIPWrapper;
  return closure_15(require(4476) /* _createForOfIteratorHelperLoose */.TransitionItem, obj);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIP.tsx");

export default memoResult;
