// Module ID: 9027
// Function ID: 9028
// Name: transitionToActivity
// Dependencies: [9028, 2044, 8701, 9029, 4488, 4722, 9034, 9002, 12644, 5067, 9004, 4830, 8981, 2]
// Exports: default

// Module 9027 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4488 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 8701 */;
import ChannelCallStore from "ChannelCallStore" /* 9028 */;
import ChannelCallConstants from "ChannelCallConstants" /* 9029 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 9034 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import size from "module_2" /* 2 */;

const setVoiceChatDrawerState = ChannelCallStore.setVoiceChatDrawerState;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const VoiceChatDrawerState = ChannelCallConstants.VoiceChatDrawerState;
let result = size.fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, _location) {
  const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    const isModalOpenResult = tmp(4722).isModalOpen(ChannelCallModalDefault);
    let tmp4 = !isModalOpenResult;
    if (!isModalOpenResult) {
      tmp4 = tmp15(9002)(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      tmp15(12644)(embeddedActivityLocationChannelId);
    }
    const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (tmp15(9002)(embeddedActivityLocationChannelId)) {
        const tmp15Result = tmp15(5067);
        ({ applicationId: obj5.applicationId, compositeInstanceId: obj5.instanceId } = selfEmbeddedActivityForLocation);
        const participant = tmp15Result.selectParticipant(embeddedActivityLocationChannelId, tmp(9004).getEmbeddedActivityParticipantId({ applicationId: null, instanceId: null }));
        const obj2 = { applicationId: null, instanceId: null };
        const tmpResult3 = tmp(9004);
        tmp15(4830).hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
        const tmp15Result2 = tmp15(4830);
      } else {
        const result = tmp(8981).updateActivityPanelMode(ActivityPanelModes.PANEL);
        const tmpResult4 = tmp(8981);
      }
    }
    const tmpResult = tmp(4722);
  }
};
