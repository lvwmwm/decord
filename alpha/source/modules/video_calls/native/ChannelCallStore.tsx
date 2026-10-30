// Module ID: 10981
// Function ID: 10982
// Name: ChannelCallStore
// Dependencies: [19, 4857, 10982, 5676, 4853, 8894, 560, 1260, 5754, 12, 10983, 10984, 10985, 504, 2021, 10986, 2]
// Exports: clearFocusTimer, resetChannelCallStore, resetFocus, resetFocusTimer, setFocus, setVoiceChatDrawerState, toggleFocus, useChannelCallOrientationHandlers, useIsVoiceChatFocused

// Module 10981 (ChannelCallStore)
import react_native from "react-native" /* 1260 */;
import EmbeddedActivityOrientationLockState from "EmbeddedActivityOrientationLockState" /* 2021 */;
import Timers from "Timers" /* 4853 */;
import CallConstants from "CallConstants" /* 5676 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5754 */;
import DeviceOrientation from "DeviceOrientation" /* 8894 */;
import useIsPrivateAudioOnlyCallDefault from "useIsPrivateAudioOnlyCall" /* 10983 */;
import useSelectedParticipantDefault from "useSelectedParticipant" /* 10984 */;
import isOrientationLockSupportedDefault from "isOrientationLockSupported" /* 10986 */;
import react_mod from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4857 */;
import ChannelCallConstants from "ChannelCallConstants" /* 10982 */;
import module_560 from "module_560" /* 560 */;
import module_12 from "module_12" /* 12 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let VoiceCallOverlayType;
let VoiceChatDrawerState;
let obj2;
const f98300 = () => {
  const obj = require("react-native");
  obj.batchUpdates(() => state.setState({ focus: false }));
};
let react = react_mod;
({ VoiceCallOverlayType, VoiceChatDrawerState } = ChannelCallConstants);
const ParticipantTypes = CallConstants.ParticipantTypes;
const timeout = new Timers.Timeout();
let obj = { focus: true, pipFocus: false, isGestureEnabled: true, voiceChatDrawerState: VoiceChatDrawerState.CLOSED, voiceCallOverlayLayoutStates: obj2 };
obj2 = {};
let size = { x: "Array", y: "Path", width: "y", height: "HermesInternal", screenOrientation: DeviceOrientation.OrientationType.PORTRAIT, hasUserInteractedSinceOrientationChange: true, isInitialized: true, isVisible: null };
obj2[VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON] = size;
const size1 = { x: "Array", y: "Path", width: "y", height: "HermesInternal", screenOrientation: DeviceOrientation.OrientationType.PORTRAIT, hasUserInteractedSinceOrientationChange: true, isInitialized: true, isVisible: null };
obj2[VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE] = size1;
let closure_8 = freeze(obj);
let obj3 = module_560.create(() => closure_8);
const throttleResult = module_12.throttle(() => {
  const pipFocus = obj3.getState().pipFocus;
  let obj = pipFocus(1260);
  obj.batchUpdates(() => {
    const obj = { pipFocus: !pipFocus };
    return obj3.setState(obj);
  });
}, 300);
size = size_mod;
let result = size.fileFinishedImporting("modules/video_calls/native/ChannelCallStore.tsx");

export const focusTimeout = timeout;
export function setFocus(focus) {
  _require = focus;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { focus };
    return obj3.setState(obj);
  });
}
export function toggleFocus() {
  const focus = obj3.getState().focus;
  let obj = focus(1260);
  obj.batchUpdates(() => {
    const obj = { focus: !focus, pipFocus: false };
    return obj3.setState(obj);
  });
}
export function resetFocusTimer() {
  timeout.stop();
  timeout.start(5000, f98300);
}
export function resetFocus() {
  let state;
  if (obj3.getState().focus) {
    timeout.stop();
    timeout.start(5000, f98300);
  } else {
    let obj = react_native;
    obj.batchUpdates(() => state.setState({ focus: true }));
  }
}
export function clearFocusTimer() {
  timeout.stop();
}
export function setVoiceChatDrawerState(embeddedActivityLocationChannelId, CLOSED) {
  let voiceChatDrawerState;
  _require = CLOSED;
  const tmp2 = CLOSED !== VoiceChatDrawerState.OPEN && CLOSED !== VoiceChatDrawerState.CLOSED;
  if (!tmp2) {
    let obj = ChannelRTCActionCreatorsDefault;
    obj.updateChatOpen(embeddedActivityLocationChannelId, CLOSED === VoiceChatDrawerState.OPEN);
  }
  const obj2 = require("react-native");
  obj2.batchUpdates(() => {
    const obj = { voiceChatDrawerState };
    return obj3.setState(obj);
  });
}
export const togglePipFocus = throttleResult;
export function useIsVoiceChatFocused() {
  const voiceChatDrawerState = obj3().voiceChatDrawerState;
  return voiceChatDrawerState === VoiceChatDrawerState.OPEN || voiceChatDrawerState === VoiceChatDrawerState.CLOSING;
}
export function useChannelCallOrientationHandlers(isGuildStageVoice) {
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
        UNLOCKED2 = EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.UNLOCKED;
      }
      UNLOCKED = UNLOCKED2;
    } else {
      UNLOCKED = EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.UNLOCKED;
    }
    return UNLOCKED;
  }, items1);
  const effect = react.useEffect(() => closure_0(dependencyMap[5]).restoreDefaultOrientation, []);
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
                if (EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.UNLOCKED === stateFromStores) {
                  obj3 = DeviceOrientation;
                  obj3.unlockOrientation({ unlockAfterRotatingToPreviousLock: true });
                } else if (EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.PORTRAIT === stateFromStores) {
                  const obj2 = DeviceOrientation;
                  obj2.lockOrientation("PORTRAIT", true);
                } else if (EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.LANDSCAPE === stateFromStores) {
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
}
export function resetChannelCallStore() {
  let state;
  timeout.stop();
  const obj = react_native;
  obj.batchUpdates(() => state.setState(closure_1_8));
}
export const useChannelCallStore = obj3;
