// Module ID: 10556
// Function ID: 82365
// Name: transitionToActivity
// Dependencies: [10240, 1347, 10256, 10241, 3748, 3981, 10557, 10467, 10844, 4323, 10561, 4098, 10515, 2]
// Exports: default

// Module 10556 (transitionToActivity)
import { setVoiceChatDrawerState } from "resetFocusTimer";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { ActivityPanelModes } from "ActivityPanelModes";
import { VoiceChatDrawerState } from "BOX_MODE_ACTIONSHEET_WIDTH";

let result = require("ActivityPanelModes").fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, _location) {
  let obj = require(3748) /* getEmbeddedActivityLocationChannelId */;
  const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    let tmp4 = !require(3981) /* _createForOfIteratorHelperLoose */.isModalOpen(importDefault(10557));
    if (tmp4) {
      tmp4 = importDefault(10467)(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      importDefault(10844)(embeddedActivityLocationChannelId);
    }
    selfEmbeddedActivityForLocation = selfEmbeddedActivityForLocation.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (importDefault(10467)(embeddedActivityLocationChannelId)) {
        const obj3 = importDefault(4323);
        obj = {};
        ({ applicationId: obj5.applicationId, compositeInstanceId: obj5.instanceId } = selfEmbeddedActivityForLocation);
        const participant = obj3.selectParticipant(embeddedActivityLocationChannelId, require(10561) /* getEmbeddedActivityParticipantId */.getEmbeddedActivityParticipantId(obj));
        const obj4 = require(10561) /* getEmbeddedActivityParticipantId */;
        importDefault(4098).hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
        const obj6 = importDefault(4098);
      } else {
        const result = require(10515) /* _runPrimaryAppCommandOrJoinEmbeddedActivity */.updateActivityPanelMode(ActivityPanelModes.PANEL);
        const obj2 = require(10515) /* _runPrimaryAppCommandOrJoinEmbeddedActivity */;
      }
    }
    const obj7 = require(3981) /* _createForOfIteratorHelperLoose */;
  }
};
