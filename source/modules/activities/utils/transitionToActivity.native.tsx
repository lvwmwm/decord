// Module ID: 10656
// Function ID: 10657
// Name: transitionToActivity
// Dependencies: [9744, 1390, 9764, 9745, 3938, 4158, 10657, 10411, 10977, 4497, 10646, 4271, 10619, 2]
// Exports: default

// Module 10656 (transitionToActivity)
import { setVoiceChatDrawerState } from "VoiceChatDrawerState";
import participantFromServer from "participantFromServer";
import { ActivityPanelModes } from "ActivityPanelModes";
import { VoiceChatDrawerState } from "BOX_MODE_ACTIONSHEET_WIDTH";

let result = require("ActivityPanelModes").fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, _location) {
  let obj = require(3938) /* getEmbeddedActivityLocationChannelId */;
  const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    let tmpResult = tmp(4158);
    const isModalOpenResult = tmpResult.isModalOpen(importDefault(10657));
    let tmp4 = !isModalOpenResult;
    if (!isModalOpenResult) {
      tmp4 = tmp15(10411)(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      tmp15(10977)(embeddedActivityLocationChannelId);
    }
    selfEmbeddedActivityForLocation = selfEmbeddedActivityForLocation.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (tmp15(10411)(embeddedActivityLocationChannelId)) {
        let tmp15Result = tmp15(4497);
        tmpResult = tmp(10646);
        obj = { applicationId: null, instanceId: null };
        ({ applicationId: obj5[0], compositeInstanceId: obj5[1] } = selfEmbeddedActivityForLocation);
        const participant = tmp15Result.selectParticipant(embeddedActivityLocationChannelId, tmpResult.getEmbeddedActivityParticipantId(obj));
        tmp15Result = tmp15(4271);
        tmp15Result.hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
      } else {
        const result = tmp(10619).updateActivityPanelMode(ActivityPanelModes.PANEL);
        const tmpResult1 = tmp(10619);
      }
    }
  }
};
