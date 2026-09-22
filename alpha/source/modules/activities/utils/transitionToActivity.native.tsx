// Module ID: 9645
// Function ID: 9646
// Name: transitionToActivity
// Dependencies: [9646, 2041, 9321, 9647, 4385, 4614, 9652, 9620, 13184, 4958, 9622, 4724, 9599, 2]
// Exports: default

// Module 9645 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4385 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 9321 */;
import ChannelCallStore from "ChannelCallStore" /* 9646 */;
import ChannelCallConstants from "ChannelCallConstants" /* 9647 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 9652 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2041 */;
import size from "module_2" /* 2 */;

const setVoiceChatDrawerState = ChannelCallStore.setVoiceChatDrawerState;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const VoiceChatDrawerState = ChannelCallConstants.VoiceChatDrawerState;
let result = size.fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, _location) {
  const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    const isModalOpenResult = tmp(4614).isModalOpen(ChannelCallModalDefault);
    let tmp4 = !isModalOpenResult;
    if (!isModalOpenResult) {
      tmp4 = tmp15(9620)(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      tmp15(13184)(embeddedActivityLocationChannelId);
    }
    const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (tmp15(9620)(embeddedActivityLocationChannelId)) {
        const tmp15Result = tmp15(4958);
        ({ applicationId: obj5.applicationId, compositeInstanceId: obj5.instanceId } = selfEmbeddedActivityForLocation);
        const participant = tmp15Result.selectParticipant(embeddedActivityLocationChannelId, tmp(9622).getEmbeddedActivityParticipantId({ applicationId: null, instanceId: null }));
        const obj2 = { applicationId: null, instanceId: null };
        const tmpResult3 = tmp(9622);
        tmp15(4724).hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
        const tmp15Result2 = tmp15(4724);
      } else {
        const result = tmp(9599).updateActivityPanelMode(ActivityPanelModes.PANEL);
        const tmpResult4 = tmp(9599);
      }
    }
    const tmpResult = tmp(4614);
  }
};
