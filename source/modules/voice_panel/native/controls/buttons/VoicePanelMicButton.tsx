// Module ID: 15726
// Function ID: 120199
// Name: useMuteHandlers
// Dependencies: []
// Exports: MicButton, PTTButton

// Module 15726 (useMuteHandlers)
function useMuteHandlers(channelId) {
  const arg1 = channelId;
  let closure_1 = React.useRef(null);
  const items = [closure_8, closure_7, closure_12, closure_9, closure_10, closure_6, closure_5];
  const items1 = [channelId];
  return arg1(dependencyMap[13]).useStateFromStoresObject(items, () => {
    const channel = channel.getChannel(arg0);
    if (null != channel) {
      const obj = { channel, authenticationStore: closure_7, voiceStateStore: closure_12, mediaEngineStore: closure_9, permissionStore: closure_10, impersonateStore: closure_6 };
      let muteStates = arg0(closure_2[14]).getMuteStates(obj);
      const obj2 = arg0(closure_2[14]);
    } else {
      muteStates = {};
    }
    const current = ref.current;
    let selfMute;
    if (null != current) {
      selfMute = current.selfMute;
    }
    let isStaffResult = selfMute !== muteStates.selfMute;
    if (isStaffResult) {
      const currentUser = currentUser.getCurrentUser();
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
      closure_16.info("Self mute changed", selfMute1, ">", muteStates.selfMute);
      const tmp13 = closure_16;
    }
    ref.current = muteStates;
    return arg0(closure_2[15]).createMuteHandler(muteStates, null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  }, items1);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
({ jsx: closure_13, Fragment: closure_14, jsxs: closure_15 } = arg1(dependencyMap[10]));
let importDefaultResult = importDefault(dependencyMap[11]);
importDefaultResult = new importDefaultResult("VoicePanelMicButton");
const tmp2 = arg1(dependencyMap[10]);
let closure_17 = arg1(dependencyMap[12]).createStyles({ text: {} });
let closure_18 = { code: "function VoicePanelMicButtonTsx1(){const{runOnJS,handlePTTEnd}=this.__closure;runOnJS(handlePTTEnd)();}" };
let closure_19 = { code: "function VoicePanelMicButtonTsx2(event,manager){const{State,runOnJS,handleDragStart}=this.__closure;if(event.state!==State.BEGAN)return;manager.activate();runOnJS(handleDragStart)();}" };
const obj = arg1(dependencyMap[12]);
const result = arg1(dependencyMap[30]).fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelMicButton.tsx");

export const PTTButton = function PTTButton(arg0) {
  let mute;
  let onPress;
  let props;
  let wrapperSpecs;
  let importDefault;
  let dependencyMap;
  let callback2;
  let React;
  let closure_5;
  let closure_6;
  let closure_7;
  ({ props, wrapperSpecs } = arg0);
  const channelId = React.useContext(importDefault(dependencyMap[17])).channelId;
  const tmp2 = callback2(React.useState(false), 2);
  const first = tmp2[0];
  let callback = tmp2[1];
  const tmp = callback4();
  ({ mute, onPress } = useMuteHandlers(channelId));
  const tmp5 = function useDeafHandlers(channelId) {
    const callback = channelId;
    const items = [closure_8, callback3, closure_12, closure_9, closure_10, callback1];
    const items1 = [channelId];
    return callback(sharedValue[13]).useStateFromStoresObject(items, () => {
      const channel = channel.getChannel(arg0);
      if (null != channel) {
        const obj2 = arg0(closure_2[16]);
        let deafStates = obj2.getDeafStates(channel, closure_12, closure_9, closure_7);
      } else {
        deafStates = { 9223372036854775807: null, "Bool(false)": null };
      }
      return arg0(closure_2[15]).createDeafHandler(deafStates);
    }, items1);
  }(channelId);
  let onPress2 = tmp5.onPress;
  if (!tmp5.deaf) {
    let tmp6;
    if (mute) {
      tmp6 = onPress;
    }
    onPress2 = tmp6;
  }
  importDefault = onPress2;
  let obj = callback(dependencyMap[18]);
  const sharedValue = obj.useSharedValue(false);
  dependencyMap = sharedValue;
  const tmp8 = importDefault(dependencyMap[19])();
  callback2 = tmp8;
  React = React.useRef({ "Bool(false)": null, "Bool(false)": null });
  const items = [tmp8, sharedValue, onPress2];
  callback = React.useCallback(() => {
    if (!closure_4.current.active) {
      if (null != onPress2) {
        onPress2();
      }
      closure_4.current.active = true;
      const result = callback(sharedValue[20]).triggerHapticFeedback(callback(sharedValue[20]).HapticFeedbackTypes.IMPACT_MEDIUM);
      const obj = callback(sharedValue[20]);
      callback(sharedValue[21]).setPushToTalkState(true);
      tmp8.lock();
      const result1 = sharedValue.set(true);
      callback(true);
      const obj2 = callback(sharedValue[21]);
    }
  }, items);
  closure_5 = callback;
  const items1 = [tmp8, sharedValue];
  const callback1 = React.useCallback(() => {
    if (closure_4.current.active) {
      closure_4.current.active = false;
      closure_4.current.dragging = false;
      callback(sharedValue[21]).setPushToTalkState(false);
      tmp8.unlock();
      const result = sharedValue.set(false);
      callback(false);
      const obj = callback(sharedValue[21]);
    }
  }, items1);
  closure_6 = callback1;
  const items2 = [callback1];
  const items3 = [callback];
  callback2 = React.useCallback(() => {
    if (!closure_4.current.dragging) {
      callback1();
    }
  }, items2);
  const callback3 = React.useCallback(() => {
    if (!closure_4.current.dragging) {
      closure_4.current.dragging = true;
      callback();
    }
  }, items3);
  closure_7 = callback3;
  const items4 = [callback3, callback1];
  const items5 = [callback1];
  const memo = React.useMemo(() => {
    const Gesture = callback(sharedValue[22]).Gesture;
    const PanResult = Gesture.Pan();
    const fn = function n(state, activate) {
      if (state.state === callback(closure_2[22]).State.BEGAN) {
        activate.activate();
        callback(closure_2[18]).runOnJS(closure_7)();
        const obj = callback(closure_2[18]);
      }
    };
    let obj = { State: callback(sharedValue[22]).State, runOnJS: callback(sharedValue[18]).runOnJS, handleDragStart: callback3 };
    fn.__closure = obj;
    fn.__workletHash = 13866422602014;
    fn.__initData = closure_19;
    const manualActivationResult = Gesture.Pan().manualActivation(true);
    const fn2 = function t() {
      callback(closure_2[18]).runOnJS(closure_6)();
    };
    obj = { runOnJS: callback(sharedValue[18]).runOnJS, handlePTTEnd: callback1 };
    fn2.__closure = obj;
    fn2.__workletHash = 12941114426646;
    fn2.__initData = closure_18;
    return Gesture.Pan().manualActivation(true).onTouchesMove(fn).onFinalize(fn2);
  }, items4);
  const effect = React.useEffect(() => () => callback(), items5);
  let obj1 = callback(dependencyMap[23]);
  const voicePanelButtonStyles = obj1.useVoicePanelButtonStyles(wrapperSpecs);
  obj = {};
  obj = { gesture: memo };
  obj1 = { onPressIn: callback, onPressOut: callback2, props, pressed: sharedValue };
  const tmp16 = closure_15;
  const tmp17 = closure_14;
  const tmp4 = useMuteHandlers(channelId);
  const intl = callback(dependencyMap[25]).intl;
  obj1.accessibilityLabel = intl.string(callback(dependencyMap[25]).t.Q8gkVL);
  obj1.style = first ? voicePanelButtonStyles.iconBgSelected : voicePanelButtonStyles.iconBg;
  const obj2 = {};
  if (first) {
    let color = voicePanelButtonStyles.iconFillSelected.color;
  } else {
    color = voicePanelButtonStyles.iconFill.color;
  }
  obj2.color = color;
  obj2.size = "lg";
  obj1.children = callback3(callback(dependencyMap[26]).MicrophoneIcon, obj2);
  obj.children = callback3(importDefault(dependencyMap[24]), obj1);
  const items6 = [callback3(callback(dependencyMap[22]).GestureDetector, obj), ];
  const obj3 = { style: items7, variant: "text-xxs/medium" };
  const items7 = [tmp.text, voicePanelButtonStyles.iconFill];
  const intl2 = callback(dependencyMap[25]).intl;
  obj3.children = intl2.string(callback(dependencyMap[25]).t.Q8gkVL);
  items6[1] = callback3(callback(dependencyMap[27]).Text, obj3);
  obj.children = items6;
  return tmp16(tmp17, obj);
};
export const MicButton = function MicButton(arg0) {
  let props;
  let wrapperSpecs;
  ({ props, wrapperSpecs } = arg0);
  const tmp = useMuteHandlers(React.useContext(importDefault(dependencyMap[17])).channelId);
  const mute = tmp.mute;
  const arg1 = mute;
  const dominantMuteState = tmp.dominantMuteState;
  const importDefault = dominantMuteState;
  let obj = arg1(dependencyMap[23]);
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  const dependencyMap = voicePanelButtonStyles;
  const items = [voicePanelButtonStyles, mute, dominantMuteState];
  const memo = React.useMemo(() => {
    if (dominantMuteState === mute(voicePanelButtonStyles[15]).DominantMuteState.SERVER_MUTE) {
      let obj = { color: voicePanelButtonStyles.iconFillRed.color };
      let tmpResult = callback(mute(voicePanelButtonStyles[28]).MicrophoneDenyIcon, obj);
    } else {
      obj = {};
      if (mute) {
        let color = tmp5.iconFillRed.color;
      } else {
        color = tmp5.iconFill.color;
      }
      obj.color = color;
      obj.muted = mute;
      tmpResult = callback(mute(voicePanelButtonStyles[29]).VoicePanelRiveMicButton, obj);
      const tmp = callback;
    }
    return tmpResult;
  }, items);
  obj = { props, onPress: tmp.onPress };
  const intl = arg1(dependencyMap[25]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[25]).t;
  if (mute) {
    let stringResult = string(t.YqAjXy);
  } else {
    stringResult = string(t.w4m945);
  }
  obj.accessibilityLabel = stringResult;
  obj.style = mute ? voicePanelButtonStyles.iconBgVoiceMuted : voicePanelButtonStyles.iconBg;
  obj.children = memo;
  return closure_13(importDefault(dependencyMap[24]), obj);
};
