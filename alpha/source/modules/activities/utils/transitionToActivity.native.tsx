// Module ID: 9718
// Function ID: 9719
// Name: transitionToActivity
// Dependencies: [9719, 2041, 9392, 9720, 4451, 4684, 9725, 9693, 13266, 5028, 9695, 4794, 9672, 2]
// Exports: default

// Module 9718 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4451 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 9392 */;
import ChannelCallStore from "ChannelCallStore" /* 9719 */;
import ChannelCallConstants from "ChannelCallConstants" /* 9720 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 9725 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2041 */;
import size from "module_2" /* 2 */;

const setVoiceChatDrawerState = ChannelCallStore.setVoiceChatDrawerState;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const VoiceChatDrawerState = ChannelCallConstants.VoiceChatDrawerState;
let result = size.fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, _location) {
  const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    const isModalOpenResult = tmp(4684).isModalOpen(ChannelCallModalDefault);
    let tmp4 = !isModalOpenResult;
    if (!isModalOpenResult) {
      tmp4 = tmp15(9693)(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      tmp15(13266)(embeddedActivityLocationChannelId);
    }
    const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (tmp15(9693)(embeddedActivityLocationChannelId)) {
        const tmp15Result = tmp15(5028);
        ({ applicationId: obj5.applicationId, compositeInstanceId: obj5.instanceId } = selfEmbeddedActivityForLocation);
        const participant = tmp15Result.selectParticipant(embeddedActivityLocationChannelId, tmp(9695).getEmbeddedActivityParticipantId({ applicationId: null, instanceId: null }));
        const obj2 = { applicationId: null, instanceId: null };
        const tmpResult3 = tmp(9695);
        tmp15(4794).hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
        const tmp15Result2 = tmp15(4794);
      } else {
        const result = tmp(9672).updateActivityPanelMode(ActivityPanelModes.PANEL);
        const tmpResult4 = tmp(9672);
      }
    }
    const tmpResult = tmp(4684);
  }
};
