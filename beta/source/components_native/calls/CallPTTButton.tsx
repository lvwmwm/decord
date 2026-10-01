// Module ID: 8973
// Function ID: 8974
// Name: CallPTTButton
// Dependencies: [32, 19, 2045, 1993, 4859, 1074, 21, 4836, 576, 4683, 504, 8861, 8867, 8974, 6073, 4566, 1177, 1115, 2]

// Module 8973 (CallPTTButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import MediaEngineActionCreators from "MediaEngineActionCreators" /* 8974 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4859 */;
import createStyles_mod from "createStyles" /* 4836 */;
import ColorUtils_mod from "ColorUtils" /* 4683 */;
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
const __initData = { code: "function CallPTTButtonTsx1(){const{runOnJS,setDragging}=this.__closure;runOnJS(setDragging)(false);}" };
const __initData2 = { code: "function CallPTTButtonTsx2(){const{runOnJS,setDragging,setPressed,setIsSwipeToChatDisabled}=this.__closure;runOnJS(setDragging)(true);runOnJS(setPressed)(false);if(setIsSwipeToChatDisabled!=null){runOnJS(setIsSwipeToChatDisabled)(false);}}" };
const memoResult = react.memo((look) => {
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
  obj = sendCallback(stateFromStores1[10]);
  const items = [mode];
  const stateFromStores = obj.useStateFromStores(items, () => mode.getMode());
  let obj2 = sendCallback(stateFromStores1[10]);
  const items1 = [ref];
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
      obj.setPushToTalkState(first || first1);
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
  const PanResult = Gesture.Pan();
  class F {
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
  F.__closure = { runOnJS: sendCallback(stateFromStores1[15]).runOnJS, setDragging: tmp12[1], setPressed: tmp9[1], setIsSwipeToChatDisabled: prop };
  F.__workletHash = 10056118853836;
  F.__initData = __initData2;
  ({ runOnJS: sendCallback(stateFromStores1[15]).runOnJS, setDragging: tmp12[1], setPressed: tmp9[1], setIsSwipeToChatDisabled: prop });
  PanResult.onStart(F);
  class N {
    constructor() {
      const obj = ReanimatedRexport;
      obj.runOnJS(mode)(false);
    }
  }
  N.__closure = { runOnJS: sendCallback(stateFromStores1[15]).runOnJS, setDragging: tmp12[1] };
  N.__workletHash = 8439106360958;
  N.__initData = __initData;
  let tmp22 = null;
  ({ runOnJS: sendCallback(stateFromStores1[15]).runOnJS, setDragging: tmp12[1] });
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
        const GestureDetector = tmp3(tmp4[14]).GestureDetector;
        const View = tmp7(tmp4[15]).View;
        ({
          style: buttonBlurPressed,
          textStyle: tmp2.textStyle,
          text: intl.string(sendCallback(stateFromStores1[17]).t.Q8gkVL),
          onTouchStart() {
                  closure_4(true);
                  mode(false);
                  if (prop != null) {
                    prop(true);
                  }
                },
          onTouchEnd() {
                  closure_4(false);
                  if (prop != null) {
                    prop(false);
                  }
                },
          darkenOnPress: true
        });
        const Button = tmp3(tmp4[16]).Button;
        intl = tmp3(tmp4[17]).intl;
        tmp22 = <GestureDetector gesture={tmp21}>{null}</GestureDetector>;
      }
    }
  }
  return tmp22;
});
const result = size.fileFinishedImporting("components_native/calls/CallPTTButton.tsx");

export default memoResult;
export { CallPTTButtonLooks };
