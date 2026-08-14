// Module ID: 10641
// Function ID: 10642
// Name: transitionToActivity
// Dependencies: [9800, 1390, 9820, 9801, 3979, 4197, 10642, 10380, 10962, 4570, 10631, 4310, 10604, 2]
// Exports: default

// Module 10641 (transitionToActivity)
import { setVoiceChatDrawerState } from "VoiceChatDrawerState";
import participantFromServer from "participantFromServer";
import { ActivityPanelModes } from "ActivityPanelModes";
import { VoiceChatDrawerState } from "BOX_MODE_ACTIONSHEET_WIDTH";

let result = require("ActivityPanelModes").fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, _location) {
  let obj = require(3979) /* getEmbeddedActivityLocationChannelId */;
  const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    let tmpResult = tmp(4197);
    const isModalOpenResult = tmpResult.isModalOpen(importDefault(10642));
    let tmp4 = !isModalOpenResult;
    if (!isModalOpenResult) {
      tmp4 = tmp15(10380)(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      tmp15(10962)(embeddedActivityLocationChannelId);
    }
    selfEmbeddedActivityForLocation = selfEmbeddedActivityForLocation.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (tmp15(10380)(embeddedActivityLocationChannelId)) {
        let tmp15Result = tmp15(4570);
        tmpResult = tmp(10631);
        obj = { applicationId: null, instanceId: null };
        ({ applicationId: obj5[0], compositeInstanceId: obj5[1] } = selfEmbeddedActivityForLocation);
        const participant = tmp15Result.selectParticipant(embeddedActivityLocationChannelId, tmpResult.getEmbeddedActivityParticipantId(obj));
        tmp15Result = tmp15(4310);
        tmp15Result.hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
      } else {
        const result = tmp(10604).updateActivityPanelMode(ActivityPanelModes.PANEL);
        const tmpResult1 = tmp(10604);
      }
    }
  }
};
