// Module ID: 11676
// Function ID: 90563
// Name: WaveformBar
// Dependencies: [57, 31, 27, 4123, 11091, 11092, 653, 33, 3992, 4131, 689, 477, 4543, 4132, 1324, 3835, 4705, 4127, 3843, 2]

// Module 11676 (WaveformBar)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { useVoiceMessagesUIStore } from "VoiceMessageRecordingStatus";
import VoiceMessageAnimationState from "VoiceMessageAnimationState";
import { ThemeTypes } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "module_3992";
import set from "set";
import set from "set";
import set from "get ActivityIndicator";

let closure_10;
let closure_11;
let closure_12;
let closure_14;
let closure_15;
let closure_8;
let closure_9;
let require = arg1;
function WaveformBar(value) {
  value = value.value;
  const require = value;
  const tmp = callback3();
  const sharedValue = require(sharedValue1[8]).useSharedValue(0);
  let obj = require(sharedValue1[8]);
  sharedValue1 = require(sharedValue1[8]).useSharedValue(0);
  const obj2 = require(sharedValue1[8]);
  const sharedValue2 = require(sharedValue1[8]).useSharedValue(0);
  const obj3 = require(sharedValue1[8]);
  const fn = function o() {
    return { height: sharedValue.get(), width: sharedValue1.get(), marginRight: sharedValue2.get() };
  };
  fn.__closure = { animatedHeight: sharedValue, animatedWidth: sharedValue1, animatedMargin: sharedValue2 };
  fn.__workletHash = 8768145898720;
  fn.__initData = closure_18;
  const items = [sharedValue, value];
  const animatedStyle = require(sharedValue1[8]).useAnimatedStyle(fn);
  const effect = importAllResult.useEffect(() => {
    const result = 20 * Math.min(1, closure_0 / outer1_12 * 1.25);
    const result1 = sharedValue.set(value(sharedValue1[12]).withSpring(Math.max(2, result)));
  }, items);
  const items1 = [sharedValue1, sharedValue2];
  const effect1 = importAllResult.useEffect(() => {
    let obj = value(sharedValue1[13]);
    obj = { duration: 300, easing: value(sharedValue1[8]).Easing.linear };
    const result = sharedValue1.set(obj.withTiming(2, obj));
    obj = { duration: 300, easing: value(sharedValue1[8]).Easing.linear };
    const result1 = sharedValue2.set(value(sharedValue1[13]).withTiming(4, obj));
  }, items1);
  const style = [tmp.waveformBar, animatedStyle];
  return callback2(sharedValue(sharedValue1[8]).View, { style });
}
function Waveform() {
  useVoiceMessagesUIStore((waveformVersion) => waveformVersion.waveformVersion);
  const tmp = callback3();
  const tmp3 = callback(importAllResult.useState(0), 2);
  let closure_0 = tmp3[1];
  const substr = useVoiceMessagesUIStore((waveform) => waveform.waveform).slice(-tmp3[0]);
  const arr = useVoiceMessagesUIStore((waveform) => waveform.waveform);
  return callback2(View, {
    style: tmp.waveformContainer,
    onLayout: importAllResult.useCallback((nativeEvent) => {
      callback(Math.round(nativeEvent.nativeEvent.layout.width / 6) + 2);
    }, []),
    children: substr.map((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      return outer1_14(outer1_25, { value }, tmp2);
    })
  });
}
function Duration(animationValue) {
  animationValue = animationValue.animationValue;
  const tmp = callback3();
  let obj = animationValue(first[14]);
  const chatInputFloating = obj.useMobileVisualRefreshConfig({ location: "voice-message-chat" }).chatInputFloating;
  const tmp2 = useVoiceMessagesUIStore((startTimeMillis) => startTimeMillis.startTimeMillis);
  const importDefault = tmp2;
  const tmp3 = callback(first1.useState(() => {
    let num = 0;
    if (null != closure_1) {
      const _Date = Date;
      num = Date.now() - closure_1;
    }
    return num;
  }), 2);
  first = tmp3[0];
  callback = tmp3[1];
  const tmp5 = callback(first1.useState(undefined), 2);
  first1 = tmp5[0];
  let closure_5 = tmp5[1];
  const tmp7 = useVoiceMessagesUIStore((savedVoiceMessageUploadData) => null != savedVoiceMessageUploadData.savedVoiceMessageUploadData);
  let _isNativeReflectConstruct = tmp7;
  let obj1 = animationValue(first[15]);
  const items = [tmp2, tmp7];
  const token = obj1.useToken(importDefault(first[10]).modules.mobile.VOICE_MESSAGE_DURATION_TEXT_STYLE);
  const effect = first1.useEffect(() => {
    if (_isNativeReflectConstruct) {
      callback(outer1_8 + outer1_9);
      callback2(outer1_19.ENDED);
    } else {
      const _setInterval = setInterval;
      const interval = setInterval(() => {
        if (null != outer1_1) {
          const _Date = Date;
          const diff = Date.now() - outer1_1;
          outer1_3(diff);
          if (diff > outer2_10) {
            outer1_5(outer2_19.REALLY_WARN);
          } else if (diff > outer2_11) {
            outer1_5(outer2_19.WARN);
          }
        }
      }, 100);
      return () => {
        clearInterval(closure_0);
      };
    }
  }, items);
  const items1 = [first];
  const memo = first1.useMemo(() => animationValue(first[16]).getTimeFormat(first / 1000, { padMinutes: false }), items1);
  const tmp11 = callback(first1.useState(false), 2);
  useVoiceMessagesUIStore = tmp11[1];
  const items2 = [first1];
  const effect1 = first1.useEffect(() => {
    if (null != first1) {
      if (first1 !== outer1_19.ENDED) {
        let num = 1000;
        if (!tmp7.useReducedMotion) {
          let num2 = 250;
          if (first1 === outer1_19.WARN) {
            num2 = 500;
          }
          num = num2;
        }
        function flash() {
          outer1_7((arg0) => !arg0);
          const timeout = setTimeout(flash, num);
        }
        flash();
        return () => {
          clearTimeout(closure_0);
        };
      } else {
        callback3(true);
      }
    } else {
      callback3(false);
    }
  }, items2);
  let obj2 = animationValue(first[8]);
  class B {
    constructor() {
      obj = { opacity: animationValue.get() };
      return obj;
    }
  }
  B.__closure = { animationValue };
  B.__workletHash = 4012974382717;
  B.__initData = closure_20;
  const animatedStyle = obj2.useAnimatedStyle(B);
  obj = { style: items3 };
  items3 = [tmp.durationContainer, animatedStyle];
  obj = {};
  const items4 = [tmp.dot, ];
  let tmp17 = null != tmp2;
  if (tmp17) {
    tmp17 = !tmp7;
  }
  let dotDismissed = !tmp17;
  if (!tmp17) {
    dotDismissed = tmp.dotDismissed;
  }
  items4[1] = dotDismissed;
  obj.style = items4;
  const items5 = [callback2(closure_5, obj), ];
  obj1 = { style: tmp.duration, variant: token };
  let str = "text-feedback-critical";
  if (!tmp11[0]) {
    let str2 = "text-overlay-light";
    if (chatInputFloating) {
      str2 = "text-default";
    }
    str = str2;
  }
  obj1.color = str;
  obj1.tabularNumbers = true;
  obj1.children = memo;
  items5[1] = callback2(animationValue(first[17]).Text, obj1);
  obj.children = items5;
  const tmp14Result = closure_15(importDefault(first[8]).View, obj);
  let tmp20 = tmp14Result;
  if (!chatInputFloating) {
    obj2 = { theme: ThemeTypes.DARK, children: tmp14Result };
    tmp20 = callback2(animationValue(first[18]).ThemeContextProvider, obj2);
  }
  return tmp20;
}
const View = get_ActivityIndicator.View;
({ VOICE_RECORDING_MAX_DURATION_MILLIS: closure_8, VOICE_RECORDING_MAX_DURATION_OFFSET: closure_9, VOICE_RECORDING_REALLY_WARN_DURATION_MILLIS: closure_10, VOICE_RECORDING_WARN_DURATION_MILLIS: closure_11, WAVEFORM_WAVE_MAX_VALUE: closure_12 } = VoiceMessageAnimationState);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let closure_16 = require("module_3992").createAnimatedComponent(get_ActivityIndicator.ActivityIndicator);
let obj = {};
obj = { height: "100%", flexDirection: "row", alignItems: "center", paddingVertical: require("_createForOfIteratorHelperLoose").modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_VERTICAL, paddingHorizontal: require("_createForOfIteratorHelperLoose").modules.mobile.VOICE_MESSAGE_RECORDING_PILL_PADDING_HORIZONTAL, gap: require("_createForOfIteratorHelperLoose").modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP, borderRadius: require("_createForOfIteratorHelperLoose").modules.mobile.VOICE_MESSAGE_RECORDING_PILL_BORDER_RADIUS, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: require("_createForOfIteratorHelperLoose").modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_CHATINPUT_BORDER_DEFAULT };
obj.container = obj;
obj.loading = { position: "absolute", left: 12 };
let obj1 = { height: 6, width: 6, backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400, marginHorizontal: 4, borderRadius: 6 };
obj.dot = obj1;
obj.dotDismissed = { backgroundColor: "transparent" };
_createForOfIteratorHelperLoose = { flex: 1, height: "100%", overflow: "hidden", justifyContent: "flex-end", flexDirection: "row", alignItems: "center", marginLeft: require("_createForOfIteratorHelperLoose").modules.mobile.VOICE_MESSAGE_RECORDING_WAVEFORM_MARGIN_LEFT };
obj.waveformContainer = _createForOfIteratorHelperLoose;
obj.waveformBar = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_VOICE_MESSAGE_RECORDING_WAVEFORM_BAR_BACKGROUND, borderRadius: 1 };
obj.durationContainer = { flexDirection: "row", alignItems: "center" };
let obj4 = {};
set = set.isAndroid();
const mobile = require("_createForOfIteratorHelperLoose").modules.mobile;
obj4.lineHeight = set ? mobile.VOICE_MESSAGE_DURATION_LINE_HEIGHT_ANDROID : mobile.VOICE_MESSAGE_DURATION_LINE_HEIGHT_IOS;
let str;
if (set.isAndroid()) {
  str = "center";
}
obj4.textAlignVertical = str;
obj.duration = obj4;
let closure_17 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_18 = { code: "function VoiceMessageChatTsx1(){const{animatedHeight,animatedWidth,animatedMargin}=this.__closure;return{height:animatedHeight.get(),width:animatedWidth.get(),marginRight:animatedMargin.get()};}" };
let closure_19 = { WARN: 0, [0]: "WARN", REALLY_WARN: 1, [1]: "REALLY_WARN", ENDED: 2, [2]: "ENDED" };
let closure_20 = { code: "function VoiceMessageChatTsx2(){const{animationValue}=this.__closure;return{opacity:animationValue.get()};}" };
let closure_21 = { code: "function VoiceMessageChatTsx3(){const{initialAnimation,isRecording}=this.__closure;return initialAnimation.get()===1&&isRecording;}" };
let closure_22 = { code: "function VoiceMessageChatTsx4(result,previous){const{animationValue,withTiming,Easing,loadingOpacity}=this.__closure;if(result&&result!==previous){animationValue.set(withTiming(1,{easing:Easing.quad,duration:200}));loadingOpacity.set(0);}}" };
let closure_23 = { code: "function VoiceMessageChatTsx5(){const{initialAnimation,backgroundColor}=this.__closure;return{width:80+20*initialAnimation.get()+\"%\",...(backgroundColor!=null?{backgroundColor:backgroundColor.get()}:{})};}" };
let closure_24 = { code: "function VoiceMessageChatTsx6(){const{loadingOpacity}=this.__closure;return{opacity:loadingOpacity.get()};}" };
let obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_VOICE_MESSAGE_RECORDING_WAVEFORM_BAR_BACKGROUND, borderRadius: 1 };
let result = set.fileFinishedImporting("modules/voice_messages/native/components/VoiceMessageChat.tsx");

export default importAllResult.memo((isRecording) => {
  let leftAccessory;
  let rightAccessory;
  isRecording = isRecording.isRecording;
  const initialAnimation = isRecording.initialAnimation;
  const backgroundColor = isRecording.backgroundColor;
  ({ leftAccessory, rightAccessory } = isRecording);
  let tmp = callback3();
  let obj = isRecording(backgroundColor[15]);
  const token = obj.useToken(initialAnimation(backgroundColor[10]).colors.MOBILE_VOICE_MESSAGE_RECORDING_SPINNER_COLOR);
  let obj1 = isRecording(backgroundColor[8]);
  const sharedValue = obj1.useSharedValue(0);
  const items = [sharedValue, isRecording];
  const effect = sharedValue1.useEffect(() => {
    if (!timeout) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        let obj = isRecording(backgroundColor[13]);
        obj = { easing: isRecording(backgroundColor[8]).Easing.quad, duration: 200 };
        const result = outer1_3.set(obj.withTiming(1, obj));
      }, 1000);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, items);
  sharedValue1 = isRecording(backgroundColor[8]).useSharedValue(0);
  const obj3 = isRecording(backgroundColor[8]);
  class A {
    constructor() {
      tmp = 1 === initialAnimation.get() && isRecording;
      return tmp;
    }
  }
  A.__closure = { initialAnimation, isRecording };
  A.__workletHash = 7599681139161;
  A.__initData = closure_21;
  const fn = function h(arg0, arg1) {
    let tmp = arg0;
    if (arg0) {
      tmp = arg0 !== arg1;
    }
    if (tmp) {
      let obj = isRecording(backgroundColor[13]);
      obj = { easing: isRecording(backgroundColor[8]).Easing.quad, duration: 200 };
      const result = sharedValue1.set(obj.withTiming(1, obj));
      const result1 = sharedValue.set(0);
    }
  };
  obj = { animationValue: sharedValue1, withTiming: isRecording(backgroundColor[13]).withTiming, Easing: isRecording(backgroundColor[8]).Easing, loadingOpacity: sharedValue };
  fn.__closure = obj;
  fn.__workletHash = 7661977794788;
  fn.__initData = closure_22;
  const animatedReaction = isRecording(backgroundColor[8]).useAnimatedReaction(A, fn);
  const obj4 = isRecording(backgroundColor[8]);
  class I {
    constructor() {
      obj = { width: `${80}${20 * initialAnimation.get()}%` };
      if (null != backgroundColor) {
        obj = {};
        tmp = backgroundColor;
        obj.backgroundColor = backgroundColor.get();
        obj1 = obj;
      } else {
        obj1 = {};
      }
      merged = Object.assign(obj1);
      return obj;
    }
  }
  I.__closure = { initialAnimation, backgroundColor };
  I.__workletHash = 3621425956686;
  I.__initData = closure_23;
  const animatedStyle = isRecording(backgroundColor[8]).useAnimatedStyle(I);
  const obj6 = isRecording(backgroundColor[8]);
  const fn2 = function f() {
    return { opacity: sharedValue.get() };
  };
  fn2.__closure = { loadingOpacity: sharedValue };
  fn2.__workletHash = 17421928475897;
  fn2.__initData = closure_24;
  const animatedStyle1 = isRecording(backgroundColor[8]).useAnimatedStyle(fn2);
  obj = { style: items1 };
  items1 = [tmp.container, animatedStyle];
  let tmp10 = null;
  if (!isRecording) {
    obj1 = {};
    const items2 = [tmp.loading, animatedStyle1];
    obj1.style = items2;
    obj1.color = token;
    obj1.size = "small";
    tmp10 = callback2(closure_16, obj1);
  }
  const items3 = [tmp10, leftAccessory, callback2(Duration, { animationValue: sharedValue1 }), callback2(Waveform, {}), rightAccessory];
  obj.children = items3;
  return closure_15(initialAnimation(backgroundColor[8]).View, obj);
});
