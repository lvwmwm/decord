// Module ID: 11909
// Function ID: 11910
// Name: VoiceMessageButton
// Dependencies: [5, 32, 19, 17, 4761, 7361, 2064, 7237, 11586, 11587, 1085, 5084, 7482, 21, 4937, 7481, 11910, 558, 576, 4811, 10644, 1497, 11413, 7738, 7740, 7172, 9237, 9661, 1121, 4768, 1126, 6079, 4938, 7499, 4767, 8613, 6333, 11912, 11891, 11064, 2]

// Module 11909 (VoiceMessageButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import RootNavigationRef from "RootNavigationRef" /* 4938 */;
import MessageConstants from "MessageConstants" /* 5084 */;
import isChannelFocused from "isChannelFocused" /* 6079 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6333 */;
import NativePermissionConstants from "NativePermissionConstants" /* 7482 */;
import VoiceMessageUtils from "VoiceMessageUtils" /* 11910 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4761 */;
import PendingReplyStore from "PendingReplyStore" /* 7361 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import DraftStore from "DraftStore" /* 7237 */;
import VoiceMessagesUIStore from "VoiceMessagesUIStore" /* 11586 */;
import VoiceMessageConstants from "VoiceMessageConstants" /* 11587 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let _require, c1, c2, c4, c5, dependencyMap, scheduledMessage;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let map1;
let unpackModuleId;
function triggerHapticGuarded() {
  if (authStore4.getState().showRecordingOverlay) {
    const obj = VoiceMessageUtils;
    obj.triggerHaptic();
  }
}
let react = react_mod;
let AppState = react_native.AppState;
({ setIsVoiceMessageButtonMounted: unpackModuleId, setIsUsingHoldGesture: closure_12, setVoiceMessageAnimationState: map1, showVoiceMessagesTooltip: closure_14, useVoiceMessagesUIStore: closure_15, setShowRecordingOverlay: closure_16, hideVoiceMessagesTooltip: closure_17 } = VoiceMessagesUIStore);
({ VoiceMessageAnimationState: closure_18, VOICE_RECORDING_MIN_DURATION_MILLIS: closure_19 } = VoiceMessageConstants);
({ ComponentActions: closure_20, ComponentActionsKeyed: closure_21, MessageFlags: closure_22 } = Constants);
const MessageSendLocation = MessageConstants.MessageSendLocation;
const NativePermissionTypes = NativePermissionConstants.NativePermissionTypes;
const jsx = Fragment.jsx;
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsGestureActive() {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(5);
  const ref = react.useRef(false);
  const obj2 = ReanimatedRexport;
  const sharedValue = obj2.useSharedValue(false);
  if (cResult[0] !== sharedValue) {
    const fn = function e(current) {
      ref.current = current;
      const result = sharedValue.set(current);
    };
    cResult[0] = sharedValue;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === sharedValue) {
    let tmp5;
    if (cResult[3] === tmp4) {
      tmp5 = cResult[4];
    }
    return tmp5;
  }
  const items = [ref, sharedValue, tmp4];
  cResult[2] = sharedValue;
  cResult[3] = tmp4;
  cResult[4] = items;
  tmp5 = items;
}) : (function useIsGestureActive() {
  const ref = react.useRef(false);
  const obj = ReanimatedRexport;
  const sharedValue = obj.useSharedValue(false);
  const items = [ref, sharedValue];
  const items1 = [
    ref,
    sharedValue,
    react.useCallback((current) => {
      ref.current = current;
      const result = sharedValue.set(current);
    }, items)
  ];
  return items1;
});
const __initData = { code: "function VoiceMessageButtonTsx1(newValue){const{voiceMessageAnimationState,runOnJS,triggerHapticGuarded}=this.__closure;if(voiceMessageAnimationState.get()[1]===newValue)return;const prevValue=voiceMessageAnimationState.get()[1];voiceMessageAnimationState.set([prevValue,newValue]);runOnJS(triggerHapticGuarded)();}" };
let closure_29 = { code: "function VoiceMessageButtonTsx2(){const{runOnJS,handleFinalize}=this.__closure;runOnJS(handleFinalize)();}" };
let closure_30 = { code: "function VoiceMessageButtonTsx3(e_1){const{isGestureActiveValue,LOCK_THRESHOLD,cancelThresholdX,handleUpdateValue,VoiceMessageAnimationState}=this.__closure;if(!isGestureActiveValue.get())return;if(e_1.translationY<=-LOCK_THRESHOLD&&e_1.absoluteX>=cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.LOCKING);}else if(e_1.absoluteX<cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.CANCELLING);}else if(e_1.absoluteX>=cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.SENDING);}}" };
let closure_31 = { code: "function VoiceMessageButtonTsx4(e_0){const{isGestureActiveValue,runOnJS,setIsUsingHoldGesture,voiceMessageAnimationState,VoiceMessageAnimationState,startRecording}=this.__closure;if(e_0.numberOfTouches>1)return;if(isGestureActiveValue.get())return;runOnJS(setIsUsingHoldGesture)(true);voiceMessageAnimationState.set([VoiceMessageAnimationState.SENDING,VoiceMessageAnimationState.SENDING]);runOnJS(startRecording)();}" };
const memoResult = react.memo(function VoiceMessageButton(disabled) {
  let accessibilityActions;
  let cancelThresholdX;
  let closure_6;
  let constants2;
  let intl2;
  let isGestureActiveValue;
  let onAccessibilityAction;
  disabled = disabled.disabled;
  const channelId = disabled.channelId;
  let first;
  let callback2;
  let callback3;
  let c14;
  let tmp = closure_15((voiceMessageAnimationState) => voiceMessageAnimationState.voiceMessageAnimationState);
  dependencyMap = tmp;
  let obj = disabled(4811);
  const sharedValue = obj.useSharedValue(0);
  const tmp3 = first(closure_27(), 3);
  first = tmp3[0];
  let tmp5 = tmp3[1];
  react = tmp5;
  let tmp6 = tmp3[2];
  AppState = tmp6;
  let closure_7 = react.useRef(true);
  let closure_8 = react.useRef(AppState.currentState);
  let closure_9 = react.useRef(null);
  const tmp7 = channelId(10644)();
  const width = channelId(1497)().width;
  const useCallback = react.useCallback;
  _require = sharedValue(function*(arg0, value) {
    let c0;
    let cancelReason;
    let obj7;
    let scheduledTimestamp;
    closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let closure_2;
        let closure_1;
        let data;
        let startTimeMillis;
        let user;
        let items;
        let pendingReply2;
        let sendMessageOptionsForReply;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_2 = tmp4;
            closure_1 = tmp;
            c0 = undefined;
            cancelReason = undefined;
            ({ isCancelling: c0, cancelReason } = closure_0);
            if (cancelReason === undefined) {
              cancelReason = closure_0(voiceMessageAnimationState[22]).VoiceMessageRecordingResult.CANCELLED_USER_REQUESTED;
            }
            closure_2 = undefined;
            data = undefined;
            startTimeMillis = undefined;
            user = undefined;
            items = undefined;
            pendingReply2 = undefined;
            sendMessageOptionsForReply = undefined;
            c3 = 1;
            c4 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            c3 = 2;
            c4 = 1;
            const obj8 = { value: obj7.endAudioRecording(), done: false };
            obj7 = closure_0(voiceMessageAnimationState[16]);
            return obj8;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_2 = value;
          data = closure_2.data;
          startTimeMillis = closure_2.startTimeMillis;
          closure_1_6(false);
          if (c0) {
            closure_1_9.current = cancelReason;
            const obj4 = closure_0(voiceMessageAnimationState[16]);
            let result = obj4.emitVoiceMessageRecorded(cancelReason, data.durationSecs, startTimeMillis);
            c4 = 3;
            const obj10 = { value: undefined, done: true };
            return obj10;
          } else if (data.durationSecs < closure_2_19 / 1000) {
            let obj2 = closure_0(voiceMessageAnimationState[16]);
            const result1 = obj2.emitVoiceMessageRecorded(closure_0(voiceMessageAnimationState[22]).VoiceMessageRecordingResult.CANCELLED_DURATION, data.durationSecs, startTimeMillis);
            cancelThresholdX();
            c4 = 3;
            const obj11 = { value: undefined, done: true };
            return obj11;
          } else {
            const obj12 = closure_0(voiceMessageAnimationState[16]);
            const result2 = obj12.emitVoiceMessageRecorded(closure_0(voiceMessageAnimationState[22]).VoiceMessageRecordingResult.SENT, data.durationSecs, startTimeMillis);
            user = channel.getChannel(closure_1);
            if (null != user) {
              const obj13 = { uri: data.filename, originalUri: data.filename, mimeType: "audio/ogg", filename: "voice-message.ogg", platform: closure_0(voiceMessageAnimationState[24]).UploadPlatform.REACT_NATIVE, durationSecs: data.durationSecs, waveform: data.waveform };
              const CloudUpload = closure_0(voiceMessageAnimationState[23]).CloudUpload;
              const self = this;
              const self2 = this;
              const cloudUpload = new CloudUpload(obj13, user.id);
              items = [cloudUpload];
              pendingReply2 = pendingReply.getPendingReply(closure_1);
              const obj14 = channelId(voiceMessageAnimationState[25]);
              sendMessageOptionsForReply = obj14.getSendMessageOptionsForReply(pendingReply2);
              const tmp92 = channelId(voiceMessageAnimationState[25]);
              const id = user.id;
              const obj15 = { content: "", tts: false, invalidEmojis: [], validNonShortcutEmojis: [] };
              const obj16 = {
                flags: constants.IS_VOICE_MESSAGE,
                location: constants2.VOICE_MESSAGE,
                attachmentsToUpload: items,
                scheduledTimestamp,
                onAttachmentUploadError(file, code, reason) {
                            const obj = closure_0(closure_2[26]);
                            const obj2 = { file, guildId: guildId.getGuildId(), analyticsLocations: [], code, reason };
                            const result = obj.handleUploadMessageAttachmentsErrors(obj2);
                          }
              };
              const sendMessage = tmp92.sendMessage;
              scheduledMessage = scheduledMessage.getScheduledMessage(closure_1);
              scheduledTimestamp = undefined;
              if (scheduledMessage != null) {
                scheduledTimestamp = scheduledMessage.scheduledTimestamp;
              }
              const merged = Object.assign(sendMessageOptionsForReply);
              sendMessage(id, obj15, undefined, obj16);
              let obj = closure_0(voiceMessageAnimationState[27]);
              obj.deletePendingReply(closure_1);
            }
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        }
      } catch (tmp46) {
        c4 = 3;
        throw tmp46;
      }
    }
  });
  let items = [channelId, tmp6];
  const callback = useCallback(function() {
    return closure_0(...arguments);
  }, items);
  const items1 = [channelId, callback];
  const effect = react.useEffect(() => {
    let ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    ComponentDispatch.subscribeKeyed(constants2.VOICE_MESSAGE_SEND, channelId, callback);
    return () => {
      const ComponentDispatch = disabled(voiceMessageAnimationState[28]).ComponentDispatch;
      ComponentDispatch.unsubscribeKeyed(constants2.VOICE_MESSAGE_SEND, channelId, callback);
    };
  }, items1);
  const effect1 = react.useEffect(() => {
    callback1(true);
    return () => {
      callback1(false);
    };
  }, []);
  const effect2 = react.useEffect(() => {
    let ref;
    let ref2;
    let closure_0 = closure_6.addEventListener("change", function handleVoiceMessageRecordingCancelled(event) {
      let intl;
      const current = ref.current;
      const current2 = ref2.current;
      let tmp5 = "active" !== event;
      const CANCELLED_ON_BACKGROUND = disabled(voiceMessageAnimationState[22]).VoiceMessageRecordingResult.CANCELLED_ON_BACKGROUND;
      const tmp = ref;
      const tmp2 = ref2;
      if (!tmp5) {
        tmp5 = "inactive" !== current && "background" !== current;
        const tmp6 = "inactive" !== current && "background" !== current;
      }
      if (!tmp5) {
        tmp5 = current2 !== CANCELLED_ON_BACKGROUND;
      }
      if (!tmp5) {
        const obj = { text: intl.string(disabled(voiceMessageAnimationState[30]).t.JM7Y2D), variant: "critical", position: "bottom" };
        const openMana = channelId(voiceMessageAnimationState[29]).openMana;
        channelId(voiceMessageAnimationState[29]);
        intl = tmp3(tmp4[30]).intl;
        openMana("VOICE_MESSAGE_CANCELLED_ON_BACKGROUND", obj);
        tmp2.current = null;
      }
      tmp.current = event;
    });
    return () => {
      closure_0.remove();
    };
  }, []);
  const items2 = [first, tmp6];
  const effect3 = react.useEffect(() => {
    closure_7.current = true;
    const current = first.current;
    return () => {
      closure_7.current = false;
      const state = authStore4.getState();
      const showRecordingOverlay = state.showRecordingOverlay || null != state.recordingStatus || current;
      if (showRecordingOverlay) {
        closure_6(false);
        const obj = VoiceMessageUtils;
        obj.endAudioRecording();
      }
    };
  }, items2);
  let obj2 = disabled(4937);
  const items3 = [first, tmp6, channelId];
  const isModalOpen = obj2.useIsModalOpen();
  const effect4 = react.useEffect(() => {
    function cancel() {
      return obj(...arguments);
    }
    let obj = function _cancel() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let closure_0;
        let obj3;
        let ref;
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            let tmp4;
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                let closure_1 = tmp;
                tmp4 = undefined;
                state = state.getState();
                closure_1_6(false);
                c2 = 1;
                c3 = 1;
                const obj5 = { value: obj3.endAudioRecording(), done: false };
                obj3 = cancel(handleActionSheetChange[16]);
                return obj5;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              tmp4 = value;
              obj = cancel(handleActionSheetChange[16]);
              const result = obj.emitVoiceMessageRecorded(cancel(handleActionSheetChange[22]).VoiceMessageRecordingResult.CANCELLED_GESTURE_CONFLICT, tmp4.data.durationSecs, tmp4.startTimeMillis);
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp20) {
            c3 = 3;
            throw tmp20;
          }
        }
      });
      return obj(...arguments);
    };
    function handleActionSheetChange() {
      if (ActionSheetStore.isOpen()) {
        cancel();
      }
    }
    function handleNavigationChange() {
      obj = isChannelFocused;
      const focusedChannelId = obj.getFocusedChannelId();
      if (null != focusedChannelId) {
        if (focusedChannelId !== channelId) {
          cancel();
        }
      } else {
        cancel();
      }
    }
    cancel();
    let result = closure_7.addReactChangeListener(handleActionSheetChange);
    obj = disabled(voiceMessageAnimationState[32]);
    let rootNavigationRef = obj.getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.addListener("state", handleNavigationChange);
    }
    return () => {
      const result = ActionSheetStore.removeReactChangeListener(handleActionSheetChange);
      obj = RootNavigationRef;
      const rootNavigationRef = obj.getRootNavigationRef();
      if (rootNavigationRef != null) {
        rootNavigationRef.removeListener("state", handleNavigationChange);
      }
    };
  }, items3);
  const items4 = [sharedValue, isModalOpen];
  const effect5 = react.useEffect(() => {
    const obj = { currWaveHeight: sharedValue };
    map1(obj);
  }, items4);
  const items5 = [first, tmp6, channelId];
  const callback1 = react.useCallback(sharedValue(function*(arg0, value) {
    let closure_0;
    let closure_1;
    let closure_2;
    let obj4;
    let obj9;
    function isNormalModalOpen() {
      const obj = closure_1_0(closure_1_2[14]);
      if (obj.isModalOpen()) {
        const tmpResult = closure_1_0(closure_1_2[14]);
        const openModalKey = tmpResult.getOpenModalKey();
        let tmp5 = null == openModalKey;
        if (!tmp5) {
          const tmpResult2 = closure_1_0(closure_1_2[15]);
          tmp5 = !tmpResult2.isVoiceChannelModalKey(openModalKey);
        }
        return tmp5;
      } else {
        return false;
      }
    }
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else {
      const flag = true;
      if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let tmp;
          c5 = 2;
          const tmp4 = c4;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              disabled = undefined;
              tmp = undefined;
              if (!isNormalModalOpen()) {
                if (ref.current) {
                  if (!ref.isOpen()) {
                    if (null != channel.getChannel(channelId)) {
                      closure_6(true);
                      const ComponentDispatch = disabled(voiceMessageAnimationState[28]).ComponentDispatch;
                      ComponentDispatch.dispatch(constants2.VOICE_MESSAGE_BUTTON_PRESSED);
                      c4 = 2;
                      c5 = 1;
                      const obj6 = { value: obj9.requestPermission(constants3.AUDIO), done: false };
                      obj9 = tmp(voiceMessageAnimationState[33]);
                      return obj6;
                    }
                  }
                }
              }
            }
          } else if (1 === tmp4) {
            c3 = 0;
            closure_129_6(false);
            const obj7 = disabled(voiceMessageAnimationState[34]);
            const result = obj7.showVoiceRecordingFailed();
            c5 = 3;
            const obj8 = { value: undefined, done: true };
            return obj8;
          } else if (2 === tmp4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else if (value) {
              if (closure_129_4.current) {
                closure_1_17();
                const _performance = performance;
                disabled = performance.now();
                closure_1_16(true);
                c3 = 1;
                c4 = 3;
                c5 = 1;
                const obj11 = { value: obj4.startAudioRecording(disabled), done: false };
                obj4 = disabled(voiceMessageAnimationState[16]);
                return obj11;
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj12 = { value, done: true };
            return obj12;
          } else {
            c3 = 0;
            tmp = state.getState();
            if (tmp.recordingId === disabled) {
              voiceMessageAnimationState = tmp.voiceMessageAnimationState;
              let tmp5;
              if (voiceMessageAnimationState != null) {
                tmp5 = voiceMessageAnimationState.get()[1];
              }
              if (tmp5 !== constants.LOCKED) {
                if (!closure_129_4.current) {
                  let obj = disabled(voiceMessageAnimationState[16]);
                  obj.endAudioRecording();
                }
              }
              const obj2 = disabled(voiceMessageAnimationState[16]);
              obj2.triggerHaptic();
            }
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp51) {
          voiceMessageAnimationState = tmp51;
          if (0 === c3) {
            c5 = 3;
            throw tmp51;
          } else {
            c4 = 1;
          }
        }
      }
    }
  }), items5);
  class Q {
    constructor(arg0) {
      if (voiceMessageAnimationState.get()[1] !== arg0) {
        const items = [voiceMessageAnimationState.get()[1], arg0];
        const result = obj.set(items);
        const obj2 = ReanimatedRexport;
        obj2.runOnJS(triggerHapticGuarded)();
      }
    }
  }
  let obj3 = { voiceMessageAnimationState: tmp, runOnJS: disabled(4811).runOnJS, triggerHapticGuarded };
  Q.__closure = obj3;
  Q.__workletHash = 9127775028714;
  Q.__initData = __initData;
  const items6 = [tmp];
  callback2 = react.useCallback(Q, items6);
  const items7 = [tmp, first, callback, tmp6];
  callback3 = react.useCallback(() => {
    if (first.current) {
      closure_6(false);
      const tmp6 = voiceMessageAnimationState.get()[1];
      const obj2 = voiceMessageAnimationState;
      if (VoiceMessageAnimationState.SENDING === tmp6) {
        callback({ isCancelling: false });
      } else if (VoiceMessageAnimationState.CANCELLING === tmp6) {
        callback({ isCancelling: true });
      } else if (VoiceMessageAnimationState.LOCKING === tmp6) {
        setIsUsingHoldGesture(false);
        const items = [, ];
        ({ LOCKING: arr[0], LOCKED: arr[1] } = VoiceMessageAnimationState);
        const result = obj2.set(items);
        const obj4 = ReanimatedRexport;
        obj4.runOnJS(triggerHapticGuarded)();
      } else {
        const obj3 = VoiceMessageUtils;
        obj3.endAudioRecording();
      }
    } else {
      const obj = VoiceMessageUtils;
      obj.endAudioRecording();
    }
  }, items7);
  const tmp19 = channelId(8613);
  const tmp20 = sharedValue(function*(arg0, value) {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_0 = tmp3;
            c1 = 1;
            c2 = 1;
            const obj4 = { value: callback1(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          callback2(false);
          const items = [, ];
          ({ LOCKED: arr[0], LOCKED: arr[1] } = constants);
          const result = closure_128_2.set(items);
          c2 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp11) {
        c2 = 3;
        throw tmp11;
      }
    }
  });
  let intl = disabled(1126).intl;
  const sum = 0.5 * tmp7 + (width - tmp7);
  c14 = sum;
  const items8 = [disabled, tmp5, tmp, callback1, sum, callback2, callback3];
  ({ accessibilityActions, onAccessibilityAction } = tmp19(tmp20, intl.string(disabled(1126).t.lwy6aX)));
  tmp19(tmp20, intl.string(disabled(1126).t.lwy6aX));
  const memo = react.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const fn = function n(numberOfTouches) {
      const value = numberOfTouches.numberOfTouches > 1 || isGestureActiveValue.get();
      if (!value) {
        const obj = disabled(closure_2[19]);
        obj.runOnJS(callback2)(true);
        const items = [, ];
        ({ SENDING: arr[0], SENDING: arr[1] } = constants);
        const result = closure_1_2.set(items);
        const obj2 = disabled(closure_2[19]);
        obj2.runOnJS(callback1)();
      }
    };
    const enabledResult = PanResult.enabled(!disabled);
    const minDistanceResult = enabledResult.minDistance(0);
    let obj = { isGestureActiveValue, runOnJS: ReanimatedRexport.runOnJS, setIsUsingHoldGesture, voiceMessageAnimationState, VoiceMessageAnimationState, startRecording: callback1 };
    fn.__closure = obj;
    fn.__workletHash = 10355730278260;
    fn.__initData = __initData3;
    const fn2 = function t(translationY) {
      if (isGestureActiveValue.get()) {
        if (translationY.translationY <= -40) {
          if (translationY.absoluteX >= cancelThresholdX) {
            callback2(constants.LOCKING);
          }
        }
        if (translationY.absoluteX < cancelThresholdX) {
          callback2(constants.CANCELLING);
        } else if (translationY.absoluteX >= tmp3) {
          callback2(constants.SENDING);
        }
      }
    };
    let obj2 = { isGestureActiveValue, LOCK_THRESHOLD: 40, cancelThresholdX, handleUpdateValue: callback2, VoiceMessageAnimationState };
    fn2.__closure = obj2;
    fn2.__workletHash = 17157839009657;
    fn2.__initData = __initData2;
    const fn3 = function e() {
      const obj = disabled(voiceMessageAnimationState[19]);
      obj.runOnJS(callback3)();
    };
    const onTouchesDownResult = minDistanceResult.onTouchesDown(fn);
    const onUpdateResult = onTouchesDownResult.onUpdate(fn2);
    fn3.__closure = { runOnJS: ReanimatedRexport.runOnJS, handleFinalize: callback3 };
    fn3.__workletHash = 2411654680943;
    fn3.__initData = __initData;
    ({ runOnJS: ReanimatedRexport.runOnJS, handleFinalize: callback3 });
    return onUpdateResult.onFinalize(fn3);
  }, items8);
  const tooltipTargetRef = channelId(11912)().tooltipTargetRef;
  const GestureDetector = disabled(6333).GestureDetector;
  let obj5 = { ref: tooltipTargetRef, IconComponent: disabled(11064).MicrophoneIcon, active: false, accessibilityLabel: intl2.string(disabled(1126).t.lwy6aX), accessibilityActions, onAccessibilityAction, disabled };
  channelId(11891);
  intl2 = disabled(1126).intl;
  return <GestureDetector gesture={memo}>{null}</GestureDetector>;
});
let result = size.fileFinishedImporting("modules/voice_messages/native/components/VoiceMessageButton.tsx");

export default memoResult;
