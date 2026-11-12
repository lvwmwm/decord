// Module ID: 19724
// Function ID: 19725
// Name: VoicePanelPIPPushToTalkOverlay
// Dependencies: [32, 19, 17, 2130, 11395, 21, 1652, 7056, 1187, 5170, 575, 11383, 19613, 5793, 19523, 5452, 1705, 19725, 2]
// Exports: default

// Module 19724 (VoicePanelPIPPushToTalkOverlay)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import spring_spring from "spring/spring" /* 5793 */;
import NativeViewDefault from "NativeView" /* 7056 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11395 */;
import VoicePanelPIPStateContext from "VoicePanelPIPStateContext" /* 19613 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 2130 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

const module_1652_mod = _mod1652;
let flag, importDefault, tmp2, tmp3;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let size;
let tmp;
let tmp9;
const LegacyBaseButton = tmp(5452);
const VoicePanelPIPUtils = tmp(19523);
const AssetRegistryDefault = tmp9(19725);
const StyleSheet = react_native.StyleSheet;
const PUSH_TO_TALK_PIP_PHYSICS = VoicePanelConstants.PUSH_TO_TALK_PIP_PHYSICS;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let module_1652 = module_1652_mod;
const NativeView = module_1652.createAnimatedComponent(NativeViewDefault);
module_1652 = module_1652_mod;
let closure_11 = module_1652.createAnimatedComponent(native.Icon);
const hitSlop = { top: 6, bottom: 6, left: 6, right: 6 };
let createStyles = createStyles_mod;
let obj = { iconContainer: size, overlay: obj2 };
size = { position: "absolute", width: 32, height: 32, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.colors.BLACK };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_13 = createStyles(obj);
let closure_14 = { code: "(function VoicePanelPIPPushToTalkOverlayTsx1(){let[isPushingToTalk,EXPANDED_ICON_SIZE,BASE_ICON_SIZE,withSpring,PUSH_TO_TALK_PIP_PHYSICS,white]=this.__closure;const padding=isPushingToTalk.get()?8*EXPANDED_ICON_SIZE/BASE_ICON_SIZE+8:8;return{right:withSpring(padding,PUSH_TO_TALK_PIP_PHYSICS),bottom:withSpring(padding,PUSH_TO_TALK_PIP_PHYSICS),transform:[{scale:withSpring(isPushingToTalk.get()?EXPANDED_ICON_SIZE/BASE_ICON_SIZE:1,PUSH_TO_TALK_PIP_PHYSICS)}],backgroundColor:withSpring(isPushingToTalk.get()?white:'rgba(0, 0, 0, 0.54)',PUSH_TO_TALK_PIP_PHYSICS)};})" };
let closure_15 = { code: "(function VoicePanelPIPPushToTalkOverlayTsx2(){let[withSpring,isPushingToTalk,black,white,PUSH_TO_TALK_PIP_PHYSICS]=this.__closure;return{tintColor:withSpring(isPushingToTalk.get()?black:white,PUSH_TO_TALK_PIP_PHYSICS)};})" };
let closure_16 = { code: "(function VoicePanelPIPPushToTalkOverlayTsx3(){let[withSpring,isPushingToTalk,PUSH_TO_TALK_PIP_PHYSICS,getVoicePanelPIPBorderRadius,pipState]=this.__closure;return{opacity:withSpring(isPushingToTalk.get()?0.5:0,PUSH_TO_TALK_PIP_PHYSICS),borderRadius:getVoicePanelPIPBorderRadius(pipState.width,pipState.height)};})" };
let closure_17 = { code: "(function VoicePanelPIPPushToTalkOverlayTsx4(event,success){let[scheduleOnRN,handlePushToTalk]=this.__closure;if(!success){return;}scheduleOnRN(handlePushToTalk,false);})" };
let closure_18 = { code: "(function VoicePanelPIPPushToTalkOverlayTsx5(){let[scheduleOnRN,handlePushToTalk]=this.__closure;scheduleOnRN(handlePushToTalk,true);})" };
let closure_19 = { code: "(function VoicePanelPIPPushToTalkOverlayTsx6(){let[scheduleOnRN,handlePushToTalk]=this.__closure;scheduleOnRN(handlePushToTalk,false);})" };
size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPPushToTalkOverlay.tsx");

export default function VoicePanelPIPPushToTalkOverlay() {
  let closure_0;
  let items10;
  let items11;
  let items9;
  let mediaEngine;
  let obj7;
  let obj8;
  let require;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp7;
  let tmp8;
  let tmp = require;
  let obj = VoicePanelPIPStateContext;
  const pIPState = obj.usePIPState();
  const tmp4 = closure_13();
  const obj2 = _mod1652;
  const sharedValue = obj2.useSharedValue(false);
  importDefault = react.useRef(false);
  let items = [sharedValue];
  let items1 = [
    sharedValue,
    react.useCallback((current) => {
      if (current !== ref.current) {
        ref.current = current;
        const obj = sharedValue(dependencyMap[11]);
        obj.setPushToTalkState(mediaEngine.getMediaEngine(), current);
        const result = sharedValue.set(current);
      }
    }, items)
  ];
  const tmp6 = _slicedToArray(items1, 2);
  [tmp7, tmp8] = tmp6;
  require = tmp8;
  const WHITE = nativeDefault.unsafe_rawColors.WHITE;
  const BLACK = nativeDefault.unsafe_rawColors.BLACK;
  const tmp10 = _mod1652;
  let items2 = [closure_14, tmp7, 48, 32, , , ];
  const useAnimatedStyle = tmp10.useAnimatedStyle;
  items2[4] = spring_spring.withSpring;
  const tmp11 = PUSH_TO_TALK_PIP_PHYSICS;
  items2[5] = PUSH_TO_TALK_PIP_PHYSICS;
  items2[6] = WHITE;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items2;
  const obj3 = react;
  class VoicePanelPIPPushToTalkOverlayTsx1 {
    constructor() {
      let items;
      let str;
      let num = 8;
      if (_undefined.get()) {
        num = 8 * c1 / c2 + 8;
      }
      const rect = { right: _undefined2(num, c4), bottom: _undefined2(num, c4), transform: items, backgroundColor: _undefined2(str, c4) };
      let num2 = 1;
      if (_undefined.get()) {
        num2 = c1 / c2;
      }
      items = [{ scale: _undefined2(num2, c4) }];
      str = "rgba(0, 0, 0, 0.54)";
      ({ scale: _undefined2(num2, c4) });
      if (_undefined.get()) {
        str = c5;
      }
      return rect;
    }
  }
  let items3 = [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18];
  VoicePanelPIPPushToTalkOverlayTsx1.__closure = items3;
  VoicePanelPIPPushToTalkOverlayTsx1.__workletHash = 2861747547438;
  VoicePanelPIPPushToTalkOverlayTsx1.__initData = tmp12;
  const animatedStyle = useAnimatedStyle(VoicePanelPIPPushToTalkOverlayTsx1);
  let items4 = [closure_15, , , , , ];
  const useAnimatedStyle2 = _mod1652.useAnimatedStyle;
  _mod1652;
  items4[1] = spring_spring.withSpring;
  items4[2] = tmp7;
  items4[3] = BLACK;
  items4[4] = WHITE;
  items4[5] = tmp11;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26] = items4;
  class VoicePanelPIPPushToTalkOverlayTsx2 {
    constructor() {
      const obj = { tintColor: _undefined(_undefined.get() ? c2 : c3, c4) };
      return obj;
    }
  }
  let items5 = [tmp22, tmp23, tmp24, tmp25, tmp26];
  VoicePanelPIPPushToTalkOverlayTsx2.__closure = items5;
  VoicePanelPIPPushToTalkOverlayTsx2.__workletHash = 7041857478120;
  VoicePanelPIPPushToTalkOverlayTsx2.__initData = tmp21;
  const animatedStyle2 = useAnimatedStyle2(VoicePanelPIPPushToTalkOverlayTsx2);
  const items6 = [closure_16, , , , , ];
  const useAnimatedStyle3 = _mod1652.useAnimatedStyle;
  _mod1652;
  items6[1] = spring_spring.withSpring;
  items6[2] = tmp7;
  items6[3] = tmp11;
  items6[4] = VoicePanelPIPUtils.getVoicePanelPIPBorderRadius;
  items6[5] = pIPState;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp29, tmp30, tmp31, tmp32, tmp33, tmp34] = items6;
  class VoicePanelPIPPushToTalkOverlayTsx3 {
    constructor() {
      let num = 0;
      const tmp = c0;
      if (_undefined.get()) {
        num = 0.5;
      }
      const obj = { opacity: tmp(num, c2), borderRadius: _undefined2(_undefined3.width, _undefined3.height) };
      return obj;
    }
  }
  const items7 = [tmp30, tmp31, tmp32, tmp33, tmp34];
  VoicePanelPIPPushToTalkOverlayTsx3.__closure = items7;
  VoicePanelPIPPushToTalkOverlayTsx3.__workletHash = 1560933977;
  VoicePanelPIPPushToTalkOverlayTsx3.__initData = tmp29;
  const items8 = [tmp8];
  const animatedStyle3 = useAnimatedStyle3(VoicePanelPIPPushToTalkOverlayTsx3);
  const obj5 = { pointerEvents: "none", style: items9 };
  items9 = [tmp4.overlay, animatedStyle3];
  const obj4 = { children: items10 };
  const memo = obj3.useMemo(() => {
    let tmp10;
    let tmp11;
    let tmp12;
    let tmp14;
    let tmp15;
    let tmp16;
    let tmp5;
    let tmp6;
    let tmp7;
    let tmp = require;
    const Gesture = LegacyBaseButton.Gesture;
    const Exclusive = Gesture.Exclusive;
    const Gesture2 = LegacyBaseButton.Gesture;
    const TapResult = Gesture2.Tap();
    const items = [closure_17, , ];
    const onEnd = TapResult.maxDistance(30).onEnd;
    TapResult.maxDistance(30);
    items[1] = _mod1705.scheduleOnRN;
    items[2] = tmp8;
    let c0;
    let c1;
    [tmp5, tmp6, tmp7] = items;
    class VoicePanelPIPPushToTalkOverlayTsx4 {
      constructor(arg0, arg1) {
        tmp = arg1;
        if (tmp) {
          tmp2 = closure_0;
          tmp3 = closure_1;
          flag = false;
          tmp4 = closure_0(closure_1, false);
        }
        return;
      }
    }
    const items1 = [tmp6, tmp7];
    VoicePanelPIPPushToTalkOverlayTsx4.__closure = items1;
    VoicePanelPIPPushToTalkOverlayTsx4.__workletHash = 8199148800599;
    VoicePanelPIPPushToTalkOverlayTsx4.__initData = tmp5;
    const onEndResult = onEnd(VoicePanelPIPPushToTalkOverlayTsx4);
    const Gesture3 = LegacyBaseButton.Gesture;
    const PanResult = Gesture3.Pan();
    const maxPointersResult = PanResult.maxPointers(1);
    const result = maxPointersResult.shouldCancelWhenOutside(false);
    const items2 = [closure_18, , ];
    const onBegin = result.onBegin;
    items2[1] = _mod1705.scheduleOnRN;
    items2[2] = tmp8;
    c0 = undefined;
    c1 = undefined;
    [tmp10, tmp11, tmp12] = items2;
    class VoicePanelPIPPushToTalkOverlayTsx5 {
      constructor() {
        tmp = closure_0(closure_1, true);
        return;
      }
    }
    const items3 = [tmp11, tmp12];
    VoicePanelPIPPushToTalkOverlayTsx5.__closure = items3;
    VoicePanelPIPPushToTalkOverlayTsx5.__workletHash = 1980257520389;
    VoicePanelPIPPushToTalkOverlayTsx5.__initData = tmp10;
    const items4 = [closure_19, , ];
    const onFinalize = onBegin(VoicePanelPIPPushToTalkOverlayTsx5).onFinalize;
    onBegin(VoicePanelPIPPushToTalkOverlayTsx5);
    items4[1] = _mod1705.scheduleOnRN;
    items4[2] = tmp8;
    c0 = undefined;
    c1 = undefined;
    [tmp14, tmp15, tmp16] = items4;
    class VoicePanelPIPPushToTalkOverlayTsx6 {
      constructor() {
        tmp = closure_0(closure_1, false);
        return;
      }
    }
    const items5 = [tmp15, tmp16];
    VoicePanelPIPPushToTalkOverlayTsx6.__closure = items5;
    VoicePanelPIPPushToTalkOverlayTsx6.__workletHash = 12119923250285;
    VoicePanelPIPPushToTalkOverlayTsx6.__initData = tmp14;
    return Exclusive(onEndResult, onFinalize(VoicePanelPIPPushToTalkOverlayTsx6));
  }, items8);
  items10 = [closure_7(NativeView, obj5), ];
  const obj6 = { gesture: memo, children: closure_7(NativeView, obj7) };
  obj7 = { style: items11, hitSlop, children: closure_7(closure_11, obj8) };
  items11 = [tmp4.iconContainer, animatedStyle];
  obj8 = { style: animatedStyle2, size: native.Icon.Sizes.SMALL_20, source: AssetRegistryDefault, disableColor: true };
  const GestureDetector = LegacyBaseButton.GestureDetector;
  items10[1] = closure_7(GestureDetector, obj6);
  return closure_9(closure_8, obj4);
};
