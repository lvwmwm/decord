// Module ID: 19647
// Function ID: 19648
// Name: VoicePanelDockPTTButton
// Dependencies: [19, 17, 5019, 2130, 11413, 21, 575, 5170, 11394, 1652, 19643, 504, 12168, 7631, 12201, 5402, 5793, 5408, 11383, 19648, 7235, 5452, 1705, 19649, 8131, 1113, 12171, 5362, 19650, 2]

// Module 19647 (VoicePanelDockPTTButton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _mod1705 from "module_1705" /* 1705 */;
import timing_timing from "timing/timing" /* 5402 */;
import HapticUtils from "HapticUtils" /* 5408 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5452 */;
import spring_spring from "spring/spring" /* 5793 */;
import MediaEngineActionCreators from "MediaEngineActionCreators" /* 11383 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import MediaEngineStore from "MediaEngineStore" /* 2130 */;
import VoicePanelDockConstants from "VoicePanelDockConstants" /* 11413 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

let activateResult, first, num, num2, point2, result2, set, set2, set3, tmp3, tmp7;

let DOCK_ROW_HEIGHT;
let DOCK_TILE_SIZE;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let tmp5;
let tmp6;
const View = react_native.View;
({ DOCK_ROW_HEIGHT, DOCK_TILE_SIZE } = VoicePanelDockConstants);
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = { mass: 0.4, damping: 18, stiffness: 300 };
let items = [{ code: "(function getDockPTTIndicatorDrag_VoicePanelDockPTTButtonTsx1(dx,dy){let[DOCK_PTT_INDICATOR_MAX_DRAG_DISTANCE]=this.__closure;const distance=Math.hypot(dx,dy);if(distance===0){return{x:0,y:0};}const limited=DOCK_PTT_INDICATOR_MAX_DRAG_DISTANCE*(1-Math.exp(-distance/DOCK_PTT_INDICATOR_MAX_DRAG_DISTANCE));return{x:dx/distance*limited,y:dy/distance*limited};})" }, ];
let result = (DOCK_ROW_HEIGHT - DOCK_TILE_SIZE) / 2;
items[1] = nativeDefault.space.PX_32;
let c0;
[tmp5, tmp6] = items;
function getDockPTTIndicatorDrag(sum, dy) {
  const hypotResult = Math.hypot(sum, dy);
  if (0 === hypotResult) {
    return { x: 0, y: 0 };
  } else {
    const _Math = Math;
    const result = c0 * (1 - Math.exp(-hypotResult / c0));
    const point = { x: sum / hypotResult * result, y: dy / hypotResult * result };
    return point;
  }
}
let items1 = [tmp6];
getDockPTTIndicatorDrag.__closure = items1;
getDockPTTIndicatorDrag.__workletHash = 14207531924828;
getDockPTTIndicatorDrag.__initData = tmp5;
const diff = result - 1;
let createStyles = createStyles_mod;
let obj = { ring: obj2, buttonShadow: obj3 };
obj2 = { padding: diff, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_NORMAL, borderRadius: nativeDefault.radii.md };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.modules.button.BORDER_RADIUS };
let closure_12 = createStyles(obj);
let closure_13 = { code: "(function VoicePanelDockPTTButtonTsx2(){let[scheduleOnRN,handleGestureStart]=this.__closure;scheduleOnRN(handleGestureStart);})" };
let closure_14 = { code: "(function VoicePanelDockPTTButtonTsx3(event){let[touchOrigin,dragX,dragY]=this.__closure;const touch=event.allTouches[0];if(touch==null||event.numberOfTouches>1)return;touchOrigin.set({x:touch.absoluteX,y:touch.absoluteY});dragX.set(0);dragY.set(0);})" };
let closure_15 = { code: "(function VoicePanelDockPTTButtonTsx4(event,manager){let[touchOrigin,getDockPTTIndicatorDrag,dragX,dragY,State]=this.__closure;const touch=event.allTouches[0];if(touch!=null){const origin=touchOrigin.get();const drag=getDockPTTIndicatorDrag(touch.absoluteX-origin.x,touch.absoluteY-origin.y);dragX.set(drag.x);dragY.set(drag.y);}if(event.state!==State.BEGAN)return;manager.activate();})" };
let closure_16 = { code: "(function VoicePanelDockPTTButtonTsx5(){let[scheduleOnRN,handleGestureEnd]=this.__closure;scheduleOnRN(handleGestureEnd);})" };
const memoResult = react.memo(function VoicePanelDockPTTButton(measureGlowOffset) {
  let GestureDetector;
  let IconButton;
  let accessibilityProps;
  let endGesture;
  let intl;
  let items6;
  let items7;
  let mute;
  let obj10;
  let obj11;
  let obj9;
  let onPress;
  let startGesture;
  let tmp2Result;
  let useReducedMotion;
  let dockPTTMeasureHostRef;
  let sharedValue;
  let sharedValue2;
  let sharedValue3;
  let sharedValue4;
  let callback;
  let isScreenReaderEnabled;
  closure_13 = undefined;
  closure_14 = undefined;
  measureGlowOffset = measureGlowOffset.measureGlowOffset;
  const tmp = isScreenReaderEnabled();
  let obj = sharedValue;
  let tmp2 = useReducedMotion;
  const context = sharedValue.useContext(useReducedMotion(dockPTTMeasureHostRef[8]));
  const channelId = context.channelId;
  useReducedMotion = context.useReducedMotion;
  dockPTTMeasureHostRef = context.dockPTTMeasureHostRef;
  const tmp5 = channelId;
  const dockPTTPortalHostName = context.dockPTTPortalHostName;
  let obj2 = channelId(dockPTTMeasureHostRef[9]);
  sharedValue = obj2.useSharedValue(0);
  const obj3 = channelId(dockPTTMeasureHostRef[9]);
  const sharedValue1 = obj3.useSharedValue(null);
  let tmp8 = useReducedMotion(dockPTTMeasureHostRef[10]);
  const tmp8Result = tmp8(channelId(dockPTTMeasureHostRef[6]).Shadow.SHADOW_MEDIUM);
  let ref = sharedValue.useRef(null);
  let items = [ref];
  let items1 = [channelId];
  const obj4 = channelId(dockPTTMeasureHostRef[11]);
  const stateFromStores = obj4.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const obj5 = channelId(dockPTTMeasureHostRef[12]);
  ({ mute, onPress } = obj5.createMuteHandler(useReducedMotion(dockPTTMeasureHostRef[13])(stateFromStores)));
  obj5.createMuteHandler(useReducedMotion(dockPTTMeasureHostRef[13])(stateFromStores));
  const obj6 = channelId(dockPTTMeasureHostRef[12]);
  const deafHandler = obj6.createDeafHandler(useReducedMotion(dockPTTMeasureHostRef[14])(stateFromStores));
  let onPress2 = deafHandler.onPress;
  if (!deafHandler.deaf) {
    let tmp14;
    if (mute) {
      tmp14 = onPress;
    }
    onPress2 = tmp14;
  }
  ref = obj.useRef(false);
  const tmp5Result = tmp5(dockPTTMeasureHostRef[9]);
  sharedValue2 = tmp5Result.useSharedValue({ x: 0, y: 0 });
  const tmp5Result3 = tmp5(dockPTTMeasureHostRef[9]);
  sharedValue3 = tmp5Result3.useSharedValue(0);
  const tmp5Result4 = tmp5(dockPTTMeasureHostRef[9]);
  sharedValue4 = tmp5Result4.useSharedValue(0);
  let items2 = [sharedValue, sharedValue3, sharedValue4, useReducedMotion];
  callback = obj.useCallback((c9) => {
    let withTimingResult;
    set = sharedValue.set;
    if (useReducedMotion.get()) {
      const tmp2Result = timing_timing;
      withTimingResult = tmp2Result.withTiming(c9, { duration: 150 });
    } else {
      const tmp2Result2 = spring_spring;
      withTimingResult = tmp2Result2.withSpring(c9, closure_10);
    }
    const result = set(withTimingResult);
    if (0 === c9) {
      let withTimingResult1;
      let withTimingResult2;
      set3 = sharedValue3.set;
      if (useReducedMotion.get()) {
        const tmp17Result = timing_timing;
        withTimingResult1 = tmp17Result.withTiming(0, { duration: 150 });
      } else {
        const tmp17Result2 = spring_spring;
        withTimingResult1 = tmp17Result2.withSpring(0, closure_10);
      }
      set3(withTimingResult1);
      set2 = sharedValue4.set;
      if (useReducedMotion.get()) {
        const tmp11Result = timing_timing;
        withTimingResult2 = tmp11Result.withTiming(0, { duration: 150 });
      } else {
        const tmp11Result2 = spring_spring;
        withTimingResult2 = tmp11Result2.withSpring(0, closure_10);
      }
      set2(withTimingResult2);
    }
  }, items2);
  let items3 = [onPress2, dockPTTMeasureHostRef, sharedValue1, callback];
  let items4 = [callback];
  const callback1 = obj.useCallback(() => {
    const current = ref.current;
    if (!current) {
      if (null != current) {
        tmp.current = true;
        if (onPress2 != null) {
          tmp11();
        }
        const obj = HapticUtils;
        let result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
        const obj2 = MediaEngineActionCreators;
        obj2.setPushToTalkState(MediaEngineStore.getMediaEngine(), true);
        const current2 = dockPTTMeasureHostRef.current;
        if (null != current2) {
          current.measureLayout(current2, (x, y, width, height) => {
            if (ref.current) {
              size = { x, y, width, height };
              const result = sharedValue1.set(size);
              callback(1);
            }
          });
        }
      }
    }
  }, items3);
  const callback2 = obj.useCallback(() => {
    if (ref.current) {
      tmp.current = false;
      const obj = MediaEngineActionCreators;
      obj.setPushToTalkState(MediaEngineStore.getMediaEngine(), false);
      callback(0);
    }
  }, items4);
  const tmp21 = tmp2(dockPTTMeasureHostRef[19])(channelId, callback1, callback2);
  isScreenReaderEnabled = tmp21.isScreenReaderEnabled;
  ({ accessibilityProps, startGesture, endGesture } = tmp21);
  const tmp22 = tmp2(tmp3[20])(startGesture);
  closure_13 = tmp22;
  const tmp23 = tmp2(tmp3[20])(endGesture);
  closure_14 = tmp23;
  let items5 = [isScreenReaderEnabled, tmp22, tmp23, sharedValue2, sharedValue3, sharedValue4];
  const obj7 = { children: items7 };
  const obj8 = { style: tmp.ring, children: ref(tmp2Result, obj9) };
  const memo = obj.useMemo(() => {
    let tmp10;
    let tmp11;
    let tmp12;
    let tmp13;
    let tmp15;
    let tmp16;
    let tmp17;
    let tmp18;
    let tmp19;
    let tmp20;
    let tmp22;
    let tmp23;
    let tmp24;
    let tmp4;
    let tmp5;
    let tmp6;
    let tmp2 = dependencyMap;
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const enabledResult = PanResult.enabled(!isScreenReaderEnabled);
    const manualActivationResult = enabledResult.manualActivation(true);
    let result = manualActivationResult.shouldCancelWhenOutside(false);
    const items = [closure_13, , ];
    const onBegin = result.onBegin;
    items[1] = _mod1705.scheduleOnRN;
    items[2] = closure_13;
    let c0;
    let c1;
    [tmp4, tmp5, tmp6] = items;
    class VoicePanelDockPTTButtonTsx2 {
      constructor() {
        tmp = closure_0(closure_1);
        return;
      }
    }
    const items1 = [tmp5, tmp6];
    VoicePanelDockPTTButtonTsx2.__closure = items1;
    VoicePanelDockPTTButtonTsx2.__workletHash = 7241275246329;
    VoicePanelDockPTTButtonTsx2.__initData = tmp4;
    const items2 = [closure_14, sharedValue2, sharedValue3, sharedValue4];
    c0 = undefined;
    c1 = undefined;
    let c2;
    [tmp10, tmp11, tmp12, tmp13] = items2;
    const onBeginResult = onBegin(VoicePanelDockPTTButtonTsx2);
    class VoicePanelDockPTTButtonTsx3 {
      constructor(arg0) {
        first = arg0.allTouches[0];
        tmp2 = null == first;
        if (!tmp2) {
          num = 1;
          tmp2 = arg0.numberOfTouches > 1;
        }
        if (!tmp2) {
          tmp3 = closure_0;
          point = { x: null, y: null };
          ({ absoluteX: obj.x, absoluteY: obj.y } = first);
          result = closure_0.set(point);
          tmp5 = closure_1;
          num2 = 0;
          result1 = closure_1.set(0);
          tmp7 = closure_2;
          result2 = closure_2.set(0);
        }
        return;
      }
    }
    const items3 = [tmp11, tmp12, tmp13];
    VoicePanelDockPTTButtonTsx3.__closure = items3;
    VoicePanelDockPTTButtonTsx3.__workletHash = 2699216124171;
    VoicePanelDockPTTButtonTsx3.__initData = tmp10;
    const items4 = [closure_15, sharedValue2, getDockPTTIndicatorDrag, sharedValue3, sharedValue4, ];
    const onTouchesMove = onBeginResult.onTouchesDown(VoicePanelDockPTTButtonTsx3).onTouchesMove;
    onBeginResult.onTouchesDown(VoicePanelDockPTTButtonTsx3);
    items4[5] = LegacyBaseButton.State;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    let c3;
    let c4;
    [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items4;
    class VoicePanelDockPTTButtonTsx4 {
      constructor(arg0, arg1) {
        first = arg0.allTouches[0];
        if (null != first) {
          tmp2 = closure_0;
          point = closure_0.get();
          tmp3 = closure_1;
          point2 = closure_1(first.absoluteX - point.x, first.absoluteY - point.y);
          tmp4 = closure_2;
          result = closure_2.set(point2.x);
          tmp6 = closure_3;
          result1 = closure_3.set(point2.y);
        }
        if (arg0.state === closure_4.BEGAN) {
          tmp8 = arg1;
          activateResult = arg1.activate();
        }
        return;
      }
    }
    const items5 = [tmp16, tmp17, tmp18, tmp19, tmp20];
    VoicePanelDockPTTButtonTsx4.__closure = items5;
    VoicePanelDockPTTButtonTsx4.__workletHash = 2024555727413;
    VoicePanelDockPTTButtonTsx4.__initData = tmp15;
    const items6 = [closure_16, , ];
    const onFinalize = onTouchesMove(VoicePanelDockPTTButtonTsx4).onFinalize;
    onTouchesMove(VoicePanelDockPTTButtonTsx4);
    items6[1] = _mod1705.scheduleOnRN;
    items6[2] = closure_14;
    c0 = undefined;
    c1 = undefined;
    [tmp22, tmp23, tmp24] = items6;
    class VoicePanelDockPTTButtonTsx5 {
      constructor() {
        tmp = closure_0(closure_1);
        return;
      }
    }
    const items7 = [tmp23, tmp24];
    VoicePanelDockPTTButtonTsx5.__closure = items7;
    VoicePanelDockPTTButtonTsx5.__workletHash = 11336528841662;
    VoicePanelDockPTTButtonTsx5.__initData = tmp22;
    return onFinalize(VoicePanelDockPTTButtonTsx5);
  }, items5);
  obj9 = { measureGlowOffset, style: items6, children: ref(GestureDetector, obj10) };
  items6 = [tmp.buttonShadow, { boxShadow: tmp8Result }];
  tmp2Result = tmp2(tmp3[23]);
  obj10 = { gesture: memo, children: ref(IconButton, obj11) };
  GestureDetector = tmp5(tmp3[21]).GestureDetector;
  obj11 = { ref, accessibilityLabel: intl.string(tmp5(dockPTTMeasureHostRef[25]).t.Q8gkVL), variant: "secondary", size: "sm", icon: tmp2(dockPTTMeasureHostRef[26]) };
  IconButton = tmp5(tmp3[24]).IconButton;
  intl = tmp5(tmp3[25]).intl;
  const merged = Object.assign(accessibilityProps);
  items7 = [ref(sharedValue1, obj8), ];
  const obj12 = { hostName: dockPTTPortalHostName, children: ref(tmp2(dockPTTMeasureHostRef[28]), { progress: sharedValue, anchor: sharedValue1, dragX: sharedValue3, dragY: sharedValue4 }) };
  const Portal = tmp5(tmp3[27]).Portal;
  items7[1] = ref(Portal, obj12);
  return sharedValue3(sharedValue2, obj7);
});
let size = size_mod;
let result1 = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockPTTButton.tsx");

export default memoResult;
