// Module ID: 10709
// Function ID: 10710
// Name: transitionToActivity
// Dependencies: [9785, 1390, 9805, 9786, 3979, 4199, 10710, 10452, 11030, 4537, 10699, 4312, 10672, 2]
// Exports: default

// Module 10709 (transitionToActivity)
import { setVoiceChatDrawerState } from "VoiceChatDrawerState";
import participantFromServer from "participantFromServer";
import { ActivityPanelModes } from "ActivityPanelModes";
import { VoiceChatDrawerState } from "BOX_MODE_ACTIONSHEET_WIDTH";

let result = require("ActivityPanelModes").fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, _location) {
  let obj = require(3979) /* getEmbeddedActivityLocationChannelId */;
  const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    let tmpResult = tmp(4199);
    const isModalOpenResult = tmpResult.isModalOpen(importDefault(10710));
    let tmp4 = !isModalOpenResult;
    if (!isModalOpenResult) {
      tmp4 = tmp15(10452)(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      tmp15(11030)(embeddedActivityLocationChannelId);
    }
    selfEmbeddedActivityForLocation = selfEmbeddedActivityForLocation.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (tmp15(10452)(embeddedActivityLocationChannelId)) {
        let tmp15Result = tmp15(4537);
        tmpResult = tmp(10699);
        obj = { applicationId: null, instanceId: null };
        ({ applicationId: obj5[0], compositeInstanceId: obj5[1] } = selfEmbeddedActivityForLocation);
        const participant = tmp15Result.selectParticipant(embeddedActivityLocationChannelId, tmpResult.getEmbeddedActivityParticipantId(obj));
        tmp15Result = tmp15(4312);
        tmp15Result.hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
      } else {
        const result = tmp(10672).updateActivityPanelMode(ActivityPanelModes.PANEL);
        const tmpResult1 = tmp(10672);
      }
    }
  }
};
