// Module ID: 11661
// Function ID: 90476
// Name: WaveformBar
// Dependencies: []

// Module 11661 (WaveformBar)
function WaveformBar(value) {
  value = value.value;
  const arg1 = value;
  const tmp = callback3();
  const sharedValue = arg1(dependencyMap[8]).useSharedValue(0);
  const importDefault = sharedValue;
  const obj = arg1(dependencyMap[8]);
  const sharedValue1 = arg1(dependencyMap[8]).useSharedValue(0);
  const dependencyMap = sharedValue1;
  const obj2 = arg1(dependencyMap[8]);
  const sharedValue2 = arg1(dependencyMap[8]).useSharedValue(0);
  let closure_3 = sharedValue2;
  const obj3 = arg1(dependencyMap[8]);
  const fn = function o() {
    return { height: sharedValue.get(), width: sharedValue1.get(), marginRight: sharedValue2.get() };
  };
  fn.__closure = { animatedHeight: sharedValue, animatedWidth: sharedValue1, animatedMargin: sharedValue2 };
  fn.__workletHash = 8768145898720;
  fn.__initData = closure_18;
  const items = [sharedValue, value];
  const animatedStyle = arg1(dependencyMap[8]).useAnimatedStyle(fn);
  const effect = importAllResult.useEffect(() => {
    const result = 20 * Math.min(1, value / closure_12 * 1.25);
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
  return callback2(importDefault(dependencyMap[8]).View, { style });
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
      return callback2(closure_25, { value }, tmp2);
    })
  });
}
function Duration(animationValue) {
  animationValue = animationValue.animationValue;
  const arg1 = animationValue;
  const tmp = callback3();
  const tmp2 = useVoiceMessagesUIStore((startTimeMillis) => startTimeMillis.startTimeMillis);
  const importDefault = tmp2;
  const tmp3 = callback(importAllResult.useState(() => {
    let num = 0;
    if (null != tmp2) {
      const _Date = Date;
      num = Date.now() - tmp2;
    }
    return num;
  }), 2);
  const first = tmp3[0];
  const dependencyMap = first;
  const callback = tmp3[1];
  const tmp5 = callback(importAllResult.useState(undefined), 2);
  const first1 = tmp5[0];
  let closure_5 = tmp5[1];
  const tmp7 = useVoiceMessagesUIStore((savedVoiceMessageUploadData) => null != savedVoiceMessageUploadData.savedVoiceMessageUploadData);
  let closure_6 = tmp7;
  let obj = arg1(dependencyMap[14]);
  const items = [tmp2, tmp7];
  const token = obj.useToken(importDefault(dependencyMap[10]).modules.mobile.VOICE_MESSAGE_DURATION_TEXT_STYLE);
  const effect = importAllResult.useEffect(() => {
    if (tmp7) {
      callback(closure_8 + closure_9);
      callback2(constants.ENDED);
    } else {
      const _setInterval = setInterval;
      const interval = setInterval(() => {
        if (null != closure_1) {
          const _Date = Date;
          const diff = Date.now() - closure_1;
          callback(diff);
          if (diff > closure_10) {
            callback2(constants.REALLY_WARN);
          } else if (diff > closure_11) {
            callback2(constants.WARN);
          }
        }
      }, 100);
      return () => {
        clearInterval(closure_0);
      };
    }
  }, items);
  const items1 = [first];
  const memo = importAllResult.useMemo(() => animationValue(first[15]).getTimeFormat(first / 1000, { padMinutes: false }), items1);
  const tmp11 = callback(first1.useState(false), 2);
  const useVoiceMessagesUIStore = tmp11[1];
  const items2 = [first1];
  const effect1 = importAllResult.useEffect(() => {
    if (null != first1) {
      if (first1 !== constants.ENDED) {
        let num = 1000;
        if (!tmp7.useReducedMotion) {
          let num2 = 250;
          if (first1 === constants.WARN) {
            num2 = 500;
          }
          num = num2;
        }
        function flash() {
          callback((arg0) => !arg0);
          const timeout = setTimeout(flash, num);
        }
        const first = flash;
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
  let obj1 = arg1(dependencyMap[8]);
  class U {
    constructor() {
      obj = { opacity: animationValue.get() };
      return obj;
    }
  }
  U.__closure = { animationValue };
  U.__workletHash = 4012974382717;
  U.__initData = closure_20;
  const animatedStyle = obj1.useAnimatedStyle(U);
  obj = { theme: ThemeTypes.DARK };
  obj = { style: items3 };
  const items3 = [tmp.durationContainer, animatedStyle];
  obj1 = {};
  const items4 = [tmp.dot, ];
  let tmp18 = null != tmp2;
  if (tmp18) {
    tmp18 = !tmp7;
  }
  let dotDismissed = !tmp18;
  if (!tmp18) {
    dotDismissed = tmp.dotDismissed;
  }
  items4[1] = dotDismissed;
  obj1.style = items4;
  const items5 = [closure_14(closure_5, obj1), ];
  const obj2 = { style: tmp.duration, variant: token };
  let str = "text-overlay-light";
  if (tmp11[0]) {
    str = "text-feedback-critical";
  }
  obj2.color = str;
  obj2.tabularNumbers = true;
  obj2.children = memo;
  items5[1] = closure_14(arg1(dependencyMap[17]).Text, obj2);
  obj.children = items5;
  obj.children = closure_15(importDefault(dependencyMap[8]).View, obj);
  return closure_14(arg1(dependencyMap[16]).ThemeContextProvider, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
const View = tmp2.View;
let closure_6 = importDefault(dependencyMap[3]);
const useVoiceMessagesUIStore = arg1(dependencyMap[4]).useVoiceMessagesUIStore;
({ VOICE_RECORDING_MAX_DURATION_MILLIS: closure_8, VOICE_RECORDING_MAX_DURATION_OFFSET: closure_9, VOICE_RECORDING_REALLY_WARN_DURATION_MILLIS: closure_10, VOICE_RECORDING_WARN_DURATION_MILLIS: closure_11, WAVEFORM_WAVE_MAX_VALUE: closure_12 } = arg1(dependencyMap[5]));
const ThemeTypes = arg1(dependencyMap[6]).ThemeTypes;
const tmp3 = arg1(dependencyMap[5]);
({ jsx: closure_14, jsxs: closure_15 } = arg1(dependencyMap[7]));
const tmp4 = arg1(dependencyMap[7]);
let closure_16 = importDefault(dependencyMap[8]).createAnimatedComponent(tmp2.ActivityIndicator);
let obj2 = arg1(dependencyMap[9]);
let obj = {};
obj = { paddingVertical: importDefault(dependencyMap[10]).modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_VERTICAL, borderRadius: importDefault(dependencyMap[10]).radii.xxl };
obj.container = obj;
obj.loading = {};
const importDefaultResult = importDefault(dependencyMap[8]);
obj.dot = { backgroundColor: importDefault(dependencyMap[10]).unsafe_rawColors.RED_400 };
obj.dotDismissed = { backgroundColor: "transparent" };
obj.waveformContainer = {};
obj2 = { backgroundColor: importDefault(dependencyMap[10]).colors.WHITE, borderRadius: 1 };
obj.waveformBar = obj2;
obj.durationContainer = { -9223372036854775808: true, filter: true };
const obj3 = {};
const obj1 = { backgroundColor: importDefault(dependencyMap[10]).unsafe_rawColors.RED_400 };
const obj9 = arg1(dependencyMap[11]);
const mobile = importDefault(dependencyMap[10]).modules.mobile;
obj3.lineHeight = arg1(dependencyMap[11]).isAndroid() ? mobile.VOICE_MESSAGE_DURATION_LINE_HEIGHT_ANDROID : mobile.VOICE_MESSAGE_DURATION_LINE_HEIGHT_IOS;
const isAndroidResult = arg1(dependencyMap[11]).isAndroid();
let str;
if (obj10.isAndroid()) {
  str = "center";
}
obj3.textAlignVertical = str;
obj.duration = obj3;
let closure_17 = obj2.createStyles(obj);
let closure_18 = { code: "function VoiceMessageChatTsx1(){const{animatedHeight,animatedWidth,animatedMargin}=this.__closure;return{height:animatedHeight.get(),width:animatedWidth.get(),marginRight:animatedMargin.get()};}" };
let closure_19 = { WARN: 0, [0]: "WARN", REALLY_WARN: 1, [1]: "REALLY_WARN", ENDED: 2, [2]: "ENDED" };
let closure_20 = { code: "function VoiceMessageChatTsx2(){const{animationValue}=this.__closure;return{opacity:animationValue.get()};}" };
let closure_21 = { code: "function VoiceMessageChatTsx3(){const{initialAnimation,isRecording}=this.__closure;return initialAnimation.get()===1&&isRecording;}" };
let closure_22 = { code: "function VoiceMessageChatTsx4(result,previous){const{animationValue,withTiming,Easing,loadingOpacity}=this.__closure;if(result&&result!==previous){animationValue.set(withTiming(1,{easing:Easing.quad,duration:200}));loadingOpacity.set(0);}}" };
let closure_23 = { code: "function VoiceMessageChatTsx5(){const{initialAnimation,backgroundColor}=this.__closure;return{width:80+20*initialAnimation.get()+\"%\",backgroundColor:backgroundColor.get()};}" };
let closure_24 = { code: "function VoiceMessageChatTsx6(){const{loadingOpacity}=this.__closure;return{opacity:loadingOpacity.get()};}" };
const obj10 = arg1(dependencyMap[11]);
const memoResult = importAllResult.memo((isRecording) => {
  isRecording = isRecording.isRecording;
  const arg1 = isRecording;
  const initialAnimation = isRecording.initialAnimation;
  const importDefault = initialAnimation;
  const backgroundColor = isRecording.backgroundColor;
  const dependencyMap = backgroundColor;
  const tmp = callback3();
  let obj = arg1(dependencyMap[8]);
  const sharedValue = obj.useSharedValue(0);
  let closure_3 = sharedValue;
  const items = [sharedValue, isRecording];
  const effect = importAllResult.useEffect(() => {
    if (!timeout) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        let obj = callback(closure_2[13]);
        obj = { easing: callback(closure_2[8]).Easing.quad, duration: 200 };
        const result = closure_3.set(obj.withTiming(1, obj));
      }, 1000);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, items);
  let obj1 = arg1(dependencyMap[8]);
  const sharedValue1 = obj1.useSharedValue(0);
  const fn = function _() {
    return 1 === initialAnimation.get() && isRecording;
  };
  fn.__closure = { initialAnimation, isRecording };
  fn.__workletHash = 7599681139161;
  fn.__initData = closure_21;
  const fn2 = function c(arg0, arg1) {
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
  obj = { animationValue: sharedValue1, withTiming: arg1(dependencyMap[13]).withTiming, Easing: arg1(dependencyMap[8]).Easing, loadingOpacity: sharedValue };
  fn2.__closure = obj;
  fn2.__workletHash = 7661977794788;
  fn2.__initData = closure_22;
  const animatedReaction = arg1(dependencyMap[8]).useAnimatedReaction(fn, fn2);
  const importAllResult = sharedValue1;
  const obj3 = arg1(dependencyMap[8]);
  const fn3 = function f() {
    return { width: `${80}${20 * closure_1.get()}%`, backgroundColor: backgroundColor.get() };
  };
  fn3.__closure = { initialAnimation, backgroundColor };
  fn3.__workletHash = 9739486182352;
  fn3.__initData = closure_23;
  const animatedStyle = arg1(dependencyMap[8]).useAnimatedStyle(fn3);
  const obj5 = arg1(dependencyMap[8]);
  class E {
    constructor() {
      obj = { opacity: closure_3.get() };
      return obj;
    }
  }
  E.__closure = { loadingOpacity: sharedValue };
  E.__workletHash = 17421928475897;
  E.__initData = closure_24;
  const animatedStyle1 = arg1(dependencyMap[8]).useAnimatedStyle(E);
  obj = { style: items1 };
  const items1 = [tmp.container, animatedStyle];
  let tmp9 = null;
  if (!isRecording) {
    obj1 = {};
    const items2 = [tmp.loading, animatedStyle1];
    obj1.style = items2;
    obj1.color = importDefault(dependencyMap[10]).unsafe_rawColors.WHITE;
    obj1.size = "small";
    tmp9 = callback2(closure_16, obj1);
  }
  const items3 = [tmp9, callback2(Duration, { animationValue: sharedValue1 }), callback2(Waveform, {})];
  obj.children = items3;
  return closure_15(importDefault(dependencyMap[8]).View, obj);
});
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/voice_messages/native/components/VoiceMessageChat.tsx");

export default memoResult;
