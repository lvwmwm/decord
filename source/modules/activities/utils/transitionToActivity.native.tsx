// Module ID: 9463
// Function ID: 9464
// Name: transitionToActivity
// Dependencies: [9396, 1385, 9434, 9397, 4110, 4335, 9395, 9454, 9464, 4729, 9405, 4448, 9433, 2]
// Exports: default

// Module 9463 (transitionToActivity)
import set from "set" /* 2 */;
import getEmbeddedActivityLocationChannelId from "getEmbeddedActivityLocationChannelId" /* 4110 */;
import ChannelCallCameraPreviewDefault from "ChannelCallCameraPreview" /* 9395 */;
import VoiceChatDrawerState2 from "VoiceChatDrawerState" /* 9396 */;
import BOX_MODE_ACTIONSHEET_WIDTH from "BOX_MODE_ACTIONSHEET_WIDTH" /* 9397 */;
import ActivityPanelModes2 from "ActivityPanelModes" /* 9434 */;
import closure_4 from "participantFromServer" /* 1385 */;

const setVoiceChatDrawerState = VoiceChatDrawerState2.setVoiceChatDrawerState;
const ActivityPanelModes = ActivityPanelModes2.ActivityPanelModes;
const VoiceChatDrawerState = BOX_MODE_ACTIONSHEET_WIDTH.VoiceChatDrawerState;
let result = set.fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, _location) {
  let obj = getEmbeddedActivityLocationChannelId;
  const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    let tmpResult = tmp(4335);
    const isModalOpenResult = tmpResult.isModalOpen(ChannelCallCameraPreviewDefault);
    let tmp4 = !isModalOpenResult;
    if (!isModalOpenResult) {
      tmp4 = tmp15(9454)(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      tmp15(9464)(embeddedActivityLocationChannelId);
    }
    selfEmbeddedActivityForLocation = selfEmbeddedActivityForLocation.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (tmp15(9454)(embeddedActivityLocationChannelId)) {
        let tmp15Result = tmp15(4729);
        tmpResult = tmp(9405);
        obj = { applicationId: null, instanceId: null };
        ({ applicationId: obj5[0], compositeInstanceId: obj5[1] } = selfEmbeddedActivityForLocation);
        const participant = tmp15Result.selectParticipant(embeddedActivityLocationChannelId, tmpResult.getEmbeddedActivityParticipantId(obj));
        tmp15Result = tmp15(4448);
        tmp15Result.hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
      } else {
        const result = tmp(9433).updateActivityPanelMode(ActivityPanelModes.PANEL);
        const tmpResult1 = tmp(9433);
      }
    }
  }
};
