// Module ID: 14433
// Function ID: 14434
// Name: VoiceMessageOverlay
// Dependencies: [32, 19, 17, 5142, 4990, 13942, 13943, 1072, 13027, 21, 1652, 1187, 5761, 12, 8171, 5141, 575, 6913, 504, 5732, 7100, 1113, 5378, 1705, 8781, 11323, 14434, 5743, 14188, 5398, 6156, 1108, 13522, 12034, 14036, 14435, 8168, 5873, 14031, 13023, 5863, 12168, 2]

// Module 14433 (VoiceMessageOverlay)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import intl7 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import _mod1652 from "module_1652" /* 1652 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5398 */;
import useToken from "useToken" /* 5732 */;
import Text_Text from "Text/Text" /* 5761 */;
import LegacyTokens from "LegacyTokens" /* 6913 */;
import useRefValueDefault from "useRefValue" /* 7100 */;
import inlineStyles from "inlineStyles" /* 8171 */;
import ChatInputConstants from "ChatInputConstants" /* 13027 */;
import VoiceMessagesUIStore from "VoiceMessagesUIStore" /* 13942 */;
import VoiceMessageConstants from "VoiceMessageConstants" /* 13943 */;
import AssetRegistryDefault from "AssetRegistry" /* 14434 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import Fragment from "Fragment" /* 21 */;
import module_12 from "module_12" /* 12 */;
import createStyles from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const module_1652_mod = _mod1652;
let _require, dependencyMap, importDefault, set, set2, sum;

let closure_14;
let closure_15;
let hasOwnProperty;
let map1;
let metroRequire;
let tmp;
const react_native = tmp(6156);
function useDerivedColors(voiceMessageAnimationState, token, RED_400, token2, token3) {
  let _undefined;
  let _undefined2;
  let _undefined3;
  let c2;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp = _require;
  items = [closure_27, voiceMessageAnimationState, , ];
  const useDerivedValue = require("module_1652").useDerivedValue;
  const tmp3 = require("module_1652");
  items[2] = require("timing/timing").withTiming;
  items[3] = require("module_1652").Easing;
  _require = undefined;
  let c1;
  dependencyMap = undefined;
  [tmp4, tmp5, tmp6, tmp7] = items;
  class VoiceMessageOverlayTsx6 {
    constructor() {
      obj = { easing: closure_2.linear, duration: 150 };
      return closure_1(closure_0.get()[1], obj);
    }
  }
  let items1 = [tmp5, tmp6, tmp7];
  VoiceMessageOverlayTsx6.__closure = items1;
  VoiceMessageOverlayTsx6.__workletHash = 1937850946684;
  VoiceMessageOverlayTsx6.__initData = tmp4;
  const derivedValue = useDerivedValue(VoiceMessageOverlayTsx6);
  const items2 = [closure_28, voiceMessageAnimationState, token, token2, token3, RED_400, , , ];
  const useDerivedValue2 = tmp(1652).useDerivedValue;
  tmp(1652);
  items2[6] = tmp(1652).interpolateColor;
  items2[7] = derivedValue;
  items2[8] = items;
  _require = undefined;
  c1 = undefined;
  dependencyMap = undefined;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items2;
  class VoiceMessageOverlayTsx7 {
    constructor() {
      tmp = closure_3(closure_0.get(), 2);
      if (tmp[0] + tmp[1] === 2) {
        tmp6 = closure_1;
        items = [, , , ];
        items[0] = closure_1;
        items[1] = closure_1;
        tmp7 = closure_2;
        items[2] = closure_2;
        tmp8 = closure_3;
        items[3] = closure_3;
        items1 = items;
      } else {
        tmp2 = closure_1;
        items1 = [, , , ];
        items1[0] = closure_1;
        tmp3 = closure_4;
        items1[1] = closure_4;
        tmp4 = closure_2;
        items1[2] = closure_2;
        tmp5 = closure_3;
        items1[3] = closure_3;
      }
      return closure_5(closure_6.get(), closure_7, items1);
    }
  }
  const items3 = [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18];
  VoiceMessageOverlayTsx7.__closure = items3;
  VoiceMessageOverlayTsx7.__workletHash = 10731604101373;
  VoiceMessageOverlayTsx7.__initData = tmp10;
  return useDerivedValue2(VoiceMessageOverlayTsx7);
}
function LockPill(voiceMessageAnimationState) {
  let View2;
  let _undefined;
  let _undefined2;
  let _undefined3;
  let c3;
  let initialAnimation;
  let items18;
  let items19;
  let items20;
  let items21;
  let obj2;
  let safeAreaBottom;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp3;
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
  let tmp45;
  let tmp46;
  let tmp47;
  let tmp48;
  let tmp49;
  let tmp50;
  let tmp51;
  let tmp52;
  let tmp53;
  let tmp54;
  let tmp57;
  let tmp58;
  let tmp59;
  let tmp60;
  let tmp61;
  let tmp64;
  let tmp65;
  let tmp66;
  let tmp67;
  let tmp70;
  let tmp71;
  let tmp72;
  let tmp73;
  let tmp74;
  let tmp75;
  let tmp8;
  let tmp9;
  voiceMessageAnimationState = voiceMessageAnimationState.voiceMessageAnimationState;
  ({ safeAreaBottom, initialAnimation } = voiceMessageAnimationState);
  let tmp = closure_19();
  let tmp2 = _slicedToArray(react.useState(false), 2);
  [tmp3, tmp4] = tmp2;
  items = [closure_36, voiceMessageAnimationState, VoiceMessageAnimationState];
  const tmp7 = require("module_1652");
  _require = undefined;
  importDefault = undefined;
  [tmp8, tmp9, tmp10] = items;
  class VoiceMessageOverlayTsx14 {
    constructor() {
      obj = closure_0;
      tmp2 = closure_0.get()[1] === closure_1.LOCKED || obj.get()[1] === tmp.LOCKING;
      return tmp2;
    }
  }
  let items1 = [tmp9, tmp10];
  VoiceMessageOverlayTsx14.__closure = items1;
  VoiceMessageOverlayTsx14.__workletHash = 6639518721222;
  VoiceMessageOverlayTsx14.__initData = tmp8;
  let items2 = [closure_37, , ];
  const useAnimatedReaction = tmp7.useAnimatedReaction;
  items2[1] = require("module_1705").scheduleOnRN;
  items2[2] = tmp4;
  _require = undefined;
  importDefault = undefined;
  [tmp11, tmp12, tmp13] = items2;
  class VoiceMessageOverlayTsx15 {
    constructor(arg0, arg1) {
      if (voiceMessageAnimationState !== arg1) {
        tmp = closure_0;
        tmp2 = closure_1;
        tmp3 = closure_0(closure_1, voiceMessageAnimationState);
      }
      return;
    }
  }
  const items3 = [tmp12, tmp13];
  VoiceMessageOverlayTsx15.__closure = items3;
  VoiceMessageOverlayTsx15.__workletHash = 17511119327213;
  VoiceMessageOverlayTsx15.__initData = tmp11;
  const animatedReaction = useAnimatedReaction(VoiceMessageOverlayTsx14, VoiceMessageOverlayTsx15);
  const tmp5Result = require("useToken");
  const token = tmp5Result.useToken(nativeDefault.colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_BACKGROUND_DEFAULT);
  const tmp5Result12 = require("useToken");
  const token1 = tmp5Result12.useToken(nativeDefault.colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_BACKGROUND_ACTIVE);
  const tmp18 = useDerivedColors(voiceMessageAnimationState, token, token, token1, token1);
  const tmp5Result13 = require("useToken");
  const token2 = tmp5Result13.useToken(nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_LOCK_PILL_WIDTH);
  const tmp5Result14 = require("useToken");
  const token3 = tmp5Result14.useToken(nativeDefault.colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_ICON_DEFAULT);
  const tmp5Result15 = require("useToken");
  const token4 = tmp5Result15.useToken(nativeDefault.colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_ICON_ACTIVE);
  const items4 = [closure_30, voiceMessageAnimationState, , ];
  const tmp22 = useDerivedColors(voiceMessageAnimationState, token3, token3, token4, token4);
  const useDerivedValue = require("module_1652").useDerivedValue;
  require("module_1652");
  items4[2] = require("timing/timing").withTiming;
  items4[3] = require("module_1652").Easing;
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp24, tmp25, tmp26, tmp27] = items4;
  class VoiceMessageOverlayTsx8 {
    constructor() {
      obj = { easing: closure_2.linear, duration: 150 };
      return closure_1(closure_0.get()[1], obj);
    }
  }
  const items5 = [tmp25, tmp26, tmp27];
  VoiceMessageOverlayTsx8.__closure = items5;
  VoiceMessageOverlayTsx8.__workletHash = 13445838226418;
  VoiceMessageOverlayTsx8.__initData = tmp24;
  const derivedValue = useDerivedValue(VoiceMessageOverlayTsx8);
  const items6 = [closure_31, voiceMessageAnimationState, , , ];
  const useDerivedValue2 = require("module_1652").useDerivedValue;
  require("module_1652");
  items6[2] = require("module_1652").interpolate;
  items6[3] = derivedValue;
  items6[4] = items;
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  [tmp31, tmp32, tmp33, tmp34, tmp35] = items6;
  class VoiceMessageOverlayTsx9 {
    constructor() {
      tmp = closure_3(closure_0.get(), 2);
      tmp2 = tmp[0] + tmp[1] === 2 ? [1, 1, 1, 0] : [1, 0, 1, 0];
      return closure_1(closure_2.get(), closure_3, tmp2);
    }
  }
  const items7 = [tmp32, tmp33, tmp34, tmp35];
  VoiceMessageOverlayTsx9.__closure = items7;
  VoiceMessageOverlayTsx9.__workletHash = 13136470989075;
  VoiceMessageOverlayTsx9.__initData = tmp31;
  const derivedValue2 = useDerivedValue2(VoiceMessageOverlayTsx9);
  const items8 = [closure_32, , , , ];
  const useAnimatedStyle = require("module_1652").useAnimatedStyle;
  require("module_1652");
  items8[1] = require("module_1652").interpolate;
  items8[2] = derivedValue;
  items8[3] = items;
  items8[4] = 68;
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  [tmp38, tmp39, tmp40, tmp41, tmp42] = items8;
  class VoiceMessageOverlayTsx10 {
    constructor() {
      obj = { height: null };
      items = [, , , ];
      items[0] = closure_3;
      items[1] = closure_3;
      items[2] = 104;
      items[3] = 104;
      obj.height = closure_0(closure_1.get(), closure_2, items);
      return obj;
    }
  }
  const items9 = [tmp39, tmp40, tmp41, tmp42];
  VoiceMessageOverlayTsx10.__closure = items9;
  VoiceMessageOverlayTsx10.__workletHash = 2807894586864;
  VoiceMessageOverlayTsx10.__initData = tmp38;
  const animatedStyle = useAnimatedStyle(VoiceMessageOverlayTsx10);
  const items10 = [closure_33, , , , , , , , , ];
  const useAnimatedStyle2 = require("module_1652").useAnimatedStyle;
  require("module_1652");
  items10[1] = require("module_1652").interpolate;
  items10[2] = derivedValue;
  items10[3] = items;
  items10[4] = token2;
  items10[5] = 56;
  items10[6] = 68;
  items10[7] = derivedValue2;
  items10[8] = tmp18;
  items10[9] = -56 - token2 / 2;
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  [tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54] = items10;
  class VoiceMessageOverlayTsx11 {
    constructor() {
      size = { width: null, height: null, opacity: closure_6.get(), backgroundColor: closure_7.get(), marginHorizontal: null, marginBottom: closure_0(closure_1.get(), closure_2, [0, 0, 36, 36]) };
      items = [, , , ];
      items[0] = closure_3;
      items[1] = closure_3;
      items[2] = closure_4;
      items[3] = closure_4;
      size.width = closure_0(closure_1.get(), closure_2, items);
      items1 = [, , , ];
      items1[0] = closure_5;
      items1[1] = closure_5;
      items1[2] = closure_4;
      items1[3] = closure_4;
      size.height = closure_0(closure_1.get(), closure_2, items1);
      items2 = [0, 0];
      items2[2] = closure_8;
      items2[3] = closure_8;
      size.marginHorizontal = closure_0(closure_1.get(), closure_2, items2);
      return size;
    }
  }
  const items11 = [tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54];
  VoiceMessageOverlayTsx11.__closure = items11;
  VoiceMessageOverlayTsx11.__workletHash = 2634943908675;
  VoiceMessageOverlayTsx11.__initData = tmp45;
  const animatedStyle2 = useAnimatedStyle2(VoiceMessageOverlayTsx11);
  const items12 = [closure_34, , , , ];
  const useAnimatedStyle3 = require("module_1652").useAnimatedStyle;
  require("module_1652");
  items12[1] = require("module_1652").interpolate;
  items12[2] = derivedValue;
  items12[3] = items;
  items12[4] = tmp22;
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  [tmp57, tmp58, tmp59, tmp60, tmp61] = items12;
  class VoiceMessageOverlayTsx12 {
    constructor() {
      size = { width: closure_0(closure_1.get(), closure_2, [24, 24, 32, 32]), height: closure_0(closure_1.get(), closure_2, [24, 24, 32, 32]), marginTop: closure_0(closure_1.get(), closure_2, [12, 12, 10, 10]), tintColor: closure_3.get() };
      return size;
    }
  }
  const items13 = [tmp58, tmp59, tmp60, tmp61];
  VoiceMessageOverlayTsx12.__closure = items13;
  VoiceMessageOverlayTsx12.__workletHash = 9845319037974;
  VoiceMessageOverlayTsx12.__initData = tmp57;
  const animatedStyle3 = useAnimatedStyle3(VoiceMessageOverlayTsx12);
  const items14 = [closure_35, , , ];
  const useAnimatedStyle4 = require("module_1652").useAnimatedStyle;
  require("module_1652");
  items14[1] = require("module_1652").interpolate;
  items14[2] = derivedValue;
  items14[3] = items;
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp64, tmp65, tmp66, tmp67] = items14;
  class VoiceMessageOverlayTsx13 {
    constructor() {
      obj = { opacity: closure_0(closure_1.get(), closure_2, [1, 1, 0, 0]) };
      return obj;
    }
  }
  const items15 = [tmp65, tmp66, tmp67];
  VoiceMessageOverlayTsx13.__closure = items15;
  VoiceMessageOverlayTsx13.__workletHash = 15177392803931;
  VoiceMessageOverlayTsx13.__initData = tmp64;
  const animatedStyle4 = useAnimatedStyle4(VoiceMessageOverlayTsx13);
  const items16 = [closure_38, initialAnimation, safeAreaBottom, CHAT_INPUT_HEIGHT, 32, 8];
  const tmp15Result = importDefault(tmp3 ? 8781 : 11323);
  const tmp5Result22 = require("module_1652");
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  c4 = undefined;
  [tmp70, tmp71, tmp72, tmp73, tmp74, tmp75] = items16;
  class VoiceMessageOverlayTsx16 {
    constructor() {
      obj = { opacity: closure_0.get(), bottom: null };
      sum = closure_1 + closure_2 + (closure_3 - closure_4);
      obj.bottom = sum + closure_4 * closure_0.get();
      return obj;
    }
  }
  const items17 = [tmp71, tmp72, tmp73, tmp74, tmp75];
  VoiceMessageOverlayTsx16.__closure = items17;
  VoiceMessageOverlayTsx16.__workletHash = 30731874865;
  VoiceMessageOverlayTsx16.__initData = tmp70;
  const animatedStyle1 = tmp5Result22.useAnimatedStyle(VoiceMessageOverlayTsx16);
  let obj = { style: items18, children: closure_14(View2, obj2) };
  items18 = [tmp.lockParentContainer, animatedStyle, animatedStyle1];
  const View = tmp15(1652).View;
  obj2 = { style: items19, children: items20 };
  items19 = [tmp.lockContainer, animatedStyle2];
  View2 = tmp15(1652).View;
  items20 = [closure_13(closure_16, { style: animatedStyle3, source: tmp15Result }), ];
  const obj3 = { style: items21, source: AssetRegistryDefault };
  items21 = [tmp.chevon, animatedStyle4];
  items20[1] = closure_13(closure_16, obj3);
  return closure_13(View, obj);
}
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, AppState: metroRequire } = react_native2);
const useVoiceMessagesUIStore = VoiceMessagesUIStore.useVoiceMessagesUIStore;
const VoiceMessageAnimationState = VoiceMessageConstants.VoiceMessageAnimationState;
const ComponentActionsKeyed = Constants.ComponentActionsKeyed;
const CHAT_INPUT_HEIGHT = ChatInputConstants.CHAT_INPUT_HEIGHT;
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = Fragment);
let module_1652 = module_1652_mod;
let closure_16 = module_1652.createAnimatedComponent(native.Icon);
module_1652 = module_1652_mod;
let closure_17 = module_1652.createAnimatedComponent(Text_Text.Text);
let closure_18 = module_12.memoize(() => {
  const obj = module_1652;
  return obj.createAnimatedComponent(inlineStyles.Ellipse);
});
let closure_19 = createStyles.createStyles(() => {
  let size1;
  let size2;
  const obj = { innerContainer: { flexDirection: "row", alignItems: "flex-end", paddingTop: 8, paddingHorizontal: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_HORIZONTAL, paddingBottom: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_BOTTOM }, contentContainer: { position: "absolute", bottom: 0, width: "100%", alignItems: "center", overflow: "hidden" }, contentContainerFloating: { justifyContent: "flex-end", overflow: "visible" }, floatingSendButton: size, floatingSendButtonActive: { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND }, floatingSendButtonIconActive: { tintColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT }, voiceChatContainer: { flex: 1, height: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_HEIGHT, marginRight: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_MARGIN_RIGHT, alignItems: "flex-end" }, lockContainer: size1, lockParentContainer: { position: "absolute", right: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_LOCK_PILL_OFFSET_RIGHT, width: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_LOCK_PILL_WIDTH }, chevon: size2 };
  ({ flexDirection: "row", alignItems: "flex-end", paddingTop: 8, paddingHorizontal: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_HORIZONTAL, paddingBottom: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_BOTTOM });
  size = { width: nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH, height: nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT };
  ({ backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND });
  ({ tintColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT });
  ({ flex: 1, height: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_HEIGHT, marginRight: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_MARGIN_RIGHT, alignItems: "flex-end" });
  size1 = { height: 68, width: 56, borderRadius: nativeDefault.modules.button.BORDER_RADIUS, display: "flex", alignItems: "center", flexDirection: "column", elevation: 12, shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 0, height: 12 }, shadowOpacity: 0.12, shadowRadius: 36, borderWidth: LegacyTokens.DARK_0_LIGHT_1, borderStyle: "solid", borderColor: "rgba(0, 0, 0, 0.08)" };
  ({ position: "absolute", right: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_LOCK_PILL_OFFSET_RIGHT, width: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_LOCK_PILL_WIDTH });
  size2 = { height: 16, width: 16, marginTop: 8, tintColor: nativeDefault.colors.ICON_SUBTLE };
  return obj;
});
let items = [, , , ];
({ SENDING: arr[0], CANCELLING: arr[1], LOCKING: arr[2], LOCKED: arr[3] } = VoiceMessageAnimationState);
let closure_21 = { code: "(function VoiceMessageOverlayTsx1(){let[useReducedMotion,currWaveHeight]=this.__closure;var _currWaveHeight$get,_currWaveHeight;return useReducedMotion?0.5:(_currWaveHeight$get=(_currWaveHeight=currWaveHeight)===null||_currWaveHeight===void 0?void 0:_currWaveHeight.get())!==null&&_currWaveHeight$get!==void 0?_currWaveHeight$get:0;})" };
let closure_22 = { code: "(function VoiceMessageOverlayTsx2(){let[derivedCurrWaveHeight,offsetThreshold]=this.__closure;return derivedCurrWaveHeight.get()*offsetThreshold;})" };
let closure_23 = { code: "(function VoiceMessageOverlayTsx3(){let[voiceMessageEllipseBgColor,radius,offset]=this.__closure;return{fill:voiceMessageEllipseBgColor.get(),ry:radius+offset.get(),rx:radius,cy:radius+offset.get(),cx:radius};})" };
let closure_24 = { code: "(function VoiceMessageOverlayTsx4(){let[radius,height,offset]=this.__closure;return{position:'absolute',width:radius*2,height:height.get()+offset.get(),bottom:0};})" };
let closure_25 = { code: "(function VoiceMessageOverlayTsx5(){let[initialAnimation,recordingAnimation]=this.__closure;const animationValue=Math.min(initialAnimation.get(),recordingAnimation.get());return{opacity:animationValue};})" };
const memoResult = react.memo(function VoiceMessageEllipse(arg0) {
  let Svg;
  let height;
  let obj4;
  let offsetThreshold;
  let opacity;
  let radius;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp5;
  let tmp6;
  let tmp7;
  let useReducedMotion;
  let voiceMessageAnimationState;
  const f106713 = (currWaveHeight) => currWaveHeight.currWaveHeight;
  ({ radius, voiceMessageAnimationState } = arg0);
  ({ opacity, height, offsetThreshold } = arg0);
  let obj = get_initialized;
  items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion, []);
  const items1 = [closure_21, stateFromStores, useVoiceMessagesUIStore(f106713)];
  let c0;
  let c1;
  [tmp5, tmp6, tmp7] = items1;
  const tmp4 = useVoiceMessagesUIStore(f106713);
  const obj2 = _mod1652;
  class VoiceMessageOverlayTsx1 {
    constructor() {
      let num = 0.5;
      if (!c0) {
        let num2;
        const obj = c1;
        if (c1 != null) {
          num2 = obj.get();
        }
        if (num2 == null) {
          num2 = 0;
        }
        num = num2;
      }
      return num;
    }
  }
  const items2 = [tmp6, tmp7];
  VoiceMessageOverlayTsx1.__closure = items2;
  VoiceMessageOverlayTsx1.__workletHash = 14053531181026;
  VoiceMessageOverlayTsx1.__initData = tmp5;
  const derivedValue = obj2.useDerivedValue(VoiceMessageOverlayTsx1);
  const tmpResult = useToken;
  const token = tmpResult.useToken(nativeDefault.colors.BACKGROUND_BRAND);
  const items3 = [closure_22, derivedValue, offsetThreshold];
  c0 = undefined;
  c1 = undefined;
  [tmp12, tmp13, tmp14] = items3;
  const tmp11 = useDerivedColors(voiceMessageAnimationState, token, nativeDefault.unsafe_rawColors.RED_400, token, token);
  const tmpResult4 = _mod1652;
  class VoiceMessageOverlayTsx2 {
    constructor() {
      return _undefined.get() * c1;
    }
  }
  const items4 = [tmp13, tmp14];
  VoiceMessageOverlayTsx2.__closure = items4;
  VoiceMessageOverlayTsx2.__workletHash = 12904912958499;
  VoiceMessageOverlayTsx2.__initData = tmp12;
  const derivedValue1 = tmpResult4.useDerivedValue(VoiceMessageOverlayTsx2);
  const items5 = [closure_23, tmp11, radius, derivedValue1];
  c0 = undefined;
  c1 = undefined;
  let c2;
  [tmp16, tmp17, tmp18, tmp19] = items5;
  const tmpResult5 = _mod1652;
  class VoiceMessageOverlayTsx3 {
    constructor() {
      const obj = { fill: _undefined.get(), ry: _undefined2 + _undefined3.get(), rx: _undefined2, cy: _undefined2 + _undefined3.get(), cx: _undefined2 };
      return obj;
    }
  }
  const items6 = [tmp17, tmp18, tmp19];
  VoiceMessageOverlayTsx3.__closure = items6;
  VoiceMessageOverlayTsx3.__workletHash = 5686983311618;
  VoiceMessageOverlayTsx3.__initData = tmp16;
  const animatedProps = tmpResult5.useAnimatedProps(VoiceMessageOverlayTsx3);
  const items7 = [closure_24, radius, height, derivedValue1];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp21, tmp22, tmp23, tmp24] = items7;
  const tmpResult6 = _mod1652;
  class VoiceMessageOverlayTsx4 {
    constructor() {
      let value;
      size = { position: "absolute", width: 2 * c0, height: value + _undefined2.get(), bottom: 0 };
      value = _undefined.get();
      return size;
    }
  }
  const items8 = [tmp22, tmp23, tmp24];
  VoiceMessageOverlayTsx4.__closure = items8;
  VoiceMessageOverlayTsx4.__workletHash = 12520636886923;
  VoiceMessageOverlayTsx4.__initData = tmp21;
  const animatedStyle = tmpResult6.useAnimatedStyle(VoiceMessageOverlayTsx4);
  const obj3 = { style: animatedStyle, children: map1(Svg, obj4) };
  const tmp26 = closure_18();
  const View = module_1652.View;
  obj4 = { children: map1(tmp26, { animatedProps, opacity }) };
  Svg = tmp(8171).Svg;
  return map1(View, obj3);
});
let closure_26 = react.memo(function VoiceMessagePrompt(voiceMessageState) {
  let exiting;
  let initialAnimation;
  let recordingAnimation;
  let stringResult;
  let tmp25;
  let tmp26;
  let tmp27;
  voiceMessageState = voiceMessageState.voiceMessageState;
  let stringResult5;
  ({ initialAnimation, recordingAnimation, exiting } = voiceMessageState);
  const tmp = useVoiceMessagesUIStore((isUsingHoldGesture) => isUsingHoldGesture.isUsingHoldGesture);
  let tmp2 = useVoiceMessagesUIStore((savedVoiceMessageUploadData) => null != savedVoiceMessageUploadData.savedVoiceMessageUploadData);
  let obj = react;
  const ref = react.useRef(undefined);
  const tmp5 = useRefValueDefault(ref);
  if (exiting) {
    stringResult5 = tmp5;
    stringResult = tmp5;
  } else {
    if (tmp2) {
      if (!tmp) {
        const intl = intl7.intl;
        stringResult = intl.string(intl7.t["m+sRVL"]);
        stringResult5 = stringResult;
      }
    }
    if (tmp2) {
      if (voiceMessageState === VoiceMessageAnimationState.SENDING) {
        const intl6 = intl7.intl;
        const stringResult1 = intl6.string(intl7.t["zPxm/X"]);
        stringResult5 = stringResult1;
        stringResult = stringResult1;
      }
    }
    if (tmp2) {
      if (voiceMessageState === VoiceMessageAnimationState.CANCELLING) {
        const intl5 = intl7.intl;
        const stringResult2 = intl5.string(intl7.t.sB81Bo);
        stringResult5 = stringResult2;
        stringResult = stringResult2;
      }
    }
    if (!tmp2) {
      if (voiceMessageState === VoiceMessageAnimationState.SENDING) {
        const intl2 = intl7.intl;
        const stringResult3 = intl2.string(intl7.t.cyL7DJ);
        stringResult5 = stringResult3;
        stringResult = stringResult3;
      }
    }
    if (!tmp2) {
      if (voiceMessageState === VoiceMessageAnimationState.CANCELLING) {
        const intl3 = intl7.intl;
        const stringResult4 = intl3.string(intl7.t["a+A3+f"]);
        stringResult5 = stringResult4;
        stringResult = stringResult4;
      }
    }
    if (!tmp2) {
      tmp2 = voiceMessageState !== VoiceMessageAnimationState.LOCKING;
    }
    if (!tmp2) {
      const intl4 = intl7.intl;
      stringResult5 = intl4.string(intl7.t["3qvtks"]);
      stringResult = stringResult5;
    }
  }
  items = [stringResult];
  const effect = obj.useEffect(() => {
    ref.current = stringResult5;
  }, items);
  _mod1652;
  const items1 = [closure_25, initialAnimation, recordingAnimation];
  let c0;
  let c1;
  [tmp25, tmp26, tmp27] = items1;
  class VoiceMessageOverlayTsx5 {
    constructor() {
      let min;
      let value;
      const obj = { opacity: min(value, _undefined2.get()) };
      min = Math.min;
      value = _undefined.get();
      return obj;
    }
  }
  const items2 = [tmp26, tmp27];
  VoiceMessageOverlayTsx5.__closure = items2;
  VoiceMessageOverlayTsx5.__workletHash = 1077271154504;
  VoiceMessageOverlayTsx5.__initData = tmp25;
  let tmp29 = null;
  if (null != stringResult) {
    const obj2 = { style: tmp28, variant: "body-xs/medium", color: "interactive-text-default", maxFontSizeMultiplier: 2, children: stringResult };
    tmp29 = map1(closure_17, obj2);
  }
  return tmp29;
});
let closure_27 = { code: "(function VoiceMessageOverlayTsx6(){let[voiceMessageAnimationState,withTiming,Easing]=this.__closure;const currValue=voiceMessageAnimationState.get()[1];return withTiming(currValue,{easing:Easing.linear,duration:150});})" };
let closure_28 = { code: "(function VoiceMessageOverlayTsx7(){let[voiceMessageAnimationState,sendingColor,lockingColor,lockedColor,cancelingColor,interpolateColor,timing,VOICE_MESSAGE_ANIMATION_STATES]=this.__closure;const[prevValue,currValue]=voiceMessageAnimationState.get();const distance=prevValue+currValue;const colors=distance===2?[sendingColor,sendingColor,lockingColor,lockedColor]:[sendingColor,cancelingColor,lockingColor,lockedColor];return interpolateColor(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,colors);})" };
let closure_30 = { code: "(function VoiceMessageOverlayTsx8(){let[voiceMessageAnimationState,withTiming,Easing]=this.__closure;const currValue=voiceMessageAnimationState.get()[1];return withTiming(currValue,{easing:Easing.linear,duration:150});})" };
let closure_31 = { code: "(function VoiceMessageOverlayTsx9(){let[voiceMessageAnimationState,interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES]=this.__closure;const[prevValue,currValue]=voiceMessageAnimationState.get();const distance=prevValue+currValue;const opacity=distance===2?[1,1,1,0]:[1,0,1,0];return interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,opacity);})" };
let closure_32 = { code: "(function VoiceMessageOverlayTsx10(){let[interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES,LOCK_PILL_RESTING_HEIGHT]=this.__closure;return{height:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[LOCK_PILL_RESTING_HEIGHT,LOCK_PILL_RESTING_HEIGHT,104,104])};})" };
let closure_33 = { code: "(function VoiceMessageOverlayTsx11(){let[interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES,lockPillWidth,LOCK_PILL_LOCKED_SIZE,LOCK_PILL_RESTING_HEIGHT,lockContainerOpacity,lockedBackgroundColor,lockPillLockedOverhang]=this.__closure;return{width:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[lockPillWidth,lockPillWidth,LOCK_PILL_LOCKED_SIZE,LOCK_PILL_LOCKED_SIZE]),height:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[LOCK_PILL_RESTING_HEIGHT,LOCK_PILL_RESTING_HEIGHT,LOCK_PILL_LOCKED_SIZE,LOCK_PILL_LOCKED_SIZE]),opacity:lockContainerOpacity.get(),backgroundColor:lockedBackgroundColor.get(),marginHorizontal:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[0,0,lockPillLockedOverhang,lockPillLockedOverhang]),marginBottom:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[0,0,36,36])};})" };
let closure_34 = { code: "(function VoiceMessageOverlayTsx12(){let[interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES,lockIconColor]=this.__closure;return{width:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[24,24,32,32]),height:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[24,24,32,32]),marginTop:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[12,12,10,10]),tintColor:lockIconColor.get()};})" };
let closure_35 = { code: "(function VoiceMessageOverlayTsx13(){let[interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES]=this.__closure;return{opacity:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[1,1,0,0])};})" };
let closure_36 = { code: "(function VoiceMessageOverlayTsx14(){let[voiceMessageAnimationState,VoiceMessageAnimationState]=this.__closure;return voiceMessageAnimationState.get()[1]===VoiceMessageAnimationState.LOCKED||voiceMessageAnimationState.get()[1]===VoiceMessageAnimationState.LOCKING;})" };
let closure_37 = { code: "(function VoiceMessageOverlayTsx15(result,previous){let[scheduleOnRN,setLocked]=this.__closure;if(result!==previous){scheduleOnRN(setLocked,result);}})" };
let closure_38 = { code: "(function VoiceMessageOverlayTsx16(){let[initialAnimation,safeAreaBottom,CHAT_INPUT_HEIGHT,LOCK_PILL_BOTTOM_OFFSET,INITIAL_SHIFT]=this.__closure;return{opacity:initialAnimation.get(),bottom:safeAreaBottom+CHAT_INPUT_HEIGHT+(LOCK_PILL_BOTTOM_OFFSET-INITIAL_SHIFT)+INITIAL_SHIFT*initialAnimation.get()};})" };
let closure_40 = { code: "(function VoiceMessageOverlayTsx17(){let[voiceMessageAnimationState]=this.__closure;return voiceMessageAnimationState.get()[1];})" };
let closure_41 = { code: "(function VoiceMessageOverlayTsx18(state,previous){let[scheduleOnRN,setVoiceMessageState]=this.__closure;if(state!==previous){scheduleOnRN(setVoiceMessageState,state);}})" };
let closure_42 = { code: "(function VoiceMessageOverlayTsx19(){let[initialAnimation]=this.__closure;return{opacity:initialAnimation.get()};})" };
let closure_43 = react.memo(function VoiceMessageOverlay(channelId) {
  let IconButton;
  let exiting;
  let intl;
  let items10;
  let items13;
  let obj10;
  let str;
  let tmp15;
  let tmp16;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp27;
  let tmp28;
  let tmp37;
  let voiceMessageAnimationState;
  channelId = channelId.channelId;
  ({ voiceMessageAnimationState, exiting } = channelId);
  let ref;
  let tmp = channelId;
  let obj = channelId(5732);
  const token = obj.useToken(ref(575).modules.mobile.CHAT_INPUT_FLOATING_INLINE_FULL_GRADIENT_HEIGHT);
  const tmp5 = closure_19();
  const bottom = ref(5743)({ includeCustomKeyboardHeight: true, includeKeyboardHeight: true }).insets.bottom;
  let obj2 = channelId(14188);
  const keyboardOpenPaddingStyle = obj2.useKeyboardOpenPaddingStyle();
  const tmp7 = useVoiceMessagesUIStore((startTimeMillis) => null != startTimeMillis.startTimeMillis);
  _require = tmp7;
  const obj3 = channelId(1652);
  const sharedValue = obj3.useSharedValue(0);
  let closure_3 = react.useRef(performance.now());
  items = [sharedValue];
  const effect = react.useEffect(() => {
    set = sharedValue.set;
    const withDelay = channelId(dependencyMap[10]).withDelay;
    channelId(dependencyMap[10]);
    const obj = channelId(dependencyMap[22]);
    const obj2 = { easing: channelId(dependencyMap[10]).Easing.quad, duration: 250 };
    const result = set(withDelay(500, obj.withTiming(1, obj2)));
  }, items);
  const items1 = [sharedValue, exiting];
  const effect1 = react.useEffect(() => {
    const tmp = exiting;
    if (tmp) {
      set = sharedValue.set;
      const obj = { easing: channelId(dependencyMap[10]).Easing.quad, duration: 100 };
      const withTiming = channelId(dependencyMap[22]).withTiming;
      channelId(dependencyMap[22]);
      const result = set(withTiming(0, obj));
    }
  }, items1);
  const obj5 = channelId(1652);
  const sharedValue1 = obj5.useSharedValue(0);
  const items2 = [sharedValue, sharedValue1, tmp7];
  const effect2 = react.useEffect(() => {
    const tmp = closure_0;
    if (tmp) {
      set = sharedValue1.set;
      const obj = { easing: channelId(dependencyMap[10]).Easing.quad, duration: 200 };
      const withTiming = channelId(dependencyMap[22]).withTiming;
      channelId(dependencyMap[22]);
      const result = set(withTiming(1, obj));
      const _performance = performance;
      if (performance.now() - ref.current < 500) {
        set2 = sharedValue.set;
        const obj2 = { easing: channelId(dependencyMap[10]).Easing.quad, duration: 250 };
        const withTiming2 = channelId(dependencyMap[22]).withTiming;
        channelId(dependencyMap[22]);
        set2(withTiming2(1, obj2));
      }
    }
  }, items2);
  [tmp15, tmp16] = react.useState(VoiceMessageAnimationState.SENDING);
  _slicedToArray(react.useState(VoiceMessageAnimationState.SENDING), 2);
  const items3 = [closure_40, voiceMessageAnimationState];
  let c0;
  [tmp18, tmp19] = items3;
  const tmp17 = channelId(1652);
  class VoiceMessageOverlayTsx17 {
    constructor() {
      return _undefined.get()[1];
    }
  }
  const items4 = [tmp19];
  VoiceMessageOverlayTsx17.__closure = items4;
  VoiceMessageOverlayTsx17.__workletHash = 13417586896774;
  VoiceMessageOverlayTsx17.__initData = tmp18;
  const items5 = [closure_41, , ];
  const useAnimatedReaction = tmp17.useAnimatedReaction;
  items5[1] = tmp(1705).scheduleOnRN;
  items5[2] = tmp16;
  c0 = undefined;
  let c1;
  [tmp20, tmp21, tmp22] = items5;
  class VoiceMessageOverlayTsx18 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        _undefined(c1, arg0);
      }
    }
  }
  const items6 = [tmp21, tmp22];
  VoiceMessageOverlayTsx18.__closure = items6;
  VoiceMessageOverlayTsx18.__workletHash = 8966188609438;
  VoiceMessageOverlayTsx18.__initData = tmp20;
  const animatedReaction = useAnimatedReaction(VoiceMessageOverlayTsx17, VoiceMessageOverlayTsx18);
  ref = obj4.useRef(null);
  const effect3 = obj4.useEffect(() => {
    const obj = useIsScreenReaderEnabled;
    if (obj.getIsScreenReaderEnabled()) {
      const obj2 = { ref };
      const tmpResult = react_native;
      const result = tmpResult.setAccessibilityFocus(obj2);
    }
  }, []);
  const items7 = [channelId];
  const effect4 = obj4.useEffect(() => {
    let closure_0 = closure_1_6.addEventListener("change", function endAudioRecordingOnAppInactive(event) {
      const tmp = "inactive" !== event && "background" !== event;
      if (!tmp) {
        const ComponentDispatch = channelId(dependencyMap[31]).ComponentDispatch;
        const dispatchKeyed = ComponentDispatch.dispatchKeyed;
        const VOICE_MESSAGE_SEND = constants.VOICE_MESSAGE_SEND;
        const obj = { isCancelling: true, cancelReason: channelId(dependencyMap[32]).VoiceMessageRecordingResult.CANCELLED_ON_BACKGROUND };
        dispatchKeyed(VOICE_MESSAGE_SEND, closure_0, obj);
      }
    });
    return () => {
      closure_0.remove();
    };
  }, items7);
  let tmpResult = tmp(1652);
  const items8 = [closure_42, sharedValue];
  c0 = undefined;
  [tmp27, tmp28] = items8;
  class VoiceMessageOverlayTsx19 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items9 = [tmp28];
  VoiceMessageOverlayTsx19.__closure = items9;
  VoiceMessageOverlayTsx19.__workletHash = 16656285026938;
  VoiceMessageOverlayTsx19.__initData = tmp27;
  const animatedStyle = tmpResult.useAnimatedStyle(VoiceMessageOverlayTsx19);
  const tmpResult2 = tmp(12034);
  const wakeLock = tmpResult2.useWakeLock("VoiceMessageOverlay");
  const obj6 = { style: items10, children: null };
  items10 = [tmp5.contentContainer, { bottom }, animatedStyle, ];
  const items11 = [tmp5.contentContainerFloating, keyboardOpenPaddingStyle];
  items10[3] = items11;
  const View = tmp3(1652).View;
  const items12 = [closure_13(tmp(14036).ChatInputScrimGradient, { gradientHeight: token, inline: true }), closure_13(closure_26, { initialAnimation: sharedValue, recordingAnimation: sharedValue1, voiceMessageState: tmp15, exiting }), ];
  const obj7 = { style: tmp5.innerContainer, children: null };
  const obj8 = { style: tmp5.voiceChatContainer, children: null };
  const obj9 = { isRecording: tmp7, initialAnimation: sharedValue, leftAccessory: closure_13(IconButton, obj10), rightAccessory: null };
  const tmp3Result = tmp3(14435);
  obj10 = {
    icon: ref(5873),
    variant: str,
    size: "sm",
    maxFontSizeMultiplier: 2,
    accessibilityLabel: intl.string(tmp(1113).t.RdK9sV),
    onPressIn() {
      const obj = channelId(dependencyMap[38]);
      return obj.triggerHaptic();
    },
    onPress() {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatchKeyed(ComponentActionsKeyed.VOICE_MESSAGE_SEND, channelId, { isCancelling: true });
    }
  };
  IconButton = tmp(8168).IconButton;
  str = "tertiary";
  const tmp32 = closure_15;
  if (tmp15 === VoiceMessageAnimationState.CANCELLING) {
    str = "destructive";
  }
  intl = tmp(1113).intl;
  const obj11 = { ref, active: tmp37, style: null, activeStyle: null, activeIconStyle: null, IconComponent: null, accessibilityLabel: null, onPress: null };
  tmp37 = tmp15 === tmp13.SENDING;
  const tmp3Result2 = ref(13023);
  if (!tmp37) {
    tmp37 = tmp15 === tmp13.LOCKED;
  }
  ({ floatingSendButton: obj13.style, floatingSendButtonActive: obj13.activeStyle, floatingSendButtonIconActive: obj13.activeIconStyle } = tmp5);
  if (!tmp7) {
    let SendMessageIcon;
    if (!exiting) {
      SendMessageIcon = tmp(12168).MicrophoneIcon;
    }
    const obj12 = { children: items13 };
    obj11.IconComponent = SendMessageIcon;
    const intl2 = tmp(1113).intl;
    obj11.accessibilityLabel = intl2.string(tmp(1113).t["+8GStU"]);
    obj11.onPress = function onPress() {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatchKeyed(ComponentActionsKeyed.VOICE_MESSAGE_SEND, channelId, { isCancelling: false });
    };
    obj9.rightAccessory = closure_13(tmp3Result2, obj11);
    obj8.children = closure_13(tmp3Result, obj9);
    obj7.children = closure_13(closure_5, obj8);
    items12[2] = closure_13(closure_5, obj7);
    obj6.children = items12;
    items13 = [closure_14(View, obj6), ];
    const obj14 = { safeAreaBottom: bottom, initialAnimation: sharedValue, voiceMessageAnimationState };
    items13[1] = closure_13(LockPill, obj14);
    return closure_14(tmp32, obj12);
  }
  SendMessageIcon = tmp(5863).SendMessageIcon;
});
const memoResult1 = react.memo(function VoiceMessageOverlayGuard(channelId) {
  let closure_2;
  let first;
  channelId = channelId.channelId;
  dependencyMap = undefined;
  let tmp = useVoiceMessagesUIStore((showRecordingOverlay) => showRecordingOverlay.showRecordingOverlay);
  let closure_1 = tmp;
  items = [ChannelStore];
  const obj = channelId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const tmp2 = useVoiceMessagesUIStore((voiceMessageAnimationState) => voiceMessageAnimationState.voiceMessageAnimationState);
  [first, dependencyMap] = react.useState(tmp);
  const items1 = [tmp];
  const effect = react.useEffect(() => {
    let closure_0;
    const tmp = closure_1;
    if (tmp) {
      closure_2(true);
    } else {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_1_2(false), 100);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, items1);
  let isForumLikeChannelResult;
  if (stateFromStores != null) {
    isForumLikeChannelResult = stateFromStores.isForumLikeChannel();
  }
  let tmp7 = null;
  if (!isForumLikeChannelResult) {
    let tmp8 = null;
    if (null != tmp2) {
      tmp8 = null;
      if (first) {
        const obj2 = { channelId, voiceMessageAnimationState: tmp2, exiting: !tmp };
        tmp8 = closure_13(closure_43, obj2);
      }
    }
    tmp7 = tmp8;
  }
  return tmp7;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_messages/native/components/VoiceMessageOverlay.tsx");

export default memoResult1;
export const VoiceMessageEllipse = memoResult;
