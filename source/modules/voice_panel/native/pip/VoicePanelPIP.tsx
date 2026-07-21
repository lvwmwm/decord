// Module ID: 15717
// Function ID: 120136
// Name: VoicePanelPIP
// Dependencies: []

// Module 15717 (VoicePanelPIP)
function VoicePanelPIP() {
  let mainPIPGesture;
  let mainPIPWrapperStyles;
  let multiPIPWrapperStyles;
  let secondaryPIPGesture;
  let secondaryPIPWrapperStyles;
  const tmp = callback3();
  const context = importAllResult.useContext(importDefault(closure_3[13]));
  const setMode = context.setMode;
  const arg1 = setMode;
  let obj = arg1(closure_3[14]);
  const pIPState = obj.usePIPState();
  const importDefault = pIPState;
  ({ multiPIPWrapperStyles, mainPIPWrapperStyles, secondaryPIPWrapperStyles, mainPIPGesture, secondaryPIPGesture } = function usePIPGesture(mode) {
    let setMode = mode;
    const tmp = callback2();
    let pIPState = tmp;
    const context = safeArea.useContext(pIPState(closure_3[13]));
    const controlsSpecs = context.controlsSpecs;
    const first = controlsSpecs;
    const hideControls = context.hideControls;
    closure_3 = hideControls;
    const pipAvoidanceSpecs = context.pipAvoidanceSpecs;
    let stateFromStoresObject = pipAvoidanceSpecs;
    const safeArea = context.safeArea;
    const setFocused = context.setFocused;
    setMode = context.setMode;
    const showControls = context.showControls;
    const windowDimensions = context.windowDimensions;
    const wrapperDimensions = context.wrapperDimensions;
    const wrapperOffset = context.wrapperOffset;
    const channelId = context.channelId;
    let obj = setMode(closure_3[14]);
    pIPState = obj.usePIPState();
    let obj1 = setMode(closure_3[15]);
    const sharedValue = obj1.useSharedValue({ -604054531: "<string:3628173623>", -603923457: "<string:240518207>", -1505188281: "<string:3818762797>", -603792383: "<string:3848286783>", -603661309: "<string:4191888080>", -603530235: "<string:3332915134>" });
    const sharedValue1 = setMode(closure_3[15]).useSharedValue(0);
    const items = [sharedValue1];
    const effect = safeArea.useEffect(() => {
      const timeout = setTimeout(() => {
        const result = closure_15.set(1);
      }, 200);
      return () => {
        clearTimeout(closure_0);
      };
    }, items);
    const obj3 = setMode(closure_3[15]);
    class U {
      constructor() {
        width = usePIPState.width;
        tmp = usePIPState;
        tmp2 = usePIPState.showSecondaryPIP ? tmp.containerHeight : tmp.height;
        obj = mode(hideControls[16]);
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
        obj5 = mode(hideControls[11]);
        obj2.translateX = obj5.withSpring(x, closure_14.get().active ? wrapperDimensions : useMemo);
        items = [, ];
        items[0] = obj2;
        obj3 = {};
        obj7 = mode(hideControls[11]);
        obj3.translateY = obj7.withSpring(y, closure_14.get().active ? wrapperDimensions : useMemo);
        items[1] = obj3;
        obj1.transform = items;
        obj8 = mode(hideControls[16]);
        obj1.borderRadius = obj8.getVoicePanelPIPBorderRadius(width, tmp2);
        return obj1;
      }
    }
    obj = { pipState: pIPState, getClampedPIPPosition: setMode(closure_3[16]).getClampedPIPPosition, wrapperDimensions, windowDimensions, safeArea, pipAvoidanceSpecs, initialGestureOffset: sharedValue, opacity: sharedValue1, withSpring: setMode(closure_3[11]).withSpring, DRAWER_SPRING_PHYSICS: wrapperDimensions, LAYOUT_PHYSICS: currentEmbeddedActivityIsNotInCurrentChannel, getVoicePanelPIPBorderRadius: setMode(closure_3[16]).getVoicePanelPIPBorderRadius };
    U.__closure = obj;
    U.__workletHash = 6729444248940;
    U.__initData = closure_21;
    const animatedStyle = setMode(closure_3[15]).useAnimatedStyle(U);
    const obj4 = setMode(closure_3[15]);
    const fn = function j() {
      let height;
      let width;
      ({ width, height } = pIPState);
      const obj = { width, height, borderRadius: arg0(hideControls[16]).getVoicePanelPIPBorderRadius(width, height) };
      return obj;
    };
    obj = { pipState: pIPState, getVoicePanelPIPBorderRadius: setMode(closure_3[16]).getVoicePanelPIPBorderRadius };
    fn.__closure = obj;
    fn.__workletHash = 1914976453427;
    fn.__initData = closure_22;
    const items1 = [tmp, , ];
    ({ width: arr2[1], height: arr2[2] } = pIPState);
    const animatedStyle1 = setMode(closure_3[15]).useAnimatedStyle(fn);
    const items2 = [sharedValue, safeArea, windowDimensions, wrapperDimensions, wrapperOffset];
    const memo = safeArea.useMemo(() => {
      const items = [tmp.pipContentWrapper, , ];
      const obj = { width: pIPState.width, height: pIPState.height, borderRadius: arg0(hideControls[16]).getVoicePanelPIPBorderRadius(pIPState.width, pIPState.height) };
      items[1] = obj;
      items[2] = tmp.inAppElevationShadow;
      return items;
    }, items1);
    const callback = safeArea.useCallback(() => {
      const Gesture = arg0(hideControls[17]).Gesture;
      const PanResult = Gesture.Pan();
      const enabledResult = Gesture.Pan().enabled(true);
      const manualActivationResult = Gesture.Pan().enabled(true).manualActivation(true);
      const result = Gesture.Pan().enabled(true).manualActivation(true).maxPointers(1).shouldCancelWhenOutside(false);
      const fn = function c(absoluteX) {
        const result = store.set({ absoluteX: absoluteX.absoluteX, absoluteY: absoluteX.absoluteY });
      };
      let obj = { initialGestureOffset: sharedValue };
      fn.__closure = obj;
      fn.__workletHash = 4684366251999;
      fn.__initData = closure_29;
      const maxPointersResult = Gesture.Pan().enabled(true).manualActivation(true).maxPointers(1);
      const fn2 = function l() {
        callback2(closure_3[18])(closure_14, { pressed: false });
      };
      obj = { updateSharedValueIfChanged: tmp(hideControls[18]), initialGestureOffset: sharedValue };
      fn2.__closure = obj;
      fn2.__workletHash = 17295075038028;
      fn2.__initData = closure_28;
      const onBeginResult = result.onBegin(fn);
      const fn3 = function u(state, activate) {
        let absoluteX;
        let absoluteY;
        if (state.state === callback(closure_3[17]).State.BEGAN) {
          if (!store.get().active) {
            ({ absoluteY, absoluteX } = state.changedTouches[0]);
            const _Math = Math;
            let tmp3 = Math.abs(store.get().absoluteX - absoluteX) > 10;
            if (!tmp3) {
              const _Math2 = Math;
              tmp3 = Math.abs(store.get().absoluteY - absoluteY) > 10;
            }
            if (tmp3) {
              const obj = { <string:47972774>: null, <string:81527772>: null, <string:115082716>: null, <string:3386640348>: null, <string:3594481966>: null, <string:2113231108>: null, absoluteX, absoluteY };
              const result = store.set(obj);
              callback2(closure_3[18])(closure_11, { "Bool(true)": "Array", "Bool(true)": "isArray", "Bool(true)": "body" });
              activate.activate();
              callback(closure_3[15]).runOnJS(callback2(closure_3[19]))();
              const obj2 = callback(closure_3[15]);
            }
          }
        }
      };
      const onTouchesUpResult = result.onBegin(fn).onTouchesUp(fn2);
      fn3.__closure = { State: arg0(hideControls[17]).State, initialGestureOffset: sharedValue, MIN_GESTURE_START: 10, updateSharedValueIfChanged: tmp(hideControls[18]), wrapperOffset, runOnJS: arg0(hideControls[15]).runOnJS, triggerIOSHaptic: tmp(hideControls[19]) };
      fn3.__workletHash = 16714994610987;
      fn3.__initData = closure_27;
      const obj1 = { State: arg0(hideControls[17]).State, initialGestureOffset: sharedValue, MIN_GESTURE_START: 10, updateSharedValueIfChanged: tmp(hideControls[18]), wrapperOffset, runOnJS: arg0(hideControls[15]).runOnJS, triggerIOSHaptic: tmp(hideControls[19]) };
      const fn4 = function o(arg0) {
        let absoluteX;
        let absoluteY;
        ({ absoluteX, absoluteY } = arg0);
        const obj = { x: absoluteX - store.get().absoluteX, y: absoluteY - store.get().absoluteY };
        callback2(closure_3[18])(store, obj);
      };
      const onTouchesMoveResult = onTouchesUpResult.onTouchesMove(fn3);
      fn4.__closure = { updateSharedValueIfChanged: tmp(hideControls[18]), initialGestureOffset: sharedValue };
      fn4.__workletHash = 7822444262980;
      fn4.__initData = closure_26;
      const obj2 = { updateSharedValueIfChanged: tmp(hideControls[18]), initialGestureOffset: sharedValue };
      const fn5 = function s(arg0) {
        let absoluteX;
        let absoluteY;
        let pipX;
        let pipY;
        let velocityX;
        let velocityY;
        ({ velocityX, velocityY, absoluteX, absoluteY } = arg0);
        let obj = callback(closure_3[16]);
        obj = { velocityX, velocityY, absoluteX, absoluteY, windowDimensions: closure_9.get(), safeArea: closure_5.get() };
        const result = obj.calculatePIPPositionFromVelocity(obj);
        ({ pipX, pipY } = result);
        callback2(closure_3[18])(closure_10, { pipX, pipY });
        callback2(closure_3[18])(closure_11, { gestureActive: false });
        callback2(closure_3[18])(closure_14, { "Null": null, "Null": null });
        callback(closure_3[15]).runOnJS(callback2(closure_3[20]).updateSourceTrackingView)();
      };
      const onChangeResult = onTouchesMoveResult.onChange(fn4);
      fn5.__closure = { calculatePIPPositionFromVelocity: arg0(hideControls[16]).calculatePIPPositionFromVelocity, windowDimensions, safeArea, updateSharedValueIfChanged: tmp(hideControls[18]), wrapperDimensions, wrapperOffset, initialGestureOffset: sharedValue, runOnJS: arg0(hideControls[15]).runOnJS, updateSourceTrackingView: tmp(hideControls[20]).updateSourceTrackingView };
      fn5.__workletHash = 1502716164658;
      fn5.__initData = closure_25;
      const obj3 = { calculatePIPPositionFromVelocity: arg0(hideControls[16]).calculatePIPPositionFromVelocity, windowDimensions, safeArea, updateSharedValueIfChanged: tmp(hideControls[18]), wrapperDimensions, wrapperOffset, initialGestureOffset: sharedValue, runOnJS: arg0(hideControls[15]).runOnJS, updateSourceTrackingView: tmp(hideControls[20]).updateSourceTrackingView };
      const fn6 = function n() {
        callback2(closure_3[18])(closure_14, { "Null": null, "Null": null });
      };
      const onEndResult = onChangeResult.onEnd(fn5);
      fn6.__closure = { updateSharedValueIfChanged: tmp(hideControls[18]), initialGestureOffset: sharedValue };
      fn6.__workletHash = 4606005866023;
      fn6.__initData = closure_24;
      const obj4 = { updateSharedValueIfChanged: tmp(hideControls[18]), initialGestureOffset: sharedValue };
      const fn7 = function t() {
        callback2(closure_3[18])(closure_14, { "Null": null, "Null": null });
      };
      const onTouchesCancelledResult = onEndResult.onTouchesCancelled(fn6);
      fn7.__closure = { updateSharedValueIfChanged: tmp(hideControls[18]), initialGestureOffset: sharedValue };
      fn7.__workletHash = 5443656412422;
      fn7.__initData = closure_23;
      return onTouchesCancelledResult.onFinalize(fn7);
    }, items2);
    const items3 = [controlsSpecs, hideControls, setFocused, showControls, mode, setMode, callback];
    const memo1 = safeArea.useMemo(() => {
      const Gesture = arg0(hideControls[17]).Gesture;
      const Gesture2 = arg0(hideControls[17]).Gesture;
      const TapResult = Gesture2.Tap();
      const enabledResult = Gesture2.Tap().enabled(arg0 !== pIPState.IN_APP);
      const fn = function s() {
        callback(closure_3[15]).runOnJS(closure_6)(null);
      };
      let obj = { runOnJS: arg0(hideControls[15]).runOnJS, setFocused };
      fn.__closure = obj;
      fn.__workletHash = 10703348418884;
      fn.__initData = closure_30;
      const maxDistanceResult = Gesture2.Tap().enabled(arg0 !== pIPState.IN_APP).maxDistance(30);
      const onStartResult = Gesture2.Tap().enabled(arg0 !== pIPState.IN_APP).maxDistance(30).onStart(fn);
      const Gesture3 = arg0(hideControls[17]).Gesture;
      const numberOfTapsResult = Gesture2.Tap().enabled(arg0 !== pIPState.IN_APP).maxDistance(30).onStart(fn).numberOfTaps(2);
      const TapResult1 = Gesture3.Tap();
      const enabledResult1 = Gesture3.Tap().enabled(true);
      const fn2 = function n() {
        if (callback === constants3.IN_APP) {
          callback(closure_3[15]).runOnJS(closure_7)(constants.PANEL);
          const obj3 = callback(closure_3[15]);
        } else if (closure_2.get().mode === constants2.HIDDEN) {
          callback(closure_3[15]).runOnJS(closure_8)();
          const obj2 = callback(closure_3[15]);
        } else {
          callback(closure_3[15]).runOnJS(closure_3)();
          const obj = callback(closure_3[15]);
        }
      };
      obj = { pipMode: arg0, VoicePanelPIPModes: pIPState, runOnJS: arg0(hideControls[15]).runOnJS, setMode, VoicePanelModes: wrapperOffset, controlsSpecs, VoicePanelControlsModes: channelId, showControls, hideControls };
      fn2.__closure = obj;
      fn2.__workletHash = 9532493963151;
      fn2.__initData = closure_31;
      const maxDistanceResult1 = Gesture3.Tap().enabled(true).maxDistance(30);
      return Gesture.Exclusive(numberOfTapsResult, Gesture3.Tap().enabled(true).maxDistance(30).onStart(fn2), callback());
    }, items3);
    const obj6 = setMode(closure_3[15]);
    const items4 = [setMode, showControls];
    stateFromStoresObject = setMode(closure_3[21]).useStateFromStoresObject(items4, () => {
      const currentEmbeddedActivity = setMode.getCurrentEmbeddedActivity();
      let _location;
      let obj = arg0(hideControls[22]);
      if (null != currentEmbeddedActivity) {
        _location = currentEmbeddedActivity.location;
      }
      const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(_location);
      obj = { currentEmbeddedActivityIsNotInCurrentChannel: embeddedActivityLocationChannelId !== channelId, hasFrame: null != showControls.getConnectedFrame() };
      return obj;
    });
    const currentEmbeddedActivityIsNotInCurrentChannel = stateFromStoresObject.currentEmbeddedActivityIsNotInCurrentChannel;
    const hasFrame = stateFromStoresObject.hasFrame;
    const items5 = [currentEmbeddedActivityIsNotInCurrentChannel, hasFrame, setMode, setFocused];
    const callback1 = safeArea.useCallback(() => {
      if (currentEmbeddedActivityIsNotInCurrentChannel) {
        setMode(wrapperOffset.PIP);
        setFocused(null);
      }
      if (hasFrame) {
        tmp(hideControls[23]).updateFramePanelMode(sharedValue.PANEL);
        const obj2 = tmp(hideControls[23]);
      } else {
        const result = controlsSpecs(hideControls[24]).updateActivityPanelMode(sharedValue.PANEL);
        const obj = controlsSpecs(hideControls[24]);
      }
    }, items5);
    obj1 = {
      multiPIPWrapperStyles: animatedStyle,
      mainPIPWrapperStyles: animatedStyle1,
      secondaryPIPWrapperStyles: memo,
      mainPIPGesture: memo1,
      secondaryPIPGesture: safeArea.useMemo(() => {
        const Gesture = arg0(hideControls[17]).Gesture;
        const Gesture2 = arg0(hideControls[17]).Gesture;
        const TapResult = Gesture2.Tap();
        const fn = function t() {
          callback(closure_3[15]).runOnJS(closure_19)();
        };
        const maxDistanceResult = Gesture2.Tap().maxDistance(30);
        fn.__closure = { runOnJS: arg0(hideControls[15]).runOnJS, handleSecondaryPIPTap: callback1 };
        fn.__workletHash = 8361527940381;
        fn.__initData = closure_32;
        const obj = { runOnJS: arg0(hideControls[15]).runOnJS, handleSecondaryPIPTap: callback1 };
        return Gesture.Exclusive(maxDistanceResult.onStart(fn), callback());
      }, items6)
    };
    const items6 = [callback, callback1];
    return obj1;
  }(pIPState.mode));
  let pushToTalk = importDefault(closure_3[25])(context.controlsSpecs).pushToTalk;
  const tmp5 = callback(importAllResult.useState(null != pIPState.mode), 2);
  const first = tmp5[0];
  const importAll = first;
  closure_3 = tmp5[1];
  const items = [pIPState.mode, first];
  const effect = importAllResult.useEffect(() => {
    if (!tmp) {
      callback(true);
    }
  }, items);
  let tmp18Result = null != pIPState.mode || first;
  let obj1 = arg1(closure_3[21]);
  const items1 = [closure_8];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => null != connectedFrame.getConnectedFrame());
  const callback = stateFromStoresObject;
  let obj2 = arg1(closure_3[15]);
  class Z {
    constructor() {
      obj = {};
      obj2 = setMode(closure_3[16]);
      obj.borderRadius = obj2.getVoicePanelPIPBorderRadius(closure_1.width, closure_1.height);
      return obj;
    }
  }
  obj = { getVoicePanelPIPBorderRadius: arg1(closure_3[16]).getVoicePanelPIPBorderRadius, pipState: pIPState };
  Z.__closure = obj;
  Z.__workletHash = 9598016909682;
  Z.__initData = closure_33;
  const animatedStyle = obj2.useAnimatedStyle(Z);
  const items2 = [setMode];
  const memo = importAllResult.useMemo(() => {
    const obj = { mediaContentContainer: null, pQ3bLk: 4, LANDING_FRAME_NAME: "column" };
    const intl = setMode(closure_3[26]).intl;
    obj.accessibilityLabel = intl.string(setMode(closure_3[26]).t.oN8bqe);
    const items = [{ name: "activate" }];
    obj.accessibilityActions = items;
    obj.onAccessibilityAction = function onAccessibilityAction() {
      callback(constants.PANEL);
    };
    return obj;
  }, items2);
  const items3 = [stateFromStoresObject];
  const memo1 = importAllResult.useMemo(() => {
    const obj = { accessible: true };
    const intl = setMode(closure_3[26]).intl;
    obj.accessibilityLabel = intl.string(setMode(closure_3[26]).t.3ejJer);
    const items = [{ name: "activate" }];
    obj.accessibilityActions = items;
    obj.onAccessibilityAction = function onAccessibilityAction() {
      if (closure_4) {
        callback(closure_3[23]).updateFramePanelMode(constants.PANEL);
        const obj2 = callback(closure_3[23]);
      } else {
        const result = callback2(closure_3[24]).updateActivityPanelMode(constants.PANEL);
        const obj = callback2(closure_3[24]);
      }
    };
    return obj;
  }, items3);
  if (pushToTalk) {
    pushToTalk = pIPState.mode !== VoicePanelPIPModes.IN_PANEL || tmp13;
    const tmp15 = pIPState.mode !== VoicePanelPIPModes.IN_PANEL || tmp13;
  }
  obj = { pointerEvents: "box-none", style: items4, layout: closure_19 };
  const items4 = [tmp.multiPIPContainer, multiPIPWrapperStyles];
  const tmp16 = closure_16;
  const tmp4 = function usePIPGesture(mode) {
    let setMode = mode;
    const tmp = callback2();
    let pIPState = tmp;
    const context = safeArea.useContext(pIPState(closure_3[13]));
    const controlsSpecs = context.controlsSpecs;
    const first = controlsSpecs;
    const hideControls = context.hideControls;
    closure_3 = hideControls;
    const pipAvoidanceSpecs = context.pipAvoidanceSpecs;
    let stateFromStoresObject = pipAvoidanceSpecs;
    const safeArea = context.safeArea;
    const setFocused = context.setFocused;
    setMode = context.setMode;
    const showControls = context.showControls;
    const windowDimensions = context.windowDimensions;
    const wrapperDimensions = context.wrapperDimensions;
    const wrapperOffset = context.wrapperOffset;
    const channelId = context.channelId;
    let obj = setMode(closure_3[14]);
    pIPState = obj.usePIPState();
    let obj1 = setMode(closure_3[15]);
    const sharedValue = obj1.useSharedValue({ -604054531: "<string:3628173623>", -603923457: "<string:240518207>", -1505188281: "<string:3818762797>", -603792383: "<string:3848286783>", -603661309: "<string:4191888080>", -603530235: "<string:3332915134>" });
    const sharedValue1 = setMode(closure_3[15]).useSharedValue(0);
    const items = [sharedValue1];
    const effect = safeArea.useEffect(() => {
      const timeout = setTimeout(() => {
        const result = closure_15.set(1);
      }, 200);
      return () => {
        clearTimeout(closure_0);
      };
    }, items);
    const obj3 = setMode(closure_3[15]);
    class U {
      constructor() {
        width = usePIPState.width;
        tmp = usePIPState;
        tmp2 = usePIPState.showSecondaryPIP ? tmp.containerHeight : tmp.height;
        obj = mode(hideControls[16]);
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
        obj5 = mode(hideControls[11]);
        obj2.translateX = obj5.withSpring(x, closure_14.get().active ? wrapperDimensions : useMemo);
        items = [, ];
        items[0] = obj2;
        obj3 = {};
        obj7 = mode(hideControls[11]);
        obj3.translateY = obj7.withSpring(y, closure_14.get().active ? wrapperDimensions : useMemo);
        items[1] = obj3;
        obj1.transform = items;
        obj8 = mode(hideControls[16]);
        obj1.borderRadius = obj8.getVoicePanelPIPBorderRadius(width, tmp2);
        return obj1;
      }
    }
    obj = { pipState: pIPState, getClampedPIPPosition: setMode(closure_3[16]).getClampedPIPPosition, wrapperDimensions, windowDimensions, safeArea, pipAvoidanceSpecs, initialGestureOffset: sharedValue, opacity: sharedValue1, withSpring: setMode(closure_3[11]).withSpring, DRAWER_SPRING_PHYSICS: wrapperDimensions, LAYOUT_PHYSICS: currentEmbeddedActivityIsNotInCurrentChannel, getVoicePanelPIPBorderRadius: setMode(closure_3[16]).getVoicePanelPIPBorderRadius };
    U.__closure = obj;
    U.__workletHash = 6729444248940;
    U.__initData = closure_21;
    const animatedStyle = setMode(closure_3[15]).useAnimatedStyle(U);
    const obj4 = setMode(closure_3[15]);
    const fn = function j() {
      let height;
      let width;
      ({ width, height } = pIPState);
      const obj = { width, height, borderRadius: arg0(hideControls[16]).getVoicePanelPIPBorderRadius(width, height) };
      return obj;
    };
    obj = { pipState: pIPState, getVoicePanelPIPBorderRadius: setMode(closure_3[16]).getVoicePanelPIPBorderRadius };
    fn.__closure = obj;
    fn.__workletHash = 1914976453427;
    fn.__initData = closure_22;
    const items1 = [tmp, , ];
    ({ width: arr2[1], height: arr2[2] } = pIPState);
    const animatedStyle1 = setMode(closure_3[15]).useAnimatedStyle(fn);
    const items2 = [sharedValue, safeArea, windowDimensions, wrapperDimensions, wrapperOffset];
    const memo = safeArea.useMemo(() => {
      const items = [tmp.pipContentWrapper, , ];
      const obj = { width: pIPState.width, height: pIPState.height, borderRadius: arg0(hideControls[16]).getVoicePanelPIPBorderRadius(pIPState.width, pIPState.height) };
      items[1] = obj;
      items[2] = tmp.inAppElevationShadow;
      return items;
    }, items1);
    const callback = safeArea.useCallback(() => {
      const Gesture = arg0(hideControls[17]).Gesture;
      const PanResult = Gesture.Pan();
      const enabledResult = Gesture.Pan().enabled(true);
      const manualActivationResult = Gesture.Pan().enabled(true).manualActivation(true);
      const result = Gesture.Pan().enabled(true).manualActivation(true).maxPointers(1).shouldCancelWhenOutside(false);
      const fn = function c(absoluteX) {
        const result = store.set({ absoluteX: absoluteX.absoluteX, absoluteY: absoluteX.absoluteY });
      };
      let obj = { initialGestureOffset: sharedValue };
      fn.__closure = obj;
      fn.__workletHash = 4684366251999;
      fn.__initData = closure_29;
      const maxPointersResult = Gesture.Pan().enabled(true).manualActivation(true).maxPointers(1);
      const fn2 = function l() {
        callback2(closure_3[18])(closure_14, { pressed: false });
      };
      obj = { updateSharedValueIfChanged: tmp(hideControls[18]), initialGestureOffset: sharedValue };
      fn2.__closure = obj;
      fn2.__workletHash = 17295075038028;
      fn2.__initData = closure_28;
      const onBeginResult = result.onBegin(fn);
      const fn3 = function u(state, activate) {
        let absoluteX;
        let absoluteY;
        if (state.state === callback(closure_3[17]).State.BEGAN) {
          if (!store.get().active) {
            ({ absoluteY, absoluteX } = state.changedTouches[0]);
            const _Math = Math;
            let tmp3 = Math.abs(store.get().absoluteX - absoluteX) > 10;
            if (!tmp3) {
              const _Math2 = Math;
              tmp3 = Math.abs(store.get().absoluteY - absoluteY) > 10;
            }
            if (tmp3) {
              const obj = { <string:47972774>: null, <string:81527772>: null, <string:115082716>: null, <string:3386640348>: null, <string:3594481966>: null, <string:2113231108>: null, absoluteX, absoluteY };
              const result = store.set(obj);
              callback2(closure_3[18])(closure_11, { "Bool(true)": "Array", "Bool(true)": "isArray", "Bool(true)": "body" });
              activate.activate();
              callback(closure_3[15]).runOnJS(callback2(closure_3[19]))();
              const obj2 = callback(closure_3[15]);
            }
          }
        }
      };
      const onTouchesUpResult = result.onBegin(fn).onTouchesUp(fn2);
      fn3.__closure = { State: arg0(hideControls[17]).State, initialGestureOffset: sharedValue, MIN_GESTURE_START: 10, updateSharedValueIfChanged: tmp(hideControls[18]), wrapperOffset, runOnJS: arg0(hideControls[15]).runOnJS, triggerIOSHaptic: tmp(hideControls[19]) };
      fn3.__workletHash = 16714994610987;
      fn3.__initData = closure_27;
      const obj1 = { State: arg0(hideControls[17]).State, initialGestureOffset: sharedValue, MIN_GESTURE_START: 10, updateSharedValueIfChanged: tmp(hideControls[18]), wrapperOffset, runOnJS: arg0(hideControls[15]).runOnJS, triggerIOSHaptic: tmp(hideControls[19]) };
      const fn4 = function o(arg0) {
        let absoluteX;
        let absoluteY;
        ({ absoluteX, absoluteY } = arg0);
        const obj = { x: absoluteX - store.get().absoluteX, y: absoluteY - store.get().absoluteY };
        callback2(closure_3[18])(store, obj);
      };
      const onTouchesMoveResult = onTouchesUpResult.onTouchesMove(fn3);
      fn4.__closure = { updateSharedValueIfChanged: tmp(hideControls[18]), initialGestureOffset: sharedValue };
      fn4.__workletHash = 7822444262980;
      fn4.__initData = closure_26;
      const obj2 = { updateSharedValueIfChanged: tmp(hideControls[18]), initialGestureOffset: sharedValue };
      const fn5 = function s(arg0) {
        let absoluteX;
        let absoluteY;
        let pipX;
        let pipY;
        let velocityX;
        let velocityY;
        ({ velocityX, velocityY, absoluteX, absoluteY } = arg0);
        let obj = callback(closure_3[16]);
        obj = { velocityX, velocityY, absoluteX, absoluteY, windowDimensions: closure_9.get(), safeArea: closure_5.get() };
        const result = obj.calculatePIPPositionFromVelocity(obj);
        ({ pipX, pipY } = result);
        callback2(closure_3[18])(closure_10, { pipX, pipY });
        callback2(closure_3[18])(closure_11, { gestureActive: false });
        callback2(closure_3[18])(closure_14, { "Null": null, "Null": null });
        callback(closure_3[15]).runOnJS(callback2(closure_3[20]).updateSourceTrackingView)();
      };
      const onChangeResult = onTouchesMoveResult.onChange(fn4);
      fn5.__closure = { calculatePIPPositionFromVelocity: arg0(hideControls[16]).calculatePIPPositionFromVelocity, windowDimensions, safeArea, updateSharedValueIfChanged: tmp(hideControls[18]), wrapperDimensions, wrapperOffset, initialGestureOffset: sharedValue, runOnJS: arg0(hideControls[15]).runOnJS, updateSourceTrackingView: tmp(hideControls[20]).updateSourceTrackingView };
      fn5.__workletHash = 1502716164658;
      fn5.__initData = closure_25;
      const obj3 = { calculatePIPPositionFromVelocity: arg0(hideControls[16]).calculatePIPPositionFromVelocity, windowDimensions, safeArea, updateSharedValueIfChanged: tmp(hideControls[18]), wrapperDimensions, wrapperOffset, initialGestureOffset: sharedValue, runOnJS: arg0(hideControls[15]).runOnJS, updateSourceTrackingView: tmp(hideControls[20]).updateSourceTrackingView };
      const fn6 = function n() {
        callback2(closure_3[18])(closure_14, { "Null": null, "Null": null });
      };
      const onEndResult = onChangeResult.onEnd(fn5);
      fn6.__closure = { updateSharedValueIfChanged: tmp(hideControls[18]), initialGestureOffset: sharedValue };
      fn6.__workletHash = 4606005866023;
      fn6.__initData = closure_24;
      const obj4 = { updateSharedValueIfChanged: tmp(hideControls[18]), initialGestureOffset: sharedValue };
      const fn7 = function t() {
        callback2(closure_3[18])(closure_14, { "Null": null, "Null": null });
      };
      const onTouchesCancelledResult = onEndResult.onTouchesCancelled(fn6);
      fn7.__closure = { updateSharedValueIfChanged: tmp(hideControls[18]), initialGestureOffset: sharedValue };
      fn7.__workletHash = 5443656412422;
      fn7.__initData = closure_23;
      return onTouchesCancelledResult.onFinalize(fn7);
    }, items2);
    const items3 = [controlsSpecs, hideControls, setFocused, showControls, mode, setMode, callback];
    const memo1 = safeArea.useMemo(() => {
      const Gesture = arg0(hideControls[17]).Gesture;
      const Gesture2 = arg0(hideControls[17]).Gesture;
      const TapResult = Gesture2.Tap();
      const enabledResult = Gesture2.Tap().enabled(arg0 !== pIPState.IN_APP);
      const fn = function s() {
        callback(closure_3[15]).runOnJS(closure_6)(null);
      };
      let obj = { runOnJS: arg0(hideControls[15]).runOnJS, setFocused };
      fn.__closure = obj;
      fn.__workletHash = 10703348418884;
      fn.__initData = closure_30;
      const maxDistanceResult = Gesture2.Tap().enabled(arg0 !== pIPState.IN_APP).maxDistance(30);
      const onStartResult = Gesture2.Tap().enabled(arg0 !== pIPState.IN_APP).maxDistance(30).onStart(fn);
      const Gesture3 = arg0(hideControls[17]).Gesture;
      const numberOfTapsResult = Gesture2.Tap().enabled(arg0 !== pIPState.IN_APP).maxDistance(30).onStart(fn).numberOfTaps(2);
      const TapResult1 = Gesture3.Tap();
      const enabledResult1 = Gesture3.Tap().enabled(true);
      const fn2 = function n() {
        if (callback === constants3.IN_APP) {
          callback(closure_3[15]).runOnJS(closure_7)(constants.PANEL);
          const obj3 = callback(closure_3[15]);
        } else if (closure_2.get().mode === constants2.HIDDEN) {
          callback(closure_3[15]).runOnJS(closure_8)();
          const obj2 = callback(closure_3[15]);
        } else {
          callback(closure_3[15]).runOnJS(closure_3)();
          const obj = callback(closure_3[15]);
        }
      };
      obj = { pipMode: arg0, VoicePanelPIPModes: pIPState, runOnJS: arg0(hideControls[15]).runOnJS, setMode, VoicePanelModes: wrapperOffset, controlsSpecs, VoicePanelControlsModes: channelId, showControls, hideControls };
      fn2.__closure = obj;
      fn2.__workletHash = 9532493963151;
      fn2.__initData = closure_31;
      const maxDistanceResult1 = Gesture3.Tap().enabled(true).maxDistance(30);
      return Gesture.Exclusive(numberOfTapsResult, Gesture3.Tap().enabled(true).maxDistance(30).onStart(fn2), callback());
    }, items3);
    const obj6 = setMode(closure_3[15]);
    const items4 = [setMode, showControls];
    stateFromStoresObject = setMode(closure_3[21]).useStateFromStoresObject(items4, () => {
      const currentEmbeddedActivity = setMode.getCurrentEmbeddedActivity();
      let _location;
      let obj = arg0(hideControls[22]);
      if (null != currentEmbeddedActivity) {
        _location = currentEmbeddedActivity.location;
      }
      const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(_location);
      obj = { currentEmbeddedActivityIsNotInCurrentChannel: embeddedActivityLocationChannelId !== channelId, hasFrame: null != showControls.getConnectedFrame() };
      return obj;
    });
    const currentEmbeddedActivityIsNotInCurrentChannel = stateFromStoresObject.currentEmbeddedActivityIsNotInCurrentChannel;
    const hasFrame = stateFromStoresObject.hasFrame;
    const items5 = [currentEmbeddedActivityIsNotInCurrentChannel, hasFrame, setMode, setFocused];
    const callback1 = safeArea.useCallback(() => {
      if (currentEmbeddedActivityIsNotInCurrentChannel) {
        setMode(wrapperOffset.PIP);
        setFocused(null);
      }
      if (hasFrame) {
        tmp(hideControls[23]).updateFramePanelMode(sharedValue.PANEL);
        const obj2 = tmp(hideControls[23]);
      } else {
        const result = controlsSpecs(hideControls[24]).updateActivityPanelMode(sharedValue.PANEL);
        const obj = controlsSpecs(hideControls[24]);
      }
    }, items5);
    obj1 = {
      multiPIPWrapperStyles: animatedStyle,
      mainPIPWrapperStyles: animatedStyle1,
      secondaryPIPWrapperStyles: memo,
      mainPIPGesture: memo1,
      secondaryPIPGesture: safeArea.useMemo(() => {
        const Gesture = arg0(hideControls[17]).Gesture;
        const Gesture2 = arg0(hideControls[17]).Gesture;
        const TapResult = Gesture2.Tap();
        const fn = function t() {
          callback(closure_3[15]).runOnJS(closure_19)();
        };
        const maxDistanceResult = Gesture2.Tap().maxDistance(30);
        fn.__closure = { runOnJS: arg0(hideControls[15]).runOnJS, handleSecondaryPIPTap: callback1 };
        fn.__workletHash = 8361527940381;
        fn.__initData = closure_32;
        const obj = { runOnJS: arg0(hideControls[15]).runOnJS, handleSecondaryPIPTap: callback1 };
        return Gesture.Exclusive(maxDistanceResult.onStart(fn), callback());
      }, items6)
    };
    const items6 = [callback, callback1];
    return obj1;
  }(pIPState.mode);
  if (tmp18Result) {
    obj1 = {};
    const items5 = [, , ];
    ({ pipContentWrapper: arr6[0], inAppElevationShadow: arr6[1] } = tmp);
    items5[2] = mainPIPWrapperStyles;
    obj1.style = items5;
    obj1.pointerEvents = "box-none";
    obj1.layout = closure_19;
    const merged = Object.assign(memo);
    obj2 = { gesture: mainPIPGesture };
    const obj3 = {};
    const items6 = [tmp.pipMask, animatedStyle];
    obj3.style = items6;
    obj3.layout = closure_19;
    const tmp18 = closure_16;
    const tmp21 = importDefault(closure_3[27]);
    obj3.children = callback2(importDefault(closure_3[28]), {});
    obj2.children = callback2(importDefault(closure_3[27]), obj3);
    const items7 = [callback2(arg1(closure_3[17]).GestureDetector, obj2), ];
    let tmp32 = null;
    if (pushToTalk) {
      tmp32 = callback2(importDefault(closure_3[29]), {});
    }
    items7[1] = tmp32;
    obj1["children"] = items7;
    tmp18Result = tmp18(tmp21, obj1);
    const tmp29 = importDefault(closure_3[27]);
  }
  const items8 = [tmp18Result, ];
  let showSecondaryPIP = pIPState.showSecondaryPIP;
  if (showSecondaryPIP) {
    const obj4 = { style: secondaryPIPWrapperStyles };
    const merged1 = Object.assign(memo1);
    const obj5 = {};
    const items9 = [tmp.pipMask, animatedStyle];
    obj5.style = items9;
    const tmp39 = importDefault(closure_3[30]);
    const obj6 = { gesture: secondaryPIPGesture };
    const obj7 = { style: StyleSheet.absoluteFill };
    const tmp44 = importDefault(closure_3[27]);
    obj7.children = callback2(importDefault(closure_3[31]), {});
    obj6.children = callback2(importDefault(closure_3[30]), obj7);
    obj5.children = callback2(arg1(closure_3[17]).GestureDetector, obj6);
    obj4["children"] = callback2(tmp44, obj5);
    showSecondaryPIP = callback2(tmp39, obj4);
    const tmp48 = importDefault(closure_3[30]);
  }
  items8[1] = showSecondaryPIP;
  obj.children = items8;
  return tmp16(importDefault(closure_3[27]), obj);
}
function renderPIPWrapper(arg0, pipMode, transitionState, transitionCleanUp) {
  return callback2(closure_36, { pipMode: pipMode.pipMode, transitionState, transitionCleanUp }, arg0);
}
let closure_4 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const StyleSheet = arg1(dependencyMap[2]).StyleSheet;
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const tmp3 = arg1(dependencyMap[6]);
({ DRAWER_SPRING_PHYSICS: closure_10, VoicePanelModes: closure_11 } = tmp3);
const VoicePanelControlsModes = arg1(dependencyMap[7]).VoicePanelControlsModes;
const VoicePanelPIPModes = arg1(dependencyMap[8]).VoicePanelPIPModes;
const ActivityPanelModes = arg1(dependencyMap[9]).ActivityPanelModes;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_15, jsxs: closure_16 } = arg1(dependencyMap[10]));
let closure_17 = { disableNewIOSPicker: "ILLO_GREEN_10", webpackId: 0.9, connectedEmbeddedActivity: "ILLO_GREEN_50" };
let closure_18 = { code: "function layoutTransition_VoicePanelPIPTsx1(values){const{withSpring,LAYOUT_PHYSICS}=this.__closure;return{animations:{originX:withSpring(values.targetOriginX,LAYOUT_PHYSICS),originY:withSpring(values.targetOriginY,LAYOUT_PHYSICS),width:withSpring(values.targetWidth,LAYOUT_PHYSICS),height:withSpring(values.targetHeight,LAYOUT_PHYSICS)},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};}" };
let closure_19 = () => {
  function layoutTransition(originX) {
    let obj = {};
    obj = { originX: callback(closure_3[11]).withSpring(originX.targetOriginX, closure_17) };
    const obj3 = callback(closure_3[11]);
    obj.originY = callback(closure_3[11]).withSpring(originX.targetOriginY, closure_17);
    const obj4 = callback(closure_3[11]);
    obj.width = callback(closure_3[11]).withSpring(originX.targetWidth, closure_17);
    const obj5 = callback(closure_3[11]);
    obj.height = callback(closure_3[11]).withSpring(originX.targetHeight, closure_17);
    obj.animations = obj;
    obj.initialValues = { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight };
    return obj;
  }
  layoutTransition.__closure = { withSpring: arg1(dependencyMap[11]).withSpring, LAYOUT_PHYSICS: closure_17 };
  layoutTransition.__workletHash = 9346092352642;
  layoutTransition.__initData = closure_18;
  return layoutTransition;
}();
let obj1 = arg1(dependencyMap[12]);
let obj = { pipContentWrapper: { backgroundColor: "black" }, inAppElevationShadow: {} };
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj["overflow"] = "hidden";
obj.pipMask = obj;
obj1 = { -604316679: null, -604185605: null, -604054531: null, -603923457: null, gap: tmp3.SECONDARY_PIP_TOP_MARGIN };
obj.multiPIPContainer = obj1;
let closure_20 = obj1.createStyles(obj);
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
  const arg1 = transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  const importDefault = transitionCleanUp;
  let closure_2;
  let closure_3;
  let callback;
  let importAllResult;
  let tmp2 = transitionState.pipMode === VoicePanelPIPModes.IN_PANEL;
  if (!tmp2) {
    tmp2 = transitionState === arg1(closure_3[32]).TransitionStates.MOUNTED;
  }
  const tmp5 = callback(importAllResult.useState(tmp2), 2);
  closure_2 = tmp5[1];
  const effect = importAllResult.useEffect(() => {
    const timeout = setTimeout(() => callback(true), 400);
    return () => {
      clearTimeout(closure_0);
    };
  }, []);
  let tmp7 = null;
  closure_3 = importAllResult.useRef(null);
  const items = [transitionCleanUp];
  callback = importAllResult.useCallback(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
    transitionCleanUp();
  }, items);
  const items1 = [transitionState, callback];
  const effect1 = importAllResult.useEffect(() => {
    if (transitionState === transitionState(closure_3[32]).TransitionStates.YEETED) {
      const _setTimeout = setTimeout;
      closure_3.current = setTimeout(callback, 500);
      return () => {
        if (null != ref.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref.current);
          ref.current = null;
        }
      };
    }
  }, items1);
  const panelCardStillInPIP = importAllResult.useContext(importDefault(closure_3[13])).panelCardStillInPIP;
  importAllResult = panelCardStillInPIP;
  let obj = arg1(closure_3[15]);
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
  obj = { transitionState, TransitionStates: arg1(closure_3[32]).TransitionStates, panelCardStillInPIP };
  I.__closure = obj;
  I.__workletHash = 10653972388666;
  I.__initData = closure_34;
  const fn = function f(arg0, arg1) {
    let tmp = arg0;
    if (arg0) {
      tmp = arg1 !== arg0;
    }
    if (tmp) {
      transitionState(closure_3[15]).runOnJS(callback)();
      const obj = transitionState(closure_3[15]);
    }
  };
  obj = { runOnJS: arg1(closure_3[15]).runOnJS, fireCleanup: callback };
  fn.__closure = obj;
  fn.__workletHash = 1599147342710;
  fn.__initData = closure_35;
  const animatedReaction = obj.useAnimatedReaction(I, fn);
  if (tmp5[0]) {
    tmp7 = callback2(VoicePanelPIP, {});
  }
  return tmp7;
});
const tmp4 = arg1(dependencyMap[10]);
const memoResult = importAllResult.memo(function VoicePanelPIPWrapper() {
  let obj = arg1(dependencyMap[14]);
  const pIPState = obj.usePIPState();
  const mode = pIPState.mode;
  obj = {};
  if (null != mode) {
    obj = { pipMode: mode };
    const tmp3 = obj;
  }
  obj.item = tmp3;
  obj.renderItem = renderPIPWrapper;
  return closure_15(arg1(dependencyMap[32]).TransitionItem, obj);
});
const result = arg1(dependencyMap[33]).fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIP.tsx");

export default memoResult;
