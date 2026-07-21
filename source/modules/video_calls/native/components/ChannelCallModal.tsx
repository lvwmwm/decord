// Module ID: 10517
// Function ID: 82101
// Name: ChannelCallCameraPreview
// Dependencies: []

// Module 10517 (ChannelCallCameraPreview)
class ChannelCallCameraPreview {
  constructor(arg0) {
    channel = global.channel;
    tmp = useIsVoiceChatFocused();
    obj = arg1(dependencyMap[9]);
    isConnectedToVoiceChannel = obj.useIsConnectedToVoiceChannel(channel);
    tmp3 = useChannelCallStore((focus) => focus.focus);
    obj2 = arg1(dependencyMap[10]);
    revealProviderValue = obj2.useRevealProviderValue(tmp3, channel);
    tmp5 = arg1(dependencyMap[11]);
    tmp7 = null;
    if (isConnectedToVoiceChannel) {
      tmp8 = jsx;
      tmp9 = arg1;
      tmp10 = dependencyMap;
      obj = {};
      obj.value = revealProviderValue;
      tmp11 = jsx;
      tmp12 = importDefault;
      num = 12;
      obj1 = {};
      obj1.channel = channel;
      obj1.participantScreenIsFocused = !tmp;
      obj1.isChannelCallModalOpen = tmp6;
      obj.children = jsx(importDefault(dependencyMap[12]), obj1);
      tmp7 = jsx(arg1(dependencyMap[10]).RevealContext.Provider, obj);
    }
    return tmp7;
  }
}
class ChannelCallModal {
  constructor(arg0) {
    channel = global.channel;
    obj = { channelId: channel.id, guildId: channel.guild_id };
    return jsx(f82108, obj);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
({ useChannelCallOrientationHandlers: closure_7, resetChannelCallStore: closure_8, useChannelCallStore: closure_9, setVoiceChatDrawerState: closure_10, useIsVoiceChatFocused: closure_11 } = arg1(dependencyMap[4]));
const VoiceChatDrawerState = arg1(dependencyMap[5]).VoiceChatDrawerState;
const tmp2 = arg1(dependencyMap[4]);
({ PAN_GESTURE_FAIL_OFFSET_Y: closure_13, SWIPE_TO_CHAT_ACTIVE_OFFSET: closure_14 } = arg1(dependencyMap[6]));
const tmp3 = arg1(dependencyMap[6]);
({ jsx: closure_15, jsxs: closure_16 } = arg1(dependencyMap[8]));
let closure_17 = importAllResult.memo((arg0) => {
  const first = callback(importAllResult.useState(channel.getChannel(arg0.channelId)), 1)[0];
  const arg1 = first;
  callback2(first);
  const items = [first];
  const effect = importAllResult.useEffect(() => {
    if (null != first) {
      callback(closure_2[13]).initialize(first);
      return () => {
        callback2(closure_2[13]).terminate();
        const obj = callback2(closure_2[13]);
        callback2(closure_2[14]).setHidden(false);
        const obj2 = callback2(closure_2[14]);
        if (!obj3.isModalOpen(closure_31)) {
          callback3();
        }
      };
    }
  }, items);
  let tmp4 = null;
  if (null != first) {
    const obj = { channel: first };
    tmp4 = callback5(importDefault(dependencyMap[15]), obj);
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
  const arg1 = channelId;
  const guildId = channelId.guildId;
  const importDefault = guildId;
  let obj;
  let callback5;
  obj = arg1(dependencyMap[19]);
  const items = [closure_6];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => sharedValue.getChannel(channelId), items1);
  const ref = importAllResult.useRef(undefined);
  const dependencyMap = ref;
  const ref1 = importAllResult.useRef(undefined);
  const callback = ref1;
  const ref2 = importAllResult.useRef(undefined);
  const ref3 = ref2.useRef(undefined);
  let closure_5 = ref3;
  let obj2 = arg1(dependencyMap[16]);
  const sharedValue = obj2.useSharedValue(0);
  closure_6 = sharedValue;
  let obj3 = arg1(dependencyMap[16]);
  const sharedValue1 = obj3.useSharedValue(0);
  const voiceChatDrawerState = derivedValue().voiceChatDrawerState;
  let obj4 = arg1(dependencyMap[16]);
  const fn = function c() {
    return voiceChatDrawerState;
  };
  fn.__closure = { voiceChatDrawerStoreState: voiceChatDrawerState };
  fn.__workletHash = 4903837231689;
  fn.__initData = closure_20;
  const derivedValue = obj4.useDerivedValue(fn);
  const size = importDefault(dependencyMap[20])();
  const width = size.width;
  const height = size.height;
  let obj5 = arg1(dependencyMap[16]);
  const sharedValue2 = obj5.useSharedValue(false);
  const result = 0.8 * height;
  const VoiceChatDrawerState = result;
  const tmp10 = importDefault(dependencyMap[21])(channelId);
  const tmp11 = callback(ref2.useState(false), 2);
  let closure_13 = tmp11[1];
  let tmp12 = tmp10;
  if (!tmp10) {
    tmp12 = null != stateFromStores && stateFromStores.isGuildStageVoice();
    const tmp14 = null != stateFromStores && stateFromStores.isGuildStageVoice();
  }
  obj = { channelId, guildId };
  callback5 = importAllResult.useRef(obj);
  const effect = importAllResult.useEffect(() => {
    closure_15.current = obj;
  });
  const items2 = [width, sharedValue];
  const effect1 = importAllResult.useEffect(() => {
    const current = ref.current;
    const channelId = current.channelId;
    let chatOpen = derivedValue.getState().voiceChatDrawerState === result.OPEN;
    if (!chatOpen) {
      chatOpen = ref3.getChatOpen(channelId);
    }
    if (chatOpen) {
      let obj = channelId(ref[16]);
      const fn = function t() {
        const result = closure_6.set(-closure_10);
      };
      obj = { translateX: sharedValue, width };
      fn.__closure = obj;
      fn.__workletHash = 15726690166344;
      fn.__initData = closure_21;
      obj.runOnUI(fn)();
      channelId(ref[16]).runOnJS(channelId(ref[22]).transitionToVoiceRoute)(current.guildId, channelId);
      const obj3 = channelId(ref[16]);
    }
  }, items2);
  let obj7 = arg1(dependencyMap[16]);
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
  const tmp18 = importDefault(dependencyMap[23]);
  te.__closure = { runOnJS: arg1(dependencyMap[16]).runOnJS, setVoiceChatDrawerState: width, channelId, VoiceChatDrawerState, transitionToVoiceRoute: arg1(dependencyMap[22]).transitionToVoiceRoute, guildId };
  te.__workletHash = 14188334620807;
  te.__initData = closure_23;
  const animatedReaction = obj7.useAnimatedReaction(ae, te);
  let obj10 = arg1(dependencyMap[16]);
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
      const result = sharedValue.set(channelId(ref[18]).withPanGestureTiming(0));
      const obj = channelId(ref[18]);
    }
  }
  obj2 = { VoiceChatDrawerState, translateX: sharedValue, withPanGestureTiming: arg1(dependencyMap[18]).withPanGestureTiming };
  ne.__closure = obj2;
  ne.__workletHash = 260500087614;
  ne.__initData = closure_25;
  const animatedReaction1 = obj10.useAnimatedReaction(re, ne);
  const obj1 = { runOnJS: arg1(dependencyMap[16]).runOnJS, setVoiceChatDrawerState: width, channelId, VoiceChatDrawerState, transitionToVoiceRoute: arg1(dependencyMap[22]).transitionToVoiceRoute, guildId };
  const tmp21 = !tmp11[0] && !tmp10;
  const obj13 = function useSwipeToChatGesture(width) {
    let enabled;
    let isGestureInProgress;
    let translateX;
    width = width.width;
    const channelId = width;
    ({ translateX, enabled, isGestureInProgress } = width);
    let obj = channelId(ref[16]);
    const fn = function u() {
      const items = [0.229, -width];
      return items;
    };
    fn.__closure = { width };
    fn.__workletHash = 15383459308604;
    fn.__initData = closure_18;
    const fn2 = function c() {
      width(closure_2[16]).runOnJS(width(closure_2[17]).dismissKeyboard)();
    };
    obj = {};
    const derivedValue = obj.useDerivedValue(fn);
    obj.runOnJS = channelId(ref[16]).runOnJS;
    obj.dismissKeyboard = channelId(ref[17]).dismissKeyboard;
    fn2.__closure = obj;
    fn2.__workletHash = 4086900686382;
    fn2.__initData = closure_19;
    const callback = ref2.useCallback(fn2, []);
    obj = { lowerBounds: -width, upperBounds: 0, translate: translateX, vertical: false, snapPositions: derivedValue, onStart: callback, isGestureInProgress };
    const obj4 = guildId(ref[18])(obj);
    const items = [-closure_13, closure_13];
    const enabledResult = guildId(ref[18])(obj).enabled(enabled);
    const items1 = [-obj, obj];
    return guildId(ref[18])(obj).enabled(enabled).failOffsetY(items).activeOffsetX(items1);
  }({ isGestureInProgress: sharedValue2, channelId, width, translateX: sharedValue, enabled: !tmp11[0] && !tmp10 });
  obj3 = { gestureEnabled: tmp15, height, maxTranslate: result, thresholdTranslate: 0.5 * height, translateY: sharedValue1 };
  const withRefResult = function useSwipeToChatGesture(width) {
    let enabled;
    let isGestureInProgress;
    let translateX;
    width = width.width;
    const channelId = width;
    ({ translateX, enabled, isGestureInProgress } = width);
    let obj = channelId(ref[16]);
    const fn = function u() {
      const items = [0.229, -width];
      return items;
    };
    fn.__closure = { width };
    fn.__workletHash = 15383459308604;
    fn.__initData = closure_18;
    const fn2 = function c() {
      width(closure_2[16]).runOnJS(width(closure_2[17]).dismissKeyboard)();
    };
    obj = {};
    const derivedValue = obj.useDerivedValue(fn);
    obj.runOnJS = channelId(ref[16]).runOnJS;
    obj.dismissKeyboard = channelId(ref[17]).dismissKeyboard;
    fn2.__closure = obj;
    fn2.__workletHash = 4086900686382;
    fn2.__initData = closure_19;
    const callback = ref2.useCallback(fn2, []);
    obj = { lowerBounds: -width, upperBounds: 0, translate: translateX, vertical: false, snapPositions: derivedValue, onStart: callback, isGestureInProgress };
    const obj4 = guildId(ref[18])(obj);
    const items = [-closure_13, closure_13];
    const enabledResult = guildId(ref[18])(obj).enabled(enabled);
    const items1 = [-obj, obj];
    return guildId(ref[18])(obj).enabled(enabled).failOffsetY(items).activeOffsetX(items1);
  }({ isGestureInProgress: sharedValue2, channelId, width, translateX: sharedValue, enabled: !tmp11[0] && !tmp10 }).withRef(ref);
  const obj15 = importDefault(dependencyMap[25])(obj3);
  const items3 = [channelId];
  const result1 = importDefault(dependencyMap[25])(obj3).withRef(ref3).requireExternalGestureToFail(ref2, ref1);
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    const result = channelId(ref[26]).maybeShowAgeGateModal(channelId);
  }, items3);
  const withRefResult1 = importDefault(dependencyMap[25])(obj3).withRef(ref3);
  function oe() {
    let obj = { flex: 1 };
    obj = {};
    const items = [0.229, result];
    const items1 = [0.229, result];
    obj.translateY = channelId(ref[16]).interpolate(sharedValue1.get(), items, items1);
    const items2 = [obj];
    obj.transform = items2;
    return obj;
  }
  obj4 = { interpolate: arg1(dependencyMap[16]).interpolate, translateY: sharedValue1, maxVerticalTranslate: result };
  oe.__closure = obj4;
  oe.__workletHash = 8643926178558;
  oe.__initData = closure_26;
  const items4 = [ref2, ref3, ref, ref1, sharedValue, width, channelId];
  const animatedStyle = arg1(dependencyMap[16]).useAnimatedStyle(oe);
  let tmp27 = null;
  if (null != stateFromStores) {
    obj5 = { value: tmp18(importDefault(dependencyMap[24]).CHANNEL_CALL).analyticsLocations };
    const obj6 = {};
    const Gesture = arg1(dependencyMap[27]).Gesture;
    obj6.gesture = Gesture.Exclusive(withRefResult, result1);
    obj7 = { style: animatedStyle };
    const obj8 = { value: tmp26 };
    const obj9 = { channelId };
    const items5 = [callback5(closure_17, obj9), ];
    obj10 = { channel: stateFromStores };
    items5[1] = callback5(ChannelCallCameraPreview, obj10);
    obj8.children = items5;
    obj7.children = callback6(arg1(dependencyMap[28]).VoiceChatNavigationContext.Provider, obj8);
    obj6.children = callback5(importDefault(dependencyMap[16]).View, obj7);
    obj5.children = callback5(arg1(dependencyMap[27]).GestureDetector, obj6);
    tmp27 = callback5(arg1(dependencyMap[23]).AnalyticsLocationProvider, obj5);
  }
  return tmp27;
});
ChannelCallModal.modalConfig = { animation: arg1(dependencyMap[7]).ModalAnimation.SLIDE_UP, shouldPersistUnderModals: true };
const tmp4 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[29]).fileFinishedImporting("modules/video_calls/native/components/ChannelCallModal.tsx");

export default ChannelCallModal;
export { ChannelCallCameraPreview };
export { ChannelCallModal };
