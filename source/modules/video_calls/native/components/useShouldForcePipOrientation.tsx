// Module ID: 10532
// Function ID: 82307
// Name: useShouldForcePipOrientation
// Dependencies: []
// Exports: useShouldForcePipOrientation

// Module 10532 (useShouldForcePipOrientation)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const OrientationLockState = arg1(dependencyMap[3]).OrientationLockState;
({ isStreamParticipant: closure_7, ParticipantTypes: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/video_calls/native/components/useShouldForcePipOrientation.tsx");

export const useShouldForcePipOrientation = function useShouldForcePipOrientation(channel) {
  let activityLockOrientation;
  let focusedEmbeddedActivityParticipant;
  channel = channel.channel;
  const arg1 = channel;
  const tmp = importDefault(dependencyMap[5])(channel.id);
  const items = [closure_4, id];
  const stateFromStores = arg1(dependencyMap[6]).useStateFromStores(items, () => {
    const participant = store2.getParticipant(channel.id, id.getId());
    let tmp2 = null;
    if (null != participant) {
      tmp2 = null;
      if (participant.type === constants.USER) {
        tmp2 = null;
        if (null != participant.streamId) {
          tmp2 = participant;
        }
      }
    }
    return tmp2;
  });
  const obj = arg1(dependencyMap[6]);
  const items1 = [closure_3, closure_4];
  const stateFromStoresObject = arg1(dependencyMap[6]).useStateFromStoresObject(items1, () => {
    const currentEmbeddedActivity = store.getCurrentEmbeddedActivity();
    const selectedParticipant = store2.getSelectedParticipant(channel.id);
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
      const obj2 = channel(closure_2[7]);
    }
    obj.focusedEmbeddedActivityParticipant = tmp4;
    let pipOrientationLockStateForApp = null;
    if (null != currentEmbeddedActivity) {
      pipOrientationLockStateForApp = store.getPipOrientationLockStateForApp(currentEmbeddedActivity.applicationId);
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
        return arg1(dependencyMap[8]).OrientationType.LANDSCAPE;
      }
    }
  }
  if (activityLockOrientation === OrientationLockState.LANDSCAPE) {
    let LANDSCAPE = arg1(dependencyMap[8]).OrientationType.LANDSCAPE;
  } else {
    LANDSCAPE = null;
    if (activityLockOrientation === OrientationLockState.PORTRAIT) {
      LANDSCAPE = arg1(dependencyMap[8]).OrientationType.PORTRAIT;
    }
  }
};
