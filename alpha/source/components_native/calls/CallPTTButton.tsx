// Module ID: 11347
// Function ID: 11348
// Name: CallPTTButton
// Dependencies: [32, 19, 4990, 2135, 5884, 1072, 21, 5141, 575, 5138, 504, 11329, 11139, 11348, 5426, 1705, 1652, 1187, 1113, 2]

// Module 11347 (CallPTTButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import MediaEngineActionCreators from "MediaEngineActionCreators" /* 11348 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import MediaEngineStore from "MediaEngineStore" /* 2135 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5884 */;
import createStyles_mod from "createStyles" /* 5141 */;
import ColorUtils_mod from "ColorUtils" /* 5138 */;
import size from "module_2" /* 2 */;

let ColorUtils;
let obj3;
let obj4;
let obj5;
let react = react_mod;
const InputModes = Constants.InputModes;
const jsx = Fragment.jsx;
const CallPTTButtonLooks = { BRAND: "brand", BLUR: "blur" };
let createStyles = createStyles_mod;
let obj2 = { button: { margin: 13 }, container: obj3, buttonBlur: { backgroundColor: "transparent" }, buttonBlurPressed: obj4, textStyle: { fontSize: 16 }, brandButtonContainer: obj5 };
obj3 = { borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.24) };
createStyles = createStyles.createStyles;
ColorUtils = ColorUtils_mod;
obj4 = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.6) };
ColorUtils = ColorUtils_mod;
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_11 = createStyles(obj2);
let closure_12 = { code: "(function CallPTTButtonTsx1(){let[scheduleOnRN,setDragging,setPressed,setIsSwipeToChatDisabled]=this.__closure;scheduleOnRN(setDragging,true);scheduleOnRN(setPressed,false);if(setIsSwipeToChatDisabled!=null){scheduleOnRN(setIsSwipeToChatDisabled,false);}})" };
let closure_13 = { code: "(function CallPTTButtonTsx2(){let[scheduleOnRN,setDragging]=this.__closure;scheduleOnRN(setDragging,false);})" };
const memoResult = react.memo((look) => {
  let closure_4;
  let intl;
  let obj;
  let sendCallback;
  let style;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp27;
  let tmp28;
  let tmp29;
  let BRAND = look.look;
  if (BRAND === undefined) {
    let tmp = obj;
    BRAND = obj.BRAND;
  }
  ({ style, sendCallback } = look);
  const stopCallback = look.stopCallback;
  let stateFromStores1;
  let first;
  react = undefined;
  let first1;
  let mode;
  let ref;
  let prop;
  let tmp2 = closure_11();
  obj = sendCallback(stateFromStores1[10]);
  const items = [mode];
  const stateFromStores = obj.useStateFromStores(items, () => mode.getMode());
  const items1 = [ref];
  const obj2 = sendCallback(stateFromStores1[10]);
  stateFromStores1 = obj2.useStateFromStores(items1, () => ref.getChannelId());
  const items2 = [first1];
  const items3 = [stateFromStores1];
  const obj3 = sendCallback(stateFromStores1[10]);
  const stateFromStores2 = obj3.useStateFromStores(items2, () => ChannelStore.getChannel(stateFromStores1), items3);
  const tmp8 = stopCallback(stateFromStores1[11])(stateFromStores1);
  const tmp9 = first(react.useState(false), 2);
  first = tmp9[0];
  react = tmp11;
  const tmp12 = first(react.useState(false), 2);
  first1 = tmp12[0];
  mode = tmp14;
  let isGuildStageVoiceResult;
  const tmp7 = stopCallback;
  if (stateFromStores2 != null) {
    isGuildStageVoiceResult = stateFromStores2.isGuildStageVoice();
  }
  if (isGuildStageVoiceResult) {
    isGuildStageVoiceResult = !tmp8;
  }
  ref = obj5.useRef(false);
  const tmp3Result = sendCallback(stateFromStores1[12]);
  const voiceChatNavigationContext = tmp3Result.useVoiceChatNavigationContext();
  prop = undefined;
  if (voiceChatNavigationContext != null) {
    prop = voiceChatNavigationContext.setIsSwipeToChatDisabled;
  }
  const items4 = [ref, first, first1, sendCallback, stopCallback];
  const effect = obj5.useEffect(() => {
    const tmp2 = ref;
    if ((first || first1) !== ref.current) {
      const obj = MediaEngineActionCreators;
      obj.setPushToTalkState(MediaEngineStore.getMediaEngine(), first || first1);
      if (first || first1) {
        if (sendCallback != null) {
          sendCallback();
        }
      } else if (stopCallback != null) {
        stopCallback();
      }
    }
    tmp2.current = first || first1;
  }, items4);
  const Gesture = tmp3(tmp4[14]).Gesture;
  const items5 = [closure_12, , , , ];
  const onStart = Gesture.Pan().onStart;
  Gesture.Pan();
  items5[1] = sendCallback(stateFromStores1[15]).scheduleOnRN;
  items5[2] = tmp12[1];
  items5[3] = tmp9[1];
  items5[4] = prop;
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp21, tmp22, tmp23, tmp24, tmp25] = items5;
  class CallPTTButtonTsx1 {
    constructor() {
      _undefined(c1, true);
      _undefined(c2, false);
      const tmp = _undefined;
      if (null != c3) {
        tmp(c3, false);
      }
    }
  }
  const items6 = [tmp22, tmp23, tmp24, tmp25];
  CallPTTButtonTsx1.__closure = items6;
  CallPTTButtonTsx1.__workletHash = 7400317648187;
  CallPTTButtonTsx1.__initData = tmp21;
  onStart(CallPTTButtonTsx1);
  const items7 = [closure_13, tmp3(tmp4[15]).scheduleOnRN, tmp12[1]];
  c0 = undefined;
  c1 = undefined;
  [tmp27, tmp28, tmp29] = items7;
  class CallPTTButtonTsx2 {
    constructor() {
      _undefined(c1, false);
    }
  }
  const items8 = [tmp28, tmp29];
  CallPTTButtonTsx2.__closure = items8;
  CallPTTButtonTsx2.__workletHash = 9346672580777;
  CallPTTButtonTsx2.__initData = tmp27;
  let tmp31 = null;
  if (null != stateFromStores1) {
    tmp31 = null;
    if (prop.VOICE_ACTIVITY !== stateFromStores) {
      tmp31 = null;
      if (!isGuildStageVoiceResult) {
        let buttonBlurPressed;
        let items11;
        if (BRAND === obj.BRAND) {
          const items9 = [tmp2.brandButtonContainer];
          const items10 = [tmp2.button, style];
          buttonBlurPressed = items10;
          items11 = items9;
        } else {
          items11 = [, , ];
          ({ button: arr10[0], container: arr10[1] } = tmp2);
          items11[2] = style;
          if (!first) {
            if (!first1) {
              buttonBlurPressed = tmp2.buttonBlur;
            }
          }
          buttonBlurPressed = tmp2.buttonBlurPressed;
        }
        const GestureDetector = tmp3(tmp4[14]).GestureDetector;
        const View = tmp7(tmp4[16]).View;
        ({
          style: buttonBlurPressed,
          textStyle: tmp2.textStyle,
          text: intl.string(sendCallback(stateFromStores1[18]).t.Q8gkVL),
          onTouchStart: function handleStartSend() {
                  closure_4(true);
                  mode(false);
                  if (prop != null) {
                    prop(true);
                  }
                },
          onTouchEnd: function handleStopSend() {
                  closure_4(false);
                  if (prop != null) {
                    prop(false);
                  }
                },
          darkenOnPress: true
        });
        const Button = tmp3(tmp4[17]).Button;
        intl = tmp3(tmp4[18]).intl;
        tmp31 = <GestureDetector gesture={tmp30}>{null}</GestureDetector>;
      }
    }
  }
  return tmp31;
});
const result = size.fileFinishedImporting("components_native/calls/CallPTTButton.tsx");

export default memoResult;
export { CallPTTButtonLooks };
