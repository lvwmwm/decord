// Module ID: 10384
// Function ID: 80063
// Name: CallPTTButtonLooks
// Dependencies: [57, 31, 1348, 4177, 4202, 653, 33, 4130, 689, 3974, 566, 10367, 10215, 10385, 5217, 3991, 1273, 1212, 2]

// Module 10384 (CallPTTButtonLooks)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { InputModes } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import hexToRgb from "hexToRgb";
import hexToRgb from "hexToRgb";

const require = arg1;
let obj = { BRAND: "brand", BLUR: "blur" };
obj = { button: { margin: 13 } };
let obj1 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, overflow: "hidden" };
obj1.backgroundColor = hexToRgb.hexWithOpacity(require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE, 0.24);
obj.container = obj1;
obj.buttonBlur = { backgroundColor: "transparent" };
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose.backgroundColor = hexToRgb.hexWithOpacity(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLACK, 0.6);
obj.buttonBlurPressed = _createForOfIteratorHelperLoose;
obj.textStyle = { fontSize: 16 };
obj.brandButtonContainer = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_12 = { code: "function CallPTTButtonTsx1(){const{runOnJS,setDragging}=this.__closure;runOnJS(setDragging)(false);}" };
let closure_13 = { code: "function CallPTTButtonTsx2(){const{runOnJS,setDragging,setPressed,setIsSwipeToChatDisabled}=this.__closure;runOnJS(setDragging)(true);runOnJS(setPressed)(false);if(setIsSwipeToChatDisabled!=null){runOnJS(setIsSwipeToChatDisabled)(false);}}" };
let obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
const memoResult = importAllResult.memo((look) => {
  let sendCallback;
  let style;
  let BRAND = look.look;
  if (BRAND === undefined) {
    BRAND = obj.BRAND;
  }
  ({ style, sendCallback } = look);
  const stopCallback = look.stopCallback;
  let stateFromStores1;
  let first;
  let importAllResult;
  let first1;
  let c6;
  let ref;
  let prop;
  let onTouchStart = callback();
  obj = sendCallback(stateFromStores1[10]);
  const items = [c6];
  const stateFromStores = obj.useStateFromStores(items, () => _undefined2.getMode());
  let obj1 = sendCallback(stateFromStores1[10]);
  const items1 = [ref];
  stateFromStores1 = obj1.useStateFromStores(items1, () => ref.getChannelId());
  let obj2 = sendCallback(stateFromStores1[10]);
  const items2 = [first1];
  const items3 = [stateFromStores1];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => first1.getChannel(stateFromStores1), items3);
  const tmp5 = first(importAllResult.useState(false), 2);
  first = tmp5[0];
  importAllResult = tmp7;
  const tmp8 = first(importAllResult.useState(false), 2);
  first1 = tmp8[0];
  c6 = tmp10;
  let isGuildStageVoiceResult;
  if (null != stateFromStores2) {
    isGuildStageVoiceResult = stateFromStores2.isGuildStageVoice();
  }
  if (isGuildStageVoiceResult) {
    isGuildStageVoiceResult = !tmp4;
  }
  ref = importAllResult.useRef(false);
  tmp4 = stopCallback(stateFromStores1[11])(stateFromStores1);
  const voiceChatNavigationContext = sendCallback(stateFromStores1[12]).useVoiceChatNavigationContext();
  prop = undefined;
  if (null != voiceChatNavigationContext) {
    prop = voiceChatNavigationContext.setIsSwipeToChatDisabled;
  }
  const items4 = [ref, first, first1, sendCallback, stopCallback];
  const effect = importAllResult.useEffect(() => {
    let tmp = first;
    if (!first) {
      tmp = first1;
    }
    if (tmp !== ref.current) {
      sendCallback(stateFromStores1[13]).setPushToTalkState(tmp);
      if (tmp) {
        if (null != sendCallback) {
          sendCallback();
        }
      } else if (null != stopCallback) {
        stopCallback();
      }
      const obj = sendCallback(stateFromStores1[13]);
    }
    ref.current = tmp;
  }, items4);
  obj1 = 14;
  const Gesture = sendCallback(stateFromStores1[14]).Gesture;
  const obj5 = sendCallback(stateFromStores1[12]);
  class G {
    constructor() {
      obj = sendCallback(f80066[15]);
      tmp = obj.runOnJS(c6)(true);
      obj2 = sendCallback(f80066[15]);
      tmp2 = obj2.runOnJS(c4)(false);
      if (null != setIsSwipeToChatDisabled) {
        tmp3 = sendCallback;
        tmp4 = f80066;
        obj3 = sendCallback(f80066[15]);
        tmp5 = setIsSwipeToChatDisabled;
        tmp6 = obj3.runOnJS(setIsSwipeToChatDisabled)(false);
      }
      return;
    }
  }
  obj = { runOnJS: sendCallback(stateFromStores1[15]).runOnJS, setDragging: tmp10, setPressed: tmp7 };
  let num = 15;
  obj.setIsSwipeToChatDisabled = prop;
  G.__closure = obj;
  G.__workletHash = 10056118853836;
  G.__initData = closure_13;
  const PanResult = Gesture.Pan();
  class F {
    constructor() {
      obj = sendCallback(f80066[15]);
      tmp = obj.runOnJS(c6)(false);
      return;
    }
  }
  obj = { runOnJS: sendCallback(stateFromStores1[15]).runOnJS, setDragging: tmp10 };
  F.__closure = obj;
  F.__workletHash = 8439106360958;
  F.__initData = closure_12;
  let Button = Gesture.Pan().onStart(G).onEnd(F);
  let tmp16 = null;
  if (null != stateFromStores1) {
    tmp16 = null;
    if (prop.VOICE_ACTIVITY !== stateFromStores) {
      tmp16 = null;
      if (!isGuildStageVoiceResult) {
        if (BRAND === obj.BRAND) {
          const items5 = [onTouchStart.brandButtonContainer];
          const items6 = [onTouchStart.button, style];
          let items7 = items5;
          let buttonBlurPressed = items6;
        } else {
          items7 = [, , ];
          ({ button: arr6[0], container: arr6[1] } = onTouchStart);
          items7[2] = style;
          if (!first) {
            if (!first1) {
              buttonBlurPressed = onTouchStart.buttonBlur;
            }
          }
          buttonBlurPressed = onTouchStart.buttonBlurPressed;
        }
        obj1 = { gesture: Button };
        obj2 = { style: items7 };
        Button = sendCallback(stateFromStores1[16]).Button;
        let obj3 = { style: buttonBlurPressed, textStyle: onTouchStart.textStyle };
        style = sendCallback(stateFromStores1[17]).intl;
        obj3.text = style.string(sendCallback(stateFromStores1[17]).t.Q8gkVL);
        onTouchStart = function onTouchStart() {
          _undefined(true);
          _undefined2(false);
          if (null != prop) {
            prop(true);
          }
        };
        obj3.onTouchStart = onTouchStart;
        obj3.onTouchEnd = function onTouchEnd(nativeEvent) {
          _undefined(false);
          if (null != prop) {
            prop(false);
          }
        };
        obj3.darkenOnPress = true;
        obj2.children = <Button style={buttonBlurPressed} textStyle={onTouchStart.textStyle} />;
        num = jsx(stopCallback(stateFromStores1[num]).View, { style: items7 });
        obj1.children = num;
        jsx(sendCallback(stateFromStores1[obj1]).GestureDetector, { gesture: Button });
      }
    }
  }
  return tmp16;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("components_native/calls/CallPTTButton.tsx");

export default memoResult;
export const CallPTTButtonLooks = obj;
