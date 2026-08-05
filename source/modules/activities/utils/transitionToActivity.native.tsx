// Module ID: 10527
// Function ID: 10528
// Name: transitionToActivity
// Dependencies: [9626, 1371, 9645, 9627, 3873, 4106, 10528, 10292, 10842, 4448, 10532, 4223, 10485, 2]
// Exports: default

// Module 10527 (transitionToActivity)
import { setVoiceChatDrawerState } from "VoiceChatDrawerState";
import participantFromServer from "participantFromServer";
import { ActivityPanelModes } from "ActivityPanelModes";
import { VoiceChatDrawerState } from "BOX_MODE_ACTIONSHEET_WIDTH";

let result = require("ActivityPanelModes").fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, _location) {
  let obj = require(3873) /* getEmbeddedActivityLocationChannelId */;
  const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    let tmpResult = tmp(4106);
    const isModalOpenResult = tmpResult.isModalOpen(importDefault(10528));
    let tmp4 = !isModalOpenResult;
    if (!isModalOpenResult) {
      tmp4 = tmp15(10292)(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      tmp15(10842)(embeddedActivityLocationChannelId);
    }
    selfEmbeddedActivityForLocation = selfEmbeddedActivityForLocation.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (tmp15(10292)(embeddedActivityLocationChannelId)) {
        let tmp15Result = tmp15(4448);
        tmpResult = tmp(10532);
        obj = { applicationId: null, instanceId: null };
        ({ applicationId: obj5[0], compositeInstanceId: obj5[1] } = selfEmbeddedActivityForLocation);
        const participant = tmp15Result.selectParticipant(embeddedActivityLocationChannelId, tmpResult.getEmbeddedActivityParticipantId(obj));
        tmp15Result = tmp15(4223);
        tmp15Result.hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
      } else {
        const result = tmp(10485).updateActivityPanelMode(ActivityPanelModes.PANEL);
        const tmpResult1 = tmp(10485);
      }
    }
  }
};
