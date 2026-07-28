// Module ID: 10482
// Function ID: 81102
// Name: transitionToActivity
// Dependencies: [10214, 1347, 5670, 10215, 3783, 4016, 10483, 10442, 10855, 4358, 10487, 4133, 5678, 2]
// Exports: default

// Module 10482 (transitionToActivity)
import { setVoiceChatDrawerState } from "resetFocusTimer";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { ActivityPanelModes } from "ActivityPanelModes";
import { VoiceChatDrawerState } from "BOX_MODE_ACTIONSHEET_WIDTH";

let result = require("ActivityPanelModes").fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, _location) {
  let obj = require(3783) /* getEmbeddedActivityLocationChannelId */;
  const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    let tmp4 = !require(4016) /* _createForOfIteratorHelperLoose */.isModalOpen(importDefault(10483));
    if (tmp4) {
      tmp4 = importDefault(10442)(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      importDefault(10855)(embeddedActivityLocationChannelId);
    }
    selfEmbeddedActivityForLocation = selfEmbeddedActivityForLocation.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (importDefault(10442)(embeddedActivityLocationChannelId)) {
        const obj3 = importDefault(4358);
        obj = {};
        ({ applicationId: obj5.applicationId, compositeInstanceId: obj5.instanceId } = selfEmbeddedActivityForLocation);
        const participant = obj3.selectParticipant(embeddedActivityLocationChannelId, require(10487) /* getEmbeddedActivityParticipantId */.getEmbeddedActivityParticipantId(obj));
        const obj4 = require(10487) /* getEmbeddedActivityParticipantId */;
        importDefault(4133).hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
        const obj6 = importDefault(4133);
      } else {
        const result = require(5678) /* _runPrimaryAppCommandOrJoinEmbeddedActivity */.updateActivityPanelMode(ActivityPanelModes.PANEL);
        const obj2 = require(5678) /* _runPrimaryAppCommandOrJoinEmbeddedActivity */;
      }
    }
    const obj7 = require(4016) /* _createForOfIteratorHelperLoose */;
  }
};
