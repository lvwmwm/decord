// Module ID: 11350
// Function ID: 88240
// Name: VoiceMessageRecordingCancelledToastIcon
// Dependencies: []

// Module 11350 (VoiceMessageRecordingCancelledToastIcon)
function VoiceMessageRecordingCancelledToastIcon() {
  let obj = { style: callback3().icon, aria-hidden: true };
  obj = { color: importDefault(dependencyMap[14]).colors.WHITE, size: "xs" };
  obj.children = jsx(arg1(dependencyMap[15]).XSmallBoldIcon, obj);
  return <closure_6 {...obj} />;
}
function triggerHapticGuarded() {
  if (state.getState().showRecordingOverlay) {
    arg1(dependencyMap[18]).triggerHaptic();
    const obj = arg1(dependencyMap[18]);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const importAllResult = importAll(dependencyMap[2]);
({ View: closure_6, AppState: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
const tmp2 = arg1(dependencyMap[3]);
({ setIsVoiceMessageButtonMounted: closure_11, setIsUsingHoldGesture: closure_12, setVoiceMessageAnimationState: closure_13, showVoiceMessagesTooltip: closure_14, useVoiceMessagesUIStore: closure_15, setShowRecordingOverlay: closure_16, hideVoiceMessagesTooltip: closure_17 } = arg1(dependencyMap[7]));
const tmp3 = arg1(dependencyMap[7]);
({ VoiceMessageAnimationState: closure_18, VOICE_RECORDING_MIN_DURATION_MILLIS: closure_19 } = arg1(dependencyMap[8]));
const tmp4 = arg1(dependencyMap[8]);
({ ComponentActions: closure_20, ComponentActionsKeyed: closure_21, MessageFlags: closure_22 } = arg1(dependencyMap[9]));
const MessageSendLocation = arg1(dependencyMap[10]).MessageSendLocation;
const NativePermissionTypes = arg1(dependencyMap[11]).NativePermissionTypes;
const jsx = arg1(dependencyMap[12]).jsx;
let obj1 = arg1(dependencyMap[13]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[14]).colors.BACKGROUND_FEEDBACK_CRITICAL, borderRadius: importDefault(dependencyMap[14]).radii.round, padding: importDefault(dependencyMap[14]).space.PX_4, marginLeft: importDefault(dependencyMap[14]).space.PX_4 };
obj.icon = obj;
let closure_26 = obj1.createStyles(obj);
const tmp5 = arg1(dependencyMap[9]);
obj1 = {};
const obj5 = arg1(dependencyMap[13]);
obj1.themedChatInput = { backgroundColor: importDefault(dependencyMap[14]).colors.CARD_SECONDARY_BG };
let closure_27 = obj5.createStyles(obj1);
let closure_28 = { code: "function VoiceMessageButtonTsx1(newValue){const{voiceMessageAnimationState,runOnJS,triggerHapticGuarded}=this.__closure;if(voiceMessageAnimationState.get()[1]===newValue)return;const prevValue=voiceMessageAnimationState.get()[1];voiceMessageAnimationState.set([prevValue,newValue]);runOnJS(triggerHapticGuarded)();}" };
let closure_29 = { code: "function VoiceMessageButtonTsx2(){const{runOnJS,handleFinalize}=this.__closure;runOnJS(handleFinalize)();}" };
let closure_30 = { code: "function VoiceMessageButtonTsx3(e){const{isGestureActiveValue,LOCK_THRESHOLD,cancelThresholdX,handleUpdateValue,VoiceMessageAnimationState}=this.__closure;if(!isGestureActiveValue.get())return;if(e.translationY<=-LOCK_THRESHOLD&&e.absoluteX>=cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.LOCKING);}else if(e.absoluteX<cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.CANCELLING);}else if(e.absoluteX>=cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.SENDING);}}" };
let closure_31 = { code: "function VoiceMessageButtonTsx4(e){const{isGestureActiveValue,runOnJS,setIsUsingHoldGesture,voiceMessageAnimationState,VoiceMessageAnimationState,startRecording}=this.__closure;if(e.numberOfTouches>1)return;if(isGestureActiveValue.get())return;runOnJS(setIsUsingHoldGesture)(true);voiceMessageAnimationState.set([VoiceMessageAnimationState.SENDING,VoiceMessageAnimationState.SENDING]);runOnJS(startRecording)();}" };
const obj2 = { backgroundColor: importDefault(dependencyMap[14]).colors.CARD_SECONDARY_BG };
const memoResult = importAllResult.memo((disabled) => {
  let accessibilityActions;
  let onAccessibilityAction;
  disabled = disabled.disabled;
  const arg1 = disabled;
  const channelId = disabled.channelId;
  const importDefault = channelId;
  let obj = arg1(dependencyMap[20]);
  let obj1 = arg1(dependencyMap[21]);
  const clientThemesOverride = obj1.useClientThemesOverride(callback4().themedChatInput);
  const tmp3 = state((voiceMessageAnimationState) => voiceMessageAnimationState.voiceMessageAnimationState);
  const dependencyMap = tmp3;
  const tmp = callback4();
  const sharedValue = arg1(dependencyMap[19]).useSharedValue(0);
  let callback = sharedValue;
  const tmp5 = callback2(function useIsGestureActive() {
    const ref = tmp7.useRef(false);
    const disabled = ref;
    const sharedValue = disabled(tmp3[19]).useSharedValue(false);
    const channelId = sharedValue;
    const items = [ref, sharedValue];
    const items1 = [
      ref,
      sharedValue,
      tmp7.useCallback((current) => {
        ref.current = current;
        const result = sharedValue.set(current);
      }, items)
    ];
    return items1;
  }(), 3);
  const first = tmp5[0];
  let callback2 = first;
  const tmp8 = tmp5[2];
  const currentState = importAllResult.useRef(true);
  let closure_8 = importAllResult.useRef(currentState.currentState);
  let closure_9 = importAllResult.useRef(null);
  const tmp9 = importDefault(dependencyMap[22])();
  const items = [channelId, tmp8];
  callback = importAllResult.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = sharedValue(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items);
  let closure_10 = callback;
  const items1 = [channelId, callback];
  const effect = importAllResult.useEffect(() => {
    const ComponentDispatch = disabled(tmp3[30]).ComponentDispatch;
    ComponentDispatch.subscribeKeyed(constants2.VOICE_MESSAGE_SEND, channelId, callback);
    return () => {
      const ComponentDispatch = callback(closure_2[30]).ComponentDispatch;
      ComponentDispatch.unsubscribeKeyed(constants.VOICE_MESSAGE_SEND, closure_1, closure_10);
    };
  }, items1);
  const effect1 = importAllResult.useEffect(() => {
    callback1(true);
    return () => {
      callback(false);
    };
  }, []);
  const effect2 = importAllResult.useEffect(() => {
    let closure_0 = closure_7.addEventListener("change", (current) => {
      current = ref.current;
      let tmp = "active" !== current;
      if (!tmp) {
        let tmp2 = "inactive" !== current;
        if (tmp2) {
          tmp2 = "background" !== current;
        }
        tmp = tmp2;
      }
      if (!tmp) {
        tmp = ref2.current !== lib(closure_2[24]).VoiceMessageRecordingResult.CANCELLED_ON_BACKGROUND;
      }
      if (!tmp) {
        let obj = callback(closure_2[31]);
        obj = { key: "VOICE_MESSAGE_CANCELLED_ON_BACKGROUND" };
        const intl = lib(closure_2[32]).intl;
        obj.content = intl.string(lib(closure_2[32]).t.JM7Y2D);
        obj.icon = function icon() {
          return callback(closure_32, {});
        };
        obj.position = "bottom";
        obj.open(obj);
        ref2.current = null;
      }
      ref.current = current;
    });
    return () => {
      lib.remove();
    };
  }, []);
  const items2 = [first, tmp8];
  const effect3 = importAllResult.useEffect(() => {
    closure_7.current = true;
    const disabled = first.current;
    return () => {
      closure_7.current = false;
      const state = state.getState();
      let showRecordingOverlay = state.showRecordingOverlay;
      if (!showRecordingOverlay) {
        showRecordingOverlay = null != state.recordingStatus;
      }
      if (!showRecordingOverlay) {
        showRecordingOverlay = current;
      }
      if (showRecordingOverlay) {
        callback(false);
        current(closure_2[18]).endAudioRecording();
        const obj = current(closure_2[18]);
      }
    };
  }, items2);
  const obj3 = arg1(dependencyMap[19]);
  const items3 = [first, tmp8, channelId];
  const isModalOpen = arg1(dependencyMap[16]).useIsModalOpen();
  const effect4 = importAllResult.useEffect(() => {
    function cancel() {
      return _cancel(...arguments);
    }
    const disabled = cancel;
    function _cancel() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = handleNavigationChange(tmp);
      const _cancel = obj;
      return obj(...arguments);
    }
    function handleActionSheetChange() {
      if (closure_8.isOpen()) {
        cancel();
      }
    }
    function handleNavigationChange() {
      const focusedChannelId = cancel(handleActionSheetChange[33]).getFocusedChannelId();
      if (null != focusedChannelId) {
        if (focusedChannelId !== _cancel) {
          cancel();
        }
      } else {
        cancel();
      }
    }
    const sharedValue = handleNavigationChange;
    cancel();
    const result = closure_8.addReactChangeListener(handleActionSheetChange);
    const rootNavigationRef = disabled(handleActionSheetChange[34]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      rootNavigationRef.addListener("state", handleNavigationChange);
    }
    return () => {
      const result = closure_8.removeReactChangeListener(handleActionSheetChange);
      const rootNavigationRef = cancel(handleActionSheetChange[34]).getRootNavigationRef();
      if (null != rootNavigationRef) {
        rootNavigationRef.removeListener("state", handleNavigationChange);
      }
    };
  }, items3);
  const items4 = [sharedValue, isModalOpen];
  const effect5 = importAllResult.useEffect(() => {
    callback3({ currWaveHeight: sharedValue });
  }, items4);
  // CreateGeneratorClosureLongIndex (0x67)
  const items5 = [first, tmp8, channelId];
  const callback1 = importAllResult.useCallback(callback(items4), items5);
  class Z {
    constructor(arg0) {
      if (closure_2.get()[1] !== disabled) {
        tmp = closure_2;
        items = [, ];
        items[0] = closure_2.get()[1];
        items[1] = disabled;
        result = closure_2.set(items);
        tmp3 = disabled;
        tmp4 = closure_2;
        num = 19;
        obj = disabled(closure_2[19]);
        tmp5 = closure_33;
        tmp6 = obj.runOnJS(closure_33)();
      }
      return;
    }
  }
  obj = { voiceMessageAnimationState: tmp3, runOnJS: arg1(dependencyMap[19]).runOnJS, triggerHapticGuarded };
  Z.__closure = obj;
  Z.__workletHash = 9127775028714;
  Z.__initData = closure_28;
  const items6 = [tmp3];
  callback2 = importAllResult.useCallback(Z, items6);
  const items7 = [tmp3, first, callback, tmp8];
  const callback3 = importAllResult.useCallback(() => {
    if (first.current) {
      tmp8(false);
      const tmp7 = tmp3.get()[1];
      if (constants.SENDING === tmp7) {
        let obj = { isCancelling: false };
        callback(obj);
      } else if (constants.CANCELLING === tmp7) {
        obj = { isCancelling: true };
        callback(obj);
      } else if (constants.LOCKING === tmp7) {
        callback2(false);
        const items = [, ];
        ({ LOCKING: arr[0], LOCKED: arr[1] } = constants);
        const result = tmp3.set(items);
        disabled(tmp3[19]).runOnJS(closure_33)();
      } else {
        disabled(tmp3[18]).endAudioRecording();
        const obj2 = disabled(tmp3[18]);
      }
    } else {
      obj = disabled(tmp3[18]);
      obj.endAudioRecording();
    }
  }, items7);
  // CreateGeneratorClosureLongIndex (0x67)
  const obj4 = arg1(dependencyMap[16]);
  const tmp22 = importDefault(dependencyMap[37]);
  const intl = arg1(dependencyMap[32]).intl;
  const tmp23 = callback(dependencyMap[37]);
  const sum = 0.5 * tmp9 + (importDefault(dependencyMap[23])().width - tmp9);
  const items8 = [disabled, tmp5[1], tmp3, callback1, sum, callback2, callback3];
  ({ accessibilityActions, onAccessibilityAction } = tmp22(callback(dependencyMap[37]), intl.string(arg1(dependencyMap[32]).t.lwy6aX)));
  const memo = importAllResult.useMemo(() => {
    const Gesture = disabled(tmp3[38]).Gesture;
    const PanResult = Gesture.Pan();
    const enabledResult = Gesture.Pan().enabled(!disabled);
    const fn = function n(numberOfTouches) {
      let value = numberOfTouches.numberOfTouches > 1;
      if (!value) {
        value = store.get();
      }
      if (!value) {
        callback(closure_2[19]).runOnJS(closure_12)(true);
        const items = [, ];
        ({ SENDING: arr[0], SENDING: arr[1] } = closure_18);
        const result = closure_2.set(items);
        const obj = callback(closure_2[19]);
        callback(closure_2[19]).runOnJS(closure_11)();
        const obj2 = callback(closure_2[19]);
      }
    };
    let obj = { isGestureActiveValue: tmp7, runOnJS: disabled(tmp3[19]).runOnJS, setIsUsingHoldGesture: callback2, voiceMessageAnimationState: tmp3, VoiceMessageAnimationState: closure_18, startRecording: callback1 };
    fn.__closure = obj;
    fn.__workletHash = 15771181123252;
    fn.__initData = closure_31;
    const minDistanceResult = Gesture.Pan().enabled(!disabled).minDistance(0);
    const fn2 = function t(translationY) {
      if (store.get()) {
        if (translationY.translationY <= -40) {
          if (translationY.absoluteX >= closure_14) {
            callback2(constants.LOCKING);
          }
        }
        if (translationY.absoluteX < closure_14) {
          callback2(constants.CANCELLING);
        } else if (translationY.absoluteX >= closure_14) {
          callback2(constants.SENDING);
        }
      }
    };
    obj = { isGestureActiveValue: tmp7, LOCK_THRESHOLD: 40, cancelThresholdX: sum, handleUpdateValue: callback2, VoiceMessageAnimationState: closure_18 };
    fn2.__closure = obj;
    fn2.__workletHash = 9262214665783;
    fn2.__initData = closure_30;
    const onTouchesDownResult = Gesture.Pan().enabled(!disabled).minDistance(0).onTouchesDown(fn);
    const fn3 = function e() {
      callback(closure_2[19]).runOnJS(closure_13)();
    };
    const onUpdateResult = Gesture.Pan().enabled(!disabled).minDistance(0).onTouchesDown(fn).onUpdate(fn2);
    fn3.__closure = { runOnJS: disabled(tmp3[19]).runOnJS, handleFinalize: callback3 };
    fn3.__workletHash = 2411654680943;
    fn3.__initData = closure_29;
    return onUpdateResult.onFinalize(fn3);
  }, items8);
  obj = { gesture: memo };
  obj1 = { ref: importDefault(dependencyMap[39])().tooltipTargetRef };
  const tmp22Result = tmp22(callback(dependencyMap[37]), intl.string(arg1(dependencyMap[32]).t.lwy6aX));
  const tmp27 = jsx;
  const tmp28 = jsx;
  obj1.IconComponent = arg1(dependencyMap[41]).MicrophoneIcon;
  obj1.active = false;
  const intl2 = arg1(dependencyMap[32]).intl;
  obj1.accessibilityLabel = intl2.string(arg1(dependencyMap[32]).t.lwy6aX);
  obj1.accessibilityActions = accessibilityActions;
  obj1.onAccessibilityAction = onAccessibilityAction;
  obj1.disabled = disabled;
  let tmp30;
  if (!obj.useMobileVisualRefreshConfig({ location: "VoiceMessageButton" }).chatInputFloating) {
    tmp30 = clientThemesOverride;
  }
  obj1.style = tmp30;
  obj.children = tmp28(importDefault(dependencyMap[40]), obj1);
  return tmp27(arg1(dependencyMap[38]).GestureDetector, obj);
});
const result = arg1(dependencyMap[42]).fileFinishedImporting("modules/voice_messages/native/components/VoiceMessageButton.tsx");

export default memoResult;
