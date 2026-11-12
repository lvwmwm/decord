// Module ID: 19718
// Function ID: 19719
// Name: VoicePanelPIP
// Dependencies: [19, 17, 5018, 6934, 6963, 11395, 11393, 19521, 5813, 6935, 21, 5170, 11394, 19610, 11403, 1652, 5402, 19520, 11399, 5793, 5452, 1705, 19613, 6035, 19604, 504, 5091, 11093, 11921, 8948, 1113, 19719, 7056, 19723, 19724, 5231, 2]
// Exports: usePIPTileHandoff

// Module 19718 (VoicePanelPIP)
import intl2 from "intl" /* 1113 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 5091 */;
import native from "native" /* 5231 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5452 */;
import spring_spring from "spring/spring" /* 5793 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5813 */;
import ExternalPipDefault from "ExternalPip" /* 6035 */;
import FramesConstants from "FramesConstants" /* 6935 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 11093 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11393 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11394 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11399 */;
import VoicePanelPIPHandoff from "VoicePanelPIPHandoff" /* 11403 */;
import EmbeddedActivitiesActionCreatorsAll from "EmbeddedActivitiesActionCreators" /* 11921 */;
import VoicePanelPIPUtils from "VoicePanelPIPUtils" /* 19520 */;
import VoicePanelPIPConstants from "VoicePanelPIPConstants" /* 19521 */;
import VoicePanelPIPStateContext from "VoicePanelPIPStateContext" /* 19610 */;
import triggerIOSHapticDefault from "triggerIOSHaptic" /* 19613 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 5018 */;
import FramesStore from "FramesStore" /* 6934 */;
import VoicePanelStore from "VoicePanelStore" /* 6963 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11395 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _Math2, _Math3, _require, activateResult, allTouches, found, obj1, result1, result2, result3, scale3, set, sum, sum1, targetHeight, targetWidth, tmp6, tmp7, value1, value2;

let SECONDARY_PIP_TOP_MARGIN;
let c10;
let c9;
let closure_15;
let closure_16;
let obj2;
let obj3;
let tmp;
let tmp10;
let tmp9;
const _mod1705 = tmp(1705);
const VoicePanelPIPScaleCache = tmp(19604);
function usePIPGesture(mode, arg1, cardArrivedInPIP, arg3) {
  let _undefined;
  let c14;
  let isDockEnabled;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
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
  let tmp31;
  let tmp32;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp39;
  let tmp40;
  let tmp8;
  let tmp9;
  _require = mode;
  let obj = arg3;
  if (arg3 === undefined) {
    obj = {};
  }
  const onMainTileTap = obj.onMainTileTap;
  let flag = obj.dragEnabled;
  if (flag === undefined) {
    flag = true;
  }
  const fadeInTiming = obj.fadeInTiming;
  let controlsSpecs;
  c14 = undefined;
  isDockEnabled = undefined;
  let callback;
  let stateFromStores;
  let stateFromStores1;
  let callback1;
  let obj2 = controlsSpecs;
  let tmp = fadeInTiming;
  const context = controlsSpecs.useContext(onMainTileTap(fadeInTiming[12]));
  controlsSpecs = context.controlsSpecs;
  const hideControls = context.hideControls;
  const pipAvoidanceSpecs = context.pipAvoidanceSpecs;
  const safeArea = context.safeArea;
  const setFocused = context.setFocused;
  const setMode = context.setMode;
  const showControls = context.showControls;
  const windowDimensions = context.windowDimensions;
  const wrapperDimensions = context.wrapperDimensions;
  const wrapperOffset = context.wrapperOffset;
  ({ channelId: c14, isDockEnabled } = context);
  let tmp3 = _require;
  let obj3 = require("VoicePanelPIPStateContext");
  const pIPState = obj3.usePIPState();
  const obj4 = require("module_1652");
  const sharedValue = obj4.useSharedValue(stateFromStores);
  const obj5 = require("module_1652");
  const sharedValue1 = obj5.useSharedValue(0);
  let items = [sharedValue1, fadeInTiming];
  const effect = controlsSpecs.useEffect(() => {
    let closure_0;
    const timeout = setTimeout(() => {
      let num = 1;
      if (null != closure_1_3) {
        const obj = mode(fadeInTiming[16]);
        num = obj.withTiming(1, tmp2);
      }
      const result = set(num);
    }, 200);
    return () => {
      clearTimeout(closure_0);
    };
  }, items);
  let items1 = [stateFromStores1, pIPState, , , , , , ];
  const useCallback = controlsSpecs.useCallback;
  items1[2] = require("VoicePanelPIPUtils").getScaledPIPContainerHeight;
  items1[3] = require("VoicePanelPIPUtils").calculatePIPPositionFromVelocity;
  items1[4] = windowDimensions;
  items1[5] = safeArea;
  items1[6] = onMainTileTap(fadeInTiming[18]);
  items1[7] = wrapperDimensions;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15] = items1;
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
  let items2 = [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15];
  VoicePanelPIPTsx3.__closure = items2;
  VoicePanelPIPTsx3.__workletHash = 5650627550281;
  VoicePanelPIPTsx3.__initData = tmp8;
  let items3 = [, , , , , , , ];
  ({ containerHeight: arr4[0], height: arr4[1], scale: arr4[2], showSecondaryPIP: arr4[3], width: arr4[4] } = pIPState);
  items3[5] = safeArea;
  items3[6] = windowDimensions;
  items3[7] = wrapperDimensions;
  callback = useCallback(VoicePanelPIPTsx3, items3);
  let tmp3Result = tmp3(tmp[15]);
  let items4 = [callback1, pIPState, , , , , , , , , , , , , ];
  const useAnimatedStyle = tmp3Result.useAnimatedStyle;
  items4[2] = tmp3(tmp[17]).getScaledPIPContainerHeight;
  items4[3] = arg1;
  items4[4] = sharedValue;
  items4[5] = tmp3(tmp[17]).getClampedPIPPosition;
  items4[6] = wrapperDimensions;
  items4[7] = windowDimensions;
  items4[8] = safeArea;
  items4[9] = pipAvoidanceSpecs;
  items4[10] = setMode;
  items4[11] = tmp3(tmp[17]).PIP_LAYOUT_PHYSICS;
  items4[12] = sharedValue1;
  items4[13] = tmp3(tmp[19]).withSpring;
  items4[14] = tmp3(tmp[17]).getVoicePanelPIPBorderRadius;
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
  let c11;
  let c12;
  let c13;
  [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32] = items4;
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
  let items5 = [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32];
  VoicePanelPIPTsx4.__closure = items5;
  VoicePanelPIPTsx4.__workletHash = 1405151030616;
  VoicePanelPIPTsx4.__initData = tmp18;
  const animatedStyle = useAnimatedStyle(VoicePanelPIPTsx4);
  let items6 = [closure_23, pIPState, ];
  const useAnimatedStyle2 = tmp3(tmp[15]).useAnimatedStyle;
  tmp3(tmp[15]);
  items6[2] = tmp3(tmp[17]).getVoicePanelPIPBorderRadius;
  c0 = undefined;
  c1 = undefined;
  [tmp35, tmp36, tmp37] = items6;
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
  let items7 = [tmp36, tmp37];
  VoicePanelPIPTsx5.__closure = items7;
  VoicePanelPIPTsx5.__workletHash = 13253829300730;
  VoicePanelPIPTsx5.__initData = tmp35;
  const animatedStyle2 = useAnimatedStyle2(VoicePanelPIPTsx5);
  let items8 = [closure_24, cardArrivedInPIP];
  c0 = undefined;
  [tmp39, tmp40] = items8;
  const tmp3Result6 = tmp3(tmp[15]);
  class VoicePanelPIPTsx6 {
    constructor() {
      let opacity = 0;
      if (c0) {
        opacity = 1;
      }
      return { opacity };
    }
  }
  let items9 = [tmp40];
  VoicePanelPIPTsx6.__closure = items9;
  VoicePanelPIPTsx6.__workletHash = 14702367813687;
  VoicePanelPIPTsx6.__initData = tmp39;
  const items10 = [flag, isDockEnabled, sharedValue, pipAvoidanceSpecs, , , , , , , , , , ];
  ({ containerHeight: arr11[4], height: arr11[5], scale: arr11[6], showSecondaryPIP: arr11[7], width: arr11[8] } = pIPState);
  items10[9] = safeArea;
  items10[10] = callback;
  items10[11] = windowDimensions;
  items10[12] = wrapperDimensions;
  items10[13] = wrapperOffset;
  const animatedStyle1 = tmp3Result6.useAnimatedStyle(VoicePanelPIPTsx6);
  const items11 = [controlsSpecs, hideControls, setFocused, showControls, mode, setMode, onMainTileTap];
  const memo = obj2.useMemo(() => {
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
    let tmp = require;
    let tmp2 = dependencyMap;
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const enabledResult = PanResult.enabled(flag);
    const manualActivationResult = enabledResult.manualActivation(true);
    let result = manualActivationResult.shouldCancelWhenOutside(false);
    const items = [closure_25, , , , , ];
    items[1] = getTouchesCentroid;
    let tmp5 = getTouchesSpread;
    items[2] = getTouchesSpread;
    items[3] = sharedValue;
    items[4] = closure_20;
    const onTouchesDown = result.onTouchesDown;
    items[5] = updateSharedValueIfChangedDefault;
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
    const items2 = [closure_26, , , , ];
    const onTouchesUp = onTouchesDown(VoicePanelPIPTsx7).onTouchesUp;
    onTouchesDown(VoicePanelPIPTsx7);
    items2[1] = updateSharedValueIfChangedDefault;
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
        found = allTouches.filter(function() { /* body not rendered: F143111 */ });
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
    const items4 = [closure_27, tmp4, tmp5, tmp6, 8, pIPState, , , , , , , , , , , , , , ];
    const onTouchesMove = onTouchesUp(VoicePanelPIPTsx8).onTouchesMove;
    onTouchesUp(VoicePanelPIPTsx8);
    items4[6] = VoicePanelPIPUtils.clampPIPScale;
    items4[7] = windowDimensions;
    items4[8] = safeArea;
    items4[9] = pipAvoidanceSpecs;
    items4[10] = LegacyBaseButton.State;
    items4[11] = 10;
    items4[12] = VoicePanelPIPUtils.getClampedPIPPosition;
    items4[13] = wrapperDimensions;
    items4[14] = VoicePanelPIPUtils.getScaledPIPContainerHeight;
    items4[15] = isDockEnabled;
    items4[16] = updateSharedValueIfChangedDefault;
    items4[17] = wrapperOffset;
    items4[18] = _mod1705.scheduleOnRN;
    items4[19] = triggerIOSHapticDefault;
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
    const tmp22 = pIPState;
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
    const items6 = [closure_28, tmp6, callback, isDockEnabled, , , , , , , ];
    const onEnd = onTouchesMove(VoicePanelPIPTsx9).onEnd;
    onTouchesMove(VoicePanelPIPTsx9);
    items6[4] = updateSharedValueIfChangedDefault;
    items6[5] = wrapperOffset;
    items6[6] = closure_20;
    items6[7] = _mod1705.scheduleOnRN;
    items6[8] = ExternalPipDefault.updateSourceTrackingView;
    items6[9] = VoicePanelPIPScaleCache.setVoicePanelPIPScaleCached;
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
    const items8 = [closure_29, isDockEnabled, , , , ];
    const onFinalize = onEnd(VoicePanelPIPTsx10).onFinalize;
    onEnd(VoicePanelPIPTsx10);
    items8[2] = updateSharedValueIfChangedDefault;
    items8[3] = wrapperOffset;
    items8[4] = sharedValue;
    items8[5] = closure_20;
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
  const memo1 = obj2.useMemo(() => {
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
    const tmp = require;
    const Gesture = LegacyBaseButton.Gesture;
    const Exclusive = Gesture.Exclusive;
    const Gesture2 = LegacyBaseButton.Gesture;
    let tmp5 = null == onMainTileTap;
    const enabled = Gesture2.Tap().enabled;
    Gesture2.Tap();
    const tmp4 = onMainTileTap;
    if (tmp5) {
      tmp5 = mode !== VoicePanelPIPModes.IN_APP;
    }
    const enabledResult = enabled(tmp5);
    const items = [closure_30, , ];
    const onStart = enabledResult.maxDistance(30).onStart;
    enabledResult.maxDistance(30);
    items[1] = _mod1705.scheduleOnRN;
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
    const Gesture3 = LegacyBaseButton.Gesture;
    const TapResult1 = Gesture3.Tap();
    const enabledResult1 = TapResult1.enabled(true);
    const items2 = [closure_31, tmp4, , , , , , , , , ];
    const onStart2 = enabledResult1.maxDistance(30).onStart;
    enabledResult1.maxDistance(30);
    items2[2] = _mod1705.scheduleOnRN;
    items2[3] = mode;
    items2[4] = VoicePanelPIPModes;
    items2[5] = setMode;
    items2[6] = c10;
    items2[7] = controlsSpecs;
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
  }, items11);
  const items12 = [pipAvoidanceSpecs];
  const tmp3Result7 = tmp3(tmp[25]);
  stateFromStores = tmp3Result7.useStateFromStores(items12, () => {
    const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
    let _location;
    const getEmbeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId;
    embeddedActivityLocationUtils;
    if (currentEmbeddedActivity != null) {
      _location = currentEmbeddedActivity.location;
    }
    return getEmbeddedActivityLocationChannelId(_location) !== c14;
  });
  const items13 = [safeArea];
  const tmp3Result8 = tmp3(tmp[25]);
  stateFromStores1 = tmp3Result8.useStateFromStores(items13, () => {
    const mainFrame = safeArea.getMainFrame();
    let id = null;
    if (_undefined(mainFrame)) {
      id = mainFrame.id;
    }
    return id;
  });
  const items14 = [stateFromStores, stateFromStores1, setMode, setFocused];
  callback1 = obj2.useCallback(() => {
    const tmp = stateFromStores;
    if (tmp) {
      setMode(showControls.PIP);
      setFocused(null);
    }
    if (null != stateFromStores1) {
      const obj2 = FramesActionCreatorsDefault;
      obj2.updateFramePanelMode(tmp8, ActivityPanelModes.PANEL);
    } else {
      const obj = EmbeddedActivitiesActionCreatorsAll;
      const result = obj.updateActivityPanelMode(ActivityPanelModes.PANEL);
    }
  }, items14);
  const items15 = [callback1];
  const obj6 = {
    containerGesture: memo,
    containerStyles: animatedStyle,
    pipWrapperStyles: animatedStyle2,
    mainPIPVisibilityStyles: animatedStyle1,
    mainPIPGesture: memo1,
    secondaryPIPGesture: obj2.useMemo(() => {
      let tmp2;
      let tmp3;
      let tmp4;
      const Gesture = LegacyBaseButton.Gesture;
      const TapResult = Gesture.Tap();
      const items = [closure_32, , ];
      const onStart = TapResult.maxDistance(30).onStart;
      TapResult.maxDistance(30);
      items[1] = _mod1705.scheduleOnRN;
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
    }, items15),
    gestureState: sharedValue
  };
  return obj6;
}
function usePIPLayoutTransition(gestureState) {
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  const items = [closure_34, gestureState, , ];
  const useCallback = react.useCallback;
  items[2] = spring_spring.withSpring;
  items[3] = VoicePanelPIPUtils.PIP_LAYOUT_PHYSICS;
  let c0;
  let c1;
  let c2;
  [tmp2, tmp3, tmp4, tmp5] = items;
  class VoicePanelPIPTsx15 {
    constructor(arg0) {
      active = closure_0.get().active;
      size = { originX: closure_1(gestureState.targetOriginX, closure_2), originY: closure_1(gestureState.targetOriginY, closure_2), width: null, height: null };
      tmp = closure_1;
      tmp2 = closure_2;
      targetWidth = gestureState.targetWidth;
      size.width = active ? targetWidth : tmp(targetWidth, tmp2);
      targetHeight = gestureState.targetHeight;
      obj1 = { animations: null, initialValues: null };
      size.height = active ? targetHeight : tmp(targetHeight, tmp2);
      obj1.animations = size;
      obj1.initialValues = { originX: gestureState.currentOriginX, originY: gestureState.currentOriginY, width: gestureState.currentWidth, height: gestureState.currentHeight };
      return obj1;
    }
  }
  const items1 = [tmp3, tmp4, tmp5];
  VoicePanelPIPTsx15.__closure = items1;
  VoicePanelPIPTsx15.__workletHash = 7799675155155;
  VoicePanelPIPTsx15.__initData = tmp2;
  const items2 = [gestureState];
  return useCallback(VoicePanelPIPTsx15, items2);
}
function VoicePanelPIP() {
  let GestureDetector2;
  let GestureDetector3;
  let View2;
  let View4;
  let View6;
  let containerGesture;
  let containerStyles;
  let gestureState;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items8;
  let items9;
  let mainPIPGesture;
  let mainPIPVisibilityStyles;
  let obj10;
  let obj11;
  let obj12;
  let obj14;
  let obj15;
  let obj16;
  let obj8;
  let pipWrapperStyles;
  let secondaryPIPGesture;
  let stateFromStores;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp27;
  let tmp28;
  let tmp2Result;
  const tmp = styles();
  let obj = react;
  const context = react.useContext(stateFromStores(11394));
  const setMode = context.setMode;
  const controlsSpecs = context.controlsSpecs;
  let obj2 = setMode(19610);
  const pIPState = obj2.usePIPState();
  const pipHandoff = react.useContext(stateFromStores(11394)).pipHandoff;
  const obj3 = setMode(19610);
  const mode = obj3.usePIPState().mode;
  const obj4 = setMode(11403);
  const pIPCardsSettled = obj4.usePIPCardsSettled(pipHandoff);
  let tmp11 = mode !== VoicePanelPIPModes.IN_APP;
  const obj5 = setMode(11403);
  const pIPPanelLayoutCommitted = obj5.usePIPPanelLayoutCommitted(pipHandoff);
  if (!tmp11) {
    tmp11 = pIPCardsSettled;
  }
  let tmp13 = tmp12;
  if (tmp13) {
    let tmp14 = !tmp9;
    if (null != mode) {
      tmp14 = tmp11;
    }
    tmp13 = tmp14;
  }
  ({ pipWrapperStyles, containerStyles, mainPIPVisibilityStyles, mainPIPGesture, secondaryPIPGesture, containerGesture, gestureState } = usePIPGesture(pIPState.mode, null != mode || !pIPPanelLayoutCommitted, tmp13));
  usePIPGesture(pIPState.mode, null != mode || !pIPPanelLayoutCommitted, tmp13);
  let pushToTalk = tmp2(8948)(controlsSpecs).pushToTalk;
  let items = [closure_36, , ];
  const useAnimatedStyle = setMode(1652).useAnimatedStyle;
  setMode(1652);
  items[1] = setMode(19520).getVoicePanelPIPBorderRadius;
  items[2] = pIPState;
  let c0;
  let c1;
  [tmp17, tmp18, tmp19] = items;
  class VoicePanelPIPTsx16 {
    constructor() {
      const obj = { borderRadius: _undefined(_undefined2.width, _undefined2.height) };
      return obj;
    }
  }
  const items1 = [tmp18, tmp19];
  VoicePanelPIPTsx16.__closure = items1;
  VoicePanelPIPTsx16.__workletHash = 8098994638569;
  VoicePanelPIPTsx16.__initData = tmp17;
  const animatedStyle = useAnimatedStyle(VoicePanelPIPTsx16);
  const items2 = [setMode];
  const memo = obj.useMemo(() => {
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
  }, items2);
  const items3 = [FramesStore];
  const tmp5Result3 = setMode(504);
  stateFromStores = tmp5Result3.useStateFromStores(items3, () => {
    mainFrame = mainFrame.getMainFrame();
    let id = null;
    if (isLaunched(mainFrame)) {
      id = mainFrame.id;
    }
    return id;
  });
  const items4 = [stateFromStores];
  const onAccessibilityAction = obj.useCallback(() => {
    if (null != stateFromStores) {
      const obj2 = FramesActionCreatorsDefault;
      obj2.updateFramePanelMode(tmp, ActivityPanelModes.PANEL);
    } else {
      const obj = EmbeddedActivitiesActionCreatorsAll;
      const result = obj.updateActivityPanelMode(ActivityPanelModes.PANEL);
    }
  }, items4);
  const items5 = [onAccessibilityAction];
  const memo1 = obj.useMemo(() => {
    let intl;
    let items;
    const obj = { accessible: true, accessibilityLabel: intl.string(intl2.t["3ejJer"]), accessibilityActions: items, onAccessibilityAction };
    intl = intl2.intl;
    items = [{ name: "activate" }];
    return obj;
  }, items5);
  if (pushToTalk) {
    pushToTalk = pIPState.mode !== tmp10.IN_PANEL || tmp25;
  }
  const items6 = [closure_37, pIPState];
  c0 = undefined;
  [tmp27, tmp28] = items6;
  const tmp5Result4 = setMode(1652);
  class VoicePanelPIPTsx17 {
    constructor() {
      let height;
      let scale;
      const obj = { height: height * scale.get() };
      ({ scale, height } = c0);
      return obj;
    }
  }
  const items7 = [tmp28];
  VoicePanelPIPTsx17.__closure = items7;
  VoicePanelPIPTsx17.__workletHash = 3624002128847;
  VoicePanelPIPTsx17.__initData = tmp27;
  const animatedStyle1 = tmp5Result4.useAnimatedStyle(VoicePanelPIPTsx17);
  const tmp30 = usePIPLayoutTransition(gestureState);
  const obj6 = { pointerEvents: "box-none", style: items8, layout: tmp30, children: items14 };
  items8 = [tmp.container, containerStyles];
  const View = tmp2(1652).View;
  const obj7 = { gesture: containerGesture, children: closure_16(View2, obj8) };
  const GestureDetector = tmp5(5452).GestureDetector;
  let tmp32Result = null;
  obj8 = { pointerEvents: "box-none", style: tmp.multiPipContainer, layout: tmp30, children: items11 };
  View2 = tmp2(1652).View;
  if (null != mode || !pIPPanelLayoutCommitted) {
    const obj9 = { style: items9, pointerEvents: "box-none", layout: tmp30, children: closure_15(GestureDetector2, obj10) };
    items9 = [, , , ];
    ({ pipContentWrapper: arr10[0], inAppElevationShadow: arr10[1] } = tmp);
    items9[2] = pipWrapperStyles;
    items9[3] = mainPIPVisibilityStyles;
    const View3 = tmp2(1652).View;
    const merged = Object.assign(memo);
    obj10 = { gesture: mainPIPGesture, children: closure_15(View4, obj11) };
    GestureDetector2 = tmp5(5452).GestureDetector;
    obj11 = { style: items10, layout: tmp30, children: closure_15(stateFromStores(19719), obj12) };
    items10 = [tmp.pipMask, animatedStyle];
    View4 = tmp2(1652).View;
    obj12 = { layoutTransition: tmp30 };
    tmp32Result = tmp32(View3, obj9);
  }
  items11 = [tmp32Result, ];
  let tmp32Result3 = null;
  if (pIPState.showSecondaryPIP) {
    const obj13 = { style: items12, children: closure_15(View6, obj14) };
    items12 = [, , ];
    ({ pipContentWrapper: arr13[0], inAppElevationShadow: arr13[1] } = tmp);
    items12[2] = pipWrapperStyles;
    const View5 = tmp2(1652).View;
    const merged1 = Object.assign(memo1);
    obj14 = { style: items13, children: closure_15(GestureDetector3, obj15) };
    items13 = [tmp.pipMask, animatedStyle];
    View6 = tmp2(1652).View;
    obj15 = { gesture: secondaryPIPGesture, children: closure_15(tmp2Result, obj16) };
    GestureDetector3 = tmp5(5452).GestureDetector;
    obj16 = { style: StyleSheet.absoluteFill, children: closure_15(stateFromStores(19723), {}) };
    tmp2Result = stateFromStores(7056);
    tmp32Result3 = tmp32(View5, obj13);
  }
  items11[1] = tmp32Result3;
  items14 = [closure_15(GestureDetector, obj7), ];
  let tmp32Result4 = null;
  if (tmp13) {
    tmp32Result4 = null;
    if (pushToTalk) {
      const obj17 = { pointerEvents: "box-none", style: items15, layout: tmp30, children: closure_15(stateFromStores(19724), {}) };
      items15 = [tmp.pushToTalkContainer, animatedStyle1];
      const View7 = tmp2(1652).View;
      tmp32Result4 = tmp32(View7, obj17);
    }
  }
  items14[1] = tmp32Result4;
  return closure_16(View, obj6);
}
function renderPIPWrapper(arg0, arg1, transitionState, transitionCleanUp) {
  const obj = { transitionState, transitionCleanUp };
  return closure_15(closure_39, obj, arg0);
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
const styles = createStyles(obj);
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
let closure_31 = { code: "(function VoicePanelPIPTsx13(){let[onMainTileTap,scheduleOnRN,pipMode,VoicePanelPIPModes,setMode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,showControls,hideControls]=this.__closure;if(onMainTileTap!=null){scheduleOnRN(onMainTileTap);}else if(pipMode===VoicePanelPIPModes.IN_APP){scheduleOnRN(setMode,VoicePanelModes.PANEL);}else{if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){scheduleOnRN(showControls);}else{scheduleOnRN(hideControls);}}})" };
let closure_32 = { code: "(function VoicePanelPIPTsx14(){let[scheduleOnRN,handleSecondaryPIPTap]=this.__closure;scheduleOnRN(handleSecondaryPIPTap);})" };
let closure_34 = { code: "(function VoicePanelPIPTsx15(values){let[gestureState,withSpring,PIP_LAYOUT_PHYSICS]=this.__closure;const active=gestureState.get().active;return{animations:{originX:withSpring(values.targetOriginX,PIP_LAYOUT_PHYSICS),originY:withSpring(values.targetOriginY,PIP_LAYOUT_PHYSICS),width:active?values.targetWidth:withSpring(values.targetWidth,PIP_LAYOUT_PHYSICS),height:active?values.targetHeight:withSpring(values.targetHeight,PIP_LAYOUT_PHYSICS)},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};})" };
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
  tmp3 = mode !== VoicePanelPIPModes.IN_APP;
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
  const pipHandoff = react.useContext(transitionCleanUp(11394)).pipHandoff;
  const obj = transitionState(19610);
  const mode = obj.usePIPState().mode;
  const obj2 = transitionState(11403);
  const pIPCardsSettled = obj2.usePIPCardsSettled(pipHandoff);
  const obj3 = transitionState(11403);
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
export { usePIPTileHandoff };
export { usePIPGesture };
export { usePIPLayoutTransition };
export const useVoicePanelPIPStyles = styles;
