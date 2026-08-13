// Module ID: 10625
// Function ID: 10626
// Name: transitionToActivity
// Dependencies: [9789, 1390, 9809, 9790, 3979, 4197, 10626, 10366, 10946, 4538, 10615, 4310, 10588, 2]
// Exports: default

// Module 10625 (transitionToActivity)
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
    const isModalOpenResult = tmpResult.isModalOpen(importDefault(10626));
    let tmp4 = !isModalOpenResult;
    if (!isModalOpenResult) {
      tmp4 = tmp15(10366)(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      tmp15(10946)(embeddedActivityLocationChannelId);
    }
    selfEmbeddedActivityForLocation = selfEmbeddedActivityForLocation.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (tmp15(10366)(embeddedActivityLocationChannelId)) {
        let tmp15Result = tmp15(4538);
        tmpResult = tmp(10615);
        obj = { applicationId: null, instanceId: null };
        ({ applicationId: obj5[0], compositeInstanceId: obj5[1] } = selfEmbeddedActivityForLocation);
        const participant = tmp15Result.selectParticipant(embeddedActivityLocationChannelId, tmpResult.getEmbeddedActivityParticipantId(obj));
        tmp15Result = tmp15(4310);
        tmp15Result.hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
      } else {
        const result = tmp(10588).updateActivityPanelMode(ActivityPanelModes.PANEL);
        const tmpResult1 = tmp(10588);
      }
    }
  }
};
