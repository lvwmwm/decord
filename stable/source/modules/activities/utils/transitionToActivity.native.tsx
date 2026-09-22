// Module ID: 9665
// Function ID: 9666
// Name: transitionToActivity
// Dependencies: [9597, 1956, 9635, 9598, 4265, 4494, 9596, 9658, 9666, 4837, 9606, 4603, 9634, 2]
// Exports: default

// Module 9665 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4265 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 9596 */;
import ChannelCallStore from "ChannelCallStore" /* 9597 */;
import ChannelCallConstants from "ChannelCallConstants" /* 9598 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 9635 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import size from "module_2" /* 2 */;

const setVoiceChatDrawerState = ChannelCallStore.setVoiceChatDrawerState;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const VoiceChatDrawerState = ChannelCallConstants.VoiceChatDrawerState;
let result = size.fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, _location) {
  const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    const isModalOpenResult = tmp(4494).isModalOpen(ChannelCallModalDefault);
    let tmp4 = !isModalOpenResult;
    if (!isModalOpenResult) {
      tmp4 = tmp15(9658)(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      tmp15(9666)(embeddedActivityLocationChannelId);
    }
    const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (tmp15(9658)(embeddedActivityLocationChannelId)) {
        const tmp15Result = tmp15(4837);
        ({ applicationId: obj5.applicationId, compositeInstanceId: obj5.instanceId } = selfEmbeddedActivityForLocation);
        const participant = tmp15Result.selectParticipant(embeddedActivityLocationChannelId, tmp(9606).getEmbeddedActivityParticipantId({ applicationId: null, instanceId: null }));
        const obj2 = { applicationId: null, instanceId: null };
        const tmpResult3 = tmp(9606);
        tmp15(4603).hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
        const tmp15Result2 = tmp15(4603);
      } else {
        const result = tmp(9634).updateActivityPanelMode(ActivityPanelModes.PANEL);
        const tmpResult4 = tmp(9634);
      }
    }
    const tmpResult = tmp(4494);
  }
};
