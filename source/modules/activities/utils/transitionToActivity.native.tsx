// Module ID: 10506
// Function ID: 10507
// Name: transitionToActivity
// Dependencies: [10235, 1371, 5688, 10236, 3807, 4040, 10507, 10466, 10879, 4383, 10511, 4157, 5696, 2]
// Exports: default

// Module 10506 (transitionToActivity)
import { setVoiceChatDrawerState } from "VoiceChatDrawerState";
import participantFromServer from "participantFromServer";
import { ActivityPanelModes } from "ActivityPanelModes";
import { VoiceChatDrawerState } from "BOX_MODE_ACTIONSHEET_WIDTH";

let result = require("ActivityPanelModes").fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, _location) {
  let obj = require(3807) /* getEmbeddedActivityLocationChannelId */;
  const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    let tmpResult = tmp(4040);
    const isModalOpenResult = tmpResult.isModalOpen(importDefault(10507));
    let tmp4 = !isModalOpenResult;
    if (!isModalOpenResult) {
      tmp4 = tmp15(10466)(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      tmp15(10879)(embeddedActivityLocationChannelId);
    }
    selfEmbeddedActivityForLocation = selfEmbeddedActivityForLocation.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (tmp15(10466)(embeddedActivityLocationChannelId)) {
        let tmp15Result = tmp15(4383);
        tmpResult = tmp(10511);
        obj = { applicationId: null, instanceId: null };
        ({ applicationId: obj5[0], compositeInstanceId: obj5[1] } = selfEmbeddedActivityForLocation);
        const participant = tmp15Result.selectParticipant(embeddedActivityLocationChannelId, tmpResult.getEmbeddedActivityParticipantId(obj));
        tmp15Result = tmp15(4157);
        tmp15Result.hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
      } else {
        const result = tmp(5696).updateActivityPanelMode(ActivityPanelModes.PANEL);
        const tmpResult1 = tmp(5696);
      }
    }
  }
};
