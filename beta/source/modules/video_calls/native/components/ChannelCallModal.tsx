// Module ID: 8835
// Function ID: 8836
// Name: ChannelCallModal
// Dependencies: [32, 19, 4852, 2045, 8829, 8830, 8836, 1074, 21, 8833, 8837, 4692, 8842, 8937, 8839, 8938, 4566, 4701, 12297, 504, 1479, 8838, 12298, 6583, 6603, 12442, 5043, 6073, 8867, 2]

// Module 8835 (ChannelCallModal)
import Constants2 from "Constants" /* 1074 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4692 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 5043 */;
import ChannelCallConstants from "ChannelCallConstants" /* 8830 */;
import VoiceChatHooks from "VoiceChatHooks" /* 8833 */;
import RevealProvider from "RevealProvider" /* 8837 */;
import CameraPreviewDefault from "CameraPreview" /* 8842 */;
import ChannelCallModalManagerDefault from "ChannelCallModalManager" /* 8937 */;
import ChannelCallNavigatorDefault from "ChannelCallNavigator" /* 8938 */;
import PanGestureAnimations from "PanGestureAnimations" /* 12297 */;
import RouteManagerUtils from "RouteManagerUtils" /* 12298 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4852 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import ChannelCallStore from "ChannelCallStore" /* 8829 */;
import Constants from "Constants" /* 8836 */;
import Fragment from "Fragment" /* 21 */;
import size_mod from "module_2" /* 2 */;

let set;

let c10;
let c9;
let closure_14;
let closure_15;
let closure_16;
let map1;
let metroImportAll;
let metroImportDefault;
let unpackModuleId;
class ChannelCallCameraPreview {
  constructor(channel) {
    let obj4;
    channel = channel.channel;
    const tmp = unpackModuleId();
    const obj = VoiceChatHooks;
    const isConnectedToVoiceChannel = obj.useIsConnectedToVoiceChannel(channel);
    const tmp5 = state((focus) => focus.focus);
    const obj2 = RevealProvider;
    const revealProviderValue = obj2.useRevealProviderValue(tmp5, channel);
    NavigationRouteUtils;
    let tmp9 = null;
    if (isConnectedToVoiceChannel) {
      const obj3 = { value: revealProviderValue, children: closure_15(CameraPreviewDefault, obj4) };
      const Provider = RevealProvider.RevealContext.Provider;
      obj4 = { channel, participantScreenIsFocused: !tmp, isChannelCallModalOpen: tmp8 };
      tmp9 = closure_15(Provider, obj3);
    }
    return tmp9;
  }
}
class ChannelCallModal {
  constructor(channel) {
    channel = channel.channel;
    const obj = { channelId: channel.id, guildId: channel.guild_id };
    return closure_15(closure_30, obj);
  }
}
({ useChannelCallOrientationHandlers: metroImportDefault, resetChannelCallStore: metroImportAll, useChannelCallStore: c9, setVoiceChatDrawerState: c10, useIsVoiceChatFocused: unpackModuleId } = ChannelCallStore);
let VoiceChatDrawerState = ChannelCallConstants.VoiceChatDrawerState;
({ PAN_GESTURE_FAIL_OFFSET_Y: map1, SWIPE_TO_CHAT_ACTIVE_OFFSET: closure_14 } = Constants);
const ModalAnimation = Constants2.ModalAnimation;
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let closure_18 = react.memo((arg0) => {
  const channel = _slicedToArray(react.useState(ChannelStore.getChannel(arg0.channelId)), 1)[0];
  closure_7(channel);
  const items = [channel];
  const effect = react.useEffect(() => {
    if (null != first) {
      let obj = ChannelCallModalManagerDefault;
      obj.initialize(tmp);
      return () => {
        const obj = closure_1_1(closure_1_2[13]);
        obj.terminate();
        const obj2 = closure_1_1(closure_1_2[14]);
        obj2.setHidden(false);
        const obj3 = channel(closure_1_2[11]);
        if (!obj3.isModalOpen(closure_1_31)) {
          closure_1_8();
        }
      };
    }
  }, items);
  let tmp4 = null;
  if (null != channel) {
    let obj = { channel };
    tmp4 = closure_15(ChannelCallNavigatorDefault, obj);
  }
  return tmp4;
});
const __initData = { code: "function ChannelCallModalTsx1(){const{width}=this.__closure;return[0,-width];}" };
const __initData2 = { code: "function ChannelCallModalTsx2(){const{runOnJS,dismissKeyboard}=this.__closure;runOnJS(dismissKeyboard)();}" };
const __initData3 = { code: "function ChannelCallModalTsx3(){const{voiceChatDrawerStoreState}=this.__closure;return voiceChatDrawerStoreState;}" };
let closure_22 = { code: "function ChannelCallModalTsx4(){const{translateX,width}=this.__closure;translateX.set(-width);}" };
const __initData4 = { code: "function ChannelCallModalTsx5(){const{isSwipeToChatInProgress,translateX,width,voiceChatDrawerState,VoiceChatDrawerState}=this.__closure;const chatGestureFinished=!isSwipeToChatInProgress.get();const drawerIsInSettledPosition=translateX.get()===-width||translateX.get()===0;const chatOpen=voiceChatDrawerState.get()===VoiceChatDrawerState.OPEN;const chatClosed=voiceChatDrawerState.get()===VoiceChatDrawerState.CLOSED;if(chatGestureFinished&&drawerIsInSettledPosition){return translateX.get()===-width?VoiceChatDrawerState.OPEN:VoiceChatDrawerState.CLOSED;}else if(chatOpen&&translateX.get()>-width){return VoiceChatDrawerState.CLOSING;}else if(chatClosed&&translateX.get()<0){return VoiceChatDrawerState.OPENING;}else{return null;}}" };
const __initData5 = { code: "function ChannelCallModalTsx6(state,previousState){const{runOnJS,setVoiceChatDrawerState,channelId,VoiceChatDrawerState,transitionToVoiceRoute,guildId}=this.__closure;if(state===previousState)return;if(state!=null&&state!==previousState){runOnJS(setVoiceChatDrawerState)(channelId,state);if(state===VoiceChatDrawerState.OPEN){runOnJS(transitionToVoiceRoute)(guildId,channelId);}}}" };
const __initData6 = { code: "function ChannelCallModalTsx7(){const{voiceChatDrawerState}=this.__closure;return voiceChatDrawerState.get();}" };
const __initData7 = { code: "function ChannelCallModalTsx8(drawerState,drawerStatePrev){const{VoiceChatDrawerState,translateX,withPanGestureTiming}=this.__closure;if(drawerState===VoiceChatDrawerState.CLOSED&&drawerStatePrev===VoiceChatDrawerState.OPEN){translateX.set(withPanGestureTiming(0));}}" };
const __initData8 = { code: "function ChannelCallModalTsx9(){const{interpolate,translateY,maxVerticalTranslate}=this.__closure;return{flex:1,transform:[{translateY:interpolate(translateY.get(),[0,maxVerticalTranslate],[0,maxVerticalTranslate])}]};}" };
let closure_28 = { code: "function ChannelCallModalTsx10(){const{immediate,translateX,width,withPanGestureTiming}=this.__closure;if(immediate===true){translateX.set(-width);}else{translateX.set(withPanGestureTiming(-width));}}" };
let closure_29 = { code: "function ChannelCallModalTsx11(){const{translateX,withPanGestureTiming}=this.__closure;translateX.set(withPanGestureTiming(0));}" };
let closure_30 = react.memo((channelId) => {
  let Gesture;
  let GestureDetector;
  let Provider;
  let View;
  let c12;
  let c13;
  let items7;
  let obj16;
  let obj18;
  let obj19;
  let setIsSwipeToChatDisabled;
  let tmp15;
  channelId = channelId.channelId;
  let guildId = channelId.guildId;
  let ref2;
  let sharedValue;
  let derivedValue;
  c13 = undefined;
  let obj2;
  let ref;
  const tmp = channelId;
  let tmp2 = ref;
  let obj = channelId(ref[19]);
  let items = [sharedValue];
  let items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let obj3 = ref2;
  ref = ref2.useRef(undefined);
  const ref1 = ref2.useRef(undefined);
  ref2 = ref2.useRef(undefined);
  const ref3 = ref2.useRef(undefined);
  const obj4 = channelId(ref[16]);
  sharedValue = obj4.useSharedValue(0);
  const obj5 = channelId(ref[16]);
  const sharedValue1 = obj5.useSharedValue(0);
  const voiceChatDrawerState = derivedValue().voiceChatDrawerState;
  let fn = function c() {
    return voiceChatDrawerState;
  };
  fn.__closure = { voiceChatDrawerStoreState: voiceChatDrawerState };
  fn.__workletHash = 4903837231689;
  fn.__initData = __initData3;
  const obj6 = channelId(ref[16]);
  derivedValue = obj6.useDerivedValue(fn);
  size = guildId(ref[20])();
  const width = size.width;
  const height = size.height;
  const obj7 = channelId(ref[16]);
  const sharedValue2 = obj7.useSharedValue(false);
  let result = 0.8 * height;
  VoiceChatDrawerState = result;
  const tmp13 = guildId(ref[21])(channelId);
  [tmp15, c13] = ref1(ref2.useState(false), 2);
  let tmp16 = !tmp13;
  ref1(ref2.useState(false), 2);
  if (tmp16) {
    let isGuildStageVoiceResult;
    if (stateFromStores != null) {
      isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
    }
    tmp16 = !isGuildStageVoiceResult;
  }
  obj2 = { channelId, guildId };
  ref = obj3.useRef(obj2);
  const effect = obj3.useEffect(() => {
    ref.current = obj2;
  });
  let items2 = [width, sharedValue];
  const effect1 = obj3.useEffect(() => {
    const current = ref.current;
    channelId = current.channelId;
    guildId = current.guildId;
    const chatOpen = derivedValue.getState().voiceChatDrawerState === VoiceChatDrawerState.OPEN || ChannelRTCStore.getChatOpen(channelId);
    if (chatOpen) {
      const fn = function t() {
        const result = sharedValue.set(-width);
      };
      obj2 = { translateX: sharedValue, width };
      fn.__closure = obj2;
      fn.__workletHash = 15726690166344;
      fn.__initData = __initData;
      const obj = ReanimatedRexport;
      obj.runOnUI(fn)();
      const obj3 = ReanimatedRexport;
      obj3.runOnJS(RouteManagerUtils.transitionToVoiceRoute)(guildId, channelId);
    }
  }, items2);
  const tmp10Result = guildId(tmp2[23]);
  const analyticsLocations = tmp10Result(tmp10(tmp2[24]).CHANNEL_CALL).analyticsLocations;
  function ae() {
    let CLOSING;
    let tmp7;
    const value = sharedValue2.get();
    const tmp3 = sharedValue.get() === -width || 0 === obj.get();
    const value3 = derivedValue.get();
    const OPEN = VoiceChatDrawerState.OPEN;
    const value4 = derivedValue.get();
    const CLOSED = VoiceChatDrawerState.CLOSED;
    if (!value) {
      if (tmp3) {
        tmp7 = obj.get() === -tmp2 ? tmp5.OPEN : tmp5.CLOSED;
      }
      return tmp7;
    }
    if (value3 === OPEN) {
      if (sharedValue.get() > -width) {
        CLOSING = tmp5.CLOSING;
      }
      tmp7 = CLOSING;
    }
    CLOSING = null;
    if (value4 === CLOSED) {
      CLOSING = null;
      if (sharedValue.get() < 0) {
        CLOSING = tmp5.OPENING;
      }
    }
  }
  const obj8 = { isSwipeToChatInProgress: sharedValue2, translateX: sharedValue, width, voiceChatDrawerState: derivedValue, VoiceChatDrawerState };
  ae.__closure = obj8;
  ae.__workletHash = 16786813095205;
  ae.__initData = __initData4;
  function te(arg0, arg1) {
    const tmp2 = tmp && null != arg0 && tmp;
    if (tmp2) {
      const obj = ReanimatedRexport;
      obj.runOnJS(authStore)(channelId, arg0);
      const tmp7 = channelId;
      if (arg0 === VoiceChatDrawerState.OPEN) {
        const tmp4Result = ReanimatedRexport;
        tmp4Result.runOnJS(RouteManagerUtils.transitionToVoiceRoute)(guildId, tmp7);
      }
    }
  }
  const tmpResult = tmp(tmp2[16]);
  te.__closure = { runOnJS: tmp(tmp2[16]).runOnJS, setVoiceChatDrawerState: width, channelId, VoiceChatDrawerState, transitionToVoiceRoute: tmp(tmp2[22]).transitionToVoiceRoute, guildId };
  te.__workletHash = 14188334620807;
  te.__initData = __initData5;
  ({ runOnJS: tmp(tmp2[16]).runOnJS, setVoiceChatDrawerState: width, channelId, VoiceChatDrawerState, transitionToVoiceRoute: tmp(tmp2[22]).transitionToVoiceRoute, guildId });
  const animatedReaction = tmpResult.useAnimatedReaction(ae, te);
  function re() {
    return derivedValue.get();
  }
  re.__closure = { voiceChatDrawerState: derivedValue };
  re.__workletHash = 14044794538420;
  re.__initData = __initData6;
  function ne(arg0, arg1) {
    const tmp2 = arg0 === VoiceChatDrawerState.CLOSED && arg1 === tmp.OPEN;
    if (tmp2) {
      set = sharedValue.set;
      const obj = PanGestureAnimations;
      const result = set(obj.withPanGestureTiming(0));
    }
  }
  const tmpResult4 = tmp(tmp2[16]);
  ne.__closure = { VoiceChatDrawerState, translateX: sharedValue, withPanGestureTiming: tmp(tmp2[18]).withPanGestureTiming };
  ne.__workletHash = 260500087614;
  ne.__initData = __initData7;
  ({ VoiceChatDrawerState, translateX: sharedValue, withPanGestureTiming: tmp(tmp2[18]).withPanGestureTiming });
  const animatedReaction1 = tmpResult4.useAnimatedReaction(re, ne);
  const fn2 = function u() {
    const items = [0, -width];
    return items;
  };
  const tmp24 = !tmp15 && !tmp13;
  fn2.__closure = { width };
  fn2.__workletHash = 15383459308604;
  fn2.__initData = __initData;
  const fn3 = function c() {
    const obj = channelId(ref[16]);
    obj.runOnJS(channelId(ref[17]).dismissKeyboard)();
  };
  const obj11 = { runOnJS: tmp(tmp2[16]).runOnJS, dismissKeyboard: tmp(tmp2[17]).dismissKeyboard };
  const tmpResult5 = tmp(tmp2[16]);
  const derivedValue1 = tmpResult5.useDerivedValue(fn2);
  const useCallback = obj3.useCallback;
  fn3.__closure = obj11;
  fn3.__workletHash = 4086900686382;
  fn3.__initData = __initData2;
  const callback = useCallback(fn3, []);
  const obj12 = { lowerBounds: -width, upperBounds: 0, translate: sharedValue, vertical: false, snapPositions: derivedValue1, onStart: callback, isGestureInProgress: sharedValue2 };
  const items3 = [-c13, c13];
  const obj17 = guildId(tmp2[18])(obj12);
  const items4 = [-obj2, obj2];
  const enabledResult = obj17.enabled(tmp24);
  const failOffsetYResult = enabledResult.failOffsetY(items3);
  const activeOffsetXResult = failOffsetYResult.activeOffsetX(items4);
  const obj13 = { gestureEnabled: tmp16, height, maxTranslate: result, thresholdTranslate: 0.5 * height, translateY: sharedValue1 };
  const withRefResult = activeOffsetXResult.withRef(ref);
  const items5 = [channelId];
  const obj22 = guildId(tmp2[25])(obj13);
  const withRefResult1 = obj22.withRef(ref3);
  let result1 = withRefResult1.requireExternalGestureToFail(ref2, ref1);
  const layoutEffect = obj3.useLayoutEffect(() => {
    const obj = PrivateChannelCallUtils;
    const result = obj.maybeShowAgeGateModal(channelId);
  }, items5);
  function oe() {
    let items;
    let items1;
    let items2;
    let obj3;
    const obj = { flex: 1, transform: items2 };
    obj2 = { translateY: obj3.interpolate(sharedValue1.get(), items, items1) };
    items = [0, c12];
    items1 = [0, c12];
    items2 = [obj2];
    obj3 = ReanimatedRexport;
    return obj;
  }
  const tmpResult6 = tmp(tmp2[16]);
  oe.__closure = { interpolate: tmp(tmp2[16]).interpolate, translateY: sharedValue1, maxVerticalTranslate: result };
  oe.__workletHash = 8643926178558;
  oe.__initData = __initData8;
  const items6 = [ref2, ref3, ref, ref1, sharedValue, width, channelId];
  ({ interpolate: tmp(tmp2[16]).interpolate, translateY: sharedValue1, maxVerticalTranslate: result });
  const animatedStyle = tmpResult6.useAnimatedStyle(oe);
  let tmp32 = null;
  if (null != stateFromStores) {
    const obj15 = { value: analyticsLocations, children: ref(GestureDetector, obj16) };
    const AnalyticsLocationProvider = tmp(tmp2[23]).AnalyticsLocationProvider;
    obj16 = { gesture: Gesture.Exclusive(withRefResult, result1), children: ref(View, obj18) };
    GestureDetector = tmp(tmp2[27]).GestureDetector;
    Gesture = tmp(tmp2[27]).Gesture;
    obj18 = { style: animatedStyle, children: closure_16(Provider, obj19) };
    View = tmp10(tmp2[16]).View;
    obj19 = { value: tmp31, children: items7 };
    const obj20 = { channelId };
    Provider = tmp(tmp2[28]).VoiceChatNavigationContext.Provider;
    items7 = [ref(closure_18, obj20), ];
    const obj21 = { channel: stateFromStores };
    items7[1] = ref(ChannelCallCameraPreview, obj21);
    tmp32 = ref(AnalyticsLocationProvider, obj15);
  }
  return tmp32;
});
ChannelCallModal.modalConfig = { animation: ModalAnimation.SLIDE_UP, shouldPersistUnderModals: true };
let size = size_mod;
let result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallModal.tsx");

export default ChannelCallModal;
export { ChannelCallCameraPreview };
export { ChannelCallModal };
