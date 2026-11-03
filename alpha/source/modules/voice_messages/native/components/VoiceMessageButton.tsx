// Module ID: 13944
// Function ID: 13945
// Name: VoiceMessageButton
// Dependencies: [5, 32, 19, 17, 5382, 7946, 4990, 7825, 13856, 13857, 1072, 5146, 8064, 21, 5321, 8063, 13945, 1652, 11692, 1493, 13438, 8333, 8335, 7760, 9912, 10331, 1108, 5832, 1113, 6993, 5322, 8081, 5831, 1705, 9194, 5426, 13947, 12941, 12109, 2]

// Module 13944 (VoiceMessageButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import _mod1705 from "module_1705" /* 1705 */;
import MessageConstants from "MessageConstants" /* 5146 */;
import RootNavigationRef from "RootNavigationRef" /* 5322 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5426 */;
import isChannelFocused from "isChannelFocused" /* 6993 */;
import NativePermissionConstants from "NativePermissionConstants" /* 8064 */;
import VoiceMessageUtils from "VoiceMessageUtils" /* 13945 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 5382 */;
import PendingReplyStore from "PendingReplyStore" /* 7946 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import DraftStore from "DraftStore" /* 7825 */;
import VoiceMessagesUIStore from "VoiceMessagesUIStore" /* 13856 */;
import VoiceMessageConstants from "VoiceMessageConstants" /* 13857 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let _require, closure_2, dependencyMap, scheduledMessage, state;

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
  if (state.getState().showRecordingOverlay) {
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
let closure_27 = { code: "(function VoiceMessageButtonTsx1(newValue){let[voiceMessageAnimationState,scheduleOnRN,triggerHapticGuarded]=this.__closure;if(voiceMessageAnimationState.get()[1]===newValue)return;const prevValue=voiceMessageAnimationState.get()[1];voiceMessageAnimationState.set([prevValue,newValue]);scheduleOnRN(triggerHapticGuarded);})" };
let closure_28 = { code: "(function VoiceMessageButtonTsx2(e){let[isGestureActiveValue,scheduleOnRN,setIsUsingHoldGesture,voiceMessageAnimationState,VoiceMessageAnimationState,startRecording]=this.__closure;if(e.numberOfTouches>1)return;if(isGestureActiveValue.get())return;scheduleOnRN(setIsUsingHoldGesture,true);voiceMessageAnimationState.set([VoiceMessageAnimationState.SENDING,VoiceMessageAnimationState.SENDING]);scheduleOnRN(startRecording);})" };
let closure_29 = { code: "(function VoiceMessageButtonTsx3(e){let[isGestureActiveValue,LOCK_THRESHOLD,cancelThresholdX,handleUpdateValue,VoiceMessageAnimationState]=this.__closure;if(!isGestureActiveValue.get())return;if(e.translationY<=-LOCK_THRESHOLD&&e.absoluteX>=cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.LOCKING);}else if(e.absoluteX<cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.CANCELLING);}else if(e.absoluteX>=cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.SENDING);}})" };
let closure_30 = { code: "(function VoiceMessageButtonTsx4(){let[scheduleOnRN,handleFinalize]=this.__closure;scheduleOnRN(handleFinalize);})" };
const memoResult = react.memo(function VoiceMessageButton(disabled) {
  let _undefined;
  let accessibilityActions;
  let closure_5;
  let closure_6;
  let intl2;
  let onAccessibilityAction;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  disabled = disabled.disabled;
  const channelId = disabled.channelId;
  let first;
  react = undefined;
  let callback2;
  let callback3;
  let c14;
  let tmp = state((voiceMessageAnimationState) => voiceMessageAnimationState.voiceMessageAnimationState);
  dependencyMap = tmp;
  let tmp2 = disabled;
  const tmp3 = dependencyMap;
  let obj = disabled(1652);
  const sharedValue = obj.useSharedValue(0);
  let obj2 = react;
  const ref = react.useRef(false);
  let obj3 = disabled(1652);
  const sharedValue1 = obj3.useSharedValue(false);
  let items = [ref, sharedValue1];
  let items1 = [
    ref,
    sharedValue1,
    react.useCallback((current) => {
      ref.current = current;
      const result = sharedValue1.set(current);
    }, items)
  ];
  const tmp7 = first(items1, 3);
  first = tmp7[0];
  const tmp9 = tmp7[1];
  react = tmp9;
  const tmp10 = tmp7[2];
  AppState = tmp10;
  let closure_7 = react.useRef(true);
  let closure_8 = react.useRef(AppState.currentState);
  let closure_9 = react.useRef(null);
  const tmp11 = channelId;
  const tmp12 = channelId(11692)();
  const width = channelId(1493)().width;
  const tmp13 = sharedValue;
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
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
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
              cancelReason = closure_0(closure_2_2[20]).VoiceMessageRecordingResult.CANCELLED_USER_REQUESTED;
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
            return { value: "flexDirection", done: true };
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
            obj7 = closure_0(closure_2_2[16]);
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
            const obj4 = closure_0(closure_2_2[16]);
            let result = obj4.emitVoiceMessageRecorded(cancelReason, data.durationSecs, startTimeMillis);
            c4 = 3;
            const obj10 = { value: undefined, done: true };
            return obj10;
          } else if (data.durationSecs < closure_2_19 / 1000) {
            let obj2 = closure_0(closure_2_2[16]);
            const result1 = obj2.emitVoiceMessageRecorded(closure_0(closure_2_2[20]).VoiceMessageRecordingResult.CANCELLED_DURATION, data.durationSecs, startTimeMillis);
            _undefined();
            c4 = 3;
            const obj11 = { value: undefined, done: true };
            return obj11;
          } else {
            const obj12 = closure_0(closure_2_2[16]);
            const result2 = obj12.emitVoiceMessageRecorded(closure_0(closure_2_2[20]).VoiceMessageRecordingResult.SENT, data.durationSecs, startTimeMillis);
            user = channel.getChannel(closure_1);
            if (null != user) {
              const obj13 = { uri: data.filename, originalUri: data.filename, mimeType: "audio/ogg", filename: "voice-message.ogg", platform: closure_0(closure_2_2[22]).UploadPlatform.REACT_NATIVE, durationSecs: data.durationSecs, waveform: data.waveform };
              const CloudUpload = closure_0(closure_2_2[21]).CloudUpload;
              const self = this;
              const self2 = this;
              const cloudUpload = new CloudUpload(obj13, user.id);
              items = [cloudUpload];
              pendingReply2 = pendingReply.getPendingReply(closure_1);
              const obj14 = channelId(closure_2_2[23]);
              sendMessageOptionsForReply = obj14.getSendMessageOptionsForReply(pendingReply2);
              const tmp92 = channelId(closure_2_2[23]);
              const id = user.id;
              const obj15 = { content: "", tts: false, invalidEmojis: [], validNonShortcutEmojis: [] };
              const obj16 = {
                flags: constants.IS_VOICE_MESSAGE,
                location: constants2.VOICE_MESSAGE,
                attachmentsToUpload: items,
                scheduledTimestamp,
                onAttachmentUploadError(file, code, reason) {
                            const obj = closure_0(closure_2[24]);
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
              let obj = closure_0(closure_2_2[25]);
              obj.deletePendingReply(closure_1);
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        }
      } catch (tmp46) {
        c4 = 3;
        throw tmp46;
      }
    }
  });
  let items2 = [channelId, tmp10];
  const callback = useCallback(function() {
    return closure_0(...arguments);
  }, items2);
  let items3 = [channelId, callback];
  const effect = react.useEffect(() => {
    let ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    ComponentDispatch.subscribeKeyed(constants2.VOICE_MESSAGE_SEND, channelId, callback);
    return () => {
      const ComponentDispatch = disabled(closure_2[26]).ComponentDispatch;
      ComponentDispatch.unsubscribeKeyed(constants.VOICE_MESSAGE_SEND, channelId, callback);
    };
  }, items3);
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
      const CANCELLED_ON_BACKGROUND = disabled(closure_2[20]).VoiceMessageRecordingResult.CANCELLED_ON_BACKGROUND;
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
        const obj = { text: intl.string(disabled(closure_2[28]).t.JM7Y2D), variant: "critical", position: "bottom" };
        const open = channelId(closure_2[27]).open;
        channelId(closure_2[27]);
        intl = tmp3(tmp4[28]).intl;
        open("VOICE_MESSAGE_CANCELLED_ON_BACKGROUND", obj);
        tmp2.current = null;
      }
      tmp.current = event;
    });
    return () => {
      closure_0.remove();
    };
  }, []);
  let items4 = [first, tmp10];
  const effect3 = react.useEffect(() => {
    closure_7.current = true;
    const current = first.current;
    return () => {
      closure_7.current = false;
      state = state.getState();
      const showRecordingOverlay = state.showRecordingOverlay || null != state.recordingStatus || current;
      if (showRecordingOverlay) {
        closure_6(false);
        const obj = VoiceMessageUtils;
        obj.endAudioRecording();
      }
    };
  }, items4);
  let obj4 = disabled(5321);
  let items5 = [first, tmp10, channelId];
  const isModalOpen = obj4.useIsModalOpen();
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
            return { value: "HermesInternal", done: null };
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
              const result = obj.emitVoiceMessageRecorded(cancel(handleActionSheetChange[20]).VoiceMessageRecordingResult.CANCELLED_GESTURE_CONFLICT, tmp4.data.durationSecs, tmp4.startTimeMillis);
            }
            c3 = 3;
            return { value: "HermesInternal", done: null };
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
    obj = disabled(closure_2[30]);
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
  }, items5);
  const items6 = [sharedValue, isModalOpen];
  const effect5 = react.useEffect(() => {
    const obj = { currWaveHeight: sharedValue };
    map1(obj);
  }, items6);
  const items7 = [first, tmp10, channelId];
  const callback1 = react.useCallback(sharedValue(function*(arg0, value) {
    let closure_0;
    let closure_1;
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
          return { value: "HermesInternal", done: null };
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
                      const ComponentDispatch = disabled(closure_2[26]).ComponentDispatch;
                      ComponentDispatch.dispatch(constants2.VOICE_MESSAGE_BUTTON_PRESSED);
                      c4 = 2;
                      c5 = 1;
                      const obj6 = { value: obj9.requestPermission(constants3.AUDIO), done: false };
                      obj9 = tmp(closure_2[31]);
                      return obj6;
                    }
                  }
                }
              }
            }
          } else if (1 === tmp4) {
            c3 = 0;
            closure_129_6(false);
            const obj7 = disabled(closure_2[32]);
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
                obj4 = disabled(closure_2[16]);
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
              const voiceMessageAnimationState = tmp.voiceMessageAnimationState;
              let tmp5;
              if (voiceMessageAnimationState != null) {
                tmp5 = voiceMessageAnimationState.get()[1];
              }
              if (tmp5 !== constants.LOCKED) {
                if (!closure_129_4.current) {
                  let obj = disabled(closure_2[16]);
                  obj.endAudioRecording();
                }
              }
              const obj2 = disabled(closure_2[16]);
              obj2.triggerHaptic();
            }
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp51) {
          closure_2 = tmp51;
          if (0 === c3) {
            c5 = 3;
            throw tmp51;
          } else {
            c4 = 1;
          }
        }
      }
    }
  }), items7);
  const items8 = [closure_27, tmp, , ];
  const useCallback2 = react.useCallback;
  items8[2] = disabled(1705).scheduleOnRN;
  items8[3] = triggerHapticGuarded;
  let c0;
  let c1;
  let c2;
  [tmp23, tmp24, tmp25, tmp26] = items8;
  class VoiceMessageButtonTsx1 {
    constructor(arg0) {
      if (_undefined.get()[1] !== arg0) {
        const items = [_undefined.get()[1], arg0];
        const result = obj.set(items);
        _undefined2(c2);
      }
    }
  }
  const items9 = [tmp24, tmp25, tmp26];
  VoiceMessageButtonTsx1.__closure = items9;
  VoiceMessageButtonTsx1.__workletHash = 5239564128434;
  VoiceMessageButtonTsx1.__initData = tmp23;
  const items10 = [tmp];
  callback2 = useCallback2(VoiceMessageButtonTsx1, items10);
  const items11 = [tmp, first, callback, tmp10];
  callback3 = obj2.useCallback(() => {
    if (first.current) {
      closure_6(false);
      const tmp6 = closure_2.get()[1];
      const obj2 = closure_2;
      if (constants.SENDING === tmp6) {
        callback({ isCancelling: false });
      } else if (constants.CANCELLING === tmp6) {
        callback({ isCancelling: true });
      } else if (constants.LOCKING === tmp6) {
        authStore2(false);
        const items = [, ];
        ({ LOCKING: arr[0], LOCKED: arr[1] } = constants);
        const result = obj2.set(items);
        const obj4 = _mod1705;
        obj4.scheduleOnRN(triggerHapticGuarded);
      } else {
        const obj3 = VoiceMessageUtils;
        obj3.endAudioRecording();
      }
    } else {
      const obj = VoiceMessageUtils;
      obj.endAudioRecording();
    }
  }, items11);
  const tmp11Result = tmp11(9194);
  const tmp13Result = tmp13(function*(arg0, value) {
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
        return { value: "HermesInternal", done: null };
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
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp11) {
        c2 = 3;
        throw tmp11;
      }
    }
  });
  let intl = tmp2(1113).intl;
  const sum = 0.5 * tmp12 + (width - tmp12);
  c14 = sum;
  const items12 = [disabled, tmp9, tmp, callback1, sum, callback2, callback3];
  ({ accessibilityActions, onAccessibilityAction } = tmp11Result(tmp13Result, intl.string(tmp2(1113).t.lwy6aX)));
  tmp11Result(tmp13Result, intl.string(tmp2(1113).t.lwy6aX));
  const memo = obj2.useMemo(() => {
    let tmp10;
    let tmp11;
    let tmp12;
    let tmp13;
    let tmp14;
    let tmp15;
    let tmp16;
    let tmp17;
    let tmp18;
    let tmp20;
    let tmp21;
    let tmp22;
    let tmp6;
    let tmp7;
    let tmp8;
    let tmp9;
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const enabledResult = PanResult.enabled(!disabled);
    let items = [closure_28, closure_5, , , , , ];
    const onTouchesDown = enabledResult.minDistance(0).onTouchesDown;
    const tmp4 = closure_5;
    enabledResult.minDistance(0);
    items[2] = _mod1705.scheduleOnRN;
    items[3] = authStore2;
    items[4] = closure_2;
    items[5] = closure_18;
    items[6] = callback1;
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
    class VoiceMessageButtonTsx2 {
      constructor(arg0) {
        value = arg0.numberOfTouches > 1;
        if (!value) {
          tmp2 = closure_0;
          value = closure_0.get();
        }
        if (!value) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          flag = true;
          tmp5 = closure_1(closure_2, true);
          tmp6 = closure_3;
          tmp7 = closure_4;
          items = [, ];
          ({ SENDING: arr[0], SENDING: arr[1] } = closure_4);
          result = closure_3.set(items);
          tmp9 = closure_5;
          tmp10 = closure_1(closure_5);
        }
        return;
      }
    }
    const items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
    VoiceMessageButtonTsx2.__closure = items1;
    VoiceMessageButtonTsx2.__workletHash = 956711562734;
    VoiceMessageButtonTsx2.__initData = tmp6;
    const items2 = [closure_29, tmp4, 40, c14, callback2, closure_18];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items2;
    const onTouchesDownResult = onTouchesDown(VoiceMessageButtonTsx2);
    class VoiceMessageButtonTsx3 {
      constructor(arg0) {
        if (closure_0.get()) {
          tmp = arg0;
          tmp2 = closure_1;
          if (arg0.translationY <= -closure_1) {
            tmp3 = closure_2;
            if (arg0.absoluteX >= closure_2) {
              tmp11 = closure_3;
              tmp12 = closure_4;
              tmp13 = closure_3(closure_4.LOCKING);
            }
          }
          if (arg0.absoluteX < closure_2) {
            tmp8 = closure_3;
            tmp9 = closure_4;
            tmp10 = closure_3(closure_4.CANCELLING);
          } else if (arg0.absoluteX >= tmp4) {
            tmp5 = closure_3;
            tmp6 = closure_4;
            tmp7 = closure_3(closure_4.SENDING);
          }
        }
        return;
      }
    }
    const items3 = [tmp14, tmp15, tmp16, tmp17, tmp18];
    VoiceMessageButtonTsx3.__closure = items3;
    VoiceMessageButtonTsx3.__workletHash = 8623483491566;
    VoiceMessageButtonTsx3.__initData = tmp13;
    const items4 = [closure_30, , ];
    const onFinalize = onTouchesDownResult.onUpdate(VoiceMessageButtonTsx3).onFinalize;
    onTouchesDownResult.onUpdate(VoiceMessageButtonTsx3);
    items4[1] = _mod1705.scheduleOnRN;
    items4[2] = callback3;
    c0 = undefined;
    c1 = undefined;
    [tmp20, tmp21, tmp22] = items4;
    class VoiceMessageButtonTsx4 {
      constructor() {
        tmp = closure_0(closure_1);
        return;
      }
    }
    const items5 = [tmp21, tmp22];
    VoiceMessageButtonTsx4.__closure = items5;
    VoiceMessageButtonTsx4.__workletHash = 7736461965009;
    VoiceMessageButtonTsx4.__initData = tmp20;
    return onFinalize(VoiceMessageButtonTsx4);
  }, items12);
  const tooltipTargetRef = tmp11(13947)().tooltipTargetRef;
  const GestureDetector = tmp2(5426).GestureDetector;
  let obj6 = { ref: tooltipTargetRef, IconComponent: tmp2(12109).MicrophoneIcon, active: false, accessibilityLabel: intl2.string(tmp2(1113).t.lwy6aX), accessibilityActions, onAccessibilityAction, disabled };
  tmp11(12941);
  intl2 = tmp2(1113).intl;
  return <GestureDetector gesture={memo}>{null}</GestureDetector>;
});
let result = size.fileFinishedImporting("modules/voice_messages/native/components/VoiceMessageButton.tsx");

export default memoResult;
