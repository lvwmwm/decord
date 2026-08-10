// Module ID: 10651
// Function ID: 10652
// Name: transitionToActivity
// Dependencies: [9739, 1371, 9759, 9740, 3919, 4158, 10652, 10406, 10972, 4497, 10641, 4271, 10614, 2]
// Exports: default

// Module 10651 (transitionToActivity)
import { setVoiceChatDrawerState } from "VoiceChatDrawerState";
import participantFromServer from "participantFromServer";
import { ActivityPanelModes } from "ActivityPanelModes";
import { VoiceChatDrawerState } from "BOX_MODE_ACTIONSHEET_WIDTH";

let result = require("ActivityPanelModes").fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, _location) {
  let obj = require(3919) /* getEmbeddedActivityLocationChannelId */;
  const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    let tmpResult = tmp(4158);
    const isModalOpenResult = tmpResult.isModalOpen(importDefault(10652));
    let tmp4 = !isModalOpenResult;
    if (!isModalOpenResult) {
      tmp4 = tmp15(10406)(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      tmp15(10972)(embeddedActivityLocationChannelId);
    }
    selfEmbeddedActivityForLocation = selfEmbeddedActivityForLocation.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (tmp15(10406)(embeddedActivityLocationChannelId)) {
        let tmp15Result = tmp15(4497);
        tmpResult = tmp(10641);
        obj = { applicationId: null, instanceId: null };
        ({ applicationId: obj5[0], compositeInstanceId: obj5[1] } = selfEmbeddedActivityForLocation);
        const participant = tmp15Result.selectParticipant(embeddedActivityLocationChannelId, tmpResult.getEmbeddedActivityParticipantId(obj));
        tmp15Result = tmp15(4271);
        tmp15Result.hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
      } else {
        const result = tmp(10614).updateActivityPanelMode(ActivityPanelModes.PANEL);
        const tmpResult1 = tmp(10614);
      }
    }
  }
};
