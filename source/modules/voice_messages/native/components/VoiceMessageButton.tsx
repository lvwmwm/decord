// Module ID: 11361
// Function ID: 88303
// Name: VoiceMessageRecordingCancelledToastIcon
// Dependencies: [5, 57, 31, 27, 3823, 6922, 1348, 11103, 11104, 653, 4123, 4344, 33, 4130, 689, 7660, 3981, 4341, 11362, 3991, 1324, 8829, 10849, 1450, 11018, 4664, 4665, 6691, 7939, 9544, 1207, 3831, 1212, 10229, 3982, 4675, 3830, 8429, 5217, 11364, 11345, 10735, 2]

// Module 11361 (VoiceMessageRecordingCancelledToastIcon)
import closure_3 from "_createForOfIteratorHelperLoose";
import _slicedToArray from "_slicedToArray";
import importAllResult from "dispatcher";
import get_ActivityIndicator from "trackInvite";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";
import VoiceMessageRecordingStatus from "VoiceMessageRecordingStatus";
import VoiceMessageAnimationState from "VoiceMessageAnimationState";
import ME from "ME";
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING";
import { NativePermissionTypes } from "NativePermissionStatus";
import { jsx } from "getFocusedChannelId";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_6;
let closure_7;
const require = arg1;
function VoiceMessageRecordingCancelledToastIcon() {
  let obj = { style: callback().icon, "aria-hidden": true };
  obj = { color: importDefault(689).colors.WHITE, size: "xs" };
  obj.children = jsx(require(7660) /* XSmallBoldIcon */.XSmallBoldIcon, { color: importDefault(689).colors.WHITE, size: "xs" });
  return <closure_6 color={importDefault(689).colors.WHITE} size="xs" />;
}
function triggerHapticGuarded() {
  if (state.getState().showRecordingOverlay) {
    require(11362) /* generateBase64EncodedWaveform */.triggerHaptic();
    const obj = require(11362) /* generateBase64EncodedWaveform */;
  }
}
({ View: closure_6, AppState: closure_7 } = get_ActivityIndicator);
({ setIsVoiceMessageButtonMounted: closure_11, setIsUsingHoldGesture: closure_12, setVoiceMessageAnimationState: closure_13, showVoiceMessagesTooltip: closure_14, useVoiceMessagesUIStore: closure_15, setShowRecordingOverlay: closure_16, hideVoiceMessagesTooltip: closure_17 } = VoiceMessageRecordingStatus);
({ VoiceMessageAnimationState: closure_18, VOICE_RECORDING_MIN_DURATION_MILLIS: closure_19 } = VoiceMessageAnimationState);
({ ComponentActions: closure_20, ComponentActionsKeyed: closure_21, MessageFlags: closure_22 } = ME);
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_CRITICAL, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, padding: require("_createForOfIteratorHelperLoose").space.PX_4, marginLeft: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj.icon = obj;
let closure_26 = _createForOfIteratorHelperLoose.createStyles(obj);
_createForOfIteratorHelperLoose = { themedChatInput: { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CARD_SECONDARY_BG } };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_28 = { code: "function VoiceMessageButtonTsx1(newValue){const{voiceMessageAnimationState,runOnJS,triggerHapticGuarded}=this.__closure;if(voiceMessageAnimationState.get()[1]===newValue)return;const prevValue=voiceMessageAnimationState.get()[1];voiceMessageAnimationState.set([prevValue,newValue]);runOnJS(triggerHapticGuarded)();}" };
let closure_29 = { code: "function VoiceMessageButtonTsx2(){const{runOnJS,handleFinalize}=this.__closure;runOnJS(handleFinalize)();}" };
let closure_30 = { code: "function VoiceMessageButtonTsx3(e){const{isGestureActiveValue,LOCK_THRESHOLD,cancelThresholdX,handleUpdateValue,VoiceMessageAnimationState}=this.__closure;if(!isGestureActiveValue.get())return;if(e.translationY<=-LOCK_THRESHOLD&&e.absoluteX>=cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.LOCKING);}else if(e.absoluteX<cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.CANCELLING);}else if(e.absoluteX>=cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.SENDING);}}" };
let closure_31 = { code: "function VoiceMessageButtonTsx4(e){const{isGestureActiveValue,runOnJS,setIsUsingHoldGesture,voiceMessageAnimationState,VoiceMessageAnimationState,startRecording}=this.__closure;if(e.numberOfTouches>1)return;if(isGestureActiveValue.get())return;runOnJS(setIsUsingHoldGesture)(true);voiceMessageAnimationState.set([VoiceMessageAnimationState.SENDING,VoiceMessageAnimationState.SENDING]);runOnJS(startRecording)();}" };
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CARD_SECONDARY_BG };
const memoResult = importAllResult.memo((disabled) => {
  let accessibilityActions;
  let onAccessibilityAction;
  disabled = disabled.disabled;
  const channelId = disabled.channelId;
  let obj = disabled(1324);
  let obj1 = disabled(8829);
  const clientThemesOverride = obj1.useClientThemesOverride(_createForOfIteratorHelperLoose().themedChatInput);
  const tmp3 = state((voiceMessageAnimationState) => voiceMessageAnimationState.voiceMessageAnimationState);
  const dependencyMap = tmp3;
  let tmp = _createForOfIteratorHelperLoose();
  let sharedValue = disabled(3991).useSharedValue(0);
  const tmp5 = first((function useIsGestureActive() {
    const ref = tmp7.useRef(false);
    const sharedValue = disabled(tmp3[19]).useSharedValue(false);
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
  })(), 3);
  first = tmp5[0];
  let closure_6 = tmp8;
  const currentState = importAllResult.useRef(true);
  let _isNativeReflectConstruct = importAllResult.useRef(currentState.currentState);
  let closure_9 = importAllResult.useRef(null);
  const tmp9 = channelId(10849)();
  let items = [channelId, tmp5[2]];
  const callback = importAllResult.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = sharedValue(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), items);
  let items1 = [channelId, callback];
  const effect = importAllResult.useEffect(() => {
    let ComponentDispatch = disabled(tmp3[30]).ComponentDispatch;
    ComponentDispatch.subscribeKeyed(outer1_21.VOICE_MESSAGE_SEND, channelId, callback);
    return () => {
      const ComponentDispatch = disabled(table[30]).ComponentDispatch;
      ComponentDispatch.unsubscribeKeyed(outer2_21.VOICE_MESSAGE_SEND, outer1_1, outer1_10);
    };
  }, items1);
  const effect1 = importAllResult.useEffect(() => {
    callback1(true);
    return () => {
      callback1(false);
    };
  }, []);
  const effect2 = importAllResult.useEffect(() => {
    let closure_0 = closure_7.addEventListener("change", (current) => {
      current = outer1_8.current;
      let tmp = "active" !== current;
      if (!tmp) {
        let tmp2 = "inactive" !== current;
        if (tmp2) {
          tmp2 = "background" !== current;
        }
        tmp = tmp2;
      }
      if (!tmp) {
        tmp = outer1_9.current !== disabled(11018).VoiceMessageRecordingResult.CANCELLED_ON_BACKGROUND;
      }
      if (!tmp) {
        let obj = channelId(3831);
        obj = { key: "VOICE_MESSAGE_CANCELLED_ON_BACKGROUND" };
        const intl = disabled(1212).intl;
        obj.content = intl.string(disabled(1212).t.JM7Y2D);
        obj.icon = function icon() {
          return outer3_25(outer3_32, {});
        };
        obj.position = "bottom";
        obj.open(obj);
        outer1_9.current = null;
      }
      outer1_8.current = current;
    });
    return () => {
      closure_0.remove();
    };
  }, []);
  const items2 = [first, tmp5[2]];
  const effect3 = importAllResult.useEffect(() => {
    closure_7.current = true;
    const current = first.current;
    return () => {
      outer1_7.current = false;
      const state = outer2_15.getState();
      let showRecordingOverlay = state.showRecordingOverlay;
      if (!showRecordingOverlay) {
        showRecordingOverlay = null != state.recordingStatus;
      }
      if (!showRecordingOverlay) {
        showRecordingOverlay = current;
      }
      if (showRecordingOverlay) {
        outer1_6(false);
        disabled(table[18]).endAudioRecording();
        const obj = disabled(table[18]);
      }
    };
  }, items2);
  const obj3 = disabled(3991);
  const items3 = [first, tmp5[2], channelId];
  const isModalOpen = disabled(3981).useIsModalOpen();
  const effect4 = importAllResult.useEffect(() => {
    function cancel() {
      return _cancel(...arguments);
    }
    function _cancel() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = sharedValue(tmp);
      return obj(...arguments);
    }
    function handleActionSheetChange() {
      if (_isNativeReflectConstruct.isOpen()) {
        cancel();
      }
    }
    function handleNavigationChange() {
      const focusedChannelId = disabled(handleActionSheetChange[33]).getFocusedChannelId();
      if (null != focusedChannelId) {
        if (focusedChannelId !== _cancel) {
          cancel();
        }
      } else {
        cancel();
      }
    }
    cancel();
    let result = _isNativeReflectConstruct.addReactChangeListener(handleActionSheetChange);
    let rootNavigationRef = disabled(tmp3[34]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      rootNavigationRef.addListener("state", handleNavigationChange);
    }
    return () => {
      const result = _isNativeReflectConstruct.removeReactChangeListener(handleActionSheetChange);
      const rootNavigationRef = disabled(handleActionSheetChange[34]).getRootNavigationRef();
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
  const items5 = [first, tmp5[2], channelId];
  const callback1 = importAllResult.useCallback(sharedValue(items4), items5);
  class Z {
    constructor(arg0) {
      if (closure_2.get()[1] !== disabled) {
        tmp = closure_2;
        items = [, ];
        items[0] = closure_2.get()[1];
        items[1] = disabled;
        result = closure_2.set(items);
        tmp3 = disabled;
        tmp4 = outer1_2;
        num = 19;
        obj = disabled(outer1_2[19]);
        tmp5 = outer1_33;
        tmp6 = obj.runOnJS(outer1_33)();
      }
      return;
    }
  }
  obj = { voiceMessageAnimationState: tmp3, runOnJS: disabled(3991).runOnJS, triggerHapticGuarded };
  Z.__closure = obj;
  Z.__workletHash = 9127775028714;
  Z.__initData = closure_28;
  const items6 = [tmp3];
  const callback2 = importAllResult.useCallback(Z, items6);
  const items7 = [tmp3, first, callback, tmp5[2]];
  const callback3 = importAllResult.useCallback(() => {
    if (first.current) {
      tmp8(false);
      const tmp7 = tmp3.get()[1];
      if (outer1_18.SENDING === tmp7) {
        let obj = { isCancelling: false };
        callback(obj);
      } else if (outer1_18.CANCELLING === tmp7) {
        obj = { isCancelling: true };
        callback(obj);
      } else if (outer1_18.LOCKING === tmp7) {
        callback2(false);
        const items = [, ];
        ({ LOCKING: arr[0], LOCKED: arr[1] } = outer1_18);
        const result = tmp3.set(items);
        disabled(tmp3[19]).runOnJS(outer1_33)();
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
  const obj4 = disabled(3981);
  const tmp22 = channelId(8429);
  let intl = disabled(1212).intl;
  const tmp23 = sharedValue(8429);
  const sum = 0.5 * tmp9 + (channelId(1450)().width - tmp9);
  const items8 = [disabled, tmp5[1], tmp3, callback1, sum, callback2, callback3];
  ({ accessibilityActions, onAccessibilityAction } = tmp22(sharedValue(8429), intl.string(disabled(1212).t.lwy6aX)));
  const memo = importAllResult.useMemo(() => {
    const Gesture = disabled(tmp3[38]).Gesture;
    const PanResult = Gesture.Pan();
    const enabledResult = Gesture.Pan().enabled(!disabled);
    const fn = function n(numberOfTouches) {
      let value = numberOfTouches.numberOfTouches > 1;
      if (!value) {
        value = outer1_5.get();
      }
      if (!value) {
        disabled(3991).runOnJS(callback2)(true);
        const items = [, ];
        ({ SENDING: arr[0], SENDING: arr[1] } = outer2_18);
        const result = outer1_2.set(items);
        const obj = disabled(3991);
        disabled(3991).runOnJS(outer1_11)();
        const obj2 = disabled(3991);
      }
    };
    let obj = { isGestureActiveValue: closure_5, runOnJS: disabled(tmp3[19]).runOnJS, setIsUsingHoldGesture: callback2, voiceMessageAnimationState: tmp3, VoiceMessageAnimationState: outer1_18, startRecording: callback1 };
    fn.__closure = obj;
    fn.__workletHash = 15771181123252;
    fn.__initData = outer1_31;
    const minDistanceResult = Gesture.Pan().enabled(!disabled).minDistance(0);
    const fn2 = function t(translationY) {
      if (outer1_5.get()) {
        if (translationY.translationY <= -40) {
          if (translationY.absoluteX >= outer1_14) {
            outer1_12(outer2_18.LOCKING);
          }
        }
        if (translationY.absoluteX < outer1_14) {
          outer1_12(outer2_18.CANCELLING);
        } else if (translationY.absoluteX >= outer1_14) {
          outer1_12(outer2_18.SENDING);
        }
      }
    };
    obj = { isGestureActiveValue: closure_5, LOCK_THRESHOLD: 40, cancelThresholdX: closure_14, handleUpdateValue: callback2, VoiceMessageAnimationState: outer1_18 };
    fn2.__closure = obj;
    fn2.__workletHash = 9262214665783;
    fn2.__initData = outer1_30;
    const onTouchesDownResult = Gesture.Pan().enabled(!disabled).minDistance(0).onTouchesDown(fn);
    const fn3 = function e() {
      disabled(3991).runOnJS(outer1_13)();
    };
    const onUpdateResult = Gesture.Pan().enabled(!disabled).minDistance(0).onTouchesDown(fn).onUpdate(fn2);
    fn3.__closure = { runOnJS: disabled(tmp3[19]).runOnJS, handleFinalize: callback3 };
    fn3.__workletHash = 2411654680943;
    fn3.__initData = outer1_29;
    return onUpdateResult.onFinalize(fn3);
  }, items8);
  obj = { gesture: memo };
  obj1 = { ref: channelId(11364)().tooltipTargetRef };
  const tmp22Result = tmp22(sharedValue(8429), intl.string(disabled(1212).t.lwy6aX));
  const tmp27 = jsx;
  const tmp28 = jsx;
  obj1.IconComponent = disabled(10735).MicrophoneIcon;
  obj1.active = false;
  const intl2 = disabled(1212).intl;
  obj1.accessibilityLabel = intl2.string(disabled(1212).t.lwy6aX);
  obj1.accessibilityActions = accessibilityActions;
  obj1.onAccessibilityAction = onAccessibilityAction;
  obj1.disabled = disabled;
  let tmp30;
  if (!obj.useMobileVisualRefreshConfig({ location: "VoiceMessageButton" }).chatInputFloating) {
    tmp30 = clientThemesOverride;
  }
  obj1.style = tmp30;
  obj.children = tmp28(channelId(11345), obj1);
  return tmp27(disabled(5217).GestureDetector, obj);
});
let result = require("result").fileFinishedImporting("modules/voice_messages/native/components/VoiceMessageButton.tsx");

export default memoResult;
