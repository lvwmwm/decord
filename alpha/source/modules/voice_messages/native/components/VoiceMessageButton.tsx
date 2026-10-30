// Module ID: 13763
// Function ID: 13764
// Name: VoiceMessageButton
// Dependencies: [5, 32, 19, 17, 5254, 7815, 4858, 7694, 13675, 13676, 1072, 5014, 7932, 21, 5193, 7931, 13764, 5090, 11520, 1492, 13252, 8201, 8203, 7629, 9759, 10181, 1109, 5707, 1114, 6867, 5194, 7949, 5706, 9047, 5298, 13766, 12767, 11933, 2]

// Module 13763 (VoiceMessageButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import MessageConstants from "MessageConstants" /* 5014 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import RootNavigationRef from "RootNavigationRef" /* 5194 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5298 */;
import isChannelFocused from "isChannelFocused" /* 6867 */;
import NativePermissionConstants from "NativePermissionConstants" /* 7932 */;
import VoiceMessageUtils from "VoiceMessageUtils" /* 13764 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 5254 */;
import PendingReplyStore from "PendingReplyStore" /* 7815 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import DraftStore from "DraftStore" /* 7694 */;
import VoiceMessagesUIStore from "VoiceMessagesUIStore" /* 13675 */;
import VoiceMessageConstants from "VoiceMessageConstants" /* 13676 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let c1, c2, c4, c5, dependencyMap, scheduledMessage, state;

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
const __initData = { code: "function VoiceMessageButtonTsx1(newValue){const{voiceMessageAnimationState,runOnJS,triggerHapticGuarded}=this.__closure;if(voiceMessageAnimationState.get()[1]===newValue)return;const prevValue=voiceMessageAnimationState.get()[1];voiceMessageAnimationState.set([prevValue,newValue]);runOnJS(triggerHapticGuarded)();}" };
let closure_28 = { code: "function VoiceMessageButtonTsx2(){const{runOnJS,handleFinalize}=this.__closure;runOnJS(handleFinalize)();}" };
let closure_29 = { code: "function VoiceMessageButtonTsx3(e){const{isGestureActiveValue,LOCK_THRESHOLD,cancelThresholdX,handleUpdateValue,VoiceMessageAnimationState}=this.__closure;if(!isGestureActiveValue.get())return;if(e.translationY<=-LOCK_THRESHOLD&&e.absoluteX>=cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.LOCKING);}else if(e.absoluteX<cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.CANCELLING);}else if(e.absoluteX>=cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.SENDING);}}" };
let closure_30 = { code: "function VoiceMessageButtonTsx4(e){const{isGestureActiveValue,runOnJS,setIsUsingHoldGesture,voiceMessageAnimationState,VoiceMessageAnimationState,startRecording}=this.__closure;if(e.numberOfTouches>1)return;if(isGestureActiveValue.get())return;runOnJS(setIsUsingHoldGesture)(true);voiceMessageAnimationState.set([VoiceMessageAnimationState.SENDING,VoiceMessageAnimationState.SENDING]);runOnJS(startRecording)();}" };
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
  react = undefined;
  let tmp = state((voiceMessageAnimationState) => voiceMessageAnimationState.voiceMessageAnimationState);
  dependencyMap = tmp;
  let obj = disabled(5090);
  const sharedValue = obj.useSharedValue(0);
  const ref = react.useRef(false);
  let obj2 = disabled(5090);
  const sharedValue1 = obj2.useSharedValue(false);
  let items = [ref, sharedValue1];
  const items1 = [
    ref,
    sharedValue1,
    react.useCallback((current) => {
      ref.current = current;
      const result = sharedValue1.set(current);
    }, items)
  ];
  let tmp5 = first(items1, 3);
  first = tmp5[0];
  react = tmp7;
  const tmp8 = tmp5[2];
  AppState = tmp8;
  let closure_7 = react.useRef(true);
  let closure_8 = react.useRef(AppState.currentState);
  let closure_9 = react.useRef(null);
  const tmp9 = channelId(11520)();
  const width = channelId(1492)().width;
  const useCallback = react.useCallback;
  disabled = sharedValue(function*(arg0, value) {
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
              cancelReason = closure_0(voiceMessageAnimationState[20]).VoiceMessageRecordingResult.CANCELLED_USER_REQUESTED;
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
            const result1 = obj2.emitVoiceMessageRecorded(closure_0(voiceMessageAnimationState[20]).VoiceMessageRecordingResult.CANCELLED_DURATION, data.durationSecs, startTimeMillis);
            cancelThresholdX();
            c4 = 3;
            const obj11 = { value: undefined, done: true };
            return obj11;
          } else {
            const obj12 = closure_0(voiceMessageAnimationState[16]);
            const result2 = obj12.emitVoiceMessageRecorded(closure_0(voiceMessageAnimationState[20]).VoiceMessageRecordingResult.SENT, data.durationSecs, startTimeMillis);
            user = channel.getChannel(closure_1);
            if (null != user) {
              const obj13 = { uri: data.filename, originalUri: data.filename, mimeType: "audio/ogg", filename: "voice-message.ogg", platform: closure_0(voiceMessageAnimationState[22]).UploadPlatform.REACT_NATIVE, durationSecs: data.durationSecs, waveform: data.waveform };
              const CloudUpload = closure_0(voiceMessageAnimationState[21]).CloudUpload;
              const self = this;
              const self2 = this;
              const cloudUpload = new CloudUpload(obj13, user.id);
              items = [cloudUpload];
              pendingReply2 = pendingReply.getPendingReply(closure_1);
              const obj14 = channelId(voiceMessageAnimationState[23]);
              sendMessageOptionsForReply = obj14.getSendMessageOptionsForReply(pendingReply2);
              const tmp92 = channelId(voiceMessageAnimationState[23]);
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
              let obj = closure_0(voiceMessageAnimationState[25]);
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
  const items2 = [channelId, tmp8];
  const callback = useCallback(function() {
    return closure_0(...arguments);
  }, items2);
  const items3 = [channelId, callback];
  const effect = react.useEffect(() => {
    let ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    ComponentDispatch.subscribeKeyed(constants2.VOICE_MESSAGE_SEND, channelId, callback);
    return () => {
      const ComponentDispatch = disabled(voiceMessageAnimationState[26]).ComponentDispatch;
      ComponentDispatch.unsubscribeKeyed(constants2.VOICE_MESSAGE_SEND, channelId, callback);
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
      const CANCELLED_ON_BACKGROUND = disabled(voiceMessageAnimationState[20]).VoiceMessageRecordingResult.CANCELLED_ON_BACKGROUND;
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
        const obj = { text: intl.string(disabled(voiceMessageAnimationState[28]).t.JM7Y2D), variant: "critical", position: "bottom" };
        const open = channelId(voiceMessageAnimationState[27]).open;
        channelId(voiceMessageAnimationState[27]);
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
  const items4 = [first, tmp8];
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
  let obj3 = disabled(5193);
  const items5 = [first, tmp8, channelId];
  const isModalOpen = obj3.useIsModalOpen();
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
    obj = disabled(voiceMessageAnimationState[30]);
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
  const items7 = [first, tmp8, channelId];
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
                      const ComponentDispatch = disabled(voiceMessageAnimationState[26]).ComponentDispatch;
                      ComponentDispatch.dispatch(constants2.VOICE_MESSAGE_BUTTON_PRESSED);
                      c4 = 2;
                      c5 = 1;
                      const obj6 = { value: obj9.requestPermission(constants3.AUDIO), done: false };
                      obj9 = tmp(voiceMessageAnimationState[31]);
                      return obj6;
                    }
                  }
                }
              }
            }
          } else if (1 === tmp4) {
            c3 = 0;
            closure_129_6(false);
            const obj7 = disabled(voiceMessageAnimationState[32]);
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
          return { value: "HermesInternal", done: null };
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
  }), items7);
  let fn = function q(arg0) {
    if (voiceMessageAnimationState.get()[1] !== arg0) {
      const items = [voiceMessageAnimationState.get()[1], arg0];
      const result = obj.set(items);
      const obj2 = ReanimatedRexport;
      obj2.runOnJS(triggerHapticGuarded)();
    }
  };
  let obj4 = { voiceMessageAnimationState: tmp, runOnJS: disabled(5090).runOnJS, triggerHapticGuarded };
  fn.__closure = obj4;
  fn.__workletHash = 9127775028714;
  fn.__initData = __initData;
  const items8 = [tmp];
  const callback2 = react.useCallback(fn, items8);
  const items9 = [tmp, first, callback, tmp8];
  const callback3 = react.useCallback(() => {
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
  }, items9);
  const tmp21 = channelId(9047);
  const tmp22 = sharedValue(function*(arg0, value) {
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
  let intl = disabled(1114).intl;
  const sum = 0.5 * tmp9 + (width - tmp9);
  let c14 = sum;
  const items10 = [disabled, tmp7, tmp, callback1, sum, callback2, callback3];
  ({ accessibilityActions, onAccessibilityAction } = tmp21(tmp22, intl.string(disabled(1114).t.lwy6aX)));
  tmp21(tmp22, intl.string(disabled(1114).t.lwy6aX));
  const memo = react.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const fn = function n(numberOfTouches) {
      const value = numberOfTouches.numberOfTouches > 1 || isGestureActiveValue.get();
      if (!value) {
        const obj = disabled(closure_2[17]);
        obj.runOnJS(callback2)(true);
        const items = [, ];
        ({ SENDING: arr[0], SENDING: arr[1] } = constants);
        const result = closure_1_2.set(items);
        const obj2 = disabled(closure_2[17]);
        obj2.runOnJS(callback1)();
      }
    };
    const enabledResult = PanResult.enabled(!disabled);
    const minDistanceResult = enabledResult.minDistance(0);
    let obj = { isGestureActiveValue, runOnJS: ReanimatedRexport.runOnJS, setIsUsingHoldGesture, voiceMessageAnimationState, VoiceMessageAnimationState, startRecording: callback1 };
    fn.__closure = obj;
    fn.__workletHash = 15771181123252;
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
    fn2.__workletHash = 9262214665783;
    fn2.__initData = __initData2;
    const fn3 = function e() {
      const obj = disabled(voiceMessageAnimationState[17]);
      obj.runOnJS(callback3)();
    };
    const onTouchesDownResult = minDistanceResult.onTouchesDown(fn);
    const onUpdateResult = onTouchesDownResult.onUpdate(fn2);
    fn3.__closure = { runOnJS: ReanimatedRexport.runOnJS, handleFinalize: callback3 };
    fn3.__workletHash = 2411654680943;
    fn3.__initData = __initData;
    ({ runOnJS: ReanimatedRexport.runOnJS, handleFinalize: callback3 });
    return onUpdateResult.onFinalize(fn3);
  }, items10);
  const tooltipTargetRef = channelId(13766)().tooltipTargetRef;
  const GestureDetector = disabled(5298).GestureDetector;
  let obj6 = { ref: tooltipTargetRef, IconComponent: disabled(11933).MicrophoneIcon, active: false, accessibilityLabel: intl2.string(disabled(1114).t.lwy6aX), accessibilityActions, onAccessibilityAction, disabled };
  channelId(12767);
  intl2 = disabled(1114).intl;
  return <GestureDetector gesture={memo}>{null}</GestureDetector>;
});
let result = size.fileFinishedImporting("modules/voice_messages/native/components/VoiceMessageButton.tsx");

export default memoResult;
