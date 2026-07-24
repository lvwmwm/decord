// Module ID: 15907
// Function ID: 122902
// Name: useMuteHandlers
// Dependencies: [57, 31, 4144, 1909, 1194, 1348, 4177, 3758, 1849, 4146, 33, 3, 4130, 566, 5740, 10762, 10777, 10046, 3991, 15824, 4099, 10414, 5217, 15908, 15909, 1212, 10764, 4126, 8911, 10763, 2]
// Exports: MicButton, PTTButton

// Module 15907 (useMuteHandlers)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import importDefaultResult from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_13;
let closure_14;
let closure_15;
const require = arg1;
function useMuteHandlers(channelId) {
  const _require = channelId;
  let closure_1 = React.useRef(null);
  const items = [closure_8, closure_7, closure_12, closure_9, closure_10, closure_6, _isNativeReflectConstruct];
  const items1 = [channelId];
  return _require(566).useStateFromStoresObject(items, () => {
    const channel = outer1_8.getChannel(channelId);
    if (null != channel) {
      const obj = { channel, authenticationStore: outer1_7, voiceStateStore: outer1_12, mediaEngineStore: outer1_9, permissionStore: outer1_10, impersonateStore: outer1_6 };
      let muteStates = channelId(outer1_2[14]).getMuteStates(obj);
      const obj2 = channelId(outer1_2[14]);
    } else {
      muteStates = { selfMute: false, suppress: false, mute: false };
    }
    const current = ref.current;
    let selfMute;
    if (null != current) {
      selfMute = current.selfMute;
    }
    let isStaffResult = selfMute !== muteStates.selfMute;
    if (isStaffResult) {
      const currentUser = outer1_11.getCurrentUser();
      isStaffResult = null != currentUser;
      const obj4 = currentUser;
    }
    if (isStaffResult) {
      isStaffResult = obj4.isStaff();
    }
    if (isStaffResult) {
      const current2 = ref.current;
      let selfMute1;
      if (null != current2) {
        selfMute1 = current2.selfMute;
      }
      outer1_16.info("Self mute changed", selfMute1, ">", muteStates.selfMute);
      const tmp13 = outer1_16;
    }
    ref.current = muteStates;
    return channelId(outer1_2[15]).createMuteHandler(muteStates, null != outer1_5.getAwaitingRemoteSessionInfo());
  }, items1);
}
({ jsx: closure_13, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
importDefaultResult = new importDefaultResult("VoicePanelMicButton");
let closure_17 = _createForOfIteratorHelperLoose.createStyles({ text: { position: "absolute", left: 0, right: 0, bottom: 4, textAlign: "center", opacity: 0.5 } });
let closure_18 = { code: "function VoicePanelMicButtonTsx1(){const{runOnJS,handlePTTEnd}=this.__closure;runOnJS(handlePTTEnd)();}" };
let closure_19 = { code: "function VoicePanelMicButtonTsx2(event,manager){const{State,runOnJS,handleDragStart}=this.__closure;if(event.state!==State.BEGAN)return;manager.activate();runOnJS(handleDragStart)();}" };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelMicButton.tsx");

export const PTTButton = function PTTButton(arg0) {
  let mute;
  let onPress;
  let props;
  let wrapperSpecs;
  let onPress2;
  let sharedValue;
  let callback;
  let React;
  callback = undefined;
  let callback1;
  let callback3;
  ({ props, wrapperSpecs } = arg0);
  const channelId = React.useContext(onPress2(sharedValue[17])).channelId;
  const tmp2 = callback(React.useState(false), 2);
  const first = tmp2[0];
  const _require = tmp2[1];
  const tmp = callback3();
  ({ mute, onPress } = useMuteHandlers(channelId));
  const tmp5 = (function useDeafHandlers(channelId) {
    const callback = channelId;
    const items = [outer1_8, callback3, outer1_12, outer1_9, outer1_10, callback1];
    const items1 = [channelId];
    return callback(sharedValue[13]).useStateFromStoresObject(items, () => {
      const channel = outer2_8.getChannel(channelId);
      if (null != channel) {
        const obj2 = channelId(sharedValue[16]);
        let deafStates = obj2.getDeafStates(channel, outer2_12, outer2_9, callback3);
      } else {
        deafStates = { selfDeaf: false, deaf: false };
      }
      return channelId(sharedValue[15]).createDeafHandler(deafStates);
    }, items1);
  })(channelId);
  onPress2 = tmp5.onPress;
  if (!tmp5.deaf) {
    let tmp6;
    if (mute) {
      tmp6 = onPress;
    }
    onPress2 = tmp6;
  }
  let obj = _require(sharedValue[18]);
  sharedValue = obj.useSharedValue(false);
  const tmp8 = onPress2(sharedValue[19])();
  callback = tmp8;
  React = React.useRef({ active: false, dragging: false });
  let items = [tmp8, sharedValue, onPress2];
  callback = React.useCallback(() => {
    if (!result.current.active) {
      if (null != onPress2) {
        onPress2();
      }
      result.current.active = true;
      const result = callback(sharedValue[20]).triggerHapticFeedback(callback(sharedValue[20]).HapticFeedbackTypes.IMPACT_MEDIUM);
      const obj = callback(sharedValue[20]);
      callback(sharedValue[21]).setPushToTalkState(true);
      _undefined.lock();
      const result1 = sharedValue.set(true);
      callback(true);
      const obj2 = callback(sharedValue[21]);
    }
  }, items);
  let items1 = [tmp8, sharedValue];
  callback1 = React.useCallback(() => {
    if (result.current.active) {
      result.current.active = false;
      result.current.dragging = false;
      callback(sharedValue[21]).setPushToTalkState(false);
      _undefined.unlock();
      const result = sharedValue.set(false);
      callback(false);
      const obj = callback(sharedValue[21]);
    }
  }, items1);
  const items2 = [callback1];
  const items3 = [callback];
  const callback2 = React.useCallback(() => {
    if (!result.current.dragging) {
      callback1();
    }
  }, items2);
  callback3 = React.useCallback(() => {
    if (!result.current.dragging) {
      result.current.dragging = true;
      callback();
    }
  }, items3);
  const items4 = [callback3, callback1];
  const items5 = [callback1];
  const memo = React.useMemo(() => {
    const Gesture = callback(sharedValue[22]).Gesture;
    const PanResult = Gesture.Pan();
    const fn = function n(state, activate) {
      if (state.state === callback(sharedValue[22]).State.BEGAN) {
        activate.activate();
        callback(sharedValue[18]).runOnJS(outer1_7)();
        const obj = callback(sharedValue[18]);
      }
    };
    let obj = { State: callback(sharedValue[22]).State, runOnJS: callback(sharedValue[18]).runOnJS, handleDragStart: callback3 };
    fn.__closure = obj;
    fn.__workletHash = 13866422602014;
    fn.__initData = outer1_19;
    const manualActivationResult = Gesture.Pan().manualActivation(true);
    const fn2 = function t() {
      callback(sharedValue[18]).runOnJS(outer1_6)();
    };
    obj = { runOnJS: callback(sharedValue[18]).runOnJS, handlePTTEnd: callback1 };
    fn2.__closure = obj;
    fn2.__workletHash = 12941114426646;
    fn2.__initData = outer1_18;
    return Gesture.Pan().manualActivation(true).onTouchesMove(fn).onFinalize(fn2);
  }, items4);
  const effect = React.useEffect(() => () => outer1_6(), items5);
  let obj1 = _require(sharedValue[23]);
  const voicePanelButtonStyles = obj1.useVoicePanelButtonStyles(wrapperSpecs);
  obj = {};
  obj = { gesture: memo };
  obj1 = { onPressIn: callback, onPressOut: callback2, props, pressed: sharedValue };
  const tmp16 = closure_15;
  const tmp17 = closure_14;
  const tmp4 = useMuteHandlers(channelId);
  const intl = _require(sharedValue[25]).intl;
  obj1.accessibilityLabel = intl.string(_require(sharedValue[25]).t.Q8gkVL);
  obj1.style = first ? voicePanelButtonStyles.iconBgSelected : voicePanelButtonStyles.iconBg;
  let obj2 = {};
  if (first) {
    let color = voicePanelButtonStyles.iconFillSelected.color;
  } else {
    color = voicePanelButtonStyles.iconFill.color;
  }
  obj2.color = color;
  obj2.size = "lg";
  obj1.children = callback2(_require(sharedValue[26]).MicrophoneIcon, obj2);
  obj.children = callback2(onPress2(sharedValue[24]), obj1);
  const items6 = [callback2(_require(sharedValue[22]).GestureDetector, obj), ];
  const obj3 = { style: items7, variant: "text-xxs/medium" };
  items7 = [tmp.text, voicePanelButtonStyles.iconFill];
  const intl2 = _require(sharedValue[25]).intl;
  obj3.children = intl2.string(_require(sharedValue[25]).t.Q8gkVL);
  items6[1] = callback2(_require(sharedValue[27]).Text, obj3);
  obj.children = items6;
  return tmp16(tmp17, obj);
};
export const MicButton = function MicButton(arg0) {
  let props;
  let wrapperSpecs;
  ({ props, wrapperSpecs } = arg0);
  let tmp = useMuteHandlers(React.useContext(dominantMuteState(voicePanelButtonStyles[17])).channelId);
  const mute = tmp.mute;
  dominantMuteState = tmp.dominantMuteState;
  let obj = mute(voicePanelButtonStyles[23]);
  voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  const items = [voicePanelButtonStyles, mute, dominantMuteState];
  const memo = React.useMemo(() => {
    if (dominantMuteState === mute(voicePanelButtonStyles[15]).DominantMuteState.SERVER_MUTE) {
      let obj = { color: voicePanelButtonStyles.iconFillRed.color };
      let tmpResult = outer1_13(mute(voicePanelButtonStyles[28]).MicrophoneDenyIcon, obj);
    } else {
      obj = {};
      if (mute) {
        let color = tmp5.iconFillRed.color;
      } else {
        color = tmp5.iconFill.color;
      }
      obj.color = color;
      obj.muted = mute;
      tmpResult = outer1_13(mute(voicePanelButtonStyles[29]).VoicePanelRiveMicButton, obj);
      const tmp = outer1_13;
    }
    return tmpResult;
  }, items);
  obj = { props, onPress: tmp.onPress };
  const intl = mute(voicePanelButtonStyles[25]).intl;
  const string = intl.string;
  const t = mute(voicePanelButtonStyles[25]).t;
  if (mute) {
    let stringResult = string(t.YqAjXy);
  } else {
    stringResult = string(t.w4m945);
  }
  obj.accessibilityLabel = stringResult;
  obj.style = mute ? voicePanelButtonStyles.iconBgVoiceMuted : voicePanelButtonStyles.iconBg;
  obj.children = memo;
  return closure_13(dominantMuteState(voicePanelButtonStyles[24]), obj);
};
