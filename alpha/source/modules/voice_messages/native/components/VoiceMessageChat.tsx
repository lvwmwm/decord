// Module ID: 14426
// Function ID: 14427
// Name: VoiceMessageChat
// Dependencies: [32, 19, 17, 5171, 13932, 13933, 21, 1652, 5170, 575, 1377, 5791, 5792, 5400, 5754, 8329, 5781, 2]

// Module 14426 (VoiceMessageChat)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5400 */;
import spring_spring from "spring/spring" /* 5791 */;
import springPresets from "springPresets" /* 5792 */;
import utils_TimeUtils from "utils/TimeUtils" /* 8329 */;
import VoiceMessagesUIStore from "VoiceMessagesUIStore" /* 13932 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5171 */;
import VoiceMessageConstants from "VoiceMessageConstants" /* 13933 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import PlatformUtils_mod from "PlatformUtils" /* 1377 */;
import size_mod from "module_2" /* 2 */;

const module_1652 = _mod1652;
let _require, dependencyMap, set, set2;

let ActivityIndicator;
let c10;
let c9;
let closure_12;
let closure_14;
let hasOwnProperty;
let map1;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let str;
let unpackModuleId;
function WaveformBar(value) {
  let items4;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  value = value.value;
  const require = value;
  let sharedValue1;
  const tmp2 = sharedValue1;
  const tmp = closure_16();
  let obj = require("module_1652");
  const sharedValue = obj.useSharedValue(0);
  let obj2 = require("module_1652");
  sharedValue1 = obj2.useSharedValue(0);
  let obj3 = require("module_1652");
  const sharedValue2 = obj3.useSharedValue(0);
  let obj4 = require("module_1652");
  const items = [closure_17, sharedValue, sharedValue1, sharedValue2];
  let c0;
  let c1;
  let c2;
  [tmp6, tmp7, tmp8, tmp9] = items;
  class VoiceMessageChatTsx1 {
    constructor() {
      size = { height: _undefined.get(), width: _undefined2.get(), marginRight: _undefined3.get() };
      return size;
    }
  }
  const items1 = [tmp7, tmp8, tmp9];
  VoiceMessageChatTsx1.__closure = items1;
  VoiceMessageChatTsx1.__workletHash = 4154638191769;
  VoiceMessageChatTsx1.__initData = tmp6;
  const items2 = [sharedValue, value];
  const animatedStyle = obj4.useAnimatedStyle(VoiceMessageChatTsx1);
  const effect = react.useEffect(() => {
    const result = 20 * Math.min(1, require / authStore2 * 1.25);
    set = sharedValue.set;
    const withSpring = spring_spring.withSpring;
    spring_spring;
    const bound = Math.max(2, result);
    const result1 = set(withSpring(bound, springPresets.Reanimated3DefaultSpringConfig));
  }, items2);
  const items3 = [sharedValue1, sharedValue2];
  const effect1 = react.useEffect(() => {
    set = sharedValue1.set;
    const obj = timing_timing;
    const obj2 = { duration: 300, easing: _mod1652.Easing.linear };
    const result = set(obj.withTiming(2, obj2));
    set2 = sharedValue2.set;
    const obj3 = timing_timing;
    const obj4 = { duration: 300, easing: _mod1652.Easing.linear };
    set2(obj3.withTiming(4, obj4));
  }, items3);
  const obj5 = { style: items4 };
  items4 = [tmp.waveformBar, animatedStyle];
  return closure_13(sharedValue(tmp2[7]).View, obj5);
}
function Waveform() {
  const tmp = closure_16();
  const tmp2 = useVoiceMessagesUIStore((waveformVersion) => waveformVersion.waveformVersion);
  const arr = useVoiceMessagesUIStore((waveform) => waveform.waveform);
  const tmp3 = _slicedToArray(react.useState(0), 2);
  let closure_0 = tmp3[1];
  const substr = arr.slice(-tmp3[0]);
  const obj = {
    style: tmp.waveformContainer,
    onLayout: react.useCallback((nativeEvent) => {
      closure_0(Math.round(nativeEvent.nativeEvent.layout.width / 6) + 2);
    }, []),
    children: substr.map((item) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      return closure_1_13(WaveformBar, { value }, tmp2);
    })
  };
  return closure_13(closure_5, obj);
}
function Duration(animationValue) {
  let closure_0;
  let closure_2;
  let closure_4;
  let items5;
  let items7;
  let str;
  let tmp17;
  let tmp18;
  let first1;
  react = undefined;
  animationValue = animationValue.animationValue;
  let tmp = closure_16();
  const tmp2 = useVoiceMessagesUIStore((startTimeMillis) => startTimeMillis.startTimeMillis);
  _require = tmp2;
  const tmp3 = first1(react.useState(() => {
    let num = 0;
    if (null != closure_0) {
      const _Date = Date;
      num = Date.now() - tmp;
    }
    return num;
  }), 2);
  const first = tmp3[0];
  dependencyMap = tmp3[1];
  const tmp5 = first1(react.useState(undefined), 2);
  first1 = tmp5[0];
  react = tmp5[1];
  const tmp7 = useVoiceMessagesUIStore((savedVoiceMessageUploadData) => null != savedVoiceMessageUploadData.savedVoiceMessageUploadData);
  let closure_5 = tmp7;
  const tmp8 = _require;
  let obj = require("useToken");
  const items = [tmp2, tmp7];
  const token = obj.useToken(first(575).modules.mobile.VOICE_MESSAGE_DURATION_TEXT_STYLE);
  const effect = react.useEffect(() => {
    const tmp = closure_5;
    if (tmp) {
      closure_2(closure_1_8 + closure_1_9);
      closure_4(constants.ENDED);
    } else {
      const _setInterval = setInterval;
      const interval = setInterval(() => {
        if (null != closure_0) {
          const _Date = Date;
          const diff = Date.now() - tmp;
          closure_1_2(diff);
          if (diff > closure_2_10) {
            closure_1_4(constants.REALLY_WARN);
          } else if (diff > closure_2_11) {
            closure_1_4(constants.WARN);
          }
        }
      }, 100);
      return () => {
        clearInterval(closure_0);
      };
    }
  }, items);
  const items1 = [first];
  const memo = react.useMemo(() => {
    const obj = utils_TimeUtils;
    return obj.getTimeFormat(first / 1000, { padMinutes: false });
  }, items1);
  const tmp14 = first1(react.useState(false), 2);
  let closure_6 = tmp14[1];
  const items2 = [first1];
  const first2 = tmp14[0];
  const effect1 = react.useEffect(() => {
    const f139159 = (arg0) => !arg0;
    if (null != first1) {
      if (first1 !== constants.ENDED) {
        let num = 1000;
        if (!closure_6.useReducedMotion) {
          let num2 = 250;
          if (first1 === tmp4.WARN) {
            num2 = 500;
          }
          num = num2;
        }
        function flash() {
          closure_6(f139159);
          const timeout = setTimeout(flash, num);
        }
        closure_6(f139159);
        const _setTimeout = setTimeout;
        let timeout = setTimeout(flash, num);
        return () => {
          clearTimeout(closure_0);
        };
      } else {
        closure_6(true);
      }
    } else {
      closure_6(false);
    }
  }, items2);
  const items3 = [closure_21, animationValue];
  let c0;
  [tmp17, tmp18] = items3;
  const obj2 = require("module_1652");
  const tmp10 = first;
  class VoiceMessageChatTsx2 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items4 = [tmp18];
  VoiceMessageChatTsx2.__closure = items4;
  VoiceMessageChatTsx2.__workletHash = 7684903526084;
  VoiceMessageChatTsx2.__initData = tmp17;
  const animatedStyle = obj2.useAnimatedStyle(VoiceMessageChatTsx2);
  const obj3 = { style: items5, children: items7 };
  items5 = [tmp.durationContainer, animatedStyle];
  const items6 = [tmp.dot, ];
  let tmp23 = null != tmp2;
  const View = tmp10(1652).View;
  const tmp20 = closure_14;
  const tmp22 = closure_5;
  if (tmp23) {
    tmp23 = !tmp7;
  }
  items6[1] = !tmp23 && tmp.dotDismissed;
  items7 = [closure_13(tmp22, { style: items6 }), ];
  const obj4 = { style: tmp.duration, variant: token, color: str, tabularNumbers: true, children: memo };
  str = "text-default";
  const Text = tmp8(5781).Text;
  if (first2) {
    str = "text-feedback-critical";
  }
  items7[1] = closure_13(Text, obj4);
  return tmp20(View, obj3);
}
let react = react_mod;
({ View: hasOwnProperty, ActivityIndicator } = react_native);
const useVoiceMessagesUIStore = VoiceMessagesUIStore.useVoiceMessagesUIStore;
({ VOICE_RECORDING_MAX_DURATION_MILLIS: metroImportAll, VOICE_RECORDING_MAX_DURATION_OFFSET: c9, VOICE_RECORDING_REALLY_WARN_DURATION_MILLIS: c10, VOICE_RECORDING_WARN_DURATION_MILLIS: unpackModuleId, WAVEFORM_WAVE_MAX_VALUE: closure_12 } = VoiceMessageConstants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let closure_15 = module_1652.createAnimatedComponent(ActivityIndicator);
let createStyles = createStyles_mod;
let obj = { container: obj2, loading: { position: "absolute", left: 12 }, dot: size, dotDismissed: { backgroundColor: "transparent" }, waveformContainer: { flex: 1, height: "100%", overflow: "hidden", justifyContent: "flex-end", flexDirection: "row", alignItems: "center" }, waveformBar: obj3, durationContainer: obj4, duration: obj5 };
obj2 = { height: "100%", flexDirection: "row", alignItems: "center", paddingVertical: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_VERTICAL, paddingHorizontal: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_PILL_PADDING_HORIZONTAL, gap: nativeDefault.modules.mobile.VOICE_MESSAGE_CHAT_GAP, borderRadius: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_PILL_BORDER_RADIUS, backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
createStyles = createStyles.createStyles;
size = { height: 6, width: 6, backgroundColor: nativeDefault.unsafe_rawColors.RED_400, borderRadius: nativeDefault.radii.round };
obj3 = { backgroundColor: nativeDefault.colors.MOBILE_VOICE_MESSAGE_RECORDING_WAVEFORM_BAR_BACKGROUND, borderRadius: 1 };
obj4 = { flexDirection: "row", alignItems: "center", gap: 4, marginLeft: nativeDefault.modules.mobile.VOICE_MESSAGE_DURATION_MARGIN_LEFT };
let PlatformUtils = PlatformUtils_mod;
PlatformUtils = PlatformUtils.isAndroid();
const mobile = nativeDefault.modules.mobile;
obj5 = { lineHeight: PlatformUtils ? mobile.VOICE_MESSAGE_DURATION_LINE_HEIGHT_ANDROID : mobile.VOICE_MESSAGE_DURATION_LINE_HEIGHT_IOS, textAlignVertical: str };
PlatformUtils = PlatformUtils_mod;
str = undefined;
if (PlatformUtils.isAndroid()) {
  str = "center";
}
let closure_16 = createStyles(obj);
let closure_17 = { code: "(function VoiceMessageChatTsx1(){let[animatedHeight,animatedWidth,animatedMargin]=this.__closure;return{height:animatedHeight.get(),width:animatedWidth.get(),marginRight:animatedMargin.get()};})" };
let closure_20 = { WARN: 0, [0]: "WARN", REALLY_WARN: 1, [1]: "REALLY_WARN", ENDED: 2, [2]: "ENDED" };
let closure_21 = { code: "(function VoiceMessageChatTsx2(){let[animationValue]=this.__closure;return{opacity:animationValue.get()};})" };
let closure_23 = { code: "(function VoiceMessageChatTsx3(){let[initialAnimation,isRecording]=this.__closure;return initialAnimation.get()===1&&isRecording;})" };
let closure_24 = { code: "(function VoiceMessageChatTsx4(result,previous){let[animationValue,withTiming,Easing,loadingOpacity]=this.__closure;if(result&&result!==previous){animationValue.set(withTiming(1,{easing:Easing.quad,duration:200}));loadingOpacity.set(0);}})" };
let closure_25 = { code: "(function VoiceMessageChatTsx5(){let[backgroundColor]=this.__closure;return{width:'100%',...(backgroundColor!=null?{backgroundColor:backgroundColor.get()}:{})};})" };
let closure_26 = { code: "(function VoiceMessageChatTsx6(){let[loadingOpacity]=this.__closure;return{opacity:loadingOpacity.get()};})" };
const memoResult = react.memo(function VoiceMessageChat(isRecording) {
  let backgroundColor;
  let initialAnimation;
  let items10;
  let items11;
  let items9;
  let leftAccessory;
  let rightAccessory;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp19;
  let tmp20;
  let tmp22;
  let tmp23;
  isRecording = isRecording.isRecording;
  let sharedValue;
  ({ initialAnimation, backgroundColor, leftAccessory, rightAccessory } = isRecording);
  let tmp = closure_16();
  let obj = isRecording(5754);
  const token = obj.useToken(sharedValue(575).colors.MOBILE_VOICE_MESSAGE_RECORDING_SPINNER_COLOR);
  let obj2 = isRecording(1652);
  const tmp4 = sharedValue;
  sharedValue = obj2.useSharedValue(0);
  const items = [sharedValue, isRecording];
  const effect = react.useEffect(() => {
    let closure_0;
    let timeout;
    if (!timeout) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        const obj = isRecording(dependencyMap[13]);
        const obj2 = { easing: isRecording(dependencyMap[7]).Easing.quad, duration: 200 };
        const result = set(obj.withTiming(1, obj2));
      }, 1000);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, items);
  let obj3 = isRecording(1652);
  const sharedValue1 = obj3.useSharedValue(0);
  const items1 = [closure_23, initialAnimation, isRecording];
  let c0;
  let c1;
  [tmp10, tmp11, tmp12] = items1;
  const tmp9 = isRecording(1652);
  class VoiceMessageChatTsx3 {
    constructor() {
      const tmp = 1 === _undefined.get() && c1;
      return tmp;
    }
  }
  const items2 = [tmp11, tmp12];
  VoiceMessageChatTsx3.__closure = items2;
  VoiceMessageChatTsx3.__workletHash = 4127950941280;
  VoiceMessageChatTsx3.__initData = tmp10;
  const items3 = [closure_24, sharedValue1, , , ];
  const useAnimatedReaction = tmp9.useAnimatedReaction;
  items3[2] = isRecording(5400).withTiming;
  items3[3] = isRecording(1652).Easing;
  items3[4] = sharedValue;
  c0 = undefined;
  c1 = undefined;
  let c2;
  let c3;
  [tmp13, tmp14, tmp15, tmp16, tmp17] = items3;
  class VoiceMessageChatTsx4 {
    constructor(arg0, arg1) {
      const tmp = arg0 && arg0 !== arg1;
      if (tmp) {
        const obj = { easing: _undefined3.quad, duration: 200 };
        const result = _undefined.set(_undefined2(1, obj));
        const result1 = _undefined4.set(0);
      }
    }
  }
  const items4 = [tmp14, tmp15, tmp16, tmp17];
  VoiceMessageChatTsx4.__closure = items4;
  VoiceMessageChatTsx4.__workletHash = 6644508258045;
  VoiceMessageChatTsx4.__initData = tmp13;
  const animatedReaction = useAnimatedReaction(VoiceMessageChatTsx3, VoiceMessageChatTsx4);
  const items5 = [closure_25, backgroundColor];
  c0 = undefined;
  [tmp19, tmp20] = items5;
  const tmp2Result = isRecording(1652);
  class VoiceMessageChatTsx5 {
    constructor() {
      let obj3;
      const obj = c0;
      if (null != c0) {
        obj3 = { backgroundColor: obj.get() };
        const obj2 = { backgroundColor: obj.get() };
      } else {
        obj3 = {};
      }
      const obj4 = { width: "100%" };
      const merged = Object.assign(obj3);
      return obj4;
    }
  }
  const items6 = [tmp20];
  VoiceMessageChatTsx5.__closure = items6;
  VoiceMessageChatTsx5.__workletHash = 14070656036467;
  VoiceMessageChatTsx5.__initData = tmp19;
  const animatedStyle = tmp2Result.useAnimatedStyle(VoiceMessageChatTsx5);
  const items7 = [closure_26, sharedValue];
  c0 = undefined;
  [tmp22, tmp23] = items7;
  const tmp2Result2 = isRecording(1652);
  class VoiceMessageChatTsx6 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items8 = [tmp23];
  VoiceMessageChatTsx6.__closure = items8;
  VoiceMessageChatTsx6.__workletHash = 5849307603008;
  VoiceMessageChatTsx6.__initData = tmp22;
  const animatedStyle1 = tmp2Result2.useAnimatedStyle(VoiceMessageChatTsx6);
  let obj4 = { style: items9, children: items11 };
  items9 = [tmp.container, animatedStyle];
  let tmp26 = null;
  const View = tmp4(1652).View;
  const tmp25 = closure_14;
  if (!isRecording) {
    const obj5 = { style: items10, color: token, size: "small" };
    items10 = [tmp.loading, animatedStyle1];
    tmp26 = closure_13(closure_15, obj5);
  }
  items11 = [tmp26, leftAccessory, closure_13(Duration, { animationValue: sharedValue1 }), closure_13(Waveform, {}), rightAccessory];
  return tmp25(View, obj4);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/voice_messages/native/components/VoiceMessageChat.tsx");

export default memoResult;
