// Module ID: 10443
// Function ID: 80976
// Name: transitionToActivity
// Dependencies: [10173, 1347, 5660, 10174, 3749, 3982, 10444, 10401, 10816, 4324, 10448, 4099, 5668, 2]
// Exports: default

// Module 10443 (transitionToActivity)
import { setVoiceChatDrawerState } from "resetFocusTimer";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { ActivityPanelModes } from "ActivityPanelModes";
import { VoiceChatDrawerState } from "BOX_MODE_ACTIONSHEET_WIDTH";

let result = require("ActivityPanelModes").fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, _location) {
  let obj = require(3749) /* getEmbeddedActivityLocationChannelId */;
  const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    let tmp4 = !require(3982) /* _createForOfIteratorHelperLoose */.isModalOpen(importDefault(10444));
    if (tmp4) {
      tmp4 = importDefault(10401)(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      importDefault(10816)(embeddedActivityLocationChannelId);
    }
    selfEmbeddedActivityForLocation = selfEmbeddedActivityForLocation.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (importDefault(10401)(embeddedActivityLocationChannelId)) {
        const obj3 = importDefault(4324);
        obj = {};
        ({ applicationId: obj5.applicationId, compositeInstanceId: obj5.instanceId } = selfEmbeddedActivityForLocation);
        const participant = obj3.selectParticipant(embeddedActivityLocationChannelId, require(10448) /* getEmbeddedActivityParticipantId */.getEmbeddedActivityParticipantId(obj));
        const obj4 = require(10448) /* getEmbeddedActivityParticipantId */;
        importDefault(4099).hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
        const obj6 = importDefault(4099);
      } else {
        const result = require(5668) /* _runPrimaryAppCommandOrJoinEmbeddedActivity */.updateActivityPanelMode(ActivityPanelModes.PANEL);
        const obj2 = require(5668) /* _runPrimaryAppCommandOrJoinEmbeddedActivity */;
      }
    }
    const obj7 = require(3982) /* _createForOfIteratorHelperLoose */;
  }
};
