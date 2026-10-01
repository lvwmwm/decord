// Module ID: 17007
// Function ID: 17008
// Name: VoicePanelMicButton
// Dependencies: [32, 19, 4853, 2101, 502, 2045, 1993, 4469, 1372, 4855, 21, 3, 4836, 504, 6763, 9463, 9478, 11754, 4566, 16918, 4801, 8974, 6073, 17008, 17009, 1115, 9465, 4832, 9138, 9464, 2]
// Exports: MicButton, PTTButton

// Module 17007 (VoicePanelMicButton)
import LoggerDefault from "Logger" /* 3 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import HapticUtils from "HapticUtils" /* 4801 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6073 */;
import MediaEngineActionCreators from "MediaEngineActionCreators" /* 8974 */;
import VoiceActionUtils from "VoiceActionUtils" /* 9463 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 4853 */;
import ImpersonateStore from "ImpersonateStore" /* 2101 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import UserStore from "UserStore" /* 1372 */;
import VoiceStateStore from "VoiceStateStore" /* 4855 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, channel, currentUser, info;

let closure_14;
let closure_15;
let map1;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = Fragment);
let tmp3 = new LoggerDefault("VoicePanelMicButton");
let closure_16 = tmp3;
let closure_17 = createStyles.createStyles({ text: { position: "absolute", left: 0, right: 0, bottom: 4, textAlign: "center", opacity: 0.5 } });
let closure_18 = { code: "function VoicePanelMicButtonTsx1(){const{runOnJS,handlePTTEnd}=this.__closure;runOnJS(handlePTTEnd)();}" };
let closure_19 = { code: "function VoicePanelMicButtonTsx2(event,manager){const{State,runOnJS,handleDragStart}=this.__closure;if(event.state!==State.BEGAN)return;manager.activate();runOnJS(handleDragStart)();}" };
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelMicButton.tsx");

export const PTTButton = function PTTButton(arg0) {
  let MicrophoneIcon;
  let _undefined;
  let c0;
  let closure_3;
  let closure_4;
  let color;
  let element;
  let intl;
  let intl2;
  let items10;
  let items11;
  let mute;
  let onPress;
  let props;
  let tmp2Result;
  let tmp5;
  let wrapperSpecs;
  _require = undefined;
  let onPress2;
  let sharedValue;
  _slicedToArray = undefined;
  react = undefined;
  let onPressIn;
  let callback1;
  let callback3;
  ({ props, wrapperSpecs } = arg0);
  let obj = react;
  let tmp2 = onPress2;
  let tmp = closure_17();
  const channelId = react.useContext(onPress2(sharedValue[17])).channelId;
  [tmp5, c0] = _slicedToArray(react.useState(false), 2);
  const tmp4 = _slicedToArray(react.useState(false), 2);
  let closure_1 = react.useRef(null);
  let obj2 = require("get initialized");
  const items = [ChannelStore, callback3, VoiceStateStore, MediaEngineStore, PermissionStore, callback1, onPressIn];
  const items1 = [channelId];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    let muteStates;
    channel = channel.getChannel(channelId);
    if (null != channel) {
      const obj = { channel, authenticationStore, voiceStateStore, mediaEngineStore, permissionStore, impersonateStore };
      const obj2 = mute(voicePanelButtonStyles[14]);
      muteStates = obj2.getMuteStates(obj);
    } else {
      muteStates = { selfMute: false, suppress: false, mute: false };
    }
    const current = ref.current;
    let selfMute;
    if (current != null) {
      selfMute = current.selfMute;
    }
    let tmp11 = selfMute !== muteStates.selfMute;
    if (tmp11) {
      currentUser = currentUser.getCurrentUser();
      let isStaffResult;
      if (currentUser != null) {
        isStaffResult = currentUser.isStaff();
      }
      tmp11 = isStaffResult;
    }
    if (tmp11) {
      const current2 = tmp9.current;
      let selfMute1;
      info = info.info;
      if (current2 != null) {
        selfMute1 = current2.selfMute;
      }
      info("Self mute changed", selfMute1, ">", muteStates.selfMute);
    }
    ref.current = muteStates;
    const obj5 = mute(voicePanelButtonStyles[15]);
    return obj5.createMuteHandler(muteStates, null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  }, items1);
  ({ mute, onPress } = stateFromStoresObject);
  let obj3 = require("get initialized");
  const items2 = [ChannelStore, callback3, VoiceStateStore, MediaEngineStore, PermissionStore, callback1];
  const items3 = [channelId];
  const stateFromStoresObject1 = obj3.useStateFromStoresObject(items2, () => {
    let deafStates;
    channel = channel.getChannel(channelId);
    if (null != channel) {
      const obj2 = channelId(sharedValue[16]);
      deafStates = obj2.getDeafStates(channel, VoiceStateStore, MediaEngineStore, callback3);
    } else {
      deafStates = { selfDeaf: false, deaf: false };
    }
    const obj3 = channelId(sharedValue[15]);
    return obj3.createDeafHandler(deafStates);
  }, items3);
  onPress2 = stateFromStoresObject1.onPress;
  if (!stateFromStoresObject1.deaf) {
    let tmp9;
    if (mute) {
      tmp9 = onPress;
    }
    onPress2 = tmp9;
  }
  const tmp6Result = require("ReanimatedRexport");
  sharedValue = tmp6Result.useSharedValue(false);
  const tmp11 = tmp2(sharedValue[19])();
  _slicedToArray = tmp11;
  react = obj.useRef({ active: false, dragging: false });
  const items4 = [tmp11, sharedValue, onPress2];
  onPressIn = obj.useCallback(() => {
    if (!closure_4.current.active) {
      if (onPress2 != null) {
        tmp2();
      }
      tmp.current.active = true;
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      const obj2 = MediaEngineActionCreators;
      obj2.setPushToTalkState(true);
      closure_3.lock();
      const result1 = sharedValue.set(true);
      _undefined(true);
    }
  }, items4);
  const items5 = [tmp11, sharedValue];
  callback1 = obj.useCallback(() => {
    if (closure_4.current.active) {
      closure_4.current.active = false;
      closure_4.current.dragging = false;
      const obj = MediaEngineActionCreators;
      obj.setPushToTalkState(false);
      closure_3.unlock();
      const result = sharedValue.set(false);
      _undefined(false);
    }
  }, items5);
  const items6 = [callback1];
  const items7 = [onPressIn];
  const callback2 = obj.useCallback(() => {
    if (!closure_4.current.dragging) {
      callback1();
    }
  }, items6);
  callback3 = obj.useCallback(() => {
    if (!closure_4.current.dragging) {
      closure_4.current.dragging = true;
      callback();
    }
  }, items7);
  const items8 = [callback3, callback1];
  const items9 = [callback1];
  const memo = obj.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const fn = function n(state, activate) {
      const tmp = c0;
      const tmp2 = sharedValue;
      if (state.state === c0(sharedValue[22]).State.BEGAN) {
        activate.activate();
        const tmpResult = tmp(tmp2[18]);
        tmpResult.runOnJS(callback3)();
      }
    };
    const PanResult = Gesture.Pan();
    const manualActivationResult = PanResult.manualActivation(true);
    let obj = { State: LegacyBaseButton.State, runOnJS: ReanimatedRexport.runOnJS, handleDragStart: callback3 };
    fn.__closure = obj;
    fn.__workletHash = 13866422602014;
    fn.__initData = __initData2;
    const fn2 = function t() {
      const obj = c0(sharedValue[18]);
      obj.runOnJS(callback1)();
    };
    const onTouchesMoveResult = manualActivationResult.onTouchesMove(fn);
    fn2.__closure = { runOnJS: ReanimatedRexport.runOnJS, handlePTTEnd: callback1 };
    fn2.__workletHash = 12941114426646;
    fn2.__initData = __initData;
    ({ runOnJS: ReanimatedRexport.runOnJS, handlePTTEnd: callback1 });
    return onTouchesMoveResult.onFinalize(fn2);
  }, items8);
  const effect = obj.useEffect(() => () => callback1(), items9);
  const tmp6Result2 = require("VoicePanelStyles");
  const voicePanelButtonStyles = tmp6Result2.useVoicePanelButtonStyles(wrapperSpecs);
  const obj4 = { gesture: memo, children: closure_13(tmp2Result, element) };
  const GestureDetector = tmp6(tmp3[22]).GestureDetector;
  element = { onPressIn, onPressOut: callback2, props, pressed: sharedValue, accessibilityLabel: intl.string(tmp6(tmp3[25]).t.Q8gkVL), style: tmp5 ? voicePanelButtonStyles.iconBgSelected : voicePanelButtonStyles.iconBg, children: closure_13(MicrophoneIcon, { color, size: "lg" }) };
  tmp2Result = tmp2(sharedValue[24]);
  intl = tmp6(tmp3[25]).intl;
  MicrophoneIcon = tmp6(tmp3[26]).MicrophoneIcon;
  const tmp19 = closure_15;
  const tmp20 = closure_14;
  if (tmp5) {
    color = voicePanelButtonStyles.iconFillSelected.color;
  } else {
    color = voicePanelButtonStyles.iconFill.color;
  }
  const obj5 = { children: items10 };
  items10 = [closure_13(GestureDetector, obj4), ];
  const obj6 = { style: items11, variant: "text-xxs/medium", children: intl2.string(require("intl").t.Q8gkVL) };
  items11 = [tmp.text, voicePanelButtonStyles.iconFill];
  const Text = tmp6(tmp3[27]).Text;
  intl2 = tmp6(tmp3[25]).intl;
  items10[1] = closure_13(Text, obj6);
  return tmp19(tmp20, obj5);
};
export const MicButton = function MicButton(arg0) {
  let authenticationStore;
  let awaitingRemoteSessionInfo;
  let impersonateStore;
  let mediaEngineStore;
  let permissionStore;
  let props;
  let stringResult;
  let voiceStateStore;
  let wrapperSpecs;
  let mute;
  let dominantMuteState;
  let voicePanelButtonStyles;
  ({ props, wrapperSpecs } = arg0);
  const channelId = react.useContext(dominantMuteState(voicePanelButtonStyles[17])).channelId;
  let closure_1 = react.useRef(null);
  let obj = mute(voicePanelButtonStyles[13]);
  const items = [ChannelStore, AuthenticationStore, VoiceStateStore, MediaEngineStore, PermissionStore, ImpersonateStore, GameConsoleStore];
  const items1 = [channelId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let muteStates;
    channel = channel.getChannel(channelId);
    if (null != channel) {
      const obj = { channel, authenticationStore, voiceStateStore, mediaEngineStore, permissionStore, impersonateStore };
      const obj2 = mute(voicePanelButtonStyles[14]);
      muteStates = obj2.getMuteStates(obj);
    } else {
      muteStates = { selfMute: false, suppress: false, mute: false };
    }
    const current = ref.current;
    let selfMute;
    if (current != null) {
      selfMute = current.selfMute;
    }
    let tmp11 = selfMute !== muteStates.selfMute;
    if (tmp11) {
      currentUser = currentUser.getCurrentUser();
      let isStaffResult;
      if (currentUser != null) {
        isStaffResult = currentUser.isStaff();
      }
      tmp11 = isStaffResult;
    }
    if (tmp11) {
      const current2 = tmp9.current;
      let selfMute1;
      info = info.info;
      if (current2 != null) {
        selfMute1 = current2.selfMute;
      }
      info("Self mute changed", selfMute1, ">", muteStates.selfMute);
    }
    ref.current = muteStates;
    const obj5 = mute(voicePanelButtonStyles[15]);
    return obj5.createMuteHandler(muteStates, null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  }, items1);
  mute = stateFromStoresObject.mute;
  dominantMuteState = stateFromStoresObject.dominantMuteState;
  const onPress = stateFromStoresObject.onPress;
  let obj2 = mute(voicePanelButtonStyles[23]);
  voicePanelButtonStyles = obj2.useVoicePanelButtonStyles(wrapperSpecs);
  const items2 = [voicePanelButtonStyles, mute, dominantMuteState];
  const memo = react.useMemo(() => {
    let tmp3Result;
    if (dominantMuteState === VoiceActionUtils.DominantMuteState.SERVER_MUTE) {
      const obj2 = { color: voicePanelButtonStyles.iconFillRed.color };
      tmp3Result = map1(tmp(9138).MicrophoneDenyIcon, obj2);
    } else {
      let color;
      const VoicePanelRiveMicButton = tmp(9464).VoicePanelRiveMicButton;
      const tmp3 = map1;
      if (mute) {
        color = tmp5.iconFillRed.color;
      } else {
        color = tmp5.iconFill.color;
      }
      const obj = { color, muted: mute };
      tmp3Result = tmp3(VoicePanelRiveMicButton, obj);
    }
    return tmp3Result;
  }, items2);
  const element = { props, onPress, accessibilityLabel: stringResult, style: mute ? voicePanelButtonStyles.iconBgVoiceMuted : voicePanelButtonStyles.iconBg, children: memo };
  const tmp5 = dominantMuteState(voicePanelButtonStyles[24]);
  const intl = mute(voicePanelButtonStyles[25]).intl;
  const string = intl.string;
  const t = mute(voicePanelButtonStyles[25]).t;
  const tmp4 = closure_13;
  if (mute) {
    stringResult = string(t.YqAjXy);
  } else {
    stringResult = string(t.w4m945);
  }
  return tmp4(tmp5, element);
};
