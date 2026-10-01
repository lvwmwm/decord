// Module ID: 16988
// Function ID: 16989
// Name: VoicePanelPIP
// Dependencies: [19, 17, 2044, 8499, 5044, 11755, 11753, 16913, 8502, 8500, 21, 4836, 11754, 16916, 11761, 4566, 16912, 10896, 5280, 6073, 16919, 8886, 16909, 504, 4458, 8760, 8782, 7715, 1115, 6494, 16989, 5901, 16990, 16991, 4540, 2]

// Module 16988 (VoicePanelPIP)
import intl2 from "intl" /* 1115 */;
import native from "native" /* 4540 */;
import spring from "spring" /* 5280 */;
import FramesConstants from "FramesConstants" /* 8500 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 8502 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 8760 */;
import EmbeddedActivitiesActionCreatorsAll from "EmbeddedActivitiesActionCreators" /* 8782 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11753 */;
import VoicePanelPIPUtils from "VoicePanelPIPUtils" /* 16912 */;
import VoicePanelPIPConstants from "VoicePanelPIPConstants" /* 16913 */;
import VoicePanelPIPStateContext from "VoicePanelPIPStateContext" /* 16916 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import FramesStore from "FramesStore" /* 8499 */;
import VoicePanelStore from "VoicePanelStore" /* 5044 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11755 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let changedTouches, currentEmbeddedActivity, set;

let SECONDARY_PIP_TOP_MARGIN;
let c10;
let c9;
let closure_15;
let closure_16;
let obj2;
let obj3;
function VoicePanelPIP() {
  let GestureDetector2;
  let GestureDetector3;
  let VoicePanelModes;
  let __initData8;
  let callback2;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items18;
  let items19;
  let items20;
  let obj13;
  let obj15;
  let obj16;
  let obj17;
  let obj19;
  let obj20;
  let obj21;
  let pIPState;
  let stateFromStores2;
  let tmp2Result10;
  let tmp2Result12;
  let tmp2Result13;
  let tmp2Result8;
  let tmp = closure_17();
  let obj = callback2;
  let tmp2 = pIPState;
  const tmp3 = stateFromStores2;
  const context = callback2.useContext(pIPState(stateFromStores2[12]));
  const setMode = context.setMode;
  const tmp5 = setMode;
  const controlsSpecs = context.controlsSpecs;
  let obj2 = setMode(stateFromStores2[13]);
  pIPState = obj2.usePIPState();
  const pipHandoff = callback2.useContext(pIPState(stateFromStores2[12])).pipHandoff;
  let obj3 = setMode(stateFromStores2[13]);
  const mode = obj3.usePIPState().mode;
  let obj4 = setMode(stateFromStores2[14]);
  let pIPCardsSettled = obj4.usePIPCardsSettled(pipHandoff);
  let obj5 = setMode(stateFromStores2[14]);
  let tmp9 = null != mode;
  let tmp11 = mode !== VoicePanelPIPModes.IN_APP;
  const pIPPanelLayoutCommitted = obj5.usePIPPanelLayoutCommitted(pipHandoff);
  if (!tmp11) {
    tmp11 = pIPCardsSettled;
  }
  let tmp13 = tmp12;
  if (tmp13) {
    let tmp14 = !tmp9;
    if (tmp9) {
      tmp14 = tmp11;
    }
    tmp13 = tmp14;
  }
  const mode2 = pIPState.mode;
  let closure_1 = tmp12;
  pIPCardsSettled = tmp13;
  let stateFromStores;
  let stateFromStores1;
  let callback1;
  const context1 = obj.useContext(tmp2(tmp3[12]));
  const controlsSpecs2 = context1.controlsSpecs;
  const hideControls = context1.hideControls;
  const pipAvoidanceSpecs = context1.pipAvoidanceSpecs;
  const safeArea = context1.safeArea;
  const setFocused = context1.setFocused;
  const setMode2 = context1.setMode;
  const showControls = context1.showControls;
  const windowDimensions = context1.windowDimensions;
  const wrapperDimensions = context1.wrapperDimensions;
  const wrapperOffset = context1.wrapperOffset;
  const channelId = context1.channelId;
  const tmp5Result = tmp5(tmp3[13]);
  const pIPState1 = tmp5Result.usePIPState();
  const tmp5Result11 = tmp5(tmp3[15]);
  const sharedValue = tmp5Result11.useSharedValue(INACTIVE_GESTURE_STATE);
  const tmp5Result12 = tmp5(tmp3[15]);
  const sharedValue1 = tmp5Result12.useSharedValue(0);
  let items = [sharedValue1];
  const effect = obj.useEffect(() => {
    let closure_0;
    const timeout = setTimeout(() => {
      const result = sharedValue1.set(1);
    }, 200);
    return () => {
      clearTimeout(closure_0);
    };
  }, items);
  let fn = function z(baseX, velocityX, velocityY) {
    let pipX;
    let pipY;
    const scale = pIPState1.scale;
    const value = scale.get();
    const result = pIPState1.width * value;
    const obj = setMode(stateFromStores2[16]);
    const obj2 = { height: pIPState1.height, containerHeight: pIPState1.containerHeight, showSecondaryPIP: pIPState1.showSecondaryPIP, scale: value };
    const scaledPIPContainerHeight = obj.getScaledPIPContainerHeight(obj2);
    const obj3 = setMode(stateFromStores2[16]);
    const obj4 = { velocityX, velocityY, absoluteX: baseX.baseX + baseX.offsetX + result / 2, absoluteY: baseX.baseY + baseX.offsetY + scaledPIPContainerHeight / 2, windowDimensions: windowDimensions.get(), safeArea: safeArea.get() };
    const result1 = obj3.calculatePIPPositionFromVelocity(obj4);
    ({ pipX, pipY } = result1);
    pIPState(stateFromStores2[17])(wrapperDimensions, { pipX, pipY });
  };
  let obj6 = { pipState: pIPState1, getScaledPIPContainerHeight: tmp5(tmp3[16]).getScaledPIPContainerHeight, calculatePIPPositionFromVelocity: tmp5(tmp3[16]).calculatePIPPositionFromVelocity, windowDimensions, safeArea, updateSharedValueIfChanged: tmp2(tmp3[17]), wrapperDimensions };
  fn.__closure = obj6;
  fn.__workletHash = 3320226117584;
  fn.__initData = __initData;
  const items1 = [, , , , , , , ];
  ({ containerHeight: arr2[0], height: arr2[1], scale: arr2[2], showSecondaryPIP: arr2[3], width: arr2[4] } = pIPState1);
  items1[5] = safeArea;
  items1[6] = windowDimensions;
  items1[7] = wrapperDimensions;
  const callback = obj.useCallback(fn, items1);
  const tmp5Result13 = tmp5(tmp3[15]);
  class K {
    constructor() {
      let PIP_LAYOUT_PHYSICS;
      let items;
      let scale2;
      let showSecondaryPIP;
      let tmp3Result4;
      let tmp3Result5;
      let tmp3Result6;
      let x;
      let y;
      const scale = pIPState1.scale;
      const result = pIPState1.width * scale.get();
      const obj = { height: pIPState1.height, containerHeight: pIPState1.containerHeight, showSecondaryPIP, scale: scale2.get() };
      showSecondaryPIP = pIPState1.showSecondaryPIP;
      const getScaledPIPContainerHeight = setMode(stateFromStores2[16]).getScaledPIPContainerHeight;
      setMode(stateFromStores2[16]);
      const tmp = pIPState1;
      if (showSecondaryPIP) {
        showSecondaryPIP = closure_1;
      }
      scale2 = tmp.scale;
      const scaledPIPContainerHeight = getScaledPIPContainerHeight(obj);
      const value = sharedValue.get();
      if (value.active) {
        x = value.baseX + value.offsetX;
        y = value.baseY + value.offsetY;
      } else {
        size = { pipX: wrapperDimensions.get().pipX, pipY: wrapperDimensions.get().pipY, width: result, height: scaledPIPContainerHeight, windowDimensions: windowDimensions.get(), safeArea: safeArea.get(), bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom, topAvoidanceRegion: pipAvoidanceSpecs.get().top };
        const getClampedPIPPosition = setMode(stateFromStores2[16]).getClampedPIPPosition;
        setMode(stateFromStores2[16]);
        const clampedPIPPosition = getClampedPIPPosition(size);
        ({ x, y } = clampedPIPPosition);
      }
      if (value.active) {
        PIP_LAYOUT_PHYSICS = DRAWER_SPRING_PHYSICS;
      } else {
        PIP_LAYOUT_PHYSICS = tmp3(tmp4[16]).PIP_LAYOUT_PHYSICS;
      }
      const size1 = { width: result, height: scaledPIPContainerHeight, opacity: sharedValue1.get(), transform: items, borderRadius: tmp3Result6.getVoicePanelPIPBorderRadius(result, scaledPIPContainerHeight) };
      const obj2 = { translateX: tmp3Result4.withSpring(x, PIP_LAYOUT_PHYSICS) };
      items = [obj2, ];
      tmp3Result4 = setMode(stateFromStores2[18]);
      const obj3 = { translateY: tmp3Result5.withSpring(y, PIP_LAYOUT_PHYSICS) };
      items[1] = obj3;
      tmp3Result5 = setMode(stateFromStores2[18]);
      tmp3Result6 = setMode(stateFromStores2[16]);
      return size1;
    }
  }
  const obj7 = { pipState: pIPState1, getScaledPIPContainerHeight: tmp5(tmp3[16]).getScaledPIPContainerHeight, mainTileInLayout: tmp12, gestureState: sharedValue, getClampedPIPPosition: tmp5(tmp3[16]).getClampedPIPPosition, wrapperDimensions, windowDimensions, safeArea, pipAvoidanceSpecs, DRAWER_SPRING_PHYSICS, PIP_LAYOUT_PHYSICS: tmp5(tmp3[16]).PIP_LAYOUT_PHYSICS, opacity: sharedValue1, withSpring: tmp5(tmp3[18]).withSpring, getVoicePanelPIPBorderRadius: tmp5(tmp3[16]).getVoicePanelPIPBorderRadius };
  K.__closure = obj7;
  K.__workletHash = 8053970012929;
  K.__initData = __initData2;
  const animatedStyle = tmp5Result13.useAnimatedStyle(K);
  const tmp5Result14 = tmp5(tmp3[15]);
  class Q {
    constructor() {
      let height;
      let obj2;
      let scale;
      let width;
      ({ width, height, scale } = pIPState1);
      size = { width: width * scale.get(), height: height * scale.get(), borderRadius: obj2.getVoicePanelPIPBorderRadius(width, height) };
      obj2 = setMode(stateFromStores2[16]);
      return size;
    }
  }
  const obj8 = { pipState: pIPState1, getVoicePanelPIPBorderRadius: tmp5(tmp3[16]).getVoicePanelPIPBorderRadius };
  Q.__closure = obj8;
  Q.__workletHash = 16127624969315;
  Q.__initData = __initData3;
  const animatedStyle1 = tmp5Result14.useAnimatedStyle(Q);
  const tmp5Result15 = tmp5(tmp3[15]);
  class Z {
    constructor() {
      let opacity = 0;
      if (pIPCardsSettled) {
        opacity = 1;
      }
      return { opacity };
    }
  }
  Z.__closure = { mainTileVisible: tmp13 };
  Z.__workletHash = 10222959683662;
  Z.__initData = __initData4;
  const items2 = [sharedValue, pipAvoidanceSpecs, , , , , , , , , , ];
  ({ containerHeight: arr3[2], height: arr3[3], scale: arr3[4], showSecondaryPIP: arr3[5], width: arr3[6] } = pIPState1);
  items2[7] = safeArea;
  items2[8] = callback;
  items2[9] = windowDimensions;
  items2[10] = wrapperDimensions;
  items2[11] = wrapperOffset;
  const animatedStyle2 = tmp5Result15.useAnimatedStyle(Z);
  const items3 = [controlsSpecs2, hideControls, setFocused, showControls, mode2, setMode2];
  const memo = obj.useMemo(() => {
    let styles;
    const Gesture = setMode(stateFromStores2[19]).Gesture;
    const PanResult = Gesture.Pan();
    const manualActivationResult = PanResult.manualActivation(true);
    let result = manualActivationResult.shouldCancelWhenOutside(false);
    const fn = function c(allTouches) {
      const tmp = stateFromStores(allTouches.allTouches);
      const tmp2 = stateFromStores1(allTouches.allTouches, tmp);
      if (sharedValue.get().pressed) {
        const obj3 = { originX: null, originY: null, spread: tmp2 };
        ({ x: obj2.originX, y: obj2.originY } = tmp);
        closure_1(controlsSpecs2[17])(sharedValue, obj3);
      } else {
        const obj = { pressed: true, spread: tmp2 };
        set = sharedValue.set;
        const merged = Object.assign(callback1);
        ({ x: obj.originX, y: obj.originY } = tmp);
        const result = set(obj);
      }
    };
    let obj = { getTouchesCentroid, getTouchesSpread, gestureState: sharedValue, INACTIVE_GESTURE_STATE, updateSharedValueIfChanged: pIPState(stateFromStores2[17]) };
    fn.__closure = obj;
    fn.__workletHash = 8382885098999;
    fn.__initData = __initData5;
    const fn2 = function s(allTouches) {
      let closure_0 = allTouches;
      allTouches = allTouches.allTouches;
      const found = allTouches.filter((item) => {
        changedTouches = item;
        changedTouches = changedTouches.changedTouches;
        return !changedTouches.some((id) => id.id === id.id);
      });
      if (0 !== found.length) {
        const tmp6 = stateFromStores(found);
        const obj = { originX: null, originY: null, spread: stateFromStores1(found, tmp6) };
        ({ x: obj.originX, y: obj.originY } = tmp6);
        const tmp9 = closure_1(controlsSpecs2[17]);
        tmp9(sharedValue, obj);
      } else {
        closure_1(controlsSpecs2[17])(sharedValue, { pressed: false });
      }
    };
    const onTouchesDownResult = result.onTouchesDown(fn);
    let obj2 = { updateSharedValueIfChanged: pIPState(stateFromStores2[17]), gestureState: sharedValue, getTouchesCentroid, getTouchesSpread };
    fn2.__closure = obj2;
    fn2.__workletHash = 2310608882572;
    fn2.__initData = __initData4;
    const fn3 = function o(allTouches, activate) {
      let obj6;
      let tmp3Result3;
      const point = stateFromStores(allTouches.allTouches);
      const tmp = stateFromStores1(allTouches.allTouches, point);
      const value = sharedValue.get();
      if (value.active) {
        const diff = value.offsetX + point.x - value.originX;
        const diff1 = value.offsetY + point.y - value.originY;
        let sum1 = diff1;
        let sum = diff;
        if (value.spread > 8) {
          sum1 = diff1;
          sum = diff;
          if (8 < tmp) {
            const scale3 = styles.scale;
            const value3 = scale3.get();
            ({ width: obj8.width, containerHeight: obj8.containerHeight, showSecondaryPIP: obj8.showSecondaryPIP } = styles);
            const obj2 = { scale: value3 * (tmp / value.spread), width: null, containerHeight: null, showSecondaryPIP: null, windowDimensions: windowDimensions.get(), safeArea: safeArea.get(), pipAvoidanceSpecs: pipAvoidanceSpecs.get() };
            const clampPIPScale = mode2(controlsSpecs2[16]).clampPIPScale;
            mode2(controlsSpecs2[16]);
            const clampPIPScaleResult = clampPIPScale(obj2);
            sum1 = diff1;
            sum = diff;
            const tmp28 = styles;
            if (clampPIPScaleResult !== value3) {
              const scale2 = tmp28.scale;
              const result = scale2.set(clampPIPScaleResult);
              const result1 = clampPIPScaleResult / value3;
              sum = diff + (point.x - (value.baseX + diff)) * (1 - result1);
              sum1 = diff1 + (point.y - (value.baseY + diff1)) * (1 - result1);
            }
          }
        }
        const obj3 = { pressed: null, active: true, baseX: null, baseY: null, offsetX: sum, offsetY: sum1, originX: null, originY: null, spread: tmp };
        ({ pressed: obj7.pressed, baseX: obj7.baseX, baseY: obj7.baseY } = value);
        ({ x: obj7.originX, y: obj7.originY } = point);
        const result2 = obj.set(obj3);
      } else if (allTouches.state === mode2(controlsSpecs2[19]).State.BEGAN) {
        const _Math3 = Math;
        if (Math.abs(value.originX - point.x) <= 10) {
          const _Math = Math;
          if (Math.abs(value.originY - point.y) <= 10) {
            const _Math2 = Math;
          }
        }
        const scale = styles.scale;
        const value4 = scale.get();
        size = { pipX: wrapperDimensions.get().pipX, pipY: wrapperDimensions.get().pipY, width: styles.width * value4, height: tmp3Result3.getScaledPIPContainerHeight(obj6), windowDimensions: windowDimensions.get(), safeArea: safeArea.get(), bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom, topAvoidanceRegion: pipAvoidanceSpecs.get().top };
        const getClampedPIPPosition = mode2(controlsSpecs2[16]).getClampedPIPPosition;
        mode2(controlsSpecs2[16]);
        obj6 = { height: null, containerHeight: null, showSecondaryPIP: null, scale: value4 };
        ({ height: obj4.height, containerHeight: obj4.containerHeight, showSecondaryPIP: obj4.showSecondaryPIP } = styles);
        tmp3Result3 = mode2(controlsSpecs2[16]);
        const clampedPIPPosition = getClampedPIPPosition(size);
        const obj12 = { pressed: true, active: true, baseX: null, baseY: null, offsetX: 0, offsetY: 0, originX: null, originY: null, spread: tmp };
        ({ x: obj5.baseX, y: obj5.baseY } = clampedPIPPosition);
        ({ x: obj5.originX, y: obj5.originY } = point);
        const result3 = obj.set(obj12);
        closure_1(controlsSpecs2[17])(wrapperOffset, { gestureActive: true, x: 0, y: 0 });
        activate.activate();
        const tmp3Result4 = mode2(controlsSpecs2[15]);
        tmp3Result4.runOnJS(closure_1(controlsSpecs2[20]))();
      }
    };
    const onTouchesUpResult = onTouchesDownResult.onTouchesUp(fn2);
    let obj3 = { getTouchesCentroid, getTouchesSpread, gestureState: sharedValue, MIN_PINCH_SPAN: 8, pipState: pIPState1, clampPIPScale: setMode(stateFromStores2[16]).clampPIPScale, windowDimensions, safeArea, pipAvoidanceSpecs, State: setMode(stateFromStores2[19]).State, MIN_GESTURE_START: 10, getClampedPIPPosition: setMode(stateFromStores2[16]).getClampedPIPPosition, wrapperDimensions, getScaledPIPContainerHeight: setMode(stateFromStores2[16]).getScaledPIPContainerHeight, updateSharedValueIfChanged: pIPState(stateFromStores2[17]), wrapperOffset, runOnJS: setMode(stateFromStores2[15]).runOnJS, triggerIOSHaptic: pIPState(stateFromStores2[20]) };
    fn3.__closure = obj3;
    fn3.__workletHash = 15442672049098;
    fn3.__initData = __initData3;
    const fn4 = function n(arg0) {
      let velocityX;
      let velocityY;
      ({ velocityX, velocityY } = arg0);
      settlePIPPosition(sharedValue.get(), velocityX, velocityY);
      closure_1(controlsSpecs2[17])(wrapperOffset, { gestureActive: false });
      const result = sharedValue.set(callback1);
      const obj = mode2(controlsSpecs2[15]);
      obj.runOnJS(closure_1(controlsSpecs2[21]).updateSourceTrackingView)();
      const scale = styles.scale;
      const obj2 = mode2(controlsSpecs2[15]);
      const runOnJSResult = obj2.runOnJS(mode2(controlsSpecs2[22]).setVoicePanelPIPScaleCached);
      runOnJSResult(scale.get());
    };
    const onTouchesMoveResult = onTouchesUpResult.onTouchesMove(fn3);
    const obj4 = { gestureState: sharedValue, settlePIPPosition, updateSharedValueIfChanged: pIPState(stateFromStores2[17]), wrapperOffset, INACTIVE_GESTURE_STATE, runOnJS: setMode(stateFromStores2[15]).runOnJS, updateSourceTrackingView: pIPState(stateFromStores2[21]).updateSourceTrackingView, setVoicePanelPIPScaleCached: setMode(stateFromStores2[22]).setVoicePanelPIPScaleCached, pipState: pIPState1 };
    fn4.__closure = obj4;
    fn4.__workletHash = 6370347653119;
    fn4.__initData = __initData2;
    const fn5 = function t() {
      closure_1(controlsSpecs2[17])(wrapperOffset, { gestureActive: false });
      const result = sharedValue.set(callback1);
    };
    const onEndResult = onTouchesMoveResult.onEnd(fn4);
    const obj5 = { updateSharedValueIfChanged: pIPState(stateFromStores2[17]), wrapperOffset, gestureState: sharedValue, INACTIVE_GESTURE_STATE };
    fn5.__closure = obj5;
    fn5.__workletHash = 2172979585945;
    fn5.__initData = __initData;
    return onEndResult.onFinalize(fn5);
  }, items2);
  const memo1 = obj.useMemo(() => {
    const Gesture = setMode(stateFromStores2[19]).Gesture;
    const Exclusive = Gesture.Exclusive;
    const Gesture2 = setMode(stateFromStores2[19]).Gesture;
    const TapResult = Gesture2.Tap();
    const fn = function o() {
      const obj = mode2(controlsSpecs2[15]);
      obj.runOnJS(setFocused)(null);
    };
    const enabledResult = TapResult.enabled(mode2 !== VoicePanelPIPModes.IN_APP);
    const maxDistanceResult = enabledResult.maxDistance(30);
    let obj = { runOnJS: setMode(stateFromStores2[15]).runOnJS, setFocused };
    fn.__closure = obj;
    fn.__workletHash = 12274741816775;
    fn.__initData = __initData6;
    const onStartResult = maxDistanceResult.onStart(fn);
    const numberOfTapsResult = onStartResult.numberOfTaps(2);
    const Gesture3 = setMode(stateFromStores2[19]).Gesture;
    const TapResult1 = Gesture3.Tap();
    const fn2 = function t() {
      if (closure_1_0 === wrapperOffset.IN_APP) {
        const obj3 = mode2(controlsSpecs2[15]);
        obj3.runOnJS(setMode2)(windowDimensions.PANEL);
      } else if (closure_1_3.get().mode === wrapperDimensions.HIDDEN) {
        const obj2 = mode2(controlsSpecs2[15]);
        obj2.runOnJS(showControls)();
      } else {
        const obj = mode2(controlsSpecs2[15]);
        obj.runOnJS(hideControls)();
      }
    };
    const enabledResult1 = TapResult1.enabled(true);
    const maxDistanceResult1 = enabledResult1.maxDistance(30);
    let obj2 = { pipMode: mode2, VoicePanelPIPModes, runOnJS: setMode(stateFromStores2[15]).runOnJS, setMode: setMode2, VoicePanelModes, controlsSpecs: controlsSpecs2, VoicePanelControlsModes, showControls, hideControls };
    fn2.__closure = obj2;
    fn2.__workletHash = 2882749351054;
    fn2.__initData = __initData7;
    return Exclusive(numberOfTapsResult, maxDistanceResult1.onStart(fn2));
  }, items3);
  const items4 = [EmbeddedActivitiesStore];
  const tmp5Result16 = tmp5(tmp3[23]);
  stateFromStores = tmp5Result16.useStateFromStores(items4, () => {
    currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
    let _location;
    const getEmbeddedActivityLocationChannelId = setMode(stateFromStores2[24]).getEmbeddedActivityLocationChannelId;
    setMode(stateFromStores2[24]);
    if (currentEmbeddedActivity != null) {
      _location = currentEmbeddedActivity.location;
    }
    return getEmbeddedActivityLocationChannelId(_location) !== channelId;
  });
  const items5 = [FramesStore];
  const tmp5Result17 = tmp5(tmp3[23]);
  stateFromStores1 = tmp5Result17.useStateFromStores(items5, () => {
    const mainFrame = FramesStore.getMainFrame();
    let id = null;
    if (isLaunched(mainFrame)) {
      id = mainFrame.id;
    }
    return id;
  });
  const items6 = [stateFromStores, stateFromStores1, setMode2, setFocused];
  callback1 = obj.useCallback(() => {
    const tmp = stateFromStores;
    if (tmp) {
      setMode2(VoicePanelModes.PIP);
      setFocused(null);
    }
    if (null != stateFromStores1) {
      const obj2 = pIPState(stateFromStores2[25]);
      obj2.updateFramePanelMode(tmp8, constants.PANEL);
    } else {
      const obj = sharedValue(stateFromStores2[26]);
      const result = obj.updateActivityPanelMode(constants.PANEL);
    }
  }, items6);
  const items7 = [callback1];
  const memo2 = obj.useMemo(() => {
    const Gesture = setMode(stateFromStores2[19]).Gesture;
    const fn = function t() {
      const obj = mode2(controlsSpecs2[15]);
      obj.runOnJS(callback1)();
    };
    const TapResult = Gesture.Tap();
    const maxDistanceResult = TapResult.maxDistance(30);
    let obj = { runOnJS: setMode(stateFromStores2[15]).runOnJS, handleSecondaryPIPTap: callback1 };
    fn.__closure = obj;
    fn.__workletHash = 16816842509722;
    fn.__initData = __initData8;
    return maxDistanceResult.onStart(fn);
  }, items7);
  let pushToTalk = tmp2(tmp3[27])(controlsSpecs).pushToTalk;
  let fn2 = function n() {
    let obj2;
    const obj = { borderRadius: obj2.getVoicePanelPIPBorderRadius(pIPState.width, pIPState.height) };
    obj2 = VoicePanelPIPUtils;
    return obj;
  };
  const tmp5Result18 = tmp5(tmp3[15]);
  fn2.__closure = { getVoicePanelPIPBorderRadius: tmp5(tmp3[16]).getVoicePanelPIPBorderRadius, pipState: pIPState };
  fn2.__workletHash = 8247781658227;
  fn2.__initData = __initData5;
  ({ getVoicePanelPIPBorderRadius: tmp5(tmp3[16]).getVoicePanelPIPBorderRadius, pipState: pIPState });
  const animatedStyle3 = tmp5Result18.useAnimatedStyle(fn2);
  const items8 = [setMode];
  const memo3 = obj.useMemo(() => {
    let intl;
    let items;
    const obj = {
      accessible: true,
      accessibilityLabel: intl.string(intl2.t.oN8bqe),
      accessibilityRole: "button",
      accessibilityActions: items,
      onAccessibilityAction() {
        setMode(VoicePanelModes.PANEL);
      }
    };
    intl = intl2.intl;
    items = [{ name: "activate" }];
    return obj;
  }, items8);
  const items9 = [FramesStore];
  const tmp5Result19 = tmp5(tmp3[23]);
  stateFromStores2 = tmp5Result19.useStateFromStores(items9, () => {
    const mainFrame = FramesStore.getMainFrame();
    let id = null;
    if (isLaunched(mainFrame)) {
      id = mainFrame.id;
    }
    return id;
  });
  const items10 = [stateFromStores2];
  callback2 = obj.useCallback(() => {
    if (null != stateFromStores2) {
      const obj2 = FramesActionCreatorsDefault;
      obj2.updateFramePanelMode(tmp, ActivityPanelModes.PANEL);
    } else {
      const obj = EmbeddedActivitiesActionCreatorsAll;
      const result = obj.updateActivityPanelMode(ActivityPanelModes.PANEL);
    }
  }, items10);
  const items11 = [callback2];
  const memo4 = obj.useMemo(() => {
    let intl;
    let items;
    const obj = { accessible: true, accessibilityLabel: intl.string(intl2.t["3ejJer"]), accessibilityActions: items, onAccessibilityAction: callback2 };
    intl = intl2.intl;
    items = [{ name: "activate" }];
    return obj;
  }, items11);
  if (pushToTalk) {
    pushToTalk = pIPState.mode !== tmp10.IN_PANEL || tmp35;
  }
  let fn3 = function u() {
    let height;
    let scale;
    const obj = { height: height * scale.get() };
    ({ scale, height } = pIPState);
    return obj;
  };
  fn3.__closure = { pipState: pIPState };
  fn3.__workletHash = 10050652227575;
  fn3.__initData = __initData6;
  let fn4 = function h(originX) {
    let obj2;
    let obj3;
    let targetHeight;
    let targetWidth;
    const active = sharedValue.get().active;
    size = { originX: obj2.withSpring(originX.targetOriginX, VoicePanelPIPUtils.PIP_LAYOUT_PHYSICS), originY: obj3.withSpring(originX.targetOriginY, VoicePanelPIPUtils.PIP_LAYOUT_PHYSICS), width: targetWidth, height: targetHeight };
    obj2 = spring;
    obj3 = spring;
    if (active) {
      targetWidth = originX.targetWidth;
    } else {
      const tmpResult = spring;
      targetWidth = tmpResult.withSpring(originX.targetWidth, tmp(16912).PIP_LAYOUT_PHYSICS);
    }
    if (active) {
      targetHeight = originX.targetHeight;
    } else {
      const tmpResult2 = spring;
      targetHeight = tmpResult2.withSpring(originX.targetHeight, tmp(16912).PIP_LAYOUT_PHYSICS);
    }
    return { animations: size, initialValues: { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight } };
  };
  const obj10 = { gestureState: sharedValue, withSpring: tmp5(tmp3[18]).withSpring, PIP_LAYOUT_PHYSICS: tmp5(tmp3[16]).PIP_LAYOUT_PHYSICS };
  const tmp5Result20 = tmp5(tmp3[15]);
  const animatedStyle4 = tmp5Result20.useAnimatedStyle(fn3);
  const useCallback = obj.useCallback;
  fn4.__closure = obj10;
  fn4.__workletHash = 3242653617608;
  fn4.__initData = __initData7;
  const items12 = [sharedValue];
  const callback3 = useCallback(fn4, items12);
  const obj11 = { pointerEvents: "box-none", style: items13, layout: callback3, children: items19 };
  items13 = [tmp.container, animatedStyle];
  let obj12 = { gesture: memo, children: closure_16(tmp2Result8, obj13) };
  const tmp2Result = tmp2(tmp3[29]);
  const GestureDetector = tmp5(tmp3[19]).GestureDetector;
  let tmp41Result = null;
  obj13 = { pointerEvents: "box-none", style: tmp.multiPipContainer, layout: callback3, children: items16 };
  tmp2Result8 = tmp2(tmp3[29]);
  if (tmp9 || !pIPPanelLayoutCommitted) {
    const obj14 = { style: items14, pointerEvents: "box-none", layout: callback3, children: closure_15(GestureDetector2, obj15) };
    items14 = [, , , ];
    ({ pipContentWrapper: arr15[0], inAppElevationShadow: arr15[1] } = tmp);
    items14[2] = animatedStyle1;
    items14[3] = animatedStyle2;
    const tmp2Result9 = tmp2(tmp3[29]);
    let merged = Object.assign(memo3);
    obj15 = { gesture: memo1, children: closure_15(tmp2Result10, obj16) };
    GestureDetector2 = tmp5(tmp3[19]).GestureDetector;
    obj16 = { style: items15, layout: callback3, children: closure_15(tmp2(tmp3[30]), obj17) };
    items15 = [tmp.pipMask, animatedStyle3];
    obj17 = { layoutTransition: callback3 };
    tmp2Result10 = tmp2(tmp3[29]);
    tmp41Result = tmp41(tmp2Result9, obj14);
  }
  items16 = [tmp41Result, ];
  let tmp41Result3 = null;
  if (pIPState.showSecondaryPIP) {
    const obj18 = { style: items17, children: closure_15(tmp2Result12, obj19) };
    items17 = [, , ];
    ({ pipContentWrapper: arr18[0], inAppElevationShadow: arr18[1] } = tmp);
    items17[2] = animatedStyle1;
    const tmp2Result11 = tmp2(tmp3[29]);
    const merged1 = Object.assign(memo4);
    obj19 = { style: items18, children: closure_15(GestureDetector3, obj20) };
    items18 = [tmp.pipMask, animatedStyle3];
    obj20 = { gesture: memo2, children: closure_15(tmp2Result13, obj21) };
    tmp2Result12 = tmp2(tmp3[29]);
    GestureDetector3 = tmp5(tmp3[19]).GestureDetector;
    obj21 = { style: StyleSheet.absoluteFill, children: closure_15(tmp2(tmp3[32]), {}) };
    tmp2Result13 = tmp2(tmp3[31]);
    tmp41Result3 = tmp41(tmp2Result11, obj18);
  }
  items16[1] = tmp41Result3;
  items19 = [closure_15(GestureDetector, obj12), ];
  let tmp41Result4 = null;
  if (tmp13) {
    tmp41Result4 = null;
    if (pushToTalk) {
      const obj22 = { pointerEvents: "box-none", style: items20, layout: callback3, children: closure_15(tmp2(tmp3[33]), {}) };
      items20 = [tmp.pushToTalkContainer, animatedStyle4];
      const tmp2Result14 = tmp2(tmp3[29]);
      tmp41Result4 = tmp41(tmp2Result14, obj22);
    }
  }
  items19[1] = tmp41Result4;
  return closure_16(tmp2Result, obj11);
}
function renderPIPWrapper(arg0, arg1, transitionState, transitionCleanUp) {
  const obj = { transitionState, transitionCleanUp };
  return closure_15(closure_37, obj, arg0);
}
const StyleSheet = react_native.StyleSheet;
({ DRAWER_SPRING_PHYSICS: c9, VoicePanelModes: c10, SECONDARY_PIP_TOP_MARGIN } = VoicePanelConstants);
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const VoicePanelPIPModes = VoicePanelPIPConstants.VoicePanelPIPModes;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const isLaunched = FramesConstants.isLaunched;
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { position: "absolute", zIndex: 10 }, pipContentWrapper: { backgroundColor: "black" }, inAppElevationShadow: {}, pipMask: obj2, multiPipContainer: obj3, pushToTalkContainer: { position: "absolute", top: 0, left: 0, right: 0 } };
obj2 = { overflow: "hidden" };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { flexDirection: "column", alignItems: "center", gap: SECONDARY_PIP_TOP_MARGIN };
let merged1 = Object.assign(StyleSheet.absoluteFillObject);
let closure_17 = createStyles(obj);
function getTouchesCentroid(arg0) {
  let num = 0;
  let num2 = 0;
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    num = num + nextResult.absoluteX;
    num2 = num2 + nextResult.absoluteY;
    continue;
  }
  const point = { x: num / arg0.length, y: num2 / arg0.length };
  return point;
}
getTouchesCentroid.__closure = {};
getTouchesCentroid.__workletHash = 15663926518076;
getTouchesCentroid.__initData = { code: "function getTouchesCentroid_VoicePanelPIPTsx1(touches){let x=0;let y=0;for(const touch of touches){x+=touch.absoluteX;y+=touch.absoluteY;}return{x:x/touches.length,y:y/touches.length};}" };
function getTouchesSpread(arg0, arg1) {
  if (arg0.length < 2) {
    return 0;
  } else {
    let num = 0;
    const iter = arg0[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let diff = nextResult.absoluteX - arg1.x;
      let diff1 = nextResult.absoluteY - arg1.y;
      let _Math = Math;
      num = num + Math.sqrt(diff * diff + diff1 * diff1);
      continue;
    }
    return num / arg0.length;
  }
}
getTouchesSpread.__closure = {};
getTouchesSpread.__workletHash = 14242071118706;
getTouchesSpread.__initData = { code: "function getTouchesSpread_VoicePanelPIPTsx2(touches,centroid){if(touches.length<2)return 0;let total=0;for(const touch of touches){const dx=touch.absoluteX-centroid.x;const dy=touch.absoluteY-centroid.y;total+=Math.sqrt(dx*dx+dy*dy);}return total/touches.length;}" };
let closure_20 = { pressed: false, active: false, baseX: 0, baseY: 0, offsetX: 0, offsetY: 0, originX: 0, originY: 0, spread: 0 };
const __initData = { code: "function VoicePanelPIPTsx3(state,velocityX,velocityY){const{pipState,getScaledPIPContainerHeight,calculatePIPPositionFromVelocity,windowDimensions,safeArea,updateSharedValueIfChanged,wrapperDimensions}=this.__closure;const scale=pipState.scale.get();const width=pipState.width*scale;const height=getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,scale:scale});const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:state.baseX+state.offsetX+width/2,absoluteY:state.baseY+state.offsetY+height/2,windowDimensions:windowDimensions.get(),safeArea:safeArea.get()});updateSharedValueIfChanged(wrapperDimensions,{pipX:pipX,pipY:pipY});}" };
const __initData2 = { code: "function VoicePanelPIPTsx4(){const{pipState,getScaledPIPContainerHeight,mainTileInLayout,gestureState,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,DRAWER_SPRING_PHYSICS,PIP_LAYOUT_PHYSICS,opacity,withSpring,getVoicePanelPIPBorderRadius}=this.__closure;const width=pipState.width*pipState.scale.get();const height=getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP&&mainTileInLayout,scale:pipState.scale.get()});const state=gestureState.get();let x;let y;if(state.active){x=state.baseX+state.offsetX;y=state.baseY+state.offsetY;}else{const clamped=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:width,height:height,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top});x=clamped.x;y=clamped.y;}const physics=state.active?DRAWER_SPRING_PHYSICS:PIP_LAYOUT_PHYSICS;return{width:width,height:height,opacity:opacity.get(),transform:[{translateX:withSpring(x,physics)},{translateY:withSpring(y,physics)}],borderRadius:getVoicePanelPIPBorderRadius(width,height)};}" };
const __initData3 = { code: "function VoicePanelPIPTsx5(){const{pipState,getVoicePanelPIPBorderRadius}=this.__closure;const{width:width,height:height,scale:scale}=pipState;return{width:width*scale.get(),height:height*scale.get(),borderRadius:getVoicePanelPIPBorderRadius(width,height)};}" };
const __initData4 = { code: "function VoicePanelPIPTsx6(){const{mainTileVisible}=this.__closure;return{opacity:mainTileVisible?1:0};}" };
let closure_25 = { code: "function VoicePanelPIPTsx7(){const{updateSharedValueIfChanged,wrapperOffset,gestureState,INACTIVE_GESTURE_STATE}=this.__closure;updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});gestureState.set(INACTIVE_GESTURE_STATE);}" };
let closure_26 = { code: "function VoicePanelPIPTsx8({velocityX:velocityX,velocityY:velocityY}){const{gestureState,settlePIPPosition,updateSharedValueIfChanged,wrapperOffset,INACTIVE_GESTURE_STATE,runOnJS,updateSourceTrackingView,setVoicePanelPIPScaleCached,pipState}=this.__closure;const state=gestureState.get();settlePIPPosition(state,velocityX,velocityY);updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});gestureState.set(INACTIVE_GESTURE_STATE);runOnJS(updateSourceTrackingView)();runOnJS(setVoicePanelPIPScaleCached)(pipState.scale.get());}" };
let closure_27 = { code: "function VoicePanelPIPTsx9(event,manager){const{getTouchesCentroid,getTouchesSpread,gestureState,MIN_PINCH_SPAN,pipState,clampPIPScale,windowDimensions,safeArea,pipAvoidanceSpecs,State,MIN_GESTURE_START,getClampedPIPPosition,wrapperDimensions,getScaledPIPContainerHeight,updateSharedValueIfChanged,wrapperOffset,runOnJS,triggerIOSHaptic}=this.__closure;const centroid=getTouchesCentroid(event.allTouches);const spread=getTouchesSpread(event.allTouches,centroid);const state=gestureState.get();if(state.active){let offsetX=state.offsetX+centroid.x-state.originX;let offsetY=state.offsetY+centroid.y-state.originY;if(state.spread>MIN_PINCH_SPAN&&spread>MIN_PINCH_SPAN){const previousScale=pipState.scale.get();const scale=clampPIPScale({scale:previousScale*(spread/state.spread),width:pipState.width,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),pipAvoidanceSpecs:pipAvoidanceSpecs.get()});if(scale!==previousScale){pipState.scale.set(scale);const scaleChange=scale/previousScale;offsetX+=(centroid.x-(state.baseX+offsetX))*(1-scaleChange);offsetY+=(centroid.y-(state.baseY+offsetY))*(1-scaleChange);}}gestureState.set({pressed:state.pressed,active:true,baseX:state.baseX,baseY:state.baseY,offsetX:offsetX,offsetY:offsetY,originX:centroid.x,originY:centroid.y,spread:spread});return;}if(event.state!==State.BEGAN)return;if(Math.abs(state.originX-centroid.x)>MIN_GESTURE_START||Math.abs(state.originY-centroid.y)>MIN_GESTURE_START||Math.abs(state.spread-spread)>MIN_GESTURE_START){const scale=pipState.scale.get();const{x:x,y:y}=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:pipState.width*scale,height:getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,scale:scale}),windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top});gestureState.set({pressed:true,active:true,baseX:x,baseY:y,offsetX:0,offsetY:0,originX:centroid.x,originY:centroid.y,spread:spread});updateSharedValueIfChanged(wrapperOffset,{gestureActive:true,x:0,y:0});manager.activate();runOnJS(triggerIOSHaptic)();}}" };
let closure_28 = { code: "function VoicePanelPIPTsx10(event){const{updateSharedValueIfChanged,gestureState,getTouchesCentroid,getTouchesSpread}=this.__closure;const remainingTouches=event.allTouches.filter(function(touch){return!event.changedTouches.some(function(changedTouch){return changedTouch.id===touch.id;});});if(remainingTouches.length===0){updateSharedValueIfChanged(gestureState,{pressed:false});return;}const centroid=getTouchesCentroid(remainingTouches);updateSharedValueIfChanged(gestureState,{originX:centroid.x,originY:centroid.y,spread:getTouchesSpread(remainingTouches,centroid)});}" };
let closure_29 = { code: "function VoicePanelPIPTsx11(event){const{getTouchesCentroid,getTouchesSpread,gestureState,INACTIVE_GESTURE_STATE,updateSharedValueIfChanged}=this.__closure;const centroid=getTouchesCentroid(event.allTouches);const spread=getTouchesSpread(event.allTouches,centroid);const state=gestureState.get();if(!state.pressed){gestureState.set({...INACTIVE_GESTURE_STATE,pressed:true,originX:centroid.x,originY:centroid.y,spread:spread});return;}updateSharedValueIfChanged(gestureState,{originX:centroid.x,originY:centroid.y,spread:spread});}" };
let closure_30 = { code: "function VoicePanelPIPTsx12(){const{runOnJS,setFocused}=this.__closure;runOnJS(setFocused)(null);}" };
let closure_31 = { code: "function VoicePanelPIPTsx13(){const{pipMode,VoicePanelPIPModes,runOnJS,setMode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,showControls,hideControls}=this.__closure;if(pipMode===VoicePanelPIPModes.IN_APP){runOnJS(setMode)(VoicePanelModes.PANEL);}else{if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){runOnJS(showControls)();}else{runOnJS(hideControls)();}}}" };
let closure_32 = { code: "function VoicePanelPIPTsx14(){const{runOnJS,handleSecondaryPIPTap}=this.__closure;runOnJS(handleSecondaryPIPTap)();}" };
const __initData5 = { code: "function VoicePanelPIPTsx15(){const{getVoicePanelPIPBorderRadius,pipState}=this.__closure;return{borderRadius:getVoicePanelPIPBorderRadius(pipState.width,pipState.height)};}" };
const __initData6 = { code: "function VoicePanelPIPTsx16(){const{pipState}=this.__closure;return{height:pipState.height*pipState.scale.get()};}" };
const __initData7 = { code: "function VoicePanelPIPTsx17(values){const{gestureState,withSpring,PIP_LAYOUT_PHYSICS}=this.__closure;const active=gestureState.get().active;return{animations:{originX:withSpring(values.targetOriginX,PIP_LAYOUT_PHYSICS),originY:withSpring(values.targetOriginY,PIP_LAYOUT_PHYSICS),width:active?values.targetWidth:withSpring(values.targetWidth,PIP_LAYOUT_PHYSICS),height:active?values.targetHeight:withSpring(values.targetHeight,PIP_LAYOUT_PHYSICS)},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};}" };
let closure_37 = react.memo((transitionState) => {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  const pipHandoff = react.useContext(transitionCleanUp(11754)).pipHandoff;
  const obj = transitionState(16916);
  const mode = obj.usePIPState().mode;
  const obj2 = transitionState(11761);
  const pIPCardsSettled = obj2.usePIPCardsSettled(pipHandoff);
  const obj3 = transitionState(11761);
  const pIPPanelLayoutCommitted = obj3.usePIPPanelLayoutCommitted(pipHandoff);
  const items = [transitionState, pIPPanelLayoutCommitted, transitionCleanUp];
  const effect = react.useEffect(() => {
    const tmp = transitionState === native.TransitionStates.YEETED && pIPPanelLayoutCommitted;
    if (tmp) {
      transitionCleanUp();
    }
  }, items);
  return closure_15(VoicePanelPIP, {});
});
const memoResult = react.memo(function VoicePanelPIPWrapper() {
  let mode;
  let showSecondaryPIP;
  let tmp3;
  const obj = VoicePanelPIPStateContext;
  const pIPState = obj.usePIPState();
  ({ mode, showSecondaryPIP } = pIPState);
  const TransitionItem = native.TransitionItem;
  const tmp2 = closure_15;
  if (null != mode) {
    tmp3 = { pipMode: mode };
  }
  const obj3 = { item: tmp3, renderItem: renderPIPWrapper };
  return tmp2(TransitionItem, obj3);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIP.tsx");

export default memoResult;
