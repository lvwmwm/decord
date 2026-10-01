// Module ID: 11737
// Function ID: 11738
// Name: VoiceMessageButton
// Dependencies: [5, 32, 19, 17, 4521, 7093, 2045, 5200, 11442, 11443, 1074, 4829, 5045, 21, 4836, 576, 7415, 4692, 5043, 11738, 4566, 11020, 1479, 11352, 5439, 5440, 6876, 8610, 11164, 1110, 4528, 1115, 9549, 4693, 5451, 4527, 9040, 6073, 11740, 11721, 9465, 2]

// Module 11737 (VoiceMessageButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1110 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import RootNavigationRef from "RootNavigationRef" /* 4693 */;
import MessageConstants from "MessageConstants" /* 4829 */;
import NativePermissionConstants from "NativePermissionConstants" /* 5045 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6073 */;
import XSmallBoldIcon2 from "XSmallBoldIcon" /* 7415 */;
import isChannelFocused from "isChannelFocused" /* 9549 */;
import VoiceMessageUtils from "VoiceMessageUtils" /* 11738 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ActionSheetStore from "ActionSheetStore" /* 4521 */;
import PendingReplyStore from "PendingReplyStore" /* 7093 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import DraftStore from "DraftStore" /* 5200 */;
import VoiceMessagesUIStore from "VoiceMessagesUIStore" /* 11442 */;
import VoiceMessageConstants from "VoiceMessageConstants" /* 11443 */;
import Constants from "Constants" /* 1074 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let _require, c1, c2, c4, c5, currentState, dependencyMap, disabled, scheduledMessage;

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
let closure_23;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
function VoiceMessageRecordingCancelledToastIcon() {
  ({ color: nativeDefault.colors.WHITE, size: "xs" });
  const XSmallBoldIcon = XSmallBoldIcon2.XSmallBoldIcon;
  return <metroRequire style={closure_27().icon} aria-hidden>{null}</metroRequire>;
}
function triggerHapticGuarded() {
  if (authStore3.getState().showRecordingOverlay) {
    const obj = VoiceMessageUtils;
    obj.triggerHaptic();
  }
}
let react = react_mod;
({ View: metroRequire, AppState: metroImportDefault } = react_native);
({ setIsVoiceMessageButtonMounted: closure_12, setIsUsingHoldGesture: map1, setVoiceMessageAnimationState: closure_14, showVoiceMessagesTooltip: closure_15, useVoiceMessagesUIStore: closure_16, setShowRecordingOverlay: closure_17, hideVoiceMessagesTooltip: closure_18 } = VoiceMessagesUIStore);
({ VoiceMessageAnimationState: closure_19, VOICE_RECORDING_MIN_DURATION_MILLIS: closure_20 } = VoiceMessageConstants);
({ ComponentActions: closure_21, ComponentActionsKeyed: closure_22, MessageFlags: closure_23 } = Constants);
const MessageSendLocation = MessageConstants.MessageSendLocation;
const NativePermissionTypes = NativePermissionConstants.NativePermissionTypes;
const jsx = Fragment.jsx;
let obj = { icon: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL, borderRadius: nativeDefault.radii.round, padding: nativeDefault.space.PX_4, marginLeft: nativeDefault.space.PX_4 };
let closure_27 = createStyles.createStyles(obj);
const __initData = { code: "function VoiceMessageButtonTsx1(newValue){const{voiceMessageAnimationState,runOnJS,triggerHapticGuarded}=this.__closure;if(voiceMessageAnimationState.get()[1]===newValue)return;const prevValue=voiceMessageAnimationState.get()[1];voiceMessageAnimationState.set([prevValue,newValue]);runOnJS(triggerHapticGuarded)();}" };
let closure_31 = { code: "function VoiceMessageButtonTsx2(){const{runOnJS,handleFinalize}=this.__closure;runOnJS(handleFinalize)();}" };
let closure_32 = { code: "function VoiceMessageButtonTsx3(e){const{isGestureActiveValue,LOCK_THRESHOLD,cancelThresholdX,handleUpdateValue,VoiceMessageAnimationState}=this.__closure;if(!isGestureActiveValue.get())return;if(e.translationY<=-LOCK_THRESHOLD&&e.absoluteX>=cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.LOCKING);}else if(e.absoluteX<cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.CANCELLING);}else if(e.absoluteX>=cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.SENDING);}}" };
let closure_33 = { code: "function VoiceMessageButtonTsx4(e){const{isGestureActiveValue,runOnJS,setIsUsingHoldGesture,voiceMessageAnimationState,VoiceMessageAnimationState,startRecording}=this.__closure;if(e.numberOfTouches>1)return;if(isGestureActiveValue.get())return;runOnJS(setIsUsingHoldGesture)(true);voiceMessageAnimationState.set([VoiceMessageAnimationState.SENDING,VoiceMessageAnimationState.SENDING]);runOnJS(startRecording)();}" };
const memoResult = react.memo((disabled) => {
  let accessibilityActions;
  let cancelThresholdX;
  let closure_7;
  let constants2;
  let intl2;
  let isGestureActiveValue;
  let onAccessibilityAction;
  disabled = disabled.disabled;
  const channelId = disabled.channelId;
  let first;
  react = undefined;
  let callback2;
  let callback3;
  let c14;
  let tmp = closure_16((voiceMessageAnimationState) => voiceMessageAnimationState.voiceMessageAnimationState);
  dependencyMap = tmp;
  let obj = disabled(4566);
  const sharedValue = obj.useSharedValue(0);
  const ref = react.useRef(false);
  let obj2 = disabled(4566);
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
  let closure_6 = tmp8;
  currentState = react.useRef(true);
  let closure_8 = react.useRef(currentState.currentState);
  let closure_9 = react.useRef(null);
  const tmp9 = channelId(11020)();
  const width = channelId(1479)().width;
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
              cancelReason = closure_0(voiceMessageAnimationState[23]).VoiceMessageRecordingResult.CANCELLED_USER_REQUESTED;
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
            return { value: "flex", done: true };
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
            obj7 = closure_0(voiceMessageAnimationState[19]);
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
            const obj4 = closure_0(voiceMessageAnimationState[19]);
            let result = obj4.emitVoiceMessageRecorded(cancelReason, data.durationSecs, startTimeMillis);
            c4 = 3;
            const obj10 = { value: undefined, done: true };
            return obj10;
          } else if (data.durationSecs < closure_2_20 / 1000) {
            let obj2 = closure_0(voiceMessageAnimationState[19]);
            const result1 = obj2.emitVoiceMessageRecorded(closure_0(voiceMessageAnimationState[23]).VoiceMessageRecordingResult.CANCELLED_DURATION, data.durationSecs, startTimeMillis);
            closure_2_15();
            c4 = 3;
            const obj11 = { value: undefined, done: true };
            return obj11;
          } else {
            const obj12 = closure_0(voiceMessageAnimationState[19]);
            const result2 = obj12.emitVoiceMessageRecorded(closure_0(voiceMessageAnimationState[23]).VoiceMessageRecordingResult.SENT, data.durationSecs, startTimeMillis);
            user = channel.getChannel(closure_1);
            if (null != user) {
              const obj13 = { uri: data.filename, originalUri: data.filename, mimeType: "audio/ogg", filename: "voice-message.ogg", platform: closure_0(voiceMessageAnimationState[25]).UploadPlatform.REACT_NATIVE, durationSecs: data.durationSecs, waveform: data.waveform };
              const CloudUpload = closure_0(voiceMessageAnimationState[24]).CloudUpload;
              const self = this;
              const self2 = this;
              const cloudUpload = new CloudUpload(obj13, user.id);
              items = [cloudUpload];
              pendingReply2 = pendingReply.getPendingReply(closure_1);
              const obj14 = channelId(voiceMessageAnimationState[26]);
              sendMessageOptionsForReply = obj14.getSendMessageOptionsForReply(pendingReply2);
              const tmp92 = channelId(voiceMessageAnimationState[26]);
              const id = user.id;
              const obj15 = { content: "", tts: false, invalidEmojis: [], validNonShortcutEmojis: [] };
              const obj16 = {
                flags: constants.IS_VOICE_MESSAGE,
                location: constants2.VOICE_MESSAGE,
                attachmentsToUpload: items,
                scheduledTimestamp,
                onAttachmentUploadError(file, code, reason) {
                            const obj = closure_0(closure_2[27]);
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
              let obj = closure_0(voiceMessageAnimationState[28]);
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
      const ComponentDispatch = disabled(voiceMessageAnimationState[29]).ComponentDispatch;
      ComponentDispatch.unsubscribeKeyed(constants2.VOICE_MESSAGE_SEND, channelId, callback);
    };
  }, items3);
  const effect1 = react.useEffect(() => {
    callback2(true);
    return () => {
      callback2(false);
    };
  }, []);
  const effect2 = react.useEffect(() => {
    let ref;
    let ref2;
    let closure_0 = closure_7.addEventListener("change", (event) => {
      let intl;
      const current = ref.current;
      const current2 = ref2.current;
      let tmp5 = "active" !== event;
      const CANCELLED_ON_BACKGROUND = disabled(voiceMessageAnimationState[23]).VoiceMessageRecordingResult.CANCELLED_ON_BACKGROUND;
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
        const obj = {
          key: "VOICE_MESSAGE_CANCELLED_ON_BACKGROUND",
          content: intl.string(disabled(voiceMessageAnimationState[31]).t.JM7Y2D),
          icon() {
              return closure_1_26(closure_1_28, {});
            },
          position: "bottom"
        };
        const open = channelId(voiceMessageAnimationState[30]).open;
        channelId(voiceMessageAnimationState[30]);
        intl = tmp3(tmp4[31]).intl;
        open(obj);
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
      const state = authStore3.getState();
      const showRecordingOverlay = state.showRecordingOverlay || null != state.recordingStatus || current;
      if (showRecordingOverlay) {
        closure_6(false);
        const obj = VoiceMessageUtils;
        obj.endAudioRecording();
      }
    };
  }, items4);
  let obj3 = disabled(4692);
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
                obj3 = cancel(handleActionSheetChange[19]);
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
              obj = cancel(handleActionSheetChange[19]);
              const result = obj.emitVoiceMessageRecorded(cancel(handleActionSheetChange[23]).VoiceMessageRecordingResult.CANCELLED_GESTURE_CONFLICT, tmp4.data.durationSecs, tmp4.startTimeMillis);
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
    let result = closure_8.addReactChangeListener(handleActionSheetChange);
    obj = disabled(voiceMessageAnimationState[33]);
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
    authStore2(obj);
  }, items6);
  const items7 = [first, tmp8, channelId];
  const callback1 = react.useCallback(sharedValue(function*(arg0, value) {
    let closure_0;
    let closure_1;
    let closure_2;
    let obj4;
    let obj9;
    function isNormalModalOpen() {
      const obj = closure_1_0(closure_1_2[17]);
      if (obj.isModalOpen()) {
        const tmpResult = closure_1_0(closure_1_2[17]);
        const openModalKey = tmpResult.getOpenModalKey();
        let tmp5 = null == openModalKey;
        if (!tmp5) {
          const tmpResult2 = closure_1_0(closure_1_2[18]);
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
                  if (!open.isOpen()) {
                    if (null != channel.getChannel(channelId)) {
                      closure_6(true);
                      const ComponentDispatch = disabled(voiceMessageAnimationState[29]).ComponentDispatch;
                      ComponentDispatch.dispatch(constants2.VOICE_MESSAGE_BUTTON_PRESSED);
                      c4 = 2;
                      c5 = 1;
                      const obj6 = { value: obj9.requestPermission(constants3.AUDIO), done: false };
                      obj9 = tmp(voiceMessageAnimationState[34]);
                      return obj6;
                    }
                  }
                }
              }
            }
          } else if (1 === tmp4) {
            c3 = 0;
            closure_129_6(false);
            const obj7 = disabled(voiceMessageAnimationState[35]);
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
                closure_1_18();
                const _performance = performance;
                disabled = performance.now();
                closure_1_17(true);
                c3 = 1;
                c4 = 3;
                c5 = 1;
                const obj11 = { value: obj4.startAudioRecording(disabled), done: false };
                obj4 = disabled(voiceMessageAnimationState[19]);
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
                  let obj = disabled(voiceMessageAnimationState[19]);
                  obj.endAudioRecording();
                }
              }
              const obj2 = disabled(voiceMessageAnimationState[19]);
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
  class W {
    constructor(arg0) {
      if (voiceMessageAnimationState.get()[1] !== arg0) {
        const items = [voiceMessageAnimationState.get()[1], arg0];
        const result = obj.set(items);
        const obj2 = ReanimatedRexport;
        obj2.runOnJS(triggerHapticGuarded)();
      }
    }
  }
  let obj4 = { voiceMessageAnimationState: tmp, runOnJS: disabled(4566).runOnJS, triggerHapticGuarded };
  W.__closure = obj4;
  W.__workletHash = 9127775028714;
  W.__initData = __initData;
  const items8 = [tmp];
  callback2 = react.useCallback(W, items8);
  const items9 = [tmp, first, callback, tmp8];
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
        map1(false);
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
  const tmp21 = channelId(9040);
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
          callback3(false);
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
  let intl = disabled(1115).intl;
  const sum = 0.5 * tmp9 + (width - tmp9);
  c14 = sum;
  const items10 = [disabled, tmp7, tmp, callback1, sum, callback2, callback3];
  ({ accessibilityActions, onAccessibilityAction } = tmp21(tmp22, intl.string(disabled(1115).t.lwy6aX)));
  tmp21(tmp22, intl.string(disabled(1115).t.lwy6aX));
  const memo = react.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const fn = function n(numberOfTouches) {
      const value = numberOfTouches.numberOfTouches > 1 || isGestureActiveValue.get();
      if (!value) {
        const obj = disabled(closure_2[20]);
        obj.runOnJS(callback3)(true);
        const items = [, ];
        ({ SENDING: arr[0], SENDING: arr[1] } = constants);
        const result = closure_1_2.set(items);
        const obj2 = disabled(closure_2[20]);
        obj2.runOnJS(callback1)();
      }
    };
    const enabledResult = PanResult.enabled(!disabled);
    const minDistanceResult = enabledResult.minDistance(0);
    let obj = { isGestureActiveValue, runOnJS: ReanimatedRexport.runOnJS, setIsUsingHoldGesture: map1, voiceMessageAnimationState, VoiceMessageAnimationState, startRecording: callback1 };
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
      const obj = disabled(voiceMessageAnimationState[20]);
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
  const tooltipTargetRef = channelId(11740)().tooltipTargetRef;
  const GestureDetector = disabled(6073).GestureDetector;
  let obj6 = { ref: tooltipTargetRef, IconComponent: disabled(9465).MicrophoneIcon, active: false, accessibilityLabel: intl2.string(disabled(1115).t.lwy6aX), accessibilityActions, onAccessibilityAction, disabled };
  channelId(11721);
  intl2 = disabled(1115).intl;
  return <GestureDetector gesture={memo}>{null}</GestureDetector>;
});
let result = size.fileFinishedImporting("modules/voice_messages/native/components/VoiceMessageButton.tsx");

export default memoResult;
