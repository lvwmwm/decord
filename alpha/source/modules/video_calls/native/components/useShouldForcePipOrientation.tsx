// Module ID: 11905
// Function ID: 11906
// Name: useShouldForcePipOrientation
// Dependencies: [4989, 6978, 502, 5815, 11906, 504, 6986, 2148, 9044, 2]
// Exports: useShouldForcePipOrientation

// Module 11905 (useShouldForcePipOrientation)
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6986 */;
import usePipVideoOrStreamDefault from "usePipVideoOrStream" /* 11906 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4989 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6978 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import CallConstants from "CallConstants" /* 5815 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
({ isStreamParticipant: metroRequire, ParticipantTypes: metroImportDefault } = CallConstants);
const result = size.fileFinishedImporting("modules/video_calls/native/components/useShouldForcePipOrientation.tsx");

export function useShouldForcePipOrientation(channel) {
  let LANDSCAPE1;
  let activityLockOrientation;
  let focusedEmbeddedActivityParticipant;
  channel = channel.channel;
  let tmp2 = usePipVideoOrStreamDefault(channel.id);
  let obj = channel(504);
  const items = [ChannelRTCStore, ];
  let obj2 = AuthenticationStore;
  items[1] = AuthenticationStore;
  const stateFromStores = obj.useStateFromStores(items, () => {
    const participant = ChannelRTCStore.getParticipant(channel.id, AuthenticationStore.getId());
    let tmp2 = null;
    if (null != participant) {
      tmp2 = null;
      if (participant.type === metroImportDefault.USER) {
        tmp2 = null;
        if (null != participant.streamId) {
          tmp2 = participant;
        }
      }
    }
    return tmp2;
  });
  const obj3 = channel(504);
  const items1 = [EmbeddedActivitiesStore, ChannelRTCStore];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items1, () => {
    let pipOrientationLockStateForApp;
    const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
    const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channel.id);
    let applicationId;
    const obj = EmbeddedActivitiesStore;
    if (currentEmbeddedActivity != null) {
      applicationId = currentEmbeddedActivity.applicationId;
    }
    let tmp4 = null;
    if (null != applicationId) {
      let id;
      if (selectedParticipant != null) {
        id = selectedParticipant.id;
      }
      const obj4 = { applicationId: null, instanceId: null };
      ({ applicationId: obj3.applicationId, compositeInstanceId: obj3.instanceId } = currentEmbeddedActivity);
      tmp4 = null;
      const obj2 = ChannelRTCParticipants;
      if (id === obj2.getEmbeddedActivityParticipantId(obj4)) {
        tmp4 = selectedParticipant;
      }
    }
    const obj6 = { focusedEmbeddedActivityParticipant: tmp4, activityLockOrientation: pipOrientationLockStateForApp };
    pipOrientationLockStateForApp = null;
    if (null != currentEmbeddedActivity) {
      pipOrientationLockStateForApp = obj.getPipOrientationLockStateForApp(currentEmbeddedActivity.applicationId);
    }
    return obj6;
  });
  ({ focusedEmbeddedActivityParticipant, activityLockOrientation } = stateFromStoresObject);
  let tmp6 = null;
  if (null != tmp2) {
    tmp6 = null;
    if (tmp2.user.id !== obj2.getId()) {
      tmp6 = tmp2;
    }
  }
  if (focusedEmbeddedActivityParticipant == null) {
    focusedEmbeddedActivityParticipant = tmp6;
  }
  if (null != focusedEmbeddedActivityParticipant) {
    if (closure_6(focusedEmbeddedActivityParticipant)) {
      let LANDSCAPE;
      if (null == stateFromStores) {
        LANDSCAPE = tmp3(9044).OrientationType.LANDSCAPE;
      }
      return LANDSCAPE;
    }
  }
  if (activityLockOrientation === channel(2148).EmbeddedActivityOrientationLockState.LANDSCAPE) {
    LANDSCAPE1 = tmp3(9044).OrientationType.LANDSCAPE;
  } else {
    LANDSCAPE1 = null;
    if (activityLockOrientation === channel(2148).EmbeddedActivityOrientationLockState.PORTRAIT) {
      LANDSCAPE1 = tmp3(9044).OrientationType.PORTRAIT;
    }
  }
  LANDSCAPE = LANDSCAPE1;
}
