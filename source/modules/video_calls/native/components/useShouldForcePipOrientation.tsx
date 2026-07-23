// Module ID: 10542
// Function ID: 82357
// Name: useShouldForcePipOrientation
// Dependencies: [1347, 4143, 1194, 4155, 4148, 10543, 566, 10532, 8303, 2]
// Exports: useShouldForcePipOrientation

// Module 10542 (useShouldForcePipOrientation)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { OrientationLockState } from "items3";
import ParticipantTypes from "ParticipantTypes";

let closure_7;
let closure_8;
const require = arg1;
({ isStreamParticipant: closure_7, ParticipantTypes: closure_8 } = ParticipantTypes);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/video_calls/native/components/useShouldForcePipOrientation.tsx");

export const useShouldForcePipOrientation = function useShouldForcePipOrientation(channel) {
  let activityLockOrientation;
  let focusedEmbeddedActivityParticipant;
  channel = channel.channel;
  const tmp = importDefault(10543)(channel.id);
  const items = [_isNativeReflectConstruct, id];
  const stateFromStores = channel(566).useStateFromStores(items, () => {
    const participant = outer1_4.getParticipant(channel.id, outer1_5.getId());
    let tmp2 = null;
    if (null != participant) {
      tmp2 = null;
      if (participant.type === outer1_8.USER) {
        tmp2 = null;
        if (null != participant.streamId) {
          tmp2 = participant;
        }
      }
    }
    return tmp2;
  });
  let obj = channel(566);
  const items1 = [_createForOfIteratorHelperLoose, _isNativeReflectConstruct];
  const stateFromStoresObject = channel(566).useStateFromStoresObject(items1, () => {
    const currentEmbeddedActivity = outer1_3.getCurrentEmbeddedActivity();
    const selectedParticipant = outer1_4.getSelectedParticipant(channel.id);
    let obj = {};
    let applicationId;
    if (null != currentEmbeddedActivity) {
      applicationId = currentEmbeddedActivity.applicationId;
    }
    let tmp4 = null;
    if (null != applicationId) {
      let id;
      if (null != selectedParticipant) {
        id = selectedParticipant.id;
      }
      obj = {};
      ({ applicationId: obj3.applicationId, compositeInstanceId: obj3.instanceId } = currentEmbeddedActivity);
      tmp4 = null;
      if (id === obj2.getEmbeddedActivityParticipantId(obj)) {
        tmp4 = selectedParticipant;
      }
      obj2 = channel(outer1_2[7]);
    }
    obj.focusedEmbeddedActivityParticipant = tmp4;
    let pipOrientationLockStateForApp = null;
    if (null != currentEmbeddedActivity) {
      pipOrientationLockStateForApp = outer1_3.getPipOrientationLockStateForApp(currentEmbeddedActivity.applicationId);
    }
    obj.activityLockOrientation = pipOrientationLockStateForApp;
    return obj;
  });
  ({ focusedEmbeddedActivityParticipant, activityLockOrientation } = stateFromStoresObject);
  let tmp4 = null;
  if (null != tmp) {
    tmp4 = null;
    if (tmp.user.id !== id.getId()) {
      tmp4 = tmp;
    }
  }
  let tmp6 = tmp4;
  if (null != focusedEmbeddedActivityParticipant) {
    tmp6 = focusedEmbeddedActivityParticipant;
  }
  if (null != tmp6) {
    if (callback(tmp6)) {
      if (null == stateFromStores) {
        return channel(8303).OrientationType.LANDSCAPE;
      }
    }
  }
  if (activityLockOrientation === OrientationLockState.LANDSCAPE) {
    let LANDSCAPE = channel(8303).OrientationType.LANDSCAPE;
  } else {
    LANDSCAPE = null;
    if (activityLockOrientation === OrientationLockState.PORTRAIT) {
      LANDSCAPE = channel(8303).OrientationType.PORTRAIT;
    }
  }
};
