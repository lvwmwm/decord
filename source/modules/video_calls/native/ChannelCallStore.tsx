// Module ID: 10240
// Function ID: 78988
// Name: resetFocusTimer
// Dependencies: [31, 1347, 10241, 4155, 4148, 4015, 8347, 621, 682, 686, 4323, 22, 10242, 10243, 10244, 566, 4110, 2]
// Exports: clearFocusTimer, resetChannelCallStore, resetFocus, setFocus, setVoiceChatDrawerState, toggleFocus, useChannelCallOrientationHandlers

// Module 10240 (resetFocusTimer)
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import BOX_MODE_ACTIONSHEET_WIDTH from "BOX_MODE_ACTIONSHEET_WIDTH";
import { OrientationLockState } from "items3";
import { ParticipantTypes } from "ParticipantTypes";
import keys from "keys";
import importDefaultResult from "apply";

let VoiceCallOverlayType;
let VoiceChatDrawerState;
let require = arg1;
function resetFocusTimer() {
  timeout.stop();
  timeout.start(5000, () => {
    outer1_0(outer1_2[8]).batchUpdates(() => outer2_10.setState({ focus: false }));
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
({ VoiceCallOverlayType, VoiceChatDrawerState } = BOX_MODE_ACTIONSHEET_WIDTH);
const timeout = new require("_createForOfIteratorHelperLoose").Timeout();
let obj = { focus: true, pipFocus: false, isGestureEnabled: true, voiceChatDrawerState: VoiceChatDrawerState.CLOSED };
obj = {};
obj = { x: undefined, y: undefined, width: undefined, height: undefined, screenOrientation: require("handleOrientationChange").OrientationType.PORTRAIT, hasUserInteractedSinceOrientationChange: false, isInitialized: false, isVisible: false };
obj[VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON] = obj;
obj[VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE] = { x: undefined, y: undefined, width: undefined, height: undefined, screenOrientation: require("handleOrientationChange").OrientationType.PORTRAIT, hasUserInteractedSinceOrientationChange: false, isInitialized: false, isVisible: false };
obj.voiceCallOverlayLayoutStates = obj;
let closure_9 = Object.freeze(obj);
const obj2 = keys.create(() => closure_9);
const obj1 = { x: undefined, y: undefined, width: undefined, height: undefined, screenOrientation: require("handleOrientationChange").OrientationType.PORTRAIT, hasUserInteractedSinceOrientationChange: false, isInitialized: false, isVisible: false };
const throttleResult = require("apply").throttle(() => {
  const pipFocus = obj2.getState().pipFocus;
  pipFocus(682).batchUpdates(() => outer1_10.setState({ pipFocus: !pipFocus }));
}, 300);
let result = require("BOX_MODE_ACTIONSHEET_WIDTH").fileFinishedImporting("modules/video_calls/native/ChannelCallStore.tsx");

export const focusTimeout = timeout;
export const setFocus = function setFocus(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => outer1_10.setState({ focus: closure_0 }));
};
export const toggleFocus = function toggleFocus() {
  const focus = obj2.getState().focus;
  focus(682).batchUpdates(() => outer1_10.setState({ focus: !focus, pipFocus: false }));
};
export { resetFocusTimer };
export const resetFocus = function resetFocus() {
  if (obj2.getState().focus) {
    resetFocusTimer();
  } else {
    require(682) /* batchUpdates */.batchUpdates(() => outer1_10.setState({ focus: true }));
    const obj = require(682) /* batchUpdates */;
  }
};
export const clearFocusTimer = function clearFocusTimer() {
  timeout.stop();
};
export const setVoiceChatDrawerState = function setVoiceChatDrawerState(embeddedActivityLocationChannelId, CLOSED) {
  const _require = embeddedActivityLocationChannelId;
  const importDefault = CLOSED;
  let tmp = CLOSED !== VoiceChatDrawerState.OPEN;
  if (tmp) {
    tmp = CLOSED !== VoiceChatDrawerState.CLOSED;
  }
  if (!tmp) {
    importDefault(686).wait(() => CLOSED(outer1_2[10]).updateChatOpen(closure_0, CLOSED === outer1_5.OPEN));
    const obj = importDefault(686);
  }
  _require(682).batchUpdates(() => outer1_10.setState({ voiceChatDrawerState: closure_1 }));
};
export const togglePipFocus = throttleResult;
export { useIsVoiceChatFocused };
export const useChannelCallOrientationHandlers = function useChannelCallOrientationHandlers(isGuildStageVoice) {
  const tmp = importDefault(10242)(isGuildStageVoice);
  const require = tmp;
  const tmp2 = importDefault(10243)(isGuildStageVoice);
  importDefault = tmp2;
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
  const currentEmbeddedActivity = applicationId.getCurrentEmbeddedActivity();
  applicationId = undefined;
  if (null != currentEmbeddedActivity) {
    applicationId = currentEmbeddedActivity.applicationId;
  }
  obj = require(10244) /* useIsConnectedToVoiceChannelForId */;
  const items = [applicationId];
  const items1 = [applicationId];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => {
    if (null == applicationId) {
      let UNLOCKED = outer1_6.UNLOCKED;
    } else {
      UNLOCKED = applicationId.getOrientationLockStateForApp(applicationId);
    }
    return UNLOCKED;
  }, items1);
  const effect = React.useEffect(() => tmp(isGuildStageVoiceResult[6]).restoreDefaultOrientation, []);
  const items2 = [stateFromStores, tmp2, applicationId, tmp, isGuildStageVoiceResult, tmp6];
  const effect1 = React.useEffect(() => {
    if (!closure_2) {
      if (!result) {
        if (null != tmp2) {
          if (tmp2.type === outer1_7.ACTIVITY) {
            if (tmp2.applicationId === applicationId) {
              if (!obj3.isIpadOS()) {
                if (outer1_6.UNLOCKED === stateFromStores) {
                  let obj = { unlockAfterRotatingToPreviousLock: true };
                  tmp(isGuildStageVoiceResult[6]).unlockOrientation(obj);
                  const obj5 = tmp(isGuildStageVoiceResult[6]);
                } else if (outer1_6.PORTRAIT === tmp15) {
                  tmp(isGuildStageVoiceResult[6]).lockOrientation("PORTRAIT", true);
                  const obj4 = tmp(isGuildStageVoiceResult[6]);
                } else if (outer1_6.LANDSCAPE === tmp15) {
                  tmp(isGuildStageVoiceResult[6]).lockOrientation("LANDSCAPE", true);
                  const obj9 = tmp(isGuildStageVoiceResult[6]);
                }
              }
              obj3 = tmp(isGuildStageVoiceResult[16]);
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
  require(682) /* batchUpdates */.batchUpdates(() => outer1_10.setState(outer1_9));
};
export const useChannelCallStore = obj2;
