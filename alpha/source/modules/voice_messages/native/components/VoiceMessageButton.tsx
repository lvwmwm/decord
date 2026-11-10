// Module ID: 14073
// Function ID: 14074
// Name: VoiceMessageButton
// Dependencies: [5, 32, 19, 17, 5377, 7902, 4991, 7780, 13982, 13983, 1072, 5147, 8013, 21, 5316, 8012, 14074, 1652, 11388, 11709, 1493, 13548, 8282, 8284, 7715, 9876, 10326, 1108, 5839, 1113, 6931, 5317, 8030, 5838, 1705, 9152, 5422, 14076, 13033, 11201, 12147, 2]

// Module 14073 (VoiceMessageButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import _mod1705 from "module_1705" /* 1705 */;
import MessageConstants from "MessageConstants" /* 5147 */;
import RootNavigationRef from "RootNavigationRef" /* 5317 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5422 */;
import isChannelFocused from "isChannelFocused" /* 6931 */;
import NativePermissionConstants from "NativePermissionConstants" /* 8013 */;
import VoiceMessageUtils from "VoiceMessageUtils" /* 14074 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 5377 */;
import PendingReplyStore from "PendingReplyStore" /* 7902 */;
import ChannelStore from "ChannelStore" /* 4991 */;
import DraftStore from "DraftStore" /* 7780 */;
import VoiceMessagesUIStore from "VoiceMessagesUIStore" /* 13982 */;
import VoiceMessageConstants from "VoiceMessageConstants" /* 13983 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let _require, closure_2, dependencyMap, scheduledMessage;

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
  if (clientStatuses.getState().showRecordingOverlay) {
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
const memoResult = react.memo(function VoiceMessageButton(arg0) {
  let MicrophoneIcon;
  let _undefined;
  let accessibilityActions;
  let channelId;
  let closure_5;
  let closure_6;
  let disabled;
  let intl2;
  let obj6;
  let onAccessibilityAction;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmpResult2;
  ({ disabled, channelId } = arg0);
  disabled = undefined;
  dependencyMap = undefined;
  let sharedValue;
  let first;
  react = undefined;
  AppState = undefined;
  let closure_7;
  let closure_8;
  let closure_9;
  let callback;
  let callback1;
  let callback2;
  let callback3;
  let c14;
  let tmp = disabled;
  let tmp2 = dependencyMap;
  const tmp3 = disabled(11388)() > 0;
  if (!disabled) {
    disabled = tmp3;
  }
  let tmp4 = closure_15((voiceMessageAnimationState) => voiceMessageAnimationState.voiceMessageAnimationState);
  dependencyMap = tmp4;
  let tmp5 = channelId;
  let obj = channelId(1652);
  sharedValue = obj.useSharedValue(0);
  let obj2 = react;
  const ref = react.useRef(false);
  let obj3 = channelId(1652);
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
  const tmp9 = first(items1, 3);
  first = tmp9[0];
  const tmp11 = tmp9[1];
  react = tmp11;
  const tmp12 = tmp9[2];
  AppState = tmp12;
  closure_7 = react.useRef(true);
  closure_8 = react.useRef(AppState.currentState);
  closure_9 = react.useRef(null);
  const tmp13 = tmp(11709)();
  const width = tmp(1493)().width;
  const tmp14 = sharedValue;
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
            let closure_1 = tmp;
            c0 = undefined;
            cancelReason = undefined;
            ({ isCancelling: c0, cancelReason } = closure_0);
            if (cancelReason === undefined) {
              cancelReason = closure_0(closure_2_2[21]).VoiceMessageRecordingResult.CANCELLED_USER_REQUESTED;
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
            const result1 = obj2.emitVoiceMessageRecorded(closure_0(closure_2_2[21]).VoiceMessageRecordingResult.CANCELLED_DURATION, data.durationSecs, startTimeMillis);
            _undefined();
            c4 = 3;
            const obj11 = { value: undefined, done: true };
            return obj11;
          } else {
            const obj12 = closure_0(closure_2_2[16]);
            const result2 = obj12.emitVoiceMessageRecorded(closure_0(closure_2_2[21]).VoiceMessageRecordingResult.SENT, data.durationSecs, startTimeMillis);
            user = channel.getChannel(closure_0);
            if (null != user) {
              const obj13 = { uri: data.filename, originalUri: data.filename, mimeType: "audio/ogg", filename: "voice-message.ogg", platform: closure_0(closure_2_2[23]).UploadPlatform.REACT_NATIVE, durationSecs: data.durationSecs, waveform: data.waveform };
              const CloudUpload = closure_0(closure_2_2[22]).CloudUpload;
              const self = this;
              const self2 = this;
              const cloudUpload = new CloudUpload(obj13, user.id);
              items = [cloudUpload];
              pendingReply2 = pendingReply.getPendingReply(closure_0);
              const obj14 = disabled(closure_2_2[24]);
              sendMessageOptionsForReply = obj14.getSendMessageOptionsForReply(pendingReply2);
              const tmp92 = disabled(closure_2_2[24]);
              const id = user.id;
              const obj15 = { content: "", tts: false, invalidEmojis: [], validNonShortcutEmojis: [] };
              const obj16 = {
                flags: constants.IS_VOICE_MESSAGE,
                location: constants2.VOICE_MESSAGE,
                attachmentsToUpload: items,
                scheduledTimestamp,
                onAttachmentUploadError(file, code, reason) {
                            const obj = closure_0(closure_2[25]);
                            const obj2 = { file, guildId: guildId.getGuildId(), analyticsLocations: [], code, reason };
                            const result = obj.handleUploadMessageAttachmentsErrors(obj2);
                          }
              };
              const sendMessage = tmp92.sendMessage;
              scheduledMessage = scheduledMessage.getScheduledMessage(closure_0);
              scheduledTimestamp = undefined;
              if (scheduledMessage != null) {
                scheduledTimestamp = scheduledMessage.scheduledTimestamp;
              }
              const merged = Object.assign(sendMessageOptionsForReply);
              sendMessage(id, obj15, undefined, obj16);
              let obj = closure_0(closure_2_2[26]);
              obj.deletePendingReply(closure_0);
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
  let items2 = [channelId, tmp12];
  callback = useCallback(function() {
    return closure_0(...arguments);
  }, items2);
  let items3 = [channelId, callback];
  const effect = react.useEffect(() => {
    let ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    ComponentDispatch.subscribeKeyed(constants2.VOICE_MESSAGE_SEND, channelId, callback);
    return () => {
      const ComponentDispatch = channelId(closure_2[27]).ComponentDispatch;
      ComponentDispatch.unsubscribeKeyed(constants.VOICE_MESSAGE_SEND, closure_1_0, callback);
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
      const CANCELLED_ON_BACKGROUND = channelId(closure_2[21]).VoiceMessageRecordingResult.CANCELLED_ON_BACKGROUND;
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
        const obj = { text: intl.string(channelId(closure_2[29]).t.JM7Y2D), variant: "critical", position: "bottom" };
        const open = disabled(closure_2[28]).open;
        disabled(closure_2[28]);
        intl = tmp3(tmp4[29]).intl;
        open("VOICE_MESSAGE_CANCELLED_ON_BACKGROUND", obj);
        tmp2.current = null;
      }
      tmp.current = event;
    });
    return () => {
      closure_0.remove();
    };
  }, []);
  let items4 = [first, tmp12];
  const effect3 = react.useEffect(() => {
    closure_7.current = true;
    const current = first.current;
    return () => {
      closure_7.current = false;
      const state = clientStatuses.getState();
      const showRecordingOverlay = state.showRecordingOverlay || null != state.recordingStatus || current;
      if (showRecordingOverlay) {
        closure_6(false);
        const obj = VoiceMessageUtils;
        obj.endAudioRecording();
      }
    };
  }, items4);
  let obj4 = channelId(5316);
  let items5 = [first, tmp12, channelId];
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
              const result = obj.emitVoiceMessageRecorded(cancel(handleActionSheetChange[21]).VoiceMessageRecordingResult.CANCELLED_GESTURE_CONFLICT, tmp4.data.durationSecs, tmp4.startTimeMillis);
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
    obj = channelId(closure_2[31]);
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
  const items7 = [first, tmp12, channelId];
  callback1 = react.useCallback(sharedValue(function*(arg0, value) {
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
              channelId = undefined;
              tmp = undefined;
              if (!isNormalModalOpen()) {
                if (ref.current) {
                  if (!ref.isOpen()) {
                    if (null != channel.getChannel(channelId)) {
                      closure_6(true);
                      const ComponentDispatch = channelId(closure_2[27]).ComponentDispatch;
                      ComponentDispatch.dispatch(constants2.VOICE_MESSAGE_BUTTON_PRESSED);
                      c4 = 2;
                      c5 = 1;
                      const obj6 = { value: obj9.requestPermission(constants3.AUDIO), done: false };
                      obj9 = tmp(closure_2[32]);
                      return obj6;
                    }
                  }
                }
              }
            }
          } else if (1 === tmp4) {
            c3 = 0;
            closure_129_6(false);
            const obj7 = channelId(closure_2[33]);
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
                channelId = performance.now();
                closure_1_16(true);
                c3 = 1;
                c4 = 3;
                c5 = 1;
                const obj11 = { value: obj4.startAudioRecording(channelId), done: false };
                obj4 = channelId(closure_2[16]);
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
            if (tmp.recordingId === channelId) {
              const voiceMessageAnimationState = tmp.voiceMessageAnimationState;
              let tmp5;
              if (voiceMessageAnimationState != null) {
                tmp5 = voiceMessageAnimationState.get()[1];
              }
              if (tmp5 !== constants.LOCKED) {
                if (!closure_129_4.current) {
                  let obj = channelId(closure_2[16]);
                  obj.endAudioRecording();
                }
              }
              const obj2 = channelId(closure_2[16]);
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
  const items8 = [closure_27, tmp4, , ];
  const useCallback2 = react.useCallback;
  items8[2] = channelId(1705).scheduleOnRN;
  items8[3] = triggerHapticGuarded;
  let c0;
  let c1;
  let c2;
  [tmp24, tmp25, tmp26, tmp27] = items8;
  class VoiceMessageButtonTsx1 {
    constructor(arg0) {
      if (_undefined.get()[1] !== arg0) {
        const items = [_undefined.get()[1], arg0];
        const result = obj.set(items);
        _undefined2(c2);
      }
    }
  }
  const items9 = [tmp25, tmp26, tmp27];
  VoiceMessageButtonTsx1.__closure = items9;
  VoiceMessageButtonTsx1.__workletHash = 5239564128434;
  VoiceMessageButtonTsx1.__initData = tmp24;
  const items10 = [tmp4];
  callback2 = useCallback2(VoiceMessageButtonTsx1, items10);
  const items11 = [tmp4, first, callback, tmp12];
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
  let tmpResult = tmp(9152);
  const tmp14Result = tmp14(function*(arg0, value) {
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
            const tmp10 = disabled;
            if (!tmp10) {
              c1 = 1;
              c2 = 1;
              const obj4 = { value: callback1(), done: false };
              return obj4;
            }
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
        }
        c2 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp12) {
        c2 = 3;
        throw tmp12;
      }
    }
  });
  let intl = tmp5(1113).intl;
  const sum = 0.5 * tmp13 + (width - tmp13);
  c14 = sum;
  const items12 = [disabled, tmp11, tmp4, callback1, sum, callback2, callback3];
  ({ accessibilityActions, onAccessibilityAction } = tmpResult(tmp14Result, intl.string(tmp5(1113).t.lwy6aX)));
  tmpResult(tmp14Result, intl.string(tmp5(1113).t.lwy6aX));
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
  const tooltipTargetRef = tmp(14076)().tooltipTargetRef;
  let obj5 = { gesture: memo, children: tmp35(tmpResult2, obj6) };
  const GestureDetector = tmp5(5422).GestureDetector;
  obj6 = { ref: tooltipTargetRef, IconComponent: MicrophoneIcon, active: false, accessibilityLabel: intl2.string(tmp5(1113).t.lwy6aX), accessibilityActions, onAccessibilityAction, disabled };
  tmpResult2 = tmp(13033);
  if (tmp3) {
    MicrophoneIcon = tmp5(11201).WaveformIcon;
  } else {
    MicrophoneIcon = tmp5(12147).MicrophoneIcon;
  }
  intl2 = tmp5(1113).intl;
  return jsx(GestureDetector, obj5);
});
let result = size.fileFinishedImporting("modules/voice_messages/native/components/VoiceMessageButton.tsx");

export default memoResult;
