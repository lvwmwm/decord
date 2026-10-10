// Module ID: 11038
// Function ID: 11039
// Name: CallPTTButton
// Dependencies: [32, 19, 2065, 2012, 5110, 1085, 21, 5092, 587, 4967, 558, 576, 504, 10849, 10359, 11039, 4850, 6334, 1126, 1200, 2]

// Module 11038 (CallPTTButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import MediaEngineActionCreators from "MediaEngineActionCreators" /* 11039 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import MediaEngineStore_mod from "MediaEngineStore" /* 2012 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5110 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ColorUtils_mod from "ColorUtils" /* 4967 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ColorUtils;
let obj3;
let obj4;
let obj5;
let react = react_mod;
let MediaEngineStore = MediaEngineStore_mod;
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
const __initData = { code: "function CallPTTButtonTsx1(){const{runOnJS,setDragging}=this.__closure;runOnJS(setDragging)(false);}" };
const __initData2 = { code: "function CallPTTButtonTsx2(){const{runOnJS,setDragging,setPressed,setIsSwipeToChatDisabled}=this.__closure;runOnJS(setDragging)(true);runOnJS(setPressed)(false);if(setIsSwipeToChatDisabled!=null){runOnJS(setIsSwipeToChatDisabled)(false);}}" };
const __initData3 = { code: "function CallPTTButtonTsx3(){const{runOnJS,setDragging}=this.__closure;runOnJS(setDragging)(false);}" };
const __initData4 = { code: "function CallPTTButtonTsx4(){const{runOnJS,setDragging,setPressed,setIsSwipeToChatDisabled}=this.__closure;runOnJS(setDragging)(true);runOnJS(setPressed)(false);if(setIsSwipeToChatDisabled!=null){runOnJS(setIsSwipeToChatDisabled)(false);}}" };
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((stopCallback) => {
  let closure_4;
  let first;
  let first1;
  let look;
  let mode;
  let ref;
  let sendCallback;
  let stateFromStores1;
  let style;
  let tmp10;
  let tmp11;
  let tmp15;
  let tmp17;
  let tmp18;
  let tmp6;
  let tmp7;
  let tmp = sendCallback;
  let tmp2 = stateFromStores1;
  let obj = sendCallback(stateFromStores1[11]);
  const cResult = obj.c(42);
  ({ look, style, sendCallback } = stopCallback);
  stopCallback = stopCallback.stopCallback;
  if (undefined === look) {
    look = obj.BRAND;
  }
  const tmp5 = closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    class T {
      constructor() {
        return mode.getMode();
      }
    }
    cResult[0] = items;
    cResult[1] = T;
    tmp6 = items;
    tmp7 = T;
  } else {
    [tmp6, tmp7] = cResult;
  }
  let tmpResult = tmp(tmp2[12]);
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ref];
    class T {
      constructor() {
        return mode.getMode();
      }
    }
    cResult[2] = items1;
    cResult[3] = tmp13;
    tmp11 = tmp13;
    tmp10 = items1;
  } else {
    tmp10 = cResult[2];
    tmp11 = cResult[3];
  }
  const tmpResult4 = tmp(tmp2[12]);
  stateFromStores1 = tmpResult4.useStateFromStores(tmp10, tmp11);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [first1];
    class T {
      constructor() {
        return mode.getMode();
      }
    }
    cResult[4] = items2;
    tmp15 = items2;
  } else {
    tmp15 = cResult[4];
  }
  if (cResult[5] !== stateFromStores1) {
    const fn = function w() {
      return ChannelStore.getChannel(stateFromStores1);
    };
    const items3 = [stateFromStores1];
    class T {
      constructor() {
        return mode.getMode();
      }
    }
    cResult[5] = stateFromStores1;
    cResult[6] = fn;
    cResult[7] = items3;
    tmp18 = items3;
    tmp17 = fn;
  } else {
    tmp17 = cResult[6];
    tmp18 = cResult[7];
  }
  const tmpResult5 = tmp(tmp2[12]);
  const stateFromStores2 = tmpResult5.useStateFromStores(tmp15, tmp17, tmp18);
  const tmp19 = stopCallback(tmp2[13])(stateFromStores1);
  const tmp20 = first(react.useState(false), 2);
  first = tmp20[0];
  react = tmp22;
  const tmp23 = first(react.useState(false), 2);
  first1 = tmp23[0];
  MediaEngineStore = tmp25;
  let isGuildStageVoiceResult;
  if (stateFromStores2 != null) {
    isGuildStageVoiceResult = stateFromStores2.isGuildStageVoice();
  }
  if (isGuildStageVoiceResult) {
    isGuildStageVoiceResult = !tmp19;
  }
  ref = obj6.useRef(false);
  const tmpResult6 = tmp(tmp2[14]);
  const voiceChatNavigationContext = tmpResult6.useVoiceChatNavigationContext();
  let prop;
  if (voiceChatNavigationContext != null) {
    prop = voiceChatNavigationContext.setIsSwipeToChatDisabled;
  }
  if (cResult[8] === first1) {
    if (cResult[9] === first) {
      if (cResult[10] === sendCallback) {
        let tmp30;
        let tmp31;
        if (cResult[11] === stopCallback) {
          tmp30 = cResult[12];
          tmp31 = cResult[13];
        }
        const effect = obj6.useEffect(tmp31, tmp30);
        if (cResult[14] !== prop) {
          function handleStartSend() {
            closure_4(true);
            mode(false);
            if (prop != null) {
              prop(true);
            }
          }
          cResult[14] = prop;
          class T {
            constructor() {
              return mode.getMode();
            }
          }
          cResult[15] = handleStartSend;
        }
        class T {
          constructor() {
            return mode.getMode();
          }
        }
        if (cResult[18] !== prop) {
          let tmp35;
          const _Symbol = Symbol;
          if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
            class CallPTTButtonTsx1 {
              constructor() {
                obj = closure_0(closure_2[16]);
                tmp = obj.runOnJS(closure_6)(false);
                return;
              }
            }
            let obj2 = { runOnJS: tmp(tmp2[16]).runOnJS, setDragging: null };
            class T {
              constructor() {
                return mode.getMode();
              }
            }
            CallPTTButtonTsx1.__closure = obj2;
            CallPTTButtonTsx1.__workletHash = 8439106360958;
            CallPTTButtonTsx1.__initData = __initData;
            cResult[20] = CallPTTButtonTsx1;
            tmp35 = CallPTTButtonTsx1;
          } else {
            class CallPTTButtonTsx1 {
              constructor() {
                obj = closure_0(closure_2[16]);
                tmp = obj.runOnJS(closure_6)(false);
                return;
              }
            }
          }
          class T {
            constructor() {
              return mode.getMode();
            }
          }
          function et() {
            const obj = ReanimatedRexport;
            obj.runOnJS(mode)(true);
            const obj2 = ReanimatedRexport;
            obj2.runOnJS(closure_4)(false);
            if (null != prop) {
              const tmpResult = ReanimatedRexport;
              tmpResult.runOnJS(tmp5)(false);
            }
          }
          const obj3 = { runOnJS: tmp(tmp2[16]).runOnJS, setDragging: tmp23[1], setPressed: tmp20[1], setIsSwipeToChatDisabled: prop };
          const onStart = obj9.Pan().onStart;
          obj9.Pan();
          et.__closure = obj3;
          et.__workletHash = 10056118853836;
          et.__initData = __initData2;
          const onStartResult = onStart(et);
          cResult[18] = prop;
          cResult[19] = onStartResult.onEnd(tmp35);
          const onEndResult = onStartResult.onEnd(tmp35);
        } else {
          class CallPTTButtonTsx1 {
            constructor() {
              obj = closure_0(closure_2[16]);
              tmp = obj.runOnJS(closure_6)(false);
              return;
            }
          }
        }
        if (null != stateFromStores1) {
          class CallPTTButtonTsx1 {
            constructor() {
              obj = closure_0(closure_2[16]);
              tmp = obj.runOnJS(closure_6)(false);
              return;
            }
          }
          if (prop.VOICE_ACTIVITY !== stateFromStores) {
            class CallPTTButtonTsx1 {
              constructor() {
                obj = closure_0(closure_2[16]);
                tmp = obj.runOnJS(closure_6)(false);
                return;
              }
            }
          }
        }
        return null;
      }
    }
  }
  class A {
    constructor() {
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
    }
  }
  const items4 = [ref, first, first1, sendCallback, stopCallback];
  cResult[8] = first1;
  cResult[9] = first;
  cResult[10] = sendCallback;
  cResult[11] = stopCallback;
  cResult[12] = items4;
  cResult[13] = A;
  tmp31 = A;
  tmp30 = items4;
}) : ((look) => {
  let closure_4;
  let intl;
  let obj;
  let sendCallback;
  let style;
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
  obj = sendCallback(stateFromStores1[12]);
  const items = [mode];
  const stateFromStores = obj.useStateFromStores(items, () => mode.getMode());
  let obj2 = sendCallback(stateFromStores1[12]);
  const items1 = [ref];
  stateFromStores1 = obj2.useStateFromStores(items1, () => ref.getChannelId());
  const items2 = [first1];
  const items3 = [stateFromStores1];
  const obj3 = sendCallback(stateFromStores1[12]);
  const stateFromStores2 = obj3.useStateFromStores(items2, () => ChannelStore.getChannel(stateFromStores1), items3);
  const tmp8 = stopCallback(stateFromStores1[13])(stateFromStores1);
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
  const tmp3Result = sendCallback(stateFromStores1[14]);
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
  const Gesture = tmp3(tmp4[17]).Gesture;
  const PanResult = Gesture.Pan();
  class G {
    constructor() {
      const obj = ReanimatedRexport;
      obj.runOnJS(mode)(true);
      const obj2 = ReanimatedRexport;
      obj2.runOnJS(closure_4)(false);
      if (null != prop) {
        const tmpResult = ReanimatedRexport;
        tmpResult.runOnJS(tmp5)(false);
      }
    }
  }
  G.__closure = { runOnJS: sendCallback(stateFromStores1[16]).runOnJS, setDragging: tmp12[1], setPressed: tmp9[1], setIsSwipeToChatDisabled: prop };
  G.__workletHash = 12037532002826;
  G.__initData = __initData4;
  ({ runOnJS: sendCallback(stateFromStores1[16]).runOnJS, setDragging: tmp12[1], setPressed: tmp9[1], setIsSwipeToChatDisabled: prop });
  PanResult.onStart(G);
  class F {
    constructor() {
      const obj = ReanimatedRexport;
      obj.runOnJS(mode)(false);
    }
  }
  F.__closure = { runOnJS: sendCallback(stateFromStores1[16]).runOnJS, setDragging: tmp12[1] };
  F.__workletHash = 11266403476668;
  F.__initData = __initData3;
  let tmp22 = null;
  ({ runOnJS: sendCallback(stateFromStores1[16]).runOnJS, setDragging: tmp12[1] });
  if (null != stateFromStores1) {
    tmp22 = null;
    if (prop.VOICE_ACTIVITY !== stateFromStores) {
      tmp22 = null;
      if (!isGuildStageVoiceResult) {
        let buttonBlurPressed;
        let items7;
        if (BRAND === obj.BRAND) {
          const items5 = [tmp2.brandButtonContainer];
          const items6 = [tmp2.button, style];
          buttonBlurPressed = items6;
          items7 = items5;
        } else {
          items7 = [, , ];
          ({ button: arr6[0], container: arr6[1] } = tmp2);
          items7[2] = style;
          if (!first) {
            if (!first1) {
              buttonBlurPressed = tmp2.buttonBlur;
            }
          }
          buttonBlurPressed = tmp2.buttonBlurPressed;
        }
        const GestureDetector = tmp3(tmp4[17]).GestureDetector;
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
        const Button = tmp3(tmp4[19]).Button;
        intl = tmp3(tmp4[18]).intl;
        tmp22 = <GestureDetector gesture={tmp21}>{null}</GestureDetector>;
      }
    }
  }
  return tmp22;
}));
const result = size.fileFinishedImporting("components_native/calls/CallPTTButton.tsx");

export default memoResult;
export { CallPTTButtonLooks };
