// Module ID: 19445
// Function ID: 19446
// Name: VoicePanelPIP
// Dependencies: [19, 17, 4989, 6966, 6995, 11360, 11358, 19273, 5777, 6967, 21, 5141, 11359, 19362, 11368, 1652, 19272, 11364, 5757, 5426, 1705, 19365, 5994, 19356, 504, 5062, 11065, 11863, 8965, 1113, 19446, 7086, 19450, 19451, 5207, 2]

// Module 19445 (VoicePanelPIP)
import intl2 from "intl" /* 1113 */;
import native from "native" /* 5207 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5777 */;
import FramesConstants from "FramesConstants" /* 6967 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 11065 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11358 */;
import EmbeddedActivitiesActionCreatorsAll from "EmbeddedActivitiesActionCreators" /* 11863 */;
import VoicePanelPIPConstants from "VoicePanelPIPConstants" /* 19273 */;
import VoicePanelPIPStateContext from "VoicePanelPIPStateContext" /* 19362 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4989 */;
import FramesStore from "FramesStore" /* 6966 */;
import VoicePanelStore from "VoicePanelStore" /* 6995 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11360 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

let _Math2, _Math3, activateResult, allTouches, currentEmbeddedActivity, flag, found, obj1, result1, result2, result3, scale3, set, sum, sum1, value1, value2;

let SECONDARY_PIP_TOP_MARGIN;
let c10;
let c9;
let closure_15;
let closure_16;
let obj2;
let obj3;
let tmp8;
let tmp9;
function VoicePanelPIP() {
  let GestureDetector2;
  let GestureDetector3;
  let View2;
  let View4;
  let View6;
  let c11;
  let constants2;
  let constants3;
  let isDockEnabled;
  let items27;
  let items28;
  let items29;
  let items30;
  let items31;
  let items32;
  let items33;
  let items34;
  let obj10;
  let obj11;
  let obj12;
  let obj14;
  let obj15;
  let obj16;
  let obj8;
  let stateFromStores2;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp2Result;
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
  let tmp47;
  let tmp48;
  let tmp49;
  let tmp51;
  let tmp52;
  let tmp62;
  let tmp63;
  let tmp64;
  let tmp72;
  let tmp73;
  let tmp75;
  let tmp76;
  let tmp77;
  let tmp78;
  let tmp = closure_17();
  let obj = react;
  let tmp2 = stateFromStores2;
  let tmp3 = dependencyMap;
  const context = react.useContext(stateFromStores2(11359));
  const setMode = context.setMode;
  let tmp5 = setMode;
  const controlsSpecs = context.controlsSpecs;
  let obj2 = setMode(19362);
  const pIPState = obj2.usePIPState();
  const pipHandoff = react.useContext(stateFromStores2(11359)).pipHandoff;
  let obj3 = setMode(19362);
  const mode = obj3.usePIPState().mode;
  const obj4 = setMode(11368);
  const pIPCardsSettled = obj4.usePIPCardsSettled(pipHandoff);
  const obj5 = setMode(11368);
  const tmp9 = null != mode;
  let tmp11 = mode !== VoicePanelPIPModes.IN_APP;
  const pIPPanelLayoutCommitted = obj5.usePIPPanelLayoutCommitted(pipHandoff);
  const tmp10 = VoicePanelPIPModes;
  if (!tmp11) {
    tmp11 = pIPCardsSettled;
  }
  let tmp12 = tmp9 || !pIPPanelLayoutCommitted;
  let tmp13 = tmp12;
  if (tmp13) {
    let tmp14 = !tmp9;
    if (tmp9) {
      tmp14 = tmp11;
    }
    tmp13 = tmp14;
  }
  const mode2 = pIPState.mode;
  c11 = undefined;
  isDockEnabled = undefined;
  let callback;
  let stateFromStores;
  let stateFromStores1;
  let callback1;
  const context1 = obj.useContext(tmp2(11359));
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
  ({ channelId: c11, isDockEnabled } = context1);
  const tmp5Result = tmp5(19362);
  const pIPState1 = tmp5Result.usePIPState();
  const tmp5Result11 = tmp5(1652);
  const sharedValue = tmp5Result11.useSharedValue(closure_20);
  const tmp5Result12 = tmp5(1652);
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
  let items1 = [closure_21, pIPState1, , , , , , ];
  const useCallback = obj.useCallback;
  items1[2] = tmp5(19272).getScaledPIPContainerHeight;
  items1[3] = tmp5(19272).calculatePIPPositionFromVelocity;
  items1[4] = windowDimensions;
  items1[5] = safeArea;
  items1[6] = tmp2(11364);
  items1[7] = wrapperDimensions;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27] = items1;
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
  let items2 = [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27];
  VoicePanelPIPTsx3.__closure = items2;
  VoicePanelPIPTsx3.__workletHash = 5650627550281;
  VoicePanelPIPTsx3.__initData = tmp20;
  let items3 = [, , , , , , , ];
  ({ containerHeight: arr4[0], height: arr4[1], scale: arr4[2], showSecondaryPIP: arr4[3], width: arr4[4] } = pIPState1);
  items3[5] = safeArea;
  items3[6] = windowDimensions;
  items3[7] = wrapperDimensions;
  callback = useCallback(VoicePanelPIPTsx3, items3);
  let items4 = [closure_22, pIPState1, , , , , , , , , , , , , ];
  const useAnimatedStyle = tmp5(1652).useAnimatedStyle;
  tmp5(1652);
  items4[2] = tmp5(19272).getScaledPIPContainerHeight;
  items4[3] = tmp12;
  items4[4] = sharedValue;
  items4[5] = tmp5(19272).getClampedPIPPosition;
  items4[6] = wrapperDimensions;
  items4[7] = windowDimensions;
  items4[8] = safeArea;
  items4[9] = pipAvoidanceSpecs;
  items4[10] = closure_9;
  items4[11] = tmp5(19272).PIP_LAYOUT_PHYSICS;
  items4[12] = sharedValue1;
  items4[13] = tmp5(5757).withSpring;
  items4[14] = tmp5(19272).getVoicePanelPIPBorderRadius;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  let c7;
  let c8;
  let c9;
  let c10;
  c11 = undefined;
  let c12;
  let c13;
  [tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44] = items4;
  class VoicePanelPIPTsx4 {
    constructor() {
      let items;
      let scale2;
      let showSecondaryPIP;
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
      const size1 = { width: result, height: tmp3Result, opacity: _undefined8.get(), transform: items, borderRadius: _undefined10(result, tmp3Result) };
      items = [{ translateX: _undefined9(x, tmp12) }, ];
      ({ translateX: _undefined9(x, tmp12) });
      items[1] = { translateY: _undefined9(y, tmp12) };
      ({ translateY: _undefined9(y, tmp12) });
      return size1;
    }
  }
  let items5 = [tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44];
  VoicePanelPIPTsx4.__closure = items5;
  VoicePanelPIPTsx4.__workletHash = 1405151030616;
  VoicePanelPIPTsx4.__initData = tmp30;
  const animatedStyle = useAnimatedStyle(VoicePanelPIPTsx4);
  let items6 = [closure_23, pIPState1, ];
  const useAnimatedStyle2 = tmp5(1652).useAnimatedStyle;
  tmp5(1652);
  items6[2] = tmp5(19272).getVoicePanelPIPBorderRadius;
  c0 = undefined;
  c1 = undefined;
  [tmp47, tmp48, tmp49] = items6;
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
  let items7 = [tmp48, tmp49];
  VoicePanelPIPTsx5.__closure = items7;
  VoicePanelPIPTsx5.__workletHash = 13253829300730;
  VoicePanelPIPTsx5.__initData = tmp47;
  const animatedStyle2 = useAnimatedStyle2(VoicePanelPIPTsx5);
  let items8 = [closure_24, tmp13];
  c0 = undefined;
  [tmp51, tmp52] = items8;
  const tmp5Result15 = tmp5(1652);
  class VoicePanelPIPTsx6 {
    constructor() {
      let opacity = 0;
      if (c0) {
        opacity = 1;
      }
      return { opacity };
    }
  }
  let items9 = [tmp52];
  VoicePanelPIPTsx6.__closure = items9;
  VoicePanelPIPTsx6.__workletHash = 14702367813687;
  VoicePanelPIPTsx6.__initData = tmp51;
  const items10 = [isDockEnabled, sharedValue, pipAvoidanceSpecs, , , , , , , , , , ];
  ({ containerHeight: arr11[3], height: arr11[4], scale: arr11[5], showSecondaryPIP: arr11[6], width: arr11[7] } = pIPState1);
  items10[8] = safeArea;
  items10[9] = callback;
  items10[10] = windowDimensions;
  items10[11] = wrapperDimensions;
  items10[12] = wrapperOffset;
  const animatedStyle1 = tmp5Result15.useAnimatedStyle(VoicePanelPIPTsx6);
  const items11 = [controlsSpecs2, hideControls, setFocused, showControls, mode2, setMode2];
  const memo = obj.useMemo(() => {
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
    let tmp37;
    let tmp38;
    let tmp39;
    let tmp40;
    let tmp41;
    let tmp42;
    let tmp43;
    let tmp44;
    let tmp46;
    let tmp47;
    let tmp48;
    let tmp49;
    let tmp50;
    let tmp51;
    let tmp52;
    let tmp53;
    let tmp54;
    let tmp55;
    let tmp56;
    let tmp58;
    let tmp59;
    let tmp60;
    let tmp61;
    let tmp62;
    let tmp63;
    let tmp9;
    let tmp = setMode;
    let tmp2 = dependencyMap;
    const Gesture = setMode(dependencyMap[19]).Gesture;
    const PanResult = Gesture.Pan();
    const manualActivationResult = PanResult.manualActivation(true);
    let result = manualActivationResult.shouldCancelWhenOutside(false);
    const items = [closure_2_25, , , , , ];
    items[1] = getTouchesCentroid;
    let tmp5 = getTouchesSpread;
    items[2] = getTouchesSpread;
    items[3] = sharedValue;
    items[4] = closure_2_20;
    const onTouchesDown = result.onTouchesDown;
    items[5] = stateFromStores2(dependencyMap[17]);
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
    const items2 = [closure_2_26, , , , ];
    const onTouchesUp = onTouchesDown(VoicePanelPIPTsx7).onTouchesUp;
    onTouchesDown(VoicePanelPIPTsx7);
    items2[1] = stateFromStores2(tmp2[17]);
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
        found = allTouches.filter(function() { /* body not rendered: F141636 */ });
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
    const items4 = [closure_2_27, tmp4, tmp5, tmp6, 8, pIPState1, , , , , , , , , , , , , , ];
    const onTouchesMove = onTouchesUp(VoicePanelPIPTsx8).onTouchesMove;
    onTouchesUp(VoicePanelPIPTsx8);
    items4[6] = tmp(tmp2[16]).clampPIPScale;
    items4[7] = windowDimensions;
    items4[8] = safeArea;
    items4[9] = pipAvoidanceSpecs;
    items4[10] = tmp(tmp2[19]).State;
    items4[11] = 10;
    items4[12] = tmp(tmp2[16]).getClampedPIPPosition;
    items4[13] = wrapperDimensions;
    items4[14] = tmp(tmp2[16]).getScaledPIPContainerHeight;
    items4[15] = isDockEnabled;
    items4[16] = stateFromStores2(tmp2[17]);
    items4[17] = wrapperOffset;
    items4[18] = tmp(tmp2[20]).scheduleOnRN;
    items4[19] = stateFromStores2(tmp2[21]);
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
    [tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44] = items4;
    const tmp22 = pIPState1;
    class VoicePanelPIPTsx9 {
      constructor(arg0, arg1) {
        point = closure_0(arg0.allTouches);
        tmp = closure_1(arg0.allTouches, point);
        obj = closure_2;
        value = closure_2.get();
        if (value.active) {
          diff = value.offsetX + point.x - value.originX;
          diff1 = value.offsetY + point.y - value.originY;
          sum1 = diff1;
          sum = diff;
          if (value.spread > closure_3) {
            sum1 = diff1;
            sum = diff;
            if (tmp > tmp25) {
              scale3 = closure_4.scale;
              tmp33 = closure_4;
              value1 = scale3.get();
              tmp35 = closure_5;
              obj1 = { scale: null, width: null, containerHeight: null, showSecondaryPIP: null, windowDimensions: null, safeArea: null, pipAvoidanceSpecs: null };
              obj1.scale = value1 * (tmp / value.spread);
              ({ width: obj6.width, containerHeight: obj6.containerHeight, showSecondaryPIP: obj6.showSecondaryPIP } = closure_4);
              tmp36 = closure_6;
              obj1.windowDimensions = closure_6.get();
              tmp37 = closure_7;
              obj1.safeArea = closure_7.get();
              tmp38 = closure_8;
              obj1.pipAvoidanceSpecs = closure_8.get();
              tmp39 = closure_5(obj1);
              sum1 = diff1;
              sum = diff;
              if (tmp39 !== value1) {
                scale2 = tmp33.scale;
                result = scale2.set(tmp39);
                result1 = tmp39 / value1;
                num = 1;
                sum = diff + (point.x - (value.baseX + diff)) * (1 - result1);
                sum1 = diff1 + (point.y - (value.baseY + diff1)) * (1 - result1);
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
          tmp3 = closure_9;
          if (arg0.state === closure_9.BEGAN) {
            tmp31 = globalThis;
            _Math3 = Math;
            tmp32 = closure_10;
            if (Math.abs(value.originX - point.x) <= closure_10) {
              _Math = Math;
              if (Math.abs(value.originY - point.y) <= tmp32) {
                _Math2 = Math;
              }
            }
            tmp4 = closure_4;
            scale = closure_4.scale;
            value2 = scale.get();
            tmp6 = closure_11;
            size = { pipX: null, pipY: null, width: null, height: null, windowDimensions: null, safeArea: null, bottomAvoidanceRegion: null, topAvoidanceRegion: null };
            tmp7 = closure_12;
            size.pipX = closure_12.get().pipX;
            size.pipY = closure_12.get().pipY;
            size.width = closure_4.width * value2;
            tmp8 = closure_13;
            obj8 = { height: null, containerHeight: null, showSecondaryPIP: null, scale: null };
            ({ height: obj3.height, containerHeight: obj3.containerHeight, showSecondaryPIP: obj3.showSecondaryPIP } = closure_4);
            obj8.scale = value2;
            size.height = closure_13(obj8);
            tmp9 = closure_6;
            size.windowDimensions = closure_6.get();
            tmp10 = closure_7;
            size.safeArea = closure_7.get();
            tmp11 = closure_8;
            size.bottomAvoidanceRegion = closure_8.get().bottom;
            size.topAvoidanceRegion = closure_8.get().top;
            tmp12 = closure_11(size);
            obj9 = { pressed: true, active: true, baseX: null, baseY: null, offsetX: 0, offsetY: 0, originX: null, originY: null, spread: null };
            ({ x: obj4.baseX, y: obj4.baseY } = tmp12);
            ({ x: obj4.originX, y: obj4.originY } = point);
            obj9.spread = tmp;
            result3 = obj.set(obj9);
            tmp14 = closure_14;
            if (!tmp14) {
              tmp15 = closure_15;
              tmp16 = closure_16;
              tmp17 = closure_15(closure_16, { gestureActive: true, x: 0, y: 0 });
            }
            tmp18 = arg1;
            activateResult = arg1.activate();
            tmp20 = closure_17;
            tmp21 = closure_18;
            tmp22 = closure_17(closure_18);
          }
        }
        return;
      }
    }
    const items5 = [tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44];
    VoicePanelPIPTsx9.__closure = items5;
    VoicePanelPIPTsx9.__workletHash = 17307276361367;
    VoicePanelPIPTsx9.__initData = tmp25;
    const items6 = [closure_2_28, tmp6, callback, isDockEnabled, , , , , , , ];
    const onEnd = onTouchesMove(VoicePanelPIPTsx9).onEnd;
    onTouchesMove(VoicePanelPIPTsx9);
    items6[4] = stateFromStores2(tmp2[17]);
    items6[5] = wrapperOffset;
    items6[6] = closure_2_20;
    items6[7] = tmp(tmp2[20]).scheduleOnRN;
    items6[8] = stateFromStores2(tmp2[22]).updateSourceTrackingView;
    items6[9] = tmp(tmp2[23]).setVoicePanelPIPScaleCached;
    items6[10] = tmp22;
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
    [tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56] = items6;
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
        tmp7 = closure_6(closure_7);
        scale = closure_9.scale;
        tmp8 = closure_6(closure_8, scale.get());
        return;
      }
    }
    const items7 = [tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56];
    VoicePanelPIPTsx10.__closure = items7;
    VoicePanelPIPTsx10.__workletHash = 9350074406559;
    VoicePanelPIPTsx10.__initData = tmp46;
    const items8 = [closure_2_29, isDockEnabled, , , , ];
    const onFinalize = onEnd(VoicePanelPIPTsx10).onFinalize;
    onEnd(VoicePanelPIPTsx10);
    items8[2] = stateFromStores2(tmp2[17]);
    items8[3] = wrapperOffset;
    items8[4] = sharedValue;
    items8[5] = closure_2_20;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    [tmp58, tmp59, tmp60, tmp61, tmp62, tmp63] = items8;
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
    const items9 = [tmp59, tmp60, tmp61, tmp62, tmp63];
    VoicePanelPIPTsx11.__closure = items9;
    VoicePanelPIPTsx11.__workletHash = 9688406235986;
    VoicePanelPIPTsx11.__initData = tmp58;
    return onFinalize(VoicePanelPIPTsx11);
  }, items10);
  const memo1 = obj.useMemo(() => {
    let tmp11;
    let tmp12;
    let tmp13;
    let tmp14;
    let tmp15;
    let tmp16;
    let tmp17;
    let tmp18;
    let tmp19;
    let tmp20;
    let tmp6;
    let tmp7;
    let tmp8;
    const Gesture = setMode(dependencyMap[19]).Gesture;
    const Exclusive = Gesture.Exclusive;
    const Gesture2 = setMode(dependencyMap[19]).Gesture;
    const TapResult = Gesture2.Tap();
    const enabledResult = TapResult.enabled(mode2 !== constants2.IN_APP);
    const items = [closure_2_30, , ];
    const onStart = enabledResult.maxDistance(30).onStart;
    enabledResult.maxDistance(30);
    items[1] = setMode(dependencyMap[20]).scheduleOnRN;
    items[2] = setFocused;
    let c0;
    let c1;
    [tmp6, tmp7, tmp8] = items;
    const tmp3 = mode2;
    const tmp4 = constants2;
    class VoicePanelPIPTsx12 {
      constructor() {
        tmp = closure_0(closure_1, null);
        return;
      }
    }
    const items1 = [tmp7, tmp8];
    VoicePanelPIPTsx12.__closure = items1;
    VoicePanelPIPTsx12.__workletHash = 292478158131;
    VoicePanelPIPTsx12.__initData = tmp6;
    const onStartResult = onStart(VoicePanelPIPTsx12);
    const numberOfTapsResult = onStartResult.numberOfTaps(2);
    const Gesture3 = tmp(tmp2[19]).Gesture;
    const TapResult1 = Gesture3.Tap();
    const enabledResult1 = TapResult1.enabled(true);
    const items2 = [closure_2_31, tmp3, tmp4, , , , , , , ];
    const onStart2 = enabledResult1.maxDistance(30).onStart;
    enabledResult1.maxDistance(30);
    items2[3] = setMode(dependencyMap[20]).scheduleOnRN;
    items2[4] = setMode2;
    items2[5] = constants;
    items2[6] = controlsSpecs2;
    items2[7] = VoicePanelControlsModes;
    items2[8] = showControls;
    items2[9] = hideControls;
    c0 = undefined;
    c1 = undefined;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    let c7;
    let c8;
    [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items2;
    class VoicePanelPIPTsx13 {
      constructor() {
        if (closure_0 === closure_1.IN_APP) {
          tmp9 = closure_2;
          tmp10 = closure_3;
          tmp11 = closure_4;
          tmp12 = closure_2(closure_3, closure_4.PANEL);
        } else {
          tmp = closure_5;
          tmp2 = closure_6;
          if (closure_5.get().mode === closure_6.HIDDEN) {
            tmp6 = closure_2;
            tmp7 = closure_7;
            tmp8 = closure_2(closure_7);
          } else {
            tmp3 = closure_2;
            tmp4 = closure_8;
            tmp5 = closure_2(closure_8);
          }
        }
        return;
      }
    }
    const items3 = [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20];
    VoicePanelPIPTsx13.__closure = items3;
    VoicePanelPIPTsx13.__workletHash = 2348764874490;
    VoicePanelPIPTsx13.__initData = tmp11;
    return Exclusive(numberOfTapsResult, onStart2(VoicePanelPIPTsx13));
  }, items11);
  const items12 = [EmbeddedActivitiesStore];
  const tmp5Result16 = tmp5(504);
  stateFromStores = tmp5Result16.useStateFromStores(items12, () => {
    currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
    let _location;
    const getEmbeddedActivityLocationChannelId = setMode(dependencyMap[25]).getEmbeddedActivityLocationChannelId;
    setMode(dependencyMap[25]);
    if (currentEmbeddedActivity != null) {
      _location = currentEmbeddedActivity.location;
    }
    return getEmbeddedActivityLocationChannelId(_location) !== c11;
  });
  const items13 = [FramesStore];
  const tmp5Result17 = tmp5(504);
  stateFromStores1 = tmp5Result17.useStateFromStores(items13, () => {
    const mainFrame = FramesStore.getMainFrame();
    let id = null;
    if (isLaunched(mainFrame)) {
      id = mainFrame.id;
    }
    return id;
  });
  const items14 = [stateFromStores, stateFromStores1, setMode2, setFocused];
  callback1 = obj.useCallback(() => {
    const tmp = stateFromStores;
    if (tmp) {
      setMode2(constants.PIP);
      setFocused(null);
    }
    if (null != stateFromStores1) {
      const obj2 = stateFromStores2(dependencyMap[26]);
      obj2.updateFramePanelMode(tmp8, constants3.PANEL);
    } else {
      const obj = callback2(dependencyMap[27]);
      const result = obj.updateActivityPanelMode(constants3.PANEL);
    }
  }, items14);
  const items15 = [callback1];
  const memo2 = obj.useMemo(() => {
    let tmp2;
    let tmp3;
    let tmp4;
    const Gesture = setMode(dependencyMap[19]).Gesture;
    const TapResult = Gesture.Tap();
    const items = [closure_2_32, , ];
    const onStart = TapResult.maxDistance(30).onStart;
    TapResult.maxDistance(30);
    items[1] = setMode(dependencyMap[20]).scheduleOnRN;
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
  }, items15);
  let pushToTalk = tmp2(8965)(controlsSpecs).pushToTalk;
  const items16 = [closure_33, , ];
  const useAnimatedStyle3 = tmp5(1652).useAnimatedStyle;
  tmp5(1652);
  items16[1] = tmp5(19272).getVoicePanelPIPBorderRadius;
  items16[2] = pIPState;
  c0 = undefined;
  c1 = undefined;
  [tmp62, tmp63, tmp64] = items16;
  const tmp57 = FramesStore;
  class VoicePanelPIPTsx15 {
    constructor() {
      const obj = { borderRadius: _undefined(_undefined2.width, _undefined2.height) };
      return obj;
    }
  }
  const items17 = [tmp63, tmp64];
  VoicePanelPIPTsx15.__closure = items17;
  VoicePanelPIPTsx15.__workletHash = 13048454285642;
  VoicePanelPIPTsx15.__initData = tmp62;
  const animatedStyle3 = useAnimatedStyle3(VoicePanelPIPTsx15);
  const items18 = [setMode];
  const memo3 = obj.useMemo(() => {
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
  }, items18);
  const items19 = [tmp57];
  const tmp5Result19 = tmp5(504);
  stateFromStores2 = tmp5Result19.useStateFromStores(items19, () => {
    const mainFrame = FramesStore.getMainFrame();
    let id = null;
    if (isLaunched(mainFrame)) {
      id = mainFrame.id;
    }
    return id;
  });
  const items20 = [stateFromStores2];
  const callback2 = obj.useCallback(() => {
    if (null != stateFromStores2) {
      const obj2 = FramesActionCreatorsDefault;
      obj2.updateFramePanelMode(tmp, ActivityPanelModes.PANEL);
    } else {
      const obj = EmbeddedActivitiesActionCreatorsAll;
      const result = obj.updateActivityPanelMode(ActivityPanelModes.PANEL);
    }
  }, items20);
  const items21 = [callback2];
  const memo4 = obj.useMemo(() => {
    let intl;
    let items;
    const obj = { accessible: true, accessibilityLabel: intl.string(intl2.t["3ejJer"]), accessibilityActions: items, onAccessibilityAction: callback2 };
    intl = intl2.intl;
    items = [{ name: "activate" }];
    return obj;
  }, items21);
  if (pushToTalk) {
    pushToTalk = pIPState.mode !== tmp10.IN_PANEL || tmp70;
  }
  const items22 = [closure_34, pIPState];
  c0 = undefined;
  [tmp72, tmp73] = items22;
  const tmp5Result20 = tmp5(1652);
  class VoicePanelPIPTsx16 {
    constructor() {
      let height;
      let scale;
      const obj = { height: height * scale.get() };
      ({ scale, height } = c0);
      return obj;
    }
  }
  const items23 = [tmp73];
  VoicePanelPIPTsx16.__closure = items23;
  VoicePanelPIPTsx16.__workletHash = 12876553277678;
  VoicePanelPIPTsx16.__initData = tmp72;
  const items24 = [closure_35, sharedValue, , ];
  const animatedStyle4 = tmp5Result20.useAnimatedStyle(VoicePanelPIPTsx16);
  const useCallback2 = obj.useCallback;
  items24[2] = tmp5(5757).withSpring;
  items24[3] = tmp5(19272).PIP_LAYOUT_PHYSICS;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp75, tmp76, tmp77, tmp78] = items24;
  class VoicePanelPIPTsx17 {
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
  const items25 = [tmp76, tmp77, tmp78];
  VoicePanelPIPTsx17.__closure = items25;
  VoicePanelPIPTsx17.__workletHash = 244303183633;
  VoicePanelPIPTsx17.__initData = tmp75;
  const items26 = [sharedValue];
  const callback21 = useCallback2(VoicePanelPIPTsx17, items26);
  const obj6 = { pointerEvents: "box-none", style: items27, layout: callback21, children: items33 };
  items27 = [tmp.container, animatedStyle];
  const View = tmp2(1652).View;
  const obj7 = { gesture: memo, children: closure_16(View2, obj8) };
  const GestureDetector = tmp5(5426).GestureDetector;
  let tmp81Result = null;
  obj8 = { pointerEvents: "box-none", style: tmp.multiPipContainer, layout: callback21, children: items30 };
  View2 = tmp2(1652).View;
  if (tmp12) {
    const obj9 = { style: items28, pointerEvents: "box-none", layout: callback21, children: closure_15(GestureDetector2, obj10) };
    items28 = [, , , ];
    ({ pipContentWrapper: arr29[0], inAppElevationShadow: arr29[1] } = tmp);
    items28[2] = animatedStyle2;
    items28[3] = animatedStyle1;
    const View3 = tmp2(1652).View;
    let merged = Object.assign(memo3);
    obj10 = { gesture: memo1, children: closure_15(View4, obj11) };
    GestureDetector2 = tmp5(5426).GestureDetector;
    obj11 = { style: items29, layout: callback21, children: closure_15(tmp2(19446), obj12) };
    items29 = [tmp.pipMask, animatedStyle3];
    View4 = tmp2(1652).View;
    obj12 = { layoutTransition: callback21 };
    tmp81Result = tmp81(View3, obj9);
  }
  items30 = [tmp81Result, ];
  let tmp81Result3 = null;
  if (pIPState.showSecondaryPIP) {
    const obj13 = { style: items31, children: closure_15(View6, obj14) };
    items31 = [, , ];
    ({ pipContentWrapper: arr32[0], inAppElevationShadow: arr32[1] } = tmp);
    items31[2] = animatedStyle2;
    const View5 = tmp2(1652).View;
    const merged1 = Object.assign(memo4);
    obj14 = { style: items32, children: closure_15(GestureDetector3, obj15) };
    items32 = [tmp.pipMask, animatedStyle3];
    View6 = tmp2(1652).View;
    obj15 = { gesture: memo2, children: closure_15(tmp2Result, obj16) };
    GestureDetector3 = tmp5(5426).GestureDetector;
    obj16 = { style: StyleSheet.absoluteFill, children: closure_15(tmp2(19450), {}) };
    tmp2Result = tmp2(7086);
    tmp81Result3 = tmp81(View5, obj13);
  }
  items30[1] = tmp81Result3;
  items33 = [closure_15(GestureDetector, obj7), ];
  let tmp81Result4 = null;
  if (tmp13) {
    tmp81Result4 = null;
    if (pushToTalk) {
      const obj17 = { pointerEvents: "box-none", style: items34, layout: callback21, children: closure_15(tmp2(19451), {}) };
      items34 = [tmp.pushToTalkContainer, animatedStyle4];
      const View7 = tmp2(1652).View;
      tmp81Result4 = tmp81(View7, obj17);
    }
  }
  items33[1] = tmp81Result4;
  return closure_16(View, obj6);
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
let items = [{ code: "(function getTouchesCentroid_VoicePanelPIPTsx1(touches){let x=0;let y=0;for(const touch of touches){x+=touch.absoluteX;y+=touch.absoluteY;}return{x:x/touches.length,y:y/touches.length};})" }];
[tmp8] = items;
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
getTouchesCentroid.__initData = tmp8;
let items1 = [{ code: "(function getTouchesSpread_VoicePanelPIPTsx2(touches,centroid){if(touches.length<2)return 0;let total=0;for(const touch of touches){const dx=touch.absoluteX-centroid.x;const dy=touch.absoluteY-centroid.y;total+=Math.sqrt(dx*dx+dy*dy);}return total/touches.length;})" }];
[tmp9] = items1;
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
getTouchesSpread.__initData = tmp9;
let closure_20 = { pressed: false, active: false, baseX: 0, baseY: 0, offsetX: 0, offsetY: 0, originX: 0, originY: 0, spread: 0 };
let closure_21 = { code: "(function VoicePanelPIPTsx3(state,velocityX,velocityY){let[pipState,getScaledPIPContainerHeight,calculatePIPPositionFromVelocity,windowDimensions,safeArea,updateSharedValueIfChanged,wrapperDimensions]=this.__closure;const scale=pipState.scale.get();const width=pipState.width*scale;const height=getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,scale:scale});const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:state.baseX+state.offsetX+width/2,absoluteY:state.baseY+state.offsetY+height/2,windowDimensions:windowDimensions.get(),safeArea:safeArea.get()});updateSharedValueIfChanged(wrapperDimensions,{pipX:pipX,pipY:pipY});})" };
let closure_22 = { code: "(function VoicePanelPIPTsx4(){let[pipState,getScaledPIPContainerHeight,mainTileInLayout,gestureState,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,DRAWER_SPRING_PHYSICS,PIP_LAYOUT_PHYSICS,opacity,withSpring,getVoicePanelPIPBorderRadius]=this.__closure;const width=pipState.width*pipState.scale.get();const height=getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP&&mainTileInLayout,scale:pipState.scale.get()});const state=gestureState.get();let x;let y;if(state.active){x=state.baseX+state.offsetX;y=state.baseY+state.offsetY;}else{const clamped=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:width,height:height,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top});x=clamped.x;y=clamped.y;}const physics=state.active?DRAWER_SPRING_PHYSICS:PIP_LAYOUT_PHYSICS;return{width:width,height:height,opacity:opacity.get(),transform:[{translateX:withSpring(x,physics)},{translateY:withSpring(y,physics)}],borderRadius:getVoicePanelPIPBorderRadius(width,height)};})" };
let closure_23 = { code: "(function VoicePanelPIPTsx5(){let[pipState,getVoicePanelPIPBorderRadius]=this.__closure;const{width:width,height:height,scale:scale}=pipState;return{width:width*scale.get(),height:height*scale.get(),borderRadius:getVoicePanelPIPBorderRadius(width,height)};})" };
let closure_24 = { code: "(function VoicePanelPIPTsx6(){let[mainTileVisible]=this.__closure;return{opacity:mainTileVisible?1:0};})" };
let closure_25 = { code: "(function VoicePanelPIPTsx7(event){let[getTouchesCentroid,getTouchesSpread,gestureState,INACTIVE_GESTURE_STATE,updateSharedValueIfChanged]=this.__closure;const centroid=getTouchesCentroid(event.allTouches);const spread=getTouchesSpread(event.allTouches,centroid);const state=gestureState.get();if(!state.pressed){gestureState.set({...INACTIVE_GESTURE_STATE,pressed:true,originX:centroid.x,originY:centroid.y,spread:spread});return;}updateSharedValueIfChanged(gestureState,{originX:centroid.x,originY:centroid.y,spread:spread});})" };
let closure_26 = { code: "(function VoicePanelPIPTsx8(event){let[updateSharedValueIfChanged,gestureState,getTouchesCentroid,getTouchesSpread]=this.__closure;const remainingTouches=event.allTouches.filter(function(touch){return!event.changedTouches.some(function(changedTouch){return changedTouch.id===touch.id;});});if(remainingTouches.length===0){updateSharedValueIfChanged(gestureState,{pressed:false});return;}const centroid=getTouchesCentroid(remainingTouches);updateSharedValueIfChanged(gestureState,{originX:centroid.x,originY:centroid.y,spread:getTouchesSpread(remainingTouches,centroid)});})" };
let closure_27 = { code: "(function VoicePanelPIPTsx9(event,manager){let[getTouchesCentroid,getTouchesSpread,gestureState,MIN_PINCH_SPAN,pipState,clampPIPScale,windowDimensions,safeArea,pipAvoidanceSpecs,State,MIN_GESTURE_START,getClampedPIPPosition,wrapperDimensions,getScaledPIPContainerHeight,isDockEnabled,updateSharedValueIfChanged,wrapperOffset,scheduleOnRN,triggerIOSHaptic]=this.__closure;const centroid=getTouchesCentroid(event.allTouches);const spread=getTouchesSpread(event.allTouches,centroid);const state=gestureState.get();if(state.active){let offsetX=state.offsetX+centroid.x-state.originX;let offsetY=state.offsetY+centroid.y-state.originY;if(state.spread>MIN_PINCH_SPAN&&spread>MIN_PINCH_SPAN){const previousScale=pipState.scale.get();const scale=clampPIPScale({scale:previousScale*(spread/state.spread),width:pipState.width,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),pipAvoidanceSpecs:pipAvoidanceSpecs.get()});if(scale!==previousScale){pipState.scale.set(scale);const scaleChange=scale/previousScale;offsetX+=(centroid.x-(state.baseX+offsetX))*(1-scaleChange);offsetY+=(centroid.y-(state.baseY+offsetY))*(1-scaleChange);}}gestureState.set({pressed:state.pressed,active:true,baseX:state.baseX,baseY:state.baseY,offsetX:offsetX,offsetY:offsetY,originX:centroid.x,originY:centroid.y,spread:spread});return;}if(event.state!==State.BEGAN)return;if(Math.abs(state.originX-centroid.x)>MIN_GESTURE_START||Math.abs(state.originY-centroid.y)>MIN_GESTURE_START||Math.abs(state.spread-spread)>MIN_GESTURE_START){const scale=pipState.scale.get();const{x:x,y:y}=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:pipState.width*scale,height:getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,scale:scale}),windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top});gestureState.set({pressed:true,active:true,baseX:x,baseY:y,offsetX:0,offsetY:0,originX:centroid.x,originY:centroid.y,spread:spread});if(!isDockEnabled){updateSharedValueIfChanged(wrapperOffset,{gestureActive:true,x:0,y:0});}manager.activate();scheduleOnRN(triggerIOSHaptic);}})" };
let closure_28 = { code: "(function VoicePanelPIPTsx10({velocityX:velocityX,velocityY:velocityY}){let[gestureState,settlePIPPosition,isDockEnabled,updateSharedValueIfChanged,wrapperOffset,INACTIVE_GESTURE_STATE,scheduleOnRN,updateSourceTrackingView,setVoicePanelPIPScaleCached,pipState]=this.__closure;const state=gestureState.get();settlePIPPosition(state,velocityX,velocityY);if(!isDockEnabled){updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}gestureState.set(INACTIVE_GESTURE_STATE);scheduleOnRN(updateSourceTrackingView);scheduleOnRN(setVoicePanelPIPScaleCached,pipState.scale.get());})" };
let closure_29 = { code: "(function VoicePanelPIPTsx11(){let[isDockEnabled,updateSharedValueIfChanged,wrapperOffset,gestureState,INACTIVE_GESTURE_STATE]=this.__closure;if(!isDockEnabled){updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}gestureState.set(INACTIVE_GESTURE_STATE);})" };
let closure_30 = { code: "(function VoicePanelPIPTsx12(){let[scheduleOnRN,setFocused]=this.__closure;scheduleOnRN(setFocused,null);})" };
let closure_31 = { code: "(function VoicePanelPIPTsx13(){let[pipMode,VoicePanelPIPModes,scheduleOnRN,setMode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,showControls,hideControls]=this.__closure;if(pipMode===VoicePanelPIPModes.IN_APP){scheduleOnRN(setMode,VoicePanelModes.PANEL);}else{if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){scheduleOnRN(showControls);}else{scheduleOnRN(hideControls);}}})" };
let closure_32 = { code: "(function VoicePanelPIPTsx14(){let[scheduleOnRN,handleSecondaryPIPTap]=this.__closure;scheduleOnRN(handleSecondaryPIPTap);})" };
let closure_33 = { code: "(function VoicePanelPIPTsx15(){let[getVoicePanelPIPBorderRadius,pipState]=this.__closure;return{borderRadius:getVoicePanelPIPBorderRadius(pipState.width,pipState.height)};})" };
let closure_34 = { code: "(function VoicePanelPIPTsx16(){let[pipState]=this.__closure;return{height:pipState.height*pipState.scale.get()};})" };
let closure_35 = { code: "(function VoicePanelPIPTsx17(values){let[gestureState,withSpring,PIP_LAYOUT_PHYSICS]=this.__closure;const active=gestureState.get().active;return{animations:{originX:withSpring(values.targetOriginX,PIP_LAYOUT_PHYSICS),originY:withSpring(values.targetOriginY,PIP_LAYOUT_PHYSICS),width:active?values.targetWidth:withSpring(values.targetWidth,PIP_LAYOUT_PHYSICS),height:active?values.targetHeight:withSpring(values.targetHeight,PIP_LAYOUT_PHYSICS)},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};})" };
let closure_37 = react.memo(function PIPWrapper(transitionState) {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  const pipHandoff = react.useContext(transitionCleanUp(11359)).pipHandoff;
  const obj = transitionState(19362);
  const mode = obj.usePIPState().mode;
  const obj2 = transitionState(11368);
  const pIPCardsSettled = obj2.usePIPCardsSettled(pipHandoff);
  const obj3 = transitionState(11368);
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
