// Module ID: 9671
// Function ID: 9672
// Name: transitionToActivity
// Dependencies: [9672, 2040, 9347, 9673, 4417, 4645, 9678, 9646, 13209, 4989, 9648, 4755, 9625, 2]
// Exports: default

// Module 9671 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4417 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 9347 */;
import ChannelCallStore from "ChannelCallStore" /* 9672 */;
import ChannelCallConstants from "ChannelCallConstants" /* 9673 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 9678 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2040 */;
import size from "module_2" /* 2 */;

const setVoiceChatDrawerState = ChannelCallStore.setVoiceChatDrawerState;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const VoiceChatDrawerState = ChannelCallConstants.VoiceChatDrawerState;
let result = size.fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, _location) {
  const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    const isModalOpenResult = tmp(4645).isModalOpen(ChannelCallModalDefault);
    let tmp4 = !isModalOpenResult;
    if (!isModalOpenResult) {
      tmp4 = tmp15(9646)(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      tmp15(13209)(embeddedActivityLocationChannelId);
    }
    const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (tmp15(9646)(embeddedActivityLocationChannelId)) {
        const tmp15Result = tmp15(4989);
        ({ applicationId: obj5.applicationId, compositeInstanceId: obj5.instanceId } = selfEmbeddedActivityForLocation);
        const participant = tmp15Result.selectParticipant(embeddedActivityLocationChannelId, tmp(9648).getEmbeddedActivityParticipantId({ applicationId: null, instanceId: null }));
        const obj2 = { applicationId: null, instanceId: null };
        const tmpResult3 = tmp(9648);
        tmp15(4755).hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
        const tmp15Result2 = tmp15(4755);
      } else {
        const result = tmp(9625).updateActivityPanelMode(ActivityPanelModes.PANEL);
        const tmpResult4 = tmp(9625);
      }
    }
    const tmpResult = tmp(4645);
  }
};
