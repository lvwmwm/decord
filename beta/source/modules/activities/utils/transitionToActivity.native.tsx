// Module ID: 9635
// Function ID: 9636
// Name: transitionToActivity
// Dependencies: [9636, 2044, 9313, 9637, 4389, 4616, 9642, 9610, 13179, 4959, 9612, 4725, 9589, 2]
// Exports: default

// Module 9635 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4389 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 9313 */;
import ChannelCallStore from "ChannelCallStore" /* 9636 */;
import ChannelCallConstants from "ChannelCallConstants" /* 9637 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 9642 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import size from "module_2" /* 2 */;

const setVoiceChatDrawerState = ChannelCallStore.setVoiceChatDrawerState;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const VoiceChatDrawerState = ChannelCallConstants.VoiceChatDrawerState;
let result = size.fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, connectedActivityLocation) {
  const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
  if (null != embeddedActivityLocationChannelId) {
    const isModalOpenResult = tmp(4616).isModalOpen(ChannelCallModalDefault);
    let tmp4 = !isModalOpenResult;
    if (!isModalOpenResult) {
      tmp4 = tmp15(9610)(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      tmp15(13179)(embeddedActivityLocationChannelId);
    }
    const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
    if (null != selfEmbeddedActivityForLocation) {
      if (tmp15(9610)(embeddedActivityLocationChannelId)) {
        const tmp15Result = tmp15(4959);
        ({ applicationId: obj5.applicationId, compositeInstanceId: obj5.instanceId } = selfEmbeddedActivityForLocation);
        const participant = tmp15Result.selectParticipant(embeddedActivityLocationChannelId, tmp(9612).getEmbeddedActivityParticipantId({ applicationId: null, instanceId: null }));
        const obj2 = { applicationId: null, instanceId: null };
        const tmpResult3 = tmp(9612);
        tmp15(4725).hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
        const tmp15Result2 = tmp15(4725);
      } else {
        const result = tmp(9589).updateActivityPanelMode(ActivityPanelModes.PANEL);
        const tmpResult4 = tmp(9589);
      }
    }
    const tmpResult = tmp(4616);
  }
};
