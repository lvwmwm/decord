// Module ID: 10367
// Function ID: 79966
// Name: CallPTTButtonLooks
// Dependencies: []

// Module 10367 (CallPTTButtonLooks)
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const InputModes = arg1(dependencyMap[5]).InputModes;
const jsx = arg1(dependencyMap[6]).jsx;
let obj = { BRAND: "brand", BLUR: "blur" };
let obj2 = arg1(dependencyMap[7]);
obj = { button: { margin: 13 } };
const obj1 = { borderRadius: importDefault(dependencyMap[8]).radii.xs, overflow: "hidden", backgroundColor: arg1(dependencyMap[9]).hexWithOpacity(importDefault(dependencyMap[8]).unsafe_rawColors.WHITE, 0.24) };
obj.container = obj1;
obj.buttonBlur = { backgroundColor: "transparent" };
obj2 = {};
const obj6 = arg1(dependencyMap[9]);
obj2.backgroundColor = arg1(dependencyMap[9]).hexWithOpacity(importDefault(dependencyMap[8]).unsafe_rawColors.BLACK, 0.6);
obj.buttonBlurPressed = obj2;
obj.textStyle = { fontSize: 16 };
const obj8 = arg1(dependencyMap[9]);
obj.brandButtonContainer = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW };
let closure_11 = obj2.createStyles(obj);
let closure_12 = { code: "function CallPTTButtonTsx1(){const{runOnJS,setDragging}=this.__closure;runOnJS(setDragging)(false);}" };
let closure_13 = { code: "function CallPTTButtonTsx2(){const{runOnJS,setDragging,setPressed,setIsSwipeToChatDisabled}=this.__closure;runOnJS(setDragging)(true);runOnJS(setPressed)(false);if(setIsSwipeToChatDisabled!=null){runOnJS(setIsSwipeToChatDisabled)(false);}}" };
const obj3 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW };
const memoResult = importAllResult.memo((look) => {
  let sendCallback;
  let style;
  let BRAND = look.look;
  if (BRAND === undefined) {
    BRAND = obj.BRAND;
  }
  ({ style, sendCallback } = look);
  const arg1 = sendCallback;
  const importDefault = stopCallback;
  let dependencyMap;
  let callback;
  let importAllResult;
  let closure_5;
  let closure_6;
  let closure_7;
  let InputModes;
  let onTouchStart = callback2();
  let obj = arg1(dependencyMap[10]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => tmp10.getMode());
  let obj1 = arg1(dependencyMap[10]);
  const items1 = [closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => ref.getChannelId());
  dependencyMap = stateFromStores1;
  let obj2 = arg1(dependencyMap[10]);
  const items2 = [closure_5];
  const items3 = [stateFromStores1];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => first1.getChannel(stateFromStores1), items3);
  const tmp5 = callback(importAllResult.useState(false), 2);
  const first = tmp5[0];
  callback = first;
  importAllResult = tmp7;
  const tmp8 = callback(importAllResult.useState(false), 2);
  const first1 = tmp8[0];
  closure_5 = first1;
  closure_6 = tmp10;
  let isGuildStageVoiceResult;
  if (null != stateFromStores2) {
    isGuildStageVoiceResult = stateFromStores2.isGuildStageVoice();
  }
  if (isGuildStageVoiceResult) {
    isGuildStageVoiceResult = !tmp4;
  }
  const ref = importAllResult.useRef(false);
  closure_7 = ref;
  const tmp4 = importDefault(dependencyMap[11])(stateFromStores1);
  const voiceChatNavigationContext = arg1(dependencyMap[12]).useVoiceChatNavigationContext();
  let prop;
  if (null != voiceChatNavigationContext) {
    prop = voiceChatNavigationContext.setIsSwipeToChatDisabled;
  }
  InputModes = prop;
  const items4 = [ref, first, first1, sendCallback, look.stopCallback];
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
  const Gesture = arg1(dependencyMap[14]).Gesture;
  const obj5 = arg1(dependencyMap[12]);
  class G {
    constructor() {
      obj = sendCallback(f79969[15]);
      tmp = obj.runOnJS(closure_6)(true);
      obj2 = sendCallback(f79969[15]);
      tmp2 = obj2.runOnJS(closure_4)(false);
      if (null != setIsSwipeToChatDisabled) {
        tmp3 = sendCallback;
        tmp4 = f79969;
        obj3 = sendCallback(f79969[15]);
        tmp5 = setIsSwipeToChatDisabled;
        tmp6 = obj3.runOnJS(setIsSwipeToChatDisabled)(false);
      }
      return;
    }
  }
  obj = { runOnJS: arg1(dependencyMap[15]).runOnJS, setDragging: tmp10, setPressed: tmp7 };
  let num = 15;
  obj.setIsSwipeToChatDisabled = prop;
  G.__closure = obj;
  G.__workletHash = 10056118853836;
  G.__initData = closure_13;
  const PanResult = Gesture.Pan();
  class F {
    constructor() {
      obj = sendCallback(f79969[15]);
      tmp = obj.runOnJS(closure_6)(false);
      return;
    }
  }
  obj = { runOnJS: arg1(dependencyMap[15]).runOnJS, setDragging: tmp10 };
  F.__closure = obj;
  F.__workletHash = 8439106360958;
  F.__initData = closure_12;
  let Button = Gesture.Pan().onStart(G).onEnd(F);
  let tmp16 = null;
  if (null != stateFromStores1) {
    tmp16 = null;
    if (InputModes.VOICE_ACTIVITY !== stateFromStores) {
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
        Button = arg1(dependencyMap[16]).Button;
        const obj3 = { style: buttonBlurPressed, textStyle: onTouchStart.textStyle };
        style = arg1(dependencyMap[17]).intl;
        obj3.text = style.string(arg1(dependencyMap[17]).t.Q8gkVL);
        onTouchStart = function onTouchStart() {
          tmp7(true);
          tmp10(false);
          if (null != prop) {
            prop(true);
          }
        };
        obj3.onTouchStart = onTouchStart;
        obj3.onTouchEnd = function onTouchEnd(nativeEvent) {
          tmp7(false);
          if (null != prop) {
            prop(false);
          }
        };
        obj3.darkenOnPress = true;
        obj2.children = <Button {...obj3} />;
        num = jsx(importDefault(dependencyMap[num]).View, obj2);
        obj1.children = num;
        jsx(arg1(dependencyMap[obj1]).GestureDetector, obj1);
      }
    }
  }
  return tmp16;
});
const result = arg1(dependencyMap[18]).fileFinishedImporting("components_native/calls/CallPTTButton.tsx");

export default memoResult;
export const CallPTTButtonLooks = obj;
