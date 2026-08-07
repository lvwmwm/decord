// Module ID: 10584
// Function ID: 10585
// Name: transitionToActivity
// Dependencies: [9673, 1371, 9692, 9674, 3919, 4152, 10585, 10339, 10905, 4495, 10574, 4270, 10547, 2]
// Exports: default

// Module 10584 (transitionToActivity)
import { setVoiceChatDrawerState } from "VoiceChatDrawerState";
import participantFromServer from "participantFromServer";
import { ActivityPanelModes } from "ActivityPanelModes";
import { VoiceChatDrawerState } from "BOX_MODE_ACTIONSHEET_WIDTH";

let result = require("ActivityPanelModes").fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, _location) {
  let obj = require(3919) /* getEmbeddedActivityLocationChannelId */;
  const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    let tmpResult = tmp(4152);
    const isModalOpenResult = tmpResult.isModalOpen(importDefault(10585));
    let tmp4 = !isModalOpenResult;
    if (!isModalOpenResult) {
      tmp4 = tmp15(10339)(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      tmp15(10905)(embeddedActivityLocationChannelId);
    }
    selfEmbeddedActivityForLocation = selfEmbeddedActivityForLocation.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (tmp15(10339)(embeddedActivityLocationChannelId)) {
        let tmp15Result = tmp15(4495);
        tmpResult = tmp(10574);
        obj = { applicationId: null, instanceId: null };
        ({ applicationId: obj5[0], compositeInstanceId: obj5[1] } = selfEmbeddedActivityForLocation);
        const participant = tmp15Result.selectParticipant(embeddedActivityLocationChannelId, tmpResult.getEmbeddedActivityParticipantId(obj));
        tmp15Result = tmp15(4270);
        tmp15Result.hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
      } else {
        const result = tmp(10547).updateActivityPanelMode(ActivityPanelModes.PANEL);
        const tmpResult1 = tmp(10547);
      }
    }
  }
};
