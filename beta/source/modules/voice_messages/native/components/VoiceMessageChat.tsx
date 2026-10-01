// Module ID: 12144
// Function ID: 12145
// Name: VoiceMessageChat
// Dependencies: [32, 19, 17, 4825, 11442, 11443, 21, 4566, 4836, 576, 1364, 5280, 4837, 4531, 5481, 4832, 2]

// Module 12144 (VoiceMessageChat)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import spring from "spring" /* 5280 */;
import utils_TimeUtils from "utils/TimeUtils" /* 5481 */;
import VoiceMessagesUIStore from "VoiceMessagesUIStore" /* 11442 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import VoiceMessageConstants from "VoiceMessageConstants" /* 11443 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import PlatformUtils_mod from "PlatformUtils" /* 1364 */;
import size_mod from "module_2" /* 2 */;

const ReanimatedRexport = ReanimatedRexport2;
let importDefault, set, set2;

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
  let items2;
  value = value.value;
  const require = value;
  let sharedValue1;
  const tmp = closure_16();
  let obj = require("ReanimatedRexport");
  const sharedValue = obj.useSharedValue(0);
  let obj2 = require("ReanimatedRexport");
  sharedValue1 = obj2.useSharedValue(0);
  let obj3 = require("ReanimatedRexport");
  const sharedValue2 = obj3.useSharedValue(0);
  let obj4 = require("ReanimatedRexport");
  const fn = function o() {
    size = { height: sharedValue.get(), width: sharedValue1.get(), marginRight: sharedValue2.get() };
    return size;
  };
  fn.__closure = { animatedHeight: sharedValue, animatedWidth: sharedValue1, animatedMargin: sharedValue2 };
  fn.__workletHash = 8768145898720;
  fn.__initData = __initData;
  const items = [sharedValue, value];
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const effect = react.useEffect(() => {
    const result = 20 * Math.min(1, require / closure_12 * 1.25);
    set = sharedValue.set;
    const obj = spring;
    const result1 = set(obj.withSpring(Math.max(2, result)));
  }, items);
  const items1 = [sharedValue1, sharedValue2];
  const effect1 = react.useEffect(() => {
    set = sharedValue1.set;
    const obj = timing;
    const obj2 = { duration: 300, easing: ReanimatedRexport2.Easing.linear };
    const result = set(obj.withTiming(2, obj2));
    set2 = sharedValue2.set;
    const obj3 = timing;
    const obj4 = { duration: 300, easing: ReanimatedRexport2.Easing.linear };
    set2(obj3.withTiming(4, obj4));
  }, items1);
  const obj5 = { style: items2 };
  items2 = [tmp.waveformBar, animatedStyle];
  return closure_13(sharedValue(sharedValue1[7]).View, obj5);
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
  let closure_1;
  let closure_3;
  let closure_5;
  let closure_7;
  let first;
  let first1;
  let first2;
  let items3;
  let items5;
  let str;
  animationValue = animationValue.animationValue;
  first = undefined;
  _slicedToArray = undefined;
  first1 = undefined;
  closure_5 = undefined;
  useVoiceMessagesUIStore = undefined;
  let tmp = closure_16();
  const tmp2 = useVoiceMessagesUIStore((startTimeMillis) => startTimeMillis.startTimeMillis);
  importDefault = tmp2;
  [first, _slicedToArray] = first1.useState(() => {
    let num = 0;
    if (null != closure_1) {
      const _Date = Date;
      num = Date.now() - tmp;
    }
    return num;
  });
  [first1, closure_5] = first1.useState(undefined);
  const tmp7 = useVoiceMessagesUIStore((savedVoiceMessageUploadData) => null != savedVoiceMessageUploadData.savedVoiceMessageUploadData);
  const useReducedMotion = tmp7;
  const tmp8 = animationValue;
  const tmp9 = first;
  let obj = animationValue(first[13]);
  const items = [tmp2, tmp7];
  const token = obj.useToken(require("native").modules.mobile.VOICE_MESSAGE_DURATION_TEXT_STYLE);
  const effect = first1.useEffect(() => {
    let closure_0;
    const tmp = closure_6;
    if (tmp) {
      closure_3(closure_1_8 + closure_1_9);
      closure_5(constants.ENDED);
    } else {
      const _setInterval = setInterval;
      const interval = setInterval(() => {
        if (null != closure_1_1) {
          const _Date = Date;
          const diff = Date.now() - tmp;
          closure_1_3(diff);
          if (diff > closure_2_10) {
            closure_1_5(constants.REALLY_WARN);
          } else if (diff > closure_2_11) {
            closure_1_5(constants.WARN);
          }
        }
      }, 100);
      return () => {
        clearInterval(closure_0);
      };
    }
  }, items);
  const items1 = [first];
  const memo = first1.useMemo(() => {
    const obj = utils_TimeUtils;
    return obj.getTimeFormat(first / 1000, { padMinutes: false });
  }, items1);
  [first2, useVoiceMessagesUIStore] = first1.useState(false);
  const items2 = [first1];
  const effect1 = first1.useEffect(() => {
    let closure_0;
    const f125465 = (arg0) => !arg0;
    if (null != first1) {
      if (first1 !== constants.ENDED) {
        let num = 1000;
        if (!useReducedMotion.useReducedMotion) {
          let num2 = 250;
          if (first1 === tmp4.WARN) {
            num2 = 500;
          }
          num = num2;
        }
        function flash() {
          closure_7(f125465);
          const timeout = setTimeout(flash, num);
        }
        closure_7(f125465);
        const _setTimeout = setTimeout;
        let timeout = setTimeout(flash, num);
        return () => {
          clearTimeout(closure_0);
        };
      } else {
        closure_7(true);
      }
    } else {
      closure_7(false);
    }
  }, items2);
  const fn = function x() {
    const obj = { opacity: animationValue.get() };
    return obj;
  };
  fn.__closure = { animationValue };
  fn.__workletHash = 4012974382717;
  fn.__initData = __initData2;
  const obj2 = animationValue(first[7]);
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj3 = { style: items3, children: items5 };
  items3 = [tmp.durationContainer, animatedStyle];
  const items4 = [tmp.dot, ];
  let tmp20 = null != tmp2;
  const View = require("ReanimatedRexport").View;
  const tmp17 = closure_14;
  const tmp19 = closure_5;
  if (tmp20) {
    tmp20 = !tmp7;
  }
  items4[1] = !tmp20 && tmp.dotDismissed;
  items5 = [closure_13(tmp19, { style: items4 }), ];
  const obj4 = { style: tmp.duration, variant: token, color: str, tabularNumbers: true, children: memo };
  str = "text-default";
  const Text = tmp8(tmp9[15]).Text;
  if (first2) {
    str = "text-feedback-critical";
  }
  items5[1] = closure_13(Text, obj4);
  return tmp17(View, obj3);
}
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, ActivityIndicator } = react_native);
let useVoiceMessagesUIStore = VoiceMessagesUIStore.useVoiceMessagesUIStore;
({ VOICE_RECORDING_MAX_DURATION_MILLIS: metroImportAll, VOICE_RECORDING_MAX_DURATION_OFFSET: c9, VOICE_RECORDING_REALLY_WARN_DURATION_MILLIS: c10, VOICE_RECORDING_WARN_DURATION_MILLIS: unpackModuleId, WAVEFORM_WAVE_MAX_VALUE: closure_12 } = VoiceMessageConstants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let closure_15 = ReanimatedRexport.createAnimatedComponent(ActivityIndicator);
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
const __initData = { code: "function VoiceMessageChatTsx1(){const{animatedHeight,animatedWidth,animatedMargin}=this.__closure;return{height:animatedHeight.get(),width:animatedWidth.get(),marginRight:animatedMargin.get()};}" };
let closure_20 = { WARN: 0, [0]: "WARN", REALLY_WARN: 1, [1]: "REALLY_WARN", ENDED: 2, [2]: "ENDED" };
const __initData2 = { code: "function VoiceMessageChatTsx2(){const{animationValue}=this.__closure;return{opacity:animationValue.get()};}" };
const __initData3 = { code: "function VoiceMessageChatTsx3(){const{initialAnimation,isRecording}=this.__closure;return initialAnimation.get()===1&&isRecording;}" };
const __initData4 = { code: "function VoiceMessageChatTsx4(result,previous){const{animationValue,withTiming,Easing,loadingOpacity}=this.__closure;if(result&&result!==previous){animationValue.set(withTiming(1,{easing:Easing.quad,duration:200}));loadingOpacity.set(0);}}" };
const __initData5 = { code: "function VoiceMessageChatTsx5(){const{backgroundColor}=this.__closure;return{width:'100%',...(backgroundColor!=null?{backgroundColor:backgroundColor.get()}:{})};}" };
const __initData6 = { code: "function VoiceMessageChatTsx6(){const{loadingOpacity}=this.__closure;return{opacity:loadingOpacity.get()};}" };
const memoResult = react.memo((isRecording) => {
  let items1;
  let items2;
  let items3;
  let leftAccessory;
  let rightAccessory;
  isRecording = isRecording.isRecording;
  const initialAnimation = isRecording.initialAnimation;
  const backgroundColor = isRecording.backgroundColor;
  let sharedValue1;
  ({ leftAccessory, rightAccessory } = isRecording);
  let tmp = closure_16();
  let obj = isRecording(backgroundColor[13]);
  const token = obj.useToken(initialAnimation(backgroundColor[9]).colors.MOBILE_VOICE_MESSAGE_RECORDING_SPINNER_COLOR);
  let obj2 = isRecording(backgroundColor[7]);
  const sharedValue = obj2.useSharedValue(0);
  const items = [sharedValue, isRecording];
  const effect = sharedValue1.useEffect(() => {
    let closure_0;
    let timeout;
    if (!timeout) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        const obj = isRecording(backgroundColor[12]);
        const obj2 = { easing: isRecording(backgroundColor[7]).Easing.quad, duration: 200 };
        const result = set(obj.withTiming(1, obj2));
      }, 1000);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, items);
  let obj3 = isRecording(backgroundColor[7]);
  sharedValue1 = obj3.useSharedValue(0);
  let obj4 = isRecording(backgroundColor[7]);
  const fn = function h() {
    const tmp = 1 === initialAnimation.get() && isRecording;
    return tmp;
  };
  fn.__closure = { initialAnimation, isRecording };
  fn.__workletHash = 7599681139161;
  fn.__initData = __initData3;
  class A {
    constructor(arg0, arg1) {
      const tmp = arg0 && arg0 !== arg1;
      if (tmp) {
        set = sharedValue1.set;
        const obj = { easing: ReanimatedRexport2.Easing.quad, duration: 200 };
        const withTiming = timing.withTiming;
        timing;
        const result = set(withTiming(1, obj));
        const result1 = sharedValue.set(0);
      }
    }
  }
  A.__closure = { animationValue: sharedValue1, withTiming: isRecording(backgroundColor[12]).withTiming, Easing: isRecording(backgroundColor[7]).Easing, loadingOpacity: sharedValue };
  A.__workletHash = 7661977794788;
  A.__initData = __initData4;
  ({ animationValue: sharedValue1, withTiming: isRecording(backgroundColor[12]).withTiming, Easing: isRecording(backgroundColor[7]).Easing, loadingOpacity: sharedValue });
  const animatedReaction = obj4.useAnimatedReaction(fn, A);
  const obj6 = isRecording(backgroundColor[7]);
  class R {
    constructor() {
      let obj3;
      const obj = backgroundColor;
      if (null != backgroundColor) {
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
  R.__closure = { backgroundColor };
  R.__workletHash = 118691194506;
  R.__initData = __initData5;
  const animatedStyle = obj6.useAnimatedStyle(R);
  const fn2 = function f() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn2.__closure = { loadingOpacity: sharedValue };
  fn2.__workletHash = 17421928475897;
  fn2.__initData = __initData6;
  const obj7 = isRecording(backgroundColor[7]);
  const animatedStyle1 = obj7.useAnimatedStyle(fn2);
  const obj8 = { style: items1, children: items3 };
  items1 = [tmp.container, animatedStyle];
  let tmp10 = null;
  const View = initialAnimation(backgroundColor[7]).View;
  const tmp9 = closure_14;
  if (!isRecording) {
    const obj9 = { style: items2, color: token, size: "small" };
    items2 = [tmp.loading, animatedStyle1];
    tmp10 = closure_13(closure_15, obj9);
  }
  items3 = [tmp10, leftAccessory, closure_13(Duration, { animationValue: sharedValue1 }), closure_13(Waveform, {}), rightAccessory];
  return tmp9(View, obj8);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/voice_messages/native/components/VoiceMessageChat.tsx");

export default memoResult;
