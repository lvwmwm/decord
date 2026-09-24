// Module ID: 9667
// Function ID: 9668
// Name: transitionToActivity
// Dependencies: [9668, 2044, 9345, 9669, 4421, 4648, 9674, 9642, 13215, 4991, 9644, 4757, 9621, 2]
// Exports: default

// Module 9667 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4421 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 9345 */;
import ChannelCallStore from "ChannelCallStore" /* 9668 */;
import ChannelCallConstants from "ChannelCallConstants" /* 9669 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 9674 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import size from "module_2" /* 2 */;

const setVoiceChatDrawerState = ChannelCallStore.setVoiceChatDrawerState;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const VoiceChatDrawerState = ChannelCallConstants.VoiceChatDrawerState;
let result = size.fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, connectedActivityLocation) {
  const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
  if (null != embeddedActivityLocationChannelId) {
    const isModalOpenResult = tmp(4648).isModalOpen(ChannelCallModalDefault);
    let tmp4 = !isModalOpenResult;
    if (!isModalOpenResult) {
      tmp4 = tmp15(9642)(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      tmp15(13215)(embeddedActivityLocationChannelId);
    }
    const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
    if (null != selfEmbeddedActivityForLocation) {
      if (tmp15(9642)(embeddedActivityLocationChannelId)) {
        const tmp15Result = tmp15(4991);
        ({ applicationId: obj5.applicationId, compositeInstanceId: obj5.instanceId } = selfEmbeddedActivityForLocation);
        const participant = tmp15Result.selectParticipant(embeddedActivityLocationChannelId, tmp(9644).getEmbeddedActivityParticipantId({ applicationId: null, instanceId: null }));
        const obj2 = { applicationId: null, instanceId: null };
        const tmpResult3 = tmp(9644);
        tmp15(4757).hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
        const tmp15Result2 = tmp15(4757);
      } else {
        const result = tmp(9621).updateActivityPanelMode(ActivityPanelModes.PANEL);
        const tmpResult4 = tmp(9621);
      }
    }
    const tmpResult = tmp(4648);
  }
};
