// Module ID: 10527
// Function ID: 82173
// Name: transitionToActivity
// Dependencies: [10210, 1347, 10226, 10211, 3748, 3981, 10528, 10438, 10815, 4323, 10532, 4098, 10486, 2]
// Exports: default

// Module 10527 (transitionToActivity)
import { setVoiceChatDrawerState } from "resetFocusTimer";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { ActivityPanelModes } from "ActivityPanelModes";
import { VoiceChatDrawerState } from "BOX_MODE_ACTIONSHEET_WIDTH";

let result = require("ActivityPanelModes").fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, _location) {
  let obj = require(3748) /* getEmbeddedActivityLocationChannelId */;
  const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    let tmp4 = !require(3981) /* _createForOfIteratorHelperLoose */.isModalOpen(importDefault(10528));
    if (tmp4) {
      tmp4 = importDefault(10438)(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      importDefault(10815)(embeddedActivityLocationChannelId);
    }
    selfEmbeddedActivityForLocation = selfEmbeddedActivityForLocation.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (importDefault(10438)(embeddedActivityLocationChannelId)) {
        const obj3 = importDefault(4323);
        obj = {};
        ({ applicationId: obj5.applicationId, compositeInstanceId: obj5.instanceId } = selfEmbeddedActivityForLocation);
        const participant = obj3.selectParticipant(embeddedActivityLocationChannelId, require(10532) /* getEmbeddedActivityParticipantId */.getEmbeddedActivityParticipantId(obj));
        const obj4 = require(10532) /* getEmbeddedActivityParticipantId */;
        importDefault(4098).hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
        const obj6 = importDefault(4098);
      } else {
        const result = require(10486) /* _runPrimaryAppCommandOrJoinEmbeddedActivity */.updateActivityPanelMode(ActivityPanelModes.PANEL);
        const obj2 = require(10486) /* _runPrimaryAppCommandOrJoinEmbeddedActivity */;
      }
    }
    const obj7 = require(3981) /* _createForOfIteratorHelperLoose */;
  }
};
