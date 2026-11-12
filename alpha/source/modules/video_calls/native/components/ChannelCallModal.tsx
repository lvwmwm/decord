// Module ID: 12617
// Function ID: 12618
// Name: ChannelCallModal
// Dependencies: [32, 19, 6953, 5092, 10934, 10935, 12618, 1072, 21, 10938, 12619, 5429, 12622, 12806, 11761, 12807, 1652, 1705, 5438, 13017, 504, 1493, 12620, 13018, 7852, 7871, 13931, 6837, 5535, 10940, 2]

// Module 12617 (ChannelCallModal)
import Constants2 from "Constants" /* 1072 */;
import _mod1705 from "module_1705" /* 1705 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5429 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 6837 */;
import ChannelCallConstants from "ChannelCallConstants" /* 10935 */;
import VoiceChatHooks from "VoiceChatHooks" /* 10938 */;
import RevealProvider from "RevealProvider" /* 12619 */;
import CameraPreviewDefault from "CameraPreview" /* 12622 */;
import ChannelCallModalManagerDefault from "ChannelCallModalManager" /* 12806 */;
import ChannelCallNavigatorDefault from "ChannelCallNavigator" /* 12807 */;
import RouteManagerUtils from "RouteManagerUtils" /* 13018 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6953 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import ChannelCallStore from "ChannelCallStore" /* 10934 */;
import Constants from "Constants" /* 12618 */;
import Fragment from "Fragment" /* 21 */;
import size_mod from "module_2" /* 2 */;

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
const VoiceChatDrawerState = ChannelCallConstants.VoiceChatDrawerState;
({ PAN_GESTURE_FAIL_OFFSET_Y: map1, SWIPE_TO_CHAT_ACTIVE_OFFSET: closure_14 } = Constants);
const ModalAnimation = Constants2.ModalAnimation;
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let closure_18 = react.memo(function NavigatorContainer(arg0) {
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
let closure_19 = { code: "(function ChannelCallModalTsx1(){let[width]=this.__closure;return[0,-width];})" };
let closure_20 = { code: "(function ChannelCallModalTsx2(){let[scheduleOnRN,dismissKeyboard]=this.__closure;scheduleOnRN(dismissKeyboard);})" };
let closure_21 = { code: "(function ChannelCallModalTsx3(){let[voiceChatDrawerStoreState]=this.__closure;return voiceChatDrawerStoreState;})" };
let closure_22 = { code: "(function ChannelCallModalTsx4(){let[translateX,width]=this.__closure;translateX.set(-width);})" };
let closure_23 = { code: "(function ChannelCallModalTsx5(){let[isSwipeToChatInProgress,translateX,width,voiceChatDrawerState,VoiceChatDrawerState]=this.__closure;const chatGestureFinished=!isSwipeToChatInProgress.get();const drawerIsInSettledPosition=translateX.get()===-width||translateX.get()===0;const chatOpen=voiceChatDrawerState.get()===VoiceChatDrawerState.OPEN;const chatClosed=voiceChatDrawerState.get()===VoiceChatDrawerState.CLOSED;if(chatGestureFinished&&drawerIsInSettledPosition){return translateX.get()===-width?VoiceChatDrawerState.OPEN:VoiceChatDrawerState.CLOSED;}else if(chatOpen&&translateX.get()>-width){return VoiceChatDrawerState.CLOSING;}else if(chatClosed&&translateX.get()<0){return VoiceChatDrawerState.OPENING;}else{return null;}})" };
let closure_24 = { code: "(function ChannelCallModalTsx6(state,previousState){let[scheduleOnRN,setVoiceChatDrawerState,channelId,VoiceChatDrawerState,transitionToVoiceRoute,guildId]=this.__closure;if(state===previousState)return;if(state!=null&&state!==previousState){scheduleOnRN(setVoiceChatDrawerState,channelId,state);if(state===VoiceChatDrawerState.OPEN){scheduleOnRN(transitionToVoiceRoute,guildId,channelId);}}})" };
let closure_25 = { code: "(function ChannelCallModalTsx7(){let[voiceChatDrawerState]=this.__closure;return voiceChatDrawerState.get();})" };
let closure_26 = { code: "(function ChannelCallModalTsx8(drawerState,drawerStatePrev){let[VoiceChatDrawerState,translateX,withPanGestureTiming]=this.__closure;if(drawerState===VoiceChatDrawerState.CLOSED&&drawerStatePrev===VoiceChatDrawerState.OPEN){translateX.set(withPanGestureTiming(0));}})" };
let closure_27 = { code: "(function ChannelCallModalTsx9(){let[interpolate,translateY,maxVerticalTranslate]=this.__closure;return{flex:1,transform:[{translateY:interpolate(translateY.get(),[0,maxVerticalTranslate],[0,maxVerticalTranslate])}]};})" };
let closure_28 = { code: "(function ChannelCallModalTsx10(){let[immediate,translateX,width,withPanGestureTiming]=this.__closure;if(immediate===true){translateX.set(-width);}else{translateX.set(withPanGestureTiming(-width));}})" };
let closure_29 = { code: "(function ChannelCallModalTsx11(){let[translateX,withPanGestureTiming]=this.__closure;translateX.set(withPanGestureTiming(0));})" };
let closure_30 = react.memo(function SwipeableCallModal(channelId) {
  let Gesture;
  let GestureDetector;
  let Provider;
  let View;
  let c7;
  let items23;
  let obj10;
  let obj12;
  let obj13;
  let setIsSwipeToChatDisabled;
  let tmp10;
  let tmp17;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp41;
  let tmp42;
  let tmp43;
  let tmp44;
  let tmp45;
  let tmp46;
  let tmp49;
  let tmp50;
  let tmp52;
  let tmp53;
  let tmp54;
  let tmp60;
  let tmp61;
  let tmp62;
  let tmp63;
  let tmp9;
  channelId = channelId.channelId;
  let guildId = channelId.guildId;
  let ref1;
  let ref3;
  let width;
  c7 = undefined;
  let obj2;
  state = undefined;
  const tmp = channelId;
  let tmp2 = ref1;
  let obj = channelId(ref1[20]);
  let items = [width];
  let items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const ref = ref3.useRef(undefined);
  ref1 = ref3.useRef(undefined);
  const ref2 = ref3.useRef(undefined);
  ref3 = ref3.useRef(undefined);
  const obj4 = channelId(ref1[16]);
  const sharedValue = obj4.useSharedValue(0);
  const obj5 = channelId(ref1[16]);
  const sharedValue1 = obj5.useSharedValue(0);
  const voiceChatDrawerState = state().voiceChatDrawerState;
  let items2 = [closure_21, voiceChatDrawerState];
  let c0;
  [tmp9, tmp10] = items2;
  const obj6 = channelId(ref1[16]);
  class ChannelCallModalTsx3 {
    constructor() {
      return c0;
    }
  }
  const items3 = [tmp10];
  ChannelCallModalTsx3.__closure = items3;
  ChannelCallModalTsx3.__workletHash = 15324156023248;
  ChannelCallModalTsx3.__initData = tmp9;
  const derivedValue = obj6.useDerivedValue(ChannelCallModalTsx3);
  size = ref(tmp2[21])();
  width = size.width;
  const height = size.height;
  const tmpResult = tmp(tmp2[16]);
  const sharedValue2 = tmpResult.useSharedValue(false);
  let result = 0.8 * height;
  const tmp15 = ref(tmp2[22])(channelId);
  [tmp17, c7] = ref2(ref3.useState(false), 2);
  let tmp18 = !tmp15;
  ref2(ref3.useState(false), 2);
  if (tmp18) {
    let isGuildStageVoiceResult;
    if (stateFromStores != null) {
      isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
    }
    tmp18 = !isGuildStageVoiceResult;
  }
  obj2 = { channelId, guildId };
  state = obj3.useRef(obj2);
  const effect = obj3.useEffect(() => {
    ref.current = obj2;
  });
  const items4 = [width, sharedValue];
  const effect1 = obj3.useEffect(() => {
    let tmp10;
    let tmp11;
    let tmp9;
    const current = ref.current;
    channelId = current.channelId;
    const guildId = current.guildId;
    const chatOpen = ref.getState().voiceChatDrawerState === VoiceChatDrawerState.OPEN || ChannelRTCStore.getChatOpen(channelId);
    if (chatOpen) {
      const items = [closure_22, sharedValue, width];
      let c0;
      let c1;
      [tmp9, tmp10, tmp11] = items;
      const obj = _mod1705;
      class ChannelCallModalTsx4 {
        constructor() {
          result = closure_0.set(-closure_1);
          return;
        }
      }
      const items1 = [tmp10, tmp11];
      ChannelCallModalTsx4.__closure = items1;
      ChannelCallModalTsx4.__workletHash = 17212390568465;
      ChannelCallModalTsx4.__initData = tmp9;
      obj.scheduleOnUI(ChannelCallModalTsx4);
      const tmp3Result = _mod1705;
      tmp3Result.scheduleOnRN(RouteManagerUtils.transitionToVoiceRoute, guildId, channelId);
    }
  }, items4);
  const tmp12Result = ref(tmp2[24]);
  const analyticsLocations = tmp12Result(tmp12(tmp2[25]).CHANNEL_CALL).analyticsLocations;
  const items5 = [closure_23, sharedValue2, sharedValue, width, derivedValue, VoiceChatDrawerState];
  c0 = undefined;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp26, tmp27, tmp28, tmp29, tmp30, tmp31] = items5;
  const tmpResult5 = tmp(tmp2[16]);
  class ChannelCallModalTsx5 {
    constructor() {
      let CLOSING;
      let tmp7;
      const value = _undefined.get();
      const tmp3 = _undefined2.get() === -c2 || 0 === obj.get();
      const value3 = _undefined3.get();
      const OPEN = _undefined4.OPEN;
      const value4 = _undefined3.get();
      const CLOSED = _undefined4.CLOSED;
      if (!value) {
        if (tmp3) {
          tmp7 = obj.get() === -tmp2 ? tmp5.OPEN : tmp5.CLOSED;
        }
        return tmp7;
      }
      if (value3 === OPEN) {
        if (_undefined2.get() > -c2) {
          CLOSING = tmp5.CLOSING;
        }
        tmp7 = CLOSING;
      }
      CLOSING = null;
      if (value4 === CLOSED) {
        CLOSING = null;
        if (_undefined2.get() < 0) {
          CLOSING = tmp5.OPENING;
        }
      }
    }
  }
  const items6 = [tmp27, tmp28, tmp29, tmp30, tmp31];
  ChannelCallModalTsx5.__closure = items6;
  ChannelCallModalTsx5.__workletHash = 604699116380;
  ChannelCallModalTsx5.__initData = tmp26;
  const items7 = [closure_24, , , , , , ];
  const useAnimatedReaction = tmpResult5.useAnimatedReaction;
  items7[1] = tmp(tmp2[17]).scheduleOnRN;
  items7[2] = closure_10;
  items7[3] = channelId;
  items7[4] = VoiceChatDrawerState;
  items7[5] = tmp(tmp2[23]).transitionToVoiceRoute;
  items7[6] = guildId;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  let c5;
  [tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38] = items7;
  class ChannelCallModalTsx6 {
    constructor(arg0, arg1) {
      const tmp2 = tmp && null != arg0 && tmp;
      if (tmp2) {
        _undefined(c1, c2, arg0);
        const tmp4 = _undefined;
        const tmp6 = c2;
        if (arg0 === _undefined2.OPEN) {
          tmp4(c4, c5, tmp6);
        }
      }
    }
  }
  const items8 = [tmp33, tmp34, tmp35, tmp36, tmp37, tmp38];
  ChannelCallModalTsx6.__closure = items8;
  ChannelCallModalTsx6.__workletHash = 9630592184087;
  ChannelCallModalTsx6.__initData = tmp32;
  const animatedReaction = useAnimatedReaction(ChannelCallModalTsx5, ChannelCallModalTsx6);
  const items9 = [closure_25, derivedValue];
  c0 = undefined;
  [tmp41, tmp42] = items9;
  const tmpResult6 = tmp(tmp2[16]);
  class ChannelCallModalTsx7 {
    constructor() {
      return _undefined.get();
    }
  }
  const items10 = [tmp42];
  ChannelCallModalTsx7.__closure = items10;
  ChannelCallModalTsx7.__workletHash = 1239997635149;
  ChannelCallModalTsx7.__initData = tmp41;
  const items11 = [closure_26, VoiceChatDrawerState, sharedValue, ];
  const useAnimatedReaction2 = tmpResult6.useAnimatedReaction;
  items11[3] = tmp(tmp2[19]).withPanGestureTiming;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp43, tmp44, tmp45, tmp46] = items11;
  class ChannelCallModalTsx8 {
    constructor(arg0, arg1) {
      const tmp2 = arg0 === _undefined.CLOSED && arg1 === tmp.OPEN;
      if (tmp2) {
        const result = _undefined2.set(_undefined3(0));
      }
    }
  }
  const items12 = [tmp44, tmp45, tmp46];
  ChannelCallModalTsx8.__closure = items12;
  ChannelCallModalTsx8.__workletHash = 17096813907815;
  ChannelCallModalTsx8.__initData = tmp43;
  const animatedReaction2 = useAnimatedReaction2(ChannelCallModalTsx7, ChannelCallModalTsx8);
  const items13 = [closure_19, width];
  c0 = undefined;
  const tmp48 = !tmp17 && !tmp15;
  [tmp49, tmp50] = items13;
  const tmpResult7 = tmp(tmp2[16]);
  class ChannelCallModalTsx1 {
    constructor() {
      const items = [0, -c0];
      return items;
    }
  }
  const items14 = [tmp50];
  ChannelCallModalTsx1.__closure = items14;
  ChannelCallModalTsx1.__workletHash = 14039317631813;
  ChannelCallModalTsx1.__initData = tmp49;
  const items15 = [closure_20, , ];
  const derivedValue1 = tmpResult7.useDerivedValue(ChannelCallModalTsx1);
  const useCallback = ref3.useCallback;
  items15[1] = tmp(tmp2[17]).scheduleOnRN;
  items15[2] = tmp(tmp2[18]).dismissKeyboard;
  c0 = undefined;
  c1 = undefined;
  [tmp52, tmp53, tmp54] = items15;
  class ChannelCallModalTsx2 {
    constructor() {
      _undefined(c1);
    }
  }
  const items16 = [tmp53, tmp54];
  ChannelCallModalTsx2.__closure = items16;
  ChannelCallModalTsx2.__workletHash = 11314755717750;
  ChannelCallModalTsx2.__initData = tmp52;
  const callback = useCallback(ChannelCallModalTsx2, []);
  const obj7 = { lowerBounds: -width, upperBounds: 0, translate: sharedValue, vertical: false, snapPositions: derivedValue1, onStart: callback, isGestureInProgress: sharedValue2 };
  const items17 = [-closure_13, closure_13];
  const obj11 = ref(tmp2[19])(obj7);
  const items18 = [-closure_14, closure_14];
  const enabledResult = obj11.enabled(tmp48);
  const failOffsetYResult = enabledResult.failOffsetY(items17);
  const activeOffsetXResult = failOffsetYResult.activeOffsetX(items18);
  const obj8 = { gestureEnabled: tmp18, height, maxTranslate: result, thresholdTranslate: 0.5 * height, translateY: sharedValue1 };
  const withRefResult = activeOffsetXResult.withRef(ref);
  const items19 = [channelId];
  const obj16 = ref(tmp2[26])(obj8);
  const withRefResult1 = obj16.withRef(ref3);
  let result1 = withRefResult1.requireExternalGestureToFail(ref2, ref1);
  const layoutEffect = obj3.useLayoutEffect(() => {
    const obj = PrivateChannelCallUtils;
    const result = obj.maybeShowAgeGateModal(channelId);
  }, items19);
  const items20 = [closure_27, , , ];
  const useAnimatedStyle = tmp(tmp2[16]).useAnimatedStyle;
  tmp(tmp2[16]);
  items20[1] = tmp(tmp2[16]).interpolate;
  items20[2] = sharedValue1;
  items20[3] = result;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp60, tmp61, tmp62, tmp63] = items20;
  class ChannelCallModalTsx9 {
    constructor() {
      let items;
      let items1;
      let items2;
      const obj = { flex: 1, transform: items2 };
      obj2 = { translateY: _undefined(_undefined2.get(), items, items1) };
      items = [0, c2];
      items1 = [0, c2];
      items2 = [obj2];
      return obj;
    }
  }
  const items21 = [tmp61, tmp62, tmp63];
  ChannelCallModalTsx9.__closure = items21;
  ChannelCallModalTsx9.__workletHash = 7616891402023;
  ChannelCallModalTsx9.__initData = tmp60;
  const items22 = [ref2, ref3, ref, ref1, sharedValue, width, channelId];
  const animatedStyle = useAnimatedStyle(ChannelCallModalTsx9);
  let tmp66 = null;
  if (null != stateFromStores) {
    const obj9 = { value: analyticsLocations, children: closure_15(GestureDetector, obj10) };
    const AnalyticsLocationProvider = tmp(tmp2[24]).AnalyticsLocationProvider;
    obj10 = { gesture: Gesture.Exclusive(withRefResult, result1), children: closure_15(View, obj12) };
    GestureDetector = tmp(tmp2[28]).GestureDetector;
    Gesture = tmp(tmp2[28]).Gesture;
    obj12 = { style: animatedStyle, children: closure_16(Provider, obj13) };
    View = tmp12(tmp2[16]).View;
    obj13 = { value: tmp65, children: items23 };
    const obj14 = { channelId };
    Provider = tmp(tmp2[29]).VoiceChatNavigationContext.Provider;
    items23 = [closure_15(closure_18, obj14), ];
    const obj15 = { channel: stateFromStores };
    items23[1] = closure_15(ChannelCallCameraPreview, obj15);
    tmp66 = closure_15(AnalyticsLocationProvider, obj9);
  }
  return tmp66;
});
ChannelCallModal.modalConfig = { animation: ModalAnimation.SLIDE_UP, shouldPersistUnderModals: true };
let size = size_mod;
let result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallModal.tsx");

export default ChannelCallModal;
export { ChannelCallCameraPreview };
export { ChannelCallModal };
