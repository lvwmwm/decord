// Module ID: 8829
// Function ID: 8830
// Name: ChannelCallStore
// Dependencies: [19, 2044, 8830, 2005, 4857, 2040, 7780, 560, 1248, 573, 5037, 12, 8831, 8832, 8833, 504, 8834, 2]
// Exports: clearFocusTimer, resetChannelCallStore, resetFocus, resetFocusTimer, setFocus, setVoiceChatDrawerState, toggleFocus, useChannelCallOrientationHandlers, useIsVoiceChatFocused

// Module 8829 (ChannelCallStore)
import DispatcherDefault from "Dispatcher" /* 573 */;
import react_native from "react-native" /* 1248 */;
import Constants from "Constants" /* 2005 */;
import Timers from "Timers" /* 2040 */;
import CallConstants from "CallConstants" /* 4857 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5037 */;
import DeviceOrientation from "DeviceOrientation" /* 7780 */;
import useIsPrivateAudioOnlyCallDefault from "useIsPrivateAudioOnlyCall" /* 8831 */;
import useSelectedParticipantDefault from "useSelectedParticipant" /* 8832 */;
import isOrientationLockSupportedDefault from "isOrientationLockSupported" /* 8834 */;
import react_mod from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import ChannelCallConstants from "ChannelCallConstants" /* 8830 */;
import module_560 from "module_560" /* 560 */;
import module_12 from "module_12" /* 12 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let VoiceCallOverlayType;
let VoiceChatDrawerState;
let obj2;
const f87433 = () => {
  const obj = require("react-native");
  obj.batchUpdates(() => state.setState({ focus: false }));
};
let react = react_mod;
({ VoiceCallOverlayType, VoiceChatDrawerState } = ChannelCallConstants);
const OrientationLockState = Constants.OrientationLockState;
const ParticipantTypes = CallConstants.ParticipantTypes;
const timeout = new Timers.Timeout();
let obj = { focus: true, pipFocus: false, isGestureEnabled: true, voiceChatDrawerState: VoiceChatDrawerState.CLOSED, voiceCallOverlayLayoutStates: obj2 };
obj2 = {};
let size = { x: "Array", y: "PX_8", width: "y", height: "HermesInternal", screenOrientation: DeviceOrientation.OrientationType.PORTRAIT, hasUserInteractedSinceOrientationChange: true, isInitialized: true, isVisible: null };
obj2[VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON] = size;
const size1 = { x: "Array", y: "PX_8", width: "y", height: "HermesInternal", screenOrientation: DeviceOrientation.OrientationType.PORTRAIT, hasUserInteractedSinceOrientationChange: true, isInitialized: true, isVisible: null };
obj2[VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE] = size1;
let closure_9 = freeze(obj);
let obj3 = module_560.create(() => closure_9);
const throttleResult = module_12.throttle(() => {
  const pipFocus = obj3.getState().pipFocus;
  let obj = pipFocus(1248);
  obj.batchUpdates(() => {
    const obj = { pipFocus: !pipFocus };
    return obj3.setState(obj);
  });
}, 300);
size = size_mod;
let result = size.fileFinishedImporting("modules/video_calls/native/ChannelCallStore.tsx");

export const focusTimeout = timeout;
export const setFocus = function setFocus(focus) {
  _require = focus;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { focus };
    return obj3.setState(obj);
  });
};
export const toggleFocus = function toggleFocus() {
  const focus = obj3.getState().focus;
  let obj = focus(1248);
  obj.batchUpdates(() => {
    const obj = { focus: !focus, pipFocus: false };
    return obj3.setState(obj);
  });
};
export const resetFocusTimer = function resetFocusTimer() {
  timeout.stop();
  timeout.start(5000, f87433);
};
export const resetFocus = function resetFocus() {
  let state;
  if (obj3.getState().focus) {
    timeout.stop();
    timeout.start(5000, f87433);
  } else {
    let obj = react_native;
    obj.batchUpdates(() => state.setState({ focus: true }));
  }
};
export const clearFocusTimer = function clearFocusTimer() {
  timeout.stop();
};
export const setVoiceChatDrawerState = function setVoiceChatDrawerState(embeddedActivityLocationChannelId, CLOSED) {
  let voiceChatDrawerState;
  _require = embeddedActivityLocationChannelId;
  importDefault = CLOSED;
  const tmp = CLOSED !== VoiceChatDrawerState.OPEN && CLOSED !== VoiceChatDrawerState.CLOSED;
  if (!tmp) {
    let obj = DispatcherDefault;
    obj.wait(() => {
      const obj = ChannelRTCActionCreatorsDefault;
      return obj.updateChatOpen(embeddedActivityLocationChannelId, voiceChatDrawerState === VoiceChatDrawerState.OPEN);
    });
  }
  const obj2 = require("react-native");
  obj2.batchUpdates(() => {
    const obj = { voiceChatDrawerState };
    return obj3.setState(obj);
  });
};
export const togglePipFocus = throttleResult;
export const useIsVoiceChatFocused = function useIsVoiceChatFocused() {
  const voiceChatDrawerState = obj3().voiceChatDrawerState;
  return voiceChatDrawerState === VoiceChatDrawerState.OPEN || voiceChatDrawerState === VoiceChatDrawerState.CLOSING;
};
export const useChannelCallOrientationHandlers = function useChannelCallOrientationHandlers(isGuildStageVoice) {
  let applicationId;
  let closure_0;
  let closure_1;
  let closure_3;
  let stateFromStores;
  let tmp = dependencyMap;
  let tmp2 = useIsPrivateAudioOnlyCallDefault(isGuildStageVoice);
  _require = tmp2;
  const tmp3 = useSelectedParticipantDefault(isGuildStageVoice);
  importDefault = tmp3;
  let isGuildStageVoiceResult = isGuildStageVoice.isGuildStageVoice();
  if (isGuildStageVoiceResult) {
    isGuildStageVoiceResult = null == tmp3;
  }
  dependencyMap = isGuildStageVoiceResult;
  const voiceChatDrawerState = obj3().voiceChatDrawerState;
  let tmp6 = voiceChatDrawerState === stateFromStores.OPEN || voiceChatDrawerState === stateFromStores.CLOSING;
  let obj = require("VoiceChatHooks");
  const tmp7 = _require;
  if (!tmp6) {
    tmp6 = !obj.useIsConnectedToVoiceChannel(isGuildStageVoice);
  }
  react = tmp6;
  const currentEmbeddedActivity = applicationId.getCurrentEmbeddedActivity();
  const tmp8 = applicationId;
  applicationId = undefined;
  if (currentEmbeddedActivity != null) {
    applicationId = currentEmbeddedActivity.applicationId;
  }
  const items = [tmp8];
  const items1 = [applicationId];
  const tmp7Result = tmp7(504);
  stateFromStores = tmp7Result.useStateFromStores(items, () => {
    let UNLOCKED;
    if (null != applicationId) {
      let UNLOCKED2 = EmbeddedActivitiesStore.getOrientationLockStateForApp(tmp);
      if (UNLOCKED2 == null) {
        UNLOCKED2 = OrientationLockState.UNLOCKED;
      }
      UNLOCKED = UNLOCKED2;
    } else {
      UNLOCKED = OrientationLockState.UNLOCKED;
    }
    return UNLOCKED;
  }, items1);
  const effect = react.useEffect(() => closure_0(dependencyMap[6]).restoreDefaultOrientation, []);
  const items2 = [stateFromStores, tmp3, applicationId, tmp2, isGuildStageVoiceResult, tmp6];
  const effect1 = react.useEffect(() => {
    const tmp = dependencyMap;
    if (!tmp) {
      const tmp2 = closure_3;
      if (!tmp2) {
        if (null != closure_1) {
          if (closure_1.type === ParticipantTypes.ACTIVITY) {
            if (closure_1.applicationId === applicationId) {
              if (isOrientationLockSupportedDefault()) {
                if (OrientationLockState.UNLOCKED === stateFromStores) {
                  obj3 = DeviceOrientation;
                  obj3.unlockOrientation({ unlockAfterRotatingToPreviousLock: true });
                } else if (OrientationLockState.PORTRAIT === stateFromStores) {
                  const obj2 = DeviceOrientation;
                  obj2.lockOrientation("PORTRAIT", true);
                } else if (OrientationLockState.LANDSCAPE === stateFromStores) {
                  const obj6 = DeviceOrientation;
                  obj6.lockOrientation("LANDSCAPE", true);
                }
              }
            }
          }
        }
        const obj = DeviceOrientation;
        if (closure_0) {
          const result = obj.lockOrientationForiOS("PORTRAIT");
        } else {
          obj.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
        }
      }
    }
    const obj4 = DeviceOrientation;
    obj4.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
    const obj5 = DeviceOrientation;
    const result1 = obj5.lockOrientationForiOS("PORTRAIT");
  }, items2);
};
export const resetChannelCallStore = function resetChannelCallStore() {
  let state;
  timeout.stop();
  const obj = react_native;
  obj.batchUpdates(() => state.setState(closure_1_9));
};
export const useChannelCallStore = obj3;
