// Module ID: 10197
// Function ID: 78712
// Name: resetFocusTimer
// Dependencies: []
// Exports: clearFocusTimer, resetChannelCallStore, resetFocus, setFocus, setVoiceChatDrawerState, toggleFocus, useChannelCallOrientationHandlers

// Module 10197 (resetFocusTimer)
let VoiceCallOverlayType;
let VoiceChatDrawerState;
function resetFocusTimer() {
  timeout.stop();
  timeout.start(5000, () => {
    callback(closure_2[8]).batchUpdates(() => state.setState({ focus: false }));
  });
}
function useIsVoiceChatFocused() {
  const voiceChatDrawerState = obj2().voiceChatDrawerState;
  let tmp = voiceChatDrawerState === VoiceChatDrawerState.OPEN;
  if (!tmp) {
    tmp = voiceChatDrawerState === VoiceChatDrawerState.CLOSING;
  }
  return tmp;
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ VoiceCallOverlayType, VoiceChatDrawerState } = arg1(dependencyMap[2]));
const OrientationLockState = arg1(dependencyMap[3]).OrientationLockState;
const ParticipantTypes = arg1(dependencyMap[4]).ParticipantTypes;
const timeout = new arg1(dependencyMap[5]).Timeout();
let obj = { voiceChatDrawerState: VoiceChatDrawerState.CLOSED };
obj = {};
obj = { x: undefined, y: undefined, width: undefined, height: undefined, screenOrientation: arg1(dependencyMap[6]).OrientationType.PORTRAIT, hasUserInteractedSinceOrientationChange: false, isInitialized: false, isVisible: false };
obj[VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON] = obj;
const tmp2 = arg1(dependencyMap[2]);
obj[VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE] = { x: undefined, y: undefined, width: undefined, height: undefined, screenOrientation: arg1(dependencyMap[6]).OrientationType.PORTRAIT, hasUserInteractedSinceOrientationChange: false, isInitialized: false, isVisible: false };
obj.voiceCallOverlayLayoutStates = obj;
let closure_9 = Object.freeze(obj);
const obj1 = { x: undefined, y: undefined, width: undefined, height: undefined, screenOrientation: arg1(dependencyMap[6]).OrientationType.PORTRAIT, hasUserInteractedSinceOrientationChange: false, isInitialized: false, isVisible: false };
const obj2 = arg1(dependencyMap[7]).create(() => closure_9);
const obj5 = arg1(dependencyMap[7]);
const importDefaultResult = importDefault(dependencyMap[11]);
const throttleResult = importDefault(dependencyMap[11]).throttle(() => {
  const arg1 = obj2.getState().pipFocus;
  arg1(dependencyMap[8]).batchUpdates(() => state.setState({ pipFocus: !pipFocus }));
}, 300);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/video_calls/native/ChannelCallStore.tsx");

export const focusTimeout = timeout;
export const setFocus = function setFocus(arg0) {
  const arg1 = arg0;
  arg1(dependencyMap[8]).batchUpdates(() => state.setState({ focus: arg0 }));
};
export const toggleFocus = function toggleFocus() {
  const arg1 = obj2.getState().focus;
  arg1(dependencyMap[8]).batchUpdates(() => state.setState({ focus: !focus, pipFocus: false }));
};
export { resetFocusTimer };
export const resetFocus = function resetFocus() {
  if (obj2.getState().focus) {
    resetFocusTimer();
  } else {
    arg1(dependencyMap[8]).batchUpdates(() => state.setState({ focus: true }));
    const obj = arg1(dependencyMap[8]);
  }
};
export const clearFocusTimer = function clearFocusTimer() {
  timeout.stop();
};
export const setVoiceChatDrawerState = function setVoiceChatDrawerState(embeddedActivityLocationChannelId, CLOSED) {
  CLOSED = embeddedActivityLocationChannelId;
  const importDefault = CLOSED;
  let tmp = CLOSED !== VoiceChatDrawerState.OPEN;
  if (tmp) {
    tmp = CLOSED !== VoiceChatDrawerState.CLOSED;
  }
  if (!tmp) {
    importDefault(dependencyMap[9]).wait(() => arg1(closure_2[10]).updateChatOpen(arg0, arg1 === constants.OPEN));
    const obj = importDefault(dependencyMap[9]);
  }
  CLOSED(dependencyMap[8]).batchUpdates(() => state.setState({ voiceChatDrawerState: arg1 }));
};
export const togglePipFocus = throttleResult;
export { useIsVoiceChatFocused };
export const useChannelCallOrientationHandlers = function useChannelCallOrientationHandlers(isGuildStageVoice) {
  const tmp = importDefault(dependencyMap[12])(isGuildStageVoice);
  const arg1 = tmp;
  const tmp2 = importDefault(dependencyMap[13])(isGuildStageVoice);
  const importDefault = tmp2;
  let isGuildStageVoiceResult = isGuildStageVoice.isGuildStageVoice();
  if (isGuildStageVoiceResult) {
    isGuildStageVoiceResult = null == tmp2;
  }
  const dependencyMap = isGuildStageVoiceResult;
  const tmp5 = useIsVoiceChatFocused();
  let tmp6 = tmp5;
  if (!tmp5) {
    tmp6 = !obj.useIsConnectedToVoiceChannel(isGuildStageVoice);
  }
  const React = tmp6;
  let currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
  let applicationId;
  if (null != currentEmbeddedActivity) {
    applicationId = currentEmbeddedActivity.applicationId;
  }
  currentEmbeddedActivity = applicationId;
  const obj = arg1(dependencyMap[14]);
  const items = [currentEmbeddedActivity];
  const items1 = [applicationId];
  const stateFromStores = arg1(dependencyMap[15]).useStateFromStores(items, () => {
    if (null == applicationId) {
      let UNLOCKED = constants.UNLOCKED;
    } else {
      UNLOCKED = applicationId.getOrientationLockStateForApp(applicationId);
    }
    return UNLOCKED;
  }, items1);
  const VoiceChatDrawerState = stateFromStores;
  const effect = React.useEffect(() => tmp(isGuildStageVoiceResult[6]).restoreDefaultOrientation, []);
  const items2 = [stateFromStores, tmp2, applicationId, tmp, isGuildStageVoiceResult, tmp6];
  const effect1 = React.useEffect(() => {
    if (!isGuildStageVoiceResult) {
      if (!tmp6) {
        if (null != tmp2) {
          if (tmp2.type === constants2.ACTIVITY) {
            if (tmp2.applicationId === applicationId) {
              if (!obj3.isIpadOS()) {
                if (constants.UNLOCKED === stateFromStores) {
                  let obj = { unlockAfterRotatingToPreviousLock: true };
                  tmp(isGuildStageVoiceResult[6]).unlockOrientation(obj);
                  const obj5 = tmp(isGuildStageVoiceResult[6]);
                } else if (constants.PORTRAIT === tmp15) {
                  tmp(isGuildStageVoiceResult[6]).lockOrientation("PORTRAIT", true);
                  const obj4 = tmp(isGuildStageVoiceResult[6]);
                } else if (constants.LANDSCAPE === tmp15) {
                  tmp(isGuildStageVoiceResult[6]).lockOrientation("LANDSCAPE", true);
                  const obj9 = tmp(isGuildStageVoiceResult[6]);
                }
              }
              const obj3 = tmp(isGuildStageVoiceResult[16]);
            }
          }
        }
        obj = tmp(isGuildStageVoiceResult[6]);
        if (tmp) {
          const result = obj.lockOrientationForiOS("PORTRAIT");
        } else {
          obj = { unlockAfterRotatingToPreviousLock: false };
          obj.unlockOrientation(obj);
        }
      }
    }
    tmp(isGuildStageVoiceResult[6]).unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
    const obj7 = tmp(isGuildStageVoiceResult[6]);
    const result1 = tmp(isGuildStageVoiceResult[6]).lockOrientationForiOS("PORTRAIT");
  }, items2);
};
export const resetChannelCallStore = function resetChannelCallStore() {
  timeout.stop();
  arg1(dependencyMap[8]).batchUpdates(() => state.setState(closure_9));
};
export const useChannelCallStore = obj2;
