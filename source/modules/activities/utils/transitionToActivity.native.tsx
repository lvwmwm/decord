// Module ID: 8733
// Function ID: 8734
// Name: transitionToActivity
// Dependencies: [8669, 1390, 8703, 8670, 4011, 4229, 8668, 8724, 8734, 8666, 4777, 4342, 8701, 2]
// Exports: default

// Module 8733 (transitionToActivity)
import { setVoiceChatDrawerState } from "VoiceChatDrawerState";
import participantFromServer from "participantFromServer";
import { ActivityPanelModes } from "ActivityPanelModes";
import { VoiceChatDrawerState } from "BOX_MODE_ACTIONSHEET_WIDTH";

let result = require("ActivityPanelModes").fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, _location) {
  let obj = require(4011) /* getEmbeddedActivityLocationChannelId */;
  const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    let tmpResult = tmp(4229);
    const isModalOpenResult = tmpResult.isModalOpen(importDefault(8668));
    let tmp4 = !isModalOpenResult;
    if (!isModalOpenResult) {
      tmp4 = tmp15(8724)(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      tmp15(8734)(embeddedActivityLocationChannelId);
    }
    selfEmbeddedActivityForLocation = selfEmbeddedActivityForLocation.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (tmp15(8724)(embeddedActivityLocationChannelId)) {
        let tmp15Result = tmp15(8666);
        tmpResult = tmp(4777);
        obj = { applicationId: null, instanceId: null };
        ({ applicationId: obj5[0], compositeInstanceId: obj5[1] } = selfEmbeddedActivityForLocation);
        const participant = tmp15Result.selectParticipant(embeddedActivityLocationChannelId, tmpResult.getEmbeddedActivityParticipantId(obj));
        tmp15Result = tmp15(4342);
        tmp15Result.hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
      } else {
        const result = tmp(8701).updateActivityPanelMode(ActivityPanelModes.PANEL);
        const tmpResult1 = tmp(8701);
      }
    }
  }
};
