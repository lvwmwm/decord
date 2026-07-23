// Module ID: 10528
// Function ID: 82175
// Name: ChannelCallCameraPreview
// Dependencies: [57, 31, 4143, 1348, 10210, 10211, 10529, 653, 33, 10214, 10530, 3981, 10538, 10618, 9757, 10619, 3991, 3989, 10803, 566, 1450, 10531, 10804, 5464, 5484, 10814, 4341, 5217, 10215, 2]

// Module 10528 (ChannelCallCameraPreview)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import resetFocusTimer from "resetFocusTimer";
import { VoiceChatDrawerState } from "BOX_MODE_ACTIONSHEET_WIDTH";
import PIP_GESTURE_ACTIVE_OFFSET from "PIP_GESTURE_ACTIVE_OFFSET";
import jsxProd from "jsxProd";

let closure_10;
let closure_11;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
class ChannelCallCameraPreview {
  constructor(arg0) {
    channel = global.channel;
    tmp = useIsVoiceChatFocused();
    obj = require("useIsConnectedToVoiceChannelForId");
    isConnectedToVoiceChannel = obj.useIsConnectedToVoiceChannel(channel);
    tmp3 = useChannelCallStore((focus) => focus.focus);
    obj2 = require("useRevealProviderValue");
    revealProviderValue = obj2.useRevealProviderValue(tmp3, channel);
    tmp5 = require("_createForOfIteratorHelperLoose");
    tmp7 = null;
    if (isConnectedToVoiceChannel) {
      tmp8 = jsx;
      tmp9 = closure_0;
      tmp10 = closure_2;
      obj = {};
      obj.value = revealProviderValue;
      tmp11 = jsx;
      tmp12 = closure_1;
      num = 12;
      obj1 = {};
      obj1.channel = channel;
      obj1.participantScreenIsFocused = !tmp;
      obj1.isChannelCallModalOpen = tmp6;
      obj.children = jsx(require("CameraPreview"), obj1);
      tmp7 = jsx(require("useRevealProviderValue").RevealContext.Provider, obj);
    }
    return tmp7;
  }
}
class ChannelCallModal {
  constructor(arg0) {
    channel = global.channel;
    obj = { channelId: channel.id, guildId: channel.guild_id };
    return jsx(f82182, obj);
  }
}
({ useChannelCallOrientationHandlers: closure_7, resetChannelCallStore: closure_8, useChannelCallStore: closure_9, setVoiceChatDrawerState: closure_10, useIsVoiceChatFocused: closure_11 } = resetFocusTimer);
({ PAN_GESTURE_FAIL_OFFSET_Y: closure_13, SWIPE_TO_CHAT_ACTIVE_OFFSET: closure_14 } = PIP_GESTURE_ACTIVE_OFFSET);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let closure_17 = importAllResult.memo((arg0) => {
  const first = callback(importAllResult.useState(channel.getChannel(arg0.channelId)), 1)[0];
  callback2(first);
  const items = [first];
  const effect = importAllResult.useEffect(() => {
    if (null != first) {
      outer1_1(outer1_2[13]).initialize(first);
      return () => {
        outer2_1(outer2_2[13]).terminate();
        const obj = outer2_1(outer2_2[13]);
        outer2_1(outer2_2[14]).setHidden(false);
        const obj2 = outer2_1(outer2_2[14]);
        if (!obj3.isModalOpen(outer2_31)) {
          outer2_8();
        }
      };
    }
  }, items);
  let tmp4 = null;
  if (null != first) {
    let obj = { channel: first };
    tmp4 = callback5(importDefault(10619), obj);
  }
  return tmp4;
});
let closure_18 = { code: "function ChannelCallModalTsx1(){const{width}=this.__closure;return[0,-width];}" };
let closure_19 = { code: "function ChannelCallModalTsx2(){const{runOnJS,dismissKeyboard}=this.__closure;runOnJS(dismissKeyboard)();}" };
let closure_20 = { code: "function ChannelCallModalTsx3(){const{voiceChatDrawerStoreState}=this.__closure;return voiceChatDrawerStoreState;}" };
let closure_21 = { code: "function ChannelCallModalTsx4(){const{translateX,width}=this.__closure;translateX.set(-width);}" };
let closure_22 = { code: "function ChannelCallModalTsx5(){const{isSwipeToChatInProgress,translateX,width,voiceChatDrawerState,VoiceChatDrawerState}=this.__closure;const chatGestureFinished=!isSwipeToChatInProgress.get();const drawerIsInSettledPosition=translateX.get()===-width||translateX.get()===0;const chatOpen=voiceChatDrawerState.get()===VoiceChatDrawerState.OPEN;const chatClosed=voiceChatDrawerState.get()===VoiceChatDrawerState.CLOSED;if(chatGestureFinished&&drawerIsInSettledPosition){return translateX.get()===-width?VoiceChatDrawerState.OPEN:VoiceChatDrawerState.CLOSED;}else if(chatOpen&&translateX.get()>-width){return VoiceChatDrawerState.CLOSING;}else if(chatClosed&&translateX.get()<0){return VoiceChatDrawerState.OPENING;}else{return null;}}" };
let closure_23 = { code: "function ChannelCallModalTsx6(state,previousState){const{runOnJS,setVoiceChatDrawerState,channelId,VoiceChatDrawerState,transitionToVoiceRoute,guildId}=this.__closure;if(state===previousState)return;if(state!=null&&state!==previousState){runOnJS(setVoiceChatDrawerState)(channelId,state);if(state===VoiceChatDrawerState.OPEN){runOnJS(transitionToVoiceRoute)(guildId,channelId);}}}" };
let closure_24 = { code: "function ChannelCallModalTsx7(){const{voiceChatDrawerState}=this.__closure;return voiceChatDrawerState.get();}" };
let closure_25 = { code: "function ChannelCallModalTsx8(drawerState,drawerStatePrev){const{VoiceChatDrawerState,translateX,withPanGestureTiming}=this.__closure;if(drawerState===VoiceChatDrawerState.CLOSED&&drawerStatePrev===VoiceChatDrawerState.OPEN){translateX.set(withPanGestureTiming(0));}}" };
let closure_26 = { code: "function ChannelCallModalTsx9(){const{interpolate,translateY,maxVerticalTranslate}=this.__closure;return{flex:1,transform:[{translateY:interpolate(translateY.get(),[0,maxVerticalTranslate],[0,maxVerticalTranslate])}]};}" };
let closure_27 = { code: "function ChannelCallModalTsx10(){const{immediate,translateX,width,withPanGestureTiming}=this.__closure;if(immediate===true){translateX.set(-width);}else{translateX.set(withPanGestureTiming(-width));}}" };
let closure_28 = { code: "function ChannelCallModalTsx11(){const{translateX,withPanGestureTiming}=this.__closure;translateX.set(withPanGestureTiming(0));}" };
let closure_29 = importAllResult.memo((channelId) => {
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  let obj;
  let callback5;
  obj = channelId(ref[19]);
  let items = [sharedValue];
  let items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => sharedValue.getChannel(channelId), items1);
  ref = ref2.useRef(undefined);
  const ref1 = ref2.useRef(undefined);
  ref2 = ref2.useRef(undefined);
  const ref3 = ref2.useRef(undefined);
  let obj2 = channelId(ref[16]);
  sharedValue = obj2.useSharedValue(0);
  let obj3 = channelId(ref[16]);
  const sharedValue1 = obj3.useSharedValue(0);
  const voiceChatDrawerState = derivedValue().voiceChatDrawerState;
  let obj4 = channelId(ref[16]);
  let fn = function c() {
    return voiceChatDrawerState;
  };
  fn.__closure = { voiceChatDrawerStoreState: voiceChatDrawerState };
  fn.__workletHash = 4903837231689;
  fn.__initData = closure_20;
  derivedValue = obj4.useDerivedValue(fn);
  const size = guildId(ref[20])();
  let width = size.width;
  const height = size.height;
  let obj5 = channelId(ref[16]);
  const sharedValue2 = obj5.useSharedValue(false);
  let result = 0.8 * height;
  const VoiceChatDrawerState = result;
  const tmp10 = guildId(ref[21])(channelId);
  const tmp11 = ref1(ref2.useState(false), 2);
  let closure_13 = tmp11[1];
  let tmp12 = tmp10;
  if (!tmp10) {
    tmp12 = null != stateFromStores && stateFromStores.isGuildStageVoice();
    const tmp14 = null != stateFromStores && stateFromStores.isGuildStageVoice();
  }
  obj = { channelId, guildId };
  callback5 = ref2.useRef(obj);
  const effect = ref2.useEffect(() => {
    closure_15.current = obj;
  });
  let items2 = [width, sharedValue];
  const effect1 = ref2.useEffect(() => {
    const current = ref.current;
    const channelId = current.channelId;
    let chatOpen = derivedValue.getState().voiceChatDrawerState === result.OPEN;
    if (!chatOpen) {
      chatOpen = ref3.getChatOpen(channelId);
    }
    if (chatOpen) {
      let obj = channelId(ref[16]);
      const fn = function t() {
        const result = outer1_6.set(-outer1_10);
      };
      obj = { translateX: sharedValue, width };
      fn.__closure = obj;
      fn.__workletHash = 15726690166344;
      fn.__initData = outer1_21;
      obj.runOnUI(fn)();
      channelId(ref[16]).runOnJS(channelId(ref[22]).transitionToVoiceRoute)(current.guildId, channelId);
      const obj3 = channelId(ref[16]);
    }
  }, items2);
  let obj7 = channelId(ref[16]);
  function ae() {
    let tmp2 = sharedValue.get() === -width;
    if (!tmp2) {
      tmp2 = 0 === sharedValue.get();
    }
    let value = derivedValue.get();
    value = derivedValue.get();
    if (tmp) {
      if (tmp2) {
        if (sharedValue.get() === -width) {
          let CLOSED = result.OPEN;
        } else {
          CLOSED = result.CLOSED;
        }
      }
    }
    if (value === result.OPEN) {
      if (sharedValue.get() > -width) {
        let CLOSING = result.CLOSING;
      }
      return CLOSING;
    }
    CLOSING = null;
    if (value === result.CLOSED) {
      CLOSING = null;
      if (sharedValue.get() < 0) {
        CLOSING = result.OPENING;
      }
    }
  }
  obj = { isSwipeToChatInProgress: sharedValue2, translateX: sharedValue, width, voiceChatDrawerState: derivedValue, VoiceChatDrawerState };
  ae.__closure = obj;
  ae.__workletHash = 16786813095205;
  ae.__initData = closure_22;
  function te(arg0, arg1) {
    let tmp2 = tmp;
    if (arg0 !== arg1) {
      tmp2 = null != arg0;
    }
    if (tmp2) {
      tmp2 = tmp;
    }
    if (tmp2) {
      channelId(ref[16]).runOnJS(width)(channelId, arg0);
      if (arg0 === result.OPEN) {
        channelId(ref[16]).runOnJS(channelId(ref[22]).transitionToVoiceRoute)(guildId, channelId);
        const obj2 = channelId(ref[16]);
      }
      const obj = channelId(ref[16]);
    }
  }
  const tmp15 = !tmp12;
  const tmp18 = guildId(ref[23]);
  te.__closure = { runOnJS: channelId(ref[16]).runOnJS, setVoiceChatDrawerState: width, channelId, VoiceChatDrawerState, transitionToVoiceRoute: channelId(ref[22]).transitionToVoiceRoute, guildId };
  te.__workletHash = 14188334620807;
  te.__initData = closure_23;
  const animatedReaction = obj7.useAnimatedReaction(ae, te);
  let obj10 = channelId(ref[16]);
  function re() {
    return derivedValue.get();
  }
  re.__closure = { voiceChatDrawerState: derivedValue };
  re.__workletHash = 14044794538420;
  re.__initData = closure_24;
  function ne(arg0, arg1) {
    let tmp = arg0 === result.CLOSED;
    if (tmp) {
      tmp = arg1 === result.OPEN;
    }
    if (tmp) {
      result = sharedValue.set(channelId(ref[18]).withPanGestureTiming(0));
      const obj = channelId(ref[18]);
    }
  }
  obj2 = { VoiceChatDrawerState, translateX: sharedValue, withPanGestureTiming: channelId(ref[18]).withPanGestureTiming };
  ne.__closure = obj2;
  ne.__workletHash = 260500087614;
  ne.__initData = closure_25;
  const animatedReaction1 = obj10.useAnimatedReaction(re, ne);
  const obj1 = { runOnJS: channelId(ref[16]).runOnJS, setVoiceChatDrawerState: width, channelId, VoiceChatDrawerState, transitionToVoiceRoute: channelId(ref[22]).transitionToVoiceRoute, guildId };
  const tmp21 = !tmp11[0] && !tmp10;
  const obj13 = (function useSwipeToChatGesture(width) {
    let enabled;
    let isGestureInProgress;
    let translateX;
    width = width.width;
    ({ translateX, enabled, isGestureInProgress } = width);
    let obj = channelId(ref[16]);
    const fn = function u() {
      const items = [0, -width];
      return items;
    };
    fn.__closure = { width };
    fn.__workletHash = 15383459308604;
    fn.__initData = outer1_18;
    const fn2 = function c() {
      channelId(ref[16]).runOnJS(channelId(ref[17]).dismissKeyboard)();
    };
    obj = {};
    const derivedValue = obj.useDerivedValue(fn);
    obj.runOnJS = channelId(ref[16]).runOnJS;
    obj.dismissKeyboard = channelId(ref[17]).dismissKeyboard;
    fn2.__closure = obj;
    fn2.__workletHash = 4086900686382;
    fn2.__initData = outer1_19;
    const callback = ref2.useCallback(fn2, []);
    obj = { lowerBounds: -width, upperBounds: 0, translate: translateX, vertical: false, snapPositions: derivedValue, onStart: callback, isGestureInProgress };
    const obj4 = guildId(ref[18])(obj);
    let items = [-closure_13, closure_13];
    const enabledResult = guildId(ref[18])(obj).enabled(enabled);
    const items1 = [-obj, obj];
    return guildId(ref[18])(obj).enabled(enabled).failOffsetY(items).activeOffsetX(items1);
  })({ isGestureInProgress: sharedValue2, channelId, width, translateX: sharedValue, enabled: !tmp11[0] && !tmp10 });
  obj3 = { gestureEnabled: tmp15, height, maxTranslate: result, thresholdTranslate: 0.5 * height, translateY: sharedValue1 };
  const withRefResult = (function useSwipeToChatGesture(width) {
    let enabled;
    let isGestureInProgress;
    let translateX;
    width = width.width;
    ({ translateX, enabled, isGestureInProgress } = width);
    let obj = channelId(ref[16]);
    const fn = function u() {
      const items = [0, -width];
      return items;
    };
    fn.__closure = { width };
    fn.__workletHash = 15383459308604;
    fn.__initData = outer1_18;
    const fn2 = function c() {
      channelId(ref[16]).runOnJS(channelId(ref[17]).dismissKeyboard)();
    };
    obj = {};
    const derivedValue = obj.useDerivedValue(fn);
    obj.runOnJS = channelId(ref[16]).runOnJS;
    obj.dismissKeyboard = channelId(ref[17]).dismissKeyboard;
    fn2.__closure = obj;
    fn2.__workletHash = 4086900686382;
    fn2.__initData = outer1_19;
    const callback = ref2.useCallback(fn2, []);
    obj = { lowerBounds: -width, upperBounds: 0, translate: translateX, vertical: false, snapPositions: derivedValue, onStart: callback, isGestureInProgress };
    const obj4 = guildId(ref[18])(obj);
    let items = [-closure_13, closure_13];
    const enabledResult = guildId(ref[18])(obj).enabled(enabled);
    const items1 = [-obj, obj];
    return guildId(ref[18])(obj).enabled(enabled).failOffsetY(items).activeOffsetX(items1);
  })({ isGestureInProgress: sharedValue2, channelId, width, translateX: sharedValue, enabled: !tmp11[0] && !tmp10 }).withRef(ref);
  const obj15 = guildId(ref[25])(obj3);
  const items3 = [channelId];
  let result1 = guildId(ref[25])(obj3).withRef(ref3).requireExternalGestureToFail(ref2, ref1);
  const layoutEffect = ref2.useLayoutEffect(() => {
    const result = channelId(ref[26]).maybeShowAgeGateModal(channelId);
  }, items3);
  const withRefResult1 = guildId(ref[25])(obj3).withRef(ref3);
  function oe() {
    let obj = { flex: 1 };
    obj = {};
    const items = [0, closure_12];
    const items1 = [0, closure_12];
    obj.translateY = channelId(ref[16]).interpolate(sharedValue1.get(), items, items1);
    const items2 = [obj];
    obj.transform = items2;
    return obj;
  }
  obj4 = { interpolate: channelId(ref[16]).interpolate, translateY: sharedValue1, maxVerticalTranslate: result };
  oe.__closure = obj4;
  oe.__workletHash = 8643926178558;
  oe.__initData = closure_26;
  const items4 = [ref2, ref3, ref, ref1, sharedValue, width, channelId];
  const animatedStyle = channelId(ref[16]).useAnimatedStyle(oe);
  let tmp27 = null;
  if (null != stateFromStores) {
    obj5 = { value: tmp18(guildId(ref[24]).CHANNEL_CALL).analyticsLocations };
    const obj6 = {};
    const Gesture = channelId(ref[27]).Gesture;
    obj6.gesture = Gesture.Exclusive(withRefResult, result1);
    obj7 = { style: animatedStyle };
    const obj8 = { value: tmp26 };
    const obj9 = { channelId };
    const items5 = [callback5(closure_17, obj9), ];
    obj10 = { channel: stateFromStores };
    items5[1] = callback5(ChannelCallCameraPreview, obj10);
    obj8.children = items5;
    obj7.children = callback6(channelId(ref[28]).VoiceChatNavigationContext.Provider, obj8);
    obj6.children = callback5(guildId(ref[16]).View, obj7);
    obj5.children = callback5(channelId(ref[27]).GestureDetector, obj6);
    tmp27 = callback5(channelId(ref[23]).AnalyticsLocationProvider, obj5);
  }
  return tmp27;
});
ChannelCallModal.modalConfig = { animation: require("ME").ModalAnimation.SLIDE_UP, shouldPersistUnderModals: true };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/video_calls/native/components/ChannelCallModal.tsx");

export default ChannelCallModal;
export { ChannelCallCameraPreview };
export { ChannelCallModal };
