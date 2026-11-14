// Module ID: 20061
// Function ID: 20062
// Name: VoicePanelPIP
// Dependencies: [19, 17, 5154, 7019, 6901, 11985, 11983, 19909, 5959, 7020, 21, 5306, 11984, 11995, 11993, 19971, 1655, 19908, 11989, 5939, 5548, 1187, 5598, 1708, 19979, 6181, 504, 5227, 12743, 12741, 11253, 1113, 20062, 7722, 20066, 20067, 5377, 2]
// Exports: usePIPTileHandoff

// Module 20061 (VoicePanelPIP)
import intl2 from "intl" /* 1113 */;
import native from "native" /* 5377 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5959 */;
import FramesConstants from "FramesConstants" /* 7020 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11983 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11984 */;
import VoicePanelPIPHandoff from "VoicePanelPIPHandoff" /* 11993 */;
import VoicePanelPIPStateContext from "VoicePanelPIPStateContext" /* 11995 */;
import EmbeddedActivitiesActionCreatorsAll from "EmbeddedActivitiesActionCreators" /* 12741 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 12743 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 5154 */;
import FramesStore from "FramesStore" /* 7019 */;
import VoicePanelStore from "VoicePanelStore" /* 6901 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11985 */;
import VoicePanelPIPConstants from "VoicePanelPIPConstants" /* 19909 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

let GestureDetector, GestureDetector2, GestureDetector3, View, View2, View3, View4, View5, View6, View7, _Math2, _Math3, activateResult, allTouches, animatedStyle, animatedStyle1, animatedStyle2, animatedStyle3, animatedStyle4, callback, callback1, callback2, callback21, channelId, closure_1, closure_10, closure_11, closure_13, closure_14, closure_18, closure_2, closure_20, closure_21, closure_3, closure_4, closure_5, closure_6, closure_7, closure_8, closure_9, context, context1, controlsSpecs2, currentEmbeddedActivity, flag, flag2, flag3, flag4, found, items10, items11, items12, items15, items16, items17, items18, items19, items21, items22, items23, items24, items25, items26, items27, items28, items29, items30, items31, items32, items33, items34, items35, items36, items37, layoutEffect, memo, memo1, memo2, memo3, memo4, merged2, mode2, obj1, obj27, obj28, obj29, obj30, obj31, obj32, obj33, obj34, obj35, obj36, obj37, obj38, obj39, obj5, obj7, obj8, obj9, onMainTileTap2, opacity2, pIPState1, pushToTalk, result1, result2, result3, scale3, set, setMode2, sharedValue, sharedValue1, showPushToTalk, stateFromStores, stateFromStores1, stateFromStores2, sum, sum1, tmp100, tmp103, tmp25, tmp2Result, tmp5Result, tmp5Result1, tmp5Result10, tmp5Result2, tmp5Result3, tmp5Result4, tmp5Result5, tmp5Result6, tmp5Result7, tmp5Result8, tmp5Result9, tmp6, tmp76, tmp77, tmp7Result, tmp8, tmp86, tmp86Result, tmp87, tmp87Result, tmp87Result1, tmp87Result2, tmp87Result3, tmp89, tmp90, tmp91, tmp93, tmp94, tmp99, useAnimatedStyle, useAnimatedStyle2, useAnimatedStyle3, useAnimatedStyle4, useCallback, useCallback2, value1;

let SECONDARY_PIP_TOP_MARGIN;
let c10;
let c9;
let closure_12;
let closure_16;
let closure_17;
let map1;
let obj2;
let obj3;
let tmp10;
let tmp9;
class VoicePanelPIPTiles {
  constructor(arg0) {
    flag = global.hasTile;
    if (flag === undefined) {
      flag = true;
    }
    flag2 = global.showContent;
    if (flag2 === undefined) {
      flag2 = true;
    }
    ({ mainTileAccessibilityProps, controlsOverlay, showPushToTalk, onMainTileTap, dragEnabled, resizeEnabled, onStreamReady } = global);
    if (showPushToTalk === undefined) {
      showPushToTalk = true;
    }
    setMode = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    opacity = global.opacity;
    tmp = closure_18();
    obj = closure_4;
    tmp2 = closure_1;
    tmp3 = closure_3;
    context = closure_4.useContext(closure_1(closure_3[12]));
    setMode = context.setMode;
    tmp5 = setMode;
    controlsSpecs = context.controlsSpecs;
    obj2 = setMode(closure_3[13]);
    pIPState = obj2.usePIPState();
    pipHandoff = closure_4.useContext(closure_1(closure_3[12])).pipHandoff;
    obj3 = setMode(closure_3[13]);
    mode = obj3.usePIPState().mode;
    obj4 = setMode(closure_3[14]);
    pIPCardsSettled = obj4.usePIPCardsSettled(pipHandoff);
    obj5 = setMode(closure_3[14]);
    tmp9 = null != mode;
    tmp11 = mode !== VoicePanelPIPModes.IN_APP;
    pIPPanelLayoutCommitted = obj5.usePIPPanelLayoutCommitted(pipHandoff);
    tmp10 = VoicePanelPIPModes;
    if (!tmp11) {
      tmp11 = pIPCardsSettled;
    }
    tmp12 = tmp9 || !pIPPanelLayoutCommitted;
    tmp13 = tmp12;
    if (tmp13) {
      tmp14 = !tmp9;
      if (tmp9) {
        tmp14 = tmp11;
      }
      tmp13 = tmp14;
    }
    mode2 = pIPState.mode;
    obj1 = { onMainTileTap, dragEnabled, resizeEnabled, opacity };
    onMainTileTap = undefined;
    c2 = undefined;
    c3 = undefined;
    mode = mode2;
    onMainTileTap2 = obj1.onMainTileTap;
    onMainTileTap = onMainTileTap2;
    flag3 = obj1.dragEnabled;
    if (flag3 === undefined) {
      flag3 = true;
    }
    c2 = flag3;
    flag4 = obj1.resizeEnabled;
    if (flag4 === undefined) {
      flag4 = true;
    }
    c3 = flag4;
    controlsSpecs = undefined;
    hideControls = undefined;
    pipAvoidanceSpecs = undefined;
    safeArea = undefined;
    setFocused = undefined;
    setMode = undefined;
    showControls = undefined;
    windowDimensions = undefined;
    wrapperDimensions = undefined;
    wrapperOffset = undefined;
    channelId = undefined;
    isDockEnabled = undefined;
    closure_16 = undefined;
    closure_17 = undefined;
    closure_18 = undefined;
    closure_19 = undefined;
    closure_20 = undefined;
    closure_21 = undefined;
    closure_22 = undefined;
    opacity2 = obj1.opacity;
    context1 = obj.useContext(tmp2(tmp3[12]));
    controlsSpecs2 = context1.controlsSpecs;
    controlsSpecs = controlsSpecs2;
    hideControls = context1.hideControls;
    pipAvoidanceSpecs = context1.pipAvoidanceSpecs;
    safeArea = context1.safeArea;
    setFocused = context1.setFocused;
    setMode2 = context1.setMode;
    setMode = setMode2;
    showControls = context1.showControls;
    windowDimensions = context1.windowDimensions;
    wrapperDimensions = context1.wrapperDimensions;
    wrapperOffset = context1.wrapperOffset;
    ({ channelId, isDockEnabled } = context1);
    tmp5Result = tmp5(tmp3[13]);
    pIPState1 = tmp5Result.usePIPState();
    closure_16 = pIPState1;
    items = [, ];
    items[0] = flag4;
    items[1] = pIPState1.scale;
    layoutEffect = obj.useLayoutEffect(() => {
      const tmp = flag4;
      if (!tmp) {
        let scale = pIPState1.scale;
        const result = scale.set(1);
        return () => {
          scale = scale.scale;
          set = scale.set;
          const obj = mode2(flag4[15]);
          return set(obj.getVoicePanelPIPScaleCached());
        };
      }
    }, items);
    tmp5Result1 = tmp5(tmp3[16]);
    sharedValue = tmp5Result1.useSharedValue(closure_22);
    closure_17 = sharedValue;
    tmp5Result2 = tmp5(tmp3[16]);
    sharedValue1 = tmp5Result2.useSharedValue(0);
    closure_18 = sharedValue1;
    items1 = [];
    items1[0] = sharedValue1;
    effect = obj.useEffect(() => {
      let closure_0;
      const timeout = setTimeout(() => {
        const result = sharedValue1.set(1);
      }, wrapperDimensions);
      return () => {
        clearTimeout(closure_0);
      };
    }, items1);
    items2 = [, , , , , , , ];
    items2[0] = closure_23;
    items2[1] = pIPState1;
    useCallback = obj.useCallback;
    items2[2] = tmp5(tmp3[17]).getScaledPIPContainerHeight;
    items2[3] = tmp5(tmp3[17]).calculatePIPPositionFromVelocity;
    items2[4] = windowDimensions;
    items2[5] = safeArea;
    items2[6] = tmp2(tmp3[18]);
    items2[7] = wrapperDimensions;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28] = items2;
    class VoicePanelPIPTsx3 {
      constructor(baseX, velocityX, velocityY) {
        const scale = _undefined.scale;
        const value = scale.get();
        const result = _undefined.width * value;
        const obj = { height: _undefined.height, containerHeight: _undefined.containerHeight, showSecondaryPIP: _undefined.showSecondaryPIP, scale: value };
        const obj2 = { velocityX, velocityY, absoluteX: baseX.baseX + baseX.offsetX + result / 2, absoluteY: baseX.baseY + baseX.offsetY + _undefined2(obj) / 2, windowDimensions: _undefined4.get(), safeArea: _undefined5.get() };
        const tmp3 = _undefined3(obj2);
        const obj3 = { pipX: tmp3.pipX, pipY: tmp3.pipY };
        _undefined6(c6, obj3);
      }
    }
    items3 = [, , , , , , ];
    items3[0] = tmp22;
    items3[1] = tmp23;
    items3[2] = tmp24;
    items3[3] = tmp25;
    items3[4] = tmp26;
    items3[5] = tmp27;
    items3[6] = tmp28;
    VoicePanelPIPTsx3.__closure = items3;
    VoicePanelPIPTsx3.__workletHash = 5650627550281;
    VoicePanelPIPTsx3.__initData = tmp21;
    items4 = [, , , , , , , ];
    ({ containerHeight: arr5[0], height: arr5[1], scale: arr5[2], showSecondaryPIP: arr5[3], width: arr5[4] } = pIPState1);
    items4[5] = safeArea;
    items4[6] = windowDimensions;
    items4[7] = wrapperDimensions;
    callback = useCallback(VoicePanelPIPTsx3, items4);
    closure_19 = callback;
    tmp5Result3 = tmp5(tmp3[16]);
    items5 = [, , , , , , , , , , , , , , , ];
    items5[0] = closure_24;
    items5[1] = pIPState1;
    useAnimatedStyle = tmp5Result3.useAnimatedStyle;
    items5[2] = tmp5(tmp3[17]).getScaledPIPContainerHeight;
    items5[3] = tmp12;
    items5[4] = sharedValue;
    items5[5] = tmp5(tmp3[17]).getClampedPIPPosition;
    items5[6] = wrapperDimensions;
    items5[7] = windowDimensions;
    items5[8] = safeArea;
    items5[9] = pipAvoidanceSpecs;
    items5[10] = DRAWER_SPRING_PHYSICS;
    items5[11] = tmp5(tmp3[17]).PIP_LAYOUT_PHYSICS;
    items5[12] = sharedValue1;
    items5[13] = opacity2;
    items5[14] = tmp5(tmp3[19]).withSpring;
    items5[15] = tmp5(tmp3[17]).getVoicePanelPIPBorderRadius;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    closure_9 = undefined;
    closure_10 = undefined;
    closure_11 = undefined;
    closure_12 = undefined;
    closure_13 = undefined;
    closure_14 = undefined;
    [tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46] = items5;
    class VoicePanelPIPTsx4 {
      constructor() {
        let items;
        let num;
        let scale2;
        let showSecondaryPIP;
        let value2;
        let x;
        let y;
        const scale = _undefined.scale;
        const result = _undefined.width * scale.get();
        const obj = { height: _undefined.height, containerHeight: _undefined.containerHeight, showSecondaryPIP, scale: scale2.get() };
        showSecondaryPIP = _undefined.showSecondaryPIP;
        const tmp = _undefined;
        const tmp3 = c1;
        if (showSecondaryPIP) {
          showSecondaryPIP = c2;
        }
        scale2 = tmp.scale;
        const tmp3Result = tmp3(obj);
        const value = _undefined2.get();
        if (value.active) {
          x = value.baseX + value.offsetX;
          y = value.baseY + value.offsetY;
        } else {
          size = { pipX: _undefined4.get().pipX, pipY: _undefined4.get().pipY, width: result, height: tmp3Result, windowDimensions: _undefined5.get(), safeArea: _undefined6.get(), bottomAvoidanceRegion: _undefined7.get().bottom, topAvoidanceRegion: _undefined7.get().top };
          ({ x, y } = _undefined3(size));
          _undefined3(size);
        }
        const tmp12 = value.active ? c9 : c10;
        const size1 = { width: result, height: tmp3Result, opacity: value2 * num, transform: items, borderRadius: _undefined10(result, tmp3Result) };
        num = undefined;
        value2 = _undefined8.get();
        const obj4 = c12;
        if (c12 != null) {
          num = obj4.get();
        }
        if (num == null) {
          num = 1;
        }
        items = [{ translateX: _undefined9(x, tmp12) }, ];
        ({ translateX: _undefined9(x, tmp12) });
        items[1] = { translateY: _undefined9(y, tmp12) };
        ({ translateY: _undefined9(y, tmp12) });
        return size1;
      }
    }
    items6 = [, , , , , , , , , , , , , , ];
    items6[0] = tmp32;
    items6[1] = tmp33;
    items6[2] = tmp34;
    items6[3] = tmp35;
    items6[4] = tmp36;
    items6[5] = tmp37;
    items6[6] = tmp38;
    items6[7] = tmp39;
    items6[8] = tmp40;
    items6[9] = tmp41;
    items6[10] = tmp42;
    items6[11] = tmp43;
    items6[12] = tmp44;
    items6[13] = tmp45;
    items6[14] = tmp46;
    VoicePanelPIPTsx4.__closure = items6;
    VoicePanelPIPTsx4.__workletHash = 15997221388161;
    VoicePanelPIPTsx4.__initData = tmp31;
    animatedStyle = useAnimatedStyle(VoicePanelPIPTsx4);
    tmp5Result4 = tmp5(tmp3[16]);
    items7 = [, , ];
    items7[0] = closure_25;
    items7[1] = pIPState1;
    useAnimatedStyle2 = tmp5Result4.useAnimatedStyle;
    items7[2] = tmp5(tmp3[17]).getVoicePanelPIPBorderRadius;
    closure_0 = undefined;
    closure_1 = undefined;
    [tmp49, tmp50, tmp51] = items7;
    class VoicePanelPIPTsx5 {
      constructor() {
        let height;
        let scale;
        let width;
        ({ width, height, scale } = c0);
        size = { width: width * scale.get(), height: height * scale.get(), borderRadius: _undefined(width, height) };
        return size;
      }
    }
    items8 = [, ];
    items8[0] = tmp50;
    items8[1] = tmp51;
    VoicePanelPIPTsx5.__closure = items8;
    VoicePanelPIPTsx5.__workletHash = 13253829300730;
    VoicePanelPIPTsx5.__initData = tmp49;
    animatedStyle2 = useAnimatedStyle2(VoicePanelPIPTsx5);
    tmp5Result5 = tmp5(tmp3[16]);
    items9 = [, , , , ];
    items9[0] = closure_26;
    items9[1] = tmp13;
    useAnimatedStyle3 = tmp5Result5.useAnimatedStyle;
    items9[2] = tmp5(tmp3[20]).withTiming;
    items9[3] = tmp5(tmp3[21]).EXPERIMENTAL_HIGH_ELEVATION_SHADOW_PARAMS;
    items9[4] = closure_19;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    [tmp54, tmp55, tmp56, tmp57, tmp58] = items9;
    class VoicePanelPIPTsx6 {
      constructor() {
        let num2;
        let num = 0;
        if (c0) {
          num = 1;
        }
        const obj = { opacity: num, shadowOpacity: num2 };
        num2 = 0;
        if (c0) {
          num2 = _undefined(_undefined2.shadowOpacity, c3);
        }
        return obj;
      }
    }
    items10 = [, , , ];
    items10[0] = tmp55;
    items10[1] = tmp56;
    items10[2] = tmp57;
    items10[3] = tmp58;
    VoicePanelPIPTsx6.__closure = items10;
    VoicePanelPIPTsx6.__workletHash = 4733853284458;
    VoicePanelPIPTsx6.__initData = tmp54;
    items11 = [, , , , , , , , , , , , , , ];
    items11[0] = flag3;
    items11[1] = flag4;
    items11[2] = isDockEnabled;
    items11[3] = sharedValue;
    items11[4] = pipAvoidanceSpecs;
    ({ containerHeight: arr12[5], height: arr12[6], scale: arr12[7], showSecondaryPIP: arr12[8], width: arr12[9] } = pIPState1);
    items11[10] = safeArea;
    items11[11] = callback;
    items11[12] = windowDimensions;
    items11[13] = wrapperDimensions;
    items11[14] = wrapperOffset;
    animatedStyle3 = useAnimatedStyle3(VoicePanelPIPTsx6);
    items12 = [, , , , , , ];
    items12[0] = controlsSpecs2;
    items12[1] = hideControls;
    items12[2] = setFocused;
    items12[3] = showControls;
    items12[4] = mode2;
    items12[5] = setMode2;
    items12[6] = onMainTileTap2;
    memo = obj.useMemo(() => {
      let tmp10;
      let tmp11;
      let tmp12;
      let tmp13;
      let tmp14;
      let tmp16;
      let tmp17;
      let tmp18;
      let tmp19;
      let tmp20;
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
      let tmp48;
      let tmp49;
      let tmp50;
      let tmp51;
      let tmp52;
      let tmp53;
      let tmp54;
      let tmp55;
      let tmp56;
      let tmp57;
      let tmp58;
      let tmp59;
      let tmp61;
      let tmp62;
      let tmp63;
      let tmp64;
      let tmp65;
      let tmp66;
      let tmp9;
      let tmp = setMode;
      let tmp2 = dependencyMap;
      const Gesture = setMode(dependencyMap[22]).Gesture;
      const PanResult = Gesture.Pan();
      const enabledResult = PanResult.enabled(flag3);
      const manualActivationResult = enabledResult.manualActivation(true);
      let result = manualActivationResult.shouldCancelWhenOutside(false);
      const items = [closure_2_27, , , , , ];
      items[1] = getTouchesCentroid;
      let tmp5 = getTouchesSpread;
      items[2] = getTouchesSpread;
      items[3] = sharedValue;
      let tmp7 = closure_2_22;
      items[4] = closure_2_22;
      const onTouchesDown = result.onTouchesDown;
      items[5] = stateFromStores2(dependencyMap[18]);
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
      class VoicePanelPIPTsx7 {
        constructor(arg0) {
          tmp = closure_0(arg0.allTouches);
          tmp2 = closure_1(arg0.allTouches, tmp);
          tmp3 = closure_2;
          if (closure_2.get().pressed) {
            tmp8 = closure_4;
            obj1 = { originX: null, originY: null, spread: null };
            ({ x: obj2.originX, y: obj2.originY } = tmp);
            obj1.spread = tmp2;
            tmp9 = closure_4(tmp3, obj1);
          } else {
            obj = {};
            tmp4 = closure_3;
            tmp5 = obj;
            set = tmp3.set;
            merged = Object.assign(closure_3);
            flag = true;
            obj.pressed = true;
            ({ x: obj.originX, y: obj.originY } = tmp);
            obj.spread = tmp2;
            result = set(obj);
          }
          return;
        }
      }
      const items1 = [tmp10, tmp11, tmp12, tmp13, tmp14];
      VoicePanelPIPTsx7.__closure = items1;
      VoicePanelPIPTsx7.__workletHash = 15159195562233;
      VoicePanelPIPTsx7.__initData = tmp9;
      const items2 = [closure_2_28, , , , ];
      const onTouchesUp = onTouchesDown(VoicePanelPIPTsx7).onTouchesUp;
      onTouchesDown(VoicePanelPIPTsx7);
      items2[1] = stateFromStores2(tmp2[18]);
      items2[2] = sharedValue;
      items2[3] = getTouchesCentroid;
      items2[4] = tmp5;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      [tmp16, tmp17, tmp18, tmp19, tmp20] = items2;
      class VoicePanelPIPTsx8 {
        constructor(arg0) {
          closure_0 = arg0;
          allTouches = arg0.allTouches;
          found = allTouches.filter(function() { /* body not rendered: F146794 */ });
          if (0 !== found.length) {
            tmp4 = closure_2;
            tmp5 = closure_2(found);
            tmp6 = closure_0;
            tmp7 = closure_1;
            obj = { originX: null, originY: null, spread: null };
            ({ x: obj.originX, y: obj.originY } = tmp5);
            tmp8 = closure_3;
            obj.spread = closure_3(found, tmp5);
            tmp9 = closure_0(closure_1, obj);
          } else {
            tmp = closure_0;
            tmp2 = closure_1;
            tmp3 = closure_0(closure_1, { pressed: false });
          }
          return;
        }
      }
      const items3 = [tmp17, tmp18, tmp19, tmp20];
      VoicePanelPIPTsx8.__closure = items3;
      VoicePanelPIPTsx8.__workletHash = 6786919878348;
      VoicePanelPIPTsx8.__initData = tmp16;
      const items4 = [closure_2_29, tmp4, tmp5, tmp6, flag4, 8, pIPState1, , , , , , , , , , , , , , ];
      const onTouchesMove = onTouchesUp(VoicePanelPIPTsx8).onTouchesMove;
      onTouchesUp(VoicePanelPIPTsx8);
      items4[7] = tmp(tmp2[17]).clampPIPScale;
      items4[8] = windowDimensions;
      items4[9] = safeArea;
      items4[10] = pipAvoidanceSpecs;
      items4[11] = tmp(tmp2[22]).State;
      items4[12] = 10;
      items4[13] = tmp(tmp2[17]).getClampedPIPPosition;
      items4[14] = wrapperDimensions;
      items4[15] = tmp(tmp2[17]).getScaledPIPContainerHeight;
      items4[16] = isDockEnabled;
      items4[17] = stateFromStores2(tmp2[18]);
      items4[18] = wrapperOffset;
      items4[19] = tmp(tmp2[23]).scheduleOnRN;
      items4[20] = stateFromStores2(tmp2[24]);
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
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
      let c17;
      let c18;
      let c19;
      [tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46] = items4;
      const tmp22 = flag4;
      const tmp23 = pIPState1;
      class VoicePanelPIPTsx9 {
        constructor(arg0, arg1) {
          point = closure_0(arg0.allTouches);
          tmp = closure_1(arg0.allTouches, point);
          obj = closure_2;
          value = closure_2.get();
          if (value.active) {
            diff = value.offsetX + point.x - value.originX;
            diff1 = value.offsetY + point.y - value.originY;
            tmp25 = closure_3;
            sum1 = diff1;
            sum = diff;
            if (closure_3) {
              sum1 = diff1;
              sum = diff;
              if (value.spread > closure_4) {
                sum1 = diff1;
                sum = diff;
                if (tmp > tmp28) {
                  scale3 = closure_5.scale;
                  tmp34 = closure_5;
                  value1 = scale3.get();
                  tmp36 = closure_6;
                  obj1 = { scale: null, width: null, containerHeight: null, showSecondaryPIP: null, windowDimensions: null, safeArea: null, pipAvoidanceSpecs: null };
                  obj1.scale = value1 * (tmp / value.spread);
                  ({ width: obj6.width, containerHeight: obj6.containerHeight, showSecondaryPIP: obj6.showSecondaryPIP } = closure_5);
                  tmp37 = closure_7;
                  obj1.windowDimensions = closure_7.get();
                  tmp38 = closure_8;
                  obj1.safeArea = closure_8.get();
                  tmp39 = closure_9;
                  obj1.pipAvoidanceSpecs = closure_9.get();
                  tmp40 = closure_6(obj1);
                  sum1 = diff1;
                  sum = diff;
                  if (tmp40 !== value1) {
                    scale2 = tmp34.scale;
                    result = scale2.set(tmp40);
                    result1 = tmp40 / value1;
                    num = 1;
                    sum = diff + (point.x - (value.baseX + diff)) * (1 - result1);
                    sum1 = diff1 + (point.y - (value.baseY + diff1)) * (1 - result1);
                  }
                }
              }
            }
            obj7 = { pressed: null, active: true, baseX: null, baseY: null, offsetX: null, offsetY: null, originX: null, originY: null, spread: null };
            ({ pressed: obj5.pressed, baseX: obj5.baseX, baseY: obj5.baseY } = value);
            obj7.offsetX = sum;
            obj7.offsetY = sum1;
            ({ x: obj5.originX, y: obj5.originY } = point);
            obj7.spread = tmp;
            result2 = obj.set(obj7);
          } else {
            tmp3 = closure_10;
            if (arg0.state === closure_10.BEGAN) {
              tmp32 = globalThis;
              _Math3 = Math;
              tmp33 = closure_11;
              if (Math.abs(value.originX - point.x) <= closure_11) {
                _Math = Math;
                if (Math.abs(value.originY - point.y) <= tmp33) {
                  _Math2 = Math;
                }
              }
              tmp4 = closure_5;
              scale = closure_5.scale;
              value2 = scale.get();
              tmp6 = closure_12;
              size = { pipX: null, pipY: null, width: null, height: null, windowDimensions: null, safeArea: null, bottomAvoidanceRegion: null, topAvoidanceRegion: null };
              tmp7 = closure_13;
              size.pipX = closure_13.get().pipX;
              size.pipY = closure_13.get().pipY;
              size.width = closure_5.width * value2;
              tmp8 = closure_14;
              obj8 = { height: null, containerHeight: null, showSecondaryPIP: null, scale: null };
              ({ height: obj3.height, containerHeight: obj3.containerHeight, showSecondaryPIP: obj3.showSecondaryPIP } = closure_5);
              obj8.scale = value2;
              size.height = closure_14(obj8);
              tmp9 = closure_7;
              size.windowDimensions = closure_7.get();
              tmp10 = closure_8;
              size.safeArea = closure_8.get();
              tmp11 = closure_9;
              size.bottomAvoidanceRegion = closure_9.get().bottom;
              size.topAvoidanceRegion = closure_9.get().top;
              tmp12 = closure_12(size);
              obj9 = { pressed: true, active: true, baseX: null, baseY: null, offsetX: 0, offsetY: 0, originX: null, originY: null, spread: null };
              ({ x: obj4.baseX, y: obj4.baseY } = tmp12);
              ({ x: obj4.originX, y: obj4.originY } = point);
              obj9.spread = tmp;
              result3 = obj.set(obj9);
              tmp14 = closure_15;
              if (!tmp14) {
                tmp15 = closure_16;
                tmp16 = closure_17;
                tmp17 = closure_16(closure_17, { gestureActive: true, x: 0, y: 0 });
              }
              tmp18 = arg1;
              activateResult = arg1.activate();
              tmp20 = closure_18;
              tmp21 = closure_19;
              tmp22 = closure_18(closure_19);
            }
          }
          return;
        }
      }
      const items5 = [tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46];
      VoicePanelPIPTsx9.__closure = items5;
      VoicePanelPIPTsx9.__workletHash = 14940261768507;
      VoicePanelPIPTsx9.__initData = tmp26;
      const items6 = [closure_2_30, tmp6, callback, isDockEnabled, , , , , , , , ];
      const onEnd = onTouchesMove(VoicePanelPIPTsx9).onEnd;
      onTouchesMove(VoicePanelPIPTsx9);
      items6[4] = stateFromStores2(tmp2[18]);
      items6[5] = wrapperOffset;
      items6[6] = tmp7;
      items6[7] = tmp(tmp2[23]).scheduleOnRN;
      items6[8] = stateFromStores2(tmp2[25]).updateSourceTrackingView;
      items6[9] = tmp22;
      items6[10] = tmp(tmp2[15]).setVoicePanelPIPScaleCached;
      items6[11] = tmp23;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      c8 = undefined;
      c9 = undefined;
      c10 = undefined;
      [tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59] = items6;
      class VoicePanelPIPTsx10 {
        constructor(arg0) {
          obj = closure_0;
          ({ velocityX, velocityY } = arg0);
          tmp = closure_1(closure_0.get(), velocityX, velocityY);
          tmp2 = closure_2;
          if (!tmp2) {
            tmp3 = closure_3;
            tmp4 = closure_4;
            tmp5 = closure_3(closure_4, { gestureActive: false });
          }
          result = obj.set(closure_5);
          tmp7 = closure_6;
          tmp8 = closure_6(closure_7);
          tmp9 = closure_8;
          if (tmp9) {
            tmp10 = closure_9;
            tmp11 = closure_10;
            scale = closure_10.scale;
            tmp7Result = tmp7(closure_9, scale.get());
          }
          return;
        }
      }
      const items7 = [tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59];
      VoicePanelPIPTsx10.__closure = items7;
      VoicePanelPIPTsx10.__workletHash = 16486793329115;
      VoicePanelPIPTsx10.__initData = tmp48;
      const items8 = [closure_2_31, isDockEnabled, , , , ];
      const onFinalize = onEnd(VoicePanelPIPTsx10).onFinalize;
      onEnd(VoicePanelPIPTsx10);
      items8[2] = stateFromStores2(tmp2[18]);
      items8[3] = wrapperOffset;
      items8[4] = sharedValue;
      items8[5] = tmp7;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      [tmp61, tmp62, tmp63, tmp64, tmp65, tmp66] = items8;
      class VoicePanelPIPTsx11 {
        constructor() {
          tmp = closure_0;
          if (!tmp) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            tmp4 = closure_1(closure_2, { gestureActive: false });
          }
          result = closure_3.set(closure_4);
          return;
        }
      }
      const items9 = [tmp62, tmp63, tmp64, tmp65, tmp66];
      VoicePanelPIPTsx11.__closure = items9;
      VoicePanelPIPTsx11.__workletHash = 9688406235986;
      VoicePanelPIPTsx11.__initData = tmp61;
      return onFinalize(VoicePanelPIPTsx11);
    }, items11);
    memo1 = obj.useMemo(() => {
      let tmp10;
      let tmp11;
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
      let tmp9;
      const tmp = setMode;
      const Gesture = setMode(dependencyMap[22]).Gesture;
      const Exclusive = Gesture.Exclusive;
      const Gesture2 = setMode(dependencyMap[22]).Gesture;
      let tmp5 = null == onMainTileTap2;
      const enabled = Gesture2.Tap().enabled;
      Gesture2.Tap();
      const tmp4 = onMainTileTap2;
      if (tmp5) {
        tmp5 = mode2 !== constants2.IN_APP;
      }
      const enabledResult = enabled(tmp5);
      const items = [closure_2_32, , ];
      const onStart = enabledResult.maxDistance(30).onStart;
      enabledResult.maxDistance(30);
      items[1] = tmp(dependencyMap[23]).scheduleOnRN;
      items[2] = setFocused;
      let c0;
      let c1;
      [tmp9, tmp10, tmp11] = items;
      class VoicePanelPIPTsx12 {
        constructor() {
          tmp = closure_0(closure_1, null);
          return;
        }
      }
      const items1 = [tmp10, tmp11];
      VoicePanelPIPTsx12.__closure = items1;
      VoicePanelPIPTsx12.__workletHash = 292478158131;
      VoicePanelPIPTsx12.__initData = tmp9;
      const onStartResult = onStart(VoicePanelPIPTsx12);
      const numberOfTapsResult = onStartResult.numberOfTaps(2);
      const Gesture3 = tmp(tmp2[22]).Gesture;
      const TapResult1 = Gesture3.Tap();
      const enabledResult1 = TapResult1.enabled(true);
      const items2 = [closure_2_33, tmp4, , , , , , , , , ];
      const onStart2 = enabledResult1.maxDistance(30).onStart;
      enabledResult1.maxDistance(30);
      items2[2] = tmp(dependencyMap[23]).scheduleOnRN;
      items2[3] = mode2;
      items2[4] = constants2;
      items2[5] = setMode2;
      items2[6] = constants;
      items2[7] = controlsSpecs2;
      items2[8] = VoicePanelControlsModes;
      items2[9] = showControls;
      items2[10] = hideControls;
      c0 = undefined;
      c1 = undefined;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      let c8;
      let c9;
      [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24] = items2;
      class VoicePanelPIPTsx13 {
        constructor() {
          if (null != closure_0) {
            tmp16 = closure_1;
            tmp17 = closure_1(tmp);
          } else {
            tmp2 = closure_2;
            tmp3 = closure_3;
            if (closure_2 === closure_3.IN_APP) {
              tmp12 = closure_1;
              tmp13 = closure_4;
              tmp14 = closure_5;
              tmp15 = closure_1(closure_4, closure_5.PANEL);
            } else {
              tmp4 = closure_6;
              tmp5 = closure_7;
              if (closure_6.get().mode === closure_7.HIDDEN) {
                tmp9 = closure_1;
                tmp10 = closure_8;
                tmp11 = closure_1(closure_8);
              } else {
                tmp6 = closure_1;
                tmp7 = closure_9;
                tmp8 = closure_1(closure_9);
              }
            }
          }
          return;
        }
      }
      const items3 = [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24];
      VoicePanelPIPTsx13.__closure = items3;
      VoicePanelPIPTsx13.__workletHash = 13752618097535;
      VoicePanelPIPTsx13.__initData = tmp14;
      return Exclusive(numberOfTapsResult, onStart2(VoicePanelPIPTsx13));
    }, items12);
    tmp5Result6 = tmp5(tmp3[26]);
    items13 = [];
    items13[0] = closure_6;
    stateFromStores = tmp5Result6.useStateFromStores(items13, () => {
      currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
      let _location;
      const getEmbeddedActivityLocationChannelId = setMode(dependencyMap[27]).getEmbeddedActivityLocationChannelId;
      setMode(dependencyMap[27]);
      if (currentEmbeddedActivity != null) {
        _location = currentEmbeddedActivity.location;
      }
      return getEmbeddedActivityLocationChannelId(_location) !== c14;
    });
    closure_20 = stateFromStores;
    tmp5Result7 = tmp5(tmp3[26]);
    items14 = [];
    items14[0] = closure_7;
    tmp63 = closure_7;
    stateFromStores1 = tmp5Result7.useStateFromStores(items14, () => {
      const mainFrame = FramesStore.getMainFrame();
      let id = null;
      if (isLaunched(mainFrame)) {
        id = mainFrame.id;
      }
      return id;
    });
    closure_21 = stateFromStores1;
    items15 = [, , , ];
    items15[0] = stateFromStores;
    items15[1] = stateFromStores1;
    items15[2] = setMode2;
    items15[3] = setFocused;
    callback1 = obj.useCallback(() => {
      const tmp = stateFromStores;
      if (tmp) {
        setMode2(constants.PIP);
        setFocused(null);
      }
      if (null != stateFromStores1) {
        const obj2 = stateFromStores2(dependencyMap[28]);
        obj2.updateFramePanelMode(tmp8, constants3.PANEL);
      } else {
        const obj = callback2(dependencyMap[29]);
        const result = obj.updateActivityPanelMode(constants3.PANEL);
      }
    }, items15);
    closure_22 = callback1;
    items16 = [];
    items16[0] = callback1;
    memo2 = obj.useMemo(() => {
      let tmp2;
      let tmp3;
      let tmp4;
      const Gesture = setMode(dependencyMap[22]).Gesture;
      const TapResult = Gesture.Tap();
      const items = [closure_2_34, , ];
      const onStart = TapResult.maxDistance(30).onStart;
      TapResult.maxDistance(30);
      items[1] = setMode(dependencyMap[23]).scheduleOnRN;
      items[2] = callback1;
      let c0;
      let c1;
      [tmp2, tmp3, tmp4] = items;
      class VoicePanelPIPTsx14 {
        constructor() {
          tmp = closure_0(closure_1);
          return;
        }
      }
      const items1 = [tmp3, tmp4];
      VoicePanelPIPTsx14.__closure = items1;
      VoicePanelPIPTsx14.__workletHash = 11426545283298;
      VoicePanelPIPTsx14.__initData = tmp2;
      return onStart(VoicePanelPIPTsx14);
    }, items16);
    pushToTalk = tmp2(tmp3[30])(controlsSpecs).pushToTalk;
    tmp5Result8 = tmp5(tmp3[16]);
    items17 = [, , ];
    items17[0] = closure_36;
    useAnimatedStyle4 = tmp5Result8.useAnimatedStyle;
    items17[1] = tmp5(tmp3[17]).getVoicePanelPIPBorderRadius;
    items17[2] = pIPState;
    closure_0 = undefined;
    closure_1 = undefined;
    [tmp68, tmp69, tmp70] = items17;
    class VoicePanelPIPTsx16 {
      constructor() {
        const obj = { borderRadius: _undefined(_undefined2.width, _undefined2.height) };
        return obj;
      }
    }
    items18 = [, ];
    items18[0] = tmp69;
    items18[1] = tmp70;
    VoicePanelPIPTsx16.__closure = items18;
    VoicePanelPIPTsx16.__workletHash = 8098994638569;
    VoicePanelPIPTsx16.__initData = tmp68;
    animatedStyle4 = useAnimatedStyle4(VoicePanelPIPTsx16);
    items19 = [];
    items19[0] = setMode;
    memo3 = obj.useMemo(() => {
      let intl;
      let items;
      const obj = {
        accessible: true,
        accessibilityLabel: intl.string(intl2.t.oN8bqe),
        accessibilityRole: "button",
        accessibilityActions: items,
        onAccessibilityAction() {
          setMode(constants.PANEL);
        }
      };
      intl = intl2.intl;
      items = [{ name: "activate" }];
      return obj;
    }, items19);
    tmp5Result9 = tmp5(tmp3[26]);
    items20 = [];
    items20[0] = tmp63;
    stateFromStores2 = tmp5Result9.useStateFromStores(items20, () => {
      const mainFrame = FramesStore.getMainFrame();
      let id = null;
      if (isLaunched(mainFrame)) {
        id = mainFrame.id;
      }
      return id;
    });
    closure_1 = stateFromStores2;
    items21 = [];
    items21[0] = stateFromStores2;
    callback2 = obj.useCallback(() => {
      if (null != stateFromStores2) {
        const obj2 = FramesActionCreatorsDefault;
        obj2.updateFramePanelMode(tmp, ActivityPanelModes.PANEL);
      } else {
        const obj = EmbeddedActivitiesActionCreatorsAll;
        const result = obj.updateActivityPanelMode(ActivityPanelModes.PANEL);
      }
    }, items21);
    closure_2 = callback2;
    items22 = [];
    items22[0] = callback2;
    memo4 = obj.useMemo(() => {
      let intl;
      let items;
      const obj = { accessible: true, accessibilityLabel: intl.string(intl2.t["3ejJer"]), accessibilityActions: items, onAccessibilityAction: callback2 };
      intl = intl2.intl;
      items = [{ name: "activate" }];
      return obj;
    }, items22);
    tmp76 = closure_8((isActivityFocused) => isActivityFocused.isActivityFocused);
    if (showPushToTalk) {
      showPushToTalk = pushToTalk;
    }
    if (showPushToTalk) {
      tmp77 = pIPState.mode !== tmp10.IN_PANEL || tmp76;
      showPushToTalk = tmp77;
    }
    tmp5Result10 = tmp5(tmp3[16]);
    items23 = [, ];
    items23[0] = closure_37;
    items23[1] = pIPState;
    closure_0 = undefined;
    [tmp78, tmp79] = items23;
    class VoicePanelPIPTsx17 {
      constructor() {
        let height;
        let scale;
        const obj = { height: height * scale.get() };
        ({ scale, height } = c0);
        return obj;
      }
    }
    items24 = [];
    items24[0] = tmp79;
    VoicePanelPIPTsx17.__closure = items24;
    VoicePanelPIPTsx17.__workletHash = 3624002128847;
    VoicePanelPIPTsx17.__initData = tmp78;
    items25 = [, , , ];
    items25[0] = closure_35;
    items25[1] = sharedValue;
    animatedStyle1 = tmp5Result10.useAnimatedStyle(VoicePanelPIPTsx17);
    useCallback2 = obj.useCallback;
    items25[2] = tmp5(tmp3[19]).withSpring;
    items25[3] = tmp5(tmp3[17]).PIP_LAYOUT_PHYSICS;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    [tmp81, tmp82, tmp83, tmp84] = items25;
    class VoicePanelPIPTsx15 {
      constructor(originX) {
        let targetHeight;
        let targetWidth;
        const active = _undefined.get().active;
        size = { originX: _undefined2(originX.targetOriginX, c2), originY: _undefined2(originX.targetOriginY, c2), width: active ? targetWidth : _undefined2(targetWidth, c2), height: active ? targetHeight : _undefined2(targetHeight, c2) };
        targetWidth = originX.targetWidth;
        targetHeight = originX.targetHeight;
        return { animations: size, initialValues: { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight } };
      }
    }
    items26 = [, , ];
    items26[0] = tmp82;
    items26[1] = tmp83;
    items26[2] = tmp84;
    VoicePanelPIPTsx15.__closure = items26;
    VoicePanelPIPTsx15.__workletHash = 7799675155155;
    VoicePanelPIPTsx15.__initData = tmp81;
    items27 = [];
    items27[0] = sharedValue;
    callback21 = useCallback2(VoicePanelPIPTsx15, items27);
    tmp86 = jsxs;
    obj27 = { pointerEvents: "box-none", style: null, layout: callback21, children: null };
    items28 = [, ];
    items28[0] = tmp.container;
    items28[1] = animatedStyle;
    obj27.style = items28;
    tmp87 = jsx;
    View = tmp2(tmp3[16]).View;
    obj28 = { gesture: memo, children: null };
    GestureDetector = tmp5(tmp3[22]).GestureDetector;
    obj29 = { pointerEvents: "box-none", style: tmp.multiPipContainer, layout: callback21, children: null };
    tmp86Result = null;
    View2 = tmp2(tmp3[16]).View;
    if (tmp12) {
      tmp86Result = null;
      if (flag) {
        obj30 = { style: null, pointerEvents: "box-none", layout: null };
        items29 = [, , , ];
        ({ pipContentWrapper: arr30[0], inAppElevationShadow: arr30[1] } = tmp);
        items29[2] = animatedStyle2;
        items29[3] = animatedStyle3;
        obj30.style = items29;
        obj30.layout = callback21;
        tmp89 = undefined;
        View3 = tmp2(tmp3[16]).View;
        if (null == mainTileAccessibilityProps) {
          tmp89 = memo3;
        }
        tmp90 = obj30;
        tmp91 = tmp89;
        merged = Object.assign(tmp89);
        obj31 = { gesture: null, children: null };
        obj31.gesture = memo1;
        GestureDetector2 = tmp5(tmp3[22]).GestureDetector;
        obj32 = { style: null, layout: null };
        items30 = [, ];
        items30[0] = tmp.pipMask;
        items30[1] = animatedStyle4;
        obj32.style = items30;
        obj32.layout = callback21;
        tmp93 = obj32;
        tmp94 = mainTileAccessibilityProps;
        View4 = tmp2(tmp3[16]).View;
        merged1 = Object.assign(mainTileAccessibilityProps);
        tmp87Result = null;
        if (flag2) {
          obj33 = { layoutTransition: null, onStreamReady: null };
          obj33.layoutTransition = callback21;
          obj33.onStreamReady = onStreamReady;
          tmp87Result = tmp87(tmp2(tmp3[32]), obj33);
        }
        obj32.children = tmp87Result;
        obj31.children = tmp87(View4, obj32);
        items31 = [, ];
        items31[0] = tmp87(GestureDetector2, obj31);
        tmp87Result1 = null;
        if (null != controlsOverlay) {
          obj34 = { style: null, pointerEvents: "box-none", layout: null, children: null };
          items32 = [, ];
          items32[0] = tmp.pipMask;
          items32[1] = animatedStyle4;
          obj34.style = items32;
          obj34.layout = callback21;
          obj34.children = controlsOverlay;
          tmp87Result1 = tmp87(tmp2(tmp3[16]).View, obj34);
        }
        items31[1] = tmp87Result1;
        obj30.children = items31;
        tmp86Result = tmp86(View3, obj30);
      }
    }
    items33 = [, ];
    items33[0] = tmp86Result;
    tmp87Result2 = null;
    if (pIPState.showSecondaryPIP) {
      obj35 = { style: null };
      items34 = [, , ];
      ({ pipContentWrapper: arr35[0], inAppElevationShadow: arr35[1] } = tmp);
      items34[2] = animatedStyle2;
      obj35.style = items34;
      tmp99 = obj35;
      tmp100 = memo4;
      View5 = tmp2(tmp3[16]).View;
      merged2 = Object.assign(memo4);
      obj36 = { style: null, children: null };
      items35 = [, ];
      items35[0] = tmp.pipMask;
      items35[1] = animatedStyle4;
      obj36.style = items35;
      View6 = tmp2(tmp3[16]).View;
      obj37 = { gesture: null, children: null };
      obj37.gesture = memo2;
      GestureDetector3 = tmp5(tmp3[22]).GestureDetector;
      obj38 = { style: null, children: null };
      tmp103 = StyleSheet;
      obj38.style = StyleSheet.absoluteFill;
      tmp2Result = tmp2(tmp3[33]);
      obj38.children = tmp87(tmp2(tmp3[34]), {});
      obj37.children = tmp87(tmp2Result, obj38);
      obj36.children = tmp87(GestureDetector3, obj37);
      obj35.children = tmp87(View6, obj36);
      tmp87Result2 = tmp87(View5, obj35);
    }
    items33[1] = tmp87Result2;
    obj29.children = items33;
    obj28.children = tmp86(View2, obj29);
    items36 = [, ];
    items36[0] = tmp87(GestureDetector, obj28);
    tmp87Result3 = null;
    if (tmp13) {
      tmp87Result3 = null;
      if (showPushToTalk) {
        obj39 = { pointerEvents: "box-none", style: null, layout: null, children: null };
        items37 = [, ];
        items37[0] = tmp.pushToTalkContainer;
        items37[1] = animatedStyle1;
        obj39.style = items37;
        obj39.layout = callback21;
        View7 = tmp2(tmp3[16]).View;
        obj39.children = tmp87(tmp2(tmp3[35]), {});
        tmp87Result3 = tmp87(View7, obj39);
      }
    }
    items36[1] = tmp87Result3;
    obj27.children = items36;
    return tmp86(View, obj27);
  }
}
function renderPIPWrapper(arg0, arg1, transitionState, transitionCleanUp) {
  const obj = { transitionState, transitionCleanUp };
  return authStore3(closure_39, obj, arg0);
}
const StyleSheet = react_native.StyleSheet;
({ DRAWER_SPRING_PHYSICS: c9, VoicePanelModes: c10, SECONDARY_PIP_TOP_MARGIN } = VoicePanelConstants);
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
({ PIP_FIRST_FRAME_DELAY_MS: closure_12, VoicePanelPIPModes: map1 } = VoicePanelPIPConstants);
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const isLaunched = FramesConstants.isLaunched;
({ jsx: closure_16, jsxs: closure_17 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { position: "absolute", zIndex: 10 }, pipContentWrapper: { backgroundColor: "black" }, inAppElevationShadow: {}, pipMask: obj2, multiPipContainer: obj3, pushToTalkContainer: { position: "absolute", top: 0, left: 0, right: 0 } };
obj2 = { overflow: "hidden" };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { flexDirection: "column", alignItems: "center", gap: SECONDARY_PIP_TOP_MARGIN };
let merged1 = Object.assign(StyleSheet.absoluteFillObject);
const authStore4 = createStyles(obj);
let closure_19 = { duration: 200 };
let items = [{ code: "(function getTouchesCentroid_VoicePanelPIPTsx1(touches){let x=0;let y=0;for(const touch of touches){x+=touch.absoluteX;y+=touch.absoluteY;}return{x:x/touches.length,y:y/touches.length};})" }];
[tmp9] = items;
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
getTouchesCentroid.__workletHash = 1561842626525;
getTouchesCentroid.__initData = tmp9;
let items1 = [{ code: "(function getTouchesSpread_VoicePanelPIPTsx2(touches,centroid){if(touches.length<2)return 0;let total=0;for(const touch of touches){const dx=touch.absoluteX-centroid.x;const dy=touch.absoluteY-centroid.y;total+=Math.sqrt(dx*dx+dy*dy);}return total/touches.length;})" }];
[tmp10] = items1;
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
getTouchesSpread.__workletHash = 12650185432595;
getTouchesSpread.__initData = tmp10;
let closure_22 = { pressed: false, active: false, baseX: 0, baseY: 0, offsetX: 0, offsetY: 0, originX: 0, originY: 0, spread: 0 };
let closure_23 = { code: "(function VoicePanelPIPTsx3(state,velocityX,velocityY){let[pipState,getScaledPIPContainerHeight,calculatePIPPositionFromVelocity,windowDimensions,safeArea,updateSharedValueIfChanged,wrapperDimensions]=this.__closure;const scale=pipState.scale.get();const width=pipState.width*scale;const height=getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,scale:scale});const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:state.baseX+state.offsetX+width/2,absoluteY:state.baseY+state.offsetY+height/2,windowDimensions:windowDimensions.get(),safeArea:safeArea.get()});updateSharedValueIfChanged(wrapperDimensions,{pipX:pipX,pipY:pipY});})" };
let closure_24 = { code: "(function VoicePanelPIPTsx4(){let[pipState,getScaledPIPContainerHeight,mainTileInLayout,gestureState,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,DRAWER_SPRING_PHYSICS,PIP_LAYOUT_PHYSICS,opacity,tileOpacity,withSpring,getVoicePanelPIPBorderRadius]=this.__closure;var _tileOpacity$get,_tileOpacity;const width=pipState.width*pipState.scale.get();const height=getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP&&mainTileInLayout,scale:pipState.scale.get()});const state=gestureState.get();let x;let y;if(state.active){x=state.baseX+state.offsetX;y=state.baseY+state.offsetY;}else{const clamped=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:width,height:height,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top});x=clamped.x;y=clamped.y;}const physics=state.active?DRAWER_SPRING_PHYSICS:PIP_LAYOUT_PHYSICS;return{width:width,height:height,opacity:opacity.get()*((_tileOpacity$get=(_tileOpacity=tileOpacity)===null||_tileOpacity===void 0?void 0:_tileOpacity.get())!==null&&_tileOpacity$get!==void 0?_tileOpacity$get:1),transform:[{translateX:withSpring(x,physics)},{translateY:withSpring(y,physics)}],borderRadius:getVoicePanelPIPBorderRadius(width,height)};})" };
let closure_25 = { code: "(function VoicePanelPIPTsx5(){let[pipState,getVoicePanelPIPBorderRadius]=this.__closure;const{width:width,height:height,scale:scale}=pipState;return{width:width*scale.get(),height:height*scale.get(),borderRadius:getVoicePanelPIPBorderRadius(width,height)};})" };
let closure_26 = { code: "(function VoicePanelPIPTsx6(){let[mainTileVisible,withTiming,EXPERIMENTAL_HIGH_ELEVATION_SHADOW_PARAMS,MAIN_PIP_SHADOW_FADE_IN_TIMING]=this.__closure;return{opacity:mainTileVisible?1:0,shadowOpacity:mainTileVisible?withTiming(EXPERIMENTAL_HIGH_ELEVATION_SHADOW_PARAMS.shadowOpacity,MAIN_PIP_SHADOW_FADE_IN_TIMING):0};})" };
let closure_27 = { code: "(function VoicePanelPIPTsx7(event){let[getTouchesCentroid,getTouchesSpread,gestureState,INACTIVE_GESTURE_STATE,updateSharedValueIfChanged]=this.__closure;const centroid=getTouchesCentroid(event.allTouches);const spread=getTouchesSpread(event.allTouches,centroid);const state=gestureState.get();if(!state.pressed){gestureState.set({...INACTIVE_GESTURE_STATE,pressed:true,originX:centroid.x,originY:centroid.y,spread:spread});return;}updateSharedValueIfChanged(gestureState,{originX:centroid.x,originY:centroid.y,spread:spread});})" };
let closure_28 = { code: "(function VoicePanelPIPTsx8(event){let[updateSharedValueIfChanged,gestureState,getTouchesCentroid,getTouchesSpread]=this.__closure;const remainingTouches=event.allTouches.filter(function(touch){return!event.changedTouches.some(function(changedTouch){return changedTouch.id===touch.id;});});if(remainingTouches.length===0){updateSharedValueIfChanged(gestureState,{pressed:false});return;}const centroid=getTouchesCentroid(remainingTouches);updateSharedValueIfChanged(gestureState,{originX:centroid.x,originY:centroid.y,spread:getTouchesSpread(remainingTouches,centroid)});})" };
let closure_29 = { code: "(function VoicePanelPIPTsx9(event,manager){let[getTouchesCentroid,getTouchesSpread,gestureState,resizeEnabled,MIN_PINCH_SPAN,pipState,clampPIPScale,windowDimensions,safeArea,pipAvoidanceSpecs,State,MIN_GESTURE_START,getClampedPIPPosition,wrapperDimensions,getScaledPIPContainerHeight,isDockEnabled,updateSharedValueIfChanged,wrapperOffset,scheduleOnRN,triggerIOSHaptic]=this.__closure;const centroid=getTouchesCentroid(event.allTouches);const spread=getTouchesSpread(event.allTouches,centroid);const state=gestureState.get();if(state.active){let offsetX=state.offsetX+centroid.x-state.originX;let offsetY=state.offsetY+centroid.y-state.originY;if(resizeEnabled&&state.spread>MIN_PINCH_SPAN&&spread>MIN_PINCH_SPAN){const previousScale=pipState.scale.get();const scale=clampPIPScale({scale:previousScale*(spread/state.spread),width:pipState.width,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),pipAvoidanceSpecs:pipAvoidanceSpecs.get()});if(scale!==previousScale){pipState.scale.set(scale);const scaleChange=scale/previousScale;offsetX+=(centroid.x-(state.baseX+offsetX))*(1-scaleChange);offsetY+=(centroid.y-(state.baseY+offsetY))*(1-scaleChange);}}gestureState.set({pressed:state.pressed,active:true,baseX:state.baseX,baseY:state.baseY,offsetX:offsetX,offsetY:offsetY,originX:centroid.x,originY:centroid.y,spread:spread});return;}if(event.state!==State.BEGAN)return;if(Math.abs(state.originX-centroid.x)>MIN_GESTURE_START||Math.abs(state.originY-centroid.y)>MIN_GESTURE_START||Math.abs(state.spread-spread)>MIN_GESTURE_START){const scale=pipState.scale.get();const{x:x,y:y}=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:pipState.width*scale,height:getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,scale:scale}),windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top});gestureState.set({pressed:true,active:true,baseX:x,baseY:y,offsetX:0,offsetY:0,originX:centroid.x,originY:centroid.y,spread:spread});if(!isDockEnabled){updateSharedValueIfChanged(wrapperOffset,{gestureActive:true,x:0,y:0});}manager.activate();scheduleOnRN(triggerIOSHaptic);}})" };
let closure_30 = { code: "(function VoicePanelPIPTsx10({velocityX:velocityX,velocityY:velocityY}){let[gestureState,settlePIPPosition,isDockEnabled,updateSharedValueIfChanged,wrapperOffset,INACTIVE_GESTURE_STATE,scheduleOnRN,updateSourceTrackingView,resizeEnabled,setVoicePanelPIPScaleCached,pipState]=this.__closure;const state=gestureState.get();settlePIPPosition(state,velocityX,velocityY);if(!isDockEnabled){updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}gestureState.set(INACTIVE_GESTURE_STATE);scheduleOnRN(updateSourceTrackingView);if(resizeEnabled){scheduleOnRN(setVoicePanelPIPScaleCached,pipState.scale.get());}})" };
let closure_31 = { code: "(function VoicePanelPIPTsx11(){let[isDockEnabled,updateSharedValueIfChanged,wrapperOffset,gestureState,INACTIVE_GESTURE_STATE]=this.__closure;if(!isDockEnabled){updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}gestureState.set(INACTIVE_GESTURE_STATE);})" };
let closure_32 = { code: "(function VoicePanelPIPTsx12(){let[scheduleOnRN,setFocused]=this.__closure;scheduleOnRN(setFocused,null);})" };
let closure_33 = { code: "(function VoicePanelPIPTsx13(){let[onMainTileTap,scheduleOnRN,pipMode,VoicePanelPIPModes,setMode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,showControls,hideControls]=this.__closure;if(onMainTileTap!=null){scheduleOnRN(onMainTileTap);}else if(pipMode===VoicePanelPIPModes.IN_APP){scheduleOnRN(setMode,VoicePanelModes.PANEL);}else{if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){scheduleOnRN(showControls);}else{scheduleOnRN(hideControls);}}})" };
let closure_34 = { code: "(function VoicePanelPIPTsx14(){let[scheduleOnRN,handleSecondaryPIPTap]=this.__closure;scheduleOnRN(handleSecondaryPIPTap);})" };
let closure_35 = { code: "(function VoicePanelPIPTsx15(values){let[gestureState,withSpring,PIP_LAYOUT_PHYSICS]=this.__closure;const active=gestureState.get().active;return{animations:{originX:withSpring(values.targetOriginX,PIP_LAYOUT_PHYSICS),originY:withSpring(values.targetOriginY,PIP_LAYOUT_PHYSICS),width:active?values.targetWidth:withSpring(values.targetWidth,PIP_LAYOUT_PHYSICS),height:active?values.targetHeight:withSpring(values.targetHeight,PIP_LAYOUT_PHYSICS)},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};})" };
let closure_36 = { code: "(function VoicePanelPIPTsx16(){let[getVoicePanelPIPBorderRadius,pipState]=this.__closure;return{borderRadius:getVoicePanelPIPBorderRadius(pipState.width,pipState.height)};})" };
let closure_37 = { code: "(function VoicePanelPIPTsx17(){let[pipState]=this.__closure;return{height:pipState.height*pipState.scale.get()};})" };
function usePIPTileHandoff() {
  let pIPPanelLayoutCommitted;
  let tmp3;
  const pipHandoff = react.useContext(VoicePanelStateContextDefault).pipHandoff;
  const obj = VoicePanelPIPStateContext;
  const mode = obj.usePIPState().mode;
  const obj2 = VoicePanelPIPHandoff;
  const pIPCardsSettled = obj2.usePIPCardsSettled(pipHandoff);
  const obj4 = { isMainPIPActive: null != mode, cardArrivedInPIP: tmp3, panelLayoutCommitted: pIPPanelLayoutCommitted };
  tmp3 = mode !== map1.IN_APP;
  const obj3 = VoicePanelPIPHandoff;
  pIPPanelLayoutCommitted = obj3.usePIPPanelLayoutCommitted(pipHandoff);
  if (!tmp3) {
    tmp3 = pIPCardsSettled;
  }
  return obj4;
}
let closure_39 = react.memo(function PIPWrapper(transitionState) {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  const pipHandoff = react.useContext(transitionCleanUp(11984)).pipHandoff;
  const obj = transitionState(11995);
  const mode = obj.usePIPState().mode;
  const obj2 = transitionState(11993);
  const pIPCardsSettled = obj2.usePIPCardsSettled(pipHandoff);
  const obj3 = transitionState(11993);
  const pIPPanelLayoutCommitted = obj3.usePIPPanelLayoutCommitted(pipHandoff);
  const items = [transitionState, pIPPanelLayoutCommitted, transitionCleanUp];
  const effect = react.useEffect(() => {
    const tmp = transitionState === native.TransitionStates.YEETED && pIPPanelLayoutCommitted;
    if (tmp) {
      transitionCleanUp();
    }
  }, items);
  return closure_16(VoicePanelPIPTiles, {});
});
const memoResult = react.memo(function VoicePanelPIPWrapper() {
  let mode;
  let showSecondaryPIP;
  let tmp3;
  const obj = VoicePanelPIPStateContext;
  const pIPState = obj.usePIPState();
  ({ mode, showSecondaryPIP } = pIPState);
  const TransitionItem = native.TransitionItem;
  const tmp2 = authStore3;
  if (null != mode) {
    tmp3 = { pipMode: mode };
  }
  const obj3 = { item: tmp3, renderItem: renderPIPWrapper };
  return tmp2(TransitionItem, obj3);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIP.tsx");

export default memoResult;
export { usePIPTileHandoff };
export { VoicePanelPIPTiles };
